import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class UserService {

    users: any[] = [
    {
      id: 1,
      name: 'Raj Sharma',
      company: 'Infosys',
      contact: 'raj.sharma@infosys.com',
      country: 'India',
    },
    {
      id: 2,
      name: 'Emily Johnson',
      company: 'Microsoft',
      contact: 'emily.johnson@microsoft.com',
      country: 'USA',
    },
    {
      id: 3,
      name: 'Liam Brown',
      company: 'Google',
      contact: 'liam.brown@google.com',
      country: 'Canada',
    },
    {
      id: 4,
      name: 'Sophia Williams',
      company: 'Amazon',
      contact: 'sophia.williams@amazon.com',
      country: 'UK',
    },
    {
      id: 5,
      name: 'Arjun Patel',
      company: 'TCS',
      contact: 'arjun.patel@tcs.com',
      country: 'India',
    },
    {
      id: 6,
      name: 'Olivia Davis',
      company: 'Meta',
      contact: 'olivia.davis@meta.com',
      country: 'USA',
    },
    {
      id: 7,
      name: 'Noah Wilson',
      company: 'IBM',
      contact: 'noah.wilson@ibm.com',
      country: 'Germany',
    },
    {
      id: 8,
      name: 'Ava Martinez',
      company: 'Accenture',
      contact: 'ava.martinez@accenture.com',
      country: 'Spain',
    },
    {
      id: 9,
      name: 'Ethan Anderson',
      company: 'Capgemini',
      contact: 'ethan.anderson@capgemini.com',
      country: 'France',
    },
    {
      id: 10,
      name: 'Mia Thomas',
      company: 'Deloitte',
      contact: 'mia.thomas@deloitte.com',
      country: 'Australia',
    },
    {
      id: 11,
      name: 'Karan Singh',
      company: 'Wipro',
      contact: 'karan.singh@wipro.com',
      country: 'India',
    },
    {
      id: 12,
      name: 'Isabella Moore',
      company: 'Oracle',
      contact: 'isabella.moore@oracle.com',
      country: 'USA',
    },
    {
      id: 13,
      name: 'Lucas Taylor',
      company: 'SAP',
      contact: 'lucas.taylor@sap.com',
      country: 'Germany',
    },
    {
      id: 14,
      name: 'Charlotte Lee',
      company: 'Samsung',
      contact: 'charlotte.lee@samsung.com',
      country: 'South Korea',
    },
    {
      id: 15,
      name: 'Benjamin Harris',
      company: 'Adobe',
      contact: 'benjamin.harris@adobe.com',
      country: 'USA',
    },
    {
      id: 16,
      name: 'Amelia Clark',
      company: 'Intel',
      contact: 'amelia.clark@intel.com',
      country: 'Ireland',
    },
    {
      id: 17,
      name: 'Daniel Lewis',
      company: 'Cisco',
      contact: 'daniel.lewis@cisco.com',
      country: 'USA',
    },
    {
      id: 18,
      name: 'Harper Walker',
      company: 'HP',
      contact: 'harper.walker@hp.com',
      country: 'Singapore',
    },
    {
      id: 19,
      name: 'Matthew Hall',
      company: 'Tesla',
      contact: 'matthew.hall@tesla.com',
      country: 'USA',
    },
    {
      id: 20,
      name: 'Ella Allen',
      company: 'Sony',
      contact: 'ella.allen@sony.com',
      country: 'Japan',
    },
  ];

  AddNewUser(user: any) {
    this.users.push(user);
    console.log("User", this.users);
  }

}