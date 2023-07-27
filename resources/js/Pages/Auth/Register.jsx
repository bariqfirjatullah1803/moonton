import {useEffect} from "react";
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from "@/Components/InputError.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import TextInput from "@/Components/TextInput.jsx";
import {Head, Link, useForm} from "@inertiajs/react";

export default function Register() {
    const {data, setData, post, processing, errors, reset} = useForm({
        name: '', email: '', password: '', password_confirmation: '',
    });
    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };
    return <>
        <Head title={'Sign Up'}/>
        <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
            <div className="fixed top-[-50px] hidden lg:block">
                <img src="/images/signup-image.png"
                     className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
            </div>
            <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                <div>
                    <img src="/images/moonton-white.svg" alt=""/>
                    <div className="my-[70px]">
                        <div className="font-semibold text-[26px] mb-3">
                            Sign Up
                        </div>
                        <p className="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br/>
                            the better insight for your life
                        </p>
                    </div>
                    <form className="w-[370px]" onSubmit={submit}>
                        <div className="flex flex-col gap-6">
                            <div>
                                <InputLabel htmlFor="name" value="Full Name"/>
                                <TextInput
                                    type="text"
                                    name="name"
                                    className=""
                                    placeholder="Your fullname..."
                                    id="name"
                                    value={data.name}
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />
                                <InputError message={errors.name} className="mt-2"/>
                            </div>
                            <div>
                                <InputLabel htmlFor="email" value="Email"/>
                                <TextInput
                                    type="email"
                                    name="email"
                                    className=""
                                    placeholder="Your Email Address"
                                    id="email"
                                    value={data.email}
                                    autoComplete="email"
                                    isFocused={false}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />
                                <InputError message={errors.email} className="mt-2"/>
                            </div>
                            <div>
                                <InputLabel htmlFor="password" value="Password"/>
                                <TextInput
                                    type="password"
                                    name="password"
                                    className=""
                                    value={data.password}
                                    placeholder="Your Password"
                                    id="password"
                                    autoComplete="new-password"
                                    isFocused={false}
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <InputError message={errors.password} className="mt-2"/>
                            </div>
                            <div>
                                <InputLabel htmlFor="password_confirmation" value="Confirm Password"/>
                                <TextInput
                                    type="password"
                                    name="password_confirmation"
                                    className=""
                                    value={data.password_confirmation}
                                    placeholder="Confirm Password"
                                    id="password_confirmation"
                                    autoComplete="new-password"
                                    isFocused={false}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                />
                                <InputError message={errors.password_confirmation} className="mt-2"/>
                            </div>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">
                            <PrimaryButton type={'submit'} variant={"primary"} disabled={processing}>
                               <span className="text-base font-semibold">
                                    Sign Up
                                </span>
                            </PrimaryButton>
                            <Link href={route('login')}>
                                <PrimaryButton type={'button'} variant={'light-outline'}>
                                    <span className={'text-base text-white'}>
                                        Sign In to My Account
                                    </span>
                                </PrimaryButton>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}
