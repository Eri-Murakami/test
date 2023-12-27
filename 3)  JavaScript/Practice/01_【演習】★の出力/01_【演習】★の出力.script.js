//問1

document.write("<br>");
document.write("■■■問1■■■");
document.write("<br>");

for (var star = 1; star <= 5; star++) {
    document.write("★");
}
document.write("<br>");


//問2

document.write("<br>");
document.write("■■■問2■■■");
document.write("<br>");

for (var star1 = 1; star1 <= 2; star1++) {
    for (var star2 = 1; star2 <= 3; star2++) {
        document.write("★");
    }
    document.write("<br>");
}


//問3

document.write("<br>");
document.write("■■■問3■■■");
document.write("<br>");

for (var star1 = 1; star1 <= 2; star1++) {
    for (var star2 = 1; star2 <= 5; star2++) {
        document.write("☆");
    }
    document.write("<br>");
}


//問4

document.write("<br>");
document.write("■■■問4■■■");
document.write("<br>");

for (var star1 = 1; star1 <= 4; star1++) {
    for (var star2 = 1; star2 <= 5; star2++) {
        document.write("★");
    }
    document.write("<br>");
}


//問5

document.write("<br>");
document.write("■■■問5■■■");
document.write("<br>");

for (var star1 = 1; star1 <= 4; star1++) {
    for (var star2 = 1; star2 <= 3; star2++) {
        document.write("★");
    }
    document.write("<br>");
}


//問6

document.write("<br>");
document.write("■■■問6■■■");
document.write("<br>");

for (var star1 = 1; star1 <= 3; star1++) {
    for (var star2 = 1; star2 <= 3; star2++) {
        if (star2 % 2 == 1) {
            document.write("★");
        } else {
            document.write("☆");
        }
    } 
    document.write("<br>");
}


//問7

document.write("<br>");
document.write("■■■問7■■■");
document.write("<br>");

for (var star1 = 1; star1 <= 4; star1++) {
    for (var star2 = 1; star2 <= 5; star2++) {
        if (star2 % 2 == 1) {
            document.write("★");
        } else {
            document.write("☆");
        }
    } 
    document.write("<br>");
}


//問8

document.write("<br>");
document.write("■■■問8■■■");
document.write("<br>");

for (var star1 = 1; star1 <= 5; star1++) {
    for (var star2 = 1; star2 <= star1; star2++) {
        document.write("★");
    }
    document.write("<br>");
}





