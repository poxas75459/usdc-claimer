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
    "5PHNJ4DNBETkZ9DdifRvEBzKuqyYZjoNRvuAQzEJLNVRUx7AX2VWCPCoMSgLsMCA19wdwee2Vo9b8UTFbC6SZqFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CVoPhg3yqLWvhddhcXuoL2jy4u3fqRbLcBmkv23VrA4QNimMLWxZnoh3LbBaUzRjKfaD2LJ6Fcr3xtRtQkCU6Es",
  "key1": "4GQ5QE9q9mAoKBwHhXe5UUjJ4Pt1Qh7tLZ8r8WskSUmdWMC3pygPYruSke8vwZhYbVUzgSFHSiMA6mC3Y8ByrQHL",
  "key2": "4yLmKnCCcgDgiu4kDLdRE9KgGZqKvCBNJe7nXGSg2h6FUChwH9VwuP4mN5Cn2e86tGDjNHLyGdC4kRAjb7vRdkbB",
  "key3": "5kVipmnUZ5RkFMZsmJPMZ8Du2VksfbKhWS3DSJHRnQ6C2z3joe4KJ9JbMb4QACBGQWv2RkaGwu9qFdRyAReP8mWE",
  "key4": "2ttmYzcGUktAdt2vT3TCtNP6FYUJFHYXw3sUwYzBjjaGbBxUFU3hGcUkzKZJ11bXo6AZmoFkPYrNJ3nrYh5GDKY",
  "key5": "2DufGd896W4wsT7e5rcWvCv3ARGu14Q8P2CJwBKzpqvkaqUyCXgF5jbi9WiwbLzvCGHdEJEMopmnMoeRfAo9xEaU",
  "key6": "AEF3qEcoFmhRKPSCdvrf4X1PcLpi7JuMQDBkTBTbjjh7z8QyHoimsctDV6EqibuGKgEYPsnVHqLwPKUY9x1GTnq",
  "key7": "43mz522SEQa9mwqHHzn8YpDHnyagCRkzDEFZ9wTv4E1ejqsYsjytNg8XmDVWPju4x43qdiXnY9PuoWMySzjiMkym",
  "key8": "5CfK5KwLAriBHhCEcKgqCo2Vt3E8nu9PmR8do8Gz14HUK7uGmVbcvU3NYp1tjQA2w9SoJUQaiSmjMPs5XwLqj3Uj",
  "key9": "2gef1mg7yDYyqnmbQVxUauxxrT7VnBXGDxu227WMNgDGbWbwgKzZWZd1rAaCQuYyAbdaPKrFfp2UXmHtPyGmcyLF",
  "key10": "3dnyppHediLMkRqkP49sEjk4xpWZXtAVN5M8Rr1mSy6HJpdB5cCC33P9kc5bHDLh7eZTratyvAwcNn7VD8JsajV7",
  "key11": "5Xy97j3kKzaQ7qJV87r4kUjSyMR5a5SDetdSTTJPZFihaa9wcY7cSAu4iRoN3nJAsc8bBEBCUaSvQtavQrzYhMnp",
  "key12": "6vepME3ToyU9ffyFRag28dUzHYPJYAFaegoypUGNWAfjj7Vkp3iGoP1QiuYfmvqxpL35JJGF7fmhZp7ga3Am7k1",
  "key13": "67JJMmfYHBVtWMNfjnQwN5BcMzcV3bghDTMp3HvegoUaz6eEStFc2qk2bBTrnSXxLoyj4w4b2hKgawJ6b6Q49ud4",
  "key14": "3UgX4y5rKopUSKDKMm2XUF7sdCbv5rh4zyZwwNytsf3mJWrMvKd2ZKHMmgP1BuA7Y8W4N2ppPnXzw5k2oRn5SV5X",
  "key15": "2xzY22b67LAPj7HdV1ZsMFBKaLoc4T6ub92jchN9cPnPC3P9B3KyxCRaRYM4Nv37YWNve6jDp6jSiBZ8Nz3EiZJj",
  "key16": "29RbaY2hmGeVyEGdBCHmJeUJ7fw7dFgk8VTgAog7Zvru3cL7ge1uv3RKfu7cp3jYJ2j1ApN7NdmioNrTJBEL12TE",
  "key17": "3TBNbwVtXLiUuqpgyMbMe4FHBL3eyyuv6XtmDGDSqVe9pJQY9eg7V7Zv5PwWWtXAvsv1Ym79oQT63o3tQivqGHSD",
  "key18": "kCUTiuboyegNpxPALPDTa8o7wxwop4g3TQf5123pNJq563PVMa4UkXQnmstSvSGAxP35nxZUvvYv4aHxN9z98wB",
  "key19": "4WeU6M18ATAPMnxCoGe6mGwhZyE2SuyoUAQ2iCCTKhcZ7hSYWhXTutCV4jNav84SkjdVL85tFKqNVfRnMyZXkHhD",
  "key20": "5jhoQ7XpCHck8soiycTS5zYgXwjvxFR3FMv32sJvYCPTXauYvFrum2zU8xj7XcYrWg2HdnABSxMd8CWvCcmEovsA",
  "key21": "2nt39JqMELpFhVgiNdCUy9GBtoavUA9wBnzcNZ7R1ShZVY16jzvPHkv4E52d4RQYsb2k6FN8XLxV4Fnsju39pLDj",
  "key22": "5uHSEthBh3Z9JXNteQCcwuczj8FNYKprW3nKg21eBKc2zgHyrb4VzQPzM1z1jXwYLGwnD2kfMq8uAraitLVrnwQt",
  "key23": "3PoacevS3EDybKNJEyvke6HSv7RSJ9qVjXzAo926DzGStapPJG6LF3p8WFtmtyQ7oh9K8og9pbwaUDLtJ2n2Kr5f",
  "key24": "4eANXmU5HA4reEYdM4ZTyCgvoFSVe97jVdi7FFwAp5Vd8wX36XkSBsT8wa34juK9h6mX9t6R2oh31DhMHMGMUFcP",
  "key25": "5nXEAZN9mmU2iAdWRdj1YahG6wgjP4Y2nZ6qyGzCsxSQpVVFzrpaiPi5x3NHpcsxfZc3SrHftPpaksAKJASyzhwL",
  "key26": "3Y6MUzZMBfPb5TsgwvgYiQqzWhh6JFvCbq3QKXXHxCWer29uEF7E6yP7akanDQWvP6SjfvPNCXNWKVv6CUDXFork",
  "key27": "5ExRfnioXNdTRHWwHyKwceDFQomaX7eSXGLrckECozvEFCVNt3nQUo93uNANLVVGxvEYi2idMF1Z33kaKafSb81T",
  "key28": "63upVsmk6XYqtJg3jhLbUsnC8u7WMQQJRsuK48frrHkAh1GaYs8zNuuSHbWaz7kNWcB7KUTMtB5qYWUGQRrXgdBa",
  "key29": "3qzSR6gxr4KDh69WiuLP6tMi3EJmatSuGUod1nREXQuorJfWaPX5hLbFpMpndEevG2Qgj3fW2sGVP2oX9QRfw3YM",
  "key30": "4kJmGzdjzZXdvjztVB8paskwYbEUNyCETXMBJWiHMghzesv5zbdo28WhaZATL8uPy5NXvbRpdySpbK4PAH44d9w8",
  "key31": "23p8WCyJjtsoNcbKGnAFbg4yXjTdrqdeYxseouvByoif9W46Ash5Kfm22m6y8sNo4hoShCEkbp2yU9AUe7XXMeM6",
  "key32": "2S428K3X3s1em9GRzGvsipjB37mbSm4PypDvdwcjP3mXQvSmUHWQD62kUPj8XujiewTymXHDq7Bd7hKB2i7vEwBP",
  "key33": "3QHTuSUG6knyY7G5DCpVALCbtC3KJMwYo8VqxzeSriKYS2jLbds82TmG12zejXD57yshWueyobTSVxAoAfyKmueC",
  "key34": "3SxQ5ea3jUX2HQKtLbz3BKkkp1XCoL2F5YHpDmwji9Ks6GYAZTmRwtQb35W4MjvUFEBxBdWMGt4zLD4hnuTm1XSL",
  "key35": "4Pvzyur9E9jj2bJ7AjaypZmBTG6zJiQGQGoGwrxnp4Ee4ZxcVWc1xgnAXgNJ237jtnEGRoNPoxNc6ZFM8X2p7hcp",
  "key36": "zUoXAr4VzhaiCqhsQfNeMtWE2NTaZH3NSU9L6sPeGb7xxKJWvo7FfR1TcYoj1Gco8NpHxa3XpzWsq4pnWH94eZv"
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
