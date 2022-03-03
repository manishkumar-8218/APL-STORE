import React from 'react';
import Facebook from '../../images/Facebook.png'
import Gmail from '../../images/Gmail.png'
import Instagram from '../../images/Instagram.png'
import Linkedin from '../../images/LinkedIn.png'
import Twitter from '../../images/Twitter.png'
const About = () => {
    return (
        <div className=' flex justify-center items-center  bg-slate-900 w-screen h-screen'>
            <div className='flex flex-col w-11/12 shadow-cyan-600 rounded-2xl  shadow-2xl h-5/6'>
                <div className=' h-4/5 overflow-auto '>
                    <p className=' text-left  text-cyan-700 mx-8 my-6 font-sans font-semibold  '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio at obcaecati reprehenderit, tempora recusandae magnam, dicta blanditiis omnis ut quo quis consectetur delectus nemo ratione nobis modi assumenda aliquam, maiores temporibus cumque consequatur expedita repellendus molestias. Officiis, consequatur voluptatibus, earum mollitia alias sunt ea cumque rem, aliquam quibusdam ad. Adipisci, laborum voluptas. Maxime repudiandae, laborum consequuntur omnis numquam aut, et possimus aliquam quia soluta necessitatibus modi alias est nisi in blanditiis hic unde? Praesentium laudantium, quo minus, odit eius quisquam veritatis mollitia harum obcaecati at, fugiat ut quos accusantium voluptas similique possimus repellat. Eaque, repellendus? Officiis rem sapiente harum architecto natus quis doloremque aliquid? Necessitatibus aliquid tempora vitae optio quae corporis laborum
                        , repellendus error aspernatur, dicta perferendis. Consequatur neque dicta illum atque modi minima velit temporibus amet excepturi cumque vel quod odio, corrupti alias iste rerum. Voluptas id beatae magni explicabo odio! Officiis, voluptatem et architecto 
                        quibusdam obcaecati ex sint! Dolor debitis dolorum repudiandae, ratione esse doloremque similique ipsa ut. Illum accusamus repellendus alias, odio adipisci voluptate itaque asperiores, error maxime blanditiis soluta corrupti rerum veritatis ut modi tenetur sit atque sequi mollitia, debitis enim nemo. Iure natus nam blanditiis cum, consequuntur provident rerum voluptas eaque aliquid ipsa, impedit enim error ea quas? Veritatis consectetur aperiam reiciendis mollitia totam nobis beatae a eos consequuntur corporis, minima quia quod ab, minus quasi maxime molestias commodi exercitationem dicta recusandae numquam quo in voluptatem magni? Similique illo placeat veniam necessitatibus tempore velit, molestiae voluptas alias quidem, quaerat eaque sint impedit cumque eius eos accusamus dolores? Fuga illo culpa laborum quidem modi delectus sed ut beatae qui placeat quis facere voluptatem voluptatum, dicta suscipit mollitia est, reprehenderit nobis a animi quo nemo? Id corrupti aspernatur voluptatibus aliquam nulla! Suscipit dignissimos nobis excepturi. Optio, blanditiis quaerat libero fugiat officiis error illo quibusdam architecto maiores odio!
                    </p>
                </div>
               <div className=' flex justify-center items-center'>
                   <div className=' space-x-4 '>
                 <button><img className=' hover:-my-1 ' src={Facebook}alt="" /></button>
                 <button><img  className=' hover:-my-1'  src={Gmail}alt="" /></button>
                 <button><img  className=' hover:-my-1'  src={Instagram}alt="" /></button>
                 <button><img   className=' hover:-my-1' src={Linkedin}alt="" /></button>
                 <button><img  className=' hover:-my-1'  src={Twitter}alt="" /></button>
             </div>
             </div>

            </div>
        </div>
    );
};

export default About;
