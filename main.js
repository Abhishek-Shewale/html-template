// Student AI Website - Main JavaScript File

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("Student AI Website Loaded");

  // Initialize all components
  initMobileMenu();
  initFeatureCards();
  initFeaturesSmallGallery();
  initFlipCards();
  initPricingCards();
  initReviewCards();
  initFAQSection();
  initPhotoGallery();
  initSeeMoreButton();
  initScrollAnimations();
});

// Mobile Menu Functionality
function initMobileMenu() {
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileDropdownMenu = document.getElementById("mobileDropdownMenu");
  let isMenuOpen = false;

  if (mobileMenuButton && mobileDropdownMenu) {
    mobileMenuButton.addEventListener("click", function (e) {
      e.stopPropagation();

      if (isMenuOpen) {
        mobileDropdownMenu.classList.add("hidden");
        mobileDropdownMenu.classList.remove("mobile-menu-enter");
        mobileDropdownMenu.classList.add("mobile-menu-exit");
        isMenuOpen = false;
      } else {
        mobileDropdownMenu.classList.remove("hidden");
        mobileDropdownMenu.classList.add("mobile-menu-enter");
        mobileDropdownMenu.classList.remove("mobile-menu-exit");
        isMenuOpen = true;
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (isMenuOpen && !mobileDropdownMenu.contains(e.target)) {
        mobileDropdownMenu.classList.add("hidden");
        isMenuOpen = false;
      }
    });
  }
}

// Add this to your initScrollAnimations function
const benefitItems = document.querySelectorAll(".benefit-item");
benefitItems.forEach((item, index) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";

  setTimeout(() => {
    item.style.transition = "all 0.6s ease";
    item.style.opacity = "1";
    item.style.transform = "translateY(0)";
  }, index * 200);
});

function initFeaturesSmallGallery() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1675664533677-2f3479b85c20?w=300&h=300&fit=crop&crop=center", // Indian students with laptop
    "https://images.unsplash.com/photo-1589169011402-8b2cbd1ee593?w=300&h=300&fit=crop&crop=center", // Indian parents 1

    "https://plus.unsplash.com/premium_photo-1663091422892-2ebd4d70be59?w=300&h=300&fit=crop&crop=center", // Indian kids using laptop 1
    "https://plus.unsplash.com/premium_photo-1681483524067-a76808e16e0b?w=300&h=300&fit=crop&crop=center", // Indian kids using laptop 2
    "https://images.unsplash.com/photo-1730130596425-197566414dc4?w=300&h=300&fit=crop&crop=center", // Indian parents 2

    "https://plus.unsplash.com/premium_photo-1741753299648-e406db7a6602?w=300&h=300&fit=crop&crop=center", // Indian kids using laptop 3
  ];

  const featuresSmallGallery = document.getElementById("featuresSmallGallery");
  if (featuresSmallGallery) {
    featuresSmallGallery.innerHTML = galleryImages
      .map(
        (image, index) => `
        <div class="overflow-hidden rounded-xl">
          <img 
            src="${image}" 
            alt="Student learning ${index + 1}" 
            class="w-full aspect-square object-cover transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg" 
            loading="lazy" 
          />
        </div>
      `
      )
      .join("");
  }
}

