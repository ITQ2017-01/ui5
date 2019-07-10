sap.ui.define([
	"sap/m/Link",
	"sap/m/Text"
], function (Link, Text) {
	"use strict";

	new Link({
		text: "Zu Google",
		href: "https://google.de/"
	}).placeAt("content");

	new Text({
		text: "Hallo",
	}).placeAt("content");
});