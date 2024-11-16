import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ banner }) => {
  return (
    <section className="section pb-[50px]">
      <div className="">
        <div className="row text-center">
          <div
            className="mx-auto lg:col-10"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <div className="text-center">
              <h1 className="font-primary font-bold">{banner.title}</h1>
              <p className="mt-4">{markdownify(banner.content)}</p>
            </div>
            {banner.button.enable && (
              <Link
                className="btn btn-primary mt-4"
                href={banner.button.link}
                rel={banner.button.rel}
              >
                {banner.button.label}
              </Link>
            )}
            <Image
              className="mx-auto mt-12 rounded-xl shadow-lg"
              src={banner.image}
              width={500}
              height={500}
              alt="banner image"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
