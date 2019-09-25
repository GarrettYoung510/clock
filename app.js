const clock = document.querySelector(".clock");
const date = document.querySelector('.date');

const tick = () => {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const d = dateFns.format(now, 'dddd, Do, MMMM, YYYY')
  //   console.log(h, m, s);
  const time = `
  <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;

    clock.innerHTML = time;

    const today = `<div>${d}</div>`;
    date.innerHTML = today;
};

// every second it will tick
setInterval(tick, 1000);


// // date FNS
// const now = new Date();
// console.log(dateFns.isToday(now));

// // formatting option
// console.log(dateFns.format(now, 'YYYY'));
// console.log(dateFns.format(now, 'MMM'));
// console.log(dateFns.format(now, 'dddd'));
// console.log(dateFns.format(now, 'Do'));
// console.log(dateFns.format(now, 'dddd, Do, MMMM, YYYY'));

// const before = new Date('February 1 2019 12:00:00');
// console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));