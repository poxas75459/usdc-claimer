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
    "5hnudkz91qKEz8aaHw4DsGqpmKi9JMPdfB8ftP7NBnXzSEUvRSvjURm6oRm1sS6BmsGmpK8Te4iyLSPnqncF8kfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bX1kBkvey5MxASBzjZcUb67TvXBx4aL1c1D7upe6d5Nf3BCZhubVKupM8uxCUrheyqXfEyESP8BKqdr8eSKDySS",
  "key1": "27NwdZomdpoXuFNYE5d5Z9GgmxboL2cfShzg5mAgX3zheRvXpKMAF1DLFpxAj8qisQ9JHMhtNfkXoSQ72oDqbCCJ",
  "key2": "3kfVofmkw9zaFEjXiAiuYfi1Z4vStAvj6VuiYPAgv8J5Ru96pDKvwEbYXXtB1rPuJcFPSRVJK4EmdhDZuzx7Ft6a",
  "key3": "56kqXDNUsgUFrgPceES7B8k8T1LQyewpdZEmDhhpMKt6SHaVyAK8XbXXJLd7wgpAA3859HFfWjbekAVYw8eRfvDd",
  "key4": "2pN51Wmfbzmik2BtgdD2dBUNDtXwLQNzRGbwkhPxSvLFiduaiPM2BjjMNNJxgEbYi7SaJRemAEFbXVECqdkKbR3J",
  "key5": "526UppFakK2z2BecPdPVFfFZsqPHSc4fAvDx1PYaYhPfk7dicHp5K5cvrHxx9Aqd2rftAoWEh1MPq1tmvdFZpja8",
  "key6": "4ZPcJpApn3cJSDN4Kp2zoyUt3STeq6pkm4UHRtHvhiewBJP9N2J5hGwi6syKC2B5nVAe1ruhHjbM8ATD5QJzSamb",
  "key7": "5pxyb2EyFNN3bcoma54e6SLQ4CahSKx29gXL3BvVCJLMxLbDw5tqgEKsgM1AH2LnKjnQAo2yBoWmUZ4Ah48DmWBq",
  "key8": "3TCiM6Zs3FwLFBAFR8pY4TWaV9Qd6k6TVyL6m12it13isoWxPBvHDVLToUZ81NboqYe6ntqrrwJgZrwn4VTX8TaZ",
  "key9": "jGMGnaqLMzT9gYESVfpDtfTSSDupvfFPqgYUhEKdvuHkK5Kv3VZ9f88ZLsEEMzsPAXQAxXCshjBcBMMCKR8MJCm",
  "key10": "2Et6krGD5Rxk8MQ6gGZK32tp1f9M4JS9xvup5fpFHnrfgvxwLynnEVtFauAijN8E7QPf75S5NjhwLiCXo1HfsQ1L",
  "key11": "5BC79nhk6khdLLX8JPCEHcdx563BjGjcC1m8ZHrtwawUs5pjiauo9NzyYPE6prkC1jHb3xN2FWrUVH9TfSuBa6Ub",
  "key12": "3TfTdbZStPyFXQe8EQq1TfD92CLhnNSS33CXVPNL4pAc2xjeLKpwnb2412L3SVCVSc2H2cGXstE5hMnFCKLfMacy",
  "key13": "PJPm9MVekukwgxVewP4MTW4jtm8TfkG18V7wovedUAxumAihtgq7f9wEgMAWXJFmKSDgrjKTHZ9PauzuyLHgvC2",
  "key14": "59z4uaBhs1CknAbs2iNoZskucZZ6bEzEVmGRMWgYv5wgLfRCKM1GUXXXbq87o2TkwSxjst5hh7v9tLGf1Hq7z7pN",
  "key15": "4BPoqiobp8udyP97eRgrnTYgvBZCvBSFcvroMdtYizUeRu3gy4s6QaXFSYFUS2zjdS6qJAs1cvDJ9uEmqsowHmYS",
  "key16": "2jWe11bq38foimEhKNr6fw4ZyvZHd5NZRaW9RpLnDfbH5tCstyAKPUSyKvxjmALTX8xkQmcoo2fqK3HSYUnBj4pA",
  "key17": "3NMFy1uJ7ugEgDXGNrXunCUGPkVFf4qfpyHMMECTxhoDX2yG2vUu8Ehf1XyzsyNLseN8kugdfnFD9ujw36xEb73K",
  "key18": "5v84SHtkoQXA8toqnta8WjHkjRgRCqEUw8g4pzyY48dUjpEZVc8nNedmzKEBdZica1WPbskH1TD4TGaGmTxseN9B",
  "key19": "49ieQ8WHrDJxtDypjqRULH7vaD9BDfdKati7G6A7tNYLZDLuhU2yjoL7uigzQqfNr1SbVAi9weiHfWBT3sCH9KuP",
  "key20": "9yjPgm5YqbB49GwKCHYoER7zwjQNMsbETCderpexHiERgcvwTc2gKxPoJTowegowbL4TooRsg9Rqd6y9zajYDxv",
  "key21": "pVKnescEv7fruUJeZYspmf7hLec6WkJPYedz63jjnMEUQZC1DYBivzV4ozGWG9Uc31f2KStKi8nzJqBsHy5bMfE",
  "key22": "3sDynZDBjMayBKrUuAnwav7vUHbEz7Ncqoy1FopFfKhLpjwjUzBPow5BBpmkobUPvhZgX3gtZRfiChFEVk99umg7",
  "key23": "LGZPWs5JabYLWW7MfDLCVRrhDxqAZgzfv6fhv6SCEGhKvt9WUAQq2tw8rf4N23x47Kvv5mPjJi9RLFiK2Cdi8ma",
  "key24": "3Tv1jx1EXkiYBCt8a4s2Z5R8sLzZm3iXQNFvcmUKz3coTFA5LpmDAjvVgPHnG3vfUjPa8VXdbyQCR3bJEjaNGUJG",
  "key25": "56MaSafcmdGreimvtR3dZUnFprSM1Zp6qvfSbsmQ78ddBFodcCcr8DxYQFgQuVDh1TR5yHFbhrV7hrNsZZ9BiAhh",
  "key26": "2KBWfC89vqxhGzmH2A5ySBuV3UGh5c14LhS7UfaR5ovZt6zut2qCL8AFjZwgmqEYQaA18QM8Cvjt9Mf4XdDn1BAp",
  "key27": "3VbhwEfZooGe1CMUxSSVFFp9QWsVsNxyhP7ptKQNw6LgJ424L8FevMqk6voFpsZxFhT6dXA3d4ViXK3Libe63kno",
  "key28": "3QWtjoxEcdySeAMHNddmWtpyQuU2La1qqoQyHSgaiLgrRumKhLqhyXUPR6MWhyygvsgZJ2LrLFvUdz4qHvxVbSWP",
  "key29": "xkkd5zF53VG7ccSoFR9wjDrfbs1tnRoq8EWAi2FWQKGGMhuKkK7F3J3X7mN7t6hMjN9dCACDhc4zwqcnu7iY4iq",
  "key30": "2NrWNbCKRcptK7M5xdpGccPMYpdRd998ryGRZdqQdbrseqz54Y6YXubsQCApMZUCLjDjK1YNChCyYdsXKZ6yJLHL",
  "key31": "cZQUGeDxawEi4xjpKxCdpzHxfM9YJn89dGtbjcqf8yWJoPgkcq8qxYSonxykviYPPDbCHhqHF6aVUWmofRhyciF",
  "key32": "4H5B4zM78Xo17eAXZ7pBxK278iMn63C7mgpR7a1bcofCztz6Q899Sc8oP4UnVGx6nmzJ9uLCbErqEUPBDSGwqH6a",
  "key33": "49Nwvchxoo97TnNJWXow4Uss6goKoCYpuqJXE1oRTZ8HWN7cCsPxTvJqhVbE9yrfxw94nB3Ba9JE4o7EvckaUMjF",
  "key34": "5Kj6Lxv94oqftfvDjgCRmt1XCXR3xHFUG5SDxHBLwwMGsgg3HMB6G1HPJTvG9V9JGLy4u6BMTXogGDcixKn8AwtB",
  "key35": "5jE8EMeGPXbgybiq7ESvDHjXwgxTRUEUVLdBXRyDMjs185CgYXyzvD5H8EifqZFu6TyoS5HhjEN1GTaTKL5C9Luu",
  "key36": "31UMJ2aWmAEJ8j9auAk14UQgYTZj1hYgRaNkXsGYPRexSQm4Rgs2cqFD7UYvoBXMj4pbgfhL2o5e5AtqD7GaoAqK",
  "key37": "5KD9Ahg7467vAaDHi48HzX5TtCmDqS5mdLZFaUvUGzjidnzuQPgpHVQmz6EvwPwm4SoMMrh9qZPyAQ9ATGEHz9xq"
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
