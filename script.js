function confirmMessage() {
    let messageConfirm = prompt('Enter a message to verify: ');

    if (messageConfirm.indexOf('AI') >= 0 || messageConfirm.indexOf('aI') >= 0 || messageConfirm.indexOf('Ai' >= 0)) {
    	document.getElementById('result').innerHTML = "The message " + messageConfirm + " is tampered!";
	}	
    if ((messageConfirm.indexOf('FR') >= 0) && (messageConfirm.indexOf('AI') >= 0) || messageConfirm.indexOf('FR') >= 0) {
	document.getElementById('result').innerHTML = "The message " + messageConfirm + " is legitimate!";
	}
    else {
	document.getElementById('result').innerHTML = "The message " + messageConfirm + " is yet to be encoded!";
    }
}
