/* node-ready.js 
 * See readme.markdown for usage/docs.
 * Send questions/problems/critiques on code to: DevinRhode2@gmail.com (put "skywalker.js" in the title)
 */

//most all nodes should be ready by: document.readyState === 'interactive'
//if readyState === 'complete' && onload has fired... then fallback to DOMSubtreeModified... but tame the events down to 50 millisecond chunks


var nodeReady = function nodeReady(call, readyCallback){
'use strict';//steppin it up!
  if (typeof call === 'string') {
    if (nodeReady.useSelectors) {
      //then querySelectorAllFast... something like that..... no, test if all alpha-numeric, and if not, throw error
    } else {
      try {
        //breakup each dot, checking if (item) then going item.next, which recursively becomes item
        //or lean on try/catch more to simply re-try all da time.
        var attempt = eval(call); //strict mode ('use strict') restricts eval in some fashion...
      } catch (e) {
        if (e instanceof EvalError) {
          console.error('EvalError on call:'+call+' :( try passing in a function'+
          ' like: \nnodeReady(function(){return '+call+';}, callback);', e);
        } else {
          console.error('non-EvalError when executing call:'+call+' :(', e);        
        }
      }
    }
  } else if (typeof call === 'function') {
    var attempt = call();
  } else if (typeof call === 'object') {
    //read into object, could re-develop an api based on: 
    /*
      tag:class, id, name.
      previousElementSibling
      previousSibling
      nextElementSibling
      nextSibling
      nextElementSibling
      lastChild
      lastElementChild
      firstChild
      firstElementChild
      childNodes
      children
      && array indexes..
      
      We could also re-parse any code we would be evaling, and reconstruct the call without eval.
    */
  } else {
    fail('At this time, nodeReady only accepts a string javascript call or '+
    'function for the first argument, and the callback for the second argument.');
  }
  if (attempt) {
    readyCallback(attempt);
  } else {
    setTimeout(function nodeReadyTimeoutCall(){
      
    }, 500);
  }
};
nodeReady.useSelectors = true;
nodeReady.getListeners = function nodeReadyGetListeners(){
  
};