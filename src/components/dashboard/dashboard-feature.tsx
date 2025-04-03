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
    "5XyQcHjyufmE8wJp3HNKrbRGwNz8YKf6NLBtyH6TfRKmHPn9ioZCuXUz2Z6TjCDUhXC7KW9vtwV3YKxuzZQbMfoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xTw7GNJtVnnzsD4U7osTfjfrHwHWbRScqX2nhbUVAoUu3WA3GE9QMSd7gdiDEUXQsc7smUa5XN4unZRVsBeCLEP",
  "key1": "5fQe5wdXrndzpQAshBWcdVRmEH93GPXp1rRkWiDviAykdUAY1Bp9DRjaq3V16yRsbnDoh4oYkEQeVZSPEeGxh7jZ",
  "key2": "3pj1ri2tgKAdisBadxfJPm8t7h8tTS42nTeC8yXVZfwwPtCEWQCiZY28gxQp5kaEGs41jk9z3gib1gxDFgg7mGUk",
  "key3": "3TDT4xRswoyXGDStEK9VBthAgrrAfSTps7C7s9oju61nZKpV1XnY8SrKV1MwpoD1ZciiPTiriVeuhSNpitxZk3Xh",
  "key4": "3uGrRCmAcjKMczKyPWq7LTar8rkpxn5GzuoNNyuMr3Jvi1Lxj6FTUXHsSwuAT4yZMbxg2b5TgfJ9FABfHtAw1AVL",
  "key5": "2HgzJ21YHdK8ubnRbwSUg9HUS8TXvMvD3s74GDhCyU9Zs2ZivCmk1SiQwt9i5p5ZXMBXwR8bq2wUmxg6wVTe8Z7o",
  "key6": "35EWNoJX3EPN2jKBxsbHLVSZXRHrpcv1YrtNo4mV7iVXn2vHMtzEgtGbms9d6GkzgnYmoKpiPv8xpay8upJSdg3u",
  "key7": "5eLjiuzF5zmhXdmBmhhXpzARFdC278GGHhUTpwqNwc1727gSPsckQ6Phcmo3yy5hpuuRuCVappvHSTAoqnAbbWMS",
  "key8": "WmuJR7csNgTfze1eniu6iRC4n7Kt7JQG7m6QWnJk5Ag3tkdBeRNe4vvDDgd7sKUsKsEmjrd4N9Q4qvQnHUPSGMz",
  "key9": "5vu2vpKJa1zdcbFkQrTaCtuz534TQHDeRNd2vn7qje8APo5m8y13yEzQLZUWuQJnG4mx7A9JnGka9s3NRX8XRrWk",
  "key10": "461F4f6jxYpoUJXZ4MFoZcy3yzXgjyw1ppmiU1CuGVZTup7v3Q9UaA4VZuNdmWEkmQyX5XH1VsBabUYbjvYuzztK",
  "key11": "Aws6GZww6it9misZK7wmM6cVSK3N3Lh476NofEErKRFWm3miVHxLAVmqk83syvk3aKxVnjYMrkkPGyHi8Q6Hn4d",
  "key12": "2D3tKd9DRzPMYjyC51ovQMzLvQK4stRih2DKiDiwNP1oErYiea7YaYgSQSeVw2qtYwJpLGM17bmUh46WzPpUyidD",
  "key13": "2q9nLcs1Hj6V71bpbkzzQX1EKpoNJWVs5wzYUCQJgUThz1uuKsAV3Bf2QMhjsuGoNcW1CDTGCzAf6RFVMNKkwdek",
  "key14": "2mQ1xFWW33VNqhiXehAbiToFmQJe9fDFwVZwr3GrzovpGs9okZvwQvMHfhtKthFWsSUSUJwbZMhkAin6tVtAQtwg",
  "key15": "2sBLNwKoLwPov2vH6NeFiieKPj2zDrnGDSUuiYsRiJBft2mpzWac1BpW4okN1D5HfHXVSbpFBqEwkTY6K7Hqe3Ty",
  "key16": "8JBBBBfLa7V4nEHmtucsHAGSQex88s6DUFq2FyuyfNjikHka4Zb614iqzYU5Na6VhKzS3ARZsNjv7VB377DjkLx",
  "key17": "3xesHN4x9MuurHfM38UAHhJfuLdCrhZJSe1SNmRqwyFAJGfkSEVsBWh62SPnnqVY2JKmQNPPAMJbhJ5QaXTA2zEv",
  "key18": "5kyjQUKTLtVzhU8FUNvrqXLfESZJtr6ET9bZ2tMFvvBfAgQqhiEAGxpSsMr58d1YX3NoNf5EJjUv7zkzuaUMdqMj",
  "key19": "4gRhbj1F8mr5mSeY9Ae3QnkqaNeeK9Q7gQh9di4niYRywfdgF4EKKeBHXKrS7doh4Uq9YcD3ktiXyCBLd15WAgwy",
  "key20": "3SPuotLaLwXBqkkPPQkJKx4V96Yd5Fvap7hJXRUFtN68kRzS4zY9WxjxmB3JSYTRwzeeaMpunV3T4D2nTX9Ldq42",
  "key21": "3ghW6WTfMmGfzaUYBW6HG42BGDDY3T6UjuuRX4SQqSPnmUHr94mQcr1tMswEV5NJXHDr96TFmkfJBFqofxdfZYiA",
  "key22": "77wbTpABNM9nxykB5xReWiZGi8PXWqW7Hqpmpy7kQ62yKibEy7HdSo8gQkgnurWbp1wUpqLmN6Y1J758h6JRXU2",
  "key23": "4y1HuLb4HRb6Bo359BCmZkTfyovicUt2gbDKnBDwaPh8J5csrHse4S9pTE8Y9TWwvyEQ8FzRQPV4J7XtNRTkNP1b",
  "key24": "52iqhJMdiEqDe9UUur1N7nbBzxaXzNgHMD95T4SRro4uAxwJcyTegssS5ctkz5Wnv4WWheECgdHQuavt57Uswwgk",
  "key25": "5n6zsLT1y3aUQnas7XN2d9sddQCXqsRc9X6KoUHfrKGQeM67fRwBvLShiqYdd559bQYFH7vCWMNNR8y4tXXFjN9k",
  "key26": "KagaToiPTXfa252gc8kS6KmiozQsRvEQaopZ4TXU412eT8sv6g3NiSzXax2rrFDmtvPGLfjczydDTnYAsRgVoHJ",
  "key27": "zNhDxkQGscJnfFFj3A9q2NHdsgFDfS7US4v4Epcgj4TGY8wjpiVjUjGSxWnXCRBZFkjBCEnoKgRaQ1cU3kVMj72",
  "key28": "4VkA3AXHPpSDhRzzJzdnvy6iW2o5cT1rfJ8X9zDMyRyk8dBuNhZXXxM2K49ocCu6ZgsNoHXv52A36GVN9nBr7xFP",
  "key29": "2gmpkUXyW2owJ9PyXUtBcUv4XddAsLsVeEnzHZZSmhPmh38wc4VEbz9NRWv69Jx6REhrEgEzUGU3kdTee1k4wnXX",
  "key30": "3CcYpbirjkmB1yqUmzeLYXz3oUWAKUEyrdbdnYgyrfE2C9BSr8W11ALZCeBTR1fegxa8AydySts9Fw2tqijuk4cW",
  "key31": "5pxhEwsCtwpn3bcxiac2m5iAvuH674jnWoNTDFuSnhW1FktKawRT6ZXVHSudPJzQWH5gK7brp1qRNk99T7Vn8cex",
  "key32": "3J9iHSkZiWPKvi2wTJAedojYBAmiLS6MZSt4a2LzWMijCsdsxzYw2FEbM6y6RdGqzphtRpuBRZrHjZZmBH6J6iEc",
  "key33": "4uexMpHUg53VT8tUE9iZjbWmVZgBRQejJL7cNRjSiPcwWbFtAfFBuBCA4rv7XtpR1JYqu7tWbSW2JR37YspzyBmL",
  "key34": "2tZ75szpSomsYgP3zC7tavkDzt5UWgEHzF9ccTAoEwmgKXpQfqG97U4J6Yd2tN99bbGsth6xeBDBXgbnQkParYMw",
  "key35": "5LjYMZthhJ3aEUYp8D16bH5vcd85m4DkmkEkZYfzqbpPiPgKGSaVhYtCDHc8gBdBbRtZfMr3cpQyjbMMMUFc3fdG",
  "key36": "5YFQQQ6pqy2J7cjQfKjvj4ZNjDVo9FQHt8Cz3qaqpnPg8hsY2cZTH8nPYJuXwg6R4oiKhkVbvwJtNpvVPEyWt2GX",
  "key37": "3CqXMEyfQZFv7fH1KzjJ7NfBdYthqZsDsrBnwB8qUcqTD9ibtaxiMYXkmTxBjHAdRaj4jwSD4LyVWNzh96CBhFxA",
  "key38": "4CUPmRyei11KABhC7rqywYM4dZQAexfTJFWFjoGBDWHZrgvHXgYqJAaJDxsY82Y3YPMEm1krXUPCqS9qK6h6mF56",
  "key39": "3pfeuFQSfiYYKbnVE2HYHa6XKz5JDyTyMmvYrN8zBbowCJizgAVnnD41bD72x46XzTfScZVPgnDB9awSEHxUjYWS",
  "key40": "2DxnUZmJZttApgYus8TUss3EP5hec845KC3ms2LGNZZmCTKYrGSBVZHpjzmAs4RJrhAApAyWHP2LiP23TgoBsrN",
  "key41": "r5BAC2RNmijBZY4rySjL6VVWv7CEbxN6UvScNPC4Sw9pWu67JDcegPuthSzwBUoQWdYX5zKGCbthd3qcv3bi9eG",
  "key42": "pxWEwu6wFbEYVRTfddwnpQrkMbLTDQXKenSBrZaPmA84B7CLCND2rSVYxrEBNiHoy9xqA5oMHfxnFMxUhrmNdT3",
  "key43": "4qxSCE2Ka5GAh61urHQfu4r7LFipjps8VnfHF85gBqniuzZwaTGN6jw5VfKTCTo2GETwYQWvn73iBjwuMrRPZoQt",
  "key44": "3umuQvZn31Bt83EqeFtLL43wZeKehZyZDFbkcSvyjfM2j7QN1Snyd5DQcy6xSWhvD34dzv3aJeQuLYUexWSrFpUb",
  "key45": "5AkBjtaj9LGSVfP2FMHihuo8JPZ6BVSBfdMFwacpeWAxN48FsQTaFndCfePqNW2qpxudNULyqhYuadMfoQ71NJyT",
  "key46": "mwVSPmtzNSSdGNSKrJzBhQRepZq92XeqtaCr9msLwVtQR3fY3VmaZ2Zm8uefigMzEm1WTWvXQRDm5yv3xy2oJaW",
  "key47": "2TBqTMaub7NM1U9fi1YweQdm5L5WPnivn3JDEYMGXM796hF4xcSFnpJY62EX32u7Y2nPCbCmt2DrUzxvrHEPrwMw"
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
