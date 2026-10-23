
const grades = {
  ganjil: [
    { subject: "Matematika", score: 86 },
    { subject: "Bahasa Indonesia", score: 88 },
    { subject: "Bahasa Inggris", score: 79 },
    { subject: "Biologi", score: 85 }
  ],

  genap: [
    { subject: "Matematika", score: 89 },
    { subject: "Bahasa Indonesia", score: 90 },
    { subject: "Bahasa Inggris", score: 83 },
    { subject: "Biologi", score: 87 }
  ]
};

const semesterSelect = document.getElementById("semester");
const gradeList = document.getElementById("grade-list");
const averageElement = document.getElementById("average");

function renderGrades() {
  const selectedSemester = semesterSelect.value;
  const selectedGrades = grades[selectedSemester];

  gradeList.replaceChildren();

  selectedGrades.forEach((item) => {
    const row = document.createElement("tr");
    const subjectCell = document.createElement("td");
    const scoreCell = document.createElement("td");

    subjectCell.textContent = item.subject;
    scoreCell.textContent = item.score;

    row.append(subjectCell, scoreCell);
    gradeList.appendChild(row);
  });

  const total = selectedGrades.reduce(
    (sum, item) => sum + item.score,
    0
  );

  const average = total / selectedGrades.length;
  averageElement.textContent = average.toFixed(1);
}

semesterSelect.addEventListener("change", renderGrades);

renderGrades();

const studentForm = document.getElementById("student-form");

studentForm.addEventListener("submit", function (event) {
  // Mencegah halaman dimuat ulang
  event.preventDefault();

  // Mengambil data dari formulir
  const name = document
    .getElementById("student-name")
    .value.trim();

  const studentClass = document
    .getElementById("student-class")
    .value;

  const major = document
    .getElementById("student-major")
    .value;

  // Memastikan semua data telah diisi
  if (!name || !studentClass || !major) {
    document.getElementById("form-message").textContent =
      "Mohon lengkapi semua identitas siswa.";
    return;
  }

  // Menampilkan identitas pada dashboard
  document.getElementById("display-name").textContent = name;
  document.getElementById("display-class").textContent =
    studentClass;
  document.getElementById("display-major").textContent = major;

  // Menampilkan pesan berhasil
  document.getElementById("form-message").textContent =
    "Identitas siswa berhasil ditampilkan.";

  // Mengembalikan formulir ke kondisi awal
  studentForm.reset();
});
