import {defineType, defineField} from "sanity";

export default defineType({
    name:'testimonials',
    title:'Testimonials',
    type: 'document',
    fields: defineField([
        {
            name:'name',
            title:'Name',
            type: 'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name:'feedback',
            title:'Feedback',
            type:'string'
        }
    ])
})