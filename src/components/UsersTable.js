import React from "react";

export default function UsersTable({ users, search }) {
    return (
        <table className="w-full border-b border-green-200 overflow-y-scroll">
            <thead>
                <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
                    <th className="pl-10">NAME</th>
                    <th className="py-4 px-4 text-center">ADDRESS</th>
                    <th className="py-4 px-4 text-center">COMPANY</th>
                    <th className="py-4 px-4 text-center">PHONE</th>
                    <th className="py-4 px-4 text-center">WEBSTE</th>
                </tr>
            </thead>
            <tbody>
                {users
                    ?.filter((user) => {
                        if (search) return user.name.toLowerCase().includes(search) || user.username.toLowerCase().includes(search) || user.email.toLowerCase().includes(search);
                        return user;
                    })
                    .map((user, idx) => {
                        return (
                            <>
                                <tr key={idx} className=" hover:bg-gray-200 transition-colors group">
                                    <td className="flex gap-x-4 items-center py-4 pl-10">
                                        <div className="flex flex-col">
                                            <span className="text-xl">{user.name}</span>
                                            <span className="text-sm text-gray-500 italic">{user.username}</span>
                                            <span className="text-sm text-gray-500 italic">{user.email}</span>
                                        </div>
                                    </td>
                                    <td className="font-medium text-center text-gray-600">
                                        <div className="flex flex-col">
                                            <span className="text-xl">{user.address.city}</span>
                                            <span className="text-sm text-gray-500 italic">
                                                {user.address.street} - {user.address.suite}
                                            </span>
                                            <span className="text-sm text-gray-500 italic">zipcode: {user.address.zipcode}</span>
                                        </div>
                                    </td>
                                    <td className="font-medium text-center text-gray-600">
                                        <div className="flex flex-col">
                                            <span className="text-xl">{user.company.name}</span>
                                            <span className="text-sm text-gray-500 italic">{user.company.bs}</span>
                                        </div>
                                    </td>
                                    <td className="font-medium text-center text-gray-600">
                                        <div className="flex flex-col">
                                            <span className="text-sm text-gray-500 italic">+{user.phone}</span>
                                        </div>
                                    </td>
                                    <td className="font-medium text-center text-gray-600">
                                        <div className="flex flex-col">
                                            <span className="text-sm text-gray-500 italic">{user.website}</span>
                                        </div>
                                    </td>
                                </tr>
                            </>
                        );
                    })}
            </tbody>
        </table>
    );
}
