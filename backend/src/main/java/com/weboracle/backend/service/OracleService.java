package com.weboracle.backend.service;

import com.weboracle.backend.dto.OracleDto.AskRequest;
import com.weboracle.backend.dto.OracleDto.AskResponse;
import com.weboracle.backend.dto.OracleDto.ProductDto;
import com.weboracle.backend.entity.OracleResponse;
import com.weboracle.backend.entity.ProductRecommendation;
import com.weboracle.backend.entity.QuestionCategory;
import com.weboracle.backend.repository.CategoryRepository;
import com.weboracle.backend.repository.OracleResponseRepository;
import com.weboracle.backend.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OracleService {

    private final CategoryRepository categoryRepository;
    private final OracleResponseRepository responseRepository;
    private final ProductRepository productRepository;
    private final Random random = new Random();

    public AskResponse askOracle(AskRequest request) {
        String question = request.getQuestion() != null ? request.getQuestion().toLowerCase() : "";

        List<QuestionCategory> allCategories = categoryRepository.findAll();
        if (allCategories.isEmpty()) {
            return AskResponse.builder()
                    .shortAnswer("The stars are silent.")
                    .longAnswer("The oracle is currently disconnected from the ethereal plane. Please try again later.")
                    .build();
        }

        // Try to match category by keywords
        QuestionCategory matchedCategory = allCategories.stream()
                .filter(cat -> {
                    String[] keywords = cat.getKeywords().split(",");
                    for (String kw : keywords) {
                        if (question.contains(kw.trim().toLowerCase())) {
                            return true;
                        }
                    }
                    return false;
                })
                .findFirst()
                .orElse(allCategories.get(random.nextInt(allCategories.size()))); // fallback to random

        // Get responses for category
        List<OracleResponse> responses = responseRepository.findByCategoryId(matchedCategory.getId());
        OracleResponse selectedResponse = null;
        if (!responses.isEmpty()) {
            selectedResponse = responses.get(random.nextInt(responses.size()));
        }

        // Get product recommendations for category
        List<ProductRecommendation> products = productRepository.findByCategoryId(matchedCategory.getId());

        List<ProductDto> productDtos = products.stream()
                .map(p -> ProductDto.builder()
                        .title(p.getTitle())
                        .affiliateUrl(p.getAffiliateUrl())
                        .imageUrl(p.getImageUrl())
                        .build())
                .collect(Collectors.toList());

        return AskResponse.builder()
                .shortAnswer(selectedResponse != null ? selectedResponse.getShortAnswer() : "Yes!")
                .longAnswer(selectedResponse != null ? selectedResponse.getLongAnswer()
                        : "The signs strongly point to yes, although you must tread carefully on your path.")
                .recommendations(productDtos)
                .build();
    }
}
