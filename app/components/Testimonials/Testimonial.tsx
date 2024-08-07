import Image from 'next/image';
import { poppins } from '@/app/fonts';
import QuoteIcon from '@mui/icons-material/FormatQuoteOutlined';

const Testimonial = ({
  testimonial,
  active,
  transition,
}: {
  testimonial: Testimonial;
  active: boolean;
  transition: boolean;
}) => {
  return (
    <li
      className={`px-7 py-12 bg-white rounded-sm shadow-sm flex-col gap-7 justify-between min-h-[26rem] max-w-[34rem] sm:min-h-[21rem] 
        ${transition && 'vanishing'}
        ${active ? 'appearTestimonial' : 'hidden'} `}
    >
      <p className={`${poppins.className} text-[1.38rem] font-medium`}>
        &quot;{testimonial.text}&quot;
      </p>
      <div className="flex gap-5 items-center">
        <div className="w-[70px] h-[70px] rounded-full bg-red-300 overflow-hidden relative">
          <Image
            src={testimonial.authorPhoto}
            alt={testimonial.author}
            fill
            sizes="70px"
            className=" object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h4 className={`${poppins.className} text-lg font-bold`}>{testimonial.author}</h4>
          <p>{testimonial.location}</p>
        </div>
        <span className="hidden xs:block ml-auto">
          <QuoteIcon className="text-6xl text-primary" />
        </span>
      </div>
    </li>
  );
};

export default Testimonial;
