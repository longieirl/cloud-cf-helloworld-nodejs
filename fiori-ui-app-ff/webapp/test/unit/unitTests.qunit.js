/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"test/com/sap/ze2effldv2odataec1abap/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});