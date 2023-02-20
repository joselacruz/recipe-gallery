const gallery = document.querySelector(".main-grid");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const body = document.querySelector("body");

var mediaQuery = window.matchMedia("(max-width:700px)");

const allImg = [...gallery.querySelectorAll("img")];
const allImgsrc = allImg.map((img) => {
  return [img.src];
});

gallery.addEventListener("click", showImg);

function showImg(e) {
  if (e.target && e.target.tagName == "IMG") { 

  function mediaQueryMovil () {
    if(mediaQuery.matches) {
      gallery.classList.toggle("big-img-movil");
      e.target.scrollIntoView()
      
    }

   
    else{
        const currentImg = e.target.src;
    
        writeHtmlBigImg(currentImg);
    
        const IMG = document.querySelector(".big-img-container div img");
        const btnNext = document.querySelector(".btnNext");
        const btnBack = document.querySelector(".btnBack");
    
        btnNext.addEventListener("click", () => {
        //indexImgSelect apartir de la imagen actual ayuda a mostrar la siguente o anterior posision del array 
          const indexImgSelect = allImgsrc.findIndex((src) => src == IMG.src); 
    
          if (indexImgSelect <= allImgsrc.length - 2) {
            IMG.src = allImgsrc[indexImgSelect + 1];
          }
              // retormar la primera posicion del array de imagenes
              //permite volver a empezar la primera imagen si haci lo desea 
          else {
            IMG.src = allImgsrc[0];
          }
        });
      
        btnBack.addEventListener("click", () => {
        //currentIndexBack apartir de la imagen actual ayuda a mostrar la siguente o anterior posision del array 
          let currentIndexBack = allImgsrc.findIndex((src) => src == IMG.src);
    
          if (currentIndexBack < allImgsrc.length && currentIndexBack >= 1) {
            IMG.src = allImgsrc[currentIndexBack - 1];
          } else {
            // retormar la ultima posicion del array de imagenes
              //permite volver a empezar la ultima imagen si haci lo desea 
            IMG.src = allImgsrc[allImgsrc.length - 1];
          }
        });
      }
    }


  
  mediaQueryMovil();
}
}




function writeHtmlBigImg(src) {
  const figure = document.createElement("figure");
  const newImg = document.createElement("img");
  const containerImg = document.createElement("div");
  const btnNext = document.createElement("span");
  const btnBack = document.createElement("span");
  const btnClose = document.createElement("span");

  btnClose.classList.add("btnClose");
  btnNext.classList.add("btnNext");
  btnBack.classList.add("btnBack");
  figure.classList.add("big-img-container");
  containerImg.append(newImg, btnBack, btnNext,btnClose);
  figure.appendChild(containerImg);
  main.appendChild(figure);

  newImg.setAttribute("src", `${src}`);
  header.classList.add("hiden");
  gallery.classList.add("hiden");
  footer.classList.add("hiden");
  body.classList.add("color");

  btnClose.addEventListener("click", () => {
  header.classList.remove("hiden");
  gallery.classList.remove("hiden");
  footer.classList.remove("hiden");
  body.classList.remove("color");
  figure.remove();
  } )

}


