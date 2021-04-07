interface IPostContent {
    banner_images: any[],
    body: any[],
    description: any[],
    title: any[]
}

interface IPost {
    id: string,
    uid: string,
    type: string,
    href: string,
    tags: [],
    first_publication_date: string,
    last_publication_date: string,
    slugs: string[],
    linked_documents: string[],
    lang: string,
    alternate_languages: string[],
    data: IPostContent
}