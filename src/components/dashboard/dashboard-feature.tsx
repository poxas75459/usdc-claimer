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
    "5SskvFWbP1d1ymTAa9zWrtNFQ8TS4EpV1qifA593tZNqco6G5P5myx3QYzoLxwCRBxATP1yFAGu7gznszb5ZihEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UaMWaYnfpKPTijoXej3yxMZBCMTERAjnzLtFAYBCSLMZAycYKeNQAnSttsURSxwiwA8yM9PUcqSA9ucNZtvJgQK",
  "key1": "66bfsZf3APeZsdnnsjcCkAi2Xh2fXBsryFZUkMr4xinA8kdz3WZsJK9bqBuvo9VEXsRAmF7bGcWi3CT6iNu5MQvg",
  "key2": "4uDPATxrbcojdv2TCguFiQp7SdTYh3F4aaq1mg3oMD2n1tFjayYnFqkCQvFeWy6Ss3BNKEKtGPfQfRSj8rDnzkPU",
  "key3": "3JfiUgadcZV3WUcNhAhsPNgLSpSNcSvFny2r1fnohKrUqkKmHEYe33EtEkG3CCMNuxao5rHiSfu3pDmmPLi3kFEE",
  "key4": "3KdxKXMSzkXJFQyWv9UE8fSGXmKeCScj2oorcsKgMDXHoexfeaNBFrA76XY2QG3xv7Vz4Mogze3uamMqyL9YCJXA",
  "key5": "2zYscirSJA4FYA6Kfuf3CcuQWJoS2KpR8EmPgBzZupw3Pm47JSbabLGHBhKmcwifQu81dpCmFiecWB1L9Zo9ybya",
  "key6": "2qipv6aYbUC3hmBjLnQe2gMJZa57mng5bikBqmYeFap53qtxmmGZc6f7VS5dQ8iBrCHeLzGvuxnEd443KaRsnKZa",
  "key7": "5iH7WnxA23hgjNmWrqfbJcQ1sxNFxYife6VQY7SLiiMQoAQW9GgK9k9ANXoE87LhPY6G5LKMqJjo2HqLKBnh3a4C",
  "key8": "5KcFCWN3eNhh3S8ug8xhkvBU36YWX5GqfTseHneqhNt2TVWYqyiZmyvLABnxNLycBQA8AcmrubnRW7mruWJFQr9j",
  "key9": "5sJTDdrdmxWN5m6RMM18ub7aBRdYYCGVYcxTQ8KzDnM8fsxJFQ1v6W7rW9PEJJjdMrHfggwhKUAJSHUMiciCdvXp",
  "key10": "5UkD5XQDDEqadd6dWGFpL8b2Fviij4R87PmTK6Q8DjR7Cr6JxcnWYn9CMwq68Sy4LPs5QCENZ7ngS7nmtGYBG5sP",
  "key11": "539deiuhM1LWgegfwFdjtM7USDKaYzAZiQjjzFPmSxaFzJiLmzxeFC3DKTq2z3RSmtYkDeyhsW3fowwvbdWLZQUY",
  "key12": "2vWM2SYfzrhjCTLqYrMjFjKDWQptWWdaFQ21xyHu4w23kkgpzXnk5Xk8j2po7SHsFavZEJvQvcFsUA3eLsQHTJ2D",
  "key13": "5wFrCVsMsqVv5GqNqFpFpcEJNqRKwFKsfd5DtaPt29gfSYF92q6AMt6HuEZJeAFPkBYM8cLpNrfPcAz7j6PZ9AA7",
  "key14": "2dMuzRRMA6WJMkxbjkWAxidNqnGNWA797RXBVnrZuxzKh2y1cGNUi9Sbh2WQ52hyyvWs8msfqAvg9Wq4x2Dg3aZ4",
  "key15": "3dZvkKABEjTbX7bg7ZeNAf6cRdg4E9knisjMzsn5kdzuLb642i76ZwWBKTxao28BrKdTRx6BRnVB5rRFGPtzWrzi",
  "key16": "4STVhRiQj2kSNNHWCv9P59kHVVj9Lk9KVCHsCwaQKLJUinRvau3DP6aWpA5rnEozhjhSXWPTwY6hvxmiu8o9kT5n",
  "key17": "43hYtGLqWtN5inX26s3WbAc4QuWyTqAGb7UX4NaNr9LCvD8ek5q1v1hEqqoBhiVXY9skuMDzcom7AydpUXDFH342",
  "key18": "4x91fsn4LvTcYvxhcVyc3gw8WyvPTybeHgJ37ysTKrcaMJqNiV8sgeP795ba9BvSETiyTa1yvmkN5AaQdkvkoiBG",
  "key19": "E7nhZCsbJJQ9Bp7yseLUj4vxi3mwenApuWM9ynzTuvhAgQS7MDSrjUs2TMUpXrVwzbTVtYnCMz7zjp7WuU7EJWx",
  "key20": "244xLCbLhYPHTCuj2KEgnwYafszkzgPEt21XkoqYHuy3vLazeSvq6xBtYapEoVWNSPU44pjrKdCGcEYqYaoQkdMt",
  "key21": "4rTW3jjSij9sgW4ki4pzCaNiqPJiVCYhcvxaEkzxu6zMJL3fuQgpdPaWQxkoGGieRBRnMs3kbE7knq1cSRKWQgnt",
  "key22": "5nvMuBonjUFaF1P6SmS7bzBBQv5Krk9BPDBvYcmsJtxQ67MEQFkR7aC3j4TX2XKRvGCb5qQCyXTBTbxXx1XZEv4X",
  "key23": "NB2H4dKThRyY96Y3P9giKjBQArDgmzXhvc78bQoC3ACyxioKCvz5BxvXDJymnpJVq7ipfxWTKxnVuAApzAjiKic",
  "key24": "4W6XPSwxSLeQY64j1auTKStCvFHQGhMgTQnBddVcndmj1TSXnHuPg8XySTXnftSNdLaUmYknW3CYZyYPYuc97zUo"
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
