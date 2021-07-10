const colour = document.querySelector('button');
const h = document.querySelector('h1');
const rndmcolor = () => {

    let rgb = [1, 1, 1];
    rgb[0] = Math.floor(Math.random() * 255);
    rgb[1] = Math.floor(Math.random() * 255);
    rgb[2] = Math.floor(Math.random() * 255);

    return rgb;
}

colour.addEventListener('click', function () {
    const newcolor = rndmcolor();
    const newc = `rgb(${newcolor[0]},${newcolor[1]},${newcolor[2]})`;
    const textc = Math.floor(((parseInt(newcolor[0]) * 299) + (parseInt(newcolor[1]) * 587) + (parseInt(newcolor[2]) * 114)) / 1000);
    const textColour = (textc > 125) ? 'black' : 'white';
    document.body.style.backgroundColor = newc;
    h.style.color = textColour;
    h.innerText = `THE COLOR IS: ${newcolor}`;
});