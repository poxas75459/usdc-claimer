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
    "27AeBCPyGeEHxDEcsJgurEsjPTjxayE2AiXRyaEzYxD49hVwK7J9DQwmK2V25ugvLAwoYyoF2z71fDb6Sd4sHX1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dNqg2z3GzgdsZMt8aK1WQZQojv7DEPV1AD94p4KgZr4PKQtsz29fBF1qtLZ8sDvDs5jhzTPDMFME27hNaSkArMZ",
  "key1": "5cTMZ1TCDX45Ur8gLGKQN5zREVQnghh2yiokw1prCCVQZZvZ5D6bfdpgNPDF9KkhdR68jLVcUKsZX68VNckD5XXR",
  "key2": "3jEJCQaypVxAKN5jhQCHfMufkHAxFwVRpa38K11wvJGopa2X5Vyusp8jFJyk47Qhf7u9Jvypc1MmbzrpYu4sJHBm",
  "key3": "eEPxia1jRwD5hYwzVTENfDD6yzJj1VPQjMijZp6myy3QyMSaWBvsNLjA9PcZQjqeMwBUE6nb6AEH38QAb4cmJBJ",
  "key4": "3HAxnBu7QxDdAJ186KzuQKwY77oHhnRZSFfrRjqdnvhzddngnmPUoMTV9QArx5D1g6MXHH2QzN2h19Mx9AaR16HQ",
  "key5": "5hX7WBEJM5uR8qv72hwrw2VwoLoZhXGq4GuQWkeTCpuBnopJ8ffU1qcYg5RmVZyDnxfLvNPEGhX69rN2nCKgoka6",
  "key6": "3fLpbL8sSTUndrgBGpJvLH73fmafhKQ25XgyN5by7es14y4vGUBea27tFpQBX2gRhxSQUZ5Q9XeKCKi9sxCN2pyS",
  "key7": "2CuiP45oSQv2MXejvZMcT9xawhEzxqkZiMjqPftaeKe3rQpBvHzf4yszEs6uNc3ia8HuWpLUjQz3AhiBuWyeKjmB",
  "key8": "5d5Ei5AHx9u6Mx1ds8igm9y2Co288LVrvum27tDNbW45hLFzqrbVwUvwif2n4y4NzpB3jp9XFXmEKgyHKqNgWWBs",
  "key9": "4feBzcgm7iThQpTe54Jjyq5uVGsCkb59RZbrnUMg7RrGnmkr6B9B8s21g9amRFW5kzxLGscTibik1rfZy94ZhEZS",
  "key10": "2tBygFmrV5Kfyhc7eR3ePA8wtHSbt5qnofA8ai2sdka8PCK5dynfANco1PZnTDSWzUjE22SQ3sKUNX2BgKFgSnEN",
  "key11": "2AGmEuge155c6YG3r5kXZbxYitbr7dvTEpyqPUgd7ecFiNThb77fegvDBK2ZXTu1D91VanzNAfWpjqs1uK1MWb5u",
  "key12": "4uVn7gTbxBff7jU59EkpXWTbmbK9oNY3bZLSnn8LQHEnG5mwSPobFk29qsPkiuEX7TXvHHWxAT18uDxKedtGWZJW",
  "key13": "2spnwWgaqW3DtmWJgDehvRYjQcUyP6vZpc9436tsdLqtgnsQKiX8bWQwnav4JCkWLiXbudSQDb6oapPQCxfYQFUR",
  "key14": "2QTqG13bPonR7rP3NKWB9ZAv6AmgeMCwwkaQEoJ5QPhULsCQEuFvENABFnGdbpwg2wXYmRL3oZUqcwhSc4HAXMuM",
  "key15": "2vmXDyn6qXXNQHfbbPxQp1nN2B8HCVcSdBXw8YPkAXcWj9rPpveDk5YNQ7ev8BP4M9nZFJHQJj57cvCrRdQ2txqS",
  "key16": "vDNKVqv9tT5odb7fizCpwwhScfk4hJtn45qQdxhERmuwEwWGc3UTwxfJaFb5iJ4NfRF3oqvVFmCgeJSac7uFCh1",
  "key17": "2TAW6DAktMqp3gN9PzWjz2nwauVqe4DLBzGz5qbGwnxak1yVcpDBLFQrJ2VMHhmivcQJz9iyD4GKJkdJUYF8ZEn",
  "key18": "4qUWNBetAWPk337uHHAupzr5DcWEkMs7fJqzfYQ8BRjwcttQzh2EQ9ac8NUajKYiv69PsvXQTjS2aBqTBBWceVDy",
  "key19": "454NeroURE9wkoRd8Lx8uzZ2AbMdJkBAnMEi1ZmYYdrMTzHKPYDomHbdBjFaX6eifqNt9pS1xfiC8bDggYZCDZQm",
  "key20": "Y2BJUy5DytLeuRWXj946wjcTumYvaF43jfg4n48VkU3FUo1uG3Kuy52hQEor55vCVqkAjBPoP36n5c8KSzcAjXk",
  "key21": "2rCXDDD6yrUxuwPHdX1YRF2dCQYCgWXxvBHzB6MRcyFmoW2bJNDMmpmPmS8giAbL1qkfidaxbZ8CnCGnxzE2GRcE",
  "key22": "3X2whcJH4FYuKLgzR7kDH1CtrErzEdwEGcuPSNW2zVi3TyJhz7sbr9trzrqvoKpx6iWsniiXHFYSw2A68EC5XafH",
  "key23": "58cYpmLbUBJ7bf8qhCGbXRFy8RbVq928sSdgw5T3gRMXaek4o1wLBsLLFzPFPtaYDBqR3pWEZG6CEz4zwExqFTog",
  "key24": "2dY3cKmoDZnQLB7LQy8K8yZFxFH4nJMNh4SSpKj4UQLFzsgXVe6DR1ijB7DMweWL5knK2CpmogDyvmcRhbH8Mtrp",
  "key25": "22ZFRn4KGisCKSMqVTA2hp6dBazA2iAW8Uk58yYZaYK7xJa62xV1dknuXSMGmnPL9nERm8jJ4rTRfD5WVmeeGwNW",
  "key26": "53L2hTWYYiwzCD3ALQ4hWSyV9Wj6RX7cG2Ag4ADw9hnyVVw2h73W7gbKb3WTr8BSfTiL7cs9DaFU3ngXJWoXKUWq",
  "key27": "4qQkNAXBsAhDzbLe4oGKQ9PLvFKNwBarHtnLrH3nEEtXw6kSEjkfeFncVipZWD3qD9FoEAWii7gLmRSPqwEDZj4E",
  "key28": "5fphB5TN9ioMLMe3CJJdTPRx8bHGD5zto5wLfTGwKxuv1s7g38RXkuzX2E2R6waXHRSriqLkAu7Q7d6q8Qta7Kc3",
  "key29": "4w5q842nbJFqqV2Fv57gZvngtiRqYuEjLA7Jrn1BnEtEhjvzVV3m2aUiZ1yGVqnkQknes2d7GyDF37M5JNxYTKGA",
  "key30": "4gpc6ve9GYNBYuHwMrzjoFvkRWCNJvDeehCHbrZpn8ccmDu28bC1JoHAMXRwEB92sLBeL5ZmfYj3wFm1k4kWktk6",
  "key31": "4VmFDcnZ91hFA6hTFZtWG7HX2S46dpagdFXk6fTvjhC8Mp7DxQeBMCYDzgKoMvEmszs2iNDDVTnzjo6yxEVdWgY9",
  "key32": "3JQQ2BQoczvqa3K8NjbRxB5Kh19au1aKXHubb6PFppUikYxKrRrXzkc8yxLpxMXhRmDHcrbCUjkUaK6kzRPicdXz",
  "key33": "244DxKwZkQuzXM1kKwH7BPse8gF3W1qjuwUirqBNdiPiktwowvzE6ztE3PmSZwyhgie4FLQ6QvYSVfH2tovZkp55"
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
