
const GASURL = "https://script.google.com/macros/s/AKfycbzdXC2crhvHb60aMMWp2B9vaKGqy-Pr17Dj_RFVe3tn9y-GMdg/exec";


$(document).ready(function() {
	console.log("I'm ready!");
	readData();
	$('.btn-primary').click((event)=>{
		//console.log('QQ')
		writeData()
		writeData2()
		setTimeout(function(){ location.reload(); }, 3000);



	});
	$('#form-control').keydown(function(event){
		alert( event.which );
		if( event.which == 13 ) {
			alert("按下Enter了");
		}
	});

	$('.btn-danger').click((event)=>{
		//console.log('QQ')
		clean();
		setTimeout(function(){ location.reload(); }, 1000);

	});
});
let clean = ()=>{
	//console.log($('input[name="name"]').val() );
	
	let param = new Object();
	param.method='clean'
	param.url = "https://docs.google.com/spreadsheets/d/1lWYiD4kCnu-PQ5bqo4kLt87gUOodRhaHH49seL9dEo0/edit?usp=sharing"
	param.tag="工作表1"
	param.name =$('input[name="name"]').val()
	param.score =$('input[name="score"]').val()

	console.log(param)
	$.get(GASURL, param, (data)=>{
		console.log(data)
	});
}
let writeData = ()=>{
	//console.log($('input[name="name"]').val() );
	
	let param = new Object();
	param.method=$('input[name="method"]').val()
	param.url = "https://docs.google.com/spreadsheets/d/1lWYiD4kCnu-PQ5bqo4kLt87gUOodRhaHH49seL9dEo0/edit?usp=sharing"
	param.tag="工作表1"
	param.name =$('input[name="name"]').val()
	param.score =$('input[name="score"]').val()

	console.log(param)
	$.get(GASURL, param, (data)=>{
		console.log(data)
	});
}

let writeData2 = ()=>{
	//console.log($('input[name="name"]').val() );
	
	let param = new Object();
	param.method='write2'
	param.url = "https://docs.google.com/spreadsheets/d/1lWYiD4kCnu-PQ5bqo4kLt87gUOodRhaHH49seL9dEo0/edit?usp=sharing"
	param.tag="工作表2"
	param.name =$('input[name="name"]').val()
	param.score =$('input[name="score"]').val()

	console.log(param)
	$.get(GASURL, param, (data)=>{
		console.log(data)
	});
}

let readData =()=>{
	let param  = new Object()
	param.method = "read1";
	param.url = "https://docs.google.com/spreadsheets/d/1lWYiD4kCnu-PQ5bqo4kLt87gUOodRhaHH49seL9dEo0/edit?usp=sharing" 
	param.tag ="工作表1"
	var Data
	
	$.post(GASURL, param, (data)=>{
		reversedata = (data.allData).reverse()
		
		reversedata.forEach(element => {
			var summonername = element[2];
			var uid = element[3];
			var iconID=element[4];
			console.log(summonername)
			var cardhtml=`   <div class="container-fluid">
			<div class="row cards">
				<div class="col pb-5">
					<div class="card1 card  container-fluid">
					  <div class="row">
						<div class="col-3 mt-2 ml-2">
						  <img class="profileicon icon1" src="http://ddragon.leagueoflegends.com/cdn/10.12.1/img/profileicon/${iconID}.png">
						</div>
						<div class="col-8 text-left mt-3">
						  <span class="fz-24 text-yellow">${summonername}</span>
						  <span class="text-cc  fz-14">${uid}</span>
						</div>

					  </div>
					</div>
			  </div>
		</div>`
		$('.section1').append(cardhtml);

		});
	
		console.log(data)
		//$('.card1').append(String(data.allData[0][3]));

	});
	
	

	//$('.cards').append(cardhtml);


}