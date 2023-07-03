const galeria = document.getElementById('galeria-casamento')

for(i=1; i<=100; i++) {
    let element = Object.assign(document.createElement('a'),{innerHTML:'<img loading="lazy" src="../media/images/Casamento/Casamento'+i+'.webp" alt="">'});
    element.setAttribute('href',"../media/images/Casamento/Casamento"+i+".webp");
    galeria.appendChild(element);
    setTimeout(()=>{},1000)
}