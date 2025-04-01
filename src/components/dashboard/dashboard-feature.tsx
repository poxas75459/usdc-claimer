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
    "4BhQzgFHvT6RAKHEeHHB1weq54qLsjpsPnXZYcshMKXGWr9LpTPifRdBeXLUkcPuBfwS6LwjK8eZFg6x26DLzo1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j6479qu2pP65JaojVy92YcfhNLxGLXj6AEkGwNnM8PAJ8infdeUy3gPMp6tEYMrKAeWrAGDFnXigkDS1FJUGnvH",
  "key1": "1bP8DGTLiUffWo6v1x2fsiKC8rJfdihwTQhqKeEGqhmykKwNeU6MG2zz7Ntzhey7BfZHDSTXXYfnGxLMQD3ktv7",
  "key2": "KYxgkTcrW6n27iLRjDwYQ2cJwwqLHkTNgFh6AMzX3ioWNM64XRQVuAzKmpHUWseksNh4J4Y9k4cThCze2Tza6oD",
  "key3": "2h3XipSE4uNAJmLnKaDaqFvweKyVnjMtupUSN1FQZUPtPuFNjrehMZpF1V5Rq1WeNZ7MWuDWQ6UzDAvmb2G1KbNd",
  "key4": "KoPKfiND8SUHqTaFBRieUg5bNfKPov4TCY4akRxRjRmFE4pWfJFZDwYvhn4KaugwSNtkSvwuULYvkndq282YDHA",
  "key5": "5QpWMtjFeTJaUtZy4XjVr8UBdpaCd3nzPPDdkUdEo3ggBZbAEpzCWDSTTtQtdLMW9x9R2qhwfRCP1ZyV7QJK1Spf",
  "key6": "2UAjrNPfSKAjLDhGTZD8N4RztN2r9NgGFSwc5TVcs1XeeitGCB4hFeSGF9dGMzNKNTnfPtCfcJbZryb7xdAXLZDB",
  "key7": "5Fi5PpLGs5GuLkTvLtqvzMvqjmRqPTEY2LcvP9ACAGCvWGjgGERSqS61g8KdAwMvXWYrkLx5HgQbUHq8KymNRMqC",
  "key8": "55Fu4GDUoZRxep4w1cLDeV54wk814RjKBxn6ERHS1nhNcYNYb39o85sKg1L38Q9aiHGvoHHrnkbVU2hjukeiuKKr",
  "key9": "47vDCCPX4AL77DywHC2VFQ9WrnFFtcGHYdUTv6Li8PzXauZKz5ypseoiWFofsqGomMGnT6az1Ae29Q6XYAZ8wdCS",
  "key10": "4H67qk7NNkR6qvr9UeB5JcpZdDZAqQfy9hBjfnc52bMpDpQBHusJWE2wjxmXA6qAx5qpbrfM7zSxLLqfPibn1rsd",
  "key11": "3NW9aaSWeH4mjRLBSPEn4YKEo19ZkEUSe6WgZG5CrETxiktCHviojoXQf1GQePUrKRbqTZ26ZG7G7Qphjff4uKmv",
  "key12": "4EGzNWsHnus1w3KCYUEo88a3pZifFCxA9cMS3oKavBS3aWJVkkQSuD4ojkMjAjX1DqLvDwHNzsdYfNqaDtHmfQbV",
  "key13": "29cd1Tib5fXLjh6wrBc3n44pXgemseUt74yCxm8RZxYLvAMsDZ12W6nTXxGMs7RD3ZXqpX4w7hdpKAV8Ld9tGFa8",
  "key14": "3ASKDuucwxjq3Zt9GStYLAZwjF6ZucZhhH9EUdHuRs1ZJHJRzaEE8fvo4FxsmHwTiSnyeTkjNU5WuerFwvTpsTVn",
  "key15": "5NLxJFN2bdKkYJQ1AVSH17FPTFjukxPp5F1eTuPSpEketdDvrNyoio68zwXAYxZ8WgUDJTujCHFixPD1bc5CBzZg",
  "key16": "ixE1NDEkYbT1z2TuxvdYK61LfQMLbeLMFRNbjZox83A9B1UnGy6bLQjAWv4HAAmr9JMoX8JFLV7CMn281GykjMr",
  "key17": "2pEv28s7AXY3pBLWDDVE4zHarTYf4irZVSXishA5wVHyUV1th9nNzPBtyM3QEAWEfjZamSkUNMJjYeayRZ3zhhCZ",
  "key18": "5nRQy2dgP1WBJNh1JpPsoUUtjVgKE7Y4BN81CeL3KJPaMfwnQjB3kLNL1zNpeYWbjD9aW3WHLbD45Jhod9hZ6zPQ",
  "key19": "4YFKsnRBTz2h7TGJuWzdrBCnxG5wugoSQRPSTBFVQopcBwb682WxQxr9wViJgfkDZbuzxDCj4fryW3iU8uZ91Y6g",
  "key20": "4QY8RRmFM2mYBzgg1BvVU7C8iaRHBd7bVZbGZ7vvEuyStdECc1zcym3vFzokDwk1QDo5WZJsQV5UcvbhY9TamAkd",
  "key21": "358JKW4AgLjgGSyCjLAnveQc9pY5kBUWTaNMttRS5kJehq8d2kRFxW3ZJskQ26JsJxYgAD9qnG8AgqpehGN4VE4a",
  "key22": "3c3sX1j99D7dDdkk4MkRnRxWhR98HMTkqpKCQoP7YnvCkzL3MHmYjMYndoNzdNNA3QvdM9JP6GAyp4Wj2ta4rVnp",
  "key23": "2RSxii6YQh8k7SRes17uW8M4LtP7jsrDMm5Raz7saFqi7MnY6WLixQDhkdbubPM4maTy2RoHiJuejq1XgbDmNjL3",
  "key24": "VVauQC2aYjBDUX5sM6BwbY9aFsqN3imku1wQ7QoxEsyuz11MkCEDKnKCei3m8fy4Cgb5dBL2L3Xa8DmNDfcygoy",
  "key25": "w1AutvMyeTGxMbV9SMUVeukTqxdiJf6sYomFekxADoEZGapkYVRq6EbbHyhKEB3MPfoq8bNSEGYGraqeKwnbymb",
  "key26": "4SbZVZkptkBxKjZbinak9cU85oAdYYyyEEZPCHcMy7K5S6xy3mYUPMN64j8BJger2RWGhwzY2aGbc5KnPmVVDT8m",
  "key27": "3Tt8j6V4xoF7aPNcjb3SgqdxopXeCKk7JbyYR4i6Zq9yNSw35DcC8D3gFCXePmjNNsSh3yVx9xEGWqH5BSMp34Gu",
  "key28": "84zjZ8xbBXLc8QXX2VjrCPbdMAm2wNrmerE1YZGuJYEkwb5iYg7ngUaJavgueRy2USArGg1spaucYW1unbdd2qx"
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
