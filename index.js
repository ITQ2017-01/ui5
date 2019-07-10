sap.ui.define([
	"sap/m/Link",
	"sap/ui/core/HTML",
	"sap/m/Text"
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