# 🎥 React Movie App (Version 4) - Extended API Integration
###### By Ursula Tamen
###### Welcome to Version 4 of my React Movie App! This project builds on the foundational features developed in earlier lab versions and extends the app with advanced functionality, refined user interface design, and seamless integration with both the **TMDB API** and custom-built API endpoints.

---
###### [Watch Video Presentation](https://youtu.be/91h4hDNPDvk)

---

## ✨ Key Highlights
- **Full integration with TMDB API** using both static and dynamic endpoints
- **Enhanced user experience** through improved UI, responsive design, and conditional rendering
- **Pagination and filtering** for improved content navigation
- **Custom layout components** using `react-responsive-carousel` and Material UI
- **Efficient caching** on all fetch requests

## 💲 Features Overview

### 🌀 Extended API Usage
All fetch methods are handled via `movies/src/api/tmdb-api.js`

#### TMDB API Endpoints
| Endpoint | Type | Description |
|----------|------|-------------|
| `/upcoming` | Static | Upcoming movies |
| `/now_playing` | Static | Movies currently in theaters |
| `/person/:id` | Parameterized | Individual actor/crew details |
| `/person/:id/movie_credits` | Parameterized | Person’s movie credits |
| `/movie/:id/similar` | Parameterized | Similar movie suggestions |
| `/movie/:id/credits` | Parameterized | Full cast & crew for a movie |

> ✅ **Caching implemented** for both static and parameterized endpoints to enhance performance.
  
  ![image](https://github.com/user-attachments/assets/992433bf-01f9-4858-8089-db3797965db3)

---

## ⚖️ Sorting Functionality
Implemented in the `FilterCard` component and visible on all main movie listing pages:

- **By Title**: Alphabetically
- **By Ratings**: Descending (vote_average)
- **By Release Date**: Descending

---

## 📅 Responsive Carousel & Layout

### New Layout Component
Used `react-responsive-carousel` for displaying similar movies and cast lists.

### Adaptive Design
Used Material UI's `useMediaQuery` and `useTheme` to make carousels responsive:

```js
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("md"));
centerSlidePercentage={isMobile ? 50 : 20};
```

- 5 slides on large screens
- 3 slides on mobile

<div style="display: flex; gap: 1rem; align-items: flex-start;">
  <img src="https://github.com/user-attachments/assets/ef971ae2-cba3-4b73-9f6c-68ef94135587" alt="5 Slides - Large Screen" width="60%" />
  <img src="https://github.com/user-attachments/assets/5b04dfd1-63ad-4d21-8c85-0c21822094c8" alt="3 Slides - Mobile" width="25%" />
</div>  

---

 **Note**: In some cases, using a flex layout produced better UI/UX. This is particularly evident on the `Person Details` page.

<div style="display: flex; gap: 1rem; align-items: flex-start;">
  <img src="https://github.com/user-attachments/assets/6e86df2a-0317-46dc-a5a0-222ecb645165" alt="Flex Layout 1" width="60%" />
  <img src="https://github.com/user-attachments/assets/a32d82ee-b270-47be-9b9a-29749781395a" alt="Flex Layout 2" width="25%" />
</div>

---

## 🔢 Pagination & Sticky Headers

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

---

  ## 🔐 User-Friendly Fallbacks
  Conditional rendering ensures clean UI even when data is missing. For example:
  ```
  <Typography variant="body1" gutterBottom> {/*gutterBottom to add bottom margin*/}
           {person.biography ? person.biography : "Biography is not available at the moment."}
  </Typography>
  ```
  ![image](https://github.com/user-attachments/assets/4b8bc10e-3fd1-453d-9b9a-4e7f30aa10ff)

---

## 🎓 Tech Stack
- React.js
- React Query
- React Router
- Material UI
- TMDB API
- react-responsive-carousel

---

## 📊 Skills Demonstrated
- RESTful API Integration
- Responsive UI Design
- Pagination and Query Optimization
- Conditional Rendering
- Frontend Architecture & State Management

---

## 📰 Future Improvements
- Integrate user authentication for review submission
- Enable favoriting and watchlists with local or backend persistence
- Add unit tests for fe
---

Feel free to fork this repo, open an issue, or contact me directly for feedback and collaboration!

---



