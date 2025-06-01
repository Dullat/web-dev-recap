Absolutely! Here's an **updated and more complete CSS selector summary** — now including advanced attribute selectors like `[class*="jum"]` and others, so you have a **full cheat sheet** at your fingertips.

---

## 🧾 **Complete CSS Selector Cheat Sheet (Beginner to Advanced)**

---

### 🔹 **1. Basic Selectors**

| Selector           | Example    | Meaning                          |
| ------------------ | ---------- | -------------------------------- |
| `*`                | `*`        | Universal — selects all elements |
| `element`          | `p`, `div` | Selects by tag name              |
| `.class`           | `.card`    | Selects by class                 |
| `#id`              | `#header`  | Selects by ID                    |
| `element, element` | `h1, h2`   | Group selector                   |

---

### 🔹 **2. Combinators (Relationships)**

| Selector | Example   | Selects                                |
| -------- | --------- | -------------------------------------- |
| `A B`    | `div p`   | All `<p>` inside `<div>` (descendants) |
| `A > B`  | `ul > li` | Only direct children                   |
| `A + B`  | `h2 + p`  | First `<p>` immediately after `<h2>`   |
| `A ~ B`  | `h2 ~ p`  | All `<p>` siblings after `<h2>`        |

---

### 🔹 **3. Attribute Selectors**

| Selector        | Example           | Matches elements...                                    |          |                                                  |
| --------------- | ----------------- | ------------------------------------------------------ | -------- | ------------------------------------------------ |
| `[attr]`        | `[type]`          | With any value for the attribute                       |          |                                                  |
| `[attr=value]`  | `[type="text"]`   | With exact value                                       |          |                                                  |
| `[attr^=value]` | `[href^="https"]` | That **start with** value                              |          |                                                  |
| `[attr$=value]` | `[src$=".jpg"]`   | That **end with** value                                |          |                                                  |
| `[attr*=value]` | `[class*="jum"]`  | That **contain** value anywhere                        |          |                                                  |
| \`\[attr        | =value]\`         | \`\[lang                                               | ="en"]\` | Exactly `en` or starts with `en-` (e.g. `en-US`) |
| `[attr~=value]` | `[class~="box"]`  | With one word in a space-separated list equal to `box` |          |                                                  |

---

### 🔹 **4. Pseudo-Classes**

| Selector                 | Example            | Meaning                            |
| ------------------------ | ------------------ | ---------------------------------- |
| `:hover`                 | `a:hover`          | On mouse hover                     |
| `:focus`                 | `input:focus`      | On focus (keyboard or click)       |
| `:active`                | `button:active`    | While being clicked                |
| `:checked`               | `input:checked`    | Checked checkbox or radio          |
| `:disabled` / `:enabled` | `input:disabled`   | Form control states                |
| `:first-child`           | `li:first-child`   | First child of parent              |
| `:last-child`            | `li:last-child`    | Last child of parent               |
| `:nth-child(n)`          | `li:nth-child(3)`  | 3rd child of parent                |
| `:nth-of-type(n)`        | `p:nth-of-type(2)` | 2nd `<p>` of its kind              |
| `:not()`                 | `div:not(.active)` | Exclude matching elements          |
| `:empty`                 | `div:empty`        | No content inside (even no spaces) |

---

### 🔹 **5. Pseudo-Elements**

| Selector         | Example           | Meaning                               |
| ---------------- | ----------------- | ------------------------------------- |
| `::before`       | `p::before`       | Content before the element            |
| `::after`        | `p::after`        | Content after the element             |
| `::first-letter` | `p::first-letter` | First letter of text                  |
| `::first-line`   | `p::first-line`   | First line of text (depends on width) |
| `::selection`    | `::selection`     | Highlighted/selected text             |

---

### 🔹 **6. Logical & Advanced Selectors**

| Selector   | Example            | Use                                                                              |
| ---------- | ------------------ | -------------------------------------------------------------------------------- |
| `:root`    | `:root {}`         | Targets the `<html>` element (great for CSS variables)                           |
| `:is()`    | `:is(h1, h2)`      | Shorthand for grouping selectors (respects specificity)                          |
| `:where()` | `:where(.card h2)` | Like `:is()`, but **zero specificity**                                           |
| `:has()`   | `div:has(img)`     | Parent if it contains a matching child (⚠️ newer; not supported in all browsers) |

---

## ✅ Quick Use Cases

| Goal                                | Best Selector                    |
| ----------------------------------- | -------------------------------- |
| Style all buttons                   | `button`                         |
| Style only `.active` links          | `a.active`                       |
| Style cards with "jum" in the class | `[class*="jum"]`                 |
| First paragraph inside section      | `section p:first-of-type`        |
| Sidebar after main content          | `main + aside`                   |
| All checkboxes that are checked     | `input[type="checkbox"]:checked` |

---

## 💡 Best Practices

* Use `rem` for scalable typography/layout.
* Use semantic HTML for structure and accessibility.
* Use attribute selectors for utility or dynamic styling — but sparingly for performance.
* Prefer `:is()` and `:where()` for cleaner grouped styles.

---

Would you like this as a **downloadable PDF**, or want a **practice playground** with all these examples working in one file?
