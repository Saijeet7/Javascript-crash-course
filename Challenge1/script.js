//Challenge 1: Your age in Days
function ageInDays(){
    var birthYear = prompt('What year were you born?');
    var ageDays = (2022-birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' +ageDays+ ' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(ageDays);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Cat generator

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//Challenge 3