// Feature Cards Data and Initialization
function initFeatureCards() {
  const featuresData = [
    {
      icon: "fas fa-check-circle",

      title: "Board Aligned",
      description: "Content mapped to CBSE and State Boards",
      visible: true,
    },
    {
      icon: "fas fa-rocket",

      title: "Instant Homework Helper",
      description: "Complete assignments faster with AI guidance",
      visible: false,
    },
    {
      icon: "fas fa-calculator",

      title: "Math Problem Solver",
      description:
        "Step-by-step math solutions with detailed explanations for every problem",
      visible: true,
    },
    {
      icon: "fas fa-robot",

      title: "30+ AI Features",
      description: "Solve doubts instantly with comprehensive AI assistance",
      visible: true,
    },
    {
      icon: "fas fa-book-open",

      title: "Chapter-Based Learning",
      description: "Structured content organized by chapters and topics",
      visible: false,
    },
    {
      icon: "fas fa-calendar-alt",

      title: "Study Planner",
      description: "Smart scheduling to organize your study sessions",
      visible: false,
    },
    {
      icon: "fas fa-question-circle",

      title: "24x7 Doubt Clarifier",
      description: "Get instant answers to your questions anytime",
      visible: false,
    },
    {
      icon: "fas fa-pencil-alt",
      title: "Practice Exercises",
      description: "Interactive exercises to reinforce learning concepts",
      visible: false,
    },
    {
      icon: "fas fa-comments",
      title: "Bilingual Support",
      description: "Available in both English and Hindi",
      visible: false,
    },
  ];

  const featuresGrid = document.getElementById("featuresGrid");
  if (featuresGrid) {
    featuresGrid.innerHTML = featuresData
      .map(
        (feature) => `
            <div class="feature-card group bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 border border-gray-100 ${
              !feature.visible ? "mobile-hidden" : ""
            }">
                <div class="icon-container bg-purple-500 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                   <i class="${feature.icon} text-3xl text-white"></i>
                </div>
                <h3 class="text-xl font-bold mb-4 text-gray-800">${
                  feature.title
                }</h3>
                <p class="text-gray-600 leading-relaxed">${
                  feature.description
                }</p>
            </div>
        `
      )
      .join("");
  }
}

// Flip Cards Data and Initialization
function initFlipCards() {
  const flipCardsData = [
    {
      frontTitle: "Stress-Free Family",
      frontImage: "https://img.icons8.com/color/96/family.png",
      frontGradient: "from-blue-200 to-blue-200",
      frontIconGradient: "from-blue-500 to-blue-500",
      checkboxColor: "bg-blue-500",
      frontFeatures: [
        "No parent supervision needed",
        "Confident independent learning",
        "Happy children, happy parents",
        "Better family relationships",
      ],
      backTitle: "Family Benefits",
      backDescription:
        "Reduce family stress while improving academic performance and relationships.",
    },

    {
      frontTitle: "Compare vs Tuition / Coaching",
      frontImage: "https://img.icons8.com/3d-fluency/94/money-bag.png",
      frontGradient: "from-green-200 to-green-200", // Same color = solid
      frontIconGradient: "from-green-500 to-green-500",
      checkboxColor: "bg-green-500",
      frontFeatures: [
        "Monthly Tuition: ₹2,000–₹5,000+",
        "Student AI: ₹499 – One Time",
        "Works 24/7",
        "Covers all subjects",
      ],
      backTitle: "Cost Comparison Details",
      backDescription:
        "Traditional tuition costs ₹24,000-₹60,000 annually. Student AI provides comprehensive learning support for just ₹499 one-time payment.",
    },

    {
      frontTitle: "5x Faster Learning",
      frontImage: "https://img.icons8.com/color/96/rocket.png",
      frontGradient: "from-purple-200 to-purple-200",
      frontIconGradient: "from-purple-500 to-purple-500",
      checkboxColor: "bg-purple-400",
      frontFeatures: [
        "Complete homework in 20 minutes",
        "Instant doubt solving",
        "More time for family & play",
        "Reduced academic pressure",
      ],
      backTitle: "Learning Acceleration",
      backDescription:
        "AI-powered tools help students learn faster and retain information better.",
    },
    {
      frontTitle: "Choose Your Style",
      frontImage: "https://img.icons8.com/3d-fluency/94/usb-2.png",
      frontGradient: "from-yellow-200 to-yellow-200",
      frontIconGradient: "from-yellow-500 to-yellow-500",
      checkboxColor: "bg-yellow-500",
      frontFeatures: [
        "USB works after initial setup",
        "Online: ₹199/month only",
        "Perfect for any budget",
        "No long-term commitments",
      ],
      backTitle: "Flexibility Features",
      backDescription:
        "Choose between offline USB or online subscription based on your needs.",
    },
  ];

  const flipCardsContainer = document.getElementById("flippingCardsContainer");
  if (flipCardsContainer) {
    flipCardsContainer.innerHTML = flipCardsData
      .map(
        (card) => `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front bg-gradient-to-br ${
                      card.frontGradient
                    } shadow-lg hover:shadow-xl transition-all duration-300">
                        <div class="bg-gradient-to-r ${
                          card.frontIconGradient
                        } text-white p-4 rounded-xl mb-6 text-center">
                            <img src="${card.frontImage}" alt="${
          card.frontTitle
        }" class="w-16 h-16 mx-auto mb-3 rounded-full object-cover" />
                            <h3 class="text-xl font-bold">${
                              card.frontTitle
                            }</h3>
                        </div>
                        <ul class="space-y-3 text-gray-700 flex-grow">
                           ${card.frontFeatures
                             .map(
                               (feature) => `
    <li class="flex items-start">
        <div class="${card.checkboxColor} rounded-full p-1 mr-3 mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center">
            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
        </div>
        <span class="text-left flex-1">${feature}</span>
    </li>
    `
                             )
                             .join("")}
                        </ul>
                    </div>
                    <div class="flip-card-back">
                        <div class="text-center mb-4">
                            <div class="bg-white/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold mb-4">${
                              card.backTitle
                            }</h3>
                        </div>
                        <p class="text-lg leading-relaxed">${
                          card.backDescription
                        }</p>
                    </div>
                </div>
            </div>
        `
      )
      .join("");

    // Initialize flip card interactions
    initFlipCardAnimations();
  }
}

