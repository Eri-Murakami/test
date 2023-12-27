//問1

document.write("<br>");
document.write("■■■問1■■■");
document.write("<br>");

function menseki(hankei,ensyuuritu = 3.14) {
    return hankei * hankei * ensyuuritu;
}

document.write(menseki(5) + "<br>");
document.write(menseki(7) + "<br>");
document.write(menseki(10,3) + "<br>");


//問2

document.write("<br>");
document.write("■■■問2■■■");
document.write("<br>");

function goukei(otona,kodomo) {
    return (otona * 500) + (kodomo * 200);
}

document.write(goukei(2,4) + "円です。"+ "<br>");
document.write(goukei(1,5) + "円です。" + "<br>");
document.write(goukei(3,7) + "円です。" + "<br>");