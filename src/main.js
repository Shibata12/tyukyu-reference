// 次期中央給電指令所システム - メインアプリケーション
const { categories, getTotalArticleCount, searchArticles } = window;

// ============ State ============
const state = {
  bookmarks: JSON.parse(localStorage.getItem('cdcs_bookmarks') || '[]'),
  notes: JSON.parse(localStorage.getItem('cdcs_notes') || '[]'),
  currentRoute: '/',
  noteEditId: null
};

function saveBookmarks() { localStorage.setItem('cdcs_bookmarks', JSON.stringify(state.bookmarks)); }
function saveNotes() { localStorage.setItem('cdcs_notes', JSON.stringify(state.notes)); }
function isBookmarked(catId, artId) { return state.bookmarks.some(b => b.catId === catId && b.artId === artId); }

function toggleBookmark(catId, artId) {
  const idx = state.bookmarks.findIndex(b => b.catId === catId && b.artId === artId);
  if (idx >= 0) { state.bookmarks.splice(idx, 1); }
  else {
    const cat = categories.find(c => c.id === catId);
    const art = cat?.articles.find(a => a.id === artId);
    if (art) state.bookmarks.push({ catId, artId, title: art.title, catTitle: cat.title, date: new Date().toISOString() });
  }
  saveBookmarks();
}

// ============ Router ============
function navigate(hash) {
  window.location.hash = hash;
}

function getRoute() {
  const hash = window.location.hash.slice(1) || '/';
  const parts = hash.split('/').filter(Boolean);
  if (parts.length === 0) return { type: 'home' };
  if (parts[0] === 'bookmarks') return { type: 'bookmarks' };
  if (parts[0] === 'notes') return { type: 'notes' };
  if (parts[0] === 'references') return { type: 'references' };
  if (parts.length === 1) return { type: 'category', catId: parts[0] };
  if (parts.length === 2) return { type: 'article', catId: parts[0], artId: parts[1] };
  return { type: 'home' };
}

// ============ Sidebar ============
function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  const route = getRoute();

  // Keep home link and section title
  let html = `
    <a href="#/" class="nav-item nav-home ${route.type === 'home' ? 'active' : ''}" data-route="/">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      ダッシュボード
    </a>
    <div class="nav-section-title">カテゴリ</div>
  `;

  for (const cat of categories) {
    const isActive = route.catId === cat.id;
    const isExpanded = isActive;
    html += `
      <div class="nav-category">
        <a href="#/${cat.id}" class="nav-item ${isActive ? 'active' : ''}" data-route="/${cat.id}">
          <span class="nav-category-dot" style="background:${cat.color}"></span>
          ${cat.title}
          <button class="nav-category-toggle ${isExpanded ? 'expanded' : ''}" data-cat="${cat.id}" onclick="event.preventDefault();event.stopPropagation();this.classList.toggle('expanded');this.closest('.nav-category').querySelector('.nav-item-children').classList.toggle('open')">▶</button>
        </a>
        <div class="nav-item-children ${isExpanded ? 'open' : ''}" style="display:${isExpanded ? 'block' : 'none'}">
          ${cat.articles.map(a => `
            <a href="#/${cat.id}/${a.id}" class="nav-child-item ${route.artId === a.id ? 'active' : ''}">${a.title}</a>
          `).join('')}
        </div>
      </div>
    `;
  }
  nav.innerHTML = html;

  // Toggle children handler
  nav.querySelectorAll('.nav-category-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const children = btn.closest('.nav-category').querySelector('.nav-item-children');
      const isOpen = children.style.display !== 'none';
      children.style.display = isOpen ? 'none' : 'block';
      btn.classList.toggle('expanded');
    });
  });
}

