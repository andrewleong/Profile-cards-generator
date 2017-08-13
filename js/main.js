//Need a database to create the cards dynamically

//Using a Json Object
//Each object for name,age & email
var db = [
  {name:"Jessica Cheong", email:"jessica13@gmail.com",age:15},
  {name:"Mark Hamill", email:"lukeSkywalker@gmail.com",age:89},
  {name:"Miranda Lee", email:"miranda20@gmail.com",age:30}
];

(function Avatars(db){
  //init function
    this.init = function(){
        //run these functions on init
        this.generateList();
        this.enterUser();
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
        //the contents of the html page
        parent.innerHTML = "";
        //("beforebegin","afterbegin","beforeend","afterend")
        parent.insertAdjacentHTML("afterbegin",template);
    };

    this.enterUser = function(){

        function grabUser(){
            //grab the values
            var name = document.querySelector('#user_name').value;
            var email  = document.querySelector('#user_email').value;
            var age = document.querySelector('#user_age').value;

            //reset form in textfield after clicked submit
            document.querySelector('#myForm').reset();

            //adding the name,email,age values into array
            db.push({name:name,email:email,age:age});

            //since we have new db, just run the generate list function again
            generateList();
        }

        //click event listener
        document.querySelector("#myForm").addEventListener("submit", function(event){
            //stops default page behavior from sending data elsewhere
            event.preventDefault();

            //run grabUser function
            grabUser();

        });


    };

    this.init();

})(db);
