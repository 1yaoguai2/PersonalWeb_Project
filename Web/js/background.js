document.addEventListener('DOMContentLoaded', function () {
    const bgSlideshow = document.getElementById('bgSlideshow');
    const bgImages = [
        'Image/BG/1.jpg',  // 修改为实际的图片名称
        'Image/BG/2.jpg',
        'Image/BG/3.jpg',
        'Image/BG/4.jpg',
        'Image/BG/5.jpg',
        'Image/BG/6.jpg'
    ];

    let currentSlide = 0;

    // 创建初始背景幻灯片
    function createSlides() {
        bgImages.forEach((img, index) => {
            const slide = document.createElement('div');
            slide.className = `bg-slide ${index === 0 ? 'active' : ''}`;
            // 添加错误处理
            slide.style.backgroundImage = `url(${img})`;
            // 添加加载错误处理
            const tempImg = new Image();
            tempImg.onerror = () => {
                console.error(`Failed to load image: ${img}`);
            };
            tempImg.src = img;

            bgSlideshow.appendChild(slide);
        });
    }

    // 切换到下一张图片
    function nextSlide() {
        const slides = document.querySelectorAll('.bg-slide');
        if (slides.length === 0) return; // 防止没有幻灯片时的错误

        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // 初始化幻灯片
    createSlides();

    // 设置自动切换定时器
    setInterval(nextSlide, 8000);

    // 添加调试信息
    console.log('Background slideshow initialized');
    console.log('Number of images:', bgImages.length);
}); 