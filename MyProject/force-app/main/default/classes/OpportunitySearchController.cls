public class OpportunitySearchController {
    
    @auraEnabled
    public static List < Opportunity > searchOpportunities(String clsDate, Double amt) {
        system.debug(clsDate + ' - ' + amt);
        Date closeDate = Date.valueOf(clsDate);
        return [ SELECT Id, Name, CloseDate, StageName FROM Opportunity WHERE CloseDate =: closeDate AND Amount >: amt LIMIT 100 ]; 
    }

}