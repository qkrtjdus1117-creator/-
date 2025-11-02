// FDA 식품 안전 기준 데이터
const fdaStandards = {
  "heavyMetals": [
    {
      "name": "납 (Lead)",
      "nameEn": "Lead",
      "category": "중금속",
      "limit": "0.1 ppm",
      "appliesTo": ["과일주스", "캔디", "영유아식품"],
      "healthRisk": "신경계 손상, 발달 장애, 학습 능력 저하",
      "severity": "높음"
    },
    {
      "name": "수은 (Mercury)",
      "nameEn": "Mercury",
      "category": "중금속",
      "limit": "1.0 ppm",
      "appliesTo": ["생선", "해산물"],
      "healthRisk": "신경계 손상, 태아 발달 장애",
      "severity": "높음"
    },
    {
      "name": "카드뮴 (Cadmium)",
      "nameEn": "Cadmium",
      "category": "중금속",
      "limit": "0.1 ppm",
      "appliesTo": ["초콜릿", "곡물"],
      "healthRisk": "신장 손상, 골다공증",
      "severity": "높음"
    },
    {
      "name": "비소 (Arsenic)",
      "nameEn": "Arsenic",
      "category": "중금속",
      "limit": "10 ppb (무기비소)",
      "appliesTo": ["쌀", "쌀 제품", "영유아식품"],
      "healthRisk": "암 발생 위험 증가, 심혈관 질환",
      "severity": "높음"
    }
  ],
  "additives": [
    {
      "name": "아스파탐 (Aspartame)",
      "nameEn": "Aspartame",
      "category": "감미료",
      "adI": "50 mg/kg 체중/일",
      "appliesTo": ["음료", "디저트", "껌"],
      "status": "FDA 승인",
      "notes": "페닐케톤뇨증 환자 주의"
    },
    {
      "name": "타르색소 (Tartrazine)",
      "nameEn": "Yellow 5",
      "category": "착색료",
      "adI": "7.5 mg/kg 체중/일",
      "appliesTo": ["음료", "사탕", "가공식품"],
      "status": "FDA 승인",
      "notes": "알레르기 반응 가능"
    },
    {
      "name": "안식향산나트륨 (Sodium Benzoate)",
      "nameEn": "Sodium Benzoate",
      "category": "보존료",
      "adI": "5 mg/kg 체중/일",
      "appliesTo": ["음료", "소스", "드레싱"],
      "status": "FDA 승인",
      "notes": "비타민C와 반응시 벤젠 생성 가능"
    },
    {
      "name": "MSG (글루탐산나트륨)",
      "nameEn": "Monosodium Glutamate",
      "category": "향미증진제",
      "adI": "제한 없음",
      "appliesTo": ["가공식품", "조미료", "스낵"],
      "status": "GRAS (일반적으로 안전한 것으로 인정)",
      "notes": "일부 사람에게 두통, 홍조 증상 가능"
    },
    {
      "name": "질산나트륨 (Sodium Nitrite)",
      "nameEn": "Sodium Nitrite",
      "category": "보존료/발색제",
      "adI": "0.06 mg/kg 체중/일",
      "appliesTo": ["육류 가공품", "베이컨", "햄"],
      "status": "FDA 승인",
      "notes": "고온에서 발암물질 생성 가능"
    }
  ],
  "pesticides": [
    {
      "name": "클로르피리포스 (Chlorpyrifos)",
      "nameEn": "Chlorpyrifos",
      "category": "유기인계 살충제",
      "tolerance": "0.01 ppm (다수 작물)",
      "appliesTo": ["과일", "채소"],
      "status": "2021년 사용 금지",
      "healthRisk": "신경계 발달 장애"
    },
    {
      "name": "글리포세이트 (Glyphosate)",
      "nameEn": "Glyphosate",
      "category": "제초제",
      "tolerance": "다양 (작물별 상이)",
      "appliesTo": ["곡물", "콩", "옥수수"],
      "status": "FDA 승인",
      "healthRisk": "발암 가능성 논란"
    }
  ],
  "microbiological": [
    {
      "name": "살모넬라 (Salmonella)",
      "nameEn": "Salmonella",
      "category": "병원성 세균",
      "limit": "불검출 (25g 당)",
      "appliesTo": ["육류", "가금류", "계란"],
      "healthRisk": "식중독, 발열, 설사",
      "severity": "높음"
    },
    {
      "name": "대장균 O157:H7 (E. coli O157:H7)",
      "nameEn": "E. coli O157:H7",
      "category": "병원성 세균",
      "limit": "불검출",
      "appliesTo": ["소고기", "생채소", "비살균 주스"],
      "healthRisk": "용혈성 요독 증후군, 신부전",
      "severity": "높음"
    },
    {
      "name": "리스테리아 (Listeria monocytogenes)",
      "nameEn": "Listeria monocytogenes",
      "category": "병원성 세균",
      "limit": "불검출 (즉석섭취식품)",
      "appliesTo": ["유제품", "델리미트", "해산물"],
      "healthRisk": "패혈증, 수막염, 임산부 유산 위험",
      "severity": "높음"
    }
  ],
  "allergens": [
    {
      "name": "우유",
      "nameEn": "Milk",
      "category": "주요 알레르겐",
      "requirement": "라벨 표시 의무",
      "notes": "유당불내증과 우유 알레르기는 다름"
    },
    {
      "name": "계란",
      "nameEn": "Eggs",
      "category": "주요 알레르겐",
      "requirement": "라벨 표시 의무",
      "notes": "백신 제조에도 사용될 수 있음"
    },
    {
      "name": "땅콩",
      "nameEn": "Peanuts",
      "category": "주요 알레르겐",
      "requirement": "라벨 표시 의무",
      "notes": "심각한 아나필락시스 반응 가능"
    },
    {
      "name": "견과류",
      "nameEn": "Tree nuts",
      "category": "주요 알레르겐",
      "requirement": "라벨 표시 의무",
      "notes": "아몬드, 호두, 캐슈넛 등 포함"
    },
    {
      "name": "밀",
      "nameEn": "Wheat",
      "category": "주요 알레르겐",
      "requirement": "라벨 표시 의무",
      "notes": "셀리악병 환자 주의"
    },
    {
      "name": "대두",
      "nameEn": "Soy",
      "category": "주요 알레르겐",
      "requirement": "라벨 표시 의무",
      "notes": "다양한 가공식품에 포함"
    },
    {
      "name": "어류",
      "nameEn": "Fish",
      "category": "주요 알레르겐",
      "requirement": "라벨 표시 의무",
      "notes": "특정 어종 명시 필요"
    },
    {
      "name": "갑각류",
      "nameEn": "Shellfish",
      "category": "주요 알레르겐",
      "requirement": "라벨 표시 의무",
      "notes": "새우, 게, 랍스터 등"
    }
  ],
  "contaminants": [
    {
      "name": "아플라톡신 (Aflatoxin)",
      "nameEn": "Aflatoxin",
      "category": "곰팡이 독소",
      "limit": "20 ppb (총 아플라톡신)",
      "appliesTo": ["견과류", "곡물", "옥수수"],
      "healthRisk": "간암, 간 손상",
      "severity": "높음"
    },
    {
      "name": "멜라민 (Melamine)",
      "nameEn": "Melamine",
      "category": "산업 화학물질",
      "limit": "2.5 ppm (영유아 조제식)",
      "appliesTo": ["유제품", "영유아식품"],
      "healthRisk": "신장 손상, 신장 결석",
      "severity": "높음"
    },
    {
      "name": "다이옥신 (Dioxins)",
      "nameEn": "Dioxins",
      "category": "환경 오염물질",
      "limit": "매우 낮은 수준",
      "appliesTo": ["육류", "유제품", "어류"],
      "healthRisk": "발암물질, 내분비계 장애",
      "severity": "높음"
    }
  ]
};
