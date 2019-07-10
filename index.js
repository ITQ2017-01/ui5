sap.ui.define([
	"sap/m/Link",
	"sap/m/Text",
	"sap/ui/core/HTML"
], function (Link, Text, HTML) {
	"use strict";

	new Link({
		text: "Zu Google",
		href: "https://google.de/"
	}).placeAt("content");

	new Text({
		text: "Hallo",
	}).placeAt("content");

	new HTML({
		content: "<br/>test<br/>test<br/>test"
	}).placeAt("content");
});