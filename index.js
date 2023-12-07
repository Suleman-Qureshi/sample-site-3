let catalogSection=document.getElementById(`Catalog`);
let RightBtn=catalogSection.firstElementChild.childNodes[3];
let LeftBtn=catalogSection.firstElementChild.childNodes[5];
let Catalogimgs=catalogSection.querySelectorAll(`div`)[1];
let circle1=document.querySelectorAll(`i`)[10]
let circle2=document.querySelectorAll(`i`)[11]
RightBtn.addEventListener(`click`,()=>{Catalogimgs.classList.add(`SlideOnClick1`);Catalogimgs.classList.remove(`SlideOnClick2`);circle1.classList.remove(`Rose`);circle1.classList.add(`Tan`);circle2.classList.remove(`Tan`);circle2.classList.add(`Rose`)})
LeftBtn.addEventListener(`click`,()=>{Catalogimgs.classList.add(`SlideOnClick2`);Catalogimgs.classList.remove(`SlideOnClick1`);circle2.classList.remove(`Rose`);circle2.classList.add(`Tan`);circle1.classList.remove(`Tan`);circle1.classList.add(`Rose`)})
RightBtn.addEventListener(`mousedown`,()=>{if(RightBtn.style.scale!=`0.9`){RightBtn.style.scale=`0.9`}else{RightBtn.style.scale=`1`}})
RightBtn.addEventListener(`mouseup`,()=>{if(RightBtn.style.scale!=`1`){RightBtn.style.scale=`1`}else{RightBtn.style.scale=`0.9`}})
LeftBtn.addEventListener(`mousedown`,()=>{if(LeftBtn.style.scale!=`0.9`){LeftBtn.style.scale=`0.9`}else{LeftBtn.style.scale=`1`}})
LeftBtn.addEventListener(`mouseup`,()=>{if(LeftBtn.style.scale!=`1`){LeftBtn.style.scale=`1`}else{LeftBtn.style.scale=`0.9`}})
