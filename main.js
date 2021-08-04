document.getElementById('submit').addEventListener('click', function () {
  var userName = document.getElementById('name').value;
  var userMessage = document.getElementById('message').value;

  var newPostDiv = document.getElementsByClassName('posts')[0];
  var postMessage = document.createElement('p');
  var messageContent = document.createTextNode(userMessage);
  postMessage.appendChild(messageContent);

  var postAuthor = document.createElement('strong');
  var messageAuthor = document.createTextNode(userName);
  postAuthor.appendChild(messageAuthor);

  var postedBy = document.createElement('p');
  var postedTag = document.createTextNode(`Posted By:`);
  postedBy.appendChild(postedTag);

  var postHR = document.createElement('hr');

  newPostDiv.append(postMessage);
  newPostDiv.append(postedBy);
  newPostDiv.append(postAuthor);
  newPostDiv.append(postHR);
});



  // //postMessage.appendChild(messageContent);
  // document.getElementsByClassName('posts')[0].append(postMessage);
  // //postAuthor.appendChild(messageAuthor);
  // document.getElementsByClassName('posts')[0].append(postAuthor);

  // // newPostDiv.append(postMessage);
  // // newPostDiv.append(postAuthor);
  // // newPostDiv.append(postHR);
  
  // // postsDiv.append(newPostDiv);