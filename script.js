// ============================================================
// ANIME CRISTÃO — "A ORIGEM DO MAL"
// Engine de Navegação de Cenas
// ============================================================

// ---------- MAPA DE ASSETS ----------
const BG_MAP = {
  heaven_bg:   'assets/images/heaven_bg.png',
  god_throne:  'assets/images/god_throne.png',
  war_heaven:  'assets/images/war_heaven.png',
  angels_chorus: 'assets/images/heaven_bg.png'  // fallback
};

const CHAR_MAP = {
  lucifer_angel:  'assets/images/lucifer_angel.png',
  lucifer_fallen: 'assets/images/lucifer_fallen.png',
  christ_character: 'assets/images/christ_character.png'
};

// ---------- STATE ----------
let scenes = [];
let currentIndex = 0;
let musicPlaying = false;
let voiceEnabled = false;
let typewriterTimer = null;
let typewriterDone = false;
let currentUtterance = null;

// ---------- DOM REFS ----------
const titleScreen    = document.getElementById('title-screen');
const viewer         = document.getElementById('viewer');
const sceneBg        = document.getElementById('scene-bg');
const characterContainer = document.getElementById('character-container');
const characterImg   = document.getElementById('character-img');
const dialoguePanel  = document.getElementById('dialogue-panel');
const speakerEl      = document.getElementById('speaker-name');
const narrationEl    = document.getElementById('narration-text');
const quoteBlock     = document.getElementById('quote-block');
const quoteSourceEl  = document.getElementById('quote-source');
const progressBar    = document.getElementById('progress-bar');
const btnPrev        = document.getElementById('btn-prev');
const btnNext        = document.getElementById('btn-next');
const chapterDisplay = document.getElementById('chapter-title-display');
const sceneCounter   = document.getElementById('scene-counter');
const btnMusic       = document.getElementById('btn-music');
const endingOverlay  = document.getElementById('ending-overlay');
const audio          = document.getElementById('bg-music');
const particleCanvas = document.getElementById('particle-canvas');

const btnChaptersHud   = document.getElementById('btn-chapters-hud');
const btnChaptersTitle = document.getElementById('btn-chapters-title');
const chaptersOverlay  = document.getElementById('chapters-overlay');
const chaptersList     = document.getElementById('chapters-list');
const btnCloseChapters = document.getElementById('btn-close-chapters');
const btnVoice         = document.getElementById('btn-voice');

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  scenes = flattenScenes();
  initParticles();
  buildChapterMenu();

  const saved = parseInt(localStorage.getItem('animeProgress') || '0');
  currentIndex = Math.min(saved, scenes.length - 1);

  document.getElementById('btn-start').addEventListener('click', startStory);
  if (btnChaptersTitle) btnChaptersTitle.addEventListener('click', openChapterMenu);
  if (btnChaptersHud)   btnChaptersHud.addEventListener('click', openChapterMenu);
  if (btnCloseChapters) btnCloseChapters.addEventListener('click', closeChapterMenu);
  if (chaptersOverlay)  chaptersOverlay.addEventListener('click', e => { if (e.target === chaptersOverlay) closeChapterMenu(); });

  btnNext.addEventListener('click', nextScene);
  btnPrev.addEventListener('click', prevScene);
  btnMusic.addEventListener('click', toggleMusic);
  if (btnVoice) btnVoice.addEventListener('click', toggleVoice);
  document.getElementById('btn-restart').addEventListener('click', restartStory);
  document.addEventListener('keydown', handleKey);

  // Initialize speech voices
  if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = () => { /* triggers load */ };
  }

  // Click panel to advance
  dialoguePanel.addEventListener('click', () => {
    if (!typewriterDone) finishTypewriter();
    else nextScene();
  });
});

// ---------- BUILD CHAPTER MENU ----------
function buildChapterMenu() {
  if (!chaptersList) return;
  chaptersList.innerHTML = '';
  STORY_DATA.chapters.forEach(chapter => {
    const card = document.createElement('div');
    card.className = 'chapter-card';
    card.dataset.chapterId = chapter.id;
    card.innerHTML = `
      <span class="chapter-card-icon">${chapter.coverIcon || '✦'}</span>
      <div class="chapter-card-num">${chapter.chapterNumber}</div>
      <div class="chapter-card-title">${chapter.title}</div>
      <div class="chapter-card-scenes">${chapter.scenes.length} cenas</div>
    `;
    card.addEventListener('click', () => jumpToChapter(chapter.id));
    chaptersList.appendChild(card);
  });
}

function updateChapterMenuActive() {
  const currentScene = scenes[currentIndex];
  if (!currentScene) return;
  document.querySelectorAll('.chapter-card').forEach(card => {
    card.classList.toggle('active', parseInt(card.dataset.chapterId) === currentScene.chapterId);
  });
}

