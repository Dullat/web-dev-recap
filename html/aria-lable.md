*ARIA (Accessible Rich Internet Applications)** attribute used to make **non-semantic or custom HTML elements accessible** to screen readers.

---

## 🏷️ What is `aria-label`?

### ✅ Definition:

`aria-label` provides a **text alternative** for an element — it tells screen readers **what the element is or what it does**, especially when there's no visible text to describe it.

It doesn’t show up visually on the page — it’s purely for screen reader users.

---

## ✅ Basic Syntax:

```html
<div aria-label="Main Navigation">...</div>
```

A screen reader would say:

> “Main Navigation”

---

## 🧑‍🔧 When to Use `aria-label`

| Use it when...                                   | Example                      |
| ------------------------------------------------ | ---------------------------- |
| You’re using a **custom element** with no label  | A `<div>` acting as a button |
| You need to describe an **icon-only button**     | A search or menu icon        |
| You want to add extra meaning for screen readers | A landmark or region         |

---

## 🖼️ Example 1: Icon Button (No Text)

```html
<button aria-label="Search">
  🔍
</button>
```

🗣️ Screen reader says:

> “Search, button”

Without `aria-label`, it would just say:

> “Button”

---

## 🧱 Example 2: Custom Role + Label

```html
<div role="button" tabindex="0" aria-label="Open Menu">
  ☰
</div>
```

* `role="button"` tells assistive tech that it behaves like a button
* `aria-label` tells them what the button does
* `tabindex="0"` makes it focusable by keyboard

---

## 🛑 Don't Use `aria-label` If You Already Have a Visible Label

```html
<!-- NOT needed if there's a label already: -->
<label for="email">Email</label>
<input type="email" id="email" name="email">
```

This is better than:

```html
<input type="email" aria-label="Email">
```

✅ **Prefer visible labels** when possible — they help **everyone**, not just screen reader users.

---

## 🧠 Quick Summary

| Good For                                     | Not Good For                            |
| -------------------------------------------- | --------------------------------------- |
| Hidden labels (icons, landmarks, ARIA roles) | Replacing visible labels                |
| Custom elements (divs, spans)                | Where semantic HTML can be used instead |
| Screen reader-only naming                    | Visual users needing context            |

---

## 🔧 Related Attributes

| Attribute            | Purpose                                                     |
| -------------------- | ----------------------------------------------------------- |
| `aria-labelledby`    | Refers to another element for the label                     |
| `aria-hidden="true"` | Hides an element from screen readers                        |
| `role`               | Describes the element's function (e.g., `button`, `dialog`) |

---


