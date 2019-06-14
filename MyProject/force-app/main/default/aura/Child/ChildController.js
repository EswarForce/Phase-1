({
	childComponentEvent : function(component, event, helper) {
		var cmpEvent = component.getEvent("sampleCmpEvent");
        cmpEvent.setParams({
            "message":"call component event"
        });
        cmpEvent.fire();
	}
})