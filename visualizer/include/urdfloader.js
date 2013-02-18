(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['three','urdf','meshloader'], factory);
  }
  else {
    root.UrdfLoader = factory(root.THREE, root.Urdf,root.MeshLoader);
  }
}(this, function(THREE, Urdf, MeshLoader) {
  var UrdfLoader = {};

  UrdfLoader.load = function(objroot,meshLoader) {
    
      var urdf_model = new Urdf();
      var that = this;
      
      function urdfReady() {
        // load all models
        var links = urdf_model.getLinks().values();
        for(var l in links)
        {
          var link = links[l];
          if(!link.visual) continue;
          if(!link.visual.geometry) continue;
          if(link.visual.geometry.type == link.visual.geometry.GeometryTypes.MESH) {
            var frameId = new String("/"+link.name);
            var uri = link.visual.geometry.filename;

            // ignore mesh files which are not in collada format
            if(uri.substr(-4).toLowerCase() != ".dae") {
              console.error("Urdf Loader : " + uri + " is not a valid collada file.");
            }

          }
        }
      }

      
    }



  };

  return UrdfLoader;
}));
