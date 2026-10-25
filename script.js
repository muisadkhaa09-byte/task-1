

/* =====================================
   ALFALAH PARENT PORTAL
   File: script.js
   ===================================== */

// 1. DATA CONTOH SISWA
// Gunakan data fiktif untuk prototipe publik.

const students = [
  {
    id: "S001",
    name: "Ahmad Yani",
    className: "X-A",
    major: "Umum",
    academicYear: "2026/2027",
    notes: {
      1: "Pertahankan semangat belajar dan tingkatkan latihan matematika.",
      2: "Menunjukkan perkembangan yang baik. Terus tingkatkan kedisiplinan."
    },
    semesters: {
      1: {
        subjects: [
          { name: "Matematika", score: 85 },
          { name: "Bahasa Indonesia", score: 90 },
          { name: "Bahasa Inggris", score: 82 },
          { name: "Informatika", score: 88 },
          { name: "IPA", score: 86 },
          { name: "IPS", score: 84 }
        ],
        attendance: {
          present: 90,
          permission: 2,
          sick: 3,
          absent: 1
        }
      },
      2: {
        subjects: [
          { name: "Matematika", score: 88 },
          { name: "Bahasa Indonesia", score: 91 },
          { name: "Bahasa Inggris", score: 86 },
          { name: "Informatika", score: 92 },
          { name: "IPA", score: 89 },
          { name: "IPS", score: 87 }
        ],
        attendance: {
          present: 92,
          permission: 1,
          sick: 2,
          absent: 0
        }
      }
    }
  },
  {
    id: "S002",
    name: "Siti Aisyah",
    className: "X-A",
    major: "Umum",
    academicYear: "2026/2027",
    notes: {
      1: "Pertahankan prestasi dan keaktifan selama pembelajaran.",
      2: "Hasil belajar baik. Terus kembangkan kemampuan dan kreativitas."
    },
    semesters: {
      1: {
        subjects: [
          { name: "Matematika", score: 92 },
          { name: "Bahasa Indonesia", score: 88 },
          { name: "Bahasa Inggris", score: 94 },
          { name: "Informatika", score: 90 },
          { name: "IPA", score: 91 },
          { name: "IPS", score: 89 }
        ],
        attendance: {
          present: 94,
          permission: 1,
          sick: 1,
          absent: 0
        }
      },
      2: {
        subjects: [
          { name: "Matematika", score: 94 },
          { name: "Bahasa Indonesia", score: 91 },
          { name: "Bahasa Inggris", score: 95 },
          { name: "Informatika", score: 93 },
          { name: "IPA", score: 92 },
          { name: "IPS", score: 91 }
        ],
        attendance: {
          present: 95,
          permission: 1,
          sick: 0,
          absent: 0
        }
      }
    }
  },
   {
    id: "S003",
    name: "muhammad supri",
    className: "X-A",
    major: "Umum",
    academicYear: "2026/2027",
    notes: {
      1: "Pertahankan semangat belajar dan tingkatkan latihan matematika.",
      2: "Menunjukkan perkembangan yang baik. Terus tingkatkan kedisiplinan."
    },
    semesters: {
      1: {
        subjects: [
          { name: "Matematika", score: 85 },
          { name: "Bahasa Indonesia", score: 90 },
          { name: "Bahasa Inggris", score: 82 },
          { name: "Informatika", score: 88 },
          { name: "IPA", score: 86 },
          { name: "IPS", score: 84 }
        ],
        attendance: {
          present: 90,
          permission: 2,
          sick: 3,
          absent: 1
        }
      },
      2: {
        subjects: [
          { name: "Matematika", score: 88 },
          { name: "Bahasa Indonesia", score: 91 },
          { name: "Bahasa Inggris", score: 86 },
          { name: "Informatika", score: 92 },
          { name: "IPA", score: 89 },
          { name: "IPS", score: 87 }
        ],
        attendance: {
          present: 92,
          permission: 1,
          sick: 2,
          absent: 0
        }
      }
    }
  },
  
  {
    id: "S001",
    name: "Muhammad Rizky",
    className: "X-B",
    major: "Umum",
    academicYear: "2026/2027",
    notes: {
      1: "Perlu meningkatkan konsistensi belajar dan latihan mandiri.",
      2: "Terus tingkatkan fokus belajar dan aktif bertanya di kelas."
    },
    semesters: {
      1: {
        subjects: [
          { name: "Matematika", score: 78 },
          { name: "Bahasa Indonesia", score: 84 },
          { name: "Bahasa Inggris", score: 80 },
          { name: "Informatika", score: 86 },
          { name: "IPA", score: 81 },
          { name: "IPS", score: 83 }
        ],
        attendance: {
          present: 85,
          permission: 3,
          sick: 5,
          absent: 2
        }
      },
      2: {
        subjects: [
          { name: "Matematika", score: 82 },
          { name: "Bahasa Indonesia", score: 86 },
          { name: "Bahasa Inggris", score: 83 },
          { name: "Informatika", score: 88 },
          { name: "IPA", score: 84 },
          { name: "IPS", score: 85 }
        ],
        attendance: {
          present: 89,
          permission: 2,
          sick: 3,
          absent: 1
        }
      }
    }
  }
];

