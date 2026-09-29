/**
 * ==========================================================================
 * AVUKAT BURAK HUKUK & DANIŞMANLIK OFİSİ — CENTRALIZED LOGIC (PAKSOY STYLE)
 * Navigation, Endless Hero Carousel, Practice Accordions, Contact Validation,
 * and Article Modal Reader.
 * ==========================================================================
 */

// ==========================================================================
// 1. CENTRALIZED EDITABLE CONTENT (siteConfig)
// ==========================================================================
const siteConfig = {
  name: "Avukat Burak Hukuk & Danışmanlık Ofisi",
  tagline: "Stratejik derinlik. Kararlı temsil. Birebir kurumsal güven.",
  contact: {
    phone: "+90 5XX XXX XX XX",
    whatsapp: "https://wa.me/905000000000",
    instagram: "https://instagram.com/avukatburak",
    email: "info@avukatburak.av.tr",
    address: "[Ofis adresi buraya eklenecektir]",
    hours: "Pazartesi – Cuma / 09:00 – 18:00"
  },
  navigation: [
    { label: "Ana Sayfa", href: "#anasayfa" },
    { label: "Hizmetlerimiz", href: "#calisma-alanlari" },
    { label: "Yayınlar", href: "#makaleler" },
    { label: "Hakkımızda", href: "#hakkimizda" },
    { label: "İletişim", href: "#iletisim" }
  ],
  articles: [
    {
      id: "is-sozlesmesi-dikkat-edilecekler",
      title: "İş sözleşmesi imzalarken nelere dikkat edilmeli?",
      category: "İş Hukuku",
      readTime: "5 dk okuma",
      excerpt: "İş sözleşmelerinde yer alan rekabet yasağı, cezai şart, deneme süresi ve fazla çalışma hükümlerinin hukuki geçerlilik şartları ve çalışan hakları.",
      content: `
        <p class="lead">İş sözleşmesi, işçi ile işveren arasında bağımlılık ilişkisi kuran ve taraflara karşılıklı hak ve borçlar yükleyen temel hukuki belgedir. 4857 sayılı İş Kanunu kapsamında hazırlanan iş sözleşmelerinin imzalanması aşamasında dikkat edilecek hususlar, ileride doğabilecek uyuşmazlıkların önüne geçer.</p>
        
        <h2>1. Deneme Süresi ve Koşulları</h2>
        <p>İş Kanunu m. 15 uyarınca deneme süresi toplu iş sözleşmeleri hariç en çok 2 ay olarak belirlenebilir. Bu süre içerisinde taraflar iş sözleşmesini bildirim süresine gerek olmaksızın ve tazminatsız feshedebilir; ancak çalışılan günlerin ücreti eksiksiz ödenmelidir.</p>

        <h2>2. Rekabet Yasağı ve Sınırları</h2>
        <p>Türk Borçlar Kanunu m. 444 ve devamı uyarınca, rekabet yasağı kaydının geçerli olabilmesi için işçinin müşteri çevresi veya ticari sırlara vakıf olması ve bu bilgileri kullanarak işverene önemli bir zarar verme ihtimalinin bulunması gerekir. Ayrıca coğrafi alan, süre ve işin konusu bakımından makul bir sınırlama içermeyen rekabet yasakları mahkemelerce hükümsüz sayılmaktadır.</p>

        <h2>3. Fazla Çalışma ve Ücrete Dahil Edilme Şartı</h2>
        <p>Yargıtay içtihatları doğrultusunda, fazla çalışma ücretinin asıl ücrete dahil olduğuna dair sözleşme hükümleri yıllık en fazla 270 saat ile sınırlıdır. Bu sınırı aşan çalışmalar için işçiye her halükarda fazla çalışma ücreti ödenmesi yasal zorunluluktur.</p>
      `
    },
    {
      id: "gayrimenkul-aliminda-hukuki-riskler",
      title: "Gayrimenkul satın alırken hukuki açıdan nelere dikkat edilmeli?",
      category: "Gayrimenkul Hukuku",
      readTime: "6 dk okuma",
      excerpt: "Taşınmaz devirlerinde tapu kütüğündeki şerhler, ipotek ve haciz kayıtları, imar durumu ve tapu dışı vaatlerin hukuki risk analizi.",
      content: `
        <p class="lead">Gayrimenkul alım-satım işlemleri yüksek maliyetli yatırımlar olup, tapu devri öncesinde yapılacak kapsamlı bir hukuki inceleme (due diligence), alıcının telafisi güç zararlarla karşılaşmasını önler.</p>
        
        <h2>1. Tapu Kaydındaki Takyidatların İncelenmesi</h2>
        <p>Taşınmaz üzerinde ipotek, haciz, intifa hakkı, şufa (önalım) hakkı veya aile konutu şerhi bulunup bulunmadığı Tapu ve Kadastro Müdürlüğü kütüklerinden mutlaka resmi olarak sorgulanmalıdır.</p>

        <h2>2. İmar Durumu ve İskân (Yapı Kullanma İzin Belgesi)</h2>
        <p>Satın alınacak yapının ruhsata ve onaylı mimari projeye uygun inşa edilip edilmediği ilgili belediyeden teyit edilmelidir. İskânı bulunmayan binalarda sonradan yıkım kararları veya ağır imar para cezaları ile karşılaşılabilmektedir.</p>

        <h2>3. Taşınmaz Satış Vaadi Sözleşmelerinde Şekil Şartı</h2>
        <p>Noterde 'düzenleme şeklinde' yapılmayan gayrimenkul satış vaadi sözleşmeleri hukuken geçersizdir. Adi yazılı sözleşmelere dayalı peşin ödemeler ciddi mağduriyetler yaratmaktadır.</p>
      `
    },
    {
      id: "ticari-sozlesmeler-cezai-sart",
      title: "Ticari sözleşmelerde cezai şart ve teminat hükümleri",
      category: "Ticaret Hukuku",
      readTime: "4 dk okuma",
      excerpt: "Basiretli tacir ilkesi gereğince sözleşmelerde kararlaştırılan fahiş cezai şartların tenkisi ve banka teminat mektuplarının nakde çevrilmesi riskleri.",
      content: `
        <p class="lead">Ticari hayatta sözleşmeler, yalnızca iş ortaklığının başlangıcında imzalanan formaliteler değil; kriz anında şirketin finansal varlığını ve operasyonel devamlılığını koruyan hukuki güvenlik kalkanlarıdır.</p>
        
        <h2>1. Risklerin Önceden Paylaştırılması ve Cezai Şart</h2>
        <p>Türk Ticaret Kanunu m. 18/2 uyarınca her tacir, ticaretine ait bütün faaliyetlerinde basiretli bir iş adamı gibi hareket etmekle yükümlüdür. Bu nedenle ticari sözleşmelerde yer alan cezai şartların hâkim tarafından fahiş olduğu gerekçesiyle indirilmesi genel borçlar hukukuna nazaran çok daha sıkı şartlara bağlanmıştır.</p>

        <h2>2. Yetkili Mahkeme ve Tahkim Klozları</h2>
        <p>Uyuşmazlık halinde hangi mahkemenin yetkili olacağı veya davanın milli/milletlerarası tahkim yoluyla (örneğin ISTAC) çözülüp çözülmeyeceği sözleşmede açıkça kararlaştırılmalıdır. Bu klozlar dava sürelerini ve maliyetlerini dramatik biçimde azaltır.</p>

        <h2>3. Fesih ve Tasfiye Protokolleri</h2>
        <p>Sözleşmeden dönme veya fesih halinde tarafların birbirine iade edeceği varlıklar ve gizlilik yükümlülüklerinin süresi baştan düzenlenmelidir.</p>
      `
    }
  ]
};

