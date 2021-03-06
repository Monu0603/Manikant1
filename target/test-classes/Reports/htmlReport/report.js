$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/Login.feature");
formatter.feature({
  "line": 1,
  "name": "To validate the login functionality of Addactin app",
  "description": "",
  "id": "to-validate-the-login-functionality-of-addactin-app",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "TO varify login with valid username and password",
  "description": "",
  "id": "to-validate-the-login-functionality-of-addactin-app;to-varify-login-with-valid-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user has to be there in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user should enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user has to click on login page",
  "keyword": "And "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "to-validate-the-login-functionality-of-addactin-app;to-varify-login-with-valid-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8,
      "id": "to-validate-the-login-functionality-of-addactin-app;to-varify-login-with-valid-username-and-password;;1"
    },
    {
      "cells": [
        "singh123456",
        "singh@123456"
      ],
      "line": 9,
      "id": "to-validate-the-login-functionality-of-addactin-app;to-varify-login-with-valid-username-and-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43269500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "TO varify login with valid username and password",
  "description": "",
  "id": "to-validate-the-login-functionality-of-addactin-app;to-varify-login-with-valid-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user has to be there in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user should enter \"singh123456\" and \"singh@123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user has to click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_has_to_be_there_in_login_page()"
});
formatter.result({
  "duration": 39422552000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "singh123456",
      "offset": 19
    },
    {
      "val": "singh@123456",
      "offset": 37
    }
  ],
  "location": "Stepdefinition.user_should_enter_and(String,String)"
});
formatter.result({
  "duration": 465628600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_has_to_click_on_login_page()"
});
formatter.result({
  "duration": 4597604100,
  "status": "passed"
});
formatter.after({
  "duration": 726900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "To validate the search Functionlity with valid data",
  "description": "",
  "id": "to-validate-the-login-functionality-of-addactin-app;to-validate-the-search-functionlity-with-valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User has to be there at login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user has to enter valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and click on login",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user has to select Location",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user has to select\tHotels",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user has to selectno of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user has to select Adult as per Room",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user has to select children per Room",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User has to click on search button",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "to-validate-the-login-functionality-of-addactin-app;to-validate-the-search-functionlity-with-valid-data;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21,
      "id": "to-validate-the-login-functionality-of-addactin-app;to-validate-the-search-functionlity-with-valid-data;;1"
    },
    {
      "cells": [
        "singh123456",
        "singh@123456"
      ],
      "line": 22,
      "id": "to-validate-the-login-functionality-of-addactin-app;to-validate-the-search-functionlity-with-valid-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 292800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "To validate the search Functionlity with valid data",
  "description": "",
  "id": "to-validate-the-login-functionality-of-addactin-app;to-validate-the-search-functionlity-with-valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User has to be there at login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user has to enter valid \"singh123456\" and \"singh@123456\" and click on login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user has to select Location",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user has to select\tHotels",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user has to selectno of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user has to select Adult as per Room",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user has to select children per Room",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User has to click on search button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_has_to_be_there_at_login_page()"
});
formatter.result({
  "duration": 18704558900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "singh123456",
      "offset": 25
    },
    {
      "val": "singh@123456",
      "offset": 43
    }
  ],
  "location": "Stepdefinition.user_has_to_enter_valid_and_and_click_on_login(String,String)"
});
formatter.result({
  "duration": 5214743800,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_has_to_select_Location()"
});
formatter.result({
  "duration": 1859654300,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_has_to_select_Hotels()"
});
formatter.result({
  "duration": 476939700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_has_to_selectno_of_Rooms()"
});
formatter.result({
  "duration": 432998700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_has_to_select_Adult_as_per_Room()"
});
formatter.result({
  "duration": 165643300,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_has_to_select_children_per_Room()"
});
formatter.result({
  "duration": 183630100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_has_to_click_on_search_button()"
});
formatter.result({
  "duration": 1737868400,
  "status": "passed"
});
formatter.after({
  "duration": 296100,
  "status": "passed"
});
});