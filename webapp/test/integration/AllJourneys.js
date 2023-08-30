// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 STTA_C_SO_SalesOrder_ND in the list
// * All 3 STTA_C_SO_SalesOrder_ND have at least one to_Item

sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./ListJourney",
	"./NavigationJourney"
], function (Opa5, Startup) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "test.com.sap.ze2effldv2odataec1abap.view.",
		autoWait: true
	});
});
