sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
	"use strict";
	return Controller.extend("hts.itq2017.walkthrough.controller.App", {
		showButtonPress: function() {
			MessageToast.show("ALARM!");
		},
		alertButtonPress: function() {
			MessageBox.alert("AAL!");
		},
		lgbtqButtonPress: function() {
			for(var x = 0; x < 4; x++) {
				var l = x*430;
				for(var y = 0; y < 3; y++) {
					var t = y*280;
					window.open("https://i.giphy.com/media/8h34szbPdTrvq/giphy.webp", "_blank", "height=320,width=480,left="+l+",top="+t+",menubar=0,status=0,titlebar=0");
				}
			}
		}
	});
});