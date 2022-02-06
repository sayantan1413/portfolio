import css1 from '../images/portImages/cv_css.png';
import css2 from '../images/portImages/ms.png';
import react1 from '../images/portImages/react_styled.png';
import img2 from '../images/portImages/maya-4.jpg';
import img3 from '../images/portImages/maya-3.jpg';

const portfolios = [
    {
        id: 1,
        category: 'React JS',
        image: css1,
        link1: 'https://github.com/sayantan1413/Travel-Advisor',
        link2: 'https://github.com/sayantan1413/Travel-Advisor',
        title: 'Travel Advisory',
        text: 'Created using ReactJS, Axios, Material UI and Rapid API.'
    },
    {
        id: 2,
        category: 'Python',
        image: img3,
        link1: 'https://github.com/sayantan1413/Stackoverflow-Automation',
        link2: 'https://github.com/sayantan1413/Stackoverflow-Automation',
        title: 'StackoverFlow Automation',
        text: 'An automation in which whenever a error in detected while interpreting the Python code the errors get automatically opened in the browser in stackoverflow'
    },
    {
        id: 3,
        category: 'Java',
        image: img3,
        link1: 'https://github.com/sayantan1413/springboot-api-developement',
        link2: 'https://github.com/sayantan1413/springboot-api-developement',
        title: 'Courses API',
        text: 'A Restful API endpoint for courses which is written in Spring Boot'
    },
    {
        id: 4,
        category: 'React JS',
        image: img2,
        link1: 'https://github.com/sayantan1413/Tesla-Clone',
        link2: 'https://github.com/sayantan1413/Tesla-Clone',
        title: 'Tesla Clone',
        text: 'A Tesla Clone website made with React JS'
    },
    {
        id: 6,
        category: 'React JS',
        image: react1,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'Responsive Portfolio Website',
        text: 'Created using different technologies such as Material UI, Styled-Components and more...'
    },
]

export default portfolios;