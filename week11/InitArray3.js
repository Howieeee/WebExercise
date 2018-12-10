var num = window.prompt("Please input a number:")

function start()
{
   var array1 = [ [ 1, 2, 3 ], // row 0  
                  [ 4, 5, 6 ] ]; // row 1
   var array2 = [ [ 1, 2 ], // row 0     
                  [ 3 ], // row 1       
                  [ 4, 5, 6 ] ]; // row 2
 
   outputArray( "Values in array1 by row", array1, document.getElementById( "output1" ) );
   outputArray( "Values in array2 by row", array2, document.getElementById( "output2" ) );
}
 
function outputArray( heading, theArray, output )
{
   var results = "";
   for ( var row in theArray )
   {
      results += "<ol>";
 
      for ( var column in theArray[ row ] )
      {
         results += "<li>" + theArray[ row ][ column ] + "</li>";
      }
 
      results += "</ol>";
   }
   output.innerHTML = results;
}
 
window.addEventListener( "load", start, false );
