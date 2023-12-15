import 'semantic-ui-css/semantic.min.css';
import { origMusics } from "./seed.js";
import ReactPlayer from 'react-player';
import { useState } from 'react';
function App() {
    return (
        <MusicList />
    );
}
function MusicList() {
    const[musics, setMusics] = useState(origMusics);
    musics.sort((a,b) => (
        b.votes - a.votes
    ));
    const handleMusicsVote = (musicId) => {
        const nextMusics = musics.map((music) => {
            if (music.id === musicId){
                return Object.assign({},music,{
                    votes: music.votes + 1,
                });
            } else {
                return music;
            }
        });
        setMusics(nextMusics);
    }
    const musicComponents = musics.map((music) => (
        <Music musicInfo={music}  onVote={handleMusicsVote}  />
    ));
    return (
        <div className='ui unstackable items'>
            {musicComponents}
        </div>
    );

}
function Music({musicInfo,onVote})  {
    return (
        <div className='item'>
            <div className='image'>
                <img src={musicInfo.imageUrl} />
            </div>
            <div className='middle aligned content'>
                <div className='header'>
                    <i className='small headphones blue icon' />
                    {musicInfo.title}
                </div>
                <div className='description'>
                        {musicInfo.description}
                </div>
                <a className="ui image label">
                    <img src={musicInfo.ciUrl} /> 词：{musicInfo.ci}
                </a>
                <a className="ui image label">
                    <img src={musicInfo.quUrl} /> 曲：{musicInfo.qu}
                </a>
                <div className="mini ui labeled button" tableindex="0">
                    <div className="mini ui button">
                        <a onClick={()=> {onVote(musicInfo.id)}}>
                            <i className="heart icon red"></i>Like
                        </a>
                    </div>
                    <a className="ui basic red left pointing label">
                        {musicInfo.votes}
                    </a>
                </div>
                <div className='extra'>
                    <ReactPlayer controls url={musicInfo.url} width='400px' height='60px'/>
                </div>
            </div>
        </div>
    );
}


export default App;
