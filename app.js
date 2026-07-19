(() => {
  "use strict";

  /* ================= i18n ================= */
  const STR = {
    th: {
      welcomeTitle: "สวัสดีครับ ✦",
      heroCopy: "วันนี้มีอะไรให้ชิบะช่วยจำบ้าง?",
      todayChip: "วันนี้",
      tomorrowChip: "พรุ่งนี้",
      priorityChip: "สำคัญ",
      inputPlaceholder: "พิมพ์สิ่งที่ต้องทำ...",
      assistantLabel: "ผู้ช่วยชิบะ",
      taskHeading: "งานวันนี้",
      clearDone: "ล้างงานที่เสร็จ",
      upcomingHeading: "งานที่กำลังจะมาถึง",
      upcomingSubtitleFmt: (n) => `${n} รายการ`,
      navToday: "วันนี้",
      navCalendar: "ปฏิทิน",
      navLists: "รายการ",
      navMe: "โปรไฟล์",
      emptyTitle: "ยังไม่มีงานวันนี้",
      emptyBody: "พิมพ์งานแรกของวันนี้ในช่องด้านบนได้เลย",
      emptyUpcoming: "ไม่มีงานที่กำลังจะมาถึง",
      countFmt: (done, total) => `${done}/${total} เสร็จแล้ว`,
      toastComingSoon: "ส่วนนี้กำลังจะมาเร็วๆ นี้",
      toastCleared: "ล้างงานที่เสร็จแล้วเรียบร้อย",
      dueToday: "วันนี้",
      dueTomorrow: "พรุ่งนี้",
      assistant: {
        empty: "ยังไม่มีงานเลย พิมพ์อะไรสักอย่างที่อยากทำวันนี้สิ",
        allDone: "เก่งมาก! วันนี้ไม่มีงานค้างแล้ว พักหน่อยนะ 🐾",
        some: (n) => `เหลืออีก ${n} งาน สู้ๆ นะ ทำทีละอย่างก็ได้`,
        many: (n) => `วันนี้มี ${n} งานเลย เริ่มจากงานที่สำคัญก่อนดีไหม?`,
      },
    },
    en: {
      welcomeTitle: "Hey there ✦",
      heroCopy: "What should Shiba help you remember today?",
      todayChip: "Today",
      tomorrowChip: "Tomorrow",
      priorityChip: "Priority",
      inputPlaceholder: "Add a task...",
      assistantLabel: "Shiba assistant",
      taskHeading: "Today's tasks",
      clearDone: "Clear done",
      upcomingHeading: "Coming up",
      upcomingSubtitleFmt: (n) => `${n} item${n === 1 ? "" : "s"}`,
      navToday: "Today",
      navCalendar: "Calendar",
      navLists: "Lists",
      navMe: "Me",
      emptyTitle: "No tasks yet",
      emptyBody: "Add your first task for today above.",
      emptyUpcoming: "Nothing coming up yet",
      countFmt: (done, total) => `${done}/${total} done`,
      toastComingSoon: "This section is coming soon",
      toastCleared: "Cleared your finished tasks",
      dueToday: "Today",
      dueTomorrow: "Tmrw",
      assistant: {
        empty: "No tasks yet — add something you want to get done today.",
        allDone: "Nice work! Nothing left today. Take a break 🐾",
        some: (n) => `${n} task${n === 1 ? "" : "s"} left. One at a time!`,
        many: (n) => `You've got ${n} tasks today — start with the important one?`,
      },
    },
    zh: {
      welcomeTitle: "你好呀 ✦",
      heroCopy: "今天有什么需要柴柴帮你记住的吗？",
      todayChip: "今天",
      tomorrowChip: "明天",
      priorityChip: "重要",
      inputPlaceholder: "添加任务...",
      assistantLabel: "柴柴助手",
      taskHeading: "今日任务",
      clearDone: "清除已完成",
      upcomingHeading: "即将到来",
      upcomingSubtitleFmt: (n) => `${n} 项`,
      navToday: "今天",
      navCalendar: "日历",
      navLists: "清单",
      navMe: "我",
      emptyTitle: "还没有任务",
      emptyBody: "在上面输入今天的第一个任务吧",
      emptyUpcoming: "暂时没有即将到来的任务",
      countFmt: (done, total) => `已完成 ${done}/${total}`,
      toastComingSoon: "此功能即将上线",
      toastCleared: "已清除完成的任务",
      dueToday: "今天",
      dueTomorrow: "明天",
      assistant: {
        empty: "还没有任务，写下今天想完成的第一件事吧。",
        allDone: "太棒了！今天的任务都完成了，休息一下吧 🐾",
        some: (n) => `还剩 ${n} 项任务，一件一件来！`,
        many: (n) => `今天有 ${n} 项任务，要不要先从重要的开始？`,
      },
    },
  };

  const WEEKDAY = {
    th: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
    en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    zh: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
  };

  const MONTH = {
    th: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    zh: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  };

  const STORAGE_KEY = "shiba.tasks.v1";
  const LANG_KEY = "shiba.lang.v1";

  /* ================= State ================= */
  let lang = localStorage.getItem(LANG_KEY) || "th";
  let tasks = loadTasks();
  let composerDue = "today"; // 'today' | 'tomorrow'
  let composerPriority = false;

  function loadTasks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return seedTasks();
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
      return seedTasks();
    } catch {
      return seedTasks();
    }
  }

  function seedTasks() {
    return [
      { id: cryptoId(), text: sampleText(), done: false, due: "today", priority: true },
    ];
  }

  function sampleText() {
    return { th: "ลองใช้ชิบะช่วยจำดูสักงาน", en: "Try adding your first task", zh: "试着添加你的第一个任务" }[lang] || "Try adding your first task";
  }

  function cryptoId() {
    return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
  }

  function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }

  /* ================= DOM refs ================= */
  const el = (id) => document.getElementById(id);
  const langSelect = el("language-select");
  const todayDateEl = el("today-date");
  const welcomeTitleEl = el("welcome-title");
  const heroCopyEl = el("hero-copy");
  const todayChipEl = el("today-chip");
  const tomorrowChipEl = el("tomorrow-chip");
  const priorityChipTextEl = el("priority-chip-text");
  const taskInput = el("task-input");
  const taskForm = el("task-form");
  const assistantLabelEl = el("assistant-label");
  const assistantMessageEl = el("assistant-message");
  const taskHeadingEl = el("task-heading");
  const taskCountEl = el("task-count");
  const clearDoneBtn = el("clear-done");
  const taskListEl = el("task-list");
  const upcomingHeadingEl = el("upcoming-heading");
  const upcomingSubtitleEl = el("upcoming-subtitle");
  const upcomingListEl = el("upcoming-list");
  const navToday = el("nav-today");
  const navCalendar = el("nav-calendar");
  const navLists = el("nav-lists");
  const navMe = el("nav-me");
  const chipToday = document.querySelector('.chip[data-time="today"]');
  const chipTomorrow = document.querySelector('.chip[data-time="tomorrow"]');
  const chipPriority = el("priority-chip");

  /* ================= Toast ================= */
  let toastTimer = null;
  function showToast(message) {
    let toastEl = document.querySelector(".toast");
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = message;
    requestAnimationFrame(() => toastEl.classList.add("show"));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2200);
  }

  /* ================= Render ================= */
  function renderStaticText() {
    const t = STR[lang];
    document.documentElement.lang = lang;
    welcomeTitleEl.textContent = t.welcomeTitle;
    heroCopyEl.textContent = t.heroCopy;
    todayChipEl.textContent = t.todayChip;
    tomorrowChipEl.textContent = t.tomorrowChip;
    priorityChipTextEl.textContent = t.priorityChip;
    taskInput.placeholder = t.inputPlaceholder;
    assistantLabelEl.textContent = t.assistantLabel;
    taskHeadingEl.textContent = t.taskHeading;
    clearDoneBtn.textContent = t.clearDone;
    upcomingHeadingEl.textContent = t.upcomingHeading;
    navToday.textContent = t.navToday;
    navCalendar.textContent = t.navCalendar;
    navLists.textContent = t.navLists;
    navMe.textContent = t.navMe;
    renderDate();
  }

  function renderDate() {
    const now = new Date();
    const wd = WEEKDAY[lang][now.getDay()];
    const day = now.getDate();
    const month = MONTH[lang][now.getMonth()];
    if (lang === "zh") {
      todayDateEl.textContent = `${wd} · ${now.getMonth() + 1}月${day}日`;
    } else if (lang === "th") {
      todayDateEl.textContent = `วัน${wd} ${day} ${month}`;
    } else {
      todayDateEl.textContent = `${wd}, ${month} ${day}`;
    }
  }

  function renderComposerChips() {
    chipToday.classList.toggle("selected", composerDue === "today");
    chipTomorrow.classList.toggle("selected", composerDue === "tomorrow");
    chipPriority.classList.toggle("selected", composerPriority);
  }

  function renderAssistant() {
    const t = STR[lang];
    const pending = tasks.filter((task) => !task.done).length;
    let msg;
    if (tasks.length === 0) msg = t.assistant.empty;
    else if (pending === 0) msg = t.assistant.allDone;
    else if (pending <= 3) msg = t.assistant.some(pending);
    else msg = t.assistant.many(pending);
    assistantMessageEl.textContent = msg;
  }

  function dueLabel(due) {
    const t = STR[lang];
    if (due === "today") return t.dueToday;
    if (due === "tomorrow") return t.dueTomorrow;
    return due;
  }

  function renderTasks() {
    const t = STR[lang];
    const todays = tasks.filter((task) => task.due === "today" || task.done);
    const upcoming = tasks.filter((task) => task.due !== "today" && !task.done);

    const doneCount = tasks.filter((task) => task.done).length;
    taskCountEl.textContent = tasks.length ? t.countFmt(doneCount, tasks.length) : "";
    clearDoneBtn.disabled = doneCount === 0;

    taskListEl.innerHTML = "";
    if (todays.length === 0) {
      taskListEl.appendChild(emptyState(t.emptyTitle, t.emptyBody, "🐾"));
    } else {
      todays
        .slice()
        .sort((a, b) => Number(a.done) - Number(b.done) || Number(b.priority) - Number(a.priority))
        .forEach((task) => taskListEl.appendChild(taskRow(task)));
    }

    upcomingListEl.innerHTML = "";
    upcomingSubtitleEl.textContent = t.upcomingSubtitleFmt(upcoming.length);
    if (upcoming.length === 0) {
      upcomingListEl.appendChild(emptyState(null, t.emptyUpcoming, "☁"));
    } else {
      upcoming.forEach((task) => upcomingListEl.appendChild(upcomingRow(task)));
    }

    renderAssistant();
  }

  function emptyState(title, body, mark) {
    const wrap = document.createElement("div");
    wrap.className = "empty-state";
    wrap.innerHTML = `<span class="empty-mark">${mark}</span>${title ? `<strong>${escapeHtml(title)}</strong><br/>` : ""}${escapeHtml(body)}`;
    return wrap;
  }

  function taskRow(task) {
    const row = document.createElement("div");
    row.className = "task-item" + (task.done ? " done" : "");
    row.dataset.id = task.id;

    const check = document.createElement("button");
    check.className = "task-check";
    check.type = "button";
    check.setAttribute("aria-label", "toggle done");
    check.textContent = "✓";
    check.addEventListener("click", () => toggleDone(task.id));

    const body = document.createElement("div");
    body.className = "task-body";
    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = task.text;
    body.appendChild(text);

    if (task.priority || task.due !== "today") {
      const meta = document.createElement("div");
      meta.className = "task-meta";
      if (task.priority) {
        const flag = document.createElement("span");
        flag.className = "task-flag";
        flag.textContent = "⚑";
        meta.appendChild(flag);
      }
      if (task.due !== "today") {
        const dueSpan = document.createElement("span");
        dueSpan.textContent = dueLabel(task.due);
        meta.appendChild(dueSpan);
      }
      body.appendChild(meta);
    }

    const del = document.createElement("button");
    del.className = "task-delete";
    del.type = "button";
    del.setAttribute("aria-label", "delete task");
    del.textContent = "✕";
    del.addEventListener("click", () => deleteTask(task.id));

    row.append(check, body, del);
    return row;
  }

  function upcomingRow(task) {
    const row = document.createElement("div");
    row.className = "upcoming-item";
    const badge = document.createElement("div");
    badge.className = "upcoming-date";
    badge.textContent = dueLabel(task.due);
    const text = document.createElement("div");
    text.className = "upcoming-text";
    text.textContent = task.text;
    row.append(badge, text);
    return row;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ================= Actions ================= */
  function addTask(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    tasks.unshift({
      id: cryptoId(),
      text: trimmed,
      done: false,
      due: composerDue,
      priority: composerPriority,
    });
    composerPriority = false;
    renderComposerChips();
    saveTasks();
    renderTasks();
  }

  function toggleDone(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    task.done = !task.done;
    saveTasks();
    renderTasks();
  }

  function deleteTask(id) {
    tasks = tasks.filter((t) => t.id !== id);
    saveTasks();
    renderTasks();
  }

  function clearDone() {
    const hadDone = tasks.some((t) => t.done);
    tasks = tasks.filter((t) => !t.done);
    saveTasks();
    renderTasks();
    if (hadDone) showToast(STR[lang].toastCleared);
  }

  /* ================= Events ================= */
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask(taskInput.value);
    taskInput.value = "";
    taskInput.focus();
  });

  chipToday.addEventListener("click", () => {
    composerDue = "today";
    renderComposerChips();
  });

  chipTomorrow.addEventListener("click", () => {
    composerDue = "tomorrow";
    renderComposerChips();
  });

  chipPriority.addEventListener("click", () => {
    composerPriority = !composerPriority;
    renderComposerChips();
  });

  clearDoneBtn.addEventListener("click", clearDone);

  langSelect.addEventListener("change", () => {
    lang = langSelect.value;
    localStorage.setItem(LANG_KEY, lang);
    renderStaticText();
    renderComposerChips();
    renderTasks();
  });

  [navCalendar, navLists, navMe].forEach((btn) => {
    btn.addEventListener("click", () => {
      [navToday, navCalendar, navLists, navMe].forEach((n) => n.classList.remove("active"));
      btn.classList.add("active");
      showToast(STR[lang].toastComingSoon);
    });
  });

  navToday.addEventListener("click", () => {
    [navToday, navCalendar, navLists, navMe].forEach((n) => n.classList.remove("active"));
    navToday.classList.add("active");
    document.getElementById("today").scrollIntoView({ behavior: "smooth" });
  });

  /* ================= Init ================= */
  langSelect.value = lang;
  renderStaticText();
  renderComposerChips();
  renderTasks();

  // Keep the date line fresh if the app stays open past midnight.
  setInterval(renderDate, 60 * 1000);
})();
