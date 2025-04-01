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
    "2pncXTVnFujWoUi6rf6Au4oyrE1ijh9KHkBLEWrXE7gQcbKvffopTeYVtASefFawytFGeZmXBNfVardPXRshnVXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "85iuTCAHTmK54uYFprdvMFnZGXKUfYeezYWMdGQj6GuHFuenA5Y3FwZk7i7bT6EQwJk4UxwSgkkzh8h2Wd9wjNk",
  "key1": "7awvbbAqaqTQSFfBhJv3wEEtSU5f9Thrr4A1FJ9jDnHNRzkZ9n8DyzG31gQafXhQVdbzJqEWUXTzEVdR8sXQizP",
  "key2": "2yhTcgAi1tRFV7NdB4BS6sYhyC97qD4GnarFKcfHLpNES1vWJqbn1AUefu91Yoap1afXygtbuKkuJb44UmN8xhML",
  "key3": "25Rngu7RgeKhkoJKBcevwQ2wB4Yw51iWqagd7t7gvAo4ptQWyfWPT5fYr83TEn9mg1tAx2KspAG4t99eKarZRkfy",
  "key4": "5yJKLfiP8HU7BZChY3W5Yv3zNbPjTaD6GEqE8U3TRFBLoLtAkwtN8TjqxXW2HE5ENhBNLtgBbmPdCynFbUJKCB4W",
  "key5": "3CPBgAW13AA1JsUh5FugkCotVu5xrG4a9vn9q5YtND8bjz9aUZHQmnAEBhWpqgUm3PvFBLJU98RNeAhaBV2ainqo",
  "key6": "4o16dHEMmCocSTQCU8emfe5dUqU6F1Ecz9F6Zo9aD2vf49efLmNvXt8PBTKJvsbcmHQXeRRqQru9iLEqNTNQhPh",
  "key7": "4ABd5AwhNPudRDt5TJCh27577nmZyYnWn6pz7nwyDXAigYTLZaWz3Zih82qTGTjCu7knn17xjVmzi95qWakQq3jx",
  "key8": "fi8qdWgwgUcRgPgcQ9TFeu3KxQKwogFPGbmHBvxPQfWtQ2ScrKKUJvrVGJ2duaTe7ztJuEmu3VUEnCdsBH4B4ZH",
  "key9": "k7VJriS8pUXunhdxD1LajoLaUZzRsfmuWPjBDwsMFFJyQwxdiMnJmtt5QRPyuXigBRzson3J4d2kgFDGD2GZEtM",
  "key10": "31Lve923tmiMzrgMKBGcxaEpbmLQRjVPpuAqmNgNzBAQKL5EbfQQq98xHMcd9nD7L6BtjXZM23KAXyY2AoXhpEu3",
  "key11": "5WMToPmy6GsJ3ynGXFV7fgZgujbMUVgJgLPo1nSVrjgWUVPw7iowsdo7c6DJZkCGguBSV5ozhUMh4P1oEoBe5ae",
  "key12": "3Vcjutf272NKZ4CbEGqY5idJmt2avQkLA67WAS7juXGrEbiqDDunriKBm8iTjh6bEhpno3ku4Xx6MpJEzSKeCo52",
  "key13": "3Pg7UULB3UnbM2CvQuciNrAwafnxgCHVqy95PSJGcdN8Y7fVsgr4WyEe4cEGw5tho6671i7CPrmer4hWQ8dqmHwX",
  "key14": "1MfRRT4qqVFckGfeHfcH1cn3bn5CyMwtnUyZptXXvgkxQdEMMzZRj7KSUsotQdKTDWbMfnF1ZFgHimzcWrPNQZr",
  "key15": "4QznJjVgo2hZgMQct5TmN9Ksi9xBMWqaEjYg79MYyf9CVgEERB5hZqesXu2zdMTcPtTPAf68TEJa6N27p9e8bqYT",
  "key16": "2hFH9khYUsBFHrnpuUt7gtrBipV15y7Mc1dYVtWVmD7wXhtBQnpSGtnTfCqcpKMmdKSe5mFJU6fKxrgv3HjX4zP4",
  "key17": "35PgnTg5VvVwrwK94StiKLnPHapTZcigzMwQnX6iebt1qjVSzPdF4jDs7QyEt8otmvBfWnvCTFBDFYo893yVsScB",
  "key18": "3NY2k9t5HuBWcNebHitg3axGWaGTbjkPd1F6qjd8miaw79jA5dTX6WLQD2MJbrVL2xRJHw98anF8wSjAP9eSGwu7",
  "key19": "3V9ueNZtCa6CndfBWMrEArSexGVwodQzX3xhpgbazigfi7248qp7uwyrLynxNM9ap8GDmNWgJWDTqWgH1ekMFS8p",
  "key20": "36iY8m4zVnT7XquVvWiaLGTXsWMMCWX4bi4numkgGzzHwHVLo3cJf2mwrUa9BPabNoGRDWWCNUxTgfPMhMUoChgH",
  "key21": "5H42SW9xDBF1wg1iKxP5f8qPPRKY9agG28Rbgvr8LrsqCx5KBgFL7RB7bC7kyRzjvodTZAyaWbXKWhodQKBkyUUv",
  "key22": "4GhtV1mw56W1KPAf2sqiw3YTSPqgdT6TaXPXQSb9NMaFbNC1pnh73ax3jJPYXTdrrGiR8fw9ci3dG4Pi3en3cFkM",
  "key23": "5CEPbEjh9rYYXtbsjcqwTnjGFW7Eg8ijMTJpcZLzvpgHnL16dusU4bSFA6cqWkZq61B5zTNGaeScD4i6Kc4aFVAp",
  "key24": "RmqKcobXiZeyPgfPJzEymKb3EiLUMm2eU9fD2omSshdwpyPCquxjU1r5gha813ZVeCgSdEjuPTQswNrAG2dimYB",
  "key25": "2RC7TQSeXCPepaaneD3Tp2MTZde1HgvmvRPjinXv11hnLoHofic1JjwHL241MfKTsRwwJVk8gAwNzJ1kQEVn7jvw",
  "key26": "3fiYDzmq8FQwUsCAxdQYFy4tZExtmRPpYLYQb9a9ptbKt9fd8C7GNS4XziHKwGbpJaDmA5nYuSwFn45MouP3HNH6",
  "key27": "C4vEgAZagyVeJagtoZkM7ut8yCqnFoVoztNERxLuVfyF1wazBZ4siHswrxTo4h5hneoG1f3UGNRJ9yRKXuaw9fj",
  "key28": "2kiLVr1eEvDwfXjXKjEVdqdcTjKKbpuVk6VTkMhLQo7vV7icaPijWQ1uETZyKu3NJJvBVqeeqseZvA1j9LewE86n",
  "key29": "CVumPJXZrh7dFZoZj8CK6RWZ9QEgg92dHwRscMwiF72C5ExgXHgZCjpXrhHDmL89WbMPfkpP8piAKrScEr9HYLQ",
  "key30": "4nmnun2dik8xWXRM3V4nT1HitVwvcvh98EkPnfXBpTv8eSgNHS1adCPAwV5x9s7KzTmXHy7ZnhoorwKgwf3v5qWx",
  "key31": "4SWzwiiHkUkuEbURSKUJdhQVsUBDUoFPEVGVEMz9xWuNjj5gHB8U6FnAAhuUiVsRVbKcsqfS1aE6itfbK1VEFPLH",
  "key32": "2Ps177YrNMizfkezYyMx7am6aaKvn2decjE7QcMivVNXWpLnE1uhEYzsmNphmWr7ztSPgjwFE7TLU2aX7ATzcHVy"
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
