import 'semantic-ui-css/semantic.min.css';
import { musics } from "./seed.js";
import ReactPlayer from 'react-player';
function App_1() {
    return (
        <MusicList />
    );
}
function MusicList() {
    const musicComponents = musics.map((music) => (
        <Music musicInfo={music}    />
    ));
    return (
        <div className='ui unstackable items'>
            {musicComponents}
        </div>
    );

}
function Music({musicInfo})  {
    return (
        <div className='item'>
            <div className='image'>
                <img src={musicInfo.imageUrl} />
            </div>
            <div className='middle aligned content'>
                <div className='header'>
                    <i className='large caret up icon' />
                    {musicInfo.title}
                </div>
                <div className='description'>
                        {musicInfo.description}
                </div>
                <div className='extra'>
                    <img
                        className='ui avatar image'
                        src={musicInfo.submitterAvatarUrl}
                    />
                    <span>作词：{musicInfo.ci} / 作曲：{musicInfo.qu}</span>
                    <ReactPlayer controls url={musicInfo.url} width='400px' height='60px'/>
                </div>
            </div>
        </div>
    );
}


export default App;
