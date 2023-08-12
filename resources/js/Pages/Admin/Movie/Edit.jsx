import Authenticated from "@/Layouts/Authenticated/Index.jsx";
import {Head, router, useForm} from "@inertiajs/react";
import {useEffect} from "react";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import Checkbox from "@/Components/Checkbox.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function Edit({auth, movie}) {
    const {data, setData, processing, errors} = useForm({
        ...movie
    });

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        router.put(route('admin.dashboard.movie.update', movie.id), {...data});
    };
    return (
        <>
            <Authenticated auth={auth}>
                <Head title={'Admin - Update Movie'}/>
                <h1 className={'text-xl'}>Update Movie: {movie.name}</h1>
                <hr className={'mb-4'}/>
                <form onSubmit={submit}>
                    <div className={'mt-4'}>
                        <InputLabel htmlFor="name" value="Name"/>
                        <TextInput
                            type="text"
                            name="name"
                            variant={'primary-outline'}
                            placeholder="Enter the name of the movie"
                            id="name"
                            defaultValue={movie.name}
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        <InputError message={errors.name} className="mt-2"/>
                    </div>
                    <div className={'mt-4'}>
                        <InputLabel htmlFor="category" value="Category"/>
                        <TextInput
                            type="text"
                            name="category"
                            variant={'primary-outline'}
                            placeholder="Enter the category of the movie"
                            id="category"
                            defaultValue={movie.category}
                            autoComplete="category"
                            onChange={(e) => setData('category', e.target.value)}
                        />
                        <InputError message={errors.category} className="mt-2"/>
                    </div>
                    <div className={'mt-4'}>
                        <InputLabel htmlFor="video_url" value="Video URL"/>
                        <TextInput
                            type="url"
                            name="video_url"
                            variant={'primary-outline'}
                            placeholder="Enter the video url of the movie"
                            id="video_url"
                            defaultValue={movie.video_url}
                            autoComplete="video_url"
                            onChange={(e) => setData('video_url', e.target.value)}
                        />
                        <InputError message={errors.video_url} className="mt-2"/>
                    </div>
                    <div className={'mt-4'}>
                        <InputLabel htmlFor="thumbnail" value="Thumbnail"/>
                        <TextInput
                            type="file"
                            name="thumbnail"
                            variant={'primary-outline'}
                            placeholder="Insert thumbnail of the movie"
                            id="thumbnail"
                            onChange={e => setData('thumbnail', e.target.files[0])}
                        />
                        <img src={`/storage/${movie.thumbnail}`} alt={movie.name} className={'w-40 rounded'}/>
                        <InputError message={errors.thumbnail} className="mt-2"/>
                    </div>
                    <div className={'mt-4'}>
                        <InputLabel htmlFor="rating" value="Rating"/>
                        <TextInput
                            type="number"
                            name="rating"
                            variant={'primary-outline'}
                            placeholder="Enter the rating of the movie"
                            id="rating"
                            defaultValue={movie.rating}
                            autoComplete="rating"
                            onChange={(e) => setData('rating', e.target.value)}
                        />
                        <InputError message={errors.rating} className="mt-2"/>
                    </div>
                    <div className={'mt-4 flex flex-row items-center'}>
                        <InputLabel htmlFor={'is_featured'} value={'Is Featured'} className={' mt-2'}/>
                        <Checkbox
                            name={'is_featured'}
                            onChange={(e) => setData("is_featured", e.target.checked)}
                            className={'ml-3'}
                            defaultChecked={movie.is_featured}
                        />
                    </div>
                    <PrimaryButton type={'submit'} className={'mt-4'} disabled={processing}>Save</PrimaryButton>
                </form>
            </Authenticated>
        </>
    );
}
