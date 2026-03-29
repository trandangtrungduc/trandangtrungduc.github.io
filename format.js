const { execSync } = require('child_process');
const files = [
  "_config.yml",
  "_data/cv.yml",
  "_news/announcement_1.md",
  "_news/announcement_2.md",
  "_news/announcement_3.md",
  "_news/announcement_6.md",
  "_news/announcement_7.md",
  "_news/announcement_8.md",
  "_pages/about_duc.md",
  "_pages/about.md",
  "_pages/projects.md",
  "_posts/2023-04-24-mobile-robot.md",
  "_posts/2024-07-21-3d-instance_segmentation.md",
  "_projects/1_project.md",
  "_projects/2_project.md",
  "_projects/3_project.md",
  "_projects/4_project.md",
  "_projects/5_project.md",
  "_projects/6_project.md",
  "assets/html/msta3d.html",
  "assets/json/resume.json"
];

console.log("Starting formatting...");

for (const file of files) {
  try {
    const output = execSync('npx.cmd --yes prettier --write "' + file + '"').toString();
    console.log(`Success: ${file}`, output);
  } catch (err) {
    console.error(`Error formatting ${file}:`, err.message);
  }
}
console.log("Done formatting!");
