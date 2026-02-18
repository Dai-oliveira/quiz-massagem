const questions = [
  {
    text: "No final do dia, voce sente as pernas pesadas ou inchadas?",
    options: [
      { label: "Quase sempre", score: { drenagem: 3, modeladora: 0, relaxante: 1 } },
      { label: "As vezes", score: { drenagem: 2, modeladora: 0, relaxante: 1 } },
      { label: "Raramente", score: { drenagem: 1, modeladora: 0, relaxante: 0 } },
      { label: "Nao sinto", score: { drenagem: 0, modeladora: 0, relaxante: 0 } }
    ]
  },
  {
    text: "Seu principal objetivo hoje e:",
    options: [
      { label: "Reduzir inchaco", score: { drenagem: 3, modeladora: 0, relaxante: 1 } },
      { label: "Melhorar contorno corporal", score: { drenagem: 0, modeladora: 3, relaxante: 0 } },
      { label: "Aliviar tensao e dor", score: { drenagem: 0, modeladora: 0, relaxante: 3 } },
      { label: "Um pouco de tudo", score: { drenagem: 1, modeladora: 1, relaxante: 1 } }
    ]
  },
  {
    text: "Voce percebe areas de gordura localizada que incomodam?",
    options: [
      { label: "Sim, bastante", score: { drenagem: 0, modeladora: 3, relaxante: 0 } },
      { label: "Sim, moderado", score: { drenagem: 0, modeladora: 2, relaxante: 0 } },
      { label: "Pouco", score: { drenagem: 0, modeladora: 1, relaxante: 0 } },
      { label: "Nao", score: { drenagem: 0, modeladora: 0, relaxante: 0 } }
    ]
  },
  {
    text: "Com que frequencia voce sente dores musculares (ombros, pescoco, costas)?",
    options: [
      { label: "Quase todos os dias", score: { drenagem: 0, modeladora: 0, relaxante: 3 } },
      { label: "2 a 3 vezes por semana", score: { drenagem: 0, modeladora: 0, relaxante: 2 } },
      { label: "As vezes", score: { drenagem: 0, modeladora: 0, relaxante: 1 } },
      { label: "Quase nunca", score: { drenagem: 0, modeladora: 0, relaxante: 0 } }
    ]
  },
  {
    text: "Sua rotina envolve muito tempo sentada(o) ou em pe?",
    options: [
      { label: "Sim, por muitas horas", score: { drenagem: 2, modeladora: 1, relaxante: 1 } },
      { label: "Sim, mas com pausas", score: { drenagem: 1, modeladora: 1, relaxante: 1 } },
      { label: "Nao muito", score: { drenagem: 0, modeladora: 0, relaxante: 0 } },
      { label: "Nao", score: { drenagem: 0, modeladora: 0, relaxante: 0 } }
    ]
  },
  {
    text: "Como voce se sente hoje no nivel de estresse?",
    options: [
      { label: "Muito estressada(o)", score: { drenagem: 0, modeladora: 0, relaxante: 3 } },
      { label: "Moderado", score: { drenagem: 0, modeladora: 0, relaxante: 2 } },
      { label: "Leve", score: { drenagem: 0, modeladora: 0, relaxante: 1 } },
      { label: "Tranquila(o)", score: { drenagem: 0, modeladora: 0, relaxante: 0 } }
    ]
  },
  {
    text: "Voce nota retencao de liquido em abdome, maos ou rosto?",
    options: [
      { label: "Sim, com frequencia", score: { drenagem: 3, modeladora: 0, relaxante: 0 } },
      { label: "As vezes", score: { drenagem: 2, modeladora: 0, relaxante: 0 } },
      { label: "Raramente", score: { drenagem: 1, modeladora: 0, relaxante: 0 } },
      { label: "Nao", score: { drenagem: 0, modeladora: 0, relaxante: 0 } }
    ]
  },
  {
    text: "Que resultado voce quer sentir logo apos a sessao?",
    options: [
      { label: "Corpo mais leve", score: { drenagem: 3, modeladora: 0, relaxante: 1 } },
      { label: "Silhueta mais definida", score: { drenagem: 0, modeladora: 3, relaxante: 0 } },
      { label: "Corpo e mente relaxados", score: { drenagem: 0, modeladora: 0, relaxante: 3 } },
      { label: "Equilibrio geral", score: { drenagem: 1, modeladora: 1, relaxante: 1 } }
    ]
  }
];

