// Global variables
let currentUser = null;
let cart = [];

  let products = [
  // Beauty Tools
  {
    id: 13,
    name: "Pro Makeup Brush Set (10 pcs)",
    price: 2200,
    category: "beauty tools",
    brand: "generic",
    image: "premium-10-piece-makeup-brushes-set-professional-quality-lotshoppk-195343.jpg",
    inStock: true,
    description: "A professional 10-piece makeup brush set designed for flawless application of foundation, eyeshadow, blush, and more. "
    
  },
  {
    id: 14,
    name: "Facial Steamer",
    price: 4300,
    category: "beauty tools",
    brand: "generic",
    image: "beautytoolsimages/633aaf388a302d1edf2459bd-nano-ionic-facial-steamer-professional.jpg",
    inStock: true,
    description: "A facial steamer that deeply cleanses pores, hydrates skin, and enhances skincare absorption for a spa-like experience at home."
  },
  {
    id: 15,
    name: "Beauty Blender & Puff Set (12 pcs)",
    price: 799,
    category: "beauty tools",
    brand: "generic",
    image: "Beauty Blender.webp",
    inStock: true,
    description: "A 12-piece set of beauty blenders and puffs for smooth, even makeup application and flawless blending."
  },
  {
    id: 16,
    name: "Silicone Makeup Brush Cleaning Pad",
    price: 350,
    category: "beauty tools",
    brand: "generic",
    image: "brush cleaner pad.jpg",
    inStock: true,
     description:"A silicone makeup brush cleaning pad with textured surfaces for deep, easy, and effective brush cleansing."
  },
  {
    id: 17,
    name: "540 Needle Derma Roller",
    price: 899,
    category: "beauty tools",
    brand: "generic",
    image: "dermarollerinpakistan.webp",
    inStock: true,
    description:"A 540-needle derma roller designed to stimulate collagen production and enhance skincare absorption.Ideal for improving skin texture, reducing fine lines, and promoting a healthy glow."

  },
  {
    id: 18,
    name: "2-in-1 Facial Cleansing Brush",
    price: 650,
    category: "beauty tools",
    brand: "generic",
    image: "facial cleansing brush.webp",
    inStock: true,
    description:"A 2-in-1 facial cleansing brush with soft bristles and silicone side for deep cleansing and gentle exfoliation.Perfect for removing dirt, oil, and makeup while refreshing and smoothing the skin."
  },
  {
    id: 19,
    name: "Gua Sha & Face Roller Set",
    price: 1099,
    category: "beauty tools",
    brand: "generic",
    image: "GettyImages-1253197555.webp",
    inStock: true,
    description:"A Gua Sha & Face Roller Set crafted to boost circulation, reduce puffiness, and enhance skin elasticity.Made with smooth stone for a relaxing, spa-like facial massage at home."
  },

  // Fragrances
  {
    id: 31,
    name: "Scented Candle – For Her",
    price: 1099,
    category: "fragrances",
    brand: "generic",
    image: "71umCKnKw3L.jpg",
    inStock: true,
    description:"A beautifully crafted scented candle designed for her, offering a calming aroma to relax, unwind, and uplift the senses."
  },
  {
    id: 32,
    name: "Febreze Air Mist Pack (5 scents)",
    price: 2499,
    category: "fragrances",
    brand: "Febreze",
    image: "91TG6EEdItL._SL1500_.jpg",
    inStock: true,
    description:"Febreze Air Mist Pack with 5 refreshing scents to eliminate odors and instantly freshen up any room."
  },
  {
    id: 33,
    name: "Dusk Bulgarian Lavender Wax Melts",
    price: 749,
    category: "fragrances",
    brand: "Dusk",
    image: "02285FCC-CFFC-4490-BD9B-7F91E91B2537.jpg",
    inStock: true,
    description:"Dusk Bulgarian Lavender Wax Melts infuse your space with a soothing, floral aroma for a calming, long-lasting fragrance experience."
  },
  {
    id: 34,
    name: "Opio Kisses Body Mist – 250ml",
    price: 1199,
    category: "fragrances",
    brand: "Opio",
    image: "Opio-Kisses-Body-Mist-250ml-2.jpg",
    inStock: true,
    description:"A light, sweet mist with floral undertones that leaves your skin feeling fresh and fragrant all day. Perfect for daily wear. "
  },
  {
    id: 35,
    name: "Lavender Scented Candle",
    price: 3500,
    category: "fragrances",
    brand: "generic",
    image: "fragrancesimages/lavender.jpg",
    inStock: true,
    description:"Infused with calming lavender essence, this candle soothes your space with warmth and serenity. Perfect for relaxation and stress relief."
  },
  {
    id: 36,
    name: "Miniso Fragrance",
    price: 2900,
    category: "fragrances",
    brand: "miniso",
    image: "skincareimages\miniso-perfume.jpg",
    inStock: true,
    description:"A soft, floral scent that stays all day. This chic fragrance is perfect for everyday wear with a hint of playful elegance."
  },
  {
    id: 37,
    name: "White Sun Moon Candle",
    price: 2830,
    category: "fragrances",
    brand: "generic",
    image: "fragrancesimages\white sun moon candle.jpg",
    inStock: true,
    description:"Art meets aroma in this celestial candle. Aesthetic decor with a gentle scent—ideal for gifting or self-care moments."
  },
  {
    id: 38,
    name: "Perfume-For-Her",
    price: 5400,
    category: "fragrances",
    brand: "generic",
    image: "fragrancesimages\perfume-for-her.jpg",
    inStock: true,
    description: "A luxury fragrance crafted for confident, graceful women. Long-lasting, classy, and undeniably feminine."
  },
    // Haircare
  {
    id: 20,
    name: "Velcro Hair Rollers Set",
    price: 1499,
    category: "haircare",
    brand: "generic",
    image: "51tz9kAh3xL._SL500_.jpg",
    inStock: true,
    description: "Perfect for achieving voluminous curls or smooth waves, these Velcro hair rollers provide a convenient way to style your hair without heat damage. Great for all hair types, they offer a quick and easy solution to add volume and curls for any occasion.."

  },
  {
    id: 21,
    name: "Pantene Curl Perfection",
    price: 899,
    category: "haircare",
    brand: "Pantene",
    image: "71g2kSBQhZL.jpg",
    inStock: true,
    description:"Formulated to enhance and define your natural curls, Pantene Curl Perfection is a nourishing hair cream that controls frizz and boosts shine. The lightweight formula provides long-lasting curl definition without weighing hair down."
  },
  {
    id: 22,
    name: "Himalaya Softness & Shine Cream",
    price: 599,
    category: "haircare",
    brand: "Himalaya",
    image: "8901138815721-1-1000x1000.jpg",
    inStock: true,
    description:"This hair cream from Himalaya combines the goodness of natural ingredients to nourish and add shine to your hair. It helps manage frizz and enhances softness, making your hair feel smooth and healthy all day."
  },
  {
    id: 23,
    name: "Herbion Hair Oil",
    price: 399,
    category: "haircare",
    brand: "Herbion",
    image: "coconut-hair-oil.jpg",
    inStock: true,
    description:"Herbion Hair Oil is infused with natural herbs known for their strengthening and nourishing properties. Ideal for dry and damaged hair, it helps in reducing hair fall and promoting healthy hair growth, leaving your scalp moisturized and your hair softer."
  },
  {
    id: 24,
    name: "L'Oreal 6 Oil Nourish",
    price: 749,
    category: "haircare",
    brand: "L'Oreal",
    image: "LOreal-Paris-6-Oil-Nourish-Scalp-Hair-Nourishing-Conditioner-For-All-Hair-Types-175ml.png",
    inStock: true,
    description:"A luxurious blend of six oils, L'Oreal 6 Oil Nourish deeply nourishes and strengthens your hair. This hair care treatment hydrates from root to tip, leaving your hair silky smooth, shiny, and full of life."
  },
  {
    id: 25,
    name: "Silicone Scalp Massager",
    price: 550,
    category: "haircare",
    brand: "generic",
    image: "S48a23d2d451741688cc6edffdf874adff.jpg_720x720q80.jpg",
    inStock: true,
    description:"The Silicone Scalp Massager is an easy-to-use tool that helps in cleaning your scalp and promoting healthy hair growth. Its gentle silicone bristles massage the scalp to stimulate blood circulation and prevent buildup, ensuring your scalp remains clean and fresh."
  },
  {
    id: 26,
    name: "TRESemme Moisture Hydrating Shampoo",
    price: 1010,
    category: "haircare",
    brand: "TRESemme",
    image: "file:///C:/Users/HP/Desktop/hi/Emanpart/mustiproject/mustiproject/haircareimages/tresemme.jpg",
    inStock: true,
    description:"TRESemme Moisture Hydrating Shampoo is designed to hydrate and replenish dry hair. Infused with moisture-locking ingredients, it helps restore softness, making your hair feel deeply nourished and hydrated after every wash."
  },
  {
    id: 27,
    name: "Vince Biotin Keratin Anti-Hairfall Kit",
    price: 1200,
    category: "haircare",
    brand: "Vince",
    image: "haircareimages/Vince.jpg",
    inStock: true,
    description:"This anti-hairfall kit from Vince is formulated with biotin and keratin to strengthen and nourish hair, preventing hair breakage and promoting healthier hair growth. Ideal for individuals struggling with hair thinning and breakage, it provides nourishment to both the scalp and hair."
  },
  {
    id: 28,
    name: "Remington Hair Curlor",
    price: 7000,
    category: "haircare",
    brand: "Remington",
    image: "file:///C:/Users/HP/Desktop/hi/Emanpart/mustiproject/mustiproject/haircareimages/curlor.jpg",
    inStock: true,
    description:"Get effortlessly styled hair with the Remington Hair Curler. Perfect for adding curls and volume, this curler heats up quickly and is designed for easy handling, making it ideal for both beginners and professionals. Enjoy smooth, shiny curls that last all day."
  },
  {
    id: 29,
    name: "Remington Hair Dryer",
    price: 6800,
    category: "haircare",
    brand: "Remington",
    image: "haircareimages\dryer.jpg",
    inStock: true,
    description:"The Remington Hair Dryer is a must-have for achieving quick, smooth, and frizz-free hair. With its powerful motor and multiple heat settings, it delivers professional-level results. Whether you need a quick dry or sleek style, this hair dryer is perfect for every occasion."
  },
  {
    id: 1,
    name: "MUA Matte Lipstick – Bona Fide",
    price: 1115,
    category: "makeup",
    brand: "MUA",
    image: "product_image_1.jpg",
    inStock: true,
    description: "A richly pigmented matte lipstick that glides smoothly and delivers long-lasting color with a bold finish. Ideal for everyday glam or bold looks. "
  },
  {
    id: 2,
    name: "MUA Pressed Powder – Translucent",
    price: 1000,
    category: "makeup",
    brand: "MUA",
    image: "product_image_2.jpg",
    inStock: true,
    description: "A lightweight, translucent pressed powder that sets makeup, controls shine, and blurs imperfections for a flawless matte finish. "
  },
  {
    id: 3,
    name: "MUA Pro Base Moisturising Primer",
    price: 1880,
    category: "makeup",
    brand: "MUA",
    image: "product_image_3.jpg",
    inStock: true,
    description:"A hydrating primer that preps your skin for makeup, smooths texture, and extends wear while keeping your skin moisturized all day. "
  },

  // New Products
  {
    id: 4,
    name: "Laura Mercier Translucent Loose Setting Powder",
    price: 7899,
    category: "makeup",
    brand: "Laura Mercier",
    image: "laura-mercier-laura-mercier-translucent-loose-setting-powder-736150000316-32739519430743_1.jpeg",
    inStock: true,
    description:"Iconic loose powder that sets makeup for 16-hour wear, controls oil, and blurs fine lines with a silky-smooth finish. "
  },
  {
    id: 5,
    name: "Huda Beauty Liquid Matte – Miss America",
    price: 4999,
    category: "makeup",
    brand: "Huda Beauty",
    image: "LIQUID-MATTE-PACKSHOT-MISS-AMERICA.jpg",
    inStock: true,
    description:"A cult-favorite liquid lipstick with intense pigmentation, lightweight texture, and transfer-proof matte finish in a bold red shade. "
  },
  {
    id: 6,
    name: "KIKO Milano 3D Hydra Lipgloss",
    price: 2299,
    category: "makeup",
    brand: "KIKO Milano",
    image: "PM_Kiko_milano_3D_Hydra_lipgloss_1.png",
    inStock: true,
    description:"A hydrating lip gloss that adds a plumping 3D shine with a soft, non-sticky texture for visibly fuller lips. "
  },
  {
    id: 7,
    name: "Flormar Contour Stick-02-medium-10g",
    price: 2000,
    category: "makeup",
    brand: "Flormar",
    image: "makeupimages\flormar-contour-stick-02-medium-10g.png",
    inStock: true,
    description:"A creamy contour stick that blends seamlessly to define facial features and sculpt your look with buildable coverage. "
  },
   {
    id: 8,
    name: "Clossal Volume Express Mascara-Black03",
    price: 2300,
    category: "makeup",
    brand: "Maybelline",
    image: "makeupimages\ColossalVolumeExpressMascara100Black3.webp",
    inStock: true,
    description: "Get bold, dramatic lashes with Maybelline’s Colossal Volume Express Mascara. Its mega brush and collagen-infused formula plump lashes with 9x more volume instantly, without clumps. Ideal for all-day wear with a smudge-proof finish."

  },
   {
    id: 9,
    name: "MAC FIX-IT",
    price: 2100,
    category: "makeup",
    brand: "MAC",
    image: "makeupimages/macfixit-tpr.webp",
    inStock: true,
    description: "MAC FIX-IT is a multi-purpose setting spray that hydrates, refreshes, and locks in makeup for all-day wear. Use it before, during, or after makeup application to prep skin, reduce cakey finishes, and give your look a natural glow."

  },
   {
    id: 10,
    name: "Concealor",
    price: 1800,
    category: "makeup",
    brand: "Tarte",
    image: "makeupimages/836-shape-tape-concealer-29N-lght-mdm-MAIN2-0.webp",
    inStock: true,
    description: "A full-coverage, crease-proof concealer that brightens, smooths, and covers dark circles or blemishes with a flawless matte finish. "
  },
  {
    id: 11,
    name: "Maybelline SuperStay",
    price: 3300,
    category: "makeup",
    brand: "Maybelline",
    image: "makeupimages/51vfRTf1ACL._SL1080.webp",
    inStock: true,
    description: "A highly pigmented, long-lasting liquid lipstick with a matte finish that stays put for up to 16 hours without fading or smudging. "
  },
  {
    id: 12,
    name: "BeneTint",
    price: 1100,
    category: "makeup",
    brand: "",
    image: "makeupimages/49cbce1d-fb1e-4ead-a822-306a2471f2d9-1000x1000-33ThysWFB1dPrN7HHQTQQtVqyKxsOIq6FKALOxXg.webp",
    inStock: true,
    description: "A sheer, rose-tinted stain that gives lips and cheeks a natural flush. Lightweight, buildable, and long-wearing. "
  },
  {
    id: 44,
    name: "Dewy Setting Spray",
    price: 2400,
    category: "makeup",
    brand: "elf",
    image: "makeupimages/e-l-f-cosmetics-e-l-f-cosmetics-power-grip-dewy-setting-spray-609332847590-32688382410839.webp" ,
    inStock: true,
    description: "A hydrating setting spray infused with coconut and green tea to lock in makeup, refresh skin, and give a radiant dewy glow. "
  },
  // Skincare products
 
  {
  id: 38,
  name: "CeraVe Moisturising Cream (454g)",
  price: 5800,
  category: "skincare",
  brand: "CeraVe",
  image: "cerave-moisturizing-cream-dry-to-very-dry-skin-454g_1.jpg",
  inStock: true,
  description: "CeraVe Moisturising Cream delivers long-lasting hydration with essential ceramides and hyaluronic acid. Developed with dermatologists, it helps restore the skin's protective barrier, making it perfect for dry to very dry skin on the face and body."

},
{
  id: 39,
  name: "Clean & Clear Sensitive Foaming Cleanser",
  price: 2100,
  category: "skincare",
  brand: "Clean & Clear",
  image: "CnC_ESSN_CLNSR_PUMP_8oz_ECMBL_CarouselBuild_1_JPG.png",
  inStock: true,
  description: "This gentle foaming cleanser is specially formulated for sensitive skin. It removes oil, dirt, and makeup without over-drying, leaving your skin feeling fresh and clean. Oil-free and non-comedogenic for everyday use."

},
{
  id: 40,
  name: "DermaBlush Kalonji Face Scrub",
  price: 950,
  category: "skincare",
  brand: "DermaBlush",
  image: "Face-Scrub.png",
  inStock: true,
  description: "Enriched with Kalonji (black seed), this face scrub gently exfoliates to remove dead skin cells, unclog pores, and reveal a brighter complexion. Ideal for oily and acne-prone skin."

},
{
  id: 41,
  name: "Garnier Eye Makeup Remover 2in1",
  price: 1199,
  category: "skincare",
  brand: "Garnier",
  image: "robwwadmxqi4.jpg",
  inStock: true,
  description: "Garnier's 2-in-1 Eye Makeup Remover combines the power of oil and water to gently remove even waterproof eye makeup. Its dual-phase formula leaves no greasy residue and is safe for sensitive eyes."

},
{
  id: 42,
  name: "CeraVe Skin Renewing Eye Cream",
  price: 3599,
  category: "skincare",
  brand: "CeraVe",
  image: "skin-renewing-eye-repair-cream.png",
  inStock: true,
  description: "This lightweight eye cream helps reduce the appearance of dark circles and puffiness while restoring the skin barrier with ceramides and peptides. Suitable for all skin types and dermatologist-tested."

},
{
  id: 43,
  name: "St. Ives Fresh Skin Apricot Face Scrub",
  price: 1350,
  category: "skincare",
  brand: "St. Ives",
  image: "ST.-Ives-fresh-skin-face-scrub.jpg",
  inStock: true,
  description: "Made with 100% natural exfoliants and apricot extract, this invigorating scrub deeply cleans pores and removes impurities. Leaves skin soft, smooth, and glowing after just one use."

},
{
  id: 44,
  name: "Hydrating Mineral Sunscreen (BroadSpectrum SPF-50)",
  price: 850,
  category: "skincare",
  brand: "DERMASATION",
  image: "skincareimages/Hydrating-mineral-sun-screen-spf-50.webp",
  inStock: true,
  description: "A broad-spectrum SPF 50 sunscreen that offers strong UVA/UVB protection. This lightweight mineral formula hydrates while shielding the skin from sun damage. Ideal for sensitive and acne-prone skin."

},
{
  id: 45,
  name: "Vitamin C-Brightening and Anti-aging Face Serum",
  price: 1350,
  category: "skincare",
  brand: "DR.RASHEL",
  image: "skincareimages/Vitamincserum-01_1_11zon_1080x.webp",
  inStock: true,
  description: "This powerful serum combines Vitamin C with hyaluronic acid to brighten skin tone, fade dark spots, and reduce signs of aging. Lightweight and fast-absorbing, it gives your skin a radiant glow."

},
{
  id: 46,
  name: "Blemish Control Cleanser",
  price: 1100,
  category: "skincare",
  brand: "CeraVe",
  image: "skincareimages/blemish-control-cleanser-1-lg.webp",
  inStock: true,
  description: "Formulated with salicylic acid and niacinamide, this cleanser targets acne and blemishes while helping to maintain the skin’s natural barrier. A gentle but effective daily solution for acne-prone skin."

},
{
  id: 47,
  name: "The Ordinary Granactive Retinoid Serum",
  price: 1300,
  category: "skincare",
  brand: "The Ordinary",
  image: "skincareimages/TheOrdinaryGranactiveRetinoid5_inSqualane30ml_1-600x783.webp",
  inStock: true,
  description: "A next-generation retinoid serum that targets fine lines, uneven tone, and signs of aging without the irritation of traditional retinol. Formulated in squalane for added hydration and comfort."

},
{
  id: 48,
  name: "Hydrating Toner",
  price: 1500,
  category: "skincare",
  brand: "CeraVe",
  image: "skincareimages/hydrating-toner_front.webp",
  inStock: true,
  description: "This alcohol-free toner helps restore skin moisture after cleansing. Infused with ceramides and hyaluronic acid, it refreshes and preps your skin to absorb moisturizers and treatments more effectively."

},
{
  id: 49,
  name: "Moisturizing Lip Balm",
  price: 800,
  category: "skincare",
  brand: "generic",
  image: "skincareimages/cleansingbalm.webp",
  inStock: true,
  description: "A nourishing lip balm that soothes, hydrates, and protects dry, chapped lips. Enriched with natural oils and butters for long-lasting moisture and comfort. Suitable for daily use."

},
//bath abd body products
  {
  id: 50,
  name: "Veet 12 pcs Wax Strips",
  price: 750,
  category: "bath and body",
  brand: "Veet",
  image: "bath and body/Veet-Hair-Remover-Wax-Strips-12pc-PCS.jpg",
  inStock: true,
  description: "Veet Hair Removal Wax Strips offer salon-smooth skin at home in just minutes. With 12 ready-to-use strips, they gently and effectively remove hair from the root, leaving your skin silky smooth for up to 28 days. Ideal for legs, arms, and underarms, even on short hair."
},

  {
    id: 51,
    name: "Hydrating Body Lotion",
    price: 2800,
    category: "bath and body",
    brand: "NIVEA",
    image: "bath and body/NIVEA-Cocoa-Butter-Body-Lotion-with-Deep-Nourishing-Serum-20-Fl-Oz_f02929ad-f23c-4ea6-969c-2906d91c078f.9c3842e9a76bf9878c9235cd00cec6b1.webp",
    inStock: true,
    description: "Deeply nourish and hydrate your skin with NIVEA's Cocoa Butter Body Lotion. Infused with Deep Nourishing Serum and Vitamin E, this rich formula leaves your skin soft, smooth, and moisturized for up to 48 hours. Ideal for dry to very dry skin."

  },
  {
    id: 53,
    name: "Refreshing Shower Gel",
    price: 1200,
    category: "bath and body",
    brand: "Generic",
    image: "bath and body/CopyofDSC02981edit1080_600x600_crop_center.webp",
    inStock: true,
    description: "Enjoy a revitalizing shower experience with this Refreshing Shower Gel. Formulated with skin-loving ingredients, it gently cleanses while leaving your body feeling fresh and lightly scented. Perfect for daily use and all skin types."

  },
  {
    id: 54,
    name: "Exfoliating Body Scrub",
    price: 3000,
    category: "bath and body",
    brand: "Tree Hut",
    image: "bath and body/Tree-Hut-Watermelon-Shea-Sugar-Exfoliating-and-Hydrating-Body-Scrub-18-oz_6ad862cf-16f3-4d44-becc-f3a96af4d1c1.56bc9ff9da3f4177cd911e839aeac404.webp",
    inStock: true,
  description: "Get soft, glowing skin with Tree Hut's Watermelon Shea Sugar Scrub. Packed with real sugar, shea butter, and nourishing oils, it gently exfoliates and hydrates dry, rough skin. The refreshing watermelon scent makes your skincare routine feel like a treat."

  },
  {
    id: 55,
    name: "Vaseline Rosy Lip Balm",
    price: 550,
    category: "bath and body",
    brand: "Vaseline",
    image: "bath and body/vaseline-lip-therapy-lip-balm-tin-rosy-lips-20g.webp",
    inStock: true,
      description: "Soothe and soften your lips with Vaseline Rosy Lip Therapy. Enriched with rose and almond oil, this balm provides a subtle pink tint while locking in moisture for long-lasting hydration and a naturally healthy look."

  },
  {
    id: 56,
    name: "Purple Loofah",
    price: 350,
    category: "bath and body",
    brand: "Generic",
    image: "bath and body/bathing-round-loofah-for-men-and-women-pack-of-1-multicolor-1-original-imaggcxvykwxwm4r.webp",
    inStock: true,
      description: "Upgrade your bath routine with this soft, round Purple Loofah. Designed to create rich lather while gently exfoliating, it's perfect for daily cleansing and improving circulation. Suitable for both men and women."


  },
];



// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    
    loadUserSession();
    loadCart();
    initializeHeroSlider();
    initializeMenuToggle();
    initializeModals();
    initializeAuth();
    initializeCart();
    initializeSearch();
    initializeNavigation();
    updateUI();
    console.log('Just4Girls website with enhanced functionality loaded successfully!');
}

// Hero Slider Functionality
function initializeHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.hero-prev');
    const nextBtn = document.querySelector('.hero-next');
    let currentSlide = 0;
    let slideInterval;

    if (!slides.length) return;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            showSlide(index);
            startAutoSlide();
        });
    });

    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopAutoSlide);
        heroSection.addEventListener('mouseleave', startAutoSlide);
    }

    showSlide(0);
    startAutoSlide();
}

// Menu Toggle Functionality
function initializeMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuClose = document.getElementById('menuClose');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuOverlay.classList.add('active');
        });
    }

    if (menuClose) {
        menuClose.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
        });
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', (e) => {
            if (e.target === menuOverlay) {
                menuOverlay.classList.remove('active');
            }
        });
    }
}
    // Menu navigation
    const menuLinks = document.querySelectorAll('.menu-nav a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        // allow normal navigation to href
    });
});
  // Authentication System
function initializeAuth() {
    const loginRegisterBtn = document.getElementById('loginRegisterBtn');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const logoutBtn = document.getElementById('logoutBtn');

    if (loginRegisterBtn) {
        loginRegisterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentUser) {
                openModal('accountModal');
                displayAccountInfo();
            } else {
                openModal('loginModal');
            }
        });
    }

    if (showRegister) {
        showRegister.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal('loginModal');
            openModal('registerModal');
        });
    }

    if (showLogin) {
        showLogin.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal('registerModal');
            openModal('loginModal');
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Get stored users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        closeModal('loginModal');
        updateUI();
        showNotification('Login successful!', 'success');
        document.getElementById('loginForm').reset();
    } else {
        showNotification('Invalid email or password!', 'error');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const address = document.getElementById('registerAddress').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if email already exists
    if (users.find(u => u.email === email)) {
        showNotification('Email already registered!', 'error');
        return;
    }

    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        phone,
        address,
        password,
        registeredAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Auto login
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    closeModal('registerModal');
    updateUI();
    showNotification('Registration successful!', 'success');
    document.getElementById('registerForm').reset();
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    closeModal('accountModal');
    updateUI();
    showNotification('Logged out successfully!', 'success');
}


