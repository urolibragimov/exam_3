let obj = [
    {
        img: "images/services-img1.svg",
        name: "What I can do for you",
        desc: "Faster, better products that your users love. Here's all the services I provide:",
        li1: "Design Strategy",
        li2: "Web and Mobile App Design",
        li3: "Front-end Development",
    },
    {
        img: "images/services-img2.svg",
        name: "Applications I'm fluent in",
        desc: "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.",
        li1: "Sketch",
        li2: "Webflow",
        li3: "Figma",
    },
    {
        img: "images/services-img3.svg",
        name: "What you can expect",
        desc: "I design products that are more than pretty. I make them shippable and usable.",
        li1: "Clean and functional",
        li2: "Device and user friendly",
        li3: "Efficient and maintainable",
    }
]

function getCard(image, name, desc, lione, litwo, lithree) {
    return `
    <div class="services-row">
              <img src="${image}" alt="" />
              <h3>${name}</h3>
              <p>
              ${desc}
              </p>
              <ul>
           
            <li> <img src="images/icon.svg" alt="">${lione}</li>
            
            <li> <img src="images/icon.svg" alt="">${litwo}</li>
            
            <li> <img src="images/icon.svg" alt="">${lithree}</li>
              </ul>
            </div>
    `;
}

let productsContainer = document.querySelector(".services-rows");

function getProducts(products) {
    productsContainer.innerHTML = "";
    for (el of products) {
        productsContainer.innerHTML += getCard(el.img, el.name, el.desc, el.li1, el.li2, el.li3);
    }
}

getProducts(obj);

