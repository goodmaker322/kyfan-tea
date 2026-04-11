// ===== AOS INIT =====
AOS.init({ duration: 800, once: true, offset: 50 });

// ===== LOADER =====
window.addEventListener("load", () => {
    const manHinhTai = document.getElementById("manHinhTai");
    manHinhTai.style.opacity = "0";
    setTimeout(() => manHinhTai.style.display = "none", 600);
});

// ===== TOAST NOTIFICATION SYSTEM =====
function showToast(message, type = 'success', title = '') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const titles = {
        success: 'Thành công!',
        error: 'Lỗi!',
        info: 'Thông báo'
    };
    
    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️'
    };
    
    toast.innerHTML = `
        <div class="toast-icon">${icons[type]}</div>
        <div class="toast-content">
            <div class="toast-title">${title || titles[type]}</div>
            <div class="toast-message">${message}</div>
        </div>
        <div class="toast-close" onclick="this.parentElement.remove()">×</div>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== MOBILE MENU =====
const nutMenuMobile = document.getElementById("nutMenuMobile");
const thanhDieuHuong = document.getElementById("thanhDieuHuong");
const menuOverlayMobile = document.getElementById("menuOverlayMobile");

function toggleMobileMenu() {
    nutMenuMobile.classList.toggle("open");
    thanhDieuHuong.classList.toggle("open");
    menuOverlayMobile.classList.toggle("open");
    document.body.style.overflow = thanhDieuHuong.classList.contains("open") ? "hidden" : "";
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
    if (window.innerWidth > 768) closeMobileMenu();
});

// ===== MODAL PHÓNG TO ẢNH NGƯỜI ĐẠI DIỆN =====
const khungHinhDaiDien = document.getElementById("khungHinhDaiDien");
const modalAnhDaiDien = document.getElementById("modalAnhDaiDien");
const dongModalAnh = document.getElementById("dongModalAnh");
const anhDaiDien = document.getElementById("anhDaiDien");
const anhPhongTo = document.getElementById("anhPhongTo");

if (khungHinhDaiDien) {
    khungHinhDaiDien.addEventListener("click", function () {
        if (anhPhongTo && anhDaiDien) anhPhongTo.src = anhDaiDien.src;
        modalAnhDaiDien.classList.add("hien");
        document.body.style.overflow = "hidden";
    });
}

if (dongModalAnh) {
    dongModalAnh.addEventListener("click", function () {
        modalAnhDaiDien.classList.remove("hien");
        document.body.style.overflow = "";
    });
}

if (modalAnhDaiDien) {
    modalAnhDaiDien.addEventListener("click", function (e) {
        if (e.target === modalAnhDaiDien) {
            modalAnhDaiDien.classList.remove("hien");
            document.body.style.overflow = "";
        }
    });
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalAnhDaiDien?.classList.contains("hien")) {
        modalAnhDaiDien.classList.remove("hien");
        document.body.style.overflow = "";
    }
});

// ===== DỮ LIỆU SẢN PHẨM CHO MODAL CHI TIẾT =====
const duLieuSanPham = {
    "gao-lut": {
        ten: "Gạo Lứt Đông Trùng",
        lopMau: "gao-lut",
        anh: "./gạp lứt đông trung.jpg",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        moTa: "Gạo lứt rang vàng thơm lừng, kết hợp đông trùng hạ thảo giàu cordycepin. Hương vị bùi béo, thanh mát, hỗ trợ tiêu hóa, bổ thận tráng dương, giảm mệt mỏi.",
        cachPha: "Ngâm 1 túi trà từ 15' với 500-700ml nước 90-100°C hoặc nước đun sôi trên bếp và sử dụng.",
        thanhPhan: [
            { ten: "Gạo lứt", anh: "./gaolut.jpg" },
            { ten: "Đông trùng", anh: "./namdongtrung.jpg" }
        ],
        danhGia: [
            { sao: 5, nguoi: "Chị Hồng", noiDung: "Uống đều 1 tháng thấy người khỏe hẳn, không còn mệt mỏi. Giá 129k quá hợp lý." },
            { sao: 5, nguoi: "Anh Tuấn", noiDung: "Vị bùi béo đặc trưng, uống rất thích. Tinh thần sảng khoái hơn." }
        ]
    },
    "lac-tien": {
        ten: "Lạc Tiên Tâm Sen",
        lopMau: "lac-tien",
        anh: "./lạc tâm sen.jpg",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        moTa: "Sự kết hợp tinh tế giữa hoa lạc tiên tím biếc và tâm sen trắng ngần. Giúp giảm lo âu, ngủ sâu giấc, điều hòa nhịp tim.",
        cachPha: "Ngâm 1 túi trà trong 10' với 250ml nước 90°C. Uống trước khi ngủ để có hiệu quả tốt nhất.",
        thanhPhan: [
            { ten: "Lạc tiên", anh: "./hoalactien.jpg" },
            { ten: "Tâm sen", anh: "./tamsen.jpg" }
        ],
        danhGia: [
            { sao: 5, nguoi: "Minh Anh", noiDung: "Trước đây mình khó ngủ, uống trà này cải thiện rõ rệt. Vị thanh mát, dễ chịu." },
            { sao: 5, nguoi: "Hoàng Nam", noiDung: "Hương thơm dịu nhẹ, uống xong tâm trạng thư thái." }
        ]
    },
    "la-oi": {
        ten: "Trà Lá Ổi",
        lopMau: "la-oi",
        anh: "./lá ôi.jpg",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        moTa: "Lá ổi non được hái thủ công, sấy khô giữ trọn tinh chất. Vị chát nhẹ, hậu ngọt thanh. Hỗ trợ kiểm soát đường huyết.",
        cachPha: "Ngâm 1 túi trà trong 10' với 250ml nước 90°C.",
        thanhPhan: [{ ten: "Lá ổi", anh: "./laoi.webp" }],
        danhGia: [
            { sao: 5, nguoi: "Thu Thủy", noiDung: "Mình bị đau dạ dày, uống trà lá ổi thấy đỡ hẳn. Giá 99k quá rẻ." },
            { sao: 5, nguoi: "Quốc Đạt", noiDung: "Vị chát nhẹ, uống quen rất ghiền. Bố mình tiểu đường uống ổn định." }
        ]
    },
    "ca-gai": {
        ten: "Cà Gai Leo",
        lopMau: "ca-gai",
        anh: "./gai leo.jpg",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        moTa: "Cà gai leo – thảo dược quý cho người bệnh gan, men gan cao. Vị đắng dịu, hậu ngọt. Hỗ trợ bảo vệ tế bào gan.",
        cachPha: "Ngâm 1 túi trà trong 10' với 250ml nước 90°C.",
        thanhPhan: [{ ten: "Cà gai", anh: "./cagaileo.jpg" }],
        danhGia: [
            { sao: 5, nguoi: "Chú Hải", noiDung: "Men gan giảm rõ sau 2 tháng. Mua 5 hộp có 545k mà đỡ tiền thuốc tây." },
            { sao: 5, nguoi: "Kim Anh", noiDung: "Hay tiếp khách bia rượu, uống trà này thấy đỡ mệt, người nhẹ hẳn." }
        ]
    }
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
            (htmlThanhPhan += `<div style="text-align:center;"><img src="${tp.anh}" style="width:55px;height:55px;border-radius:15px 5px 15px 5px;border:2px solid var(--mau-vang);object-fit:cover;"><span style="display:block;font-size:0.75rem;font-weight:500;margin-top:5px;">${tp.ten}</span></div>`)
    );
    thanhPhanCuaSo.innerHTML = htmlThanhPhan;

    let htmlDanhGia = "";
    dl.danhGia.forEach(
        (dg) =>
            (htmlDanhGia += `<div style="padding:10px 0; border-bottom:1px solid rgba(201,169,107,0.2);"><span style="color:var(--mau-vang); font-weight:700;">${"★".repeat(dg.sao)}</span> <strong>${dg.nguoi}</strong><br><span style="font-style:italic; font-weight:400; font-size:0.85rem;">"${dg.noiDung}"</span></div>`)
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

document.querySelector(".nut-dong")?.addEventListener("click", anCuaSo);
cuaSo.addEventListener("click", (e) => { if (e.target === cuaSo) anCuaSo(); });

// ===== TẠO ĐÁNH GIÁ MẪU =====
const luoiDanhGia = document.getElementById("luoiDanhGia");
const danhSachTen = ["Minh Anh", "Thu Hà", "Ngọc Trâm", "Thanh Tùng", "Hải Yến", "Quốc Bảo", "Mai Phương", "Đức Thịnh"];
const danhSachBinhLuan = [
    "Trà rất thơm, uống xong người nhẹ hẳn. Giá cả phải chăng, sẽ ủng hộ dài dài!",
    "Vị trà thanh mát, uống rất dễ chịu. Đóng gói cẩn thận, giao hàng nhanh.",
    "Mình bị khó ngủ, uống lạc tiên tâm sen cải thiện rõ rệt. Rất hài lòng!",
    "Gạo lứt đông trùng uống bổ phết, làm việc khỏe hơn hẳn. Đáng từng xu.",
    "Lá ổi sạch, uống tốt cho tiêu hóa. Mình mua cho cả nhà dùng.",
    "Cà gai leo mát gan, bố mình uống men gan giảm. Sẽ mua tiếp.",
    "Hương vị tự nhiên, không bị nồng hóa chất. Rất ưng!",
    "Đã mua 3 lần, lần nào chất lượng cũng đồng đều. Rất đáng tin cậy."
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

// ===== GIỎ HÀNG =====
let gioHang = JSON.parse(localStorage.getItem('kyfanGioHang')) || [];
let voucherHienTai = { code: null, discount: 0, type: null };
let phiShip = 0;
let hinhThucNhanHang = 'ship';

const gioHangIcon = document.getElementById('gioHangIcon');
const gioHangDem = document.getElementById('gioHangDem');
const modalGioHang = document.getElementById('modalGioHang');
const dongGioHang = document.getElementById('dongGioHang');
const danhSachGioHang = document.getElementById('danhSachGioHang');
const tongTienGioHang = document.getElementById('tongTienGioHang');

function formatTien(so) {
    return so.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '₫';
}

function capNhatDemGioHang() {
    const tongSoLuong = gioHang.reduce((sum, item) => sum + item.soLuong, 0);
    gioHangDem.textContent = tongSoLuong;
    localStorage.setItem('kyfanGioHang', JSON.stringify(gioHang));
}

function tinhTamTinh() {
    return gioHang.reduce((sum, item) => sum + (item.gia * item.soLuong), 0);
}

function tinhTongThanhToan() {
    let tamTinh = tinhTamTinh();
    let giamGia = 0;
    
    if (voucherHienTai.type === 'percent') {
        giamGia = Math.round(tamTinh * voucherHienTai.discount / 100);
    } else if (voucherHienTai.type === 'fixed') {
        giamGia = voucherHienTai.discount;
    } else if (voucherHienTai.type === 'freeship') {
        phiShip = 0;
    }
    
    giamGia = Math.min(giamGia, tamTinh);
    return Math.max(0, tamTinh - giamGia + phiShip);
}

function hienThiGioHang() {
    if (gioHang.length === 0) {
        danhSachGioHang.innerHTML = '<div class="gio-hang-trong">🛒 Giỏ hàng trống</div>';
        tongTienGioHang.textContent = '0₫';
        return;
    }
    
    let html = '';
    gioHang.forEach((item, index) => {
        html += `
            <div class="gio-hang-item">
                <img src="${item.anh}" alt="${item.ten}" class="gio-hang-item-anh" onerror="this.src='https://picsum.photos/70/70?random=${index}'">
                <div class="gio-hang-item-thong-tin">
                    <div class="gio-hang-item-ten">${item.ten}</div>
                    <div class="gio-hang-item-gia">${formatTien(item.gia)}</div>
                    <div class="gio-hang-item-so-luong">
                        <button onclick="giamSoLuong(${index})">-</button>
                        <span>${item.soLuong}</span>
                        <button onclick="tangSoLuong(${index})">+</button>
                    </div>
                </div>
                <div class="gio-hang-item-xoa" onclick="xoaSanPham(${index})">🗑️</div>
            </div>
        `;
    });
    
    danhSachGioHang.innerHTML = html;
    tongTienGioHang.textContent = formatTien(tinhTamTinh());
}

function themVaoGio(id, ten, gia, anh) {
    const sanPhamTonTai = gioHang.find(item => item.id === id);
    
    if (sanPhamTonTai) {
        sanPhamTonTai.soLuong += 1;
    } else {
        gioHang.push({ id, ten, gia: parseInt(gia), anh, soLuong: 1 });
    }
    
    capNhatDemGioHang();
    showToast(`Đã thêm "${ten}" vào giỏ hàng!`, 'success');
}

function xoaSanPham(index) {
    const ten = gioHang[index].ten;
    gioHang.splice(index, 1);
    capNhatDemGioHang();
    hienThiGioHang();
    if (typeof hienThiTomTatDonHang === 'function') hienThiTomTatDonHang();
    showToast(`Đã xóa "${ten}" khỏi giỏ hàng`, 'info');
}

function tangSoLuong(index) {
    gioHang[index].soLuong += 1;
    capNhatDemGioHang();
    hienThiGioHang();
    if (typeof hienThiTomTatDonHang === 'function') hienThiTomTatDonHang();
}

function giamSoLuong(index) {
    if (gioHang[index].soLuong > 1) {
        gioHang[index].soLuong -= 1;
    } else {
        xoaSanPham(index);
        return;
    }
    capNhatDemGioHang();
    hienThiGioHang();
    if (typeof hienThiTomTatDonHang === 'function') hienThiTomTatDonHang();
}

// Event listeners cho nút "Thêm vào giỏ"
document.querySelectorAll(".nut-them-gio").forEach((nut) => {
    nut.addEventListener("click", (e) => {
        const id = nut.dataset.id || 'sp' + Date.now();
        const ten = nut.dataset.ten;
        const gia = nut.dataset.gia;
        const anh = nut.dataset.anh;
        themVaoGio(id, ten, gia, anh);
    });
});

// Modal giỏ hàng
gioHangIcon.addEventListener("click", () => {
    hienThiGioHang();
    modalGioHang.classList.add("hien");
    document.body.style.overflow = "hidden";
});

dongGioHang.addEventListener("click", () => {
    modalGioHang.classList.remove("hien");
    document.body.style.overflow = "";
});

modalGioHang.addEventListener("click", (e) => {
    if (e.target === modalGioHang) {
        modalGioHang.classList.remove("hien");
        document.body.style.overflow = "";
    }
});

// ===== THANH TOÁN =====
const modalThanhToan = document.getElementById('modalThanhToan');
const dongThanhToan = document.getElementById('dongThanhToan');
const nutThanhToan = document.getElementById('nutThanhToan');
const nutTiepTucStep1 = document.getElementById('nutTiepTucStep1');
const nutQuayLaiStep2 = document.getElementById('nutQuayLaiStep2');
const nutTiepTucStep2 = document.getElementById('nutTiepTucStep2');
const nutQuayLaiStep3 = document.getElementById('nutQuayLaiStep3');
const nutXacNhanDatHang = document.getElementById('nutXacNhanDatHang');
const modalThongBao = document.getElementById('modalThongBao');
const dongThongBao = document.getElementById('dongThongBao');

let currentStep = 1;
const steps = ['step1Content', 'step2Content', 'step3Content'];
const stepElements = document.querySelectorAll('.step');

function showStep(step) {
    steps.forEach((s, i) => {
        document.getElementById(s).style.display = i + 1 === step ? 'block' : 'none';
    });
    
    stepElements.forEach((el, i) => {
        el.classList.remove('active', 'completed');
        if (i + 1 === step) el.classList.add('active');
        else if (i + 1 < step) el.classList.add('completed');
    });
    
    currentStep = step;
}

function hienThiTomTatDonHang() {
    const container = document.getElementById('tomTatDonHangCheckout');
    const summaryContainer = document.getElementById('orderSummaryFinal');
    
    if (!container) return;
    
    let html = '';
    let tamTinh = tinhTamTinh();
    
    gioHang.forEach(item => {
        html += `<div class="summary-row"><span>${item.ten} x${item.soLuong}</span><span>${formatTien(item.gia * item.soLuong)}</span></div>`;
    });
    
    let giamGia = 0;
    if (voucherHienTai.type === 'percent') {
        giamGia = Math.round(tamTinh * voucherHienTai.discount / 100);
    } else if (voucherHienTai.type === 'fixed') {
        giamGia = voucherHienTai.discount;
    }
    giamGia = Math.min(giamGia, tamTinh);
    
    html += `<div class="summary-row"><span>Tạm tính</span><span>${formatTien(tamTinh)}</span></div>`;
    if (phiShip > 0) html += `<div class="summary-row"><span>Phí vận chuyển</span><span>${formatTien(phiShip)}</span></div>`;
    if (giamGia > 0) html += `<div class="summary-row"><span>Giảm giá (${voucherHienTai.code})</span><span>-${formatTien(giamGia)}</span></div>`;
    html += `<div class="summary-row total"><span>Tổng thanh toán</span><span>${formatTien(tinhTongThanhToan())}</span></div>`;
    
    container.innerHTML = html;
    if (summaryContainer) summaryContainer.innerHTML = html;
}

// Voucher
const apDungVoucher = document.getElementById('apDungVoucher');
const maVoucher = document.getElementById('maVoucher');
const voucherThongBao = document.getElementById('voucherThongBao');

const voucherHopLe = {
    'KYFAN10': { type: 'percent', discount: 10 },
    'FREESHIP': { type: 'freeship', discount: 0 },
    'WELCOME20': { type: 'fixed', discount: 20000 }
};

function apDungMaVoucher(code) {
    const upperCode = code.toUpperCase().trim();
    const voucher = voucherHopLe[upperCode];
    
    if (voucher) {
        voucherHienTai = { ...voucher, code: upperCode };
        if (voucher.type === 'freeship') phiShip = 0;
        voucherThongBao.innerHTML = `<span class="success">✅ Đã áp dụng mã ${upperCode}!</span>`;
        hienThiTomTatDonHang();
        showToast(`Đã áp dụng voucher ${upperCode}`, 'success');
    } else {
        voucherThongBao.innerHTML = `<span class="error">❌ Mã voucher không hợp lệ!</span>`;
        showToast('Mã voucher không hợp lệ!', 'error');
    }
}

apDungVoucher?.addEventListener('click', () => apDungMaVoucher(maVoucher.value));

document.querySelectorAll('.voucher-tag').forEach(tag => {
    tag.addEventListener('click', () => {
        if (!tag.classList.contains('applied')) {
            const code = tag.dataset.code;
            maVoucher.value = code;
            apDungMaVoucher(code);
            document.querySelectorAll('.voucher-tag').forEach(t => t.classList.remove('applied'));
            tag.classList.add('applied');
        }
    });
});

// Hình thức nhận hàng & phí ship
const radioShip = document.querySelector('input[value="ship"]');
const radioPickup = document.querySelector('input[value="pickup"]');
const diaChiGiaoHangGroup = document.getElementById('diaChiGiaoHangGroup');
const diaChiCuaHangGroup = document.getElementById('diaChiCuaHangGroup');
const tinhThanh = document.getElementById('tinhThanh');

function capNhatPhiShip() {
    if (hinhThucNhanHang === 'pickup') {
        phiShip = 0;
    } else {
        const selectedOption = tinhThanh?.selectedOptions[0];
        phiShip = selectedOption ? parseInt(selectedOption.dataset.ship) || 30000 : 30000;
    }
    hienThiTomTatDonHang();
}

radioShip?.addEventListener('change', () => {
    hinhThucNhanHang = 'ship';
    diaChiGiaoHangGroup.style.display = 'block';
    diaChiCuaHangGroup.style.display = 'none';
    capNhatPhiShip();
});

radioPickup?.addEventListener('change', () => {
    hinhThucNhanHang = 'pickup';
    diaChiGiaoHangGroup.style.display = 'none';
    diaChiCuaHangGroup.style.display = 'block';
    capNhatPhiShip();
});

tinhThanh?.addEventListener('change', capNhatPhiShip);

// Phương thức thanh toán
const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
const bankTransferInfo = document.getElementById('bankTransferInfo');
const momoQRInfo = document.getElementById('momoQRInfo');
const vnpayInfo = document.getElementById('vnpayInfo');

paymentRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        bankTransferInfo.style.display = 'none';
        momoQRInfo.style.display = 'none';
        vnpayInfo.style.display = 'none';
        
        if (this.value === 'bank') bankTransferInfo.style.display = 'block';
        else if (this.value === 'momo') {
            momoQRInfo.style.display = 'block';
            document.getElementById('momoAmount').textContent = formatTien(tinhTongThanhToan());
        } else if (this.value === 'vnpay') vnpayInfo.style.display = 'block';
    });
});

// Navigation steps
nutThanhToan?.addEventListener('click', () => {
    if (gioHang.length === 0) {
        showToast('Giỏ hàng trống!', 'error');
        return;
    }
    modalGioHang.classList.remove('hien');
    modalThanhToan.classList.add('hien');
    showStep(1);
    hienThiTomTatDonHang();
    capNhatPhiShip();
});

nutTiepTucStep1?.addEventListener('click', () => {
    if (gioHang.length === 0) {
        showToast('Giỏ hàng trống!', 'error');
        return;
    }
    showStep(2);
});

nutQuayLaiStep2?.addEventListener('click', () => showStep(1));
nutTiepTucStep2?.addEventListener('click', () => {
    const hoTen = document.getElementById('hoTen')?.value;
    const soDienThoai = document.getElementById('soDienThoai')?.value;
    
    if (!hoTen || !soDienThoai) {
        showToast('Vui lòng điền đầy đủ họ tên và số điện thoại!', 'error');
        return;
    }
    
    if (hinhThucNhanHang === 'ship') {
        const diaChi = document.getElementById('diaChi')?.value;
        if (!diaChi || !tinhThanh?.value) {
            showToast('Vui lòng điền đầy đủ địa chỉ giao hàng!', 'error');
            return;
        }
    }
    
    showStep(3);
    hienThiTomTatDonHang();
    document.getElementById('momoAmount').textContent = formatTien(tinhTongThanhToan());
});

nutQuayLaiStep3?.addEventListener('click', () => showStep(2));

// Xác nhận đặt hàng
nutXacNhanDatHang?.addEventListener('click', () => {
    const hoTen = document.getElementById('hoTen')?.value;
    const soDienThoai = document.getElementById('soDienThoai')?.value;
    const email = document.getElementById('email')?.value;
    const diaChi = document.getElementById('diaChi')?.value;
    const ghiChu = document.getElementById('ghiChu')?.value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value;
    
    let noiDungDonHang = `🛒 *ĐƠN HÀNG MỚI - KYFAN STORE*\n\n`;
    noiDungDonHang += `👤 *Khách hàng:* ${hoTen}\n`;
    noiDungDonHang += `📞 *SĐT:* ${soDienThoai}\n`;
    noiDungDonHang += `📧 *Email:* ${email || 'Không có'}\n`;
    noiDungDonHang += `📍 *Địa chỉ:* ${hinhThucNhanHang === 'pickup' ? 'Nhận tại cửa hàng' : diaChi + ', ' + tinhThanh?.selectedOptions[0]?.text}\n`;
    noiDungDonHang += `💳 *Thanh toán:* ${paymentMethod === 'cod' ? 'COD' : paymentMethod === 'bank' ? 'Chuyển khoản' : paymentMethod === 'momo' ? 'Ví MoMo' : 'VNPAY'}\n`;
    noiDungDonHang += `📝 *Ghi chú:* ${ghiChu || 'Không có'}\n\n`;
    noiDungDonHang += `📦 *SẢN PHẨM:*\n`;
    
    gioHang.forEach(item => {
        noiDungDonHang += `  • ${item.ten} - ${item.soLuong} x ${formatTien(item.gia)} = ${formatTien(item.gia * item.soLuong)}\n`;
    });
    
    noiDungDonHang += `\n💰 *TỔNG CỘNG: ${formatTien(tinhTongThanhToan())}*\n`;
    noiDungDonHang += `\n⏰ *Thời gian:* ${new Date().toLocaleString('vi-VN')}`;
    
    navigator.clipboard?.writeText(noiDungDonHang);
    
    document.getElementById('thongBaoTieuDe').textContent = '🎉 Đặt hàng thành công!';
    document.getElementById('thongBaoNoiDung').innerHTML = `
        Cảm ơn ${hoTen} đã đặt hàng tại KYFAN!<br><br>
        Vui lòng click link bên dưới để gửi đơn hàng qua Zalo cho chúng tôi.<br><br>
        <a href="https://zalo.me/0973543904" target="_blank" style="display: inline-block; padding: 12px 24px; background: #0180CF; color: white; text-decoration: none; border-radius: 30px; font-weight: bold;">📱 Gửi đơn hàng qua Zalo</a>
    `;
    
    modalThanhToan.classList.remove('hien');
    modalThongBao.classList.add('hien');
    
    gioHang = [];
    voucherHienTai = { code: null, discount: 0, type: null };
    phiShip = 0;
    capNhatDemGioHang();
    hienThiGioHang();
    
    showToast('Đặt hàng thành công! Cảm ơn bạn đã mua hàng tại KYFAN.', 'success');
});

dongThanhToan?.addEventListener('click', () => {
    modalThanhToan.classList.remove('hien');
    document.body.style.overflow = "";
});

modalThanhToan?.addEventListener('click', (e) => {
    if (e.target === modalThanhToan) {
        modalThanhToan.classList.remove('hien');
        document.body.style.overflow = "";
    }
});

dongThongBao?.addEventListener('click', () => {
    modalThongBao.classList.remove('hien');
});

modalThongBao?.addEventListener('click', (e) => {
    if (e.target === modalThongBao) modalThongBao.classList.remove('hien');
});

// Copy nội dung chuyển khoản
window.copyCKContent = function() {
    const soDienThoai = document.getElementById('soDienThoai')?.value || 'SĐT';
    const content = `KYFAN ${soDienThoai}`;
    navigator.clipboard?.writeText(content);
    showToast('Đã sao chép nội dung chuyển khoản!', 'success');
};

// Khởi tạo
capNhatDemGioHang();