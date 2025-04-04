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
    "63ZxLtgzMfvcxKmjZfrXfEnj4KShV6WQh4kARoXpi3hS9RxssyHiQ3UousJ1xaVbuUQKyhhZ5kCZBsiGmEaU8xmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GnT6BJ8UJo2dAmdP6Wr4vzJ2aJHLDPg8xDcbQqmNUFwqDwHGCjud245Gtj1er9w9xMc7oQS2H7zcM3VYNqbwZTQ",
  "key1": "HU77S7FyZbAd9Ag7Z7YgiVFT8rCxugMBJeucy8RFAktJX5rCsasVYwitsFeuhdc58LJMp2BdsFks2hwn6ScsuLz",
  "key2": "4oQoXArrfWKtVs2KgGtKGk7i1dzKvSgLWnqbDA82BxPKixaujKpWuHynma5k1Fk1ivCcboiWh5RrVNeg8iCNWrmU",
  "key3": "2BaxDcKt8cQkTJWqtigkLLcgo5AMhsieYWVcMSUAcQS5BH2MYfKMYXKJ7b1KPTxkhRaJfrgGpWkdqryG5YsrgNWj",
  "key4": "274tBTiyDnj5Z1w3qwv5Y4r9EZFm61SbcWvioUrTPfe4hKAqtJvFwGMW7vuiNQDsV5KbWfPRzjjWw2rrjPH5iBdi",
  "key5": "2zRXoZcx7ZCttinHoRSHG3gAjmcvBqLhXCFqxCCncDkdVMZiZcefMwc9fQ1oAxyRfVRGGPYy3YgbMrcNpBF32rie",
  "key6": "3rWQdywC11CkQwVKrfiwpVEavzMNvdS9kzJcfYxWzVVH9ucxxdtvj34NnJ8NTwSpea8vydkUT1ffHxfT11fB3weX",
  "key7": "3Vs5vpRrz2EkoGjCEaokdgHDN897HrKSrbdhEfbn3ZtN2VcFLVxzJuL6Z5s3iyug8ajJZzEgcxWLgGejWXMTtFx4",
  "key8": "532ou7yxqXxKoqAGVeBD4rFgTJ1hdQKqxN89wEdQ5wqruFDpjR5sqsbkeuBYHs3qH11PzX7biU6J9sKT9R7NyfGU",
  "key9": "5XuFQ7HHCFABdmXG6zefuvccJAWMvokbs2VS33eTHyysjTzMwyYho4kUpneGTso3K58TMvLDZtW2S6hxCWunoKAE",
  "key10": "2sX3K1HeVk2QvnHzE5wTHS2PoaBJsS9LoPdsxVDyeCy149oZjXAb7SQkDJuQTom6wZWN8DBxcHZRNVefjVbJD77V",
  "key11": "5fu9irYpRv7nCb1pbdWcpMdqf9f7tiszyftkuh3HLQPqFU9s13J1KB7wNZBMnd3x4S8xz1bgZnR864ckx7KD8zUv",
  "key12": "286VhC8GZERJCiyaATL6YGypc8UpbcS4BaRUHSDqDyVuTN5J1w9fdwCD4FGubFXP1cMqDcj5Ey18a3htCaHDJb9a",
  "key13": "5WWst6JQ5xvuBCdcmUnr4gSoAZhqz8zTLzdcRRrEVUBTytaBPj4vzLDXzrKoRsmtWVXYkaK9HHoAubNa38hQuLJF",
  "key14": "2xMwGjsVF6EvmdNehRmp5M6FHViSZtduNYm6dJbhwQ1FRvBcuJPZFYyCqzhBNQSU4Mvex5zez2gKU7Pw3SGv1Xsm",
  "key15": "3V1YnHdg3jEHPKJuj92BatP5VcoeJEtA929Z9y2W1eKw8FGiUPU8nSaLxHWNYc9ayyAUY6KpzzapzzHnFwT5PwY9",
  "key16": "3TzMKP6yEdWYswwqfANh1AuQ7eXCcyscQF719TCs1igfxdBx2cEjqEcucHdiUKUksQ4dZT1nYBfLV2khxZ1ncZgG",
  "key17": "3HaNBHSRoGivVjYfbZ7dzbQx3giK8wNFWsPmorUYcNTUoFg99uHaXEPfyR8Nfqm8BPhETM72wb2eJdSrLYqVr1p9",
  "key18": "5zJVruJzTcByixarYwbAXsYmdFvdnUe1jDUv1RVLhLoLfVjMfQZd2pczGNYi6XVy4ARTnSJsVkd3F4LFkHRCQopS",
  "key19": "GFjcnP9nHht3YwpgkpDAxE7H9H3W9bQ9B1WGQut55buWQ3v3bAkckX9H9do7nXrjzv3Ra6hjyQw3CXzj5QMcS8u",
  "key20": "3wsczCpgjD2rUkx2tZ6MMCYREe67joAVQJCT711ZppzkwJrxfMsKoU6KgbqDZKT1DwUVUXzVEKkTA3sQpvNFAJvv",
  "key21": "2xDMEGp8zrHkYQzvnQybrWNAosUeUVU8BTRUKLrWS1VbBbDYDd3jhbj3rkf7GE67yLYoc883zYZ97uotiqu2HB5m",
  "key22": "RXgH6ZXrhn6zsuLpkcB9rCWUZf3t8hnSFtfxH7mLREseXKfBkdZ9KMhZCPxdsExutF3BaULzuPmcdPhKSeTNDQ5",
  "key23": "5EQMg58XjaKtxUYmTtQqf3DdRwagjhqrSdFDuf2NATR4fdnfKqHUDg4qGruLNZfUpT7RQdnm2BKeyqryQJZie1bx",
  "key24": "3dkiBfx3VwzfdV8g1FPGnAfki6rcksLX9wZXPa3k5gjgXv781Hb7T62ewsh6M5DKNhQLgYepY3Z5mVXUPrzFyk9i",
  "key25": "2SwS1ycNsFZPLbzR2iQW6MBCzTEZ194cEf6cnsUq1ddVbXLiQvxC2S2mdMsjgdUJQ2HEVrKVSayktXYdMaY9sSR1",
  "key26": "2U5cFHT4ap1gGdRaveFKWFRjBaEj8XNbzNoLoVJQeDokSh1NHhWzQsZNpEPRRqvodjZ1bNrCGR8zxMPeYRJxgiuS",
  "key27": "3xnYSw7gQkrRPR8HF88u283ha4KuuWNwwoSYnGjZQKkznaGHL5e3RCZ7e83rzUskdHH78HnxxcxMU8vVFBUv6FeG",
  "key28": "3ZYcdapE8MAjPfKpPixtsAJTNXDiU5D4wdVNB8a8PScuN1PaAMdFp27ig8daj5vzzfUabzFtBznVngxkC7JpFakR",
  "key29": "zatbaYGNi391g5LGvrxuGCXy7r2z452G5hFkRVFknD8fgp7hXprh8tvz5T1fEvJVreKtZWhJDht7bZjt1LFsNfN",
  "key30": "2rn7oeL7SDRK7Qncrqq6WYqEGuJ4UYybyABcBefchLe4SGUcQxsGjnPfXgVweCVL5kUGNAtAkuBh87nqCtvYWbEx",
  "key31": "mVLnTMEs1sv29jVE3JRaCnaVptPQJEmzfdoAfmwRFYu9MpJB8Z63A6FDFY8aABARXHZK73sgvPmrsCvzDqNoZ3y",
  "key32": "5jKCReM9xe2KnXLgh6LhbuT1T5K5gRtsDDMLxQJWCfaoWaCnTVsFEPqGQikKnmwFttyiH5gVRDNteQFieBHZn9dS",
  "key33": "4xXnu1SQw5GoRnn9YpnLwy573wdXsm8rCRtTX9FXtEHxf5woUVTiMAgmEmQuMdNLVrH9aNEqJeejgQqCh5nfyTEk",
  "key34": "4K3dHV9U6cYHRLb6WHJkwWcsUuXJAWWspnxniEz6vWb56WmYqUQn4zt9etDaaQenX2d8Rv9NGFeeWjaWYzXKAW4k",
  "key35": "3JMHRcvGc5Zo5s1QjAvPPaEgywUcuxwtG5xNQ6MojMPANp1dCQFXdEzaqEwmpmJzoq8ne9e7AGFuQyiuDoC9Ahgn",
  "key36": "VN5kGFB3arSfNUiwfm5k31SRCNR2E67Nq7NU7mwp2d4kLWK1K6k3hjMAade2rQVbjXeyRLjVBVchpbK3mp58mL8",
  "key37": "4NSC367Rykz1q1DqYBF7zSYiyNQ6mNKU6HysADgo3Wi2S2iALuzxA4twxTc2KVQXybw7VdcY8z5X9gT1nzqEksST",
  "key38": "354naMsrCcBARJHEh9GreX1JvgEbBNJPFXVqrq5Mm88dcmxZNNREok2b8yJ2txwaiosFXPtVtDg7US8RnpKKpCaa",
  "key39": "2A5PvTLuxuB3Rq94q3s7dv1TR8njJVL5dajr5QyA8naorgjywTVDmeHM91RtVUzB5ourLtpuPdWbuPBDgbfny9J1",
  "key40": "3SPayPENY6XQ9Soa1ZUCUFqQ1TFkAYrbdbKrBiDU6BPtfEYLJjcF1xuZkzMHVw7qC9GwS39B96c9a88Lyjsb2MJB",
  "key41": "4rRHsTYmQA69p1gJiCSMj7jAWoDxdb2pJjqSbDxpJyeKkNCAUS6hMYTyEg2ocCpPtoSvySnvGCzZiLMEkmMZVs65",
  "key42": "YjhXG1kfEe6C1DLohiu9PUkxjXSw9nAjA8az3ZokuZDqvjzJ6boCjgjLcPDXAqiH2QJBK1ZEjtMhH6agSjig9ZA",
  "key43": "5dMRqn5ocDaLWCqpZe3qiL5fARw9zEn2qLoPS1YNSsp8d1z3gxiRjfHveWCE3mpNr7bpWRQJZHbSwcMh8sUpmSmV",
  "key44": "3TnJtR72t51gnn9c3GEVqhaRcEHmTuaQxvnDLDTeFtaXFJJLQ9uPmp2kmoNgorAp5AEZai2DEGhWhE67hAmv8qRn",
  "key45": "4K3i6ZcDW5JTGhW8ZVEULTypDAFY1ayrNj8JkjmLGKtvswc3EYMdjtbmHcaCYDSsbDgFjZz6LqFCLxecJnJ4vy2n",
  "key46": "LFj2iZdQxWcHcKLwMXbP6rV32wXw9wrRvZa7shBxCMui632ZPe1u2ogPdJXUBFdSYpVhu45Y9exQ2WRSbzF5YLk",
  "key47": "W9SKLvFx9ad3FTErFPcFc2Yb5j6wNUpGgahDikZGRoPv1nMk7PcQgAhuyy76vbAXKwu7G1kbLoF3Z8c2kVsPJKA",
  "key48": "3QbHJNCeazxiSQFJ9YQis1Yx9wCRECpfgFyu1z2FWeYroP6EkPzVjqn6KZtNHbTbFYJisCwYCQsswDEiYYyoYctr"
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
