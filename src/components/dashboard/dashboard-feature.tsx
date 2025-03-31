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
    "5bxTUnyGFPG53cPpzE2vdJSd4J7FidnJb5BTXNiZRmCyfmNwYfZG9eZZLjgYDGN5XTsjRdL4a6BurSEWEuRhyRfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aEYgs2r9YJc2jgubTQL9ZhxdfbmAPHxexS5rJxrgrHhgu7SEwkmsrjQHt5rymvj2zumx1L1hPF1aHnD4UyVqb3s",
  "key1": "4a5kVYcMr7g2BqWWuk32J9mtzivqzzoKzaa2USKcoxGboU5doksZsP3c9ZJqtx4n99WDLpKLmyouGNNPmjDUQ4Wr",
  "key2": "4Jhby5VgnYkmdZPbpEyM6DuroYgiKsWfG7fv3HkVSEAGUJUT3kFYN5nuvdSZaGMQMdG91ZrzhL8GnDRrEX7iqk97",
  "key3": "4chuZgRmfdKzKHQPuFqtki1PSMcQKm7bGWmGF4KSR5sLnhE5TefvJMZ311hkbFNZRFoPUbmk13Gen98d2XHsZ7yD",
  "key4": "5gDrtbR9gJh4VY1Vm8ZjnT7STGtUNVz6ts54BRXPrxwL2S8KVjKnS2Nd51Q3EgFDq8PSfftKk2xBVydpGdaXNjxb",
  "key5": "5ocHpVQBBf3yARJCWJXaPSQeS6ti94tiEKbvR8ZLTE79XPLZx4NDkQh48J1uQXETqmFK9GQmtZRKEmi8mQBDDypb",
  "key6": "2jSqugknMTuZWcqedv31CJLF5XE1uG2Hw3DyBJroxTrfjV4NB2L8jyq2bzCfBU6koVUhXDXeigSeas3oZppka5bS",
  "key7": "4WXuqqB7EY3DpMvhTFnWwAHsiT3MHhYZpBUTezAZQDpaCzi7BKEbQYLoMqaaGndh73JR3bFVqVpJAEgKssX9ekHt",
  "key8": "5boFaEzqKLPTwrpSHAy8hNPZ85MgXu5o1ZPZ2BdiS1zGSfEoymjyGTUAyuxZvCZqkWPNXCQtbesN7nANMamT25Hs",
  "key9": "5dKeLtSGSppDAp43tgMaqcyMWDdPvXseWFSBmZKjfMMYM5aumFm1LCZ3vbLSG4W3Gein7tq4GkogdM2q7fZpopam",
  "key10": "jd5x8Rra348qqTCr5Dhbgrq9oA6w8RHTnhT729Rziv9u2GhwUmcBMJBapsFKZ1QvWiadmZFVreboKxMSNd4BoJb",
  "key11": "2oFjNJCRAWwWA1n2GKhzx7ZMVYnn51saPhuEWZBLQNVUm2R3tfhM8mxk5XTGQkmjQMf1TamDaiKReKVZZuh5TibB",
  "key12": "NK9sXQRVDbDKN9ouoydbjxYrXkSVpdND635M3sHa6aVtxpEKdJHsAbPuV1fBsWq2HTZFxaw5hYXGGCBtfEecpGS",
  "key13": "5GJRMdd9Kt5XPdDufwR6SEs38epphKDjy4ZPwMTC396GNzaQLmwswFbNPE8gGgESBgh9UvCXo2vFPqeKXf9wv4UG",
  "key14": "3JJUbXyGkdYyziR5fHPNx6LTF9TuYvwQjJN2oumSKSBdBitR3d4VntDQfsz3DPxTjiVqzuPcNPHFNC37F3abA2mY",
  "key15": "2M1Nb5A6opH1xQPvEenKrgpAmqvj2wnHTkHWNvfArkybNyxRHaeJhX53rateMzjRwHTGzw9MAqH6BXLNRLV2YESY",
  "key16": "4xxMAeLnFnWee54B93LCUGxeSiTgoUKVmyPPmEVvcKQDV7eQqZpAE7q2LW88Gf7zBh9WCwXhnLtj1kxTko66kNbK",
  "key17": "5rmcqHesQXdC2BS54iNyLTiQJfZ3d5XZcXbmdQQX1GaG1ztuuxcKiZDrf3Lbg6KdNYSmpk66vnL6TxxiFv8sqb2J",
  "key18": "2L5vyjeHvsgmvAbctBGKQ3hceaqa6VynsSxjpLj8ThXEHvXWZnk9vnwLon8ozXucwLusYt69bW4wF99xjfoESN8",
  "key19": "5ZHW4gD6J6ai6t4Uim5khHzxm7hGtPx8apmhbZsNcAFySf9uxhafSAbakfBnZJTi9yvKu9v15jK5MdCd3b5R2vdA",
  "key20": "5ohLXtYCw3Rsx2bcCgCmw9t6vhVh1YokqyDTvoyuJGu4z6PqzaMxyLVmsZAzY1CuXWwj2mACVKECuVQvWLDM3enD",
  "key21": "3bQJoZH2icrbNJjB5AVnyJKAyV8yBYctm6tYz1ZwYYGpzHwyJMXGb6jucrEtakJyMcfgYdbzd9LLVegYyZrVdtPi",
  "key22": "hmXfZdV8R75gQSJ3ksaFEhXTgSdNvsTRrqGn3RN2whZa7mndxk27NXLhhydJym5LjHjt1BtQcucyAE9mvRXqZZt",
  "key23": "AjF5Lajj3H2id5n5LswP1TZX88B9XGHRReuzirZLNPn8HXqUvpVrDE1RCovg7Jt5Ge2NZdJpmbLtVNBPDnHEoBA",
  "key24": "2o9ABJ4MuLybiPdQmpXXpNqmLC4RPeL8PvA9TknX2QA42GNRUgRbMgWYt1quDGgakbcVQYA3GgZ4GuJZuXUF4HHN",
  "key25": "66mqTByPW1gpr14yrXxfyS14WGQMjKdr4yVe6Ctjxatbt4wVEzESJftnXTmWgVrzwEcJLwUwz3XvnqsGYZQ1gwcj",
  "key26": "34xdcTWuFfS6guiHk95AJSvcoHewN2KNpafJojbvpem8DarJbn5p5LBKYMcVn1nu7mWg56Jw2asnoWt7hywZZZid",
  "key27": "EoPp9qZfu4g6EpHveVyUkcZdmZqMajhCzf9NPF4YSBqFjDUuMjGtjK85k9iWA1wrkuhL4NK8WF3hi6FGHuYWf4y",
  "key28": "61K6yPdzzBjuWqP4yTR1uN6VsWXz7bd3RA9re6owuyYiPCc9U38cPrhWP3xs6PJjZzUszKf6ww5d19dcUZTF7JVF",
  "key29": "4D7ZuNaCY3sdxxec1utjY7axXQGN6jQ14Jjo3soEhbc7t75XgEs3mSCF3V5Yaqat2wXXFJTx1WytMyNYgmT6B4jD",
  "key30": "RBQfWirEAYWjLw77zQi16rSJ1gxJ1yhZymoM1FP7iuRkKR71X9ifEboM7gMTM8PD74KKw1nraxu4uFrBFRdn3Mo",
  "key31": "khdqVkpc9wdEKtGXGFHRL7qnphwdS2sAqFixrGPq8a3K9jQsnEex87X8SUANQmq5XWK8BhBV9hq8Ms1ZqrBGnu6",
  "key32": "2WXGw7g5MG1GWdseksZJnwVXN1khYbNr7iqihG1H96HJryu6amUgiExjktZqPg4L4BH1J7Jqwpr8ubP3mNxHPN8J",
  "key33": "4kkAmP9KiSuMW3X6qDwmLNJx84JLbV57SkH5BWSJjhLCbPgGeSFK3bQTDVgXfRWc5L7kdqLnfAhFTCaHcvRhXPvg",
  "key34": "3G5uQ2dfWqYPYCJYcsDnwmEbbXEbEaqqocyKoMDXaPgYsY7t6MHaxXNPataDKNi1zTTcRTkN1WfrYQejR92JHehT",
  "key35": "5Ru5PiBS7qczxvqt13ZHAk7bqu9zgr4yjoSqi39EJo8PjDF5qpcsXqmo2xqgxLpq1e87PYy52pHsjYg5Y8vM9pPL",
  "key36": "5SNSNz37GY3YejcoHSygF41dE4kDu2YTpUsMyQhZBBBeUFnA51eVda4qfJjKmeVV3DU4rAm3ww5Edu1tEh7LKiKF",
  "key37": "2F5RSzF9jQ6gpTHBTKMXCtWs8fAxmALXyin8qQ56J4hrhMQUAkU3Uib2XvZorkAz17w7BQcMGaPhYckUAgQrLYMg",
  "key38": "puqJGFGv1mHFiUFBh6kmsQhe7ZSMiqnuaqRLNvUcbeZ3pHhu3GWfbcRfzEfGbNL7AEseZvAqZJSq14nG2qVnk5N",
  "key39": "giuYxft2HcXEJfZwxodaaHms4uW1mnFfbWa158WnUzTAdDPmTLyHifhm5opRm22m1a6HUvhrzib5HGpwumG7XwB",
  "key40": "fhYHFY2848WMPYFf79tpJLyX6vHXZN38abTSnVyay64EUByYZGXkvaMqzvDb7a34ASyFskfqy4LdFaxvQwjeijX",
  "key41": "29XDsprzSKxMx7Lc7d9VH3KQQqTXhcLBjS9YVD2gGXJTa5q16DWEWR2cGqvwqJCWASeNKhe5etr1xnbo3EBk8TDS"
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
