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

console.log(commandObject);
