import { watchGetProducts, watchGetProductDetails } from './product';
import { watchPostReview, watchGetReviews } from './review';

export default function* () {
    yield watchGetProducts();
    yield watchGetProductDetails();
    yield watchPostReview();
    yield watchGetReviews();
}