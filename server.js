import express from 'express'
import fs from 'fs'
import cors from 'cors'

const app = express();
app.use(cors());


app.get('/',function(req,res){
	res.send('hello world');
});


app.get('/fundData/:id',function(req,res){
	//let data = 
	//	[
	//		{
	//			date:20170102,
	//			jjjz:1.22,
	//		},
	//	];
	let data = fs.readFileSync(`${req.params.id}.txt`,'utf-8');
	data = JSON.parse(data);
	console.log('data:',data);
	
	res.send(data);
});


app.listen(9898,function(){
	console.log('doggie server listening on port 9898');
});
