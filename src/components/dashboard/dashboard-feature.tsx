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
    "ZRv2a9F5pizMLMCBQHDoCHd216UtAYV8syCvbC73BTvDKS7tKuqkxoRHevYgVHPJYJvkiD7AEucXFZWpsRFkTGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8r9bVt8bQoXmt9K955XKimR6S3CJspyy86EQs273rKQbS8EtRWtmRmKDAEGBf2WhfPBCZxNTttHvcQzu6jbhsAw",
  "key1": "2mxE8ybzEQTxqQ4gCKwBunwAszJ4XHqChseowbyG7RxCaNQhc4vHci8p6cAxD3JMeXhQhKvmnkyUmsyruqABGgKY",
  "key2": "2g5xsBX14CCnZM9qSgJBfDK2yJZEbtZCMcPJWZs8J1paUV9UStHjmeND3avi3i63B4MpZVioqfaA76tZePesB7J7",
  "key3": "3WsKKyVAmM3M8rL3Fe66QNMGBChabEK88NLBxur6cr68i2PcnKFrDd9JEySUUGnJMtuEk9kHbzY5WhkMt8mHvDYr",
  "key4": "3se7R9s2tTkfyt6RERqpsVq49MgpfRMBpCEmrDDqeodxSKigfmRaUaQzW7koL7DDBusyf9aAPeWra8syo5ABf9oU",
  "key5": "4xQvegvmz4U2cUgCbqLDgpEyEt1jSpceZY1M9ji8pKvRDCtFZ7adTxqq8qW6D1uSiMoPPnE2ZirG7YXrrF8fVzj5",
  "key6": "2dLFRwDuta9zgddNKbUA13xAusWA7UPQBE45pZva6S7Ly3JijrQE77KdK26GJEuuWQbnTbASQkQne2bAA7VuEoCg",
  "key7": "kXFnE2qfqrmf2na8VWB2C5h6ajmcXp8WoqvCAA7a9RFURX2YPpmk111ZPPW6kDPvst3cGqhjqizcJiNf3gjE7Cu",
  "key8": "2J7tszyFxhj6f2acEAZH6Ck6W6kSVPmGNhA8idbmBBgW3mgs8M7pG9vBzeh9Hv6ScQgRZ4TZKnTwN8xbkVvh8nBn",
  "key9": "4tSupFKgoNB8kHCLGaUKw9e2BvDu86dofcZ9gJXK1acDRDgbVJGZCgVa6m6zz9m3TrA66KdWTPyorFrquSmwRntT",
  "key10": "G9a2kJpQh1vooSWWTsWT32VsUcY925nnWvXDNe13BS3mUFBJczVUrpcbMxeeJxtinLqzwZutcig8GL5vub2FTH5",
  "key11": "VrQnjhUTCvFesnJu6cymhSVTNcV3kXmsKhb3hU3mHfVHXQk3yuLa4TD6mcGf8cxp7jxE6K7kYHoXknU8CTAhehV",
  "key12": "A65thfxwBgMb9yk9P2S6MncssJvLwuA8FSFXj4xrt9abXJKNEcB79wGCQmd4GzowQMy74YUjo8Vm9UgrcfjuWAQ",
  "key13": "5piRDd5LBeVWgUpDJwT1JSkUktG3DZjEMKCyr7jjTjuihjWtW6aa66B4kuyGaoiMQtXGTweoavNtbC1i5pWP1hFL",
  "key14": "4LKuixt7HTC2psbPZUCm4soSeqFY1ZCpBNDRWbifWn2DifMtzYAk7rpNfNSrhiqDXSjRbqbb32QbSGDP6MWkFB5T",
  "key15": "5SQRHaKw6uEF7duhmR8zbzMJuUmKpTBwdKDtoQ5ZV2i6cekbW5dY2Smx9eateCbEeVh4uExUvDSBX46nknKB3qpV",
  "key16": "28eCPwXWm2VCAGdEBjsK8bXfkgXnkaEVR3mZt4o6ruXLTLVTpmELNyHnbJpsLqjzTFWgNmpxVc35JjcqV5HzU642",
  "key17": "4pciLs7rEry7ZyDv3H95vQBNV7dvqkpymVkYcDpkKQUZ8x6BCprrbuYyk8htrCVCJeMRstp5sNkA36PpcGapJUr5",
  "key18": "4UbnbYPQEvWxgMsVLqRX7xM5iwZ7m3mHw3NNPewD3e6h2fkLw5eA7CgBkFkY24DpzDBRzLmCkiTFSSFfNwt7LAHj",
  "key19": "3KcvQLxgxscoR2XyAVL8r3UBNNykCEbbaLWx4bySvbZme1714uUmfdvgV9xWo5u5gpQkAwnV2jAoQapxoU29q68W",
  "key20": "24Wd6CNYbMfrgFnXr4HTpiJRC76NRmqZ7bd53tNEyEyuK3MyK1tEQhphTho67SffjrqconAKXQocFG9yDJwkQg26",
  "key21": "4AeM3fvcqTtQWfUV278vmMdr9o1wuYnTd2xNmEnh7UkZQD4n1Tv1XLP9gvDAr6WVk6yE78WHam7pqYTwSJZcQJ2F",
  "key22": "8v3SsJ5Vw82a46mv9Vi5riBoekyJPm8mS6yaGDmWwxYMP6qRN4yAsMcJyTgzMYvhkqFn7wr3RWAPzT9t3tDM6zk",
  "key23": "54WhjBLp3QuYmRs6yP4zf5kFrrSFMwu22vvvcEwPRqiHHR2yLEiGvzAxmZp4TUx7xqvkw6Xu6kinkEZAtveAMMsL",
  "key24": "SSmt1CqxPzhAj9kYBPhZKYae8Zv5SgVzXrzQCR4V49uQ9zVmjg3rsKL54GY46rLZTP5E7yxqp4Gt7SjKX3esVzn",
  "key25": "5AX92riWZrDZQWrWuCvmPE8ysRi9kGXGAUkGQTV5uJhSBXtSzga4HCdbfbSN2u7HK9mao8f4XEyMwtjA4RzqBWMY",
  "key26": "WphJnjGXv21VYtcJMNqqAd9vUzjGsdzGuNVCxJXZpPDXY4N6hcECu7ANqrgBuNZ2euJcRyLE9Fpy84UXFkBWCP8",
  "key27": "4rseraaEG3mTjBdxEzokwdPtzdEbfx74PFg6agxPesw62HjmQsA2jn1De9NCXKQQrKxa7Djfne1De4PfqjyFDiQ3",
  "key28": "67Rq4CzcBzrNLbuqVpxJxau1n8sYELXhvzidJE4DQX6fCMJcqpgtpWGF1wSJM4ndRhwGMS6UKG3XeFXmTUcXq3kv",
  "key29": "2W1gxnSshaqD59FhVZzSPoh6rSDGwckXECbCVM4apV2XP5epivfRKdMBfUXgq95pd9CiVLpXxVVjYiQhyXYq4xKG",
  "key30": "3bQhNuDnEFJeidvPgjTta7idaVj7s2nvcPJQTzDxMk2Ew2Us4pcu9sFTjJcFiVtEkGxKbfgGToYDy9jAbAjr6BHc",
  "key31": "4ThjpZrChyiCeukxjR18yyFEtwR7owaJodXTABq6Xy8pwZc731ErPQjHPkUAGUtZhpy5a8YjzwKdG5ZY8ptf7Re4",
  "key32": "4EsH2QEV6rCA5juw5hYXCtTQLbTtJMTAmwFXJT57ogsXENvSJaFeKJjZwWJLQAWkzsmAuXfyJttWYCW3u7AFe2nD",
  "key33": "4dNkLMr9dGo3n7Cg6XSNVK7AvHpi7BsPXsgdnC4v5xeQ8ctZkU2WZos4DuuNfuvSBtfkMPHPYSdsvgf2JRUTve3s",
  "key34": "3NnEv46J4yJaZoDknbE8Y228jd2zzjL6fqzVGiR2mx1NRUiggbFNnhp2hKPSpUkhAE1NQiYtzxnHjjCZNY5JPjcG",
  "key35": "3rLZoYbqLcTDhTsFw4N8uqmzbfGYzTDBVkpg5APk9hMGF3C8gFt6mhVc5uK86SqeDaV6T9rGbWPP3D1cMqBS5vya",
  "key36": "4wmBhXeqZcMjpNVW4Mk5QSUYuYcQ2nzg5UgbpCoRfSs3jvF2YpHHYS53j2nthXZAV9AhFDjNZwv4pRrycffJtkmh",
  "key37": "4sxvnongVBXifFC1ksjNHah7oKBP8bGUpPrSiXcoMuqn8c52rebSJxgTH2qTxhzwzo22qtRRWX4tbX3khBL9yAxg",
  "key38": "2kwMoHwZ6FiUdAZ3QB3mhXJaxQkfLyAnRAzmNcmsybe6gJFY9egjWLtMjBaFZQVyMvLvbNWVVBGJ55FqzFL1URVV"
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
