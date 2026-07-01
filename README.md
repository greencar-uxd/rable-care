# 레이블케어 (RABLE CARE) — 웹사이트 시안 (타입별 최우수안 2종)

핸드레일·난간·장애인 편의시설 전문 시공 기업 **레이블케어**의 반응형 B2B 웹사이트.

4개 시안(Claude Design 2종 · Claude Cowork 2종)을 렌더링·정량 루브릭으로 비교한 뒤,
**2가지 디자인 타입에서 각각 1위**를 골라 배포했습니다.

## 배포된 2타입 (GitHub Pages)
| 타입 | 채택안 | 종합점수 | 주소 |
|------|--------|:-------:|------|
| **에디토리얼** (다크 차콜 + 브론즈 골드) | cowork2 | **8.14** | `https://greencar-uxd.github.io/rable-care/` |
| **블루 기업형** (다크 네이비 + 블루) | design1 | 7.17 | `https://greencar-uxd.github.io/rable-care/corporate/` |

## 구성
```
/                      에디토리얼 타입 (cowork2) — 단일 파일 SPA + React 런타임
  index.html           메인/회사소개/제품/시공사례/상담 (클라이언트 사이드 라우팅)
  support.js           렌더링 런타임
  vendor/              React 18 UMD 자체 호스팅 (외부 CDN 의존 제거, SRI 유지)
/corporate/            블루 기업형 타입 (design1) — 정적 6페이지
  index.html           = rable_index.html (메인)
  rable_*.html         회사소개/제품/시공사례/상세/상담
  rable_style.css, rable.js
.nojekyll              Jekyll 빌드 우회
```

## 배포 방식
GitHub Pages **Deploy from a branch** (`claude/design-mockup-comparison-z9e5gw` / root).
브랜치에 push하면 `pages build and deployment`가 자동 재배포합니다.

## 접근성 보강 (에디토리얼 타입 배포본)
- `<html lang="ko">` 명시 · `prefers-reduced-motion` 대응 · React 자체 호스팅

## 참고
- 폰트: Pretendard, IBM Plex Mono (CDN)
- 사진·로고·연혁·인증·거래처·전화/카카오톡/네이버 톡톡 등은 **예시 플레이스홀더**입니다. 실제 자료로 교체하세요.
- 사업자: 레이블케어(Rable Care) · 사업자등록번호 203-26-13536 · rablecare@naver.com · 인천 연수구 아카데미로312번길 177
