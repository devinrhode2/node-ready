Node-ready.js
=================

Instead of one big f***ing slow/lame/heavy/overweight DOMReady event, Node-ready is all about getting your work done on each node as it becomes available. This is inspired by my work on my Chrome extension [Scout](http://TheScoutApp.com/) where I do node polling on timeouts to make changes to Google's search page as quickly as possible, for a seamless experience. However, you may find it relevant outside of browser extensions.

Like:
    
    nodeReady('document.body', function(){
      //yay! document.body is usable:
      document.body.appendChild();
      nodeReady('document.getElementById("main")', function(main){ //first parameter becomes the node from your DOM call.
        //yay! I got the working main node:
        main.appendChild();
        //you don't have to specify a ready node callback parameter, but it's recommend for performance.
        //we've already retrieved the node for you, so you don't have to call getElementById again.
      });
    });
    

Install
---------------

Because nodeReady was soo small, and because you probably want to use getId and getClass for getting elements off the dom, I included it with extension-include:

    npm install extension-include
    
You can also pluck it directly out of extension-include if you so choose from [that repository](https://github.com/devinrhode2/extension-include).

Creator
---------------

Is Devin Rhode. He's OCD about stuff, and started his career in Silicon Valley at age 19, follow him on twitter here: http://Twitter.com/DevinRhode2 and subscribe to his public posts on facebook at: http://Facebook.com/Devin.Rhode404

Throughout most of the internet, he is DevinRhode2 (here, StackOverflow, gmail, .. EVERYWHERE)


License
---------------

(The MIT License)

Copyright (c) 2012 Devin Rhode <DevinRhode2@Gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.