function loadUserSession() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
    }
}

function displayAccountInfo() {
    const accountInfo = document.getElementById('accountInfo');
    if (currentUser && accountInfo) {
        accountInfo.innerHTML = `
            <div class="account-field">
                <label>Name:</label>
                <span>${currentUser.name}</span>
            </div>
            <div class="account-field">
                <label>Email:</label>
                <span>${currentUser.email}</span>
            </div>
            <div class="account-field">
                <label>Phone:</label>
                <span>${currentUser.phone}</span>
            </div>
            <div class="account-field">
                <label>Address:</label>
                <span>${currentUser.address}</span>
            </div>
            <div class="account-field">
                <label>Member Since:</label>
                <span>${new Date(currentUser.registeredAt).toLocaleDateString()}</span>
            </div>
        `;
    }
}
function handleGoogleLogin(response) {
    const token = response.credential;
    const userData = parseJwt(token);

    // Store user in your current format
    currentUser = {
        id: userData.sub,
        name: userData.name,
        email: userData.email,
        phone: "N/A",
        address: "N/A",
        password: null,
        registeredAt: new Date().toISOString()
    };

    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateUI();
    closeModal('loginModal');
    showNotification('Logged in with Google!', 'success');
}

function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

   // Wishlist System
// ✅ Add to Wishlist
function addToWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistBadge();
        showNotification('Added to wishlist!', 'success');
    } else {
        showNotification('Already in wishlist.', 'info');
    }
}

