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
		tobiasButtonPress: function() {
			window.open("https://media3.giphy.com/media/8h34szbPdTrvq/giphy.gif", "Let's Go Buy The Quacamole");
		}
	});
});