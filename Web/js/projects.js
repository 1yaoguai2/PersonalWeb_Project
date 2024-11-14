document.addEventListener('DOMContentLoaded', function () {
    // 项目过滤功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 更新按钮状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 过滤项目
            const filter = button.dataset.filter;
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    // 添加动画效果
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 加载更多功能
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', async () => {
            const spinner = loadMoreBtn.querySelector('.fa-spinner');
            spinner.style.display = 'inline-block';
            loadMoreBtn.disabled = true;

            try {
                // 模拟加载更多项目
                await new Promise(resolve => setTimeout(resolve, 1000));

                // 这里添加新项目的逻辑
                // ...

                spinner.style.display = 'none';
                loadMoreBtn.disabled = false;
            } catch (error) {
                console.error('加载失败:', error);
                spinner.style.display = 'none';
                loadMoreBtn.disabled = false;
            }
        });
    }
}); 