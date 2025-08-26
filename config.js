// ============================================
// WEBSITE CONFIGURATION FILE
// Easy customization for non-technical users
// ============================================

const WEBSITE_CONFIG = {
    // Business Information
    business: {
        name: "Sanjay Cloth Centre",
        tagline: "Premium Fashion Since 1985",
        description: "Since 1985, Sanjay Cloth Centre has been synonymous with premium fashion and exceptional craftsmanship. We curate the finest fabrics and designs to bring you clothing that represents elegance, quality, and timeless style.",
        
        // Contact Details
        phone: "+91-8972714744",
        whatsappNumber: "918972714744", // Without + and spaces
        email: "info@sanjayclothcentre.com",
        address: "Old Hasimara, opposite of taxi stand, jaigaon road, alipur, west bengal 735215",
        
        // Store Hours
        storeHours: {
            regular: "Mon-Sun: 8:30AM-9:30PM",
            special: "Thu: 9AM-7PM"
        }
    },

    // Website Settings
    website: {
        title: "Premium Fashion Redefined",
        heroTitle: "Premium Fashion Redefined",
        heroSubtitle: "Discover the finest collection of luxury clothing crafted with exceptional artistry and timeless elegance since 1985.",
        ctaButtonText: "Explore Collection",
        
        // Navigation Menu
        navigation: [
            { text: "Home", href: "#home" },
            { text: "Catalog", href: "#catalog" },
            { text: "About", href: "#about" },
            { text: "Contact", href: "#contact" }
        ]
    },

    // Product Categories
    categories: [
        { id: "all", name: "All Items", active: true },
        { id: "shirts", name: "Shirts", active: true },
        { id: "pants", name: "Pants", active: true },
        { id: "suits", name: "Suits", active: true },
        { id: "accessories", name: "Accessories", active: true }
        { id: "kids", name: "Kids", active: true }  


        // Add new categories here
    ],

    // Data Sources
    data: {
        // Primary data source (CSV preferred for easy editing)
        primary: "data/products.csv",
        // Backup data source
        backup: "data/products.json",
        
        // Google Sheets Integration (optional)
        googleSheets: {
            enabled: false,
            sheetId: "", // Your Google Sheet ID
            apiKey: "",  // Your Google API Key
            range: "Sheet1!A1:Z1000"
        }
    },

    // WhatsApp Configuration
    whatsapp: {
        // Default message template
        defaultMessage: "Hi! I'm interested in {productName} ({price}). Please share more details about availability, sizes, and colors.",
        
        // Global inquiry message
        globalMessage: "Hi! I'm interested in your premium clothing collection. Please share more details.",
        
        // WhatsApp float button settings
        floatButton: {
            enabled: true,
            position: "bottom-right", // bottom-right, bottom-left
            message: "Hi! I'm interested in your premium clothing collection."
        }
    },

    // Color Palette (CSS Custom Properties)
    colors: {
        primary: "#B91C1C",      // Main red
        secondary: "#DC2626",    // Secondary red
        accent: "#EF4444",       // Accent red
        dark: "#7F1D1D",         // Dark red
        light: "#FEE2E2",        // Light red
        
        // Neutral colors
        white: "#FFFFFF",
        cream: "#FEFBF3",
        lightGray: "#F9FAFB",
        gray: "#6B7280",
        darkGray: "#374151",
        black: "#111827"
    },

    // Typography
    fonts: {
        display: "'Playfair Display', serif",
        body: "'Inter', sans-serif"
    },

    // Images
    images: {
        // Default image when product image fails to load
        placeholder: "https://via.placeholder.com/300x250?text=Product+Image",
        
        // Hero section background
        heroBackground: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },

    // Features
    features: {
        search: {
            enabled: true,
            placeholder: "Search products..."
        },
        
        filtering: {
            enabled: true,
            animation: true // Animate filter transitions
        },
        
        lazyLoading: {
            enabled: true // Lazy load product images
        }
    },

    // Analytics (optional)
    analytics: {
        googleAnalytics: {
            enabled: false,
            measurementId: "" // GA4 Measurement ID
        },
        
        facebookPixel: {
            enabled: false,
            pixelId: ""
        }
    },

    // SEO Settings
    seo: {
        metaDescription: "Discover premium clothing collection at Sanjay Cloth Centre. Quality fashion since 1985. Shirts, pants, suits, and accessories for the modern gentleman.",
        keywords: "premium clothing, fashion, shirts, pants, suits, accessories, Sanjay Cloth Centre",
        ogImage: "", // Open Graph image URL
        twitterCard: "summary_large_image"
    }
};

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WEBSITE_CONFIG;
}

// Make available globally
window.WEBSITE_CONFIG = WEBSITE_CONFIG;