// ============ Breadcrumb ============
function renderBreadcrumb() {
  const bc = document.getElementById('breadcrumb');
  const route = getRoute();
  let html = '<a href="#/">ホーム</a>';

  if (route.type === 'category' || route.type === 'article') {
    const cat = categories.find(c => c.id === route.catId);
    if (cat) {
      html += `<span class="separator">/</span><a href="#/${cat.id}">${cat.title}</a>`;
      if (route.type === 'article') {
        const art = cat.articles.find(a => a.id === route.artId);
        if (art) html += `<span class="separator">/</span><span class="current">${art.title}</span>`;
      }
    }
  } else if (route.type === 'bookmarks') {
    html += '<span class="separator">/</span><span class="current">ブックマーク</span>';
  } else if (route.type === 'notes') {
    html += '<span class="separator">/</span><span class="current">メモ帳</span>';
  } else if (route.type === 'references') {
    html += '<span class="separator">/</span><span class="current">参考文献一覧</span>';
  }
  bc.innerHTML = html;
}

// ============ Content Renderers ============
function renderHome() {
  const totalArticles = getTotalArticleCount();
  const totalRefs = categories.reduce((s, c) => s + c.articles.reduce((s2, a) => s2 + (a.references?.length || 0), 0), 0);

  return `
    <div class="dashboard-hero">
      <h1>電力システムメモ</h1>
      <p>電力システムに関連する技術情報を体系的に整理したリファレンスサイトです。カテゴリごとに構造化された情報を参照できます。</p>
    </div>
    <div class="stats-row">
      <div class="stat-card"><div class="stat-value">${categories.length}</div><div class="stat-label">カテゴリ</div></div>
      <div class="stat-card"><div class="stat-value">${totalArticles}</div><div class="stat-label">記事</div></div>
      <a href="#/references" class="stat-card" style="text-decoration:none;color:inherit;cursor:pointer"><div class="stat-value">${totalRefs}</div><div class="stat-label">参考文献</div></a>
      <div class="stat-card"><div class="stat-value">${state.bookmarks.length}</div><div class="stat-label">ブックマーク</div></div>
      <div class="stat-card"><div class="stat-value">${state.notes.length}</div><div class="stat-label">メモ</div></div>
    </div>
    <div class="category-grid">
      ${categories.map(cat => `
        <a href="#/${cat.id}" class="category-card" style="--card-accent:${cat.color}">
          <div class="category-card-icon" style="background:${cat.color}20">${cat.icon}</div>
          <h3>${cat.title}</h3>
          <p>${cat.description}</p>
          <div class="article-count">📄 ${cat.articles.length} 記事</div>
        </a>
      `).join('')}
    </div>
  `;
}

