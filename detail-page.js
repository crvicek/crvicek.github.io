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
    let name = inputField.value;
    
    const textArea = document.getElementById('msg');
    const msg = textArea.value;

    //add annonymus if no name
    if(!name) {
        name = 'annonymus';
        //console.log(name[0].toUpperCase()+name.slice(1, name.length));
    }
    //capitalize the name
    if (name) {
        name = name[0].toUpperCase()+name.slice(1, name.length);
    }
    //validate the length and message
    function doesNotPassAllValidations(msg) {
        if(msg.length>20) {
            alert('Sorry, your comment is too long');
            return true;
        }
        if(!msg) {
            alert('You forgot to type in some text');
            return true;
        }
        
    }
    if(doesNotPassAllValidations(msg)) {
        return null;
    }

    if(msg) {    
        const comment = document.createElement('section');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');

        h3.innerHTML = `${name} said:`;
        p.innerHTML = msg;

        comment.classList.add('comments');
        comment.appendChild(h3);
        comment.appendChild(p);

        const commentSection = document.getElementById('comments');
        commentSection.appendChild(comment);

        inputField.value = null;
        textArea.value = null;
    }
    
    

}