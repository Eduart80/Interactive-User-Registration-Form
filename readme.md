# Interactive User Registration Form

App, signup form. Programming language HTML, CSS, JavaScript

### How did event.preventDefault() help in handling form submission?
preventDefault will help me send this form without reloading the page.
This action will also let Javascript to grab the values from input fields.

### What is the difference between using HTML5 validation attributes and JavaScript-based validation? 
HTML use simple error buildin messages. JavaScript will let us contrall more situations and costum message error.

### Why might you use both?
Thay also work well together, this will ensure better user experience for validations. 

### Explain how you used localStorage to persist and retrieve the username.
To save data on local storage we need to convert it in string format, using JSON.stingify(). after we use localStorage.setItem('key', 'value'). To reuse this data we will need to retrive it in strign format,localStorage.getItem(), convert it with Json.parse(key) and than use the value in the original format we created. All this action in try /catch block

 What are the limitations of localStorage for storing sensitive data?

Describe a challenge you faced in implementing the real-time validation and how you solved it.
How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?