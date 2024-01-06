import Staricon from '@/app/components/icons/Staricon';

function Testimonials() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center mt-10 bg-slate-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <img src="/testimonials.png" alt="" />
          </div>
          <div className="md:w-1/2">
            <div className="md:space-y-7 text-center lg:text-left">
              <p className=" text-red uppercase tracking-wide font-medium text-lg">
                Testimonials
              </p>

              <h2 className=" text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug">
                What Our Customers Say About Us
              </h2>

              <blockquote className="text-secondary my-5 leading-[30px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                laboriosam nulla sequi fugiat repudiandae odit exercitationem
                assumenda.
              </blockquote>

              {/* ------ Avatart ----- */}

              <div className="flex items-center flex-wrap gap-4 justify-center">
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                  <div className="avatar">
                    <div className="w-12">
                      <img src="/testimonial1.png" alt="fofo" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="/testimonial2.png" alt="koko" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="/testimonial3.png" alt="dodo" />
                    </div>
                  </div>
                  <div className="avatar placeholder">
                    <div className="w-12 bg-neutral text-neutral-content">
                      <span>+99</span>
                    </div>
                  </div>
                </div>

                <div className="md:space-y-1 text-center lg:text-left">
                  <h5 className="text-lg font-semibold">Customers Feedback</h5>

                  <div className="flex items-center gap-2">
                    <Staricon />
                    <Staricon />
                    <Staricon />
                    {/* <FaStar className="text-yellow-400" /> */}
                    <span className="font-medium">4.9</span>{" "}
                    <span className="text-[#807E7E]">(10.8 Reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
