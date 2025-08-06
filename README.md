# 🕋 hijriCalendar

> A Hijri calendar utility tailored for the **Dawoodi Bohra** community, built with precision and purpose.

![Hijri Calendar Converter](https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif) <!-- Replace with your own neon-themed gif later -->

---

## 🚀 Features

✨ **Accurate Hijri to Gregorian Date Conversion**  
📆 Based on the traditional 354-day Hijri year with alternating 30/29 day months  
⚡ Blazing fast — just run and convert  
🌙 Specifically aligned with **Bohra Hijri practices**  
🌐 Built with ❤️ by **Innoartive Labs**

---

## 📦 Current Version: `1.0.0`

This version focuses solely on:

✅ Converting **Hijri → Gregorian** dates  
🚫 No Gregorian → Hijri (yet)  
🚫 No miqaat data or calendar UI (yet)

---

### 📦 Installation & Usage

#### ⬇️ Install via npm

```bash
npm install hijricalendar
```

#### 📄 In your JavaScript:

```js
const h2g = require('hijricalendar');

const gDate = h2g.hijriToGregorian(1425, 9, 18);

if (gDate) {
    console.log(gDate.toDateString()); // ✅ Clean Gregorian output
} else {
    console.error("❌ Invalid Hijri date.");
}

```

#### 🧪 Output:

```
Sun Oct 03 2004
```

#### 📘 Tip:

Use `.toDateString()` for a clean and readable output. Without it, `new Date()` returns full date-time with time and timezone info.

---

#### ⚠️ Validation Notes
Returns null for invalid Hijri dates (e.g. day > 30 or month > 12).

Even months (2, 4, 6...) have 29 days, odd months have 30 days.

---
