// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '../components/ui/button'; // Adjust the import path as necessary
// import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

// const LandingPage = () => {
//     return (
//         <main className='flex flex-col gap-6 sm:gap-10 py-5 sm:py-10'>
//             <section className='text-center'>
//                 <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-2 sm:py-4'>
//                     Your Next Opportunity
//                     <span className='flex items-center gap-1 sm:gap-10'>
//                         Starts at <img src="/logo.png" alt="logo" className='h-10 sm:h-24 lg:h-22
//                         '/>
//                     </span>
//                 </h1>
//                 <p className='text-gray-300 mt-2 sm:mt-4 text-xs sm:text-xl'>
//                     Explore Thousands of Job listing or find the perfect candidate
//                 </p>
//             </section>
//             <div className='flex justify-center gap-4 sm:gap-4'>
//                 <Link to="/jobs">
//                     <Button variant="blue" size="xl">Find Jobs</Button>
//                 </Link>
//                 <Link to="/post-job">
//                     <Button variant="destructive" size="xl">Post a Job</Button>
//                 </Link>
//             </div>

//             {/* <Carousel
//       opts={{
//         align: "start",
//       }}
//       className="w-full max-w-sm"
//            >
//             <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-3xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       </Carousel> */}

//             {/* banner */}
//             <section>
//                 {/* cards */}
//             </section>

//             {/* Accordion */}
//         </main>
//     );
// };

// export default LandingPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button'; // Adjust the import path as necessary
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const LandingPage = () => {
    return (
        <main className='flex flex-col gap-6 sm:gap-10 py-5 sm:py-10'>
            <section className='text-center'>
                <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-2 sm:py-4'>
                    Your Next Opportunity
                    <span className='flex items-center gap-1 sm:gap-10'>
                        Starts at <img src="/logo.png" alt="logo" className='h-17 sm:h-24 lg:h-30 p-2'/>
                    </span>
                </h1>
                <p className='text-gray-300 mt-2 sm:mt-4 text-xs sm:text-xl'>
                    Explore Thousands of Job listing or find the perfect candidate
                </p>
            </section>
            <div className='flex justify-center gap-4 sm:gap-4'>
                <Link to="/jobs">
                    <Button variant="blue" size="xl">Find Jobs</Button>
                </Link>
                <Link to="/post-job">
                    <Button variant="destructive" size="xl">Post a Job</Button>
                </Link>
            </div>

            {/* <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
           >
            <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      </Carousel> */}

            {/* banner */}
            <section>
                {/* cards */}
            </section>

            {/* Accordion */}
        </main>
    );
};

export default LandingPage;