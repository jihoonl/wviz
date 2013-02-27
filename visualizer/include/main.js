requirejs.config({
  enforceDefine : false,
  waitSeconds : 30,
  paths: {
    domReady          : 'lib/domReady',
    three             : 'visualization_three/libs/three',
    ColladaLoader     : 'visualization_three/libs/ColladaLoader',
    STLLoader         : 'visualization_three/libs/STLLoader',

    //helpers
    RosAxisHelper     : 'visualization_three/helpers/RosAxisHelper',
    RosOrbitControls  : 'visualization_three/helpers/RosOrbitControls',
    threeinteraction  : 'visualization_three/helpers/threeinteraction',
    three_bundle      : 'visualization_three/helpers/three_bundle',
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
