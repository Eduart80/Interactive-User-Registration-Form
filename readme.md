# Interactive User Registration Form

App, signup form. Programming language HTML, CSS, JavaScript

### How did event.preventDefault() help in handling form submission?
preventDefault will help me send this form without reloading the page.
This action will also let Javascript to grab the values from input fields.

### What is the difference between using HTML5 validation attributes and JavaScript-based validation? 
HTML uses simple built-in error messages. JavaScript lets us control more situations and provide custom error messages.

### Why might you use both?
They also work well together, which ensures a better user experience for validations.

### Explain how you used localStorage to persist and retrieve the username.
To save data in localStorage, we need to convert it to string format using JSON.stringify(). After that, we use localStorage.setItem('key', 'value').<br> To reuse this data, we need to retrieve it in string format with localStorage.getItem(), convert it with JSON.parse(key), and then use the value in the original format we created.<br> All these actions should be in a try/catch block.

### What are the limitations of localStorage for storing sensitive data?
Data is visible in the browser and can be accessed by anyone using the device.

### Describe a challenge you faced in implementing the real-time validation and how you solved it.
I got stuck on validation and how to approach this verification.
Thinking like a developer is still hard for me, but I'm trying to think and write the code concept as I'm thinking. Hopefully, it is not too abstract.
### How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
I played around a bit by using a loop for random comments like: "Come on man, try it again", "Are you kidding me???", "I like what you think!", or "Don't do this to me...", "I will block you, I'm serious."