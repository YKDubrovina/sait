window.addEventListener('scroll', function() {
    // ----------------------------
    // Добавьте этот код:
    // ----------------------------
    const projectContainer = document.querySelector('.project-container');

    const images = [
        { src: 'images/projectbg1.png', title: 'Я дома' },
        { src: 'images/projectbg2.png', title: 'Я и мой парень Кирилл' },
        { src: 'images/projectbg3.png', title: 'Я типа красивая' },
        { src: 'images/projectbg4.png', title: 'Моя кошечка Пичи' },
        { src: 'images/projectbg5.png', title: 'Я загадочная' },
        { src: 'images/projectbg6.png', title: 'Я и моя сестра Лиза' }
    ];

    let currentIndex = 0;

    function showNextProject() {
        const project = images[currentIndex];
        const projectElement = document.createElement('a');
        projectElement.classList.add('project', 'project-tile');
        projectElement.href = ''; // Добавьте ссылку, если нужно

        const img = document.createElement('img');
        img.classList.add('project-pic');
        img.src = project.src;
        img.alt = 'project';

        const title = document.createElement('div');
        title.classList.add('project-title');
        title.textContent = project.title;

        projectElement.appendChild(img);
        projectElement.appendChild(title);
        projectContainer.appendChild(projectElement);

        currentIndex = (currentIndex + 1) % images.length; // Переключение на следующее изображение
    }

    // Вызываем функцию для показа первого изображения
    showNextProject();

    // Запускаем показ следующих изображений через 2 секунды
    setInterval(showNextProject, 2000); 
    // ----------------------------


    // ----------------------------
    const projects = document.querySelectorAll('.project-tile');
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    
    projects.forEach(project => {
        const projectTop = project.offsetTop;
        const projectBottom = projectTop + project.offsetHeight;
        
        // Check if project is in view
        if (projectTop < scrollPosition + windowHeight && projectBottom > scrollPosition) {
            project.classList.add('in-view');
        } else {
            project.classList.remove('in-view');
        }
    });
});