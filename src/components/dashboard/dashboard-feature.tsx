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
    "1YKR1ZcrSTwG7fTKvRR2MLay2DLbGsTq7CLr2Uc6Cv9WXq5WFCUN3vkz8XW7H1oAEBkbZFvRMkCvAUwnqEo4Svm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uUQvNAKHr1wdXkWJmrthj9j1hQPsRwUZhfUid29G2vYwyuZsNbFDzYT2UZtWCgGdwqrXxF6k6ZPgsqdaiou55vy",
  "key1": "3P2z164KQ5mKE9XCPn7H8r2DYYJNeU3D1o9wrE9MBge8BWKXKzsB88fWmsMrf3Ha23G2RrRcAXWuqQf5Z1oxcgMA",
  "key2": "5Sma3tas57VKssSm7r9u5bPJHpws3Hss58Zz5WrBHLfnekMNfXVKQkFY4MFhPk8f2Z3BL8jaXNKXu3re27x9aDg1",
  "key3": "4Skf72eTjsSZJ95XFWyMtok3aG7JBCagVvK9x7KtMksRaozXpFNKEEEpp3oPSR4iTZbv8eiPU6CH5V2ZqpwRxARU",
  "key4": "3zp9R5Hh7x8rqH5bxcTiFx2HYkrcTJrbqux3QJCQSUBbzVfQspLPppvSXxqRGaLWuzVKEa1fwqmUEXcebZKo1Fnd",
  "key5": "5xX82qQuvXzDusAVebSVPoFCcwi8W7YvZUa5NFbUsULQNUpeSvirAUZSP5Tk3cbgFTYW9JdbazVACDUF7HUbLYBz",
  "key6": "2q7qSykihg2RqZw7M3SZNjdxK8Si7mcaZMDmW5LnUwrgRK4mrjvd3GBGDrahzp1Z9JNBe8jFy9cJM6HxQ9UdJFRH",
  "key7": "4AP2H7eWXEZn6PJa6nonnZCiRBQ69B2D85o9oJ5ukBDxsZdEzcNNtRKo7Kp3G45kAjjVWPhHQHKJ1HGzm5FNcfMW",
  "key8": "5uMLpPuXtMvYwx6s9zpTAdYnvFrskmDgZ3mgPcbxYVf5vikyd77bERgjdwbqiYU2JuBGmoTXJvbueihkgGtQn963",
  "key9": "q3Soq7XpJoiMqDj1hULTV4CPprek5iLL2caUC7pEatDb9uo9SHXzPh95atGEHNLZtWaxeZMbdJtv36tqpANHq4K",
  "key10": "52zDCKaZq4H7RyKxwegS148sEoa9c2vpFcFiG49P9byh6wRG5jwiKa9XEtfRbd4rvAY21Nya3Y2qmFgdq7ABq4XX",
  "key11": "JWdaJPyrprKRTDiZervYyvUA9MfWkgt1TbEEpMGRmMKc3SDatvDzvuzA4pNwpd6xHyZa7G9Cs5gSzc5CYJLizN4",
  "key12": "5EwxhvaphMnsugAxcnxKa7WktjXiVHzdBHQcjKC8F2WFHU4R8Up87rnuHgxLuXPC4ejFSjKb2GRTY4EpEoxAXjFa",
  "key13": "4iC8LLyEV96UTUSBM3o2CT1aYNFEsymUXnkas4wDUNbCeyr1qMvGuEro2s3TEtkXJhZ9H3gCrrquxxdhKpy52im6",
  "key14": "2YuvMEQrCZtmhRQX7fnGBUDJU6ZXkve2efEzQhNC286VyY5GyppkCHgByq67K2RVKEJx9PMtkH3J5z331duwaMy3",
  "key15": "32uHg8Mo4rFYwxX44KFZsa6LNqb9z4kJh1ZFFHJFDrnG9YyNGfvDk5u2CFwutH4a1dzWHX3dchvM9Zz5B5Zh1nTk",
  "key16": "2Lp3qQGcszBhphPbnk6aygovt7nRx2LnNfUZuENBv8KDsF8XS7xQPNEVabj9ccqStnB5nceTBqSpZfr49VEtRTBv",
  "key17": "wVZ8gmCd4LACrVxoVcXEpw9decX5unwhDsRRdAEXFYne5RwUib94fE1QcdvGjCCfdMewhWFPV8L1hBLcU9Hx5EU",
  "key18": "2ziaA7EwWmZad4VLmxGn6irM8uRys9ETX2j5yP7fhDkWFXzGVozZbTD81Z9GLCnHidmNfiWEgd5iKgqBL2hGv2Fb",
  "key19": "5d2NdTXP1JGLMyQssFQSEGD476mHwQvCoGR3oc9ZbjBHf2vw9twPeXidrPG8jLRdRjxSnuyNwufbBEbuH4Wi2peP",
  "key20": "5jdEkMtUetBG5a7zdQe4QVntYqWvoRHHoPJh7XDEEePLG5mmnqMczVynQVcfPFpZ9x6RDbJjfmmHAjdnxwnJVJ8V",
  "key21": "3DsCvyiS6HVSw7RZfXGo59mKCqPiuDL5ZP8m6vbBB5wCSqLWcVvPkPWzzV6jAYs4R1qCm6Zq9gQSQ6Hw6FqfknGF",
  "key22": "3RwnGkUwZWEeSFLdASUZjAw3zTAumHewx9PB3MrTbmuee6NXGfmsGtU9EczyxL1bAeAPYAChS4MZFLW3MEVBeSQ",
  "key23": "38csdTWrR3VnWLy5tUnS2dRu4mLwBtrLhKzZRc4LRyqh24bo7aP57CVNdr2px6JDmTLh2ihBpwpSrtMQYuvrpaFR",
  "key24": "4b65sDNy9rKRAHFBjgMWhLf4SKPa9c6HMa5ffPNyUHGXVKnJc6ME49xywzYxnQfo4TexQ1zGdY1HwHoxFupLYFh9",
  "key25": "4gk29eeEUCsEwEa2jdaZvRNJYugpRWRHhbd9u9icw6bkWU3A4byr7uNq6KnmMutPNK6JuV1wGLEpQDUqd3F83WoA",
  "key26": "4FeVnNfYervTtuR31mvHUYpFv16VemHLRaNtFCMBAwhYu6dsobiaQVbPZ32xXLyQuarQ7vuuGT1R29TD28Ebt1iY",
  "key27": "2FRSm3sn933JEKHCwMCYoTXDViCvH9getgFLKVGn6PKTNYxGbTWPpDLTG6oiQrSNJLJVV4nFyMdumfN7LiRBS82M",
  "key28": "31GB4ic1fVFUqV67YPr3EzECxTgGabbTVUTZCchwqHP81o23K2ZrhjMcy9yifbH22WGecfQd8Rss7N9QtnbRnUZN",
  "key29": "5t8VgJzPMmozTZbDY8FXB6F1jFVTXPAaNuSDYMvXz2K8k9zbDp4DY5vyLV3xyJDHTuZcrrCo34tz26Ygr8evrmqt",
  "key30": "4RsJR6uciEWPiZmcquTo3Y9hgpgZjj1sGARopz4PmzGzmz9DzNNMt5MknSzwgFWkGV8eTPZcKJWTT3SAvHXZgbMH",
  "key31": "4dYXjwZghwVos9xKxhKoCmM5gx3tpFQK73PLNwYmB9WRkWUGmKqnihVg8c1pcSfNpr4TJMjY2Cs5wek8rjtvgE7V",
  "key32": "5R4irMtjCWmFtW8i4MwSEWgcRBmhcYzxfSWuMyjccymZhiAtyrEZMGZYZXzp8XG2WkpBEH6uvRapfuYHzTceqi4m",
  "key33": "Jqx5b8FLkiGywzfJPppQAVftQPT29UckiZvxHBCmV1uQANJRNyYDPiNN1L9qerrMMbnRVwnLLxh6j46eGyqNBQJ",
  "key34": "3yhvQsR6r3sc1aoTXyhev4HPHNop26sVRWL3rwZ3a3VKqpFTuLUMSwQWc3KCukb7qF6biBjrS8bEPw99aKDm97E7",
  "key35": "2pH7rgoRHPULSTNmLgo8vwy2wGAp1aeyv5yMwFkXsFgSewAhRUgeUtGzRWpaqBc7sQqJwx82xQNqX4XstouJJooY",
  "key36": "2vBGTAV764DpZ1s5utJR4ab54PHvUEbtQZ1r5tUcNT7AyqhpWaRW3xyZ39dPwBYcvXBkswmeCxCsErMwKHu1vQJ5",
  "key37": "32BKyKfbZ49rJmFphRLFofHY9t5RA5Ugwa6FfqFdeFRdgdpNPbyTvC8Yqc1KBD1RtWJsbSzw7D6T42bSCq4qBebR",
  "key38": "5UCgoLN4pQanF1diVBV4frkse5KNpxRpEyH5wJzmpG6E9kPPJpSD69AZdvHjvW2hZarRuDphehy9xsDBaZXRRTQS",
  "key39": "5AE557DGTAM1b2g5uaEgkBDPvzpaSJakxn9oFwnfrdwhHV4yrDaM6ktujtZ768DVZeywsaYf7d8NAGHFKM1eDuoE"
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
