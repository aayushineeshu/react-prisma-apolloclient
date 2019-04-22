import React from 'react';
import styled from 'styled-components';

export const StackCenter = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: ${props => (props.gridgap ? props.gridgap : '1rem')};
`;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  justify-items: center;
  padding: 0rem 0.5rem 0rem 0.5rem;
  margin: 0 0 2em 0;
`;

const Name = styled.h2`
  margin: 0rem;
  color: rgba(0, 0, 0, 0.6);
  font-size: 15px;
  font-weight: 700;
`;

const Bio = styled.div`
  font-size: 11px;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
`;

export const resize = (url, resize) => {
    if (!url) return '';
  
    let size = 500;
    if (resize) {
      size = resize;
    }
  
    let rebased = url
      .replace('alignlabs.s3-us-west-1.amazonaws.com', 'align.imgix.net')
      .replace('alignlabs.s3.us-west-1.amazonaws.com', 'align.imgix.net');
  
    return `${rebased}?fit=clamp&w=${size}&h=${size}&auto=format`;
  };

export const ProfilePicImage = styled.img.attrs(props => ({
    src: props.resize
      ? resize(props.imageUrl, props.tiny ? 100 : 200)
      : props.imageUrl,
    alt: props.name
  }))`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    object-fit: cover;
    border-radius: 50%;
    border: ${({ size }) =>
      size === '7rem'
        ? '4px solid rgba(255, 255, 255, 0.9)'
        : '2px solid rgba(255, 255, 255, 0.9)'};
    box-shadow: inset 0 2px 10px rgba(255, 255, 255, 0.5),
      0 2px 30px rgba(0, 0, 0, 0.2);
  `;
  
  export const NoProfilePic = styled.div`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.9);
    background: #ccc;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
      0 2px 10px rgba(0, 0, 0, 0.3);
  `;

export function ProfilePic({ small, tiny, resize = true, ...props }) {
    const size = tiny ? '3rem' : small ? '4rem' : '7rem';
    return props.imageUrl ? (
      <ProfilePicImage size={size} resize={resize} tiny={tiny} {...props} />
    ) : (
      <NoProfilePic size={size} {...props} />
    );
  }

export const ProfileSummary = ({ bio, name, imageUrl, websiteUrl, onClick }) => {
    return (
      <Wrapper>
        <ProfilePic imageUrl={imageUrl} onClick={onClick} />
        <Name>{name || <span>&nbsp;</span>}</Name>
        <div>
          <Bio>{bio || <span>&nbsp;</span>}</Bio>
        </div>
      </Wrapper>
    );
  };