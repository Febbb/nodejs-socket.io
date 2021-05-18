

$(document).ready(function(){

var socket = io.connect('http://localhost:3011');
    socket.emit('join');
    socket.on('UserOnline',(Online)=>{
      
    })


    $("#sendMessege").click(()=>{
    	socket.emit('messege',{
    		text: $('#messege').val(),
    		username : $('#username').val()
    	});
    })


    socket.on('messege',(inbox)=>{
    	$('#messege-list').append(
    		`<div class="card">
				<div class="card-body">
					${inbox.username}:  ${inbox.text}
				</div>
			</div>`
    		)
    })


})

