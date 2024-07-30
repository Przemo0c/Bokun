//Utils
import { ButtonVariant } from "@/utils/TYPES";

//Components
import ButtonComponent from "@/components/_atoms/Button";

export default function Home() {
  return (
    <main>
        <div className='experience-page my-[100px] px-[20px] md:px-[0px]'>
            <div className={`experiences-container container mt-6 relative overflow-hidden transition-all bg-secondary/90 lg:p-12 p-6 text-center`}>
                <p className='text-xl'> Hello, I've created this Example App using: </p>
                <ul className='flex flex-col justify-start  mt-6 mb-6'>
                  <li>
                    <p className='text-base'><span className='text-primary'>React</span></p>
                  </li>
                  <li>
                    <p className='text-base'><span className='text-primary'>NextJS</span> - the route handling is done through it.</p>
                  </li>
                  <li>
                    <p className='text-base'><span className='text-primary'>TalwindCSS</span> - inline-styling classes as well as basic layout created through it.</p>
                  </li>
                  <li>
                    <p className='text-base'><span className='text-primary'>Typescript</span> - for the type checking</p>
                  </li>
                  <li>
                    <p className='text-base'><span className='text-primary'>Zod</span> - for the type validating before sending the form data to the API</p>
                  </li>
                  <li>
                    <p className='text-base'><span className='text-primary'>TanStack</span> -  the help with the backend API requests, fetching and re-fetching values and updating states</p>
                  </li>
                  <li>
                    <p className='text-base'><span className='text-primary'>React-hook-form</span> - Library used for value/state managing in the forms.</p>
                  </li>
                </ul>
                <p className='text-base'> I have also recreated the look of the buttons based on the <a href="https://www.bokun.io/">Bokun.io</a> website, meaning: </p>
                <div className='flex flex-row justify-center gap-6 mt-6 mb-6'>
                  <ButtonComponent variant={ButtonVariant.enum.action}>Action Button</ButtonComponent>
                  <ButtonComponent variant={ButtonVariant.enum.primary}>Primary Button</ButtonComponent>
                  <ButtonComponent variant={ButtonVariant.enum.secondary}>Secondary Button</ButtonComponent>
                </div>
                <div className=''>
                  <p className='text-base'> For the styling purposes I've used the <span className='text-primary'>Atoms/Molecules/Organisms</span> approach.</p>
                </div>
                <div className='mt-6 mb-6'>
                  <p className='text-base'> The app might be run through <code className='bg-gray-900 inline-block p-3 rounded-lg'>npm run dev</code> command.</p>
                </div>
                <div className='mt-6 mb-6'>
                  <p className='text-base'> I have also added example <span className='text-primary'>delay in the API</span> to better show the fetching states, feel free to delete it. by changing <code className='bg-gray-900 inline-block p-3 rounded-lg'>ENABLE_DELAY</code> to <code className='bg-gray-900 inline-block p-3 rounded-lg'>false</code> in the /services/API.ts file</p>
                </div>
                <div className='mt-6 mb-6'>
                  <p className='text-base'> There is also variable <code className='bg-gray-900 inline-block p-3 rounded-lg'>ENABLE_ERRORS</code> in the /services/API.tsx by changing it to <code className='bg-gray-900 inline-block p-3 rounded-lg'>true</code> you can <span className='text-primary'>enable dummy error responses </span></p>
                </div>
             </div>
        </div>
    </main>
  );
}
