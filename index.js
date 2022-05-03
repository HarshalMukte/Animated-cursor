const cursor = document.querySelector(".cursor");
const cursorTail = document.querySelector(".cursorTail");
const mouseActive = document.querySelectorAll(".mouseActive");

document.addEventListener("mousemove",(e)=>{
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;

    //for cursorTail
    cursorTail.style.left = `${e.pageX}px`;
    cursorTail.style.top = `${e.pageY}px`;
    
    mouseActive.forEach((e) => {
        e.addEventListener("mouseenter",(ele) => {
            cursor.classList.add("active")
            cursorTail.classList.add("hidden")
        })
        e.addEventListener("mouseleave",(ele) => {
            cursor.classList.remove("active")
            cursorTail.classList.remove("hidden")
        })
    })
})