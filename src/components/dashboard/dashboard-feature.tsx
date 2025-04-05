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
    "3z8kFjdvqTt1RFRrnU4ddRSyBqADxNoYCxtc3Y72GQxDpMns8PibSQXvkAsZfYJD8YxgxBQWM2xjQhFiBmwGgmdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6eR4Wt2X2gwRiQWQXvJWbXJDYVvUBxLHBYtoZKR85iDqEFAYS3YkeEL1jZtvsmQvJZTunHC6bF9HYi16k2SQz5y",
  "key1": "63fRKT7r49xBBW354SEcyNTxKKuq28eWogSspPpZrhFg85BTKzZhGneVt4AL4VjoFX4Mqh9GN9WPKE88fhqECshe",
  "key2": "2PAr5yZVXrFQPJ9gLmdmkLmaqbooicnBdJXPV8SZstf4MpMP7WCZXgDrh8y53cYhA2hHDsX338dJKa6AG3cnTf45",
  "key3": "2NzJpyqHmWRF6wzUWjThsaJYLAswaU7Y75qbsQ59ouwRrVXrxhmUnsYFw8EgKd8xZ9TpSCgFKdCGe3iSG5tXFrr1",
  "key4": "2c85t37F89tWRnxb9yEvgSdgjmw5XAGrxhdoydpKDTY5ZaFLcsqjQP1EXY2wmSAwrz1phZHTUXt3NjbKUCC3B7ci",
  "key5": "2Px9SRRxJPB5QhgUgK5EPxTcWGNm6qcsBTFwoBNSCgTc5B3FxxVPjiamVp1qKQSTLWFC49XA7LJfrT4K2NeuGY2a",
  "key6": "5FwJShKkc4Pj53wYg1h6HecBP4jkGJ24FNkRV8fw5DJY23DuzJRDPaffdG4p5t2ps8q31TegFcXiSjmZwV8fLg1M",
  "key7": "4rGwicyXVfQz31Q4rUiSDrewKtbLjL6sbZGcas7Z9LC14F2qYt2MTJBypZSs8nhtvMdcw9ZT9WccJZSeLUB6BLit",
  "key8": "3DByvNLSrY4b6Y3f6sKMkVWcHU8Xt4iCD7aJNmjEtbdtnHw8fnBqbMhKiLXUuuJcTsGNFNVgsXkpAAgAW7oUk5Eq",
  "key9": "5w1yZi3DM6VkLLY7U5VbYmR2zujunyUYTh2a1iMtEXesPCR3Hu1tCGRNXPzr2nG6nE4uggWqxN62R2jXTR5u8pHD",
  "key10": "3ZUDpBW8qB1RkgSecyWxJjDfqFgS5WtTcG4rCdueeLdujbXEK5KVycELtRPX56haESqNdnZzL2w4j2FKkjiARrkL",
  "key11": "3w28LxwH6obUVncVoCNxPKNHiJsGpL7tze5wxm8EGWhx3j8dyF14gnm5HvVsrfmNn7S5yAtjib3aAfMYFnBtYHYN",
  "key12": "5RAwvDWYygjxvnfYz47vMdsoAjtxD2FRJz8DD6Rc5emiz1jGtyxkb5GCms6UxGYD58vLCkrdpZx66TUevYSqcfbg",
  "key13": "5tmDqMxeLyD45cvPrBRGFFUf4z1iZx2vk4WtPvmwH9XUPhrMzpoFW8Y8poxSozjxT2Nv3MDpQTxUYd9nZt1KsAV3",
  "key14": "3fMeRUaYqpeZK2ikJrj7Evmh6KvfQzM7vMwBpY7vBdZCEJ6ivyToYBhQAXDRG5A9vZoHoTrbVTP7cxuFMoZUJsEa",
  "key15": "27rw5gjPXGDajz1eZSTjvznaUe9YovYJF7bMhzVEDC9wNPsfaymEc7fpFkHvyL4TSma4BnCwBoKeynx3KnjVN9c9",
  "key16": "5qTmUTtZanGBmHdp2V8iwJKAGwLYGhekKMB6FREAoeMDgv8Ksoja3RT1LFut7ibiMhRMhZsFQWCdPHKQoHH3V3u3",
  "key17": "2HnPez2p6B1dZhnNsVSqnjiNncRv3cMu5AT8ahaRtzSrznVH6BkALJQMP4jJ3Bh2DUpUCw33WnkPE2TLGZzN7btB",
  "key18": "4KQ8aaXu16ecJLbcUodpxAHGg3Gvge7Kbu8wPMyNLf1GGDuB5x8bo7g2aBSNGd4Pq2qiX6wZvhasrwphx3qxAZKd",
  "key19": "3LtWjv5p3jUUC1jbAVK4tThKoYcTPRTDauYNuPLNVgYK2taonJUumTQJSixoby1trb5bqqqz19Eb4L4gvo54RqbS",
  "key20": "CVtjRuz1HPixTG6YaE6nJ9No9UD9jQbeg6NCQmkxmG43BPW7DWr2b1K523WK51yRDe6Re6Y54g5wR6ucqrrz9P7",
  "key21": "kQkM2a7PAijT4j5D8C6o3CDiDmWH7CPCpgVHxci8Gjy3KfDLxy9AZPb4YRpsbYGXpwmmWTGfLCzAMXUS4uSXzw3",
  "key22": "3hF97L6tRouy8d4Pug4nwWjUHPV1QCVF9fsUKnL6XADtpsjckNjV5zHJaNd1tgMhWtTNH7aL63Xdspb5Loi5N1nJ",
  "key23": "4sCYSFKPkVYSzxYzT3HCxMymPfLuRQ2g6VXuV3oK6C9MCQrVaJqe42JpyxS6iPb7d6Xnw93n28Jy8diseNgYb72T",
  "key24": "2RUQzQw1vQ9HYHKVG9RUEHbXuAgJzshAebRp4TptVZT63ioFDGu7zYaTDQ9XCcgrPgcsAUFytbJ6KJzPPyihSBSy",
  "key25": "57sRbkDigQye4VNkeCSoJEya1XcSicz1wDhPjaUPQ8MHdt76gzdvgjGpTqDuHYHtqUhGQ57pk8UL83aRvu8rTHUA",
  "key26": "4HXGynLE4Q8NGzv8ssSoqK1GgNRWvazyDrPQHPxJMu2T7JeZVYdT5bjUjmfAETEq2qQuzYXxg6QRkrq6nzkQgyfv",
  "key27": "4UGqRHgJDUPzr6bLk2e3Ns2bRHSePCMBLCbVxLwanWkxAa7PMCfdi5RcSNsQWYMeonnH7rSpMqdevShfvsksoTQa",
  "key28": "2HVSLRGCEuaDJvpM11pvkbVRj3XazW5RNCvwEQXtcbbpmJ8XdF9b9EGQ59ucUR5RAUqa1ZZMj4RS76EWYd6vg5sn",
  "key29": "M7CBXjEw6XpUrYJagNczr7rokTGq9c5RXGWNTsYgPiXNcyr7PUfZSxnbFQ4bzXUZ5XpJcPFar3wocQ493zzRpDz",
  "key30": "2gasmT75UXkHwKqL3srrBFkVcNeHE5WCwq96c7VcmYgLJeuUEUzRVHEFp9zBqsBtUWwEcDdGaamAJU6v1y7FLdbZ",
  "key31": "4TRTEDwzFTBrxrT5ZaYtRYfSdyygXk6tDRrP3K2vHYdqqJeXKP7NRfikRJAbX9hep2681NL5xbzwynuTZ9UnsS2c",
  "key32": "3QyFS8DEfwqdA2ii11jGYSYvdBTdWyuNbK9VnDq2Jvm7JKgKVw3HxegJupUogoJKFxoXAXq7MbAeiHBfe2Joh7V9",
  "key33": "5rUBhh6mQ3uv5pksDCi3jCUW7D3WwMocJ48jMsFvfoVjtV1xV6aHX5GNb3gmacgrJBpHsTc1RkUhTBZdK64sXUT2",
  "key34": "tWDszzfe1gzD7kPchWPpxupX1PZ7CCrTm32ScL1Azfws1uFUhhN2nwKXZisFvQtjn3sfopAhn3rKP1ZGiRj88Th",
  "key35": "DEtfQgpEGYyGPUBa9LvcXuUX54oDpvByChTdxpv6mFsE51Ae45uyJCEaFgnHXd86XY9Y7mhfJpBK83DtoCJmiTP",
  "key36": "Uvd8qACGDBXWaESHcWyCk1LuvSLMTgPzwuUAE8qxKcbu8AQSWeGruheU6k3pSv4Bvp7kfKeM4DWVUrcvHy28eaA",
  "key37": "2SAeq8WimjzzRGDqKXo9oaZPZJ1J9VQFgRd1mzUP5JBUCmxws2qdG5sDtjtxb4H1b59i5exH2bMjDhXpw6C1DoWg",
  "key38": "4e2txMfdAmpL94KicurQHrb294bGKzcH43dunegK99G3pdAJDUyQHfwc5K1dT4Gy6QFc8z99Ru5ZQiFJMin9NYPQ",
  "key39": "L7bySBXvk5ge56UheKhYDLWcKT9BFVHSPCpBHaVMzevsdfeTKKYH28YYiVD8MK4v1CTfS9q3ZAodhUkD5R4UEXh"
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
