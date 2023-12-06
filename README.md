Welcome To The News App 
React application that fetches and displays news articles based on different categories using the NewsAPI API link 1)https://newsapi.org/ 
  {used one is }: "https://newsapi.org/v2/top-headlines?country=in&apiKey=8459098d2b614414a0256bbb12eda59c"
  
  Front-End Of Project 
  
![img1png](https://github.com/pranayainchwar/news-app-reactjs/assets/122523118/a3ddafec-aba5-4230-9046-9195bbbe80b9)

Login Form: If the user Click on the Login button Or View More Button Link to view the article information and user will be directed to the Login Page After Login only the user can fetch the Arctic {User Verification}  

![img](https://github.com/pranayainchwar/news-app-reactjs/assets/122523118/18aaf17f-2223-4ad3-8d06-29642e0b4ffd)

This is RealTime Data Available in Firebase this data can be used.

![img3](https://github.com/pranayainchwar/news-app-reactjs/assets/122523118/87be6ff2-7b16-492c-955c-b95a11b9728e)


1. Component-Based Architecture
The application follows a component-based architecture using React, where each logical part of the UI is encapsulated into a separate component.
2. Routing
Although not explicitly shown in the provided code snippets, it's implied by the usage of <Link> from react-router-dom in the Navbar component that the application uses routing to navigate between different pages (Home, General, Business, etc.).
3. State Management
useState hook is used to manage and update the form data in the Login component.
useEffect hook is employed in the FetchData component to perform data fetching when the component mounts or when the cat (category) prop changes.
4. HTTP Requests
Axios is utilized to make HTTP requests to external APIs:
axios.post in the Login component sends form data to an API endpoint (Firebase Database).
axios.get in the FetchData component fetches news articles from the NewsAPI based on categories.
5. Form Handling
The Login component includes a form with input fields for "Your Name," "Email Address," "Password," and "Mobile No." The form is validated before submission.
6. Styling
CSS files (index.css, not shown fully) are imported into various components to apply styling to elements.
7. UI Components
Several UI components such as Navbar, Heading, Footer, and FetchData are created to modularize the UI and reuse code across different parts of the application.
8. Rendering
The root React element is rendered using ReactDOM.createRoot in the index.js file, pointing to the #root element in the HTML.
9. Component Communication
Props are used to pass data between components. For instance, cat is passed as a prop to the FetchData component to specify the category of news articles to fetch.
10. Conditional Rendering and Mapping
Conditional rendering is used to display "Loading..." until the news articles are fetched.
The map function is used to iterate through the fetched articles and display them dynamically.
