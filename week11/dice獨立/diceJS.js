var frequency = Array(6);
for(var i=0;i<6;i++)
	frequency[i]=0;

var totalDice =0;
function start()
{
    var button = document.getElementById( "rollButton" );
    button.addEventListener( "click", rollDice, false );
} // end function start

function tallyRolls( face )
{
   switch ( face ) 
   {
       case 1:
       frequency[0]+=1;
       break;
       case 2:
       frequency[0]+=1;
       break;
       case 3:
       frequency[0]+=1;
       break;
       case 4:
       frequency[0]+=1;
       break;
       case 5:
       frequency[0]+=1;
       break;
       case 6:
       frequency[0]+=1;
       break;
    } // end switch
} // end function tallyRolls

 
function rollDice()
{
    var face;  
    for ( var i = 1; i <= 12; ++i ) 
    {
       face = Math.floor( 1 + Math.random() * 6 );
       setImage( i, face ); 
	   frequency[--face]+=1;
 
       ++totalDice;  
    } 
    updateFrequencyTable();
}
function setImage( dieNumber, face )
{
   var dieImg = document.getElementById( "die" + dieNumber );
   dieImg.setAttribute( "src", "die" + face + ".png" ); 
   dieImg.setAttribute( "alt", "die with " + face + " spot(s)" ); 
} // end function setImage
function updateFrequencyTable()
{
    var tableDiv = document.getElementById( "frequencyTableDiv" );
	var outputStr;
    outputStr = "<table>" +  "<caption>Die Rolling Frequencies</caption>"               
    + "<thead><th>Face</th><th>Frequency</th>" 
    + "<th>Percent</th></thead><tbody>" ;
	
	for(var i=0;i<frequency.length;i++){
		//document.write(frequency.length);
		var t = i+1;
		//t ++;
	 
    outputStr += "<tr><td>"+ t + "</td><td>" + frequency[i] + "</td><td>" + 
					  formatPercent(frequency[i] / totalDice) + "</td></tr>";
					  
	}
	outputStr +="</tbody></table>";
	tableDiv.innerHTML = outputStr;
} // end function updateFrequencyTable
function formatPercent( value )
{
    value *= 100;
    return value.toFixed(2);
} // end function formatPercent
window.addEventListener( "load", start, false );

