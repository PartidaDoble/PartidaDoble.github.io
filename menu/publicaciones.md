---
layout: page
title: Publicaciones
---
<ul class="posts">
  {% for post in site.posts %}

    {% unless post.next %}
      <h3>{{ post.date | date: '%Y' }}</h3>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        <h3>{{ post.date | date: '%Y' }}</h3>
      {% endif %}
    {% endunless %}

    <li itemscope>
      <a href="{{ site.github.url }}{{ post.url }}">{{ post.title }}</a>
      <span class="post-date" style="margin-top:3px"><i class="fa fa-calendar" aria-hidden="true"></i>
        {{ post.date | date: "%d" }}
        {% assign m = post.date | date: "%-m" %}

        {% case m %}
          {% when '1' %}Enero
          {% when '2' %}Febrero
          {% when '3' %}Marzo
          {% when '4' %}Abril
          {% when '5' %}Mayo
          {% when '6' %}Junio
          {% when '7' %}Julio
          {% when '8' %}Agosto
          {% when '9' %}Septiembre
          {% when '10' %}Octubre
          {% when '11' %}Noviembre
          {% when '12' %}Diciembre
        {% endcase %}

        {{ post.date | date: "%Y" }}
      </span>
      <!-- <p class="post-date"><span><i class="fa fa-calendar" aria-hidden="true"></i> {{ post.date | date: "%B %-d" }} - <i class="fa fa-clock-o" aria-hidden="true"></i> {% include read-time.html %}</span></p> -->
    </li>

  {% endfor %}
</ul>
