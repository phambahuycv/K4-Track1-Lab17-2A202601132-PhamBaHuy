# Báo Cáo Thực Hành Lab 17 — Finding and Validating Pain Points

**Mã môn học / Khóa**: K4 - Track 1 - Day 17  
**Học viên thực hiện**: Phạm Bá Huy  
**Mã học viên (MHV)**: `2A202601132`  
**Tên nhóm**: **Chicken Plus**  
**Thành viên nhóm**:
1. **Phạm Bá Huy** (MHV: `2A202601132`) — Lead / Interviewer chính (Lượt phỏng vấn 1)
2. **Nguyễn Văn Tuấn Anh** (MHV: `2A202601813`) — Note-taker & Interviewer (Lượt phỏng vấn 2)

**Case study đã chọn**: *AI Support Radar trên nền tảng học trực tuyến VLearn (Khảo sát chuyên sâu trải nghiệm và bế tắc của Học viên - Learner)*

---

## Mục lục tài liệu
1. [Phần 1: Thông tin cá nhân và nhóm](#phần-1-thông-tin-cá-nhân-và-nhóm)
2. [Phần 2: Problem Hypothesis Brief (Kết quả Chặng 1)](#phần-2-problem-hypothesis-brief-kết-quả-chặng-1)
3. [Phần 3: Conversation Guide phiên bản cuối (Đã sửa sau Chặng 4)](#phần-3-conversation-guide-phiên-bản-cuối-đã-sửa-sau-chặng-4)
4. [Phần 4: Practice Reflection (Chặng 4)](#phần-4-practice-reflection-chặng-4)
5. [Phần 5: AI Support Log](#phần-5-ai-support-log)
6. [Cấu trúc Thư mục Nộp bài](#cấu-trúc-thư-mục-nộp-bài)

---

## Phần 1: Thông tin cá nhân và nhóm

- **Họ và tên học viên**: Phạm Bá Huy
- **Mã học viên**: `2A202601132`
- **Tên nhóm**: **Chicken Plus**
- **Thành viên & Phân công thực tế**:
  - **Phạm Bá Huy**: Phỏng vấn học viên Teo (Mã HV: `2A202601814`) — Chủ đề kẹt bài tập React Hooks / useEffect.
  - **Nguyễn Văn Tuấn Anh**: Phỏng vấn học viên Thành (Mã HV: `2A202601428`) — Chủ đề kẹt giải thuật Cây (Tree Algorithm) trên VSCode; kiêm Note-taker.
- **Case study lựa chọn**: Khảo sát bế tắc học tập và rào cản tìm kiếm hỗ trợ của Học viên (Learner) trên nền tảng học trực tuyến VLearn.

---

## Phần 2: Problem Hypothesis Brief (Kết quả Chặng 1)

Chuỗi logic khám phá vấn đề:  
> **Solution → Change → Actor → Situation & Job → Pain → Evidence**

### 1. Gỡ Solution Directive & Xác định Capability trung tính
- **Solution Directive nguyên văn**:  
  > *"Xây dựng tính năng AI Support Radar trên hệ thống VLearn: Sử dụng mô hình Machine Learning/AI để tự động phân tích hành vi học tập, điểm số quiz, tần suất nộp bài của học viên, phát hiện các học viên có nguy cơ rớt môn/bỏ cuộc (at-risk learners), tự động đẩy danh sách vào Support Queue và sinh các gợi ý can thiệp (intervention suggestions) để Giảng viên/Coach nhấn nút gửi hỗ trợ kịp thời."*
- **Capability trung tính (Neutral Capability)**:  
  > Khả năng nhận diện sớm những học viên đang gặp bế tắc hoặc có dấu hiệu chững lại trong tiến độ học tập, đồng thời kích hoạt sự trợ giúp/gợi ý đúng lúc và đúng ngữ cảnh trước khi học viên nản lòng và từ bỏ khóa học.

### 2. Chuỗi thay đổi kỳ vọng (Expected Change Chain)
- **Solution** (Cơ chế phát hiện bế tắc & gợi ý trợ giúp theo ngữ cảnh)  
  $\rightarrow$ **Học viên nhận được sự hỗ trợ/gợi ý từng bước đúng lúc khi gặp bài khó hoặc code lỗi**  
  $\rightarrow$ **Học viên hiểu bản chất, vượt qua rào cản kiến thức, không bị dồn ứ bài tập, duy trì nhịp học**  
  $\rightarrow$ **Outcome** (Tăng tỷ lệ hoàn thành khóa học, giảm tỷ lệ drop-out, nâng cao mức độ hài lòng).

### 3. Ma trận Actor & Lựa chọn đối tượng điều tra
- **Ma trận 4 bên liên quan**:
  - **Learner (Học viên)**: Người trực tiếp đối mặt với bài tập khó, sự cô độc khi tự học và đưa ra quyết định tiếp tục hay bỏ cuộc (*Primary Pain Owner*).
  - **Instructor (Giảng viên)**: Soạn bài, theo dõi lớp học quy mô lớn, chịu trách nhiệm về chất lượng đào tạo chung.
  - **Coach / TA (Trợ giảng)**: Giải đáp bài tập hàng ngày, hỗ trợ kỹ thuật và động viên học viên.
  - **Platform VLearn**: Đơn vị vận hành kinh doanh, tối ưu tỷ lệ hoàn thành khóa và vòng đời khách hàng (LTV).
- **Actor nhóm chọn điều tra**: **Learner (Học viên)**.
- **Lý do chọn**: Học viên là người trực tiếp trải nghiệm nỗi đau. Nếu không hiểu sâu rào cản tâm lý, khó khăn khi tự xoay sở và lý do thực sự khiến học viên nản chí, mọi giải pháp can thiệp từ phía Giảng viên hay Hệ thống đều sẽ bị trật mục tiêu.

### 4. Situation & Job (JTBD)
- **Situation & Job**: Khi gặp phải một bài tập khó hoặc không hiểu kiến thức trọng tâm trong khóa học trực tuyến (ví dụ: React Hooks, Giải thuật Cây), **Học viên** đang cố **tìm cách hiểu bản chất vấn đề và sửa lỗi để hoàn thành bài tập đúng hạn** bằng cách **tua lại video bài giảng, tra cứu Google và hỏi các công cụ AI (ChatGPT, Gemini)**.
- **JTBD Hypothesis**:  
  > *"Khi gặp bài tập khó hoặc bị vướng mắc kiến thức trong lúc tự học trực tuyến, tôi muốn nhanh chóng nhận được sự gợi ý/giải thích đúng trọng tâm và từng bước, để có thể tự hiểu bản chất, hoàn thành bài tập và tiếp tục theo đuổi khóa học."*

### 5. Pain Hypotheses (Các giả thuyết cạnh tranh)
- **Pain Hypothesis A (Rào cản tự xoay sở & Thiếu hỗ trợ đúng ngữ cảnh - Help-seeking Barrier & Context Gap)**:  
  Khi gặp bài tập khó trong khóa học trực tuyến, **Học viên** gặp khó khăn trong việc **thấu hiểu bản chất và sửa lỗi** vì **học online không có ai ngồi cạnh để hỏi ngay, trong khi tự tra cứu/hỏi AI ngoài (ChatGPT) thì câu trả lời quá chung chung, đưa luôn đáp án hoặc phát sinh thêm kiến thức lạ chưa học**, dẫn đến **tốn 30–60 phút loay hoay, ức chế, bị hổng kiến thức dây chuyền và dần bỏ dở khóa học (silent drop-out)**.
- **Pain Hypothesis B (Khoảng cách năng lực & Quá tải nhận thức - Content Gap & Cognitive Overload)**:  
  Khi gặp bài tập khó trong khóa học trực tuyến, **Học viên** gặp khó khăn trong việc **tiếp thu kiến thức** vì **nội dung bài giảng quá nhanh hoặc thiếu bài tập bắc cầu phù hợp với trình độ nền tảng của họ**, dẫn đến **dù có cố gắng xem lại nhiều lần họ vẫn không hiểu và tự kết luận rằng mình không đủ khả năng học tiếp**.
- **Giả thuyết chọn điều tra trước**: **Pain Hypothesis A**.

### 6. Evidence Map (Bằng chứng kiểm chứng)
| Cần kiểm tra | Evidence làm nhóm tin hơn | Evidence làm nhóm nghi ngờ hoặc bác bỏ |
| :--- | :--- | :--- |
| **Situation có thật** | Học viên kể lại chi tiết lần bị kẹt ở bài tập/chủ đề cụ thể gần đây (React Hooks `useEffect`, Giải thuật Cây trên VSCode). | Học viên chỉ xem video lý thuyết, không làm bài tập; hoặc thấy bài tập luôn dễ dàng. |
| **Pain có ý nghĩa** | Cảm giác nản, bức bối khi mất 20–40 phút không tiến triển; nhận ra mình bị thiếu kiến thức; hổng bài trước kéo theo kẹt bài sau. | Thấy kẹt bài là bình thường; sẵn sàng bỏ qua bài khó để học tiếp mà không ảnh hưởng gì. |
| **Workaround tồn tại** | Xem lại video 3 lần, lên Google gõ lỗi state, hỏi ChatGPT/Gemini bóc tách từng input/output, tạm bỏ qua để tối học lại. | Gặp bài khó là tắt máy đi ngủ ngay, không tìm bất kỳ cách nào để tự gỡ. |
| **Consequence tồn tại** | Tốn 40-60 phút cho một lỗi nhỏ; hổng kiến thức liên kết (bài 3 hổng thì bài 4-5 kẹt tiếp); bỏ qua kiến thức và quên luôn sau khóa học. | Dù gặp bài khó vẫn hoàn thành 100% khóa học; không ảnh hưởng tiến độ học tập. |
| **Pattern có lặp** | Tình trạng bế tắc xảy ra thường xuyên ở các môn lập trình/kiến thức có tính liên kết xâu chuỗi. | Tình huống chỉ xảy ra 1 lần duy nhất do lỗi mạng hoặc bài tập bị lỗi đề thi. |

### 7. Problem Hypothesis chốt & Solution Parking Lot
- **Problem Hypothesis chốt**:  
  > *"Học viên tham gia các khóa học lập trình trực tuyến trên nền tảng VLearn khi gặp bài tập thực hành phức tạp thường mất nhiều thời gian (30–60 phút) bế tắc trong cô độc vì không có người hướng dẫn trực tiếp, trong khi các công cụ tự xoay sở hiện tại (Google, ChatGPT) thường đưa luôn đáp án hoặc giải thích bằng thuật ngữ mới gây hoang mang, dẫn đến sự nản lòng, dồn ứ lỗ hổng kiến thức liên kết và âm thầm bỏ học."*
- **Solution Parking Lot**:
  1. *Cơ chế gợi ý từng bước theo ngữ cảnh bài giảng (Socratic Hints AI)* — **AI**.
  2. *Kênh hỏi đáp nhanh cam kết có Trợ giảng phản hồi trong 30 phút (Fast SLA Q&A)* — **Không sử dụng AI**.
  3. *Tính năng Highlight trực tiếp đoạn video/slide khó hiểu để nhận giải thích nền tảng (In-video Contextual Explainer)* — **AI**.
  4. *Mô hình Bạn cùng tiến / Nhóm học tập ghép đôi (Peer Study Pods)* — **Không sử dụng AI**.
  5. *Khung giờ Office Hours trực tuyến cố định 2 buổi/tuần qua Zoom (Live TA Office Hours)* — **Không sử dụng AI**.

---

## Phần 3: Conversation Guide phiên bản cuối (Đã sửa sau Chặng 4)

### 1. Tiêu chí tuyển người & Recruitment Check
- **Tiêu chí**: Học viên đã tham gia ít nhất 01 khóa học lập trình/kỹ thuật trực tuyến và từng gặp tình trạng kẹt bài tập/khó hiểu bài trong vòng **30 ngày** gần đây.
- **Recruitment Check**:  
  > *"Trong vòng vài tuần qua khi tự học online, bạn có nhớ lần gần nhất mình gặp một bài tập hoặc kiến thức nào cảm thấy không hiểu, bị kẹt lại không?"*

### 2. Lời mở đầu chuẩn hóa (Introduction)
> *"Chào bạn, mình là [Tên], hiện đang thực hiện nghiên cứu thực tế về trải nghiệm tự học và những khó khăn thường gặp của học viên trong các khóa học trực tuyến. Mục tiêu của buổi trò chuyện ngắn hôm nay là để lắng nghe những câu chuyện và trải nghiệm học tập thực tế từ bạn, xem những lúc gặp bài khó hoặc vướng mắc thì bạn thường xử lý thế nào. Buổi trao đổi hoàn toàn mang tính chất học hỏi, không kiểm tra kiến thức và không đánh giá bất kỳ sản phẩm nào. Mọi chia sẻ chân thật của bạn đều là tư liệu vô cùng quý giá cho nghiên cứu của nhóm."*

### 3. Story Opener
> *"Kể mình nghe về lần gần nhất **bạn gặp phải một bài tập hoặc đoạn code/kiến thức mà bạn cảm thấy bị kẹt, không hiểu**? Bạn đang học bài gì và làm gì vào lúc đó?"*

### 4. Big 3 Questions & Probe Bank *(Phiên bản tinh chỉnh sau 2 buổi phỏng vấn thực tế)*

| STT | Điều cần học | Câu hỏi sẽ dùng (Anchor vào quá khứ) | Probe bank (Đào sâu câu chuyện) |
| :---: | :--- | :--- | :--- |
| **1** | **Thời điểm nhận biết & Cảm xúc khi bế tắc** | *"Khi đang ở ngay trong khoảnh khắc không hiểu đó, bạn cảm thấy thế nào? Bạn nhận ra mình bị kẹt ngay lúc đó hay sau bao lâu mới biết?"* | • *"Lúc xem lại video lần 1, lần 2, lần 3 bạn nghĩ gì trong đầu?"*<br>• *"Cảm xúc lớn nhất lúc đã dành 20-30 phút mà code vẫn không chạy là gì?"*<br>• **[Bổ sung sau Chặng 4]** *"Lúc đó vì sao bạn không hỏi ai khác (như Giảng viên hay bạn bè)?"* |
| **2** | **Workarounds & Giới hạn của công cụ hỗ trợ (Google / AI)** | *"Khi nhận ra mình không hiểu, việc cụ thể tiếp theo bạn đã làm là gì? Bạn đã thử những cách nào?"* | • *"Khi tra Google hoặc hỏi ChatGPT/Gemini, câu trả lời nhận được có giúp bạn hiểu bản chất không hay chỉ đưa ra đáp án?"*<br>• **[Bổ sung sau Chặng 4]** *"Có lúc nào câu trả lời của AI lại làm phát sinh thêm 2-3 vấn đề mới khiến bạn rối hơn không?"*<br>• *"Bạn đã mất bao nhiêu thời gian (10 phút, 40 phút hay cả tiếng) để tự gỡ rối?"* |
| **3** | **Cách tháo gỡ & Hậu quả dây chuyền của việc hổng kiến thức** *(Câu hỏi đáng sợ)* | *"Cuối cùng chuyện đó được giải quyết ra sao? Tình trạng kẹt bài tương tự có xảy ra thường xuyên ở các bài tiếp theo không?"* | • *"Nếu tạm bỏ qua để học tiếp, sang các bài sau (bài 4, bài 5) bạn có bị kẹt tiếp vì lỗ hổng bài trước không?"*<br>• *"Bạn thích một công cụ đưa ra luôn đáp án làm hộ, hay một gợi ý giải thích từng bước để tự hiểu? Vì sao?"* |

### 5. Ba phản xạ dữ liệu lệch (Deflect / Anchor / Dig)
- **Deflect (Khi user khen ngợi ý tưởng)**: *"Cảm ơn bạn! Để hiểu rõ hơn bối cảnh, cho mình hỏi hiện tại khi chưa có công cụ đó, lúc highlight đoạn không hiểu bạn đang tự xoay sở bằng cách nào?"*
- **Anchor (Khi user nói chung chung)**: *"Lần gần nhất chuyện đó xảy ra là ở bài học nào? Lúc đó bạn đã mất bao nhiêu phút để tự sửa?"*
- **Dig (Khi user đòi hỏi tính năng mới)**: *"Nếu có tính năng đó, nó giúp bạn giải quyết được nút thắt khó nhất nào lúc đang ngồi code một mình đêm khuya?"*

---

## Phần 4: Practice Reflection (Chặng 4)

Sau khi hoàn thành 2 lượt phỏng vấn thực tế với bạn **Teo (Mã HV: `2A202601814` - Huy phỏng vấn)** và bạn **Thành (Mã HV: `2A202601428` - Tuấn Anh phỏng vấn)**, nhóm rút ra các bài học phản tư cụ thể:

### 1. Câu hỏi nào đã giúp user kể một tình huống cụ thể?
> **Trả lời**:  
> Câu hỏi: *"Bạn có nhớ lần gần nhất, khi đang học một bài online, bạn gặp chỗ nào mà cảm thấy không hiểu, cảm thấy bị kẹt không? Bạn đang học bài gì vào lúc đó?"*.  
> Câu hỏi này đã lập tức kích hoạt ký ức trải nghiệm thực tế:
> - Bạn **Teo (Mã HV: `2A202601814`)** kể chi tiết về lần học video React Hooks `useEffect` mấy ngày trước, tự viết component form bị lỗi dữ liệu không cập nhật, xem lại video 3 lần và loay hoay 40 phút.
> - Bạn **Thành (Mã HV: `2A202601428`)** kể về lúc nghiên cứu giải thuật Cây trên VSCode trong tuần qua, cảm thấy bức bối mơ hồ vì không biết bắt đầu từ đâu.

### 2. Chỗ nào mình cần làm tốt hơn ở lần phỏng vấn thật?
> **Trả lời**:  
> 1. **Chuẩn hóa Lời mở đầu**: Trong lượt phỏng vấn 1, người phỏng vấn (Huy) đã mở đầu bằng một câu đùa không phù hợp (*"mình đến từ hành tinh xa lạ để tìm hiểu loài người"*). Cần sửa lại lời mở đầu nghiêm túc, chuyên nghiệp để tạo không khí tin cậy và tôn trọng người tham gia.
> 2. **Kỹ năng xử lý khi User Pitch Solution (Deflect/Dig)**: Ở cuối buổi phỏng vấn của Teo, khi Teo bắt đầu chia sẻ mong muốn về tính năng lý tưởng (*"mình cũng muốn có một công cụ... highlight chỗ không hiểu rồi hỏi luôn... chắc chắn mình sẽ dùng thử"*), người phỏng vấn đã không kịp thời dùng phản xạ **Deflect/Dig** mà để user cuốn theo mong muốn tương lai. Lần sau cần kéo user về hành vi quá khứ: *"Hiện tại khi chưa có công cụ đó, lúc highlight không hiểu thì bạn đang xoay sở bằng cách nào?"*.
> 3. **Duy trì khoảng lặng lắng nghe**: Cần giữ khoảng lặng 3-5 giây sau khi user trả lời để user có không gian bộc bạch sâu hơn về cảm xúc bất lực và sự cô đơn khi học online ban đêm.

### 3. Sau khi luyện, nhóm đã sửa Conversation Guide ở đâu và vì sao?
> **Trả lời**:  
> 1. **Bổ sung câu hỏi về Giới hạn của AI ngoài (ChatGPT/Gemini) ở Big 3 Question 2**:  
>    - *Bổ sung*: *"Khi hỏi ChatGPT/Gemini, câu trả lời nhận được có giúp bạn hiểu bản chất không hay làm phát sinh thêm vấn đề mới/đưa luôn đáp án?"*.  
>    - *Lý do*: Cả Teo và Thành đều cung cấp insight đắt giá: AI ngoài đưa ra code đáp án làm mất tư duy (Thành) hoặc dùng thuật ngữ lạ gây phát sinh thêm 2-3 vấn đề khác ngoài tầm hiểu biết của người mới (Teo).
> 2. **Bổ sung câu hỏi về Hệ quả dây chuyền của việc hổng kiến thức ở Big 3 Question 3**:  
>    - *Bổ sung*: *"Nếu tạm bỏ qua bài đó để học tiếp, sang các bài sau bạn có bị kẹt tiếp không?"*.  
>    - *Lý do*: Teo chia sẻ bế tắc lớn nhất của học online là kiến thức liên kết (bài 3 hổng thì bài 4, 5 kẹt tiếp), tạo thành vòng xoáy bế tắc tích tụ.

---

## Phần 5: AI Support Log

Bảng ghi chép vai trò của AI trong quá trình thực hiện Lab 17:

| Hạng mục | Chi tiết trải nghiệm thực tế |
| :--- | :--- |
| **AI đã giúp gì?** | • Hỗ trợ chuyển đổi từ Solution Directive sang Capability trung tính và xác lập chuỗi kỳ vọng thay đổi (Change Chain).<br>• Gợi ý bộ khung JTBD chuẩn mực và danh mục câu hỏi đào sâu (Probe Bank).<br>• Tổng hợp nhanh chóng dữ liệu phỏng vấn thô thành bảng Interview Record khoa học, làm nổi bật các exact quotes và insights cốt lõi. |
| **Điểm nào AI làm sai / hời hợt?** | • **Thiên lệch ban đầu**: Ban đầu AI mặc định phân tích theo góc nhìn của Giảng viên/Coach (người quản lý), bỏ qua người trực tiếp chịu nỗi đau là Học viên (Learner).<br>• **Bẫy hỏi giải pháp**: Các câu hỏi AI gợi ý ban đầu vẫn còn mang tính chất khảo sát ý kiến tương lai (*"Bạn có muốn một công cụ AI..."*) thay vì neo chặt vào hành vi quá khứ.<br>• **Giả định thiếu thực tế**: AI cho rằng học viên chỉ cần tài liệu là tự học được, trong khi thực tế phỏng vấn cho thấy học viên bị nghẽn vì **không biết mình thiếu kiến thức gì để mà hỏi** và **sự cô đơn khi học online không có ai chỉ điểm ngay**. |
| **Bạn đã tự sửa thế nào?** | • Yêu cầu chuyển dịch 100% trọng tâm nghiên cứu sang đối tượng **Learner (Học viên)**.<br>• Tự tay loại bỏ toàn bộ các từ khóa giải pháp (AI Support Radar, Support Queue) trong kịch bản phỏng vấn.<br>• Dựa vào 2 đoạn transcript phỏng vấn thật (Teo & Thành) để cập nhật chính xác các exact quotes, phân tích phản tư (Reflection) và tinh chỉnh Conversation Guide sát với thực tế học lập trình. |

---

## Cấu trúc Thư mục Nộp bài

```text
Track1_Day17_2A202601132_PhamBaHuy/
├── README.md                 # Toàn bộ báo cáo 5 phần hoàn chỉnh
└── interview/
    ├── notes.md              # Biên bản phỏng vấn thực tế của Teo (Mã HV: 2A202601814) & Thành (Mã HV: 2A202601428)
    └── recording-link.md     # Liên kết thư mục Google Drive chứa bản ghi phỏng vấn
```
