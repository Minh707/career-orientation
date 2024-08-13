const questions = [
    {
        question: "Bạn thích làm việc trong môi trường nào nhất?",
        options: ["Tự do, ngoài trời", "Văn phòng hiện đại", "Nhà riêng, làm việc từ xa", "Trong một không gian bí ẩn"],
        traits: ["outdoor", "office", "remote", "mysterious"]
    },
    {
        question: "Khi đối mặt với vấn đề, bạn thường giải quyết như thế nào?",
        options: ["Sử dụng kỹ thuật phân tích", "Tìm kiếm sự giúp đỡ từ người khác", "Sáng tạo một giải pháp mới", "Thử mọi cách, kể cả cách không chính thống"],
        traits: ["analytical", "collaborative", "creative", "unconventional"]
    },
    {
        question: "Bạn yêu thích hoạt động nào trong thời gian rảnh?",
        options: ["Phân tích số liệu và nghiên cứu", "Tạo ra các sản phẩm sáng tạo", "Giao tiếp và kết nối với mọi người", "Tham gia vào các hoạt động liều lĩnh"],
        traits: ["research", "creative", "social", "daring"]
    },
    {
        question: "Bạn có thích lãnh đạo một nhóm trong những tình huống bất thường không?",
        options: ["Rất thích", "Có thể làm được", "Cần một chút thời gian", "Không thích"],
        traits: ["strategic", "commanding", "charismatic", "innovative", "otherworldly"]
    },
    {
        question: "Bạn cảm thấy thế nào khi làm việc trong một môi trường bí mật và đầy những điều kỳ lạ?",
        options: ["Rất thoải mái", "Có thể làm việc", "Cần thời gian làm quen", "Khó chịu"],
        traits: ["mysterious", "enigmatic", "charismatic", "strategic", "secretive"]
    },
    {
        question: "Khi phải giải quyết các vấn đề kỹ thuật phức tạp, bạn thường làm gì?",
        options: ["Tìm giải pháp sáng tạo", "Áp dụng công nghệ mới", "Phân tích chi tiết", "Thử nghiệm các phương pháp khác nhau"],
        traits: ["innovative", "creative", "technical", "adaptive", "futuristic"]
    },
    {
        question: "Bạn có thích viết thơ và thể hiện cảm xúc qua những từ ngữ phong phú không?",
        options: ["Rất thích", "Có thể làm được", "Thỉnh thoảng", "Không thích"],
        traits: ["poetic", "imaginative", "cosmic", "philosophical", "expressive"]
    },
    {
        question: "Bạn cảm thấy thế nào khi phải giải mã các ngôn ngữ không quen thuộc và bí ẩn?",
        options: ["Rất hứng thú", "Có thể làm được", "Cần thêm thời gian", "Khó khăn"],
        traits: ["linguistic", "analytical", "creative", "curious", "interstellar"]
    },
    {
        question: "Bạn có thích điều khiển các thiết bị robot và tạo ra âm nhạc không?",
        options: ["Rất thích", "Có thể làm được", "Thỉnh thoảng", "Không thích"],
        traits: ["technical", "musical", "innovative", "organized", "robotic"]
    },
    {
        question: "Khi bạn nhận được một kịch bản mới với nhiều tình tiết bất ngờ, bạn thường phản ứng như thế nào?",
        options: [
            "Phấn khích và nhanh chóng hòa nhập vào nhân vật",  // Creative
            "Tìm mọi cách để làm cho nó thú vị hơn",  // Playful
            "Sử dụng các kỹ năng biểu diễn để xử lý tình huống",  // Performative
            "Cảm thấy hồi hộp nhưng quyết tâm làm tốt"  // Confident
        ],
        traits: ["creative", "playful", "performative", "confident"]
    },
    {
        question: "Khi cần thể hiện cảm xúc sâu sắc trong một cảnh, bạn thường chọn phương pháp nào?",
        options: [
            "Biểu diễn một cách sinh động và đầy cảm xúc",  // Expressive
            "Sử dụng các kỹ thuật biểu diễn đã học để tạo sự chân thực",  // Performative
            "Thử nghiệm với các cách thể hiện khác nhau",  // Creative
            "Để cảm xúc tự nhiên và không cố gắng quá nhiều"  // Adaptable
        ],
        traits: ["expressive", "performative", "creative", "adaptable"]
    },
    {
        question: "Khi bạn phải đối mặt với một tình huống kỳ quặc trên trường quay, bạn thường làm gì?",
        options: [
            "Xử lý tình huống một cách táo bạo và sáng tạo",  // Daring
            "Sử dụng sự tự tin và khả năng ứng biến để giải quyết",  // Confident
            "Thực hiện các màn biểu diễn vui nhộn để làm giảm bầu không khí",  // Playful
            "Thích nghi với tình huống và tìm cách làm cho nó phù hợp với nhân vật"  // Adaptable
        ],
        traits: ["daring", "confident", "playful", "adaptable"]
    },
    {
        question: "Khi bạn tham gia vào một cảnh quay không theo kịch bản, bạn thường cảm thấy như thế nào?",
        options: [
            "Hào hứng và sẵn sàng thử thách bản thân",  // Daring
            "Cảm thấy mình cần phải nhanh chóng thích nghi và sáng tạo",  // Creative
            "Thực hiện với sự tự tin và kỹ năng đã được luyện tập",  // Performative
            "Cố gắng giữ cho mọi thứ vui vẻ và thú vị"  // Playful
        ],
        traits: ["daring", "creative", "performative", "playful"]
    },
    {
        question: "Khi tham gia vào các tình huống tạo hình nhân vật không giống ai, bạn thường làm gì?",
        options: [
            "Tạo ra một màn trình diễn đầy màu sắc và ấn tượng",  // Creative
            "Chơi đùa với các yếu tố khác lạ để làm cho nhân vật độc đáo",  // Playful
            "Sử dụng sự tự tin để dẫn dắt và làm nổi bật nhân vật",  // Confident
            "Thích nghi nhanh chóng với các thay đổi để phù hợp với kịch bản"  // Adaptable
        ],
        traits: ["creative", "playful", "confident", "adaptable"]
    },
    {
        question: "Khi phải sửa chữa các thiết bị phức tạp, bạn thường làm gì?",
        options: ["Tìm cách sửa chữa sáng tạo", "Sử dụng các công cụ mới", "Phân tích vấn đề chi tiết", "Thử nghiệm nhiều phương pháp khác nhau"],
        traits: ["mechanical", "inventive", "detailed", "adaptive", "timeless"]
    },
    {
        question: "Bạn có thích nghiên cứu các thuật toán và phân tích tâm lý học không?",
        options: ["Rất thích", "Có thể làm được", "Cần thêm thời gian", "Không thích"],
        traits: ["analytical", "psychological", "innovative", "methodical", "curious"]
    },
    {
        question: "Bạn có cảm thấy tự tin khi giao tiếp với các nền văn hóa và chủng tộc khác nhau không?",
        options: ["Rất tự tin", "Có thể làm được", "Cần thêm thời gian", "Không tự tin"],
        traits: ["diplomatic", "cultural", "strategic", "charismatic", "intergalactic"]
    },
    {
        question: "Bạn có thích tạo ra các món ăn độc đáo và có phần ma thuật không?",
        options: ["Rất thích", "Có thể làm được", "Thỉnh thoảng", "Không thích"],
        traits: ["creative", "culinary", "magical", "innovative", "delightful"]
    },

    {
        question: "Bạn cảm thấy mình phù hợp nhất với loại công việc nào?",
        options: ["Công việc có thể tạo ra sự hỗn loạn và bất ổn", "Công việc yêu cầu sự lập kế hoạch và tổ chức", "Công việc đòi hỏi sự sáng tạo và đổi mới", "Công việc có yếu tố mạo hiểm và thách thức"],
        traits: ["chaotic", "organized", "creative", "daring"]
    },
    {
        question: "Khi bạn phải làm việc nhóm, bạn thường đảm nhận vai trò gì?",
        options: ["Người lập kế hoạch", "Người thúc đẩy", "Người sáng tạo", "Người đưa ra các quyết định mạo hiểm"],
        traits: ["strategic", "motivator", "innovative", "risk-taker"]
    },
    {
        question: "Bạn cảm thấy thế nào khi làm việc dưới áp lực?",
        options: ["Có thể giữ bình tĩnh và làm việc hiệu quả", "Cần một chút thời gian để điều chỉnh", "Tạo ra các giải pháp mới và sáng tạo", "Có thể hành động nhanh chóng và quyết đoán"],
        traits: ["calm", "adaptive", "creative", "decisive"]
    },
    {
        question: "Bạn thích làm việc với loại dữ liệu nào?",
        options: ["Số liệu chính xác và chi tiết", "Thông tin sáng tạo và độc đáo", "Dữ liệu liên quan đến con người và xã hội", "Thông tin đa dạng và không chính thống"],
        traits: ["detailed", "creative", "social", "diverse"]
    },
    {
        question: "Bạn có xu hướng giải quyết vấn đề như thế nào?",
        options: ["Theo quy trình và phương pháp", "Sáng tạo và thử nghiệm", "Tìm kiếm sự giúp đỡ và hợp tác", "Hành động quyết đoán và nhanh chóng"],
        traits: ["methodical", "experimental", "collaborative", "decisive"]
    },
    {
        question: "Bạn cảm thấy mình có thể đóng góp gì nhiều nhất trong một dự án?",
        options: ["Cung cấp sự phân tích chính xác", "Tạo ra các ý tưởng mới", "Kết nối và giao tiếp với các bên liên quan", "Thực hiện các nhiệm vụ mạo hiểm"],
        traits: ["analytical", "innovative", "communicative", "daring"]
    },
    {
        question: "Bạn muốn đạt được điều gì trong công việc của mình?",
        options: ["Sự ổn định và sự chắc chắn", "Sự sáng tạo và đổi mới", "Khả năng giao tiếp và kết nối với mọi người", "Cảm giác mạo hiểm và thử thách"],
        traits: ["stable", "innovative", "social", "adventurous"]
    },
    {
        question: "Khi bạn phải đưa ra quyết định quan trọng, bạn thường làm gì?",
        options: ["Phân tích dữ liệu và thông tin", "Tạo ra một giải pháp sáng tạo", "Tham khảo ý kiến từ người khác", "Hành động nhanh chóng và quyết đoán"],
        traits: ["analytical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Bạn thấy mình phù hợp nhất với môi trường làm việc nào?",
        options: ["Môi trường yêu cầu sự chính xác", "Môi trường khuyến khích sự sáng tạo", "Môi trường có tính cộng đồng cao", "Môi trường có yếu tố mạo hiểm"],
        traits: ["precise", "creative", "social", "daring"]
    },
    {
        question: "Khi giải quyết một vấn đề khó, bạn thường chọn cách nào?",
        options: ["Sử dụng các phương pháp phân tích", "Tạo ra các giải pháp sáng tạo", "Hợp tác và tìm kiếm sự giúp đỡ", "Thực hiện các hành động quyết đoán"],
        traits: ["analytical", "innovative", "collaborative", "decisive"]
    },
    {
        question: "Bạn cảm thấy thế nào về việc làm việc với số liệu lớn?",
        options: ["Thích phân tích và làm việc với số liệu chi tiết", "Có thể tạo ra các ý tưởng sáng tạo từ số liệu", "Có thể giao tiếp và truyền đạt thông tin từ số liệu", "Có thể sử dụng số liệu để đưa ra quyết định nhanh chóng"],
        traits: ["analytical", "creative", "communicative", "decisive"]
    },
    {
        question: "Bạn có xu hướng lựa chọn công việc nào?",
        options: ["Công việc yêu cầu sự chính xác và chi tiết", "Công việc đòi hỏi sự sáng tạo và đổi mới", "Công việc có tính cộng đồng và hợp tác cao", "Công việc có yếu tố mạo hiểm và thử thách"],
        traits: ["precise", "creative", "social", "daring"]
    },
    {
        question: "Bạn cảm thấy mình có thể thích ứng với điều gì nhất trong công việc?",
        options: ["Quy trình và phương pháp làm việc cụ thể", "Tình huống không chắc chắn và cần sáng tạo", "Tương tác và giao tiếp với nhiều người", "Thực hiện các nhiệm vụ mạo hiểm và thử thách"],
        traits: ["methodical", "innovative", "social", "adventurous"]
    },
    {
        question: "Khi bạn làm việc nhóm, bạn thường đóng vai trò gì?",
        options: ["Người lên kế hoạch và tổ chức", "Người tạo ra ý tưởng mới", "Người kết nối và giao tiếp với các thành viên", "Người thực hiện các nhiệm vụ mạo hiểm"],
        traits: ["strategic", "creative", "communicative", "daring"]
    },
    {
        question: "Bạn cảm thấy thế nào khi phải làm việc với các dự án lớn?",
        options: ["Cần lập kế hoạch và tổ chức kỹ lưỡng", "Thích sáng tạo và thử nghiệm các giải pháp mới", "Thích giao tiếp và làm việc nhóm", "Thích thực hiện các nhiệm vụ mạo hiểm và thử thách"],
        traits: ["organized", "creative", "social", "daring"]
    },
    {
        question: "Bạn cảm thấy mình phù hợp với công việc nào?",
        options: ["Công việc yêu cầu sự chính xác và chi tiết", "Công việc đòi hỏi sự sáng tạo và đổi mới", "Công việc liên quan đến giao tiếp và kết nối", "Công việc có yếu tố mạo hiểm"],
        traits: ["precise", "creative", "social", "adventurous"]
    },
    {
        question: "Khi bạn phải giải quyết một tình huống khẩn cấp, bạn sẽ chọn cách nào?",
        options: ["Phân tích và xử lý thông tin", "Tạo ra giải pháp mới và sáng tạo", "Giao tiếp và hợp tác với người khác", "Thực hiện hành động nhanh chóng và quyết đoán"],
        traits: ["analytical", "creative", "communicative", "decisive"]
    },
    {
        question: "Bạn thấy thế nào về việc làm việc trong một môi trường không chắc chắn?",
        options: ["Thích tìm cách tạo ra sự ổn định", "Thích tìm giải pháp sáng tạo", "Thích giao tiếp và hợp tác với người khác", "Thích đối mặt với thách thức và mạo hiểm"],
        traits: ["stable", "creative", "social", "daring"]
    },
    {
        question: "Bạn cảm thấy mình có thể phát huy tốt nhất ở loại công việc nào?",
        options: ["Công việc đòi hỏi sự chính xác và chi tiết", "Công việc cần sự sáng tạo và đổi mới", "Công việc có tính cộng đồng và giao tiếp cao", "Công việc có yếu tố mạo hiểm"],
        traits: ["precise", "creative", "social", "daring"]
    },
    {
        question: "Khi bạn đối mặt với một thách thức, bạn thường chọn cách nào?",
        options: ["Phân tích và đánh giá các giải pháp", "Tạo ra giải pháp mới và sáng tạo", "Tìm kiếm sự hỗ trợ và hợp tác", "Thực hiện các hành động quyết đoán"],
        traits: ["analytical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Bạn có xu hướng lựa chọn công việc nào trong tình huống khẩn cấp?",
        options: ["Công việc yêu cầu sự chính xác", "Công việc sáng tạo và đổi mới", "Công việc giao tiếp và kết nối", "Công việc mạo hiểm và thách thức"],
        traits: ["precise", "creative", "social", "daring"]
    },
    {
        question: "Bạn cảm thấy mình thích ứng với loại công việc nào nhất?",
        options: ["Công việc cần sự tổ chức và lập kế hoạch", "Công việc yêu cầu sự sáng tạo và đổi mới", "Công việc liên quan đến giao tiếp và kết nối", "Công việc có yếu tố mạo hiểm và thách thức"],
        traits: ["organized", "creative", "social", "adventurous"]
    },
    {
        question: "Bạn cảm thấy thế nào về việc làm việc với các dự án dài hạn?",
        options: ["Thích lập kế hoạch và theo dõi tiến trình", "Thích sáng tạo và phát triển ý tưởng", "Thích giao tiếp và hợp tác với nhóm", "Thích thực hiện các nhiệm vụ mạo hiểm"],
        traits: ["organized", "creative", "social", "daring"]
    },
    {
        question: "Khi bạn đối mặt với sự thay đổi, bạn thường phản ứng như thế nào?",
        options: ["Tìm cách tổ chức và sắp xếp lại", "Tạo ra các giải pháp mới và sáng tạo", "Giao tiếp và thảo luận với người khác", "Thực hiện các hành động quyết đoán"],
        traits: ["methodical", "creative", "communicative", "decisive"]
    },
    {
        question: "Bạn cảm thấy mình có thể phát huy tốt nhất trong công việc nào?",
        options: ["Công việc yêu cầu sự chính xác và chi tiết", "Công việc sáng tạo và đổi mới", "Công việc giao tiếp và kết nối với nhiều người", "Công việc có yếu tố mạo hiểm và thử thách"],
        traits: ["precise", "creative", "social", "adventurous"]
    },
    {
        question: "Bạn cảm thấy thế nào về việc làm việc trong một môi trường nhanh chóng và biến động?",
        options: ["Có thể thích nghi và tổ chức lại", "Có thể tạo ra các giải pháp sáng tạo", "Có thể giao tiếp và hợp tác với người khác", "Có thể hành động quyết đoán và nhanh chóng"],
        traits: ["adaptable", "creative", "collaborative", "decisive"]
    },
    {
        question: "Khi bạn gặp khó khăn trong công việc, bạn thường làm gì?",
        options: ["Tìm cách phân tích và giải quyết vấn đề", "Sáng tạo và phát triển giải pháp mới", "Hợp tác và thảo luận với người khác", "Hành động quyết đoán và thử nghiệm"],
        traits: ["analytical", "innovative", "collaborative", "experimental"]
    },
    {
        question: "Bạn có thể đóng góp gì trong một dự án nhóm?",
        options: ["Lập kế hoạch và tổ chức", "Tạo ra ý tưởng mới", "Kết nối và giao tiếp với các thành viên", "Thực hiện các nhiệm vụ mạo hiểm"],
        traits: ["strategic", "creative", "social", "daring"]
    },
    {
        question: "Bạn cảm thấy mình có thể làm việc tốt nhất trong môi trường nào?",
        options: ["Môi trường yêu cầu sự chính xác và chi tiết", "Môi trường sáng tạo và đổi mới", "Môi trường giao tiếp và kết nối", "Môi trường mạo hiểm và thử thách"],
        traits: ["precise", "creative", "social", "daring"]
    },
    {
        question: "Bạn có xu hướng giải quyết vấn đề như thế nào?",
        options: ["Phân tích và đánh giá", "Sáng tạo và thử nghiệm", "Tìm kiếm sự hợp tác", "Hành động quyết đoán"],
        traits: ["analytical", "innovative", "collaborative", "decisive"]
    },
    {
        question: "Khi đối mặt với sự không chắc chắn, bạn phản ứng như thế nào?",
        options: ["Tạo ra kế hoạch để đối phó", "Tìm kiếm các giải pháp sáng tạo", "Giao tiếp và tìm kiếm sự giúp đỡ", "Hành động quyết đoán"],
        traits: ["strategic", "innovative", "communicative", "decisive"]
    },
    {
        question: "Bạn cảm thấy thế nào khi làm việc với các dự án phức tạp?",
        options: ["Thích lập kế hoạch và theo dõi tiến trình", "Thích sáng tạo và phát triển ý tưởng", "Thích giao tiếp và làm việc nhóm", "Thích thực hiện các nhiệm vụ mạo hiểm"],
        traits: ["organized", "creative", "social", "adventurous"]
    },
    {
        question: "Bạn cảm thấy mình có thể đóng góp gì tốt nhất trong một công việc?",
        options: ["Phân tích và tổ chức", "Tạo ra ý tưởng sáng tạo", "Giao tiếp và kết nối với người khác", "Thực hiện các nhiệm vụ mạo hiểm"],
        traits: ["analytical", "creative", "communicative", "daring"]
    },
    {
        question: "Khi bạn đối mặt với một thử thách mới, bạn thường làm gì?",
        options: ["Phân tích và tìm giải pháp", "Sáng tạo và thử nghiệm các giải pháp mới", "Tìm kiếm sự hợp tác và hỗ trợ", "Hành động quyết đoán và thử nghiệm"],
        traits: ["analytical", "innovative", "collaborative", "decisive"]
    },
    {
        question: "Bạn cảm thấy thế nào về việc làm việc trong môi trường thay đổi nhanh chóng?",
        options: ["Có thể tổ chức và lập kế hoạch", "Có thể tạo ra các giải pháp sáng tạo", "Có thể giao tiếp và hợp tác với người khác", "Có thể hành động quyết đoán"],
        traits: ["methodical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Bạn có xu hướng giải quyết vấn đề như thế nào trong tình huống khẩn cấp?",
        options: ["Phân tích và đưa ra giải pháp", "Tạo ra ý tưởng mới", "Tìm kiếm sự hợp tác và hỗ trợ", "Hành động nhanh chóng và quyết đoán"],
        traits: ["analytical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Bạn cảm thấy mình có thể làm việc tốt nhất trong một môi trường nào?",
        options: ["Môi trường yêu cầu sự chính xác và chi tiết", "Môi trường sáng tạo và đổi mới", "Môi trường giao tiếp và kết nối", "Môi trường mạo hiểm và thử thách"],
        traits: ["precise", "creative", "social", "daring"]
    },
    {
        question: "Khi bạn phải giải quyết một vấn đề lớn, bạn thường chọn cách nào?",
        options: ["Phân tích và tổ chức thông tin", "Sáng tạo và thử nghiệm các giải pháp", "Tìm kiếm sự hợp tác và hỗ trợ", "Hành động nhanh chóng và quyết đoán"],
        traits: ["analytical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Bạn cảm thấy thế nào khi làm việc với các dự án dài hạn?",
        options: ["Thích lập kế hoạch và theo dõi tiến trình", "Thích sáng tạo và phát triển ý tưởng", "Thích giao tiếp và làm việc nhóm", "Thích thực hiện các nhiệm vụ mạo hiểm"],
        traits: ["organized", "creative", "social", "daring"]
    },
    {
        question: "Bạn có xu hướng giải quyết vấn đề như thế nào trong một tình huống không chắc chắn?",
        options: ["Tạo ra kế hoạch và tổ chức", "Tìm kiếm các giải pháp sáng tạo", "Giao tiếp và hợp tác với người khác", "Hành động quyết đoán"],
        traits: ["methodical", "creative", "communicative", "decisive"]
    },
    {
        question: "Khi bạn phải đối mặt với một nhiệm vụ khó khăn, bạn thường làm gì?",
        options: ["Phân tích và đánh giá các giải pháp", "Sáng tạo và phát triển ý tưởng mới", "Tìm kiếm sự hỗ trợ và hợp tác", "Hành động nhanh chóng và quyết đoán"],
        traits: ["analytical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Bạn cảm thấy thế nào khi làm việc trong một môi trường đầy thử thách?",
        options: ["Có thể tổ chức và lập kế hoạch", "Có thể sáng tạo và phát triển ý tưởng", "Có thể giao tiếp và hợp tác với người khác", "Có thể hành động quyết đoán và thử nghiệm"],
        traits: ["methodical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Bạn có thể đóng góp gì trong một công việc nhóm?",
        options: ["Lập kế hoạch và tổ chức", "Tạo ra ý tưởng sáng tạo", "Kết nối và giao tiếp với các thành viên", "Thực hiện các nhiệm vụ mạo hiểm"],
        traits: ["strategic", "creative", "communicative", "daring"]
    },
    {
        question: "Bạn cảm thấy mình phù hợp với loại công việc nào nhất?",
        options: ["Công việc yêu cầu sự chính xác và chi tiết", "Công việc sáng tạo và đổi mới", "Công việc có tính cộng đồng và giao tiếp cao", "Công việc mạo hiểm và thử thách"],
        traits: ["precise", "creative", "social", "adventurous"]
    },
    {
        question: "Bạn cảm thấy thế nào khi làm việc với các nhiệm vụ phức tạp?",
        options: ["Thích lập kế hoạch và tổ chức", "Thích sáng tạo và phát triển ý tưởng", "Thích giao tiếp và hợp tác với người khác", "Thích thực hiện các nhiệm vụ mạo hiểm"],
        traits: ["organized", "creative", "social", "daring"]
    },
    {
        question: "Bạn có xu hướng giải quyết vấn đề như thế nào trong một tình huống khẩn cấp?",
        options: ["Phân tích và tổ chức thông tin", "Tạo ra ý tưởng sáng tạo", "Tìm kiếm sự hợp tác và hỗ trợ", "Hành động nhanh chóng và quyết đoán"],
        traits: ["analytical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Bạn cảm thấy thế nào về việc làm việc trong môi trường có nhiều thay đổi?",
        options: ["Có thể tổ chức và lập kế hoạch", "Có thể sáng tạo và phát triển ý tưởng", "Có thể giao tiếp và hợp tác với người khác", "Có thể hành động quyết đoán"],
        traits: ["methodical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Bạn cảm thấy mình có thể làm việc tốt nhất trong môi trường nào?",
        options: ["Môi trường yêu cầu sự chính xác và chi tiết", "Môi trường sáng tạo và đổi mới", "Môi trường giao tiếp và kết nối", "Môi trường mạo hiểm và thử thách"],
        traits: ["precise", "creative", "social", "daring"]
    },
    {
        question: "Bạn có xu hướng giải quyết vấn đề như thế nào khi đối mặt với một tình huống khó khăn?",
        options: ["Phân tích và đưa ra giải pháp", "Sáng tạo và thử nghiệm", "Tìm kiếm sự hỗ trợ và hợp tác", "Hành động quyết đoán"],
        traits: ["analytical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Bạn cảm thấy thế nào khi phải làm việc với các dự án dài hạn?",
        options: ["Thích lập kế hoạch và theo dõi tiến trình", "Thích sáng tạo và phát triển ý tưởng", "Thích giao tiếp và làm việc nhóm", "Thích thực hiện các nhiệm vụ mạo hiểm"],
        traits: ["organized", "creative", "social", "daring"]
    },
    {
        question: "Bạn có thể đóng góp gì trong một dự án nhóm?",
        options: ["Lập kế hoạch và tổ chức", "Tạo ra ý tưởng sáng tạo", "Kết nối và giao tiếp với các thành viên", "Thực hiện các nhiệm vụ mạo hiểm"],
        traits: ["strategic", "creative", "communicative", "daring"]
    },
    {
        question: "Bạn cảm thấy mình phù hợp với công việc nào?",
        options: ["Công việc yêu cầu sự chính xác và chi tiết", "Công việc sáng tạo và đổi mới", "Công việc giao tiếp và kết nối với người khác", "Công việc mạo hiểm và thử thách"],
        traits: ["precise", "creative", "social", "daring"]
    },
    {
        question: "Bạn cảm thấy thế nào khi làm việc trong môi trường có nhiều thay đổi?",
        options: ["Có thể tổ chức và lập kế hoạch", "Có thể sáng tạo và phát triển ý tưởng", "Có thể giao tiếp và hợp tác với người khác", "Có thể hành động quyết đoán"],
        traits: ["methodical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Khi bạn gặp khó khăn trong công việc, bạn thường làm gì?",
        options: ["Tìm cách phân tích và giải quyết vấn đề", "Sáng tạo và phát triển giải pháp mới", "Hợp tác và thảo luận với người khác", "Hành động nhanh chóng và quyết đoán"],
        traits: ["analytical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Bạn cảm thấy thế nào về việc làm việc trong một môi trường nhanh chóng và biến động?",
        options: ["Có thể tổ chức và lập kế hoạch", "Có thể sáng tạo và phát triển ý tưởng", "Có thể giao tiếp và hợp tác với người khác", "Có thể hành động quyết đoán và thử nghiệm"],
        traits: ["methodical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Bạn cảm thấy mình có thể đóng góp gì trong một công việc?",
        options: ["Phân tích và tổ chức", "Tạo ra ý tưởng sáng tạo", "Giao tiếp và kết nối với người khác", "Thực hiện các nhiệm vụ mạo hiểm"],
        traits: ["analytical", "creative", "communicative", "daring"]
    },
    {
        question: "Khi bạn đối mặt với một thử thách mới, bạn thường làm gì?",
        options: ["Phân tích và đánh giá các giải pháp", "Sáng tạo và phát triển ý tưởng mới", "Tìm kiếm sự hợp tác và hỗ trợ", "Hành động nhanh chóng và quyết đoán"],
        traits: ["analytical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Bạn cảm thấy thế nào khi làm việc với các nhiệm vụ dài hạn?",
        options: ["Thích lập kế hoạch và theo dõi tiến trình", "Thích sáng tạo và phát triển ý tưởng", "Thích giao tiếp và làm việc nhóm", "Thích thực hiện các nhiệm vụ mạo hiểm"],
        traits: ["organized", "creative", "social", "daring"]
    },
    {
        question: "Bạn có xu hướng giải quyết vấn đề như thế nào trong một tình huống không chắc chắn?",
        options: ["Tạo ra kế hoạch và tổ chức", "Tìm kiếm các giải pháp sáng tạo", "Giao tiếp và hợp tác với người khác", "Hành động quyết đoán"],
        traits: ["methodical", "creative", "communicative", "decisive"]
    },
    {
        question: "Khi bạn phải đối mặt với một nhiệm vụ khó khăn, bạn thường làm gì?",
        options: ["Phân tích và đánh giá các giải pháp", "Sáng tạo và phát triển ý tưởng mới", "Tìm kiếm sự hỗ trợ và hợp tác", "Hành động nhanh chóng và quyết đoán"],
        traits: ["analytical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Bạn cảm thấy thế nào về việc làm việc trong môi trường thay đổi nhanh chóng?",
        options: ["Có thể tổ chức và lập kế hoạch", "Có thể sáng tạo và phát triển ý tưởng", "Có thể giao tiếp và hợp tác với người khác", "Có thể hành động quyết đoán"],
        traits: ["methodical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Bạn cảm thấy mình có thể làm việc tốt nhất trong môi trường nào?",
        options: ["Môi trường yêu cầu sự chính xác và chi tiết", "Môi trường sáng tạo và đổi mới", "Môi trường giao tiếp và kết nối", "Môi trường mạo hiểm và thử thách"],
        traits: ["precise", "creative", "social", "daring"]
    },
    {
        question: "Bạn có xu hướng giải quyết vấn đề như thế nào khi đối mặt với một tình huống khó khăn?",
        options: ["Phân tích và đưa ra giải pháp", "Sáng tạo và thử nghiệm", "Tìm kiếm sự hỗ trợ và hợp tác", "Hành động quyết đoán"],
        traits: ["analytical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Bạn cảm thấy thế nào khi làm việc trong một môi trường có nhiều thay đổi?",
        options: ["Có thể tổ chức và lập kế hoạch", "Có thể sáng tạo và phát triển ý tưởng", "Có thể giao tiếp và hợp tác với người khác", "Có thể hành động quyết đoán"],
        traits: ["methodical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Bạn có thể đóng góp gì trong một công việc nhóm?",
        options: ["Lập kế hoạch và tổ chức", "Tạo ra ý tưởng sáng tạo", "Kết nối và giao tiếp với các thành viên", "Thực hiện các nhiệm vụ mạo hiểm"],
        traits: ["strategic", "creative", "communicative", "daring"]
    },
    {
        question: "Bạn cảm thấy mình phù hợp với công việc nào?",
        options: ["Công việc yêu cầu sự chính xác và chi tiết", "Công việc sáng tạo và đổi mới", "Công việc giao tiếp và kết nối với người khác", "Công việc mạo hiểm và thử thách"],
        traits: ["precise", "creative", "social", "daring"]
    },
    {
        question: "Bạn cảm thấy thế nào khi làm việc với các dự án dài hạn?",
        options: ["Thích lập kế hoạch và theo dõi tiến trình", "Thích sáng tạo và phát triển ý tưởng", "Thích giao tiếp và làm việc nhóm", "Thích thực hiện các nhiệm vụ mạo hiểm"],
        traits: ["organized", "creative", "social", "daring"]
    },
    {
        question: "Khi bạn đối mặt với một thử thách mới, bạn thường làm gì?",
        options: ["Phân tích và đánh giá các giải pháp", "Sáng tạo và phát triển ý tưởng mới", "Tìm kiếm sự hợp tác và hỗ trợ", "Hành động nhanh chóng và quyết đoán"],
        traits: ["analytical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Bạn cảm thấy thế nào khi làm việc trong một môi trường nhanh chóng và biến động?",
        options: ["Có thể tổ chức và lập kế hoạch", "Có thể sáng tạo và phát triển ý tưởng", "Có thể giao tiếp và hợp tác với người khác", "Có thể hành động quyết đoán"],
        traits: ["methodical", "creative", "collaborative", "decisive"]
    },
    {
        question: "Bạn cảm thấy mình có thể đóng góp gì trong một công việc?",
        options: ["Phân tích và tổ chức", "Tạo ra ý tưởng sáng tạo", "Giao tiếp và kết nối với người khác", "Thực hiện các nhiệm vụ mạo hiểm"],
        traits: ["analytical", "creative", "communicative", "daring"]
    },
    {
        question: "Bạn có cảm thấy hứng thú khi tham gia vào các hoạt động gây rối loạn và bất ổn không?",
        options: ["Có", "Không"],
        traits: ["chaotic", "disruptive"]
    },
    {
        question: "Bạn có thường xuyên tìm kiếm sự không chắc chắn và mạo hiểm trong cuộc sống không?",
        options: ["Có", "Không"],
        traits: ["unpredictable", "daring"]
    },
    {
        question: "Bạn có cảm thấy vui khi tham gia vào những hoạt động nguy hiểm và không hợp pháp không?",
        options: ["Có", "Không"],
        traits: ["dangerous", "illegal"]
    },
    {
        question: "Bạn có thích những hành động và lối sống mà xã hội coi là trái đạo đức không?",
        options: ["Có", "Không"],
        traits: ["rebellious", "scandalous"]
    },
    {
        question: "Bạn có thấy hấp dẫn khi tham gia vào các hoạt động trái pháp luật hoặc hành động cực đoan không?",
        options: ["Có", "Không"],
        traits: ["extreme", "unconventional"]
    },
    {
        question: "Bạn có thích thử thách các quy tắc xã hội hiện tại và đi ngược lại chuẩn mực không?",
        options: ["Có", "Không"],
        traits: ["rebellious", "controversial"]
    },
    {
        question: "Bạn có cảm thấy hứng thú với việc tham gia vào các hoạt động mạo hiểm và có tính chất phi pháp không?",
        options: ["Có", "Không"],
        traits: ["adventurous", "illegal"]
    },
    {
        question: "Bạn có thích những công việc và hoạt động mà mọi người thường coi là không hợp pháp hoặc không đạo đức không?",
        options: ["Có", "Không"],
        traits: ["daring", "scandalous"]
    },
    {
        question: "Bạn có cảm thấy hào hứng với lối sống phiêu lưu và ngoài vòng pháp luật không?",
        options: ["Có", "Không"],
        traits: ["adventurous", "outlaw"]
    },
    {
        question: "Bạn có thích thử thách và làm những điều bất hợp pháp để đạt được mục tiêu của mình không?",
        options: ["Có", "Không"],
        traits: ["bold", "illegal"]
    },
    {
        question: "Bạn thích làm việc trong môi trường nào nhất?",
        options: ["Trong một hầm bí mật đầy các thiết bị kỳ lạ", "Một văn phòng với bức tranh của các nhân vật kỳ dị", "Trong một căn phòng bị phong ấn bởi ma thuật", "Làm việc từ một chiếc thuyền ma"],
        traits: ["mysterious", "creative", "secretive", "unconventional"]
    },
    {
        question: "Khi đối mặt với vấn đề, bạn thường giải quyết như thế nào?",
        options: ["Dùng phép thuật để làm biến mất vấn đề", "Gọi điện cho một người bạn thần bí", "Tạo ra một cạm bẫy kỳ quặc để giải quyết vấn đề", "Sử dụng một chiếc máy thời gian để quay lại và làm lại từ đầu"],
        traits: ["creative", "collaborative", "daring", "innovative"]
    },
    {
        question: "Bạn yêu thích hoạt động nào trong thời gian rảnh?",
        options: ["Dùng bí thuật để đọc suy nghĩ của người khác", "Thí nghiệm với các phép biến hình kỳ lạ", "Ghi lại những hiện tượng siêu nhiên", "Tham gia vào các cuộc đua bí mật của các sinh vật huyền bí"],
        traits: ["research", "creative", "social", "daring"]
    },
    {
        question: "Bạn có thích lãnh đạo một nhóm trong những tình huống bất thường không?",
        options: ["Rất thích, đặc biệt là khi nhóm của bạn là những sinh vật huyền bí", "Có thể, nếu họ là những nhà khoa học từ hành tinh khác", "Cần một chút thời gian, nếu họ là những nhân vật từ các câu chuyện cổ tích", "Không thích, đặc biệt là khi bạn phải chiến đấu với những con quái vật"],
        traits: ["strategic", "commanding", "charismatic", "innovative"]
    },
    {
        question: "Bạn cảm thấy thế nào khi làm việc trong một môi trường đầy những bí mật ma thuật và sự kiện kỳ lạ?",
        options: ["Rất thoải mái, tôi là người quản lý của một thế giới bí ẩn", "Có thể làm việc, nếu có một chiếc đũa thần để giúp đỡ", "Cần thời gian làm quen, đặc biệt là với những sinh vật lạ", "Khó chịu, vì tôi không thích những điều không thể giải thích"],
        traits: ["mysterious", "enigmatic", "charismatic", "strategic"]
    },
    {
        question: "Bạn thích tạo nội dung như thế nào?",
        options: ["Tạo video hài hước và thú vị cho YouTube", "Sáng tạo các bản DJ remix chất lượng cao", "Phát trực tiếp các trò chơi video hấp dẫn", "Sản xuất nhạc điện tử và âm thanh đặc biệt"],
        traits: ["creative", "social", "innovative", "daring"]
    },
    {
        question: "Khi bạn gặp khó khăn trong công việc, bạn thường tìm kiếm sự trợ giúp từ đâu?",
        options: ["Gửi yêu cầu trợ giúp tới cộng đồng mạng", "Tìm kiếm ý tưởng từ các nhà sản xuất nội dung khác", "Gọi cho các chuyên gia trong lĩnh vực của bạn", "Thực hiện một cuộc khảo sát trực tuyến"],
        traits: ["collaborative", "analytical", "creative", "innovative"]
    }
];



const careerElements = [
    {
        "name": "Nhà khoa học",
        "traits": ["analytical", "methodical", "detail-oriented", "curious", "research-focused"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà văn",
        "traits": ["creative", "expressive", "imaginative", "observant", "detailed"],
        "prefix": "Nhà"
    },
    {
        "name": "Kỹ sư phần mềm",
        "traits": ["logical", "detail-oriented", "problem-solving", "technical", "innovative"],
        "prefix": ""
    },
    {
        "name": "Thiết kế đồ họa",
        "traits": ["creative", "artistic", "visual", "innovative", "detail-oriented"],
        "prefix": ""
    },
    {
        "name": "Bác sĩ",
        "traits": ["empathetic", "dedicated", "detail-oriented", "analytical", "patient"],
        "prefix": ""
    },
    {
        "name": "Chuyên gia marketing",
        "traits": ["strategic", "communicative", "creative", "analytical", "persuasive"],
        "prefix": "Chuyên gia"
    },
    {
        "name": "Giáo viên",
        "traits": ["patient", "knowledgeable", "communicative", "encouraging", "organized"],
        "prefix": ""
    },
    {
        "name": "Nhà sản xuất phim",
        "traits": ["creative", "organizational", "leadership", "innovative", "collaborative"],
        "prefix": "Nhà"
    },
    {
        "name": "Phóng viên",
        "traits": ["curious", "persistent", "observant", "articulate", "investigative"],
        "prefix": ""
    },
    {
        "name": "Nghệ sĩ biểu diễn",
        "traits": ["expressive", "charismatic", "creative", "energetic", "adaptable"],
        "prefix": ""
    },
    {
        "name": "Chuyên gia tài chính",
        "traits": ["analytical", "detail-oriented", "strategic", "organized", "mathematical"],
        "prefix": "Chuyên gia"
    },
    {
        "name": "Nhà báo",
        "traits": ["investigative", "articulate", "persistent", "curious", "objective"],
        "prefix": "Nhà"
    },
    {
        "name": "Bếp trưởng",
        "traits": ["creative", "meticulous", "organizational", "innovative", "team-oriented"],
        "prefix": ""
    },
    {
        "name": "Phi công",
        "traits": ["responsible", "decisive", "focused", "technical", "calm-under-pressure"],
        "prefix": ""
    },
    {
        "name": "Nhà thiết kế thời trang",
        "traits": ["creative", "trendy", "detail-oriented", "artistic", "innovative"],
        "prefix": "Nhà"
    },
    {
        "name": "Kinh doanh",
        "traits": ["entrepreneurial", "strategic", "decisive", "risk-taking", "motivated"],
        "prefix": ""
    },
    {
        "name": "Chuyên gia an ninh mạng",
        "traits": ["technical", "problem-solver", "analytical", "detail-oriented", "innovative"],
        "prefix": "Chuyên gia"
    },
    {
        "name": "Nhà nghiên cứu",
        "traits": ["analytical", "detailed", "methodical", "curious", "persistent"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà vật lý học",
        "traits": ["methodical", "inquisitive", "analytical", "detail-oriented", "logical"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà sinh học",
        "traits": ["curious", "analytical", "detailed", "methodical", "research-focused"],
        "prefix": "Nhà"
    },
    {
        "name": "Đạo diễn",
        "traits": ["creative", "leadership", "organizational", "visionary", "collaborative"],
        "prefix": ""
    },
    {
        "name": "Nhà tâm lý học",
        "traits": ["empathetic", "observant", "analytical", "patient", "communicative"],
        "prefix": "Nhà"
    },
    
    {
        "name": "Chuyên gia tư vấn",
        "traits": ["analytical", "empathetic", "strategic", "communicative", "problem-solver"],
        "prefix": "Chuyên gia"
    },
    {
        "name": "Nhà nghiên cứu thị trường",
        "traits": ["analytical", "strategic", "detail-oriented", "research-focused", "communicative"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà tiên tri cà phê",
        "traits": ["mystical", "intuitive", "perceptive", "creative", "eccentric"],
        "prefix": "Nhà tiên tri"
    },
    {
        "name": "Giám đốc tổ chức bí mật của các chú hề",
        "traits": ["secretive", "strategic", "charismatic", "playful", "organizational"],
        "prefix": "Giám đốc"
    },
    {
        "name": "Kỹ sư thiết kế thời gian",
        "traits": ["innovative", "technical", "futuristic", "adaptive", "visionary"],
        "prefix": "Kỹ sư"
    },
    {
        "name": "Nhà sản xuất ánh sáng từ vũ trụ",
        "traits": ["creative", "cosmic", "innovative", "artistic", "mysterious"],
        "prefix": "Nhà sản xuất"
    },
    {
        "name": "Chuyên gia chăm sóc động vật từ hành tinh khác",
        "traits": ["compassionate", "interstellar", "knowledgeable", "adaptable", "innovative"],
        "prefix": "Chuyên gia"
    },
    {
        "name": "Người điều khiển cảm xúc của những con búp bê",
        "traits": ["emotional", "creative", "technical", "empathetic", "unconventional"],
        "prefix": "Người điều khiển"
    },
    {
        "name": "Thợ sửa chữa bánh xe thời gian",
        "traits": ["mechanical", "inventive", "detailed", "adaptive", "timeless"],
        "prefix": "Thợ sửa chữa"
    },
    {
        "name": "Nhà nghiên cứu bí ẩn của các sinh vật kỳ lạ",
        "traits": ["analytical", "curious", "mysterious", "innovative", "methodical"],
        "prefix": "Nhà nghiên cứu"
    },
    {
        "name": "Đại sứ của các nền văn hóa huyền bí",
        "traits": ["diplomatic", "cultural", "charismatic", "enigmatic", "strategic"],
        "prefix": "Đại sứ"
    },
    {
        "name": "Nhà chế tạo đồ chơi ma thuật từ những giấc mơ",
        "traits": ["creative", "magical", "imaginative", "innovative", "delightful"],
        "prefix": "Nhà chế tạo"
    },
    {
        "name": "Nhà địa lý",
        "traits": ["detail-oriented", "analytical", "research-focused", "curious", "methodical"],
        "prefix": "Nhà"
    },
    {
        "name": "Lập trình trò chơi",
        "traits": ["creative", "technical", "problem-solver", "innovative", "collaborative"],
        "prefix": ""
    },
    {
        "name": "Nhà xã hội học",
        "traits": ["analytical", "observant", "research-focused", "empathetic", "detail-oriented"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà văn hóa học",
        "traits": ["research-focused", "creative", "analytical", "observant", "cultural"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà thơ",
        "traits": ["creative", "expressive", "imaginative", "observant", "emotional"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà sản xuất âm nhạc",
        "traits": ["creative", "technical", "collaborative", "innovative", "detail-oriented"],
        "prefix": "Nhà"
    },
    {
        "name": "Diễn viên",
        "traits": ["charismatic", "expressive", "adaptable", "creative", "energetic"],
        "prefix": ""
    },
    {
        "name": "Người dẫn chương trình",
        "traits": ["charismatic", "communicative", "energetic", "adaptable", "persuasive"],
        "prefix": ""
    },
    {
        "name": "Nhà vật lý trị liệu",
        "traits": ["empathetic", "dedicated", "patient", "detail-oriented", "communicative"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà báo điều tra",
        "traits": ["curious", "persistent", "observant", "analytical", "investigative"],
        "prefix": "Nhà"
    },
    {
        "name": "Chuyên gia pháp lý",
        "traits": ["detail-oriented", "analytical", "strategic", "persuasive", "knowledgeable"],
        "prefix": "Chuyên gia"
    },
    {
        "name": "Nhà nghiên cứu y sinh",
        "traits": ["analytical", "dedicated", "research-focused", "methodical", "detail-oriented"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà nghiên cứu giáo dục",
        "traits": ["analytical", "creative", "research-focused", "observant", "detailed"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà thiết kế web",
        "traits": ["creative", "technical", "innovative", "detail-oriented", "problem-solver"],
        "prefix": "Nhà"
    },
    {
        "name": "Chuyên gia công nghệ thông tin",
        "traits": ["technical", "analytical", "problem-solver", "innovative", "detail-oriented"],
        "prefix": "Chuyên gia"
    },
    {
        "name": "Nhà nghiên cứu lịch sử",
        "traits": ["analytical", "detailed", "research-focused", "curious", "methodical"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà hóa học",
        "traits": ["analytical", "methodical", "detail-oriented", "research-focused", "technical"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà bảo tàng học",
        "traits": ["curious", "detailed", "research-focused", "observant", "methodical"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà tạo mẫu tóc",
        "traits": ["creative", "artistic", "detail-oriented", "innovative", "fashionable"],
        "prefix": "Nhà"
    },
    {
        "name": "Chuyên gia trang điểm",
        "traits": ["creative", "artistic", "detail-oriented", "fashionable", "innovative"],
        "prefix": "Chuyên gia"
    },
    {
        "name": "Nhà thiết kế nội thất",
        "traits": ["creative", "detail-oriented", "artistic", "innovative", "organizing"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà đầu tư",
        "traits": ["strategic", "analytical", "risk-taking", "decisive", "entrepreneurial"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà khảo cổ học",
        "traits": ["analytical", "curious", "detailed", "research-focused", "methodical"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà chính trị",
        "traits": ["strategic", "diplomatic", "persuasive", "leadership", "analytical"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà nghiên cứu xã hội",
        "traits": ["analytical", "observant", "research-focused", "empathetic", "detail-oriented"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà thiết kế trò chơi",
        "traits": ["creative", "technical", "innovative", "problem-solver", "collaborative"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà sản xuất truyền hình",
        "traits": ["creative", "organizational", "collaborative", "leadership", "innovative"],
        "prefix": "Nhà"
    },
    {
        "name": "Khủng bố",
        "traits": ["chaotic", "disruptive", "extreme", "unpredictable", "dangerous"],
        "prefix": ""
    },
    {
        "name": "Đĩ",
        "traits": ["scandalous", "provocative", "unconventional", "rebellious", "controversial"],
        "prefix": ""
    },
    {
        "name": "Ăn cướp",
        "traits": ["daring", "illegal", "bold", "adventurous", "rebellious"],
        "prefix": ""
    },
    {
        "name": "Cướp biển",
        "traits": ["adventurous", "rebellious", "daring", "unconventional", "outlaw"],
        "prefix": ""
    },
    {
        "name": "Thủ lĩnh đội quân ngoài hành tinh",
        "traits": ["strategic", "commanding", "charismatic", "innovative", "otherworldly"],
        "prefix": "Thủ lĩnh"
    },
    {
        "name": "Giám đốc quỹ trăng lưỡi liềm",
        "traits": ["mysterious", "enigmatic", "charismatic", "strategic", "secretive"],
        "prefix": "Giám đốc"
    },
    {
        "name": "Kỹ sư biến hình",
        "traits": ["innovative", "creative", "technical", "adaptive", "futuristic"],
        "prefix": "Kỹ sư"
    },
    {
        "name": "Nhà thơ vũ trụ",
        "traits": ["poetic", "imaginative", "cosmic", "philosophical", "expressive"],
        "prefix": "Nhà thơ"
    },
    {
        "name": "Chuyên gia giải mã ngôn ngữ người ngoài hành tinh",
        "traits": ["linguistic", "analytical", "creative", "curious", "interstellar"],
        "prefix": "Chuyên gia"
    },
    {
        "name": "Người điều khiển đàn robot",
        "traits": ["technical", "musical", "innovative", "organized", "robotic"],
        "prefix": "Người điều khiển"
    },
    {
        "name": "Thợ sửa chữa máy bay thời gian",
        "traits": ["mechanical", "inventive", "detailed", "adaptive", "timeless"],
        "prefix": "Thợ sửa chữa"
    },
    {
        "name": "Nhà nghiên cứu thuật toán tâm lý học",
        "traits": ["analytical", "psychological", "innovative", "methodical", "curious"],
        "prefix": "Nhà nghiên cứu"
    },
    {
        "name": "Đại sứ hành tinh",
        "traits": ["diplomatic", "cultural", "strategic", "charismatic", "intergalactic"],
        "prefix": "Đại sứ"
    },
    {
        "name": "Nhà chế tạo thực phẩm ma thuật",
        "traits": ["creative", "culinary", "magical", "innovative", "delightful"],
        "prefix": "Nhà chế tạo"
    },
    {
        "name": "Nhà quản lý hầm bí mật",
        "traits": ["mysterious", "secretive", "strategic", "innovative", "creative"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà điều hành cuộc đua của sinh vật huyền bí",
        "traits": ["social", "daring", "creative", "charismatic", "strategic"],
        "prefix": "Nhà"
    },
    {
        "name": "Chuyên gia thí nghiệm với phép biến hình",
        "traits": ["creative", "research", "innovative", "experimental", "analytical"],
        "prefix": "Chuyên gia"
    },
    {
        "name": "Nhà sáng tạo phép thuật thất truyền",
        "traits": ["creative", "mysterious", "unconventional", "innovative", "strategic"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà phát minh thiết bị kỳ lạ từ tương lai",
        "traits": ["innovative", "daring", "strategic", "creative", "technological"],
        "prefix": "Nhà"
    },
    {
        "name": "Chuyên gia tư vấn cho các thế lực bí ẩn",
        "traits": ["collaborative", "empathetic", "analytical", "mysterious", "strategic"],
        "prefix": "Chuyên gia"
    },
    {
        "name": "Nhà điều phối các cuộc phiêu lưu của các nhân vật cổ tích",
        "traits": ["charismatic", "strategic", "creative", "social", "innovative"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà hoạch định các cuộc chiến với quái vật",
        "traits": ["strategic", "commanding", "innovative", "daring", "tactical"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà phân tích siêu nhiên và thần bí",
        "traits": ["analytical", "mysterious", "research", "creative", "strategic"],
        "prefix": "Nhà"
    },
    {
        "name": "Chuyên gia điều hành những cuộc đua thời gian",
        "traits": ["strategic", "daring", "innovative", "creative", "analytical"],
        "prefix": "Chuyên gia"
    },
    // Nghề nghiệp phổ biến
    {
        "name": "YouTuber",
        "traits": ["creative", "social", "daring", "innovative", "charismatic"],
        "prefix": ""
    },
    {
        "name": "DJ",
        "traits": ["creative", "innovative", "social", "charismatic", "energetic"],
        "prefix": ""
    },
    {
        "name": "Streamer game chuyên nghiệp",
        "traits": ["social", "daring", "creative", "entertaining", "innovative"],
        "prefix": ""
    },
    {
        "name": "Nhà sản xuất âm nhạc",
        "traits": ["creative", "innovative", "strategic", "technical", "analytical"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà phát triển ứng dụng di động",
        "traits": ["analytical", "innovative", "strategic", "technical", "creative"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà thiết kế trò chơi video",
        "traits": ["creative", "daring", "innovative", "technical", "strategic"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà văn tiểu thuyết khoa học viễn tưởng",
        "traits": ["creative", "research", "innovative", "imaginative", "analytical"],
        "prefix": "Nhà"
    },
    {
        "name": "Người dẫn chương trình truyền hình thực tế",
        "traits": ["charismatic", "social", "creative", "entertaining", "strategic"],
        "prefix": "Người"
    },
    {
        "name": "Nhà nghiên cứu xu hướng thị trường",
        "traits": ["analytical", "strategic", "innovative", "research", "observant"],
        "prefix": "Nhà"
    },
    {
        "name": "Nhà sáng tạo nội dung trực tuyến",
        "traits": ["creative", "social", "innovative", "engaging", "technical"],
        "prefix": "Nhà"
    }


];

let currentQuestionIndex = 0;
const userTraits = [];
const answeredQuestions = new Set(); // Để lưu trữ các câu hỏi đã được trả lời
let currentCareerSuggestion = ''; // Biến lưu nghề nghiệp cân nhắc hiện tại
let testEnded = false; // Biến kiểm tra trạng thái của trắc nghiệm

const MAX_TRAITS = 10; // Giới hạn số lượng traits

// Hàm render câu hỏi
function renderQuestion() {
    if (testEnded) return; // Nếu trắc nghiệm đã kết thúc, không render thêm câu hỏi

    const questionContainer = document.getElementById('question-container');
    const nextButton = document.getElementById('next-button');

    if (currentQuestionIndex >= questions.length) {
        displayResult();
        return;
    }

    // Tìm câu hỏi tiếp theo chưa được trả lời
    let q;
    do {
        q = questions[currentQuestionIndex];
        if (!answeredQuestions.has(currentQuestionIndex)) {
            break;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            displayResult();
            return;
        }
    } while (true);

    // Đánh dấu câu hỏi hiện tại là đã được trả lời
    answeredQuestions.add(currentQuestionIndex);

    questionContainer.innerHTML = `
        <div class="question">
            <p>${q.question}</p>
            ${q.options.map((option, i) => `
                <label>
                    <input type="radio" name="answer" value="${i}">
                    ${option}
                </label>
            `).join('<br>')}
        </div>
    `;

    nextButton.style.display = 'block';
}

// Hàm xử lý câu hỏi tiếp theo
function nextQuestion() {
    if (testEnded) return; // Nếu trắc nghiệm đã kết thúc, không xử lý thêm câu hỏi

    // Xóa nội dung console
    console.clear();

    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const answerIndex = parseInt(selectedAnswer.value);
        const traits = questions[currentQuestionIndex].traits;
        const selectedTrait = traits[answerIndex];
        
        // Kiểm tra và duy trì số lượng traits trong giới hạn
        if (userTraits.length >= MAX_TRAITS) {
            userTraits.shift(); // Xóa phần tử cũ nhất nếu đã đạt giới hạn
        }
        userTraits.push(selectedTrait); // Thêm trait mới vào danh sách

        console.log(`Trait được chọn: ${selectedTrait}`);
        console.log(`Tất cả traits hiện tại: ${userTraits.join(', ')}`);

        // Hiển thị các traits hiện tại và các nghề liên quan trong console
        displayTraitsAndCareers();

        // Cập nhật gợi ý nghề nghiệp sau mỗi câu hỏi
        currentCareerSuggestion = getCurrentCareerSuggestion();
        const careerElement = document.getElementById('current-career');
        if (careerElement) {
            careerElement.innerHTML = `Nghề nghiệp cân nhắc hiện tại là: <strong>${currentCareerSuggestion} :)</strong>`;
        } else {
            console.error('Không tìm thấy phần tử với id "current-career".');
        }

        // Kiểm tra xem nghề nghiệp có được dự đoán 5 lần liên tiếp không
        if (checkCareerRepeat()) {
            // Nếu đã đạt điều kiện, dừng trắc nghiệm và hiển thị kết quả
            return;
        }

        // Cập nhật câu hỏi mới
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            displayResult(); // Nếu không còn câu hỏi, hiển thị kết quả cuối cùng
        } else {
            renderQuestion(); // Hiển thị câu hỏi tiếp theo
        }
    } else {
        alert('Vui lòng chọn một đáp án!');
    }
}

// Hàm xử lý sự kiện phím
function handleKeyPress(event) {
    const key = event.key;
    
    // Nếu nhấn phím 1, 2, 3, hoặc 4
    if (['1', '2', '3', '4'].includes(key)) {
        const index = parseInt(key) - 1;
        const options = document.querySelectorAll('input[name="answer"]');
        
        // Đánh dấu tùy chọn tương ứng
        if (options[index]) {
            options[index].checked = true;
        }
    }
    
    // Nếu nhấn Enter
    if (key === 'Enter') {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (selectedAnswer) {
            nextQuestion();
        } else {
            alert('Vui lòng chọn một đáp án!');
        }
    }
}

// Đăng ký sự kiện keydown
document.addEventListener('keydown', handleKeyPress);

// Hàm kiểm tra nghề nghiệp lặp lại
function checkCareerRepeat() {
    const careerCounts = {};
    userTraits.forEach(trait => {
        careerElements.forEach(element => {
            if (element.traits.includes(trait)) {
                const career = element.name;
                careerCounts[career] = (careerCounts[career] || 0) + 1;
                if (careerCounts[career] >= 5) {
                    endTestWithCareer(currentCareerSuggestion);
                    return true; // Kết thúc sớm nếu đạt điều kiện
                }
            }
        });
    });
    return false; // Không đạt điều kiện
}

// Hàm kết thúc trắc nghiệm với nghề nghiệp phù hợp
function endTestWithCareer(career) {
    const result = document.getElementById('result');
    result.innerHTML = `Dựa trên kết quả trắc nghiệm, không còn nghi ngờ gì nữa, nghề nghiệp phù hợp với bạn chắc chắn phải là: <strong>${career} :)</strong>.`;
    document.getElementById('question-container').innerHTML = '';
    document.getElementById('next-button').style.display = 'none';

    // Ẩn phần tử "Nghề nghiệp cân nhắc hiện tại"
    const careerElement = document.getElementById('current-career');
    if (careerElement) {
        careerElement.style.display = 'none';
    }

    // Đánh dấu rằng trắc nghiệm đã kết thúc
    testEnded = true;
}

// Hàm lọc từ trùng lặp liên tiếp
function removeConsecutiveDuplicates(text) {
    const words = text.split(' ');
    const filteredWords = [];
    for (let i = 0; i < words.length; i++) {
        if (i === 0 || words[i] !== words[i - 1]) {
            filteredWords.push(words[i]);
        }
    }
    return filteredWords.join(' ');
}

// Hàm gợi ý nghề nghiệp hiện tại
function getCurrentCareerSuggestion() {
    const careerTraits = {};

    // Tính điểm cho từng nghề nghiệp dựa trên các traits hiện tại
    careerElements.forEach(element => {
        careerTraits[element.name] = 0;
    });

    userTraits.forEach(trait => {
        careerElements.forEach(element => {
            if (element.traits.includes(trait)) {
                careerTraits[element.name]++;
            }
        });
    });

    // Lấy các nghề nghiệp có điểm cao nhất
    const sortedCareers = Object.keys(careerTraits)
        .sort((a, b) => careerTraits[b] - careerTraits[a])
        .filter(career => careerTraits[career] > 0);

    // Lấy tối đa 3 nghề nghiệp hàng đầu
    const topCareers = sortedCareers.slice(0, 3);

    // Loại bỏ các từ trùng lặp liên tiếp và xử lý tên nghề nghiệp
    const careerParts = [];
    topCareers.forEach((career, index) => {
        let careerName = career;

        // Giữ nguyên các từ "Nhà", "Chuyên gia", "Người", "Giám đốc", "Thủ lĩnh" nếu ở đầu, loại bỏ nếu ở giữa
        const prefixes = ["Nhà", "Chuyên gia", "Người", "Giám đốc", "Thủ lĩnh","đội quân","Kỹ sư"];
        prefixes.forEach(prefix => {
            if (index > 0) {
                careerName = careerName.replace(new RegExp(`^${prefix}\\s+`), '');
            }
        });

        if (!careerParts.includes(careerName)) {
            careerParts.push(careerName);
        }
    });

    let combinedCareer = careerParts.join(' ');
    combinedCareer = removeConsecutiveDuplicates(combinedCareer);

    // Viết hoa chữ cái đầu tiên và viết thường các chữ cái còn lại
    let finalCareer = combinedCareer.charAt(0).toUpperCase() + combinedCareer.slice(1).toLowerCase();

    return finalCareer;
}

// Hàm hiển thị kết quả cuối cùng
function displayResult() {
    if (testEnded) return; // Nếu trắc nghiệm đã kết thúc, không hiển thị kết quả

    const result = document.getElementById('result');
    if (currentCareerSuggestion) {
        result.innerHTML = `Dựa trên kết quả trắc nghiệm, nghề nghiệp phù hợp với bạn chắc chắn là: <strong>${currentCareerSuggestion} :)</strong>.`;
    } else {
        result.innerHTML = 'Không thể xác định nghề nghiệp phù hợp. Vui lòng kiểm tra lại các câu hỏi và lựa chọn.';
    }
    document.getElementById('question-container').innerHTML = '';
    document.getElementById('next-button').style.display = 'none';

    // Ẩn phần tử "Nghề nghiệp cân nhắc hiện tại"
    const careerElement = document.getElementById('current-career');
    if (careerElement) {
        careerElement.style.display = 'none';
    }

    // Hiển thị các traits hiện tại và các nghề liên quan trong console
    console.log('Các traits hiện tại:', userTraits);
    const traitsSet = new Set(userTraits);
    console.log('Các nghề nghiệp có traits hiện tại:');
    traitsSet.forEach(trait => {
        console.log(`Traits: ${trait}`);
        careerElements.forEach(career => {
            if (career.traits.includes(trait)) {
                console.log(`- ${career.name}`);
            }
        });
    });
}

// Hàm hiển thị các traits hiện tại và các nghề liên quan trong console
function displayTraitsAndCareers() {
    console.log('Các traits hiện tại:', userTraits);
    const traitsSet = new Set(userTraits);
    console.log('Các nghề nghiệp có traits hiện tại:');
    traitsSet.forEach(trait => {
        console.log(`Traits: ${trait}`);
        careerElements.forEach(career => {
            if (career.traits.includes(trait)) {
                console.log(`- ${career.name}`);
            }
        });
    });
}

// Khởi tạo ứng dụng khi tải trang
window.onload = function() {
    renderQuestion();
    document.getElementById('next-button').style.display = 'block';
};