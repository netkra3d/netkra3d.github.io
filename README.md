# GitHub Pages Developer Portfolio Template

순수 `HTML/CSS/JS`로 만든 싱글 페이지 개발자 포트폴리오 템플릿입니다.

## 파일 구성

- `index.html`: 섹션 기반 단일 페이지 구조
- `styles.css`: 반응형 레이아웃, 테마, 애니메이션
- `script.js`: 스킬/프로젝트 동적 렌더링, 모바일 메뉴, 스크롤 리빌

## 커스터마이징

1. `index.html`
   - 이름, 소개 문구, About/Experience/Contact 텍스트를 본인 정보로 교체
2. `script.js`
   - `skills` 배열과 `projects` 배열을 실제 데이터로 교체
   - 프로젝트 `demoUrl`, `repoUrl` 링크 업데이트
3. `index.html` Contact 섹션
   - 이메일, GitHub, LinkedIn 링크를 실제 계정으로 교체

## 로컬 확인

정적 서버로 확인하는 것이 안전합니다.

```bash
# Python이 있다면
python -m http.server 5500
```

브라우저에서 `http://localhost:5500` 접속 후 UI/링크/반응형을 점검하세요.

## GitHub Pages 배포 (User Site)

대상 주소: `https://<username>.github.io`

1. GitHub에서 새 레포지토리 생성: 이름을 정확히 `<username>.github.io`로 생성
2. 로컬에서 초기화 및 푸시

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<username>/<username>.github.io.git
git push -u origin main
```

3. GitHub 레포지토리 `Settings > Pages`
   - `Build and deployment`의 `Source`를 `Deploy from a branch`
   - `Branch`를 `main` / `/ (root)`로 선택
4. 1~5분 뒤 `https://<username>.github.io` 접속 확인

## 체크리스트

- 360px / 768px / 1024px / 1440px 반응형 확인
- 콘솔 에러 0건 확인
- 외부 링크/메일 링크 동작 확인
- Lighthouse 85+ 목표
