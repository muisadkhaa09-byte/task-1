
/* ============================================
   ALFALAH PARENT PORTAL - ENHANCEMENTS
   File tambahan: enhancements.js

   Tidak mengganti script.js yang lama.
   ============================================ */

(function () {
  "use strict";

  // Jalankan setelah HTML selesai dimuat.
  function setupEnhancements() {
    // Pastikan data dari script.js sudah tersedia.
    if (
      typeof students === "undefined" ||
      typeof syncStudentSelection !== "function"
    ) {
      console.error("Data siswa atau script.js belum tersedia.");
      return;
    }

    const $ = (selector) => document.querySelector(selector);

    const dashboard = $("#dashboard");
    const dashboardStudent = $("#dashboardStudent");
    const reportStudent = $("#reportStudent");
    const attendanceStudent = $("#attendanceStudent");
    const studentSearch = $("#studentSearch");
    const studentTable = $("#studentTable");

    if (
      !dashboard ||
      !dashboardStudent ||
      !reportStudent ||
      !attendanceStudent
    ) {
      console.error("Elemen portal akademik tidak ditemukan.");
      return;
    }

    // ========================================
    // 1. UBAH NAMA MENU MENJADI PERKEMBANGAN
    // ========================================

    const developmentMenu = document.querySelector(
      '.nav-link[data-page="students"]'
    );

    if (developmentMenu) {
      developmentMenu.innerHTML =
        "<span>↗</span> Perkembangan Siswa";
    }

    // Mengubah judul halaman tanpa mengganti
    // sistem navigasi yang lama.
    if (typeof pageTitles !== "undefined") {
      pageTitles.students = "Perkembangan Siswa";
    }

    const developmentHeading = $("#students .section-heading h2");
    const developmentDescription = $(
      "#students .section-heading p"
    );

    if (developmentHeading) {
      developmentHeading.textContent = "Perkembangan Siswa";
    }

    if (developmentDescription) {
      developmentDescription.textContent =
        "Pantau nilai, kehadiran, dan perkembangan akademik siswa.";
    }

    // ========================================
    // 2. BUAT FILTER KELAS DI DASHBOARD
    // ========================================

    const welcomeBanner = dashboard.querySelector(
      ".welcome-banner"
    );

    const originalStudentSelect = dashboardStudent;

    // Gunakan filter yang sudah ada jika script ini
    // tanpa sengaja dijalankan kembali.
    let filterPanel = $("#dashboardFilters");

    if (!filterPanel) {
      filterPanel = document.createElement("div");

      filterPanel.id = "dashboardFilters";
      filterPanel.className = "dashboard-filters";

      filterPanel.innerHTML = `
        <div class="dashboard-filter-field">
          <label for="dashboardClass">
            1. Pilih Kelas
          </label>
          <select id="dashboardClass">
            <option value="">Pilih kelas terlebih dahulu</option>
          </select>
        </div>

        <div class="dashboard-filter-field">
          <label for="dashboardStudent">
            2. Pilih Nama Siswa
          </label>
        </div>
      `;

      const studentField = filterPanel.querySelector(
        ".dashboard-filter-field:last-child"
      );

      // Pindahkan dropdown siswa yang lama ke filter baru.
      // Event JavaScript yang lama tetap terpasang.
      studentField.appendChild(originalStudentSelect);

      originalStudentSelect.setAttribute(
        "aria-label",
        "Pilih nama siswa"
      );

      if (welcomeBanner) {
        welcomeBanner.insertAdjacentElement(
          "afterend",
          filterPanel
        );
      } else {
        dashboard.prepend(filterPanel);
      }
    }

    const classSelect = $("#dashboardClass");

    // ========================================
    // 3. KUMPULKAN DAFTAR KELAS OTOMATIS
    // ========================================

    const classes = [
      ...new Set(students.map((student) => student.className))
    ].sort((a, b) => a.localeCompare(b, "id"));

    classSelect.innerHTML = `
      <option value="">Pilih kelas terlebih dahulu</option>
      ${classes.map((className) => `
        <option value="${escapeValue(className)}">
          Kelas ${escapeHTML(className)}
        </option>
      `).join("")}
    `;

    // Helper untuk teks HTML.
    // Memakai fungsi lokal agar file ini mandiri.
    function escapeHTML(value) {
      return String(value).replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[char]);
    }

    function escapeValue(value) {
      return escapeHTML(value);
    }

    // ========================================
    // 4. ISI DAFTAR SISWA BERDASARKAN KELAS
    // ========================================

    function updateStudentsByClass(className) {
      const filteredStudents = students.filter(
        (student) => student.className === className
      );

      if (!className || filteredStudents.length === 0) {
        dashboardStudent.innerHTML = `
          <option value="">Pilih kelas terlebih dahulu</option>
        `;

        dashboardStudent.disabled = true;

        return [];
      }

      dashboardStudent.innerHTML = `
        <option value="">Pilih nama siswa</option>
        ${filteredStudents.map((student) => `
          <option value="${escapeValue(student.id)}">
            ${escapeHTML(student.name)}
          </option>
        `).join("")}
      `;

      dashboardStudent.disabled = false;

      return filteredStudents;
    }

    // ========================================
    // 5. SINKRONISASI SEMUA HALAMAN
    // ========================================
   
function selectStudent(studentId) {
  const student = students.find(
    (item) => item.id === studentId
  );

  if (!student) return;

  classSelect.value = student.className;
  updateStudentsByClass(student.className);
  dashboardStudent.value = student.id;

  // Perbarui Dashboard, Rapor, dan Absensi
  syncStudentSelection(student.id);
}

    // ========================================
    // 6. PENGGUNA MEMILIH KELAS
    // ========================================

    classSelect.addEventListener("change", () => {
      const selectedClass = classSelect.value;

      const matchingStudents = updateStudentsByClass(
        selectedClass
      );

      if (matchingStudents.length === 0) {
        return;
      }

      // Setelah kelas dipilih, pilih siswa pertama
      // sebagai pilihan awal yang bisa diubah pengguna.
      selectStudent(matchingStudents[0].id);
    });

    // ========================================
    // 7. PENGGUNA MEMILIH NAMA SISWA
    // ========================================

    dashboardStudent.addEventListener("change", () => {
      const studentId = dashboardStudent.value;

      if (!studentId) return;

      selectStudent(studentId);
    });

    // Jika siswa dipilih dari halaman rapor.
    reportStudent.addEventListener("change", () => {
      selectStudent(reportStudent.value);
    });

    // Jika siswa dipilih dari halaman absensi.
    attendanceStudent.addEventListener("change", () => {
      selectStudent(attendanceStudent.value);
    });

    // ========================================
    // 8. TAMPILKAN PERKEMBANGAN AKADEMIK SISWA
    // ========================================

    function renderStudentDevelopment() {
      const keyword = studentSearch
        ? studentSearch.value.trim().toLowerCase()
        : "";

      const filteredStudents = students.filter((student) => {
        const searchText = [
          student.name,
          student.id,
          student.className,
          student.major
        ].join(" ").toLowerCase();

        return searchText.includes(keyword);
      });

      const tableHead = $(
        "#students table thead tr"
      );

      if (tableHead) {
        tableHead.innerHTML = `
          <th>Nama Siswa</th>
          <th>NIS Demo</th>
          <th>Kelas</th>
          <th>Rata-rata Nilai</th>
          <th>Kehadiran</th>
          <th>Aksi</th>
        `;
      }

      if (!studentTable) return;

      if (filteredStudents.length === 0) {
        studentTable.innerHTML = `
          <tr>
            <td colspan="6" class="empty-state">
              Siswa tidak ditemukan.
            </td>
          </tr>
        `;

        return;
      }

      studentTable.innerHTML = filteredStudents.map((student) => {
        const semesterNumber = $("#semesterSelect").value;
        const semester = student.semesters[semesterNumber];

        const average = semester.subjects.reduce(
          (sum, subject) => sum + subject.score,
          0
        ) / semester.subjects.length;

        const attendance = semester.attendance;
        const totalDays =
          attendance.present +
          attendance.permission +
          attendance.sick +
          attendance.absent;

        const attendanceRate = totalDays > 0
          ? attendance.present / totalDays * 100
          : 0;

        return `
          <tr>
            <td>${escapeHTML(student.name)}</td>
            <td>${escapeHTML(student.id)}</td>
            <td>${escapeHTML(student.className)}</td>
            <td>
              <span class="development-badge">
                ${average.toFixed(1)}
              </span>
            </td>
            <td>${attendanceRate.toFixed(1)}%</td>
            <td>
              <button
                class="table-action"
                data-view-student="${escapeValue(student.id)}"
              >
                Lihat rapor
              </button>
            </td>
          </tr>
        `;
      }).join("");
    }

    if (studentSearch) {
      studentSearch.addEventListener(
        "input",
        renderStudentDevelopment
      );
    }

    // Ketika tombol "Lihat rapor" ditekan,
    // gunakan event handler lama untuk membuka rapor.
    // Sinkronisasi data tetap memakai selectStudent().
    if (studentTable) {
      studentTable.addEventListener("click", (event) => {
        const button = event.target.closest(
          "[data-view-student]"
        );

        if (!button) return;

        selectStudent(button.dataset.viewStudent);
      });
    }

    // Perbarui perkembangan siswa saat semester berubah.
    $("#semesterSelect").addEventListener(
      "change",
      renderStudentDevelopment
    );

    // ========================================
    // 9. KONDISI AWAL
    // ========================================

    // Mulai dengan pilihan kelas kosong agar pengguna
    // melakukan pemilihan kelas terlebih dahulu.
    classSelect.value = "";

    dashboardStudent.innerHTML = `
      <option value="">Pilih kelas terlebih dahulu</option>
    `;

    dashboardStudent.disabled = true;

    // Bersihkan pencarian jika diperlukan.
    renderStudentDevelopment();

    console.log(
      "Fitur filter kelas dan perkembangan siswa aktif."
    );
  }

  // Script menggunakan defer, jadi HTML sudah diparsing.
  setupEnhancements();
})();

