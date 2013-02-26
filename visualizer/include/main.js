requirejs.config({
  enforceDefine : false,
  waitSeconds : 30,
  paths: {
    three             : 'threejs/three',
    ColladaLoader     : 'threejs/ColladaLoader',
    STLLoader         : 'threejs/STLLoader',

    //helpers
    RosAxisHelper     : 'helpers/RosAxisHelper',
    RosOrbitControls  : 'helpers/RosOrbitControls',
    threeinteraction  : 'helpers/threeinteraction',
    three_bundle      : 'helpers/three_bundle',
  },

  shim : {
    'three' : {
      exports : 'THREE',
    },
    'ColladaLoader' : {
      deps: ['three'],
      exports : 'ColladaLoader',
    },
    'STLLoader' : {
      deps: ['three'],
      exports : 'STLLoader',
    },    
    'threeinteraction' : {
      exports : 'ThreeInteraction',
    },
    'three_bundle' : {
      deps : ['three','RosAxisHelper','RosOrbitControls'],
      exports : 'THREE_BUNDLE',
    },
  }
});
