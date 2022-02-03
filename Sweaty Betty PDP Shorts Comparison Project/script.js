var product1 = document.getElementById("product1");
var product2 = document.getElementById("product2");

function createProducts() {
    var dropDownContainer = document.createElement("div");
    product1.appendChild(dropDownContainer);

    var dropDownBtn = document.createElement("button");
    dropDownBtn.innerHTML = "Choose Style";
    dropDownContainer.appendChild(dropDownBtn);
    dropDownBtn.style.border = ("5px");

    var dropDownContent = document.createElement("div");
    dropDownBtn.appendChild(dropDownContent);

    var btn1 = document.createElement("button");
    btn1.innerHTML = "Power 6 Inch Shorts";
    dropDownContent.appendChild(btn1);

    var btn2 = document.createElement("button");
    btn2.innerHTML = "Zero Gravity 9 Inch Shorts";
    dropDownContent.appendChild(btn2);

    var btn3 = document.createElement("button");
    btn3.innerHTML = "All Day 10 Inch Shorts";
    dropDownContent.appendChild(btn3);
}


function createHighlights() {
    if (btn1.innerHTML = "Power 6 Inch Shorts") {
        var title = document.createElement("h4");
        title.innerHTML = "Activity";
        document.container.banner.appendChild(title);

        document.createElement("li", "Workout");
        document.createElement("li", "Running");
        document.createElement("li", "Yoga");
    }
}
