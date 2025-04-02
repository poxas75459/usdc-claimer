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
    "61dQAcELf3UQM8txhK28A23B1Kqr8KKpvgqy9b9f4Dgvktyj7BNi2ZtEDJZsxwj32Mt6U6bmLqjkZJNY9YSCZXWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wxKPdTkHDLj8Xydug4Y4exHeUZJ2t85Ts1mXfmnTT2vKEddvL8bHBGnZL7XstBnYDfaLEmG2WH9JhPq9W37zJy9",
  "key1": "5ieo56Np1en4vxgCHojrsvPpy9cshMyri4iVrZAFge4aeFkrKkNtCHgTGv1DvpKft43aEKfzEUySPdr2oJExbekP",
  "key2": "3ZYjwPXnGhV4nnSzzARe97H4qqcpZvaEm2kCQjZorRAKFVHGS4mWWG1huBqx7vBiTtiJCCWf2pTbbxwnFmSM6Ebm",
  "key3": "3yEnkq7aiTRyNHLfnSv6MHdvh3f1BhFSoLyAbHRTA57FkQPpTjkdkYFZdEQRnFWZzZTSUDTMxFQiLs5rbaS8ANXy",
  "key4": "5QiYF6ybSxargGNZEaqNhfeLt1sB78DhzFe1htquwRfGVMJNQNWg35BkQBWmhRVNwrW5jvjzSVjpAgUHfpizLtf9",
  "key5": "MLpXJSrmc5kiwkn5g8sZKHAdWgcs5y8oYteADj3T6PkjLSG7Rz2GcxDgwaAeveRwVKpXUGCzP58WyhQYBxhKBTm",
  "key6": "2UPSbaLqzr9q2om8xVR5F5YbiRVHEeuv2pj7f1j5UD6ZGsbVwh2dKNCpE7QpocvD1HLLp6phtZUQeyY8bTgQz1Tp",
  "key7": "4DSdLRzpC8YKFymzHvV1oonFFJ6J9iQ9divPX1zsQdb6GNCHAiFMYzJUPSyJFBd5qchFw68oLNJH5L14C7ZfgQJ",
  "key8": "5JtSAj2RwMRaq9Z5BAPh7VDKN3UKwFevGsBHem1dKEHvNgUabojhYtryTUTH9wdBDrHNdQM5e5v1dzW6LmK74vvK",
  "key9": "4sgt3EjAd7WR2BV29mMeZMg5d5abiuuEXuN9UbVhSdJF1Jq4eeiCoPXMpMKMTc3dvoiJPhutpDyZ1v5oeGyGRj9T",
  "key10": "3gyxVcVxjjJyPqbwiHeJHY7hbgpCLbbgHS23pgEbWEHMspH16GGn8JAwuuSA8ZnwiAnDgdxKEYbtqzR5XsbVFbEk",
  "key11": "2iygpaorAdA94BKcRQ6kvG3BQcJ3GtBCtWatdH5QhopRLgdTvVyiGfks4d1kxHYAimL5DM9Zk5beGxRsVCvGDkck",
  "key12": "3JuExQoEvXWgYGDMaNQfT7PoPH9TPQ1YeQ3UYfra9T65Cc8tivR9ek2GLSKKdRASsA4QmZUqpshaVRHWv5ruhB8",
  "key13": "hww69KfRWFAogVy6dXE1R2ueReAMFokEpwjXgbViWkLHW8KMakYYwXPqV3nfWuCG7BXzqb54h3kMNYyHqgPfHaL",
  "key14": "ccHS9A9WN1V1rkjbVCa6BNNjtZi87p5L4HaKbzpAkRqNKn5LLgXyYphCUEZrW2BCkgj7GQBAWnMQ4J3Qomr4S3L",
  "key15": "2rMFVmgyU3A3yLeyCRmdCEaM4oyh94FjVR2ftdvmHMXn5U3a6kR1PmZnzry1CH3EXviSAYQW1qe22JifSwKgXTXU",
  "key16": "GfrcSHDCr5RLvaMixagNcNiFtofxYQhRZvea2kAVsVc76AWq7f9Nf4jChacWb5Wrg1N4TbctWLhuJN3hzmo1ER7",
  "key17": "2yG7xBeDZAjQi32G3HkW7m8rPbNH78yZXmPhAC8hgoiPqg1U6f4gA2Vf7Fet1AE5PY9GKrsinBDn2shfDCiwNaRm",
  "key18": "uYBxpqwNYNucqnk3dPQoMgUD7h5hFJVUXuRHurfBKcHZ7ZoV8AGp54L3FQ83bQB76xuXEUdLnwGEXhWoExD5cHd",
  "key19": "5n3MsRUHo52ZrHNcaFCNYkcaxXiPQ9aRh3KVXSXZF9K4P56C1BYitbANzVvdVUkG8xtraphmKJ72YBggoG3S3E75",
  "key20": "RKXxWnbhvXG8h2p3DZYq6jFZE5nDH9AJwBFJ6fPDxP8NDkob17iD2T1XP1TFy2CKqdMoPTFX4FKXUZuZomynZba",
  "key21": "23tK62SMpayVAYVqBmHyGw2HbFjdjRJaeU5AgS1d2a9tBen9JZGaxU1JiLGdmaJfyDAFbqdK1EDi9Z39JwS3GFj1",
  "key22": "5LTyVUKwi3Cc2m33R27rTELtE2pLopstXxpxp3DX4sa4WUrT7JAkbbgzWJX4N748q9cJtVo3ZvDgwX3ABPo65tU1",
  "key23": "d9bVFNR1azoVFmzQhUVne9ZZmAhd2PBqTHaYpoZk6CgAbY3NCeSkmqjQniv6JgkvuBhhXxWWuajPS6U722F7UTy",
  "key24": "4zpfQxnc7f3HdRuL3wn4o5Ng4UTr9KDCvtr3kKcKWqXKsGyCCtwGV1KjPmqhVwSWuynEsbqiJbSLU8dbJP9UgJ86",
  "key25": "4HHXbDGLgEfuD7La4XMLEpKHAPcTc5e85TRN4W3oGqze1bX542W3zuCL48QYoJ6rH4L2YWqugyGa8djJCB3qj6uF",
  "key26": "2vMjQQAotuwQQHV3hr2hnMy7dgPqespA56TxYB8RmX5bZzR2ofGsiaPyv1y3Yy7VxSmZEFCQprPkf95VUzEGGKNF",
  "key27": "2w4iL7b9etAwnSziUmxmY1yYKoEfr2UsGFKZHYCQbx5XKP9Z8TcRjEF3m4bSpmxR4zQSkzMpASA9RsDaCi1idqv7",
  "key28": "5RN3SZp5kthf2XEZw9hToki65tTU57hCG48y7VcEqumd9rXA3hdE9HZCH7Q2zpaKKkYNsqqESsxYUtkARH2krZJw",
  "key29": "45ANmdov89LMcYTbSXhoAqeHFqvzxqgC1cEDxBYDY44FWFD1G5SHwvrmvAQmHfd8PGqPNoQzXMj91Bqggvqv17Uc",
  "key30": "32vogoXdw7JqL4tFPVxxABikFwyypPdXVAwUoCq7N46LPTBrtqZMoDi1cMryucnWWzgddWWCxRuZSCMeeA3twYEc",
  "key31": "2yTuRq7wKPa8t6DLviUPDCSXfjMeTE7Ye7LJ8NZxRwCRhQNMbEGr89eEavdeRxUaoFcwKuv7vAipSZ8KPEgFqqzs",
  "key32": "37EP9sa6csr4zTP3gEH9e4Maicq7Bzxpirwupzqy2VUdt4whQuF8Fr9idP7mkkVwiNUxTo1x8u6ZT2XjbdPUJ4oD",
  "key33": "3h5E1DaSAG659LQWYXA1ELx2FVmjSE3baxjAtBQvseviWb1kdvdNTxYA1FuPinZPekrkyjtxvHzuxoVjZDYWSD9j",
  "key34": "E61eUAWSa5HojRUJr4uv5Uvoz2svTYJjzp3WPmZUaDg9JusWGJ2HfPc6Zc1SjgZ5rLXtZqwDqNFA2rjURnxK7CL",
  "key35": "45kXSLg9RbBWC4UrssyR1TQUnb52MMyFVKA8VDQNc2cn35fXqBgeh3QwN4CbkgTbwbS4tioiumzBJWHDdnR1ccZ1",
  "key36": "34Z3HALdDB3TRXdU16fSWSu4ShWxesrS4dQxr2FxaSLyQWkvZLeocWfgYikrmw478qdHdJtcZUxaHnFLNh85jwWR",
  "key37": "55mXdUREGTtHTsuxo8nWqwkSqqpNZWFjjo9xHJdrmbL5ijMmYB8wpjVuuHgdDf715V8hvk3jy9CenwQJwPZnC6uR",
  "key38": "3tJ2LtembsHz7rBZBNSiBLyNDxqGXQL2EnJLwaEVRcYiD7KHmKxYZZKVvHdNpKZ1dA6jxmAZv9B6yA1QbDjx8zR6",
  "key39": "3nhNmwtAtd9rU5S46QnkesVrqUv7asYgoZRF8kGZm2bt8opD3KNhhNt31yT1Z3ZSe9y19SCfEBpQNAwypdZq2PZW",
  "key40": "29wzjGmos4BZE2bm3VoQuUc8W4qCkW4A2phNNQPFcausYf8nVHfb64ZpEo8Wb7BTyiYRAJu3vGB37Nag3UcdycFy",
  "key41": "58Z4Y3tu6V6z6jYmN8A5MSMmTk6tCKTVrPEpRc3T68jsCvaEauMFccxkkXue64uTgriFK1p3YdYKhhnScaZLXESS",
  "key42": "5uC6YnA2kz5WnS4Xm7WRo73mCaScDdoFjzWsWaNf2QhPVVL8aeAgT2nMsQpUzkkjmh1QcTyZCbhSkKb7mDiusFjh"
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
