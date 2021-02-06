var express = require("express");
var bodyparse = require("body-parser");
var cors = require("cors");
var db = require("./api");
var api = express();

api.use(bodyparse.json())
api.use(bodyparse.urlencoded({extended:true}));
api.use(cors())


api.get("/authors",(request,response)=>{
db.fetchauthors(function(err,result){
                if(err){
                    result={"error":"no authors found"}
                    response.statusCode=404;
                }else{
                        response.statusCode=200;
                }
                response.send(JSON.stringify(result));
                response.end();
            })
    })



    



                           
// fetch
api.get("/books",(request,response)=>{
    db.fetchbooks(function(err,result){
                    if(err){
                        result={"error":"no books found"}
                        response.statusCode=404;
                    }
                    else{
    
                        response.statusCode=200;
                    }
                    response.send(JSON.stringify(result));
                    response.end();
    
                })
        })
    

    
    

                   
    
    







    api.listen(3000,console.log("waiting at 3000....."))