Absolutely! Here's a comprehensive **cheat sheet** of all the most commonly used **CSS pseudo-classes and pseudo-elements**, complete with examples and usage notes.

---

# 🎯 CSS Pseudo-Classes (`:`)

### 👤 User Action / State

| Selector    | Description                          | Example                                        |
| ----------- | ------------------------------------ | ---------------------------------------------- |
| `:hover`    | When mouse is over the element       | `button:hover { background: blue; }`           |
| `:focus`    | Element is focused (e.g. input)      | `input:focus { outline: none; }`               |
| `:active`   | Element is being activated (clicked) | `a:active { color: red; }`                     |
| `:visited`  | A link that’s been visited           | `a:visited { color: purple; }`                 |
| `:checked`  | Checkbox or radio is checked         | `input:checked + label { font-weight: bold; }` |
| `:disabled` | Disabled form input                  | `input:disabled { opacity: 0.5; }`             |
| `:enabled`  | Enabled form input                   | `input:enabled { border-color: green; }`       |
| `:required` | Required form field                  | `input:required { border-color: red; }`        |
| `:optional` | Optional form field                  | `input:optional { border-color: gray; }`       |

---

### 📐 Structural / Position

| Selector          | Description               | Example                                 |
| ----------------- | ------------------------- | --------------------------------------- |
| `:first-child`    | First child of its parent | `li:first-child { font-weight: bold; }` |
| `:last-child`     | Last child of its parent  | `li:last-child { font-style: italic; }` |
| `:nth-child(n)`   | Nth child of its parent   | `li:nth-child(2) { color: red; }`       |
| `:nth-of-type(n)` | Nth child of its type     | `p:nth-of-type(3) { margin-top: 1em; }` |
| `:only-child`     | Element is the only child | `div:only-child { padding: 1em; }`      |
| `:empty`          | Element has no children   | `div:empty { display: none; }`          |

---

### 🧠 Logical

| Selector            | Description                                   | Example                                              |
| ------------------- | --------------------------------------------- | ---------------------------------------------------- |
| `:not(selector)`    | Negates a selector                            | `div:not(.highlight) { color: gray; }`               |
| `:is(selectors)`    | Groups multiple selectors (keeps specificity) | `:is(h1, h2, h3) { font-weight: bold; }`             |
| `:where(selectors)` | Same as `:is()`, but zero specificity         | `:where(.btn, .link) { text-transform: uppercase; }` |

---

### 🔗 URL / Navigation

| Selector  | Description                              | Example                                    |
| --------- | ---------------------------------------- | ------------------------------------------ |
| `:target` | Element targeted by a `#hash` in the URL | `#section1:target { background: yellow; }` |
| `:link`   | Unvisited link                           | `a:link { color: blue; }`                  |

---

### 🧩 Form-specific

| Selector        | Description                        | Example                                      |
| --------------- | ---------------------------------- | -------------------------------------------- |
| `:valid`        | Input value is valid               | `input:valid { border-color: green; }`       |
| `:invalid`      | Input value is invalid             | `input:invalid { border-color: red; }`       |
| `:in-range`     | Number input in allowed range      | `input:in-range { background: lightgreen; }` |
| `:out-of-range` | Number input outside allowed range | `input:out-of-range { background: pink; }`   |

---

# 🎭 CSS Pseudo-Elements (`::`)

### ✏️ Content Injection

| Selector   | Description                       | Example                          |
| ---------- | --------------------------------- | -------------------------------- |
| `::before` | Inserts content before an element | `h2::before { content: "👉 "; }` |
| `::after`  | Inserts content after an element  | `h2::after { content: " 👈"; }`  |

---

### 🅰️ Text Manipulation

| Selector         | Description                    | Example                               |
| ---------------- | ------------------------------ | ------------------------------------- |
| `::first-letter` | Targets the first letter       | `p::first-letter { font-size: 2em; }` |
| `::first-line`   | Targets the first line of text | `p::first-line { color: blue; }`      |

---

### 🧊 Input Specific

| Selector        | Description                       | Example                               |
| --------------- | --------------------------------- | ------------------------------------- |
| `::placeholder` | Styles placeholder text in inputs | `input::placeholder { color: gray; }` |

---

### 🖱️ User Interaction

| Selector      | Description                                | Example                                             |
| ------------- | ------------------------------------------ | --------------------------------------------------- |
| `::selection` | Styles text when it's selected by the user | `::selection { background: yellow; color: black; }` |

---

## 📝 Notes

* Use **`:` for pseudo-classes** and **`::` for pseudo-elements** (modern standard).
* **`:is()`** and **`:where()`** simplify and clean up complex selectors.
* Be mindful of **specificity** when using `:is()` — it inherits the highest specificity inside the group, while `:where()` has none.

---
