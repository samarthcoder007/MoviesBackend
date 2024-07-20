
# Movies 

An API for you to get details about movies.

# How to use: 
1. GET Request: Write name of movie for which you want information. If you don't write any name, you'll get all the movies that are present. If you write a wrong name, you'll get an error.

2. DELETE Request: Write name of movie which you want to delete. If you write a wrong name, you'll get an error.

3. POST Request: If you need to post a new movie, you'll need to write a json object in the input. The mandatory keys are:
 
name, yearOfRelease, genre, url

Here, url is url of an image of the movie.

Optional keys are:

leadMaleActor,leadFemaleActor

4. PATCH Request: If you need to patch a movie, send a json with name of movie and the keys you want to change.

Enjoy !!
