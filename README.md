# 레이블케어 (RABLE CARE) — 공식 웹사이트

핸드레일·난간·장애인 편의시설 전문 시공 기업 **레이블케어**의 반응형 B2B 웹사이트입니다.

여러 디자인 시안(Claude Design 2종 · Claude Cowork 2종)을 렌더링·정량 비교한 결과
**다크 차콜 + 브론즈 골드의 프리미엄 에디토리얼 시안**을 최종안으로 채택했습니다.

## 구성
- `index.html` — 메인 / 회사소개 / 제품소개 / 시공사례(+상세) / 상담·견적 (단일 파일, 클라이언트 사이드 라우팅)
- `support.js` — 렌더링 런타임 (`index.html`이 참조하므로 같은 폴더에 있어야 함)
- `vendor/` — React 18 UMD 번들 (외부 CDN 의존 제거를 위해 자체 호스팅)
- `.github/workflows/deploy-pages.yml` — GitHub Pages 자동 배포

## 로컬에서 보기
`index.html`을 브라우저로 열면 됩니다.

## 배포 (GitHub Pages)
브랜치에 push하면 워크플로가 자동으로 Pages를 활성화·배포합니다.
배포 후 주소: `https://greencar-uxd.github.io/rable-care/`

## 접근성 보강 (배포본에서 추가)
- `<html lang="ko">` 명시
- `prefers-reduced-motion` 대응 (모션 최소화 설정 존중)
- React 자체 호스팅으로 외부 CDN 다운 시에도 동작

## 참고
- 폰트: Pretendard, IBM Plex Mono (CDN 로드)
- 사진 · 로고 · 연혁 · 인증 · 거래처 · 전화/카카오톡/네이버 톡톡 등은 **예시 플레이스홀더**입니다. 실제 자료로 교체하세요.
- 사업자: 레이블케어(Rable Care) · 사업자등록번호 203-26-13536 · rablecare@naver.com · 인천 연수구 아카데미로312번길 177