const profiles = {
  drenagem: {
    title: "Drenagem Linfatica",
    description:
      "Seu perfil indica tendencia a retencao de liquidos e sensacao de inchaco. A drenagem ajuda a desinchar e trazer leveza.",
    extra:
      "Foco: melhorar circulacao linfatica, aliviar peso nas pernas e reduzir inchaco geral."
  },
  modeladora: {
    title: "Massagem Modeladora",
    description:
      "Seu objetivo principal parece ser contorno corporal e tratamento de gordura localizada.",
    extra:
      "Foco: estimular tecido local, melhorar aspecto da pele e apoiar definicao da silhueta."
  },
  relaxante: {
    title: "Massagem Relaxante / Terapia de Tensao",
    description:
      "Seu resultado sugere alta carga de estresse e tensao muscular. O ideal e uma sessao voltada para alivio de dor e relaxamento profundo.",
    extra:
      "Foco: soltar musculatura, reduzir tensao em ombros/costas e promover bem-estar mental."
  },
  combinado: {
    title: "Protocolo Personalizado",
    description:
      "Seu perfil ficou equilibrado entre mais de uma necessidade. A melhor opcao e combinar tecnicas na mesma sessao.",
    extra:
      "Sugestao: iniciar com drenagem ou relaxamento e finalizar com tecnicas localizadas, conforme avaliacao presencial."
  }
};

const questionText = document.getElementById("questionText");
const questionCounter = document.getElementById("questionCounter");
const optionsContainer = document.getElementById("options");
const progressFill = document.getElementById("progressFill");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

const quizCard = document.getElementById("quizCard");
const resultCard = document.getElementById("resultCard");
const resultTitle = document.getElementById("resultTitle");
const resultDescription = document.getElementById("resultDescription");
const resultExtra = document.getElementById("resultExtra");
const ctaLink = document.getElementById("ctaLink");
const restartBtn = document.getElementById("restartBtn");

let current = 0;
const answers = Array(questions.length).fill(null);

function animateIn(element) {
  element.classList.remove("is-visible");
  requestAnimationFrame(() => {
    element.classList.add("is-visible");
  });
}

function switchScreen(from, to) {
  from.classList.remove("is-visible");
  setTimeout(() => {
    from.classList.add("hidden");
    to.classList.remove("hidden");
    animateIn(to);
  }, 180);
}

function renderQuestion() {
  const q = questions[current];
  const selected = answers[current];

  questionCounter.textContent = `Pergunta ${current + 1} de ${questions.length}`;
  questionText.textContent = q.text;

  const progress = Math.round(((current + 1) / questions.length) * 100);
  progressFill.style.width = `${progress}%`;
  progressFill.parentElement.setAttribute("aria-valuenow", String(progress));

  optionsContainer.innerHTML = "";

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.textContent = option.label;

    if (selected === index) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      answers[current] = index;
      [...optionsContainer.children].forEach((el) => el.classList.remove("active"));
      button.classList.add("active");
      nextBtn.disabled = false;
    });

    optionsContainer.appendChild(button);
  });

  backBtn.disabled = current === 0;
  nextBtn.disabled = selected === null;
  nextBtn.textContent = current === questions.length - 1 ? "Ver resultado" : "Proxima";
  animateIn(quizCard);
}

function getRecommendation() {
  const score = {
    drenagem: 0,
    modeladora: 0,
    relaxante: 0
  };

  answers.forEach((answer, i) => {
    const chosen = questions[i].options[answer];
    if (!chosen) return;

    score.drenagem += chosen.score.drenagem;
    score.modeladora += chosen.score.modeladora;
    score.relaxante += chosen.score.relaxante;
  });

  const ranking = Object.entries(score).sort((a, b) => b[1] - a[1]);
  const [first, second] = ranking;

  if (first[1] === second[1]) {
    return { key: "combinado", score };
  }

  return { key: first[0], score };
}

function showResult() {
  const { key, score } = getRecommendation();
  const profile = profiles[key];

  resultTitle.textContent = profile.title;
  resultDescription.textContent = profile.description;
  resultExtra.textContent = `Atendimento recomendado por Daiani Oliveira. ${profile.extra} Pontuacao -> Drenagem: ${score.drenagem} | Modeladora: ${score.modeladora} | Relaxante: ${score.relaxante}.`;

  const message = encodeURIComponent(
    `Oi! Fiz o quiz e meu resultado foi: ${profile.title}. Quero agendar uma avaliacao com Daiani Oliveira.`
  );

  ctaLink.href = `https://wa.me/55996052565?text=${message}`;
  ctaLink.textContent = "Falar com Daiani no WhatsApp";

  switchScreen(quizCard, resultCard);
}

nextBtn.addEventListener("click", () => {
  if (answers[current] === null) return;

  if (current === questions.length - 1) {
    showResult();
    return;
  }

  current += 1;
  renderQuestion();
});

backBtn.addEventListener("click", () => {
  if (current === 0) return;
  current -= 1;
  renderQuestion();
});

restartBtn.addEventListener("click", () => {
  current = 0;
  answers.fill(null);
  switchScreen(resultCard, quizCard);
  renderQuestion();
});

quizCard.classList.add("screen-animate");
resultCard.classList.add("screen-animate");
renderQuestion();
