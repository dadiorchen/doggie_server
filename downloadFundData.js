/*
 * donwload fund data from sina , and the the formated data to files
 * file format:
 * 	2017-07-01 0.122 0.2233
 * file name format: fund096001.txt
 * */
'use strict';
import {FundModel} from './model/FundModel.js'
import fs from 'fs'


let DEBUG = true;
console.debug = (...args) => {
	if(DEBUG){
		console.log(...args);
	}
}


//parse fund number 
var argFundNumber = process.argv[2];
console.log('the fund arg:',argFundNumber);

if(!/\d{6}/.test(argFundNumber)){
	console.log('the fund number parameter is invalid!',argFundNumber);
}else{

	//begin load data

	let fundModel = new FundModel();
	let fundNumber = argFundNumber ;//'096001';
	fundModel.fetchFundData(fundNumber,10000)
		.then(result => {
			//loaded data , print it 
			let {totalNum,dataList} = result;
			if(dataList && dataList.length > 0){
				dataList.forEach( line => {
					console.debug('line:',line);
				});
				//write file
				fs.writeFileSync(`${fundNumber}.txt`,JSON.stringify(dataList));
			}
		});
}