// ==========================================================================
// 2. DOM INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initStickyNavigation();
  initMobileMenu();
  initSmoothScroll();
  initHeroCarousel();
  initContactForm();
  initArticleModal();
});

// ==========================================================================
// 3. STICKY NAVIGATION CONTROLLER (PAKSOY STYLE)
// ==========================================================================
function initStickyNavigation() {
  const nav = document.getElementById("siteNav");
  if (!nav) return;

  function updateNav() {
    if (window.scrollY > 20) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateNav, { passive: true });
  updateNav();
}

// ==========================================================================
// 4. MOBILE MENU CONTROLLER
// ==========================================================================
function initMobileMenu() {
  const openBtn = document.getElementById("mobileMenuOpenBtn");
  const closeBtn = document.getElementById("mobileMenuCloseBtn");
  const overlay = document.getElementById("mobileMenuOverlay");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!overlay || !openBtn) return;

  function openMenu() {
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    openBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    openBtn.setAttribute("aria-expanded", "false");
  }

  openBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) {
      closeMenu();
    }
  });
}

// ==========================================================================
// 5. SMOOTH SCROLL & ACTIVE LINK SPY
// ==========================================================================
function initSmoothScroll() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }, { passive: true });
}

// ==========================================================================
// 6. HERO VISUAL CAROUSEL CONTROLS (AUTOPLAY + MANUAL BUTTONS)
// ==========================================================================
function initHeroCarousel() {
  const prevBtn = document.getElementById("carouselPrevBtn");
  const nextBtn = document.getElementById("carouselNextBtn");
  const track = document.getElementById("heroMarqueeTrack");

  if (!track) return;

  let resetTimeout = null;

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      clearTimeout(resetTimeout);
      track.style.animationDirection = "reverse";
      track.style.animationDuration = "22s";
      resetTimeout = setTimeout(() => {
        track.style.animationDirection = "normal";
        track.style.animationDuration = "38s";
      }, 4000);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      clearTimeout(resetTimeout);
      track.style.animationDirection = "normal";
      track.style.animationDuration = "16s";
      resetTimeout = setTimeout(() => {
        track.style.animationDuration = "38s";
      }, 3500);
    });
  }
}

