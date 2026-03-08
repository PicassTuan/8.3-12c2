// ==========================================
// 1. XỬ LÝ URL VÀ GÁN CÂU CHÚC CỐ ĐỊNH
// ==========================================
const urlParams = new URLSearchParams(window.location.search);
let rawName = urlParams.get('name');

let displayName = rawName ? rawName : "cậu"; // Mặc định nếu ko có ?name=

// Tạo mã tên để nhận diện
let folderName = 'default';
if (rawName) {
    folderName = rawName.toLowerCase()
                        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
                        .replace(/\s+/g, '') 
                        .replace(/[^a-z0-9]/g, ''); 
}

// KHAI BÁO BẢNG CÂU CHÚC RIÊNG (Sửa lỗi chưa khai báo customWishes)
const customWishes = {
    // Nếu bạn có câu chúc riêng cho ai thì điền vào đây. VD: "diepha": "Chúc Diệp Hà..."
};

// BẢNG CÂU CHÚC DỰ PHÒNG (Đã xóa bỏ đoạn khai báo trùng lặp)
const defaultWishes = [
    `Chúc ${displayName} một ngày 8/3 thật rạng rỡ và ngập tràn hoa hồng!\n\nNăm cuối cấp rồi, mong cậu luôn giữ được tinh thần lạc quan, sức khỏe dồi dào để chiến đấu hết mình với kỳ thi ĐGNL (HSA) và kỳ thi THPT Quốc gia sắp tới. Chúc mọi nguyện vọng của cậu đều thành hiện thực nhé! ✨`,
    `Gửi đến ${displayName} ngàn lời chúc tốt đẹp nhất nhân ngày của một nửa thế giới.\n\nTuổi 18 thật đẹp, và càng tuyệt vời hơn khi chúng ta cùng là một phần của đại gia đình 12C2 gồm 52 thành viên. Chúc cậu luôn giữ được nụ cười tỏa nắng, mãi tự tin và đỗ vào ngôi trường đại học mơ ước! 🎓🌷`,
    `Nhân ngày Quốc tế Phụ nữ, chúc ${displayName} nhận được thật nhiều tình yêu thương.\n\nMong cậu luôn là một cô gái cá tính, mạnh mẽ và rực rỡ như những phản ứng hóa học tỏa nhiệt vậy. Chúc ${displayName} luôn hạnh phúc theo cách riêng của mình và bứt phá đạt điểm cao trong những bài thi trắc nghiệm sắp tới. 💖`,
    `Mùng 8/3 chúc ${displayName} lúc nào cũng vui vẻ, yêu đời và không bao giờ đánh mất sự hồn nhiên của tuổi học trò.\n\nChặng đường phía trước dẫu có nhiều bài vở và những kỳ thi căng thẳng, nhưng mình tin cậu sẽ vượt qua tất cả để chạm đến ước mơ đã chọn. Tỏa sáng nhé! 🌟`,
    `Chúc ${displayName} ngày mùng 8 tháng 3 ngập tràn tiếng cười và nhận được những món quà thật xinh xắn.\n\nCảm ơn cậu vì đã luôn là một người bạn tuyệt vời, một mảnh ghép không thể thiếu tạo nên thanh xuân rực rỡ của tập thể lớp mình. Chúc cậu một đời bình an và thành công! 🌸`,
    `Gửi ${displayName}, chúc cậu có một ngày lễ thật trọn vẹn bên gia đình và những người yêu thương.\n\nNăm nay là năm quyết định rồi, mong rằng cậu sẽ có "nhân phẩm" khoanh trắc nghiệm đâu trúng đó, vượt qua mọi bài thi một cách xuất sắc và những dự định của cậu đều sẽ nở hoa. Cố lên nhé! 🍀`,
    `Chúc cô gái xinh đẹp ${displayName} 8/3 thật nhiều niềm vui và hạnh phúc!\n\nHãy luôn trân trọng bản thân, giữ vững tinh thần lạc quan trước mọi áp lực học hành. Chúc cậu có một năm lớp 12 thật đáng nhớ và một tương lai rực rỡ đón chờ phía trước nha. 🌻`,
    `Chúc ${displayName} một ngày đặc biệt đong đầy những khoảnh khắc ấm áp.\n\nMong cậu luôn bình an, giữ mãi nét đáng yêu và lưu giữ được những kỷ niệm đẹp đẽ nhất của tuổi 18 cùng các bạn trong lớp. Chúc cậu thi đâu đỗ đấy, làm bài thật mượt nhé! 💌`,
    `Nhân ngày của phái đẹp, chúc ${displayName} lúc nào cũng tươi tắn như hoa, học hành tấn tới và gặp thật nhiều may mắn.\n\nMong rằng trên con đường sắp tới, cậu sẽ gặt hái được những điểm số mơ ước và luôn được mọi người xung quanh yêu quý, chở che. 🎀`,
    `Mãi luôn là một cô gái tuyệt vời, độc lập và tự tin nhé ${displayName}!\n\nChúc cậu có một ngày 8/3 thật ý nghĩa. Mong chúng ta sẽ cùng nhau tạo nên một thanh xuân không hối tiếc, vượt qua mọi thử thách cuối cấp và cùng nhau mỉm cười trên bục vinh quang. ❤️`
];

