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
		alert("Ja!");
	} else if(rand == 2) {
		alert("Wahrscheinlich!");
	} else if(rand == 3) {
		alert("Vielleicht!");
	} else if(rand == 4) {
		alert("Wahrscheinlich nicht!");
	} else {
		alert("Nein!");
	}
}