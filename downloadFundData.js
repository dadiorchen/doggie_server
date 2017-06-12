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

//begin load data

let fundModel = new FundModel();
let fundNumber = '096001';
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
