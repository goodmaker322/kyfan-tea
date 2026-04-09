// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }
  }, 500);
});

const productDetailsMap = {
  dongtrung: {
    name: "Trà Gạo Lứt Đông Trùng",
    content: `<p><strong>Thành phần:</strong> Gạo lứt hữu cơ rang, đông trùng hạ thảo (cordyceps).</p><p><strong>Công dụng:</strong> Bổ thận, ích khí, tăng cường miễn dịch, hỗ trợ tiêu hóa, giảm mệt mỏi, cải thiện sinh lực.</p><p><strong>Cách pha:</strong> Hãm 3-5g với 200ml nước sôi (85-90°C) trong 5-7 phút. Uống ấm sau bữa ăn.</p>`,
  },
  lactien: {
    name: "Trà Lạc Tiên Tâm Sen",
    content: `<p><strong>Thành phần:</strong> Hoa lạc tiên, tâm sen, cúc hoa vàng.</p><p><strong>Công dụng:</strong> An thần, giảm căng thẳng, hỗ trợ ngủ ngon, giảm hồi hộp, an dịu thần kinh.</p><p><strong>Cách pha:</strong> Hãm 2-3g trà với 250ml nước 85°C trong 5 phút, uống trước khi ngủ 30 phút.</p>`,
  },
  laoi: {
    name: "Trà Lá Ổi",
    content: `<p><strong>Thành phần:</strong> Lá ổi bánh tẻ, sấy khô tự nhiên, không chất bảo quản.</p><p><strong>Công dụng:</strong> Ổn định đường huyết, kháng viêm, hỗ trợ tiêu hóa, giàu chất chống oxy hóa.</p><p><strong>Cách pha:</strong> Đun 3g lá ổi với 300ml nước sôi trong 5 phút hoặc hãm 7-10 phút.</p>`,
  },
  cagai: {
    name: "Trà Cà Gai Leo",
    content: `<p><strong>Thành phần:</strong> Cà gai leo (sao vàng hạ thổ).</p><p><strong>Công dụng:</strong> Hỗ trợ giải độc gan, hạ men gan, bảo vệ tế bào gan, thanh nhiệt, mát gan.</p><p><strong>Cách pha:</strong> Hãm 5-7g với 250ml nước sôi trong 10 phút, uống 2-3 lần/ngày.</p>`,
  },
};

const modal = document.getElementById("productModal");
const modalTitle = modal.querySelector(".modal-title");
const modalBody = modal.querySelector(".modal-body");
const closeBtn = modal.querySelector(".modal-close");

function showModal(key) {
  const data = productDetailsMap[key];
  if (data) {
    modalTitle.innerText = data.name;
    modalBody.innerHTML = data.content;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}
function hideModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
}
document.querySelectorAll(".btn-modal").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const key = btn.getAttribute("data-product-key");
    if (key) showModal(key);
  });
});
closeBtn.addEventListener("click", hideModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) hideModal();
});

// Scroll Fade
const faders = document.querySelectorAll(".scroll-fade");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);
faders.forEach((el) => obs.observe(el));
setTimeout(() => {
  faders.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80)
      el.classList.add("visible");
  });
}, 150);
