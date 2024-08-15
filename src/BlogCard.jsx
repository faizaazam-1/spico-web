// BlogCard.jsx
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const BlogCard = ({ imageUrl, date, authorName, authorImageUrl, title }) => {
  return (
    <Card className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
      <img
        src={imageUrl}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

      <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 font-dm text-gray-300">
        <time dateTime={date} className="mr-8">
          {date}
        </time>
        <div className="-ml-4 flex items-center gap-x-4">
          <svg
            viewBox="0 0 2 2"
            className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
          <div className="flex gap-x-2.5">
            <Avatar className="h-6 w-6 rounded-full bg-white/10">
              <AvatarImage src={authorImageUrl} alt={authorName} />
            </Avatar>
            {authorName}
          </div>
        </div>
      </div>
      <h3 className="mt-3 text-lg  leading-6 font-dm text-white">
        <a href="#">
          <span className="absolute inset-0"></span>
          {title}
        </a>
      </h3>
    </Card>
  );
};

export default BlogCard;