// ==========================================================================
// 7. PRACTICE AREA ACCORDION DRAWER TOGGLE
// ==========================================================================
function togglePractice(index) {
  const card = document.getElementById(`practiceCard-${index}`);
  if (!card) return;

  const isExpanded = card.classList.toggle("is-expanded");
  const btn = card.querySelector(".practice-toggle-btn");
  if (btn) {
    btn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    const textSpan = btn.querySelector(".practice-toggle-text");
    if (textSpan) {
      textSpan.innerText = isExpanded ? "Detayları Kapat" : "Detaylı Bilgi & Örnek İşler";
    }
  }
}

// Global function to jump and open a specific practice area
window.openPracticeByIndex = function(index) {
  const targetCard = document.getElementById(`practiceCard-${index}`);
  if (!targetCard) return;

  targetCard.scrollIntoView({ behavior: "smooth", block: "center" });

  if (!targetCard.classList.contains("is-expanded")) {
    togglePractice(index);
  }

  // Visual highlight pulse
  targetCard.style.outline = "2px solid var(--navy-accent)";
  setTimeout(() => {
    targetCard.style.outline = "";
  }, 2200);
};

// Global helper to set subject in contact form
window.setContactSubject = function(subjectText) {
  const subjectInput = document.getElementById("formSubject");
  if (subjectInput) {
    subjectInput.value = `${subjectText} Danışmanlığı`;
  }
};