function openChapterMenu() {
  updateChapterMenuActive();
  chaptersOverlay.classList.add('open');
  chaptersOverlay.setAttribute('aria-hidden', 'false');
}

function closeChapterMenu() {
  chaptersOverlay.classList.remove('open');
  chaptersOverlay.setAttribute('aria-hidden', 'true');
}

function jumpToChapter(chapterId) {
  const idx = scenes.findIndex(s => s.chapterId === chapterId);
  if (idx !== -1) {
    currentIndex = idx;
    renderScene(currentIndex);
    closeChapterMenu();
    // If viewer is hidden (still on title), open it
    if (viewer.style.display === 'none' || !viewer.style.display) {
      titleScreen.style.display = 'none';
      viewer.style.display = 'flex';
      tryAutoMusic();
    }
  }
}

// ---------- START STORY ----------
function startStory() {
  titleScreen.style.animation = 'scene-fade 0.6s ease reverse forwards';
  setTimeout(() => {
    titleScreen.style.display = 'none';
    viewer.style.display = 'flex';
    renderScene(currentIndex);
    tryAutoMusic();
  }, 600);
}

// ---------- SCENE RENDER ----------
function renderScene(idx) {
  const scene = scenes[idx];
  if (!scene) return;

  // Save progress
  localStorage.setItem('animeProgress', idx);

  // Animate panel
  dialoguePanel.classList.remove('scene-transition');
  void dialoguePanel.offsetWidth;
  dialoguePanel.classList.add('scene-transition');

  // Background
  const bgSrc = BG_MAP[scene.background] || BG_MAP['heaven_bg'];
  sceneBg.style.backgroundImage = `url('${bgSrc}')`;

  // Apply special bg filter for war
  if (scene.background === 'war_heaven') {
    sceneBg.style.filter = 'brightness(0.45) saturate(1.5) hue-rotate(-10deg)';
  } else if (scene.background === 'god_throne') {
    sceneBg.style.filter = 'brightness(0.5) saturate(1.4)';
  } else {
    sceneBg.style.filter = 'brightness(0.55) saturate(1.2)';
  }

  // Character
  if (scene.character && CHAR_MAP[scene.character]) {
    characterImg.src = CHAR_MAP[scene.character];
    characterImg.style.display = 'block';
    characterContainer.style.display = 'flex';
    characterImg.className = '';
    if (scene.characterPosition) {
      characterImg.classList.add(`char-${scene.characterPosition}`);
    }
    // Apply animation class
    if (scene.animation === 'shadow-creep') characterImg.classList.add('anim-shadow-creep');
    if (scene.animation === 'glow-pulse')   characterImg.classList.add('anim-glow-pulse');
    if (scene.animation === 'dark-aura')    characterImg.classList.add('anim-dark-aura');
  } else {
    characterImg.style.display = 'none';
    characterContainer.style.display = 'none';
  }

  // HUD
  chapterDisplay.textContent = scene.chapterNumber + ' — ' + scene.chapterTitle;
  sceneCounter.textContent = `Cena ${idx + 1} / ${scenes.length}`;

  // Progress bar
  progressBar.style.width = `${((idx + 1) / scenes.length) * 100}%`;

  // Build dialogue text
  let narrationHtml = scene.narration || '';
  let textToSpeak = scene.narration || '';
  let speakerName = '';

  if (scene.dialogues && scene.dialogues.length > 0) {
    narrationHtml = scene.dialogues.map(d => {
      if (d.speaker === 'Narrador') return `<em>${d.text}</em>`;
      return `<strong class="char-speak">${d.speaker}:</strong> "${d.text}"`;
    }).join('<br><br>');
    
    textToSpeak = scene.dialogues.map(d => `${d.speaker} diz: ${d.text}`).join('. ');
    
    if (scene.speaker) speakerName = scene.speaker;
  }

  // Speaker
  if (speakerName) {
    speakerEl.textContent = speakerName;
    speakerEl.style.display = 'block';
  } else {
    speakerEl.style.display = 'none';
  }

  // Quote
  if (scene.quote) {
    quoteBlock.style.display = 'block';
    quoteBlock.querySelector('.quote-text').innerHTML = scene.quote.text;
    quoteSourceEl.textContent = scene.quote.source;
  } else {
    quoteBlock.style.display = 'none';
  }

  // Typewriter narration
  typewriterText(narrationEl, narrationHtml);

  // Speak narration
  speakSceneText(textToSpeak);

  // Buttons
  btnPrev.disabled = idx === 0;

  // Lightning effect for war scenes
  if (scene.animation === 'battle-start' || scene.animation === 'battle-rage') {
    setTimeout(() => sceneBg.classList.add('lightning-flash'), 300);
    setTimeout(() => sceneBg.classList.remove('lightning-flash'), 700);
  }

  // Ending
  if (scene.isEnding) {
    setTimeout(showEnding, 6000);
  }
}

