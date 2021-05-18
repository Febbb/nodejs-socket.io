

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const body = require('body-parser');
const io = require('socket.io')(server);


// const methodOverride = require("method-override");
// const path = require('path');


app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.use(express.static('publik'));



// const chatRouter = require("./routes/chatRouter");
// app.use("/chat",chatRouter);

app.get('/chat/index', (request,response)=>{
	response.render('chat');
})

let UserOnline = 1 ;
		io.on('connection', client =>{
			client.on('join', param =>{
				UserOnline++;
				console.log('user join');
				io.emit('UserOnline', UserOnline);
			})

			client.on('messege', param =>{
				console.log('user  send messege');
				io.emit('messege', param);
			})

			client.on('disconnect', param =>{
				let Online = UserOnline--;
				console.log('user disconnect');
				io.emit('UserOnline', Online);
			})
		})


server.listen(3011,function(){
	console.log("server listening port 3011");
});
