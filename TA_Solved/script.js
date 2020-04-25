$(function () {

    let firstNum, secondNum, operator, operated, calculatedResult;

    const Calculator = {
        Reset: function () {
            firstNum = "";
            secondNum = "";
            operator = "";
            operated = false;

            $("#result").text("");
            $("#first-number").text("");
            $("#second-number").text("");
            $("#operator").text("");
            
            return;
        }

    }
    $('div.toast').toast('hide');

    //Declare global variables
    firstNum = "";
    secondNum = "";
    operated = false;
    calculatedResult = "";

    //get the values for the numbers and operator

    $("button.number").on("click", function (e) {
        thisValue = $(this).val()
        console.log("vanilla this", this);
        console.log("jquery this", $(this));
        console.log("event target", e.target)
        if (calculatedResult !== "") {
            calculatedResult = "";
            Calculator.Reset();
        }
        if (!operated) {
            let currentText = $("#first-number").text()
            currentText += thisValue;
            firstNum = parseInt(currentText);
            $("#first-number").text(currentText);
        }
        else if (operated) {
            let currentText = $("#second-number").text()
            currentText += thisValue;
            secondNum = parseInt(currentText);
            $("#second-number").text(currentText);
        }
    })

    $("button.operator").on("click", function () {
        thisValue = $(this).val()
        operated = true;
        switch (thisValue) {
            case "power":
                operator = "power";
                $("#operator").text("^");
                break;
            case "plus":
                operator = "+"
                $("#operator").text("+");
                break;
            case "minus":
                operator = "-"
                $("#operator").text("-");
                break;
            case "times":
                operator = "*"
                $("#operator").text("x");
                break;
            case "divide":
                operator = "/"
                $("#operator").text("÷");
                break;
            case "clear":

                Calculator.Reset();

                $("#result").text("");
                $("#first-number").text("");
                $("#second-number").text("");
                $("#operator").text("");
                break;
            default:

                if (operator === "power") {
                    calculatedResult = Math.pow(firstNum, secondNum);
                } else {
                    calculatedResult = eval(firstNum + operator + secondNum)
                }
                $("#result").text(calculatedResult);
                break;
        }
    })
});

