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
    "5K2Az1svTDq6HcVwC9TmzexVudBV1KkcDiWs8xTw2KTKZh89cHS6abPnKAZZtQmL5cDJvodpWAmGgvNbfn3u7iuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tQ33Dm161u9fArcXQ79EPCJRxesybxqnxjW6a2bmaiaHH9M5QW26r13nPpqTSrJeZ6qKpUNdrviGVrNWdJAEkkx",
  "key1": "3uGgYA3MHdvcYFwbDd9444WynnsSZBKS2NNw9qLSSubqVCdVHDiwkmEC31nrB987DqwzJBPzL3jEGyPjM7MhcWBn",
  "key2": "59QACjRQrQcVGxHHnENpXafYF6RS2XuS4ukCgcjSdy1hUshHUiSgDXLXcpH1qjP9xFkFMkzDVurqVvcnk3oZM39u",
  "key3": "2Tra69cRnASwqTWRc6Ufxx468zt6mF1LkCJz3tsHWvuFQW336xXQhYNpnG4aXW3Yejd6qMETe4qmreqaVknUHsDu",
  "key4": "5URawtHkzkchWnZDmv67ZpAd6dsPn6TMyW4kJBrSv22Mn1QykKKDiQyDDDkRJFoaugzxw7k6NxFoJVgJUUQRN1z",
  "key5": "5R3pc9kpLu3MKpLkijv8rp5uCGb1Qiyt65zpzV4DWXT19QG8hM3ySqJSB1qhUgkCTJcKJtDRFYFrpe4SUT1MzeF1",
  "key6": "4yqSzRGJfFCMq7NZbPBtuvzEf6zPrMPLH9SbUkQSKyVXyecH3foNNTdTJ1cAqmKtCRKFPJ4zNvV8SAheHsEyYq63",
  "key7": "vb2bfLkHq59Nn46cG1KdkvfuPwG9r9N1oKGCo21sGeSUJ9H1VMEPvk2ivh7dJCSoBQXz5GPsqP73eVoScJSJSUK",
  "key8": "2UZZMvx38ambQhL8cJPVsyJt64TqK45rogLXYMQgVe1d3MJY7pFLC5GFgpQii5kQRY5epheV6n8fn48aAPL5zthR",
  "key9": "57k9KNGefd8gsRE1VNzJUQrS8bnfKZz8PQENru7LCndZgB5QJn5CU4AGoSJo2VsvSQTwu1MnCsk4J4S8yuMqUUZE",
  "key10": "665tMyZ4AcYghL9BCJwiZSTc8PxBDCDu5N8mkEH4d7xeTFsCSd3ZEzXL4dCXQ1ztApxfcZBdK3gwko9PKQaT8FAW",
  "key11": "264Pd3SprN8NmMD3gT8PgQ4goDy64juD1nSdNgTLZcLNFTVoF4dfeSxzLbASxzqUcFwNjrKRdpVJKKnAasRYDwz2",
  "key12": "5YXfWT2DG3cKNvFBeVEQdQMRQXg1HLwFJHETA7Rzd38262vM5ux2itvVMu5aZJWqY4gNvguALF4YBs3G83MUcQG6",
  "key13": "3mZkA2oU1PgjZMURrwtmWMjEvc1G1pXkwcigVsfUyLzSg1Dc1PohJeGckif8uKAficDbtg2wkmjxMRmaKk7x37Fk",
  "key14": "2dcVfLyHpbvvzzRw2Y7izTvuNR6Fbf3Kkghmj99X5tkLFUwtHdAoobLqvJnpUijzT2Pvw9ujQfHwz82G1AYhSPL3",
  "key15": "34yimQuN8vxk8RJ69neVZNtQYesPMmiPaF7ZiVaU5cvEDKMSnH2kbN1VagxhnHbhfCw6QKDZMjDmC1imBvcs2bJ4",
  "key16": "2Z7BdrceyKb61gKRWBuGy7Ntk9CdRmuU2majQm6oAf5GNJhwKHLYV9u8RqpZBqK6EaAxzFtH5CTCHswo7AdgV514",
  "key17": "5jyXQ1EHVwEAyTTVRjSmDkoxyFvo69zhwKdVUziW5F1Qph2S5WhLD4ijHctpyjNRcHNjrCPWvD2fQ5w4ge8HgQei",
  "key18": "3zJHeXcJnXFTUVaTgSRmQ2ibfRg63CcKAnY3MFRSEX7ym57on4KY6AVYTsLu4EnpetZUaMoXMey72WxXc818MfJA",
  "key19": "275vPNwKXUdxhRDEtZG1SNysqRnqDnsTZ5Vb3ykWywLHqG6p4NQ4sVbpWzHFrKMy24zAe2C9bNjc4oAa5PihGKjK",
  "key20": "362Fs2Dx99pD6o3TGGmbjSnnEuveCfpkXUzGAU2RboptFSaqZsLhwX7WicXj8ssaLwrhuNtoE7yGLErTCkWGnEWj",
  "key21": "4hbk62xqjALF4poW5yV6ErfPAygNVWFyfHazvm1XNReQZqgF7hgqWrTzmMSG3daqQfc46TkAJEPXEDG197XAiwBi",
  "key22": "2ExBpfEjeVN5WUsFGLPt3cbsaWyPcRctMVMiUyTryF2dqUe76WLVCSHZZ1pDGRom9ogh4beNgyj5bF8Ai9fjteKW",
  "key23": "2CJcShKxFhPT8aqp3USCd1tmpTFtLyCuCJJvb6mh692tgrEd2QpBqbEb8gTxy2WZsbSfdok1mxL8zkUxGhG94SU5",
  "key24": "3rCYfmhHMPrJqqzAZEqT4DY363e3d7V3b2W3e9fRM3atHqwNPqZKCFnbLZjSWyaR71mEsEfmDQHoait7SzAgDfLW",
  "key25": "B8ECzGbfPKbBQcpuxHi2MDQ1JZuJXBhzge3pkQfsxpjUvnV2JrQnh1DvFmuBY8EGSTrwpwi2ShaDopn9HXn9aAu",
  "key26": "2YZD5MHgVXKQP5g2uRUFqZxvfrDcaJYuQoZpRwTkTwiDbFUmPSXaJR8dcUbo4f6SxQ9VhiWmY4wdwjoFCA7Cgwkh",
  "key27": "46LHQsmVCvKfAB5mXLKwps1rCu3qgFURsyBopgDeGSVwccgEV56Yx4yRUfTtjTurYvDSWnFChsrKwsJiEqrJ5hNN",
  "key28": "5jRC3jHzAYu9qDYUrJ5S2VY1ahGEtKrogjMS8Uj38aWUsw1ymoSQ5t2VJyTMRHTYp4th22wyZTFd1GzgbDtEAgPc",
  "key29": "55yLVfreYepVfZAHM6S2B7cXMCTvQGfqAZtXkxRx9SnTLhpmP8iyMV2akmN2R9CVNtpecnukkNtmPbTSGi6UEKGu",
  "key30": "2V8pCQiH6aYTk9xKgSUv8dgq4dofxR87afLqVDbRx1jtSsoR5xhddq7RGS2xiTy9S31xppYsXjrG8ZW8cu17Hqgq",
  "key31": "3Qq4tMJobsnMVkkZwmCvLV3zcqLwcSBixFds1qA2L7dkB9ny1i2YLHfjKEcDUjt1CbxStvt4AfpoNdDoT8cL5KHj",
  "key32": "5Xacjdeo7ttHh4QhbdiLm6mFS5cifGLR9xGq9qfcYXPeLPbGo7oyMWsvzxsiQCmgkZYRwCCe5d2jERrgX5GjoytL",
  "key33": "5wx7oSc9qwDuyEycz7T2BonFgQws3FgTrxUmjctAJyU9HhrA53jEPX8oGBRDdhu6jYwNLAFmreL6UUu8w6RjrqiB",
  "key34": "57uJpcXZqvJeK1yJ4RZJz5295o3iSyB6uysTxbxoMEKw4oMU3XCvk9TTQEtX37qNQh8aiwBVN7vsTre5mhwKdDGn",
  "key35": "2n6HA9ZgsTgzWgJGsefAyrDQSRrJ3V88aX15MR7z8WYmn5AoVUWT9DQnfGnWnYtBdCqb3rymt53tWJgDHHjAGS2d",
  "key36": "2TuETzrYHTPydFNqYYUFeoXyKJtEnAu8YDzRfT5arZnMqAxn8SLx3gt6cKe9RAN26Hf9ZhxtaAekXAMtWfRpbmiR",
  "key37": "3eFZpJF252v9mWEg9mLh2aCAi4PmjbT9CoiN9F7bAWtgQ5cwbJ2XLv4TgUh54rphNQ9ze8fNyAvVvMvVobznr1dS",
  "key38": "454AZy1stpJks6EqjjYA2XYPfMBkdCzzmNuRScMugEMzjjgEpTMoe75nDHaxhmRd52LUMyvcF7kxZ7Kjxohw4Zym",
  "key39": "4Kfnh6Kujzkkr5Lp5LQVyGRQ3NvKgPQ2K6VMVnKsA4TfVnwW1xS6MoLTfF8YZf9pAQ2w2BrnRNV67FYjJL7tAGcW",
  "key40": "5Kh4GhGuiVv181WbaCZzoSdpp6tsuVgtYkDZuDYdsDk6aVWBdP9nee1s38jux5JJem6x6prY3KyWzytBWXfyaxqU",
  "key41": "3Ux9XPv6qjWZFMyXmwqhB3mvEVtfusx5XqbPEw4xzT9fZAu5Pt29TZub9FZ8DrSZ63j8PiSnfnpf1gkQLFpk7W73",
  "key42": "2TzKgqrwhnWsAKcoqVX89oZ4ezBykxhhvdFcNVGuLeBtCtKhMe7AakwwMnTE2ew4YcmFkuRL89ntrw2Fnggk1nZ4",
  "key43": "3sCE1WDDgR3PtMAen8M39KP9dB7JVG7ubzxZiqKe9RwZJ6yR1H2XhQBCqqqTmFvF9pbcvS7MLJTHbKQE2Q1eQ3q2",
  "key44": "2y9MqNr7f5YRRugw3XDakS9mBCB8M4SwfBW72RzYEppgPDfsG62o45yu3bgPVYtJgSR7GP59E1vs3iKz6v63Fsu7",
  "key45": "455wRDfyWiTL6YE5RNh3AbCquvtptzZtAaK7LCSdxTRMa2VkebpvYpJXMJoPkfynVptdjf5NSZXqxStykNSo8wRa",
  "key46": "4Gy9RsuV75nGvZAXqTecU9XRDi5cStxSVTDrJEpcw1tjhWKdCB28K338JWsDMQobPKKBo5HRZhkeomtCKnty36rc",
  "key47": "4NDEUUSuK4BLEjBEPX8MzzMXb2kx6P7SRLXgnfW5YNNSs2f6Cb6CLnqeCYL1BL6BGcsyDSwB1ziUUViDHyt1vnDt"
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
