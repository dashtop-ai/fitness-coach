/**
 * Curated exercise dataset based on free-exercise-db (public domain).
 * ~30 exercises across 6 body-part categories with level-appropriate
 * sets/reps configurations.
 */

export interface ExerciseData {
  id: string;
  name: string;
  bodyPart: string;
  equipment: string;
  sets: { beginner: string; intermediate: string; advanced: string };
  reps: { beginner: string; intermediate: string; advanced: string };
  description: string;
}

export type BodyPart =
  | "Chest"
  | "Back"
  | "Legs"
  | "Shoulders"
  | "Arms"
  | "Core";

export const EXERCISES: ExerciseData[] = [
  // ── Chest (5) ──────────────────────────────────
  {
    id: "chest-bench-press",
    name: "Barbell Bench Press",
    bodyPart: "Chest",
    equipment: "Barbell",
    sets: { beginner: "3", intermediate: "4", advanced: "5" },
    reps: { beginner: "10", intermediate: "8", advanced: "6" },
    description:
      "Lie on a flat bench, grip the barbell slightly wider than shoulder-width, lower to mid-chest, and press up to full lockout.",
  },
  {
    id: "chest-push-ups",
    name: "Push-Ups",
    bodyPart: "Chest",
    equipment: "Body Only",
    sets: { beginner: "3", intermediate: "4", advanced: "4" },
    reps: { beginner: "10", intermediate: "15", advanced: "25" },
    description:
      "Start in a high plank with hands shoulder-width apart. Lower your body until your chest nearly touches the floor, then push back up.",
  },
  {
    id: "chest-dumbbell-fly",
    name: "Dumbbell Fly",
    bodyPart: "Chest",
    equipment: "Dumbbell",
    sets: { beginner: "3", intermediate: "3", advanced: "4" },
    reps: { beginner: "12", intermediate: "10", advanced: "10" },
    description:
      "Lie on a flat bench holding dumbbells above your chest with a slight bend in the elbows. Lower the weights out to the sides in a wide arc, then squeeze them back together.",
  },
  {
    id: "chest-incline-press",
    name: "Incline Dumbbell Press",
    bodyPart: "Chest",
    equipment: "Dumbbell",
    sets: { beginner: "3", intermediate: "4", advanced: "4" },
    reps: { beginner: "10", intermediate: "8", advanced: "8" },
    description:
      "Set the bench to 30-45 degrees. Press dumbbells from shoulder height to full extension above your upper chest.",
  },
  {
    id: "chest-cable-crossover",
    name: "Cable Crossover",
    bodyPart: "Chest",
    equipment: "Cable",
    sets: { beginner: "3", intermediate: "3", advanced: "4" },
    reps: { beginner: "12", intermediate: "12", advanced: "10" },
    description:
      "Stand between two cable pulleys set high. Step forward and bring the handles together in front of your chest with a slight elbow bend, squeezing at the bottom.",
  },

  // ── Back (5) ───────────────────────────────────
  {
    id: "back-pull-ups",
    name: "Pull-Ups",
    bodyPart: "Back",
    equipment: "Body Only",
    sets: { beginner: "3", intermediate: "4", advanced: "5" },
    reps: { beginner: "5", intermediate: "8", advanced: "10" },
    description:
      "Hang from a bar with an overhand grip slightly wider than shoulder-width. Pull yourself up until your chin clears the bar, then lower under control.",
  },
  {
    id: "back-barbell-row",
    name: "Barbell Row",
    bodyPart: "Back",
    equipment: "Barbell",
    sets: { beginner: "3", intermediate: "4", advanced: "5" },
    reps: { beginner: "10", intermediate: "8", advanced: "6" },
    description:
      "Hinge at the hips with a flat back, grip the barbell shoulder-width apart, and row it towards your lower chest, squeezing your shoulder blades together.",
  },
  {
    id: "back-lat-pulldown",
    name: "Lat Pulldown",
    bodyPart: "Back",
    equipment: "Cable",
    sets: { beginner: "3", intermediate: "4", advanced: "4" },
    reps: { beginner: "12", intermediate: "10", advanced: "8" },
    description:
      "Sit at a lat pulldown machine, grip the bar wide, and pull it down to your upper chest while keeping your torso upright. Control the return.",
  },
  {
    id: "back-seated-row",
    name: "Seated Cable Row",
    bodyPart: "Back",
    equipment: "Cable",
    sets: { beginner: "3", intermediate: "3", advanced: "4" },
    reps: { beginner: "12", intermediate: "10", advanced: "10" },
    description:
      "Sit upright at a cable row station. Pull the handle to your midsection, retracting your shoulder blades, then extend arms with control.",
  },
  {
    id: "back-deadlift",
    name: "Deadlift",
    bodyPart: "Back",
    equipment: "Barbell",
    sets: { beginner: "3", intermediate: "4", advanced: "5" },
    reps: { beginner: "8", intermediate: "6", advanced: "5" },
    description:
      "Stand with feet hip-width apart, grip the barbell just outside your knees. Drive through your heels, extending hips and knees simultaneously to stand tall.",
  },

  // ── Legs (5) ───────────────────────────────────
  {
    id: "legs-squats",
    name: "Barbell Squats",
    bodyPart: "Legs",
    equipment: "Barbell",
    sets: { beginner: "3", intermediate: "4", advanced: "5" },
    reps: { beginner: "10", intermediate: "8", advanced: "6" },
    description:
      "Place the barbell across your upper back. Squat down by bending hips and knees until thighs are parallel to the floor, then drive back up.",
  },
  {
    id: "legs-lunges",
    name: "Walking Lunges",
    bodyPart: "Legs",
    equipment: "Dumbbell",
    sets: { beginner: "3", intermediate: "3", advanced: "4" },
    reps: { beginner: "10/leg", intermediate: "12/leg", advanced: "12/leg" },
    description:
      "Step forward into a lunge, lowering your back knee toward the floor. Push off the front foot to step into the next lunge. Alternate legs.",
  },
  {
    id: "legs-leg-press",
    name: "Leg Press",
    bodyPart: "Legs",
    equipment: "Machine",
    sets: { beginner: "3", intermediate: "4", advanced: "4" },
    reps: { beginner: "12", intermediate: "10", advanced: "8" },
    description:
      "Sit in the leg press machine with feet shoulder-width on the platform. Lower the sled by bending your knees, then press back to the start without locking out.",
  },
  {
    id: "legs-calf-raises",
    name: "Standing Calf Raises",
    bodyPart: "Legs",
    equipment: "Machine",
    sets: { beginner: "3", intermediate: "4", advanced: "4" },
    reps: { beginner: "15", intermediate: "15", advanced: "20" },
    description:
      "Stand on the edge of a step or calf raise machine. Rise up onto your toes as high as possible, pause, then lower your heels below the platform.",
  },
  {
    id: "legs-romanian-deadlift",
    name: "Romanian Deadlift",
    bodyPart: "Legs",
    equipment: "Barbell",
    sets: { beginner: "3", intermediate: "4", advanced: "4" },
    reps: { beginner: "10", intermediate: "8", advanced: "8" },
    description:
      "Hold a barbell at hip height. Hinge at the hips, pushing them back while keeping a slight knee bend and flat back. Lower until you feel a hamstring stretch, then return.",
  },

  // ── Shoulders (5) ──────────────────────────────
  {
    id: "shoulders-overhead-press",
    name: "Overhead Press",
    bodyPart: "Shoulders",
    equipment: "Barbell",
    sets: { beginner: "3", intermediate: "4", advanced: "5" },
    reps: { beginner: "10", intermediate: "8", advanced: "6" },
    description:
      "Stand with the barbell at shoulder height. Press it overhead to full lockout, keeping your core tight and avoiding excessive back arch.",
  },
  {
    id: "shoulders-lateral-raises",
    name: "Lateral Raises",
    bodyPart: "Shoulders",
    equipment: "Dumbbell",
    sets: { beginner: "3", intermediate: "3", advanced: "4" },
    reps: { beginner: "12", intermediate: "12", advanced: "15" },
    description:
      "Stand with dumbbells at your sides. Raise them out to the sides until your arms are parallel with the floor, then lower slowly.",
  },
  {
    id: "shoulders-front-raises",
    name: "Front Raises",
    bodyPart: "Shoulders",
    equipment: "Dumbbell",
    sets: { beginner: "3", intermediate: "3", advanced: "4" },
    reps: { beginner: "12", intermediate: "10", advanced: "12" },
    description:
      "Hold dumbbells in front of your thighs. Raise one or both arms straight ahead to shoulder height, then lower under control.",
  },
  {
    id: "shoulders-face-pulls",
    name: "Face Pulls",
    bodyPart: "Shoulders",
    equipment: "Cable",
    sets: { beginner: "3", intermediate: "3", advanced: "4" },
    reps: { beginner: "15", intermediate: "12", advanced: "12" },
    description:
      "Set a cable pulley at upper chest height with a rope attachment. Pull toward your face, separating the rope ends and squeezing your rear delts.",
  },
  {
    id: "shoulders-shrugs",
    name: "Barbell Shrugs",
    bodyPart: "Shoulders",
    equipment: "Barbell",
    sets: { beginner: "3", intermediate: "3", advanced: "4" },
    reps: { beginner: "12", intermediate: "10", advanced: "10" },
    description:
      "Hold a barbell at arm's length in front of you. Shrug your shoulders straight up toward your ears, pause at the top, then lower.",
  },

  // ── Arms (5) ───────────────────────────────────
  {
    id: "arms-bicep-curls",
    name: "Barbell Bicep Curls",
    bodyPart: "Arms",
    equipment: "Barbell",
    sets: { beginner: "3", intermediate: "3", advanced: "4" },
    reps: { beginner: "12", intermediate: "10", advanced: "10" },
    description:
      "Stand holding a barbell with an underhand grip at arm's length. Curl the bar up to shoulder height without swinging, then lower slowly.",
  },
  {
    id: "arms-tricep-dips",
    name: "Tricep Dips",
    bodyPart: "Arms",
    equipment: "Body Only",
    sets: { beginner: "3", intermediate: "4", advanced: "4" },
    reps: { beginner: "8", intermediate: "10", advanced: "12" },
    description:
      "Support yourself on parallel bars with arms straight. Lower your body by bending the elbows until your upper arms are parallel to the floor, then press back up.",
  },
  {
    id: "arms-hammer-curls",
    name: "Hammer Curls",
    bodyPart: "Arms",
    equipment: "Dumbbell",
    sets: { beginner: "3", intermediate: "3", advanced: "4" },
    reps: { beginner: "12", intermediate: "10", advanced: "10" },
    description:
      "Hold dumbbells with a neutral grip (palms facing each other). Curl them up to shoulder height, keeping your elbows pinned to your sides.",
  },
  {
    id: "arms-skull-crushers",
    name: "Skull Crushers",
    bodyPart: "Arms",
    equipment: "E-Z Curl Bar",
    sets: { beginner: "3", intermediate: "3", advanced: "4" },
    reps: { beginner: "10", intermediate: "10", advanced: "8" },
    description:
      "Lie on a flat bench with an EZ bar held above your chest. Bend at the elbows to lower the bar toward your forehead, then extend back up.",
  },
  {
    id: "arms-preacher-curl",
    name: "Preacher Curl",
    bodyPart: "Arms",
    equipment: "E-Z Curl Bar",
    sets: { beginner: "3", intermediate: "3", advanced: "4" },
    reps: { beginner: "12", intermediate: "10", advanced: "8" },
    description:
      "Sit at a preacher bench with your upper arms resting on the pad. Curl the bar up, squeeze at the top, then lower with a slow eccentric.",
  },

  // ── Core (5) ───────────────────────────────────
  {
    id: "core-planks",
    name: "Plank Hold",
    bodyPart: "Core",
    equipment: "Body Only",
    sets: { beginner: "3", intermediate: "3", advanced: "4" },
    reps: { beginner: "20s", intermediate: "40s", advanced: "60s" },
    description:
      "Support yourself on your forearms and toes with a straight body line. Engage your core and hold the position without letting your hips sag.",
  },
  {
    id: "core-crunches",
    name: "Crunches",
    bodyPart: "Core",
    equipment: "Body Only",
    sets: { beginner: "3", intermediate: "3", advanced: "4" },
    reps: { beginner: "15", intermediate: "20", advanced: "25" },
    description:
      "Lie on your back with knees bent and hands behind your head. Curl your shoulders off the floor by contracting your abs, then lower slowly.",
  },
  {
    id: "core-russian-twists",
    name: "Russian Twists",
    bodyPart: "Core",
    equipment: "Body Only",
    sets: { beginner: "3", intermediate: "3", advanced: "4" },
    reps: { beginner: "10/side", intermediate: "15/side", advanced: "20/side" },
    description:
      "Sit with knees bent, lean back slightly, and lift your feet off the ground. Rotate your torso side to side, touching the floor beside each hip.",
  },
  {
    id: "core-leg-raises",
    name: "Hanging Leg Raises",
    bodyPart: "Core",
    equipment: "Body Only",
    sets: { beginner: "3", intermediate: "3", advanced: "4" },
    reps: { beginner: "8", intermediate: "12", advanced: "15" },
    description:
      "Hang from a pull-up bar with straight arms. Raise your legs to a 90-degree angle by contracting your abs, then lower under control.",
  },
  {
    id: "core-bicycle-crunches",
    name: "Bicycle Crunches",
    bodyPart: "Core",
    equipment: "Body Only",
    sets: { beginner: "3", intermediate: "3", advanced: "4" },
    reps: { beginner: "10/side", intermediate: "15/side", advanced: "20/side" },
    description:
      "Lie on your back with hands behind your head. Alternate bringing each elbow to the opposite knee in a pedaling motion while extending the other leg.",
  },
];

