sap.ui.define([
	"sap/m/Link",
	"sap/m/Text",
	"sap/ui/core/HTML"
], function (Link, HTML, Text) {
	"use strict";

	new Link({
		text: "Zu Google",
		href: "https://google.de/"
	}).placeAt("content");

	new HTML({
		content: "<br/><hr/><br/>"
	}).placeAt("content");

	new Text({
		text: "Hallo",
	}).placeAt("content");
});