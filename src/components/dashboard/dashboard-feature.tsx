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
    "4rMSHVD1svYtytodDmybxWjA4TGEJfBWiaYFG6r9jHuKbFdH6XrgPKg4z8f7hPFhYPpXkbVHz3gwAqz2sH415DZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MCeWEg3kRi7F6u28NZBg7ccdAWHQ98Bep6n2Sp4tW16GrQxCUEL8xZrHCvXn2bTpfW1kVyjkpRysEnvLoeW3ooz",
  "key1": "2m5QQuRoMhAF1BdbdBWrh6d8SUkddvYptvBh5FF6HxGh3SXNiSdU6hAsjEEDW6rGeCB1q8qwEaNecgZp7sBn5FJe",
  "key2": "4uYwPAsR1MZD8EQBiBnsLmnjFGgKH6dS78FCHDTftJa7XyCVKKcu72AFXJyBm38VxwhRVZSkTNo7Xuib9ViurnqC",
  "key3": "2XoELgmEwPE3Pk98xZoRu7mHa4QoYpmu2ccuqUYa6BrNWQjeNeDfuuphRj75e4Fyr2Kw2egBR1ewpSZkfiD6jn4g",
  "key4": "4HzB6J3cXuKn44Sw1rNisJDsfYwwHWqXCjHdKsmTGmi2AcfXfkcHvrnA1pGUuoB9BFDcYehT7631T9vruF7RgQGA",
  "key5": "4vqqt14f2XNqFMNR2BuKAWXvYM2RbdKrdafU5Kih1psr8K3CQBaTDY5BoojmYak5WMhmdgczZwh1FQRGxdoE8oJL",
  "key6": "5xYV4amziYfrhMPjkPK5yunrpqpUYsASsbBnoF1PYvQMduPRwHUYhTXJHvfYYUqRArJDbNPkSDs3yntDCgRDs4yi",
  "key7": "26R2iAije9vFoWMxc4e99o8fFDu6LFnf4LsQLMvjoKvtJUCWgjFw9vVWuQe4V8vUvu9X6cJNvsgMVv7frwAdiVd8",
  "key8": "62m8yEx3KvSuSJNLtEMSpEytimfrmZSvbUjhCLtCBYL5UHzR889TZsQmXq2Zbzvz71xPkYDZ3E2RweAW87dAHqoR",
  "key9": "4Tj9AsUeyqkcfLcoxKmUDuRJYHWY49oq8uhJeRPPzHqzJiuMXGmzkUwQtvHnG7mMp76XUp454HH1gvu5uWuQKVaK",
  "key10": "22chQiYnMXJ5pEZ82bNPQ1tfhxT7WLmSMrBeacPZoZq2dHqbhnT6PKxJNESgfaH8ro1P8eseGuSR2xtjrKoZhMXs",
  "key11": "2ZfKynpx2J2UGRCog4heA8tmttSEbJtUGhHRx4dcZeAWjmT62KTKgvj1g2fzEEWE4DjqWfuZ5gV5Tm77PUXAydSZ",
  "key12": "zAndL5SvKZAsqrS5P9QEAhjtMJEwS5AkEXsnymizLE8yaSvrTQosTBdzpzYWjGTbyJkDhyQy46Q3NLEsffPoVSx",
  "key13": "2WXb23F894VRARRsfMNGVbHsB5cGZFtrDFDpxUyBg9dAcguPyVijPA5EqqDZAnUSBUGGLPFcFpWUN6jZH4zPQWAR",
  "key14": "3xttvBGcadEFcGzC7DJvdaT3gQZc5DJZ7Dg1jBH3mK7MtkWmiQcrahEnV9siuZ8Pat42KnKKUPbG39vLyHCqPw6E",
  "key15": "5XLm6qgnn5nwqRDogohELZ3kqNzaUKCmqSF7Pkk7XzZ7GJeMEaHVT5i8XDJzyzRtvKZFFuGbS4UFcjuuRPRS4er8",
  "key16": "2tc1bzQw837bQENkfCZF8GKH3jsqdbCHH2XM4D9d3Wr3qfLro3d1NqppGmhfsSL5pegBnBqBBw5qRUxcUF4jFCcR",
  "key17": "3CL9qmyXwePWEyozc8iZvUoKtRSBNkYaDLX8Nj6SpFVTbYaMzhp9QEJoC2PWrgfGFNoXkbxkYhVY98PsFfmuVUKp",
  "key18": "25ZgZCiko8yqeqcMU3XE7dF1icP8jkURUGBm7UUrW9eJdwPX6iq4Hwyyh6VvtArwhFGoZw1Yb7HNdKc6DrGRNQxE",
  "key19": "3wB4jQV88m5EgEzwyQpEHM47JvAYv1MypSbgPVZR5GcLdgJ11HWBKYhsu5vaHkdGsFYUYLYu8fu3eb69FjNvt5rE",
  "key20": "56C7KnCLaz7K6X3Aj2e2jMdrGhW9bGmuvfz1ZpqZiVS15hooLssrAUuPmErqNtxc6v9pgjv1yreamQoEhMiCsEZH",
  "key21": "4nNjzHyfym97XnLoc57u17qQLG1o5meUE17zSVPkyLLsB1caJZDsfPNyRn1sViGpvbZHF1Heeka9f7ka49WqBtgY",
  "key22": "5wVKya4kmhMaBZtWAWLuDWsPnVqFkFMKwKTi9yYnJ1dkhtwmdmbtRrW9DRTaJTp9zStzxBpXZbWXD41QUeqXi9Xu",
  "key23": "4E6jMKxeHBNLAmJ8vP1DYmEUx21yo6iyQQPdApXm28xv6bBYce2fDJKSjKNK9GpfaanLVAchHgPTtvgEgRyzDzz4",
  "key24": "oa9d1Q31c1dgYCBewfV8uH72AKf4xc4eHSgRRjGkWE4LK815bWvWGwJVQnSWPdj4xnWz1UxDy2Bcf4DSdKmDmxu"
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
