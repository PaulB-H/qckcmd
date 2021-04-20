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

  document.querySelectorAll("a").forEach((item) => {
    item.style.padding = "3px";
    item.style.background = "#ccc";
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

  document.querySelectorAll("a").forEach((item) => {
    item.style.padding = "3px";
    item.style.background = "#ccc";
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

{
  /* <pre><code class="md">Ctrl + Shift + [</code></pre>
<blockquote>Fold (collapse) region</blockquote>

<pre><code class="md">Ctrl + Shift + ]</code></pre>
<blockquote>Unfold (uncollapse) region</blockquote>

<p class="notice">
  For the following commands, keep Ctrl held but press the other keys
  one after another.
</p>

<pre><code class="md">Ctrl + K -> Ctrl + [</code></pre>
<blockquote>Fold (collapse) all subregions</blockquote>

<pre><code class="md">Ctrl + K -> Ctrl + ]</code></pre>
<blockquote>Unfold (uncollapse) all subregions</blockquote>

<pre><code class="md">Ctrl + K -> Ctrl + 0</code></pre>
<blockquote>Fold (collapse) all regions</blockquote>

<pre><code class="md">Ctrl + K -> Ctrl + J</code></pre>
<blockquote>Unfold (uncollapse) all regions</blockquote> */
}
