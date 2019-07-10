sap.ui.define([
	"sap/m/Link"
], function (Link) {
	"use strict";

	new Link({
		text: "Zu Google",
		href: "https://google.de/"
	}).placeAt("content");

});