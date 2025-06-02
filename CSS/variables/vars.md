Awesome — let’s dive into **CSS Variables** (aka **CSS Custom Properties**) and build a solid cheat sheet and explanation for those too.

---

# 🧪 CSS Variables (`--custom-property`)

### ✅ What are they?

CSS variables let you **store values** (like colors, spacing, fonts) in a reusable way. This keeps your styles **DRY** (Don’t Repeat Yourself) and makes theme management a lot easier.

---

## 📌 Basic Syntax

```css
:root {
  --main-color: #3498db;
  --spacing: 16px;
}

.button {
  background-color: var(--main-color);
  padding: var(--spacing);
}
```

---

## 🧠 Key Concepts

| Feature           | Description                                         |
| ----------------- | --------------------------------------------------- |
| `--variable-name` | Defines the variable name                           |
| `var(--variable)` | Retrieves the variable value                        |
| `:root`           | Global scope (top-level element)                    |
| Fallback value    | `var(--something, fallback)` — if variable is unset |

---

## 🧰 Examples

### 🎨 Colors

```css
:root {
  --primary: #1abc9c;
  --secondary: #2c3e50;
}

body {
  background: var(--primary);
  color: var(--secondary);
}
```

---

### 📦 Spacing & Layout

```css
:root {
  --gutter: 20px;
}

.container {
  padding: var(--gutter);
}
```

---

### 🖼 Fallback Values

```css
.button {
  background-color: var(--btn-bg, #ccc);
}
```

---

## 🧩 Scoped Variables

You can override variables **within specific elements**:

```css
.card {
  --main-color: red;
  border: 2px solid var(--main-color);
}

.card.dark {
  --main-color: black;
}
```

---

## 🧠 Dynamic Theme Switching (JS Example)

```css
// In JS
document.documentElement.style.setProperty('--main-color', '#e74c3c');
```

---

## 🚫 Gotchas

* CSS variables **do not work** in media queries or `@keyframes` (use preprocessor vars for that).
* They are case-sensitive.
* Must be used with `var(--name)` — not just `--name`.

---

## 📝 Common Use Cases

| Purpose          | Variable Names You Might Use        |
| ---------------- | ----------------------------------- |
| Color palette    | `--primary`, `--text-color`, `--bg` |
| Spacing system   | `--spacing-sm`, `--spacing-md`      |
| Typography       | `--font-size-base`, `--font-family` |
| Borders & radius | `--border-radius`, `--border-color` |

---

Would you like me to combine **pseudo-classes**, **pseudo-elements**, and **variables** into one printable or downloadable format? Or want to see how they’re used together in a React or Tailwind setup?
