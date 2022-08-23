# ICT Skills 2 Assignment.

Name: Craig Grehan

## Overview.

This React App is an extension of the Movies App which was developed as part of ICT2 labs. Features have been added and/or extended as per the below:

+ Added ability to remove a movie from Must Watch list
+ Added group avatars if a film is tagged as both a Favourite and Must Watch
+ Added link to Similar Movies from the Home page
+ Added link to Cast list from the Movie Details page
+ Added filter on Cast list
+ Added more Detail to Cast list header (i.e passed name of Movie/ TV Show)
+ Added link to Actor Details from the Cast list page
+ Added Popular TV Shows page
+ Added link to Similar TV Shows
+ Added TV Show Details
+ Added link to Cast list of TV Shows
+ Added toggle effect on Favourite and Must Watch buttons
+ Restyled some of the website pages

## Setup requirements.

The application files can be cloned from GitHub repo:

https://github.com/Craig-WIT/ict2-assignmentApp

Navigate to the 'src' folder and run 'npm install'.

Register with TMDB to receive an API key - update the '.env' with unqiue API key.

Run 'npm start' to launch the application locally.

Run 'npm run storybook' to launch storybook components.

## App Design.

### Routing/Navigation.

New routes have been added per the below:

+ /actors/:id - detailed information on a specific cast member (actor).
+ /tv/popular - list of most Popular TV Shows
+ /TVShows/:id - detailed information on a specific TV Show.
+ /movieCast/:id - list of Movie cast/characters
+ /TVShowCast/:id - list of TV Show cast/characters
+ /similarMovies/:id - list of Similar Movies
+ /similarTVShows/:id - list of Similar TV Shows

### Views/Pages.

Screenshots of new or modified views per the below:

>Added group avatars for films that are both Favourite and Must Watch

![][d1]

>Added toggle to Favourite and Must Watch directly on Movie Card - icons change colour depending on tag

![][d2]

>Added similar Movies page with filtering

![][d3]

>Added view Cast option to Movie details and TV Show details

![][d4]

![][d5]

>Added Cast list with filtering

![][d6]

>Added Cast detail page

![][d7]

>Added Popular and Similar TV Shows with filtering

![][d8]

![][d9]


### Component catalogue.

Storybook UI added for components per the below:

![][stories1]

![][stories2]

![][stories3]

![][stories4]

## Caching.

List of TMDB server state:

+ Popular TV
+ Cast List
+ Similar movies
+ Similar TV
+ Cast details

![][caching]

## Authentication (if relevant).

## Server-side persistence (if relevant)

## Additional features (if relevant),

## Independent learning (if relevant),

[d1]: ./public/Favourite_MustWatch.JPG
[d2]: ./public/Toggle.JPG
[d3]: ./public/Similar.JPG
[d4]: ./public/viewCastMovie.JPG
[d5]: ./public/viewCastTV.JPG
[d6]: ./public/castList.JPG
[d7]: ./public/castDetail.JPG
[d8]: ./public/discoverTV.JPG
[d9]: ./public/SimilarTV.JPG
[caching]: ./public/cache.png
[stories1]: ./public/stories1.png
[stories2]: ./public/stories2.png
[stories3]: ./public/stories3.png
[stories4]: ./public/stories4.png