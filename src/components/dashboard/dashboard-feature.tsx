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
    "38Sivpb57jvJLviqQiaRhJ6ehdSiPHKCG1gzmjKFh8rNjpTsmKVC3vEwvcXDmDcaooLgwhwwic2Wohki3sWvim21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DoTGzafxgADPemzoJWxbcap6Up9EwZyXh7e1nRh44qzd5HRBYWATxfbJRGUZxYm5sLQPWV168vfz5HvttYT8zNL",
  "key1": "54QKgwkgMMEXcCuCJU76vx4qZSGUpbCVHm4LYtPrHwQohGo66se11UQPvQ3Lj3oEgsJm6DJotQkpYVnMVKMnfqCV",
  "key2": "3zZXMEVhnnn5zVxZ7diUbAM8GRNqNpRhsXq16tzVbjfAhCKGiBsLZ5JjMMofYQU9cCWeJYubgU93Cp8L9BCUp6Qu",
  "key3": "4qERrUDvLsrb4r8mpLSSzgjingZJXDAubHwonuthq27E6LVXq154iA53Y69fYZb5cgns7tRzJgzqvBCP7u18zmAH",
  "key4": "pk6gA44AJJz9HpyppREVsopBsZ5nQ5ZvJbL4FaVqvvjEM4RRRRjPoocjcrK9DXv78h5Vsee3UXaa46kWsWeYUZu",
  "key5": "47YmH1xtaCXVa86vVb8CkKLWGKu8oz1Rv9sUQbmaucY7YYfuh3soxh4aXgow7tyGb5Jamg7daxo7BjsiiD4pusYG",
  "key6": "L6KxScmv78qv4eCQkKsdiDqfx55yPpTFJpdWjUKD4Hp8t3QWYbrX9sbQGr81HERhJFwwAq2D8Vxd49P5EvcgvYa",
  "key7": "471QahgFQR6K3z6zcWZKaGfdYGUHMrecEEvR7yr4yWwNy9UpH4B8F2W6wRH939yXXYs61cApmjMWCtpomQfBtaqR",
  "key8": "3BvE4yv626FaZ9KcSCfm1vwTY5YToQ6ApWCbCU2hGf5NbRXgwcP1NF6uMQi5YKoEfr13UtKHZq9TKxyRqwTRs36N",
  "key9": "3yamrCEDvLgErsSV7jZkmPASNgwaEBxNcXaxJum1QceJsFUb6jfFnUSdxiDknPWFEQoBd2HVXTzneoazU37U7NSd",
  "key10": "2416xGAJdJ3TfnqpDAFwcebpk4gz7G3rd93125Czrb47QjgHSFgdBChzwBux6ahdR6KbRXZD9UJbMwFWnAuPfPci",
  "key11": "3gLkadvCYPJH4ygj2gueept4szb42yVHKGcZKpZUJweGW7c1RQt8mhY1SbhyTv4afnYwBxXZvdLsNYg7LFJqmgPP",
  "key12": "51y7SYyQogDex7pxXzMDqjUywGTjvdbPaApssdetd8JvUfWVmo8J4UhhPHhQFczNYgVJ1njSjMFsRFRroJzcENN7",
  "key13": "442mJpMHdQhhTFmRbPDYrQ6DVRmrY5yQRXV3Z9dPXgUkSbEHwEHX3Uod923SVuZJe71iLQMrLaw1VtXuhBHGj5yD",
  "key14": "5ncBQ2LYyS7cAVXqEn4GvMFasWNoxd7seJN8pNwwBxmhdKgwXv1xCkKMkoNY8AFaCWdTyr7rSdKCFzRd4RDh4oBL",
  "key15": "3GkqGeZWLZriZvcG6Wy7SJ7TQJ3vUeRHmS1e5yq81iknJ7Gkj8ZNDyw5y1EBGZXHSvzA1Ji5PFJKWDSYkVBgJeoP",
  "key16": "23ZcYLmvZy6G6Z5rLEA1Z3TZPjKNvPQDGeK8JD4NZxLhSUnhjUUwujD464FPJggYq5MhKZtaFoPW8ZLG9d399CNh",
  "key17": "2QLgFMPxczZAovf4pbb6jVJQtBkYVYJKWUb7MhhtS4NmA5ceTJYxknMfx8LRGcUnTfowZaXbTUcPGadNwyX7N3J4",
  "key18": "ty8FMUWCtmsMMMr9ExU5G1utnpe2XNwBneKZYdCo4yMqWcPJzm4raSvy3q5NbfoQzwSHGJsiRqY1r5GM45DYPG8",
  "key19": "3GboRz6J8XJpyKL3VqrpBHpJiRY3Epkm7KdPZoM4BxWQJLeptLELjVcoVamctKhVrSz3mAVVptBZr8wk1UNasG75",
  "key20": "2TZf1SDfHLjoRG1uS9S5Vp3tv6c6Ai6R1R9wHWd3rTcyLVFD8wuP8fvgx6REVg8d2vGuqGXPECM5HmkthjLyZoQf",
  "key21": "3AH43bneecrD8MQXSxTLSvGbzPwRNWuGAZQ2zTjMKPoTbTdChw66SuGUaRfk6y8boMr2gQNjyLHoYNdidPzcmraA",
  "key22": "2hBsT7U8fRhiF2vXEgQJKrdX6FYQ7tbDMocSh89o3mY9GfhRS6cWUNTJZCXAmZWRjEEAaUKiijcntbhGbUrpndpL",
  "key23": "2iKGppV1hww1DBoJgieuo4EFC1L69ixt7NhjNbQDi9XkM11NjnXF9KpdCzFZ73AMTGmxUKFLn3qcPcFJQ1U14Sn5",
  "key24": "5mVN8kZrBFzciegc23xutCf4qyaVEQptRvwB6yX7jnedbiGh4XWfk2PX32KCKb7zS7MZuV6EGLs77uEjEEsu3j79",
  "key25": "usWQZwsz1kMLZMGXeiY2Z7WRsT2HP8jJaggVwUcUX33enSezWoSiij9pcwJEfiV2okdneHNuAA2NY61tD8CUQRd",
  "key26": "5otWG9bhb37uHPbshwcehh6vzPMEFJxc2yMDWn9bxdDg12Yh4Jid9Q8HoGX2mx9L1YjFYhwEghevmKUQzc4qnLcc",
  "key27": "3Nh5ZXPbUw66jTTX4TQc2n5XUTxnUVAPxjMVZKgCoHhfzu6UpjPQXJtY1m5UUrhNsRANwNwmY18YiUmYas5yBxn3",
  "key28": "4GaXnccoimgXbx5KZdghTZmjWueJrXtcNpBXscFxV6gSdjY1BPxFRfmdRRfbVG5MfPzX8hASuJWFAJ5GwU1uQDYK",
  "key29": "2yFJBzNt1gtDxrRqKcpoBBmrtKt1PjdYeqQdQURuM7CvNZpdGPq77wEB1udGqpCBL4ZrETcLBzBQKwTU6eoUXyCy",
  "key30": "5orV2Pd6EZAc3YXxknYSQ5no7wmXhGrZpDtwWbygeZqw6yv1pqDGNwHxxhzteahsF2gK8rMpmtD8bQEqVjrVCttk",
  "key31": "2pyEsy14nD2DDL9kzzK9mAd2eKnW9cZBr8S6WsYxxZ2cMRoxbBvN6mNzAV9SFUwjrQiZvYx3D3LMUzhetqARV7T1",
  "key32": "2dzYTYRLfyou5o2nZPtZVBYk4a7Fqod5MTL9VMr5y4QuhdaGthLXPfGzeL3rqg92REgjtVzrmooUtpVzqn3a9cjx",
  "key33": "2nizWovMc41syHKZx293c4rEfHqnB8NojD6Xcmvo5Bza2mssCC4v8988aAYVVt2F7KDzHeJYnJehdynqVwkSgnq2",
  "key34": "5zyPZtkUUTYNbyik1qWR9PUEH5B8ZBFesfDZW4423FACK1MMqrogYdj1xKGxEKSW4U6JR5oDyhK2CQySVfZhG2Cv",
  "key35": "3q9bvXURj3ukQTQ6S9TwCeiyZQS27opEuRc8TWQZHgcQcGBbAw3e2vHvjHBCDjHNKmtxosHodPgckzXcCmoH8E5",
  "key36": "4L6ZakeB4jeMZkgQRb82f79azvnBa1wu1JVPibqt59xZYyGAaFWCPD7Mg9nXXn4kS3jtmyv3fWWLK3Cug2YfYXvM",
  "key37": "44jdAMePRyeA2mGg3EpZ8hj4u67E86PpTaNEw3djK9jVd1P3vMHXPSzwcc8soraRZkDfXDkn6V7wY7XEf8Dnai71",
  "key38": "4R6zMTTpfDLNSVuTyP9ZemMAw4R3dzuiFMgr2D5YqV9SZvd1BA6o9UtZRUZRNAN1Minf4E7cbQ3dBsYjuniy6o3V",
  "key39": "4GiigXLHh1Pgmx215Y142zfRg3TaJNY43EyaGojFnVcwvyCS7TUapgZhRrhwE8Y1AQ76x8WwSNLhsZD7js9Cg7pD",
  "key40": "5sDUpgPkqgYH28Hw2m1kTVp5sUQbpxzTdg7vpmNk2dzvYBTKSnsjVnReJxa9sSvwqZCg4fMak7JS3ABFWBwCC82M",
  "key41": "2MorA8seeeRWDUTtgHxr5AW3G1CQZExr66fgRqQm1hLj1r2Rmv9CDWi27ErLLFuVDJZeRqbuukeY5pnSARoJy1FA",
  "key42": "5DjWUSVRiV4gCxTn4AjqnpgmuddDXqH5VktnqagTN2ez1yPsSMWf9wCLdNEeAYf3uBjAuQ61RFGgEkBJoyQCbK4A"
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
