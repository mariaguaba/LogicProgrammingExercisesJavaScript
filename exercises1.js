// Program a function that counts the number of characters in a text string

const charactersCount = (string = "")=> 
         (!string) 
         ? console.warn("No string was added") 
         : console.info(`The string "${string}" has ${string.length} characters`);

         charactersCount();
         charactersCount("Hi Maria Guaba");

// Program a function that returns the trimmed text based on the specified number of characters

function textCut (text, maxLenght) {
        if (text.length <= maxLenght) {
        return text;
        } else {
        return text.slice(0, maxLenght);
        }
}

       let text = "Mochi y cookie don't get along";
       let maxLenght = 20;

       let cuttedText = textCut (text, maxLenght);
       console.log(cuttedText);

//or

const textCut = (string = "", length = undefined)=> 
         (!string) 
          ? console.warn("No string was added") 
          :(length === undefined)
           ? console.warn("You didn't add the lenght")
           : console.info(string.slice(0, length));

         textCut("Hello Maria", 6);
         textCut();
         textCut("Hello Maria");

//Program  a function that, given a string, returns an array of texts separated by a certain character

const separateByCharacters = (string = "", separator = undefined)=> 
         (!string) 
          ? console.warn("No string was added") 
          : (separator === undefined)
           ? console.warn("The character separator was not added")
           : console.info(string.split(separator));

           separateByCharacters("I know you were trouble when you walked in", " ");
           separateByCharacters("Jan,Feb,Mar,Abr,May,Jun",",");
           separateByCharacters();
           separateByCharacters("Hi Anabel");
           separateByCharacters("","-");

//Program a function that repeats a text X times

const repeatText = (text = "", times =undefined) => {
    if (!text) return console.warn("No text was added");

    if (times === undefined) return console.warn("You forgot to specify the number of times to repeat the text");

    if (times === 0) return console.error("The number of times cannot be 0");

    if(Math.sign(times) === -1) return console.error ("The number of times cannot be negative");

    for (let i= 1;i <= times; i++){
        console.info(`${text}, ${i}`);
    }
}

    repeatText("Hello Maria", 5);
    repeatText("Hello Maria", 0);
    repeatText("Hello Maria", -5);
    repeatText("", 5);
    repeatText("Hello Maria");
