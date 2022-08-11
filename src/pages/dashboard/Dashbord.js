import React, { useEffect, useState } from "react";
import axios from "axios";

import UsersTable from "../../components/UsersTable";

const Dashbord = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        axios
            .get("/userjsondemo/db")
            .then(({ data }) => {
                setUsers(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [search]);

    return (
        <div className="App w-full min-h-screen font-sans text-gray-900 flex">
            <main className="flex-1 pb-7">
                <div className="flex items-center justify-between py-6 px-10">
                    <div>
                        <div className="flex ">
                            <img src="./landX.png" className="w-10 h-auto" />
                            <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">CMS-Users</h1>
                        </div>
                        <p className="text-sm font-medium text-gray-500">Let's grow to your business! Secure Your Future Starting Today</p>
                    </div>
                    <div>
                        <form className="flex items-center" onSubmit={handleSearch}>
                            <label htmlFor="simple-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative w-full">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="simple-search"
                                    onChange={(e) => setSearch(e.target.value)}
                                    value={search}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search here"
                                    required
                                />
                            </div>
                            {/* <button
                                type="submit"
                                className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                                <span className="sr-only">Search</span>
                            </button> */}
                        </form>
                    </div>
                </div>
                <div className="flex items-center justify-between px-10">
                    <UsersTable users={users} search={search.toLowerCase()} />
                </div>
            </main>
        </div>
    );
};

export default Dashbord;
