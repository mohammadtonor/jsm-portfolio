import {defineType, defineField} from "sanity";

export default defineType({
    name:'skills',
    title:'Skills',
    type: 'document',
    fields: defineField([
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'bgColor',
            title:'BgColor',
            type:'string'
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ])
})