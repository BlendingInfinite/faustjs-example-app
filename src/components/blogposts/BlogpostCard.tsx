import { Blogpost as BlogpostType } from 'client';

interface BlogpostProps {
  blogpost: BlogpostType;
}

export default function BlogpostCard({ blogpost }: BlogpostProps) {
  return (
    <div>
      <h2>{blogpost?.name}</h2>
    </div>
  );
}
