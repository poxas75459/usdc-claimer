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
    "4Fy1kU78oZSjWUUqdbucZnSzcxZvANPQV8Nu9gE3GWf5v88J8inth27fkZU6HQZiy9iU48TLsyPT41uD4REJ8Apt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kJstUb3r5propkHvd9DFsyEYaN2brsx2ntyqq8Y5WR9j9c4tsYjUYGtR32PMgj7jRc2NwzPCwJTTpV9zSsB2hLv",
  "key1": "5yjJXGnqXZZXVf5s89g5js3C1UU4QEsQFPj7WpHSKNfJBxzzExAkAGwg2FQQKPcMdUjr81atrXLim6eapwDNZmaz",
  "key2": "3NmW9WK3ui6qn7tTytf8UyNkfViBTjyb6UdKrW3iZW4f7MQEtiQpwDwMDqb7Jj1WZy9jMTMRwg1erizgUFHpQFyk",
  "key3": "4pmg6e5zn7aTybwM8Xt9sZv24hj3yqSgHpEcT3UMSjo8qA7i6cJrWKBx1FGssvShq9Bh9CqqskycMduZJhWLXaAq",
  "key4": "W2U5ysrLRHaf3L6ATGFmRoiGHR7sEwYje3CuCCwDMxBEveGLj3gXzKe8DvDts2MpYGByL3gpoz94niKZpF2w8fg",
  "key5": "KXUEQBffs4MFg2VqRjW8uh82C1q278AsD8YrCNjnTELdVXX7gxoXohmJwFRbdP633g5cz7LsYz56DxzefdnKGi4",
  "key6": "tkM1Y62KnJ5BMtFjxEiEoAfCQjc8bJKNKX79Q1npcmb7E6qhmkT3SLJFRySoCSYw5Lwz56tjYkVMyxQyMrRBpUL",
  "key7": "3eH2uH9XtK34JXX5kTXfC12YNB8bWXoeEq9geCuzZkXU3fED4h9BZK8qcCuNeeMgoPjN93xBybSkwCSKCx6jYqPE",
  "key8": "nynRdkN7KDmhDA8TjTfxAwxFQn2kmbUbXecN66ZsV6QBq3eZ8eDwY7ZfESuNVWy1nEu33JBTHGq829AiPGrkW5L",
  "key9": "3jWJoquSuQnNCkHFi9VKK6Wfh7etKitJsxwozYcDdU8YkrcRrMkjfuwhpmCKHuZM33wDuSAUD3R1mZMMEiRH1EpS",
  "key10": "3QDBdPrFBSHbNqvuUhC95LFcLceXaqpvth4171puQs2f7zLCQGnwQMAGPdZKnVmBRsZ6i6ME7p5V1ZutdvrXh9U9",
  "key11": "qHQf5dGZrqEsMau82c6bVZxgpuUApdYFCqJe7puz2tfPPC8KTEpyUJAkQ7d1FLXWVQLz7gN6aR48usZZX3vUyEB",
  "key12": "4iv9YRTfnCk99cxRpWeRETPJ6U47SW4vkTxUmKmZeEiNuVFYwNQRPZfv1Cx8pVzU1f9DmicnAFz2YB9GhPgXxLTC",
  "key13": "5jS54ZC6f8jy5rbQKCm1qEcezCgNsFssQYpEtwNREdBx9b1jpZGYm5nZ76Qs8awkBJ4ArRfGxXaMjenJBA2LjEgJ",
  "key14": "5UMXtcyxkrRFy93Ss1hxdAsR2ga5xe2EwpjQBpKavj1UVJuAaW2Z4jMeLrcQjg9JHAtG5MWdbdh9iFdGvYxWj2T2",
  "key15": "2EGV8t6H3p4S1SXKK434TFH5ec3YGmkSCWrLQJ2RahzNw5qsPpup2forfCKjvotWaRKF9CdF2GarwdtWxTGPADru",
  "key16": "4WSdtx5Ln8NHwVZR21gWVZm5MA8HbJgojMbrgSe46yu4abtrPFUCxnfxeJ9AhfAVymt9o9JpYVu792P9bkzj49vY",
  "key17": "2W3xe8FqhMNokrNLGKsmNgxBKC1JVqRjS6L7f3F7s265faBiF8KcbGzgkC2AXa8zCoVXFaFTfG8jHCcoThsbLP9W",
  "key18": "2ACRWZPQMuQS6inYW1LNdAT7oN7tC2efPGj7VCm46agMEqDqHaQikFb6JYLvj9NKxPcQrhCXNbTm2JbS5dmP9ALq",
  "key19": "5GBgyM33QKAAz79nQQzSnNSK5JhvMMwa7d1dtcfNCMuPYM1MNaWJcQy6WVvwN98MaBbSWEvACmdmgUrX32XFQ4nc",
  "key20": "4jeuXvMdPjYkYm6G653u1kxKYZPL2vcMHBgDSG9WxHDqAwzuAdGhgvLk8ofNMtT3d9r2KvS7CudoiYCF8LENSk8W",
  "key21": "675GiSdhWtQppf6WLRnGEuEjatsunjV8N52cDynujZ9g2r8gr8U5NHsbHBZk8W7WGrxA6GxPMW2oqL4h3MTPrvFd",
  "key22": "3vYuFwccUnAtmJsnoUPZrzcTFJA4ZKy7LaTd4RpVz84Bog9WPbcUn9zzymUfJpN4dWyLewQTWj8s1KU79iwKJ9kb",
  "key23": "23nejCW2tFm5FgdjSZEHtFNXrscnfsFMzjxgXpydZhycDLSJvPbdk6JxTsqaXCNrvyBxBrMj2kcD91bkMauWTBCE",
  "key24": "59865Uq5yKrLSTnQiDRZ3wq5bCy7Kkjb747oEEXqr1ZU64Ppon1fqsyqeRbB2Lc6XuS58xqjBExinu3FBQBoG1Xa",
  "key25": "2iNi12pXt9F5CyD9apCQFLtPkzRwFhUQCFiZR9ns4dTKvkWxFttoUuw56UdZjWYs4RPmLRUTqbs3xvAaZEo7wVQz",
  "key26": "2AAKf9kkV1cxfpXLes67mwcqxPWmk1gEUcseUG5nR8v6BJzAPU99zeAvH373y5qiGdA8xxoHcw9hnrcDJ4gc9Dh4",
  "key27": "36QkQWm5Axv1feeEsurzHZYfKWtXi3MWoUSwveuy27C6w7rpd8yNzbRb9Xkw5yjSUrBZY1R36kwwLKNx9GhfJj6B",
  "key28": "46UFojyGFW7iZNHiSYrFUDEMEf6zR3ySKFzWTC1btBi2wYFF9kZAmpCADcVRLGzBwEmhHgm1ziCCFF48tz6o5ddF",
  "key29": "54dY3n5kDD2pESSZCfqnSfXhx33cSB3tJ9FebtohxURMCEUHGpi1p1xiw1wq2JWczmUWM8dQp5XCmsXES1KT818y",
  "key30": "4fsyb3BEm4jqDU89tNxaEDgSEQAg9ZKyhTWDD4HvAqTFwXakF69piMpmvZVG9W7TubvpKFQfmHsTB9BDALH6HGFh",
  "key31": "nmaQ92kfVBcyL8r97hqjLecfxzSF7A6w14AzcpxsNTH7uwamCwq8nsicei79nmZi6QYQF6J4u1g8sKAAKUvHihe",
  "key32": "9z5vJyugsHo9AC6PFUhfqYusgdSUsLKKpCp6XYjRUkoiirnkrY1sZ46NLeXDtgNJ95mFWdgu2JzfcH8DKbrvgpM",
  "key33": "4EN9oap2iJ6CPysJWwfkcTkFmtSvxyJNCwc9mBiuq4TJrwZN2ozztJ1qwWbE6qncA641mFVUw55iXGdxsW1WpJRK",
  "key34": "3L5no3XrTNE7MZeTgPhHk2fsHNJZoPPWR17xgX1Gs8WEbuZ7U7Yk9j8V6v26vDnVmmERoNgejQP2994CLNxBmGs4",
  "key35": "4wbiGyHWnNyB4CUaRB3d5PfAaSedVaidZNVmnLigpodRPSWVjVaUnFv4JdSc1HCPg48zGUAfpqM36ajFNqEPhtio",
  "key36": "2XLMXBJL6z39RUApSnXifSJA4ceLm4Ef1JjtgKFirJdXfovMPUrDydz3h5Wg8RCMXYV7QDWE3L6Vy7myTAdbyU3L",
  "key37": "33881TkwYPJvTXqEc1UQsuuDoDcJp7cdF9iZFNELGvPJAarmguXCBcrbUYALsgKMwUDJErMNgCHy7sB24ytn6ozH",
  "key38": "5en9WgzKuCR3nrvG22Ejq5ELMGsVDw2hwaCA8GsBSdfQvaXzk88fbmdi17kRHoXFVistR4bSyYPhaz26zahMBUpA",
  "key39": "Dhi5gjZFUuPqmfCd81QPvEKpXvFuJ64zjbfdsrMLnsWCHephuPv3anggsaS3TFogyDpu6wXZ66f5naffyy3j6E8",
  "key40": "qKWEvVuemhenzYNihnWYKEWhECgpMKp1MRH9wBKMnbSDSwoKaRTkfgSntyMJ3HEHcihGEMWQ2xZC6xV8W8AeqLU",
  "key41": "67budZq3wZyXg7JyZ2BXDDuiUJLHGU1Q728iyPWnnWE3SZuuHH2KmpLXstoSSwESZaHeMkZsiWpD4LqDYFmVRJ2u",
  "key42": "4C18NU7i2udpbRuN9j1j418xH2j2dH6gNUH69MhPmbL3gwS8sF9mnpSKUzXQV1XqJEy8VSvF4i85YKh6PfP3fKGp",
  "key43": "4Md1BYPkEDdtA5k6WUXd36TTw31ZjEwWkWiYZfLU8cPy6zbUwBaBNLQpWoXTGESecqiGEkRUMax9CBxSt2NRd4CA",
  "key44": "4cRANnM2Mh9R2zz6NFzptZyQXtMXmdNeBSjhydhgVVB83VNtPtj32k7xUJM1ur3ecz1a8JJrY44HUJeLUVBKM1ym",
  "key45": "WEoVBkZ7rfxt8Udx3Nhms3b7QfKkQmwuHbfCT4L3AwAHjQ7d5cGFzB4deTDFTbteHQwrvBMbZ8ePggUqNYWnTNG",
  "key46": "2ynhdDqEBukqjnMxVZp2BUdbvATFCH7unFEAAuVdfcgU9ktp6VS4MGdZsrp57qYQ8gaVNVtxSDZ8qXEuMVgBxGmg"
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
