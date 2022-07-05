import MemeCard from '../components/MemeCard';

export default function Home({ memes }) {
  return (
    <>
      <div className="row">
        <div className="col-md-8 ">
          <div className="list-group">
            {memes.map((meme, index) => (
              <MemeCard key={index} meme={meme} />
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Card Feautu</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              temporibus!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = [
    {
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/f7f9d870609d2e8ae565d3a96656fd5b.jpg?alt=media&token=8d5e1ed2-9314-4166-83fc-d555f7571f22',
      likes: ['Yussuf Qlach', 'Mohamed Mallahi'],
    },
    {
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/d9a02033-bf8c-49f1-9243-1d679f1cec82.jpg?alt=media&token=36cf5198-34a1-4468-9461-c79496b59e94',
      likes: ['Yussuf Qlach', 'Mohamed Mallahi'],
    },
    {
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/70007507-a5d2-4ab0-abc2-8930cb7768ae.jpg?alt=media&token=86940c32-c07e-4c94-834f-18043b2e8ce9',
      likes: [],
    },
    {
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/FB_IMG_16142096402082422.jpg?alt=media&token=33f78456-bf61-4751-9104-60d4b5da5915',
      likes: [],
    },
    {
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/FB_IMG_16144508857435195.jpg?alt=media&token=c316ae39-f4cf-4b32-8d7b-58e6e0a84660',
      likes: [],
    },
    {
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/d9a02033-bf8c-49f1-9243-1d679f1cec82.jpg?alt=media&token=36cf5198-34a1-4468-9461-c79496b59e94',
      likes: [],
    },
    {
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/f7f9d870609d2e8ae565d3a96656fd5b.jpg?alt=media&token=8d5e1ed2-9314-4166-83fc-d555f7571f22',
      likes: [],
    },
  ];
  return {
    props: {
      memes: data,
    },
  };
};
