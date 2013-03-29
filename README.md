WVIZ - 3D Robot Web Visualizer
====

The goal of this project is to provide a ROS(Robot Operating System) web 3d visualization library using WebGL. 

![Turtlebot](https://f.cloud.github.com/assets/1556736/316629/5cae1274-982e-11e2-8cc7-c2af1537e054.png)


### Usage ###

### Required Components in Backend ###

A robot powered by ROS, Rosbridge, TF2 Web Republisher

- ROS                 : http://www.ros.org
- rosbridge           : https://www.rosbridge.org
- TF2 WebRepublisher  : https://github.com/RobotWebTools/tf2_web_republisher

<pre>
> roslaunch rosbridge_server rosbridge_websocket.launch
> rosrun tf2_web_republisher tf2_web_republisher
</pre>

### Frontend ###
#### Libraries in use
- Three.js : https://github.com/mrdoob/three.js
- RobotWebtools : https://github.com/RobotWebtools
- Require.js : http://requirejs.org/
 
### Available URDFs
- PR2
- Youbot
- Kobuki         
- Turtlebot

### Current Status ###

- Collada : Done
- URDF    : Done


### Goal ###

- De-couple with a 3D library
- Support URDF, Marker, IMMarker, Map, Pointclod, and Laserscan
- Support topic re-configuration api
- Support multi-canvas visualization(Ex : overlayview + full 3d view)
- Support dynamic fixed frame

### Design decision ###

- Support three.js as default 3D library
- Support AMD
- Scene - Model separation
- Have own math library



### TODO ###

- Get Merged with ROS3DJS !

### Pictures! ###

![PR2](https://f.cloud.github.com/assets/1556736/317011/161947e6-9853-11e2-956d-ff1729cd6d6f.png)
![Youbot](https://f.cloud.github.com/assets/1556736/317012/175106e4-9853-11e2-9b72-99e5f56da24f.png)
![Kobuki](https://f.cloud.github.com/assets/1556736/317014/1ac51bb2-9853-11e2-8f77-4b234a6e0d08.png)

