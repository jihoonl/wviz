(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['three','ColladaLoader','STLLoader'], factory);
  }
  else {
    root.MeshLoader = factory(root.THREE, root.ColladaLoader,root.STLLoader);
  }
}(this, function(THREE, ColladaLoader,STLLoader) {
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

    meshLoader.load = function(resource) {
      var objroot = new THREE.Object3D();

      if ( meshBaseUrl == undefined )
      {
        THREE.Mesh.call(this,new THREE.CubeGeometry(0.01, 0.01, 0.01), new THREE.MeshBasicMaterial());
      } else {

        var loader;

        var uri = meshBaseUrl + resource.substr(10);
        if(uri.substr(-4).toLowerCase() == ".dae") { 
          loader = new ColladaLoader();
          loader.load(uri, function colladaReady(collada) {
            var sceneObj = collada.scene;
            objroot.add(sceneObj);
          });
        }
        else if(uri.substr(-4).toLowerCase() == ".stl") {
          loader = new STLLoader();
          loader.load(uri,function(event) {
              var geometry = event.content;
              objroot.add(new THREE.Mesh(geometry));
          });
        }
      }
      return objroot;
    };
  };

  return MeshLoader;
  }
));
