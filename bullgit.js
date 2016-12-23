//Prepare the awesomeness
function bullgit(){
  document.body.innerHTML = '<iframe src="https://bullg.it" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe>'
}
if (document.readyState === 'complete') {
  //Launch the awesomeness
  bullgit();
} else {
  document.addEventListener("DOMContentLoaded", function() { 
    //Launch the awesomeness
    bullgit();
  });
}
