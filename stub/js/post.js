
//like function
var numberOfClicks=0;
function postLiked(){
   var button = document.getElementById("addLikes")
   button.innerHTML = '<i class="fa fa-thumbs-up ">'+'</i>'+'&nbsp;'+"Liked!";
   button.style.border="none";
    numberOfClicks += 1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('likeCount').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('likeCount').innerHTML = numberOfClicks + " people have liked this!";
        }
        }
    }

//comments function
function addComment(id){
   if (id.value.length>0){
    var addEventName = id.value ;
    document.getElementById('addEventNames').innerHTML += '<p id="comment">' + addEventName + '</p>' ; 
    var a = document.getElementById('userComments');         
    a.value=a.defaultValue;
   }
}

var titleConetnt = document.getElementById('blogTitleNew');
var contentText = document.getElementById('blogBody');
// edit and save the content
function editContent(){
    contentText.contentEditable="true";
    titleConetnt.contentEditable="true";
    contentText.style.border="1px solid red";
    titleConetnt.style.border="1px solid red";
    document.getElementById('editButton').style.display="none";
    document.getElementById('saveButton').style.display="block";
}

function saveContent(){
    contentText.contentEditable="false";
    titleConetnt.contentEditable="false";
    contentText.style.border="none";
    titleConetnt.style.border="none";
    document.getElementById('editButton').style.display="block";
    document.getElementById('saveButton').style.display="none"; 
}