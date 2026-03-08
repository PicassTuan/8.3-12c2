// ==========================================
// 1. XỬ LÝ URL VÀ GÁN CÂU CHÚC CỐ ĐỊNH
// ==========================================
const urlParams = new URLSearchParams(window.location.search);
let rawName = urlParams.get('name');

let displayName = rawName ? rawName : "cậu"; // Mặc định nếu ko có ?name=

// Tạo mã tên để nhận diện (VD: "Diệp Hà" -> "diepha", "Linh" -> "linh")
let folderName = 'default';
if (rawName) {
    folderName = rawName.toLowerCase()
                        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
                        .replace(/\s+/g, '') 
                        .replace(/[^a-z0-9]/g, ''); 
}

// ----------------------------------------------------
// BẢNG CÂU CHÚC DỰ PHÒNG (Dành cho những tên bạn chưa viết riêng)
// ----------------------------------------------------
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

// ----------------------------------------------------
// BẢNG CÂU CHÚC DỰ PHÒNG (Dành cho những tên bạn chưa viết riêng)
// ----------------------------------------------------
const defaultWishes = [
    `Chúc ${displayName} luôn xinh đẹp, rạng rỡ và đạt được mọi ước mơ.\n\nMong mọi điều tốt lành nhất sẽ đến bên ${displayName}!`,
    `Gửi ngàn lời chúc ngọt ngào nhất đến ${displayName}.\n\nChúc ${displayName} một ngày 8/3 ngập tràn niềm vui nhé!`
];

// ----------------------------------------------------
// LOGIC CHỌN LỌC CÂU CHÚC
// ----------------------------------------------------
let randomMessage = "";
// Nếu mã tên (folderName) có xuất hiện trong bảng cố định:
if (customWishes[folderName]) {
    randomMessage = customWishes[folderName]; // Dùng câu riêng
} else {
    // Nếu không có: Bốc ngẫu nhiên câu dự phòng
    randomMessage = defaultWishes[Math.floor(Math.random() * defaultWishes.length)];
}

const headerMessages = [
    `\u{1F337} 8/3 hạnh phúc nhé, ${displayName}!`,
    `Gửi tặng ${displayName} bó hoa thật đẹp! 💕✨`
];

// ==========================================
// 2. KHỞI TẠO NỀN (Bầu trời sao & Gõ chữ)
// (Từ đoạn này trở đi giữ nguyên code cũ của bạn...)
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
// 3. KHỞI CHẠY GIAO DIỆN
// ==========================================
let isPlaying = false;
let isTyping = false;
let hasOpened = false;
const bgMusic = document.getElementById('bgMusic');
if (bgMusic) bgMusic.src = 'music.mp3';

document.addEventListener("DOMContentLoaded", () => {
    createStarryNight();
    const titleEl = document.querySelector('.teachers-day-title');
    const dateEl = document.querySelector('.teachers-day-date');
    if (titleEl) titleEl.innerText = `Chúc mừng Ngày Quốc tế Phụ nữ 🌷`;
    if (dateEl) {
        dateEl.style.display = 'block';
        startTypingMessages(dateEl, headerMessages);
    }

    const popupImg = document.querySelector('.popup-card-image img');
    if (popupImg) {
        popupImg.src = `images/${folderName}/avatar.jpg`;
        popupImg.onerror = () => { popupImg.src = 'images/girl.jpeg'; }; 
    }

    const flowers = document.querySelector('.flowers');
    const popupCloseBtn = document.getElementById('popupCloseBtn');
    const musicToggle = document.getElementById('musicToggle');
    
    if(flowers) flowers.addEventListener('click', openLetter);
    if(popupCloseBtn) popupCloseBtn.addEventListener('click', closeLetter);
    if(musicToggle) musicToggle.addEventListener('click', toggleMusic);

    document.body.addEventListener('click', function initAudio() {
        if (!isPlaying && bgMusic) {
            bgMusic.play().catch(e => console.log("Trình duyệt chặn autoplay"));
            isPlaying = true;
            document.getElementById('musicIcon').classList.remove('muted');
        }
        document.body.removeEventListener('click', initAudio);
    }, { once: true });
});

