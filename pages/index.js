import Head from 'next/head'
import React, { useState} from 'react';
import Link from 'next/link'




export default function Home() {
  const [store , setStore] = useState(''); 

  function createHandler(event){
    event.preventDefault() ;
    let store = {
      location : event.target.location.value ,
      min : event.target.min.value,
      max : event.target.max.value,
      avg : event.target.avg.value,
    }
    setStore(store)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-around bg-green-400">
            <h1 className="py-4 text-4xl font-bold text-center text-gray-800">
                Cookie Stand Admin
            </h1>
        
        </header>
      <main className="grid w-full p-10 px-0 text-center bg-green-100 justify-items-stretch">
      <form  onSubmit={createHandler}>
            <h2>Create Cookie Stand</h2>
            <div>
                <label>Location</label>
                <input type="text" name="location" placeholder="Cookie Stand Location" />
            </div>

                <label>Minimum Customers per Hour</label>
                <input type="number" name="min"/>
        
                <label >Maximum Customers per Hour</label>
                <input  name='max' type="number"/>
        
                <label >Average Cookies per Sale</label>
                <input type="number" name="avg"/>

                <button className="px-4 py-1 mx-2 bg-green-600  text-green-100" type="submit">Create</button>
          
        </form>
        <section className="text=center p-10">
        <p className='m-5 text-gray-600'>Report Table coming soon .....</p>
          <p className="m-3">{JSON.stringify(store)}</p>
          </section>
      </main>

      <footer className="">
      <footer>
          2021 &copy;            
        </footer>
      </footer>
    </div>
  )
}
