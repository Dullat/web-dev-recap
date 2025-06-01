the most important **HTML `<head>` tags**: `meta`, `title`, `link`, and `script`. These are foundational to every HTML page, and understanding them well gives you more control over how your website behaves and appears.

---

## 1. 🧠 `<meta>` – Metadata Tag

### 📌 Purpose:

The `<meta>` tag gives **information about the webpage**. It doesn't display anything on the page, but it's crucial for **SEO**, **responsiveness**, and **browser behavior**.

### ✅ Common Use Cases:

| Meta Tag                                                                 | Purpose                                                  |
| ------------------------------------------------------------------------ | -------------------------------------------------------- |
| `<meta charset="UTF-8">`                                                 | Sets character encoding (supports all languages, emojis) |
| `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | Makes the site responsive on mobile                      |
| `<meta name="description" content="Page description">`                   | Search engine description snippet                        |
| `<meta name="author" content="Your Name">`                               | Info about who made the page                             |
| `<meta name="robots" content="index, follow">`                           | Tells search engines whether to index or follow links    |

📌 Example:

```html
<meta name="description" content="Learn web development the right way!">
```

---

## 2. 📄 `<title>` – Page Title

### 📌 Purpose:

Defines the **title shown in the browser tab** and in **search engine results**.

### ✅ Example:

```html
<title>My Portfolio</title>
```

* Appears in tab bar
* Important for SEO
* Keep it short and meaningful

---

## 3. 🔗 `<link>` – External Resource Link

### 📌 Purpose:

Used to **link external files** to your HTML, like stylesheets, icons, or fonts.

### ✅ Common Uses:

```html
<!-- Link to external CSS -->
<link rel="stylesheet" href="styles.css">

<!-- Favicon (tab icon) -->
<link rel="icon" href="favicon.ico" type="image/x-icon">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```

### 🔍 Key attributes:

* `rel`: Type of link (`stylesheet`, `icon`, `preload`, etc.)
* `href`: File path or URL

---

## 4. ⚙️ `<script>` – JavaScript Code

### 📌 Purpose:

Used to **add or link JavaScript code** to your page.

### ✅ Options:

```html
<!-- External JS file (best practice) -->
<script src="script.js" defer></script>

<!-- Inline JS (not recommended for large code) -->
<script>
  console.log("Hello, world!");
</script>
```

### 🔍 Important Attributes:

* `src`: Source of external JS file
* `defer`: Loads JS after the HTML is fully parsed
* `async`: Loads JS file in parallel (not good if scripts depend on each other)

### Best Practice:

Use `defer` in the `<head>` or put scripts before the `</body>` tag to avoid blocking rendering.

## 5. <style>

used to put css in head

---

## 🧠 Summary Table:

| Tag        | Role                                  | Example                                    |
| ---------- | ------------------------------------- | ------------------------------------------ |
| `<meta>`   | Info about page (SEO, responsiveness) | `<meta charset="UTF-8">`                   |
| `<title>`  | Page name (shown in browser tab)      | `<title>My Blog</title>`                   |
| `<link>`   | Connects CSS, favicon, fonts          | `<link rel="stylesheet" href="style.css">` |
| `<script>` | Runs JavaScript                       | `<script src="main.js" defer></script>`    |

---

