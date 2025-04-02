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
    "cq8tFN27m353N93SwxA59DPWoV38cTsvQdKSuLkz94DY3tyaRvvddrpdRtUYduL2Q8ExrVcvZ4R2nzamxmkeyLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZGZTLaynntDxnZM63R9JyQcMD5aYT7fDgSKu6pQQdg6Xt9HxgMrwd2JqhjefSpec7Ps4wHdfZoWcAq5Js2ahr4h",
  "key1": "5zCwvYEZfv9g7adHWryVmAVxt18e8599dhEuFSjdxsXV45Qymaxw4nENgnAwtU6U35jS8TAnxpesWPdRgcARLKKH",
  "key2": "4nxTQZByqjbfar4ciWXvusS1tsMN3YTK5RBGfA3pZHavicsjbLW2FLH7E8rsrdvvdA8rew7bnZKMeNArRqmFNXcd",
  "key3": "24UzjFRMyG97zUBcwqMsbTmGxHcVskC7oTDmf1vyNxoH7KCAXdaaaCTG7MtR4oamkxtiq2Lf1t5AjNVUmEZxWLUD",
  "key4": "5GYkSdvx82cZpDqyCkoV3biohRBVMXFMGtBQx7bEzu7ava1piZLr1AFvjDMdaiF7UfWpZC8Gk3bh5jT5SqLmTc9b",
  "key5": "pC4gJ1MMWL5JkbAwGesiuqyoW5PPConMdpQGDMFWFTfEjPkqwvqpR4QCx75YQVrkY6R4nAv8KmKwi9LTqWLxZwE",
  "key6": "534htjMgqYwghYAmJ4H4oFkybB1YRCevBRCL8AjV4uzTcWSSm3MwLmnHGh7FoCF96Pa8KgCYQeD8zYiarv5KtycH",
  "key7": "4527UveLXdbrQTyLjB4h8mm7z9s9E8A2h6wKHkKdEowci8VmrWxhA8ThyTdufSF23nLJP2fC9qdZtVCaXVY2Hpk5",
  "key8": "2RkQ8zhy1pdvuGmfv76dWS5CxDVxkeBApiCTqgqsvGZJ7gSP9g7HwLUM4nBAJCdPKvQ5yhjik6GUnrko3nz3YDuN",
  "key9": "cZWTVUfQ3MvoGHgxb57oJPQN21S6jkXWkgbxK6NvYCSXdxMcJnvyLg8djP8TPGJ29ktm4vCYvtQYmjpQrR9H1K9",
  "key10": "5pkBSSiha4ct1trVmE2FWosxvS455EHabepvfZzHvE3eoG152EeoyRPsd6AbinZN4jCw3Yz3apn7n8MPkHi3mXQH",
  "key11": "3Q7j5kfYrk4gK5Gq3iGFYX2sa2i9CXWr4rcnWPNd1v85C5AE5yorBQ6X4G9eitCCnBAsoYUd2X8zjjebi95yXBFB",
  "key12": "3Aevk7n85ssAeiJC6fpoaREJKbMQ6oi7daxLPsw1X4oDhNpErN6qyfVthHMFEi3zB42qnjgaVR6eTV9HhXHG6vku",
  "key13": "4KrvG3hVQTU2tRgx8Pr38CSXuwFXXe9H3peeM6zb9YLMBT9ei5U56RZULxLp1gpxpF8nxtXAsA1QHfyZdJ8KPMnB",
  "key14": "5XM4e7gFfP4oyvdR7ejQjtS91cnejUwncw59MGxp3SKArCX8qrSV2h3sGNrHRwnRXFdaLRsQh9wq7fdb4qsWGgzC",
  "key15": "3DGoSdQ27mzMZ4DwQ1yWVCtKZuNRXfDcKPhdkm8UXAt2MS3ReLiXVKuCYgx8JKorrF3d89SGe8Pz68fYTTtUz649",
  "key16": "4qYMFymzpvKf72hYkcyyjo5AUxfi9Neh8LMdpdsCoPbeUha3uWwh1T2WzurdTDbP3aNZ9DGhfv3ztrEEJevogRv1",
  "key17": "3V1q4JjzmMAebiHK7ErJRs8CZu8SjbUomZQZeiZzAmebB9aDeeJLiGeujLHNQSw3HLTqMpcNp7JxoCtXj471Myvj",
  "key18": "4aD4imwMFbtiA1x6TaDhW1qpE43tZMo4aKThVsdJ75kVLk4EFUYw2BbEeLAL9TKZFFy4zCVNxctknoyJu3jxzDzT",
  "key19": "271vGXi77QQ2e8EfCGymSz6xTexbhnX2GMRhysgcddbYh6KUYATqZnPTKo7CE28fBzJEiLFomJEaTCjoZ2tqmRwd",
  "key20": "2op2FW5tsUcMs3p7moAy2KUSDBvJpRYxaDFF6fWRJT63QrAoEwNjpWhigQFoMPjrpiMc5ZAKkgrj2zR7XqocwTo2",
  "key21": "52xFHNxGbC2HvahxYCGs46QCdQEqLMSEb4ofjVWnoHv8UuPPqGR2DYbmzGbjagQkcSn638uYzvJruGuuQMw8cMLw",
  "key22": "4ciaEWVPMNDrj7uTtnapX7TBgEaFjupMUDZQctzPN8kaRr6pdroaPC7NAfvxZ3mHLSbbAuv1raoikR3n2FeGKHTy",
  "key23": "Gk9w6QBA7xhJTnsrXr3VANu8GenZ9V6Vq8NFdjPhBvWD2DG4ouYwrc6bW9eemwkNeUeWd4CyDW8oFepGsqFhcXV",
  "key24": "5PD1qBQBARUfd3eYWGTg7mRBCQ7C5DgHR54METZNstvsapYVmqxfd43KJdHHGHhvbxZrpBf5jXqnHrDFWyVZFmd2",
  "key25": "faHhtXt8RQFYrCA4rqPmVKbCrtQVJ42ep5qEYE64cfxMQb8CqySgwo4xdRYcAYFptUeJf57SqqkhB8pgkjPmWkZ",
  "key26": "vffvpU8TV7xFCAtPA4RwRguzvrgyGpjSiF72LQPSPL3ky4WzL2DVGZpUCdmntbAopd8JPPRsbt67s9anjYiMfet",
  "key27": "4Mzdfpf2GSbyAEpTmXjuKi1Wt3WSJwUbDms1ZvGYSFE1tbCf572YpKojYCJjyku75wS911YRDuedgfpg4ixApNX4",
  "key28": "4b2owQ5CA91hamhtdkabUNZBih2swopDxzAy7HL9E5jHG7dmw8CpfLZWNiKL9PfSChvRzjb4ivsF3GDiis1MmH6A",
  "key29": "2vXSiMAJWJbUqLjNx3YZZ6aZ3cQsvwhFrxdZKR2LRrtUrCyhzsRcoU8or94StcjDrhfvbcfpYGR27QT6ecmEAe5q",
  "key30": "4Dy2hru7ap49dMmchhyAn2eRUAySoYnRrwgHb5tSoeNdZXxdh9tCWqyB5f4xHBnSMt5x731dnF9LCmJMMZMuCaTc",
  "key31": "5jhx1K6BR2ZgdGQTzmJU8qoSKnNN4zQJ4AQM52hhnqnhVJHTaxt8AM8CQuypf6UR2LiUWLqBurCmMgFWd9N2EdcL",
  "key32": "46YktNuYd5rfesTU9AG1A1VMCveUqZVXXLUndbhyoBJCVBRZRJsTtmKFAGKX64Y6q1bKi9d6oBivV6jLycj5jkny",
  "key33": "3GSGDigjcWsJRsHWnYVvPRE9wKa9RH9grNRB5JvUR87xfoVKYG7dh98gF1TBKVaVNSxyfNBEktoTFXqTUTS1Huz5",
  "key34": "kPbuWNVMLbU56bQryEq8Z7fi4hHaX4EXzhEnYua5V9R5UuLPPTHeRdba85TDPVJrAyJZwnje2Pxg41FPHQ1sVvE",
  "key35": "4HrFgcEvxN2yZeeLoNvd4GwKBQhobst5gy87fr4Uvj1cNLbnm1ipyigQuLoCtpSrkWna7PKjmQxxJZBCUQ1jKZ6X",
  "key36": "2agVW4jfgw8o4Qsb4yk1zLwD8CvY8dDU8DcjMpEGSTDAhnTuomgFUtgupKJwZeiGKXQ2QMMSMd7VPd64JXoh2epX",
  "key37": "4yFKTafFf7K1psoCNwvngv2HQpBbkYLeQN5HbXWFbgPUr2oXHVqJVgfU7iUZM5ZuBJsCfJp4q6PL5W5fhN8ZFSwL",
  "key38": "5mioydhukVWkQfCdJTk3R95GRRrgm14foKFgBjmUddFonUz7nbaET1isiFUe174XdiDw7DgJg3RZkwgp7M8vKt54",
  "key39": "5Z29n68t3NrQrr1qENX55adwRxR1oVnAjvPG5WWFT3TgLhYcbMSy9WbvJrkXpS8qhLvfCVWnmeaokcoTWjPqhZab",
  "key40": "5oC5EH1rosPeaj7PM58XDv2r23Mxsn6GjJsSbgRtVmUrCfbwrnQ2RQNE5bUUpkWbX5YmY9AUUWWdZ7MpoNH5dkj",
  "key41": "2MxBTt2FYaoa5cZhJVpcefAyBhRCdsPYZXgnydZfdSnk5b5CTpaCoe9vQ1jdDTUyYAccaW5Wozvch7geoG9YbCct",
  "key42": "JrxQYDSkaqSMCu7YQByJzYNKtgCHdhjk8fU4oqgmPBoUKMCbj6fj331pbJswk3khNRBY4jW5ETfYwqxMDsciU7s",
  "key43": "26SfZGbWFY5AjLvjk7o7beH4RPA1cggCJAenABUygK3muAceYj9C1H8mnGMd8uj62fJkH1n23yDFSd6eQYKATMAL",
  "key44": "uiPPuPN115u5HwCGzDzfgNbGGwVsHoCTBaJv6gE9PCb8fwkV4tGNnhXpScSUFzaQj812F4mGAuebuMzR3JLL426"
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
