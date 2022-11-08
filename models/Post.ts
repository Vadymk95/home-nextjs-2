export interface IPost {
  _id: string;
  description: string;
  publishedDate: string;
  title: string;
  image: {
    caption: string;
    asset: {
      _ref: string;
    };
  };
  slug: {
    current: string;
  };
}
