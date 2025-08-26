// ============================================
// SANJAY CLOTH CENTRE - DYNAMIC CATALOG SYSTEM
// JavaScript for CSV/JSON Data Integration
// ============================================

class ClothingCatalog {
    constructor() {
        this.products = [];
        this.filteredProducts = [];
        this.currentFilter = 'all';
        this.init();
    }

    async init() {
        await this.loadProducts();
        this.setupEventListeners();
        this.renderProducts();
        this.hideLoading();
    }

    // Load products from CSV or JSON file
    async loadProducts() {
        try {
            // Try to load from CSV first, fallback to JSON
            const response = await fetch('data/products.csv');
            if (response.ok) {
                const csvData = await response.text();
                this.products = this.parseCSV(csvData);
            } else {
                // Fallback to JSON data
                const jsonResponse = await fetch('data/products.json');
                const jsonData = await jsonResponse.json();
                this.products = jsonData.products || [];
            }
            
            this.filteredProducts = [...this.products];
            console.log('Products loaded:', this.products.length);
        } catch (error) {
            console.error('Error loading products:', error);
            // Load sample data if files not found
            this.loadSampleData();
        }
    }

    // Parse CSV data into product objects
    parseCSV(csvData) {
        const lines = csvData.trim().split('\n');
        const headers = lines[0].split(',').map(header => header.trim());
        const products = [];

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(value => value.trim().replace(/"/g, ''));
            const product = {};
            
            headers.forEach((header, index) => {
                product[header.toLowerCase()] = values[index] || '';
            });
            
            // Ensure required fields
            if (product.name && product.category && product.price) {
                products.push(product);
            }
        }
        
        return products;
    }

    // Load sample data if external files fail
    loadSampleData() {
        this.products = [
            {
                id: '1',
                name: 'Premium Cotton Shirt',
                category: 'shirts',
                price: '₹2,999',
                description: 'Luxurious 100% cotton shirt with premium finish. Perfect for formal occasions.',
                image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                availability: 'In Stock',
                whatsapp_message: 'Hi! I\'m interested in the Premium Cotton Shirt (₹2,999). Please share more details.'
            },
            {
                id: '2',
                name: 'Designer Kurta',
                category: 'shirts',
                price: '₹3,499',
                description: 'Elegant designer kurta with intricate embroidery work. Traditional yet contemporary.',
                image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                availability: 'In Stock',
                whatsapp_message: 'Hi! I\'m interested in the Designer Kurta (₹3,499). Please share more details.'
            },
            {
                id: '3',
                name: 'Formal Trousers',
                category: 'pants',
                price: '₹2,299',
                description: 'Perfectly tailored formal trousers for the modern gentleman. Comfortable fit.',
                image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                availability: 'In Stock',
                whatsapp_message: 'Hi! I\'m interested in the Formal Trousers (₹2,299). Please share more details.'
            },
            {
                id: '4',
                name: 'Premium Business Suit',
                category: 'suits',
                price: '₹12,999',
                description: 'Complete business suit with jacket and trousers. Premium fabric and expert tailoring.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                availability: 'Made to Order',
                whatsapp_message: 'Hi! I\'m interested in the Premium Business Suit (₹12,999). Please share more details.'
            },
            {
                id: '5',
                name: 'Silk Pocket Square',
                category: 'accessories',
                price: '₹899',
                description: 'Elegant silk pocket square to complete your formal look. Various colors available.',
                image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                availability: 'In Stock',
                whatsapp_message: 'Hi! I\'m interested in the Silk Pocket Square (₹899). Please share more details.'
            },
            {
                id: '6',
                name: 'Classic Blazer',
                category: 'suits',
                price: '₹5,999',
                description: 'Versatile classic blazer suitable for both formal and casual occasions.',
                image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                availability: 'In Stock',
                whatsapp_message: 'Hi! I\'m interested in the Classic Blazer (₹5,999). Please share more details.'
            }
        ];
        
        this.filteredProducts = [...this.products];
        console.log('Sample data loaded');
    }

    // Setup event listeners for filters and interactions
    setupEventListeners() {
        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                this.filterProducts(category);
                this.updateActiveFilter(e.target);
            });
        });

        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }

        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.nav-link, .cta-button');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    // Filter products by category
    filterProducts(category) {
        this.currentFilter = category;
        
        if (category === 'all') {
            this.filteredProducts = [...this.products];
        } else {
            this.filteredProducts = this.products.filter(product => 
                product.category.toLowerCase() === category.toLowerCase()
            );
        }
        
        this.renderProducts();
    }

    // Update active filter button
    updateActiveFilter(activeButton) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        activeButton.classList.add('active');
    }

    // Render products to the DOM
    renderProducts() {
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) return;

        if (this.filteredProducts.length === 0) {
            productsGrid.innerHTML = `
                <div class="no-products">
                    <i class="fas fa-search"></i>
                    <p>No products found in this category.</p>
                </div>
            `;
            return;
        }

        const productsHTML = this.filteredProducts.map(product => `
            <div class="product-card" data-category="${product.category}">
                <img src="${product.image || 'https://via.placeholder.com/300x250?text=Product+Image'}" 
                     alt="${product.name}" 
                     class="product-image"
                     loading="lazy"
                     onerror="this.src='https://via.placeholder.com/300x250?text=Product+Image'">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <span class="product-category">${product.category}</span>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">${product.price}</div>
                    ${product.availability ? `<div class="product-availability">${product.availability}</div>` : ''}
                    <a href="${this.generateWhatsAppURL(product)}" 
                       class="whatsapp-btn" 
                       target="_blank">
                        <i class="fab fa-whatsapp"></i>
                        Inquire on WhatsApp
                    </a>
                </div>
            </div>
        `).join('');

        productsGrid.innerHTML = productsHTML;
        
        // Add entrance animation
        const cards = productsGrid.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Generate WhatsApp URL for product inquiry
    generateWhatsAppURL(product) {
        const phoneNumber = '918972714744'; // Your WhatsApp number
        const message = product.whatsapp_message || 
            `Hi! I'm interested in ${product.name} (${product.price}). Please share more details about availability, sizes, and colors.`;
        
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    }

    // Hide loading animation
    hideLoading() {
        const loading = document.querySelector('.loading');
        if (loading) {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.style.display = 'none';
            }, 300);
        }
    }

    // Public method to refresh products (useful for admin updates)
    async refreshProducts() {
        await this.loadProducts();
        this.filterProducts(this.currentFilter);
    }

    // Search functionality
    searchProducts(query) {
        const searchTerm = query.toLowerCase();
        this.filteredProducts = this.products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
        this.renderProducts();
    }
}

