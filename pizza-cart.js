
var smallBtnplus = document.getElementById("smallplus"),
	smallBtnminus = document.getElementById("smallminus"),
	sQty = document.getElementById("smallQty"),
	smallcost = document.getElementById("tot_small"),
	smallbuy = document.getElementById("buysmall"),

	medBtnplus = document.getElementById("medplus"),
	medBtnminus = document.getElementById("medminus"),
	mediumQty = document.getElementById("medQty"),
	mediumcost = document.getElementById("tot_med"),
	mediumbuy = document.getElementById("buymedium"),

	largeBtnplus = document.getElementById("largeplus"),
	largeBtnminus = document.getElementById("largeminus"),
	lQty = document.getElementById("largeQty"),
	largecost = document.getElementById("tot_large"),
	largebuy = document.getElementById("buylarge"),


	myallcost = document.getElementById("tot_cost"),
	myCheckOutBtn = document.getElementById("checkt"),
	payINPUT = document.getElementById("payment"),

	myMessage = document.getElementById("messagehere"),
	myCart = document.getElementById("cart"),
	myPurchase = document.getElementById("purchase"),

	smalltot = 0, medtot = 0, largetot = 0, allcost = 0, Qty = 0,
	min = 0;

smallBtnminus.addEventListener('click',function smallm(){

	smalltot -= 49.00;
	allcost -= 49.00;

	if (smalltot < 0) {
		smalltot += 49.00;
		allcost += 49.00;
		sQty.innerHTML = 0;
	};
	sQty.innerHTML = smalltot / 49.00;
	smallcost.innerHTML = "R" + smalltot.toFixed(2);
	myallcost.innerHTML = "R" + allcost.toFixed(2);
	var y = document.querySelector(".checkt");
    y.classList.remove("hide");
});

smallBtnplus.addEventListener('click', function smallP() {
	smalltot += 49.00;
	allcost += 49.00;
	sQty.innerHTML = smalltot / 49.00;
	smallcost.innerHTML = "R" + smalltot.toFixed(2);
	myallcost.innerHTML = "R" + allcost.toFixed(2);
	var y = document.querySelector(".checkt");
    y.classList.remove("hide");

});

medBtnminus.addEventListener('click', function medM() {
	medtot -= 89.00;
	allcost -= 89.00;
	if (medtot < 0) {
		medtot += 89.00 ;
		allcost += 89.00 ;
		mediumQty.innerHTML = 0;
	};
	mediumQty.innerHTML = medtot / 89.00;
	mediumcost.innerHTML = "R" + medtot.toFixed(2);
	myallcost.innerHTML = "R" + allcost.toFixed(2);
	var y = document.querySelector(".checkt");
    y.classList.remove("hide");
});

medBtnplus.addEventListener('click', function medP() {
	medtot += 89.00;
	allcost += 89.00;
	mediumQty.innerHTML = medtot / 89.00;
	mediumcost.innerHTML = "R" + medtot.toFixed(2);
	myallcost.innerHTML = "R" + allcost.toFixed(2);
	var y = document.querySelector(".checkt");
    y.classList.remove("hide");
});

largeBtnminus.addEventListener('click', function largeM() {
	largetot -= 129.00;
	allcost -= 129.00;
	if (largetot < 0) {
		largetot += 129.00;
		allcost += 129.00;
		lQty.innerHTML = 0;
	};
	lQty.innerHTML = largetot / 129.00;
	largecost.innerHTML = "R" + largetot.toFixed(2);
	myallcost.innerHTML = "R" + allcost.toFixed(2);
	var y = document.querySelector(".checkt");
    y.classList.remove("hide");
});

largeBtnplus.addEventListener('click', function largeP() {
	largetot += 129.00;
	allcost += 129.00;
	lQty.innerHTML = largetot / 129.00;
	largecost.innerHTML = "R" + largetot.toFixed(2);
	myallcost.innerHTML = "R" + allcost.toFixed(2);
	var y = document.querySelector(".checkt");
    y.classList.remove("hide");

});

myCheckOutBtn.addEventListener('click', function mycheckt() {
var x = document.querySelector(".popup");
x.classList.remove("hide");

});

myPurchase.addEventListener('click', function purchase() {
	if (allcost > payment.value) {
		myMessage.innerHTML = "Sorry - That was not enough money!";
	} else if (allcost < payment.value) {
		myMessage.innerHTML = "Enjoy your pizzas";
	}
});

buysmall.addEventListener('click', function smallbtn() {

	smalltot += 49.00;
	allcost += 49.00;
	sQty.innerHTML = smalltot / 49.00;
	smallcost.innerHTML = "R" + smalltot.toFixed(2);
	myallcost.innerHTML = "R" + allcost.toFixed(2);
	

	var y = document.querySelector(".checkt");
    y.classList.remove("hide");
	

});

buymedium.addEventListener('click', function medbtn() {
	medtot += 89.00;
	allcost += 89.00;
	mediumQty.innerHTML = medtot / 89.00;
	mediumcost.innerHTML = "R" + medtot.toFixed(2);
	myallcost.innerHTML = "R" + allcost.toFixed(2);
	
	var y = document.querySelector(".checkt");
    y.classList.remove("hide");

});

buylarge.addEventListener('click', function largebtn() {
	largetot += 129.00;
	allcost += 129.00;
	lQty.innerHTML = largetot / 129.00;
	largecost.innerHTML = "R" + largetot.toFixed(2);
	myallcost.innerHTML = "R" + allcost.toFixed(2);
	
	 var y = document.querySelector(".checkt");
	 y.classList.remove("hide");

});
