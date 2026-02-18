const questions = [
  {
    text: "No final do dia, você sente as pernas pesadas ou inchadas?",
    options: [
      { label: "Quase sempre", score: { drenagem: 3, modeladora: 0, relaxante: 1 } },
      { label: "Às vezes", score: { drenagem: 2, modeladora: 0, relaxante: 1 } },
      { label: "Raramente", score: { drenagem: 1, modeladora: 0, relaxante: 0 } },
      { label: "Não sinto", score: { drenagem: 0, modeladora: 0, relaxante: 0 } }
    ]
  },
  {
    text: "Seu principal objetivo hoje é:",
    options: [
      { label: "Reduzir inchaço", score: { drenagem: 3, modeladora: 0, relaxante: 1 } },
      { label: "Melhorar contorno corporal", score: { drenagem: 0, modeladora: 3, relaxante: 0 } },
      { label: "Aliviar tensão e dor", score: { drenagem: 0, modeladora: 0, relaxante: 3 } },
      { label: "Um pouco de tudo", score: { drenagem: 1, modeladora: 1, relaxante: 1 } }
    ]
  },
  {
    text: "Você percebe áreas de gordura localizada que incomodam?",
    options: [
      { label: "Sim, bastante", score: { drenagem: 0, modeladora: 3, relaxante: 0 } },
      { label: "Sim, moderado", score: { drenagem: 0, modeladora: 2, relaxante: 0 } },
      { label: "Pouco", score: { drenagem: 0, modeladora: 1, relaxante: 0 } },
      { label: "Não", score: { drenagem: 0, modeladora: 0, relaxante: 0 } }
    ]
  },
  {
    text: "Com que frequência você sente dores musculares (ombros, pescoço, costas)?",
    options: [
      { label: "Quase todos os dias", score: { drenagem: 0, modeladora: 0, relaxante: 3 } },
      { label: "2 a 3 vezes por semana", score: { drenagem: 0, modeladora: 0, relaxante: 2 } },
      { label: "Às vezes", score: { drenagem: 0, modeladora: 0, relaxante: 1 } },
      { label: "Quase nunca", score: { drenagem: 0, modeladora: 0, relaxante: 0 } }
    ]
  },
  {
    text: "Sua rotina envolve muito tempo sentada(o) ou em pé?",
    options: [
      { label: "Sim, por muitas horas", score: { drenagem: 2, modeladora: 1, relaxante: 1 } },
      { label: "Sim, mas com pausas", score: { drenagem: 1, modeladora: 1, relaxante: 1 } },
      { label: "Não muito", score: { drenagem: 0, modeladora: 0, relaxante: 0 } },
      { label: "Não", score: { drenagem: 0, modeladora: 0, relaxante: 0 } }
    ]
  },
  {
    text: "Como você se sente hoje no nível de estresse?",
    options: [
      { label: "Muito estressada(o)", score: { drenagem: 0, modeladora: 0, relaxante: 3 } },
      { label: "Moderado", score: { drenagem: 0, modeladora: 0, relaxante: 2 } },
      { label: "Leve", score: { drenagem: 0, modeladora: 0, relaxante: 1 } },
      { label: "Tranquila(o)", score: { drenagem: 0, modeladora: 0, relaxante: 0 } }
    ]
  },
  {
    text: "Você nota retenção de líquido em abdômen, mãos ou rosto?",
    options: [
      { label: "Sim, com frequência", score: { drenagem: 3, modeladora: 0, relaxante: 0 } },
      { label: "Às vezes", score: { drenagem: 2, modeladora: 0, relaxante: 0 } },
      { label: "Raramente", score: { drenagem: 1, modeladora: 0, relaxante: 0 } },
      { label: "Não", score: { drenagem: 0, modeladora: 0, relaxante: 0 } }
    ]
  },
  {
    text: "Que resultado você quer sentir logo após a sessão?",
    options: [
      { label: "Corpo mais leve", score: { drenagem: 3, modeladora: 0, relaxante: 1 } },
      { label: "Silhueta mais definida", score: { drenagem: 0, modeladora: 3, relaxante: 0 } },
      { label: "Corpo e mente relaxados", score: { drenagem: 0, modeladora: 0, relaxante: 3 } },
      { label: "Equilíbrio geral", score: { drenagem: 1, modeladora: 1, relaxante: 1 } }
    ]
  }
];

