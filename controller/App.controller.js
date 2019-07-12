sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
	"use strict";
	return Controller.extend("hts.itq2017.walkthrough.controller.App", {
		showButtonPress: function() {
			MessageToast.show("ALARM!");
		},
		alertButtonPress: function() {
			MessageBox.alert("AAL!");
		},
		arminButtonPress: function() {
			for(var i = 0; i < 5; i++) {
				console.error("Error: Dummkopf!");
				console.error("Error: Fehler!");
			}
		}
	});
});