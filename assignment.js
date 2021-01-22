/*-------->>>>>>>         kilometerToMeter      <<<<<<<<-------------------*/

function kilometerToMeter(num){
    if (num <= 0)
    return "Please Enter The Valid Value";
    else
    var meterValue = num * 1000;
    return meterValue;}

console.log(kilometerToMeter(23));




/*---------->>>>>>>>       budgetCalculator     <<<<<<<<<<------------------*/


function budgetCalculator(element1, element2, element3){
        
    element1 = element1*50;
    element2 = element2*100;
    element3 = element3*500;

    var total = element1+element2+element3;
    return total;  }
 
console.log(budgetCalculator(23,5,5));


/*---------->>>>>>>         hotelCost           <<<<<<<<<<<<<----------------*/


function hotelCost(days)

{

    if(days > 20)
    {
        days = days-20;
        rent = ((days*50)+1800);
    }
    else if(days <= 20 && days >= 11 )
    {
        days = days-10;
        rent = ((days*80)+1000);
    }
    else
    {
        rent = days*100;
    }
    return rent;
}
console.log(hotelCost(20));


/*----------->>>>>>>         megaFriend           <<<<<<<<<<<<<<---------------*/


function megaFriend(strArray){
    
    var maxLength = strArray[0].length;

    strArray.map(v => maxLength = Math.max(maxLength, v.length ));
    result = strArray.filter(v => v.length == maxLength);
    return result;

}
console.log(megaFriend(['sahub','gsdyfghjkladbkdh','sudsbakdfhaiogtd','usidfsoifds']));