// Sample course data
const courses = [
    {
        id: 'course1',
        title: 'Introduction to Programming',
        description: 'A beginner\'s guide to programming using Python.',
        price: '$100'
    },
    {
        id: 'course2',
        title: 'Web Development Basics',
        description: 'Learn the fundamentals of web development with HTML, CSS, and JavaScript.',
        price: '$120'
    }
    // Add more courses here
];

// Function to display courses
function displayCourses() {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';

    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'course';
        courseElement.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <p>${course.price}</p>
            <button onclick="viewCourse('${course.id}')">View Details</button>
        `;
        courseList.appendChild(courseElement);
    });
}

// Function to handle course viewing
function viewCourse(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        alert(`Course Title: ${course.title}\nDescription: ${course.description}\nPrice: ${course.price}`);
    } else {
        alert('Course not found');
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayCourses();
});
