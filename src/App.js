import 'semantic-ui-css/semantic.min.css';
import { products } from "./seed.js";
import ReactPlayer from 'react-player';
function App() {
    return (
        <ProductList />
    );
}
function ProductList() {
    const productComponents = products.map((product) => (
        <Product prodInfo={product}    />
    ));
    return (
        <div className='ui unstackable items'>
            {productComponents}
        </div>
    );

}
function Product({prodInfo})  {
    return (
        <div className='item'>
            <div className='image'>
                <img src={prodInfo.productImageUrl} />
            </div>
            <div className='middle aligned content'>
                <div className='header'>
                    <i className='large caret up icon' />
                    {prodInfo.votes}
                </div>
                <div className='description'>
                    <a href={prodInfo.url}>
                        {prodInfo.title}
                    </a>
                    <p>
                        {prodInfo.description}
                    </p>
                </div>
                <div className='extra'>
                    <span>Submitted by:</span>
                    <img
                        className='ui avatar image'
                        src={prodInfo.submitterAvatarUrl}
                    />
                    <ReactPlayer url='music/03-joe_hisaishi-kaisan-cocmp3.mp3' width='200px' height='60px'/>
                </div>
            </div>
        </div>
    );
}


export default App;
