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
    "3hx2vqDqGxPbULFPQ8VtCHwVL8YGVLJkuaBiFgiXxfrgNYyGbYzVfBtk7w9gBLKf56ho6k7QsevCBoPzNmwEncfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z6jPekosVh7GBu1JvXa1vpbxaJgTMQ8J8Ap3Mupeo4dPPM7PpR23GBSBwJF1jCPU7NsoNpadUddKuj8QcmWVdgY",
  "key1": "67cBgWXvRWfw5VYx7j91BfXfueRbvC3Yb5DC8ZxzrNM8TF5GHiutXS9sEsbEgQbnBGPWsNvYCdpFpqrNa6nRR6Jb",
  "key2": "5bwmdAuA8ryUAbNupEy24f59fVW24dzkg5PcozWoUyfCjfxbMTFs6S9tzSnsukaNvamVDRz3oa281CtqiDGgAuSc",
  "key3": "5ogucbekyEoDpiGTv4JzVs1kdT9pvtndDxWa7QM5xg8CygKb5pYzAKHLtcnEDs1csAvoFv6QKPYNcGBr5jgRSTAH",
  "key4": "55pZUe1TFaLNkQ2kvvHw2cezjE6QDSqm3k3ZdBVC2P7oCggvZ5CSscbNuXWSKHqLznf9HPZmfFL9zvbWfUGmHZma",
  "key5": "33XKpYfXLpU4SZKbTbWPbc9mnMjfgDXZWuiBDMbkSihptdDwLNggYEzbZ2LoZk6FZdoX3qzN8BSVkVgCUF2nNf5e",
  "key6": "5i1k7FSkjJQxuQ8RQ2EtVS8XLBU7y9GSqn7QGvhxxH5gSop2dWZq4q5DxZMjYAaLwgS2wnhYmHGdCyU2HY66CVap",
  "key7": "5su792s7uXGMHThqBQi2iFpysvLPVTY5ydvdEe2XZDYuRArR6Ew8Px1qJEGgXKDGpFgDotFQeQo9jpSbJMkXqLiV",
  "key8": "2xdDy5L9SGu19wjP2QVcPdAYovu125mrJdhb26imxAPWGdQ1GiAUw9oTPA4MvtrP9d6riYT9erXELABEu9gK7Pqo",
  "key9": "4RDxifFebnYgMVceg9xFDb8NGBuNJhGhULDQmWNrk4UyfWkvpvu6puNPTuHWtNqFXgNpobmoPfntMjCp77sznVvD",
  "key10": "nYTCyCGgjooakAhr5zQxP4vGdHsggzydugnMUqUpTnU4N18Yah984LtWs8xa6dARN2EzriknKUeZuKXB93fdqZ2",
  "key11": "5XyPQ2oBrF5WjDbU5E45MhSeCShzFt2iAJj6uPERuLKBVW282SrMhjmUKzeUzaHAPZQyafN8br7Y8F3Smt9Ajap4",
  "key12": "VkAdpEUewoXYRSBGSySFwygrLHH5QT8p8PhJpowTwy4jN4m2EggszBmcUdjWLb5ANKJQD3YURC3SZ3djHBAubkS",
  "key13": "5rjvkLBE5AH8BdJF7motZnD2U4NyzvDJ4ZiNrCCMnMAsRfTePca8AdtEAvmietySwXr3ywiEGzhEr5YJGDtfxAbx",
  "key14": "3ghMMXsQrjkYV2ZJ5Psbi9cAGZyeyYQxmFbbd5C5frcJCXgZ9znCkazsk7xGhS5c4wpvJnu5PAaJfhdTYtstcUpP",
  "key15": "yXNv3b4rTwtvzjqReQfY2Abvi3u8fJeH1KxBgjVgrYvWGZzPXHGJP1kyHYtoBCWXozbsKYhtqspxHffLKk4YivG",
  "key16": "5KT4cGpzHtSjm5b9R9uxi12YpwB8JEfvNgWizP4D3CceTojkSPkaJ9QDdRA4SzN2R21kt5Q4Y6uSZYgrGisoqb9H",
  "key17": "t4vZVVK8qGZbnVziavD2hCzGEFrKzxkiGRHcbsPc5FiZfDv7ZpwVFrw4cEaHPVNb9SEC8dFSyKdtVLD5yCYMYWL",
  "key18": "656YWGAJHgnVCJsNcuN8UsHFw3d82WYfQ8UQCfWKAhNo4uKYtmVJZRhE8z9JxJw8N6shHA3hmPWrYf84o1oJYDab",
  "key19": "4vXaX7FDQVZje6itbm4pRxydMRvc76UG6fETcZJs1Zagwu75m4pRxtBLYprRPyCEMoAKfNRDkska2hU2ZCzV9nLw",
  "key20": "4f1UTu6TYKjvGm3o1jdLeoFPQoEqwh8ysUMitzs1FKeXHwfbu1uZWezdRPGYmhK9mzuFku6feqEeFmwV2oBFh3fT",
  "key21": "5534eUHGz2Lt6DRekwGtasxqWw5DPmBDwDX26YcT81gFm9QmD6ohvZJZr82QCBdSum54SteMK3dhkuXUcKaGrtpJ",
  "key22": "2QZjLCauEDAw6jEAvfeVJx3cVZ3yPpoN9mLzcLhTXcjnaaKX6D7J3BB5isZGrxPjucsPyA3HQ4eJUiusPVtq73RX",
  "key23": "5a1PXvnwQg81JeGguvJmuhq4UM7tnKNbhq9t3zorUrwVcRAxAhSgPZRFZV48TrSjArSGeWGHqPx2ZDSPhyMRRxYK",
  "key24": "3wVFnKsyqd21PC5L4tshWYue9x7ARsdg1Yam5pTT2arAwxgTnVcfuxxS7hBHNNK45xUoQEdQwHZNtCUzWVYFxyLU",
  "key25": "313UxjFx9d6sc6GVU2QbNfJrQVsteN1JEdyV4KmSyaAkV67pxvQ618AgmEj1Y3vG73vKnJYHRteHPRbvJdoLZoxA",
  "key26": "4vXpnFKnYUbN7SGmLuVAZ2EdAQBTPuyDrt6GLwUNyDjoCkXnDwgpUND1vaHzeqQHXG6DTtPqicXFj3mzhDjma4hx",
  "key27": "5LqZanhd5SuxtpnFhsvTEZp5bXShMmcP2s3iJ5XCfoFo5r9bwpHTkS8esjUdSd3hMjC87aQpVLPCd8GjiWZfvfpL",
  "key28": "4tgFntH7WQmxjPqqadv3QNYTJYXrRHq8sksFJnddRochGt51hsqTCWVPLiUBc3SenrqjPKR4wW2eLqDzi8ftjpVK",
  "key29": "5rDpXV7dXuWYg4H1PSyxug8GpAA3TNVrjZ7pspuTDgp2NKRVV9dnsGjRkKiottnWGWsdDKJ6BFtZggXodkQMSNRM",
  "key30": "xNpahVJBTWm798fwqHEonJ7oRD5cdPHmpJ2KrKgG2gXfMf3j3g1XDvhec9AGG5JiEE2VkvvYVEgxkjG5sC4FfoH",
  "key31": "3smExq2JMpMiu1pq1mHKZ7J2Nn5MEHWdkHcDP1CZ9rYRJVpbUkqfwcQ5FvXp44zSYboNcujDKJt3URpZfPrW3xF8",
  "key32": "2Y9rXULr2Arpqm6gbnUw3iBGn4W5nwbL7M6k4MDinXnaGKZ6krk6MQSq4NXVP98dnqmCEdC465JLkLRMdDoeuwv3",
  "key33": "3TGYbKPJsMCZaPk3Fp1zhk7Qsv2xVZUKoAyC5sUgbkJt1v4o5GcBF2idT3X3hXW1ECkw4pQgjWRuq9w8SPeH1CNa",
  "key34": "2etVn3S9MYGzJTU3G5QDwDQLGJ9Yb7n1b7i8qLz3EyUnKfrp1DtJUhfAjgfdRmRtBDPoSq8i1cxBDcU7yvcaYjC3",
  "key35": "5y11ynnycBkuTFuJ9kKpUvmy3W2E3FktXFjiNqPsvyJgp91tB47cadaVdUWKdEEhRi1gADKVoPcp2sVW2weXGzju",
  "key36": "4P4KhWa1Wdtca8nXD2wePHXEWd1dTtFoJsGdYtUMZD6KwUqHJ4RxNQycYFK9sBYrJDe6CMi6DLoMLGwkQn451qd6",
  "key37": "5HLE8FaNgwREeaRbWd3taGwkFesLSbsfTWTRYsMZsSF1tJ2KgVxvRoX67UkGpxHj9ox8iK6FgUsYAGJNL8vqtwFb",
  "key38": "5cFeJTNwdMdQjEQvixv9dvkndDeiuHpzG8tLqJhsfQEsT36u1QZJURrj8SRakfd5aC1iBq6bq8VuJvA9FLtfe4gc",
  "key39": "3Kp86SCMy8URt2mFJ8jbct9MwSSGdeQ29noE8F1vK4vyDG6vydFW5qC6V3cXZ1a9WYpksNvtjLd3nqQW6GXDru9K"
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
