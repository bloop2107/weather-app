import { Select } from 'antd';
import {useEffect} from 'react'

const { Option } = Select;



const SelectCountry = ({countries,countrySelect}) => {

    useEffect(() => {
        console.log('countries',countries)
    }, [countries])

    function onChange(value) {
        countrySelect(value)
    }


    return (
        <Select
            showSearch
            style={{ width: 200, marginBottom: '10px' }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {
              countries.map((country,index) => 
                <Option key={index} value={country.cityId}>{country.name}</Option>
              )
            }
        </Select>
    )
}

export default SelectCountry
