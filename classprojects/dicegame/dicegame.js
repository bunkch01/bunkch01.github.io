rollDiceFunc = function() { 
yd1roll = Math.floor(Math.random()*6);
yd2roll = Math.floor(Math.random()*6);
yd3roll = Math.floor(Math.random()*6);
od1roll = Math.floor(Math.random()*6);
od2roll = Math.floor(Math.random()*6);
od3roll = Math.floor(Math.random()*6);
ydrolltot = yd1roll + yd2roll + yd3roll;
odrolltot = od1roll + od2roll + od3roll;
document.getElementById(yd1).innerHTML = yd1roll;
document.getElementById(yd2).innerHTML = yd2roll;
document.getElementById(yd3).innerHTML = yd3roll;
document.getElementById(od1).innerHTML = od1roll;
document.getElementById(od2).innerHTML = od2roll;
document.getElementById(od3).innerHTML = od3roll;
if (ydrolltot >= odrolltot) { document.getElementById(res).innerHTML = "You Win!"; }
else { document.getElementById(res).innerHTML = "You Lose!"; }
}
