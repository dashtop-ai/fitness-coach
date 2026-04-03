import { DashtopApp } from "@dashtop/widget-sdk";
import type { QuickAction, ListItem } from "@dashtop/widget-sdk";

/**
 * Fitness Coach
 *
 * AI-powered fitness app. Get daily workouts, track completion,
 * view your weekly log, and monitor stats.
 * Extends DashtopApp for the standard layout (header, chat, tabs, quick actions).
 */

interface FitnessConfig {
  level: "beginner" | "intermediate" | "advanced";
  goal: "strength" | "cardio" | "flexibility" | "weight-loss";
}

interface Exercise {
  id: string;
  name: string;
  reps: string;
  muscle: string;
  icon: string;
}

const WORKOUTS: Record<string, Exercise[]> = {
  beginner: [
    { id: "e1", name: "Goblet Squats", reps: "3x12", muscle: "Legs", icon: "🦵" },
    { id: "e2", name: "Push-ups", reps: "3x12", muscle: "Chest", icon: "💪" },
    { id: "e3", name: "Dumbbell Rows", reps: "3x12", muscle: "Back", icon: "🏋️" },
    { id: "e4", name: "Lunges", reps: "3x12", muscle: "Legs", icon: "🦵" },
    { id: "e5", name: "Plank Hold", reps: "3x30s", muscle: "Core", icon: "🧘" },
    { id: "e6", name: "Bicep Curls", reps: "3x12", muscle: "Arms", icon: "💪" },
  ],
  intermediate: [
    { id: "e1", name: "Barbell Squats", reps: "4x10", muscle: "Legs", icon: "🦵" },
    { id: "e2", name: "Bench Press", reps: "4x10", muscle: "Chest", icon: "🏋️" },
    { id: "e3", name: "Bent-Over Rows", reps: "4x10", muscle: "Back", icon: "🏋️" },
    { id: "e4", name: "Romanian Deadlifts", reps: "4x10", muscle: "Legs", icon: "🦵" },
    { id: "e5", name: "Overhead Press", reps: "4x10", muscle: "Shoulders", icon: "💪" },
    { id: "e6", name: "Cable Crunches", reps: "3x15", muscle: "Core", icon: "🧘" },
  ],
  advanced: [
    { id: "e1", name: "Front Squats", reps: "5x8", muscle: "Legs", icon: "🦵" },
    { id: "e2", name: "Incline Bench Press", reps: "5x8", muscle: "Chest", icon: "🏋️" },
    { id: "e3", name: "Weighted Pull-ups", reps: "5x8", muscle: "Back", icon: "🏋️" },
    { id: "e4", name: "Bulgarian Split Squats", reps: "4x10", muscle: "Legs", icon: "🦵" },
    { id: "e5", name: "Clean & Press", reps: "4x8", muscle: "Full Body", icon: "🔥" },
    { id: "e6", name: "Dragon Flags", reps: "3x10", muscle: "Core", icon: "🧘" },
  ],
};

const MUSCLE_COLORS: Record<string, string> = {
  Legs: "#8b5cf6",
  Chest: "#ef4444",
  Back: "#3b82f6",
  Core: "#f59e0b",
  Arms: "#10b981",
  Shoulders: "#ec4899",
  "Full Body": "#6366f1",
};

const CHAT_RESPONSES: Record<string, string> = {
  squat: "For squats, keep your weight on your heels and drive through your glutes. Keep your chest up and core braced throughout the movement.",
  form: "Good form is everything. Keep your core engaged, control the eccentric (lowering) phase, and never sacrifice range of motion for heavier weight.",
  rest: "Rest 60-90 seconds between sets for hypertrophy, 2-3 minutes for strength. Listen to your body and take longer if needed.",
  alternative: "Most exercises have alternatives. Dumbbell variations are great substitutes for barbell lifts. Bodyweight moves work when you have no equipment.",
  warmup: "Always warm up 5-10 minutes with light cardio and dynamic stretches. Do 1-2 light sets before your working sets.",
  soreness: "Mild soreness is normal (DOMS). Stay active with light movement, stay hydrated, and ensure 7-8 hours of sleep for recovery.",
  protein: "Aim for 0.7-1g of protein per pound of body weight daily. Spread intake across 4-5 meals for optimal absorption.",
  cardio: "Combine 2-3 cardio sessions per week with your strength training. HIIT is time-efficient; steady-state is great for recovery days.",
};

const WEEK_LOG = [
  { day: "Mon", status: "done", workout: "Upper Body" },
  { day: "Tue", status: "done", workout: "Cardio" },
  { day: "Wed", status: "rest", workout: "Rest Day" },
  { day: "Thu", status: "today", workout: "Full Body" },
  { day: "Fri", status: "upcoming", workout: "Lower Body" },
  { day: "Sat", status: "upcoming", workout: "HIIT" },
  { day: "Sun", status: "upcoming", workout: "Rest Day" },
];

