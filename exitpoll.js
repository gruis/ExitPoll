var ExitPoll=new Class({Implement:[Options],options:{parent:null,fileTypes:["pdf","zip","rar","tgz","gz","gzip","jpg","png","svg","gif","doc","eps","xls","ppt","xls","txt","vsd","js","css","rar","exe","wma","mov","avi","wmv","mp3"]},initialize:function(a){var c=this;var b=c.options.parent==null?document.body:c.options.parent;$(b).getElements("a").each(function(d){if(d.protocol!="mailto:"&&(!$chk(d.href)||d.href=="#")){return}if(d.host==location.host){if(!c.options.fileTypes.contains(d.pathname.substring(d.pathname.lastIndexOf(".")+1).toLowerCase())){return}}d.addEvent("mouseup",c.track)})},track:function(){var a;if(this.protocol=="mailto:"){a=this.href}else{if(this.host!=location.host){a="/outgoing/"+this.href}else{a="/download"+this.pathname}}if(!$chk(a)){return}if(typeof(pageTracker)=="object"){pageTracker._trackPageview(a)}else{if(typeof(_gaq)=="object"){_gaq.push(["_trackPageview",a])}}return}});