Feature: FINE-123

	#I open the Payment Link.
	#The base elements for the page are shown.
	#
	@TEST_FINE-123 @smoke @automated //tags for later
	Scenario: Payment Link > Base Design: Title
		When I open the Payment Link
		Then the following elements are shown on the " Payment Link" page:
			| Title | Description | Terms of Engagement | Next Step Button |
