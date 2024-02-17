import {defineType, defineField} from "sanity";

export default defineType({
    name:'brands',
    title:'Brands',
    type: 'document',
    fields:defineField( [
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name:'name',
            title:'Name',
            type:'string'
        },
    ])
})