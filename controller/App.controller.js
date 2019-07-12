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
		lgbtqButtonPress: function() {
			var w = window.open("https://i.giphy.com/media/8h34szbPdTrvq/giphy.webp", "_blank", "location=1,height=320,width=480,scrollbars=0,status=1");
			w.document.title = 'LGBTQ';
		}
	});
});