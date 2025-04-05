# dev notes
mostly observations of solutions/frustrations with development. sometimes, the note marks a checkpoint.

#### 2025-04-01
made a branch, `search-fn`, to work on the lunr search index bc idw to mess anything that's already working. created `tw-search-build.js` to generate the data json and creates the search index. haven't tested the code in it yet, but i'm missing 1 core script before i can test: `tw-search.js`, the file with the logic that mks the actual `search()` for me to call on in the html. 

#### 2025-03-31
spent a lifetime figuring out why `justify-content` wasn't working only to find i should've used `align-items`. add lunr now.

#### 2025-03-26
generated a single page for each tweet that pulls data from the `twids.json` successfully. now edit the `twSingle.njk` to mk a draft of the full expanded view.

#### 2025-03-15
made a bare bones template for single tweets. it wasn't working before because the json tweet data is an `object`, not an `array`. when pulling data from an `object` in a `for loop`, the syntax changes to include the key value: `{% for key, tweet in tweets %}` as opposed to simply `{% for tweet in tweets %}`as you'd write for an `array`. 

now, can you pull in data from different jsons in the same .njk template, especially in a single `for loop`? right now, tweet content is stored in `tweets.json` and their user's in `users.json`. 

#### 2025-03-14
so nothing was broken. i thought the `{% block content%}{% endblock %}` wasn't rendering it's content, but i didn't know it was never going to because it was empty: it either has content you define inside it or allows ccontent from another template pass through it. 

in this case, i hadn't added the `home.html` template and i was avoiding using `{{ content | safe }}` because i had read it was not as flexible as the block option. it turns out content and not block content points to the data that gets ultimately rendered, but only blocks can reference  another template and the location for rendering. i'll revise this explanation later. 

 the silver lining is that now i understand how they're different.  