({
	fireComponentEvent : function(component, event, helper) {
		var cmpevent = component.getEvent("cmpevent");
        cmpevent.setParams({"msg":"Welcome to component event"});
        cmpevent.fire();
	}
})