document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    //Get blogs
    fetch('/posts')
    .then(res => res.json())
    .then(data => {
      Object.keys(data).forEach(itm => {
        const postDiv         = document.createElement('div');
        const postText        = document.createElement('p');
        const postTime        = document.createElement('p');
        const thumbnail       = document.createElement('img');
        const postContainer   = document.querySelector('.post-container');

        thumbnail.src = "./img/blog.jpg";
        thumbnail.className = "thumbnail";
        postText.innerHTML = data[itm];
        postTime.innerHTML = new Date(+itm).toLocaleDateString();
        postDiv.className = "post";

        postDiv.appendChild(thumbnail);
        postDiv.appendChild(postText);
        postDiv.appendChild(postTime);
        postContainer.appendChild(postDiv);
      })
    })
    .catch(err => console.log(err))

  }
}
