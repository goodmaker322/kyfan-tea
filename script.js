AOS.init({ duration: 800, once: true, offset: 50 });

window.addEventListener("load", () => {
  const manHinhTai = document.getElementById("manHinhTai");
  manHinhTai.style.opacity = "0";
  setTimeout(() => (manHinhTai.style.display = "none"), 600);
});

// ===== MOBILE MENU =====
const nutMenuMobile = document.getElementById("nutMenuMobile");
const thanhDieuHuong = document.getElementById("thanhDieuHuong");
const menuOverlayMobile = document.getElementById("menuOverlayMobile");

function toggleMobileMenu() {
  nutMenuMobile.classList.toggle("open");
  thanhDieuHuong.classList.toggle("open");
  menuOverlayMobile.classList.toggle("open");
  document.body.style.overflow = thanhDieuHuong.classList.contains("open")
    ? "hidden"
    : "";
}

function closeMobileMenu() {
  nutMenuMobile.classList.remove("open");
  thanhDieuHuong.classList.remove("open");
  menuOverlayMobile.classList.remove("open");
  document.body.style.overflow = "";
}

nutMenuMobile.addEventListener("click", toggleMobileMenu);
menuOverlayMobile.addEventListener("click", closeMobileMenu);

document.querySelectorAll(".thanh-dieu-huong a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});

// ===== DỮ LIỆU SẢN PHẨM =====
const duLieuSanPham = {
  "gao-lut": {
    ten: "Gạo Lứt Đông Trùng",
    lopMau: "gao-lut",
    anh: "./gạp lứt đông trung.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    moTa: "Gạo lứt rang vàng thơm lừng, kết hợp đông trùng hạ thảo giàu cordycepin. Hương vị bùi béo, thanh mát, hỗ trợ tiêu hóa, bổ thận tráng dương, giảm mệt mỏi.",
    cachPha:
      "Hãm 3-5g với 200ml nước sôi (85-90°C) trong 5-7 phút. Uống ấm sau bữa ăn.",
    thanhPhan: [
      { ten: "Gạo lứt", anh: "./gaolut.jpg" },
      { ten: "Đông trùng", anh: "./namdongtrung.jpg" },
    ],
    danhGia: [
      {
        sao: 5,
        nguoi: "Chị Hồng",
        noiDung:
          "Uống đều 1 tháng thấy người khỏe hẳn, không còn mệt mỏi. Giá 129k quá hợp lý.",
      },
      {
        sao: 5,
        nguoi: "Anh Tuấn",
        noiDung:
          "Vị bùi béo đặc trưng, uống rất thích. Tinh thần sảng khoái hơn.",
      },
    ],
  },
  "lac-tien": {
    ten: "Lạc Tiên Tâm Sen",
    lopMau: "lac-tien",
    anh: "./lạc tâm sen.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    moTa: "Sự kết hợp tinh tế giữa hoa lạc tiên tím biếc và tâm sen trắng ngần. Giúp giảm lo âu, ngủ sâu giấc, điều hòa nhịp tim.",
    cachPha:
      "Hãm 2-3g trà với 250ml nước 85°C trong 5 phút, uống trước khi ngủ 30 phút.",
    thanhPhan: [
      { ten: "Lạc tiên", anh: "./hoalactien.jpg" },
      { ten: "Tâm sen", anh: "./tamsen.jpg" },
    ],
    danhGia: [
      {
        sao: 5,
        nguoi: "Minh Anh",
        noiDung:
          "Trước đây mình khó ngủ, uống trà này cải thiện rõ rệt. Vị thanh mát, dễ chịu.",
      },
      {
        sao: 5,
        nguoi: "Hoàng Nam",
        noiDung: "Hương thơm dịu nhẹ, uống xong tâm trạng thư thái.",
      },
    ],
  },
  "la-oi": {
    ten: "Trà Lá Ổi",
    lopMau: "la-oi",
    anh: "./lá ôi.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    moTa: "Lá ổi non được hái thủ công, sấy khô giữ trọn tinh chất. Vị chát nhẹ, hậu ngọt thanh. Hỗ trợ kiểm soát đường huyết.",
    cachPha: "Đun 3g lá ổi với 300ml nước sôi trong 5 phút hoặc hãm 7-10 phút.",
    thanhPhan: [{ ten: "Lá ổi", anh: "./laoi.webp" }],
    danhGia: [
      {
        sao: 5,
        nguoi: "Thu Thủy",
        noiDung:
          "Mình bị đau dạ dày, uống trà lá ổi thấy đỡ hẳn. Giá 99k quá rẻ.",
      },
      {
        sao: 5,
        nguoi: "Quốc Đạt",
        noiDung:
          "Vị chát nhẹ, uống quen rất ghiền. Bố mình tiểu đường uống ổn định.",
      },
    ],
  },
  "ca-gai": {
    ten: "Cà Gai Leo",
    lopMau: "ca-gai",
    anh: "./gai leo.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    moTa: "Cà gai leo – thảo dược quý cho người bệnh gan, men gan cao. Vị đắng dịu, hậu ngọt. Hỗ trợ bảo vệ tế bào gan.",
    cachPha: "Hãm 5-7g với 250ml nước sôi trong 10 phút, uống 2-3 lần/ngày.",
    thanhPhan: [{ ten: "Cà gai", anh: "./cagaileo.jpg" }],
    danhGia: [
      {
        sao: 5,
        nguoi: "Chú Hải",
        noiDung:
          "Men gan giảm rõ sau 2 tháng. Mua 5 hộp có 545k mà đỡ tiền thuốc tây.",
      },
      {
        sao: 5,
        nguoi: "Kim Anh",
        noiDung:
          "Hay tiếp khách bia rượu, uống trà này thấy đỡ mệt, người nhẹ hẳn.",
      },
    ],
  },
};

const cuaSo = document.getElementById("cuaSoSanPham");
const tieuDeCuaSo = document.getElementById("tieuDeCuaSo");
const moTaCuaSo = document.getElementById("moTaCuaSo");
const anhCuaSo = document.getElementById("anhCuaSo");
const videoCuaSo = document.getElementById("videoCuaSo");
const cachPha = document.getElementById("cachPha");
const thanhPhanCuaSo = document.getElementById("thanhPhanCuaSo");
const danhSachDanhGiaCuaSo = document.getElementById("danhSachDanhGiaCuaSo");

function hienCuaSo(maSanPham) {
  const dl = duLieuSanPham[maSanPham];
  if (!dl) return;
  tieuDeCuaSo.className = "tieu-de-cua-so " + dl.lopMau;
  tieuDeCuaSo.innerText = dl.ten;
  moTaCuaSo.innerText = dl.moTa;
  anhCuaSo.src = dl.anh;
  videoCuaSo.src = dl.video;
  cachPha.innerText = dl.cachPha;

  let htmlThanhPhan = "";
  dl.thanhPhan.forEach(
    (tp) =>
      (htmlThanhPhan += `<div style="text-align:center;"><img src="${tp.anh}" style="width:55px;height:55px;border-radius:15px 5px 15px 5px;border:2px solid var(--mau-vang);object-fit:cover;"><span style="display:block;font-size:0.75rem;font-weight:500;margin-top:5px;">${tp.ten}</span></div>`),
  );
  thanhPhanCuaSo.innerHTML = htmlThanhPhan;

  let htmlDanhGia = "";
  dl.danhGia.forEach(
    (dg) =>
      (htmlDanhGia += `<div style="padding:10px 0; border-bottom:1px solid rgba(201,169,107,0.2);"><span style="color:var(--mau-vang); font-weight:700;">${"★".repeat(dg.sao)}</span> <strong>${dg.nguoi}</strong><br><span style="font-style:italic; font-weight:400; font-size:0.85rem;">"${dg.noiDung}"</span></div>`),
  );
  danhSachDanhGiaCuaSo.innerHTML = htmlDanhGia;

  cuaSo.classList.add("hien");
  document.body.style.overflow = "hidden";
}

function anCuaSo() {
  cuaSo.classList.remove("hien");
  document.body.style.overflow = "";
  videoCuaSo.src = videoCuaSo.src;
}

document.querySelectorAll(".nut-chi-tiet").forEach((nut) => {
  nut.addEventListener("click", (e) => {
    const maSanPham = nut.dataset.sanPham;
    if (maSanPham) hienCuaSo(maSanPham);
  });
});

document.querySelector(".nut-dong").addEventListener("click", anCuaSo);
cuaSo.addEventListener("click", (e) => {
  if (e.target === cuaSo) anCuaSo();
});

// Tạo đánh giá
const luoiDanhGia = document.getElementById("luoiDanhGia");
const danhSachTen = [
  "Minh Anh",
  "Thu Hà",
  "Ngọc Trâm",
  "Thanh Tùng",
  "Hải Yến",
  "Quốc Bảo",
  "Mai Phương",
  "Đức Thịnh",
];
const danhSachBinhLuan = [
  "Trà rất thơm, uống xong người nhẹ hẳn. Giá cả phải chăng, sẽ ủng hộ dài dài!",
  "Vị trà thanh mát, uống rất dễ chịu. Đóng gói cẩn thận, giao hàng nhanh.",
  "Mình bị khó ngủ, uống lạc tiên tâm sen cải thiện rõ rệt. Rất hài lòng!",
  "Gạo lứt đông trùng uống bổ phết, làm việc khỏe hơn hẳn. Đáng từng xu.",
  "Lá ổi sạch, uống tốt cho tiêu hóa. Mình mua cho cả nhà dùng.",
  "Cà gai leo mát gan, bố mình uống men gan giảm. Sẽ mua tiếp.",
  "Hương vị tự nhiên, không bị nồng hóa chất. Rất ưng!",
  "Đã mua 3 lần, lần nào chất lượng cũng đồng đều. Rất đáng tin cậy.",
];
let html = "";
for (let i = 0; i < 8; i++) {
  html += `<div class="the-danh-gia">
                <div class="nguoi-danh-gia">
                    <div class="anh-dai-dien">${danhSachTen[i][0]}</div>
                    <div class="thong-tin-nguoi-dung"><h4>${danhSachTen[i]}</h4><div class="sao-nguoi-dung">★★★★★</div></div>
                </div>
                <div class="noi-dung-danh-gia">"${danhSachBinhLuan[i]}"</div>
            </div>`;
}
luoiDanhGia.innerHTML = html;
