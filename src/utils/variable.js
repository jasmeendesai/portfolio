import {socialMediaApp, iNoteBook, openToIntern, productManagement, bookManagement, textUtil, newsApp, urlShortner, bloggingSite, js, nodeJs, html, css, mongoDb, expressJs, reactJs, nextJs, bootStrap, scss, mui, git, aws, postman} from '@/assets/index.js';

const paths = [
    {
        title : "Home",
        path : "/"
    },
    {
        title : "About",
        path : "/about"
    },
    {
        title : "Education",
        path : "/education"
    },
    {
        title : "Experience",
        path : "/experience"
    },
    {
        title : "Projects",
        path : "/project"
    },
    {
        title : "Skills",
        path : "/skill"
    },
    {
        title : "Contact",
        path : "/contact"
    },
]

const projects = [
    {
        name : "Social Media App",
        type : "fullstack",
        img : socialMediaApp,
        techStack : ["ReactJs", "saas", "MUI", "NodeJs", "ExpressJs", "MongoDB", "JWT", "socket.io"],
        github : "https://github.com/jasmeendesai/socialMedia.git",
        demo : "",
        description : "Friend Fiesta is a social networking platform aimed at connecting individuals and facilitating friendships. It offers intuitive features for communication, sharing memories, and networking,fostering an inclusive online community.",
        features : [
            "Authentication : Users can securely sign up, log in, and log out.",
            "Each user has their own profile, where they can view and update their information.",
            "Users can create posts, view posts from other users, like and comment on posts, and delete their own posts.",
            "Users can create stories similar to other popular social media platforms. Stories expire automatically after 24 hours and provide a way for users to share short-lived content with their followers.",
            "Real-time messaging functionality allows users to chat with their online friends instantly.",
            "Users can follow and unfollow other users to stay updated with their activities.",
            "The application supports a dark mode theme, enhancing usability in low-light environments and providing users with a choice of visual preferences.",
            "The user interface is fully responsive and adapts to different screen sizes, ensuring a consistent and enjoyable experience across devices."
        ]

    },
    {
        name:"iNoteBook",
        type : "fullstack",
        img: iNoteBook,
        techStack:["ReactJs", "JavaScript", "Bootstrap", "NodeJs", "MongoDB", "JWT"],
        github:"https://github.com/jasmeendesai/iNote_Book.git",
        demo:"https://shimmering-marigold-236c58.netlify.app",
        description:"The iNotebook is a simple and user-friendly tool that allows users to create, edit, and delete notes. Users can also sign up or log in to their accounts to access their personalized notes.",
        features:[
        "User Authentication: Sign up or log in to access the app.",
        "Create Notes: Add new notes with a title and content.",
        "Edit Notes: Modify existing notes.",
        "Delete Notes: Remove notes you no longer need.",
        "List of Notes: See all your notes at a glance."
        ]
    },
    {
        name : "Product Mangement",
        type : "backend",
        img : productManagement,
        techStack : ["NodeJS", "ExpressJS", "MongoDB", "JavaScript", "JWT", "AWS S3"],
        github : "https://github.com/jasmeendesai/Product_Management.git",
        demo : "",
        description : "This project aims to develop a product management system with features for user registration, product management, cart functionality, and order processing. It involves creating models, building APIs, testing, deployment, and following a step-by-step approach for each feature.",
        features : [
            "Comprehensive Feature Workflow: Each component (User, Product, Cart, and Order) is developed individually through a systematic process involving modeling, API development, testing, deployment.",
            "Enhanced Security with JWT: Secure access using JWT tokens passed via Authorization headers, ensuring secure and verified access to API endpoints.",
            "Dynamic Product Catalog: Features include creating, updating, deleting, and retrieving products with advanced filter options like size, price range, and product name, enhancing user experience through flexible shopping options.",
            "Robust Cart Management: Allows users to add, update, and remove products from their cart, dynamically calculating total price and items, ensuring a smooth shopping cart experience.",
            "Order Processing: Users can place orders, update order statuses, and even cancel orders if allowed, closely mimicking real-world e-commerce functionalities for order management."
        ]

    },
    {
        name : "URL Shortner",
        type : "backend",
        img : urlShortner,
        techStack : ["NodeJS", "ExpressJS", "MongoDB", "Redis", "JavaScript"],
        github : "https://github.com/jasmeendesai/Project_Url_Shortner.git",
        demo : "",
        description : "The Scalable URL Shortener project creates a backend system for generating short URLs from long URLs and redirecting users, while optimizing performance through caching to reduce database queries.",
        features : [
            "URL shortening is used to create shorter aliases for long URLs. We call these shortened aliases “short links.” Users are redirected to the original URL when they hit these short links. Short links save a lot of space when displayed, printed, messaged, or tweeted. Additionally, users are less likely to mistype shorter URLs.",
            "The shortened URL is nearly one-fifth the size of the actual URL.",
            "Some of the use cases for URL shortening is to optimise links shared across users, easy tracking of individual links and sometimes hiding the affiliated original URLs."
        ]

    },
    {
        name : "News App",
        type : "frontend",
        img : newsApp,
        techStack : ["ReactJs", "BootStrap", "JavaScript", "HTML", "CSS"],
        github : "https://github.com/jasmeendesai/News_App.git",
        demo : "",
        description : "•The News Application is a React and Bootstrap-based web app that enables users to explore and read news articles from diverse categories, featuring responsive design and integration with the News API.",
        features : [
            "Browse news articles from different categories such as Business, Entertainment, Health, Science, Sports, Technology, and more.",
            "View detailed information about each news article including title, description, source, and publication date.",
            "Responsive design ensures a seamless user experience across different devices."
        ]

    },
    {
        name : "Text Utils",
        type : "frontend",
        img : textUtil,
        techStack : ["ReactJs", "BootStrap", "JavaScript", "HTML", "CSS"],
        github : "https://github.com/jasmeendesai/TextUtils.git",
        demo : "https://willowy-beignet-efd980.netlify.app",
        description : "TextUtils is a versatile React site that provides essential text manipulation features, making it a handy tool for writers, students, and professionals. With TextUtils, you can easily count words and characters, remove extra spaces, and convert text between uppercase and lowercase. Additionally, the site offers a Dark Mode option for a comfortable writing experience during late-night sessions.",
        features : [
            "Word Count: Get the accurate word count of your text.",
            "Character Count: Easily count the number of characters in your text.",
            "Remove Extra Spaces: Clean up your text by removing unnecessary spaces.",
            "Uppercase & Lowercase Conversion: Transform your text to uppercase or lowercase as needed.",
            "Copy & Paste: Quickly copy the manipulated text for further use or sharing."
        ]

    },
    {
        name : "Book Management",
        type : "backend",
        img : bookManagement,
        techStack : ["NodeJS", "ExpressJS", "MongoDB", "JavaScript", "JWT"],
        github : "https://github.com/jasmeendesai/Books_Management.git",
        demo : "",
        description : "The Books Management project involves creating APIs for user , book and review management, authentication, authorization, and thorough testing using Postman.",
        features : [
            "Comprehensive User and Book Management: Provides robust functionalities for creating, updating, and managing users and books, with fields for categorization, tagging, and detailed metadata.",
            "Advanced Filtering and Searching: Offers dynamic filtering capabilities allowing users to search books based on multiple criteria such as category, subcategory, author, and publication status, enhancing user navigation and accessibility.",
            "Secure Authentication and Authorization: Implements secure login mechanisms for users and ensures that only authorized users can modify or delete books, safeguarding data integrity and privacy.",
            "Review System: Incorporates a review system where users can add, update, and delete reviews for books, which also updates the book’s overall review metrics, providing insights and feedback from readers."
        ]

    },
    {
        name : "Open to Intern",
        type : "backend",
        img : openToIntern,
        techStack : ["NodeJS", "ExpressJS", "MongoDB", "AWS S3", "JavaScript", "JWT"],
        github : "https://github.com/jasmeendesai/Open_to_Intern.git",
        demo : "",
        description : "The Open to Intern project focuses on creating APIs for creating colleges and interns, retrieving college details, and listing interns associated with a specific college.",
        features : [
            "Centralized College and Intern Management: Provides a unified platform for creating and managing college profiles along with their logos and details, as well as registering interns with links to their respective colleges.",
            "Robust API Endpoints: Includes well-defined RESTful API endpoints for handling CRUD operations on college and intern data, ensuring data integrity with validation rules for emails, mobile numbers, and more.",
            "Real-time Data Interaction: Allows users to dynamically interact with real-time data, supporting functionalities like data filtering based on various parameters such as college name, intern details, and more for a customized view."
        ]

    },
    {
        name : "Blogging Site",
        type : "backend",
        img : bloggingSite,
        techStack : ["NodeJS", "ExpressJS", "MongoDB", "JavaScript", "JWT"],
        github : "https://github.com/jasmeendesai/MiniBlogging_site.git",
        demo : "",
        description : "The Blogging Site Mini Project aims to build a robust blogging platform allowing authors to manage their blogs effectively. The platform facilitates creating, editing, publishing, and deleting blog posts, along with authentication and authorization features to secure access. Authors can interact with their content through a comprehensive API, ensuring smooth management of blog entries based on categories, tags, and publication status.",
        features : [
            "Blog Management: Authors can create, update, and delete blogs with support for categories, tags, and publishing controls.",
            "Dynamic Filtering: Users can search and filter blogs by various attributes such as author, category, tags, and more.",
            "Secure Authentication: Secure login mechanism for authors with JWT-based session management.",
            "Authorization Controls: Ensures that only the rightful owners can edit or delete their blogs, maintaining data integrity and security.",
            "Real-Time Updates: Provides real-time updates on blog status, including publication and deletion timestamps."
        ]

    },
    
]


const skills = [
    {
        name : "Java Script",
        img : js
    },
    {
        name : "HTML",
        img : html
    },
    {
        name : "CSS",
        img : css
    },
    {
        name : "ReactJs",
        img : reactJs
    },
    {
        name : "NodeJs",
        img : nodeJs
    },
    {
        name : "ExpressJs",
        img : expressJs
    },
    {
        name : "MongoDB",
        img : mongoDb
    },
    {
        name : "NextJs",
        img : nextJs
    },
    {
        name : "BootStrap",
        img : bootStrap
    },
    {
        name : "scss",
        img : scss
    },
    {
        name : "MUI",
        img : mui
    },
    {
        name : "Git",
        img : git
    },
    {
        name : "AWS",
        img : aws
    },
    {
        name : "Postman",
        img : postman
    },
]



module.exports = {paths, projects, skills}