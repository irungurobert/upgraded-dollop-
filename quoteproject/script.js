const quotes=[
    {
        name:'Leo Tolstoy',
        quote:'If you want to be happy,be.'
    },
    {
        name:'Abraham Lincoln',
        quote:'Im a success today because i had a friend who believed in me and I didnt have the heart to let him down.'
    },
    {
       name:'Stephen King',
       quote:'Get busy living or get busy dying.'
    },
    {
        name:'Bow wow',
        quote:'Dont take thing personal'
    },
    {
        name:'Lao Tzu',
        quote:'A man who is self-taught,has a fool as a master'
    },
    {
        name:'Dylan Thomas',
        quote:'Do not go gentle into the good night,rage,rage against the dying light.'
    },
    {
        name:'Campbell',
        quote:'Dont rush,but dont wait.'
    },
    {
        name:'Mj23',
        quote:'They cant win till we quit.'
    }
]

const quoteBtn=document.querySelector('#quoteBtn');
const quoteAuthor=document.querySelector('#quoteAuthor');
const quote =document.querySelector('#quote');

quoteBtn.addEventListener('click',displayQuote);

function displayQuote()
{
 let number=Math.floor(Math.random()*quotes.length);
 quoteAuthor.innerHTML=quotes[number].name;
 quote.innerHTML=quotes[number].quote;   
}