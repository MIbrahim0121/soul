import React from 'react';

const TestimonialCard = () => {
  return (
    <div className="md:ml-10 md:w-[85%]  mb-5  border-[3px] border-dashed border-green-400 p-12 rounded-3xl">
      {/* Profile section */}
      <div className="flex items-center space-x-3">
        <img     loading="eager"

          src="https://d1yei2z3i6k35z.cloudfront.net/1916642/65431a1fa5aad_5.jpg"
          alt="Emly Burnett"
          className="w-12 h-12 rounded-full object-cover"
        />
          <div className="mt-2">
        <p className="font-bold font-worksans text-[23px]">Bernice Hatfield - 4.9/5</p>
        <img     loading="eager"

          src="https://d1yei2z3i6k35z.cloudfront.net/1916642/653e084fd22f0_Capturedecran2023-10-29a15.22.46.png"
          alt="Rating"
          className="w-48"
        />
      </div>
      </div>

      {/* Star rating */}
    

      {/* Title */}
      <p className="mt-3 text-[21px] leading-7  font-bold italic text-sm">
      Couldn't be happier      </p>

      {/* Review text */}
      <p className="mt-2 text-[19px] font-worksans leading-relaxed">
      Having a handbook to explain things and give me exercises and a place to write has been amazing. The quality of this book is better than any help book I've bought. The time it arrived was amazing — in less than a week I received this treasure to dive into, without the long wait time. I'm suggesting this for gifts for the upcoming holiday season to buy.
      </p>
    </div>
  );
};

export default TestimonialCard;
