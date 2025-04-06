/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2SVnWesvUU6PsEviu9nvZ8Jo7DNvvCha89x4UJZpiXdouzTwDg3TjGEeDcoVkqqLtcuUfvUfvgLKxroKc1b8FhBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o8PcgzdZR7qRWXDJD3FeU8P1QeJS7kcqPuFQ4gCB5sGX6ucFGCCCjyghBdhrGA6TpLH3ZwbTSgu8xQm6uh9XCdA",
  "key1": "43YuUeCqBR7bJawAkjj2iAVKAgLQY7Lbh3m39fLYZ2jZ36XKvgUExGCqosKTVeWXrBsBxTp2QFMp9Lon1q5rHmyo",
  "key2": "2crkycwqdCR6NUiAQnWUAszw2AYzWubh9aANg1t8fbhVXWMJFqGSPnZCkpHMijGGhnJNAU5oTEjk5ze2gX2cTDSq",
  "key3": "xbab34ezbzU3zeRrnw6yxzgXME4LokV8NFG2AgwZbQZHkjnaK8hz3nxPhUwx5qd8p3iRSMdPqqho47NeRsnXNvx",
  "key4": "44qgV1iAJiyTnEURrFnoAprWL9C6u2cCcCFEPncQgv4uBgf58XYip7cBNRcZ6yASWzKswCc8X8JGBud47tXxcnmy",
  "key5": "4he9PAwUYWF5GuYWZ63mzj5HnM76bDc5EKy8Xo9RrF9LMEADdGb6BguaBC1KHcd9GLEGokL12nRQXsW4aE2yG63F",
  "key6": "52aNd9eYgjasNmF15mzGkq7QpfcJAd7Nzxuj9Lo7cfxuRfd6r4Ff52dq3LMtjopgrRwuDjS8ZDdnrGYDSNLuKXCA",
  "key7": "4YMu5KJKjjDCUhQqmSCW49H1J2mVUHPodj8rH8DjQvoTKkbDd5t6cBZYbFVju44eRQKxTyTqDPfKY3XcYHHsRaG9",
  "key8": "2Ppzcfz7TUdD9s2WQkTmK4bhkFMQS7jmTKNd5VouQCGk3RKuiKaL89Mz1i8CHBg4KYTuMCzch3vHffhuVwJjuoYf",
  "key9": "5WRG2NMyqhBSf2q7Ptt6d1XeVMywbZnqSJLBkXBcJ2gP8gYLfibzaKQBfA2X661qRoa7XTF5kd1iCqts1EVH7E1b",
  "key10": "67jxAi4uFasUURVmgjuaaFk7yxR9NGBFJt6f1S2oTBVwYWbPNq8nApxrcmsRGTcMEGkDx6KL9qZTQArFSMMbzpvt",
  "key11": "3BLm7HZZe42WN73He535Jb4ZghVPMAeVBYYXoQCPaAkM1ZjCPAkbWxbdfUD2GhWRppgMQdiewnSKNW1jv5FVWPNQ",
  "key12": "urCuerNd1AVQz3MTH76h8RseBQMAS9RkkFgqRdpLQQ9GyifGMuvki78SoUxTck6272aNRSivkjfy5kQunm8s9gR",
  "key13": "3eBq6qxY4Eq6JkKKSTB1u5eoELNEZowfy5Cw7hLPTbEJS8G5JqDcx2E7WE1iW8GMBgef58qFdpGV8XYHoRg2NU41",
  "key14": "2B6fMRJwBAFWBSbMyWkzmSGKUFCi5iRrSw9krXHk69rM6g9RtUALQUZdE8K52Yu4ML7iaUWKe5BHvNWrNHRqy5aQ",
  "key15": "krmd2zegmdMJAQvvu41eiiHSR1MtbmocBkMaGcaHm2L1XMTt43Wr3ycZcYi9C92M7n3SGRyFBiAjLe3WkoYrE4a",
  "key16": "46TEhB5xrSnVLWnymwAi2XJh4mbfi8QP15MHgu6mynF1gT5f9QR9JQNvW4JcHmECb1qpHmKPLpuPvrcvqe7hdyX9",
  "key17": "2p1xtrn91JzL7LBrDgBDTLk5mFYzMjzwkzbseyFXKeuJxEduuF6Jujmf2vxJPUCrAGy3jeQ6L55aww4eDyPP6N1g",
  "key18": "28uaBFhMie1bhj2KSGypRhB3yrsCLyBNKmx3c7n2gyz1F8Lksfhto4Pt6QZ9RPzWzZgU1wqD3RGjCnHptCga31KB",
  "key19": "5VPfgterMiUYUB7k1ZoQXSGR5BVtD9qeSj9KzeVGJRT7fTfCkJ1cXjyuHbeKeEUATQnxA1kZ6Ewk69xcUHytihoM",
  "key20": "5N1Lfzn7Lgvqb4MrQ3om7SFHSeRZH3hQABogxczT1LVmcTzqErvwwqvCwDmhYayScmzA5nEctxYtH5zoRsaPM44M",
  "key21": "4sCXnDR5CWkKW6iHz1kL9u6tebviNYaaZjzSERa6Smidkydu7vNpwmbqnLLcFZUTDHjaxKXPQByveNffGZJfauHC",
  "key22": "4uVAzrDx1EZZrmmxbCY1L32eGps7TzeBztVAEPLjHscJZMLebQAoQ779rbQadVg4r3edVeLph4ekXUm49aZReWM1",
  "key23": "5UardLwdrJwfpneVaMkbZskBJYRTgKKjmgv3XHXhfNz587dtRqUwPmsuaKxecE21J8Wu4ppFSJ3n3n3otunmvnvo",
  "key24": "5RzqDN3egT48aBeEwEF47ZMwNzjQtofgbQNu69UCtRHHwmHX6HtHcpsC5Wej3hcCVYqZkHv9A5C2D9UMbo3ZCj4A",
  "key25": "3ykPRmywceQUqEryUvH9FqzRMDV1fkj44cjaFscEvPCRB7bmiZ6g4CvJbZwoWPQp9nAD88MZN15KoqCicdkor8jD",
  "key26": "keRjANG1Qqe8YKiRvzzuVYRR5oquLQWMcX6kxz635RbjW3MJhoafdN7xj7FEg9fzFwTaQFFtmxGkUDcAcKTgaqy",
  "key27": "bHP7AYu4eWXQ3ztjh9HzJ8Cr2rQqs1ECarhTFw12uDbbthvaYTiaxu9gNwzTYPh51Ci9WZmSJdDAhhsmbp4JZk9",
  "key28": "2bDahhxHjCFD7tUxX7pR9aKMPevUKrsGHyXeAo3aUdU6WHXMQ5sMECp8BjjH7EFr2Q2C7zkJUbAm9ixv2Wn2hVWA",
  "key29": "2rH4wBqgv99LQgcv58Jts8GCYvpuBdQjgg2JjYQ2HK2PKtkxeod4VuEfnKayu6BHVFqKkeHmdUP1WB9CGFwLSSRi",
  "key30": "5W8DZ3hwBzkQMFqfz2h4YNmvficcFCnHDDvWH1vztP7MbmCswibWNm7JMmJYkw2AE6K8eJNgyXZGeGLhuCeUVUbo",
  "key31": "xBvm8MPsGnwhw6eFJ2opcL51qdf4PD9p5dEQ6MYXxpzFcoPMkY1ngtKzZWZmYXaFGq44fwhYkP3EpcZAK4k4bgL",
  "key32": "4ZMJAXM24S3CRKJDKxrVrhok8qi54dEjRtHQcsi6vk1xxri1eFVzEsUXFPSvNUxGJEBtEgE26peSzEXbwwFirLCx",
  "key33": "57TWtoDXwLQZ3XcMpp4kdg3nKsZwo7zAqWxhMtGeHeMmhwdGZVmET5PSXJrCpjTuPKQxTutcVswHoQc41khjRc8H",
  "key34": "4yPwDjAfCyZh6DZFLoWqpKVG5pcZ4xSAbMX344WM8v6m45EXdwtFfSb32LUSTjoy1Zje5DKyGQpPgyF3XtAbTnb2",
  "key35": "2o8y3PdgtSrJD9U5eAewgUhMvg4imnBP15birYREwN6fSB6uoYBopqEospSHQgykibMn27FVuEm8eXPKBDM8SENU",
  "key36": "4ruMRYB8ENPtitLAn5kuhVGD6KMCEWcHtp7si1ZbpN5pQxGVtm2Z7KGF1WjpQ3DPveo73SFfUzTGmo3pRj7eno37",
  "key37": "42M5TS5X8dyMcFVhbkZLt9gXY9efiYSyp89RdrcqNjTPH7rcXGjnAcQ4Q5jUA8wcDU382UqN6THzkLRZa71adXJu",
  "key38": "bu5pmprqnFzHdgTMdAsWLFqtG6qt5p4oCcw1LhuWGZiDKzsKfULbdmu1vdjiwfT9cTs9bKTsa2S3iLVayPr5efr",
  "key39": "5HfP6tJscNwmATe3v7JABY5BFBHr5fgTV8b5i2o8WnYvnbRWpf4ddQdEhHDf7f4tQKcctw9wBZ84dCpnstr4XjNa",
  "key40": "fBC3CVpEwd6cZ18L9Bqyz9ZFnnQd3HcySA7r5nnj4bSGqbGQx1UZhcphbGeQLb8KyVqKD9pUSqucAkib3h7s6vs",
  "key41": "eLiJ4JgqUWbDWDK7gJTbNNb9zmVJVe4RL4Pa1PiM1c476ndwKR9vjskBcrbC8VcsUzPnoi72QiR1sGxg5B5hTCc",
  "key42": "hED2F92h61rUWAeK1rMgNh3YPmivyY8bN98edJFdDSCtYHffr7xMo5gKJy2RmxZzvDUuarN37kwrPE5d9CUBich",
  "key43": "3sgKHPcGhuN3JAeFab51WsezaJEsLdzTnLoK5kkqXjJD4sszy1XsMBL7FhCwFExR6qMs6dccrtsDYWg67HrFpepg",
  "key44": "3aPBULDd6Gxm9skgXx2AbJnMS5uab1YmBQnMbfYVee1JXGTdZTC5QPUBQPhrKX17BFFiURBrpiU4YHHXM2EVNwy9",
  "key45": "43U5WCXSgHXELDvjZX2xU7ksX12cZPxZDkzXWycDRJZKB4xkic8hznS3CdPosa4LT1AcnUg9hMbgpHhvpzQAZsQd",
  "key46": "2tmDA3S8TPXXGm1rVeAScNXhtJ1uuZrWPgysgGJHfuwaTDzYZToafdX7tzE8YoAqhCBYS6KQq9UvTEKSNq4ccX23"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
