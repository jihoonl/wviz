(function (root, factory) {
 if (typeof define === 'function' && define.amd) {
  define(['three'],factory);
 }
 else {
  root.SceneModel = factory(root.THREE);
 }
}(this, function(THREE,EventEmitter2) {
  var SceneModel = function(options) {
    THREE.Object3D.call(this);
    this.add(options.model);
  };

  SceneModel.prototype = Object.create(THREE.Object3D.prototype);

  SceneModel.prototype.poseUpdate = function(poseTransformed) {
    this.position.x = poseTransformed.position.x;
    this.position.y = poseTransformed.position.y;
    this.position.z = poseTransformed.position.z;

    this.useQuaternion = true;
    this.quaternion = new THREE.Quaternion(poseTransformed.orientation.x,poseTransformed.orientation.y,poseTransformed.orientation.z,poseTransformed.orientation.w);
    this.updateMatrixWorld(true);
  };

  return SceneModel;

}));