const profiles = {
  drenagem: {
    title: "Drenagem Linfática",
    description:
      "Seu perfil indica tendência à retenção de líquidos e sensação de inchaço. A drenagem ajuda a desinchar e trazer leveza.",
    extra:
      "Foco: melhorar a circulação linfática, aliviar peso nas pernas e reduzir inchaço geral.",
    tips: [
      "Mantenha boa hidratação ao longo do dia.",
      "Pratique caminhadas leves para estimular a circulação.",
      "Evite excesso de sal para reduzir retenção de líquidos."
    ]
  },
  modeladora: {
    title: "Massagem Modeladora",
    description:
      "Seu objetivo principal parece ser contorno corporal e tratamento de gordura localizada.",
    extra:
      "Foco: estimular tecido local, melhorar aspecto da pele e apoiar definição da silhueta.",
    tips: [
      "Combine as sessões com exercícios de força e cardio.",
      "Priorize uma alimentação equilibrada e rica em fibras.",
      "Mantenha regularidade nas sessões para melhores resultados."
    ]
  },
  relaxante: {
    title: "Massagem Relaxante / Terapia de Tensão",
    description:
      "Seu resultado sugere alta carga de estresse e tensão muscular. O ideal é uma sessão voltada para alívio de dor e relaxamento profundo.",
    extra:
      "Foco: soltar musculatura, reduzir tensão em ombros/costas e promover bem-estar mental.",
    tips: [
      "Inclua pausas curtas de respiração durante o dia.",
      "Faça alongamentos de pescoço, ombros e costas diariamente.",
      "Mantenha rotina de sono para reduzir tensão e cansaço."
    ]
  },
  combinado: {
    title: "Protocolo Personalizado",
    description:
      "Seu perfil ficou equilibrado entre mais de uma necessidade. A melhor opção é combinar técnicas na mesma sessão.",
    extra:
      "Sugestão: iniciar com drenagem ou relaxamento e finalizar com técnicas localizadas, conforme avaliação presencial.",
    tips: [
      "Alterne entre foco estético e relaxamento conforme sua semana.",
      "Cuide da hidratação, alimentação e qualidade do sono.",
      "Siga um plano personalizado de sessões para evolução contínua."
    ]
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
const resultTips = document.getElementById("resultTips");
const ctaLink = document.getElementById("ctaLink");
const restartBtn = document.getElementById("restartBtn");

let current = 0;
const answers = Array(questions.length).fill(null);
const scoreMax = {
  drenagem: 14,
  modeladora: 10,
  relaxante: 14
};

function toScale10(value, max) {
  const normalized = Math.round((value / max) * 9) + 1;
  return Math.max(1, Math.min(10, normalized));
}

function getLevelLabel(value10) {
  if (value10 <= 3) return "Leve";
  if (value10 <= 6) return "Moderado";
  if (value10 <= 8) return "Alto";
  return "Muito alto";
}

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
  nextBtn.textContent = current === questions.length - 1 ? "Ver resultado" : "Próxima";
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
  const score10 = {
    drenagem: toScale10(score.drenagem, scoreMax.drenagem),
    modeladora: toScale10(score.modeladora, scoreMax.modeladora),
    relaxante: toScale10(score.relaxante, scoreMax.relaxante)
  };

  let dominantKey = key;
  if (key === "combinado") {
    dominantKey = Object.entries(score10).sort((a, b) => b[1] - a[1])[0][0];
  }

  const levelLabel = getLevelLabel(score10[dominantKey]);

  resultTitle.textContent = profile.title;
  resultDescription.textContent = profile.description;
  resultExtra.textContent = `Atendimento recomendado por Daiani Oliveira. ${profile.extra} Pontuação (1 a 10) -> Drenagem: ${score10.drenagem}/10 | Modeladora: ${score10.modeladora}/10 | Relaxante: ${score10.relaxante}/10. Seu nível é ${levelLabel}.`;
  resultTips.innerHTML = "";
  profile.tips.forEach((tip) => {
    const li = document.createElement("li");
    li.textContent = tip;
    resultTips.appendChild(li);
  });

  const message = encodeURIComponent(
    `Oi! Fiz o quiz e meu resultado foi: ${profile.title}. Quero agendar uma avaliação com Daiani Oliveira.`
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
