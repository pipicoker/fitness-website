import {create} from 'zustand'

export const navStore = create((set) => ({
    nav : false,
    setNavActive: () => set((state: any) => ({
        nav: true
    })),
    setNavFalse: () => set((state: any) => ({
        nav: false
    }))
}))