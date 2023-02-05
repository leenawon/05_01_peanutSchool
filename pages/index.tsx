import { useInView } from 'react-intersection-observer';
import { AnyTime, Bookmarks, CheckedBook, DownloadButton, DownloadNow, Footer, InfiniteScrollBooks, Introduction, Layout, LiveVideo, MainImage, ReadingDiary, SlideComments } from '../components';

export default function index() {
  const { ref: MainImage_Ref, inView: MainImage_Inview } = useInView({
    threshold: 0,
  });
  const { ref: Introduction_Ref, inView: Introduction_Inview } = useInView({
    threshold: 0,
  });
  const { ref: LIVE_REF, inView: Live_Inview } = useInView({
    threshold: 0,
  });
  const { ref: CheckedBook_Ref, inView: CheckedBook_Inview } = useInView({
    threshold: 0,
  });
  const { ref: AnyTime_Ref, inView: AnyTime_Inview } = useInView({
    threshold: 0,
  });
  const { ref: ReadingDiary_Ref, inView: ReadingDiary_Inview } = useInView({
    threshold: 0,
  });
  const { ref: InfiniteScrollBook_Ref, inView: InfiniteScrollBook_Inview } =
    useInView({
      threshold: 0,
    });
  const { ref: DownloadNow_Ref, inView: DownloadNow_Inview } = useInView({
    threshold: 0,
  });
  return (
    <>
      <Layout />
      <MainImage wRef={MainImage_Ref} wInView={MainImage_Inview} />
      <Introduction wRef={Introduction_Ref} wInView={Introduction_Inview} />
      <LiveVideo wRef={LIVE_REF} wInView={Live_Inview} />
      <CheckedBook wRef={CheckedBook_Ref} wInView={CheckedBook_Inview} />
      <AnyTime wRef={AnyTime_Ref} wInView={AnyTime_Inview} />
      <ReadingDiary wRef={ReadingDiary_Ref} wInView={ReadingDiary_Inview} />
      <InfiniteScrollBooks
        wRef={InfiniteScrollBook_Ref}
        wInView={InfiniteScrollBook_Inview}
      />
      <Bookmarks />
      <SlideComments />
      <DownloadNow wRef={DownloadNow_Ref} wInView={DownloadNow_Inview} />
      <Footer />
      <DownloadButton />
    </>
  );
}
