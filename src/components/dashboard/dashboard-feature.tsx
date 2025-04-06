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
    "jqmjHw2Kphrvzzfegddav1wWRSt8hGHGEz7QhZasCrZAPoyXp4e2LjWyCpthEKnqgj1FkEgvs4Mr1tetNA7dBBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vwqcvBZZbgxB8x2PE1N5WDKDf5k1frh5ZxWpbi6YMMA6L9bhvhvNwqZavUddNLdEeTn9KpNfsdzkNK3q2g5aqVk",
  "key1": "2GxukdbvE2QzHEV7UiAULePJ1d4FBHxgRzaTLZCvdPk2j12Lsd5dHDUCgWGYgwMCtNZSXjuZGBnxkkn2SgCg5ggw",
  "key2": "2BbCAeeaUcwU4yf6PAaQYo7wx2QT6Qy7rdXUJN4o7KKiPEFeMF3ZPXJGrfE7mghNeAG9RzEW7ZqsQacAVsvRDNCc",
  "key3": "4cw1KspyFCkmwuohX9mtYGJzJpuMy9LaCntycBPxTwou5arnFQcKh8sqLBSgUTAgHp2aRMJwxxTWMChfuarcm4hK",
  "key4": "58iZuHB4yJmaX4GiRtg15C1vDwvd8Aq2zVX1pxMZiTyGhQNqhRfNULXybdr85JvLDq9vb8bEaJoHFRZcNnyVrqWp",
  "key5": "3LsjWP1yCXyoLX6rrwMt4rydNzqsVBbenJ3EPP6z8EPKmdK12znkFAWhUz7DpMkR4vkeWcr2vhRFY3URTdG5f1sY",
  "key6": "hikjWd6xpLcFXNrQax7anr2GSkT7d3VfxXEVurJsXK7gR1AwnrBBoquZUCScb4oQKboetv6ZWniQNbyfhPaQo9u",
  "key7": "2AHeH1ArtX9NuW77rBVS84fjWGDzWGUzaGjo16ABm6X4dFAG427HPMRE7Uvsq6gtQNX7zbJBxmhhAMD1YaLhgyum",
  "key8": "5Nede7dAqzFL3bnGRSU4NozViMeg1poLdqum1knPTMUwwSVA7Qa2FPT6ZXxntY45z3Chm2WhLB98WFCrex7v9zVK",
  "key9": "53PBPEsuBrvuxU25RuE5UWXTDvPcVLpvxtyXHEM91TVevkKbpLaGeCLyP5CHEoMKb8Cch7HSycL1SEkobGhCBZBC",
  "key10": "5goaf7bwuf5YKJGxA4waVxqzMAQFztsZTH4Tq3c5GYS8HNa5gZUb96e8ZAU1L9a846SsShxCdKQiU3sWYMUX7ZVh",
  "key11": "45HVmU4GuUuR1AUwDoBQsuTfoCeDPtdUgKgK8aCc16sAVwtM6xUeRMVqRVkvW5kjFTupcSCCqDa3GzQQxh2s39Lo",
  "key12": "4m2Ls2ZQyEkjTBSkvdXGRxwVfPAjZfqDXzQCMmnyXA6qcrG2Notg3VqE5vnhgCdUruDZ3pXFUfTsy2FZkFY4jUj8",
  "key13": "4iAnzVdvpQ2DynWAhGdseSbbUqWu24NZ5Q17TzH9UY6wvsYi7B1VHJwZ1jk2DLdsqu7KfGUvYuEeTsgbsWEDrKLy",
  "key14": "45biTw8qrehfzGfc6mV6gDSRwwLk4tKSRyxn4KRpNqFfVbygrK4w73NucVm6oM8cmaNNKDnqQGGD2bHnLQDZSQbS",
  "key15": "3oh8txYsi9p4tbRVFvGSMwffzrMN7kdGhJo9brpTNLKar8tntqRRC4izkQMzx5tFeMQcSF71vqhr4tWP8JhN4tVp",
  "key16": "3R4R4vvfmdNsGZWPhrFhBZZT9Zo6gKSdx6BxoQo14JJwsykrxqyDDJ9nowydwctJcZmbLr81tpjt13JLBdQYRRdW",
  "key17": "5Ku8h8x72nxg1BcdwT4bhtaa8U7VFxGt56BYnjL2GxNqPFu9UGYXfZtTMJZDJ6MDWwZgWrcD3cxgPHKUNaxXAzht",
  "key18": "cN1cQsTje6caxcUvUR7HJcgDGrVBbPdb2KXp5wok6nZovWQnRpeVPibNGr3Y4s2smU6oU2cCZB1CUPpGruFBErW",
  "key19": "3aHeBGBCh1jDWb662CHnBZ42R1w3tjdfPzkp7xX1nDLZHiRUk4yg3jiFMz3ZE9E9tdtQfEQZqJcmTe1fH92Faxje",
  "key20": "2tX722H3FYgUGyLsJgwTC2azVQ4nEuVgWZE821SiJtXqFa6H9bwfP9WRmNi1iDsSEncrzBQP71kqKfUQ8DU585YW",
  "key21": "66R8QcUrHgYxqQsCkHtJZRtYiY6V1azs8bHBkxxLxaz6r2DstsgpRrRt4qHRWZVMTN1abyUbLrpYMqysHUL8xjW5",
  "key22": "a7PNVGKCDxg83F3AYgdFwYe6quueF5XhKfh4sFPePdTt4zeam2gmoJuycfippfZ2zaxXsGp1JSAegv6gQt3k2je",
  "key23": "55NCSJ2LALLz1q8HFaVHSLth5tgAiwDTucj9XRtiManHVQ9RFDx3ibAkbEcLkSfoRbEdoNSw1h7HYkYqZT5gh6Co",
  "key24": "JU2svr29AxoidduSMKnEj9BAptC7xMftRhLdvrGAMWJ4WPo7cMMsrPJ9ipNad3ur3CNqMLnWfBDMkcuYCff9tXN",
  "key25": "g8ZRcLcT9KbE3dnpqsNPoSu1QZthe14UBPw18EFSLVBG8VGiYwHo3itGwwnCLMGTkD71k53fGUr463dZuzvMVuW",
  "key26": "FcgtdXicRyYhcZomLi5QemAUQw9LdCAMMmmBQsw4qc526zcNimX3bwazjmEbhg7LwfpzuAuDUPPqMiT8msc1pb5",
  "key27": "4yGjVX1NJW6H3EvPe5VLpvtTgMDLsiKTixe6dvmBUjh9ud7nxtWWGbYEnDNDkPPCwUKusqeFCEfTMdJ5XgATXGgh",
  "key28": "2LfGAiW2DS7okH3Gyg5wiiE1TLv3mEnCyP9D7PgCUMyoX8rNbUqyw4d2UyzPn7xZL5Ri2VBffUcq4hkpS6m3NoMx",
  "key29": "56H3at84hQqUhf9EDe5ANANhSAJFtZdoCnSyqpqS5GbhzNpvCHEwjBCNoX16YMBVm5NZtsVKCd6Bgnn5zJjJuj3f",
  "key30": "nHaDqnTtJ7QdUt15E8jQH95KkR3e1i2RguFijcC1DY2q7Bu3EduRLEUddwt5fCtPry9Tzeh2S2XxVMRRSFDvCtx",
  "key31": "55TtyumXJH3YdwoU77FVrMLoFVtrtMpTFE7XLhj5ZAn7721RrGv634pF3rkfA9HzRpyXbqSCYgnRqU8yKmZWud6M",
  "key32": "4h2YBf9HaZ3aF2b211pCz4Lob3k3FcYskghyWwG9d9uuY6LGrKieYp2yuTpv6WRtjd2SHNcSw9siKHHzGSsghmar",
  "key33": "3RErpzSw1zuWexyeLBrmzPJY3NYVkfzFrYemZaGKcevBuv9XhpTgb6og8bKS4cxVuRCVC9qpWq3ZzRkTu1MruRsf",
  "key34": "5xRh4FToffBuNeuTGF1cEp2HMY5MZA4D9T2PjzwPb5ZrZ2dX7GdnU1KjRZcGjEhihYrCViDwZQK6cc17GabiZ5qA",
  "key35": "3rRUfELH8fTNs5kTBCruG6B1wj3AwGZUL5231bvFx4stQXa96sWmJNJhSdy3gv1jiTCmEeFwEzUwtHPbciyPaV1x",
  "key36": "uCWsJydhLdLyQ5mfymKgoM6AsBcugXUKfMKXcXBamhaHrb9pYAp4pNVbQQVByiqbucsfveYoHMRxvtvdJkREwQi",
  "key37": "CB7VujZqfT6sCvy9CGKGT4y3wqvJb6fNsn8whDP9mHZ3EK6AtSFrpjjrmXuAby3eCgYhNk3yRsk6VGvWJyDy6Lq",
  "key38": "5fsEHo14npKxRCz6YnXjXWNv5NZP8KeTR588yEKkFwRaTwc93qJdqYyYTafqLgqHkgffgotEtoH1EkYBHEXL8wKr",
  "key39": "2SnzFtT3YcpieAz95mLmuF9LKKJ3TGX9dWuLj9BForPb3yd9n2y15fNMpLBgr8v29PnQp5jnijckwdujgAWMhUoL",
  "key40": "32EyVXrkJEPWmDhfQDKy5KTYjTmJhyWcbcTteKqVLpjvzcJWWjbJmKohXL2i2VNbUbk2dG1HwQc4zd8fp9XLJPeG",
  "key41": "2G9nPzwbDyCGFys8Kc4ZeGZJMc7xbSqV2w9WHVwoEu1FKEnGUz8YbctZHe5LuQYeSLwCmXxhcdBbcJmFgViZzTgf",
  "key42": "5FGzkddi7kX56dLU8taqPPe5sXrjQXL5CKjj7vyEriLjjx7NJS6gBZQUaV86En5pMRkL44ZiVzHUYfZdncvnbU7g",
  "key43": "5coC3fpDnS6oqkN8Te2Fb5YQvJ6TfoRytx2ksX4nD2wfgmfwneUtFvUtqqAd6mU3Ppdc9AASko2p4EqB5wbv7FwX",
  "key44": "54DVrprZRLNFt5fxEhcEYsUZx6mPGfiKhaftWNzjN3QagKqjfza1rebBmirVMD3eqBiGWa4NyMXLupSKyXPAFTVk",
  "key45": "4cfkhXvnNQyXrUFwuE3MjPu9obzLbWk5fMCT9L38xDtvBQAEiaDM6hWmjyFY8K9h2qJarku7Xd3F9FFnbDbwnQYs"
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
