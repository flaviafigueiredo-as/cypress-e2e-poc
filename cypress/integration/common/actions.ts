import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps';

Given(/^I open the Payment Link$/, () => {
	return true;
});

When('the page is loaded', () => {
	return true;
  })  

Then(/^the following elements are shown on the "([^"]*)" page:$/, (args1, table) => {
	console.log(args1, table);
	return true;
});