// Google Sheets Integration Class
class GoogleSheetsSync {
    constructor(sheetId, apiKey) {
        this.sheetId = sheetId;
        this.apiKey = apiKey;
        this.baseURL = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values`;
    }

    // Fetch data from Google Sheets
    async fetchSheetData(range = 'Sheet1!A1:Z1000') {
        try {
            const response = await fetch(`${this.baseURL}/${range}?key=${this.apiKey}`);
            const data = await response.json();
            return this.parseSheetData(data.values);
        } catch (error) {
            console.error('Error fetching Google Sheets data:', error);
            return [];
        }
    }

    // Parse sheet data into product objects
    parseSheetData(values) {
        if (!values || values.length === 0) return [];
        
        const headers = values[0].map(header => header.toLowerCase());
        const products = [];

        for (let i = 1; i < values.length; i++) {
            const row = values[i];
            const product = {};
            
            headers.forEach((header, index) => {
                product[header] = row[index] || '';
            });
            
            if (product.name && product.category && product.price) {
                products.push(product);
            }
        }
        
        return products;
    }
}

// Initialize the catalog when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main catalog
    window.catalog = new ClothingCatalog();
    
    // Optional: Initialize Google Sheets sync
    // Uncomment and configure if you want to use Google Sheets
    // const SHEET_ID = 'your_google_sheet_id_here';
    // const API_KEY = 'your_google_api_key_here';
    // window.googleSync = new GoogleSheetsSync(SHEET_ID, API_KEY);
    
    // Add search functionality if search input exists
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            window.catalog.searchProducts(e.target.value);
        });
    }

    // Add refresh button functionality
    const refreshBtn = document.getElementById('refreshCatalog');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            window.catalog.refreshProducts();
        });
    }
});

// Utility functions for external integrations
window.CatalogUtils = {
    // Add new product programmatically
    addProduct: (product) => {
        if (window.catalog) {
            window.catalog.products.push(product);
            window.catalog.filterProducts(window.catalog.currentFilter);
        }
    },
    
    // Update existing product
    updateProduct: (id, updatedProduct) => {
        if (window.catalog) {
            const index = window.catalog.products.findIndex(p => p.id === id);
            if (index !== -1) {
                window.catalog.products[index] = { ...window.catalog.products[index], ...updatedProduct };
                window.catalog.filterProducts(window.catalog.currentFilter);
            }
        }
    },
    
    // Remove product
    removeProduct: (id) => {
        if (window.catalog) {
            window.catalog.products = window.catalog.products.filter(p => p.id !== id);
            window.catalog.filterProducts(window.catalog.currentFilter);
        }
    },
    
    // Get all products
    getAllProducts: () => {
        return window.catalog ? window.catalog.products : [];
    }
};
