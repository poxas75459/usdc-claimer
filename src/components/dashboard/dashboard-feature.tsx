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
    "4GybcdWEk5vsh3NiuuycyoXCBx3jG8M6z8kHGj7ywcEyk9hc1KZbCy4B972W4Hr2W1QrtgpHjRW38aVTeh9VUBcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28hRX2bBkxoudibpyu8idTx2rcZTTNxEm6Ntp2k1FsaF4Uos4HdGtneCszmgLPp1Pxsf84nVFp2be6DFwnHX1kg1",
  "key1": "2CuTBz6LnsW6h7GU8NPbDbX9jRB4zyJAuGNonpHwVGzyCgfYYyuZagnPKAeC2ZZTCohGRuVzSMVaUwWwnjy4sJQn",
  "key2": "4vJvPAtv8j64P7CQcNzU5rkZxnj5csKxvJHd2cNF7HwVNhrzbuJV4vn6g6prr3ctNChzTbg2vpJuwACMncT6Dp9p",
  "key3": "ouLcygu1CS9SGAX1W1tC1KxckzTbz7ztWvCQj4buvVvVU6NeF6nrBbCmJYxnTJMd4rLqWhoU7wNugHxkoDfNWbQ",
  "key4": "2pHgQw93Tt63B6HHvBhz4xpdhugyBaiTNm93oa3xnYCiaxXZRm3caQhjJPvrfM2czEKCvUtysNHriW4ZtWxXqBsW",
  "key5": "3Asm8Y3cypo424Cw5trwzWYYhmSe1PBq4SYW1tUdF7aare6UJXP7CBQnNQ38q31XZon2s6aenD5Fk3rhHMg3tufJ",
  "key6": "283HGYfBmQ61HbHKNBUhfv6jbWazFWHGhxzPtURoiRuMihXxRRZJp4x1RFT4orMSxFfcD11QjMtRkbMVYy2h6iGH",
  "key7": "5sEezTXmdqTFdQFDaeSdQBPBZDZvhySri28LHtnpjC42GLamWiRoFZLcnXwMj5nQUn8SuYNKFEf89jp5Awna9iJf",
  "key8": "26fbCHGH7ne4mpTVPdWsbXEeX45j31PpArUnTSosiZQsKeDMN8vb4X9YXFmNK668TjKx8yoQZ3oMUE9QED1xWV74",
  "key9": "4dSLDs5fgth241PmuqXyqxAkTpzn59AczobeQ443n5v98kQspHhmbuGGMRoHA43x7Hw6DGUVAKn5RLns9ycpYdRL",
  "key10": "5LtdoVGWZkpdXSP3P7eMi8jk5uuY6HH1SHQJNUE5W3vMNJodaJGT1bxCTqaGvViKX4ByUzYQVyoj7mKRWEPmBYxu",
  "key11": "38T7hL8YYqK5Aas1ebRHwroQdABCgESEWonSQPiPrrdhLZzwRhRhoevdQtRJb364Vjw8x6JZzM8SpFiTCtnQ2M2S",
  "key12": "2R1Hhz9TNJ5sQAnrHwSb8ASJpKLr1GZC4XtJ1CTEWB5CbMjYFYom5f5hUHuDAykpLPWNDF4F4HqiEB6hAj5fHGyf",
  "key13": "54crgBhR37VkzyCyWm1Tm9jv34vE5yDSFMYxcCm7xwKJcN5EFvAENLwrmLtoBf9bbwbXUXGtEbqGPVj4zSefzXCx",
  "key14": "3Hcq5FKp9WRkpvd61xJ6vUXEYHc31cAs7HSAFYgojyZCx9gFt91NT7t6zA2RHaMRL3wpTHv89WyChCGqPorjpF5y",
  "key15": "5hcu5D9EkFpmJ9qbXemyqnUUtT6X3kGUV4F8XJdRo4QdMku9yJTkJkWMTcaeZaMNdqLr6TGaAuAthrZeqmvpFdfP",
  "key16": "3UuTg28axcmXS4C7cRBFPyb6DMU7uUhWVt5RvNbT8JjscfBy7LgvrAUwNEivs99taYMrkFBNtyutBYr7aShxUicn",
  "key17": "fqN18ceqU9va3uXamX5sHeULSXktWEhYFfWT55Vr7BuCXCiGcE92cJdSDjG8op7aiyzMrZrBF9mg22kUqpYjAqj",
  "key18": "2A5GsJ4TReLTJABZgPUc5jz194FiNN3Cr6VyRavYrGmXQPMcuN1cUXdUYTC8NcRbzHabyNQcytzMhyE2DgeAvJd6",
  "key19": "2o3qrsKZ9LWEV7fvBTLqwf67SMdo2tTSqoTckpjGn1KcQMpgqiYEboP6qR29TbhzBbBG4dLUM3Ge53sHBg7kr688",
  "key20": "2EdZaWkbCz6wRW2NMfRLH6fS7mGa5zepkGcmemTiNHUQ8L7JraT6MacKaZHzfLEq63cgkbZcpfb9TSMGPbzouqDU",
  "key21": "5ALCGaP4WSK4ksVghaRgLYVvL8mMVr8m3d9LuWG3VmaiGvBKtam1WDuWkioUsDFFcgZJ9sbSxBMfsHK7U8b16FQY",
  "key22": "4GAkgtUWETFAosiUFEQ2kTkmUCuz5TzLexLPRB7TfbxXgZZPiGuxZ6aoapk2A3dXZcMd1De3vnP9ksWw5oaixQNc",
  "key23": "9ggepmbbCTJ3ckWU83cDBm34hTP9YpeB9UhGQzp73X1aZ6E31G1nbZr5P3Vuu1uAkAVnSchDtoe6o8dDM77KT7S",
  "key24": "4NK4ZcxBYYrdWEy6UH8HzXdsa9t3xvJJ1znfmn6XH9fGy1YwfeHPkJg5cHQhKyg5jzJiGeEr7epfUsFBmvK9npfJ",
  "key25": "B47QVEudcn32Lh5V7y4Nc6iZY5FcJySVpCZqs6JFJkAD9JXwuSBpQ3jzLnqf3TUxBgtej3CXD2B8eUiS8mz4HJY",
  "key26": "2g31VSPiGaYESdZse5b98VnKP1EvMQrJJoyVDwdkqvS3dNb3PtyswKLUHg7V7wdTqecDGy2z5qpWMd7d1h7KTApi",
  "key27": "3FD4kDcmrQVu8Eo8jHp5WVx6G3UBxPj6zBNk1bmXrqT8J4WKLJWqhJuSmur7bkNU4tAv6MuCUaR4rYFqXt9cxqnC",
  "key28": "3eHeNLDyZXJrasoJChs11qoshes4JVPrTLjf1cDH2B84paA6ovkcuSLXP3Y6intHecDHhxvLqiYyqhXR94KUMDPt",
  "key29": "4hLgryzBaEjYbKHahytjtSqCBL3VDsWiUkaXv7qBnArGZNF3tAZCa1FdTXhEoz1AUYxuQDomK4e3MspVpPZtTsgv",
  "key30": "4VpZdNAs9Qad7yENAZnG6TNVCHRhmoXsy9h8CD2irj73DeaNMETCu4So5mxMAbz1HEmoq3PesJkP7WuLbaQkgBQx",
  "key31": "jkKJkNM6E4sndEf5oXX2AeAr4zzjKzo2V7CCjgkJb7WJPELytKzbaje6jMf5iBy3bmmrQwqF3Wi2YF1SysTnBBk",
  "key32": "3KqhBSHNAbFtm9iYJsuyUFQKAHjh9gdhCj9tHfqrtyeN6P3jp9nBsV7W5Aa87dUsB3BkDnoNeuW7S5EhLiZuoKcP",
  "key33": "2EcShJ5KzLQZ6abEoSgAgzZTNJh9n3NeqBSp8PZHgn1QpwDER6xFs7whmLAzqozngFaEmSAhogJdsJTDEMRVSGno",
  "key34": "5cYchzpSxiKW1mqSTp8v9tfF2YPQ3eDssqv2y5ko3SxxtwMygWF4AfRTBRF34B2LS7WjDYgFjLaVaG5RgdUpaw9q",
  "key35": "3uLURw6EupdaNQjRqzCCKAcYK54qfBZpRb4FNjVfSnL7RBfkuaU5bwHSm1v3LbU57kSzEDHZhP2E7VKf6SuWAizJ",
  "key36": "49JkiMJJocA2Pa4PyAGBLz3FfW31BKDphvUpTKPVqqDHKZy2EKn9m2JxgwNkYiDnxMosm8RK1eSBUmbBVi2ugGd6",
  "key37": "juqgQfnJ1vBv2VtAViQyoFDEjC78snsnB6CJWFaeCM1Vv1NuhomnREn5F2c9yG8go2fwC4eSzTsM4r8ctuy7wfd",
  "key38": "496PSFQ9a9wYrxSyhSNexr7YWLG8Qh1aDrpXM6EyKgbnV1m2R5n6LFVr1TtaBzTLRh4d5Bj7oH878ckDiALPkdbX",
  "key39": "4QE2Ch25CGXBQ2D6zA8hyH35JmNf6Bg8RY5iMBvXFME1awNbD3SMwwDKwNucLHNvsDqFdvUk96qfApcjAYSo2hza",
  "key40": "4Eem6acA5jMuv5ouxqbVPsubQcg2YWFHFxkehHsWsHwbhiwksFZ24CE999G1ZzKaUEJKDJK9appK5KW52FiBDcv9",
  "key41": "3rr5fvQZvrSGCQ2hyMcWpB1niYWgNjXYyH448ZGEdEDRzFvTrYv9NyqapYTESq4za2XpcFU53eQ2zJARCLehstzU",
  "key42": "4MUsSEeoGFnuXL19jV7Mkd8y5bHiJeveR3YFTKjBNFqoKoFXhsHZfotBcffxYJy4aEGy8UFuC2ptpCBBbccDN2RP",
  "key43": "4WZSs9fW5Xsjy54TV6ggRqAChcicycrCvG9xzpJK5BThWMWYADZtgHGj84z1MjEYHNyKxHKmcwcTCvRcjbRgxqnR",
  "key44": "4R6fARifsuHXBqHFipmnBeQ33CRCGr8QKnDffg5F2kjAtL8gdKK83PLsvzmcFuNpb3VLkT1s2XKiGya73df2nAbA",
  "key45": "44YQbkL78yHrztJSmgZ7LNXmC3riHXtENf2jGvS2phu318amfbHXoV6ZMbAiTUkXPtBUKsm6vLRYtmxtw91Ti283"
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
