let catalogSection=document.getElementById(`Catalog`);
let DeliverySection=document.getElementById(`Delivery`);
let RightBtn=catalogSection.firstElementChild.childNodes[3];
let LeftBtn=catalogSection.firstElementChild.childNodes[5];
let RightBtn1=DeliverySection.getElementsByTagName(`i`)[2];
let LeftBtn1=DeliverySection.getElementsByTagName(`i`)[3];
let RightBtn2=DeliverySection.getElementsByTagName(`i`)[0];
let LeftBtn2=DeliverySection.getElementsByTagName(`i`)[1];
let Catalogimgs=catalogSection.querySelectorAll(`div`)[1];
let DeliveryImgs=DeliverySection.querySelectorAll(`div`)[5];
let circle1=document.querySelectorAll(`i`)[12]
let circle2=document.querySelectorAll(`i`)[13]
let circle3=document.querySelectorAll(`i`)[18]
let circle4=document.querySelectorAll(`i`)[19]
let circle5=document.querySelectorAll(`i`)[20]
RightBtn.addEventListener(`click`,()=>{Catalogimgs.classList.add(`SlideOnClick1`);Catalogimgs.classList.remove(`SlideOnClick2`);circle1.classList.remove(`Rose`);circle1.classList.add(`Tan`);circle2.classList.remove(`Tan`);circle2.classList.add(`Rose`)})
LeftBtn.addEventListener(`click`,()=>{Catalogimgs.classList.add(`SlideOnClick2`);Catalogimgs.classList.remove(`SlideOnClick1`);circle2.classList.remove(`Rose`);circle2.classList.add(`Tan`);circle1.classList.remove(`Tan`);circle1.classList.add(`Rose`)})
RightBtn.addEventListener(`mousedown`,()=>{if(RightBtn.style.scale!=`0.9`){RightBtn.style.scale=`0.9`}else{RightBtn.style.scale=`1`}})
RightBtn.addEventListener(`mouseup`,()=>{if(RightBtn.style.scale!=`1`){RightBtn.style.scale=`1`}else{RightBtn.style.scale=`0.9`}})
LeftBtn.addEventListener(`mousedown`,()=>{if(LeftBtn.style.scale!=`0.9`){LeftBtn.style.scale=`0.9`}else{LeftBtn.style.scale=`1`}})
LeftBtn.addEventListener(`mouseup`,()=>{if(LeftBtn.style.scale!=`1`){LeftBtn.style.scale=`1`}else{LeftBtn.style.scale=`0.9`}})
RightBtn1.addEventListener(`click`,()=>{DeliveryImgs.classList.add(`SlideanmationForDeliverySection`);DeliveryImgs.classList.remove(`SlideanmationForDeliverySection1`);DeliveryImgs.classList.remove(`SlideanmationForDeliverySection2`);DeliveryImgs.classList.remove(`SlideanmationForDeliverySection3`);RightBtn1.classList.add(`hidden`);LeftBtn2.classList.remove(`hidden`);circle3.classList.remove(`Rose`);circle4.classList.add(`Rose`);})
RightBtn2.addEventListener(`click`,()=>{DeliveryImgs.classList.add(`SlideanmationForDeliverySection2`);DeliveryImgs.classList.remove(`SlideanmationForDeliverySection`);DeliveryImgs.classList.remove(`SlideanmationForDeliverySection1`);DeliveryImgs.classList.remove(`SlideanmationForDeliverySection3`);RightBtn2.classList.add(`hidden`);LeftBtn1.classList.remove(`hidden`);LeftBtn2.classList.remove(`hidden`);circle4.classList.remove(`Rose`);circle5.classList.add(`Rose`);})
LeftBtn1.addEventListener(`click`,()=>{DeliveryImgs.classList.add(`SlideanmationForDeliverySection3`);DeliveryImgs.classList.remove(`SlideanmationForDeliverySection1`);DeliveryImgs.classList.remove(`SlideanmationForDeliverySection`);DeliveryImgs.classList.remove(`SlideanmationForDeliverySection2`);RightBtn2.classList.remove(`hidden`);LeftBtn1.classList.add(`hidden`);circle5.classList.remove(`Rose`);circle4.classList.add(`Rose`);})
LeftBtn2.addEventListener(`click`,()=>{DeliveryImgs.classList.add(`SlideanmationForDeliverySection1`);DeliveryImgs.classList.remove(`SlideanmationForDeliverySection`);DeliveryImgs.classList.remove(`SlideanmationForDeliverySection2`);DeliveryImgs.classList.remove(`SlideanmationForDeliverySection3`);LeftBtn2.classList.add(`hidden`);RightBtn1.classList.remove(`hidden`);circle4.classList.remove(`Rose`);circle3.classList.add(`Rose`);})