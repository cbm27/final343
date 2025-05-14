import Link from 'next/link'
export default function Menubar
() {
  return (
   <>
     <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <a href=''>Midterm Part I - Exam1 </a>
      </li>
       <li>
       <a href='https://vercel.com/baomei-cuis-projects'target='_blank'>Midterm Part II site</a>
        </li>
         <Link href='/faq'>FAQ</Link>
       </li>
        </ul>
      </>
    )
  }