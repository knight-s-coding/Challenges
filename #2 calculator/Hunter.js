for (let i = 0; i < document.getElementById("calculatorDiv").children.length; i++) {
    let buttonvalue = document.getElementById("calculatorDiv").children[i].innerHTML;
    document.getElementById("calculatorDiv").children[i].onclick = function() { handleButton(buttonvalue) } 
}

function handleButton(value) {
    if (value == "="){
        try {eval(`document.getElementById("input").innerHTML = ` + document.getElementById("input").innerHTML + ";")}
        catch (e) {document.getElementById("input").innerHTML = "ERR"}
    }
    else if (value == "BACK"){
        if (document.getElementById("input").innerHTML == "ERR" || document.getElementById("input").innerHTML == "NAN")
            document.getElementById("input").innerHTML = "";
        document.getElementById("input").innerHTML = document.getElementById("input").innerHTML.substring(0, document.getElementById("input").innerHTML.length - 1)
    }
    else if (value == "CLEAR"){
        document.getElementById("input").innerHTML = "";
    }
    else {
        if (document.getElementById("input").innerHTML == "ERR" || document.getElementById("input").innerHTML == "NAN")
            document.getElementById("input").innerHTML = value;
        else
            document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + value;
    }
}
