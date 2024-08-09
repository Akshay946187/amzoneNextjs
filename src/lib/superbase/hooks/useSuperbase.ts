import { useState } from "react";

// supaBase connection 
import { createClient } from "@supabase/supabase-js";
export const superbase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export const useSuperbase = ()=>{
    const[products,setProducts]= useState<any>([])
    const[filterData,setfilterData]= useState<any>([])
    const[singleProduct,setsingleProduct]= useState<any>([])
    const[menProduct,setMenProduct]= useState<any>([])
    const[womenProduct,setWomenProduct]= useState<any>([])
    const[jewelry,setjewelry]= useState<any>([])
    const getData = async ()=>{
        try {
            let {data,error} = await superbase.from('Products').select('*')
            setProducts(data);
           
                    
        } catch (error) {
            console.log(error)
        }
    }
    const getFilterData = async (query:string)=>{
        try {
            let {data,error} = await superbase.from('Products').select('*').ilike('title',`%${query}%`)
            setfilterData(data);  
                    
        } catch (error) {
            console.log(error)
        }
    }

    const getSingleProduct = async (id:number)=>{
        try {
            let {data,error} = await superbase.from('Products').select('*').eq('id',id)
            setsingleProduct(data)
        } catch (error) {
            console.log('error in getsingleProduct :',error)
        }
    }
    const getMenProduct = async ()=>{
        try {
            let {data,error} = await superbase.from('Products').select('*').ilike('category',`men's clothing`)
            setMenProduct(data)
        } catch (error) {
            console.log(error)
        }
    }
    const getWomenProduct = async (category:any)=>{
        try {
            let {data,error} = await superbase.from('Products').select('*').ilike('category',category)
            setWomenProduct(data)
        } catch (error) {
            console.log(error)
        }
    }
    const getJewlry = async ()=>{
        try {
            let {data,error} = await superbase.from('Products').select('*').ilike('category',`jewelry`)
            setjewelry(data)
        } catch (error) {
            console.log(error)
        }
    }



    return {products,getData,
        filterData,getFilterData,
        getSingleProduct,singleProduct,
        getMenProduct,menProduct,
        getWomenProduct,womenProduct,
        jewelry,getJewlry
    }
}