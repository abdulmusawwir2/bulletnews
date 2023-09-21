console.log("this is news js");
let apikey='fb7c12b18c4b40e28d2cbde68658f0b9';
let source='news24';
let newsAccordion = document.getElementById("newsAccordion");

//create and get request
const xhr=new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apikey}`,true);

//when response is ready
xhr.onload=function(){
    if(this.status===200){
        let json=JSON.parse(this.responseText);
        //console.log(json);
        let articles = json.articles;
        //console.log(articles); 
        let newsHtml="";
        articles.forEach(function(element,index){ 
            //console.log(articles[news]);

            let news =`<div class="card">
             <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                        aria-expanded="true" aria-controls="collapse${index}">
                        <b class="text-danger">  Breaking News ${index+1}: </b>${element["title"]}</button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}"
                data-parent="#newsAccordion">
                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank">Read more here</a></div>
            </div>
        </div>`
        newsHtml+=news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else{
        console.log("some error occured");
    }
}
xhr.send();


