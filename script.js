/*Document is loaded and ready event*/
window.addEventListener('DOMContentLoaded', (event) =>
{
  setUp(1);
});

function setUp(seed)
{
  let steps = 0;

  if (seed < 1 || !Number.isInteger(seed))
  {
        let val = document.getElementById("int-seed");
        
        alert("Seed value should be an positive Integer value >= 1\nDefault seed =1 will be used");
        seed = 1;
        val.value=seed;
    //val.value=100;
  }
  let data = [];

 /*  do {
    data.push(seed);
    seed = calcCollatz(seed);
  } while (seed != 1);
  data.push(seed);
  console.dir(data);
  drawIt(data); */  
    data.push(seed);
  while(seed !=1){
        
      seed = calcCollatz(seed);  
      data.push(seed);
    
  }
    console.dir(data);
    drawIt(data);
}

function drawIt(data)
{
  let ctx = document.getElementById('collatz-chart').getContext('2d');
  const myKeys = [...data.keys()];
  let myLineChart = new Chart(ctx,
  {
    type: 'line',
    data:
    {
      labels: myKeys,
      datasets: [
      {
        label: 'Collatz Conjecture HOTPO Graph',
        radius: 4,
        pointStyle: 'rectRot',
        backgroundColor: 'rgba(0, 102, 255, 0.2)',
        borderColor: 'rgba(0, 102, 255, 255)',
        borderWidth: 1,
        data: data,
        fill: true,
        lineTension: 0,
      }, ],
      options:
      {
        responsive: true,
        title:
        {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
    },
  });
}

function calcCollatz(seedVal)
{
  //value is even
  if (seedVal % 2 == 0)
  {
    return seedVal / 2;
    //value is odd
  }
  return seedVal * 3 + 1;
}

function getSeed()
{
  let seed = document.getElementById("int-seed");
  let x = seed.value;
  x = Number(x);
  setUp(x);
}

let btn = document.getElementById("btn");
btn.addEventListener("click", getSeed);
//seed = Number.value(seed.value);
//setUp(seed);