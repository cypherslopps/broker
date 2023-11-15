const DOM = {
    accordionItems: Array.from(document.querySelectorAll(".accordion-item"))
}

function accordion(index) {
    const accordionContainer = DOM.accordionItems[index];
    const accordionContent = accordionContainer.querySelector(".accordion-content");
    const accordionTrigger = accordionContainer.querySelector(".trigger");
    const accordionIcon = accordionTrigger.querySelector(".accordion-icon");

    // Hide all accordion content
    // DOM.accordionItems.forEach(ele => {
    //     const accordionContentChild = ele.querySelector(".accordion-content");
        
    //     if(!accordionContentChild.className.includes("hide")) 
    //         accordionContentChild.classList.add("hide");
    // });

    // Toggle accordion items
    accordionContent.classList.toggle("hide");
    accordionTrigger.classList.toggle("active");
    accordionIcon.classList.toggle("active");
}

DOM.accordionItems.forEach((ele, index) => ele.addEventListener("click", () =>  accordion(index), false));