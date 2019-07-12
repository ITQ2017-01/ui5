sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("hts.itq2017.walkthrough.controller.App", {
		alertButtonPress: function() {
			MessageToast.show("ALARM!");
		}
	});
});