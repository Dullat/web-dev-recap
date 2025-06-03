Excellent — let's now tackle a comprehensive **cheat sheet of CSS functions**. These are the **built-in functions** you can use in CSS to perform calculations, manipulate values, and make styles more dynamic and responsive.

---

# 🛠 CSS Functions Cheat Sheet

Here’s a categorized list of the most useful and common **CSS functions**, with syntax and examples.

---

## 🎯 1. **Math & Size Functions**

### ✅ `calc()`

Performs mathematical calculations.

```css
width: calc(100% - 2rem);
margin-top: calc(10px + 2em);
```

➡️ Use it to mix units or dynamically space elements.

---

### ✅ `clamp(min, preferred, max)`

Responsive size that stays within limits.

```css
font-size: clamp(1rem, 2.5vw, 2rem);
```

➡️ Perfect for fluid typography or padding.

---

### ✅ `min()` / `max()`

Takes the **smallest** or **largest** of values.

```css
width: min(100%, 600px);
height: max(50vh, 300px);
```

---

## 🎨 2. **Color Functions**

### ✅ `rgb()` / `rgba()`

Define colors using Red-Green-Blue (with optional Alpha).

```css
background-color: rgba(0, 0, 0, 0.5);
```

---

### ✅ `hsl()` / `hsla()`

Hue-Saturation-Lightness with optional Alpha.

```css
color: hsl(200, 70%, 50%);
```

---

### ✅ `color-mix()` *(Modern CSS)*

Mixes two colors.

```css
color: color-mix(in srgb, red 40%, blue);
```

---

### ✅ `color-contrast()` *(Experimental)*

Returns a color with sufficient contrast — still not widely supported.

---

## 📦 3. **Transform Functions**

Used inside `transform: ...` to animate or change element layout.

| Function        | Description                     | Example                         |
| --------------- | ------------------------------- | ------------------------------- |
| `translateX(n)` | Moves element on X axis         | `transform: translateX(20px);`  |
| `translateY(n)` | Moves on Y axis                 | `transform: translateY(-10px);` |
| `rotate(deg)`   | Rotates element                 | `transform: rotate(45deg);`     |
| `scale(n)`      | Scales element (both X and Y)   | `transform: scale(1.2);`        |
| `scaleX(n)`     | Scales horizontally             | `transform: scaleX(0.5);`       |
| `scaleY(n)`     | Scales vertically               | `transform: scaleY(2);`         |
| `skewX(deg)`    | Skews on X axis                 | `transform: skewX(10deg);`      |
| `skewY(deg)`    | Skews on Y axis                 | `transform: skewY(10deg);`      |
| `matrix()`      | Applies a transformation matrix | (Advanced use)                  |

---

## 🎞 4. **Timing & Easing Functions**

Used in `animation-timing-function` or `transition-timing-function`.

| Function                       | Description         | Example                              |                 |
| ------------------------------ | ------------------- | ------------------------------------ | --------------- |
| `cubic-bezier(x1, y1, x2, y2)` | Custom easing curve | `cubic-bezier(0.25, 0.1, 0.25, 1.0)` |                 |
| \`steps(n\[, start             | end])\`             | Step-based animations                | `steps(4, end)` |

---

## 🖼 5. **Image Functions**

### ✅ `url()`

Loads an image or asset.

```css
background-image: url('/images/bg.jpg');
```

---

### ✅ `linear-gradient()`

Creates a gradient background.

```css
background: linear-gradient(to right, red, blue);
```

---

### ✅ `radial-gradient()`

Circular or elliptical gradients.

```css
background: radial-gradient(circle, red, yellow, green);
```

---

### ✅ `repeating-linear-gradient()`

Repeats a linear gradient pattern.

```css
background: repeating-linear-gradient(45deg, #000, #000 10px, #fff 10px, #fff 20px);
```

---

## 🧪 6. **CSS Variable Functions**

| Function | Description                                                | Example                              |
| -------- | ---------------------------------------------------------- | ------------------------------------ |
| `var()`  | Retrieves a CSS variable                                   | `color: var(--primary-color);`       |
| `env()`  | Gets environment variables (e.g., safe-area-inset for iOS) | `padding: env(safe-area-inset-top);` |

---

## 🛡 7. **Filter Functions (used with `filter:`)**

| Function          | Description             | Example                      |
| ----------------- | ----------------------- | ---------------------------- |
| `blur(px)`        | Blurs the element       | `filter: blur(5px);`         |
| `brightness(n)`   | Adjusts brightness      | `filter: brightness(0.8);`   |
| `contrast(n)`     | Adjusts contrast        | `filter: contrast(200%);`    |
| `grayscale(n)`    | Converts to grayscale   | `filter: grayscale(1);`      |
| `sepia(n)`        | Applies sepia tone      | `filter: sepia(1);`          |
| `hue-rotate(deg)` | Rotates color hue       | `filter: hue-rotate(90deg);` |
| `invert(n)`       | Inverts colors          | `filter: invert(1);`         |
| `opacity(n)`      | Adjusts transparency    | `filter: opacity(0.5);`      |
| `saturate(n)`     | Boosts color saturation | `filter: saturate(2);`       |

---

## 📐 8. **Shape Functions (Clip Path)**

Used with `clip-path` to define element visibility shapes.

```css
clip-path: circle(50%);
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
```

---

## ✨ Summary Table

| Category    | Common Functions                                  |
| ----------- | ------------------------------------------------- |
| Math / Size | `calc()`, `clamp()`, `min()`, `max()`             |
| Colors      | `rgb()`, `hsl()`, `color-mix()`                   |
| Transforms  | `translate()`, `scale()`, `rotate()`, `skew()`    |
| Animation   | `cubic-bezier()`, `steps()`                       |
| Images      | `url()`, `linear-gradient()`, `radial-gradient()` |
| Filters     | `blur()`, `brightness()`, `grayscale()`           |
| Variables   | `var()`, `env()`                                  |
| Shapes      | `circle()`, `polygon()` (with `clip-path`)        |

---

Would you like:

* A printable/downloadable version of all this (with pseudo-classes and variables)?
* A live CodePen or StackBlitz example using them all together?
* Or the same breakdown for **SCSS/Sass functions** too?
