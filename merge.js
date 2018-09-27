var gm = require('gm');

let name = "IE28165497";
let total = 539;
let cellsAcross = 27;
let cellHeight = 256;
let cellWidth = 256;

var mergeObj = gm();

var xOffset = 0;
var yOffset = 0;

for (let i = 0; i < total; i++)
{
    for (let j = 0; j < cellsAcross; j++)
    {
        //console.log('\t.in(\'-page\', \'+' + xOffset + '+' + yOffset + '\')');
        //console.log('\t.in(\'' + name + i + '.png\')');
        mergeObj = mergeObj.in('-page', '+' + xOffset + '+' + yOffset);
        mergeObj = mergeObj.in('dl/' + name + '/' + name +  '_' + i + '.png');

        xOffset += cellWidth;
        i++;
    }
    //console.log('---- New Row ----');
    i--;
    xOffset = 0;
    yOffset += cellHeight;
}

mergeObj.mosaic()
        .write(name + '_output.png', function(err) {
            if (err) console.log(err);
        })