// ✅ Remove from Wishlist
function removeFromWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    wishlist = wishlist.filter(id => id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistBadge();
    displayWishlist();
    showNotification('Removed from wishlist.', 'success');
}

// ✅ Show Wishlist Items in Modal
function displayWishlist() {
    const wishlistItems = document.getElementById('wishlistItems');
    if (!wishlistItems) return;

    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = `<p>Your wishlist is empty.</p>`;
        return;
    }

    wishlistItems.innerHTML = wishlist.map(id => {
        const product = products.find(p => p.id === id);
        if (!product) return '';
      return `
  <div class="wishlist-item">
    <img src="${product.image}" alt="${product.name}" />
    <div class="wishlist-item-info">
      <h4>${product.name}</h4>
      <p>₨ ${product.price.toLocaleString()}</p>
    </div>
    <button onclick="removeFromWishlist(${product.id})">Remove</button>
  </div>
`;
    }).join('');
}

// ✅ Update the wishlist icon badge
function updateWishlistBadge() {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    wishlist = wishlist.filter(id => products.some(p => p.id === id));
    const badge = document.getElementById('wishlistBadge');
    if (badge) {
        badge.textContent = wishlist.length;
    }
}


// ✅ Initialize Events After DOM Load
document.addEventListener('DOMContentLoaded', function () {
    updateWishlistBadge();

    // Add to Wishlist Buttons
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.getAttribute('data-product-id'));
            addToWishlist(productId);
        });
    });

    // Wishlist Nav Button
    const wishlistNav = document.getElementById('wishlistNav');
    if (wishlistNav) {
        wishlistNav.addEventListener('click', () => {
            displayWishlist();
            openModal('wishlistModal');
        });
    }
});

