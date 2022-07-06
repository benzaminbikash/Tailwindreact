import React from 'react';

const App = () => {
    return (
        <>
            <div class='bg-slate-100'>
                {/* navigation start */}
                <nav class='px-10 py-4 flex flex-col md:flex-row justify-between'>
                    <p class=' font-black text-lg sm:text-xl md:text-3xl lg:text-5xl'>Benzamin<span class='text-red-600'>B</span>ik<span class='text-red-600'>ash</span></p>
                    <ul class='flex flex-col md:flex-row'>
                        <li class='px-5 py-1 font-bold cursor-pointer hover:text-red-700'>Home</li>
                        <li class='px-5 py-1 font-bold cursor-pointer hover:text-red-700'>Service</li>
                        <li class='px-5 py-1 font-bold cursor-pointer hover:text-red-700'>Contact</li>
                        <li class='px-5 py-1 font-bold cursor-pointer hover:text-red-700'>About</li>
                        <li class='underline cursor-pointer px-10 py-1 bg-green-400 text-white rounded-lg hover:bg-black hover:text-white'>Login</li>
                    </ul>
                </nav>
                {/* navigation end */}
                {/* navigation complete */}
                {/* <Part 1> */}
                <div class='flex justify-between items-center'>
                    <div class='w-full md:w-1/3 pl-12'>
                        <div class='flex justify-center'>
                            <img class='mb-10 w-32 rounded-full' src='https://th.bing.com/th/id/OIP.AnbwBnDnxWpqFlkN1wnm3gHaHa?pid=ImgDet&rs=1' />
                        </div>
                        <p class='text-3xl mb-1 font-bold '>Welcome to our <span class='text-red-600 '>website</span></p>
                        <p class='text-2xl font-bold'>What is hacking?</p>
                        <p class='text-justify'>Hacking is the activity of identifying weaknesses in a computer system or a network to exploit the security to gain access to personal data or business data. An example of computer hacking can be: using a password cracking algorithm to gain access to a computer system.</p>
                        <button class='bg-green-500 px-4 mr-2 mt-2 text-white py-1 rounded-md hover:bg-black'>SignUp</button>
                        <button class='bg-slate-600 px-4 mr-2 mt-2 text-white py-1 rounded-md hover:bg-green-500'>connect with us!</button>
                    </div>
                    <div class='hidden md:block'>
                        <img class='w-fit pr-20' src='images/image2.png ' alt='randomImage' />
                    </div>
                </div>
                {/* <Part 1 complete> */}

                {/* part 2  */}
                <div class=' mt-4 '>
                    <p class='text-center  font-bold text-4xl mb-3'>Our Services</p>
                    <div class='flex flex-col md:flex-row px-10 drop-shadow-2xl  justify-around'>
                        <div class='w-full md:w-1/4 bg-white h-fit mr-4 rounded-t-3xl'>
                            <img class='rounded-t-3xl w-full h-72' src="https://www.thalesgroup.com/sites/default/files/database/assets/images/2019-07/Thales_cybersecurity_copyright_Thales_2019.png" />
                            <p class='font-medium pl-1 tracking-tighter'>Course: Cyber Security</p>
                            <p class='font-medium pl-1 tracking-tighter'>Duration: 2 Months</p>
                            <div class='flex justify-center'>
                                <button class=' bg-black text-white hover:bg-green-500 hover:text-black my-2 px-4 py-1 rounded-xl'>VIEW DETAILS</button>
                            </div>
                        </div>
                        <div class='w-full md:w-1/4 bg-white h-96 mr-4  rounded-t-3xl'>
                            <img class='rounded-t-3xl w-full h-72' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitOJaemh2uHMcVBgtPeN6ME9L-EyoiJSIynClFAkzBARv-3j-tpl6gVSxzOTaPNB2cSs&usqp=CAU" />
                            <p class='font-medium pl-1 tracking-tighter'>Course: CCNA</p>
                            <p class='font-medium pl-1 tracking-tighter'>Duration: 2 Months</p>
                            <div class='flex justify-center'>
                                <button class=' bg-black text-white hover:bg-green-500 hover:text-black my-2 px-4 py-1 rounded-xl'>VIEW DETAILS</button>
                            </div>
                        </div>
                        <div class='w-full md:w-1/4 bg-white h-96 h-fill mr-4 rounded-t-3xl'>
                            <img class='rounded-t-3xl w-full h-72' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMTJXfqVJWJOYuSL_mvxUq24ovO9suoFZvfw&usqp=CAU" />
                            <p class='font-medium pl-1 tracking-tighter'>Course: CCNP</p>
                            <p class='font-medium pl-1 tracking-tighter'>Duration: 3 Months</p>
                            <div class='flex justify-center'>
                                <button class=' bg-black text-white hover:bg-green-500 hover:text-black my-2 px-4 py-1 rounded-xl'>VIEW DETAILS</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* part 2 complete */}

                {/* part 3 */}
                <div class=' mt-20 '>
                    <div class='flex px-10  justify-around'>
                        <div class='w-1/4 bg-white drop-shadow-2xl h-fit mr-4 rounded-t-3xl'>
                            <img class='rounded-t-3xl w-full h-72' src="https://m.media-amazon.com/images/I/51bCtkvQS6L.jpg" />
                            <p class='font-medium pl-1 tracking-tighter'>Course: Ethical Hacking with Python</p>
                            <p class='font-medium pl-1 tracking-tighter'>Duration: 3 Months</p>
                            <div class='flex justify-center'>
                                <button class=' bg-black text-white hover:bg-green-500 hover:text-black my-2 px-4 py-1 rounded-xl'>VIEW DETAILS</button>
                            </div>
                        </div>
                        <div class='w-1/4 bg-white h-96 mr-4  rounded-t-3xl'>
                            <img class='rounded-t-3xl w-full h-72' src="data:image/jpeg;base64,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" />
                            <p class='font-medium pl-1 tracking-tighter'>Course: Web Hunting</p>
                            <p class='font-medium pl-1 tracking-tighter'>Duration: 2 Months</p>
                            <div class='flex justify-center'>
                                <button class=' bg-black text-white hover:bg-green-500 hover:text-black my-2 px-4 py-1 rounded-xl'>VIEW DETAILS</button>
                            </div>
                        </div>
                        <div class='w-1/4 bg-white h-96 h-fill mr-4 rounded-t-3xl'>
                            <img class='rounded-t-3xl w-full h-72' src="https://www.techworm.net/wp-content/uploads/2016/11/kali-wallpaper-2015-v1.1.0.jpg" />
                            <p class='font-medium pl-1 tracking-tighter'>Course: Kali Linux</p>
                            <p class='font-medium pl-1 tracking-tighter'>Duration: 3 Months</p>
                            <div class='flex justify-center'>
                                <button class=' bg-black text-white hover:bg-green-500 hover:text-black my-2 px-4 py-1 rounded-xl'>VIEW DETAILS</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* part 3 complete */}
                <div class='mt-10 px-10 flex justify-around'>
                    <div >
                        <p class='text-2xl font-medium'>Programming Courses</p>
                        <ol>
                            <li>Html, Css, Javascript</li>
                            <li>Java/Springboot</li>
                            <li>Python</li>
                            <li>C/C++</li>
                            <li>C#</li>
                            <li>PHP/Laravel</li>
                            <li>React/React-native</li>
                            <li>Flutter</li>
                        </ol>
                    </div>
                    <div >
                        <p class='text-2xl font-medium'>Graphic and UI design</p>
                        <ol>
                            <li>Photoshop</li>
                            <li>Indesign</li>
                            <li>Adobe Illuster</li>
                            <li>Canvas</li>
                            <li>CoralDraw</li>
                            <li>Figma</li>
                            <li>Adobe XD</li>
                        </ol>
                    </div>
                    <div >
                        <p class='text-2xl font-medium'>Dot Net Courses </p>
                        <ol>
                            <li>Asp.Net Training</li>
                            <li>C# Training</li>
                            <li>ASP.NET MVC Training</li>
                            <li>ASP.NET Core Training</li>
                            <li>SQL Server Training</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App;