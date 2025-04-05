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
    "29QHRyzCrLJZyrDHPkexxKnZWFfssTAumSgpmcVsEA3zgBhqAdb6GbrF7FS3TY6Fdix7Xhvohg3U98G19WzYRf9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZTGgvgBYoVMxciigc3hEz2ztBkmahpGRJpmWZL4UbR9HJ2U5ogkwEAUFBun6fDv6sQ7r8LA6bMtPC92fsSMWwMV",
  "key1": "5JRvWLPGgMD49sL9fLvbzBE86Z6r7QvzL8T3jTLCT51r3bEFvjaq3HAn2oUkzv5okdei2A4S1kaLdtSELvBZuVBW",
  "key2": "4a8qzWqUMnMESAwEtnoHVU93hvqHNcGYQq9NHPVS22cvsoCm9fAx9ZhahJbTQgUjXZiPjT9QU4AM6dnEAe1usSFB",
  "key3": "WHsbUoQDY9UuPADKhLXt465MuLSPs3Wauo9QSuc9JrozstB7Jiqicbhixh2EQTCcTuPRPoC75VWW5BLoQAE2FL1",
  "key4": "2BfvFXeSn4gmggJJY6MqAMe7hmK2sF4MMZoGQgsUe16cUSwz6hnFnGEDDvLRuwGsXUJPAXAZqCua8m871EPLiEX5",
  "key5": "HYEmZ164iaSns7ohUNvGdWA5wEXnVbqsHb9oYfuGqeh7XuJct6G36UVh2VBa4hk6ZYtdyfpDPr4HKnreX9n6R9Q",
  "key6": "4qD6KxVUU2JuDERDGEdG3sP5qUkcFMVXFFL5LP1aoNdi2UGQmZb2e75hUBvv2jyVaxF9GT5B6sGWeGYr1eMovb6c",
  "key7": "4SerGRgyg1WS8ddGz7EdXrxzqqWNcCsaQiAQT47K4TQH247kShwF83YiDoj6aueXWoafaGBZypg8nkARP882tS6H",
  "key8": "2qHrnYT1QgPsmKWesWcXJSC766rc5fheREAYAt1DNbFNG1ev7ouQJy2m6GTPmU83YoE99V5qskq2zjGdkMRSusqo",
  "key9": "5KLP52JKtNWX79Sw8Ht6LeSr2ifAwgb6rCikARhh485uowSEyGAxqf8oKZWafrziJdBmyEngBv9CnZp2VPkVADxA",
  "key10": "2BEqQe8jPdzwjyABK1eS7ccMt4bhETfd2pPd2CmFztKqqKWCzHDpnuSxjkZUAQ8iFTbaNuSTurjry3ZoXJtPvqrm",
  "key11": "2Z9F5FvyT7HZ2eFnS1nD4Wt2tiDnPczeraJUZewSZ9RAem1DYYEZuNQboegjtLjA8SUa77inehJNwPoJPdk9kUmr",
  "key12": "4BM9rqZN1idsA1EcT4RSdwj15z616RCKvsQePDAKduxX9yr3GY9bjSL925vGxFmQA4hh69K7cSTWZGeVMqRJuQL1",
  "key13": "3v74E7v9RScMVnMknUebAHaLKwLHrULgyWxiSAHJ86KqS5Ke6EZhJNySFoE3MgW9N1DLWP9GUvuvH7JFVkdEn6JD",
  "key14": "5tEaa28RReWfPvfj34jmnyChnbbZ5DNmsTCwHLkJKAiraEaTKt1hfkQV9LFdTqxAcapvS2DQrfoEMATunzp4NPV4",
  "key15": "32ziFFPArB9Dq7uKRTn82FzY4rJqNX8AvEmPvVkZiVek3ybSwu9ZZsmq7NX1g13ttp6Pct4ugghvgoFf9UMQ9EaR",
  "key16": "3miW83poYceyvvWYurAeUvDr36KN7b8YWyenDTSXWyAcQN7ydyG8HRfShCxgFN6QvYap7VnhwmLLTC3uUnDJ5uAp",
  "key17": "2JAbQ6BTqwxgNXEb1m755oR6qbkR1CegjMM2H6wepPy6Ycau95RQNL4YVUoRMXf8CcL5UsreD3WbS5fjKZuD8fMC",
  "key18": "2QtZaCnZB3btzNepMaDDP6uan1CdbYiiE2Fi3unwjuAEDCg8RBZCf5UJL53vnHT4pJWep9ziPnUWHfkbQUDt1sKe",
  "key19": "xGKTnonT4G1L86ByhFWQp8z4cAWtnoCoBas4gu1Q5tuKJuA1nBpfBDtymgE85U1UdXGB65GoQ16tAC8pLtdfeN2",
  "key20": "qZhB6mdUQz5zqp9uU5e7xBkY58m56Ag4Dkm3dMV4erBcf8Zhz5zhRXUhxLp6WnjQBscFutBagn6cy6UBSUQ636K",
  "key21": "5itTKPzwAmyFsZCHSsfhjnaqGm7ynkJNLrbEPUyE2JBWfZE4wx6rUwEfqHaMFea7Doke5X8fS8AukWuEQXZM8gTn",
  "key22": "uZdXh7fngC3YeKus4hhZoceruZ9iJ8SCn6QoGrifobzTCze4YmCZJ3xhYk8buuofEG45iE1pzeaKMEBdRwi65mF",
  "key23": "295RVfzy4yriS7qYwP5x1Y6XUJMVP18aemUCQDJJ9eu9PibRf27oreh9qD1n84ETiGsAxmWkzMMtxQRxFJPiDHqB",
  "key24": "5a1VJAeFFPW789yNrrS3WgVTJ1jeN1UeWZKJ2eJRn7A6Y5MTrGXfvFiK5W4j9TSngEeFACBrsfyPDZZEgPBecqB3",
  "key25": "3KhMLZhxbkdmskGmhgKgGPkmQNPT2NpgQegyyo3gUyMY1arHLSvibFU3xxTXutrFhqwwa5maRCd9yJKVoaHtNHL5",
  "key26": "5VkFg7FGoin2pXpUAMhwDLgd9s3sdkzKR7iNutXVXTge7x2Lru8cSsYGqQ3xEiUVebetp9PkXuP6bgHNp6BQJqN7",
  "key27": "2FGEzwdxGnro4hsodUBQw87sVskjbNKcbHUERhAjfFAkSGeVvJCXLZW6NjaV45xxzKp9E6YpbEqjgeUm2arAcDQX",
  "key28": "3UNnwqpQo4F2AEeqkf6s5Tp85y6A2s4g8UvNPToDm1fHZ7oYZxLPRg3mLa93LRu4urSVu5j1A3bjcxSLvcUtbqWL",
  "key29": "f5dprPADnX4hsCkdzcqarRWb6BRCJC2z6jsFwLBNxy4Y7HaCjNsB9jBjX9zJXstEuqkFNsJGAwZsmwPQF5kCaSe",
  "key30": "4a1fW3Hb6L4rRPihVspKpb29Ed9crG2EuNNojve4roCLnRQApkL2KTYvdoPomaaVG3fEPfKRHe9kC69WrLoGzqMQ",
  "key31": "3RcK8yEnR9vvoR9KcLdbheNfDfD6HnTUJNnMoiDgyLp5Xw1QwP5uBPPvybvUhi7CnDT4LCm9YGJkW4yfGREtUdJX",
  "key32": "CRoBd7Va64VMDe5odGh6jSLFV8RVavWwZqvfWkxRr7c4HGCrvGDRU6caJVkif98nRdHYqz5N6zjw4zaTVEvbfUy",
  "key33": "2aXsy7aMavHgXKncSWxfhYDbSJRheKo8t2wyXAHUqguiA4SAtnXjR8vwcXegFoijRwez2cjwjuNLM2NQvniubmbF",
  "key34": "UkkeFxTNaqbJ7wfiy64MyWeHh1VvzoEcb1zQZdwo4Tzv8ECYQyNx6PJbojDtaKZ4U6rCKorgh2eDSdkHJp3jCgW",
  "key35": "5kQkLjDSH3xL5SbRF48xtrDJdQFWFfXVhXw37hZyzzJBVW4hCTw5Xdw6y6kX2pZSGMYEk4dLYTZrQhKU8KVsKit9",
  "key36": "4ktSh3Nm6hp2WjQhnuFRgdWej7wTGTEjXzNZdv57Mq4qFX7SeTatvTBqGQ8H2zV1ycAvAGR1h1rFaSudeYwRXSPn",
  "key37": "2RrYGsDXNak4zhm91cogfXfHNQdgoRx5xXuk7g3ZWJ8EHjGfx4mKBcAMDf2KTu8GNuN8JX5qYtkJxV8ri1B1v21f",
  "key38": "3t2GHhCXeiSdsw2KaKvQ76iuEu4NNUXzo1TgquPTpi4hUcr9qCAoy2r4j7HeVzbLMVPWeWHrptEF7nKqbT6ifPPF",
  "key39": "43nCR6NwWhQriXWdTtMnes3eAgtktWVtZ13anw4AaEjxDSfUhyPJWMmGfKrCRo2tbydWuhZB8rzJQXi3opmhV4CK",
  "key40": "2qFqYqS7Q9smJsNwh8SMzgdBxp6rWsi8CBVYSXsfHF7PXMTARtvxZRqm9aL61R3e8EZru9YfVuD15sfb7gfr4aA9",
  "key41": "4jVqunDEAWaqDWwRAv7xh4q7YspuCzLrnMgLDpdt1NBspKcyipokBJxdHdNpxb5N5XKSgiTFCzuRvGHo9adjP7bh",
  "key42": "48dxYPQCn62fRLkq9d8QEaZGPbJRp16tXwFWn2D8F1kfo1uk7zNAiqQkZ2mqXjteDeBEJthwSZy126mSvkokjoZZ",
  "key43": "4vm1mTtCxH96KLEXtBZ1KQhpWX2rPh3qexQdGJMQs3BfkiopB9chVxdkoBX9ZRaQHQpvaQTXQbh4CJufaQoxTJ8Z"
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