// Modal Management
function initializeModals() {
    const modalCloses = document.querySelectorAll('.modal-close');
    const modals = document.querySelectorAll('.modal');

    modalCloses.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            const modalId = closeBtn.getAttribute('data-modal');
            closeModal(modalId);
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Authentication System
function initializeAuth() {
    const loginRegisterBtn = document.getElementById('loginRegisterBtn');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const logoutBtn = document.getElementById('logoutBtn');

    if (loginRegisterBtn) {
        loginRegisterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentUser) {
                openModal('accountModal');
                displayAccountInfo();
            } else {
                openModal('loginModal');
            }
        });
    }

    if (showRegister) {
        showRegister.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal('loginModal');
            openModal('registerModal');
        });
    }

    if (showLogin) {
        showLogin.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal('registerModal');
            openModal('loginModal');
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Get stored users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        closeModal('loginModal');
        updateUI();
        showNotification('Login successful!', 'success');
        document.getElementById('loginForm').reset();
    } else {
        showNotification('Invalid email or password!', 'error');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const address = document.getElementById('registerAddress').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if email already exists
    if (users.find(u => u.email === email)) {
        showNotification('Email already registered!', 'error');
        return;
    }

    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        phone,
        address,
        password,
        registeredAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Auto login
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    closeModal('registerModal');
    updateUI();
    showNotification('Registration successful!', 'success');
    document.getElementById('registerForm').reset();
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    closeModal('accountModal');
    updateUI();
    showNotification('Logged out successfully!', 'success');
}