class FitnessCoachApp extends DashtopApp<FitnessConfig> {
  name = "Fitness Coach";
  icon = "\uD83D\uDCAA";
  color = "#ef4444";
  placeholder = "Ask about form, alternatives, rest times...";

  tabs = ["Workout", "Log", "Stats"];

  get quickActions(): QuickAction[] {
    const level = this.config.level || "beginner";
    return [
      {
        label: "Beginner",
        icon: "\uD83C\uDF31",
        active: level === "beginner",
        onClick: () => {
          this.onConfigChange({ level: "beginner" } as Partial<FitnessConfig>);
          this.config = { ...this.config, level: "beginner" };
          this.render_();
        },
      },
      {
        label: "Intermediate",
        icon: "\uD83D\uDD25",
        active: level === "intermediate",
        onClick: () => {
          this.onConfigChange({ level: "intermediate" } as Partial<FitnessConfig>);
          this.config = { ...this.config, level: "intermediate" };
          this.render_();
        },
      },
      {
        label: "Advanced",
        icon: "\u26A1",
        active: level === "advanced",
        onClick: () => {
          this.onConfigChange({ level: "advanced" } as Partial<FitnessConfig>);
          this.config = { ...this.config, level: "advanced" };
          this.render_();
        },
      },
    ];
  }

  renderContent(container: HTMLElement): void {
    switch (this.activeTab) {
      case 0:
        this.renderWorkout(container);
        break;
      case 1:
        this.renderLog(container);
        break;
      case 2:
        this.renderStats(container);
        break;
    }
  }

  // ── Workout Tab ────────────────────────────────

  private renderWorkout(container: HTMLElement): void {
    const level = this.config.level || "beginner";
    const exercises = WORKOUTS[level] || WORKOUTS.beginner;
    const completed = exercises.filter(
      (e) => this.getState<boolean>(`done_${e.id}`, false)
    ).length;
    const total = exercises.length;
    const allDone = completed === total;

    const headerHtml = allDone
      ? `<div style="text-align:center;padding:12px;font-size:14px;font-weight:600;color:#16a34a;background:#f0fdf4;border-radius:8px;margin:12px;">
           <span style="font-size:24px;">&#127881;</span> Workout Complete!
         </div>`
      : `<div style="padding:12px 12px 4px;font-size:12px;color:#666;">
           <span style="font-weight:600;color:${this.color};">${completed}/${total}</span> complete
           <div style="height:4px;background:#f0f0f0;border-radius:4px;margin-top:6px;">
             <div style="height:4px;background:${this.color};border-radius:4px;width:${(completed / total) * 100}%;transition:width 0.3s;"></div>
           </div>
         </div>`;

    const listContainer = document.createElement("div");
    container.innerHTML = headerHtml;
    container.appendChild(listContainer);

    const items: ListItem[] = exercises.map((ex) => ({
      id: ex.id,
      label: ex.name,
      sublabel: ex.reps,
      badge: ex.muscle,
      badgeColor: MUSCLE_COLORS[ex.muscle] || "#888",
      icon: ex.icon,
      checked: this.getState<boolean>(`done_${ex.id}`, false),
      onCheck: (checked: boolean) => {
        this.setState(`done_${ex.id}`, checked);
        this.refresh();
      },
    }));

    this.renderList(listContainer, items);
  }

  // ── Log Tab ────────────────────────────────────

