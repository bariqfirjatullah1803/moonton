import Authenticated from "@/Layouts/Authenticated/Index.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Head, Link, useForm} from "@inertiajs/react";
import FlashMessage from "@/Components/FlashMessage.jsx";

export default function Index({auth, flashMessage, movies}) {
    const {delete: destroy, put} = useForm();
    return (
        <>
            <Authenticated auth={auth}>
                <Head title={'Admin - List Movie'}/>
                <Link href={route('admin.dashboard.movie.create')}>
                    <PrimaryButton type={'button'} className={'!w-40 mb-8'}>Insert New Movie</PrimaryButton>
                </Link>
                {flashMessage?.message && (
                    <FlashMessage message={flashMessage.message}/>
                )}
                <table className={'table w-full text-center'}>
                    <thead>
                    <tr>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Rating</td>
                        <td colSpan={2}>Action</td>
                    </tr>
                    </thead>
                    <tbody>
                    {movies.map(movie => (
                        <tr key={movie.id}>
                            <td>
                                <img src={`/storage/${movie.thumbnail}`}
                                     alt={movie.name}
                                     className={'w-32 rounded-md'}/>
                            </td>
                            <td>
                                {movie.name}
                            </td>
                            <td>
                                {movie.category}
                            </td>
                            <td>
                                {movie.rating.toFixed(1)}
                            </td>
                            <td>
                                <Link href={route('admin.dashboard.movie.edit', movie.id)}>
                                    <PrimaryButton type={'button'} variant={'warning'}>
                                        Edit
                                    </PrimaryButton>
                                </Link>
                            </td>
                            <td>
                                <div onClick={() => {
                                    movie.deleted_at
                                        ? put(route('admin.dashboard.movie.restore', movie.id))
                                        : destroy(route('admin.dashboard.movie.destroy', movie.id))
                                }}>
                                    <PrimaryButton type={'button'} variant={'danger'}>
                                        {movie.deleted_at
                                            ? 'Restore'
                                            : 'Delete'
                                        }
                                    </PrimaryButton>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Authenticated>

        </>
    );
}
