/* https://github.com/nwzz/javascript-basic */


/*-------->>>>>>>         kilometerToMeter      <<<<<<<<-------------------*/

function kilometerToMeter(num){
    if (num <= 0)
    return "Please Enter The Valid Value";
    else
    var meterValue = num * 1000;
    return meterValue;}




/*---------->>>>>>>>       budgetCalculator     <<<<<<<<<<------------------*/


    function budgetCalculator(element1, element2, element3)
    {
        
    element1 = element1*50;
    element2 = element2*100;
    element3 = element3*500;

    var total = element1+element2+element3;
    return total;  
    }
 



/*---------->>>>>>>         hotelCost           <<<<<<<<<<<<<----------------*/


    function hotelCost(days)  /*days declare total staying days*/

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
    else if(days <=10 && days >=1)
    {
        rent = days*100;
    }
    else{
        return "invalid input";
    }
    return rent;
}



/*----------->>>>>>>         megaFriend           <<<<<<<<<<<<<<---------------*/


    function megaFriend(array) {
    var longestWord = "";
  
    array.forEach(function(name)    /* here function works as recursive way */
    {       
      if(name.length > longestWord.length) 
      {
        longestName = name;
      }
    });
  
    return longestName;
    }
    


    /*>>>>>>>>>>>>>>>>>>>-------end----------<<<<<<<<<<<<<<<<<<*/
  