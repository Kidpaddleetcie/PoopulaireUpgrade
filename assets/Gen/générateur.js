let generatorDesc = "";
let generatorTitre = "";

function desc_copy() {
    let copyTextDesc = document.querySelector("#desc_generator");
    copyTextDesc.select();
    document.execCommand("copy");
}

function titre_copy() {
    let copyTextTitre = document.querySelector("#titre_generator");
    copyTextTitre.select();
    document.execCommand("copy");
}
document.querySelector("#desc_generator").addEventListener("click", desc_copy);
document.querySelector("#titre_generator").addEventListener("click", titre_copy);
document.querySelector("#gen").addEventListener("click", gen);


function gen() {
    //Construction de la description
    generatorDesc = "YouTube Poop créée par " + document.getElementById("name").value + " ! On espère que vous l'avez appréciée ^^ \n";
    generatorDesc += "Sa chaîne: " + document.getElementById("link").value + " \n";
    generatorDesc += "~=~=~=~=~=~ \n"
    generatorDesc += "Twitter de la commu' : https://twitter.com/poopulaire \n"
    generatorDesc += "À plus pour de prochaines YTPs ;) \n"
    generatorDesc += "#poopulaire #" + document.getElementById("name").value;
    document.getElementById("desc_generator").innerHTML = generatorDesc;
    //Construction du titre
    generatorTitre = "[YTP FR]" + document.getElementById("titre").value + "/" + document.getElementById("name").value;
    document.getElementById("titre_generator").value = generatorTitre;
}