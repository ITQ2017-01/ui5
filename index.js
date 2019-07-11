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