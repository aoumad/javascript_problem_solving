var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10)
{
    dd = dd + '0';
}
if (mm < 10)
{
    mm = mm + '0';
}

today = mm + '-' + dd + '-' + yyyy;
console.log(today);

today = mm + '/' + dd + '/' + yyyy;
console.log(today);

today = dd + '-' + mm + '-' + yyyy;
console.log(today);

today = dd + '/' + mm + '/' + yyyy;
console.log(today);

// Output:
/* 
30-13-2023
30/13/2023
13-30-2023
13/30/2023
*/