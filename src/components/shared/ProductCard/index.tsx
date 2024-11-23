import Typography from '@components/core/Typography'
import './styles.css'
import { toPersianNum } from '../../../utils'

interface Props {
  cover?: string
  title?: string
  rate?: string
  categories?: string[]
  rateCount?: string
}

export default function ProductCard({
  cover,
  title,
  rate,
  categories,
  rateCount
}: Props) {
  const fallbackImage =
    'https://via.placeholder.com/300x450?text=No+Image+Available'

  return (
    <div className="productCard">
      <div className="cover">
        <div className="detail">
          {rateCount && (
            <div className="rate">
              <Typography variant="xs" color="whiteSmoke">
                {toPersianNum(rateCount)}
              </Typography>
            </div>
          )}
          <Typography variant="small" color="whiteSmoke">
            {title}
          </Typography>
          <Typography variant="small" color="whiteSmoke">
            {categories?.join('-')}
          </Typography>
        </div>
        <img
          className="min-h-[266px] object-fill"
          alt={title}
          src={cover || fallbackImage}
          width={'200px'}
        />
      </div>
      <div className={'mt-2 flex items-center'}>
        <Typography
          className="max-w-[110px] truncate"
          variant="small"
          color="gray"
        >
          {title}
        </Typography>

        {rate && (
          <div className="mr-auto rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-400">
            امتیاز: {toPersianNum(rate)}
          </div>
        )}
      </div>
    </div>
  )
}
