import React from 'react'; 


const TestimonialCard = () => {
  return (
    <div className="md:ml-10 md:w-[85%] border-[3px] border-dashed border-green-400 p-12 mb-5 rounded-3xl">
      {/* Profile section */}
      <div className="flex items-center space-x-3">
        <img
          src="https://d1yei2z3i6k35z.cloudfront.net/1916642/65431a105baef_2.jpg"
          alt="Emly Burnett"
          className="w-12 h-12 rounded-full object-cover"
        />
          <div className="mt-2">
        <p className="font-bold font-worksans text-[23px]">Lucy Lowery - 4.9/5</p>
        <img
          src="https://d1yei2z3i6k35z.cloudfront.net/1916642/653e084fd22f0_Capturedecran2023-10-29a15.22.46.png"
          alt="Rating"
          className="w-48"
        />
      </div>
      </div>

      {/* Star rating */}
    

      {/* Title */}
      <p className="mt-3 text-[21px] leading-7  font-bold italic text-sm">
      Love these Books!      </p>

      {/* Review text */}
      <p className="mt-2 text-[19px] font-worksans leading-relaxed">
      These would be very helpful for anyone on a self-healing journey.
      </p>
    </div>
  );
};

export default TestimonialCard;
