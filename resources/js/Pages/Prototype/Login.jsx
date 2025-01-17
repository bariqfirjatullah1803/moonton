import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from "@/Components/PrimaryButton";
import {useForm, Link, Head} from "@inertiajs/react";

export default function Login() {
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '', password: '', remember: false,
    });
    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    return <>
        <Head title="Login"/>
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
                            Welcome Back
                        </div>
                        <p className="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br/>
                            the better insight for your life
                        </p>
                    </div>
                    <form className="w-[370px]" onSubmit={submit}>
                        <div className="flex flex-col gap-6">
                            <div>
                                <InputLabel htmlFor="email" value="Email"/>
                                <TextInput
                                    type="email"
                                    name="email"
                                    className=""
                                    placeholder="Email Address"
                                    id="email"
                                    value={data.email}
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-2"/>
                            </div>
                            <div>
                                <InputLabel htmlFor="password" value="Password"/>
                                <TextInput
                                    type="password"
                                    name="password"
                                    className=""
                                    placeholder="Password"
                                    id="password"
                                    value={data.password}
                                    autoComplete="password"
                                    isFocused={false}
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-2"/>
                            </div>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">
                            <PrimaryButton type={'submit'} variant={"primary"}>
                            <span className={'text-base text-white'}>
                                Start Watching
                            </span>
                            </PrimaryButton>
                            <Link href={route('prototype.register')}>
                                <PrimaryButton type={'button'} variant={'light-outline'}>
                            <span className={'text-base text-white'}>
                                Create New Account
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
