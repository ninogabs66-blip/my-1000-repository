
const grades = [85, 90, 88];

const validGrades = grades.every(
  grade => Number.isFinite(grade) && grade >= 0 && grade <= 100
);

if (!validGrades || grades.length === 0) {
  console.log("Error: Grades must be between 0 and 100.");
} else {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  const average = total / grades.length;

  console.log("===== GRADE CALCULATOR =====");
  console.log("Grades:", grades.join(", "));
  console.log("Average:", average.toFixed(2));

  if (average >= 75) {
    console.log("Result: PASSED");
  } else {
    console.log("Result: FAILED");
  }

  if (average >= 90) {
    console.log("Performance: EXCELLENT");
  } else if (average >= 85) {
    console.log("Performance: VERY GOOD");
  } else if (average >= 75) {
    console.log("Performance: GOOD");
  } else {
    console.log("Performance: NEEDS IMPROVEMENT");
  }

  console.log("============================");
}
