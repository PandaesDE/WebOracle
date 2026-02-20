package com.weboracle.backend.config;

import com.weboracle.backend.entity.OracleResponse;
import com.weboracle.backend.entity.ProductRecommendation;
import com.weboracle.backend.entity.QuestionCategory;
import com.weboracle.backend.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final CategoryRepository categoryRepository;

    @Override
    public void run(String... args) {
        if (categoryRepository.count() == 0) {

            // Category: Love
            QuestionCategory love = new QuestionCategory();
            love.setName("Love & Relationships");
            love.setKeywords("love,date,relationship,marriage,crush,heart");

            OracleResponse loveResp1 = new OracleResponse();
            loveResp1.setShortAnswer("The stars are aligned for romance.");
            loveResp1.setLongAnswer(
                    "A new connection is on the horizon, or an existing one will deepen significantly. Be open to expressing your true feelings.");
            loveResp1.setCategory(love);

            OracleResponse loveResp2 = new OracleResponse();
            loveResp2.setShortAnswer("Patience is required here.");
            loveResp2.setLongAnswer(
                    "Rushing matters of the heart right now will only cause confusion. Give the situation time to breathe and evolve naturally.");
            loveResp2.setCategory(love);

            ProductRecommendation loveProd1 = new ProductRecommendation();
            loveProd1.setTitle("The 5 Love Languages");
            loveProd1.setAffiliateUrl("https://www.amazon.com/dp/080241270X");
            loveProd1.setImageUrl("https://m.media-amazon.com/images/I/41xRz86Hn7L._SY445_SX342_.jpg");
            loveProd1.setCategory(love);

            love.setResponses(List.of(loveResp1, loveResp2));
            love.setProducts(List.of(loveProd1));

            // Category: Career
            QuestionCategory career = new QuestionCategory();
            career.setName("Career & Wealth");
            career.setKeywords("job,money,career,work,boss,salary,business");

            OracleResponse careerResp1 = new OracleResponse();
            careerResp1.setShortAnswer("A fantastic opportunity approaches.");
            careerResp1.setLongAnswer(
                    "Your hard work is about to be recognized. Keep pushing forward and do not be afraid to negotiate your worth.");
            careerResp1.setCategory(career);

            OracleResponse careerResp2 = new OracleResponse();
            careerResp2.setShortAnswer("Re-evaluate your current path.");
            careerResp2.setLongAnswer(
                    "You may be investing energy in a direction that does not serve your higher purpose. Consider if this is truly what you want to be doing.");
            careerResp2.setCategory(career);

            ProductRecommendation careerProd1 = new ProductRecommendation();
            careerProd1.setTitle("Atomic Habits");
            careerProd1.setAffiliateUrl("https://www.amazon.com/dp/0735211299");
            careerProd1.setImageUrl("https://m.media-amazon.com/images/I/513Y5o-DYtL._SY445_SX342_.jpg");
            careerProd1.setCategory(career);

            career.setResponses(List.of(careerResp1, careerResp2));
            career.setProducts(List.of(careerProd1));

            // Category: General
            QuestionCategory general = new QuestionCategory();
            general.setName("General Mysteries");
            general.setKeywords("general,future,life,mysterious");

            OracleResponse genResp1 = new OracleResponse();
            genResp1.setShortAnswer("Outlook is hazy, try again.");
            genResp1.setLongAnswer(
                    "The ethereal energies surrounding this question are too turbulent right now. Focus your mind and ask again later.");
            genResp1.setCategory(general);

            ProductRecommendation genProd1 = new ProductRecommendation();
            genProd1.setTitle("Incense Sticks & Holder");
            genProd1.setAffiliateUrl("https://www.amazon.com/dp/B08XWN4861");
            genProd1.setImageUrl("https://m.media-amazon.com/images/I/71YIokW2UUL._AC_SX679_.jpg");
            genProd1.setCategory(general);

            general.setResponses(List.of(genResp1));
            general.setProducts(List.of(genProd1));

            categoryRepository.saveAll(List.of(love, career, general));
        }
    }
}
