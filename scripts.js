//================================= PART 1.1 ======================================

const quotes = ['Spread love everywhere you go. Let no one ever come to you without leaving happier', 'When you reach the end of your rope, tie a knot in it and hang on', 'Always remember that you are absolutely unique. Just like everyone else', 'Don\'t judge each day by the harvest you reap but by the seeds that you plant', 'The future belongs to those who believe in the beauty of their dreams', 'Tell me and I forget. Teach me and I remember. Involve me and I learn', 'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart', 'It is during our darkest moments that we must focus to see the light', 'Whoever is happy will make others happy too', 'Do not go where the path may lead, go instead where there is no path and leave a trail']

function loadQuote() {
    let index = Math.floor((Math.random() * (quotes.length - 1)) + 0);
    document.getElementById("quote").innerHTML = quotes[index];

}

window.addEventListener("load", loadQuote());

const color = ["#0099ff", "#ff7f50", "#ffbb00", "#00FFFF"];

function changeColor(choice) {

    if (choice == 0) {
        document.querySelector('.quote-box').style.backgroundColor = color[choice];
        document.getElementById('quote').style.color = "black";
        document.getElementById("quote").style.fontStyle = "normal";
        document.getElementById("quote").style.fontSize = "18px";
        document.getElementById('quote').style.border = "8px solid grey";

    } 
    
    else if (choice == 1) {
        document.querySelector('.quote-box').style.backgroundColor = color[choice];
        document.getElementById('quote').style.color = "white";
        document.getElementById("quote").style.fontStyle = "italic";
        document.getElementById("quote").style.fontSize = "24px";
        document.getElementById('quote').style.border = "8px solid blue";

    } 
    
    else if (choice == 2) {
        document.querySelector('.quote-box').style.backgroundColor = color[choice];
        document.getElementById('quote').style.color = "red";
        document.getElementById("quote").style.fontStyle = "italic";
        document.getElementById("quote").style.fontSize = "20px";
        document.getElementById('quote').style.border = "8px solid green";

    } 
    
    else if (choice == 3) {
        document.querySelector('.quote-box').style.backgroundColor = color[choice];
        document.getElementById('quote').style.color = "#7700ff";
        document.getElementById("quote").style.fontStyle = "oblique";
        document.getElementById("quote").style.fontSize = "22px";
        document.getElementById('quote').style.border = "8px solid red";

    } 
}

//================================= PART 1.2 ======================================

function converter() {
    const x = document.getElementById("part1");
    if (document.getElementById("lbToKg").selected === true) {
        let lb = x.value
        let kg = lb / 2.20462
        let res = kg.toFixed(4)
        document.getElementById("converter").innerHTML = res + " kilograms";

    }
    if (document.getElementById("kgToLb").selected === true) {
        let kg = x.value
        let lb = kg * 2.20462
        let res = lb.toFixed(4)
        document.getElementById("converter").innerHTML = res + " pounds";

    }
}

//================================= PART 2 ======================================

function calculateSeries() {
    const x = document.getElementById("part2");
    const myArr = x.value.split(',');
    const max = Math.max(...myArr);
    const min = Math.min(...myArr);
    const myIntArr = myArr.map(i => Number(i));
    const sum = myIntArr.reduce((s, a) => s + a, 0);
    const average = myIntArr => myIntArr.reduce((a, b) => a + b, 0) / myIntArr.length;
    const avg = average(myIntArr);
    myRevArr = myArr.reverse();
    document.getElementById("max").innerHTML = max;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("avg").innerHTML = avg;
    document.getElementById("rev").innerHTML = [...myRevArr];
}

//================================= PART 3 ======================================

function eraseText() {
    document.getElementById("part3").value = "";
}

function capitalizeText() {
    const x = document.getElementById("part3");
    x.value = x.value.toUpperCase();
    document.getElementById("capitalize").style.display = "none";
    document.getElementById("noncapitalize").style.display = "inline";

}

function nonCapitalizeText() {
    const x = document.getElementById("part3");
    x.value = x.value.toLowerCase();
    document.getElementById("noncapitalize").style.display = "none";
    document.getElementById("capitalize").style.display = "inline";

}

function sortLines() {
    const x = document.getElementById("part3");
    const myArr = x.value.split(/\r?\n/);
    const sorted = myArr.sort().toString().split(',').join("\n");
    x.value = sorted;
}

function reverseLines() {
    const x = document.getElementById("part3");
    const myArr = x.value.split(/\r?\n/);
    const reverse = myArr.reverse().toString().split(',').join("\n");
    x.value = reverse;
}

function stripBlank() {
    const x = document.getElementById("part3");
    const myArr = x.value.split(/\r?\n/);
    const trimmed = myArr.map(i => i.trim())
    const str = trimmed.toString().split(',').join("\n");
    const value = str.replace(/^\s*[\r\n]/gm, "")
    x.value = value;
}

function addNumber() {
    const x = document.getElementById("part3");
    const myArr = x.value.split(/\r?\n/);
    const addNum = myArr.map(i => "1. " + i);
    const value = addNum.toString().split(',').join("\n");
    x.value = value;
}

function shuffleLines() {
    const x = document.getElementById("part3");
    const myArr = x.value.split(/\r?\n/);
    for (let i = myArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [myArr[i], myArr[j]] = [myArr[j], myArr[i]];
    }
    const value = myArr.toString().split(',').join("\n");
    x.value = value;
}
