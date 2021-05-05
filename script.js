hljs.initHighlightingOnLoad();
hljs.initLineNumbersOnLoad();

const applyNightMode = () => {
  document.querySelector("html").style.backgroundColor = "black";

  document
    .querySelectorAll("p, BLOCKQUOTE, h1, h2, h3, h4, h5")
    .forEach((item) => {
      item.style.color = "white";
    });

  document.querySelectorAll("code").forEach((item) => {
    item.style.backgroundColor = "#555";
    item.style.color = "white";
  });

  document.querySelectorAll(".notice").forEach((item) => {
    item.style.color = "black";
  });

  document.querySelectorAll("hr").forEach((item) => {
    item.style.color = "white";
  });
};

applyNightMode();

const revertNightMode = () => {
  document.querySelector("html").style.backgroundColor = null;

  document
    .querySelectorAll("p, BLOCKQUOTE, h1, h2, h3, h4, h5")
    .forEach((item) => {
      item.style.color = null;
    });

  document.querySelectorAll("code").forEach((item) => {
    item.style.backgroundColor = null;
    item.style.color = null;
  });

  document.querySelectorAll(".notice").forEach((item) => {
    item.style.color = null;
  });

  document.querySelectorAll("hr").forEach((item) => {
    item.style.color = "black";
  });
};

// revertNightMode();

const commandObject = {
  vscodecommands: [
    { command: "Ctrl + `", desc: "Show / hide integrated terminal" },
    { command: "Ctrl + B", desc: "Open in browser (requires extension)" },
    { command: "Ctrl + Shift + [", desc: "Fold (collapse) region" },
    // { command: "Ctrl + B", desc: "Open in browser (requires extension)" },
    // { command: "Ctrl + B", desc: "Open in browser (requires extension)" },
    // { command: "Ctrl + B", desc: "Open in browser (requires extension)" },
  ],
};

let collapsibleSections = document.querySelectorAll(".collapsible");

const collapseAllSections = () => {
  collapsibleSections.forEach((item) => {
    item.style.height = "43px";
    item.classList.add("collapsed");
  });
};
collapseAllSections();

collapsibleSections.forEach((item) => {
  let header = item.firstElementChild;
  header.style = "color: white; display: flex; justify-content: space-between";
  header.insertAdjacentHTML(
    `beforeend`,
    `
    <button class="expandcollapse" onclick="expandCollapse('${item.id}')">Expand</button>
  `
  );
});

const expandCollapse = (sectionID) => {
  console.log(sectionID);
  let sectionToCollapse = document.getElementById(`${sectionID}`);
  let sectionCollapseBtn =
    sectionToCollapse.firstElementChild.firstElementChild;
  if (sectionToCollapse.classList.contains("collapsed")) {
    sectionToCollapse.style.height = null;
    sectionCollapseBtn.innerHTML = "Collapse";
    sectionToCollapse.classList.remove("collapsed");
    sectionToCollapse.classList.add("expanded");
  } else if (sectionToCollapse.classList.contains("expanded")) {
    sectionToCollapse.style.height = "43px";
    sectionCollapseBtn.innerHTML = "Expand";
    sectionToCollapse.classList.add("collapsed");
    sectionToCollapse.classList.remove("expanded");
  }
};

const sortPackageList = () => {
  const packages = document.getElementById("package-list");
  let len = packages.children.length;
  let IDarr = [];
  let packageArr = [];

  for (let i = 0; i < len; i++) {
    IDarr.push(packages.children[i].id);
    packageArr.push(packages.children[i]);
  }
  IDarr.sort();

  let sortedElems = [];
  IDarr.forEach((id) => {
    packageArr.forEach((elem) => {
      if (elem.id === id) {
        sortedElems.push(elem);
      }
    });
  });

  packages.innerHTML = "";
  sortedElems.forEach((item) =>
    packages.insertAdjacentElement("beforeend", item)
  );
};
sortPackageList();
