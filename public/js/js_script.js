function sendInfo() {
    var info = [];
    info.push(document.getElementById("full name").value);
    info.push(document.getElementById("mail").value);
    info.push(document.getElementById("street").value);
    info.push(document.getElementById("big").value);
    info.push(document.getElementById("house").value);

    var e = document.getElementById("payment");
    info.push(e.options[e.selectedIndex].text);

    var gender = "g";
    for (var i = 1; i<6; i++) {
        var check = gender + i;
        if (document.getElementById(check).checked) {
            var radioValue = document.getElementById("l"+i).textContent;
            break;
        }
    }
    info.push(radioValue)
    console.log("hej");
    console.log(info);
}

var sendButton = document.getElementById("send");

sendButton.addEventListener("click", sendInfo);



function MenuItem(name, kcal, glut, lact, fact, imgSrc) {
    this.name = name;
    this.cal = kcal;
    this.gluten = glut;
    this.lact = lact;
    this.fact = fact;
    this.imgSrc = imgSrc
    this.listFacts = function() {
        var list = [];
        list.push(document.createTextNode(this.fact));
        if(this.gluten == true) {
            var glut = (document.createTextNode("includes gluten"));
            var bold = document.createElement("strong");
            bold.appendChild(glut);
            list.push(bold);
        }
        if(this.lact == true) {
            var lac = (document.createTextNode("includes lactose"));
            var bold = document.createElement("strong");
            bold.appendChild(lac);
            list.push(bold);
        }
        list.push(document.createTextNode("cal: " + this.cal));
        return list;
    };
}


var menu = [];
for (var b in food) {
    var item = food[b];
    var burger = new MenuItem(item.name, item.kcal, item.lactose, item.gluten, item.fact, item.img);
    menu.push(burger);
}

function wrapper(burgers) {
    var wrap = document.getElementById("theWrapper");
    for (var b in burgers) {
        console.log(b);
        var d = document.createElement("div");
        d.className = "box b" + b;
        var p = document.createElement("p");
        p.className = "burgerNames";
        var t = document.createTextNode(burgers[b].name);
        var list = document.createElement("ul");
        var facts = burgers[b].listFacts();
        for(var f in facts) {
            var item = document.createElement("li")
            item.appendChild(facts[f]);
            list.appendChild(item);
        }
        var img = document.createElement("img");
        img.src = burgers[b].imgSrc
        img.style.width = "250px";
        d.appendChild(p.appendChild(t));
        d.appendChild(img);
        d.appendChild(list);
        wrap.appendChild(d);
    }
}
wrapper(menu);



