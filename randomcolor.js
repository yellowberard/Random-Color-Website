const colour = document.querySelector('button');
const h = document.querySelector('h1');
const rndmcolor = () => {

    let rgb = [1, 1, 1];
    rgb[0] = Math.floor(Math.random() * 255);
    rgb[1] = Math.floor(Math.random() * 255);
    rgb[2] = Math.floor(Math.random() * 255);

    return rgb;
}
const checkContrast = (tcolor) => {
    const textc = Math.floor(((parseInt(tcolor[0]) * 255) + (parseInt(tcolor[1]) * 255) + (parseInt(tcolor[2]) * 255)) / 765);
    const textColour = (textc > 96) ? 'black' : 'white';
    return textColour;
}
colour.addEventListener('click', function () {
    const tempcolor = rndmcolor();
    const newcolor = `rgb(${tempcolor[0]},${tempcolor[1]},${tempcolor[2]})`;
    const textcolor = checkContrast(tempcolor);
    document.body.style.backgroundColor = newcolor;
    h.style.color = textcolor;
    h.innerText = `THE COLOR IS: ${newcolor}`;
});