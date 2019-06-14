Trigger CaseTrigger on Case(before update){
    if(Trigger.isBefore && Trigger.isUpdate){
        for(Case echNew : Trigger.new){
            System.debug('!!!!echNew.PTechCaseOwner__c:::::'+echNew.PTechCaseOwner__c);
            System.debug('!!!!trigger.oldMap.get(echNew.id).OwnerId:::::'+trigger.oldMap.get(echNew.id).OwnerId);
            if(echNew.PTechCaseOwner__c != trigger.oldMap.get(echNew.id).OwnerId){
                System.debug('Inside Condition Satify');
                echNew.PTechCaseOwner__c = trigger.oldMap.get(echNew.id).OwnerId;
            }
        }
    }
}