# Cloudflare Setup Guide for DUVA-Site-Full

## 🎯 **Current Status**
- ✅ New GitHub repository: `zaherarnaout/DUVA-Site-Full`
- ✅ New Cloudflare Pages project: `duva-site-full`
- ✅ All modular files uploaded to GitHub
- ✅ Deployments working: `1c770018.duva-site-full.pages.dev`

## 🔧 **Next Steps**

### **1. Update Cloudflare Configuration**

You need to update your Cloudflare Pages configuration to use the new modular files instead of the old monolithic files.

**Current setup (old):**
```html
<link rel="stylesheet" href="https://e100d038.duva-pdf.pages.dev/styles.css">
<script src="https://e100d038.duva-pdf.pages.dev/script.js"></script>
```

**New setup (modular):**
```html
<!-- CSS Files -->
<link rel="stylesheet" href="https://1c770018.duva-site-full.pages.dev/base.css">
<link rel="stylesheet" href="https://1c770018.duva-site-full.pages.dev/menu.css">
<link rel="stylesheet" href="https://1c770018.duva-site-full.pages.dev/product-configurator.css">
<link rel="stylesheet" href="https://1c770018.duva-site-full.pages.dev/pdf-export.css">
<link rel="stylesheet" href="https://1c770018.duva-site-full.pages.dev/gallery.css">
<link rel="stylesheet" href="https://1c770018.duva-site-full.pages.dev/accessories.css">
<link rel="stylesheet" href="https://1c770018.duva-site-full.pages.dev/animations.css">
<link rel="stylesheet" href="https://1c770018.duva-site-full.pages.dev/image-loading.css">

<!-- JavaScript Files -->
<script src="https://1c770018.duva-site-full.pages.dev/main.js"></script>
<script src="https://1c770018.duva-site-full.pages.dev/product-configurator.js"></script>
<script src="https://1c770018.duva-site-full.pages.dev/pdf-export.js"></script>
<script src="https://1c770018.duva-site-full.pages.dev/menu.js"></script>
<script src="https://1c770018.duva-site-full.pages.dev/image-loading.js"></script>
<script src="https://1c770018.duva-site-full.pages.dev/gallery.js"></script>
<script src="https://1c770018.duva-site-full.pages.dev/animations.js"></script>
<script src="https://1c770018.duva-site-full.pages.dev/accessories.js"></script>
```

### **2. Test the New Setup**

1. **Upload the test file** `test-setup.html` to your new GitHub repository
2. **Access the test page** at: `https://1c770018.duva-site-full.pages.dev/test-setup.html`
3. **Check browser console** for diagnostic output
4. **Run manual tests** by typing: `window.duvaDebug.runAllTests()`

### **3. Update Your Webflow Site**

In your Webflow site, replace the old file references with the new modular ones:

**Replace:**
```html
<link rel="stylesheet" href="https://e100d038.duva-pdf.pages.dev/styles.css">
<script src="https://e100d038.duva-pdf.pages.dev/script.js"></script>
```

**With:**
```html
<!-- CSS Files -->
<link rel="stylesheet" href="https://1c770018.duva-site-full.pages.dev/base.css">
<link rel="stylesheet" href="https://1c770018.duva-site-full.pages.dev/menu.css">
<link rel="stylesheet" href="https://1c770018.duva-site-full.pages.dev/product-configurator.css">
<link rel="stylesheet" href="https://1c770018.duva-site-full.pages.dev/pdf-export.css">
<link rel="stylesheet" href="https://1c770018.duva-site-full.pages.dev/gallery.css">
<link rel="stylesheet" href="https://1c770018.duva-site-full.pages.dev/accessories.css">
<link rel="stylesheet" href="https://1c770018.duva-site-full.pages.dev/animations.css">
<link rel="stylesheet" href="https://1c770018.duva-site-full.pages.dev/image-loading.css">

<!-- JavaScript Files -->
<script src="https://1c770018.duva-site-full.pages.dev/main.js"></script>
<script src="https://1c770018.duva-site-full.pages.dev/product-configurator.js"></script>
<script src="https://1c770018.duva-site-full.pages.dev/pdf-export.js"></script>
<script src="https://1c770018.duva-site-full.pages.dev/menu.js"></script>
<script src="https://1c770018.duva-site-full.pages.dev/image-loading.js"></script>
<script src="https://1c770018.duva-site-full.pages.dev/gallery.js"></script>
<script src="https://1c770018.duva-site-full.pages.dev/animations.js"></script>
<script src="https://1c770018.duva-site-full.pages.dev/accessories.js"></script>
```

## 🧪 **Testing Checklist**

- [ ] Upload `test-setup.html` to GitHub
- [ ] Access test page and verify files load
- [ ] Run diagnostic tests in browser console
- [ ] Update Webflow site with new file references
- [ ] Test all site functionality:
  - [ ] Header alignment and background
  - [ ] Download panel functionality
  - [ ] Product configurator dropdowns
  - [ ] PDF generation and alignment
  - [ ] Gallery auto-scroll
  - [ ] Accessories selection
  - [ ] Menu functionality

## 📊 **Expected Results**

After updating, you should see:
- ✅ All 8 CSS files loading
- ✅ All 8 JavaScript files loading
- ✅ All critical functions available
- ✅ All site functionality working
- ✅ No console errors

## 🆘 **If Issues Persist**

1. **Check browser console** for 404 errors
2. **Verify file URLs** are correct
3. **Test individual files** by accessing them directly
4. **Run diagnostic tests** using the debug script
5. **Check Cloudflare cache** - may need to purge

## 📝 **File Structure**

Your new repository should contain:
```
DUVA-Site-Full/
├── base.css
├── menu.css
├── product-configurator.css
├── pdf-export.css
├── gallery.css
├── accessories.css
├── animations.css
├── image-loading.css
├── main.js
├── product-configurator.js
├── pdf-export.js
├── menu.js
├── image-loading.js
├── gallery.js
├── animations.js
├── accessories.js
├── debug.js
└── test-setup.html
```