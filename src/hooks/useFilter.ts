import { useMemo } from 'react'

interface Movie {
  id: string
  movie_title: string
  rate_avrage: string
  categories: { title_en: string; title: string }[]
}

interface FilteredMoviesHookParams {
  movies: Movie[]
  filters: { categories?: string[]; sorts?: string[] }
}

export function filterMovies(
  movies: Movie[],
  filters: { categories?: string[]; sorts?: string[] }
): Movie[] {
  let result = [...movies]

  const selectedCategories = filters.categories?.map((c) => c) || []
  const selectedSort = filters.sorts?.map((s) => s)[0]

  if (selectedCategories.length > 0 && selectedCategories?.[0].length !== 0) {
    result = result.filter((movie) =>
      movie.categories.some((category) =>
        selectedCategories.some((c) => c === category?.title_en)
      )
    )
  }

  if (selectedSort) {
    result.sort((a, b) => {
      const rateA = parseFloat(a.rate_avrage)
      const rateB = parseFloat(b.rate_avrage)
      return selectedSort === 'top' ? rateB - rateA : rateA - rateB
    })
  }

  return result
}

export function useFilteredMovies({
  movies,
  filters
}: FilteredMoviesHookParams) {
  const filteredMovies = useMemo(
    () => filterMovies(movies, filters),
    [movies, filters]
  )
  return filteredMovies
}
