import { fetchCustomers } from "@/app/lib/data";
import CustomersTableUi from "@/app/ui/customers/table";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'customers',
};
export default async function Page() {
  const customers = await fetchCustomers();
    return <CustomersTableUi customers={customers}/>
  }