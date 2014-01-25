/**
 * Created by youxiachai on 14-1-25.
 */
//
var call = require('./lib/printHello');

call.printLog('hi');

var print = require('./lib/printHello2');

//print.log2('hi2')

var px = new print();

px.log('hi')