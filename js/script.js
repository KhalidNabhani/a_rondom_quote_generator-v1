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
  quote: "There is none amongst the Muslims, who plants a tree or sows seeds, and then a bird, or a person or an animals eats from it, but is regarded as a charitable gift for him",
  source :"Prophet Mohammedﷺ",
  citation:"Sunan Abi Dawud 4777",
  year:"610-632 AD",
  grade:"Sahih"
  },

  {
  quote:"A good deed done to an animal is as meritorious as a good deed done to a human being, while an act of cruelty to an animal is as bad as an act of cruelty to a human being",
  source :"Prophet Mohammedﷺ",
  citation:"",
  year:"610-632 AD",
  grade:""
  },

  {
  quote:"You will not have secure faith until you love one another and have mercy on those who live upon the earth.",
  source :"Prophet Mohammedﷺ",
  citation: "Hadiths: Bukhari, Muslim, and Abu Dawud",
  year:"610-632 AD",
  grade:""
  },

  {
  quote:"Fear Allah in these mute animals, and ride them when they are fit to be ridden, and let them go free when … they (need to) rest.",
  source :"Prophet Mohammedﷺ",
  citation:"Hadith: Abu Dawud",
  year:"610-632 AD",
  grade:""
  },

  {
  quote:"May Allah curse anyone who maims animals.",
  source :"Prophet Mohammedﷺ",
  citation:"Hadith: Bukhari",
  year:"610-632 AD",
  grade:""
  },
]
 /************************
  * create a rondome number 
  * param max nmber to return 
  * return the random number 
  * ********************** */ 
function randomNumber(max){
  return Math.floor(Math.random()* max);
}

/**************
 * Generate cahnge the background to random color each time its called 
 ***********/
function randomBackgroundColors () {
  return document.body.style.backgroundColor = `rgb(${randomNumber(256)},${randomNumber(256)},${randomNumber(256)})`;
} 

/***
 * `getRandomQuote` function
 *  function should create a random number, 
 *  and use that random number to return a random 
 *  quote object from the quotes array.
***/
function getRandomQuote (){
  randomNo = randomNumber(quotes.length);
  return quotes[randomNo];
}


/***
 * `printQuote` function
 * 1- call the getRandomQuote function, 
 * 2- use the returned quote object to build a string of HTML and quote properties, 
 * 3- then use that string to display a random quote in the browser.
***/
function printQuote () {
 

  randomQuote = getRandomQuote();   // created variable to store a quote selected randomly 
  
  
   // using  template literalsto concatenate string into html 
 
  let html =` <p class="quote"> ${randomQuote.quote} </p>`;
  html += `<p class= "source"> ${randomQuote.source} `;

  if (randomQuote.citation){
    html += `<span class = "citation"> ${randomQuote.citation}</span>`;

  }
  if (randomQuote.year){
    html += `<span class = "year"> ${randomQuote.year}</span>`;

  }
  html += `</p>`; 


  //change color of page 
  randomBackgroundColors();

  // update the page with new random quote 
  document.getElementById("quote-box").innerHTML= html;

  return html;
}




//  print a new quote to the page at regular intervals of 15 seconds.
setInterval(printQuote, 15000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);