function toggleMusic() {
    if (!bgMusic) return;
    if (isPlaying) {
        bgMusic.pause();
        document.getElementById('musicIcon').classList.add('muted');
    } else {
        bgMusic.play();
        document.getElementById('musicIcon').classList.remove('muted');
    }
    isPlaying = !isPlaying;
}

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

    // ==========================================
    // ĐÂY LÀ DÒNG CHỮA LỖI: ÉP THẺ CSS HIỆN LÊN
    // ==========================================
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
                // Nhận diện \n để tạo thẻ <br> xuống dòng
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

function createFlyingImages() {
    const container = document.getElementById('flyingImages');
    if (!container) return;
    container.innerHTML = '';

    // Đã tăng chỉ số 'top' để đẩy toàn bộ ảnh xuống dưới, tránh che mất chữ
    const positions = [
        { left: '8%', top: '38%', delay: '0s', rot: '-14deg', z: '20' },     // Ảnh 1: Hạ từ 22% xuống 38%
        { left: '27%', top: '55%', delay: '0.4s', rot: '0deg', z: '40' },     // Ảnh 2: Hạ từ 52% xuống 55%
        { left: '48%', top: '38%', delay: '0.8s', rot: '16deg', z: '30' },    // Ảnh 3: Hạ từ 22% xuống 38%
        { left: '72%', top: '58%', delay: '1.2s', rot: '6deg', z: '20' }      // Ảnh 4: Hạ từ 56% xuống 58%
    ];

    for (let i = 1; i <= 4; i++) {
        let card = document.createElement('div');
        
        card.style.position = 'absolute';
        card.style.left = positions[i-1].left;
        card.style.top = positions[i-1].top;
        card.style.transform = `translateY(100vh) rotate(${positions[i-1].rot})`; 
        
        // Căn chỉnh viền chuẩn form ảnh polaroid
        card.style.padding = '10px 10px 35px 10px';
        card.style.background = '#fff';
        
        // Bật lại viền màu tím cho ảnh số 3 giống như ảnh mẫu
        if (i === 3) card.style.border = '2px solid #8b5cf6';
        
        card.style.borderRadius = '5px';
        card.style.boxShadow = '0 15px 35px rgba(0,0,0,0.4)';
        card.style.opacity = '0';
        card.style.transition = `all 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) ${positions[i-1].delay}`;
        card.style.cursor = 'pointer';
        
        // Gán z-index để tạo hiệu ứng xếp đè như trong hình
        card.style.zIndex = positions[i-1].z;

        // Xử lý hover: khi trỏ chuột vào sẽ phóng to và đưa lên lớp cao nhất (z-index: 50)
        card.onmouseover = () => { card.style.transform = `translateY(0) rotate(${positions[i-1].rot}) scale(1.15)`; card.style.zIndex = '50'; };
        card.onmouseout = () => { card.style.transform = `translateY(0) rotate(${positions[i-1].rot}) scale(1)`; card.style.zIndex = positions[i-1].z; };
        
        card.onclick = openLetter;

        let img = document.createElement('img');
        img.src = `images/${folderName}/${i}.jpg`; 
        
        // Kích thước ảnh to, rõ ràng
        img.style.width = '180px';
        img.style.height = '240px';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '2px';
        
        img.onerror = () => { img.src = `images/default/${i}.jpg`; }; 

        card.appendChild(img);
        container.appendChild(card);

        setTimeout(() => { 
            card.style.opacity = '1'; 
            card.style.transform = `translateY(0) rotate(${positions[i-1].rot})`; 
            
            setTimeout(() => {
                card.style.transition = 'transform 0.4s'; 
                card.animate([
                    { marginTop: '0px' },
                    { marginTop: '-15px' },
                    { marginTop: '0px' }
                ], {
                    duration: 4000,
                    iterations: Infinity,
                    easing: 'ease-in-out',
                    delay: i * 200
                });
            }, 2000);
        }, 100);
    }
}