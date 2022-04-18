import { combineReducers } from "redux";
const songReducer =()=>{
    return[
        {title:'No scrubs',duration:'4:05'},
        {title:'Macrena',duration:'2:30'},
        {title:'All star',duration:'3:15'},
        {title:'I want is taht why',duration:'1:45'}


    ]
}
const seletedSongReducer=(seletedSong=null,action)=>{
if(action.type==='SONG_SELECTED'){
    return action.payload;
}
return seletedSong;
};
export default combineReducers({
    songs:songReducer,
    seletedSong:seletedSongReducer
});