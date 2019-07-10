sap.ui.define([
	"sap/m/Link",
	"sap/m/Text"
], function (Link) {
	"use strict";

	new Link({
		text: "Zu Google",
		href: "https://google.de/"
	}).placeAt("content_1");

}), function(Text) {
	new Text({
		text: "HALLLO",
	}).placeAt("content_2");
};