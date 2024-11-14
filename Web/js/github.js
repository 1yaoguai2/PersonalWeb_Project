document.addEventListener('DOMContentLoaded', function () {
    const GITHUB_USERNAME = '1yaoguai2'; // 更新为您的GitHub用户名

    // 加载GitHub统计信息
    async function loadGitHubStats() {
        try {
            const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
            const data = await response.json();

            document.getElementById('repos').textContent = data.public_repos;
            // 其他统计信息将通过GitHub API获取

        } catch (error) {
            console.error('加载GitHub统计信息失败:', error);
        }
    }

    // 加载仓库列表
    async function loadRepositories() {
        try {
            const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=6`);
            const repos = await response.json();

            const repoList = document.getElementById('repo-list');
            repoList.innerHTML = repos.map(repo => `
                <div class="repo-card">
                    <div class="repo-header">
                        <a href="${repo.html_url}" target="_blank" class="repo-name">
                            ${repo.name}
                        </a>
                        <div class="repo-stats">
                            <span class="repo-stat">
                                <i class="fas fa-star"></i>
                                ${repo.stargazers_count}
                            </span>
                            <span class="repo-stat">
                                <i class="fas fa-code-branch"></i>
                                ${repo.forks_count}
                            </span>
                        </div>
                    </div>
                    <p class="repo-description">${repo.description || '暂无描述'}</p>
                    <div class="repo-language">
                        <span class="language-dot" style="background-color: ${getLanguageColor(repo.language)}"></span>
                        ${repo.language || 'Unknown'}
                    </div>
                </div>
            `).join('');

        } catch (error) {
            console.error('加载仓库列表失败:', error);
        }
    }

    // 获取编程语言的对应颜色
    function getLanguageColor(language) {
        const colors = {
            JavaScript: '#f1e05a',
            Python: '#3572A5',
            Java: '#b07219',
            'C#': '#178600',
            ShaderLab: '#222c37',
            // 根据您的仓库添加更多语言颜色
        };
        return colors[language] || '#858585';
    }

    // 初始化
    loadGitHubStats();
    loadRepositories();
}); 