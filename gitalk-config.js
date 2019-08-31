
var gitalk = new Gitalk({
  "clientID": "f54201d7d5d686604572",
  "clientSecret": "b3408aeceaf5bd37d2cb8481ba0100c1e32f688d",
  "repo": "changniuzhiku",
  "owner": "ssjewcw",
  "admin": ["ssjewcw"],
  "id": location.pathname,      
  "distractionFreeMode": false  
});
gitalk.render("gitalk-container");