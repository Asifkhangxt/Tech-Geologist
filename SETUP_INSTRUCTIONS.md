# 📥 DOWNLOAD AND SETUP INSTRUCTIONS

## Step 1: Download the 3 Essential Files

Download these files from above:

1. **index.html** - The main website file
2. **style.css** - The styling file
3. **script.js** - The JavaScript file

---

## Step 2: Create Folder Structure

On your computer, create this exact folder structure:

```
portfolio-website/          ← Create this main folder
├── index.html             ← Put index.html HERE
├── css/                   ← Create "css" folder
│   └── style.css         ← Put style.css INSIDE css folder
└── js/                    ← Create "js" folder
    └── script.js         ← Put script.js INSIDE js folder
```

---

## Step 3: Detailed Instructions

### For Windows:

1. **Create main folder:**
   - Right-click on Desktop → New → Folder
   - Name it: `portfolio-website`

2. **Move index.html:**
   - Move the downloaded `index.html` into `portfolio-website` folder

3. **Create css folder:**
   - Open `portfolio-website` folder
   - Right-click → New → Folder
   - Name it: `css` (all lowercase!)

4. **Move style.css:**
   - Rename downloaded `style.css` if needed
   - Move it into the `css` folder

5. **Create js folder:**
   - In `portfolio-website` folder
   - Right-click → New → Folder
   - Name it: `js` (all lowercase!)

6. **Move script.js:**
   - Rename downloaded `script.js` if needed
   - Move it into the `js` folder

### For Mac:

1. **Create main folder:**
   - Right-click on Desktop → New Folder
   - Name it: `portfolio-website`

2. **Move index.html:**
   - Drag downloaded `index.html` into `portfolio-website` folder

3. **Create css folder:**
   - Open `portfolio-website` folder
   - File → New Folder
   - Name it: `css`

4. **Move style.css:**
   - Drag downloaded `style.css` into `css` folder

5. **Create js folder:**
   - In `portfolio-website` folder
   - File → New Folder
   - Name it: `js`

6. **Move script.js:**
   - Drag downloaded `script.js` into `js` folder

---

## Step 4: Verify Structure

Open the `portfolio-website` folder. You should see:

```
portfolio-website/
├── index.html          ✅ (file in main folder)
├── css/               ✅ (folder)
│   └── style.css     ✅ (file inside css folder)
└── js/                ✅ (folder)
    └── script.js     ✅ (file inside js folder)
```

---

## Step 5: Open the Website

1. Navigate to `portfolio-website` folder
2. Double-click on `index.html`
3. It should open in your default browser

### ✅ If Working:
You'll see:
- Green and blue colors
- Modern fonts
- Professional design
- Styled buttons
- Cards with shadows

### ❌ If Not Working:
You'll see:
- Plain black text
- Times New Roman font
- No colors
- Basic links

**If not working:** Check your folder structure matches Step 3 exactly!

---

## Step 6: Before Deploying to GitHub

Open `index.html` in a text editor (Notepad, TextEdit, VS Code, etc.) and update:

**Find and Replace:**
1. `your.email@example.com` → Your actual email
2. `linkedin.com/in/yourprofile` → Your LinkedIn username
3. `github.com/yourusername` → Your GitHub username

---

## Step 7: Deploy to GitHub

### Method 1: GitHub Web Interface (Easiest)

1. Go to https://github.com/new
2. Repository name: `yourname-portfolio`
3. Make it **Public**
4. Click "Create repository"
5. Click "uploading an existing file"
6. Drag these items:
   - `index.html`
   - `css` folder (the whole folder!)
   - `js` folder (the whole folder!)
7. Click "Commit changes"
8. Go to Settings → Pages
9. Source: Branch `main`, folder `/ (root)`
10. Click "Save"

Wait 2-3 minutes, then visit:
```
https://YOUR-USERNAME.github.io/yourname-portfolio/
```

### Method 2: Command Line

```bash
cd portfolio-website
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/yourname-portfolio.git
git push -u origin main
```

Then enable GitHub Pages in Settings.

---

## ⚠️ CRITICAL: Folder Names Must Be Exact

The CSS and JS will ONLY load if:

- Folder is named `css` (lowercase, no spaces)
- Folder is named `js` (lowercase, no spaces)
- style.css is INSIDE the css folder
- script.js is INSIDE the js folder

**DO NOT:**
- ❌ Name folder "CSS" or "Css" (must be lowercase)
- ❌ Name folder "styles" or "stylesheets"
- ❌ Put style.css in the main folder
- ❌ Change folder names

---

## 🔍 Common Mistakes

### Mistake 1: Wrong Structure
```
portfolio-website/
├── index.html
└── style.css          ❌ WRONG! Must be in css/ folder
```

### Mistake 2: Wrong Folder Name
```
portfolio-website/
├── index.html
└── CSS/               ❌ WRONG! Must be lowercase "css"
    └── style.css
```

### Mistake 3: Multiple Nested Folders
```
portfolio-website/
└── portfolio-website/  ❌ WRONG! Don't nest folders
    ├── index.html
    └── css/
```

---

## ✅ Correct Structure (Final Check)

```
portfolio-website/
├── index.html          ← In main folder
├── css/               ← Folder named "css"
│   └── style.css     ← Inside css folder
└── js/                ← Folder named "js"
    └── script.js     ← Inside js folder
```

---

## 🆘 Still Not Working?

### Test 1: Open Browser Console
1. Open index.html in browser
2. Press F12 (or Ctrl+Shift+I)
3. Click "Console" tab
4. Look for errors

**If you see:** `Failed to load resource: css/style.css`
**Solution:** style.css is not in the css folder!

### Test 2: Check File Paths
Right-click on index.html → Open with text editor
Line 10 should say:
```html
<link rel="stylesheet" href="css/style.css">
```

This means: "Look for style.css inside a folder called css"

If your structure doesn't match, CSS won't load!

---

## 📞 Need Help?

If still having issues:

1. Take a screenshot of your folder structure
2. Take a screenshot of browser console (F12 → Console tab)
3. Verify you have exactly 3 items in portfolio-website folder:
   - index.html (file)
   - css (folder)
   - js (folder)

---

## 🎉 Success!

When working correctly, you'll have:
- ✅ Professional-looking website locally
- ✅ No errors in browser console
- ✅ Modern design with colors
- ✅ Ready to deploy to GitHub Pages

---

**Remember: The folder structure is CRITICAL. If CSS isn't loading, 99% of the time it's because the folders aren't set up correctly!**
