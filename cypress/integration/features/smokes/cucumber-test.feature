Feature: FINE-123
	#I open the Payment Link.
	#The base elements for the page are shown.

  @TEST_FINE-123 @smoke @automated
  Scenario: Payment Link > Base Design: Title
    Given I open the Payment Link
    When the page is loaded
    Then the following elements are shown on the "Introduction" page:
      | Title | Description | Terms of Engagement | Next Step Button |
