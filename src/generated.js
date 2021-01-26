export default function generated() {
  const name = extractValueB(document.querySelector('#name'))
  const numEmailB = extractValueB(document.querySelector('#numEmail'))
  const email1B = extractValueB(document.querySelector('#email1'))
  const email2B = extractValueB(document.querySelector('#email2'))
  const email3B = extractValueB(document.querySelector('#email3'))
  const email4B = extractValueB(document.querySelector('#email4'))
  const str1 = liftB(s =>
      s==""
      ? "Enter something"
      : s.indexOf(' ') == -1
      ? "Must contain space"
      : "", name);
  const str2 = liftB(n => 
      (n < 1 || n > 4)
      ? "Must be 1 to 4"
      : "", numEmailB);
  const enabled1B = liftB(n => n > 0, numEmailB);
  const enabled2B = liftB(n => n > 1, numEmailB);
  const enabled3B = liftB(n => n > 2, numEmailB);
  const enabled4B = liftB(n => n > 3, numEmailB);
  const str3 = liftB((e, n) => n <= 0
      ?  ""
      : e==""
      ? "Enter something"
      : e.indexOf('@') < 0
      ? "Must contain @"
      : "", email1B, numEmailB);
  const str4 = liftB((e, n) => n <= 1
      ?  ""
      : e==""
      ? "Enter something"
      : e.indexOf('@') < 0
      ? "Must contain @"
      : "", email2B, numEmailB);
  const str5 = liftB((e, n) => n <= 2
      ?  ""
      : e==""
      ? "Enter something"
      : e.indexOf('@') < 0
      ? "Must contain @"
      : "", email3B, numEmailB);
  const str6 = liftB((e, n) => n <= 3
      ?  ""
      : e==""
      ? "Enter something"
      : e.indexOf('@') < 0
      ? "Must contain @"
      : "", email4B, numEmailB);
  const isValid1 = liftB(s => s=="", str1);
  insertDomB( str1 , 'nameHint' );
  const isValid2 = liftB(s => s=="", str2);
  insertDomB( str2 , 'numEmailHint' );
  liftB(a => {document.querySelector('#email1').disabled = !a}, enabled1B)
  liftB(a => {document.querySelector('#email2').disabled = !a}, enabled2B)
  liftB(a => {document.querySelector('#email3').disabled = !a}, enabled3B)
  liftB(a => {document.querySelector('#email4').disabled = !a}, enabled4B)
  const isValid3 = liftB(s => s=="", str3);
  insertDomB( str3 , 'email1Hint' );
  const isValid4 = liftB(s => s=="", str4);
  insertDomB( str4 , 'email2Hint' );
  const isValid5 = liftB(s => s=="", str5);
  insertDomB( str5 , 'email3Hint' );
  const isValid6 = liftB(s => s=="", str6);
  insertDomB( str6 , 'email4Hint' );
  const temp1 = liftB((a, b) => a&&b, isValid1, isValid2);
  const temp2 = liftB((a, b) => a&&b, temp1, isValid3);
  const temp3 = liftB((a, b) => a&&b, temp2, isValid4);
  const temp4 = liftB((a, b) => a&&b, temp3, isValid5);
  const allValid = liftB((a, b) => a&&b, temp4, isValid6);
  liftB(a => {document.querySelector('#okButton').disabled = !a}, allValid)
  }