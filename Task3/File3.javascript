document.addEventListener('DOMContentLoaded', () => {
    const courses = {
        1: { title: 'Introduction to HTML', description: 'Learn the basics of HTML and web development.' },
        2: { title: 'CSS Fundamentals', description: 'Understand the principles of styling with CSS.' },
        3: { title: 'JavaScript Basics', description: 'Get started with programming using JavaScript.' }
    };

    const courseListSection = document.getElementById('course-list');
    const courseDetailSection = document.getElementById('course-detail');
    const courseTitleElement = document.getElementById('course-title');
    const courseDescriptionElement = document.getElementById('course-description');
    const backToListButton = document.getElementById('back-to-list');

    document.querySelectorAll('.view-course').forEach(button => {
        button.addEventListener('click', (e) => {
            const courseId = e.target.closest('.course').getAttribute('data-id');
            showCourseDetail(courseId);
        });
    });

    backToListButton.addEventListener('click', () => {
        courseDetailSection.classList.add('hidden');
        courseListSection.classList.remove('hidden');
    });

    function showCourseDetail(courseId) {
        const course = courses[courseId];
        courseTitleElement.textContent = course.title;
        courseDescriptionElement.textContent = course.description;
        courseListSection.classList.add('hidden');
        courseDetailSection.classList.remove('hidden');
    }
});
