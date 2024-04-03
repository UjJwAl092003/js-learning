const account_Id=14453//cant change
let account_Email="abcd@gmail.com"
var account_Password="12345"
account_City="gkp"
let account_State //undefined


//account_Id=2 //not allowed


account_Email="gdf@gmail.com"
account_Password="city"
account_City="ayodhya"



console.log(account_Id);

/*
prefer not to use var because of issue in block scope and functional scope
Var can be declared and accessed globally. Let can be declared globally, 
but its access is limited to the block in which it is declared.
*/

console.table([account_Id,account_Email,account_Password,account_City,account_State])