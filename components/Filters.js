'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Search from "./Search";
import Filter from "./Filter";

const Filters = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function updateURL(key, value) {
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        current.set(key, value);
        const search = current.toString();
        const query = search ? `?${search}` : "";

        router.push(`${pathname}${query}`);
    }

    return (<div className="filters">
        <Search onChange={(e) => updateURL('search', e.target.value.toLowerCase().trim())} />
        <Filter onChange={(e) => updateURL('region', e.target.value)} />
    </div>);
}

export default Filters;