function renderCategory(catId) {
  const cat = categories.find(c => c.id === catId);
  if (!cat) return '<div class="empty-state"><div class="empty-state-icon">❓</div><p>カテゴリが見つかりません</p></div>';

  return `
    <div class="category-header">
      <h1><span style="color:${cat.color}">${cat.icon}</span> ${cat.title}</h1>
      <p>${cat.description}</p>
    </div>
    <div class="article-list">
      ${cat.articles.map((a, i) => `
        <a href="#/${cat.id}/${a.id}" class="article-card">
          <div class="article-card-number">${String(i + 1).padStart(2, '0')}</div>
          <div class="article-card-content">
            <h3>${a.title}</h3>
            <p>${a.summary}</p>
            <div class="tags">${a.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
          </div>
        </a>
      `).join('')}
    </div>
  `;
}

function renderArticle(catId, artId) {
  const cat = categories.find(c => c.id === catId);
  const art = cat?.articles.find(a => a.id === artId);
  if (!art) return '<div class="empty-state"><div class="empty-state-icon">❓</div><p>記事が見つかりません</p></div>';

  const bm = isBookmarked(catId, artId);
  const articleNotes = state.notes.filter(n => n.catId === catId && n.artId === artId);

  return `
    <div class="article-header">
      <h1>${art.title}</h1>
      <div class="article-meta">
        <div class="tags">${art.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="article-actions">
          <button class="btn-icon ${bm ? 'bookmarked' : ''}" id="btn-bookmark" data-cat="${catId}" data-art="${artId}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="${bm ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
            ${bm ? 'ブックマーク済' : 'ブックマーク'}
          </button>
          <button class="btn-icon" id="btn-add-note" data-cat="${catId}" data-art="${artId}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
            メモを追加
          </button>
        </div>
      </div>
    </div>
    <div class="article-body">${art.content}</div>
    ${articleNotes.length > 0 ? `
      <div class="references" style="margin-top:2rem">
        <h3>📝 この記事のメモ</h3>
        <div class="notes-list">
          ${articleNotes.map(n => `
            <div class="note-card">
              <div class="note-card-header">
                <span class="note-card-date">${new Date(n.date).toLocaleString('ja-JP')}</span>
                <div class="note-card-actions">
                  <button class="btn btn-secondary" style="padding:2px 8px;font-size:0.7rem" onclick="window.app.editNote('${n.id}')">編集</button>
                  <button class="btn btn-danger" style="padding:2px 8px;font-size:0.7rem" onclick="window.app.deleteNote('${n.id}')">削除</button>
                </div>
              </div>
              <div class="note-card-body">${escapeHtml(n.text)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}
    ${art.references?.length ? `
      <div class="references">
        <h3>📚 参考文献</h3>
        <div class="reference-list">
          ${art.references.map((r, i) => `
            <div class="reference-item">
              <span class="ref-num">[${i + 1}]</span>
              <span class="ref-title">${r.title}</span>
              <a href="${r.url}" target="_blank" rel="noopener">${new URL(r.url).hostname}</a>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}
  `;
}

function renderBookmarks() {
  return `
    <div class="page-header"><h1>🔖 ブックマーク</h1></div>
    ${state.bookmarks.length === 0 ? '<div class="empty-state"><div class="empty-state-icon">🔖</div><p>ブックマークはまだありません。<br>記事ページでブックマークボタンを押して追加できます。</p></div>' : `
      <div class="bookmarks-list">
        ${state.bookmarks.map(b => `
          <div class="bookmark-item" onclick="window.location.hash='#/${b.catId}/${b.artId}'">
            <div><h3>${b.title}</h3><p>${b.catTitle}</p></div>
            <button class="bookmark-remove" onclick="event.stopPropagation();window.app.removeBookmark('${b.catId}','${b.artId}')">✕</button>
          </div>
        `).join('')}
      </div>
    `}
  `;
}

function renderNotes() {
  return `
    <div class="page-header"><h1>📝 メモ帳</h1></div>
    ${state.notes.length === 0 ? '<div class="empty-state"><div class="empty-state-icon">📝</div><p>メモはまだありません。<br>記事ページで「メモを追加」ボタンから追加できます。</p></div>' : `
      <div class="notes-list">
        ${state.notes.map(n => {
    const cat = categories.find(c => c.id === n.catId);
    const art = cat?.articles.find(a => a.id === n.artId);
    return `
            <div class="note-card">
              <div class="note-card-header">
                <a href="#/${n.catId}/${n.artId}" class="note-card-title">${art?.title || '不明な記事'}</a>
                <span class="note-card-date">${new Date(n.date).toLocaleString('ja-JP')}</span>
              </div>
              <div class="note-card-body">${escapeHtml(n.text)}</div>
              <div class="note-card-actions">
                <button class="btn btn-secondary" style="padding:2px 10px;font-size:0.75rem" onclick="window.app.editNote('${n.id}')">編集</button>
                <button class="btn btn-danger" style="padding:2px 10px;font-size:0.75rem" onclick="window.app.deleteNote('${n.id}')">削除</button>
              </div>
            </div>
          `;
  }).join('')}
      </div>
    `}
  `;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/\n/g, '<br>');
}

function renderReferences() {
  // Collect all references with their source article info
  const allRefs = [];
  const seen = new Set();
  for (const cat of categories) {
    for (const article of cat.articles) {
      if (!article.references) continue;
      for (const ref of article.references) {
        const key = ref.url;
        if (seen.has(key)) {
          // Add source article to existing entry
          const existing = allRefs.find(r => r.url === key);
          if (existing && !existing.sources.some(s => s.artId === article.id)) {
            existing.sources.push({ catId: cat.id, catTitle: cat.title, catIcon: cat.icon, artId: article.id, artTitle: article.title });
          }
          continue;
        }
        seen.add(key);
        allRefs.push({
          title: ref.title,
          url: ref.url,
          hostname: new URL(ref.url).hostname,
          sources: [{ catId: cat.id, catTitle: cat.title, catIcon: cat.icon, artId: article.id, artTitle: article.title }]
        });
      }
    }
  }

  // Group by hostname domain
  const grouped = {};
  for (const ref of allRefs) {
    const domain = ref.hostname;
    if (!grouped[domain]) grouped[domain] = [];
    grouped[domain].push(ref);
  }

  const totalUnique = allRefs.length;
  const totalAll = categories.reduce((s, c) => s + c.articles.reduce((s2, a) => s2 + (a.references?.length || 0), 0), 0);

  return `
    <div class="page-header">
      <h1>📚 参考文献一覧</h1>
      <p style="color:var(--text-secondary);margin-top:0.5rem">全 ${totalAll} 件（ユニーク ${totalUnique} 件）の参考文献</p>
    </div>
    <div class="references-page">
      ${Object.entries(grouped).map(([domain, refs]) => `
        <div class="ref-group">
          <div class="ref-group-header">
            <span class="ref-group-domain">${domain}</span>
            <span class="ref-group-count">${refs.length}件</span>
          </div>
          <div class="ref-group-items">
            ${refs.map(ref => `
              <div class="ref-page-item">
                <div class="ref-page-item-main">
                  <a href="${ref.url}" target="_blank" rel="noopener" class="ref-page-title">${ref.title}</a>
                  <a href="${ref.url}" target="_blank" rel="noopener" class="ref-page-url">${ref.url}</a>
                </div>
                <div class="ref-page-sources">
                  ${ref.sources.map(s => `
                    <a href="#/${s.catId}/${s.artId}" class="ref-source-link">${s.catIcon} ${s.artTitle}</a>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ============ Main Render ============
function render() {
  const route = getRoute();
  const content = document.getElementById('content-area');
  content.style.animation = 'none';
  content.offsetHeight; // trigger reflow
  content.style.animation = '';

  switch (route.type) {
    case 'home': content.innerHTML = renderHome(); break;
    case 'category': content.innerHTML = renderCategory(route.catId); break;
    case 'article': content.innerHTML = renderArticle(route.catId, route.artId); break;
    case 'bookmarks': content.innerHTML = renderBookmarks(); break;
    case 'notes': content.innerHTML = renderNotes(); break;
    case 'references': content.innerHTML = renderReferences(); break;
    default: content.innerHTML = renderHome();
  }

  renderSidebar();
  renderBreadcrumb();
  bindContentEvents();
  document.getElementById('last-updated').textContent = '最終更新: 2026年2月';
  window.scrollTo(0, 0);
}

// ============ Event Bindings ============
function bindContentEvents() {
  // Bookmark button
  const bmBtn = document.getElementById('btn-bookmark');
  if (bmBtn) {
    bmBtn.addEventListener('click', () => {
      toggleBookmark(bmBtn.dataset.cat, bmBtn.dataset.art);
      render();
    });
  }

  // Add note button
  const noteBtn = document.getElementById('btn-add-note');
  if (noteBtn) {
    noteBtn.addEventListener('click', () => {
      state.noteEditId = null;
      document.getElementById('note-modal-title').textContent = 'メモを追加';
      document.getElementById('note-content').value = '';
      document.getElementById('note-modal-overlay').classList.add('active');
      document.getElementById('note-content').focus();
      // Store context
      document.getElementById('note-save').dataset.cat = noteBtn.dataset.cat;
      document.getElementById('note-save').dataset.art = noteBtn.dataset.art;
    });
  }
}

// ============ Search ============
function initSearch() {
  const input = document.getElementById('search-input');
  const overlay = document.getElementById('search-overlay');
  const results = document.getElementById('search-results');
  let debounce;

  input.addEventListener('input', () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      const q = input.value.trim();
      if (q.length < 2) { overlay.classList.remove('active'); return; }

      const found = searchArticles(q);
      if (found.length === 0) {
        results.innerHTML = '<div class="search-no-results">結果が見つかりませんでした</div>';
      } else {
        results.innerHTML = found.map(({ category, article }) => `
          <a href="#/${category.id}/${article.id}" class="search-result-item" data-dismiss="search">
            <div class="search-result-category">${category.icon} ${category.title}</div>
            <div class="search-result-title">${article.title}</div>
            <div class="search-result-excerpt">${article.summary}</div>
          </a>
        `).join('');
      }
      overlay.classList.add('active');
    }, 200);
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.closest('[data-dismiss="search"]')) {
      overlay.classList.remove('active');
      input.value = '';
    }
  });

  // Ctrl+K shortcut
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      input.focus();
    }
    if (e.key === 'Escape') {
      overlay.classList.remove('active');
      input.value = '';
      input.blur();
    }
  });
}

