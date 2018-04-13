var MongoClient = require('mongodb').MongoClient;
var dbUrl = "mongodb://localhost:27017/";


(function() {
  var fs, http, qs, server, url;

  http = require('http');

  url = require('url');

  qs = require('querystring');

  fs = require('fs');

  server = http.createServer(function(req, res) {
    var action, form, formData, msg, publicPath, urlData, stringMsg;
    urlData = url.parse(req.url, true);
    action = urlData.pathname;
    publicPath = __dirname + "\\public\\";
   console.log(req.url);
    if (action === "/Signup") {
       console.log("signup");
			console.log(req.method);
      if (req.method === "POST") {
        console.log("action = post");
        formData = '';
        msg = '';
        return req.on('data', function(data) {
          formData += data;
          
          console.log("form data="+ formData);
          return req.on('end', function() {
            var user;
            user = qs.parse(formData);
            user.id = "123456";
            msg = JSON.stringify(user);
						stringMsg = JSON.parse(msg);
						console.log("mess="+msg);
            console.log("mess="+formData);
           // res.writeHead(200, {
            //  "Content-Type": "application/json",
             // "Content-Length": msg.length
            //});
						MongoClient.connect(dbUrl, function(err, db) {
  					if (err) throw err;
  					var dbo = db.db("mydb");
  					var myobj = stringMsg;
  					dbo.collection("customers").insertOne(myobj, function(err, res) {
    				if (err) throw err;
    				console.log("1 document inserted");
    				db.close();
  					});
					});
						
            return res.end("good");
          });
        });
				
      } else {
        
				sendFileContent(res, "FinalProject_Signup.html", "text/html");
      }
    } else if (action === "/Login") {
       console.log("Login");
			console.log(req.method);
      if (req.method === "POST") {
        console.log("action = post");
        formData = '';
        msg = '';
        return req.on('data', function(data) {
          formData += data;
          
          console.log("form data="+ formData);
          return req.on('end', function() {
            var user;
            user = qs.parse(formData);
            user.id = "123456";
            msg = JSON.stringify(user);
						stringMsg = JSON.parse(msg);
						console.log("mess="+msg);
            console.log("mess="+formData);
           // res.writeHead(200, {
            //  "Content-Type": "application/json",
             // "Content-Length": msg.length
            //});
						MongoClient.connect(dbUrl, function(err, db) {
  					if (err) throw err;
  					var dbo = db.db("mydb");
  					var myobj = stringMsg;
  					
						//dbo.collection("customers").insertOne(myobj, function(err, res) {
    				//if (err) throw err;
    				//console.log("1 document inserted");
    				//db.close();
  					//});
						
							
							//dbo.collection("customers").find({}).toArray(function(err, result) {
   // if (err) throw err;
    //console.log(result);
    //db.close();
  //});
							
							
			//				var myquery = { Name: 'apple' };
		//					dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    //if (err) throw err;
    //console.log("1 document deleted");
    //db.close();
  //});
							
							
							// count=dbo.collection("customers").find({"Name" : "ALEX"}).count();
							//console.log("total count="+dbo.collection("customers").find({"Name" : "ALEX"}).count());
							
							dbo.collection("customers").count({"name" : "ChoiWingYan", "PassWord": "123"}, function (error, count) {
  						console.log(error, count);
              console.log("OK"+count);
							});
							
							
							dbo.collection("customers").findOne({"name" : "ChoiWingYan"}, function(err, item) {
								console.log("item="+item);
								var myJSON = JSON.stringify(item);
								console.log("myJSON="+myJSON);
								var getrnum = item.rnum;
								console.log("getrnum="+getrnum);
								return res.end(getrnum);
								
});
							
							
						//	data = dbo.collection("customers").find({"name" : "ChoiWingYan"}).toArray(function(err, result) {
//    if (err) throw err;
//    console.log(result);
//    db.close();
							
//	});
						//console.log(data);  
			//				dbo.collection("customers").find({"Name": "ALEX"}).toArray(function(err, result) {
    //if (err) throw err;
    //console.log(result);
    //db.close();
	//}); 
							
						
					});
          //  return res.end("1");
          });
        });
				
      }
			else {
        //form = publicPath + "ajaxSignupForm.html";
        form = "FinalProject_Login2.html";
        return fs.readFile(form, function(err, contents) {
          if (err !== true) {
            res.writeHead(200, {
              "Content-Type": "text/html"
            });
            return res.end(contents);
          } else {
            res.writeHead(500);
            return res.end;
          }
        });
      }
    } 
		else if (action === "/Search") {
       console.log("search");
      if (req.method === "POST") {
        console.log("action = post");
        formData = '';
        msg = '';
        return req.on('data', function(data) {
          formData += data;
          
          console.log("form data="+ formData);
          return req.on('end', function() {
            var user;
            user = qs.parse(formData);
            user.id = "123456";
            msg = JSON.stringify(user);
						stringMsg = JSON.parse(msg);
						console.log("mess="+msg);
            console.log("mess="+formData);
           // res.writeHead(200, {
            //  "Content-Type": "application/json",
             // "Content-Length": msg.length
            //});
						
						MongoClient.connect(dbUrl, function(err, db) {
  					if (err) throw err;
  					var dbo = db.db("mydb");
  					var myobj = stringMsg;
  					
						//dbo.collection("customers").insertOne(myobj, function(err, res) {
    				//if (err) throw err;
    				//console.log("1 document inserted");
    				//db.close();
  					//});
						
							
							//dbo.collection("customers").find({}).toArray(function(err, result) {
   // if (err) throw err;
    //console.log(result);
    //db.close();
  //});
							
							
			//				var myquery = { Name: 'apple' };
		//					dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    //if (err) throw err;
    //console.log("1 document deleted");
    //db.close();
  //});
							
							
							// count=dbo.collection("customers").find({"Name" : "ALEX"}).count();
							//console.log("total count="+dbo.collection("customers").find({"Name" : "ALEX"}).count());
							
							dbo.collection("customers").count({"name" : "ChoiWingYan"}, function (error, count) {
  						console.log(error, count);
							console.log("OK"+count);
							});
							
							
							
							dbo.collection("customers").find({"name" : "ChoiWingYan"}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
	});
							
			//				dbo.collection("customers").find({"Name": "ALEX"}).toArray(function(err, result) {
    //if (err) throw err;
    //console.log(result);
    //db.close();
	//}); 
							
						
					});
						
            return res.end("1");
          });
        });
				
      } else {
        //form = publicPath + "ajaxSignupForm.html";
        form = "FinalProejct_calldatabase.html";
        return fs.readFile(form, function(err, contents) {
          if (err !== true) {
            res.writeHead(200, {
              "Content-Type": "text/html"
            });
            return res.end(contents);
          } else {
            res.writeHead(500);
            return res.end;
          }
        });
      }
    } 
		else if (action === "/home") {
       console.log("signup");
			console.log(req.method);
				sendFileContent(res, "FinalProject_homepage.html", "text/html");
		} else if (action === "/SeachList") {
       console.log("signup");
			console.log(req.method);
				sendFileContent(res, "FinalProject_SearchList.html", "text/html");
		} else if (action === "/Logined") {
       console.log("signup");
			console.log(req.method);
				sendFileContent(res, "FinalProject_Logined.html", "text/html");
		} else  if (action === "/information") {
       console.log("signup");
			console.log(req.method);
      if (req.method === "POST") {
        console.log("action = post");
        formData = '';
        msg = '';
        return req.on('data', function(data) {
          formData += data;
          
          console.log("form data="+ formData);
          return req.on('end', function() {
            var user;
            user = qs.parse(formData);
            user.id = "123456";
            msg = JSON.stringify(user);
						stringMsg = JSON.parse(msg);
						console.log("mess="+msg);
            console.log("mess="+formData);
           // res.writeHead(200, {
            //  "Content-Type": "application/json",
             // "Content-Length": msg.length
            //})
						MongoClient.connect(dbUrl, function(err, db) {
  					if (err) throw err;
  					var dbo = db.db("mydb");
  					var myobj = stringMsg;
						
							dbo.collection("favoritelist").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  					dbo.collection("favoritelist").insertOne(myobj, function(err, res) {
    				if (err) throw err;
    				console.log("1 document inserted");
    				db.close();
  					});
					});
						
						
						
            return res.end("good");
          });
        });
				
      } else {
        
				sendFileContent(res, "FinalProject_information.html", "text/html");
      }
   
    }else  if (action === "/information2") {
       console.log("signup");
			console.log(req.method);
      if (req.method === "POST") {
        console.log("action = post");
        formData = '';
        msg = '';
        return req.on('data', function(data) {
          formData += data;
          
          console.log("form data="+ formData);
          return req.on('end', function() {
            var user;
            user = qs.parse(formData);
            user.id = "123456";
            msg = JSON.stringify(user);
						stringMsg = JSON.parse(msg);
						console.log("mess="+msg);
            console.log("mess="+formData);
           // res.writeHead(200, {
            //  "Content-Type": "application/json",
             // "Content-Length": msg.length
            //});
						MongoClient.connect(dbUrl, function(err, db) {
  					if (err) throw err;
  					var dbo = db.db("mydb");
  					var myobj = stringMsg;
  					dbo.collection("favoritelist").insertOne(myobj, function(err, res) {
    				if (err) throw err;
    				console.log("1 document inserted");
    				db.close();
  					});
					});
						
            return res.end("good");
          });
        });
				
      } else {
        
				sendFileContent(res, "FinalProject_information2.html", "text/html");
      }
   
    }else  if (action === "/information3") {
       console.log("signup");
			console.log(req.method);
      if (req.method === "POST") {
        console.log("action = post");
        formData = '';
        msg = '';
        return req.on('data', function(data) {
          formData += data;
          
          console.log("form data="+ formData);
          return req.on('end', function() {
            var user;
            user = qs.parse(formData);
            user.id = "123456";
            msg = JSON.stringify(user);
						stringMsg = JSON.parse(msg);
						console.log("mess="+msg);
            console.log("mess="+formData);
           // res.writeHead(200, {
            //  "Content-Type": "application/json",
             // "Content-Length": msg.length
            //});
						MongoClient.connect(dbUrl, function(err, db) {
  					if (err) throw err;
  					var dbo = db.db("mydb");
  					var myobj = stringMsg;
  					dbo.collection("favoritelist").insertOne(myobj, function(err, res) {
    				if (err) throw err;
    				console.log("1 document inserted");
    				db.close();
  					});
					});
						
            return res.end("good");
          });
        });
				
      } else {
        
				sendFileContent(res, "FinalProject_information3.html", "text/html");
      }
   
    }else  if (action === "/information4") {
       console.log("signup");
			console.log(req.method);
      if (req.method === "POST") {
        console.log("action = post");
        formData = '';
        msg = '';
        return req.on('data', function(data) {
          formData += data;
          
          console.log("form data="+ formData);
          return req.on('end', function() {
            var user;
            user = qs.parse(formData);
            user.id = "123456";
            msg = JSON.stringify(user);
						stringMsg = JSON.parse(msg);
						console.log("mess="+msg);
            console.log("mess="+formData);
           // res.writeHead(200, {
            //  "Content-Type": "application/json",
             // "Content-Length": msg.length
            //});
						MongoClient.connect(dbUrl, function(err, db) {
  					if (err) throw err;
  					var dbo = db.db("mydb");
  					var myobj = stringMsg;
  					dbo.collection("favoritelist").insertOne(myobj, function(err, res) {
    				if (err) throw err;
    				console.log("1 document inserted");
    				db.close();
  					});
					});
						
            return res.end("good");
          });
        });
				
      } else {
        
				sendFileContent(res, "FinalProject_information4.html", "text/html");
      }
   
    }
		else if (action === "/favoritelist") {
       console.log("search");
      if (req.method === "POST") {
        console.log("action = post");
        formData = '';
        msg = '';
        return req.on('data', function(data) {
          formData += data;
          
          console.log("form data="+ formData);
          return req.on('end', function() {
            var user;
            user = qs.parse(formData);

            msg = JSON.stringify(user);
						stringMsg = JSON.parse(msg);
						console.log("mess="+msg);
            console.log("mess="+formData);
           // res.writeHead(200, {
            //  "Content-Type": "application/json",
             // "Content-Length": msg.length
            //});
						
						MongoClient.connect(dbUrl, function(err, db) {
  					if (err) throw err;
  					var dbo = db.db("mydb");
  					var myobj = stringMsg;
  					
						//dbo.collection("customers").insertOne(myobj, function(err, res) {
    				//if (err) throw err;
    				//console.log("1 document inserted");
    				//db.close();
  					//});
						
							
							dbo.collection("favoritelist").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();

  });
							
							
			//				var myquery = { Name: 'apple' };
		//					dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    //if (err) throw err;
    //console.log("1 document deleted");
    //db.close();
  //});
							
							
							// count=dbo.collection("customers").find({"Name" : "ALEX"}).count();
							//console.log("total count="+dbo.collection("customers").find({"Name" : "ALEX"}).count());
							
							dbo.collection("favoritelist").count({"rnum" : "8749"}, function (error, count) {
  						console.log(error, count);
							console.log("OK"+count);
								
							});
							
							
							
							dbo.collection("favoritelist").find({"rnum" : "8749"}).toArray(function(err, result) {
    if (err) throw err;
								console.log("Result:"+result);
							 msg = JSON.stringify(result);
								console.log("MSG1:"+msg);
					//	stringMsg = JSON.parse(result);
							//	console.log("MSG2:"+stringMsg);
								return res.end(msg);
	});
							
			//				dbo.collection("customers").find({"Name": "ALEX"}).toArray(function(err, result) {
    //if (err) throw err;
    //console.log(result);
    //db.close();
	//}); 
							
						
					});
						
           // return res.end("1");
          });
        });
				
      } else {
        //form = publicPath + "ajaxSignupForm.html";
        form = "FinalProject_favoritelist.html";
        return fs.readFile(form, function(err, contents) {
          if (err !== true) {
            res.writeHead(200, {
              "Content-Type": "text/html"
            });
            return res.end(contents);
          } else {
            res.writeHead(500);
            return res.end;
          }
        });
      }
    }
		
		
		
		
		
		else if(/^\/[a-zA-Z0-9\/]*.js$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/javascript");
	}
	else if(/^\/[a-zA-Z0-9\/]*.css$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/css");
	}	else if(/^\/[a-zA-Z0-9\/]*.min.css$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/css");
	}
	else if(/^\/[a-zA-Z0-9\/]*.jpg$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "image/jpg");
	}
		else if (console.log("Requested URL is: " + req.url)){
		res.end();
	}
		
		else if( action==="/newpage"){
       res.writeHead(200, {
        "Content-Type": "text/html"
      });
      return res.end("<h1>歡迎光臨Node.js菜鳥筆記2</h1><p><a href=\"/Signup\">註冊</a></p>");
    }
   
		
    else {
      
      console.log("callhtml");
		sendFileContent(res, "calldatabase.html", "text/html");

     
      //res.writeHead(200, {
      //  "Content-Type": "text/html"
     // });
      //return res.end("<h1>歡迎光臨Node.js菜鳥筆記</h1><p><a href=\"/Signup\">註冊</a></p>");
    }
  });

  server.listen(8080);

  console.log("Server is running，time is" + new Date());

  
  
  
  
  
function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
			response.writeHead(404);
			response.write("Not Found!");
		}
		else{
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
		}
		response.end();
	});
}
}).call(this);


