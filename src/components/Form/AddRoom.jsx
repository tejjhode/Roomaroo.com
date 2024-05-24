import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import appwriteServices from '../../appwrite/config';
import { useSelector } from 'react-redux';

export default function RoomForRentForm({ post }) {
  const { register, handleSubmit, setValue, watch, getValues } = useForm({
    defaultValues: {
      tittle: post?.tittle || '',
      slug: post?.$id || "",
      description: post?.description || '',
      price: post?.price || '',
      location: post?.location || '',
      size: post?.size || '',
      bhk: post?.bhk || '',
      accommodationType: post?.accommodationType || '',
      bathrooms: post?.bathrooms || '',
      furnished: post?.furnished || '',
    }
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);


  const submit = async (data) => {

    try {
      const file = data.image && data.image[0] ? await appwriteServices.uploadFile(data.image[0]) : null;

      if (post) {
        if (post.image) {
          await appwriteServices.deleteFile(post.image);
        }
        console.log( post.image);
        const dbPost = await appwriteServices.updatePost(post.$id, {
          ...data,
          image: file ? file.$id : post.image
        });
        if (dbPost) {
          navigate('/');
        }
      } else {
        if (!userData || !userData.$id) {
          throw new Error('User data is missing');
        }
        if (file) {
          data.image = file.$id;
        }
        const dbPost = await appwriteServices.createPost({ ...data, userid: userData.$id });
        if (dbPost) {
          navigate('/');
        }
      }
    } catch (error) {
      console.error('Error during post submission:', error);
    }
      alert("Room added successfully")

  };


  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "tittle") {
        setValue("slug", slugTransform(value.tittle), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-400 absolute top-16 w-full">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-2xl mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Upload Room for Rent</h1>
        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
              Title:
            </label>
            <input
              type="text"
              id="tittle"
              name="title"
              {...register("tittle", { required: true })}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="slug">
              Slug:
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              {...register("slug", { required: true })}
              onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
              }}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              {...register("description", { required: true })}
              className="w-full border rounded-md px-3 py-2"
              
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              {...register("price", { required: true, valueAsNumber: true })}
              className="w-full border rounded-md px-3 py-2"
            
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
              Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              {...register("location", { required: true })}
              className="w-full border rounded-md px-3 py-2"
              
            />
           </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
             Size:
            </label>
            <input
              type="number"
              id="size"
              name="size"
              {...register("size", { required: true, valueAsNumber: true })}
              className="w-full border rounded-md px-3 py-2"
            
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
             BHK:
            </label>
            <input
              type="number"
              id="bhk"
              name="bhk"
              {...register("bhk", { required: true, valueAsNumber: true })}
              className="w-full border rounded-md px-3 py-2"
            
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="accommodationType">
              Accommodation Type:
            </label>
            <select
              id="accommodationType"
              name="accommodationType"
              {...register("accommodationType", { required: true })}
              className="w-full border rounded-md px-3 py-2"
             
            >
              <option value="any">Any</option>
              <option value="student">Students</option>
              <option value="family">Family</option>
              <option value="girls">Girls</option>
              <option value="boys">Boys</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="bathrooms">
              Number of Bathrooms:
            </label>
            <input
              type="number"
              id="bathrooms"
              name="bathrooms"
              {...register("bathrooms", { required: true })}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="furnished">
              Furnished:
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="furnishedYes"
                name="furnished"
                value="yes"
                {...register("furnished", { required: true })}
                className="mr-2 leading-tight"
              />
              <label htmlFor="furnishedYes" className="mr-4 text-gray-700">Yes</label>
              <input
                type="radio"
                id="furnishedNo"
                name="furnished"
                value="no"
                {...register("furnished", { required: true })}
                className="mr-2 leading-tight"
              />
              <label htmlFor="furnishedNo" className="mr-4 text-gray-700">No</label>
              <input
                type="radio"
                id="furnishedSemi"
                name="furnished"
                value="semi"
                {...register("furnished", { required: true })}
                className="mr-2 leading-tight"
              />
              <label htmlFor="furnishedSemi" className="text-gray-700">Semi-Furnished</label>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
              Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              {...register("image", { required: true })}
              className="w-full border rounded-md px-3 py-2"
            />
            {post && post.image && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteServices.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}