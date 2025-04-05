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
    "5bZHyHATsaw8GnoK9yYNRFGaVXFNWCtctW3z3aqpUYq8ywPwPHZULHi7JFYS1UkydsstBZXWd3kyjqXHHdgN7HhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Yj5qRZXFzfqCju8DjcAJZAdBkFVf2jpqqLu8pp5AjPap9fEQyoPD55FfwU7BLdVi7CQKjKoitjMNrChSiTRtBv",
  "key1": "2YBYpHtchGQZre13eJk1FctFZf6hNhoTo39vmQ3rhAc97xW895NVR8Mz7Un8t2Q6kFD1U2i9LZmc7kzgjfQ3raML",
  "key2": "5ZmYG6dyx3DPFqZJYdFXPV7Es17NpyhsxfmgCTUtf1tmq9VdUv8EZWW2Na35vjy55gdYygeMFnucfsdrAMwfV7UQ",
  "key3": "8ZRpE8ZahBqTUFgWddLiF9LQ3ZmEiQACUnh3GW6QwvMpGx4k5cCVad8knLn9Vc4kubuTZjmygr3SmQvBSwU2bYo",
  "key4": "rXjwgrABS51e5ptc75BJ9fBvrY4juTN4vFdABHfW26bNArbf2HPensfwkMnDE4hbn3xbvtKemLkKwzS6TfCA67V",
  "key5": "4ojLEkxwSGPziUvVJWJCHtZ5qxqG9i5bJf4SQJURXSFdoCiJRTnKHAxG2YS39UsfC4MBRyfo17qNuPTL2Zsg6EuV",
  "key6": "4ySJDexSNMnsR4gEEVaazVeKGvHPjLwAenJb3ek5M5D9rtEPtr6hR7f8d1hnVrmtZCPKHXfYGEYW5Ef4buowZ31d",
  "key7": "4KaYxhBu3VVbDVLqGZLViMM6VnK4JPboSdW7KWRJDekYYCPTCZiZLv9kdgQzLAL8k3pSZtAvX4yJHNdzGAjWkFWy",
  "key8": "VP7QVmQZch11DdGpDCoKSPhGB3zdDvfTpddGJy2twEYbxRZnXiuRHTZ4gBk1RsWybfr36d9MDKXhy8Fdgnv4A1M",
  "key9": "2hWxkHqMgQvW5UxCrxRVGMs8Z8B9MksWerSLnXNyBT4zQWFu4CzhzR5JAGeqq7HQ4aThGtu8EbrpJgTJbtCzoDmv",
  "key10": "5uV1VqrcgwR2ttS1cax1PJL7sJg47csTxjLksZLBQpRHRLQ94wy55XJHAq2NRkp73TUfvR2FDJsdtRz3XsdMuEii",
  "key11": "dNGpbMRCom8g8nVaXomjoarSTWQ3M5A62VT1tGozuHyqD43mFe49BCa29g4tMqasAXaDHHVj6qgJowvFFNzi1ue",
  "key12": "3KAwUF7h7pA4a9ZtCNiDKa1LtxVqS6uh2qNQ4XdtSygzftyDkbduUazX5wMswUh8M93CnsF3JRcFVcd5F7mD536U",
  "key13": "3Gda8mEi3PDBumX1DndUZ4R6q2h1xnqCrP42xjdxVebQ1sNoxdzEM69MdDGYGawvNn5a5jg9qFCuSGYwkXF5Tu6n",
  "key14": "2qrXcy21CgEGKYUNsP8cvvYNTZQ6XxzV8JYosXQvfVwjmuAYrPxcZmD7r71QEQ7QpLeWKPro3phhaDKEsKJxS5fM",
  "key15": "MFWJXC5bpCmEy3zBJWGzNKB8QFU8BX5yESfuPhRNSA4djcRoY9ZR9VmT1wnbZBnD96UCPH9STtWkdtmgLEWfce8",
  "key16": "4UWQDWwbFec4nYzmTT81FGC19W4ah9HjucwEoQQSKk33JsUGkgSS3Pp3Qo6EzLhzmk58T56kyvkJAwjnJ9HEcKYB",
  "key17": "36PD9t6XWb49XuRNQH2ssKSq6K7LprpFkbCiQFF2MFQ4kVWwg5tgfk76M1kcoPfAZ4s2CbUCYXEdz9fnALbffahx",
  "key18": "2hE6LKKnTi4K2rQ3oa8MigY9uoD96dMaHsVW8EsvHtWhMfvg8Y1pjhYyN2c5YTNxxBRLaZpPk6mkrfurYiyjCA2d",
  "key19": "3kS5Br9euUUUnfH6Po8qdtPd7oyUxurH1t1j1eymckhCP87q726S4Hmu7UucCps4nSjFpo9Y5yQsiog5moNEak8x",
  "key20": "4VY1J2r7EyzZK5NiBSNjAcv8rfqTxMKGrZZLXVDLS8GSox1p3qVfhuTfosoD6JjK176z7KotVvearRKFmdenUga2",
  "key21": "2BhXVDbo6HKFKufxuuZx7mJGwbTRr88T1cFrY8ezBJe8p7Yw1QaRs4MzjWsvLKJ3MFiJZU5LK1Ky8UTz4cxJFqGQ",
  "key22": "4eBWBzernQ9xYdwJHvjbGwm4EbGomPxi7bgr6BbWdNoYSzR5ZPN9mfRbJS7pqCvQa55istcrdfzTBkzbHSG67Ta5",
  "key23": "4mDSdAt8C6phpCNxM5W8AJxMte2jJVgw5Tyz5xDgSPZ8uokvkvbyMD8xAJo4JaMisyKot3xS9bzacaCgA9Hf4YzW",
  "key24": "3HLzKqgpzj3EVU9s2PtreH8LP7DFG84ogCvF4UtUbPL3WNB4gpCYhrXcu8piv7h6mntwFaDTKAke7AcRbAktyyEj",
  "key25": "4z61uKfcmM5ZGbzhGHPvnYeZBVoBdXPCbv6MaCr3gqDYxmrGF7yPF5Aqo7CiatECHk1Eht7S8TJwetZXZhXZEKQR",
  "key26": "4XWYGtWk9ojabNoVbtkJC6QLqfMdK3MapC7HsXsjAFSy9utK5dCFN8cfsEj2bxDFns2KHe1Ag9Myomff75fNMXXA",
  "key27": "AUXWnNEUopn2oBbKGr8XidKHSXbjmSjg1qHv2qedvU25gpMfhv6SoCyXBfB6muns85paEr4xpbotJyYwkAQUT6U",
  "key28": "3e1oa3eopXpT3UqqC6LLoQJoDHjwgkbVS5ti7xsiMPXXPNEodivL1KsiPqa1sezTXzD5sk9j1PX8v1hYw8LQx6xf",
  "key29": "2BtTNaqXSc2ML5YjvS6MTwDER4sKnC9Nk7apKEAsrjnhLhLuTBmAAkuSvSDTRnvb8dUimwvGfXeLtMGqbvCmoWF5",
  "key30": "3xjTZUWuavDuLkNdhmULDPpCJ9Ydq94FLLnhvVYToEbP6tRBEJWZtkrb1BoWo3iZUp83FVvxUNfWFyoGaAV7HYAU"
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
