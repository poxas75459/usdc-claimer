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
    "5wytK3X5LBTRjYSoS8V1cU1JGzybruBbBDFvpDEaSEKqG89192zh7A8p6UqXnSfChqJG6kC6gK4J6RyAtk2bZtVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hqh5Gni7daMditerkR3nrHx7Hquq7fDGUPBfFvkbYhnXhox9BRhpSzRBrKwKcguLBMUSDwweMCAqwWoZaJA9mMc",
  "key1": "4At4zg3U4YPAweoKsx4dxNo9SKWcP8omhVy5N7W9o9LPbUXTo2DsnUrnAcKz4LBuEDEHVNmx5hJmMdR9ELeeyULL",
  "key2": "3vK7GQyXqwRLdZ3cddo5WXYzdocvk4zAG7M5xaXx1WtXqJ4rtgtuHJT8VsCDpXx99XQ9tDVXtqEZEAPbmhTEvZFM",
  "key3": "2W4SN36zeGaVu4VsFEtPYEALgDX5LknB4XsPqCBLChHnfGs17vmDi6hRAYrXwVsHrgAzNX53P95knpCkxcY2sSG4",
  "key4": "5jm6KwQ5c2dwdshNYFKbULkRtHtSBPyEBjGZEURALRx8CinnfBq8JRUFeEPwNDYPxzWep5FgKUK1ETZv5wyjdiZj",
  "key5": "5Mi6L28cvjoYvrtARQtALLVTDi3tqnPS7LgZyYe6eZqZzhTY328EEWqM1JwjgotoEQNwDPzw4tSM3VD5uX9HVP6v",
  "key6": "5b9gQPSJqa2ThkijmcPZNx3bScnmFmH5GeUekWoRKaLpoWxMwCNcx9UDVzZuBMpr1REzWdCokjwvGkvijxfhtW3N",
  "key7": "2SCQvWkgU8jmgFhL25CX8WL9FshCAwJeM3fMLX8hYqRX53Yk8D3bLmYtGqkdiR8PJaYPTEY12oVYYT43g9yBmA5D",
  "key8": "3TPoZqTPZqWAyh2amdmyGhFN5zYxZ1rQY6HQtsbzaXccfAnoJ6NBwQxBKxDV9geALsCxWaP2VbUQjK3DRVcVP8aj",
  "key9": "318hzPPQ9G3r7cEkWBMmcR91KKfxtmsbpzA2ugEdrTVXwdid5FUwFWDqpxDpsr7gBX3nJTVnYZcvR6yt2K16LoyB",
  "key10": "5bRSo38tHffgqKaQR322ACJKHD6fZo6piRaDiFRptvG3L3aWABCu4z9p2ijn5t1nVdQXeotwgJQ3b7kGwsbB7sbY",
  "key11": "3tBBBdRJpxzsSa64ydWXy9FsULFkMtt9yuB3ZEa5pngxZuhJXnd6S8n53vkdVL98fCE2F5uVmVeUx9oG6AKTezjW",
  "key12": "HsfZMn997TfjBQyvvfGTP726Q7zBiBdS9vpwXPpCzoyTXcr7zEUkfENwvpN2sA5Z3QWMRMVaKnuJm95KkvmUAFL",
  "key13": "4Pdbwhbuf6Qzf3xVrAN3Y1iBHcHAz2j9kZhDLWGhTfonqE2aasejS7MkcEE7TFnryUymM73vGQEwL6rr8K4E73LD",
  "key14": "3k6YT75KrYj71L3X1PSWGpvHEMC5o4nPtjPH2u3LeWeoAg4BjzsP7qPGY8x9oFs8AEnZD4EpdLgi6gRYMEU1RXcf",
  "key15": "4xm2jcmT9yaJPVwCYWip1mcTdbDPebdjTWJ3uZPU1HUEqkabJSFcFs8iMSTpsnxBrq2CKw5WHzbVWnnP9AVniH71",
  "key16": "2igLQcaV17J85p6wezJQe96pUZwFd2UxJNn8k7CGzRQZJn2GjvBHkuxUZkMavQXnkHnRyNZg8yJV5JDnyqynwnPm",
  "key17": "2eVHv7gngC4MnEdjtGNUZwAnVwfKiM4konUgef3Pz3i5QNi5SATskY6pNjSvUnxq7byRNHyzcsxFeSXyV42Tt2ot",
  "key18": "4hUWGgghNwDxzTevMX8W1cK8p2ao3e3z81kFrbW7mbE5wnZrBY665Z1s7UYrneD2iZn9g7YYJ4J776uQDB8gKqec",
  "key19": "55LgqahS57Fk9qMdN1YfStg9zb5jPBGTmwygp3jt6RVjwyWCzXkNJNwxNx7x2B3V5rCA9Tk87JFM3dCuAz7dhMKW",
  "key20": "4qY7RfHgcwUEkjrStTRUWkci6Ff8hP67vbx4y8q8G1FoFoxtweqoQnhMu4qSbqiEm5sTc5tdkU5WDC5XVKjFoCe3",
  "key21": "2Hdp4gi6TxunQivRGdqQhCowti8F4yoxRBqLusyeWDQW3BidKZXfxYkd4cvBSSFMzhB3vxFMpzPqDfRSYmvbB1Tp",
  "key22": "3dWqVZQM5QdV8KHjYaDoo9n2omzQac1qasEwW6simu9Srrho9u8aN3u4h6i7mEE8BZq5CVWMb4kr4p28oKxwY2DU",
  "key23": "3kdsEwtxj8vMgSZqwhLdDsFVHcnFppjjS7A2anc3bukz7KKU8dELjzwce9d3Mef3VVqTyJdz8MXGg4bLqr8YN9pZ",
  "key24": "4NtmPANjj1HCWQ1ixTWcUgv1VAWPZjH38n5ddUzxdCo5bfmv4RQbYWvdzmX8nYYPkHtnP91PPDc42boYBAathnpA",
  "key25": "jdtmqhTBYL3guEL6XoCPdQ47brgNKpABchBwjwe6SgbRdK2YshVRZE5kEkMZAwMPuYotMnmFeMha6h5AyGefrF2",
  "key26": "3vkxxL4oDX6Brmw6MabXgGZeaP6ygKq66sZHZcva8AQRY7xi7AWk7eeVgAmupKmuXhDkiWDkYQ2EAW9xQFkCY5QW",
  "key27": "38tgLbaaubnTaLS6w7adCsgmHrTZNxfVSvwbwi9h5SM5LGXbeJyrDrR3mP9KRBchuqi2BXGjw8bTDrDJ39cP4hKW",
  "key28": "57PxW6RiEqq96BxZ1trCv3RPNQMd6nAyk7oxRTnnw148PFMDFoC3MjLGsvPUUgS4SZT6zFvs6x5szPpmTiQc97GJ",
  "key29": "5SPLsWKr32hAPsaigeJHtezuN64uBQXUpbKrmVnuSTVAFWgv1zhsLMgHYmAkUWCpVDwtKKvDJK7HhPnPeMtUv4kB",
  "key30": "52HrwjdtZuY7JYj6otQWHvQS4iHGhvRqUrq3nWhRvCPbgchusP8K9ftV3W8u7nxycJyQWj2d7QnLSNoHzP3WqTS",
  "key31": "v11ceNa5dpDG6tMMepDVtAvwwS8pnd27W6GnNryewcFHJuBoFNEMycjDYt4YrP66FwzAE8NbGcfUxehGvTvE1gZ",
  "key32": "Q3bCKKJfyq2b58x4BXRWzqqoVEVtcdtnhn9RekuRnbCLUdW5ZcLBGJTVFdc87mF5EfM5E92JduXzGAxEZtneraM",
  "key33": "3NoiWhp4dm9ruRSc8PRHBw3JhVwGYEjzxpvF2kL3TPFsujiRoseQFHgCDguBXGA96ezWXPaToh77p1iULStvoMTt",
  "key34": "yQqjEsUyvY7ESMdiyV4Fi5NJXYZKjWTeeprDnDfHU8JEAgLHoH5ABa7Cyv3gGDocgrmXv1YN2VwzpFsLByhpS4W",
  "key35": "4Ac3LHoGfyTLbNGeku5JzzmEdYZBP519MZWXmMcZgPrX5W7mRDNkEqCC1V2ASQJuG55B5Cdi4tRRekk7a13QQkCq",
  "key36": "2zguU2QrQSsua96JP99xd7uxPM2AQJxRCmLmqf5Mpk5n2FsVYoXx39Mprz4cxfP3ztuJD4qvLrthntSQk3Sy5mcR",
  "key37": "3b8ksLZ8zERz6tgXHNLt8p8zb7Fr28ypz71v81Fe65RcDr75auhS2SHeiN7tGKVitEA2yozMtHKK2C2s9XVToRTN",
  "key38": "5VqmZSoFTyaXUNgqZNqB6zW57xsZ3NC6UiHr31QhqQYUe8c4LwTx3EVnoFD9nYPmHp5ZU3wEwCAnJuC5swKNT5nU",
  "key39": "2Tv1yERnF2CN9i5KsdU2WAV9DpiXtoteWwC3q3PBKPfWPKzdScAFRj6ksoGm5zLPhwuezvzCwS3ZSuBgboCg1tm2",
  "key40": "3Ej8sEdyoK5biijCBNRZvtyb3wBt5T2WkqcmX1NNdF2jnGErLLhNCHViUnpwUD6E7X1qfun8npT5efhbUKWVffX1",
  "key41": "2N88WbZah7waS9ZkfQqSjpgK6WwppvnfDgTXUADKSTvkChZHmqToickDNz8punyszPbExcTndhh8F5kQ6kxaxMnZ",
  "key42": "2PRaDVJWMDku7r3BarZZJZMG2rG6wu4FDDKrbFKPJxaPmfn6mpvwtrVpg6f2Qod8eHqdYcRAYeBfPz4CxEj3aGvg",
  "key43": "52ktJPYyVYVAiHZ9eXvVqedC4CT1uEq9VEVCaQbFfF66L9hqweqXTGL5t17CNoNx1MkkeCft5KpeLM94juWgKRZG",
  "key44": "2rB9FSmkbk18mLSM2enW8D1g2oU69AQPXdbPYpW37sLowQmzUYzwSvHGEo3tDZC6SCWvR2nmhBb39T6AKCRVo68w",
  "key45": "3AJi8f98jqDhpGFsX33vPYYQfbqrXktFW7NHWxT5mxKkyU1hSkuDE1pDD32tnwdE7UHMv8w5UvcFfScJxtLsa1AC",
  "key46": "2S72E1Lm3kFBjFZCxEUEKmM1ms24PZA7xerxB4ankBjBcSXNxrzG8kfW7zrjQFuFNaFGuSvRZ6S1vehm8VTWfhxg",
  "key47": "3sp7k2b96tg5jxCLADhtBaSYuLSTC7B8MpYbXKvRJZMeTRdSdssEj7XVfJbG84y7KzETYYhS2cSzGW8YgAJ7Scci"
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