function loadUserSession() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
    }
}

function displayAccountInfo() {
    const accountInfo = document.getElementById('accountInfo');
    if (currentUser && accountInfo) {
        accountInfo.innerHTML = `
            <div class="account-field">
                <label>Name:</label>
                <span>${currentUser.name}</span>
            </div>
            <div class="account-field">
                <label>Email:</label>
                <span>${currentUser.email}</span>
            </div>
            <div class="account-field">
                <label>Phone:</label>
                <span>${currentUser.phone}</span>
            </div>
            <div class="account-field">
                <label>Address:</label>
                <span>${currentUser.address}</span>
            </div>
            <div class="account-field">
                <label>Member Since:</label>
                <span>${new Date(currentUser.registeredAt).toLocaleDateString()}</span>
            </div>
        `;
    }
}

// Cart System
function initializeCart() {
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    const cartNav = document.getElementById('cartNav');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const clearCartBtn = document.getElementById('clearCartBtn');

    

    if (cartNav) {
        cartNav.addEventListener('click', () => {
            openModal('cartModal');
            displayCart();
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }

    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    saveCart();
    updateCartBadge();
    displayCart();
    
    // Show the cart modal after adding the item
    openModal('cartModal');
    
    showNotification(`${product.name} added to cart!`, 'success');
}


function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartBadge();
    displayCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartBadge();
            displayCart();
        }
    }
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started!</p>
            </div>
        `;
        cartTotal.textContent = '0';
        return;
    }



    let total = 0;
    cartItems.innerHTML = cart.map(item => {
        total += item.price * item.quantity;
        return `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">₨ ${item.price.toLocaleString()}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `;
    }).join('');

    cartTotal.textContent = total.toLocaleString();
}

function handleCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }

    if (!currentUser) {
        closeModal('cartModal');
        openModal('loginModal');
        showNotification('Please login to checkout!', 'error');
        return;
    }

    // Simulate checkout
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showNotification(`Order placed successfully! Total: ₨ ${total.toLocaleString()}`, 'success');
    clearCart();
    closeModal('cartModal');
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartBadge();
    displayCart();
    showNotification('Cart cleared!', 'success');
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartBadge() {
    const cartBadge = document.getElementById('cartBadge');
    if (cartBadge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadge.textContent = totalItems;
    }
}
// Search System
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        // Add search suggestions
        searchInput.addEventListener('input', debounce(showSearchSuggestions, 300));
    }
}
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.productId);
        if (typeof addToCart === 'function') {
            console.log("add to cart 7");
          addToCart(id);
        } else {
            console.log("add to cart 8");
          alert('Cart functionality not available. Please check script.js');
        }
      });
    });

  

    // Load reviews
    document.querySelectorAll('.product-card').forEach(card => {
      const productId = parseInt(card.querySelector('.add-to-cart-btn')?.dataset.productId);
      if (!productId) return;

      const reviewContainer = document.createElement('div');
      reviewContainer.classList.add('review-display');
      card.appendChild(reviewContainer);

      const reviews = JSON.parse(localStorage.getItem("reviews") || "{}")[productId] || [];
      if (reviews.length > 0) {
        reviewContainer.innerHTML = '<h4>Reviews:</h4>' + reviews.map(r => `
          <div class="single-review">
            <strong>${r.user}</strong>: ${r.text}
          </div>
        `).join('');
      }
    });
  });

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (!searchTerm) {
        showNotification('Please enter a search term!', 'error');
        return;
    }

    const results = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm)
    );

    displaySearchResults(results, searchTerm);
    openModal('searchModal');
}

