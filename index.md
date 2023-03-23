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
      <h3>Now scheduling Fall Winterization Sprinkler Blowouts for 2023</h3>
      <p>
          <h4>Please click on the service area map to schedule on the correct day(s) for your area</h4>:<br>
           <img src="../assets/images/DenverMap.png" usemap="#image_map">
           <map name="image_map">
             <area alt="Denver EAST" title="Denver EAST" href="https://sprinkler.as.me/?appointmentType=43693178" coords="910,287 915,859 1218,867 1265,898 1393,866 1383,623 1510,558 1510,505 1472,485 1431,480 1387,451 1383,10 1274,9 1142,304 912,287 " shape="polygon">
             <area alt="Denver CENTRAL" title="Denver CENTRAL" href="https://sprinkler.as.me/?appointmentType=43693178" coords="688,294 886,290 886,862 543,862 459,743 451,616 " shape="polygon">
             <area alt="Denver SOUTH" title="Denver SOUTH" href="https://sprinkler.as.me/?appointmentType=43693178" coords="550,879 587,978 579,1110 546,1245 968,1245 1103,1245 1211,1243 1296,1243 1349,1245 1385,1241 1387,891 1274,922 1214,879 " shape="polygon">
             <area alt="Denver WEST" title="Denver WEST" href="#" coords="511,1219 61,1221 65,248 169,188 459,99 470,265 521,277 519,384 391,517 384,587 393,625 410,756 502,879 541,994 " shape="polygon">
           </map>

           <br>
<!--
    <h3>Now scheduling Fall Winterization Sprinkler Blowouts for 2023</h3>
                    <p>
                        <h4>Please click on the service area map to schedule on the correct day(s) for your area (West Denver scheduling not yet available)</h4>:<br>
                         <img src="../assets/images/DenverMap.png" usemap="#image_map">
<map name="image_map">
  <area alt="Denver EAST" title="Denver EAST" href="https://sprinkler.as.me/?appointmentType=36807369" coords="910,287 915,859 1218,867 1265,898 1393,866 1383,623 1510,558 1510,505 1472,485 1431,480 1387,451 1383,10 1274,9 1142,304 912,287 " shape="polygon">
  <area alt="Denver CENTRAL" title="Denver CENTRAL" href="https://sprinkler.as.me/?appointmentType=36807385" coords="688,294 886,290 886,862 543,862 459,743 451,616 " shape="polygon">
  <area alt="Denver SOUTH" title="Denver SOUTH" href="https://sprinkler.as.me/?appointmentType=36809706" coords="550,879 587,978 579,1110 546,1245 968,1245 1103,1245 1211,1243 1296,1243 1349,1245 1385,1241 1387,891 1274,922 1214,879 " shape="polygon">
  <area alt="Denver WEST" title="Denver WEST" href="https://sprinkler.as.me/?appointmentType=36824968" coords="511,1219 61,1221 65,248 169,188 459,99 470,265 521,277 519,384 391,517 384,587 393,625 410,756 502,879 541,994 " shape="polygon">
</map>

<br>
<h4>Aurora, Centennial and South Denver</h4>                   
<img src="../assets/images/AuroraCentMap.png" usemap="#image_mapL"></p>
<map name="image_mapL">
<area title="East denver and West Aurora" alt="East Denver and West Aurora" coords="301,77 302,344 453,431 581,574 636,590 718,542 721,237 952,231 902,194 744,120 " shape="polygon" href="https://sprinkler.as.me/?appointmentType=36955445">
<area title="Central Aurora and East Aurora" alt="Central Aurora and East Aurora" coords="731,246 729,543 644,596 662,602 1037,610 1199,670 1195,247 " shape="polygon" href="https://sprinkler.as.me/?appointmentType=36955481">
<area title="South Denver to DTC" alt="South Denver to DTC" coords="291,359 237,391 236,475 283,476 300,485 296,617 235,617 236,917 497,922 471,857 597,859 597,739 494,699 494,663 607,592 578,589 432,434 353,386 325,380 " shape="polygon" href="https://sprinkler.as.me/?appointmentType=36955162">
<area title="South  Aurora and Centennial " alt="South  Aurora and Centennial " coords="657,611 657,732 721,796 700,800 702,816 611,815 611,855 752,860 834,1029 858,974 942,937 1017,947 1105,984 1210,982 1206,836 1164,849 1171,822 1145,820 1100,736 1089,681 1033,678 1029,616 " shape="polygon" href="https://sprinkler.as.me/?appointmentType=36955521">
</map>
<!--END Sprinkller blowout section-->
-->

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
