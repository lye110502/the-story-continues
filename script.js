let like = 50;

const title = document.getElementById("title");
const text = document.getElementById("text");
const choices = document.getElementById("choices");
const score = document.getElementById("score");

function updateScore() {
  if (like > 100) like = 100;
  if (like < 0) like = 0;
  score.textContent = `호감도 ${like}`;
}

function showScene(scene) {
  title.textContent = scene.title;
  text.textContent = scene.text;
  choices.innerHTML = "";

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");

    if (choice.img) {
      const img = document.createElement("img");
      img.src = choice.img;
      img.className = "choice-img";
      btn.appendChild(img);
    }

    const span = document.createElement("span");
    span.textContent = choice.text;
    btn.appendChild(span);

    btn.onclick = () => {
      like += choice.like || 0;
      updateScore();
      showScene(scenes[choice.next]);
    };

    choices.appendChild(btn);
  });
}

const scenes = {
  start: {
    title: "이준희의 선택",
    text: `2026년 어느 날.

오늘은 날씨가 아~~주 좋은 날이다.

하지만 준희는 축구가 하고 싶은 날이고 두 가지 선택지가 있다.`,
    choices: [
      { text: "⚽ 축구하러 간다", next: "soccer", like: -5 },
      { text: "❤️ 예은이를 만나러 간다", next: "date", like: 15 }
    ]
  },

  soccer: {
    title: "축구장 엔딩?",
    text: `준희는 축구장으로 향했다.

공은 잘 차고 있는데...
이상하게 휴대폰이 신경 쓰인다.

예은이한테 연락할까?`,
    choices: [
      { text: "📱 지금 바로 연락한다", next: "contact", like: 15 },
      { text: "😎 일단 경기 끝나고 연락한다", next: "late", like: -15 }
    ]
  },

  contact: {
    title: "다행이다",
    text: `준희:
"예은아 나 축구 끝나고 바로 갈게!"

예은:
"웅 재밌게 하구 와ㅎㅎ"

예은이는 생각보다 안 삐졌다.`,
    choices: [
      { text: "끝나고 예은이 만나러 가기", next: "date", like: 10 }
    ]
  },

  late: {
    title: "비상사태.",
    text: `축구가 끝났다.

휴대폰을 보니 예은이에게서 연락이 와 있었다.

예은:
"연락이 없네..."

공기가 차가워졌다.`,
    choices: [
      { text: "미안하다고 전화하기", next: "apology", like: 10 },
      { text: "왜 그래?", next: "bad", like: -30 }
    ]
  },

  apology: {
    title: "화해 성공",
    text: `준희:
"미안해ㅠㅠ 바로 연락했어야 했는데"

예은:
"알겠어. 대신 맛있는 거 사줘."

위기를 넘겼다.`,
    choices: [
      { text: "맛집 데이트 하러 가기", next: "food", like: 15 }
    ]
  },

  date: {
    title: "데이트 시작",
    text: `준희는 예은이를 만나러 갔다.

예은이는 이미 배가 고파 보인다.

지금 가장 중요한 선택은?`,
    choices: [
      { text: "🍜 밥부터 먹자", next: "food", like: 20 },
      { text: "☕ 카페부터 가서 더위 좀 식히자", next: "cafe", like: 5 },
      { text: "🛌 집 가서 쉬자", next: "restEnd", like: -20 },
      { text: "🤔 아무거나 먹자", next: "bad", like: -40 }
    ]
  },

  food: {
    title: "메뉴 선택",
    text: `예은:
"뭐 먹으까?"

이 질문은 쉬워 보이지만
신중하게 골라야할 것 같다!!`,
    choices: [
      { text: "🍕 피자", next: "goodFood", like: 15 },
      { text: "🍜 샤브샤브", next: "goodFood", like: 20 },
      { text: "🍜 쿠우쿠우", next: "goodFood", like: 20 },
      { text: "🤷 아무거나", next: "bad", like: -50 }
    ]
  },

  goodFood: {
    title: "완벽한 선택",
    text: `예은이는 만족스럽게 밥을 먹었다.

호감도가 크게 상승했다.

이제 다음 코스는?`,
    choices: [
      { text: "☕ 느좋 카페 가기", next: "cafe", like: 10 },
      { text: "📸 사진 찍기", next: "photo", like: 15 }
    ]
  },

  cafe: {
    title: "카페 데이트",
    text: `둘은 카페에 도착했다.

예은이가 디저트를 보고 있다.

준희의 선택은?`,
    choices: [
      { text: "🍰 먹고 싶은 거 다 골라!!", next: "photo", like: 20 },
      { text: "🛌 살쪘는데 괜찮아?", next: "restEnd", like: -30 },
      { text: "💸 배부르니까 안 먹어도 되지?", next: "bad", like: -30 }
    ]
  },

  photo: {
    title: "사진 찍기",
    text: `예은:
"사진 찍자!"

준희는 어떻게 반응할까?`,
    choices: [
      { text: "📸 바로 포즈 잡기", next: "finalCheck", like: 20 },
      { text: "😐 아 오늘 얼굴 별로..", next: "normal", like: -10 },
      { text: "👻 난 영혼을 사진에 뺏겨", next: "soulEnd", like: -5 }
    ]
  },

  soulEnd: {
    title: "SECRET BAD END",
    text: `예은:
"사진 찍자!"

준희:
"난 영혼을 사진에 뺏겨."

...

예은:
"뭐라는 거야?"

SYSTEM:
논리 오류 발생

게임 강제 종료

획득 업적:
🏆 영혼 수호자`,
    choices: [
      { text: "다시 도전하기", next: "start" }
    ]
  },

  restEnd: {
    title: "HIDDEN END",
    text: `준희:
"집 가서 쉬자."

...

2028년

준희는 아직도 쉬고 있다.

획득 업적:
🏆 휴식의 신`,
    choices: [
      { text: "다시 도전하기", next: "start" }
    ]
  },

  finalCheck: {
    title: "마지막 선택",
    text: `데이트가 끝나갈 때쯤
예은이가 묻는다.

"오늘 어땠어?"`,
    choices: [
      { text: "❤️ 너랑 있어서 완전 좋았어", next: "trueEnd", like: 30 },
      { text: "👍 괜찮았어", next: "normal", like: 0 },
      { text: "⚽ 축구가 더 재밌었어", next: "legendBad", like: -100 }
    ]
  },

  trueEnd: {
    title: "TRUE END",
    text: `주니야!! 너는 최고의남자친구야!!

호감도: 100/100

획득 업적:
🏆 최고의 남자친구
🏆 연락 잘하는 사람
🏆 메뉴 결정왕
🏆 예은이 잘 놀아주기

그리고...`,
    choices: [
      { text: "▶ Continue...", next: "continue" }
    ]
  },

  continue: {
    title: "현실 세계에서 계속",
    text: `현재 진행 중인 게임:

이준희 ♥ 이예은

진행률:
아직 끝나지 않음

다음 챕터:
우리의 다음 데이트`,
    choices: [
      { text: "처음부터 다시 하기", next: "start" }
    ]
  },

  normal: {
    title: "NORMAL END",
    text: `오늘도 나쁘지 않은 하루였다.

하지만 아직 TRUE END는 아니다.

예은이를 더 행복하게 만들 방법이 있을지도?`,
    choices: [
      { text: "다시 도전하기", next: "start" }
    ]
  },

  bad: {
    title: "BAD END",
    text: `예은이가 삐졌습니다.

원인:
- 아무거나 발언
- 연락 늦음
- 센스 부족

해결 방법:
맛있는 거 사주기.`,
    choices: [
      { text: "다시 도전하기", next: "start" }
    ]
  },

  legendBad: {
    title: "LEGENDARY BAD END",
    text: `그의 마지막 기록

패스 성공률: 99%
연애 성공률: 0%

축구는 남았지만
여자친구는 남지 않았다.`,
    choices: [
      { text: "다시 도전하기", next: "start" }
    ]
  }
};

updateScore();
showScene(scenes.start);
