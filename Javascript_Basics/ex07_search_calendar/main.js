for (var year = 2014; year <= 2050; year++)
{
    var rtn = new Date(year, 0, 1); // the month is 0-indexed, meanwhile the day in the third is 1-indexed
    if (rtn.getDate() === 0) // it returns 0 on Sunday
        console.log("1st January is being a sunday "+year);
}