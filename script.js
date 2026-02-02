// Arquivo: script.js

function normalizeText(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function renderHymnList(filtered = hymns) {
  const listEl = document.getElementById("hymnList");
  listEl.innerHTML = "";

  filtered.forEach((hymn, idx) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.dataset.index = hymns.indexOf(hymn);

    const numberSpan = document.createElement("span");
    numberSpan.className = "hymn-number";
    numberSpan.textContent = String(hymn.number).padStart(3, "0");

    const titleSpan = document.createElement("span");
    titleSpan.className = "hymn-title";
    titleSpan.textContent = hymn.title;

    btn.appendChild(numberSpan);
    btn.appendChild(titleSpan);

    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".hymn-list button.active")
        .forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderHymn(hymn);
    });

    li.appendChild(btn);
    listEl.appendChild(li);

    if (idx === 0 && !document.querySelector(".hymn-list button.active")) {
      btn.classList.add("active");
      renderHymn(hymn);
    }
  });
}

function renderHymn(hymn) {
  const metaEl = document.getElementById("hymnMeta");
  const lyricsEl = document.getElementById("hymnLyrics");
  const audioPlayersEl = document.getElementById("audioPlayers");
  const audioSectionEl = document.getElementById("audioSection");

  metaEl.innerHTML = "";
  lyricsEl.innerHTML = "";
  audioPlayersEl.innerHTML = "";

  // meta
  const numberDiv = document.createElement("div");
  numberDiv.className = "hymn-meta-number";
  numberDiv.textContent = `Hino ${hymn.number}`;

  const titleDiv = document.createElement("div");
  titleDiv.className = "hymn-meta-title";
  titleDiv.textContent = hymn.title;

  metaEl.appendChild(numberDiv);
  metaEl.appendChild(titleDiv);

  // letra
  const inner = document.createElement("div");
  inner.className = "hymn-lyrics-inner";

  hymn.verses.forEach((verse, idx) => {
    const verseBlock = document.createElement("div");
    verseBlock.className = "hymn-verse";

    const label = document.createElement("div");
    label.className = "hymn-verse-number";
    label.textContent = `Verso ${idx + 1}`;

    const text = document.createElement("div");
    text.innerHTML = verse;

    verseBlock.appendChild(label);
    verseBlock.appendChild(text);
    inner.appendChild(verseBlock);
  });

  if (hymn.chorus && hymn.chorus.trim()) {
    const chorusDiv = document.createElement("div");
    chorusDiv.className = "chorus refrain-highlight";
    chorusDiv.innerHTML = hymn.chorus;
    inner.appendChild(chorusDiv);
  }

  lyricsEl.appendChild(inner);

  // players de áudio alternativos
  if (Array.isArray(hymn.altAudio) && hymn.altAudio.length > 0) {
    audioSectionEl.style.display = "block";
    hymn.altAudio.forEach((src, i) => {
      const wrapper = document.createElement("div");
      const label = document.createElement("div");
      label.className = "hymn-verse-number";
      label.textContent = `Versão ${i + 1}`;

      const audio = document.createElement("audio");
      audio.controls = true;
      audio.src = src; // URL de áudio (não o link do YouTube direto)

      wrapper.appendChild(label);
      wrapper.appendChild(audio);
      audioPlayersEl.appendChild(wrapper);
    });
  } else {
    audioSectionEl.style.display = "none";
  }
}

function setupSearch() {
  const input = document.getElementById("searchInput");
  input.addEventListener("input", () => {
    const q = normalizeText(input.value.trim());
    if (!q) {
      renderHymnList(hymns);
      return;
    }

    const isNumber = /^\d+$/.test(q);
    const filtered = hymns.filter(h => {
      if (isNumber) {
        return String(h.number).includes(q);
      }
      const titleNorm = normalizeText(h.title);
      return titleNorm.includes(q);
    });

    renderHymnList(filtered.length ? filtered : hymns);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (!Array.isArray(hymns) || hymns.length === 0) return;
  renderHymnList(hymns);
  setupSearch();
});
