WVIZ
====

#### Robot Web Visualization ####

The goal of this project is to provide a ROS(Robot Operating System) web 3d visualization library using WebGL. 

### Usage ###

### Required Components in Backend ###

A robot powered by ROS, Rosbridge, TF2 Web Republisher

- ROS                 : http://www.ros.org
- rosbridge           : https://www.rosbridge.org
- TF2 WebRepublisher  : https://github.com/RobotWebTools/tf2_web_republisher

* roslaunch rosbridge_server rosbridge_websocket.launch
* rosrun tf2_web_republisher tf2_web_republisher

### Frontend ###

Available URDFs
- PR2
- Youbot
- Kobuki

Soon            
- Turtlebot

### Current Status ###

- Collada : Done
- URDF    : Done


### TODO ###

- WVIZ name spacing
- split scenenode and model
- Uglify process
