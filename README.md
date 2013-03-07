WVIZ - 3D Robot Web Visualizer
====

The goal of this project is to provide a ROS(Robot Operating System) web 3d visualization library using WebGL. 

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

Soon            
- Turtlebot

### Current Status ###

- Collada : Done
- URDF    : Done
- 

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



# TODO ###

- WVIZ name spacing
- split scenenode and model
- Math library separation
- Uglify process
