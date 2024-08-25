---
layout: page
title: Fun
permalink: /projects/
description: World in my eyes
nav: true
nav_order: 3
display_categories: [seoul, osaka, kyoto]
horizontal: false
---
1. :vietnam:: Ha Noi, Thai Binh, Quang Ninh, Hai Phong, Lao Cai, Ha Nam, Hue, Da Nang, Quang Nam, Khanh Hoa, Lam Dong, Ninh Thuan, Binh Thuan, Ba Ria - Vung Tau, Ho Chi Minh City, Can Tho, Soc Trang, Bac Lieu, Ben Tre, Ca Mau

2. :singapore:: Singapore

3. :indonesia:: Riau

4. :malaysia:: Malacca, Kuala Lumpur

5. :kr:: Seoul, Incheon

6. :jp:: Osaka, Kyoto
 
7. :thailand:: Bangkok

<!-- 8. :australia:: Melbourne -->


<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="grid">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="grid">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
