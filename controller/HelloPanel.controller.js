sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
	"use strict";
	return Controller.extend("hts.itq2017.demo.walkthrough.controller.HelloPanel", {
		onHello: function() {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient1 = this.getView().getModel().getProperty("/recipient/given_name");
			var sRecipient2 = this.getView().getModel().getProperty("/recipient/family_name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient1, sRecipient2]);
			MessageToast.show(sMsg);
		},
		onAlert: function() {
				MessageBox.alert("ALARM, ALARM!", {
					title: "ACHTUNG"
				});
		  }
	});
});