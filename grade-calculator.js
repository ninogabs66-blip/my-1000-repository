
const grades = [85, 90, 88];

const total = grades.reduce((sum, grade) => sum + grade, 0);
const average = total / grades.length;

console.log("Grades:", grades);
console.log("Average:", average.toFixed(2));

if (average >= 75) {
  console.log("Result: PASSED");
} else {
  console.log("Result: FAILED");
}
