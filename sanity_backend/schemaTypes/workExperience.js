import {defineType, defineField} from "sanity";

export default defineType({
    name:'workExperience',
    title:'Work Experience',
    type: 'document',
    fields:defineField( [
        {name:'name',
            title:'name',
            type:'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'desc',
            title:'Desc',
            type:'string'
        }
    ])
})