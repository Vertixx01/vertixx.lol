import axios from "axios";
import { createEffect, createSignal, onMount } from "solid-js";
import { AiFillGithub } from 'solid-icons/ai'
import { FaBrandsDiscord } from 'solid-icons/fa'

const Home = () => {
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

    const handleOnMouseMove = (e: MouseEvent) => {
        const currentTarget: HTMLElement = e.target as HTMLElement;

        const rect = currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        currentTarget.style.setProperty('--mouse-x', `${x}px`);
        currentTarget.style.setProperty('--mouse-y', `${y}px`);
    };

    createEffect(() => {
        document.onmousemove = (e) => {
            handleOnMouseMove(e);
        };
    });
    return (
        <>
            <div class='grazybg h-full w-full flex justify-center items-center font-coolvetica'>
                <div class='flex flex-col justify-center items-center'>
                    <h1 class='text-4xl text-ptext z-10'>Vertixx</h1>
                    <div class='flex flex-row gap-2 justify-center items-center'>
                        <a href='https://github.com/Vertixx01' class='h-8 w-8 z-10'><AiFillGithub color="white" class='h-8 w-8'/></a>
                        <a href='https://discord.com/users/664133993347940384s' class='h-8 w-8 z-10'><FaBrandsDiscord color="white" class='h-8 w-8'/></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
