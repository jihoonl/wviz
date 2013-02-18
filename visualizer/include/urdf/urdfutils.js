(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([],factory);
  }
  else {
    root.UrdfUtils = factory();
  }
}(this, function() {

  var UrdfUtils = {};

  UrdfUtils.parseFloatListString = function(s) {
    if (s == "")
      return [];
 
    // first trim
    var ts = ros.trim(s);
 
    // this is horrible
    var ss = ts.split(/\s+/);
    var res = Array(ss.length);
    for (var i = 0, j = 0; i < ss.length; i++) {
      if (ss[i].length == 0)
        continue;
      res[j++] = parseFloat(ss[i]);
    }
    return res;
  };

  return UrdfUtils;
}));
