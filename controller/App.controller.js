/* Module laden */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, MessageBox, JSONModel, ResourceModel) {
	"use strict";

	/* Controller initialisieren */
	return Controller.extend("hts.itq2017.walkthrough.controller.App", {
		
		/* Hello-Button (MessageToast) */
		onHello: function() {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient1 = this.getView().getModel().getProperty("/recipient/given_name");
			var sRecipient2 = this.getView().getModel().getProperty("/recipient/family_name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient1, sRecipient2]);
			MessageToast.show(sMsg);
		},

		/* Alert-Button (MessageAlert) */
		onAlert: function() {
			MessageBox.alert("ALARM, ALARM!", {
				title: "ACHTUNG"
			});
		}
	});
});