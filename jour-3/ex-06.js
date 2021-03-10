const sentence = "Hello Konexio !";
  console.log(sentence.length);

console.log(sentence[sentence.length-2]);



var t = [];

for(var i = sentence.length-1; i >= 0; i--  ) {

     t.push(sentence[i]) ;

     
}

t.join("");

console.log(t.join(""));