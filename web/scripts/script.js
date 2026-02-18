// Initialize knowledge base when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeKnowledgeBase);
} else {
    initializeKnowledgeBase();
}

function initializeKnowledgeBase() {
    const state = {
        currentArticle: null,
        articles: [],
        searchTerm: ''
    };

    // Build navigation from config
    function buildNavigation() {
        const nav = document.getElementById('navigation');
        nav.innerHTML = '';

        // Flatten all articles for search
        state.articles = [];

        window.KB_CONFIG.sections.forEach(section => {
            const sectionEl = document.createElement('div');
            sectionEl.className = 'nav-section';

            const titleEl = document.createElement('div');
            titleEl.className = 'nav-section-title';
            titleEl.textContent = section.title;
            sectionEl.appendChild(titleEl);

            const listEl = document.createElement('ul');
            listEl.className = 'nav-list';

            section.articles.forEach(article => {
                // Add to searchable articles
                state.articles.push({
                    ...article,
                    sectionTitle: section.title
                });

                const itemEl = document.createElement('li');
                itemEl.className = 'nav-item';

                const linkEl = document.createElement('a');
                linkEl.href = '#';
                linkEl.className = 'nav-link';
                linkEl.textContent = article.title;
                linkEl.dataset.path = article.path;
                linkEl.dataset.section = section.title;

                linkEl.addEventListener('click', (e) => {
                    e.preventDefault();
                    loadArticle(article.path, section.title, article.title);
                });

                itemEl.appendChild(linkEl);
                listEl.appendChild(itemEl);
            });

            sectionEl.appendChild(listEl);
            nav.appendChild(sectionEl);
        });
    }

    // Load and render HTML article
    async function loadArticle(path, sectionTitle, articleTitle) {
        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error('Article not found');
            
            const html = await response.text();

            const contentEl = document.getElementById('article-content');
            contentEl.innerHTML = html;

            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.dataset.path === path) {
                    link.classList.add('active');
                }
            });

            // Update breadcrumb
            const breadcrumb = document.getElementById('breadcrumb');
            breadcrumb.textContent = `${sectionTitle} / ${articleTitle}`;
           
            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            state.currentArticle = { path, sectionTitle, articleTitle };

        } catch (error) {
            console.error('Error loading article:', error);
            const contentEl = document.getElementById('article-content');
            contentEl.innerHTML = `
                <div class="welcome-state">
                    <h1>Article Not Found</h1>
                    <p>The requested article could not be loaded.</p>
                    <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-top: 1rem;">
                        Path: ${path}
                    </p>
                </div>
            `;
        }
    }

    // Search functionality
    function handleSearch(term) {
        state.searchTerm = term.toLowerCase();

        document.querySelectorAll('.nav-link').forEach(link => {
            const title = link.textContent.toLowerCase();
            const section = link.dataset.section.toLowerCase();
            // Insert querying website content

            if (title.includes(state.searchTerm) || section.includes(state.searchTerm)) {
                link.classList.remove('hidden');
            } else {
                link.classList.add('hidden');
            }
        });

        // Hide sections with no visible items
        document.querySelectorAll('.nav-section').forEach(section => {
            const visibleLinks = section.querySelectorAll('.nav-link:not(.hidden)');
            if (visibleLinks.length === 0 && state.searchTerm) {
                section.style.display = 'none';
            } else {
                section.style.display = 'block';
            }
        });
    }

    // Search input event listener
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
    });

    // Initialize
    buildNavigation();

    // Load default article if specified
    if (window.KB_CONFIG.defaultArticle) {
        const defaultPath = window.KB_CONFIG.defaultArticle;
        const article = state.articles.find(a => a.path === defaultPath);
        if (article) {
            loadArticle(article.path, article.sectionTitle, article.title);
        }
    }

    // Mobile menu toggle (for responsive design)
    const sidebar = document.querySelector('.sidebar');
    let menuButton;

    function createMobileMenu() {
        if (window.innerWidth <= 768 && !menuButton) {
            menuButton = document.createElement('button');
            menuButton.className = 'mobile-menu-toggle';
            menuButton.innerHTML = '☰';
            menuButton.style.cssText = `
                position: fixed;
                top: 1rem;
                left: 1rem;
                z-index: 1001;
                background: var(--color-accent);
                color: white;
                border: none;
                padding: 0.75rem 1rem;
                border-radius: 8px;
                font-size: 1.5rem;
                cursor: pointer;
                display: block;
            `;
            menuButton.addEventListener('click', () => {
                sidebar.classList.toggle('open');
            });
            document.body.appendChild(menuButton);
        } else if (window.innerWidth > 768 && menuButton) {
            menuButton.remove();
            menuButton = null;
            sidebar.classList.remove('open');
        }
    }

    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            sidebar.classList.contains('open') && 
            !sidebar.contains(e.target) && 
            !menuButton.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });

    // Expose API for custom extensions
    window.KB = {
        loadArticle,
        state,
        refresh: buildNavigation
    };
}