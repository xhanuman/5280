---
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: Denver Sprinkler Repairs and Sprinkler Start Up
layout: default
bodyClass: page-home
---
<div class="intro pb-4">
  <div class="container">
    <h1>5280 Sprinklers</h1><h3>Denver Sprinkler Repairs</h3>
    <p>Denver Sprinkler Repairs and Start-up</p>
    <img class="size-medium wp-image-21" title="Denver Sprinkler Start up" src="http://www.denversprinklerblowout.com/wp-content/uploads/2010/04/sprinklerStartUP-300x102.jpg" alt="" width="300" height="102"/><br>
    Schedule here (Apple products/mobile)<br>
    <a href="https://aurorablowout.genbook.com">Book Sprinkler Startup / Repairs</a>
  </div>
</div>

<div class="container pt-2">
  <div class="call">
    <div class="call-box-top">
      <div class="call-phone"><strong>Chat:</strong> (chat link -> bottom-right)</div>
      <div class="call-phone"><strong>Phone: </strong> {{ site.data.contact.phone }} (via text message please) </div>
      <div class="call-email"><strong>Email: </strong>
        <a href="mailto:{{ site.data.contact.email }}">
          {{ site.data.contact.email }}
        </a>
      </div>
    </div>
    <div class="call-box-bottom">
      <a href="{{site.baseurl}}/contact" class="button">More info</a>
    </div>
  </div>
</div>

<div class="container pt-8 pt-md-10">
  <div class="row justify-content-start">
    <div class="col-12">
      <h2 class="title-3 text-dark mb-3">Sprinkler Services in Denver</h2>
    </div>
    {% for service in site.services %}
    <div class="col-12 col-md-4 mb-1">
      <div class="service service-summary">
        <div class="service-content">
          <h2 class="service-title">
            <a href="{{site.baseurl}}{{ service.url }}">{{ service.title }}</a>
          </h2>
          {{ service.content | markdownify | strip_html | truncate: 100 }}
        </div>
      </div>
    </div>
    {% endfor %}
    <div class="col-12 text-center">
      <a class="button button-primary mt-2" href="{{site.baseurl}}/services">View All Services</a>
    </div>
  </div>
</div>

<!--<div class="container pt-5 pb-5 pt-md-7 pb-md-7">
  <div class="row justify-content-center">
    <div class="col-12">
      <h2 class="title-3 text-dark mb-4">Our Features</h2>
    </div>
    {% for feature in site.data.features %}
    <div class="col-12 col-md-6 col-lg-4 mb-2">
      <div class="feature">
        {% if feature.image %}<div class="feature-image"><img alt="{{ feature.title }} logo" src="{{ feature.image }}" /></div> {% endif %}
        <h2 class="feature-title">{{ feature.title }}</h2>
        <div class="feature-content">{{ feature.description }}</div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
-->
