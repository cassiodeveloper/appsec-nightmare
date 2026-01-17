// ===== i18n =====
  const I18N = {
    en: {
      "nav.tag": "3-day intervention",
      "nav.what": "What",
      "nav.days": "3 days",
      "nav.statements": "Statements",
      "nav.leave": "Outcomes",
      "nav.cta": "Book",

      "hero.kicker": "Reality-first secure delivery",
      "hero.titleA": "AppSec",
      "hero.titleB": "Nightmare",
      "hero.subtitle": "A 3-day secure development intervention. No slides. No excuses. Real fixes.",

      "what.title": "What it is",
      "what.body": "This is not a maturity model, a framework rollout, or a checkbox exercise. It's a controlled collision with reality for teams shipping insecure software without noticing.",
      "what.small": "We focus on what runs: SDLC as practiced, CI/CD as configured, and risk as experienced in production.",

      "days.title": "The 3 Days",
      "days.subtitle": "Three moves: diagnose, reprogram, fix. Everything tied to your stack and your pipeline.",
      "days.d1.k": "Day 1",
      "days.d1.t": "The Autopsy",
      "days.d1.b": "We dissect your SDLC, pipeline, code and decisions. What is written is ignored. What runs is analyzed.",
      "days.d2.k": "Day 2",
      "days.d2.t": "The Confrontation",
      "days.d2.b": "Targeted training based on real failures. Secure coding, threat modeling and AppSec mechanics applied to your system.",
      "days.d3.k": "Day 3",
      "days.d3.t": "The Fix",
      "days.d3.b": "Pipelines adjusted. Rules defined. Flows implemented. Everything validated in CI, not in theory.",

      "statements.title": "Statements",
      "statements.subtitle": "Quick truths your pipeline won't tell you. Shuffle until it hurts.",
      "statements.shuffle": "Shuffle",
      "statements.auto": "Auto: Off",
      "statements.hint": "Use this section in internal comms. It’s free. Your excuses aren’t.",

      "leave.title": "What you leave with",
      "leave.body": "A working security baseline, a prioritized survival backlog, and a team capable of not recreating the nightmare next sprint.",
      "leave.small": "Deliverables are short, actionable, and built to outlive the engagement.",

      "cta.title": "Choose your path",
      "cta.subtitle": "Company intervention for product teams. Workshop edition for events. Same brutality, different packaging.",
      "cta.company": "Company Intervention",
      "cta.companyMicro": "Reply in 48h • Scoped in minutes",
      "cta.event": "Event / Workshop Edition",
      "cta.eventMicro": "Format-ready • Live diagnosis included",

      "footer.tag": "Reality-first AppSec intervention",
      "footer.note": "Want this in your brand? Easy. Reality stays."
    },

    pt: {
      "nav.tag": "intervenção de 3 dias",
      "nav.what": "O que é",
      "nav.days": "3 dias",
      "nav.statements": "Afirmações",
      "nav.leave": "Resultados",
      "nav.cta": "Agendar",

      "hero.kicker": "AppSec de verdade, sem teatro",
      "hero.titleA": "AppSec",
      "hero.titleB": "Nightmare",
      "hero.subtitle": "Uma intervenção no seu processo de desenvolvimento de software em 3 dias. Sem slides. Sem desculpas. Só a cruel realidade que você não sabe.",

      "what.title": "O que é",
      "what.body": "Isso não é modelo de maturidade, rollout de framework, nem checklist de compliance. É um choque 'controlado' de realidade para times que entregam software inseguro sem perceber.",
      "what.small": "Foco no que roda: SDLC como praticado, CI/CD como configurado, risco como sentido em produção.",

      "days.title": "O pesadelo de 3 dias",
      "days.subtitle": "Três movimentos: diagnosticar problemas, mentorar mudanças, validar correções. Tudo amarrado na sua stack e no seu pipeline.",
      "days.d1.k": "Dia 1",
      "days.d1.t": "O Diagnóstico",
      "days.d1.b": "Dissecamos o seu Software Development Life Cycle SDLC, suas pipelines, seu código, decisões e processos. O que está documentado é 'irrelevante'. O que roda de verdade é analisado e confrontado.",
      "days.d2.k": "Dia 2",
      "days.d2.t": "O Confronto",
      "days.d2.b": "Treinamento cirúrgico baseado em falhas reais. Secure coding, threat modeling e mecânicas de AppSec aplicadas na sua realidade.",
      "days.d3.k": "Dia 3",
      "days.d3.t": "A Melhoria",
      "days.d3.b": "Pipeline ajustado. Regras definidas. Fluxos implementados. Tudo validado no CI/CD, Código e Processos, não no PowerPoint.",

      "statements.title": "Afirmações",
      "statements.subtitle": "Verdades duras que seu time não vai te contar. Embaralhe até doer.",
      "statements.shuffle": "Embaralhar",
      "statements.auto": "Auto: Desligado",
      "statements.hint": "Use isso nas comunicações internas. É grátis. Suas desculpas não.",

      "leave.title": "O que você leva",
      "leave.body": "Um choque de realidade nos seus times, processos e ferramentas em formato de baseline de segurança funcionando, um backlog de sobrevivência priorizado e um time capaz de não recriar o pesadelo nas próximas sprints.",
      "leave.small": "Entregáveis simples mas poderosos, acionáveis e feitos para sobreviver ao fim do contrato.",

      "cta.title": "Escolha seu caminho",
      "cta.subtitle": "Intervenção para empresas com produto em produção. Edição workshop para eventos. Mesma brutalidade, embalagem diferente.",
      "cta.company": "Intervenção na Empresa",
      "cta.companyMicro": "Resposta em até 48h • Escopo em minutos",
      "cta.event": "Edição Evento / Workshop",
      "cta.eventMicro": "Pronto para palco • Diagnóstico ao vivo",

      "footer.tag": "Intervenção AppSec sem teatro",
      "footer.note": "Tem coragem de encarar a realidade?"
    }
  };

  const setLang = (lang) => {
    document.documentElement.lang = lang;
    const dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    document.getElementById('btnEN').classList.toggle('active', lang === 'en');
    document.getElementById('btnPT').classList.toggle('active', lang === 'pt');

    statements = lang === 'pt' ? STATEMENTS_PT : STATEMENTS_EN;
    quoteEl.innerHTML = statements[0];

    autoBtn.textContent = autoOn ? (lang === 'pt' ? 'Auto: Ligado' : 'Auto: On') : (lang === 'pt' ? 'Auto: Desligado' : 'Auto: Off');

    try { localStorage.setItem('asn_lang', lang); } catch (_) {}
  };

  document.getElementById('btnEN').addEventListener('click', () => setLang('en'));
  document.getElementById('btnPT').addEventListener('click', () => setLang('pt'));

  // ===== Statements rotation =====
  const quoteEl = document.getElementById('quote');
  const shuffleBtn = document.getElementById('shuffle');
  const autoBtn = document.getElementById('auto');

  const STATEMENTS_EN = [
    "If it doesn’t run in CI, it doesn’t exist.",
    "Your security program is not your tools. It’s your defaults.",
    "False positives are a tax on trust. Pay it long enough and teams stop listening.",
    "If the fix is ‘later’, the breach is ‘sooner’.",
    "One undocumented exception is the start of a tradition.",
    "Your threat model is already in production. You just didn’t write it down.",
    "A PR without risk context is a roulette wheel.",
    "Compliance can be passed with insecure software. Attackers don't care about your certificates."
  ];

  const STATEMENTS_PT = [
    "Se não roda no CI, não existe.",
    "Seu programa de segurança não são as ferramentas. É a sua cultura.",
    "Falso positivo é imposto sobre confiança. Pague demais e o time para de ouvir.",
    "Se a correção é ‘depois’, o incidente é ‘mais cedo’.",
    "Uma exceção sem registro é o começo de uma tradição.",
    "Seu threat model já está em produção. Só faltou escrever.",
    "PR sem contexto de risco é roleta.",
    "Compliance dá para passar com software inseguro. Atacante não liga para certificado."
  ];

  let statements = STATEMENTS_EN;
  let autoOn = false;
  let timer = null;

  const pickNew = () => {
    const current = quoteEl.innerHTML;
    let next = current;
    let attempts = 0;
    while (next === current && attempts < 10) {
      next = statements[Math.floor(Math.random() * statements.length)];
      attempts++;
    }

    if (Math.random() < 0.35) {
      const words = next.split(' ');
      const i = Math.floor(Math.random() * Math.min(words.length, 8));
      const clean = words[i].replace(/[^\wÀ-ÿ’']/g,'');
      words[i] = `<em>${clean}</em>` + words[i].slice(clean.length);
      next = words.join(' ');
    }

    quoteEl.innerHTML = next;
  };

  const setAuto = (on) => {
    autoOn = on;
    const lang = document.documentElement.lang === 'pt' ? 'pt' : 'en';
    autoBtn.textContent = on ? (lang === 'pt' ? 'Auto: Ligado' : 'Auto: On') : (lang === 'pt' ? 'Auto: Desligado' : 'Auto: Off');

    if (timer) clearInterval(timer);
    timer = null;
    if (on) timer = setInterval(pickNew, 4500);
  };

  shuffleBtn.addEventListener('click', pickNew);
  autoBtn.addEventListener('click', () => setAuto(!autoOn));

  // ===== Init =====
  const preferred = (() => {
    try { return localStorage.getItem('asn_lang'); } catch (_) { return null; }
  })();
  setLang(preferred === 'pt' ? 'pt' : 'en');