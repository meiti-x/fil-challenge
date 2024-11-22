import Typography from '@components/core/Typography'
import ProductCard from '@components/shared/ProductCard'
import Select, { OptionType } from '@components/core/Select'

import movies from '../../../data/movies.json'
import Movie from '@types/movie'
import { MultiValue } from 'react-select'
import { useState, useEffect } from 'react'
import { getQueryParams, updateUrlParams } from '../../../utils/url'
import { useFilteredMovies } from '../../../hooks/useFilter'

const categories: OptionType[] = [
  { value: 'drama', label: 'درام' },
  { value: 'comedy', label: 'کمدی' },
  { value: 'sci-fi', label: 'علمی تخیلی' },
  { value: 'action', label: 'اکشن' },
  { value: 'family', label: 'خانوادگی' }
]

const sort: OptionType[] = [
  { value: 'top', label: 'بالاترین امتیاز' },
  { value: 'low', label: 'پایین‌ترین امتیاز' }
]

function Home() {
  const [filters, setFilters] = useState<{
    sorts: OptionType[]
    categories: OptionType[]
  }>({
    categories: [],
    sorts: []
  })
  const qs = getQueryParams()

  useEffect(() => {
    const newFilters: { [key: string]: string[] } = {}
    Object.keys(qs).forEach((key) => {
      const value = Array.isArray(qs[key]) ? qs[key] : [qs[key]]
      newFilters[key] = value
    })
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }))
  }, [])

  const filteredMovies = useFilteredMovies({
    movies,
    filters
  })
  function updateValues(val: string, fieldName: MultiValue<OptionType>) {
    const curFilters = {
      ...filters,
      [val]: fieldName.map((f) => f.value)
    }
    updateUrlParams(curFilters)
    setFilters(curFilters)
  }

  const selectedCategories = filters['categories'] || []
  const selectedSort = filters['sorts'] || []

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="pb-4 pt-36">
          <div className="flex justify-center gap-3">
            <Select
              onChange={(v) => updateValues('categories', v)}
              placeholder="دسته بندی"
              options={categories}
              isMulti
              value={categories.filter((c) =>
                selectedCategories.includes(c.value)
              )}
            />
            <Select
              onChange={(v) => updateValues('sorts', v)}
              placeholder="امتیاز فیلم"
              options={sort}
              isMulti={false}
              value={sort.filter((c) => selectedSort.includes(c.value))}
            />
          </div>
          <Typography variant="medium">لیست تمامی فیلم‌ و سریال ها</Typography>

          <div className="mt-2 flex flex-row flex-wrap gap-2">
            {filteredMovies?.map(function (m: Movie) {
              return (
                <ProductCard
                  key={m?.id}
                  rate={m?.rate_avrage}
                  title={m?.movie_title}
                  categories={m?.categories.map((c) => c.title)}
                  cover={m?.pic.movie_img_b}
                  rateCount={m?.avg_rate_label}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
