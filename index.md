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
      <h3>ALMOST ready for Scheduling now for mid-April 2024</h3>
      <p>pleaes make sure the site is showing 'Startup' if you click the link - if not please wait a bit more

          <h4>Please click on the service area map to schedule on the correct day(s) for your area</h4><br>
          <strong>To schedule with Leif (Aurora/Centennial) please scroll down to second map</strong>

<!-- FIRST MAP -->
<div class="svg-container">

    <object type="image/svg+xml" data="../assets/images/DenverMap_1195.svg">
    </object>    

    <svg>
        <g transform="matrix(1.0663 0 0 1.0663 0 -12.837)">
            <path d="m807 229 14 91 151 5v-305l-77 1z" style="fill-opacity:.40898;fill:#f0f;opacity:.94079;stroke-linejoin:round;stroke-width:14.067;stroke:#000"/>
        </g>
        <g transform="translate(0 17.117)">
            <rect x="385.65" y="374.54" width="206.02" height="52.728" style="paint-order:normal;stroke-linejoin:round;stroke-width:14.476;stroke:#000"/>
            <text x="382.78897" y="410.64859" style="fill:#ffffff;font-family:sans-serif;font-size:28.134px;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-weight:bold;paint-order:stroke fill markers;stroke-width:0;stroke:#9298c9" xml:space="preserve"><tspan x="382.78897" y="410.64859" style="stroke-width:0">Central Denver</tspan></text>
            <!-- Add more SVG elements here -->
        </g>
    </svg>
</div>
<!-- END firsthalf STARTUP -->

<!-- SECOND MAP BELOW -->
<!-- STARTUP Aurora/Cent -->
<div class="svg-container">

    <object type="image/svg+xml" data="../assets/images/AuroraCentMap_1195.svg">
    </object>

    <svg>
        <g transform="matrix(1.2975 0 0 1.2975 16.5 14.35)">
            <rect x="780.72" y="325.64" width="216.54" height="50.827" style="paint-order:normal;stroke-linejoin:round;stroke-width:14.571;stroke:#000"/>
            <text x="781.01813" y="358.83713" style="fill:#ffffff;font-family:sans-serif;font-size:20.76px;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-weight:bold;paint-order:stroke fill markers;stroke-width:0;stroke:#9298c9" xml:space="preserve"><tspan x="781.01813" y="358.83713" style="stroke-width:0">Central / East Aurora</tspan></text>
            <!-- Add more SVG elements here -->
        </g>
    </svg>
</div>
<!-- END STARTUP Aurora/Cent -->

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
