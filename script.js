// Main application logic
class StudentManagementSystem {
  constructor() {
    this.currentSection = 'dashboard';
    this.students = JSON.parse(localStorage.getItem('students')) || [];
    this.initializeApp();
  }

  initializeApp() {
    this.setupEventListeners();
    this.loadDashboard();
    this.updateDate();
    this.loadStudents();
  }

  setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchSection(e.target.getAttribute('href').substring(1));
      });
    });

    // Add Student Button
    document.getElementById('addStudentBtn')?.addEventListener('click', () => {
      this.showAddStudentModal();
    });
  }

  switchSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
    });

    // Show target section
    document.getElementById(sectionId)?.classList.add('active');

    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    document.querySelector(`[href="#${sectionId}"]`)?.classList.add('active');

    this.currentSection = sectionId;
  }

  loadDashboard() {
    this.updateStats();
    this.loadCharts();
  }

  updateStats() {
    const stats = {
      totalStudents: this.students.length,
      presentToday: this.students.filter(s => s.attendance?.isPresent).length,
      averageGrade: this.calculateAverageGrade(),
      warningStudents: this.students.filter(s => s.grade < 60).length
    };

    const statsGrid = document.getElementById('statsGrid');
    if (statsGrid) {
      statsGrid.innerHTML = `
        <div class="stat-card">
          <div class="stat-value">${stats.totalStudents}</div>
          <div class="stat-label">Total Students</div>
        </div>
        <div class="stat-card success">
          <div class="stat-value">${stats.presentToday}</div>
          <div class="stat-label">Present Today</div>
        </div>
        <div class="stat-card warning">
          <div class="stat-value">${stats.averageGrade}%</div>
          <div class="stat-label">Average Grade</div>
        </div>
        <div class="stat-card danger">
          <div class="stat-value">${stats.warningStudents}</div>
          <div class="stat-label">Need Attention</div>
        </div>
      `;
    }
  }

  calculateAverageGrade() {
    if (this.students.length === 0) return 0;
    const total = this.students.reduce((sum, student) => sum + (student.grade || 0), 0);
    return Math.round(total / this.students.length);
  }

  updateDate() {
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
      dateElement.textContent = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }

  loadStudents() {
    const table = document.getElementById('studentsTable');
    if (table) {
      // Populate table with student data
      this.renderStudentsTable();
    }
  }

  renderStudentsTable() {
    // Implementation for rendering students table
  }

  showAddStudentModal() {
    // Implementation for add student modal
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new StudentManagementSystem();
});
