function getRandomArbitrary(min, max)
{
    return Math.random() * (max - min) + min;
}

var jackets = [];
var jackets_string = "";
var coats = [];
var coats_string = "";

function InsertJacket()
{
    var input = document.getElementById("JacketInput").value;
    if(input == "")
    {
        return ;
    }
    jackets.push(input);
    jackets_string = jackets_string + " [" + input + "]";
    document.getElementById("JacketList").innerHTML = jackets_string;
    document.getElementById("JacketInput").value = "";
    return ;
}

function ClearJacket()
{
    document.getElementById("JacketList").innerHTML = "(上衣列表)";
    jackets = [];
    jackets_string = "";
}

function InsertCoat()
{
    var input = document.getElementById("CoatInput").value;
    if(input == "")
    {
        return ;
    }
    coats.push(input);
    coats_string = coats_string + " [" + input + "]";
    document.getElementById("CoatList").innerHTML = coats_string;
    document.getElementById("CoatInput").value = "";
    return ;
}

function ClearCoat()
{
    document.getElementById("CoatList").innerHTML = "(外套列表)";
    coats = [];
    coats_string = "";
}

function GenerateMatch()
{
    if(jackets_string == "" || coats_string == "")
    {
        return;
    }
    var rand_jacket = Math.floor(getRandomArbitrary(0, jackets.length));
    var rand_coat = Math.floor(getRandomArbitrary(0, coats.length));
    console.log(rand_jacket, rand_coat);
    document.getElementById("Result").innerHTML = "請穿 " + jackets[rand_jacket] + "<br>配 " + coats[rand_coat];
}