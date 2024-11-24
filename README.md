# react-movie-labs 4
###### By Ursula Tamen <br> This an continuation of the movie react app (version 3) done duuring labs with some added improvements. <br> TMDB API used. All endpoints therefore prefixed with `https://api.themoviedb.org/3`<br>This document is specifically on improvements done to the app. It shall later be updated to detail all features.

## Improvements
#### App Extension (More Endpoints)
All Api fetch methods found in the `movies\src\api\tmdb-api.js file` <br>
- Static Endpoints (2) 
  - **/upcoming** - To get list of upcoming movies. (done as exercise at end of lab) 
  - **/now_playing** - List of movies playing now!
- Parameterised endpoints
  -  **/person/:id** - Get persons info/about
  -  **/person/:id/movie_credits** - Get a persons list of movies they took part in
  -  **/movie/:id/similar** - Get list of moview similar to the one selected
  -  **/movie/:id/credits** - Get a list of the cast and crew for this movie
#### Functionality
- Caching done on all added endpoints (static and parameterised) <br>
  
  ![image](https://github.com/user-attachments/assets/992433bf-01f9-4858-8089-db3797965db3)

- Sorting option added to `filterCard` component used in `templateMovieListPage` and displayed on all main pages:
  - By title: _alphabetically_
  - By ratings (vote_average): _descending order_
  - By release date: _descending order_

#### Features
Minor changes in color scheme
##### New layout component: react-responsive-carousel
  Used in similar movies and cast list in `Movie Detail Page`
##### Responive UI Layout
  - Made carousel' _centerSlidePercentage_ parameter depend on the screen size. For this I made use of _useMediaQuery and useTheme_ as shown <br>
```
  import { useMediaQuery, useTheme } from "@mui/material";`

  // Use the MUI theme and breakpoints to determine screen size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));  // Define mobile screen size

  centerSlidePercentage={isMobile ? 50: 20}
```
 We can 5 slides at once on larger screen
 
 ![image](https://github.com/user-attachments/assets/ef971ae2-cba3-4b73-9f6c-68ef94135587)

 Opposed to 2 slides on Mobile

 ![image](https://github.com/user-attachments/assets/5b04dfd1-63ad-4d21-8c85-0c21822094c8)

 **NB: I noted in this case that  using a flex box renders much better in terms of UIX. It is adjusts better per screen size and is more visually appealing. Example shown in the Persons details page, movie credits section.**

 ![image](https://github.com/user-attachments/assets/6e86df2a-0317-46dc-a5a0-222ecb645165)

 ![image](https://github.com/user-attachments/assets/a32d82ee-b270-47be-9b9a-29749781395a)

##### Pagination and Sticky Headers
Site and Page Headers made sticky (unscrollable) to facilitate navigation. <br> <br>
__Added Pagination to all main pages displaying fetched movie list. For this:__ <br>
- The concerned fetches were updated to take in a page number parameter.
- A current page state was set
- A pagination `movies\src\components\MoviePagePagination` component was added

  ```
  const [currentPage, setCurrentPage] = useState(1); // Manage the current page state

  // Fetch movies for the current page using react-query
  const { data, error, isLoading, isError } = useQuery(
    ['discover', currentPage], // Add currentPage as part of the query key to refetch data when page changes
    () => getMovies(currentPage) // Fetch movies for the current page
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page); // Update the page when user clicks on a pagination button
  };
  
  ```

  ```
  <MoviePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
  />
  ```

  ![image](https://github.com/user-attachments/assets/046e617f-158e-45a3-997b-5afa269a9cb8)

  ##### Handle missing Information to keep good UD
  Noticed some objects had some empty paramaters and handled some of them using conditionals. For example:
  ```
  <Typography variant="body1" gutterBottom> {/*gutterBottom to add bottom margin*/}
           {person.biography ? person.biography : "Biography is not available at the moment."}
  </Typography>
  ```
  ![image](https://github.com/user-attachments/assets/4b8bc10e-3fd1-453d-9b9a-4e7f30aa10ff)






