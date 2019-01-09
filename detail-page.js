/* A user can leave their name and write a comment, when they click submit, their name and comment will be displayed on the page

Create an input field for the name, one for the comment and an submit-button
Add an event (name and comment) listener/handler to the button
Gather data of the input fields
Create some elements (to display the data)
Adjust the elements so they display the data
Display the adjusted elements on your page
Empty the input fields so the next user can type some new text.
*/

function submitComment() {
    const inputField = document.getElementById('name');
    const name = inputField.value;
    
    const textArea = document.getElementById('msg');
    const msg = textArea.value;

    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;

    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);

    //document.innerHTML.body..appendChild(comment);?

    
    console.log(comment);
    //console.log(msg);
        


};
