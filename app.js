var fs = require('fs');
var request = require('request');

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
      console.log('content-type:', res.headers['content-type']);
      console.log('content-length:', res.headers['content-length']);
  
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
  };

var name = 'IE28165497';

for (let i = 0; i <= 539; i++)
{
    setTimeout(function()
    {
        download('http://ndhadeliver.natlib.govt.nz/iipsrv?FIF=2017/04/19/ac_1/V1-FL28165543.jp2&CNT=1&SDS=0,90&JTL=5,' + i, 'dl/' + name + '/' + name + '_' + i +'.png', function()
                {
                    console.log('done ' + i);
                })
    }, i*50);
}