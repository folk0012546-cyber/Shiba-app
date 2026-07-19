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
      calendarHeading: "ปฏิทิน",
      calendarLegendToday: "มีงานที่ต้องทำ",
      pickDateChip: "เลือกวันที่",
      calendarAgendaEmpty: "ไม่มีงานในวันนี้",
      listsHeading: "รายการทั้งหมด",
      listsCountFmt: (n) => `${n} รายการ`,
      filters: { all: "ทั้งหมด", today: "วันนี้", tomorrow: "พรุ่งนี้", priority: "สำคัญ", done: "เสร็จแล้ว" },
      emptyFilter: "ไม่มีงานในหมวดนี้",
      profileHeading: "โปรไฟล์",
      statTotal: "งานทั้งหมด",
      statDone: "เสร็จแล้ว",
      statPending: "ค้างอยู่",
      profileLangHeading: "ภาษา",
      resetButton: "ล้างข้อมูลทั้งหมด",
      resetConfirm: "ล้างงานทั้งหมดที่บันทึกไว้ในเครื่องนี้? ทำแล้วกู้คืนไม่ได้",
      resetDone: "ล้างข้อมูลทั้งหมดแล้ว",
      dashboardHeading: "แดชบอร์ด",
      scope: { month: "รายเดือน", quarter: "รายไตรมาส", year: "รายปี" },
      dashCreated: "งานที่สร้าง",
      dashCompleted: "งานที่เสร็จ",
      dashRate: "อัตราเสร็จ",
      weekLabelFmt: (n) => `สัปดาห์ ${n}`,
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
      calendarHeading: "Calendar",
      calendarLegendToday: "Has tasks due",
      pickDateChip: "Pick date",
      calendarAgendaEmpty: "No tasks on this day",
      listsHeading: "All tasks",
      listsCountFmt: (n) => `${n} item${n === 1 ? "" : "s"}`,
      filters: { all: "All", today: "Today", tomorrow: "Tomorrow", priority: "Priority", done: "Done" },
      emptyFilter: "No tasks in this filter",
      profileHeading: "Profile",
      statTotal: "Total tasks",
      statDone: "Done",
      statPending: "Pending",
      profileLangHeading: "Language",
      resetButton: "Clear all data",
      resetConfirm: "Clear every task saved on this device? This can't be undone.",
      resetDone: "All data cleared",
      dashboardHeading: "Dashboard",
      scope: { month: "Month", quarter: "Quarter", year: "Year" },
      dashCreated: "Created",
      dashCompleted: "Completed",
      dashRate: "Completion",
      weekLabelFmt: (n) => `Week ${n}`,
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
      calendarHeading: "日历",
      calendarLegendToday: "当天有任务",
      pickDateChip: "选日期",
      calendarAgendaEmpty: "这天没有任务",
      listsHeading: "全部任务",
      listsCountFmt: (n) => `${n} 项`,
      filters: { all: "全部", today: "今天", tomorrow: "明天", priority: "重要", done: "已完成" },
      emptyFilter: "此分类暂无任务",
      profileHeading: "我的",
      statTotal: "任务总数",
      statDone: "已完成",
      statPending: "待完成",
      profileLangHeading: "语言",
      resetButton: "清除所有数据",
      resetConfirm: "确定要清除本机保存的所有任务吗？此操作无法撤销。",
      resetDone: "已清除所有数据",
      dashboardHeading: "仪表盘",
      scope: { month: "按月", quarter: "按季度", year: "按年" },
      dashCreated: "创建任务",
      dashCompleted: "完成任务",
      dashRate: "完成率",
      weekLabelFmt: (n) => `第${n}周`,
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

  const MONTH_FULL = {
    th: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    zh: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  };

  const WEEKDAY_SHORT = {
    th: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
    en: ["S", "M", "T", "W", "T", "F", "S"],
    zh: ["日", "一", "二", "三", "四", "五", "六"],
  };

  const STORAGE_KEY = "shiba.tasks.v1";
  const LANG_KEY = "shiba.lang.v1";

  /* ================= Date helpers ================= */
  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function isoDate(d) {
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  }

  function todayISO() {
    return isoDate(new Date());
  }

  function tomorrowISO() {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return isoDate(d);
  }

  function shortDateLabel(iso) {
    const d = new Date(`${iso}T00:00:00`);
    if (lang === "zh") return `${d.getMonth() + 1}/${d.getDate()}`;
    if (lang === "th") return `${d.getDate()} ${MONTH[lang][d.getMonth()]}`;
    return `${MONTH[lang][d.getMonth()]} ${d.getDate()}`;
  }

  /* ================= State ================= */
  let lang = localStorage.getItem(LANG_KEY) || "th";
  let tasks = loadTasks();
  let composerDue = todayISO(); // an ISO date string, e.g. "2026-07-19"
  let composerPriority = false;
  let currentView = "today";
  let calendarCursor = new Date(); // month currently shown in the calendar view
  let selectedCalendarDate = todayISO(); // which day's agenda is shown below the calendar
  let listsFilter = "all";
  let dashboardScope = "month"; // 'month' | 'quarter' | 'year'
  let dashboardCursor = new Date();

  function loadTasks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return seedTasks();
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return seedTasks();
      const now = new Date().toISOString();
      return parsed.map((task) => {
        let due = task.due;
        if (due === "today") due = todayISO();
        else if (due === "tomorrow") due = tomorrowISO();
        else if (!due) due = todayISO();
        return {
          ...task,
          due,
          createdAt: task.createdAt || now,
          completedAt: task.done ? task.completedAt || now : null,
        };
      });
    } catch {
      return seedTasks();
    }
  }

  function seedTasks() {
    return [
      { id: cryptoId(), text: sampleText(), done: false, due: todayISO(), priority: true, createdAt: new Date().toISOString(), completedAt: null },
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
  const navDashboard = el("nav-dashboard");
  const navButtons = Array.from(document.querySelectorAll(".bottom-nav .nav-item"));

  const viewToday = el("view-today");
  const viewCalendar = el("view-calendar");
  const viewLists = el("view-lists");
  const viewProfile = el("view-profile");
  const viewDashboard = el("view-dashboard");
  const VIEWS = { today: viewToday, calendar: viewCalendar, lists: viewLists, profile: viewProfile, dashboard: viewDashboard };

  const dashboardHeadingEl = el("dashboard-heading");
  const dashboardScopeTabs = Array.from(document.querySelectorAll(".scope-tab"));
  const dashboardPeriodLabelEl = el("dashboard-period-label");
  const dashboardPrevBtn = el("dashboard-prev");
  const dashboardNextBtn = el("dashboard-next");
  const dashboardChartEl = el("dashboard-chart");
  const dashStatCreatedEl = el("dash-stat-created");
  const dashStatCompletedEl = el("dash-stat-completed");
  const dashStatRateEl = el("dash-stat-rate");
  const dashLabelCreatedEl = el("dash-label-created");
  const dashLabelCompletedEl = el("dash-label-completed");
  const dashLabelRateEl = el("dash-label-rate");

  const calendarHeadingEl = el("calendar-heading");
  const calendarMonthLabelEl = el("calendar-month-label");
  const calendarWeekdaysEl = el("calendar-weekdays");
  const calendarGridEl = el("calendar-grid");
  const calendarLegendTodayEl = el("calendar-legend-today");
  const calendarPrevBtn = el("calendar-prev");
  const calendarNextBtn = el("calendar-next");
  const calendarAgendaHeadingEl = el("calendar-agenda-heading");
  const calendarAgendaListEl = el("calendar-agenda-list");

  const listsHeadingEl = el("lists-heading");
  const listsCountEl = el("lists-count");
  const listsTaskListEl = el("lists-task-list");
  const listsFilterButtons = Array.from(document.querySelectorAll(".filter-tab"));

  const profileHeadingEl = el("profile-heading");
  const profileStatTotalEl = el("profile-stat-total");
  const profileStatDoneEl = el("profile-stat-done");
  const profileStatPendingEl = el("profile-stat-pending");
  const profileLabelTotalEl = el("profile-label-total");
  const profileLabelDoneEl = el("profile-label-done");
  const profileLabelPendingEl = el("profile-label-pending");
  const profileLangHeadingEl = el("profile-lang-heading");
  const profileResetBtn = el("profile-reset");
  const profileLangButtons = Array.from(document.querySelectorAll("#profile-lang-options .chip"));
  const chipToday = document.querySelector('.chip[data-time="today"]');
  const chipTomorrow = document.querySelector('.chip[data-time="tomorrow"]');
  const chipPriority = el("priority-chip");
  const dateChip = el("date-chip");
  const dateChipText = el("date-chip-text");
  const dateInput = el("date-input");

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
    calendarHeadingEl.textContent = t.calendarHeading;
    calendarLegendTodayEl.textContent = t.calendarLegendToday;
    listsHeadingEl.textContent = t.listsHeading;
    listsFilterButtons.forEach((btn) => {
      btn.textContent = t.filters[btn.dataset.filter];
    });
    profileHeadingEl.textContent = t.profileHeading;
    profileLabelTotalEl.textContent = t.statTotal;
    profileLabelDoneEl.textContent = t.statDone;
    profileLabelPendingEl.textContent = t.statPending;
    profileLangHeadingEl.textContent = t.profileLangHeading;
    profileResetBtn.textContent = t.resetButton;
    profileLangButtons.forEach((btn) => btn.classList.toggle("selected", btn.dataset.lang === lang));
    navDashboard.textContent = t.dashboardHeading;
    dashboardHeadingEl.textContent = t.dashboardHeading;
    dashboardScopeTabs.forEach((btn) => {
      btn.textContent = t.scope[btn.dataset.scope];
    });
    dashLabelCreatedEl.textContent = t.dashCreated;
    dashLabelCompletedEl.textContent = t.dashCompleted;
    dashLabelRateEl.textContent = t.dashRate;
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
    const today = todayISO();
    const tomorrow = tomorrowISO();
    chipToday.classList.toggle("selected", composerDue === today);
    chipTomorrow.classList.toggle("selected", composerDue === tomorrow);
    chipPriority.classList.toggle("selected", composerPriority);
    const isCustom = composerDue !== today && composerDue !== tomorrow;
    dateChip.classList.toggle("selected", isCustom);
    dateChipText.textContent = isCustom ? shortDateLabel(composerDue) : STR[lang].pickDateChip;
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
    if (due === todayISO()) return t.dueToday;
    if (due === tomorrowISO()) return t.dueTomorrow;
    return shortDateLabel(due);
  }

  function renderTasks() {
    const t = STR[lang];
    const today = todayISO();
    const todays = tasks.filter((task) => task.due === today || task.done);
    const upcoming = tasks
      .filter((task) => task.due !== today && !task.done)
      .sort((a, b) => a.due.localeCompare(b.due));

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

    if (task.priority || task.due !== todayISO()) {
      const meta = document.createElement("div");
      meta.className = "task-meta";
      if (task.priority) {
        const flag = document.createElement("span");
        flag.className = "task-flag";
        flag.textContent = "⚑";
        meta.appendChild(flag);
      }
      if (task.due !== todayISO()) {
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
    const d = new Date(`${task.due}T00:00:00`);
    const dayEl = document.createElement("strong");
    dayEl.textContent = String(d.getDate());
    const monthEl = document.createElement("span");
    monthEl.textContent = MONTH[lang][d.getMonth()];
    badge.append(dayEl, monthEl);
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

  /* ---- Calendar view ---- */
  function renderCalendar() {
    const t = STR[lang];
    const today = todayISO();

    calendarMonthLabelEl.textContent = `${MONTH_FULL[lang][calendarCursor.getMonth()]} ${calendarCursor.getFullYear()}`;

    calendarWeekdaysEl.innerHTML = "";
    WEEKDAY_SHORT[lang].forEach((d) => {
      const span = document.createElement("span");
      span.textContent = d;
      calendarWeekdaysEl.appendChild(span);
    });

    const year = calendarCursor.getFullYear();
    const month = calendarCursor.getMonth();
    const firstWeekday = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const pendingByDate = {};
    tasks.forEach((task) => {
      if (!task.done) pendingByDate[task.due] = (pendingByDate[task.due] || 0) + 1;
    });

    calendarGridEl.innerHTML = "";
    for (let i = 0; i < firstWeekday; i++) {
      const blank = document.createElement("div");
      blank.className = "calendar-day is-blank";
      calendarGridEl.appendChild(blank);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const iso = isoDate(new Date(year, month, d));
      const cell = document.createElement("div");
      cell.className = "calendar-day";
      if (iso === today) cell.classList.add("is-today");
      if (iso === selectedCalendarDate) cell.classList.add("is-selected");
      cell.textContent = String(d);
      const count = pendingByDate[iso] || 0;
      if (count > 0) {
        const dot = document.createElement("span");
        dot.className = "dot dot-today";
        dot.title = `${count}`;
        cell.appendChild(dot);
      }
      cell.addEventListener("click", () => {
        selectedCalendarDate = iso;
        renderCalendar();
      });
      calendarGridEl.appendChild(cell);
    }

    renderCalendarAgenda();
  }

  function calendarAgendaHeading(iso) {
    const t = STR[lang];
    const dateStr = shortDateLabel(iso);
    if (iso === todayISO()) return `${dateStr} (${t.dueToday})`;
    if (iso === tomorrowISO()) return `${dateStr} (${t.dueTomorrow})`;
    return dateStr;
  }

  function renderCalendarAgenda() {
    const t = STR[lang];
    calendarAgendaHeadingEl.textContent = calendarAgendaHeading(selectedCalendarDate);
    const dayTasks = tasks
      .filter((task) => task.due === selectedCalendarDate)
      .sort((a, b) => Number(a.done) - Number(b.done) || Number(b.priority) - Number(a.priority));
    calendarAgendaListEl.innerHTML = "";
    if (dayTasks.length === 0) {
      calendarAgendaListEl.appendChild(emptyState(null, t.calendarAgendaEmpty, "🐾"));
    } else {
      dayTasks.forEach((task) => calendarAgendaListEl.appendChild(taskRow(task)));
    }
  }

  /* ---- Lists view ---- */
  function filteredTasks(filter) {
    if (filter === "all") return tasks;
    if (filter === "today") return tasks.filter((t) => t.due === todayISO() && !t.done);
    if (filter === "tomorrow") return tasks.filter((t) => t.due === tomorrowISO() && !t.done);
    if (filter === "priority") return tasks.filter((t) => t.priority && !t.done);
    if (filter === "done") return tasks.filter((t) => t.done);
    return tasks;
  }

  function renderLists() {
    const t = STR[lang];
    const list = filteredTasks(listsFilter);
    listsCountEl.textContent = t.listsCountFmt(list.length);
    listsTaskListEl.innerHTML = "";
    if (list.length === 0) {
      listsTaskListEl.appendChild(emptyState(null, t.emptyFilter, "🐾"));
    } else {
      list.forEach((task) => listsTaskListEl.appendChild(taskRow(task)));
    }
  }

  /* ---- Profile view ---- */
  function renderProfile() {
    const done = tasks.filter((task) => task.done).length;
    profileStatTotalEl.textContent = String(tasks.length);
    profileStatDoneEl.textContent = String(done);
    profileStatPendingEl.textContent = String(tasks.length - done);
  }

  /* ---- Dashboard view ---- */
  function getPeriodInfo(scope, cursor) {
    const t = STR[lang];
    if (scope === "month") {
      const start = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
      const end = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);
      const label = `${MONTH_FULL[lang][cursor.getMonth()]} ${cursor.getFullYear()}`;
      const buckets = [];
      let bucketStart = new Date(start);
      let idx = 1;
      while (bucketStart < end) {
        const bucketEndTime = Math.min(bucketStart.getTime() + 7 * 86400000, end.getTime());
        const bucketEnd = new Date(bucketEndTime);
        buckets.push({ label: t.weekLabelFmt(idx), start: new Date(bucketStart), end: bucketEnd });
        bucketStart = bucketEnd;
        idx++;
      }
      return { start, end, label, buckets };
    }
    if (scope === "quarter") {
      const qIndex = Math.floor(cursor.getMonth() / 3);
      const startMonth = qIndex * 3;
      const start = new Date(cursor.getFullYear(), startMonth, 1);
      const end = new Date(cursor.getFullYear(), startMonth + 3, 1);
      const label = `Q${qIndex + 1} ${cursor.getFullYear()}`;
      const buckets = [0, 1, 2].map((i) => ({
        label: MONTH[lang][startMonth + i],
        start: new Date(cursor.getFullYear(), startMonth + i, 1),
        end: new Date(cursor.getFullYear(), startMonth + i + 1, 1),
      }));
      return { start, end, label, buckets };
    }
    // year
    const start = new Date(cursor.getFullYear(), 0, 1);
    const end = new Date(cursor.getFullYear() + 1, 0, 1);
    const label = `${cursor.getFullYear()}`;
    const buckets = Array.from({ length: 12 }, (_, i) => ({
      label: MONTH[lang][i],
      start: new Date(cursor.getFullYear(), i, 1),
      end: new Date(cursor.getFullYear(), i + 1, 1),
    }));
    return { start, end, label, buckets };
  }

  function stepPeriod(scope, cursor, direction) {
    if (scope === "month") return new Date(cursor.getFullYear(), cursor.getMonth() + direction, 1);
    if (scope === "quarter") return new Date(cursor.getFullYear(), cursor.getMonth() + direction * 3, 1);
    return new Date(cursor.getFullYear() + direction, cursor.getMonth(), 1);
  }

  function computeDashboard(scope, cursor) {
    const period = getPeriodInfo(scope, cursor);
    const inRange = (iso, start, end) => {
      if (!iso) return false;
      const d = new Date(iso);
      return d >= start && d < end;
    };
    const created = tasks.filter((task) => inRange(task.createdAt, period.start, period.end)).length;
    const completed = tasks.filter((task) => inRange(task.completedAt, period.start, period.end)).length;
    const rate = created > 0 ? Math.round((completed / created) * 100) : 0;
    const chartData = period.buckets.map((b) => ({
      label: b.label,
      count: tasks.filter((task) => inRange(task.completedAt, b.start, b.end)).length,
    }));
    return { label: period.label, created, completed, rate, chartData };
  }

  function renderDashboard() {
    const data = computeDashboard(dashboardScope, dashboardCursor);
    dashboardPeriodLabelEl.textContent = data.label;
    dashStatCreatedEl.textContent = String(data.created);
    dashStatCompletedEl.textContent = String(data.completed);
    dashStatRateEl.textContent = `${data.rate}%`;

    const maxCount = Math.max(1, ...data.chartData.map((d) => d.count));
    dashboardChartEl.innerHTML = "";
    data.chartData.forEach((bucket) => {
      const col = document.createElement("div");
      col.className = "chart-bar";

      const countLabel = document.createElement("span");
      countLabel.className = "chart-bar-count";
      countLabel.textContent = String(bucket.count);

      const fill = document.createElement("div");
      fill.className = "chart-bar-fill";
      const pct = Math.round((bucket.count / maxCount) * 100);
      fill.style.height = `${bucket.count > 0 ? Math.max(pct, 6) : 2}%`;

      const label = document.createElement("span");
      label.className = "chart-bar-label";
      label.textContent = bucket.label;

      col.append(countLabel, fill, label);
      dashboardChartEl.appendChild(col);
    });
  }


  function switchView(name) {
    if (!VIEWS[name]) return;
    Object.entries(VIEWS).forEach(([key, node]) => {
      node.hidden = key !== name;
    });
    navButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.view === name));
    currentView = name;
    if (name === "calendar") renderCalendar();
    else if (name === "lists") renderLists();
    else if (name === "profile") renderProfile();
    else if (name === "dashboard") renderDashboard();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  function refreshAll() {
    renderTasks();
    if (currentView === "calendar") renderCalendar();
    else if (currentView === "lists") renderLists();
    else if (currentView === "profile") renderProfile();
    else if (currentView === "dashboard") renderDashboard();
  }

  function addTask(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    tasks.unshift({
      id: cryptoId(),
      text: trimmed,
      done: false,
      due: composerDue,
      priority: composerPriority,
      createdAt: new Date().toISOString(),
      completedAt: null,
    });
    composerPriority = false;
    renderComposerChips();
    saveTasks();
    refreshAll();
  }

  function toggleDone(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    task.done = !task.done;
    task.completedAt = task.done ? new Date().toISOString() : null;
    saveTasks();
    refreshAll();
  }

  function deleteTask(id) {
    tasks = tasks.filter((t) => t.id !== id);
    saveTasks();
    refreshAll();
  }

  function clearDone() {
    const hadDone = tasks.some((t) => t.done);
    tasks = tasks.filter((t) => !t.done);
    saveTasks();
    refreshAll();
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
    composerDue = todayISO();
    renderComposerChips();
  });

  chipTomorrow.addEventListener("click", () => {
    composerDue = tomorrowISO();
    renderComposerChips();
  });

  chipPriority.addEventListener("click", () => {
    composerPriority = !composerPriority;
    renderComposerChips();
  });

  dateInput.addEventListener("change", () => {
    if (!dateInput.value) return;
    composerDue = dateInput.value;
    renderComposerChips();
  });

  clearDoneBtn.addEventListener("click", clearDone);

  langSelect.addEventListener("change", () => {
    lang = langSelect.value;
    localStorage.setItem(LANG_KEY, lang);
    renderStaticText();
    renderComposerChips();
    refreshAll();
  });

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => switchView(btn.dataset.view));
  });

  calendarPrevBtn.addEventListener("click", () => {
    calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1);
    renderCalendar();
  });

  calendarNextBtn.addEventListener("click", () => {
    calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1);
    renderCalendar();
  });

  dashboardScopeTabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      dashboardScope = btn.dataset.scope;
      dashboardScopeTabs.forEach((b) => b.classList.toggle("selected", b === btn));
      renderDashboard();
    });
  });

  dashboardPrevBtn.addEventListener("click", () => {
    dashboardCursor = stepPeriod(dashboardScope, dashboardCursor, -1);
    renderDashboard();
  });

  dashboardNextBtn.addEventListener("click", () => {
    dashboardCursor = stepPeriod(dashboardScope, dashboardCursor, 1);
    renderDashboard();
  });

  listsFilterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      listsFilter = btn.dataset.filter;
      listsFilterButtons.forEach((b) => b.classList.toggle("selected", b === btn));
      renderLists();
    });
  });

  profileLangButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      lang = btn.dataset.lang;
      localStorage.setItem(LANG_KEY, lang);
      langSelect.value = lang;
      renderStaticText();
      renderComposerChips();
      refreshAll();
    });
  });

  profileResetBtn.addEventListener("click", () => {
    const t = STR[lang];
    if (!window.confirm(t.resetConfirm)) return;
    tasks = [];
    saveTasks();
    refreshAll();
    showToast(t.resetDone);
  });

  /* ================= Init ================= */
  langSelect.value = lang;
  dateInput.min = todayISO();
  renderStaticText();
  renderComposerChips();
  renderTasks();

  // Keep the date line fresh if the app stays open past midnight.
  setInterval(renderDate, 60 * 1000);
})();