let randomMessage = "";
if (customWishes[folderName]) {
    randomMessage = customWishes[folderName];
} else {
    randomMessage = defaultWishes[Math.floor(Math.random() * defaultWishes.length)];
}

const headerMessages = [
    `\u{1F337} 8/3 hạnh phúc nhé, ${displayName}!`,
    `Gửi tặng ${displayName} bó hoa thật đẹp! 💕✨`
];

// ==========================================
// 2. KHỞI TẠO NỀN (Bầu trời sao & Gõ chữ)
// ==========================================
function createStarryNight() {
    const night = document.querySelector('.night');
    if (!night) return;
    const isMobile = window.innerWidth <= 600;
    const starCount = isMobile ? 80 : 200;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random();
        if (size < 0.5) star.classList.add('small');
        else if (size < 0.8) star.classList.add('medium');
        else star.classList.add('large');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDuration = (2 + Math.random() * 3) + 's';
        star.style.animationDelay = Math.random() * 3 + 's';
        night.appendChild(star);
    }
}

function startTypingMessages(element, messages) {
    let msgIndex = 0, charIndex = 0;
    const typingSpeed = 80, waitTime = 2500;
    let isWaiting = false, waitStart = 0;

    function animate() {
        const now = Date.now();
        const msg = messages[msgIndex];

        if (!isWaiting) {
            if (!animate.lastType || now - animate.lastType > typingSpeed) {
                charIndex++;
                const cursor = Math.floor(now / 500) % 2 === 0 ? '|' : '';
                element.textContent = msg.substring(0, charIndex) + cursor;
                animate.lastType = now;
                if (charIndex > msg.length) { isWaiting = true; waitStart = now; }
            }
        } else {
            const cursor = Math.floor(now / 500) % 2 === 0 ? '|' : '';
            element.textContent = msg + cursor;
            if (now - waitStart > waitTime) {
                isWaiting = false; charIndex = 0;
                msgIndex = (msgIndex + 1) % messages.length;
                element.textContent = '';
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// ==========================================
// 3. KHỞI CHẠY GIAO DIỆN VÀ GẮN NÚT BẤM
// ==========================================
let isPlaying = false;
let isTyping = false;
let hasOpened = false;
const bgMusic = document.getElementById('bgMusic');
if (bgMusic) bgMusic.src = 'music.mp3';

document.addEventListener("DOMContentLoaded", () => {
    createStarryNight();
    const titleEl = document.querySelector('.teachers-day-title');
    
    if (titleEl) titleEl.innerText = `Chúc mừng Ngày Quốc tế Phụ nữ 🌷`;

    const popupImg = document.querySelector('.popup-card-image img');
    if (popupImg) {
        popupImg.src = `images/${folderName}/avatar.jpg`;
        popupImg.onerror = () => { popupImg.src = 'images/girl.jpeg'; }; 
    }

    // ==========================================
    // XỬ LÝ MÀN HÌNH CHỜ (INTRO) & BẬT NHẠC (ĐÃ FIX LỖI KẸT MÀN HÌNH)
    // ==========================================
    const introScreen = document.getElementById('introScreen');
    const mainContent = document.getElementById('mainContent');

    if (introScreen) {
        introScreen.addEventListener('click', () => {
            // 1. ÉP MÀN HÌNH CHỜ BIẾN MẤT NGAY LẬP TỨC BẰNG JS
            introScreen.style.transition = 'opacity 0.5s ease';
            introScreen.style.opacity = '0';
            
            setTimeout(() => { 
                introScreen.style.display = 'none'; 
                if (mainContent) {
                    mainContent.classList.remove('hidden');
                    mainContent.style.opacity = '1';
                    mainContent.style.visibility = 'visible';
                }
                
                // Sau khi màn hình đen biến mất mới bắt đầu gõ chữ
                const dateEl = document.querySelector('.teachers-day-date');
                if (dateEl && typeof headerMessages !== 'undefined') {
                    dateEl.style.display = 'block';
                    startTypingMessages(dateEl, headerMessages);
                }
            }, 500);

            // 2. CHẠY NHẠC TRONG VÙNG AN TOÀN (Nếu nhạc lỗi, ảnh vẫn hiển thị bình thường)
            try {
                if (!isPlaying && typeof bgMusic !== 'undefined' && bgMusic) {
                    let playPromise = bgMusic.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(e => console.log("Bỏ qua cảnh báo chặn nhạc"));
                    }
                    isPlaying = true;
                    let mIcon = document.getElementById('musicIcon');
                    if(mIcon) mIcon.classList.remove('muted');
                }
            } catch(err) { 
                console.log("Lỗi module nhạc:", err); 
            }
        });
    }

    // Gắn sự kiện Click cho Bó hoa
    const flowers = document.querySelector('.flowers');
    const popupCloseBtn = document.getElementById('popupCloseBtn');
    const musicToggle = document.getElementById('musicToggle');
    
    if(flowers) {
        flowers.style.zIndex = '999'; 
        flowers.addEventListener('click', openLetter);
        flowers.addEventListener('touchstart', function(e) {
            e.preventDefault(); 
            openLetter();
        }, {passive: false});
    }

    if(popupCloseBtn) {
        popupCloseBtn.addEventListener('click', closeLetter);
        popupCloseBtn.addEventListener('touchstart', function(e) {
            e.preventDefault();
            closeLetter();
        }, {passive: false});
    }

    if(musicToggle) {
        musicToggle.addEventListener('click', toggleMusic);
        musicToggle.addEventListener('touchstart', toggleMusic);
    }
});
// ==========================================
// 4. MỞ THƯ
// ==========================================
function openLetter() {
    const popup = document.getElementById('flowerPopup');
    popup.classList.add('active'); 
    popup.style.display = 'flex'; 
    
    const messageEl = document.querySelector('.popup-message');
    const titleEl = document.querySelector('.popup-title');
    if (titleEl) titleEl.innerText = `Gửi ${displayName} ❤️`;
    
    const instruction = document.querySelector('.instruction');
    if(instruction) instruction.style.display = 'none';

    if (messageEl) {
        messageEl.style.opacity = '1';
    }

    if (!isTyping) {
        isTyping = true;
        messageEl.innerHTML = '';
        let i = 0;
        let speed = 40; 
        
        function typeWriter() {
            if (i < randomMessage.length) {
                let char = randomMessage.charAt(i);
                messageEl.innerHTML += (char === '\n') ? '<br>' : char;
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        setTimeout(typeWriter, 400); 
    }
}

// ==========================================
// 5. ĐÓNG THƯ & BẮN 4 ẢNH LÊN MÀN HÌNH
// ==========================================
function closeLetter() {
    const popup = document.getElementById('flowerPopup');
    popup.classList.remove('active');
    setTimeout(() => { popup.style.display = 'none'; }, 400);

    if (!hasOpened) {
        hasOpened = true;
        
        const flowers = document.querySelector('.flowers');
        if(flowers) {
            flowers.style.transition = 'opacity 1s ease, transform 1s ease';
            flowers.style.opacity = '0';
            flowers.style.transform = 'scale(0.5)';
            setTimeout(() => { flowers.style.display = 'none'; }, 1000);
        }
        
        createFlyingImages();
    }
}

// ==========================================
// 5. BẮN TỪNG ẢNH LÊN MÀN HÌNH (SỬ DỤNG JS NATIVE - 100% KHÔNG LỖI)
// ==========================================
function createFlyingImages() {
    const container = document.getElementById('flyingImages');
    if (!container) return;
    container.innerHTML = '';

    for (let i = 1; i <= 4; i++) {
        let card = document.createElement('div');
        
        // Chia đều vị trí xuất phát từ trái sang phải
        let leftPos = [10, 35, 60, 80][i-1]; 
        if (window.innerWidth <= 600) {
            leftPos = [5, 30, 55, 75][i-1]; // Khoảng cách cho điện thoại
        }
        
        card.style.position = 'absolute';
        card.style.left = leftPos + '%';
        card.style.bottom = '-300px'; // Nằm giấu sẵn ở dưới đáy màn hình
        card.style.zIndex = '50';
        
        // Khung ảnh Polaroid
        card.style.padding = window.innerWidth <= 600 ? '6px 6px 20px 6px' : '10px 10px 35px 10px';
        card.style.background = '#fff';
        card.style.borderRadius = '5px';
        card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
        card.style.cursor = 'pointer';

        card.onclick = openLetter; // Bấm vào ảnh đang bay để mở thư

        let img = document.createElement('img');
        img.src = `images/${folderName}/${i}.jpg`; 
        
        // Kích thước chuẩn không bị đè
        // Đã tăng kích thước ảnh lên to hơn rất nhiều
        img.style.width = window.innerWidth <= 600 ? '130px' : '200px';
        img.style.height = window.innerWidth <= 600 ? '175px' : '270px';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '2px';
        
        img.onerror = () => { img.src = `images/default/${i}.jpg`; }; 

        card.appendChild(img);
        container.appendChild(card);

        // TẠO HIỆU ỨNG BAY TRỰC TIẾP TRÊN JS (Bỏ qua CSS)
        let rotate = (Math.random() * 30 - 15) + 'deg';
        let drift = (Math.random() * 80 - 40) + 'px';
        let delayTime = (i - 1) * 3000; // Cách nhau 3 giây mới thả 1 ảnh

        card.animate([
            { transform: `translateY(0) translateX(0) rotate(0deg) scale(0.5)`, opacity: 0 },
            { transform: `translateY(-20vh) translateX(${drift}) rotate(${rotate}) scale(0.9)`, opacity: 1, offset: 0.1 },
            { transform: `translateY(-60vh) translateX(calc(${drift} * -0.5)) rotate(calc(${rotate} * -1)) scale(1)`, opacity: 1, offset: 0.5 },
            { transform: `translateY(-140vh) translateX(${drift}) rotate(${rotate}) scale(0.8)`, opacity: 0 }
        ], {
            duration: 14000,       // Mất 14 giây để bay hết màn hình
            delay: delayTime,      // Chờ đến lượt mới bay
            iterations: Infinity,  // Bay lặp đi lặp lại mãi mãi
            easing: 'ease-in-out'
        });
    }
}
