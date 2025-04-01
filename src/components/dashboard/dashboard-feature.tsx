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
    "24URvv7etC7LJnH4sxvqVF9BCvPbG1Y7BHiBatxzL2vKgjEk8Lxi2pwKyckLZnuk6bhYpFULr8qQCqztZt9kKE9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eDYmUbyJwcnVeAZtY7kC5gfg6WtBj1Mir6gb4Lo2NoAL2985CjCwfyYcRwLQwuw8H94U3GvdNWpwGVik4BrQhf1",
  "key1": "2YP1reraixapQUqm7SpvFsrGjeuVqLPq4SVZjBc3KmYL7FWj28ZmWHt25sFzejquTRrV4BgQp8BjtitN9bDsDt8k",
  "key2": "2nsTc8LjP9eG9zdpEGijQNypsGDtitNUvbRWCJpup1N45FYwhccscqiXSjKXZGPZMPyX1ZfP2ohq6CEbg8NbryqL",
  "key3": "2i82qN4mEUCKmioyJJh5QicyqF6z4pLsoN5LEDQ6uB8xwTP4kD9U3JA3meNxhbtmdEGEPcGZG7sazaEzMhbix51D",
  "key4": "4BCMv8nz5EWrYzVw1SF6u4T78N7nqp5QSyzkn256EVSn8pcfgKjkPn8fJNZjv2gQiN2sWFKwYjGaVyH6qr1HLUh3",
  "key5": "4xVYqiASPkZn97cBp3VJD7jK5MtT1Jk8ofF4EiCTzeMRxwYJGRuoxZCQYNErhAWwwTRUf6B7Yum2SCSdeWxCxqRy",
  "key6": "5YnKTKnKtZcgbVfQyRnVu1XBne2hcdrBp8TVA1dJEJUC3CPpEjcKf4UwhZcTeSpsip5rkJCtHbTH2oqU3UVyRthy",
  "key7": "5HkWswvvuejMThZmhN4DTFbcLYBNcpjFV31wBGvrHbchCVm3twARjUC9WTMR7Zxbu7hVk2uzaAkEUqQgyoVy3t66",
  "key8": "394grDjjbzL8KVFG3fD4g11NMfrdHAYv86T2UbLbY2YWwzummFwxVcaY5FyvfWZYHRh5GtvwfR1cV5qS9h9tAhfk",
  "key9": "5Rm2gzdyo2H2BbrjfiSzCcpp6zDYnRQsFrQzhNr815wvJidc1UbBWfLnpi6nkMSENwcwAUs7xjnDuozkPP5g9Hng",
  "key10": "3hBskUa9bp5jciYdb3ixjjhF2NMAyQsndvHPrcgCq2aY7J5t55fWRGHs8Vb8eq3znXykFs5Cqd7ycTPjD15n2UAK",
  "key11": "61whtekKQkJd29ZLSWivHtMjYSgKKtbibzxc5sbSd5YN3TcKXSfGvSUFvnbG2yLgi9DNE4cNfQ7UDDUpBGkxYFKA",
  "key12": "22AhvojH5zS2pVy3iG6K4bHyxpxEVr25pmK5ZBc6EvB4rQZkiczUcbKrjSbJVH2J2QWkZ3aBCncxipnjpNDBHqRV",
  "key13": "3wyvzrPhkugS7F7oFauCW8i8KaqJ5wgQVWTuKk3suASbhvWAn19tPXv6jT7jnhLc1eckoMSZqCXonYC3NmiiXFGA",
  "key14": "3Vq68hhnMPPKHjVCAY1hkNULbeKfC9wMrGSKzXHhxgoAXDfJXCmzzaQJPBzV3rsLNWexgwsiySpmNAT6GcztUhuJ",
  "key15": "4jpLchzGvkAXHhadNUjjskAyfR3z6uHjZUvChwWncd5AKCjnujiXTwnNZmqjXRB4ki7Hoc8dyPcKDvnjSrrYQ17A",
  "key16": "2tVLpCurwuwAF4TLG2KwwdUBGjQsndEQwxMjFTTbCPWjrhUh2R9FbpfrxxZYYYyqqvBoYmu6jDXMwrdNyviTkdXy",
  "key17": "4jia3foQdCRu49RKZSrfxxeJTBc1fW4FB2ZPXU5xLM9NMHCrQhUG12qdNuZen72Q5CcKJq7WjbPxTgjpxzP6y9LV",
  "key18": "XMfJPZjufekvogNGkJqdTxzD4cNRkznAN9FGYqfYsFrKLhK4Pf5pcZPfqJzTRnZTHZbYesTVZbWqDsZRzU9T6yY",
  "key19": "3vKb3yjb2PeQzwF3mUesQKhC2a9XKfTRuNhkfqQpGLSyxPqkej1QPvQ5JCrvfKtoeb1Q999UpSRoaXGeQLaLTBzQ",
  "key20": "S8nciShbuAotiCrXGxAJ6u2MfwHv6ZWVhA3eSNQfuJBZph91GHMy1R3pAxRNNYQ3GcCKzZp5F9P2b8q9pjo44A8",
  "key21": "u9yxrjCSniqqrf631xNiBCr5nBqBNFW9cBr337zcPFjY6TsSc6jGFANAf7AhAAZ2CPWt6Yp5hMsfbMD7uqpcPqf",
  "key22": "4bz2555a4rgSp3HfEv2hVR1NUV7peCKmHGCSLJeCwELeS6fbV7XfW8A48Padf58Ue37nGRaKb5LB6yJ5NXyBriSt",
  "key23": "qENQ8fMyKC4wN9mbb7kpBqqv5pKqw14Gf9C3SqPoGUzhVDceHu2TYDLTpKCar2S6XR1o6QTgcmiLyE8NsAbfmw5",
  "key24": "4RVMH1iyL3jaShDxWy4xs5XervZjRKpFAEt3xctJKGGNqWLrUkLGSddmFwdbpaN7ZUWAZMN36FZdF51Zsq1AyWzv",
  "key25": "5F9Rq6e5qAH6zvnfvzdLrCSRpkg2r9G3byDK138tpG7mPpfWyEpAwhMVTVxPTFc4iVii9wNBD1AhjJj1H212yBEC",
  "key26": "4Bqxqe16DEeaCjaFWQ1gv59na1DiKpwGtT66XXycsiMsEfQgjQH8XqivzNtdBhiQGNr2rEMGZLSPi96CHoRuQwT",
  "key27": "2sPUVWhL8xGXB8MYq5BqY2fG5uPjZLjLbNiC7NamypQUfoejh7uGYQq6qZb8mSiXrmTCW2zk3drDxMz66hpVhjii",
  "key28": "3xZ9r7UkTncoWA4apCwLPP1dKbQFFmGPYAXG52K2PiMz5F71cqubqv3eRQG37zzhHZXs2YwxBFi4YzA8ZwvDUagB",
  "key29": "2aQgEA3tfDpjQyHrsF6kEtdGepsQ9B58syicYcc3ENoWhoKt5uL6s7S8tjCTnGH5cw3oXUscHQ1xi9vt6VFysLTD",
  "key30": "5p8ptHMpy7D3zUtz3HugK1bRF6NjsssqaX1diRGasd7Nb5KyGhkSrjeQgW1cRvVC1tSrXxwevy8rGmnhYcVPduvQ",
  "key31": "25695YRpuM14yjjfYJxDrBfRKb7hggRzGkX5kmYhQsfFQtn1jkMba9nBwaQVBY9PMd6sQMUZ4UVNUyRrcJz2xa8R",
  "key32": "5T7A19Rb5sQNMH2wyuRzrthC9YPQ4pRUjQqqyjoKw8bVUy2ds5Qzs18iQDADM5MrDh4ood15kBwAD7CMLsrfPVNX",
  "key33": "3KNZGNmnWD3QnSTD6jXNXvLKiRxakeXQ4aEXFpEet6kRTznhii6bmGV9oJHGKARKxzMYvwnpfwkmWLg4b23B8Gx5",
  "key34": "3jekmbAo6T42oZTmCuK5cZYqEBwTiuoy8Qq7aJQ23mwq17UnT73jpMWhGpCMLcGnEJSN5eowAMgmWuEJX6KZLZeD",
  "key35": "3qdeq67YNzFwtCtYhVJBqMNhcMAHmuXBSivpHkM5GGBzvBeAuS8xUZLmioYMR39vRT6NV56vjmhu4RgbtdP4YPcZ",
  "key36": "64YnhERpxUUNZXM4Sk5waJSzNNpUuiGiRQJmF8NLShBbESUpnFqPink59fat9XswiRpTf34udGCUAJM73C7ssLXK"
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