// 2. ELEMEN HTML

const $ = (selector) => document.querySelector(selector);

const elements = {
  sidebar: $("#sidebar"),
  menuToggle: $("#menuToggle"),
  pageTitle: $("#pageTitle"),

  dashboardStudent: $("#dashboardStudent"),
  reportStudent: $("#reportStudent"),
  attendanceStudent: $("#attendanceStudent"),
  semesterSelect: $("#semesterSelect"),

  subjectCount: $("#subjectCount"),
  averageScore: $("#averageScore"),
  attendanceRate: $("#attendanceRate"),
  dashboardSubjects: $("#dashboardSubjects"),
  studentProfile: $("#studentProfile"),

  studentSearch: $("#studentSearch"),
  studentTable: $("#studentTable"),
  studentTotal: $("#studentTotal"),

  reportIdentity: $("#reportIdentity"),
  reportTable: $("#reportTable"),
  reportFooter: $("#reportFooter"),
  reportAttendance: $("#reportAttendance"),
  teacherNote: $("#teacherNote"),
  printReport: $("#printReport"),

  presentCount: $("#presentCount"),
  permissionCount: $("#permissionCount"),
  sickCount: $("#sickCount"),
  attendanceStudentName: $("#attendanceStudentName"),
  attendanceDetail: $("#attendanceDetail"),

  toast: $("#toast")
};

let toastTimer;

// 3. FUNGSI BANTUAN

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[char];
  });
}

function getStudent(id) {
  return students.find((student) => student.id === id)
    || students[0];
}

function getSelectedSemester() {
  return elements.semesterSelect.value;
}

function getSemesterData(student, semester = getSelectedSemester()) {
  return student.semesters[semester];
}

function calculateAverage(subjects) {
  if (!subjects.length) return 0;

  const total = subjects.reduce(
    (sum, subject) => sum + subject.score,
    0
  );

  return total / subjects.length;
}

function getGrade(score) {
  // Contoh predikat untuk demonstrasi.
  // Sesuaikan dengan kebijakan penilaian sekolah.
  if (score >= 90) return "Sangat Baik";
  if (score >= 80) return "Baik";
  if (score >= 70) return "Cukup";

  return "Perlu Bimbingan";
}

function calculateAttendance(attendance) {
  const total =
    attendance.present +
    attendance.permission +
    attendance.sick +
    attendance.absent;

  if (total === 0) return 0;

  return (attendance.present / total) * 100;
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2800);
}

// 4. MEMBUAT PILIHAN SISWA

function populateStudentOptions() {
  const selects = [
    elements.dashboardStudent,
    elements.reportStudent,
    elements.attendanceStudent
  ];

  const options = students.map((student) => {
    return `
      <option value="${escapeHTML(student.id)}">
        ${escapeHTML(student.name)} - ${escapeHTML(student.className)}
      </option>
    `;
  }).join("");

  selects.forEach((select) => {
    select.innerHTML = options;
  });

  // Pilih siswa pertama sebagai contoh.
  syncStudentSelection(students[0].id);
}

