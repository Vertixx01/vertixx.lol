import axios from 'axios';
import { Component, createSignal, onMount } from 'solid-js';

const App: Component = () => {
  interface User {
    id: string;
    username: string;
    avatar: string;
  }
  const [user, setUser] = createSignal<User>();
  onMount(async () => {
    await axios.get('https://discord-lookup-api.herokuapp.com/user/664133993347940384').then((res) => {
      setUser({
        id: res.data.data.id,
        username: res.data.data.username,
        avatar: res.data.data.avatar,
      });
    });
  });
  return (
    <div class='h-screen w-screen bg-[#121212] overflow-hidden'>
      <div class='h-full w-full flex justify-center items-center font-[Coolvetica]'>
        <div class='h-96 w-96 outline outline-[#1e1e1e] rounded-2xl flex flex-col justify-start items-start'>
          <div class='grid grid-cols-2 mt-4 items-center'>
            <img src={user()?.avatar} class='h-32 w-32 rounded-full ml-4' />
            <div class='grid grid-rows-2 justify-start items-center ml-[-1rem]'>
              <h1 class='text-white text-2xl tracking-wide'>{user()?.username}</h1>
              <h1 class='font-mono text-white font-bold'>Hi, i'm a developer/gamer👋</h1>
            </div>
          </div>
          <div class='grid grid-cols-2 justify-start items-center gap-40'>
            <div class='h-48 w-64 bg-[#1e1e1e] rounded-2xl my-4 mx-4'>
              <h1 class='text-white text-2xl mx-4 tracking-wide my-2'>Languages</h1>
              <div class='grid grid-cols-6 justify-start items-center mx-4 gap-x-1 gap-y-2'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class='h-8 w-8' />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" class='h-8 w-8' />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class='h-8 w-8' />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" class='h-8 w-8' />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" class='h-8 w-8' />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" class='h-8 w-8' />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" class='h-8 w-8' />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" class='h-8 w-8' />
              </div>
            </div>
            <div class='h-48 w-20 bg-[#1e1e1e] rounded-2xl my-4 mx-4'>
              <h1 class='text-white text-lg mx-4 tracking-wide my-2'>Socials</h1>
              <div class='grid justify-center items-center mx-4 gap-x-1 gap-y-2'>
                <a class='h-8 w-8' href='https://discord.com/users/664133993347940384'>
                  <img src="https://camo.githubusercontent.com/79fcdc7c43f1a1d7c175827976ffee8177814a016fb1b9578ff70f1aef759578/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f646973636f72642e737667" class='h-8 w-8' />
                </a>
                <a class='h-8 w-8' href='https://instagram.com/vertixx.grazy'>
                  <img src="https://camo.githubusercontent.com/c9dacf0f25a1489fdbc6c0d2b41cda58b77fa210a13a886d6f99e027adfbd358/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f696e7374616772616d2e737667" class='h-8 w-8' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class='flex justify-center items-start relative bottom-6'>
        <h1 class='text-white text-sm font-mono'>Made by the grazy vertixx yes 🤯</h1>
      </footer>
    </div>
  );
};

export default App;
