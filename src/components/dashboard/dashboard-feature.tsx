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
    "5cDF8YBDvmqQMpoQ39qe1woRF6pXLFRDP99wrj6yG9BEV1s7Mftsz9vscpJJbFqCdRYzUV29kHJMbYs35wgw5rLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sTjGZeMkvJosXW5eHLfxz3SJNUzFrwDgpvncNyiyKAf2bSo5A6bMgSerGnfvVemxMtgeBhajaSjrTydZm3nXTmN",
  "key1": "4MoCNpURaBDCH1F1CyJwZAodULTfHco4kvFXUuCvy8o438oVAmsrgjFWHiRhQptLUHhqmUBMarvhg9njaV1EWy51",
  "key2": "cfY539Tqxtmi62oyNR6PZ15FG6E3zzcUypM436WZMLZon7Q2ihWQkRvFMAjNeBYfebLEej34kaVSTgcTnp3WRFh",
  "key3": "2SZXnQZbjKT8CWVqfgaJfoyWeeaEJ6miiS5vmjvHNnjxkbsyWC1p3UoKHHc8XDTWwRBhyPHWmSARk93JPhD22SKt",
  "key4": "52Y2XSeuXvCRinDiT78Frofcf5P7tESKpvgmsDYWDU1XR1fKpoeTyusgSrNHZiJzPf54aPcxvFcfSTTQTQkcQBmE",
  "key5": "2pXuYT7j4rRtYuZuhVqc7UHp4E5HxtgPLu1KyRM7xnP5PoMuNW5JujSRXYDYnfPqBad6hBf1ybSZfM2ihkrYnuPL",
  "key6": "5hLv8A4t7eKjqfVNGpS6mUywU3N43u9rUZ5UdgLWYpLdx6xFUBTkjs2Lk8X5m5oRTtG3GByC8neGTkfHzeDkvtbw",
  "key7": "3KkdA1p9Rur7sQ3YZJDMMWLeVU89RSpXAn1wcouKpn6UbeVmVpHk5kDr2USgZucZgnWQmxBmoawuNJbPLvNXG5H4",
  "key8": "46QDP1mipCVae4UqJDL3Egy2wV6AahJGbApc87AeoUuN9jEAqckgSCbyfXUY7fnYneoMseB9hWZjxGF6FLu2YfEu",
  "key9": "4rR8ernRZ5vXrG2QjLjEQHd5zzxs1iZ3NDFrTs5m1iaMJdUxbnLoFbqnYGLFpdaRACZaWxzVuqKohtNufqFFFTgx",
  "key10": "5oS19UJ56asvmSpwAVn8h7qY4VS5eE4quMn86RveBJZuMoihWWizVBjxjDPD57cfZHe4zsVN7LQ2NyDaMHmGY1kN",
  "key11": "d1hX9LmYAK9g4ahhy2fpjT1puQfwcYeeSssPTm75gVEnct15SLqzc4LaqJQLiJL2dwmdXumsjLEz9LS8yCeShZE",
  "key12": "crgM1mHW2NBYyWkZrGk5gTLm5kBByMZYLQmVMUkPWmLFJc4DvDxnrox1DoaPyxEqGr5fiishhYv4me3z9N3btey",
  "key13": "hBn8v5yuRB8wVxDFgKBJYkRivN8FpWYr6dbR7cYzFmgm8kY2SJ4SQf2bb8FjwxHab4Qtzr8LD9uZPJZpoND7NAM",
  "key14": "SjASybJNPpdrscKXkERnQ7cNKTUfcoa6U9pDQZM7j1NjkDutwBeVFpoPuNG2tkBqRimKRLBUDoVHn2Sh4ibyVds",
  "key15": "8sTsbnDJwb5HtvMjCF79j2vPQEcJeNMuLQh41ZgXMrGvJpVBUtWsaq7QkvE61mb1p1wMCNurX9CeiD3869ENiMH",
  "key16": "3EJsnZut2jyHCA5yJdX2vwrA7vGYisPK2ZLnqHxWoKCgmq1PNZ7WCVCuo8kJXnJeaGeyrfi8ra9Xqz8WQ5AtbDyU",
  "key17": "42Syr5U8Zhe6saLNiYXwd686hxRqh5msowTmZFv65maxFTZVThwynygD5eWceM2pftprs2aowBJ9cM8K7Pk6DLHh",
  "key18": "5gBv66pMsqUNTP8112QWA6W6oNsE9SmyFugjwnFmRefybYxE6jHmo3Ev7eps4wuCSZtw2JxQqZMiKj5h8WvYa3y3",
  "key19": "5L9VYjSoj2GoVt8bmGc9VQ7ZTfd1ZRPh4nziyn148QzmDy2FnKZuyVFdW3hZ7g6ct32twTEemcok6SZp1YC19Ko6",
  "key20": "4ysnSze4GgUPUow2EWiSuFbZguNJ7c3HvxKF4zL1ms5ynTjMtoAHd2sf6K2GxA47nwzdbv2eHVcPaJBSAB2ErZrZ",
  "key21": "4CFmfL7eggRqucQQxWd7XzLxU4QZWQqRLcKHFSXi2ZXvvWDAGj3q5niR3nTaX4YVcV5APZ4cvzMpozTsP1eGxcCq",
  "key22": "5nYzTAxoxN6C5GMRksbcpSQpweAnyL8B695Gjhbwqj4fZhozHpeMDdYYXDGw7LwXzTCzV2A4s6B6uBAfovA7YPGZ",
  "key23": "5zBUxTJv8AN1HZrtZEyvkjdKpogESu6HAQfiVjFgfWyWiyjSyAdC77X8samaCAQxsASgqgnToEcaDuresp8NbLxh",
  "key24": "uJN1dyb2E1MKCJ4DfMqEF6sP8NJX6Sg54JpnXVyxb5rJbtbSvGcfhzWzn6R8uUgTb8Qrpd397iTQRnM69FdSTSJ",
  "key25": "2CFJ5DaZtL3TgH7xyn4YF6s4wypnUDYEwF8kNdeavpBXqxL2FzV4oaBoF3wZvZW4a77JfCBoi8vLe9t1XXU96h4U",
  "key26": "4nHb35TkW99TQkMeH8Y9EZU3qfRYnY8tnHRRPswdSs8cE63NKn5ToN1Ab35c5eYN5L784kYrCcMujzS1maTcDPUW",
  "key27": "5CYbkZ8w5ubXGai5o68ovAz9Ty4jMP5rfzqTZ3GYM2iuTg4G9zby6bNeFG9DZBUefUEpBH7uEzB6fHgV32xCNU1f",
  "key28": "3GWuM2jkNpXaqqKnV6z18cMdakZJzvHSVidr54Er2rNhUMrDNHs99W4c79oWq3a6MQGBUDoNUrYWPhLThMAkiTH9",
  "key29": "31opnTx7r9dQnbd7dSzxVzfeRckP5Vo2svQvAoZKuaCjmsgiYg9Yep3i7x8ZLwZuE5XdAgiFQafB5TovDhEbNAE4",
  "key30": "37LN9L3g1YmYDLESbRVyjxW7b1K2MWxute5b4LLXBzAaL4ipK3UQakXgfMbj4iBUiJ6XLp3MKatAPpCbf3Cj3w7Y",
  "key31": "4TGA9YRyL5DPxh9gv435fw7wEd6RgN9iAnYeYxyrAbs2GFWfHJz3QFfu1W8up1ZYSuzrgLvnhrkUG49wbGRDkmPj",
  "key32": "47EZFL6QrrEhfZjW6WDedfnv1REsjShqQB7HMLUD4MUsDoqZECwuzGkJC9cD5KeAqUYbSmKPRzPCbMfcKxizysWj",
  "key33": "57hHtkd5SjhnAueueYpUYnRGdeGUoQa847EmbaD7JAmqibdCax9ZdeUGt5Y5JmP9RxE6nBUEyYnxCmwjp92scnjj",
  "key34": "27pqFhe4enxuH7x929tcr4g1XhkDeZPzQqeSYvsE1PjRgXKnqHyiLnHxKKAPHbxt7C748gR2JVFAyAwSGB5HS4ui",
  "key35": "2ZcjcYd1gQakCGgEWXd3HhzEH6LsUEcuFKT4fqyezsn3SypUdmCNpPUfokSN1XmBc9VNnBUqozM8HMUFi68k4qcD",
  "key36": "45Chqrq8yAHGRMA7jyqbhnCu5ntkszudq4Qi4fjKUc3wgKzALYh1uZ94M9JHTqFoFt15ghnTx1Kbrdi1qLKvehwA",
  "key37": "5hexWGM9TMqTst7QdkAXrVaY9WPHHHyoCHvzJWDCVTJyfvUGoFfTGRrbtzXpJEYa3P9RouNR2GLPu2S96oGjkEkg",
  "key38": "3dJf462cGn2wRsQxcy1hKKezgfdnLekDpA4s8HWdTt4j7ABjD3LrYdV5DhhA5JPpFSRoHbgQtQFfcmmLyjWFj7UB",
  "key39": "5aGh2wEf7q5YLMnnEveCBBmYcjyUyZG7EjFwvTvW5jnBwELUwTcqN8kcnw6DHRHGTF32uNrouJztTBPvwch7FBug",
  "key40": "5domhY19YPRGZdXcp6puskznFdNFbhsux2TX3tE7Umcb1nGtRwQKJ4TTeoDMXJ2E2VzccSR7PbbaVYLRmTVUv9vC",
  "key41": "3WPyxqgDGYSbQHPrDGBNDRFfmF3rqqcej4wZsSZGBqGySFdp59tZPA3W64Tn1Z2h8dJXEhJVjGP24XymyEaGRk4L",
  "key42": "3UhiYy6eHspPVeaxNEuiVBPWjNVNhRM1Zh6u66Sfa3W6w1B6gj2LStnCn22Rgsq5a4TqF42T5Tm8cMqrjUjbeceQ"
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
