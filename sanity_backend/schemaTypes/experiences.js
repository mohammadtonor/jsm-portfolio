import {defineType, defineField} from "sanity";

export default defineType({
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:defineField( [
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name:'works',
            title:'Works',
            type:'array',
            of:[{ type:'workExperience'}]
        },
    ])
})