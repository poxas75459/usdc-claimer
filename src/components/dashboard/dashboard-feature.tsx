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
    "3p5YXHhS4ebG4ehCw6HfddK4QD2ySiNXBQ2i8zGrsaesWSZCenPeFH4FmqNXKotuG29TS4YPDe1GXCoLVtMnqLNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cAncPW7zCvEyka9H5tpjXDCQGJGT9HCcsjVVoeJdFA5A8QRNgxfLcGcNpeXq6Ru8Fg4VXCpVGP6mJr2MXQMKY3g",
  "key1": "jYMrV82T78SzRz5GfTRRRVLKPbMM5AqUsE8L5x3nY76AoTofc5vb5jXqSnUZDZGtqBLzbF9WouGuFHBNJx4H9Ba",
  "key2": "41FMzj5TyqGMPYBbZTK3GiNbpeLaFg5rWGDES3ttbWmt23ug9feu9wcfUQRnfRaMwwu2RiCMzi5JeqXr9E5QpSLR",
  "key3": "25G4D4RE1wCFHbQwLZPWAdVPdv397UPgUJtYbiqSBGFA5TeQJgfMVHRYCg5beU7FSvF7pRfsbFHUiUKo5DwDCfNm",
  "key4": "4ZdXij4neAoUbXzT64PvCB4DWAzkrTL8HRxrjQRx84WbtXo7NTuFsDByxruBcmHkX3EHYpwWSkbMgXipk6o7xbtx",
  "key5": "Kq4XzJUnvAi74EjpxcHPXXZCP5hsE5Q523Go9KPoKUZsdrpronv1bS2zER8FPLBKnAudgFkYfUC8UxRoYTBD7nq",
  "key6": "5ofKGWRuMcymRbcKD4Bb3qPtd2aimjvsz7os6RCHKT5yvyZmtC4CKSTAo15zbsv8PCnVHuwPMovTx9ht8QwjcdCH",
  "key7": "511qwZWogPzKU7VcffFmj5XwnhzDB2ADF3fQma17Qq9UZqyFSYpomLExDoGzsJd8SeQ6miQbVA65srsFa1k1W2mY",
  "key8": "SHtUnALMGbBa8NREUnjTJypNUoZG4X2YX5o1pZZjDqz9sBgFQNHpgfvBb4B8YTV9rAq85UbqE2DSnmzg23eF1uT",
  "key9": "3oQLuq2Ay7VgSE5gjvCGDzZzFzqpjfu6AgTcpGMVhmh8LPKyKwrL8ULEvbt8LJNrqrJkwXW4b9WkvrR1QEeHSr26",
  "key10": "5Cgkng88ZXrjWRH4NPFPSEDAv4gj5UBMwSubYVJMNuZqvkviSrXSeb5dLbresCf68xtzFw32xfXpAjhpWWuXnKvF",
  "key11": "48GXyNEsn6pNSj5M12L81LVRq1xQ5WrJowbbHxxn1gr5qWSQCZsaDTwZj3XZw79kewoQHvrTpfLFakbPtveCs1dr",
  "key12": "4hE6bcAVx7XZmEaSaxqnV3WMvBL4Pdd3UvQPTeseLtZ259S8nEZNDUjFfZJUQxm1bFd17RGTFRYGv4Rkzid3JhXf",
  "key13": "56BEVs3Y3U9o1dc6dEGzrvvYUtSNQ2ithFcthsS2Zy66vfqY8z8icsxLdBrQmbuBxdS5bVoNLTqK3DvfNb1MU5Bd",
  "key14": "t2GWU9Yg35i1BPd2MdeJ13K6jufL86JCHzfqZoPKaKu2g8pSV3v11jJHCUQBEzEQwriJAD1KTUVK14TModVtATk",
  "key15": "3roXp91Wyn4tf43PS7WFiebupY6rS1hxaWrJGf1uuPDDFCs88ABq7ZgzSeRsSzwcmFb5GmTWGXLpQZ4efNYEU9yx",
  "key16": "hVtuL3PBoh9qobJTgEQNKbuRvYWRf4XKJ93Xgk3s97dviiS9LTVgMFjjfAgD3U9a6J8KvGMA1sZUt5BHaDwkyYy",
  "key17": "2wyEpRUHGkERHgXda3C7uhqyNNWTyZxF2BaKtiwiNhkFnMewbfcmcQTtVD4BGTakHnBfs3gfZodoumEZsNPUajM7",
  "key18": "5htJ3ZWLiobFH16mQVABTgtgD4ThBFr8i6fYwAXt4QAA2q1rZznF8kunZmYefEukDPTJxV7XdZKg5b8ikcXhLmkY",
  "key19": "3chbsSrYbp2BqtWc3rSrwBf97J3ecZvZKBtCmUDndz6wCcDGuB2m5YLaPmoo4nbsyeJJePcnuH2X4dmYn7uKn4pm",
  "key20": "3EyVp9Q2ooTvqHYMP4xpH7CUtB7Au4BkzgAJw8BRtSbfsTshNtfcyGj52hXmFap28rgGyBaKSdnEtSbWiPXkqLbF",
  "key21": "5ZxjLeComXcL2mDZMP4CwcWyhNxEZ5TLzWgTcjq3kXxntheKXTqYcVNCSohhY6JPtdP6NZmFJpFzmYVfLpH7FF66",
  "key22": "318hCGDAsydVxeFkWPzQwpNYKqb5Z8rNYZuP1YWBvxXqu6BvANCWzFnVpXLtvzb4ihXrNvaYt8cQXPUupFYykFck",
  "key23": "2DU3jNAWpg6poVyEnRx5zuzFKDXQyZwrQffoY38zc1zYwLYpHTCHGtGqXVXCNE1kbXNVmsEogVij6mvwt9cZbGQg",
  "key24": "uZBTQr9yKf8hetsSBTcsUGXGZ2yCfg4qZMYRrCsZ3ZHvcVSp8hDDzbdhdQpLbHSrNZCbEQd7s1BKfscbFR6qWyR",
  "key25": "2C9pLCkG9GWDRd1qUYRBqTtxPS4jnJns9jJ6c61H9jJ2Dj6bL8iSstroBQZQPiag84uPpBSc2DDPRxXr6Tai75zv",
  "key26": "4dHXxPKUpKgnTV5uw5S3BifLWw5ctnPQH3WStK1PaMVD6sDdtvhJigXMuqy3BQdtHTmM2hSjRNXkM15cih4idMk1",
  "key27": "4atyK3RyqMtzYKav84sTDQahbACDFj2UNhSgZsH7AJz4GLFJuFcic9wm1Cvnfp29kf7k8RajyB9vzy3VTAXDaUwv",
  "key28": "4rJRfy1aX9VuCdU7C3kAmo6QcDjpKLmiddD94JTAUdh8cu6akWmzWAi5gX5iuExb3f1VcXpCVeXEfmjTc1ncBvoh",
  "key29": "5X2nN1faSEzmUDrWprD8U9eUafx8eSLiRXukG5dYKc1bSkhsbBZGsdigoB1KayZtatthGTcFBhirS8uPpTBFZGUR",
  "key30": "3roHaFTnZPrFRJEhaxKdUzo6u9yLXj5GJRuCYF1vVJFYHyNKaKByCbtb7p3nZhkmobftQ7WdSgDRhzoJKuwXMWqe",
  "key31": "5aB4aKYDLYLno8hmmT3wLZWoDNZgEuDQeQ9SNsnSJfaZKrbMw1KY4AtR7pQKZK4nysHTHSyKSGrHR3cEUeQLtzje",
  "key32": "cPhG349UYruunARLxRbJkJebjTxyaoKfzLgqKBxa5fHgK8tzR6BV3wmLYpCFa3zyfJftQCDERwCGHSHdMNPyYk8",
  "key33": "wct4g3ea8vHBedHics5kPgQ4RpG8YR2UtAH1ow3WaL4oJx27u7nPPLw9JNpqzCLs41qNjssZt6BoxRztC4XfniY",
  "key34": "3AqTP3RUzLkvWmJkvdK5WfmhQ57aFan8fHjhyDkcDs6XmZoWR82WPAML7qXYVUP4TuSSKyKe8e8bhgEKSyHefdyP",
  "key35": "5mCYAnp9C3xjmVWvHQWnAJvXEZbkyf3PNK8cH2m82vGpkuy5K8KeDYsefrr5YpXKEPXRu81fLFPVTiMpPYPuYzxr",
  "key36": "5Y8Yz9JWiNymrCTJztZuUFa7HMTbAjSjqjeLjTK54DWmce4Av9pRc3vvwqdBpHp5tgK3Y8sKqy4t3uTgFsg8GfSJ"
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
