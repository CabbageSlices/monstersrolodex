import React from "react"

export const SearchBox = props => (
    <input
        type='search'
        placeholder={props.placeholder}
        onChange={
        e => props.onChange(e.target.value)
    }/>
)