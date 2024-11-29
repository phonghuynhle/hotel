"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    // name: DataTypes.STRING,
    // email: DataTypes.STRING,
    // password: DataTypes.STRING,
    // numberPhone: DataTypes.STRING,
    // type: DataTypes.STRING,
    await queryInterface.bulkInsert("Users", [
      {
        name: "Antonio Goodwin",
        email: "michaelreed@example.org",
        password: "fk#7NCeeS_",
        numberPhone: "802.759.3150",
        birthDate: "1936-09-12",
        gender: true,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Cindy Kemp",
        email: "dpaul@example.org",
        password: "#mcbLdOe91",
        numberPhone: "354-497-1455",
        birthDate: "1958-08-13",
        gender: true,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Alan Sosa",
        email: "weberfelicia@example.net",
        password: "pk0QHr26D%",
        numberPhone: "(551)388-7441",
        birthDate: "2004-12-03",
        gender: false,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Patrick Salinas",
        email: "teresa20@example.net",
        password: "%_0e8Gs*EO",
        numberPhone: "+1-930-416-9932x8701",
        birthDate: "1936-06-05",
        gender: true,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "James Powell",
        email: "cantujessica@example.com",
        password: "@bDVuH^9x0",
        numberPhone: "001-895-874-1649x48143",
        birthDate: "1946-02-17",
        gender: true,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Todd Doyle",
        email: "jacksonleslie@example.net",
        password: "8xvbN(Fu_f",
        numberPhone: "(436)366-5012x1223",
        birthDate: "2006-04-03",
        gender: true,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Jason Padilla",
        email: "edward77@example.org",
        password: "g4Z#0AbkxX",
        numberPhone: "941-787-6142x27369",
        birthDate: "1957-02-18",
        gender: true,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Joshua Cox",
        email: "timothybruce@example.net",
        password: "%kwqGPAy@7",
        numberPhone: "+1-387-906-6384x98629",
        birthDate: "1985-10-13",
        gender: true,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Harold Gonzales",
        email: "lmullins@example.com",
        password: "$*3wJb1y8)",
        numberPhone: "(263)785-2213",
        birthDate: "1993-06-10",
        gender: false,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Daniel Williams",
        email: "johncarter@example.org",
        password: "4L7OJOEz!V",
        numberPhone: "621.422.6807x30549",
        birthDate: "1960-12-24",
        gender: false,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Shane Sheppard",
        email: "brittanycastillo@example.com",
        password: "7E8PoGn4w+",
        numberPhone: "245-891-8228x74866",
        birthDate: "1994-07-11",
        gender: true,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Justin Fleming",
        email: "pgonzalez@example.com",
        password: "FG(0vJhn1t",
        numberPhone: "001-208-466-6307x4503",
        birthDate: "1948-03-11",
        gender: false,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Jonathan Reyes",
        email: "jeremysnyder@example.com",
        password: "@dd8K(u7_0",
        numberPhone: "224.854.8513x2823",
        birthDate: "1954-01-11",
        gender: false,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Kenneth Carter",
        email: "jimenezcrystal@example.com",
        password: "RHpJb(RW%6",
        numberPhone: "816-505-4536x582",
        birthDate: "1936-01-05",
        gender: false,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Tony Escobar",
        email: "fletcherdennis@example.com",
        password: "5jKCEwY7^2",
        numberPhone: "+1-799-331-5138x26900",
        birthDate: "1958-10-21",
        gender: false,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Madison Fuentes",
        email: "tbarnes@example.net",
        password: "7sN6OEWR@1",
        numberPhone: "(251)245-2927x5440",
        birthDate: "2002-11-10",
        gender: true,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Larry Hernandez",
        email: "jonathan62@example.com",
        password: "u$J3hNWebl",
        numberPhone: "807-338-6812",
        birthDate: "1986-05-06",
        gender: true,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Deborah Diaz",
        email: "tammyjohnson@example.com",
        password: "_ML8Cwy70s",
        numberPhone: "908.801.0787",
        birthDate: "1962-12-19",
        gender: false,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Ashley Cole",
        email: "hsharp@example.org",
        password: "0q3vQaghu%",
        numberPhone: "001-643-398-0509x18488",
        birthDate: "2000-12-17",
        gender: false,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Michelle Henson",
        email: "carrollamy@example.com",
        password: "*BBnFORn_3",
        numberPhone: "4704747434",
        birthDate: "1973-08-24",
        gender: false,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Kimberly Lawrence",
        email: "darrellmalone@example.net",
        password: "I7BpLNvx%_",
        numberPhone: "001-461-984-9887x944",
        birthDate: "1993-10-11",
        gender: false,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Robert Parks",
        email: "hannah07@example.org",
        password: "oK&yH7WfsI",
        numberPhone: "5412122325",
        birthDate: "1950-12-04",
        gender: true,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Paul Sanders",
        email: "freemanelizabeth@example.org",
        password: "HoKj3Qx7r$",
        numberPhone: "967-947-5242",
        birthDate: "1969-04-25",
        gender: true,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Charles Hebert",
        email: "ericahall@example.com",
        password: "Z4MsVQJi)9",
        numberPhone: "001-903-865-2821x35476",
        birthDate: "1974-10-02",
        gender: false,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Lee Smith",
        email: "kennethhernandez@example.com",
        password: "yuXc6IFOd+",
        numberPhone: "463-838-9943x15553",
        birthDate: "1997-08-20",
        gender: false,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Kelly Valenzuela",
        email: "imoran@example.com",
        password: "9qF0I6Fq!Y",
        numberPhone: "+1-203-693-5856",
        birthDate: "1963-04-06",
        gender: true,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Tonya Thomas",
        email: "tracyphillips@example.com",
        password: "Rt7MpqAv)q",
        numberPhone: "001-642-873-6746x864",
        birthDate: "1943-12-30",
        gender: false,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Adrian Torres",
        email: "underwoodalex@example.net",
        password: "jlZt1mjW&4",
        numberPhone: "386.937.4236",
        birthDate: "1952-03-27",
        gender: false,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Jennifer Drake",
        email: "ngonzales@example.org",
        password: "NiM44Urlv(",
        numberPhone: "001-797-651-6315x925",
        birthDate: "1998-12-04",
        gender: true,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
      {
        name: "Jeffery Blevins",
        email: "clarkrebecca@example.org",
        password: "LCK%77JyA_",
        numberPhone: "(375)571-2238x71305",
        birthDate: "1984-07-31",
        gender: false,
        type: "owner",
        createdAt: "2024-04-01 04:26:18",
        updatedAt: "2024-04-01 04:26:18",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
