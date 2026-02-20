package com.weboracle.backend.dto;

import lombok.Data;
import lombok.Builder;
import java.util.List;

public class OracleDto {

    @Data
    public static class AskRequest {
        private String question;
    }

    @Data
    @Builder
    public static class AskResponse {
        private String shortAnswer;
        private String longAnswer;
        private List<ProductDto> recommendations;
    }

    @Data
    @Builder
    public static class ProductDto {
        private String title;
        private String affiliateUrl;
        private String imageUrl;
    }
}
