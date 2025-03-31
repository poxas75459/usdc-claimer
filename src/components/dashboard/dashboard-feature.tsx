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
    "3Gxr4fz4MuRE5MZddN92XXtUg23eYbgKHy9Zai7nYjCJ37ksAM5fB5ijAzNcHKcaz9BNkBEKoP9WDZo6yTbYq2pG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EWs3bQDmRz1u2aXmooWw3KxS5woM747K5mvuBunFd4gELir7LE9uiWjAwmDCRNN3qKeKrrzpeZ4RHRgiUfRzqmy",
  "key1": "4mv1AQy3wiAf3yTcEGQK6WHQAeXodKkPuFWoK4X6ZE11d12sEdEnYKUSV6fBUMHaSeT2GPury3FxhVKspSeAsg31",
  "key2": "4V1XmZCKJ7gkRAdTi2jHkPanuQYKqnFvnw2tjuo5RowqnQMF1Y4ZdaSc8rh5madCiTBb1vS5zwU6dexWNaEB5PYm",
  "key3": "gWhhg7wwNLmhPmp6trwoqwBqxYEUTasqHMS2CsAKkZmLTDGJyKYjLSV5mumRbWwLiEN18CmwAnMtnB4wunfgMGS",
  "key4": "5mUw6STBvNo9FbHsW6u5h4DWWbk9E4mGibQrLSLCC5mw5JJU9uL1WY18gEnZZVzsDko8PVPSVSLZV8HVXah84fL",
  "key5": "5mjY6gcxnYX3a6hD5sb4Rb34tAqjsC9v13Mb6obrczvvVALDdyysQh7z8EuGFkfpXVF7yKS7z7zwX9EjKt1uuMY5",
  "key6": "4FaH4yCMJnCHwGgnNxnpiNDNoHwVovZekXTre5rsBLJJ9cc5D4cRPPbQgfNegfGzq66zNQ2yUPev4KWcwE5wimt9",
  "key7": "3m1t6hVKpJ9otAXR69zqCWTGQzbhq1tARxKuE9vBg98rdCpLGeQvyCeKQL7qxEFVvLnDYgp3TL8icZNf5nKRE1FF",
  "key8": "2SrfeKUncvGXXDWLxQMeZ1HhePqHLcuUV2mb86Vb5FZMU5FWQ84XAKEbuH5FWqgK7XWGuBCqFWZSKUHPhMG6g3U7",
  "key9": "4r338xomjjm54GhQk15CR7LPn9MkRazNr1n29npHoPPSPUWumqjF7Wi5ucXFw3gZVheM8tLr4FgpGCrvLfnbvn1o",
  "key10": "3LiBi5pLWooWpVuP6xnSqMpK7dhuM5tD1dgcVzoSXatTfHysEfkeYhz9ZXxG7LfD2uR8qugDZvdKZMcTvnSa5oAD",
  "key11": "WisFsLExriZn6Z1zZJxiAYbFiPvWfrGR4xMAXRkfNFxyhRDU3ndL4vzSSwrAdDkKwCJ2TN1gQWBSic5tiJ2RyoB",
  "key12": "2vZfJX1FKAVyieVewt9jQDitgy1FSAAWN6gb4VPmxYMPTUwGdEpi2MyFZ7fVzBmTHBSsGf6rv5oXdh1xFynGaJ5u",
  "key13": "6TP5WogCvx3tDz29TstbXK9Eh2wqJi63DUy145rSRefk1J8NmtHhNmVEgCovmJ2K6oLUsZQzsx1FdUudbPM82ZT",
  "key14": "23rTmtPUrVKk4h6JKyASKinJWWp8FPkZDq7ye4HKgFsNgeXg52HQoT6EYXWQ8hGTK6zUNRdoydCnvETuzwRJzfuR",
  "key15": "2559Y9cYrds9xqYw9nDjwWtjWraWLcgD8xNLZdhkBcP7N5wDMhaQ3Cqwp7r9LqraNQqyTfQmm481RRErteKW4q5f",
  "key16": "4hV4Yea3pF7T1mpEzeJtgBCBadtahQb3i3peBCZZrv2t7hUg9Gihvf7fKoJNMwif5hRxXfbNPRHnrJexgAGZ4Vwr",
  "key17": "4nMreFRVc26jdojj8CBLH4scQHvfPbTJeMmWpqnMPjVgErjwKxJRjwy9RVByQaPSuDc6NFXDb1StWVp5fVwLCzsW",
  "key18": "49oHEFDPfdxrJ4mE5F5CTQvJfPmSFCXBENw7YtYkdspizXg2xphYhkFBjHq39BGdGt2mj55seE3Pk8ZiVjHEycJC",
  "key19": "3YpuUukgkFNo4VPwDXsWmEdbTF6Mp86Rkz1Td2WWmKwncDTCyrKeabXjreuPCh38JAbkAnUTxXrLJJB6yhDncPg6",
  "key20": "5EtTTTMEVxfikWtyUxPpFZ9fssgP7axZWTnnmTe2KXbRYfzVN4hDi69pwqGvWN72Ad81anHXRywmeYeMzhJT7B8N",
  "key21": "2FuGSynQMbYhVcx4YgP9MAV6EbgPyHvg2jkBthLeYq6goadRDJgUTxTBzQ74iWBdPZhrkdkwsEWmLjCUXHBMHcEz",
  "key22": "4YWjSNzM6UoUZhbgG3YL2rCcYjfhyMoSFCkpN2AYYMoY185GJmMguw5Ba9tSvXuht17T7uqZcsgJQ9JfUkVJxCKc",
  "key23": "2qVBpGsFxf58uuRKUe3hH4Kyp9QXrrSswWYyzuo6XtHx7TksRUv3FRi3pc93taY3ykpCQ7ub7ZG8gm44soNEsqqa",
  "key24": "61ty1jQsPBo1DTxoVEgQqsqbiCL2z5dJ7rySSYJYUD4n9rV3zsLJD62tcM7ANf8egBygYtdMtTTBULxshXtu4pnW",
  "key25": "21Qwuxkk17h3E4jDRwnJgtaWXzxywE6SmnaGzW2Kgw3X8PnC2dNHwUEJPbnCR4kEcDatyd1k2kqVEfA7n75FQDAw"
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