// ==========================================================================
// 8. CONTACT FORM VALIDATION & FEEDBACK
// ==========================================================================
function initContactForm() {
  const form = document.getElementById("consultationForm");
  if (!form) return;

  const nameInput = document.getElementById("formName");
  const phoneInput = document.getElementById("formPhone");
  const emailInput = document.getElementById("formEmail");
  const messageInput = document.getElementById("formMessage");
  const kvkkCheckbox = document.getElementById("formKvkk");
  const submitBtn = document.getElementById("formSubmitBtn");
  const statusAlert = document.getElementById("formStatusAlert");

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePhone(phone) {
    const cleaned = phone.replace(/\D/g, "");
    return cleaned.length >= 10;
  }

  function setFieldValidity(input, errorElementId, isValid, errorMessage) {
    const errEl = document.getElementById(errorElementId);
    if (!isValid) {
      input.classList.add("is-invalid");
      if (errEl) {
        errEl.innerText = errorMessage;
        errEl.classList.add("visible");
      }
    } else {
      input.classList.remove("is-invalid");
      if (errEl) {
        errEl.innerText = "";
        errEl.classList.remove("visible");
      }
    }
    return isValid;
  }

  [nameInput, phoneInput, emailInput, messageInput].forEach(inp => {
    if (!inp) return;
    inp.addEventListener("input", () => {
      inp.classList.remove("is-invalid");
      const errEl = document.getElementById(inp.id + "Error");
      if (errEl) errEl.classList.remove("visible");
      if (statusAlert) statusAlert.style.display = "none";
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let hasErrors = false;

    if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
      setFieldValidity(nameInput, "formNameError", false, "Lütfen adınızı ve soyadınızı eksiksiz giriniz.");
      hasErrors = true;
    } else {
      setFieldValidity(nameInput, "formNameError", true, "");
    }

    if (!phoneInput.value.trim() || !validatePhone(phoneInput.value)) {
      setFieldValidity(phoneInput, "formPhoneError", false, "Lütfen geçerli bir telefon numarası giriniz.");
      hasErrors = true;
    } else {
      setFieldValidity(phoneInput, "formPhoneError", true, "");
    }

    if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
      setFieldValidity(emailInput, "formEmailError", false, "Lütfen geçerli bir e-posta adresi giriniz.");
      hasErrors = true;
    } else {
      setFieldValidity(emailInput, "formEmailError", true, "");
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      setFieldValidity(messageInput, "formMessageError", false, "Lütfen durumunuzu en az 10 karakterle açıklayınız.");
      hasErrors = true;
    } else {
      setFieldValidity(messageInput, "formMessageError", true, "");
    }

    const kvkkErr = document.getElementById("formKvkkError");
    if (!kvkkCheckbox.checked) {
      if (kvkkErr) {
        kvkkErr.innerText = "Devam etmek için KVKK metnini onaylamanız gerekmektedir.";
        kvkkErr.classList.add("visible");
      }
      hasErrors = true;
    } else {
      if (kvkkErr) {
        kvkkErr.innerText = "";
        kvkkErr.classList.remove("visible");
      }
    }

    if (hasErrors) return;

    // Simulate submission state
    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>Gönderiliyor...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();

      if (statusAlert) {
        statusAlert.className = "form-status-alert success";
        statusAlert.innerHTML = `<strong>Talebiniz Alındı:</strong> Hukuki danışmanlık başvurunuz başarıyla iletildi. En kısa sürede sizinle irtibata geçilecektir.`;
        statusAlert.style.display = "block";
      }
    }, 1000);
  });
}

// ==========================================================================
// 9. ARTICLE MODAL (READER)
// ==========================================================================
function initArticleModal() {
  const modal = document.getElementById("articleModal");
  const closeBtn = document.getElementById("articleModalClose");
  const titleEl = document.getElementById("modalArticleTitle");
  const metaEl = document.getElementById("modalArticleMeta");
  const contentEl = document.getElementById("modalArticleContent");

  if (!modal) return;

  function closeModal() {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  window.openArticleById = function(articleId) {
    const article = siteConfig.articles.find(a => a.id === articleId);
    if (!article) return;

    if (titleEl) titleEl.innerText = article.title;
    if (metaEl) metaEl.innerText = `${article.category} • ${article.readTime}`;
    if (contentEl) contentEl.innerHTML = article.content;

    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };
}