  private renderLog(container: HTMLElement): void {
    const streak = 4;

    // Week view
    const weekHtml = WEEK_LOG.map((d) => {
      const bg =
        d.status === "done"
          ? "#22c55e"
          : d.status === "today"
          ? "#3b82f6"
          : d.status === "rest"
          ? "#d1d5db"
          : "#f3f4f6";
      const textColor =
        d.status === "done" || d.status === "today" ? "white" : "#666";
      return `<div style="flex:1;text-align:center;">
        <div style="width:32px;height:32px;border-radius:8px;background:${bg};color:${textColor};display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:600;margin:0 auto;">${d.day}</div>
        <div style="font-size:9px;color:#888;margin-top:2px;">${d.status === "done" ? "done" : d.status === "rest" ? "rest" : d.status === "today" ? "today" : ""}</div>
      </div>`;
    }).join("");

    const listContainer = document.createElement("div");

    container.innerHTML = `
      <div style="padding:12px;">
        <div style="display:flex;gap:4px;margin-bottom:16px;">${weekHtml}</div>
        <div style="font-size:13px;font-weight:600;margin-bottom:12px;">
          <span style="font-size:18px;">&#128293;</span> ${streak}-day streak
        </div>
        <div style="font-size:11px;color:#888;margin-bottom:8px;">Recent Workouts</div>
      </div>
    `;
    container.appendChild(listContainer);

    const recentItems: ListItem[] = [
      { id: "r1", label: "Upper Body Strength", sublabel: "Today, 45 min", badge: "520 cal", icon: "\uD83C\uDFCB\uFE0F" },
      { id: "r2", label: "HIIT Cardio", sublabel: "Yesterday, 30 min", badge: "380 cal", icon: "\uD83C\uDFC3" },
      { id: "r3", label: "Lower Body Power", sublabel: "2 days ago, 50 min", badge: "610 cal", icon: "\uD83E\uDDB5" },
      { id: "r4", label: "Core & Mobility", sublabel: "3 days ago, 25 min", badge: "200 cal", icon: "\uD83E\uDDD8" },
    ];

    this.renderList(listContainer, recentItems);
  }

  // ── Stats Tab ──────────────────────────────────

  private renderStats(container: HTMLElement): void {
    const stats = [
      { label: "Workouts", value: "47", icon: "\uD83C\uDFCB\uFE0F" },
      { label: "Minutes", value: "1,840", icon: "\u23F1\uFE0F" },
      { label: "Calories", value: "18.2k", icon: "\uD83D\uDD25" },
      { label: "Streak", value: "4 days", icon: "\uD83D\uDCAA" },
    ];

    container.innerHTML = `
      <div style="padding:12px;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          ${stats
            .map(
              (s) => `
            <div style="background:#fafafa;border-radius:10px;padding:14px;text-align:center;border:1px solid #f0f0f0;">
              <div style="font-size:22px;margin-bottom:4px;">${s.icon}</div>
              <div style="font-size:20px;font-weight:700;color:#1a1a2e;">${s.value}</div>
              <div style="font-size:11px;color:#888;margin-top:2px;">${s.label}</div>
            </div>
          `
            )
            .join("")}
        </div>
        <div style="margin-top:16px;padding:12px;background:#fef2f2;border-radius:10px;border:1px solid #fecaca;">
          <div style="font-size:12px;font-weight:600;color:#991b1b;margin-bottom:4px;">Weekly Goal</div>
          <div style="font-size:11px;color:#666;">4 of 5 workouts completed this week</div>
          <div style="height:6px;background:#fecaca;border-radius:4px;margin-top:8px;">
            <div style="height:6px;background:${this.color};border-radius:4px;width:80%;"></div>
          </div>
        </div>
      </div>
    `;
  }

  // ── Chat Handler ───────────────────────────────

  async onChat(message: string): Promise<string> {
    const lower = message.toLowerCase();

    for (const [keyword, response] of Object.entries(CHAT_RESPONSES)) {
      if (lower.includes(keyword)) return response;
    }

    if (lower.includes("stretch") || lower.includes("cool")) {
      return "Cool down with 5-10 minutes of static stretching. Hold each stretch 20-30 seconds, focusing on the muscles you trained today.";
    }

    if (lower.includes("beginner") || lower.includes("start")) {
      return "Start with 3 full-body sessions per week. Focus on compound movements like squats, push-ups, and rows. Master form before adding weight.";
    }

    return "Great question! Focus on consistency over intensity. Train 3-5x per week, eat enough protein, sleep 7-8 hours, and progressive overload is your best friend.";
  }

  // ── Internal re-render ─────────────────────────

  private render_(): void {
    if (!this.root) return;
    const content = this.root.querySelector("#da-content") as HTMLElement;
    if (content) this.renderContent(content);
    // Also refresh quick actions since active state changed
    const quickContainer = this.root.querySelector(".da-quick")?.parentElement;
    if (quickContainer) {
      quickContainer.innerHTML = this.quickActions
        .map(
          (a, i) =>
            `<button class="da-quick" data-qi="${i}" style="padding:3px 8px;font-size:11px;border:1px solid ${a.active ? this.color : "#ddd"};border-radius:12px;background:${a.active ? this.color : "white"};color:${a.active ? "white" : "#666"};cursor:pointer;white-space:nowrap;">${a.icon ? a.icon + " " : ""}${a.label}</button>`
        )
        .join("");
      quickContainer.querySelectorAll(".da-quick").forEach((el) => {
        el.addEventListener("click", () => {
          const idx = parseInt((el as HTMLElement).dataset.qi || "0");
          this.quickActions[idx]?.onClick();
        });
      });
    }
  }
}

export default new FitnessCoachApp().asWidget();
