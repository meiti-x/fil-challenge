import Typography from '@components/core/Typography'
import ProductCard from '@components/shared/ProductCard'
import Select from '@components/core/Select'

import movies from '../../../data/movies.json'
import Movie from '@types/movie'

const categories = [
  { value: 'dram', label: 'درام' },
  { value: 'comedy', label: 'کمدی' },
  { value: 'sci-fi', label: 'علمی تخیلی' },
  { value: 'action', label: 'اکشن' }
]

const sort = [
  { value: 'top', label: 'بالاترین امتیاز' },
  { value: 'low', label: 'پایین‌ترین امتیاز' }
]

function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="pb-4 pt-36">
          <div className="flex  justify-center gap-3">
            <Select placeholder=" دسته بندی" options={categories} />
            <Select placeholder="امتیاز فیلم" options={sort} />
          </div>
          <Typography variant="medium">لیست تمامی فیلم‌ و سریال ها</Typography>

          <div className="mt-2 flex flex-row flex-wrap gap-2">
            {(movies as Movie[])?.map(function (m: Movie) {
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
