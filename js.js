// alert('ami-tumi');

// let age = 20;
// let named = 'suvo';

// alert(named);
// console.log(age, named);
// let cars = ['BMW', 'Tesla', 'Toyota', 'x-corolla'] ;
// console.log (cars [2]);
// document.write(cars[0]);

// let amar = {
//     'MyName': 'Md. Mamun Hossen',
//     'Pro': 'Web Development',
//     'Location': 'Patuakhali'
// }

// console.log(amar.MyName.length)

// let kopa = document.getElementById('samsu');
// kopa.innerText = amar.MyName;

// console.log('Name:    ', amar.MyName);
// document.write ('<br> Name:    ', amar.MyName);
// document.write ('<br> Profession:    ', amar.Pro);
// document.write ('<br> Location:    ', amar.Location);



document.getElementById ('submit').addEventListener('click', function () {
    let input = document.getElementById('textName').value;
    let show = document.getElementById('head');
    console.log(input);
    show.innerHTML = input;
});


document.getElementById ('calculate').addEventListener('click', function() {   

let bangla = document.getElementById('BanMarks').value;
let BanGraLet = document.getElementById('BanGraLet');
let BanPoint = document.getElementById('BanPoint');

if (bangla >= 80 && bangla <= 100) {
    BanGraLet.innerHTML = 'A+';
    BanPoint.innerHTML = '5';
}
else if (bangla >= 70 && bangla <= 79) {
    BanGraLet.innerHTML = 'A';
    BanPoint.innerHTML = '4';
}
else if (bangla >= 60 && bangla <= 69) {
    BanGraLet.innerHTML = 'A-';
    BanPoint.innerHTML = '3.5';
}
else if (bangla >= 50 && bangla <= 59) {
    BanGraLet.innerHTML = 'B';
    BanPoint.innerHTML = '3';
}
else if (bangla >= 40 && bangla <= 49) {
    BanGraLet.innerHTML = 'C';
    BanPoint.innerHTML = '2';
}
else if (bangla >= 33 && bangla <= 39) {
    BanGraLet.innerHTML = 'D';
    BanPoint.innerHTML = '1';
}
else if (bangla >= 0 && bangla <= 32) {
    BanGraLet.innerHTML = 'F';
    BanPoint.innerHTML = '0';
}

let english = document.getElementById('EngMarks').value;
let EngGraLet = document.getElementById('EngGraLet');
let EngPoint = document.getElementById('EngPoint');

if (english >= 80 && english <= 100) {
    EngGraLet.innerHTML = 'A+';
    EngPoint.innerHTML = '5';
}
else if (english >= 70 && english <= 79) {
    EngGraLet.innerHTML = 'A';
    EngPoint.innerHTML = '4';
}
else if (english >= 60 && english <= 69) {
    EngGraLet.innerHTML = 'A-';
    EngPoint.innerHTML = '3.5';
}
else if (english >= 50 && english <= 59) {
    EngGraLet.innerHTML = 'B';
    EngPoint.innerHTML = '3';
}
else if (english >= 40 && english <= 49) {
    EngGraLet.innerHTML = 'C';
    EngPoint.innerHTML = '2';
}
else if (english >= 33 && english <= 39) {
    EngGraLet.innerHTML = 'D';
    EngPoint.innerHTML = '1';
}
else if (english >= 0 && english <= 32) {
    EngGraLet.innerHTML = 'F';
    EngPoint.innerHTML = '0';
}

let Math = document.getElementById('MathMarks').value;
let MathGraLet = document.getElementById('MathGraLet');
let MathPoint = document.getElementById('MathPoint');

if (Math >= 80 && Math <= 100) {
    MathGraLet.innerHTML = 'A+';
    MathPoint.innerHTML = '5';
}
else if (Math >= 70 && Math <= 79) {
    MathGraLet.innerHTML = 'A';
    MathPoint.innerHTML = '4';
}
else if (Math >= 60 && Math <= 69) {
    MathGraLet.innerHTML = 'A-';
    MathPoint.innerHTML = '3.5';
}
else if (Math >= 50 && Math <= 59) {
    MathGraLet.innerHTML = 'B';
    MathPoint.innerHTML = '3';
}
else if (Math >= 40 && Math <= 49) {
    MathGraLet.innerHTML = 'C';
    MathPoint.innerHTML = '2';
}
else if (Math >= 33 && Math <= 39) {
    MathGraLet.innerHTML = 'D';
    MathPoint.innerHTML = '1';
}
else if (Math >= 0 && Math <= 32) {
    MathGraLet.innerHTML = 'F';
    MathPoint.innerHTML = '0';
}

let Physics = document.getElementById('PhyMarks').value;
let PhyGraLet = document.getElementById('PhyGraLet');
let PhyPoint = document.getElementById('PhyPoint');

if (Physics >= 80 && Physics <= 100) {
    PhyGraLet.innerHTML = 'A+';
    PhyPoint.innerHTML = '5';
}
else if (Physics >= 70 && Physics <= 79) {
    PhyGraLet.innerHTML = 'A';
    PhyPoint.innerHTML = '4';
}
else if (Physics >= 60 && Physics <= 69) {
    PhyGraLet.innerHTML = 'A-';
    PhyPoint.innerHTML = '3.5';
}
else if (Physics >= 50 && Physics <= 59) {
    PhyGraLet.innerHTML = 'B';
    PhyPoint.innerHTML = '3';
}
else if (Physics >= 40 && Physics <= 49) {
    PhyGraLet.innerHTML = 'C';
    PhyPoint.innerHTML = '2';
}
else if (Physics >= 33 && Physics <= 39) {
    PhyGraLet.innerHTML = 'D';
    PhyPoint.innerHTML = '1';
}
else if (Physics >= 0 && Physics <= 32) {
    PhyGraLet.innerHTML = 'F';
    PhyPoint.innerHTML = '0';
}

let Chemistry = document.getElementById('CheMarks').value;
let CheGraLet = document.getElementById('CheGraLet');
let ChePoint = document.getElementById('ChePoint');

if (Chemistry >= 80 && Chemistry <= 100) {
    CheGraLet.innerHTML = 'A+';
    ChePoint.innerHTML = '5';
}
else if (Chemistry >= 70 && Chemistry <= 79) {
    CheGraLet.innerHTML = 'A';
    ChePoint.innerHTML = '4';
}
else if (Chemistry >= 60 && Chemistry <= 69) {
    CheGraLet.innerHTML = 'A-';
    ChePoint.innerHTML = '3.5';
}
else if (Chemistry >= 50 && Chemistry <= 59) {
    CheGraLet.innerHTML = 'B';
    ChePoint.innerHTML = '3';
}
else if (Chemistry >= 40 && Chemistry <= 49) {
    CheGraLet.innerHTML = 'C';
    ChePoint.innerHTML = '2';
}
else if (Chemistry >= 33 && Chemistry <= 39) {
    CheGraLet.innerHTML = 'D';
    ChePoint.innerHTML = '1';
}
else if (Chemistry >= 0 && Chemistry <= 32) {
    CheGraLet.innerHTML = 'F';
    ChePoint.innerHTML = '0';
}

let Computer = document.getElementById('ComMarks').value;
let ComGraLet = document.getElementById('ComGraLet');
let ComPoint = document.getElementById('ComPoint');

if (Computer >= 80 && Computer <= 100) {
    ComGraLet.innerHTML = 'A+';
    ComPoint.innerHTML = '5';
}
else if (Computer >= 70 && Computer <= 79) {
    ComGraLet.innerHTML = 'A';
    ComPoint.innerHTML = '4';
}
else if (Computer >= 60 && Computer <= 69) {
    ComGraLet.innerHTML = 'A-';
    ComPoint.innerHTML = '3.5';
}
else if (Computer >= 50 && Computer <= 59) {
    ComGraLet.innerHTML = 'B';
    ComPoint.innerHTML = '3';
}
else if (Computer >= 40 && Computer <= 49) {
    ComGraLet.innerHTML = 'C';
    ComPoint.innerHTML = '2';
}
else if (Computer >= 33 && Computer <= 39) {
    ComGraLet.innerHTML = 'D';
    ComPoint.innerHTML = '1';
}
else if (Computer >= 0 && Computer <= 32) {
    ComGraLet.innerHTML = 'F';
    ComPoint.innerHTML = '0';
}
// console.log(typeof parseFloat(BanPoint.innerText));

let totalGPA = parseFloat(BanPoint.innerText) + parseFloat(EngPoint.innerText) + parseFloat(MathPoint.innerText) + parseFloat(PhyPoint.innerText) + parseFloat(ChePoint.innerText) + parseFloat(ComPoint.innerText);
let Total = document.getElementById('totalGPA');
    
Total.innerHTML = totalGPA;

let Avg_Gpa = totalGPA/6;
let Avg = document.getElementById('AvgGPA');
let m = Avg_Gpa.toFixed(2);

Avg.innerHTML = m;

console.log(typeof Avg_Gpa)

let bangla1 = document.getElementById('BanMarks').value;
let english1 = document.getElementById('EngMarks').value;
let Math1 = document.getElementById('MathMarks').value;
let Physics1 = document.getElementById('PhyMarks').value;
let Chemistry1 = document.getElementById('CheMarks').value;
let Computer1 = document.getElementById('ComMarks').value;

 
let grade = document.getElementById('Grade');
let gra_de = document.getElementById('AvgGPA').innerHTML;

if (bangla1 < 33 || english1 < 33 || Math1 < 33 || Physics1 < 33 || Chemistry1 < 33 || Computer1 < 33) {
    grade.innerHTML = 'F';    
}
else if (gra_de <= 5) {
    grade.innerHTML = 'A+';
}
else if (gra_de <= 4) {
    grade.innerHTML = 'A';
}
else if (gra_de <= 3.5) {
    grade.innerHTML = 'A-';
}
else if (gra_de <= 3) {
    grade.innerHTML = 'B';
}
else if (gra_de <= 2) {
    grade.innerHTML = 'C';
}
else if (gra_de <= 1) {
    grade.innerHTML = 'D';
}

});