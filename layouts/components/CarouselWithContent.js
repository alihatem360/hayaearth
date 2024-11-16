"use client";
import { Carousel, Typography, Button } from "@material-tailwind/react";

export function CarouselWithContent() {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        <img
          src="/images/water/hayaearth (1).jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              الماء فى أى مكان ... وكذلك الحياة
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              {" "}
              المياه هي أساس الحياة، بتوصل لأي مكان لتروي العطش وتخلق الأمل
              وتعيد الحياة للأرض الجافة.{" "}
            </Typography>

            <div className="flex justify-center gap-2">
              <Button size="lg" className="bg-primary">
                ملف الشركة
              </Button>
              <Button size="lg" className="btn-outline-primary">
                معرفة المزيد
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="images/water/hayaearth (2).jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              مؤسسة حياة الأرض للمياه والبيئة
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              تعمل مؤسسة حياة الأرض للمياه والبيئة على توفير المياه النقية
              والصحية للمجتمعات المحلية والعالمية، وتعمل على تحسين البيئة
              والحفاظ على الموارد الطبيعية.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="images/water/hayaearth (7).jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              مياه الشرب النقية هي حق كل إنسان
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              تعمل مؤسسة حياة الأرض للمياه والبيئة على توفير المياه النقية
              والصحية للمجتمعات المحلية والعالمية، وتعمل على تحسين البيئة
              والحفاظ على الموارد الطبيعية.
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
