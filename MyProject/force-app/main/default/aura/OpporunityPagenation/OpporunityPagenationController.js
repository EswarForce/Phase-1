({
 doInit: function (component, event, helper) {
  component.set('v.columns', [
   {label: 'Name', fieldName: 'Name', type: 'text'},
   {label: 'Closed Date', fieldName: 'CloseDate', type: 'date'},
   {label: 'Stage', fieldName: 'StageName', type: 'text'}
  ]);
 },
 searchOppty : function(component) {
  var action = component.get('c.searchOpportunities');
        action.setParams({
            clsDate : new Date(component.get("v.oppty.CloseDate")).toJSON(),
            amt : component.get("v.oppty.Amount")
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if ( state === 'SUCCESS' && component.isValid() ) {
                var pageSize = component.get("v.pageSize");
                component.set('v.opportunityList', response.getReturnValue());
                component.set("v.totalRecords", component.get("v.opportunityList").length);
                component.set("v.startPage", 0);                
                component.set("v.endPage", pageSize - 1);
                var PagList = [];
                for ( var i=0; i< pageSize; i++ ) {
                    if ( component.get("v.opportunityList").length> i )
                        PagList.push(response.getReturnValue()[i]);    
                }
                component.set('v.PaginationList', PagList);
            } else {
                alert('ERROR');
            }
        });
        $A.enqueueAction(action);
 },
 next: function (component, event, helper) {
  var sObjectList = component.get("v.opportunityList");
        var end = component.get("v.endPage");
        var start = component.get("v.startPage");
        var pageSize = component.get("v.pageSize");
        var PagList = [];
        var counter = 0;
        for ( var i = end + 1; i < end + pageSize + 1; i++ ) {
            if ( sObjectList.length > i ) {
                PagList.push(sObjectList[i]);
            }
            counter ++ ;
        }
        start = start + counter;
        end = end + counter;
        component.set("v.startPage", start);
        component.set("v.endPage", end);
        component.set('v.PaginationList', PagList);
 },
 previous: function (component, event, helper) {
  var sObjectList = component.get("v.opportunityList");
        var end = component.get("v.endPage");
        var start = component.get("v.startPage");
        var pageSize = component.get("v.pageSize");
        var PagList = [];
        var counter = 0;
        for ( var i= start-pageSize; i < start ; i++ ) {
            if ( i > -1 ) {
                PagList.push(sObjectList[i]);
                counter ++;
            } else {
                start++;
            }
        }
        start = start - counter;
        end = end - counter;
        component.set("v.startPage", start);
        component.set("v.endPage", end);
        component.set('v.PaginationList', PagList);
 }
})