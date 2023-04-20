const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes =[];

//show new Quotes

function newQuote(){
   //Pick random quotes form API quotes array
   const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
   //Check if Author field is blank (Null) and replace it with unknown
    if(!quote.author){

        authorText.textContent = 'unknown' ;
    }

    else {
        authorText.textContent = quote.author;  
    }

    //check Quote length to determine styling
  
    if(quote.text.length>120){
quoteText.classList.add('long-quote'); 
   }

   else {
    quoteText.classList.remove('long-quote'); 
   }
   quoteText.textContent = quote.text;
}


 //Get Quotes from API
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes'
    try {
         //fetch : Bring API
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuote();
        // console.log(apiQuotes);
    } catch (error) {
        // catch error here
    }
}

//Tweet Quotes 

function tweetQuote() {

    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent} `
    window.open(twitterUrl, '_blank');
}

//Event Listeners 

newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);

//on load 
getQuotes();