function syncStudentSelection(studentId) {
  elements.dashboardStudent.value = studentId;
  elements.reportStudent.value = studentId;
  elements.attendanceStudent.value = studentId;

  renderDashboard();
  renderStudentTable();
  renderReport();
  renderAttendance();
}

// 5. NAVIGASI HALAMAN

const pageTitles = {
  dashboard: "Dashboard",
  students: "Data Siswa",
  report: "Rapor Digital",
  attendance: "Absensi"
};

function showPage(pageId) {
  const target = document.getElementById(pageId);

  if (!target || !target.classList.contains("page")) {
    return;
  }

  document.querySelectorAll(".page").forEach((page) => {
    page.classList.toggle("active", page.id === pageId);
  });

  document.querySelectorAll(".nav-link").forEach((button) => {
    const active = button.dataset.page === pageId;

    button.classList.toggle("active", active);

    if (active) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  elements.pageTitle.textContent = pageTitles[pageId];
  elements.sidebar.classList.remove("open");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.querySelectorAll(".nav-link").forEach((button) => {
  button.addEventListener("click", () => {
    showPage(button.dataset.page);
  });
});

document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => {
    showPage(button.dataset.go);
  });
});

elements.menuToggle.addEventListener("click", () => {
  elements.sidebar.classList.toggle("open");
});

// 6. DASHBOARD

function renderDashboard() {
  const student = getStudent(elements.dashboardStudent.value);
  const semester = getSemesterData(student);

  const subjects = semester.subjects;
  const attendance = semester.attendance;
  const average = calculateAverage(subjects);
  const attendancePercentage = calculateAttendance(attendance);

  elements.subjectCount.textContent = subjects.length;
  elements.averageScore.textContent = average.toFixed(1);
  elements.attendanceRate.textContent =
    `${attendancePercentage.toFixed(1)}%`;

  elements.dashboardSubjects.innerHTML = subjects.map((subject) => {
    const score = Number(subject.score);
    const width = Math.max(0, Math.min(100, score));

    return `
      <div class="subject-item">
        <div class="subject-top">
          <span>${escapeHTML(subject.name)}</span>
          <span class="subject-score">${score}</span>
        </div>

        <div class="progress-track">
          <div
            class="progress-fill"
            style="width: ${width}%"
          ></div>
        </div>
      </div>
    `;
  }).join("");

  elements.studentProfile.innerHTML = `
    <div class="student-profile-card">
      <div class="student-large-avatar">
        ${escapeHTML(student.name.charAt(0).toUpperCase())}
      </div>

      <h3>${escapeHTML(student.name)}</h3>
      <p>Kelas ${escapeHTML(student.className)}</p>

      <div class="profile-details">
        <div class="detail-row">
          <span>NIS Demo</span>
          <strong>${escapeHTML(student.id)}</strong>
        </div>

        <div class="detail-row">
          <span>Jurusan</span>
          <strong>${escapeHTML(student.major)}</strong>
        </div>

        <div class="detail-row">
          <span>Tahun Ajaran</span>
          <strong>${escapeHTML(student.academicYear)}</strong>
        </div>

        <div class="detail-row">
          <span>Semester</span>
          <strong>${escapeHTML(getSelectedSemester())}</strong>
        </div>
      </div>
    </div>
  `;
}

// 7. DAFTAR DAN PENCARIAN SISWA

function renderStudentTable() {
  const keyword = elements.studentSearch.value
    .trim()
    .toLowerCase();

  const filteredStudents = students.filter((student) => {
    const searchableText = [
      student.name,
      student.id,
      student.className,
      student.major
    ].join(" ").toLowerCase();

    return searchableText.includes(keyword);
  });

  elements.studentTotal.textContent =
    `${filteredStudents.length} siswa`;

  if (filteredStudents.length === 0) {
    elements.studentTable.innerHTML = `
      <tr>
        <td colspan="4" class="empty-state">
          Data siswa tidak ditemukan.
        </td>
      </tr>
    `;

    return;
  }

  elements.studentTable.innerHTML = filteredStudents.map((student) => `
    <tr>
      <td>${escapeHTML(student.name)}</td>
      <td>${escapeHTML(student.id)}</td>
      <td>${escapeHTML(student.className)}</td>
      <td>
        <button
          class="table-action"
          data-view-student="${escapeHTML(student.id)}"
        >
          Lihat rapor
        </button>
      </td>
    </tr>
  `).join("");
}

