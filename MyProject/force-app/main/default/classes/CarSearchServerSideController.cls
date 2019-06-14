public class CarSearchServerSideController{
	@AuraEnabled
	public static List<Car_Type__c> getCarTypesOptions() {
		List<Car_Type__c> dbCarTypesList = [select id,name from Car_Type__c];
        System.debug('!!!!dbCarTypesList::::'+dbCarTypesList);
		Map<String, String> options = new Map<String, String>();
		
		for (Car_Type__c echType: dbCarTypesList) {
			options.put(echType.id, echType.name);
		}
		return dbCarTypesList;
	}
}