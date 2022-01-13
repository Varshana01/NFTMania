const ctx = document.getElementById('myChart1').getContext('2d');

//Gradient fill
let gradient = ctx.createLinearGradient(0,0,0, 400);
gradient.addColorStop(0, 'rgba(58, 123, 213, 1');
gradient.addColorStop(1, 'rgba(0, 210, 255, 0.3)');

const labels = [
"Oct 9",
"Oct 16",
"Oct 24",
"Nov 1",
"Nov 16",
"Nov 25",
"Dec 2",
"Dec 13",
"Dec 27",
"Jan 4",
];

const data = {
  labels,
  datasets:[
  {
    data: [0.0289, 0.026, 0.017,0.0205,0.0317,0.105, 0.0168, 0.0177, 0.055, 0.015],
    label: "Avg. Price for Blazed Cats in Ethereum",
    fill: true,
    backgroundColor: gradient,
    borderColor: '#fff',
    pointBackgroundColor: 'rgba(189, 195, 199, 0.4)',
    tention: 0.2,
  },
  ]
};

const config = {
  type: 'line',
  data: data,
  options: {
    reponsive: true,

  },
};

const myChart1 = new Chart(ctx, config);


//-----------
//-----------

const ctx2 = document.getElementById('myChart2').getContext('2d');

//Gradient fill
let gradient2 = ctx2.createLinearGradient(0,0,0, 400);
gradient2.addColorStop(0, 'rgba(58, 123, 213, 1');
gradient2.addColorStop(1, 'rgba(0, 210, 255, 0.3)');

const labels2 = [
"Oct 9",
"Oct 16",
"Oct 27",
"Nov 1",
"Nov 17",
"Nov 25",
"Dec 2",
"Dec 13",
"Dec 27",
"Jan 6",
];

const data2 = {
  labels,
  datasets:[
  {
    data: [4.811, 4.565, 5.600,4.288,10.126,7.433, 6.959, 6.841, 12.492, 16.966],
    label: "Avg. Price for Mutant Ape in Ethereum",
    fill: true,
    backgroundColor: gradient2,
    borderColor: '#fff',
    pointBackgroundColor: 'rgba(189, 195, 199, 0.4)',
    tention: 0.2,
  },
  ]
};

const config2 = {
  type: 'line',
  data: data2,
  options: {
    reponsive: true,

  },
};

const myChart2 = new Chart(ctx2, config2);


//-----------
//-----------

const ctx3 = document.getElementById('myChart3').getContext('2d');

//Gradient fill
let gradient3 = ctx3.createLinearGradient(0,0,0, 400);
gradient3.addColorStop(0, 'rgba(58, 123, 213, 1');
gradient3.addColorStop(1, 'rgba(0, 210, 255, 0.3)');

const labels3 = [
"Oct 9",
"Oct 16",
"Oct 27",
"Nov 2",
"Nov 17",
"Nov 25",
"Dec 2",
"Dec 13",
"Dec 31",
"Jan 6",
];

const data3 = {
  labels,
  datasets:[
  {
    data: [1.189, 0.746, 0.823,1.054,1.105,0.974, 0.924, 0.818, 1.980, 2.012],
    label: "Avg. Price for DeadFellaz in Ethereum",
    fill: true,
    backgroundColor: gradient2,
    borderColor: '#fff',
    pointBackgroundColor: 'rgba(189, 195, 199, 0.4)',
    tention: 0.2,
  },
  ]
};

const config3 = {
  type: 'line',
  data: data3,
  options: {
    reponsive: true,

  },
};

const myChart3 = new Chart(ctx3, config3);




