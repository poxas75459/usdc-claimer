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
    "2iNjecbqEktGma6Q5nJjXZNkSkSKx5ukmf5LKEc8kc4h5sUeSiVuuiZzwQJb8qWS4md7v2JVmJRseDnUgLrAZQie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8waiidnT1MCt1WzFaFJw34gCA4cJF5VVPYVkoahPCPfmJw4h5snY9gD7qeSyEqzh4bw3TBtmoJ41eGz7JRQ5SQC",
  "key1": "SnYQyAt3UxNxK8c5PtFWjX2PHMUytqXT2BviYSRs8uY278rtmiBhPKSLjVS2QwksotCyggqJiVZEXfkn29Kk1Bb",
  "key2": "48HDs24aYhhbmu7gspNuRdqin75qxGvbkXx2wVkQKHhWwyfUQG9M6NZb8rM8vLKyuKbVi1Lh4BiDCpw5Wf4Uzmr3",
  "key3": "3iyL9S3BKnszptPcnCeSo9mLFRS2XfrX7Q5ATfs7MFTJWwCiidKdHSzDgd7HkBqwm4CxMpTsfGdXTZFsAT2p46np",
  "key4": "5jt3nDwnWAbzTQvg4d1CUScVjQiTTFTBrf4Z9nzSqGsvESNrEBF9pGyJt7o5bj97gPbuh9vdGkePeSJ2aqVUr63Y",
  "key5": "6ugQD813rc2yuTy2o3TfZFPCz6AttVPNWdtPZNnvaQE1hoj43yhkNSXCazWeoHVEMoEE7d4rj5nhCJ9NfYkaExQ",
  "key6": "5ND1aBY9BiAnEAK3cC5AgPzsNnZAMu2juiSUaywLsu4W384dT3tjmWjZCAry7pNPLsxkufwdoeXcBuVKP6WWihKA",
  "key7": "4ed2u6kKZgcCSkPhJUe7w7hC4CYrNPYRGf6d3i8ZU5U4jpvFgCe6fLK2EoDET4g4JUwKUNBonuV8BSCvVkRTkM3e",
  "key8": "o4HZdowBBGWwkJSapEUHzpPoxpKLa5AnnMiEjHhdpzWcYuFhZAUnnZ8mf3quRtTDbJfK6qbj4NkyW19YUjPA9AK",
  "key9": "4KedCEhmzKSU3NaquXti7uRcURfev5GGvE9LubYDzVCj3WHhEmL3u5x5rTKmxo1zsogcDwZFFXAUtaHDwTTQL7KN",
  "key10": "5GNvmWckkzAYhaTJVbyS4ZK3JqvVgnFagb2vj4hACQWuLd53WEz23d5i2svLqfmHBcJysyHNKhhJmEimMeSPDKpq",
  "key11": "3vUiB8kRkvNPQyDXBrhdMVHmgHpaLFrB482SJJojwsAEsDaPTK68Bf9s2sF5bWUBm7N56eRXn8dDRGrnSLt4tzbt",
  "key12": "3KTs6X3PuyMoc4siWXiWvU9erkiGrvqmoTXZTQ2QTaXnM8r447XiZW1WdX8ciMGJ5AHM6iSUUgPQdxyKYjYG1M8A",
  "key13": "5NRsBnwWsqL3A2BgkHf6PZpGjjTria3j29FxmJH4RXiDcHVbSKr4kh1S3gY5rcSfaa3M49o3MHyse6NXcrqD6Kih",
  "key14": "4i9mxjsbNUgPXSU4vPWRvprszwk1SSuTxcA8AbPVB5ESuu4xi4Jk1BsbTCwBiXefEjuP8UACmR9LAaK4mkunczib",
  "key15": "2sRbyKkPJhFvTesRcJidgsm1ffbufeJho6V2AHSaVgWWVqpunqEzj6MAwXRvymdgM7UpaxKsNKgDvoP8VET8Qg2L",
  "key16": "2oob7Tmh4HYHM6LcNfJuMvnbWaXNm3WJvuV1Ayr5g6zRjEHjpT78KB5hJnnevqzbZNqT76EWpoZLq6PPBfoJpRbS",
  "key17": "5pZfGPpeFsVd8mErcUYTWCuzQWpZJHdZb3jGAcrsz61dMUqT5U6auiDb7xreiJtvQ45VqT9hvbgXRZ5zUSa7nZsz",
  "key18": "3CXTeFMig63ax7R5LjjtyLBoGoEUkJLRtT791h24BzE6Unm46DqmWzGgnA8FTbi6r4pfo5nPrag2zFL3LbztCWfs",
  "key19": "4EdD5CjLYjeXi4FrTuMpUqtrtuEWZAYCprGeQdN1MkjU8PwkkLW1hEyde9CtditurbREBcnwY5yq5a88dL8WR8zm",
  "key20": "3MCu4GmkUK8hCjJyyM9Z7BmokGRtxwtxsHEcjp9zcrVdgJC9fRmu2aPwAvVSEpZ7FeQZCtQpKMZ1dPKZQ7WB7j2b",
  "key21": "3sJJq9Pa8NvGhxC4ghDKeRjV9aQjbw7g371aQDY2ECyJ2GLdA1nXTdtHRsMA8YmTgK4gpx7hv4rT5fXQPKBnCdBp",
  "key22": "2rYBshDQSRJ4CDeU6xkrnrh5pE9NdcJPDEt87jvGoKnd68gpiT3SEDFFmo1ywwMtc67TKjhAkASCCeXHZqPQCppj",
  "key23": "4CyERnh8BT1qMjhPwpEhFBA5N5DGfwjxbmZQtyNQmxpmEfNzYDpaNS2XebymWr6FjF4QeNpF4nqTSzXGWBprQ3Sq",
  "key24": "5j1DYMFAePsXQLtAAaNbxQzQRwxiKJfWNEfxzCk7AEhKUcVnSKtZwQLQp2aCqgKPoZeRuz878Y7GGjFNchX75jn",
  "key25": "32zMcPQmMisbNE3LWauNYGXjorLg2XzGdRd5664ZE4kLAWSpUYDsunprUTFZF1sguGgyT7MZVopteWM6Ga9Pbdrw",
  "key26": "3zJV31cDQ2QUH7y3GMW1CmbRcAh6SV6BY3NkkHXzuEDTMtyXruSo929v2GSz8mZfXozatZVLJYRJxnmoi3EsNTef",
  "key27": "4wXtMnjgSM9gwPe7NDEXuZLhVArpa8nF89N975YA9oTfL2nvD35SPgKiM5NJMxag9Wm49ggk6gk4rVsZZ1WA4GT8",
  "key28": "MYhFC8TZd8BeVuJg89Ufs18y6V3MYSaF5NjS5rwRg4vSWrnDjP2rstskVt1ezaMYZFWEzxiqF1LZxKZ1FUdfoUw",
  "key29": "3HrAXNkYdaJjwtRnEa4JH8xVUjRJp24hXvk8ifeEqxiD2Fe5yo8uedvNdQ9MjvsnMDZFoq1nr8ehgWvVb5d6BEUY"
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
