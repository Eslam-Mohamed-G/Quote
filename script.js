const quotes = [
    {
        id: 1,
        quote:"“The only way to do great work is to love what you do.”",
        quoteOwner:  "- Steve Jobs -"
    },
    {
        id: 2,
        quote:"“Innovation distinguishes between a leader and a follower.”",
        quoteOwner:  "- Steve Jobs -"
    },
    {
        id: 3,
        quote:"“Don't be afraid to give up the good to go for the great.”uu",
        quoteOwner:  "- John D. Rockefeller -"
    },
    {
        id: 4,
        quote:"“Success is not final, failure is not fatal: It is the courage to continue that counts.”",
        quoteOwner:  "- Winston Churchill -"
    },
    {
        id: 5,
        quote:"“The future belongs to those who believe in the beauty of their dreams.”",
        quoteOwner:  "- Eleanor Roosevelt -"
    },
    {
        id: 6,
        quote:"“To live is the rarest thing in the world. Most people exist, that is all.”",
        quoteOwner:  "- Oscar Wilde -"
    },
    {
        id: 7,
        quote:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        quoteOwner:  "- Mahatma Gandhi -"
    },
    {
        id: 8,
        quote:"“Without music, life would be a mistake.”",
        quoteOwner:  "- Friedrich Nietzsche -"
    },
    {
        id: 9,
        quote:"“It is better to be hated for what you are than to be loved for what you are not.” ",
        quoteOwner:  "- Andre Gide -"
    },
    {
        id: 10,
        quote:"“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.” ",
        quoteOwner:  "- Albert Einstein -"
    },
    {
        id: 11,
        quote:"“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
        quoteOwner:  "- Mark Twain -"
    },
    {
        id: 12,
        quote:"“Folks are usually about as happy as they make their minds up to be.”",
        quoteOwner:  "- Abraham Lincoln -"
    },
    {
        id: 13,
        quote:"“Success is not final, failure is not fatal: it is the courage to continue that counts.”",
        quoteOwner:  "- Winston S. Churchill -"
    },
    {
        id: 14,
        quote:"“One good thing about music, when it hits you, you feel no pain.”",
        quoteOwner:  "- Bob Marley -"
    },
    {
        id: 15,
        quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
        quoteOwner:  "- Marilyn Monroe -"
    },
    {
        id: 16,
        quote:"“A room without books is like a body without a soul.” ",
        quoteOwner:  "- Marcus Tullius Cicero  -"
    },
    {
        id: 17,
        quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
        quoteOwner:  "- Bernard M. Baruch -"
    },
    {
        id: 18,
        quote:"“In three words I can sum up everything I've learned about life: it goes on.” ",
        quoteOwner:  "- Robert Frost -"
    },
    {
        id: 19,
        quote:"“A great book should leave you with many experiences, and slightly exhausted at the end. You live several lives while reading.” ",
        quoteOwner:  "- William Styron -"
    },
    {
        id: 20,
        quote:"“If you don't know where you're going, any road'll take you there” ",
        quoteOwner:  "- George Harrison -"
    },
    {
        id: 21,
        quote:"“To make mistakes on your own path is better than walking perfectly on someone else’s.” ",
        quoteOwner:  "- Dostoevsky -"
    },
    {
        id: 22,
        quote:"“If you wish to gain the respect of others, the most important thing you must do is respect yourself. Only by respecting yourself will you compel others to respect you” ",
        quoteOwner:  "- Dostoevsky -"
    },
    {
        id: 23,
        quote:"“If you wish to conquer the whole world, conquer yourself first” ",
        quoteOwner:  "- Dostoevsky -"
    },
    {
        id: 24,
        quote:"“Greatness in life is not in never falling, but in rising every time we fall.” ",
        quoteOwner:  "- Victor Hugo -"
    },
    {
        id: 25,
        quote:"“Our ambition should exceed the limit of what we can achieve; what good is a bow that doesn’t aim beyond its range?” ",
        quoteOwner:  "- Robert Browning -"
    },
    {
        id: 26,
        quote:"“There is nothing preventing you from achieving your goals except your fear.” ",
        quoteOwner:  "- Tony Robbins -"
    },
    {
        id: 27,
        quote:"“Victory over oneself is the greatest victory.” ",
        quoteOwner:  "- Napoleon Bonaparte -"
    },
    {
        id: 28,
        quote:"“The only thing standing between you and achieving your dreams is strong will and hard work.” ",
        quoteOwner:  "- Albert Einstein -"
    },
    {
        id: 29,
        quote:"“If you can't fly, run. If you can't run, walk. If you can't walk, crawl. But no matter what, keep moving forward.” ",
        quoteOwner:  "- Martin Luther King Jr -"
    },
];
  

var quote =      document.getElementById("quote");
var quoteOwner = document.getElementById("quoteOwner");
var number =     document.getElementById("num");

var lastRandomNumber = null;

function generateQuote(){
    var newRandomNumber;
    do {
        newRandomNumber = Math.floor(Math.random() * quotes.length);
    } while (newRandomNumber === lastRandomNumber); 
    lastRandomNumber = newRandomNumber;

    // number.innerHTML      = quotes[newRandomNumber].id
    quote.innerHTML       = quotes[newRandomNumber].quote
    quoteOwner.innerHTML  = quotes[newRandomNumber].quoteOwner
}

// generateQuote.addEventListener("click", generateRandomQuote);  
// function generateRandomQuote() {
//     const id = Math.floor(Math.random() * quotes.length);
//     quote.textContent = quotes[id].quote
//     quoteOwner.textContent = quotes[id].quoteOwner
//     number.textContent = quotes[id].id
// } 