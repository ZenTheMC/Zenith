# Zenith

PROBLEM: I have an avid passion for fitness, futurism, and anime. I love writing and sharing my thoughts and making the world a more optimistic and positive place. Many people are stuck in a pessimistic fallacy.


SOLUTION: I created a responsive full-stack app:

|| A blog app ||

**Link to project:**

[Zenith](https://zenith-ug18.onrender.com/)

![App Logo](https://drive.google.com/file/d/1kswkHepe4r5l-vtPgK93LwrVe17QLvGv/view?usp=sharing) ![App Screenshot](https://drive.google.com/file/d/1cJfWZafegS41PfOTyM_EBBLTn6VjLMfr/view?usp=sharing)

## How It's Made:

**Tech used:** HTML, JavaScript, React, Node, MongoDB, TailwindCSS.

-Admins can write articles, all users can comment and like, along with other features like an admin dashboard, search functionality, authentication, and profile customization.

## Optimizations (*Contributions Welcome*)

-Make a feature that allows an admin(or a new higher status) to give admin status to non-admin users.

-Implement more features that allow non-admin users to interact, besides just exploring blog bosts and commenting and liking comments.

-Allow users, both admins and non-admins, to like, love, favorite, and/or save posts.

## Lessons Learned:

-A mono file structure when using the MERN stack with Vite means that you include your static files outside of the public folder. It means you have a client and server directory in the root folder.

-To deploy on render, you need to add the outbound API addresses for their servers that your app is hosted on, to the mongodb whitelisted IP addresses.

-When testing your APIs, you can simply make a test API and use Postman or a similar API testing app to make requests to your server and see if you get a response.
