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
    "66rawLhpcAZ9fd2NG4e9Ln22uro3SoQyVSRBLZpuLNwG1TaQeTvg1XVaCPgox3SbVBQQCk4w5XNt6y4NdDrQLNGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F9L4MBEqw6mdke5uDPYjzcQLmyMLgS4SEYHvgLXdrjFHzQoAugkT9tNR6oL877eY1G265x3KtsobKhFPa3GwhKc",
  "key1": "5Apm29KZpR5LJuwpptvJLPD6a3hEaqeN41HaprFm7VudrF57XnzvwGjQ3k7zpen3xcUqmzVyuAsBTtxy4QdHXKRQ",
  "key2": "31sLrETbGqFUNtW6mcWZ3t3AiXsHAMLbv88kjbpxfUSZWLgFMsufjuBQYuudex4Pf7dfb4YBnHE2BcStUCsaHiPv",
  "key3": "2XrfAkEBpdtdu3q1YLqe2ya8vfZM6NDwMh8A4J3cQbQWzszCXUG1jKAx9aW5HHcWhvTdpCMFex13RYqoiWyusa2W",
  "key4": "ke6xQ9Ef9rJTYk5Xgb8vWWMKg4VdUgZ1WuG1KRDgHpdEgaFtEd8iG7vLLdbTX1TeEMR85Ugb58wp9m3tfgWuFUU",
  "key5": "5eVUAnrohWmgdoXVj5X5RFcL7MckK7rdAp9UPiJj8TAbfz2woK1s3hEcBfjjowViZrddYvTirFHAApWB5baqr1nR",
  "key6": "5WPsKMouCDwS152CaGjgcA1Mxa2P9LKHfKiDcBz36ZQb6QXebM1m8RyqR4gNhPM6M5gQL9PxoCz66c2YkJRPgfwC",
  "key7": "QwPSZjKM7vqqJ9mhWN4WA5Rf9yeuVgf9G3EgS3aLciDxjRzBzGpWSpYxYWK5iSZZhDzU8gaJ1gWqsCE5sKeVtAX",
  "key8": "3h39dh1B8e3b2wU9N997D9BS91HBJt54Yae2cCWZEvcG5s5z1LnuqxQUYnZmR2qVbMFhiin7JTBkmnPwUXNQtsZs",
  "key9": "2fS3E6CezqypUHRtYwohfHi8ZRkx6KTcsfbmrYYvYLHgU74rA74V2bicFdsLdip7Xq8xLecikdx7vFA5Nv7TkLgD",
  "key10": "3cBytahct3VnS9DWGDuH6KwZvDrWjRphmY3zyMJRNaEemDhmAMMwzuFeZuy8kdNPygeU58jvinsDwpRDdippGoJ",
  "key11": "5CVdUMGbjvvcRtbLLnG3HhuqqHftmSHLL6YAVK8vV7wMWqikzbK62cuCWegrpToTdsEcFvnFnnaRBfmLwkvEAJRH",
  "key12": "hqoEZeRwy6z4r7kJqJkToeWoJJfyj1NRuvmuCZpCtv8CPBSmSmanWjGw1em4eR3jdYGyp6Zx6kvErgCpdhUXERu",
  "key13": "4gM8PbMCF4Ecta922QfMaiwphyghWc8ke9qcNsn76SAWsWBjk8gtxMQCT9qby5BJ4sQ53M5jBq5bdTUK7y8YMX55",
  "key14": "Q4nZ8mMcC1cSHzUd3qvQSghQ6vB61A5dXopHqwdYf26qgBju6xGeES5X1Qfkhqq9F8NjghfqfmnbapijygQnqMG",
  "key15": "2BYQpk1LJmZ8S52j8Fcym4EM3XDceXqiBMnM2CdTRHowEtjUB9dZ7qw5AEqUgMotevdxfaYUajpd7ayFFT7xLmDE",
  "key16": "341noSdrfvkbjXZi1qmwXEoGYaWPWCvtdpyrGF4yGWaqb1yJVQPZsjeo49xngbP2ewo6eQJzkNRXUgbASGXnQw6J",
  "key17": "2vMnVi18M6mLEkysy9Uyo5EArH2RzLnx9bPzuHnuWxKch7tSgCmfe4NKgfihdGJxGL3YTfQbik8nYoitGVewbMNh",
  "key18": "3iRPz7saMfCZ8HbMEWkivD1ctFCigVb8sBuKDaX2BicgXmnUDSygd3FRAnRe5RJcSdkQiV7aUdgLLPxhK1MDQrF6",
  "key19": "Zg6VNPHGjshfan8H5CHo8GdfPeCa2grVtVZsCN5kKeVARiBXLKNavkt1T15S476rD5A4ah2ZAwq7DKJDpvM4x6c",
  "key20": "4HpSTdwr9kyBZYus9gd2YiFUTEF2Vfcpn6efkybMGSsR2Gxn2Knv5AxVx5XAhjxFG13dAqkBm5yiumXautoJcy9H",
  "key21": "2p6g1hJEctXhA8AdTyrP7WRnjh7ZYxPjnQHNboYNBuWqWP9nFbHo1rC5YJ1giEiAH6B9GS6T2s3AnLrxjL3fCLRb",
  "key22": "4vSFxQrSbngMXJT5rYFu4xJHedReFT1jH7AC4DqwBrzx6c9Hu1WMmTrFQ1EpkgM34gJbnJBcYDGxmQenvkGZ6GBL",
  "key23": "2cHh6N7LVZ7JBjX44giMLZ2wzcZsWG8xu2vyjkRbcNTk9WZCYfzbrDdLzBopZUMkv37BXKhCa8M5jP5p4egm5ay6",
  "key24": "4eBAjRKsZof35NALQ1awUfWBxmuK62jKf66TXJeHjUeM5b6jXLNX6CMQGDE3wbZoVXtM24Gk9Dgc4vGz8aQvPhkr",
  "key25": "63fPxTSmJx8fBZQQhuUfPK1yx9yPav1sARKGBF3EGkMdvZbTt1X9qQUPb5DXxSPEs6gEdKaPnshpgnBxikx5YGVJ",
  "key26": "3z9vZSbu2hmDM3tfjcQB5CYUN4Z3RMQvmjFJwBbVLfYjbiistLgeC5gqp17wK8wZPqPv2gJA36nBb7Bx3STaMZtR",
  "key27": "4pY3tNTPwxCZzu59LdNudFahXc3HF5xb5M3nPx3iGoGmhP9zS2rPjC3TP9YQmBKm5zMrgz3GMKUVwMc9LPTi7Ysz",
  "key28": "3bZLp9PzKz1fjuAKrqokWLSmoctDEcriQN8WqCWFieSzHEtXNKFzmDkYycKPW5P3hWrtSa4P6MoV9uYqkreaR55e",
  "key29": "4bXCTYb9yGdnFVYC9mPcH91m6VGUi5QNrfPz33EwVPmfVPtVghmeptsih1QMxepX7HCUrT6XuDCey13m4oesn9R6",
  "key30": "4AEgJVE2mzwrgaaDLryNrt9hSBMe86g4g12qJQL3uxZvZ9dU9Nmdta3C8P1LPmSvQHyijCVocWtqiHNfEBK2N7Cw",
  "key31": "5iC1yZ3sH1fJ8JfZdtr7SMZuUYWxaGXhK51XzhHjPK7tbXY39DEG2c5Ebvbmtp6w8PK1v6xEv3mPaSsUN8tFP2gK",
  "key32": "4nusHjZsaVQgbrhmyheXbNjBqGW5qk7e8y15uuXnfbRnw29xBAohny8R4Jzrng43N3C114qiNtqMex3zpRmQKjiZ",
  "key33": "2HECrZUx1smEqhRgVubQJMst8AG6KV5CfBasysAif6fAYVQSXQwMqh91oot3gAeRbgU4c7QqsgFzyiZb2rqb6QsL",
  "key34": "3QYG6qVP2MQ8KJA1ogjhZrwkhxYUu1axfCkeQHawSCvdk6Lam2s2tJhufgduATjMD5qy3iLeQ9KGK1HwaC4v6mKe",
  "key35": "oPnT1os2XfXuxndUpGmXfiRi7gKetvFPNaSJrCfR6Jd6XZr9FL9bQDrUyNLRF5msRbjxoDNLE1fPzXLRhixKoWM",
  "key36": "NcREJpPWcTJos2jfTLSZvp1FXPphyCGVDymp6i6qmBHxLjxM2mPfKhdjikcsTuWBcV4UkRFMnPzeJVbd3Xt7C5d",
  "key37": "4GYWBrYtkM52Do5vjkYtNZUw919zc4oAwr4mreUPrWNE146Kh7t5TzpgYWWcnq6Fd3KwXXBzC7MNLbrL89cTeJKi",
  "key38": "64wChgirQrgD9jrnv4iKzSJPfMoYNwTUfXQp38Q7wNGpeFVpPXf5aVZ7kHoBbJ7TEtgze1fiuGt6d9bmJDsjKBW2"
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
