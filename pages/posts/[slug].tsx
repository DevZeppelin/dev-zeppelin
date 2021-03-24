import React, { useState } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout';

interface Props {
    post: any    
}

const Index: React.FC<Props> = (props) => {
    return (
        <DefaultLayout>
            <div className="fle flex-col">
                <h3 className="text-mywhite">Escrito por: <span className="text-mylightblue">Gino</span></h3>            
            </div>
        </DefaultLayout>
        )
}
export default Index;