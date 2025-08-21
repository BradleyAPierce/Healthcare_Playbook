// Enhanced Navigation JavaScript - Override MDB Framework
document.addEventListener("DOMContentLoaded", function () {
  // Navigation scroll effect
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("modernNavbar");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  // Two-level Care Settings Menu functionality
  const careMainItems = document.querySelectorAll(".care-main-item");

  // Mobile accordion behavior for Care Settings
  function initMobileAccordion() {
    if (window.innerWidth <= 991) {
      careMainItems.forEach((item) => {
        const link = item.querySelector(".care-main-link");
        const subMenu = item.querySelector(".care-sub-menu");

        if (link && subMenu) {
          link.addEventListener("click", function (e) {
            e.preventDefault();

            // Close other open sub-menus
            careMainItems.forEach((otherItem) => {
              if (otherItem !== item) {
                otherItem.classList.remove("active");
              }
            });

            // Toggle current sub-menu
            item.classList.toggle("active");
          });
        }
      });
    }
  }

  // Desktop hover enhancements for Care Settings
  function initDesktopHover() {
    careMainItems.forEach((item) => {
      const subMenu = item.querySelector(".care-sub-menu");
      let timeout;

      if (subMenu) {
        item.addEventListener("mouseenter", function () {
          if (window.innerWidth > 991) {
            clearTimeout(timeout);
          }
        });

        item.addEventListener("mouseleave", function () {
          if (window.innerWidth > 991) {
            timeout = setTimeout(() => {
              // Additional cleanup if needed
            }, 100);
          }
        });
      }
    });
  }

  // Initialize mobile and desktop behaviors
  initMobileAccordion();
  initDesktopHover();

  // Handle window resize
  window.addEventListener("resize", function () {
    // Reset mobile classes on resize
    if (window.innerWidth > 991) {
      careMainItems.forEach((item) => {
        item.classList.remove("active");
      });
    }

    // Re-initialize if needed
    initMobileAccordion();
  });

  // Override MDB dropdown behavior for mega menus
  const megaMenus = document.querySelectorAll(".mega-menu");
  megaMenus.forEach((menu) => {
    const dropdownToggle = menu.querySelector(".dropdown-toggle");
    const dropdownMenu = menu.querySelector(".dropdown-menu");

    if (dropdownToggle && dropdownMenu) {
      // Prevent MDB from handling these dropdowns
      dropdownToggle.setAttribute("data-mdb-toggle", "");

      // Add custom hover behavior
      menu.addEventListener("mouseenter", function () {
        if (window.innerWidth > 991) {
          dropdownMenu.classList.add("show");
        }
      });

      menu.addEventListener("mouseleave", function () {
        if (window.innerWidth > 991) {
          dropdownMenu.classList.remove("show");
        }
      });
    }
  });

  // Floating Action Button functionality
  const fabContainer = document.getElementById("fabContainer");
  const fabMain = document.querySelector(".fab-main");
  const quickNavPanel = document.getElementById("quickNavPanel");
  const quickNavOverlay = document.getElementById("quickNavOverlay");
  const quickNavClose = document.getElementById("quickNavClose");

  // Show/hide FAB on scroll
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (fabContainer) {
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        fabContainer.classList.add("hidden");
      } else {
        // Scrolling up
        fabContainer.classList.remove("hidden");
      }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // FAB click to show quick navigation
  if (fabMain) {
    fabMain.addEventListener("click", function () {
      if (quickNavPanel && quickNavOverlay) {
        quickNavPanel.classList.add("active");
        quickNavOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  }

  // Close quick navigation
  function closeQuickNav() {
    if (quickNavPanel && quickNavOverlay) {
      quickNavPanel.classList.remove("active");
      quickNavOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (quickNavClose) {
    quickNavClose.addEventListener("click", closeQuickNav);
  }

  if (quickNavOverlay) {
    quickNavOverlay.addEventListener("click", closeQuickNav);
  }

  // Escape key to close quick navigation
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeQuickNav();
    }
  });

  // Smooth scroll progress indicator (if enabled)
  function updateScrollProgress() {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;

    document.documentElement.style.setProperty(
      "--scroll-progress",
      scrollProgress + "%"
    );
  }

  window.addEventListener("scroll", updateScrollProgress);

  // Mobile navigation toggle enhancements
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener("click", function () {
      // Add custom mobile navigation behavior if needed
    });
  }

  // Initialize on page load
  updateScrollProgress();

  console.log("Enhanced Navigation JavaScript loaded successfully");
});

// Additional utility functions for navigation
window.NavigationUtils = {
  // Function to programmatically open Care Settings menu
  openCareSettings: function () {
    const careSettingsDropdown = document.getElementById(
      "careSettingsDropdown"
    );
    if (careSettingsDropdown) {
      careSettingsDropdown.click();
    }
  },

  // Function to navigate to specific care type
  navigateToCareType: function (careType) {
    const careLinks = {
      acute: "acutecaremarket.html",
      ambulatory: "ambulatorymarket.html",
      extended: "extendedcaremarket.html",
    };

    if (careLinks[careType]) {
      window.location.href = careLinks[careType];
    }
  },

  // Function to show quick navigation
  showQuickNav: function () {
    const quickNavPanel = document.getElementById("quickNavPanel");
    const quickNavOverlay = document.getElementById("quickNavOverlay");

    if (quickNavPanel && quickNavOverlay) {
      quickNavPanel.classList.add("active");
      quickNavOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  },
};
