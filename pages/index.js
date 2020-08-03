import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
    return (
        <Layout>
            <article className="overflow-hidden">
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <img style={{width: '100%', maxHeight: '83vh', objectFit: 'cover'}} src="../static/images/cover.png" alt="Cover"/>    
                        </div>
                        <div className="col-md-6 text-center">
                            <h2 className="display-4 font-weight-bold" style={{marginTop: '220px'}}>
                                READ WHAT MATTERS TO YOU THE MOST WITH <span className="text-primary">WLOGGER</span>
                            </h2>
                            <hr style={{maxWidth: '200px', height: '5px', backgroundColor: '#f2f2f2', border:'none', marginTop: '30px'}}></hr>
                            <p className="lead pt-4 pb-5">
                                Think before you speak. Read before you think.
                            </p> 
                        </div>
                    </div>
                </div>
                
            </article>
        </Layout>
    );
};

export default Index;