/* update */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";
	return Controller.extend("hts.itq2017.walkthrough.controller.App", {
		onInit: function() {
			var oData = {
				recipient: {
					name: "Hans",
					noten: [1, 2, 2, 3]
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			var i18nModel = new ResourceModel({
				bundleName: "hts.itq2017.walkthrough.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");
		},
		onHello: function() {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			MessageToast.show(sMsg);
		},
		onAlert: function() {
			MessageBox.alert("ALARM, ALARM!", {
				title: "ACHTUNG"
			});
		}
	});
});