// Flip Card Animations
function initFlipCardAnimations() {
  const flipCards = document.querySelectorAll(".flip-card");

  // Individual card click handlers
  flipCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  // Intersection Observer for sequential auto-flip
  const observerOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const container = entry.target;
        const cards = container.querySelectorAll(".flip-card");

        // Sequential flip animation
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("flipped");
            setTimeout(() => {
              card.classList.remove("flipped");
            }, 2000);
          }, index * 2500);
        });
      }
    });
  }, observerOptions);

  const cardsContainer = document.getElementById("flippingCardsContainer");
  if (cardsContainer) {
    observer.observe(cardsContainer);
  }
}

// Pricing Cards
function initPricingCards() {
  const pricingData = [
    {
      title: "USB 4 GB",
      price: "₹499",
      oldPrice: "₹799",
      discount: "Save up to 40%",
      gradient: "from-blue-500 to-indigo-600",
      features: ["Basic AI tools", "Works offline", "Class 4-12 content"],
      popular: false,
    },
    {
      title: "USB 8 GB",
      price: "₹799",
      oldPrice: "₹1,199",
      discount: "Save up to 35%",
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Advanced AI tools",
        "Priority support",
        "All features of 4GB",
      ],
      popular: true,
    },
    {
      title: "Online Plan",
      price: "₹199",
      oldPrice: null,
      discount: "per month",
      gradient: "from-green-500 to-green-600",
      features: ["All AI tools", "Regular updates", "Access from anywhere"],
      popular: false,
    },
    {
      title: "Combo Pack",
      price: "₹999",
      oldPrice: "₹1,499",
      discount: "Save up to 33%",
      gradient: "from-purple-500 to-pink-500",
      features: [
        "USB 8GB + Online Plan",
        "Best value package",
        "Priority support",
      ],
      popular: false,
    },
  ];

  const pricingContainer = document.getElementById("pricingCards");
  if (pricingContainer) {
    pricingContainer.innerHTML = pricingData
      .map(
        (plan) => `
            <div class="pricing-card relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${
              plan.popular ? "border-purple-500" : "border-gray-200"
            } hover:-translate-y-2">
                <div class="bg-gradient-to-r ${
                  plan.gradient
                } text-white p-4 rounded-2xl mb-6">
                    <h3 class="text-2xl font-bold text-center">${
                      plan.title
                    }</h3>
                </div>
                <div class="text-center mb-6">
                    <div class="text-4xl font-bold text-gray-800 mb-2">${
                      plan.price
                    }</div>
                    ${
                      plan.oldPrice
                        ? `<div class="text-lg text-gray-500 line-through">${plan.oldPrice}</div>`
                        : ""
                    }
                    <div class="text-green-600 font-semibold">${
                      plan.discount
                    }</div>
                </div>
                <ul class="space-y-4 mb-8">
                    ${plan.features
                      .map(
                        (feature) => `
                        <li class="flex items-center text-gray-600">
                            <div class="bg-green-100 rounded-full p-1 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-green-600">
                                    <path d="M12 2C6.47715 2 2 6.47715 2 12s4.47715 10 10 10 10-4.47715 10-10-4.47715-10-10-10zm0 18c-4.41119 0-8-3.58881-8-8s3.58881-8 8-8 8 3.58881 8 8-3.58881 8-8 8zm0-14c-2.20914 0-4 1.79086-4 4s1.79086 4 4 4 4-1.79086 4-4-1.79086-4-4-4zm0 14c-3.86603 0-7-3.13397-7-7s3.13397-7 7-7 7 3.13397 7 7-3.13397 7-7 7z"/>
                                </svg>
                            </div>
                            ${feature}
                        </li>
                    `
                      )
                      .join("")}
                </ul>
                <button class="w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  plan.popular
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }">
                    Get Started Now
                </button>
                ${
                  plan.popular
                    ? '<div class="absolute top-0 right-0 bg-yellow-400 text-gray-800 font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">Popular</div>'
                    : ""
                }
            </div>
        `
      )
      .join("");
  }
}

