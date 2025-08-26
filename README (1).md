# 🌟 Sanjay Cloth Centre - Premium Fashion Catalog Website

A beautiful, responsive clothing catalog website with WhatsApp integration, built using HTML, CSS, and JavaScript. Features dynamic product loading from CSV/JSON files and a premium red color palette.

## ✨ Features

- 🎨 **Premium Design**: Elegant red color palette with modern typography
- 📱 **Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- 🛍️ **Dynamic Catalog**: Products loaded from CSV or JSON files
- 📞 **WhatsApp Integration**: Direct inquiry buttons for each product
- 🔍 **Category Filtering**: Filter products by shirts, pants, suits, accessories
- ⚡ **Fast Loading**: Optimized for speed with modern web practices
- 🆓 **Free Hosting**: Deploy on GitHub Pages at zero cost
- 📊 **Easy Management**: Update catalog via CSV files or Google Sheets

## 🚀 Quick Start

### 1. Download Files
Download these files to your computer:
- `index.html` - Main website page
- `styles.css` - Styling with premium red palette
- `script.js` - Dynamic functionality
- `data/products.csv` - Product catalog
- `data/products.json` - Backup product data

### 2. Customize Content
**Update Business Information:**
- Open `index.html`
- Replace contact details, address, phone number
- Update business name and description

**Update WhatsApp Number:**
- Open `script.js`
- Find: `const phoneNumber = '918972714744';`
- Replace with your WhatsApp number (include country code)

### 3. Add Your Products
**Edit the CSV file:**
```csv
id,name,category,price,description,image,availability,whatsapp_message
1,Your Product,shirts,₹2999,Product description,image-url,In Stock,Custom message
```

### 4. Deploy to GitHub Pages
1. Create GitHub account
2. Create new repository (public)
3. Upload all files
4. Enable GitHub Pages in Settings
5. Your site will be live at: `https://yourusername.github.io/repository-name`

## 📁 File Structure

```
├── index.html              # Main website page
├── styles.css              # Premium styling (red palette)
├── script.js               # Dynamic catalog functionality
├── data/
│   ├── products.csv        # Product catalog (main)
│   └── products.json       # Product catalog (backup)
├── DEPLOYMENT-GUIDE.md     # Detailed setup instructions
└── README.md               # This file
```

## 🎨 Design Features

### Color Palette
- **Primary Red**: `#B91C1C` - Main brand color
- **Secondary Red**: `#DC2626` - Buttons and accents
- **Accent Red**: `#EF4444` - Hover states
- **Light Red**: `#FEE2E2` - Backgrounds
- **Cream**: `#FEFBF3` - Page background

### Typography
- **Display Font**: Playfair Display (elegant serif)
- **Body Font**: Inter (modern sans-serif)

### Components
- Responsive navigation with mobile hamburger menu
- Hero section with call-to-action
- Filterable product grid
- Contact information section
- Floating WhatsApp button
- Premium card layouts

## 📊 Product Management

### CSV Format
Your `products.csv` should include these columns:
- `id` - Unique identifier
- `name` - Product name
- `category` - shirts, pants, suits, accessories
- `price` - Price with currency (₹2,999)
- `description` - Product description
- `image` - Image URL (use Unsplash for free images)
- `availability` - In Stock, Made to Order, etc.
- `whatsapp_message` - Custom WhatsApp inquiry message

### Adding New Products
1. Open `data/products.csv`
2. Add new row with product details
3. Save and upload to GitHub
4. Website updates automatically

### Category Management
Add new categories by:
1. Adding filter button in `index.html`
2. Using the category name in your CSV
3. JavaScript handles the filtering automatically

## 📱 WhatsApp Integration

### How it Works
- Each product has a "Inquire on WhatsApp" button
- Clicking opens WhatsApp with pre-filled message
- Includes product name and price
- Can be customized per product

### Message Format
```
Hi! I'm interested in the Premium Cotton Shirt (₹2,999). Please share more details about availability, sizes, and colors.
```

### Customization
- Global message: Edit `generateWhatsAppURL()` in `script.js`
- Per-product: Add `whatsapp_message` column in CSV

## 🔧 Advanced Features

### Google Sheets Integration
Connect to Google Sheets for easier management:
1. Create Google Sheet with same column structure
2. Enable Google Sheets API
3. Configure API key in `script.js`
4. Update catalog from anywhere

### Search Functionality
Add search by including:
```html
<input type="text" id="searchInput" placeholder="Search products...">
```
JavaScript includes search functionality automatically.

### Performance Optimization
- Lazy loading images
- CSS and JS minification
- CDN integration
- Progressive Web App features

## 🛠️ Customization

### Colors
Update color scheme in `styles.css`:
```css
:root {
    --primary-red: #B91C1C;
    --secondary-red: #DC2626;
    /* Add your colors here */
}
```

### Layout
- Modify grid layouts in CSS
- Adjust section padding and spacing
- Change typography and font sizes

### Content
- Update hero section text
- Modify about section content
- Add new sections as needed

## 📈 SEO & Analytics

### Built-in SEO Features
- Semantic HTML structure
- Meta tags for social sharing
- Image alt texts
- Proper heading hierarchy

### Add Analytics
Include Google Analytics code in `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🚀 Deployment Options

### Free Options
- **GitHub Pages** (Recommended) - Free, automatic deployment
- **Vercel** - Free with custom domains
- **Netlify** - Free with build process
- **Firebase Hosting** - Google's free hosting

### Paid Options
- **Custom hosting** - Full control
- **WordPress hosting** - Easy management
- **E-commerce platforms** - When ready to sell online

## 📞 Support

### Troubleshooting
- Check `DEPLOYMENT-GUIDE.md` for detailed instructions
- Verify file paths and names
- Test on different browsers and devices
- Check browser console for JavaScript errors

### Common Issues
1. **Products not loading**: Check CSV format and file path
2. **Images not showing**: Verify image URLs
3. **WhatsApp not working**: Check phone number format
4. **Site not updating**: Clear browser cache, wait for GitHub Pages

## 🎯 Future Enhancements

### E-commerce Features
- Shopping cart functionality
- Payment processing integration
- Order management system
- Customer accounts

### Business Features
- Inventory management
- Sales analytics
- Customer relationship management
- Email marketing integration

### Technical Improvements
- Database integration
- Admin panel for easy management
- Multi-language support
- Advanced search and filters

## 📄 License

This project is open source and available under the MIT License. Feel free to use, modify, and distribute for personal and commercial projects.

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

For support or questions about this project:
- Create an issue on GitHub
- Email: support@sanjayclothcentre.com
- WhatsApp: +91-8972714744

---

**Built with ❤️ for small businesses looking to showcase their products online with zero cost and maximum impact.**