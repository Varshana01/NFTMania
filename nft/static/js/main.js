fetch("https://deep-index.moralis.io/api/v2/0x495f947276749ce646f68ac8c248420045cb7b5e/nft?chain=eth&format=decimal", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-Key": "eoaTsoQpFbwbBM5Tx3LprPIgelH3NmSlfb9dgUdiREZO06EpdA3skE4J9K1LUelk"
  }
})
.then(response => response.json())
.then(data =>{
  putResults(data);
  console.log(data);
})
.catch(err => {
  //console.error(data);
});
  function putResults(objRes){
  let num1 = document.getElementById('num1');
    num1.innerText = "";
    let h4 = document.createElement('h4');
    h4.innerText = objRes.result[15].name;
    num1.appendChild(h4);

    let num2 = document.getElementById('num2');
    num2.innerText = "";
    let h4a = document.createElement('h4');
    h4a.innerText = objRes.result[1].name;
    num2.appendChild(h4a);

    let num3 = document.getElementById('num3');
    num3.innerText = "";
    let h4b = document.createElement('h4');
    h4b.innerText = "Mutant Ape";
    num3.appendChild(h4b);

    let num4= document.getElementById('num4');
    num4.innerText = "";
    let h4c = document.createElement('h4');
    h4c.innerText = objRes.result[8].name;
    num4.appendChild(h4c);

    let num5 = document.getElementById('num5');
    num5.innerText = "";
    let h4d = document.createElement('h4');
    h4d.innerText = objRes.result[12].name;
    num5.appendChild(h4d);


  }


const ctx = document.getElementById('myChart').getContext('2d');

//Gradient fill
let gradient = ctx.createLinearGradient(0,0,0, 400);
gradient.addColorStop(0, 'rgba(58, 123, 213, 1');
gradient.addColorStop(1, 'rgba(0, 210, 255, 0.3)');

const labels = [
"Oct 7 ",
"Oct 11",
"Oct 15",
"Oct 19",
"Oct 23",
"Oct 27",
"Oct 31",
"Nov 4",
"Nov 8",
"Nov 12",
"Nov 16",
"Nov 20",
"Nov 24",
"Nov 28",
"Dec 2",
"Dec 6",
"Dec 10",
"Dec 14",
"Dec 18",
"Dec 22",
"Dec 26",
"Jan 3",
"Jan 9",
];

const data = {
  labels,
  datasets:[
  {
    data: [54510, 51985, 39501,36418,40878,20178, 20183, 17453, 19147, 15931, 28240,34458, 33958, 39561,34515,26418,32494,39287,51097, 34953,42072,54426,78359,127196],
    label: "Num. of NFTs Sold",
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

const myChart = new Chart(ctx, config);

