import WorksCard from "@/app/components/tools/WorksCard";

const Works = () => {
  return (
    <section className="mt-[80px] px-[10px]">
      <div className="flex flex-col items-center">
        <h2 className="text-[#666666] text-[28px] mb-[10px]">
          Our
          <span className="text-white text-[28px]"> Works</span>
        </h2>
        <p className="text-[#666666] text-[14px] text-center">
          Witness the brilliance of our previous projects. Our portfolio
          showcases the successful collaborations we've had with diverse clients
          across various industries. Let our work speak for itself.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="mt-[50px]">
          <WorksCard
            icon="/assets/img1.svg"
            alt="Innovative E-commerce Platform"
            link="#"
            title="Innovative E-commerce Platform"
            category="Category: Web Development."
            date="January 2022"
            text="Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping."
          />
        </div>
        <div className="mt-[50px]">
          <WorksCard
            icon="/assets/img2.svg"
            alt="Mobile App for Enhanced Fitness"
            link="#"
            title="Mobile App for Enhanced Fitness"
            category="Category: Mobile App Development."
            date="March 2022"
            text="Our fitness app helps users stay fit and motivated with personalized workout plans and progress tracking. Its user-friendly design and comprehensive features make staying healthy an enjoyable experience."
          />
        </div>
        <div className="mt-[50px]">
          <WorksCard
            icon="/assets/img3.svg"
            alt="Modern Corporate Website"
            link="#"
            title="Modern Corporate Website"
            category="Category: Web Design."
            date="April 2022"
            text="Check out our sleek and modern corporate website that showcases the client's brand and services. Its responsive design ensures a consistent experience across devices. "
          />
        </div>
        <div className="mt-[50px]">
          <WorksCard
            icon="/assets/img4.svg"
            alt="Digital Marketing Success Story"
            link="#"
            title="Digital Marketing Success Story"
            category="Category: Digital Marketing."
            date="May 2022"
            text="Discover how our data-driven digital marketing strategies boosted a client's online presence, resulting in a significant increase in website traffic and leads."
          />
        </div>
      </div>
    </section>
  );
};

export default Works;
