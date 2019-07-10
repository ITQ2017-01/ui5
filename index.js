// new

sap.ui.define([
	"sap/m/Link"
], function (Link) {
	"use strict";

	new Link({
		text: "Zu Google",
		href: "https://google.de/"
	}).placeAt("content_1");
});

sap.ui.define([
	"sap/m/Text"
], function (Text) {
	"use strict";
	
	new Text({
		text: "HALLLO",
	}).placeAt("content_2");
});