// Review Cards
function initReviewCards() {
  const reviewsData = [
    {
      name: "Jitu",
      title: "Game changer for studying!!",
      review:
        "I bought the Student AI USB to help with my studies, and it's been a game-changer! The interface is super easy to use, even my younger sisters are using it for math problems.",
      image:
        "https://images.unsplash.com/photo-1729157661483-ed21901ed892?w=150&h=150&fit=crop&crop=faces",
      date: "25 March 2025",
      rating: 5,
    },
    {
      name: "Srinivaas T.",
      title: "An apt gift to the Gen Z kids",
      review:
        "Very well designed and easy to use. My kid already loves it, she has been using it for 4 weeks now and rarely comes to us for help with her homework.",
      image:
        "https://plus.unsplash.com/premium_photo-1691030254390-aa56b22e6a45?w=150&h=150&fit=crop&crop=faces",
      date: "28 December 2024",
      rating: 5,
    },
    {
      name: "Shyam",
      title: "Wide range of features",
      review:
        "Valuable & affordable AI tool for students who want to improve their academic performance. Student AI offers a wide range of features to enhance learning experience faster & smarter.",
      image:
        "https://plus.unsplash.com/premium_photo-1723754591877-4178579ce444?w=150&h=150&fit=crop&crop=faces",
      date: "11 January 2025",
      rating: 5,
    },
    {
      name: "Chakravarthy P.",
      title: "Awesome Product.",
      review:
        "Very useful for students. It provides instant help with math and homework, which saves us so much time. I've already noticed they're more confident in their studies.",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=faces",
      date: "15 November 2024",
      rating: 5,
    },
  ];

  const reviewsContainer = document.getElementById("reviewsContainer");
  if (reviewsContainer) {
    reviewsContainer.innerHTML = reviewsData
      .map(
        (review) => `
            <div class="amazon-review-card bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div class="flex items-center justify-between mb-4">
                    <div class="star-rating mb-2">
                        ${Array(review.rating)
                          .fill(0)
                          .map(
                            () => `
                            <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                        `
                          )
                          .join("")}
                    </div>
                    <span class="verified-badge text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                        ✓ Verified Purchase
                    </span>
                </div>
                <h4 class="font-bold text-lg mb-3 text-gray-800">"${
                  review.title
                }"</h4>
                <p class="text-base mb-6 text-gray-700 leading-relaxed italic">"${
                  review.review
                }"</p>
                <div class="flex items-center">
                    <img src="${review.image}" alt="${
          review.name
        }" class="w-12 h-12 rounded-full mr-3 object-cover" />
                    <div>
                        <p class="font-bold text-gray-800">${review.name}</p>
                        <p class="text-gray-600 text-sm">Amazon Customer</p>
                        <p class="text-xs text-gray-500">${review.date}</p>
                        <a href="https://www.amazon.in/dp/B0DL31J11R?th=1" target="_blank" rel="noopener noreferrer" class="text-xs text-orange-600 hover:text-orange-800 mt-2 inline-block">
                            View on Amazon →
                        </a>
                    </div>
                </div>
            </div>
        `
      )
      .join("");

    // Make sure Amazon links work properly
    document.querySelectorAll('a[href*="amazon.in"]').forEach((link) => {
      link.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    });
  }
}

