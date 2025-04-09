---
permalink: "tav/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}home.html"
layout: 'layouts/home.njk'
title: 'twitter archive viewer'
pagination:
    data: twids
    size: 200
---
this precedes the display of all single tweets from `partials/single-tw.njk`.

<nav aria-labelledby="my-pagination">
  <ol>
{%- for pageEntry in pagination.pages %}
    <li><a href="{{ pagination.hrefs[ loop.index0 ] }}" aria-label="Page {{ loop.index }}"{% if page.url == pagination.hrefs[ loop.index0 ] %} aria-current="page"{% endif %}>{{ loop.index }}</a></li>
{%- endfor %}
  </ol>
</nav>
{% for tweet_id in pagination.items %}
    <article class="tweet">
        <p><strong>@{{ users[tweets[tweet_id].user_id].screen_name }}</strong></p>
        <a href="tweets/{{ tweet_id | slugify }}/">
        <p>{{ tweets[tweet_id].text }}</p>
        </a>
        <p><small>{{ tweets[tweet_id].created_at }}</small></p>
    </article>
{% endfor %}
