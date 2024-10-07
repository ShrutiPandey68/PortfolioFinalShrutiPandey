import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className="col-span-full lg:col-span-8 row-span-2 flex-col items-start"
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Digital Solutions
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            I'm Shruti Pandey, a passionate software engineer with over 3 years
            of experience in web and application development. With expertise in
            frameworks like React.js, Vue.js, and Node.js, I specialize in
            creating responsive, high-performance, and dynamic web applications.
            My journey includes building cross-platform desktop applications,
            working with cloud platforms like Microsoft Azure, and integrating
            AI-based features into products. Driven by problem-solving and
            innovation, I continuously explore new technologies to shape the
            future of web development.
          </p>
        </ItemLayout>

        <ItemLayout
          className="col-span-full xs:col-span-6 lg:col-span-4 text-accent"
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className="col-span-full xs:col-span-6 lg:col-span-4 text-accent"
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+ <sub className="font-semibold text-base">projects completed</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className="col-span-full sm:col-span-6 md:col-span-4 !p-0"
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=learnerbash&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B`}
            alt="Shruti's Top Languages"
            loading="lazy"
          />
          Shruti Pandey
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-8 !p-0">
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=learnerbash&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B`}
            alt="Shruti's GitHub Stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full">
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=js,react,vue,angular,nodejs,mongodb,aws,azure,docker,git,electron,css,bootstrap,materialui,bitbucket`}
            alt="Shruti's Skills"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=learnerbash&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="Shruti's Streak"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <Link
            href="https://github.com/learnerbash/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=learnerbash&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B`}
              alt="Shruti's Blog"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