// FAQ Section - Fixed
function initFAQSection() {
  const faqData = [
    {
      question: "Does this work without internet?",
      answer:
        "No, internet connection is required for the AI features to work. However, the USB version has some offline content that can be accessed without internet, but the main AI tools need an active internet connection to function properly.",
    },
    {
      question: "What subjects are covered?",
      answer:
        "We cover all major subjects including Math, Science, Social Studies, English, Hindi, and more, aligned with CBSE, ICSE, and state board curriculums for classes 4-12.",
    },
    {
      question: "How does the AI help with homework?",
      answer:
        "Our AI tools can explain concepts, solve problems step-by-step, generate practice questions, and even help with writing assignments. It's like having a personal tutor available 24/7.",
    },
    {
      question: "What are the system requirements?",
      answer:
        "The USB works on any Windows laptop or desktop with Windows 7 or above, at least 2GB RAM, and 4GB of free storage space. For the online version, you just need a modern browser and internet connection.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a limited free trial of our online version. For the USB version, we have a 30-day money-back guarantee if you're not satisfied with the product.",
    },
  ];

  const faqContainer = document.getElementById("faqContainer");
  if (faqContainer) {
    faqContainer.innerHTML = faqData
      .map(
        (faq, index) => `
            <div class="faq-item bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden">
                <button onclick="toggleFaq(${index})" class="faq-button w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors duration-200">
                    <span class="text-lg font-semibold text-gray-800 pr-4">${faq.question}</span>
                    <div id="faq-icon-${index}" class="faq-icon">+</div>
                </button>
                <div id="faq-${index}" class="faq-content hidden">
                    <p class="text-gray-700 leading-relaxed text-base">${faq.answer}</p>
                </div>
            </div>
        `
      )
      .join("");
  }
}

// FAQ Toggle Function - Fixed
window.toggleFaq = function (id) {
  const faqContent = document.getElementById(`faq-${id}`);
  const faqIcon = document.getElementById(`faq-icon-${id}`);

  if (faqContent.classList.contains("hidden")) {
    // Open FAQ
    faqContent.classList.remove("hidden");
    faqContent.classList.add("active");
    faqIcon.textContent = "−";
  } else {
    // Close FAQ
    faqContent.classList.add("hidden");
    faqContent.classList.remove("active");
    faqIcon.textContent = "+";
  }
};

