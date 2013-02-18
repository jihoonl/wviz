(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['three','colladaloader'], factory);
  }
  else {
    root.MeshLoader = factory(root.THREE, root.ColladaLoader);
  }
}(this, function(THREE, ColladaLoader) {
  var MeshLoader = function(meshBaseUrl) {

    var meshLoader = this;
    if (meshBaseUrl !== undefined) {
      this.meshBaseUrl = meshBaseUrl;
      
      if(this.meshBaseUrl.substr(this.meshBaseUrl.length-1)!= "/") {
        this.meshBaseUrl = this.meshBaseUrl + "/";
      }   
    } else if ( !meshWarningPrinted ) { 
      console.log( "Warning: no mesh base URL given. Will not be able to display mesh markers." );
    }   

    meshLoader.load = function(objroot,resource) {
      

      if ( meshBaseUrl == undefined )
      {
        THREE.Mesh.call(this,new THREE.CubeGeometry(0.01, 0.01, 0.01), new THREE.MeshBasicMaterial());
      } else {
        THREE.Mesh.call(this,new THREE.CubeGeometry(0.01, 0.01, 0.01), new THREE.MeshBasicMaterial());
      //      THREE.Object3D.call(this);

        var loader = new THREE.ColladaLoader();
        var url = meshBaseUrl + resource.substr(10);

        var that = this;

        loader.load(url, function colladaReady(collada) {
          var sceneObj = collada.scene;
          console.log(collada);
          console.log(sceneObj);
          objroot.add(sceneObj);
        });
      }
    };
  };

  return MeshLoader;
  }
));
