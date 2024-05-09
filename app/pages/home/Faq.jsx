"use client";

import FaqCard from "@/app/components/tools/FaqCard";

const Faq = () => {
  return (
    <section className="mx-[10px] mt-[60px]">
      <div>
        <h2 className="text-[#666666] text-[28px] text-center">
          Frequently <span className="text-white">Asked Questions</span>
        </h2>
        <p className="text-[#808080] text-[14px] text-center mt-[14px]">
          Got questions? We've got answers. Check out our frequently asked
          questions section to find valuable insights into our processes,
          pricing, and more. Transparency is at the core of our client
          interactions.
        </p>
      </div>
      <div className="mt-[50px]">
        <div className="border-b border-white/10">
          <FaqCard
            title="How long does it take to complete a web development project?"
            text="The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
          />
        </div>
        <div className="border-b border-white/10">
          <FaqCard
            title="Can you handle large-scale mobile app development projects?"
            text="The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
          />
        </div>
        <div className="border-b border-white/10">
          <FaqCard
            title="Do you offer maintenance services for websites and apps developed by other companies?"
            text="The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
          />
        </div>
        <div>
          <FaqCard
            title="How do you ensure the security of user data in your web applications?"
            text="The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;
