ExitPoll
==================

ExitPoll uses Google Analytics to keep track of users leaving your site, or downloading files. It works with either the synchronous, or asynchronous Google Analytics tracking code.

![Screenshot](http://c5.simulacre.org/exitpoll/images/banner_200x100.png)


How to use
----------

1. Install the Google Analytics tracking code as usual. The asynchronous and synchronous versions are both supported.
2. Instantiate an ExitPoll object once the DOM is ready:
        
            window.addEvent("domready", function(){
                new ExitPoll(); 
            });


ExitPoll will then bind mouseup events on all links that point to another server, different port on the same server, or non-html file on the same server. Mailto links will also be caught. When the user clicks on one of the links, and does not cancel the click, ExitPoll will register a PageView with Google Analytics. Outgoing links will be prepended with "/outgoing/". Download links will be prepended with "/download/".

Syntax
-----

    new ExitPoll([options]);
    
Arguments
---------

	1. options - (object, optional) the options described below:

Options
-------

* parent        : (element) An element that is the parent of all the links that you want to track. Defaults to document.body.
* fileTypes     : (array) The list of file extensions that should be tracked as downloadable files. Defaults to: [ "pdf", "zip", "rar", "tgz", "gz","gzip", "jpg", "png", "svg", "gif", "doc", "eps", "xls", "ppt", "xls", "txt", "vsd", "js", "css", "rar", "exe", "wma", "mov", "avi", "wmv", "mp3"]
* event         : (string) The type of event to bind the tracking action to:
    1. click - Fires when the user clicks on the link. Pros: canceled clicks will not be tracked. Cons: middle button clicks will not be tracked
    2. mousedown - Fires when the user pushes down on the link. Pros: middle clicks will be tracked. Cons: canceled clicks will be tracked
    3. mouseup *default*  - Pros: middle clicks will be tracked and canceled clicks will not be tracked. Cons: ...
