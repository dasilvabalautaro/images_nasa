import React, { useEffect, useState } from 'react';
import {MdImage} from 'react-icons/md';
import * as S from './Image.styles';
import ImageLoading from './ImageLoading';

interface Props {
  imageUrl: string;
  useFallback?: boolean;
  useFade?: boolean;
  label?: string;
  useOverlay?: boolean;
}

enum ImageLoadingState {
  Init,
  Loading,
  Complete,
  Error
}

const Image: React.FC<Props> = ({ imageUrl, useFallback, useFade = true, useOverlay, label }) => {
  const [imageLoadingState, setImageLoadingState] = useState<ImageLoadingState>(ImageLoadingState.Init);
  
  useEffect(()=> {
    setImageLoadingState(imageUrl ? ImageLoadingState.Loading : ImageLoadingState.Error);
  }, [imageUrl])

  if(!imageUrl){
    return null;
  }

  if(imageLoadingState === ImageLoadingState.Error && useFallback){
    return( 
      <S.FallbackContainer>
        <MdImage size="10em"/>
        <S.ErrorLabel>Image loading error...</S.ErrorLabel>
      </S.FallbackContainer>
    );
  }

  return (
    <S.ImageWrapper>
      {imageLoadingState === ImageLoadingState.Loading && <ImageLoading/>}
      <S.Image src={imageUrl} 
      onLoad={() => setImageLoadingState(ImageLoadingState.Complete)}
      onError={() => setImageLoadingState(ImageLoadingState.Error)}
      className={
        `${useFade ? imageLoadingState === ImageLoadingState.Complete 
          ? "show" : "hide"
          : "hide"
        }`
      }
      />
      {imageLoadingState === ImageLoadingState.Complete && useOverlay && <S.Overlay/>}
      {imageLoadingState === ImageLoadingState.Complete && label && <S.Label>{label}</S.Label>}
    </S.ImageWrapper>
  );
};

export default Image;