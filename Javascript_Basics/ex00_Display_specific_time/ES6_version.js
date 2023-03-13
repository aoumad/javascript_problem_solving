const today = new Date();
const day = today.getDate();
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];

console.log(`Today is : ${daylist[day]}.`);	// ES6 template literal

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let prepand = (hour >= 12) ? " PM " : " AM ";

hour = (hour >= 12)? hour - 12: hour;
if (hour === 0 && prepand === ' PM ')
{
    if (minute === 0 && second === 0)
    {
        hour = 12;
        prepand = " NOON ";
    }
    else
    {
        hour = 12;
        prepand = " PM ";
    }
}
else
{
    if (hour === 0 && prepand === ' AM ')
    {
        if (minute === 0 && second === 0)
        {
            hour = 12;
            prepand = " MIDNIGHT ";
        }
    }
    else
    {
        hour = 12;
        prepand = ' AM ';
    }
}

console.log(`Current Time : ${hour}${prepand} : ${minute} : ${second}`);	// ES6 template literal