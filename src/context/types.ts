import { ChangeEvent, SetStateAction } from "react";

export interface IProviderProps {
    children: React.ReactNode;
}
export interface IProvider {
    active: boolean,
    setActive: React.Dispatch<SetStateAction<boolean>>,
    addFavorite: boolean,
    setAddFavorite: React.Dispatch<SetStateAction<boolean>>,
    filterSelect: string,
    setFilterSelect: React.Dispatch<SetStateAction<string>>,
    searchSubmit: string,
    setSearchSubmit: React.Dispatch<SetStateAction<string>>,
    SearchApi: () => void,
    // dataGitHub: any,
    // setDataGitHub: React.Dispatch<SetStateAction<any>>,
    handleKeyUp: (e: { which: number; keyCode: number; }) => void,
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
    inputValue: string,
    searchRepositories: () => void,
}

export interface ICommit {
    img: string,
    urlName:string,
    nameUser:string,
    message: string,
    date:string
}