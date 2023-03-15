/*
Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100
but these centurial years are leap years if they are exactly divisible by 400
For example, the years 1700, 1800, and 1900 are not leap years, but the year 2000 is.
*/

function leapYear_m1(year) // method 1
{
    if (year % 4 === 0)
    {
        if (year % 100 === 0)
        {
            if (year % 400 === 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return true;
        }
    }
    else
    {
        return false;
    }
}

function leapYear_m2(year) // method 2
{
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapYear_m1(2016));
console.log(leapYear_m2(2016));

console.log(leapYear_m1(450));
console.log(leapYear_m2(450));

console.log(leapYear_m1(1700));
console.log(leapYear_m2(1700));

console.log(leapYear_m1(2000));
console.log(leapYear_m2(2000));