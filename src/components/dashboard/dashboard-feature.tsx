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
    "L7TAFApAWvjoAQg81XLA7zQA8ZeoUV25edByhQWo63WYT3odd7ASU7pTEBRrJJUHFjRExzbT2NpFw1PqxzxVmcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QV1o27BLVfR9NYuyN8b1YeLUVygVzFtiiBeBvqE4GDDFraDNdcnnpDbYBSyCjoGRHp2p9AKWk5Kx9jYNeDNn3wQ",
  "key1": "4eh5R8kCne3mwYHDQxVDuPfBrus1Fe5HU8DgQhJZmcBfKtTwb4d6ntf8c9xHng6MrgD3V3ioxfb3XqZRxKukHrFr",
  "key2": "4AY8HzzmN4XCNx7GgA6WHcr8AFFz4qtj477PQ2XaaEYgXxYEaQYpy6HRE7GHXAhZZyYaG8SBayj5hYQQj8VazoQN",
  "key3": "427ZxzbhBtTM7nqgckfzb5RHNUtDJtmGJTym7S218mCzwehjRfmXQUbqV6WRKFHYyQmLaki7uzrfUmCj12jHfukJ",
  "key4": "2NJeYwoXe3r4TQWFDjq6tmjqmBJBBfCZxs5YWDiWf49qJ8fRSLmmhcPByk1wToZ9jdqecstZN8192eCdfUmDux6m",
  "key5": "3FQQ5xpoQDFCSFDoA4im4AHRhzVDgbmwNnARvjWQ2G51cosvWdYuw7LkHUVtDATeYphC4S7qfkPWciNX2tDd4ybG",
  "key6": "3EE5cR9HMErtNf1qKXKFU37GXjTiQfgWdd1AyzgGwPiWbkr4FcH4HEY6DUoy84BWfQBjxaxYhcRJpdJn99n1wC5x",
  "key7": "5WyssSBK7YSyGLVrsmBntyKGXdm7zpR7L2xACZjPphBb7agX2k9en73J76EUTrZgNiTnPUqtYosDuWxhbbLT5yCx",
  "key8": "2gNz18QFsiVnHkGiCW4wpT8NHqfDJqFHeHnc7y5isdDaZ1iEq5sLtT3tucArFTzS3W4WBnLv3JWcKgcDj8JULPAZ",
  "key9": "d8bJRbKxi8VGDPCBKC6GrWHviDPVhZUR4d8LrjUmW2pnWuLaK8peKSsSAk2kU8c8yhtW9nbxvMkJ4eKNpWSMAdK",
  "key10": "5HqJhGQcnVz841gmELtdFSkKGrUpDGa4QBxHtbAS84pLp1wywbEtsoBhUUj5j2uP1w549BphQQr9uMgUhRVfwrs3",
  "key11": "4coLxGn8epsP7scnydQQPdrVGko3aK6wQwXFdK5pEAkWFhukAgb21xmscrrEKgsGpLs7335FSjPTw3egDqVNpKG7",
  "key12": "3X3hXCSPh3KdZFooJ8oixet3B6mzo6GPStb1fzYWhtjiZ8sUuTBcRhA8NGCHAVfthkcw5aCZvnGbiBtoQUzjA5iF",
  "key13": "3QHQy2MTcEa7px5jRQCmBeh7FPhw92y77ieYbqYGse99D56Apxgekso5iaKMuKr5UGGgUasWC3ipuXUZprATmfoo",
  "key14": "2QZA5EK7uUotYSwXGtyc2t8ky69pq9hntH3GZvFjxUoU5XPgoYj7j8rBJRiJjVRsARx8eueSvL4nAyP9iYNvh1oF",
  "key15": "DhdaGGvC4ZDCbbHjQKHRZYm3vvfSh2Yi1DsjDp2HToAe2v3DRkq9h6SdmWzMtmxaWLkWMY9tRBRBxTAGZbuXior",
  "key16": "4wDmE5UctNU6Mbwvniyj7kipx5vaq1gx8KAubXqeFHmS3JLTBK4Jo7dCyKRdr7Cc3ewqDJvfcZrYjhHJHPmaHvne",
  "key17": "yHk5tgqTUrJAvUxbxjdhXyqCxaSrGPTEVfm63uL9XjBRAS7NLtd1kZbZuTwzUTqTiQEHJiAic4bUspicxpKbayS",
  "key18": "3r5Yh62C8PAaNebM2FHfZaAiA3Fh82kkyopENLSZhs8vLYYSegpes9eU3ahpfYkcJsdrqQNT5BBYMTzFcK8b2K6b",
  "key19": "495hJcqDh3YYGPHxgFJfoHr9AcN7PbNC6ct1SWyz49hp3RdiDoSUxfKNTXKcvDpMBynrUvwhykrLHPK1Hj4ZMp3b",
  "key20": "H4QDoY55Hy728kD9seA73LCcrczGR7LQLLdqgotU12ACRcuaUS638MwwSbaZjXcT7Yn9W7waVRNUaUSEauqHVHJ",
  "key21": "3UKE7a2gnjDvzro4G1ik5N73HXvPtMwLhtdmF8KsqUeTWxgttFAU1yxNWXaV3P26NaTEqEYv9Q8VeTVVSdT8B9Mm",
  "key22": "56TbxW5HRu2mbPzwry8c9kbXoeyVnkrB8HinnK1szMUYhx14rHFHWo7Bjuj5Frh9dPtKQHekaCmUkV9mWzDxPHWc",
  "key23": "7SyS3pE6twhNEU5d4JH5bVHRexhkc85mJ9H8PY9NEGyiHp7W5M2Wuf5NFAeY9GdggNwBgtPncvFYWqemkA2amCA",
  "key24": "4caApatqr496Mgwh1hXmvJjVLyThJC6VYXpSCsP4Ejd4sQPZjxtNdTG3VAzpyT2EDA29uGmE1EZtTd755rXBzyHB",
  "key25": "7XL3gB7LyaSkWFBmcGD6FukLTqVcCrsDv1UdLuGbUSqTb3At9LXPyD9DPYX6qVRqZG8qU4wnCsUHg4XBZyt14pJ",
  "key26": "5zns3KiBLC9tZrqLxYg8qv634CZPqiWAkUqAV9n7qx2GCPegr49mfeiV4BFkKqXZCFVDApYZKC97qzHcYQKH3c75",
  "key27": "4e2EgFVJe77G6MHD4qZJLZ37J1HfWmXDXKqJszzFfpWu9WAiqAYY8gr9LDyYDUfiGjot71zHqQ5WnF8SwZoLh1ki",
  "key28": "5rPAWnNjxTf9Nau9DkN4UJ7Lth31NteFeF79UurKkpojDXVzqf21sLYc7JPRdWzPXZKw2KyRDYPyXDdarEZrvwrB",
  "key29": "YVdFcqespXAqcMDeEagS1zi83D1bBq8NdACRB43MjX5tM2WHJfFDCWWwExtMgZarLLMoGrGCFTUWq1jqTLDuHZo",
  "key30": "5qvkAhVmEAMnPKRBfsEv1uzZojDwEU5TcaUzceqos1UQEnbKxD5ijy7CTURcj1fCDqtUSXonYuejgFx5aJ34Bfrt",
  "key31": "3Bm8bVmeVR7di1WrAko1fiQWytAoX7cF5KpwLzxR2xQTVgx8mYJPYbttmiQhYuyjJgKcivbMdphuqssKuMctnZp3",
  "key32": "3MqWSaU7cUkhccGXMWFNfPZXN6EbbWkpV5vyVkQnPfVxU1XETxFqNSDsmxa12b7FxsAc7wBTBNXvK26LqsPNgFp7",
  "key33": "45nDvYMQqYMcuQahbFwCzi4iG4UdZv5V6Yvf5p1L7x9JoLBQEHofHu79KfcNpaR8Xu6cYcikE9wgfX6DAbwo1Kv2",
  "key34": "aw3aUGuj4bbwy5Q3MTh6eXnf29LjepBSXQmGRGwnGshok9TgbnZBRUyn3DaAorBuSb64YsHzRNSqv9VnAHt4vwB",
  "key35": "285hcyJb6hZgGiPCiCPFppPgByJXjJLwQQmd5yxUGVu55stcwkZ4gq3P7qeMKMR4vwkdENqrJ3RuFUHD6ampnU95",
  "key36": "7sddSn387EirLdRNxQuUcmuRkQNbjBWCSXMSudy57h15KAciNfLKtpaLXHtvX2xCMcedfAET4Qb8zJdyGLy5L3Y",
  "key37": "2QKaxoN8eWqgtNEN7JEYckzHGp16GuZffwhSJVSpqirpRR3fjYq7nrTPiJe8chfrULAB82jHT6tNiRBceN9GWHuH"
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
