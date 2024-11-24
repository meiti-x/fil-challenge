import { MultiValue } from 'react-select'
import { useState, useEffect } from 'react'
import Typography from '@components/core/Typography'
import ProductCard from '@components/shared/ProductCard'
import Select, { OptionType } from '@components/core/Select'

import movies from '../../../data/movies.json'
import type Movie from '../../../types/movie'
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
    const newFilters: { [key in keyof OptionType]?: string[] } = {}

    Object.keys(qs).forEach((key) => {
      const typedKey = key as keyof OptionType
      const value = Array.isArray(qs[typedKey]) ? qs[typedKey] : [qs[typedKey]]
      newFilters[typedKey] = value
    })

    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }))
  }, [])

  const filteredMovies = useFilteredMovies({
    movies,
    filters
  }) as Movie[]

  function updateValues(val: string, fieldName: MultiValue<OptionType>) {
    const curFilters = {
      ...filters,
      [val]: fieldName.map((f) => f.value)
    }

    console.log(curFilters)
    updateUrlParams(curFilters)
    setFilters(curFilters)
  }

  const selectedCategories = filters.categories || []
  const selectedSort = filters.sorts || []

  console.log({ filters })

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative mx-auto px-4 sm:static sm:px-6 lg:px-8">
        <div className="pb-4 pt-36">
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
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

          <div className="flex flex-col">
            <Typography variant="medium" className="mb-3 w-full">
              لیست تمامی فیلم‌ و سریال ها
            </Typography>

            <div className="flex flex-row flex-wrap gap-2">
              {filteredMovies?.map((m: Movie) => {
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
    </div>
  )
}

export default Home
