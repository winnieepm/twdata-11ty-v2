---
pagination: 
    data: twids 
    size: 1
    alias: tw
permalink: 'tav/tweets/{{ tw }}/'
layout: '/layouts/home.njk'
title: 'expanded view'
---

{% include "partials/twSingle.njk" %}

{#  if reply: true render template replyThread.njk #}

this line comes from the markdown file. add expanded tweet and user field info here below using #s for links. this layout is the base for other tweet types: quoted-retweets, and threaded tweets (replies, popular qtd-retweets).


