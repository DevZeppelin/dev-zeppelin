import React, { useState } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout';

interface Props {
    post: any
}

const Index: React.FC<Props> = (props) => {
    return (
        <DefaultLayout>
            <div className="flex flex-col-reverse lg:flex-row">
                <div className="lg:w-3/4 lg:pr-16 text-center">
                    <h3 className="text-mywhite mb-2">Escrito por: <span className="text-mygreen">Gino</span></h3>
                    <h1 className="text-mywhite text-4xl leading-none mb-16">Hola estamos aquí</h1>
                    <div className="space-y-4 text-mywhite text-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, inventore. Consequuntur exercitationem voluptatem amet quo sit id animi accusantium eaque illum maxime? Odit et fugit aliquid facilis voluptatem. Ab, nesciunt.                Unde quia voluptatibus aperiam voluptates ipsa illum nobis eos debitis maxime exercitationem minus hic saepe sequi, nulla, dolores provident mollitia eum totam perspiciatis iusto quae officia sapiente ea. Ducimus, esse!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, inventore. Consequuntur exercitationem voluptatem amet quo sit id animi accusantium eaque illum maxime? Odit et fugit aliquid facilis voluptatem. Ab, nesciunt.                Unde quia voluptatibus aperiam voluptates ipsa illum nobis eos debitis maxime exercitationem minus hic saepe sequi, nulla, dolores provident mollitia eum totam perspiciatis iusto quae officia sapiente ea. Ducimus, esse!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, inventore. Consequuntur exercitationem voluptatem amet quo sit id animi accusantium eaque illum maxime? Odit et fugit aliquid facilis voluptatem. Ab, nesciunt.                Unde quia voluptatibus aperiam voluptates ipsa illum nobis eos debitis maxime exercitationem minus hic saepe sequi, nulla, dolores provident mollitia eum totam perspiciatis iusto quae officia sapiente ea. Ducimus, esse!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, inventore. Consequuntur exercitationem voluptatem amet quo sit id animi accusantium eaque illum maxime? Odit et fugit aliquid facilis voluptatem. Ab, nesciunt.                Unde quia voluptatibus aperiam voluptates ipsa illum nobis eos debitis maxime exercitationem minus hic saepe sequi, nulla, dolores provident mollitia eum totam perspiciatis iusto quae officia sapiente ea. Ducimus, esse!</p>
                        <div className="text-mygreen">09 / octubre / 2020</div>
                    </div>
                </div>

                <div className="flex justify-center lg:mr-16">
                <div className="rounded-xl mb-6">
                    <img src="/imgs/blog.webp" alt="imagen computadora blog" className="rounded-xl" style={{ height: 208, width: 300 }} />
                </div>
                </div>

            </div>
        </DefaultLayout>
    )
}
export default Index;