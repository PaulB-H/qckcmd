console.log("Hello world");

const collapseAll = () => {
  document.querySelectorAll(".collapse").forEach((item) => {
    if (item.clientHeight !== item.firstElementChild.clientHeight) {
      item.firstElementChild.click();
    }
  });
};

const expandAll = () => {
  document.querySelectorAll(".collapse").forEach((item) => {
    if (item.clientHeight === item.firstElementChild.clientHeight) {
      item.firstElementChild.click();
    }
  });
};

const toggleSection = (e) => {
  const parentElem = e.currentTarget.parentElement;

  let sectionHeight = e.currentTarget.parentElement.clientHeight;

  const headerHeight = e.currentTarget.clientHeight;

  const closestIco = e.currentTarget.firstElementChild;

  if (sectionHeight <= headerHeight) {
    // Expand sections, show collapse icon
    // closestIco.innerHTML = "&nbsp;&#11165;"; This HTML entity not working on mobile...
    closestIco.outerHTML = `<i class="ri-arrow-up-s-line toggleIco"></i>`;

    // closestIco.innerHTML = "&nbsp;&#5169;";
    // We need to know what the full height of the section would
    // be when expanded, so we create a deep clone, set overflow visible, remove
    // the fixed height, append it to the body (so it gets a calculable height)
    // then delete it. This all happens without any visible change!
    const clone = parentElem.cloneNode(true);
    Object.assign(clone.style, {
      overflow: "visible",
      height: "",
    });
    document.querySelector("body").appendChild(clone);
    const elemFullHeight = clone.clientHeight;
    clone.remove();

    // This was incorrect because the section height
    // when the section is collapsed is not what I want to be dividing
    // instead we want to use elemFullHeight, obtained from the clone
    // const expandRate = sectionHeight / 5;
    const expandRate = elemFullHeight / 15;

    const expandInterv = window.setInterval(() => {
      if (sectionHeight < elemFullHeight) {
        parentElem.style.height = `${sectionHeight + expandRate}px`;
        sectionHeight += expandRate;

        if (parentElem.clientHeight >= elemFullHeight) {
          // We need to remove the fixed height at the end
          // so the default style on the .collapse class height: max-content
          // can take over, and will adjust for any expanded children
          parentElem.style.height = "";
        }
      } else {
        clearInterval(expandInterv);
      }
    }, 10);
  } else {
    // Collapse sections, show expand icon
    // closestIco.innerHTML = "&nbsp;&#11167;"; This HTML entity not working on mobile...
    closestIco.outerHTML = `<i class="ri-arrow-down-s-line toggleIco"></i>`;

    const shrinkRate = sectionHeight / 15;
    const collapseInterv = window.setInterval(() => {
      if (sectionHeight > headerHeight) {
        parentElem.style.height = `${sectionHeight - shrinkRate}px`;
        sectionHeight -= shrinkRate;

        if (sectionHeight < headerHeight) {
          parentElem.style.height = `${headerHeight}px`;
        }
      } else {
        clearInterval(collapseInterv);
      }
    }, 10);
  }
};

window.onload = (e) => {
  hljs.highlightAll();

  hljs.initLineNumbersOnLoad();

  document.querySelectorAll(".collapse").forEach((item) => {
    item.firstElementChild.addEventListener("click", toggleSection);
  });

  // Collapse all without animation / simulating click event...
  document.querySelectorAll(".collapse").forEach((section) => {
    const icon = section.firstElementChild.firstElementChild;
    section.style.height = `${section.firstElementChild.clientHeight}px`;
    icon.outerHTML = `<i class="ri-arrow-down-s-line toggleIco"></i>`;
  });

  document.querySelector("body").style.visibility = "visible";
};

// // Force collapse all on window resize
// window.addEventListener("resize", () => {
//   document.querySelectorAll(".collapse").forEach((section) => {
//     const icon = section.firstElementChild.firstElementChild;
//     section.style.height = `${section.firstElementChild.clientHeight}px`;
//     icon.outerHTML = `<i class="ri-arrow-down-s-line toggleIco"></i>`;
//   });
// });
