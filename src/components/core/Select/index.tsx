import React, { useState } from 'react'
import Select, { MultiValue, StylesConfig, GroupBase } from 'react-select'
import makeAnimated from 'react-select/animated'
import Typography from '@components/core/Typography'

interface OptionType {
  label: string
  value: string
}

interface Props {
  options: OptionType[]
  placeholder?: string
}

const customStyles: StylesConfig<OptionType, true, GroupBase<OptionType>> = {
  option: (provided) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#333'
  })
}

const MultiSelectWithCheckboxes: React.FC<Props> = ({
  options,
  placeholder
}: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<
    MultiValue<OptionType>
  >([])

  const handleChange = (selected: MultiValue<OptionType>) => {
    setSelectedOptions(selected || [])
  }

  return (
    <div>
      <Select
        className="min-w-[300px] rounded-md [&>div]:bg-transparent"
        placeholder={placeholder}
        closeMenuOnSelect={false}
        components={makeAnimated()}
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        styles={customStyles}
        hideSelectedOptions={false}
        isOptionSelected={(option) =>
          selectedOptions.some((selected) => selected.value === option.value)
        }
        getOptionLabel={(e) => {
          const isSelected = selectedOptions.some(
            (selected) => selected.value === e.value
          )
          return (
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => {}}
                style={{ marginRight: 10 }}
              />
              <Typography
                className="mr-2"
                variant="small"
                color={isSelected ? 'white' : 'whiteSmoke'}
              >
                {e.label}
              </Typography>
            </div>
          )
        }}
      />
    </div>
  )
}

export default MultiSelectWithCheckboxes