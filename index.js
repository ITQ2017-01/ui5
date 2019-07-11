sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "hts.itq2017.walkthrough.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});
	
	/*new Link({
		text: "Zu Google",
		href: "https://google.de/"
	}).placeAt("content");

	new HTML({
		content: "<hr/>"
	}).placeAt("content");

	new Text({
		text: "Hallo",
	}).placeAt("content");*/
});

function buttonPress() {
	var rand = Math.floor(Math.random()*(5))+1;

	if(rand == 1) {
		console.log("Der SAP-Guru sagt: 'Ja!'");
	} else if(rand == 2) {
		console.log("Der SAP-Guru sagt: 'Wahrscheinlich!'");
	} else if(rand == 3) {
		console.log("Der SAP-Guru sagt: 'Vielleicht!'");
	} else if(rand == 4) {
		console.log("Der SAP-Guru sagt: 'Wahrscheinlich nicht!'");
	} else {
		console.log("Der SAP-Guru sagt: 'Nein!'");
	}
}