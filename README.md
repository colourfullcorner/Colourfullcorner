# 🎨 Colourfull Corner

A colourful, responsive eCommerce website for **Colourfull Corner** — a Facebook-grown shop selling handmade bags, jewelry, home decor and stationery.

🔗 **Live site:** _add your GitHub Pages link here once published_

---

## What's included

- **Home** — hero banner, featured products, why-shop-with-us section
- **Products** — full catalogue with category filters (Bags, Jewelry, Home, Stationery)
- **About Us** — brand story and values
- **Contact** — validated contact form, Messenger & WhatsApp buttons
- Floating WhatsApp + Messenger chat buttons on every page
- Fully responsive layout (mobile, tablet, desktop)

## Built with

- HTML5
- CSS3 (no frameworks — custom design system)
- Vanilla JavaScript (no libraries required)

## File structure

```
colourfull-corner/
├── index.html      # All pages (Home, Products, About, Contact)
├── style.css       # Styling and responsive layout
├── script.js       # Navigation, product data, filters, forms, chat links
├── images/         # Logo and product photos (add your own here)
└── README.md
```

## Before you publish — update these

**1. Contact links** — open `script.js` and set your real details near the top:
```js
const CONFIG = {
  whatsappNumber: "8801XXXXXXXXX",       // your WhatsApp number, no + or spaces
  messengerUsername: "colourfullcorner"  // your Facebook Page/Messenger username
};
```

**2. Products** — still in `script.js`, edit the `PRODUCTS` list with your real items, prices, descriptions, and photos.

**3. Logo & photos** — replace the placeholder images with your own. Put image files in an `images/` folder and update the file paths in `index.html` (logo) and `script.js` (products).

## Running it locally

No build tools needed. Just open `index.html` in any browser, or use a live server extension in your code editor for auto-refresh while editing.

## Publishing on GitHub Pages

1. Push/upload these files to a public GitHub repository
2. Go to **Settings → Pages**
3. Under **Source**, choose **Deploy from a branch** → branch `main`, folder `/ (root)`
4. Save, wait a minute, and your site will be live at:
   `https://yourusername.github.io/colourfull-corner/`

## Customizing the design

Colours, fonts, and spacing are controlled by CSS variables at the top of `style.css`:

```css
:root{
  --coral:#FF6B5B;
  --sun:#FFC93D;
  --teal:#149C8C;
  --lilac:#8C6FE6;
  --ink:#241933;
  --cream:#FFF8EC;
}
```
Change these values to shift the whole site's colour palette.

## License

This project is free to use and modify for Colourfull Corner's own business purposes.
