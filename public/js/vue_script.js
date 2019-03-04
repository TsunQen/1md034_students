
/*Vue.component("testing", {
    template: '<div v-bind:class="box"><p>{{name}}</p> <img v-bind:src="img" width="200"> <ul><li> item.name</li></ul></div></div>',
    data: function() {
        return {
            name: item.name(),
            img: "hej",
            box: "box b3"
        }
    }        
    
})*/ 


'use strict';

var socket = io();

var vm = new Vue({
    el: "#site",
    data: {        
			  burgers: food,
        order: true,
        info: null,
        burgerNamesOrder: [],
        orders: {},
        tmpAdress:"",
    },
    created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },
    methods: {
        sendInfo: function() {
            this.burgerNamesOrder = [];
            var info = [];
            info.push("Name: " + document.getElementById("full name").value);
            info.push("E-mail: " + document.getElementById("mail").value);
            info.push("Fact: " + document.getElementById("big").value);
            var e = document.getElementById("payment");
            info.push("Payment: " + e.options[e.selectedIndex].text);
            var gender = "g";
            for (var i = 1; i<6; i++) {
                var check = gender + i;
                if (document.getElementById(check).checked) {
                    var radioValue = document.getElementById("l"+i).textContent;
                    break;
                }
            }
            info.push("Gender: " + radioValue);
            
            for(var i = 0; i<5; i++) {
                var uglyCheck = "box b" + i;
                var burger = document.getElementById(uglyCheck);
                if(burger.checked) {
                    this.burgerNamesOrder.push(burger.getAttribute("value"));
                }
            }   
            
            this.info = info;
        },
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function (event) {
            socket.emit("addOrder", { orderId: this.getNext(),
                                      details: { x: this.tmpAdress.x,
                                                 y: this.tmpAdress.y },
                                      orderItems: this.burgerNamesOrder,
                                      info: this.info
                                    });
        },

        displayOrder: function (event) {
            console.log("hej");
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                          y: event.currentTarget.getBoundingClientRect().top};
            this.tmpAdress = { x: event.clientX - 10 - offset.x,
                               y: event.clientY - 10 - offset.y };                  
        },
        
    }
})



