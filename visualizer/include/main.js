requirejs.config({
  enforceDefine : false,
  waitSeconds : 30,
  paths: {
    domReady          : 'lib/domReady',
    three             : 'threejs/libs/three',
    ColladaLoader     : 'threejs/libs/ColladaLoader',
    STLLoader         : 'threejs/libs/STLLoader',

    //helpers
    RosAxisHelper     : 'threejs/helpers/RosAxisHelper',
    RosOrbitControls  : 'threejs/helpers/RosOrbitControls',
    threeinteraction  : 'threejs/helpers/threeinteraction',
    three_bundle      : 'threejs/helpers/three_bundle',
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
    
    'domReady' : {
      exports : 'domReady',
    },
  }
});
