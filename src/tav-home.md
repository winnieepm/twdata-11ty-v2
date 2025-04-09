---
permalink: "tav/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}home.html"
layout: 'layouts/home.njk'
title: 'twitter archive viewer'
pagination:
    data: twids
    size: 20
---
this precedes the display of all single tweets from `partials/single-tw.njk`.

{% for tweet_id in pagination.items %}
    <article class="tweet">
        <p><strong>@{{ users[tweets[tweet_id].user_id].screen_name }}</strong></p>
        <a href="tweets/{{ tweet_id | slugify }}/">
        <p>{{ tweets[tweet_id].text }}</p>
        </a>
        <p><small>{{ tweets[tweet_id].created_at }}</small></p>
    </article>
{% endfor %}

<nav aria-labelledby="my-pagination">
    <button>{% if pagination.href.previous %}<a href="{{ pagination.href.previous }}">Previous</a>{% else %}Previous{% endif %}</button>
    <button>{% if pagination.href.next %}<a href="{{ pagination.href.next }}">Next</a>{% else %}Next{% endif %}</button>
</nav>