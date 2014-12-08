rollDiceFunc = function() { 
yd1roll = Math.floor(Math.random()*6);
yd2roll = Math.floor(Math.random()*6);
yd3roll = Math.floor(Math.random()*6);
od1roll = Math.floor(Math.random()*6);
od2roll = Math.floor(Math.random()*6);
od3roll = Math.floor(Math.random()*6);
ydrolltot = yd1roll + yd2roll + yd3roll;
odrolltot = od1roll + od2roll + od3roll;
yd1res = document.getElementById("yd1");
yd2res = document.getElementById("yd2");
yd3res = document.getElementById("yd3");
od1res = document.getElementById("od1");
od2res = document.getElementById("od2");
od3res = document.getElementById("od3");
yd1res.innerHTML = yd1roll;
yd2res.innerHTML = yd2roll;
yd3res.innerHTML = yd3roll;
od1res.innerHTML = od1roll;
od2res.innerHTML = od2roll
od3res.innerHTML = od3roll;
if (ydrolltot >= odrolltot) { document.getElementById("res").innerHTML = "You Win!"; }
else { document.getElementById("res").innerHTML = "You Lose!"; }
}
