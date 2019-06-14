({
    fetchAccounts : function(component, event, helper) {
       
        component.set('v.mycolumns', [
            {label: 'Account Name', fieldName: 'Name', type: 'text'},
                {label: 'Industry', fieldName: 'Industry', type: 'text'},
                {label: 'Type', fieldName: 'Type', type: 'Text'},
                {label: 'Created date', fieldName: 'Created date', type: 'Datetime'}
            ]);
        var action = component.get("c.fetchAccts");
        action.setParams({
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log('!!!!!returnlist:::'+JSON.stringify(response.getReturnValue()));
                
                component.set("v.acctList", response.getReturnValue());
            }
        });
        var action2 = component.get("c.fetchDate");
        action2.setParams({
        });
        action2.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log('!!!!!returnDate:::'+JSON.stringify(response.getReturnValue()));
                console.log('!!!!date::::'+$A.localizationService.formatDate(response.getReturnValue(), "MMM DD YYYY, hh:mm:ss a"));
                
                
            }
        });
        $A.enqueueAction(action);
        $A.enqueueAction(action2);
    }
})