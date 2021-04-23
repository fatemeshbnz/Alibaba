
describe('Searching', function()
{
	/// <reference types="cypress-xpath" />
	it("Navigation", function()
	{	
		cy.visit('https://www.alibaba.ir/')
		cy.wait(1000)
		cy.xpath('//*[@id="search-panels"]/div[3]/div/div/form/div[5]/button').click()
	})	


})
