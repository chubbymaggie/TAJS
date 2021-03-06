function isPrime( num ) { 
  if ( isPrime.cache[ num ] != null ) 
    return isPrime.cache[ num ]; 
   
  var prime = num != 1; // Everything but 1 can be prime 
  for ( var i = 2; i < num; i++ ) { 
    if ( num % i == 0 ) { 
      prime = false; 
      break; 
    } 
  } 
  
  isPrime.cache[ num ] = prime 
  
  return prime; 
} 
 
isPrime.cache = {}; 
 
TAJS_assert( isPrime(5), 'isMaybeAnyBool' );
TAJS_assert( isPrime.cache[5], 'isMaybeAnyBool' );

TAJS_dumpValue (isPrime(5));