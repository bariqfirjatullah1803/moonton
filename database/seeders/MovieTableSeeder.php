<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'Guardians of the Galaxy Vol. 2',
                'slug' => 'guardians-of-the-galaxy-vol-2',
                'category' => 'Action',
                'video_url' => 'https://youtu.be/dW1BIid8Osg',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg',
                'rating' => 7.6,
                'is_featured' => 1,
            ], [
                'name' => '12 Angry Men',
                'slug' => '12-angry-men',
                'category' => 'Crime',
                'video_url' => 'https://youtu.be/TEN-2uTi2c0',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
                'rating' => 9.0,
                'is_featured' => 0,
            ], [
                'name' => 'Attack on Titan',
                'slug' => 'attack-on-titan',
                'category' => 'Animation',
                'video_url' => 'https://youtu.be/jkHcC3uFJgM',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_SX300.jpg',
                'rating' => 9.1,
                'is_featured' => 0,
            ],
        ];
        Movie::insert($movies);
    }
}
