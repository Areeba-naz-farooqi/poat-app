function Addpost(){
var posttitle = document.getElementById("post-title");
var postDescription = document.getElementById("post-Description"); 
var posts = document.getElementById("posts"); 
if(posttitle.value.trim() && postDescription.value.trim()){    
 posts.innerHTML += `<div class="col-12 col-sm-12 col-md-8 " id ="posts">
<div class="card shadow">
    <div class="card-header fontStyle">
        @Posts
    </div>
      <div class = "card-body">
        <h5 class="card-title fontStyle">${posttitle.value}</h5>
        <p class="card-text fontStyle">${postDescription.value}</p>
          </div>
        <div class = "section button p-4" >
        <button type="button" onclick ="edit(event)"class="btn btn-outline-primary">Edit</button>
        <button type="button" onclick ="remove(event)"class="btn btn-outline-danger">Delete</button>
        </div>        
    </div>` 
    posttitle.value = ""
    postDescription = "" 
}
else{
Swal.fire({
    title: "The Internet?",
    text: "please enter something",
    icon: "write posts"
  });

}
}
 
function remove(event){
    event.target.parentNode.parentNode.remove()
}


async function edit(event){
  var postCard = event.target.parentNode.parentNode;
  
  var currentTitle = postCard.children[1].children[0].innerText;
  var currentDescription = postCard.children[1].children[1].innerText;
  
  const { value: formValues } = await Swal.fire({
      title: "Multiple inputs",
      html: `
        <div style="text-align: left;">
          <div style="margin-bottom: 10px;">
              <label for="swal-input1" style="display: block; margin-bottom: 5px;">Update Title:</label>
              <input id="swal-input1" class="swal2-input" value="${currentTitle}" style="width: 80%;">
          </div>
          <div style="margin-bottom: 10px;">
              <label for="swal-input2" style="display: block; margin-bottom: 5px;">Update Description:</label>
              <input id="swal-input2" class="swal2-input" value="${currentDescription}" style="width: 80%;">
          </div>
      </div>    
      `,
  
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value
        ];
      }
    }); 
    if (formValues) {
      postCard.children[1].children[0].innerText = formValues[0];
      postCard.children[1].children[1].innerText = formValues[1];
  }
  }
function showImage(imgElement){
  var imageUrl = imgElement.src;
  var postsDiv = document.getElementById("posts");
  postsDiv.style.backgroundImage = `url("${imageUrl}")`;
  postsDiv.style.backgroundSize ="cover";
  postsDiv.style.backgroundPosition = "center";
}

