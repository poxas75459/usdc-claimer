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
    "AbDTaptyqn7G6wZGFTSxCo8rPZraN9mwGcdE6P9uWf6Y1eDMoc4tG9G1H7uiR4viy2BTXsx23pgZiahXxe6LRmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jw7qq9SDA93SG4dP37ayUHPPeh16m6gUqiXVMHYtDDGkn73QqFowHMoF4b4QqARQn9X3d4bpfd6C89W7Xb6mL2B",
  "key1": "3fWRAk3akWtz6ekp1zjaJKyqEXni9iXJZJhDysXF6acctsLUL1oCDg8txEELs4eLANCCQv9hQzLGvbymj8Xt1uQG",
  "key2": "2EKVYSPgEoAAz7BLL6a1Nh4q61bVKZyDCddUVyt1ZZVfvRj1AnAFavr9zpwJbUfbDZzXPwEiJ67qc2ZXf2EtCM3K",
  "key3": "5PoXRLAxJmfn49KmKE9VryKqAce93VZ1QXw8dimB41Lb6H1DPP2QPkGm2NJKfpGTc2GBY5UaosVjntfYp93g8mNT",
  "key4": "654yHSvKovomw84DF6RcWrmC8vYuoYRAaUJny13dBsshdV1M2sGPLsCeqaBFS29jA1Yq2w2wctC1HuSPJEde3S6q",
  "key5": "5pMFAWbeUEytdfjBHMyVrtmU39u4a4WuiL28g9GqQNkAPJLTtyYBhWxFV5pn2gHcd2Zdz9WeRhaAm2GFYUne8U9p",
  "key6": "3PLQRm1KrutgyGuZWequnpjd7xTQGTESxSku7uk27YrdC7m5W5v45MTEwzrFJqhcbSF4U4Y59XFuR9ezTJsbW1L5",
  "key7": "2DTZ2JyDLfubDpmxNUyTTf3venu5q8bdSDDqqv3nvgxSgE6EEcxXRHvchTjKkBVyhxFNFnXv29Ziw92pQWo7YfTK",
  "key8": "q7SEkKcdE58DjSMpdtKSDbG2KjNrEmFrtXc7Wh91UdPCDiEeWEt4JbyHPvDHTXcHaQvCzKXkT4tyYT6KajrPoMD",
  "key9": "2HJr7UNjxEHiYG8YDXd2A8mkTLuMTztfdor9dQACRo9mdvYZwP7m7ETqLKcEk3v3FNkj6EJhFRypqiYonLrFKHNX",
  "key10": "54GXxnQ5rFUqUWBG1NSUK4GK3hn5P4gCC1YL1qkANKY1G1VZMfMjDZaps81baC1F82FuQ4KSRzfbgyNhaG8e8eyd",
  "key11": "2AjRaUtCTJiP8p7upZWNmq3CfGrfT1y2apZJiQ3HuPV4MTbt9vu13oQqNbJDijxNfFr3qKz9bJeYENZonk9rZDzk",
  "key12": "3Bk7TMXpdoWykLuvX4Z3MbuSKnH4MhNYqHTvMcFrr3qDYEQM7jXXQjDLYiNxSn827Wk3hyQaGzvmqHri4JndTVZZ",
  "key13": "2GXoKt3eYMjUz3DAGrq3FMbEVYc6WkNazY74mDBuEgZNLK7u9vNFMVXxdrHbJerpHBggB5JwciQx5RxunsgqGKWr",
  "key14": "5xiBzeCYfQ7VutKNHHmh6ScTmz2LzckkgxNw7b1etYkcyQVtTztAza8B1VjDTeHJu6xXPLkbu1SmnK59abGo7NzW",
  "key15": "32kcUWSc7bz9KamTxjkHnBGN3gJLvi9BQhA29wErCgfY3uAeJBpVMgRTP1kkuz3hsShQcBA8xcB6BbLxykyqpo1v",
  "key16": "5F6vja1srzJZPu8KaMe33ScQgAoC9ySnM2HUoJM9w5wWSLggYBPcsaHrSmpFVbuRhsbZBHSCpPvhQpK75egx8cX4",
  "key17": "3XYZnzNxTa7CNgyEssKcuRLHbcyG2JepRo8r6iwv7BEqRYvFzYm14he2s3T354tzR5YU4GQiTV9eGn5FWMShjVoy",
  "key18": "3KZYWPm9c4p7gnN6VjbydsmxJfsBGSEPCm7LBpHxCnduQYn1rSoscMZ2uS2XyNB3pw8976SiTxHxqa9sN2U77zeL",
  "key19": "2bVJpbRfZ6mQhnMsRSEMs6oBcGnk6iEYSXsBxWXcHHjSHBCo5ixLtTji2TZGZBs7HRHtCY1ciqQEHTanAkLetHct",
  "key20": "67mb48WAi9pZbVJf5qmjaegBbWKpL26M8aaLXB4iA9FkSiTrY18EF7dcLB7RVP6VriXph76ZcABmPyQCX3D57KzN",
  "key21": "4nNGboXZm4umFMCzPZrdAApZrRJiwk9rWJ8DEpFW8rXjvqjXTBSWWzkinHa2UfBvSQE7tsoJEcC68qVfxmBY8LF3",
  "key22": "nvq3e4EeWcgNmLUkVVenEQgY3yxo4cjX7BBb3p8uiWnkDU4G1JTqoxe4qhxatYMux1G21zG1yD6TQ1iSXiDYrsv",
  "key23": "FrSyCjCFSnicBdpf3AGM5SQzuvStGBRLwUFtX5i9rnF6syuHtpCLnQwcphZsWJ3X1UH68zYyMnTP78vZqh5NRtb",
  "key24": "pCEkXvhRTJKJMFLv97pEE3kc3eCK9b7fUY5i5uNd9pGXCT4ipsZUAf6A9CUSTuzy46G8r1jjwXrDuKHN2NsiGwy",
  "key25": "PoisMjDLj5v43tQ5P5p5iUGykzkjuyg5NmkZzNXZcNY3XgAsjJGUzL2fXq86U5ZULopZ6za4oFn8U4o1D5UjcB3",
  "key26": "49c8QNwSQMJh6Vfk8TuJkpF4s6qukyWrNhfHeZekrwZzigpj6j9UzUfLrdNe6ozYwW7DTJcLybGCMmwxZmTKBWJV",
  "key27": "5XhLEJMy3ctbEezezXswUDaj5fNPpe5DMMdiEuScKWbNPDH8Ar3T4HoZUJECvD5e3bfEWciPfVzieu3fXsFup4un",
  "key28": "bWRqhoXqxi392BUNnABcjEqBqfGbALg5szco6Mgdfdwity1gE6gQQ5rV2amou2bemazJ3GiQAcfXa15M5KSWxxW",
  "key29": "uz6Un7GvcX1RxSmY9RWjKYWzStCxgkihmAeibGo8CEvd7Hr94CXFuTmmei2K7EtS2z4ZPTbxMQ9yMkHvq1p6xAs",
  "key30": "2mKpTtyhYtXgPGbUtfqnHiGuXYoSs5hDpjbUUaznYZWWXCNwpGooFnpmVLj9ed8VcshrJZXUe2vXPjeoB4GGB4qt"
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
