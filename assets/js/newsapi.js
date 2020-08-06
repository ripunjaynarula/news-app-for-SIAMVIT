
$(document).ready(function(){
    
    $("#searchbtn").on("click",function(e){
      e.preventDefault();
      
      let query = $("#searchquery").val();
      let url = `https://newsapi.org/v2/top-headlines?q=${query}stock&country=us&category=general&apiKey=7b2f4a409e444c9797d40263484ace92`;
      
      if(query !== ""){
        
        $.ajax({
          
          url: url,
          method: "GET",
          dataType: "json",
          
         
    
          success: function(news){
            let output = "";
            let latestNews = news.articles;
            
            for(var i in latestNews){
              output +=`
                <div class="col l6 m6 s12">
                <h4>${latestNews[i].title}</h4>
                <img src="${latestNews[i].urlToImage}" class="responsive-img">
                <p>${latestNews[i].description}</p>
                <p>${latestNews[i].content}</p>
                <p>Published on: ${latestNews[i].publishedAt}</p>
                <a href="${latestNews[i].url}" class="btn">Read more</a>
                </div>
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
            
          },
          
          error: function(){
             let internetFailure = `
             <div background-color:white; style="font-size:34px; text-align:center; margin-top:40px;">
             </div>`;
             
            $("#newsResults").html(internetFailure);
             M.toast({
                html: "We encountered an error, please try again",
                classes: 'red'
              });
          }
          
          
        });
        
      }else{
        let missingVal = `<div style="font-size:20px;color:white; text-align:center; margin-top:40px;"></div>`;
        $("#newsResults").html(missingVal);
         M.toast({
                html: "Please enter something",
                classes: 'red'
              });
      }
      
    });
    
});