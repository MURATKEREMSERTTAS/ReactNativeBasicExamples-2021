import React from "react";
import {View} from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () =>{
    return<View>
            <ImageDetail
                title= "Forest"
                imageSource={require("C:/Users/Murat Kerem SERTAŞ/Desktop/react_native_a_grp-master/assets/forest.jpg")}
                score={5}
            />
            <ImageDetail
                title = "Forest"
                imageSource={require("C:/Users/Murat Kerem SERTAŞ/Desktop/react_native_a_grp-master/assets/beach.jpg")}
                score={7}
            />
            <ImageDetail
                title = "Forest"
                imageSource={require("C:/Users/Murat Kerem SERTAŞ/Desktop/react_native_a_grp-master/assets/mountain.jpg")}
                score={9}
            />
        </View>

}

export default ImageScreen;