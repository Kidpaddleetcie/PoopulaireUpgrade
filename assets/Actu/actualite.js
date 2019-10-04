gen = ' '

for (let ii = 0; ii < actua.length; ii++) {
    let actual = (actua[ii]);
    gen += '<div class="titre">';
    gen += '<h5 class="mt-0">' + actual.titre + '</h5>';
    gen += '<p class="actu">' + actual.desc + '</p>';
    gen += '<p class="date">' + actual.date + '</p>';
    gen += '</div>';
    gen += '</div>';

}
document.getElementById('page').innerHTML = gen;