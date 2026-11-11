# Wuilber Molina — Personal Portfolio

A responsive personal portfolio built with HTML, CSS, and vanilla JavaScript.

## Run locally
1. Extract the ZIP file.
2. Open `portfolio_wuilber_english/index.html` in a browser, or open the folder in Visual Studio Code and use Live Server.

## Personalize before publishing

### Images
Put your image files inside `assets/images/`:
- `profile.jpg` — professional portrait for the hero section.
- `furrylove-homepage.jpg` — screenshot of the FurryLove homepage.
- `ecoscan-homepage.jpg` — screenshot of the EcoScan AI homepage.

The two project screenshot areas use the same 16:10 frame and `object-fit: cover`, so they display at matching dimensions. This crops the visible edges when the source image has a different aspect ratio; it does not overwrite or permanently edit your original image. Use screenshots with similar framing for the best result.

### Links
Open `index.html` and search for the comments marked `LINK` or `CONTACT LINK`:
- Replace the FurryLove `href="#"` with its GitHub repository URL and live demo URL.
- Replace the EcoScan AI `href="#"` with its GitHub repository URL and live demo URL.
- Replace `YOUR_EMAIL@example.com` with your email address.
- Replace `https://www.linkedin.com/in/YOUR-LINKEDIN/` with your LinkedIn profile URL.
- Replace `https://github.com/YOUR-GITHUB` with your GitHub profile URL.

### Theme switch
The sun/moon control in the header switches between dark and light mode. The selected theme is saved in the visitor's browser using localStorage.

### Skills
Review the skills list and remove any technology you cannot confidently explain or demonstrate.

## Publish
This is a static website and can be hosted on GitHub Pages, Netlify, or another static hosting provider. If you later add a PHP/MySQL backend, use a hosting service that supports PHP and databases.
