// FDA 식품 안전 분석기 - 메인 애플리케이션
let fdaData = null;
let currentFilter = 'all';
let currentResults = [];

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    loadFDAData();
    setupEventListeners();
});

// FDA 데이터 로드 (fda-data.js에서 직접 로드)
function loadFDAData() {
    try {
        // fdaStandards는 fda-data.js에서 정의됨
        if (typeof fdaStandards !== 'undefined') {
            fdaData = fdaStandards;
            console.log('FDA 데이터 로드 완료:', fdaData);
        } else {
            throw new Error('FDA 데이터를 찾을 수 없습니다.');
        }
    } catch (error) {
        console.error('FDA 데이터 로드 실패:', error);
        showError('데이터를 불러오는데 실패했습니다.');
    }
}

// 이벤트 리스너 설정
function setupEventListeners() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.category;
            performSearch();
        });
    });
}

// 검색 수행
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

    if (!fdaData) {
        showError('데이터가 아직 로드되지 않았습니다.');
        return;
    }

    let results = [];

    // 카테고리별로 검색
    const categories = currentFilter === 'all'
        ? ['heavyMetals', 'additives', 'pesticides', 'microbiological', 'allergens', 'contaminants']
        : [currentFilter];

    categories.forEach(category => {
        if (fdaData[category]) {
            const categoryResults = fdaData[category].filter(item => {
                if (!searchTerm) return true; // 검색어가 없으면 모든 항목 표시

                const searchableText = JSON.stringify(item).toLowerCase();
                return searchableText.includes(searchTerm);
            });

            results = results.concat(categoryResults.map(item => ({
                ...item,
                category: category
            })));
        }
    });

    currentResults = results;
    displayResults(results);
    updateStats(results);
}

// 결과 표시
function displayResults(results) {
    const resultsSection = document.getElementById('results');

    if (results.length === 0) {
        resultsSection.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <h3>검색 결과가 없습니다</h3>
                <p>다른 검색어나 카테고리를 시도해보세요.</p>
            </div>
        `;
        document.getElementById('statsSection').style.display = 'none';
        return;
    }

    const resultsHTML = results.map(item => createResultCard(item)).join('');
    resultsSection.innerHTML = resultsHTML;
    document.getElementById('statsSection').style.display = 'block';
}

// 결과 카드 생성
function createResultCard(item) {
    const categoryNames = {
        'heavyMetals': '중금속',
        'additives': '식품첨가물',
        'pesticides': '농약',
        'microbiological': '미생물',
        'allergens': '알레르겐',
        'contaminants': '오염물질'
    };

    let cardHTML = `
        <div class="result-card">
            <div class="result-header">
                <div class="result-title">${item.name}</div>
                <span class="result-category category-${item.category}">${categoryNames[item.category]}</span>
            </div>
            <div class="result-body">
                ${item.nameEn ? `<div class="result-row"><span class="result-label">영문명:</span> <span class="result-value">${item.nameEn}</span></div>` : ''}
                ${item.category ? `<div class="result-row"><span class="result-label">분류:</span> <span class="result-value">${item.category}</span></div>` : ''}
                ${item.limit ? `<div class="result-row"><span class="result-label">허용 기준:</span> <span class="result-value">${item.limit}</span></div>` : ''}
                ${item.adI ? `<div class="result-row"><span class="result-label">일일섭취허용량:</span> <span class="result-value">${item.adI}</span></div>` : ''}
                ${item.tolerance ? `<div class="result-row"><span class="result-label">잔류허용기준:</span> <span class="result-value">${item.tolerance}</span></div>` : ''}
                ${item.requirement ? `<div class="result-row"><span class="result-label">요구사항:</span> <span class="result-value">${item.requirement}</span></div>` : ''}
                ${item.appliesTo ? `
                    <div class="result-row">
                        <span class="result-label">적용 대상:</span>
                        <div class="applies-to">
                            ${item.appliesTo.map(food => `<span class="applies-to-item">${food}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
                ${item.healthRisk ? `<div class="result-row"><span class="result-label">건강 위험:</span> <span class="result-value">${item.healthRisk}</span></div>` : ''}
                ${item.severity ? `<div class="result-row"><span class="result-label">위험도:</span> <span class="severity-badge severity-${item.severity}">${item.severity}</span></div>` : ''}
                ${item.status ? `<div class="result-row"><span class="result-label">상태:</span> <span class="status-badge">${item.status}</span></div>` : ''}
                ${item.notes ? `<div class="result-row"><span class="result-label">참고사항:</span> <span class="result-value">${item.notes}</span></div>` : ''}
            </div>
        </div>
    `;

    return cardHTML;
}

// 통계 업데이트
function updateStats(results) {
    const totalResults = results.length;
    const highSeverity = results.filter(item => item.severity === '높음').length;
    const fdaApproved = results.filter(item =>
        item.status && (item.status.includes('FDA 승인') || item.status.includes('GRAS'))
    ).length;

    document.getElementById('totalResults').textContent = totalResults;
    document.getElementById('highSeverity').textContent = highSeverity;
    document.getElementById('fdaApproved').textContent = fdaApproved;
}

// 에러 표시
function showError(message) {
    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = `
        <div class="no-results">
            <div class="no-results-icon">⚠️</div>
            <h3>오류 발생</h3>
            <p>${message}</p>
        </div>
    `;
}

// 유틸리티 함수: 하이라이트 텍스트
function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// 초기 데이터 표시 (전체 카테고리)
window.addEventListener('load', () => {
    setTimeout(() => {
        if (fdaData) {
            // 초기 화면에는 환영 메시지 유지
            console.log('FDA 데이터 준비 완료');
        }
    }, 500);
});
