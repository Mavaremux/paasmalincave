const MOBILE_MENU_TOGGLE = document.getElementById("mobile-menu-toggle");
const MOBILE_MENU = document.getElementById("mobile-menu");
const SERVICE_TABS = document.querySelectorAll(".service-tab-btn");
const SERVICE_DETAILS = document.querySelectorAll(".service-detail");
const CONTACT_FORM = document.getElementById("contact-form");
const WHATSAPP_NUMBER = "584248541279";

function closeMobileMenu() {
  MOBILE_MENU.classList.remove("open");
  MOBILE_MENU_TOGGLE.innerHTML = '<span class="material-icons">menu</span>';
}

function openMobileMenu() {
  MOBILE_MENU.classList.add("open");
  MOBILE_MENU_TOGGLE.innerHTML = '<span class="material-icons">close</span>';
}

MOBILE_MENU_TOGGLE.addEventListener("click", () => {
  if (MOBILE_MENU.classList.contains("open")) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

MOBILE_MENU.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => closeMobileMenu());
});

SERVICE_TABS.forEach((button) => {
  button.addEventListener("click", () => {
    const tabIndex = button.dataset.tab;
    SERVICE_TABS.forEach((btn) => btn.classList.remove("active"));
    SERVICE_DETAILS.forEach((detail) => detail.classList.remove("active"));

    button.classList.add("active");
    const target = document.querySelector(`.service-detail[data-detail='${tabIndex}']`);
    if (target) {
      target.classList.add("active");
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

if (SERVICE_TABS.length) {
  SERVICE_TABS[0].classList.add("active");
}

if (CONTACT_FORM) {
  CONTACT_FORM.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value.trim();
    const company = form.company.value.trim();
    const requirement = form.req.value.trim();
    const message = `Hola PAASMALINC.A, soy ${name} de ${company}. Req: ${requirement}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
    form.reset();
  });
}
