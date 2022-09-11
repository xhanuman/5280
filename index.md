---
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: Denver Sprinkler Repairs and Sprinkler Start Up
layout: default
bodyClass: page-home
---
<div class="intro pb-4">
  <div class="container">
    <h1>5280 Sprinklers</h1><h3>Denver Sprinkler Repairs and Winterization (Blowout)</h3>
    <p>Denver Sprinkler Repairs and Start-up</p>
    <br>
    <h3>Now scheduling Fall Winterization Sprinkler Blowouts for 2022</h3>
                    <p>
                        Please click on the service area map to schedule on the correct day(s) for your area (West Denver scheduling not yet available):<br>
                        <img src="../assets/images/DenverMap.png" usemap="#image_map">
<map name="image_map">
  <area alt="Denver EAST" title="Denver EAST" href="https://sprinkler.as.me/?appointmentType=36807369" coords="910,287 915,859 1218,867 1265,898 1393,866 1383,623 1510,558 1510,505 1472,485 1431,480 1387,451 1383,10 1274,9 1142,304 912,287 " shape="polygon">
  <area alt="Denver CENTRAL" title="Denver CENTRAL" href="https://sprinkler.as.me/?appointmentType=36807385" coords="688,294 886,290 886,862 543,862 459,743 451,616 " shape="polygon">
  <area alt="Denver SOUTH" title="Denver SOUTH" href="https://sprinkler.as.me/?appointmentType=36809706" coords="546,878 584,977 575,1108 517,1351 912,1359 905,1419 1071,1421 1062,1390 1318,1385 1375,1349 1383,890 1271,920 1211,878 " shape="polygon">
  <area alt="Denver WEST" title="Denver WEST" href="https://sprinkler.as.me/?appointmentType=36824968" coords="511,1219 61,1221 65,248 169,188 459,99 470,265 521,277 519,384 391,517 384,587 393,625 410,756 502,879 541,994 " shape="polygon">
</map>
  </div>
</div>

<!--<div class="container pt-2">
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
-->

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
