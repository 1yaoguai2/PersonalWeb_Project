// 等待页面加载完成
window.onload = function () {
    // 检查是否为移动端
    const isMobile = window.innerWidth <= 768;

    // 移动端菜单切换，只在移动端时初始化
    if (isMobile) {
        const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = document.querySelector('.nav-links');

        if (mobileMenu && navLinks) {
            mobileMenu.addEventListener('click', function () {
                navLinks.classList.toggle('active');
                this.classList.toggle('active');
            });
        }
    }

    // 滚动时改变导航栏样式
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(26, 27, 30, 0.8)';
            } else {
                navbar.style.background = 'rgba(26, 27, 30, 0.7)';
            }
        });
    }

    // 平滑滚动到锚点
    const anchors = document.querySelectorAll('a[href^="#"]');
    if (anchors.length > 0) {
        anchors.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
};

// 返回首页按钮动画
const backHomeBtn = document.querySelector('.back-home');
if (backHomeBtn) {
    // 滚动显示/隐藏
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backHomeBtn.style.opacity = '1';
            backHomeBtn.style.transform = 'translateY(0)';
        } else {
            backHomeBtn.style.opacity = '0';
            backHomeBtn.style.transform = 'translateY(20px)';
        }
    });

    // 点击动画
    backHomeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        // 添加点击效果
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
            window.location.href = 'index.html';
        }, 200);
    });
} 