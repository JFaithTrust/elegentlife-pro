import { getCurrentSession } from "@/actions/auth";
import { getWheelOfFortuneConfiguration } from "@/actions/wheel-of-fortune-actions";
import SalesCampaignBanner from "@/components/layout/SalesCampaignBanner";
import WheelOfFortune from "@/components/layout/WheelOfFortune";
import ProductGrid from "@/components/product/ProductGrid";
import { getAllProducts } from "@/sanity/lib/client";
import Footer from "@/components/layout/Footer";
import FAQs from "@/components/layout/faq";
import NewProducts from "@/components/layout/NewProducts";
import ClientCategoryProducts from "./category/[slug]/ClientCategoryProducts";

const Home = async () => {
    const { user } = await getCurrentSession();

    const products = await getAllProducts();

    const { randomProducts, winningIndex } = await getWheelOfFortuneConfiguration();

    return (
        <div>
          <SalesCampaignBanner />
          <WheelOfFortune
            products={randomProducts}
            winningIndex={winningIndex}
          />

          <section className="container mx-auto max-w-6xl py-8 px-0">
            <ClientCategoryProducts products={products} />
          </section>
          <FAQs />
          <NewProducts/>
          <Footer />
        </div>
    );
}

export default Home;