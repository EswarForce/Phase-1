public class Car {
    
    @auraEnabled
    public static List<Car__c> getCarDetails(String cartype){
       return [select id,Name,Car_Type__c,Picture__c from Car__c where Car_Type__c =: cartype];
    } 

}