# 🔬 FDA 식품 안전 분석기

미국 FDA(Food and Drug Administration) 기준에 따른 식품 안전, 기준, 유해물질을 검색하고 분석하는 웹 애플리케이션입니다.

## 📋 주요 기능

- **중금속 검색**: 납, 수은, 카드뮴, 비소 등 중금속의 허용 기준 확인
- **식품첨가물 분석**: 아스파탐, 타르색소, 안식향산나트륨 등의 일일섭취허용량(ADI) 정보
- **농약 잔류 기준**: 클로르피리포스, 글리포세이트 등 농약의 잔류허용기준
- **미생물 안전 기준**: 살모넬라, 대장균, 리스테리아 등 병원성 세균 기준
- **알레르겐 정보**: FDA 주요 8대 알레르겐 정보 및 라벨 표시 요구사항
- **오염물질 기준**: 아플라톡신, 멜라민, 다이옥신 등 오염물질 허용 기준

## 🚀 사용 방법

### 로컬에서 실행

1. 저장소 클론
```bash
git clone <repository-url>
cd <repository-name>
```

2. 웹 브라우저로 `index.html` 파일 열기

또는 간단한 HTTP 서버 실행:

```bash
# Python 3를 사용하는 경우
python -m http.server 8000

# Node.js http-server를 사용하는 경우
npx http-server
```

3. 브라우저에서 `http://localhost:8000` 접속

### 검색 방법

1. **키워드 검색**: 검색창에 물질명, 식품명, 또는 카테고리 입력
   - 예: "납", "수은", "아스파탐", "살모넬라"

2. **카테고리 필터**: 상단 필터 버튼으로 특정 카테고리만 표시
   - 전체 / 중금속 / 식품첨가물 / 농약 / 미생물 / 알레르겐 / 오염물질

3. **검색 결과**: 각 물질의 상세 정보 확인
   - 허용 기준
   - 적용 대상 식품
   - 건강 위험
   - FDA 승인 상태

## 📊 데이터 구조

모든 FDA 기준 데이터는 `data/fda-standards.json` 파일에 저장되어 있습니다.

```json
{
  "heavyMetals": [...],      // 중금속
  "additives": [...],         // 식품첨가물
  "pesticides": [...],        // 농약
  "microbiological": [...],   // 미생물
  "allergens": [...],         // 알레르겐
  "contaminants": [...]       // 오염물질
}
```

## 🗂️ 프로젝트 구조

```
.
├── index.html              # 메인 HTML 파일
├── css/
│   └── styles.css         # 스타일시트
├── js/
│   └── app.js             # 메인 JavaScript
├── data/
│   └── fda-standards.json # FDA 기준 데이터
└── README.md              # 프로젝트 문서
```

## 🎨 주요 기술

- **HTML5**: 시맨틱 마크업
- **CSS3**: 반응형 디자인, 그라디언트, 애니메이션
- **JavaScript (ES6+)**: 검색, 필터링, 동적 렌더링
- **JSON**: 구조화된 FDA 데이터

## 📱 반응형 디자인

모바일, 태블릿, 데스크톱 모든 화면 크기에 최적화되어 있습니다.

## ⚠️ 면책 조항

이 애플리케이션은 교육 및 참고 목적으로 제공됩니다.

- 실제 규제 준수를 위해서는 [FDA 공식 웹사이트](https://www.fda.gov)를 확인하세요
- 데이터는 정기적으로 업데이트되지 않을 수 있습니다
- 의료 또는 법적 조언을 대체하지 않습니다

## 📚 참고 자료

- [FDA 공식 웹사이트](https://www.fda.gov)
- [FDA Food Safety](https://www.fda.gov/food)
- [FDA Food Additives](https://www.fda.gov/food/food-additives-petitions)
- [FDA Food Contaminants](https://www.fda.gov/food/chemicals-metals-pesticides-food)

## 🔄 업데이트 내역

### Version 1.0.0 (2024)
- 초기 릴리스
- FDA 식품 안전 기준 데이터베이스 구축
- 검색 및 필터링 기능 구현
- 반응형 UI/UX 디자인

## 📝 라이선스

이 프로젝트는 교육 목적으로 만들어졌습니다.

## 🤝 기여

버그 리포트, 기능 제안, 데이터 업데이트는 언제든 환영합니다!

---

**Made with ❤️ for Food Safety**
