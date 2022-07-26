// Compare two JSON

var obj1={
    person_name: 'person',
    age:5
}

var obj2={
    age:5,
    person_name: 'person'
}

for (const key1 in obj1) {
    for (const key2 in obj2) {
        if(obj1[key1]===obj2[key2])
            console.log(obj1[key1],"and",obj2[key2],"are Same");
        else
            console.log(obj1[key1],"and",obj2[key2],"are Diffrent");
    }
}

// Restcountries

const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", true);

request.send(null);

request.onload = function (e) {
    let response = JSON.parse(request.responseText);   

    for (const country of response) {
        console.log(country.name.official);
        console.log(country.flag);
        console.log(country.region);
        console.log(country.subregion);
        console.log(country.population); 
        console.log("______________________________________________________________");
    }
    
}



