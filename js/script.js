/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes=[
  {
  quote:"If anyone suppresses anger when he is in a position to give vent to it, Allah, the Exalted, will call him on the Day of Resurrection over the heads of all creatures, and ask him to choose any of the bright and large eyed maidens he wishes.",
  source :"Mu'adh ibn Ana",
  citation:"Sunan Abi Dawud 4777",
  year:""
  },

  {
  quote:"2",
  source :"",
  citation:"",
  year:""
  },

  {
  quote:"3",
  source :"",
  citation:"",
  year:""
  },

  {
  quote:"4",
  source :"",
  citation:"",
  year:""
  },

  {
  quote:"5",
  source :"",
  citation:"",
  year:""
  },
]
  

  

/***
 * `getRandomQuote` function
***/
function getRandomQuote (){
  randomNo = Math.floor(Math.random()* quotes.length);
  return quotes[randomNo];
}


/***
 * `printQuote` function
***/
function printQuote () {
 

  randomQuote = getRandomQuote();
  
  let html =`<p calss="quote"> ${randomQuote.quote} </p>`;
  html += `<p calss="source"> ${randomQuote.source} `;
  html += `</p>`;
  console.log(html)
  return document.getElementById('quot-box').innerHTML= html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);