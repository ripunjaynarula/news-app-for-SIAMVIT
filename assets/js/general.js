$.ajax({
          
  url: 'https://gnews.io/api/v3/topics/world?&token=4a25a94bf5010d7c44d96f6331cab821',
  method: "GET",
  dataType: "json",
  success: function(data){
    let output = "";
    fetch('https://gnews.io/api/v3/topics/world?&token=4a25a94bf5010d7c44d96f6331cab821')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
    let latestNews = data.articles;
    for(var i in latestNews){
      output +=`
        <div class="col l6 m6 s12">
        <br>
        <style>
        h4{
          font-family:'Times New Roman';

        }
        </style>
        <h4><u>${latestNews[i].title}</u></h4>
        <p>${latestNews[i].description}</p>
         
        <p>Published on: ${latestNews[i].publishedAt}</p>
        <a href="${latestNews[i].url}" class="btn">Read more</a>
        <hr></div>
        
      `;
    }
    if(output !== ""){
      $("#newsResults").html(output);
       M.toast({
        html: "There you go, nice reading",
        classes: 'green'
      });
      
    }else{
      let noNews = `<div style='text-align:center; color:white; font-size:36px; margin-top:40px;'><br>Try searching for something else </div>`;
       $("#newsResults").html(noNews);
      M.toast({
        html: "This news isn't available",
        classes: 'red'
      });
    }
  }
});
