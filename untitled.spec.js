//cy.url().should("contain", "selenium")
describe('Searching', function()
{
	/// <reference types="cypress-xpath" />
	it("Navigation", () =>
	{	
		cy.visit('https://www.alibaba.ir/')
		cy.wait(100)
		cy.get('[for="search_radio_45"]').click()
		cy.get('[placeholder="مبدا"]').click()
		cy.get('ul').contains("تهران").click()
		cy.wait(100)
		cy.get('[placeholder="مقصد"]').click()
		.type("مشهد{enter}")
		cy.get('[data-test="datepickerDay"]').contains('11').click()
		cy.get('[data-test="datepickerDay"]').contains('15').click()
		cy.wait(100)
		cy.get('[data-testid="datapicker-modal-submit-button"]').click()  //submit Date
		 for (let i = 2; i < 6; i++){
			cy.get('[data-test="passengerPickerValueIncrease"]').first().click()
		 }
		
		cy.get('[data-test="search"]').click()
	
		const Cont = cy.get("#domestic-sort").then(($Cont) => {

			for  (let i = 2; i < 100; i++){
				if ($Cont.find(" ابتدا از لیست زیر، بلیط رفت خود را انتخاب نمایید", { timeout: 20000})){  
					cy.scrollTo("bottom")
					cy.get('[class="site-footer__list multipart"]').find('>li').eq(4).trigger('mouseup').click()     /////it doesnt work for "تماس با ما" but it works for fourth item
					//cy.visit('https://www.alibaba.ir/contact-us')	
					return false;

				}
				else {
					
					cy.contains("رفت:").click()
					cy.get('[placeholder="تاریخ رفت"]').click()
					cy.get('[data-test="datepickerGoToday"]').click()
					cy.get('[class="btn-today flashing"]').click({force:true})         //change date to today
					cy.get('[data-testid="datapicker-modal-submit-button"]').click()  //submit Date
					cy.get('[data-test="search"]').click()
				}
			}
			
		})
		 
	})	
	
})
