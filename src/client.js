//Dom settings
const name = document.querySelector('#name');
const numEmail = document.querySelector('#numEmail');
const email1 = document.querySelector('#email1');
const email2 = document.querySelector('#email2');
const email3 = document.querySelector('#email3');
const email4 = document.querySelector('#email4');
const okButton = document.querySelector('#okButton');

const nameB = extractValueB(name);
const numEmailB = extractValueB(numEmail);
const email1B = extractValueB(email1);
const email2B = extractValueB(email2);
const email3B = extractValueB(email3);
const email4B = extractValueB(email4);

//FRP start
const str1 = liftB(s =>
    s==""
    ? "Enter something"
    : s.indexOf(' ') == -1
    ? "Must contain space"
    : ""
, nameB);

const str2 = liftB(n => 
    (n < 1 || n > 4)
    ? "Must be 1 to 4"
    : ""
, numEmailB);

const enabled1 = liftB(n => n > 0, numEmailB);
const enabled2 = liftB(n => n > 1, numEmailB);
const enabled3 = liftB(n => n > 2, numEmailB);
const enabled4 = liftB(n => n > 3, numEmailB);

const str3 = liftB((e, n) => n <= 0
    ?  ""
    : e==""
    ? "Enter something"
    : e.indexOf('@') < 0
    ? "Must contain @"
    : ""
, email1B, numEmailB);

const str4 = liftB((e, n) => n <= 1
    ?  ""
    : e==""
    ? "Enter something"
    : e.indexOf('@') < 0
    ? "Must contain @"
    : ""
, email2B, numEmailB);

const str5 = liftB((e, n) => n <= 2
    ?  ""
    : e==""
    ? "Enter something"
    : e.indexOf('@') < 0
    ? "Must contain @"
    : ""
, email3B, numEmailB);

const str6 = liftB((e, n) => n <= 3
    ?  ""
    : e==""
    ? "Enter something"
    : e.indexOf('@') < 0
    ? "Must contain @"
    : ""
, email4B, numEmailB);

const isValid1 = liftB(s => s=="", str1);
const isValid2 = liftB(s => s=="", str2);
const isValid3 = liftB(s => s=="", str3);
const isValid4 = liftB(s => s=="", str4);
const isValid5 = liftB(s => s=="", str5);
const isValid6 = liftB(s => s=="", str6);

const temp1 = liftB((a, b) => a&&b, isValid1, isValid2);
const temp2 = liftB((a, b) => a&&b, temp1, isValid3);
const temp3 = liftB((a, b) => a&&b, temp2, isValid4);
const temp4 = liftB((a, b) => a&&b, temp3, isValid5);
const allValid = liftB((a, b) => a&&b, temp4, isValid6);
//FRP end

//Dom settings
liftB(a => {
    email1.disabled = !a
}, enabled1)

liftB(a => {
    email2.disabled = !a
}, enabled2)

liftB(a => {
    email3.disabled = !a
}, enabled3)

liftB(a => {
    email4.disabled = !a
}, enabled4)

liftB(a => {
    okButton.disabled = !a
}, allValid)


insertDomB( str1 , 'nameHint' );
insertDomB( str2 , 'numEmailHint' );
insertDomB( str3 , 'email1Hint' );
insertDomB( str4 , 'email2Hint' );
insertDomB( str5 , 'email3Hint' );
insertDomB( str6 , 'email4Hint' );
