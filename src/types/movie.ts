export default interface Movie {
  type: string
  id: string
  link_type: string
  link_key: string
  theme: string
  output_type: string
  movie_id: string
  uid: string
  movie_title: string
  movie_title_en: string
  tag_id: string
  serial: Serial
  watermark: boolean
  HD: boolean
  watch_list_action: string
  commingsoon_txt: string
  rel_data: RelData
  badge: Badge
  rate_enable: boolean
  rate_enable_by_cnt: boolean
  descr: string
  cover: string
  publish_date: string // ISO Date string
  age_range: string
  pic: Pic
  rate_avrage: string
  avg_rate_label: string
  pro_year: string
  imdb_rate: string
  categories: Category[]
  duration: Duration
  countries: Country[]
  dubbed: Dubbed
  subtitle: Subtitle
  audio: Audio
  language_info: LanguageInfo
  director: string
  last_watch: string | null
  freemium: boolean
  position: string | null
  sid: string | null
  uuid: string | null
}

export interface Serial {
  enable: boolean
  parent_title: string
  season_id: number
  serial_part: string
  part_text: string
  season_text: string
  last_part: string
}

export interface RelData {
  rel_type: string
  rel_id: string
  rel_uid: string | null
  rel_title: string | null
  rel_type_txt: string
}

export interface Badge {
  free: boolean
  backstage: boolean
  vision: boolean
  hear: boolean
  online_release: boolean
  exclusive: boolean
  commingsoon: boolean
  info: string[]
}

export interface Pic {
  movie_img_s: string
  movie_img_m: string
  movie_img_b: string
}

export interface Category {
  title_en: string
  title: string
  link_type: string
  link_key: string
}

export interface Duration {
  value: number
  text: string
}

export interface Country {
  country: string
  country_en: string
}

export interface Dubbed {
  enable: boolean
  text: string
}

export interface Subtitle {
  enable: boolean
  text: string
}

export interface Audio {
  languages: string[]
  isMultiLanguage: boolean
}

export interface LanguageInfo {
  flag: string
  text: string
}
