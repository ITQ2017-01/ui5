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
		
		/* Event: Hello-Button */
		onHello: function() {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			MessageToast.show(sMsg);
		},

		/* Event: Alert-Button */
		onAlert: function() {
			MessageBox.alert("ALARM, ALARM!", {
				title: "ACHTUNG"
			});
		}
	});
});