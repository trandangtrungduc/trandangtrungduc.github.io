---
layout: post
title: NeuralNetwork Application for Mobile Robot
date: 2021-09-07
description: Neural network-based control for mobile robot navigation and obstacle avoidance
tags: personal
categories: personal-project
---

**NeuralNetwork Application for Mobile Robot** is a project focused on applying neural network techniques to real-world robotic navigation and control.

The system demonstrates a **mobile robot following a predefined path (black line)** using learned behaviors, showcasing stable and responsive movement in physical environments. This highlights the practical application of neural networks in low-level control and perception tasks.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/map_number_8.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/random_map.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>

<div class="caption">
    Real-world experiments of the robot navigating different track configurations.
</div>

In addition to physical experiments, the project includes simulation of an **obstacle restriction method** using [Webots](https://cyberbotics.com/). These simulations explore how the robot can perceive, avoid obstacles, and adapt its trajectory in a controlled 3D environment.

<div class="col-sm mt-3 mt-md-0">
    {% include video.liquid path="assets/video/ORM_3D_1.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
</div>

<div class="col-sm mt-3 mt-md-0">
    {% include video.liquid path="assets/video/ORM_3D_2.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
</div>

By combining real-world experiments with simulation, the project provides a comprehensive view of how neural networks can be applied to **robot navigation, control systems, and obstacle avoidance**.

Check [here](https://github.com/trandangtrungduc/NeuralNetworkforMobileRobot) for details.