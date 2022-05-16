const btn=document.querySelectorAll("button")

const myImg=document.querySelector("img")

btn[0].addEventListener("click",(e)=>{
    myImg.src="https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgyMTExODQxMzk5MzUwNDAz/lionel-messi-points-up-copa-america.jpg"
    myImg.style.width="350px"
    myImg.style.height="350px"
    myImg.style.borderRadius="50%"
})

btn[1].addEventListener("click",(e)=>{
    myImg.src="https://cdn.britannica.com/63/222663-050-58CCA884/Soccer-forward-Cristiano-Ronaldo-2018.jpg"
    myImg.style.width="350px"
    myImg.style.height="350px"
    myImg.style.borderRadius="50%"
})