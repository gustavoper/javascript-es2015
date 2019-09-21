/**
 * Examples of using let and const vars
 * 
 */

let movie = 'LOTR';

function starWarsFan()
{
    const movie = 'Star Wars';
    return movie;
}


function marvelFan()
{
    movie = 'The Avengers';
    return movie;
}

function blizzardFan()
{
    const isFan = true;
    let phrase = 'Warcraft';
    console.log('before if : ' + phrase);
    if (isFan===true) {
        let phrase = 'initial text: ';
        phrase = ' For the Horde! ';

        console.log("inside if: " + phrase);
    }

    phrase = ' For the Alliance! ';

    console.log("after if: " + phrase);

}


console.log(movie);
console.log(starWarsFan());
console.log(marvelFan());
console.log(movie);
console.log(blizzardFan());