/** Group exercises by body part for quick lookups. */
export function getExercisesByBodyPart(
  bodyPart: BodyPart
): ExerciseData[] {
  return EXERCISES.filter((e) => e.bodyPart === bodyPart);
}

/**
 * Goal-based workout templates.
 * Each goal maps to a set of body-part categories and exercise counts
 * to pull from per workout session.
 */
export interface WorkoutTemplate {
  label: string;
  /** Body parts to include and how many exercises from each. */
  composition: { bodyPart: BodyPart; count: number }[];
}

export const GOAL_TEMPLATES: Record<string, WorkoutTemplate> = {
  strength: {
    label: "Strength",
    composition: [
      { bodyPart: "Chest", count: 2 },
      { bodyPart: "Back", count: 2 },
      { bodyPart: "Legs", count: 2 },
      { bodyPart: "Shoulders", count: 1 },
    ],
  },
  cardio: {
    label: "Cardio Circuit",
    composition: [
      { bodyPart: "Legs", count: 2 },
      { bodyPart: "Core", count: 2 },
      { bodyPart: "Chest", count: 1 },
      { bodyPart: "Back", count: 1 },
    ],
  },
  flexibility: {
    label: "Flexibility & Core",
    composition: [
      { bodyPart: "Core", count: 3 },
      { bodyPart: "Legs", count: 2 },
      { bodyPart: "Shoulders", count: 1 },
    ],
  },
  "weight-loss": {
    label: "Weight Loss Circuit",
    composition: [
      { bodyPart: "Legs", count: 2 },
      { bodyPart: "Chest", count: 1 },
      { bodyPart: "Back", count: 1 },
      { bodyPart: "Shoulders", count: 1 },
      { bodyPart: "Core", count: 2 },
    ],
  },
};

/**
 * Build a workout for a given goal and level.
 * Uses a deterministic selection (based on day-of-year) so the workout
 * rotates daily but stays consistent within the same day.
 */
export function buildWorkout(
  goal: string,
  level: "beginner" | "intermediate" | "advanced"
): { exercise: ExerciseData; setsReps: string }[] {
  const template = GOAL_TEMPLATES[goal] || GOAL_TEMPLATES.strength;
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) /
      86400000
  );

  const result: { exercise: ExerciseData; setsReps: string }[] = [];

  for (const { bodyPart, count } of template.composition) {
    const pool = getExercisesByBodyPart(bodyPart);
    // Rotate through the pool based on day-of-year
    for (let i = 0; i < count && i < pool.length; i++) {
      const idx = (dayOfYear + i) % pool.length;
      const ex = pool[idx];
      const sets = ex.sets[level];
      const reps = ex.reps[level];
      result.push({ exercise: ex, setsReps: `${sets}x${reps}` });
    }
  }

  return result;
}
