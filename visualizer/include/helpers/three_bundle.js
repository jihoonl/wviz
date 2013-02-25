(function (root,factory) {
  if(typeof define ==='function' && define.amd) {
    define(['three','RosOrbitControls','RosAxisHelper'],factory);
  }
  else {
    root.THREE_BUNDLE = factory(root.THREE,root.RosOrbitControls,root.RosAxisHelper);
  }
}(this, function(THREE,RosOrbitControls,RosAxisHelper) {
  
  THREE.RosOrbitControls = RosOrbitControls;
  THREE.Axes = RosAxisHelper;

  return THREE;
}));
