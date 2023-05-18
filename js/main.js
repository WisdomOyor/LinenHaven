const toggleBtnDiv = document.querySelector('.header-icons-right');
const toggleBtnIcon = document.querySelector('.toggle_btn');
const dropDownMenu = document.querySelector('.dropdown_menu');

let isOpen = false;
toggleBtnIcon.onclick = function () {
  dropDownMenu.classList.toggle('open');
  isOpen = dropDownMenu.classList.contains('open');
  toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark nav-link header-icon toggle_btn' : 'nav-link fa-solid fa-bars header-icon toggle_btn';
};

// Add an event listener to the document for click events
document.addEventListener('click', function (event) {
  if (isOpen) {
    // Check if the click occurred outside the dropDownMenu
    if (!dropDownMenu.contains(event.target) && isOpen && !toggleBtnIcon.contains(event.target)) {
      var screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        // Close dropdown menu if click occurs outside it
        dropDownMenu.classList.remove('open');
        isOpen = false;
        toggleBtnIcon.classList = 'nav-link fa-solid fa-bars header-icon toggle_btn';
      }
    }
  }
});

$(function () {
  // Same as document.addEventListener("DOMContentLoaded"...
});

//** SHOP CODE **//
// Sample product data
const products = [
  {
    imageURL: "https://lh3.googleusercontent.com/TgWNlw-7xg3KBLkRp0gN4v75UcxfYkuIoAuYsTMqfiqYXoYhsCkRR8QsZZ7_mGR3mwFH0BSzt8PostT2zkFHn_CdCpcYpL4ZM72HJElVmJqsjAxV4cmQ-icwQqvdJeiyzZLK8zyWQKdCk2cbwUJ7-uyqGmC0BV3VrPmn3343nPxpvgHo49AWFUI3R2i6b6FO7_pbDTVFKyNAEDxy3WE1NN-Hy6OzYtYS1KplDvrG5Rrz9XEw9g2Wp04fBaDA721FTC3gdiDUFE59963hMYGxYimlxgaYvcrVHVZcWvtZJSK-6FEEEI5m80i_rxOgTlnL5eeZ0OTS0toLRAxaxdxExL1yQrSlEStQng3am4c4PM8YGMChUF0Wr9_IpL0Gsg64zjUuc17jrOHyTEGlvCacSaS1CyYPSootREfVaKioR8RoNTkn5a_iaszQLew9PFpgYzQCsNTiZaPz7jB1gQIFYapkX3jj9wcrb-78EYfFuV_BZhpf_vL7nVi8bxmQkD6q5SkEqm_klwwCEfnSpui4G5RO8UpdqA8JS2fLtwgz9AnXNlkWHDXHRWYBrSoxxGYNiGt5qQwVLVF5OBiPMdar0UkRofsqtjdJwMhQ-C3bqILdDmkg5Cy056nJ6czBi0NZ6mfKBwxrUs9sVOc_k9WkV2nx3hxIPqR_xEJai73el8NZ6H2rbMraPJuYqna7gshO0rIMb2YvcuVvPdDTTI5BssdZ6kyYkuJdADzlHiKFHML2u8jtpu4FKY_z9rLo7Ly547TVvpZzjM0cpeyb77FAEVCbCdb3Ktb5zww8e5gIE4sXIe9XzNFcYKN-sd0R8tpLSOThpiC8R7YO7yWGDpaq1SFUwKjng7YNVhh4BXFwE0pLttdSlzfiFlq7ZsGdlcv_kftBsz1MkYM1i0c98BzpDEU26L7YxNsLjpo44uhfohp2iiEI=w500-h625-s-no?authuser=0",
    name: "Tiger Don",
    price: "$19.99",
    rating: "4.5",
  },
  {
    imageURL: "https://lh3.googleusercontent.com/j-pb3no001dhmNkRWtO_fjcI_uz4P1ZxOJmbIcjw22wqstGyBXiaZ8ZgzB4FT1mHGl1yFnDs00v9AYCobN7KAglNzBrp52R8U2QblZ-rilmSNw6c0nGZ5grimf0ioUzQHthG5B-0MSZL5g69-47lJKqqbxsrG9OYKWQk6hdHAUiJkVKDWUf3AO4yrV-ZDervORJ9mrCXkB5LD6kZBT5oJx8zZBNhV6ZN65N_2xZiTqWlWXa5YHUeV5D2vfLMRBfYeZ6Hx4-RhKM-rokwH9T1S1_93isHnn5UGRZIaZ00gQLsLAF1kOvuzuUj14uDNrVb6gCDoxPUajgYTsBpl_2epEuOZ8wvO_5cw8YqDKjCtHFKtKwVHC9-hi0gOuyd4mAI67vsa5z5OHwStTBQHcxE-Fk64ZXL26g5efP55vIVOL-le6-ech-5wSorZweriDtSqrKn3mZG4UNPXRiCbsoPAoGt9fvKVQazuEb4OA3QjIGTxVSODdIUtZrL4ZOu7pFDiNmnUX2uJSWu6hMgIB1G9b2DES3PuDZ8RLzUVsl4vm5xxIR6dBnKR8WOEiRKX2WjBOJKpsdvKCvo7ba40C6iBxKmhkRAGF446nJNp9ZKP0AxIJzSHwZqKLOCDd2wtGhsc2LEOgA0QtA2cbPEF1Hl3UEpRvAWkImXFUtmA8r7wUCpskTmGXEfYEqNvFjcuA_aDPMvGuHT9APKwqm4r01o6uOf-qIyXsNVOt6vbXkGlpIlpoI43dqdYxxHjhxPU4DgUgQr48Jovct7YpMGS1YS-pfQid48EuG-z5xHtduOG19FrYEcdkF9AeYCFyy-1ORFue6RTLNKZOb2tx1_B3En-OBGlkVK-NPJVjLkq_Oz6MU7DJJGWs6FUd121sdHGzob2SIKKgNDqSRTCRZrVA1dwUnzizPuX6PvmYO08-cfL7cf_r7f=w500-h625-s-no?authuser=0",
    name: "Elegant Classics Collection",
    price: "$29.99",
    rating: "4.8",
  },
  // Add more product objects as needed
];

// Render the products using the template
const template = document.getElementById("product-template").innerHTML;
const container = document.getElementById("product-container");

products.forEach((product) => {
  const html = template
    .replace(/{{imageURL}}/g, product.imageURL)
    .replace(/{{name}}/g, product.name)
    .replace(/{{price}}/g, product.price)
    .replace(/{{rating}}/g, product.rating);
  container.innerHTML += html;
});