// Photo Gallery
function initPhotoGallery() {
  const galleryImages = [
    "https://plus.unsplash.com/premium_photo-1682089851706-d0d4c95b9b99?w=300&h=300&fit=crop&crop=faces",

    "https://plus.unsplash.com/premium_photo-1682787495027-b84df26f4a17?w=300&h=300&fit=crop&crop=faces",
    "https://plus.unsplash.com/premium_photo-1682089902900-1287954324bf?w=300&h=300&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1659352785645-61edc2ddbed4?w=300&h=300&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1667351326034-c6d733c57dc9?w=300&h=300&fit=crop&crop=faces",
    "https://plus.unsplash.com/premium_photo-1682092116121-caa7899b0180?w=300&h=300&fit=crop&crop=faces",
    "https://images.unsplash.com/flagged/photo-1566192215649-67347425f492?w=300&h=300&fit=crop&crop=faces",
    "https://plus.unsplash.com/premium_photo-1664301653494-c80c2757d8aa?w=300&h=300&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1729824186570-4d4aede00043?w=300&h=300&fit=crop&crop=faces",
    "https://plus.unsplash.com/premium_photo-1682089856632-bb507e1884f0?w=300&h=300&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1727875075949-8b36efd25260?w=300&h=300&fit=crop&crop=faces",

    "https://images.unsplash.com/photo-1561543850-f85d80c4237d?w=300&h=300&fit=crop&crop=faces",
  ];

  const photoGallery = document.getElementById("photoGallery");
  if (photoGallery) {
    photoGallery.innerHTML = galleryImages
      .map(
        (image, index) => `
            <div class="aspect-square overflow-hidden rounded-lg">
                <img src="${image}" alt="Happy student ${
          index + 1
        }" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
        `
      )
      .join("");
  }
}

// See More Button for Mobile
function initSeeMoreButton() {
  const seeMoreBtn = document.getElementById("seeMoreBtn");
  const seeMoreContainer = document.getElementById("seeMoreContainer");
  const mobileHiddenCards = document.querySelectorAll(".mobile-hidden");
  let isExpanded = false;

  function isMobile() {
    return window.innerWidth < 768;
  }

  function updateCardVisibility() {
    if (isMobile()) {
      if (!isExpanded) {
        mobileHiddenCards.forEach((card) => {
          card.style.display = "none";
        });
      } else {
        mobileHiddenCards.forEach((card) => {
          card.style.display = "block";
          card.classList.add("show-all");
        });
      }
      if (seeMoreContainer) seeMoreContainer.style.display = "block";
    } else {
      mobileHiddenCards.forEach((card) => {
        card.style.display = "block";
        card.classList.remove("show-all");
      });
      if (seeMoreContainer) seeMoreContainer.style.display = "none";
    }
  }

  if (seeMoreBtn) {
    updateCardVisibility();

    seeMoreBtn.addEventListener("click", function () {
      if (!isExpanded) {
        mobileHiddenCards.forEach((card, index) => {
          setTimeout(() => {
            card.style.display = "block";
            card.classList.add("show-all");
          }, index * 100);
        });
        seeMoreBtn.textContent = "Show Less";
        isExpanded = true;
      } else {
        mobileHiddenCards.forEach((card) => {
          card.style.display = "none";
          card.classList.remove("show-all");
        });
        seeMoreBtn.textContent = "See More Features";
        isExpanded = false;

        // Scroll back to features section
        const featuresSection = document.querySelector("section");
        if (featuresSection) {
          featuresSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });

    window.addEventListener("resize", function () {
      if (!isMobile() && isExpanded) {
        isExpanded = false;
        seeMoreBtn.textContent = "See More Features";
      }
      updateCardVisibility();
    });
  }
}

// Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");
      }
    });
  }, observerOptions);

  // Observe all sections for scroll animations
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });
}

// Utility Functions
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

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Performance monitoring
function measurePerformance() {
  if ("performance" in window) {
    window.addEventListener("load", () => {
      const perfData = performance.getEntriesByType("navigation")[0];
      console.log(
        "Page Load Time:",
        perfData.loadEventEnd - perfData.loadEventStart
      );
    });
  }
}

// Initialize performance monitoring
measurePerformance();

// Error handling
window.addEventListener("error", function (e) {
  console.error("JavaScript Error:", e.error);
});

// Console welcome message
console.log(
  "%c🚀 Student AI Website Loaded Successfully!",
  "color: #6f42c1; font-size: 16px; font-weight: bold;"
);
console.log(
  "%c📚 Transforming education with AI-powered learning tools",
  "color: #4b5563; font-size: 12px;"
);
