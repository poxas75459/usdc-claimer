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
    "2PN2SnmRfrvvCywM8y3tLiY5e2dBZZ9fssLb41bvuhJaUvLQHfvf1FnP3ASty4CdgbcD57FkEuuguCNHEEAC56iN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5roQ6NgD6UMKjFpouziK6dTt3ivAZDqvQ77Pi26ASRBwNAhG3vi5azvhGit3d1fSDMQEd6TmJTphsthTyH4SBx7U",
  "key1": "2YLf3f6XmSdyAs6U4mQDP69MS8eKqW6iz8d36n9jFzvgFyqqAa1zApaP7ZjxAfEkSmfCTULAVqPs8dTFRWtSPFEQ",
  "key2": "4n5SW4bXVDb1M3yGS5wYYcMurEgpchUAhLUZoNhHTJgzUvkdzev6hFDzUJb7piiErMEM7pbj9U8uKEMP8BVtQbkk",
  "key3": "4zTfUWuJqL77AVrfSdwz9Nij5zWZAPpn4qNb4DrgYudC5zGUhJ7HwPQPFmTjcUbKqZSFhZ6f81G5TiiaBkUg7sjE",
  "key4": "2YbhifW7dspNGdaVQYEvjfYStmMWmcRHr3J75zGpigsWLw575V5GUwBnXZWyP8NrnaUeSD91emb5yaXJtshBEvHv",
  "key5": "3eeNZrfZdM3j7D25g6DPveez5Q8mFkXLVKwX8318BtZFHbEjsQ8B6M4ftZkDnPRy652bKCPF2GFx25pDfreLYKzx",
  "key6": "5PDJr34aDCzBaZzUiW2UHdVwrfnXfmcWVWEadihffQsThn3BvfxBiVbCRuSA89rq9UnQJb9isBe9opGybJ7zfypG",
  "key7": "EXJvWgU9dnbhWJjHzULnurpNrVqB2sseReefj6cFtQ1Zs9o69eatEvS8WhF2AQ4ZCEKRi7hfMrPohAj4PzdEKWq",
  "key8": "eYtScpagtEPqZnJuaJ7C4miaNFMkv3aAe8H26ExA7XcKXjacmeMTYqK4n6NKU2WTY5KobxEfn1vheG5GdJxV8Y9",
  "key9": "2iVVaHVRPCi8VR9ZGHaRdme3F4weuzvGVxTiU4c3Bg5WJ3HFdozeqjyxwzsNThs5UMuDEEGtq6Ch6xj5ecg2uAuz",
  "key10": "4jm3SQbx3HUxkQNvk1CKYfRvYVfoNYLziiem151xeKMiHQJmTjGe6j9Fveq8CWdYVo4BksHHyzB3VskHuNCjXgfQ",
  "key11": "2GLu4jXf79t5jMN2WzouEKSFe2bcJHsj3YtpGD4aosrRqASoT5Ph81cukueopiQAf626L27q1guEiSKRgzwqc92H",
  "key12": "2tr8sS4NKZsEiSDh64qp59sAYd8CcWD3tybczWpc3mdghUK7BhvRNHMu42cmJv1svvjjCma5RqnKpf7FW5VgQK2W",
  "key13": "2iZhQmYtbsWTSH5cUZnvwKbYSHfQ9DHxQytj7y9Dcma9JK3ZtKCk8xj3qmvS8sFj8v7CEypbPByQG1fuzL7Wgdtx",
  "key14": "429sF43aGXMHWKmEFkUqsH4vJr5RiS8FzGGv341Lb6fF2JeFtpEnX8tJzcnRG1U75N2f349HbCqMxS3TgnBF1pbS",
  "key15": "5CLLakAtfBd4fuK5TZ8mRQNDq9zW65CM3gbJbNAGTHwvMEUQNqALyGLu1rieBQKmo2TkvAxCNkKAorDw2vh5U6QN",
  "key16": "2BVzdFc1XTKxFFiwyy7dviDX5mGvDumhy1f6oquen8wQDR5Pn5gqCSsYTnUqSQaVH35qBJVy4UJv7v4Z8JqTWrDA",
  "key17": "4GJ5im3XbbLuUVVRqxD1VQaqYCGwvowjk3mmJMBKpX3BKFB9jPUfRJhbZgbk49zVrf2R5wHo7TwkfH2sigxhuYRh",
  "key18": "T431UnTJMCV7yHMUwR2761BM4cMEcmJvCNtnc1wZjiVj8VYi71CP2LjcX6tUdDvpb4VgsqZ49KMAgwqjqxWXQmy",
  "key19": "43TjmRBz3w3h9vJqMDjk2Ggf5XuPFcDXgaA4NvqLsToiWPVMgtvLAMVwu5yXu7ygH2BqXKaraRHcabS9viVwTTCt",
  "key20": "48DrZWERAzeMJfegipPWZQxM66DVRWscXXgir6XxoFVADJPGKd9D4ELE97haosmwMGC4Ax3Z5SUTqkDbDzFAsLS",
  "key21": "2qsBaRFa34qFspxfbguMDAKW1KEDrNdnu7TqbvVasxiqsBY4YwtPeWVJ2GvVuKFQm21RPh5YcAQ98UGpYUptyd1Y",
  "key22": "595mKpXxDkZhzTc3ZYKbPVdbd7iL1GfcTW8b6SzUpSCAfphuftYMphZx96mH4ksP8c4sYLWzD5NoAHQWXeaT6tGp",
  "key23": "3KWxC93N8voB4dKV9thkYbcPPuVPonwyPr5X8t2zep6aifNMHEwSGwgAGZNfpeefy47KKEaV1EoHEUT5nbjXCtMH",
  "key24": "DMy4o8rpjsKo8SGQrx7JtVb7eLbKj3Xrmfv8evx7JyKdrsLLgzXmyfkCZba5yo9vdtpuk8S73Gvih2XSs8V6zrc",
  "key25": "dNrTXUKc2FmJGeyAdX148dm3Djac7GsPnvuhtWUZR6RNqiWGMffJ6s8R7c6DrGyirvgC7LMpPrgRWiMccSHLppv",
  "key26": "5fvDrwqCvUdh6dFisbRmcv8GkBC9Tc9fSx4CKYLHWCS8QockbMWR7QVN2aMcxNsDy3VRJcAayqb5W3ZhFGzeHG6j",
  "key27": "DC2yjUw3NSHchoow6iV6iinMh9BajrdKeGwnvr4wJe22nUAqRe8zNExwJcbaj7sYMXmMe7Ebg4uzSxLzQDTiz5p",
  "key28": "4EJipdZWrAFbzfMrmFKL4CFdsLHSVzF3264DT79RCeWfXAEKPXu6ugZph7MrbJikLZg1FZuECDbg1M7QBiunLPQj",
  "key29": "23J2ZEPgq1DTCEFmBwmUiq7dTuc9TWojK97ZdRg3jCFkXxTD3K77K9thVJ6BQydEZMVGns6Ji1oC1DhzFxN4btL4",
  "key30": "4EGiDCQ37m1Pd3BqQwAvkVpomevT764T6BbaueoHuTXZgxBfeztiJmhQgWv9n4bdj66fxwTvoB5HS95u6CFEP8ph",
  "key31": "4yr8NcfjQzKsNm4qfJUXQr3DBFtphcqAiH6oVbYo13odzoZSVGB9vyRWCRvWLzZXq5c6B9qaRsUmrL3ciG26YYhr",
  "key32": "4NXbEqLXqm2hUbEdyHFbHvTjmUsfYT6nieU88w6Cpj9HMU7WFnrnGG8yQQdu3rFNPoJRxZA3PigGb7pqJFmhHtan",
  "key33": "5pFcsdBCeNHj4ikLBwme8bSFUymqVHNF7yYSuufqpYHeu91oNZJvbbJrUtbyi3id2QWrmNodDfnUGKGDJ79G6WAF",
  "key34": "SgQqYvjSkfqWhB4Mj9FtdUKu1BDAX6FY7zYZoReZkyMwAQUaFJXX6HkrbqETw32oWFvFnWFgC8k73DXQSJRWZyZ",
  "key35": "4EJwNu22UZzNP7qUjvky3o398CV5gfgxEDKbfCe6rQusbku7HV24Q3PPNewiWgEr4iXDqdKKktZ3vFvzt8a4wKWi",
  "key36": "3r3a2hyatrsahQLs7KTm9TYLL7puQUFQC7ws5yek8GYVpNq3DMoSqzNANugMgBxe2n3zpjzCURMU9CVL6gQ9N2Xq",
  "key37": "4mYgS62MUJ3rc5g12bd2QXL8xxVedHuFAqad9F3EFPbXVJX2XpngGD45MTft52w7fkp6meFVWJSRumwwHfEsNSJ6",
  "key38": "2jrRnrPwfhTvUm5mAJWjgdUiNaqvBNxQoaoDVz94HRFPa7szTWouRsuqxwVDrJ6ee52spUwDCs6uJWXLB5GpMik5",
  "key39": "4STvMg4VmsBUd5eT5d8mwcbGAcSVuXTQ4vFqMEVDU7TKbajb8NcbNjSvuzqQZ99psYk7ZcWZSyVtQeVePEH4RY7Y"
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
