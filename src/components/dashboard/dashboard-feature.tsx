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
    "2fJRuZCvoYDVWdG6KwMgg6v3kkNLT9tD2LBDF2sQNNJXkNzjBudsYc5fRHGSFaFUaL9U72LASvEyNsMS96v2q3cF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1pEHFc2KvfixvJCmyXG7cRGBachVgbMS6A1fUz5hho83AY9VSjzJDW49RqaKwa9Sj1EUvEeSP3KraAZkyLp3xJb",
  "key1": "33JRM99MqMZUWVU1zBTGzPD3pHuvzPFQfNJk2Y12MxVhJ43ckEptD7TcsRwHp31fUC6VudKdXwi7hQR9M8DzEKNb",
  "key2": "3DJaJjGwjAwniRZXbyY11nYsPitxmmzRS1DreoVGJrLNGG4xLJAeNgE7SGhbsR8KTq8aK6BAG3ko16YFjptr8aCr",
  "key3": "2Yh3j2sZr7j63APCLteNqbY66ehRFdCZqebMcDVWhnbkdR1D8oN4zgebLSky4825J5hW3mG1kp1e8ZCEUE1udHFh",
  "key4": "34fdYa6WXNkLE2AB5pFweqbFa4uNoeD5RWgpm2NxEkfh283vV8GfFdTNZd7ejMZjG3j6ewy9xJp8QPSEAikpkFqU",
  "key5": "61MsvyK87qPBubBHWCpfJMuYF5wsKaPnqM11AsEXtU2Hv6317JApNTEgFJ3LjU3MZebxwaeBaGR48RsoL1gzxTaK",
  "key6": "4RqxmKfkJ2CjSwWGtMRqyPii5hykkYx5D2A6sWrCzmfuPYUXLNmXAyTM7aVqCQG4gyfDUAgtgLyrVYPptnbRHiHA",
  "key7": "5RmrDxDcc4WAoPKkWagcp43gbhLkQAu2sSrB3VSCy1gsfzgbBEv97LEjigoTQKEuqN8PYqRXKB1GkfaH5G4EpvYm",
  "key8": "3ao9v7H8ay5gLBddmrrz99urpnFWdjt6FVuuoJGadsu4KZbGK4mX7xXZFdGMCXnD2GGfTCfJDGLrfgjZ4CAv2THN",
  "key9": "2cfoPuZsqF69QPYrvvRYySCqoaaratqrfdWyAZHZLGxAzQsveBQaoY3yZirQfAkYpVx82paUBosFnuQKNmDWtxFW",
  "key10": "S325k1E4Bqz6K58iWjeziVsL7tZz3qZY9nKpBmEwLBXeFRgLKE83TT3fLg77kwZ6wW7rHXqmwGPWdWRu5q9rqE8",
  "key11": "2qj6Wgvm2bBis88GEBCjkvCXjJnYzgkvqLuKTbN2SPFoRtZpNRbE6FG145Dc8iRXJQ3KTVv7XToa1nfTgVusSRfp",
  "key12": "GJuqvLobu25JFdBJVjNoJLramx4ivjjGcsVbV4B6j6HBvM4fR1iW4ef6WmjHDo9FvqWAPzQy5xRGthGzQfAiXFW",
  "key13": "WjV2mGYuat6vY8WobxY9sxeSkhSHcXenzjVxXecvZALPCabiwUY6PCD7fb55yQFRNrxpeNYR5iG5kCTiynLND5Q",
  "key14": "9WFkxcYQ7PBYAt3HmkvEC9oBPcnH5yyTb3nJ9A6SgBxHw4FXZDhiUdJT5DbhFJtoigGpqzL2oP1VugScun9SC1t",
  "key15": "38r4zkHK4bGWxSbkXkLrCMy9YN8vBF7Fhm1UDjghPKhnvbC3Q9ZwFpAFJFNihdgXPr26oNPNew1c8pBGpepfwJdA",
  "key16": "4VqoJvVQmthKGWNeqUKt2QUnx8X2USLur6aWLT3ZsCMfhZ8hTtb3w4xMGaUN9RJXbUwLNCs2nijvdsSaU25YDVHj",
  "key17": "5G7h5wx8KqWNWKWVw8fCUqvWGnP2bUZdxW1vQQ4rW6cj9YDAJn2zccDjicoJYPwEVibGq8Ski2rHo7xU3WtxrYuC",
  "key18": "28CR4AogYh9VLPTC8PYNZEwU58yWk2rdmuxMhh6qKv7eukcQtsyi4T41jn3fKZT3uEvNpkkqwK3qLstC6umFiyed",
  "key19": "3aSBSfbvsvt21dYy1V7Ga7iE5jUSFSmBm5FcqCyQX1kPkyiuj6gF71BrxVwRCjyLmp4t8YWXip5ZxkmN6jMP3wb7",
  "key20": "2LANURrPV425woJe9sPDZECSVH5BjfggbXMV5xBUCQSBDw96GEvYq5uVHPymtYh2HNgj9WdFbXUv76mo5vsnQZ2A",
  "key21": "4CthFtPywz6sBb9nC8GvyBoDczCXHc7sKwMdVkYsjfXd3SCrqqmizEgtt5QuG1T5386o8JqYEki9zgmgpWDKwpkx",
  "key22": "4nqWW5gGxdAkovpBSR3Wz65qZLeNUHSuzt6XRZrpwjhEDsC6vKvYRutPFhHLzYrpXbUzrvzBU8joCoEdTxBQ8Qkz",
  "key23": "3qM2jjsz1RgAdwFWtq3aNAtigqEHkFgaRFxSdLz6KteBM1CQ3XQE7wGjsWwg3jGka8Z4VBHb9Y1vBQfRnM7Kuh1m",
  "key24": "2TKP8h4EX9fChUwXKvQcQ9TGATCo3bJAih6VAV8YFHYhC1Dnrtvn5Ve98Qd6E3cW9Vm2YZ6AraAE2tVB9q2HbjGE",
  "key25": "3aw2gPSw1V9QkJUW7Ex9fudvfxz3t4G9ii8LJyVjz7QDiGvQr4hNLp1TG5G7NajzqDFsXtytDtGxQPCAyfbapjJ8",
  "key26": "2G6mQbPCUbc4bA4RXacgpojwXwNfjcm2bE1LgrhyKWAVtQ1yxRhp2jXdR7d5osTR6wJqGyKEPcJKJdmoGZicZZX4",
  "key27": "63V6AThj3DFJi6H6BHRTUw9yMoyEqYU97vnYscipLrpvr5Ur5W68HEXVSFXkJn9E2d8qtch1i5Qy2Wmx2Cd8SUNS",
  "key28": "4YzG9HYMSdRTbfEdF5jd6K1vbXmDQWvAuVi8PV3HqQWXu8GkD6LmcVE8fHooVK1YTjyW6bR8otc33VbR5kQFZAZb",
  "key29": "jDqRPMvToHTgf2dTDnZTyzM72Y7eeEJ8zLxN8BMwie2kAKMsTKwYmyxSMhyQB4VrP9mzoVvQbm3xUE6X4b2MzLU",
  "key30": "MK74RB4mDKrX3edp3u67mPXejfz6KPXJTM8q5qb3b5ZnYNBfMJoihS4PV2vguGfmrFDU17gdQURf2PAAFyudTJq",
  "key31": "51bPt4YvM8DYkHh7UmayzYe9evUKQZtVcrxEdkDHbcNmzFUzhwbrvHkJeczG1Z93zZyBZZmt3cmK9DcTgegjqTUs"
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
