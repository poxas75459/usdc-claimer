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
    "22wEEjyecqnG3pcmf3xDVEUZHLV4WJqvCfWVNiTwhAiBjR3uCSvtL1xEw3JK9Lxf79otHc6WRi8kzQUgvP9WAdQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mbptw25kTB64w6i7GKR2n6RBpFaQEkdQxN1iKH35ezV4DUtmhERxhvH9zPj2cHJfbAx1UocZ9qBwdBKhzYULmvP",
  "key1": "4WxMkZufbGLNzhWCiyh7U7G8nYpoFvYP2shvdJ73yfQGkNx7b3v6bzAbrRFsTYzc57vGzDbgHf7kQFZzuuzJMWGr",
  "key2": "4fFTy4T29GjnCA6B1Ga9uDFkyMAEjVoenzRJfGuZfyeKNXXTuNiwdqzskzT5t4d1uaE4pTrmeBdqnFZAWkgLF2yB",
  "key3": "cM5rjDoEjgzSvERgSEnhYhR6NntCE7RYtkcURRtbmShtjc8T2PcDTUaGtPkxR6CjLHrMG91QgJd3KFKHFe6j2ss",
  "key4": "2bQHPzJwRtuPYvj8478E1H8yFDrzQPee8EnGP5Gzs6La1TYmCow8tUX1KLNkc7P8pVMq2hdHwJkGS3qqR35icasA",
  "key5": "4CJXeVbWoW9zcMNH3Wmqc4vSnY6s7ifQ1fnxPW4CReYJAKT1XRqhQbibVTaLcaS361cK8V2U9P5hx3LKEou2tXGu",
  "key6": "4NRfknPPDts96U7iNyeXxwGanK8bPBt6oUahatcE2TZJKVWFTeUVZ5JJrCGESs6cLLKNU7dB2PvLMrirfMpibR7B",
  "key7": "UTR3Yuwvewirn7mvRoHM9NpdquuQFedvtyFB2mvU8GooXhzULHG2UY73qmdNYiaMxRjHNQgBsVK2oukucdN4tYk",
  "key8": "3psrGFH7QgvmG6rn9avabQcHSYHsui2viTCrFGxmAwkZDRF5hqsATdXbAAdwJ4mtWZ6LVGiaTd2y2ZA3TiC9Sfaa",
  "key9": "38HYe9RjUbPyccPPRdLmZnuyLYmc14SUfLc4cgnZ9FjnK4SsP4na52boTZXu2LFD8kLHQawFZmvX1NwhEytq8SxW",
  "key10": "34RMmgM8Job54QyL6CkohxnscdiNb4MN4czJ97amPbWJ4fZ1XhZ8WBAzLVMQ9imypttfwypxUeRRF1CzSubtD75a",
  "key11": "44ByM2Na19LSMw31GYwYX5KyAv1Uuo2pvc9YY86dkoaJCFrC4vHh2Kepq6CjDNyVEeo5BWXtXNcpTUAZKi9Y5cbf",
  "key12": "4qDSpFiMv5PRa4yyovUnTDzXTjHJGqS74tNBMMaG9VrENWtnKGZcb4sUwoXNfgWkDbLpuXT7RCFnPgVfxHgA1xah",
  "key13": "YMZ3i1sXoNsHZyXq3XvwJoLTCySnwzZi2ShqNuB9RnrJQCwMqmLUPDAW1TjGMEbXEh9ixy6dY8LsshyW6npWGRK",
  "key14": "4DBsmGkVst9UAgy9PfNQP3PLMpp6aKoxXfjhhWQWwkixjqkzU86kVCLi6oWYNqY2EnS7sVw2s2JciVfc3yGHpCs3",
  "key15": "2wDE3NCHP2BMTvbi7sn6BvsUhcCFqv4A6KG3Pd9wC8E41VYUac4UPaJXgVFtrZoR2pmNLNpk7LbjwmzNt8kXCwW1",
  "key16": "59vnApL8Z34gFxBWzZ32Vwcx46ezAGKwE1QX6qw8zDBdaa6Z5gmQJge1VUDrZn8TCSXXKHBXvBphox95s4ocTLsQ",
  "key17": "4kh29zqbBvJBPWA9mVgUChhot1opLC2NU6dQW5fHYKHMTzb8LGR4NrPZPmcrikJ2jXN2Gd8749uCM94hTWTxYokH",
  "key18": "5dvCHSj3QRTto9nZqcqvsjpGnZX7GDtpCfCgnKrPsgiHnwShgjBb4fKt1Mq67FZ8iEveqyGHTgUAdqqdSTmPCuX2",
  "key19": "u76S5TG7Fpzh98PySvW3eUxBb9dJi91h4PyPaMkTeaRP4mbtDDbdswrGqKhFQE9K3vYiDFjMnA7uHJqCd6X1qFb",
  "key20": "4FQpKPfxuzrRkJvkiwpmYjY2XuxDrByZtRCP4DC27rjHZ4t4NRYBKknJQJUQ99QhxBteLahrorgAUByMqCj3Tsim",
  "key21": "3Zmv2EJcMaPLbeSRrDq1qFvkvCSF67oPmAk4eMjp9AXFdC7aZtr3iQSNd1PSfjKuHvdjfRK9Jz1Kx6Vn4dHKAULV",
  "key22": "2N8KDwBnCgMHNKqBX46GiMkMygmCM4SJdAvWhtikLyy8cFDRAwgJpe6tp2YXSf58eiiuEMGc1CarTVg61SiQgYna",
  "key23": "594CGdrj7xWGntvZWmgTaoe3tF1xdd9g4diiFCnCUYV6FRpREX8QjgwaVrqZRSPFL9wRewUxwcAgEb7Y4vukiKdU",
  "key24": "5GiSi9CG3ftBJHmB4Ai1AfJ2Eym9fgqpdXEg2X5renLE85QvoJXV5DixCi7auybZLLn63ebZQg8N9HHLyAkwRpkK",
  "key25": "3SxNr2FCZRDPA8BpYnsFg3ezCw2UYrhbSJoRmRVpXiyiQusjzxjvtgQxaazQxGdCCdJYGaRzDxhjkVmg3P7PxYgm",
  "key26": "3HDaqc3CPp5RcKVSHXyTmMcvcHXkMMJMxTQYx4V5kkTiXhfJV57u6eGWvG1UMeaKx5Z8TjLSXyaxnwAW6oHPjqDz",
  "key27": "1fvJY1AcLEcgoNa3e3HDvoHuEhoMG4an65LNAerLFR5pZoGvDHxmriyfnzTXakhzxPMQtuiZS4s53aXRPtyBiKr",
  "key28": "2b1rHKfhD38jLMqKJhFTthSkD3epYkH4rmtXkCjfww8Xg3eziMDoff9vuksRnk45cYCB7949tKQjGHBkzY1KSJvV",
  "key29": "oNX6Y37YuG4UmY1KziCbo7mqocqZxVXYQG4M9LMxYmnAo8M5UpkkoGKjtoZXwFGYq9Y6oQsxnRNU2hk1PNP2wb3"
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
