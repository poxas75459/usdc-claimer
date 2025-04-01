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
    "z4iPAm2v8dfTfeCiFi8MCUNBJ5fKmVD5EWsdYJ6j8VE9oGyGxyf1YT7t42WUoy7e6kkbkKQXJv666voMxhHoZgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JYHK1rsFtGKrPFcqDgwAMExMGb9xj3R7XwopoxFWmAEgLzYmcj2P6NGpKrBXHi8rRABMx7dXa5Bq7m6q18pGidf",
  "key1": "3pdRPxKH8uk84FxWbWVbrQjPLXATekyn7NLfe8tTsBdKpzExUgcFe5j3aRV83zVUEFtmiyzboecU4oeckKPEBWtk",
  "key2": "4kJGwajDsHwefgGMfHdCF2Bt59CdLmfdmZct4vYLy9jsdTiyGtSQcnBTcB2fgAGKmddqLrmZpNyNf4DVR8YdjfoC",
  "key3": "NjZCGxaeKJQnRh7kck5EsZ3FRPZQ3xGLVHaL41aHZvsLQ3q9p4qqo3Xh9vZghSBFtAPzjT7T2LKWpCdwxsm7RYy",
  "key4": "56HFGx9tWvkgmJUDDRKazwbMyfD11zA6XYpafQ8sM17ULQgzHzM2KLUrajNXWFTqDWvuUkWk67z2BmS9xNCNxZVT",
  "key5": "3gjzv9VHbtHsrRGk9BXWwijek54vkkwPhwqK8XHvJADDUqb1ZcJwgCx6CAQmvu2WYNekkvuB8jPQNxt55Xz15RGe",
  "key6": "4J2w7EJrvVjGioPyogMiQof2J8ZrhCz3gPy28DHhSpM2SsLHYr5Bfb9Cebfr2dGbBaWATrGkhkoHgt6fY3Hx6wTe",
  "key7": "J1GoGtb8zk8UywsxgSTCVtgjjNo3Hh4DSFJ6wH2iaw23ymsUBX1vN5EnwPXQunPTpe9vYkcxdnnT12mEoXQGPvN",
  "key8": "4p7GhxdRYhqUftEaNxaiBBx8qeJiCgBLxXbyLiuvBA6deuY7gtxcaR3oWLi4Fp87V4mR2VfnDKr3SMVgVPMJEyVS",
  "key9": "67njwgvpJj2NnqJ6S1pV7ShkNSQ6fe5pQrU7KSqr2SFRKfdacyDYguwq91njYZVuPFPiCUgqXAuabD4cwzm7sbhx",
  "key10": "3y6USqavPMTgjh96FXEaTFT6hfnH9ctGwDTQy4r2LxXFoNRg1v2V8Z2NCNWoyNyaW7TQ3hsdxYXnpRJHVtYbB5tN",
  "key11": "26VtsdUSDd1YwLLzDACkEvdsn1HRr6DK9XSxUDsnbF4Ke3B5CdgeVnavShcYuQLgH6LSSjYfvh6PKXkAZH9uMzek",
  "key12": "2feCCS1Q12mbdSduRzWuVsxdKf1hkuNRzBgJ3omWHA2e7eRR4E8wn1DwJk71y3DcKZ4dfoXL31PXx2faEsrnDQJv",
  "key13": "5KqfHPSEps3ZWaxS51F7krdiShR9RP7z2fLwUEuy9ok7wePV8cCkSriE5KaksMNi2KDsnFQtgT6iGjC85yQK9Vu2",
  "key14": "LsotSeUDCRN7xh9dX11D1D6c5i3DnALfGKPSPnxKzSuWcgZs3oZ8un9DtQ8At5jw4vom4tiisReugW1MXBhjEec",
  "key15": "5VDpVkT9Jt7hG5ZiUL8XzVtNMuFNx195Zwng3vfKPGoMuGFkyB1XfRGMen5MqSLGsku4YaXeKeeurDGgsniYT9c7",
  "key16": "5Lg1mRYjR4H2sk53u1oXzk7FYj5q4okyGQbiwHpqpGXGWxm9976gHRLH5n3k8PBc1AsyJdECuyobXHDaNfFtVGvD",
  "key17": "36kM9RojDi44diyCt4WHewFagb9hPKZz9QzwqWV3CgNwZWVag9zo5FzMYXkZ72qtgaw4RCjV86ab7wNW8xYBZUkk",
  "key18": "3iHxLjJjYd7U6EzutDiVjbwXP4csGH2JwiV6LKTiRrAM1ySeHJMkhf5B4R5fubMFLe8CqBszfZFMti6GvYUYN4qN",
  "key19": "5Gz9Hv5C9XiyaxU1FgiQAcZzFXeQvZGmUFV3UVjuo35Hb6WSE83LL5oKrXVGjswcw8szph3iXegXAVi6Pr41LSfM",
  "key20": "54A19vP4eohvobGAGFxpyFJnXhnobaSdpA4kycnUa9EB1poNSxUxAcchnXaCL6KzbGXSj7VqSw6WdkuMMrdSDYmo",
  "key21": "47BQiZcd145qfFGkCS67s6Rngk3CQKzLjNR21YJNH3DgbWijNx5MLgjshG13mvC2EfNDCMtskKVrzZryU5rj2Znu",
  "key22": "4xUGbhsdLyc4nbocdAv7XtBhfzmU54TsXVkKppvhkXpuJXpq71vUaWrz2A3tViRHC6oYrtvXWtFnh6FHN86wx8Zw",
  "key23": "dwJgp8zL77bh2oqtbXztCGzB2QjZgWqi9yb2ME91hjHVENFe6D6FSswBedMzVQC2NHP4xq2WaWfQnoN32XDDdJC",
  "key24": "4xxVKB89vvdAxV7uRt3c5e1Z6QE85o2hTPCvSMFVLMeAXX8kriXt7MTA5oLGSkcviEufdocTVRLU9wzQvSErch7i",
  "key25": "3FnzQonPzjnNi7dUwn7SXCgTtWuP6TYrQpymce561nenAyivrSpNZVe2zDiA8toPGRcf4j63DHH9DJR6ZU9p7HW3",
  "key26": "5wrRRoVYoFzLsJpdtZBiAm4HH3Q1KSvBNqaZ4JaMuiTqyyNbZboKCdbMGbjwtD111ijej5WAoWrXwSucoSWj6vRm",
  "key27": "5c3CMdMdFUA8s8hz4BBTSaePkCsjyPCnyQywMDFskjuaBwArezhq1pR4FWtopuGECYcwUiREBa7aRqSLsZaYzWAB",
  "key28": "6XBvYNJb7bzSo7Mjt2uQjHBvcn6owSbMxY251EZZzftUZuUWYWAUJ6fBCHBTRHRBvdYDAtt4XD6JoH6GBcALNML",
  "key29": "3qrpEr9SK8BhnkkTRmx4suPPVeQM3DwGM6gYM1UZ46YmpJcYdpubtChKGicKEfoMbWsVHiJr83BDGvNvgPg3PaNk",
  "key30": "2rsmPS3wgh7yW1z2CP82u6GSxTVM4MZ45M2D162uuRGYeVo8nqkap8mrF5YQEZaUf3LZpR496rn7Xt6pPJxZ3gf7",
  "key31": "3ZKz4799bk5B2653iHkUCnCm52ao6ZP3psPcMWBsMbrGu8t9WttY3Q3wTF6qWonfcX4zG5Z64BqKTHVcJy257Nn4",
  "key32": "5ZACdALXie7qC8vahMyKjHbMZFqkcQCDSAUPaPZMwRsX6S4vXqJGQVK3k6aJH9mGmQSH6bHPqzpBFV66gjYeQ46t",
  "key33": "5pivxzr1Et7TJgrr5iQ5c6gqgWdnGK9KgUK2RbtX2kYC1NVsze274GJrLLCP4vW5thEoC3P95HvS5pgAdrxpd87b"
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
