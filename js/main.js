//Need a database to create the cards dynamically

//Using a Json Object
//Each object for name,age & email
var db = [
  {name:"Jessica Cheong", email:"jessica13@gmail.com",age:15},
  {name:"Mark Hamill", email:"lukeSkywalker@gmail.com",age:89},
  {name:"Miranda Lee", email:"miranda20@gmail.com",age:30}
];

(function Avatars(db){
    this.init = function(){
        this.generateList();
    };

    this.generateList = function(){

        var parent = document.querySelector("#parent_avatar")
        var template = "";
        //dynamically generate the cards for each user
        for(var i=0; i < db.length; i++){
            //concat the markup
            template += '<div class="col-sm-4">';
            template +=     '<div class="card">';
            template +=         '<div class="card-delete" data-card="">x</div>';
            template +=         '<div class="card-block">';
            template +=             '<h3 class="card-title">'+ db[i].name +'</h3>';
            template +=             '<p class="card-text"><strong>Email: </strong>'+ db[i].email +'</p>';
            template +=             '<p class="card-text"><strong>Age: </strong>'+ db[i].age +'</p>';
            template +=          '</div>';
            template +=      '</div>';
            template += '</div>';

        }
        parent.innerHTML = "";
        //("beforebegin","afterbegin","beforeend","afterend")
        parent.insertAdjacentHTML("afterbegin",template);
    };

    this.init();

})(db);
