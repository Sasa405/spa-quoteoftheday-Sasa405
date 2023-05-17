const quotes = [
    'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    "Don't watch the clock; do what it does. Keep going.",
    'The secret of getting ahead is getting started.',
    'Well done is better than well said.',
    'You miss 100% of the shots you don’t take.',
    'A goal is a dream with a deadline.',
    'Outstanding people have one thing in common: An absolute sense of mission.',
    'Trying is winning in the moment.',
    'Fall down seven times and stand up eight.',
    "You just can't beat the person who never gives up.",
    'There is little success where there is little laughter.',
    'We cannot solve our problems with the same thinking we used when we created them.'
  ];

// Write your Javascriot code here



// Funktion um ein zufälliges Zitat zu erzeugen
function getRandomQuote() {                                     //verwendet Math.floor und Math.random, um eine zufällige 
  const randomIndex = Math.floor(Math.random() * quotes.length);//Indexzahl zu erzeugen, die verwendet wird, um ein Zitat 
  return quotes[randomIndex];                                   //aus dem Array quotes zurückzugeben.
}


// Funktion um das Zitatelement mit einem zufälligen Zitat zu aktualisieren
function displayRandomQuote() {
  const quoteElement = document.getElementById("quote");      // ein Element anhand seiner ID abruft und den textContent des 
  quoteElement.textContent = getRandomQuote();                //Elements auf das von der Funktion getRandomQuote 
}                                                             //zurückgegebene Zitat setzt.



// Event listener für die Schaltfläche (Button) 'Zufälliges Zitat'
const randomButton = document.getElementById("randomButton"); //Diese Zeile fügt der Konstante randomButton einen 
randomButton.addEventListener("click", displayRandomQuote);   //Ereignis-Listener hinzu, so dass die Funktion 
                                                              //displayRandomQuote aufgerufen wird, wenn sie angeklickt wird.


// Zufälliges Anfangsangebot beim Laden der Seite
displayRandomQuote();                                   // Diese Zeile ruft die Funktion displayRandomQuote auf, um ein 
                                                        //zufälliges Zitat anzuzeigen, wenn die Seite geladen wird.