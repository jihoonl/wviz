(function (root, factory)  {
  if (typeof define === 'function' && define.amd) {
    define(['three', 'colladaloader']);
  }
  else {
    root.ModelsThree = factory(root.THREE, root.ColladaLoader);
  }
}(this, function (THREE, ColladaLoader) {
  var ModelsThree = {}
  var meshWarningPrinted = false;

  var that = this;
  var geom = null;
  function makeColorMaterial(r,g,b,a) {
    var color = new THREE.Color();
    color.setRGB(r,g,b);
    if( a <= 0.99) {
      return new THREE.MeshBasicMaterial({
        color : color.getHex(),
        opacity : a+0.1,
        transprarent : true,
        depthWrite : true,
        blendSrc : THREE.SrcAlphaFactor,
        blendDst : THREE.OneMinusSrcAlphaFactor,
        blendEquation : THREE.ReverseSubtractEquation,
        blending : THREE.NormalBlending,
      });
    } else {
      return new THREE.MeshLambertMaterial({
        color : color.getHex(),
        opacity : a,
        blending : THREE.NormalBlending,
      });
    }
  }

  var ModelsThree.Collada = function(options) {

    THREE.Object3D.call(this);

    var mesh_use_embedded_materials = options.mesh_use_embedded_materials || false;
    var model; 
    var meshBaseurl = options.meshBaseurl;

    if(mesh_use_embedded_materials) 
    {
      model = new MeshModelHelper(meshBaseurl,false); 
    }
    else 
    {
    }

  };

  MeshModelHelper = function(meshBaseUrl,overrideMaterial) {
    if (meshBaseUrl == undefined)
  }

  MeshModelHelper.proto

}
