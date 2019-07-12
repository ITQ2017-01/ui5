sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
	"use strict";
	return Controller.extend("hts.itq2017.walkthrough.controller.App", {
		alertButtonPress: function() {
			MessageToast.show("ALARM!");
			MessageBox.alert("AAL!");
		}
	});
});