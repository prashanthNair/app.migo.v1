import { Box, styled, Tab, Tabs } from '@mui/material';
import NavbarLayout from '../../src/components/layouts/NavbarLayout';
import FrequentlyBought from '../../src/components/products/FrequentlyBought';
import ProductDescription from '../../src/components/products/ProductDescription';
import ProductReview from '../../src/components/products/ProductReview';
import RelatedProducts from '../../src/components/products/RelatedProducts';
import ProductIntro from '../../src/components/products/ProductIntro';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { getProductDetails } from '../../src/utils/api/products';
import {
  getFrequentlyBought,
  getRelatedProducts,
} from '../../src/utils/api/related-products';
const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 0,
  marginTop: 80,
  marginBottom: 24,
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
  '& .inner-tab': {
    minHeight: 40,
    fontWeight: 600,
    textTransform: 'capitalize',
  },
})); // ===============================================================

// ===============================================================
const ProductDetails = (props) => {
  const { frequentlyBought, relatedProducts, data } = props;
  const router = useRouter();
  const { id } = router.query;
  const [selectedOption, setSelectedOption] = useState(0);
  // useEffect(() => {
  //   if (id) {
  //     const productData = bazarReactDatabase.find(
  //       (item) => item.id === parseInt(`${id}`)
  //     );
  //     setProduct(productData);
  //   }
  // }, [id]);

  const handleOptionClick = (_, newValue) => {
    setSelectedOption(newValue);
  };

  return (
    <NavbarLayout>
      {/* {product ? <ProductIntro product={data} /> : <H2>Loading...</H2>} */}
      <ProductIntro product={data} />
      <StyledTabs
        textColor='primary'
        value={selectedOption}
        indicatorColor='primary'
        onChange={handleOptionClick}
      >
        <Tab className='inner-tab' label='Description' />
        <Tab className='inner-tab' label={`Reviews ${data?.Reviews?.length}`} />
      </StyledTabs>

      <Box mb={6}>
        {selectedOption === 0 && <ProductDescription data={data} />}
        {selectedOption === 1 && <ProductReview data={data} />}
      </Box>

      <FrequentlyBought productsData={frequentlyBought} />

      {/* <AvailableShops /> */}

      <RelatedProducts productsData={relatedProducts} />
    </NavbarLayout>
  );
};

// export const getStaticPaths = async () => {
//   return {
//     paths: [],
//     //indicates that no page needs be created at build time
//     fallback: 'blocking', //indicates the type of fallback
//   };
// };
export async function getServerSideProps(context) {
  console.log(context);

  const productId = context.params.id;
  const data = await getProductDetails(productId);
  const frequentlyBought = await getFrequentlyBought();
  const relatedProducts = await getRelatedProducts();

  return {
    props: {
      frequentlyBought,
      relatedProducts,
      data: data || null,
    },
  };
}
export default ProductDetails;