elements.studentSearch.addEventListener("input", renderStudentTable);

elements.studentTable.addEventListener("click", (event) => {
  const button = event.target.closest("[data-view-student]");

  if (!button) return;

  const studentId = button.dataset.viewStudent;

  syncStudentSelection(studentId);
  showPage("report");
});

// 8. RAPOR DIGITAL


function renderReport() {
  const student = getStudent(elements.reportStudent.value);
  const semesterNumber = getSelectedSemester();

  if (!student) return;

  const semester = student.semesters?.[semesterNumber];

  // Pastikan elemen tabel tersedia.
  if (!elements.reportTable) return;

  // Jika data semester belum tersedia.
  if (!semester || !Array.isArray(semester.subjects)) {
    elements.reportTable.innerHTML = `
      <tr>
        <td colspan="4" style="text-align:center;padding:20px">
          Data mata pelajaran dan nilai belum tersedia
          untuk semester ini.
        </td>
      </tr>
    `;

    elements.reportFooter.innerHTML = "";
    return;
  }

  const subjects = semester.subjects;
  const attendance = semester.attendance || {
    present: 0,
    permission: 0,
    sick: 0,
    absent: 0
  };

  const average = subjects.length
    ? subjects.reduce((total, item) => total + Number(item.score || 0), 0)
      / subjects.length
    : 0;

  // Identitas siswa
  elements.reportIdentity.innerHTML = `
    <div class="identity-item">
      <span>Nama Siswa</span>
      <strong>${escapeHTML(student.name)}</strong>
    </div>
    <div class="identity-item">
      <span>NIS Demo</span>
      <strong>${escapeHTML(student.id)}</strong>
    </div>
    <div class="identity-item">
      <span>Kelas</span>
      <strong>${escapeHTML(student.className)}</strong>
    </div>
    <div class="identity-item">
      <span>Jurusan</span>
      <strong>${escapeHTML(student.major || "-")}</strong>
    </div>
    <div class="identity-item">
      <span>Tahun Ajaran</span>
      <strong>${escapeHTML(student.academicYear || "-")}</strong>
    </div>
    <div class="identity-item">
      <span>Semester</span>
      <strong>${escapeHTML(semesterNumber)}</strong>
    </div>
  `;

  // Mata pelajaran dan nilai
  if (subjects.length === 0) {
    elements.reportTable.innerHTML = `
      <tr>
        <td colspan="4" style="text-align:center;padding:20px">
          Belum ada nilai untuk siswa ini.
        </td>
      </tr>
    `;
  } else {
    elements.reportTable.innerHTML = subjects.map((subject, index) => {
      const score = Number(subject.score);

      return `
        <tr>
          <td>${index + 1}</td>
          <td>${escapeHTML(subject.name)}</td>
          <td>${Number.isFinite(score) ? score : "-"}</td>
          <td>${Number.isFinite(score) ? escapeHTML(getGrade(score)) : "-"}</td>
        </tr>
      `;
    }).join("");
  }

  // Rata-rata nilai
  elements.reportFooter.innerHTML = `
    <tr>
      <td colspan="2"><strong>Rata-rata Nilai</strong></td>
      <td><strong>${average.toFixed(2)}</strong></td>
      <td>${subjects.length ? escapeHTML(getGrade(average)) : "-"}</td>
    </tr>
  `;

  // Rekap kehadiran
  elements.reportAttendance.innerHTML = `
    <tr>
      <td>${attendance.present} hari</td>
      <td>${attendance.permission} hari</td>
      <td>${attendance.sick} hari</td>
      <td>${attendance.absent} hari</td>
    </tr>
  `;

  // Catatan wali kelas
  elements.teacherNote.textContent =
    student.notes?.[semesterNumber] ||
    "Belum ada catatan wali kelas.";
}

