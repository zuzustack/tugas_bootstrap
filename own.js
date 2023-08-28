window.onload = () => {
  const customCursor = document.getElementById("customcursor");
  const ref_link = document.querySelectorAll("a.highlight");
  const mask = document.querySelectorAll("zs-higlight");
  const circle = document.querySelectorAll(`.collapse[dt-zs-circle="true"]`);
  const buttonCollapse = document.querySelectorAll("a[data-bs-toggle='collapse']");
  const runTyping = () => {
    const typing = document.querySelectorAll("zs-typing");
    typing.forEach(async (e) => {
      let i = 0;
      const span = document.createElement("div");
      span.innerHTML = "|";
  
      span.classList.add("blip");
      const div = document.createElement("div");
  
      e.appendChild(div);
      e.appendChild(span);
      e.classList.add("d-flex");
  
      let timer = setInterval(() => {
        div.innerHTML += e.attributes.text.value[i];
        i += 1;
  
        if (i == e.attributes.text.value.length) {
          clearInterval(timer);
        }
      }, 70);
    });
  }
  //   RefLink
  ref_link.forEach((e) => {
    e.onmouseenter = () => {
      console.log("hello");
      customCursor.classList.add("custom-cursor-show");
    };

    e.onmouseout = () => {
      customCursor.classList.remove("custom-cursor-show");
    };
  });

  // Mask
  mask.forEach((e) => {
    e.innerHTML = `
    <img
        class="position-absolute"
        src="https://source.unsplash.com/1200x1200?forest"
        style="width: ${e.attributes.width.value}; height: ${e.attributes.height.value}; z-index:-1; transition: .3s"
    ></img>

    <svg 
        style="width: ${e.attributes.width.value}; height: ${e.attributes.height.value};"
    ">
      <mask id="maskSvg">
        <circle fill="#ffffff" cx="75" cy="75" r="45"></circle>
      </mask>
      <image
        style="width: ${e.attributes.width.value}; height: ${e.attributes.height.value};"
        xlink:href="https://source.unsplash.com/1200x1200?forest"
        mask="url(#maskSvg)"
      ></image>
    </svg>
    `;

    e.onmousemove = (el) => {
      e.children[1].children[0].children[0].attributes.cx.value = el.offsetX;
      e.children[1].children[0].children[0].attributes.cy.value = el.offsetY;
    };

    e.onmouseenter = (el) => {
      e.children[0].classList.add("mask-bg");
    };

    e.onmouseout = (el) => {
      e.children[0].classList.remove("mask-bg");
    };
  });

  buttonCollapse.forEach((e) => {
    e.addEventListener("click", (e) => {
      let test1 = document.querySelector(".collapse.show");
      // let test2 = document.querySelector(`.collapse.show[dt-zs-circle="true"]`);
      if (test1) {
        test1.classList.remove("show")
        circle[0].innerHTML = ""
      } else {
        console.log("testing bro");
        circle.forEach((e) => {    
          
          if(e.parentElement.clientWidth < 560){
            for (let i = 0; i < 20; i++){
              let test = document.createElement("div");
              let s = Math.floor(Math.random() * 10) + 4
              let r = Math.floor(Math.random() * 50) + 50;
              let top = Math.floor(Math.random() * 400);
              let left = Math.floor(Math.random() * e.parentElement.clientWidth);
              let red = Math.floor(Math.random() * 255);
              let green = Math.floor(Math.random() * 255);
              let blue = Math.floor(Math.random() * 255);
        
              test.innerHTML = `<div class="box position-absolute" style="z-index: 1; width: ${r}px; height: ${r}px; animation-duration: ${s}s; animation-name: zoomInZoomOut; top: ${top}px; left: ${left}px; background: rgba(${red},${green}, ${blue}, .8)"></div>`
              e.appendChild(test);
            }
          } else {
            for (let i = 0; i < 100; i++){
              let test = document.createElement("div");
              let s = Math.floor(Math.random() * 10) + 4
              let r = Math.floor(Math.random() * 50) + 50;
              let top = Math.floor(Math.random() * 400);
              let left = Math.floor(Math.random() * 1140);
              let red = Math.floor(Math.random() * 255);
              let green = Math.floor(Math.random() * 255);
              let blue = Math.floor(Math.random() * 255);
        
              test.innerHTML = `<div class="box position-absolute" style="z-index: 0; width: ${r}px; height: ${r}px; animation-duration: ${s}s; animation-name: zoomInZoomOut; top: ${top}px; left: ${left}px; background: rgba(${red},${green}, ${blue}, .8)"></div>`
              e.appendChild(test);
            }
          }
          

          e.classList.add("show");
          let tp = document.createElement("div");
          e.appendChild(tp);
          tp.outerHTML = `<zs-typing class="bold text-danger f-sp-1 fs-1 justify-content-center" style="z-index: 100;" text="Hayo Ngapain?"></zs-typing>`;
          runTyping()
        });
      }
    });
  })

  window.onmousemove = (e) => {
    customCursor.style.top = `${e.clientY - 24}px`;
    customCursor.style.left = `${e.clientX - 24}px`;
  };

  runTyping()
};
