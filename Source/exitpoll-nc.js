/*
---
description:   ExitPoll uses Google Analytics to keep track of users leaving your site or downloading files. It works with either the synchronous, or asynchronous Google Analytics tracking code.
 
license: 
   - MIT-style
 
authors:
   - Caleb Crane (http://www.simulacre.org)
 
requires: 
  core/*:
 
provides: 
   - ExitPoll
 
...
*/
var ExitPoll = new Class({
    Implements: [Options],
    options: {
        parent      : null,
        event       : "mouseup",
        fileTypes   : [ "pdf", "zip", "rar", "tgz", "gz","gzip", "jpg", "png", "svg", "gif", "doc", "eps", "xls", "ppt", "xls", "txt", "vsd", "js", "css", "rar", "exe", "wma", "mov", "avi", "wmv", "mp3"]
    },
    initialize: function(options){
        var my = this;
        my.setOptions(options);
        var par = my.options.parent == null ? document.body : my.options.parent;
        
        $(par).getElements('a').each(function(a){
            if(a.protocol != "mailto:" && (!$chk(a.href) || a.href == "#")) return;
            
            if(a.host == location.host){
                if(!my.options.fileTypes.contains( a.pathname.substring(a.pathname.lastIndexOf(".")+1).toLowerCase() ))
                    return
            } 
            
            a.addEvent(my.options.event, my.track ); 

        });
    }, 
    track: function(){
        var l;

        if(this.protocol == "mailto:")      
            l = this.href;
        else if(this.host != location.host) 
            l = "/outgoing/" + this.href;
        else                                
            l = "/download" + this.pathname;
        
        if(!$chk(l)) return;
        
            
        if (typeof(pageTracker) == "object") pageTracker._trackPageview(l);
        else if(typeof(_gaq) == "object") _gaq.push(['_trackPageview', l]);
        /*else throw("Google Analytics tracking object not found");*/ // uncomment to enable throwing errors;

        return false;
    }
});






