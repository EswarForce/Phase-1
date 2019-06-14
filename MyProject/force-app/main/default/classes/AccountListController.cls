public class AccountListController {
    
    @AuraEnabled
    public static List < Account > fetchAccts() {
        return [ SELECT Id, Name, Industry, Type, createddate FROM Account LIMIT 10 ];
    }
    
     @AuraEnabled
    public static DateTime fetchDate() {
        return [ SELECT Id, Name, Industry, Type, createddate FROM Account LIMIT 1].createddate;
    }
}