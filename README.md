# 레이블케어 (RABLE CARE) — 웹사이트 디자인 시안

핸드레일·난간·장애인 편의시설 전문 시공 기업 **레이블케어**의 웹사이트 디자인 시안 저장소입니다.
두 가지 디자인 컨셉을 **허브(랜딩) 페이지**에서 미리보고 각 실제 페이지로 이동할 수 있습니다.

## 라이브
- **허브(진입점)**: `https://greencar-uxd.github.io/rable-care/`
- 컨셉 01 · 블루 기업형: `https://greencar-uxd.github.io/rable-care/corporate/`
- 컨셉 02 · 브론즈 프리미엄: `https://greencar-uxd.github.io/rable-care/editorial/`

## 구조
```
/                     허브 페이지 (두 컨셉 미리보기 · 링크)
  index.html          다크 에디토리얼 랜딩, 브라우저 프레임 프리뷰 카드 2종
  assets/             각 시안 미리보기 썸네일(실제 렌더 캡처)
  favicon.*           허브 파비콘 (레이블케어 브랜드 마크)

/corporate/           컨셉 01 · 블루 기업형 (정적 6페이지)
  index.html = rable_index.html, rable_*.html, rable_style.css, rable.js

/editorial/           컨셉 02 · 브론즈 프리미엄 (단일 파일 SPA + React 런타임)
  index.html, support.js, vendor/(React 18 UMD 자체 호스팅·SRI)

.nojekyll             Jekyll 빌드 우회
```

## 배포
GitHub Pages **Deploy from a branch** (`claude/design-mockup-comparison-z9e5gw` / root).
브랜치에 push하면 `pages build and deployment`가 자동 재배포합니다.

## 접근성
- 전 페이지 `<html lang="ko">`, `prefers-reduced-motion` 대응
- 허브: 시맨틱 랜드마크(header/main/footer), focus-visible, 이미지 alt
- 브론즈 시안: React 자체 호스팅으로 외부 CDN 다운 시에도 동작, 실적 카운터 항상 최종값 표시

## 참고
- 폰트: Pretendard, IBM Plex Mono (CDN)
- 사진·로고·연혁·인증·거래처·전화(현재 1600-0000)·카카오톡/네이버 톡톡 링크 등은 **예시 플레이스홀더**입니다. 실제 자료로 교체하세요.
- 시공사례명은 전부 `○○` 익명 처리 (실제 확인된 실적만 실명 허용).
- 사업자: 레이블케어(Rable Care) · 203-26-13536 · rablecare@naver.com · 인천 연수구 아카데미로312번길 177
- 제작: DNL STUDIO
