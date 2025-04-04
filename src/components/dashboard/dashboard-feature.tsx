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
    "3YrLULcUbLWkDCsuF9M1hvsdtkn9eHggwZVcA6M6ijEkY8hXzgKy67MFyBH12osKcLbBmS9kMBPeNbnWGaHvnERV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32XBXwMr713PnKh7eenU79NdxB7oP3xukiV9ixiXs6e6KrjRmXseT5fbQ7fkBX3MjhuUvWMiLLKR7smQ6Jex4ST2",
  "key1": "4L2JokgpqdwrHCvhnUPM8KUe5HA8cuzZjQNYQj2CiBkz6BHeHiqZp6JBDMBxBHtcC1ETvDhVBvuuKSQUQGhf7qtV",
  "key2": "27T19VVcV7q73fvRKskDhbwWPZmcHtkzpZuH9mDWA3JnH8kCk8QdeysYCzLTLe1i4ocRFCAeQXZFQRLDB5PqscSp",
  "key3": "3ZXRQDy9ym6SN2dMAz6xnbyGVTYd3FFsckcmgUmScjBXPbjoAYeo9sSw6XCPVoGcHUu8DJoH2aTwgxLuv8ubdVuP",
  "key4": "2kKcvCaKtas6r2kyzeTXje7KTmJMqxe5jdFPn1qHPHVDGWrnmd7J9HXhxwXZLUs7tWp5yzTqhyfWZHR4iWpkGJFQ",
  "key5": "4KGZmBHbLkxhg6zzEKre9qvvQKNqpVTGuCwTpfe6aKM8SsgnaiiYcmTePAe1fRUo7X2NiybbTKeZtPSBh7JskdV8",
  "key6": "4LShGuo3mnJVA1fdvJkksfRReHTMkco7fHJQgUyDN7fkEgRcxDmwYWLtjdfjJGWdzNc9LhW76aLmfekiBkQYPjA6",
  "key7": "5MfwjCJuTiBxLGKZSog7Mw9wxHe7qZTnUEoQt3PpiPjA2VBT6hvMz5UN69E3pienSu3G6NLuudKFE9khqBcyyDGJ",
  "key8": "gf698NqFQtk62X7gTEBfSuHu3WWTgrNhyCLZMKK55np7xiQFkPHyoLMLp47CUYFwSdSbgBnaq1vMiLgbqyH3QPr",
  "key9": "5EndqgvgwCJtwc57yDtE8F1BbfqniQErxJ4tMkR1JLWGe9ixmVpxKqoKn6y7cRQ6aiRgJzwKvtPejKQ1GTUFgqkb",
  "key10": "3giPp6bjvw4m7KdeVdrtS7xPGFyR9PTJ7oDvKCeGyvu8F9UPjEDd1Fad7JR6RzBZxyayokQDaAgcmoiVqySmcPTG",
  "key11": "5DCxgrY2c6iKKYTysQZmRgTjLh6CFHALbwvfnJ3Rsrpouf1nbJg1zvcqYrLAnRcA7qzdEKTKDd7sxe5SVEzURMVk",
  "key12": "4WRf7NdrP4DsZX6oEUHRRsP3Qxt62pXWcW49xqzzXQsanLKDzmU6gNCgGkk7eqEFB8RDyseZTa5159Xq47AGfm62",
  "key13": "4HvQcCq8YvbbTrA6brB7qTi6tdFm22QGG4uRWpCRsoyBn4by4Du8CKjvDDrkDZmvisvTmVH37RfcdMUNsMUZgFaU",
  "key14": "2n7HM2dygLbCbxze5qbw8ZY2AcNXkV9rLiPpRoG8ZFo641ZHHQuDVCHY6DiUmy3DhJEen9rNTsDXHksvHHVzKeJF",
  "key15": "4KGHwYYaQnJaeM2N5etdKPUsZKFgky6J1o16uV7yuiXLbt4N3bmb1YanUE2ThrizUagT1oVVPP1sAZNW1pz5voH",
  "key16": "4G71AyK3XWKsL8Yf6SnM3y2vNLrmRxjrZAGQesrtA1ECjB8o9hwvtyd4ntr9QB86TTLMB6qHiwydQc6jdBeGBvF9",
  "key17": "5qCpQa8TCMMn8jva4yC9ryHQxconrgsRNMkqx7iKkHoGBEwXt3WkdzBNtAU5xxZke18mGu3UiJdctrU3MrWftC9u",
  "key18": "3CDnh2KrUcn6JFMDeY4t1XPsU2h1mbvDYoPCmxL3FcABqgmvirXwQTNFx5dZdYrvSZCvgx8u1ZYjAZRsWT8NEdEm",
  "key19": "3j573pXjeVNXyB7iDB2ZfWktvMb8f5sLUmcRRADrLoPFdf72dxcnq5fBjf8waHXRGpqgRGL1XxbeSzYbs8ocY4eC",
  "key20": "28sP2nWZXfykfKoe2BKat9HAmjMz3KWKD3wHd87kbdPvs6ZuqgzMVhkcjDtLwsh1a22CLzya9TV6iLCBJMeqjQbk",
  "key21": "Yd79m9A55pVSTmYLUPpNdwTtr8dYpewBVmZnMJMJxJsA2PYa3pSNw8V7ympVXrknRGs1jninWXbzN84WEeGUrf3",
  "key22": "LveTpoXYLBmuYCZcsBZG41MMVqxDZYASRV73dHYbYtQBBKaubtFPWWPCWk3TFHbokhrwoHffBuJwjaxLLgP7XjP",
  "key23": "WJpqzmrUgLMd5U3YEj3EwvpjFiyq3sYhkpnhow31oshWYv7JpaaMfioPXZQsQwaSpUDJNi2M8EhZEi4JgbnG5EV",
  "key24": "cY82gqeABMUSpJgxeyQXzEZQNQ5WXTHQXy5m7myGqa5EueeqUDECQ15AzhXFgPxwH2cYE8M7fy4g2UG18VCAvyi",
  "key25": "3BFzmPrA5UJqrXibzhRGerwjWsih7ekDosvG3FB4NsqbuwEHimsvvsjS4DPSgHcq31rM3JnmfsYz2WSc1BjEGMd9",
  "key26": "4YzFGZPrAt3i5ZzfDmEpHaaDDB3tnNQRzDBrpqKVbSxReb9DKhGebcU752fM9ewxsAUo2NfP9ArVbPoHVSCi8JwL",
  "key27": "2FjDQAVMXcvrLfYoSZvNNT4h4h7JJbCGWnrXJ6SkhqTrTiEcww7AdRSSoVpJcYmQHxzPAECtRGzwCNu92pYq4eii",
  "key28": "mMhimaNCpYmWnY4bFwLg5WF6eMK2iXRYd4Ntm8zKHsSp3qnmwkK44Qjamtgjr6T59m8M2dmPxgEwvyCJQmC7MGN",
  "key29": "63gVvWRWXaFYNJEx44shdpJQw3je24EuJoWbVxURrkKEJvDG1CRHyNs2UizqPHBAy8cvRTE6US5YoXN6BKoFBS7r",
  "key30": "4ooMCRXjs4d3gisdE5rcjQcXbcbeNBis5msGwh6WUZSjbDmErHArxw1pfkmtegAi2qD3dPfSzifaGhjdbV2hNTxV",
  "key31": "5qbxiRaPXu5yiT3PuPUenK2HgE3MW5BkX1RetauGcrXns669kHh6JaAHTm24a3S9gwXoGXoAmhACN9Vhk74sGhrU",
  "key32": "5cYP8EaaiGswDApVpfXo8so5UvzYVkXv8qGNVnEw4hLR9hC3Me1bRskP6wLWqDBpCiG7d7rEf6JUzLEXcVhu7ZL7",
  "key33": "5cyUG7CFBBPo9d2XzoPEznQYMok43Js6CacZLugXLw6udi33umUbAocuyApMTU2SFig8LomiAiC2RHL8p5ke2rMq",
  "key34": "3sWMzxjHni3x5QfbpqoC9pCEgUrb5un7AqhgzqCiKP2JxNksorU977zVEdUVb16gR3nwCzFfXUVFX2jBytwozvqg",
  "key35": "S8nAdfpvst6YyAmQs6umQwDjWSkH2VkLapYxXukA8ViaHJfjQmdqX4B2nUJ2QeMtbiXHhVf9z9BK5xsQRAzARcb",
  "key36": "pTM1TvKAapPQi26ShDJCpdJz3Ly7tJvpYn6b6fVWbzpBWN4gy8jz5fgrNWnbP4e1yjjQDWD1gvDm4yqKTznfx2B",
  "key37": "3JWqsUCydnkFkLTJmY4x6MDHuV5KEs2YpNY4aoZ4rT6u6g2ENxhCzZYbczJGF7bZPkKsfCycvpp9myyisdB4AC3b",
  "key38": "5dxbQR4aJqyegJsvPgQgR1fGkoodhMQr7pxvdFbkiyGz9hijzhNf8WAzvuieF3SwFMvXYLfM5KUdNd3kZc4Gx5ah",
  "key39": "2xSCSLnbRBxjz8CJ1nv8nWsUg1N4orjxjjychw8cXR8Gvh3fXACStCeVUSKQuf9PKcmu1NwchEK357hocECUC9Ag",
  "key40": "3p8rk9wf7FEUja2bEYPfVbEr7rXdoTVzfhyxuVn9P2wyJP7dxsJEcDj6HhfaojR6S92hn85wHDkQbk18qBtzpiMR",
  "key41": "3KMxTVKAag91UZgKWmUKV8YmD6wUuZnTJafqgVpSKEvtnAwjVCB29tz7CPY4mYBAJaQwvqeCTudMG4NZjMy3QEEU",
  "key42": "54WFVLdALT2u3HQvFBvabmLFYQKKme89N4vfUXCeWEorjmdXwHKsNzDSZgeZ5yswZeX3wmUp8G4x9ALvJJdoXaXx",
  "key43": "DTow7o6mz9MJMWqKiuBE9NCwDJPtV76jMJkqYH2NpRTKvQr67wBX7JCNb1GLN9BBvNaLn6UHiWcbYpoDtp8gPiL",
  "key44": "3hXVjE8MDNNqUDoWEUqqVaVUteHg4ug9vgyNm21BU1DMg4i2QGAX9K2nKQV2oW7Dwtwrpfh9qAAnGtJTNCYaJF9i"
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
