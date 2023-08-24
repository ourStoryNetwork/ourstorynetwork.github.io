const platforms = [
  {
    name: '0.9 Onboarding Platform',
    role: 'Chief Language Office',
    href: '/onboarding',
    imageUrl:
      'https://source.unsplash.com/mKOKC0dWG5Y',
  },
  {
    name: '9.0 Training Platform',
    role: 'Chief Executive Office',
    href: '/training',
    imageUrl: 'https://source.unsplash.com/q8xObc1brr4',
  },
  {
    name: '1.8 Governance Platform',
    role: 'Chief Technology Office',
    href: '/governance',
    imageUrl: 'https://source.unsplash.com/mjP6MQz834E',
  },
  {
    name: '8.1 Operations Platform',
    role: 'Chief Operating Office',
    href: '/operations',
    imageUrl: 'https://source.unsplash.com/Dm-qxdynoEc',
  },
  {
    name: '2.7 Product Platform',
    role: 'Chief Data Office',
    href: '/product',
    imageUrl: 'https://source.unsplash.com/CDCUmAVEf34',
  },
  {
    name: '7.2 Design Platform',
    role: 'Chief Brand Office',
    href: '/design',
    imageUrl: 'https://source.unsplash.com/qLW70Aoo8BE',
  },
  {
    name: '3.6 Story Platform',
    role: 'Chief Visionary Office',
    href: '/story',
    imageUrl: 'https://source.unsplash.com/3tYZjGSBwbk',
  },
  {
    name: '6.3 Marketing Platform',
    role: 'Chief Marketing Office',
    href: '/marketing',
    imageUrl: 'https://source.unsplash.com/mcYnbka2K5E',
  },
  {
    name: '4.5 Publication Platform',
    role: 'Chief Knowledge Office',
    href: '/publication',
    imageUrl: 'https://source.unsplash.com/RGUS2vu2ics',
  },
  {
    name: '5.4 Portfolio Platform',
    role: 'Chief Financial Office',
    href: '/portfolio',
    imageUrl: 'https://source.unsplash.com/x9NfeD3FpsE',
  },
]

const HomePage = () => {  
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our platform ecosystem</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            oS3 is a platform ecosystem framework that takes the pain out of development by demystifying common processes used in many communities, such as:
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {platforms.map((platform) => (
            <li key={platform.name}>
              <a href={platform.href}>
              <div className="flex items-center gap-x-6">
                
                  <img className="h-16 w-16 rounded-full" src={platform.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{platform.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{platform.role}</p>
                  </div>
                
              </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )  
};

export default HomePage;