// ============ Note Modal ============
function initNoteModal() {
  const overlay = document.getElementById('note-modal-overlay');
  const saveBtn = document.getElementById('note-save');
  const cancelBtn = document.getElementById('note-cancel');
  const closeBtn = document.getElementById('note-modal-close');
  const textarea = document.getElementById('note-content');

  function close() { overlay.classList.remove('active'); }

  cancelBtn.addEventListener('click', close);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });

  saveBtn.addEventListener('click', () => {
    const text = textarea.value.trim();
    if (!text) return;

    if (state.noteEditId) {
      const note = state.notes.find(n => n.id === state.noteEditId);
      if (note) { note.text = text; note.date = new Date().toISOString(); }
    } else {
      state.notes.push({
        id: 'n_' + Date.now(),
        catId: saveBtn.dataset.cat,
        artId: saveBtn.dataset.art,
        text,
        date: new Date().toISOString()
      });
    }
    saveNotes();
    close();
    render();
  });
}

// ============ Sidebar Mobile ============
function initSidebarToggle() {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('sidebar-close');

  hamburger.addEventListener('click', () => sidebar.classList.add('open'));
  closeBtn.addEventListener('click', () => sidebar.classList.remove('open'));

  // Close on navigation
  sidebar.addEventListener('click', (e) => {
    if (e.target.closest('a[href]')) {
      sidebar.classList.remove('open');
    }
  });
}

// ============ Global API (for inline onclick) ============
window.app = {
  removeBookmark(catId, artId) {
    toggleBookmark(catId, artId);
    render();
  },
  deleteNote(id) {
    state.notes = state.notes.filter(n => n.id !== id);
    saveNotes();
    render();
  },
  editNote(id) {
    const note = state.notes.find(n => n.id === id);
    if (!note) return;
    state.noteEditId = id;
    document.getElementById('note-modal-title').textContent = 'メモを編集';
    document.getElementById('note-content').value = note.text;
    document.getElementById('note-save').dataset.cat = note.catId;
    document.getElementById('note-save').dataset.art = note.artId;
    document.getElementById('note-modal-overlay').classList.add('active');
    document.getElementById('note-content').focus();
  }
};

// ============ Init ============
function init() {
  window.addEventListener('hashchange', render);
  initSearch();
  initNoteModal();
  initSidebarToggle();
  render();
}

document.addEventListener('DOMContentLoaded', init);