// ---------- TYPEWRITER ----------
function typewriterText(el, htmlContent) {
  if (typewriterTimer) clearInterval(typewriterTimer);
  typewriterDone = false;
  
  // Strip HTML tags for typewriter, then re-insert
  // For simplicity with HTML content, we set innerHTML directly with fade
  el.innerHTML = htmlContent;
  el.style.animation = 'none';
  void el.offsetWidth;
  el.style.animation = 'text-reveal 1.2s ease forwards';
  typewriterDone = true;
}

function finishTypewriter() {
  if (typewriterTimer) clearInterval(typewriterTimer);
  typewriterDone = true;
}

// ---------- NAVIGATION ----------
function nextScene() {
  if (currentIndex < scenes.length - 1) {
    currentIndex++;
    renderScene(currentIndex);
  } else {
    showEnding();
  }
}

function prevScene() {
  if (currentIndex > 0) {
    currentIndex--;
    renderScene(currentIndex);
  }
}

function handleKey(e) {
  if (e.key === 'ArrowRight' || e.key === ' ') nextScene();
  if (e.key === 'ArrowLeft') prevScene();
}

// ---------- ENDING ----------
function showEnding() {
  endingOverlay.style.display = 'flex';
}

function restartStory() {
  stopSpeaking();
  endingOverlay.style.display = 'none';
  currentIndex = 0;
  localStorage.removeItem('animeProgress');
  renderScene(0);
}

// ---------- VOICE TTS ----------
function toggleVoice() {
  if (!('speechSynthesis' in window)) {
    alert("Infelizmente o seu navegador não suporta narração em áudio (Text-to-Speech).");
    return;
  }
  voiceEnabled = !voiceEnabled;
  btnVoice.textContent = voiceEnabled ? '🗣️ (ON)' : '🗣️';
  btnVoice.style.background = voiceEnabled ? 'rgba(240,192,64,0.2)' : '';
  
  if (voiceEnabled) {
    // If we just turned it on, speak the current scene immediately
    const scene = scenes[currentIndex];
    if (scene) {
      let tts = scene.narration || '';
      if (scene.dialogues && scene.dialogues.length > 0) {
        tts = scene.dialogues.map(d => `${d.speaker} diz: ${d.text}`).join('. ');
      }
      speakSceneText(tts);
    }
  } else {
    stopSpeaking();
  }
}

function speakSceneText(text) {
  stopSpeaking();
  if (!voiceEnabled || !text || !('speechSynthesis' in window)) return;
  
  // Clean up HTML tags just in case
  const cleanText = text.replace(/<[^>]*>?/gm, '');
  
  currentUtterance = new SpeechSynthesisUtterance(cleanText);
  currentUtterance.lang = 'pt-BR';
  currentUtterance.rate = 0.95; // slightly dramatic pacing
  
  // Try to pick a standard PT-BR voice
  const voices = speechSynthesis.getVoices();
  const ptVoice = voices.find(v => v.lang.startsWith('pt-BR'));
  if (ptVoice) {
    currentUtterance.voice = ptVoice;
  }
  
  speechSynthesis.speak(currentUtterance);
}

function stopSpeaking() {
  if ('speechSynthesis' in window && speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
}

// ---------- MUSIC ----------
function tryAutoMusic() {
  if (audio) {
    audio.volume = 0.25;
    audio.loop = true;
    const p = audio.play();
    if (p !== undefined) {
      p.then(() => { musicPlaying = true; btnMusic.textContent = '🎵'; })
       .catch(() => { musicPlaying = false; btnMusic.textContent = '🔇'; });
    }
  }
}

function toggleMusic() {
  if (!audio) return;
  if (musicPlaying) {
    audio.pause();
    musicPlaying = false;
    btnMusic.textContent = '🔇';
  } else {
    audio.play();
    musicPlaying = true;
    btnMusic.textContent = '🎵';
  }
}

// ---------- PARTICLES ----------
function initParticles() {
  const ctx = particleCanvas.getContext('2d');
  let W = window.innerWidth, H = window.innerHeight;
  particleCanvas.width = W;
  particleCanvas.height = H;

  const particles = Array.from({ length: 120 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.5 + 0.3,
    dx: (Math.random() - 0.5) * 0.15,
    dy: -(Math.random() * 0.3 + 0.05),
    alpha: Math.random() * 0.8 + 0.2,
    glow: Math.random() > 0.85
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      
      if (p.glow) {
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#f0c040';
        ctx.fillStyle = `rgba(240, 220, 160, ${p.alpha})`;
      } else {
        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(200, 210, 255, ${p.alpha * 0.6})`;
      }
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;
      if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
    });
    requestAnimationFrame(draw);
  }

  draw();

  window.addEventListener('resize', () => {
    W = window.innerWidth; H = window.innerHeight;
    particleCanvas.width = W; particleCanvas.height = H;
  });
}