// 9. REKAP ABSENSI

function renderAttendance() {
  const student = getStudent(elements.attendanceStudent.value);
  const semester = getSemesterData(student);
  const attendance = semester.attendance;

  const total =
    attendance.present +
    attendance.permission +
    attendance.sick +
    attendance.absent;

  const percentage = calculateAttendance(attendance);

  elements.presentCount.textContent = attendance.present;
  elements.permissionCount.textContent = attendance.permission;
  elements.sickCount.textContent = attendance.sick;

  elements.attendanceStudentName.textContent =
    `${student.name} · Kelas ${student.className}`;

  const details = [
    {
      label: "Hadir",
      count: attendance.present,
      color: "#31845b"
    },
    {
      label: "Izin",
      count: attendance.permission,
      color: "#507ac1"
    },
    {
      label: "Sakit",
      count: attendance.sick,
      color: "#c78635"
    },
    {
      label: "Alpa",
      count: attendance.absent,
      color: "#c45a5a"
    }
  ];

  elements.attendanceDetail.innerHTML = `
    <div class="attendance-progress">
      ${details.map((item) => {
        const width = total > 0
          ? (item.count / total) * 100
          : 0;

        return `
          <div class="attendance-progress-top">
            <span>${item.label}</span>
            <strong>${item.count} hari</strong>
          </div>

          <div class="progress-track">
            <div
              class="progress-fill"
              style="
                width: ${width}%;
                background: ${item.color};
              "
            ></div>
          </div>
        `;
      }).join("")}
    </div>

    <div class="detail-row">
      <span>Total hari tercatat</span>
      <strong>${total} hari</strong>
    </div>

    <div class="detail-row">
      <span>Persentase kehadiran</span>
      <strong>${percentage.toFixed(1)}%</strong>
    </div>
  `;
}

// 10. EVENT PEMILIHAN SISWA

elements.dashboardStudent.addEventListener("change", (event) => {
  syncStudentSelection(event.target.value);
});

elements.reportStudent.addEventListener("change", (event) => {
  syncStudentSelection(event.target.value);
});

elements.attendanceStudent.addEventListener("change", (event) => {
  syncStudentSelection(event.target.value);
});

// 11. EVENT PEMILIHAN SEMESTER

elements.semesterSelect.addEventListener("change", () => {
  renderDashboard();
  renderReport();
  renderAttendance();

  showToast("Data semester berhasil diperbarui.");
});

// 12. CETAK / SIMPAN PDF

elements.printReport.addEventListener("click", () => {
  const student = getStudent(elements.reportStudent.value);

  // Pastikan data yang akan dicetak sesuai dengan
  // siswa yang dipilih pada halaman rapor.
  syncStudentSelection(student.id);
  showPage("report");

  window.print();
});

// 13. JALANKAN WEBSITE

function init() {
  populateStudentOptions();

  renderDashboard();
  renderStudentTable();
  renderReport();
  renderAttendance();

  console.log("Alfalah Parent Portal berhasil dijalankan.");
}

init();

// ==========================================
// PENCARIAN GLOBAL UNTUK SEMUA MENU
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
    const searchInputs = document.querySelectorAll(
        'input[type="search"], input[type="text"][placeholder*="Cari"], #searchInput, #search'
    );

    function jalankanPencarian(keyword) {
        const kata = keyword.trim().toLowerCase();

        // Cari pada seluruh konten menu yang sedang aktif
        const kontenAktif = document.querySelector(
            ".page.active, .content.active, .menu-content.active, main"
        );

        if (!kontenAktif) return;

        const elemen = kontenAktif.querySelectorAll(
            ".card, .menu-card, .item, tr, li, article, .searchable"
        );

        elemen.forEach(function (item) {
            const cocok = item.textContent.toLowerCase().includes(kata);
            item.style.display = cocok ? "" : "none";
        });
    }

    searchInputs.forEach(function (input) {
        input.addEventListener("input", function () {
            jalankanPencarian(input.value);
        });
    });
});
