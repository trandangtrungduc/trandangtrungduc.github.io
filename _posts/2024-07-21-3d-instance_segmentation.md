---
layout: post
title: MSTA3D - Multi-scale Twin-attention for 3D Instance Segmentation
date: 2024-07-21
description: visualization of 3D point cloud instance segmentation
tags: images instance-segmentation transformer visualization
categories: paper
---

Visualize results on validation set of [ScanNetv2](http://www.scan-net.org/) dataset.

<div class="caption">
    Top row: from left to right are Input Point Cloud, High-scale Superpoint, Low-scale Superpoint and Ground-truth respectively
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/msta3d/Figure_6_4_input.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/msta3d/Figure_6_4_high_scale.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/msta3d/Figure_6_4_low_scale.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/msta3d/Figure_6_4_ground_truth.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/msta3d/Figure_6_4_ISBNet.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/msta3d/Figure_6_4_SPFormer.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/msta3d/Figure_6_4_MAFT.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/msta3d/Figure_6_4_Ours.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Bottom row: from left to right are <a href="https://github.com/VinAIResearch/ISBNet">ISBNet</a>, <a href="https://github.com/sunjiahao1999/SPFormer">SPFormer</a>, <a href="https://github.com/dvlab-research/Mask-Attention-Free-Transformer">MAFT</a> and <a href="https://github.com/vcl-seoultech/MSTA3D">MSTA3D</a> respectively
</div>

Other examples

<div class="row mt-3">
<div class="col-sm mt-3 mt-md-0">
<div class="slideshow-container">
  <div class="mySlides">
    <div class="numbertext">1 / 4</div>
        {% include figure.liquid loading="eager" path="assets/img/msta3d/Figure_7_ISBNet.png" class="img-fluid rounded z-depth-1" %}
    <div class="text">ISBNet</div>
  </div>

  <div class="mySlides">
    <div class="numbertext">2 / 4</div>
        {% include figure.liquid loading="eager" path="assets/img/msta3d/Figure_7_SPFormer.png" class="img-fluid rounded z-depth-1" %}
    <div class="text">SPFormer</div>
  </div>

  <div class="mySlides">
    <div class="numbertext">3 / 4</div>
        {% include figure.liquid loading="eager" path="assets/img/msta3d/Figure_7_MAFT.png" class="img-fluid rounded z-depth-1" %}
    <div class="text">MAFT</div>
  </div>

  <div class="mySlides">
    <div class="numbertext">4 / 4</div>
        {% include figure.liquid loading="eager" path="assets/img/msta3d/Figure_7_Ours.png" class="img-fluid rounded z-depth-1" %}
    <div class="text">MSTA3D</div>
  </div>

  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>

<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
  <span class="dot" onclick="currentSlide(4)"></span>
</div>

</div>
<div class="col-sm mt-3 mt-md-0">
    <div class="img-comp-container">
    <div class="img-comp-img">
    {% include figure.liquid loading="eager" path="assets/img/msta3d/Figure_6_3_input.png" class="img-fluid rounded z-depth-1" width="300" height="200" %}
    </div>
    <div class="img-comp-img img-comp-overlay">
    {% include figure.liquid loading="eager" path="assets/img/msta3d/Figure_6_3_Ours.png" class="img-fluid rounded z-depth-1" width="300" height="200" %}
  </div>
</div>
</div>
</div>

<style>
* {box-sizing:border-box;}

.slideshow-container {
  max-width: 300px;
  position: relative;
  margin: auto;
}

.mySlides {
  display: none;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

.text {
  color: #000000;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

.img-comp-container {
  position: relative;
  height: 200px;
}

.img-comp-img {
  position: absolute;
  width: auto;
  height: auto;
  overflow: hidden;
}

.img-comp-img img {
  display: block;
  vertical-align: middle;
}

.img-comp-slider {
  position: absolute;
  z-index: 9;
  cursor: ew-resize;
  width: 40px;
  height: 40px;
  background-color: #2196F3;
  opacity: 0.7;
  border-radius: 50%;
}

</style>

<script>

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


initComparisons();

function initComparisons() {
  var x, i;
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    w = img.offsetWidth;
    h = img.offsetHeight;
    
    img.style.width = (w / 2) + "px";
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    img.parentElement.insertBefore(slider, img);
    
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    slider.addEventListener("mousedown", slideReady);
    window.addEventListener("mouseup", slideFinish);
    slider.addEventListener("touchstart", slideReady);
    window.addEventListener("touchend", slideFinish);
    function slideReady(e) {
      e.preventDefault();
      clicked = 1;
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      if (clicked == 0) return false;
      pos = getCursorPos(e)
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = (e.changedTouches) ? e.changedTouches[0] : e;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left;
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      img.style.width = x + "px";
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}

</script>