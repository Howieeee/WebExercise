function start()
{
   var n1 = new Array( 5 ); // allocate five-element array
   var n2 = new Array(); // allocate empty array    
   var length = n1.length;
   for ( var i = 0; i < n1.length; ++i )
   {
      n1[ i ] = i;
   } // end for
   for ( i = 0; i < 5; ++i )
   {
      n2[ i ] = i;
   } // end for
   outputArray( "Array n1:", n1, document.getElementById( "output1" ) );
   outputArray( "Array n2:", n2, document.getElementById( "output2" ) );
} // end function start
function outputArray( heading, theArray, output )
{
   var content = "<h2>" + heading + "</h2><table>" +
      "<thead><th>Index</th><th>Value</th></thead><tbody>";
   var length = theArray.length;
   for ( var i = 0; i < length; ++i )
   {
      content += "<tr><td>" + i + "</td><td>" + theArray[ i ] + "</td></tr>";
   } // end for
   content += "</tbody></table>";
   output.innerHTML = content;
} // end function outputArray
window.addEventListener( "load", start, false );
