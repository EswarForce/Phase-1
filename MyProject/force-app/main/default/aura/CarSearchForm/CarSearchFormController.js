({
	init : function(component, event, helper) {
         var optionsList = [];
       var action= component.get('c.getCarTypesOptions');
     
        action.setCallback(this, function(response) {
            if (response.getState() == "SUCCESS") {
                var StoreResponse = response.getReturnValue();
                console.log('!!!StoreResponse::::'+JSON.stringify(StoreResponse));
                component.set("v.options", StoreResponse);
               
            }
        });  
		$A.enqueueAction(action);
	},
    Search : function(component, event, helper) {
        
    }
})