/* node-ready.js 
 * See readme.markdown for usage/docs.
 * Send questions/problems/critiques on code to: DevinRhode2@gmail.com (put "skywalker.js" in the title)
 */

//most all nodes should be ready by: document.readyState === 'interactive'
//if readyState === 'complete' && onload has fired... then fallback to DOMSubtreeModified... but tame the events down to 50 millisecond chunks


var nodeReady = function nodeReady(call, readyCallback){
  'use strict';//steppin it up!
  var box = typeof call; //our one and only var...?!
  if (box === 'string') {
    try {
      //breakup each dot, checking if (item) then going item.next, which recursively becomes item
      //or lean on try/catch more to simply re-try all da time.
      box = eval(call); //strict mode ('use strict') restricts eval in some fashion...
    } catch (e) {
      if (e instanceof EvalError) {
        console.error('EvalError on call:'+call+' :( try passing in a function'+
        ' like: \nnodeReady(function(){return '+call+';}, callback);', e);
      } else {
        console.error('non-EvalError when executing call:'+call+' :(', e);        
      }
    }
  } else if (box === 'function') {
    box = call();
  } else {
    box = 'At this time, nodeReady only accepts a string javascript call or '+
          'function for the first argument, and the callback for the second argument.';
    alert(box);
    throw box;
  }
  if (box) {
    readyCallback(box);
  } else {
    setTimeout(function nodeReadyTimeoutCall(){
      
    }, 500);
  }
};
nodeReady.getListeners = function nodeReadyGetListeners(){
  //? maybe
};
