

function MenuItem(name, kcal, glut, lact, fact, imgSrc) {
    this.name = name;
    this.cal = kcal;
    this.gluten = glut;
    this.lact = lact;
    this.fact = fact;
    this.imgSrc = imgSrc
    //this.className = "burger";
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

var b1 = new MenuItem("Nasty ass burger", 1500, false, false, "free from everything", "http://www.pngmart.com/files/5/Hamburger-Transparent-PNG.png");
var b2 = new MenuItem("Fat ass burger", 6000, true, false, "Soo much fat in this burger", "http://www.pngmart.com/files/5/Hamburger-Transparent-Background.png");
var b3 = new MenuItem("Big Chungus burger", 3000, true, true, "Solely made of gluten and milk products", "http://www.pngmart.com/files/5/Hamburger-PNG-Picture.png");

var b4 = new MenuItem("Big Chungus burger", 3000, true, true, "Solely made of gluten and milk products", "http://www.pngmart.com/files/5/Hamburger-PNG-Picture.png");

var b5 = new MenuItem("Big Chungus burger", 3000, true, true, "Solely made of gluten and milk products", "http://www.pngmart.com/files/5/Hamburger-PNG-Picture.png");
var menu = [b1,b2,b3, b4, b5];

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
        img.style.width = "200px";
        d.appendChild(p.appendChild(t));
        d.appendChild(img);
        d.appendChild(list);
        wrap.appendChild(d);
    }
}
wrapper(menu);
/*
var bMenu = document.createElement("div");
function putIn(burger, menu) {
    var item = document.createElement("p");
    var txt = document.createTextNode(burger.burger());
    item.appendChild(txt);
    menu.appendChild(item);
    menu.style.color = "red";
    menu.style.backgroundColor = "blue";
    return menu;
}
putIn(b1, bMenu);
putIn(b2, bMenu);
putIn(b3, bMenu);
document.body.appendChild(bMenu);

var myBoolString = document.getElementById("myID2");
console.log(myBoolString.hasChildNodes());
if(true && myBoolString.hasChildNodes()) 
{
	  myBoolString.innerHTML = "<p>Conditionall text visible</p>";
}
else if(false) 
{
	  myBoolString.innerHTML = "";
}
var burgers = [b1,b2,b3];

var burgerList = document.getElementById("myID3");
for (var daBurger in burgers) {
    var listItem = document.createElement("li");
    console.log(burgers[daBurger].burger());
    var listValue = document.createTextNode(burgers[daBurger].burger());
    listItem.appendChild(listValue);
    burgerList.appendChild(listItem);
}*/
