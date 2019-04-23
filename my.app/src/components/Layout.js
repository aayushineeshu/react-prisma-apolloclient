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
  //padding: 0rem 0.5rem 0rem 0.5rem;
  margin: 0 0 2em 0;
  text-align: center;
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

  export const CardGrid = styled.div`
  display: grid;
  grid-gap: 1.5em 0.5em;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;
  justify-items: center;
`;
export const ContentInset = styled.section`
  padding: ${props => props.padding || '50px 18px 30px 18px'};
  max-width: 500px;
  margin: 0 auto;
  height: 100%;
  grid-area: content;
`;

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;

  overflow: hidden;

  @media ${device.mobileL} {
    height: 90vh;
    max-width: 400px;
    max-height: 800px;
    border-radius: 10px;
    margin: 0 auto;
  }
`;

const Page = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.surfaceBackground};

  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 150px 1fr 150px;
  grid-template-areas:
    'header header header'
    'content content content'
    'footer footer footer';
  .header,
  header {
    grid-area: header;
    z-index: 2;
  }
  .content,
  section {
    grid-area: header-start / content-start / footer-end / footer-end;
    overflow: scroll;
    padding-top: 4em; /* NavBarHeight */
    padding-bottom: 5em;
    width: 100%;
  }
  .footer,
  footer {
    grid-area: footer;
    z-index: 2;
  }
`;

export const Backdrop = styled.div`
  xposition: absolute;
  width: 100%;
  background: #3b5998;;
  min-height: 100%;
  padding: 0;
  @media ${device.mobileL} {
    padding: 30px;
  }
`;


// TODO rename Page?
export function Surface({ poweredBy = false, children, ...props }) {
  return (
    <Backdrop>
      <PageContainer>
        <Page {...props}>{children}</Page>
        {poweredBy && (
          <p>
            <small>
              Powered by <a href="/">Align</a>
            </small>
          </p>
        )}
      </PageContainer>
    </Backdrop>
  );
}