import React, { Component } from "react";
import {connect} from 'react-redux';
import { selectsong } from "../actions";
class SongList extends Component{
    renderList(){
        return this.props.songs.map((song)=>{
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button Primary"
                        onClick={()=>this.props.selectsong(song)}>selectsong</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }
    render(){
         return(
        <div className="ui divided list">{this.renderList()}</div>);
    }
}
const mapStateToProps=state=>{
    console.log(state);
    return {songs:state.songs};
    
}
export default connect(mapStateToProps,{selectsong})(SongList);