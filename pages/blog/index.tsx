import React from "react";
import PostsGrid from "../../components/home/PostsGrid";
import DefaultLayout from "../../layouts/DefaultLayout";

const Index: React.FC = (props) => 
{
    return (
    
        <DefaultLayout>
            <section>
                <div className="px-4 md:px-8">
                  
                  <PostsGrid posts={[1,2,3,4,5,6]} />
                </div>
            </section>
        </DefaultLayout>
    
    )
}

export default Index;