function displaySearchResults(results, searchTerm) {
    const searchResults = document.getElementById('searchResults');
    
    if (!searchResults) return;

    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>Product not found</h3>
                <p>No products found for "${searchTerm}"</p>
                <p>Try searching with different keywords.</p>
            </div>
        `;
        return;
    }

    searchResults.innerHTML = `
        <h4>Found ${results.length} product(s) for "${searchTerm}"</h4>
        <div class="search-results-grid">
            ${results.map(product => `
                <div class="search-result-item">
                    <div class="search-result-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="search-result-info">
                        <h4>${product.name}</h4>
                        <div class="search-result-price">₨ ${product.price.toLocaleString()}</div>
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function filterProducts(value, type) {
    let results = [];
    
    if (type === 'category') {
        if (value === 'all') {
            results = products;
        } else {
            results = products.filter(product => product.category === value);
        }
    } else if (type === 'brand') {
        results = products.filter(product => product.brand === value);
    }

    displaySearchResults(results, `${type}: ${value}`);
    openModal('searchModal');
}

function showSearchSuggestions(searchTerm) {
    // This could be implemented to show dropdown suggestions
    // For now, we'll keep it simple
}

// Navigation System
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const accountNav = document.getElementById('accountNav');
    const homeNav = document.getElementById('homeNav');
    const wishlistNav = document.getElementById('wishlistNav');
    const reviewsNav = document.getElementById('reviewsNav');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    if (accountNav) {
        accountNav.addEventListener('click', () => {
            if (currentUser) {
                openModal('accountModal');
                displayAccountInfo();
            } else {
                openModal('loginModal');
            }
        });
    }

    if (homeNav) {
        homeNav.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// UI Updates
function updateUI() {
    const userStatus = document.getElementById('userStatus');
    
    if (userStatus) {
        if (currentUser) {
            userStatus.textContent = `Hello, ${currentUser.name}`;
        } else {
            userStatus.textContent = 'Login / Register';
        }
    }

    updateCartBadge();
}

// Utility Functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;

    // Add styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                padding: 15px 20px;
                border-radius: 5px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                z-index: 4000;
                display: flex;
                align-items: center;
                gap: 10px;
                min-width: 300px;
                animation: slideIn 0.3s ease;
            }
            .notification-success { border-left: 4px solid #28a745; }
            .notification-error { border-left: 4px solid #dc3545; }
            .notification-info { border-left: 4px solid #17a2b8; }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// CTA Button functionality
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-btn');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const productsSection = document.querySelector('.product-section');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

//change hiraj product description
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const productId = parseInt(card.querySelector('.add-to-cart-btn').dataset.productId);
      const product = products.find(p => p.id === productId);
      if (!product) return;

      // Set modal content
      document.getElementById('productTitle').textContent = product.name;
      document.getElementById('productImage').src = product.image;
      document.getElementById('productPrice').textContent = product.price.toLocaleString();
      document.getElementById('productDescription').textContent =
        product.description || `This item belongs to our ${product.category} category by ${product.brand}.`;

      // Add-to-cart inside modal
      const addToCartBtn = document.getElementById('productDetailAddToCart');
      addToCartBtn.onclick = () => addToCart(product.id);

      openModal('productDetailModal');
    });
  });
});
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

// Make functions globally available for onclick handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;

