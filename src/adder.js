export default function generated() {
  const a = extractValueB(document.querySelector('#name'))
  const b = extractValueB(document.querySelector('#numEmail'))
  const c = liftB((a, b) => Number(a) + Number(b), a, b);
  insertDomB( c , 'app' );
  }