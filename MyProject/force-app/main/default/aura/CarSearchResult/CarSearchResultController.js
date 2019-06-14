({
	init : function(component, event, helper) {
		component.set('v.columns', [
            {label: 'Car Name', fieldName: 'Name', type: 'text'},
            {label: 'Image', fieldName: 'Picture__c', type: 'richtextarea'}            
        ]);
        var cartype = component.get("v.cartype");
         console.log('!!!cartype::::'+cartype);
        var action = component.get("c.getCarDetails");
        action.setParams({
            'cartype': cartype
        });
        action.setCallback(this,function(result){
            console.log('!!!data::::'+JSON.stringify(result.getReturnValue()));
            component.set("v.data",result.getReturnValue());
        });
         $A.enqueueAction(action);
	}
})