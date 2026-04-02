// ============================================================
// HISTORIA DA REDENÇÃO — Ellen G. White
// Dados das Cenas — "A Origem do Mal no Céu"
// ============================================================

const STORY_DATA = {
  title: "A Origem do Mal",
  subtitle: "Historia da Redenção — Ellen G. White",
  chapters: [

    // =========================================================
    // CAPÍTULO 1 — A HARMONIA DO CÉU
    // =========================================================
    {
      id: 1, title: "A Harmonia do Céu", chapterNumber: "Capítulo I",
      coverBg: "heaven_bg", coverIcon: "✦",
      scenes: [
        { id:"c1s1", background:"heaven_bg", character:null, characterPosition:null,
          narration:"Antes que o mal surgisse, havia paz em todo o universo. Deus e Cristo conheciam o que estava por vir — a revolta que Satanás introduziria no céu.",
          quote:{ text:"\"Antes da entrada do mal havia paz e alegria em todo o universo. O amor a Deus era supremo, o amor um ao outro imparcial.\"", source:"— Historia da Redenção, Cap. 1" },
          animation:"fade-in" },
        { id:"c1s2", background:"god_throne", character:null, characterPosition:null,
          narration:"Deus criou o universo em harmonia perfeita. No centro de tudo, Seu trono resplandecia com uma glória que nenhum ser criado poderia olhar diretamente.",
          quote:null, animation:"pan-up" },
        { id:"c1s3", background:"heaven_bg", character:"lucifer_angel", characterPosition:"right",
          narration:"Entre todos os seres angélicos, havia um que se destacava acima de todos — Lúcifer, o anjo ungido e querubim cobridor. Ele era o mais excelente entre as hostes celestiais.",
          quote:{ text:"\"Lúcifer era o mais excelente dos anjos celestiais. Ele era o mais elevado em poder e glória.\"", source:"— Historia da Redenção, Cap. 1" },
          animation:"slide-right" },
        { id:"c1s4", background:"heaven_bg", character:"lucifer_angel", characterPosition:"center",
          dialogues:[{ speaker:"Narrador", text:"Lúcifer liderava as hostes angélicas na adoração a Deus. Sua voz era a mais bela, sua luz a mais resplandecente." }],
          quote:{ text:"\"Cristo era o comandante das hostes celestiais. Lúcifer, o querubim cobridor, era honrado por Deus acima de todos os anjos.\"", source:"— Historia da Redenção, Cap. 1" },
          animation:"glow-pulse" }
      ]
    },

    // =========================================================
    // CAPÍTULO 2 — A SEMENTE DO ORGULHO
    // =========================================================
    {
      id: 2, title: "A Semente do Orgulho", chapterNumber: "Capítulo II",
      coverBg: "heaven_bg", coverIcon: "⚡",
      scenes: [
        { id:"c2s1", background:"heaven_bg", character:"lucifer_angel", characterPosition:"left",
          narration:"Mas algo começou a mudar dentro de Lúcifer. Em sua perfeição e glória, surgiu um pensamento perigoso — o desejo de ser igual ao Altíssimo.",
          quote:{ text:"\"Lúcifer era invejoso e ciumento de Jesus Cristo. No entanto, quando todos os anjos se inclinavam diante de Jesus para reverenciá-Lo, ele era bastante audacioso para não respeitar essa reverência.\"", source:"— Historia da Redenção, Cap. 1" },
          animation:"shadow-creep" },
        { id:"c2s2", background:"heaven_bg", character:"lucifer_angel", characterPosition:"center",
          dialogues:[
            { speaker:"Lúcifer", text:"Por que devo me curvar? Não sou eu igual em glória a Cristo? Meu trono deveria estar acima das estrelas de Deus!" },
            { speaker:"Narrador", text:"Assim nasceu o pecado — não por falta de luz, mas pela rejeição dela. O orgulho entrou no coração de um ser perfeito." }
          ], quote:null, animation:"dark-aura" },
        { id:"c2s3", background:"heaven_bg", character:"lucifer_angel", characterPosition:"right",
          narration:"Enquanto Deus havia exaltado Lúcifer acima de todos, o querubim passou a nutrir segredos em seu coração — conspirando para ganhar a lealdade de outros anjos.",
          quote:{ text:"\"Lúcifer começou a insinuar dúvidas quanto às leis que governavam os seres celestiais, sugerindo que elas eram desnecessárias.\"", source:"— Historia da Redenção, Cap. 1" },
          animation:"whisper-effect" },
        { id:"c2s4", background:"heaven_bg", character:"christ_character", characterPosition:"left",
          dialogues:[
            { speaker:"Cristo", text:"Lúcifer, filho da manhã... por que o ciúme tomou teu coração? Foste criado em perfeição — por que buscar aquilo que não foi dado?" },
            { speaker:"Lúcifer", text:"Sou igualmente digno. Deveria haver igualdade! Por que devo obediência quando sou poderoso como O Filho?" }
          ],
          quote:{ text:"\"Cristo declarou que era da natureza de Deus dar. Seu amor próprio não O levava a reter; pois Seu amor era sua alegria.\"", source:"— Historia da Redenção, Cap. 1" },
          animation:"confrontation" }
      ]
    },

    // =========================================================
    // CAPÍTULO 3 — A REBELDIA CRESCE
    // =========================================================
    {
      id: 3, title: "A Rebeldia Cresce", chapterNumber: "Capítulo III",
      coverBg: "heaven_bg", coverIcon: "🔥",
      scenes: [
        { id:"c3s1", background:"heaven_bg", bgFilter:"sepia(0.3) saturate(0.8) hue-rotate(250deg) brightness(0.8)", character:"lucifer_angel", characterPosition:"center",
          narration:"Lúcifer começou a trabalhar em segredo. Com palavras suaves e raciocínios enganosos, ele foi conquistando corações de anjos que nunca imaginariam questionar a autoridade divina.",
          quote:{ text:"\"A rebelião de Satanás, como um câncer maligno, se espalhara por uma grande empresa de anjos.\"", source:"— Historia da Redenção, Cap. 1" },
          animation:"spread-darkness" },
        { id:"c3s2", background:"heaven_bg", bgFilter:"sepia(0.5) saturate(0.5) hue-rotate(270deg) brightness(0.6)", character:"lucifer_fallen", characterPosition:"center",
          narration:"À medida que a rebeldia avançava, a verdadeira natureza de Lúcifer começou a aparecer. A luz que o envolvia foi se apagando gradualmente, revelando a escuridão que havia tomado seu coração.",
          quote:{ text:"\"Satanás não revelava seus planos reais; ele disfarçava seus motivos com aparência de lealdade a Deus.\"", source:"— Historia da Redenção, Cap. 1" },
          animation:"transform-dark" },
        { id:"c3s3", background:"heaven_bg", bgFilter:"sepia(0.2) saturate(1.1) brightness(0.9)", character:"christ_character", characterPosition:"right",
          narration:"Deus, em Sua misericórdia, enviou Cristo para tentar restaurar Lúcifer. Mas o orgulho havia endurecido o coração do querubim caído — ele não queria ser salvo, queria ser adorado.",
          quote:{ text:"\"Deus não poderia ser feliz vendo os anjos caídos sofrerem. Ele desejava vê-los como eram para recuperar a alegria do céu.\"", source:"— Historia da Redenção, Cap. 1" },
          animation:"plea-scene" }
      ]
    },

    // =========================================================
    // CAPÍTULO 4 — A GUERRA NO CÉU
    // =========================================================
    {
      id: 4, title: "A Guerra no Céu", chapterNumber: "Capítulo IV",
      coverBg: "war_heaven", coverIcon: "⚔️",
      scenes: [
        { id:"c4s1", background:"war_heaven", character:null, characterPosition:null,
          narration:"O conflito que havia começado como um sussurro de dúvidas explodiu em uma guerra aberta no céu. As hostes angélicas se dividiram — uns ao lado de Deus, outros liderados por Lúcifer.",
          quote:{ text:"\"Houve guerra no céu. Miguel e seus anjos guerrearam contra o dragão. E o dragão guerreou com seus anjos.\" — Apocalipse 12:7", source:"— Historia da Redenção, Cap. 2" },
          animation:"battle-start" },
        { id:"c4s2", background:"war_heaven", character:null, characterPosition:null,
          narration:"O céu, que nunca havia presenciado conflito, tremeu. A guerra entre o bem e o mal foi a mais dramática que o universo já viu — não apenas uma batalha de força, mas de lealdade e caráter.",
          quote:{ text:"\"Os anjos fiéis instaram os que estavam se desviando a permanecer no céu, mostrando as consequências da desobediência.\"", source:"— Historia da Redenção, Cap. 2" },
          animation:"battle-rage" },
        { id:"c4s3", background:"war_heaven", character:"lucifer_fallen", characterPosition:"left",
          dialogues:[
            { speaker:"Lúcifer", text:"Eu formarei meu próprio reino! Que os anjos escolham — liberdade comigo, ou escravidão sob a tirania de Deus!" },
            { speaker:"Narrador", text:"Mas a \"liberdade\" que Lúcifer oferecia era a escravidão ao pecado. A \"tirania\" que ele descrevia era o amor perfeito de Deus." }
          ], quote:null, animation:"defiance" }
      ]
    },

    // =========================================================
    // CAPÍTULO 5 — A GRANDE EXPULSÃO
    // =========================================================
    {
      id: 5, title: "A Grande Expulsão", chapterNumber: "Capítulo V",
      coverBg: "war_heaven", coverIcon: "🌑",
      scenes: [
        { id:"c5s1", background:"war_heaven", bgFilter:"grayscale(0.8) sepia(0.2) hue-rotate(200deg) brightness(0.6)", character:"lucifer_fallen", characterPosition:"center",
          narration:"Lúcifer foi derrotado. Ele e seus anjos foram expulsos do céu. O ser que havia sido o mais brilhante dos céus agora caía como raio — transformado em Satanás, o adversário.",
          quote:{ text:"\"E foi lançado fora o grande dragão, a antiga serpente, chamado o Diabo e Satanás, o qual engana todo o mundo.\" — Apocalipse 12:9", source:"— Historia da Redenção, Cap. 2" },
          animation:"fall-cast-out" },
        { id:"c5s2", background:"heaven_bg", bgFilter:"contrast(1.2) brightness(1.3)", character:"christ_character", characterPosition:"center",
          narration:"Mas a história não terminou aí. A queda de Satanás abriu uma nova fase no grande conflito — e na misericórdia de Deus, um plano de redenção para todos os que seriam afetados pelo pecado estava prestes a se desdobrar.",
          quote:{ text:"\"Cristo declarou que estivera com o Pai antes de Abraão ser, e foi-Lhe dado um nome acima de todo o nome.\"", source:"— Historia da Redenção, Cap. 3" },
          animation:"hope-dawn" },
        { id:"c5s3", background:"god_throne", bgFilter:"saturate(1.5) brightness(1.2)", character:null, characterPosition:null,
          narration:"O pecado havia entrado no universo. Mas Deus, em Seu amor eterno, já havia preparado a resposta — a maior história de amor e redenção que o cosmos jamais testemunharia.",
          quote:{ text:"\"Deus amou de tal maneira o mundo, que deu o Seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.\" — João 3:16", source:"— Historia da Redenção" },
          animation:"eternal-light" }
      ]
    },

    // =========================================================
    // CAPÍTULO 6 — A CRIAÇÃO DO MUNDO
    // =========================================================
    {
      id: 6, title: "A Criação do Mundo", chapterNumber: "Capítulo VI",
      coverBg: "heaven_bg", coverIcon: "🌍",
      scenes: [
        { id:"c6s1", background:"heaven_bg", character:"christ_character", characterPosition:"center",
          narration:"Após a expulsão de Satanás, Deus e Cristo voltaram Seus olhos para um novo ato criativo. Um mundo seria formado — e nele habitaria uma nova ordem de seres, feitos à imagem do próprio Criador.",
          quote:{ text:"\"No princípio, criou Deus os céus e a terra.\" — Gênesis 1:1", source:"— Historia da Redenção, Cap. 3" },
          animation:"fade-in" },
        { id:"c6s2", background:"heaven_bg", character:null, characterPosition:null,
          narration:"Em seis dias, pela palavra de Deus, o caos foi transformado em ordem. Luz, firmamento, terra, mares, estrelas, animais — cada coisa chamada à existência pelo poder criador.",
          quote:{ text:"\"E Deus viu tudo o que havia feito, e eis que era muito bom.\" — Gênesis 1:31", source:"— Historia da Redenção, Cap. 3" },
          animation:"pan-up" },
        { id:"c6s3", background:"god_throne", character:"christ_character", characterPosition:"right",
          dialogues:[
            { speaker:"Narrador", text:"No ápice da criação, Deus formou o homem — Adão — do pó da terra, e soprou em suas narinas o fôlego de vida." },
            { speaker:"Cristo", text:"Façamos o homem à Nossa imagem, conforme a Nossa semelhança. E ele terá domínio sobre toda a terra." }
          ],
          quote:{ text:"\"Deus criou o homem à sua imagem... macho e fêmea os criou.\" — Gênesis 1:27", source:"— Historia da Redenção, Cap. 3" },
          animation:"glow-pulse" },
        { id:"c6s4", background:"heaven_bg", character:null, characterPosition:null,
          narration:"Adão e Eva viviam no Éden — um jardim de perfeição absoluta. Tinham comunhão direta com Deus, caminhavam com Ele nos momentos de frescor do dia. Eram livres, amados, completos.",
          quote:{ text:"\"Adão e Eva vieram da mão do Criador em perfeita beleza e saúde físicos; possuíam mentes ativas e morais elevadas.\"", source:"— Historia da Redenção, Cap. 4" },
          animation:"eternal-light" }
      ]
    },

    // =========================================================
    // CAPÍTULO 7 — A TENTAÇÃO E A QUEDA
    // =========================================================
    {
      id: 7, title: "A Tentação e a Queda", chapterNumber: "Capítulo VII",
      coverBg: "war_heaven", coverIcon: "🐍",
      scenes: [
        { id:"c7s1", background:"war_heaven", bgFilter:"sepia(0.8) hue-rotate(-20deg) saturate(1.8) brightness(0.6)", character:"lucifer_fallen", characterPosition:"left",
          narration:"Satanás observava o paraíso com ódio e inveja. Expulso do céu, ele agora tramava a destruição daquilo que Deus mais amava.",
          quote:{ text:"\"Satanás determinou entrar nesse mundo e tentar, enganar e arruinar Adão e Eva.\"", source:"— Historia da Redenção, Cap. 4" },
          animation:"dark-aura" },
        { id:"c7s2", background:"heaven_bg", bgFilter:"sepia(0.7) hue-rotate(-40deg) saturate(2) brightness(0.5) contrast(1.2)", character:"lucifer_fallen", characterPosition:"right",
          dialogues:[
            { speaker:"Satanás", text:"Deus sabe que, no dia em que comerdes da árvore, vossos olhos se abrirão e sereis como Deus..." },
            { speaker:"Narrador", text:"Eva hesitou... mas a fruta era bela. E as palavras da serpente (Satanás disfarçado) pareciam sábias. Ela estendeu a mão." }
          ],
          quote:{ text:"\"Satanás apresentou Deus como ocultando-lhes o conhecimento para mantê-los dependentes. Insinuou que Deus era egoísta.\"", source:"— Historia da Redenção, Cap. 5" },
          animation:"shadow-creep" },
        { id:"c7s3", background:"heaven_bg", bgFilter:"grayscale(0.9) brightness(0.4) sepia(0.2)", character:null, characterPosition:null,
          narration:"Eva comeu. Deu a Adão. E ele também comeu. No mesmo instante, algo mudou — a inocência foi perdida. O verde do Éden desbotou. O frio da culpa e do medo chegou pela primeira vez.",
          quote:{ text:"\"Quando Adão e Eva pecaram, perderam a glória radiante que os havia coberto como vestes.\"", source:"— Historia da Redenção, Cap. 5" },
          animation:"transform-dark" },
        { id:"c7s4", background:"god_throne", bgFilter:"contrast(1.5) brightness(0.6)", character:null, characterPosition:null,
          dialogues:[
            { speaker:"Deus", text:"Adão, onde estás?" },
            { speaker:"Narrador", text:"Pela primeira vez, o homem se escondeu de Deus. O pecado havia criado um abismo — uma separação mortal." }
          ],
          quote:{ text:"\"A transgressão de Satanás havia lançado desonra sobre Deus e tristeza sobre o céu.\"", source:"— Historia da Redenção, Cap. 5" },
          animation:"confrontation" }
      ]
    },

    // =========================================================
    // CAPÍTULO 8 — A PROMESSA DA REDENÇÃO
    // =========================================================
    {
      id: 8, title: "A Promessa da Redenção", chapterNumber: "Capítulo VIII",
      coverBg: "god_throne", coverIcon: "✝️",
      scenes: [
        { id:"c8s1", background:"god_throne", bgFilter:"saturate(0.5) brightness(0.6)", character:"christ_character", characterPosition:"center",
          narration:"Mas Deus não abandonou Sua criação. Antes mesmo que a voz divina pronunciasse o julgamento, havia esperança. No plano eterno de Deus, a redenção já havia sido preparada.",
          quote:{ text:"\"Cristo seria o cordeiro imolado desde a fundação do mundo.\" — Apocalipse 13:8", source:"— Historia da Redenção, Cap. 6" },
          animation:"hope-dawn" },
        { id:"c8s2", background:"war_heaven", bgFilter:"sepia(1) hue-rotate(-50deg) saturate(2) brightness(0.4) contrast(1.5)", character:"christ_character", characterPosition:"right",
          dialogues:[
            { speaker:"Cristo", text:"Pai, eu me ofereço. Deixa-me ir ao mundo. Deixa-me tomar sobre mim a maldição do pecado." },
            { speaker:"Narrador", text:"O Filho de Deus escolheu virar as costas para a glória de Seu trono para descer à escuridão da Terra, prometendo dar a Sua vida numa cruz para resgatar os caídos." }
          ],
          quote:{ text:"\"Cristo propôs tornar-Se o fiador da humanidade, tomar sobre Si a penalidade do pecado humano.\"", source:"— Historia da Redenção, Cap. 6" },
          animation:"glow-pulse" },
        { id:"c8s3", background:"war_heaven", bgFilter:"sepia(0.5) hue-rotate(-30deg) saturate(1.2) brightness(0.9)", character:null, characterPosition:null,
          narration:"A promessa foi dada ainda no Éden escurecido — a semente da mulher esmagaria a cabeça da serpente. A primeira proclamação do Evangelho.",
          quote:{ text:"\"E porei inimizade entre ti e a mulher, e entre a tua semente e a sua semente; esta te ferirá a cabeça.\" — Gênesis 3:15", source:"— Historia da Redenção, Cap. 6" },
          animation:"eternal-light" },
        { id:"c8s4", background:"god_throne", bgFilter:"brightness(1.5) contrast(1.2) saturate(1.8)", character:"christ_character", characterPosition:"center",
          narration:"O universo assistia em reverência. O grande conflito seria resolvido não pela força, mas pelo sacrifício de sangue provado pelo amor supremo na cruz.",
          quote:{ text:"\"O sacrifício de Cristo é o tema central dos anjos e dos santos redimidos por toda a eternidade.\"", source:"— Historia da Redenção" },
          animation:"hope-dawn", isEnding: true }
      ]
    }
  ]
};

// Flatten all scenes into one array for easy navigation
function flattenScenes() {
  const all = [];
  STORY_DATA.chapters.forEach(chapter => {
    chapter.scenes.forEach(scene => {
      all.push({ ...scene, chapterTitle: chapter.title, chapterNumber: chapter.chapterNumber, chapterId: chapter.id });
    });
  });
  return all;
}
