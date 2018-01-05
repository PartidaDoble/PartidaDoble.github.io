---
layout: page
title: Categorías
---
<ul class="posts">
{% for category in site.categories %}
  {% capture category_name %}{{ category | first }}{% endcapture %}

  <h3>{{ category_name }}</h3>

  {% for post in site.categories[category_name] %}
    <li itemscope>
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}

{% endfor %}
</ul>
