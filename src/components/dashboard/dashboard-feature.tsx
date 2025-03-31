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
    "4UadP3XDMvYHRKjXqNnJWkh3NCGM4G1pshNd3vDExYfHsTZmdgowdEYGHdxyW7jMFPNVnwJaSV9mfCC4un7CVqeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QnFrRLGntFuXFMQVEMZV9aN1sn2b3B1wxN9i8dHXjoj7hBNmwrX5PANY2uA5Z2f18BtCy4Zxk2NYBSJ8wN6rCDB",
  "key1": "2XCoqkPNrUsmnHRoiVFWEaAaEthPxAMZ6twmMmiPCdYCxCZN3HFqVp6SAfRDDwD6N9iyB5VPmCc7DDCFo1FCGcfE",
  "key2": "674TMRNYHG9KHZmWaHJFFmvGR2nGfESprV6VhJQXwoRcXBedN4kw4aSZhLRseKF9ricwjWhy1AAsWjQMRzQGmcSw",
  "key3": "65GRBB4fmJ1tPY9pmtakEcW2ZEV7aQZ5F2NNErMe6uZZkUKyMwtJFQGyZSNg91WEN891JBrYBbAoiTE9Rm5ZpTvN",
  "key4": "3L7zgtRkdvYRemmFUncnDsVfUPnbh83indTJR8VEEHwU4yipQdqx5tApxyY14jmyjvh8D9uv5ymScETJznERBXZg",
  "key5": "2Y3USBKXx6JPRNvENA1sKBccLzjfWPKa9yYTf3TiErtSmDV4ckyQtp8uofphsa5nCipRx7k3SPfEHe8f93wE43mN",
  "key6": "4pU3T3fAYEXeijVYvTV1v2Dcu45Q4BwR8MQTyvGg4uxY8yVwU1mXfz2NCCjaX6unGqriWCAkDdT3L6cffa5mf9BV",
  "key7": "5TaumY4rncrsW41sjjQd67GDMmRkwh4JSyoi3hBTUGTSLRw4oZkcZC8U9NHG8nF51XPoB5dZW9Qn9dnyWyCHcLTn",
  "key8": "5UXypXBewSZAJozMSDR15u54hCM9kHrZ1jZ8eqhnJoULuGt1EjxE1UddfJpRjnE2oJYE68ewVaMbprVbHneW3ftH",
  "key9": "2hBrmAn4doWeTihtzaqiP4VMWcxkfkjMSYjaTkoQsS9GqX6WLU9zG2nDj2r1Wb9SFCwGVD1hjrfSdnktzfHk86xJ",
  "key10": "Mp53RG9vNQupsrQHqwajSaMTeXRLeof4tQpHJ2mtrMedaY5teA774pkwjNr4ADEUYiUMnJEn8F3o83GCdS6T8yL",
  "key11": "v3WEf5RAY3PSPNNCiwwoFhbmCmu8h2XpuueRtYmvyrWQQCpndHJy9V2UwWpHHkt6ZJ4aM5jJnR23satwTn6DXYY",
  "key12": "3imX8SpjqdCqLq8tQv7AX8NmAMZbDz5j6mgtjZjZaLNBZcuqFHaaTBeLr3ZFTvLP5k4HkF7hpYisCPUT66eYqRZ2",
  "key13": "3MPRZY3yKtQNc8nynAKf5qAZqinkcuGQdiWRqxTkEyT6HCb7CBPavimiDEDe9rGf7u3W2ci5iJpHUmpzTMGpF6Qa",
  "key14": "iME5YGwGLPs1RLhF76NdA5W9SAa5aHGjezYRYXYbTSsNK879Vpx4qQsPKuXFt1pnwThX8BmQP3rNL6fpRL7HDcm",
  "key15": "2qWMy2a9DXUstWLqJVYnMqg9sZW6fXBn4cJG5BnqgJPoL7iSuKkT5vdUhpRYD5Lc4Fjx2hnmQKWCqqkrFBZks5V",
  "key16": "2GNydRV9TNf4wMat4GWcmv4PfGgM6MPxuNYHW2hWB8KvPYe1rP84jQJeqHUm39Cf1y3seyHuCXQpLDfbDJUmVCYL",
  "key17": "5nCkYtpuXRwFWowT1HMaJmetPeLK5QBcW7JL2sjNzGFrowY1ZHmj5xnvJcUXdeA64zvePLNq5CgMAeT9kknNuEpe",
  "key18": "pqe7g8uVYQNrDr3dt1Ft4cM6c6pzk21awEFS4CtagN1huYWJdyfCYbhfCBvEENWdpuVHEvRN6nXaVc77PWMhbu4",
  "key19": "M5ZoYdFga8BoqwNrbhbtbkkHPLQVHx9xQNruA7MeevvQVYeDFeRkXhfhVBnftbTs74vUcPHW55aBP4gzBFJqd3N",
  "key20": "3keEqqRbXrgQ3SFcaBbu7MkMDCuBTD9httaMDBdpz3tT7qvqPrv9pKAQWiSq8gWxY8mDkiwN6gjjcos3WX7tLvyk",
  "key21": "2o7iBZFg1s6FZcytk85Kyt6HeXZiB2Vwynak9aSZ5Vg4s9ZPgXhnMxLD9sreJfbbJtPsjikmZE6gnULxetUUYm7Y",
  "key22": "4rBQgVfiPPBh3UFLWzqtBHUK3JqiacqaeRFTnAC1HNcUsAqQW9PZuydrUsqwvrTwgR2AHcuNxK5UwmZD6BNmTaLh",
  "key23": "5vyEs8rPShyuN4byHj9hYbbTWS5p9RGPHLJe6eBWVNdmdyAKRh9Rej3cZr4DFz4KbaRY2tAiCmCHJ45ncyjW83HE",
  "key24": "7nXBM3AmQFTRUx93k5iQR22omaXAJmwiuapKzLogtuoFJjqD67Zf7bEa6A9FyiZ9hEw5tUShvcQQNw2cLmqFH7S",
  "key25": "4qr7kXjfifRgJN8Zg1U55cSECcYC3GTwVugUfpuqPKEkUU4hG58NQtoAKY66LwetkKAiM29f1D2rt6kG5ud6Y2JK",
  "key26": "3XEyshY9miTtCojmTaDCKJRrn3HNTnNZ9ZppzYnRhQXgymKY8g2CygtgrhZ5QXuaFXGKPp1Hoh15njeLKMbCM3Cb",
  "key27": "2s53BiSia6ziBrnCLzPeYRNrJc8p8zhLr4h3fF1cTMxhhnKEPKZwDAgAt7Fx1P19GdS1cft6TT51bv59igBUof2R",
  "key28": "3Mu7r57STeY2v2qDBWNbxoR4oNwaLGuBF9bj4QrHSQbTXbcQNcawERVf7NYnVYPBJm4GgNzMRcGTMnJUiRYuVCoX",
  "key29": "iSjLmxxJoY8gMk1y6JcLfRFZ4xoqdWnXXeazMQFRqhJnvxqTEpVqEE2tnPDUEuSX9PGzmDzjMbrvVPaX3xjcux1",
  "key30": "5MvC3mo4j6a63JmgAvULhBm5fHo6epQkReja1wGEdb4HY9uC4t988q1WrdngaxvEkbr1Xn6cBPcCnFbnYCrzC9S6",
  "key31": "KukCpFE76L7siZ5qHEDwzuBDDECdGSzm92t1xESNSB9LVuT7h32VSihxh37dyELxYXMYEyYTqY7B3QhhCbhKwvT",
  "key32": "4pGck6G3daADqJBww9ZMsftc4zKqdUXiyLpouY9ABSE5AH4149a1ZRFNWbVdNfjXEkfLfFanTksw5BJUkSQuJZ7X",
  "key33": "4WQhUUfVtgzgNJRKA18ed5n4WNoy9izRYqeQiCDNxCmQ5njcf355XQJMwmkyFoxQFcZ1Tjuirng8GH4pubeydX7y",
  "key34": "2J2D75ktWKPGbiMXBhg7FykvjPbW76wDNxKdbF9ED2R7MrFx9FFcn8ggxa5XXo9YBWu9pH3rJBXYWJ5Jbk9iTNDR",
  "key35": "tkcsAxMefdRN2no1JgEx5WvvY53BQ1nNn57NxoNi9cAkk2xGWUufBkf3d6YNnjr51VWJakNWWaDTxqVSbTheVJy",
  "key36": "3PTXgpBV6gTkesrprcaaqdeqjtZBTiuZJPxXJyii5YydZvvYaT79UyZJNcFJpqGqBjZLJ6WUMT2SbPyXcBCFPaDu",
  "key37": "4DyfGJjj1KghRSAti1tB4UG73VjN5jvCPeqDaGBAQXAVtZBFRFXq1T1WLf8ZBEqNdyUmijx7a5FPPoQfSxJWrrLh",
  "key38": "3rNKxeBGsXWEp7F2S6XaVKRwV5Q5bYCFqRnLZ8p6LTfMys2qm9q7FapnFsSsUToW3JHKroG82Xsy3BUEYR9mHBa2",
  "key39": "vvG6eYWvoaMbr3KgG1Y7PYJxMm7j9Jctx9Y71bWjPTnrxMwPFgPZmxQZcp71C9mKte4kcnoD5sfuysHAbHB5RTk",
  "key40": "3osrgBmpLUCbMiJDw3bWhV2LVPbaswq2XYXwntncYHuV4MbcJs8NajsoxjbXcL7DrymGgYAqV6aKHX2WXd5CaLZU",
  "key41": "5QvWRv4sfVXSn1VijmkjipLKpXB51oe5AcHjDDamhQt6vSPZoD1v912F8hks5cK4NtKD9bPxQx5qARzPbaApxArw",
  "key42": "4ZE277i6nPJGbXd1Yz3kFrxvzZPhDHzwovY7BH14Pwd7ehCeCVqocNqiDxpW2gsT88gjimKHiLMdXJ3569xF7yHC",
  "key43": "q4corFjMndRxM6dqmAQ7ZrhqAQWAuVDoeLf7dYr64XHNWH5meifoTmnb6eVJ6sz3CK2VyKWrh8GgwfrBMQbMnCu",
  "key44": "3Mv17dELfzLTuLbZtwQsLaKmFoCD8ksxTBP1e5vBhXcEKQbEYaXE1TNQC47hJqB1rekMTZXih1ABbdTfbe1x3Acp",
  "key45": "2u1oKzusG9Z6HiTggpDzzENxbNakx2WaEYv3JmB5PZKFXk7fQ7Fmo4tNiigzzbN2QPxErxtRvR83P6sT4SRbN3Mt"
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
