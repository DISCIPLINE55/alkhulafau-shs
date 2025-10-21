// Chart configurations and management
class ChartManager {
  constructor() {
    this.charts = new Map();
    this.initializeCharts();
  }

  initializeCharts() {
    this.createAttendanceChart();
    this.createPerformanceChart();
  }

  createAttendanceChart() {
    const ctx = document.getElementById('attendanceChart')?.getContext('2d');
    if (!ctx) return;

    this.charts.set('attendance', new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
          label: 'Attendance Rate',
          data: [85, 92, 78, 88, 95],
          backgroundColor: 'rgba(114, 47, 55, 0.8)',
          borderColor: 'rgba(114, 47, 55, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Weekly Attendance'
          }
        }
      }
    }));
  }

  createPerformanceChart() {
    const ctx = document.getElementById('performanceChart')?.getContext('2d');
    if (!ctx) return;

    this.charts.set('performance', new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Excellent (90-100)', 'Good (75-89)', 'Average (60-74)', 'Needs Improvement (<60)'],
        datasets: [{
          data: [25, 40, 25, 10],
          backgroundColor: [
            'rgba(39, 174, 96, 0.8)',
            'rgba(52, 152, 219, 0.8)',
            'rgba(243, 156, 18, 0.8)',
            'rgba(231, 76, 60, 0.8)'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Student Performance Distribution'
          }
        }
      }
    }));
  }

  updateCharts(data) {
    // Update charts with new data
    this.charts.forEach((chart, key) => {
      // Update chart data based on key
    });
  }
}

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ChartManager();
});
