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
    "5cB8gbF3jSmCQYTNnjgK1KoKg8MAm7ZWpWz8j7pqJHganQz18qTFQGUWZs3HRvNBBgrf2VARLUSm169MqpGrb3nL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ETbQ3cjNqUCPikpiLRCB6H1QLcQvM2LxAgfNGmtvpPWN9Ju5hPxAweo4M8x9y4BY3ubQsWS4aB7TvF5T1atVajz",
  "key1": "oHuB1m8281stHp1aegfLodQRJ1BeE5EEnKpE33XhUcQE9X9iLAKWi5uUG7n9RWTDzJA6PmkABwFUtr8VRYRq9qk",
  "key2": "8Ud5xTHcbiY1tnXq4sCDXt6mWmEAbFNGvEQTn4bTLVDLMNim62knJm5iaFZA5XCBf6rTuXfvxAZmE8x8bGH6wkj",
  "key3": "4K2VyWfwyCZ97opURZyQ1jPjDGQkQE6Nf7LpmWSjyNBKLnUjbtmTxB9w4AMCTPj4vymaiThNU9EzxYBEf9MELkPv",
  "key4": "2YRRgLm4Um1xiUK1P7UEYwzV9uKYzqHUctKow73f8XbgVVdE6MGugHxCkjWmKKC11pF6iMFVeNW53QsQhdteaaCT",
  "key5": "64jfthAEjv4fhKsjMfYqG3p9RShbdf2mEgHyQsGh6MbHKSe9FzpUWNJH6actDfZstv3A8V7zGPR52i4X8DHC5n84",
  "key6": "3cTJr4YEJGxcx24tHX8AW5nuHTF64uUQHjtpjmKyW8jPGoZPWy7zP8MijBSj8dhRUYHxWGpGciCfYwM5qavz8kZH",
  "key7": "3dYhf5D9xiorZYXpU4JqXnUdEVwU8T4N9N4wpU93kfHi4pqbNpgZv2PM1w68tCfKPAmkoVjkWBA9rQmyHH61tt42",
  "key8": "4T2ZsEFgCggxcCKjPnhaEFz4izf8dAZ93uMqBJVRBRV5FvMWtS33aBizafssyMvpvAp8uc1Vt2nvsFXuXj33gicJ",
  "key9": "5ru81jiwiEwWfwFGE8toydsPzWGyiSudVzCRS2D9eDSoFPQqVVQ3dFfFqasKp6vyBG22R34WssyeFqadGzrEpNC",
  "key10": "4HPDDESsB8KCy1s38YTQwCeVbZ1SqcY2s9FHqAnWFGDyY1U9dQv3vjjAshbbNZj1qH71PPkxZqh8je2UKKNJE5L9",
  "key11": "5ma4GPgFfWiGHKDvT7SKnJwvgrZWjjTVjuV7MA3jGZsRuQ1x6PphKuysrujaMDjVZgeCcvL4ZetKg4sEzNhrXwq6",
  "key12": "4oB6P8QRSzke1DAMA4kYd47g58HZ1kHNDEvBjbao1mq2c89re2hDPv1Yn2cFLttq9o3kTwijjvfSmBJEFStEiJyV",
  "key13": "3UVMZNniRDdRc6d1ZrJpH12SwJyi9RLwy3dzw9cvmRodZ4Lk8LAzeJxpEryG7niyB1WtxVMhW5T5hip4gpSVQGTa",
  "key14": "3m56GVqNokbk7H7eVLggZUH1PiGkM9R74ataWEgQZdKdugwwCHcNTxWsJv2SEGMCRJUpVhsqfJdpnHTKZjTXE61Y",
  "key15": "2s2wcFcBwhPzhMpYvRA1zQJqhrzR3ipdiaDr2HCsjZikb86bDoFBo5rBCFXD543FtDzBgWNHJWBHURQi7EvS5d2r",
  "key16": "2KMbD8hBXTeBDodEoGjmGiqVGmpxEr51fKESeRrRjDUDq8RRfjkZDLnD1c3Eqy3BZMgVFgUHv29G7r1WobiLFfNe",
  "key17": "4M4k8JpkYuHAEbdYv6eMym44fWMFcHaQY7djRCgbrz9Kysm1pnqeMxcay25du387fAwkNoGdK7YC9Z1dFtiadwfB",
  "key18": "26RjMbGfVNfxqhzaYPYen4mngTEMVhqqzQFvHAMsdQgEkhx8755FvQt7bfbQiLp4DNiHY6pgMdEwCyNGEKJyH5KS",
  "key19": "2JrT1jQGo6ifLXaB9M458N4CzNJv3gi4m9aF6E3o4Tp1RJsQBbWPzCHtvfnfMzgysFjY35kjKsXR2mzFY28yhVeq",
  "key20": "4Zw2CWgpCBN8WeRyLoALQjrHVsjbrKtyBzvjk6yu7FkxMbuEeoUXAiMVP2m6SaEtB6g6VU7yEtDX8RgbU36jkwPG",
  "key21": "2JNSat6u67KnGf5hSqVm3tYFffHdkFd67QN5EuL7ibZpLie9DfxThoeALrf8nksbS63nxqfzPqMG8RAW7wx9cHfn",
  "key22": "3ckTD5tceK72mjzTzRw6u2cpKDmXcstCxgivsWiTCvmveipTCYJa1b339sckKWpxVhNCtCDZbV7SaMzPPK1bHQWT",
  "key23": "41YDnQDxbmaqnurmRweCdNhjCQQVkEPfX2xVu1WupCWtHXhycahBZBHeHUek54Ufnb3eA5AFgLz7LoAvKUNvr1yD",
  "key24": "4E8XFXReBpjZ5DTtYToatsKkEemEXzWfXFeQ3ECPuPLqbgfbPWQFx5Lv6xjJ983qnjrvydsbaxK4FBvF9meCpVR5",
  "key25": "3CDbUUxSCwxBYhDxPP8S2g4wAuQyQvkfQBzDaSDbaG4tnmDRNSEqBYLDWKSVtB47UeH9nTGBwLR44twVnejmjcMm",
  "key26": "3eBYjhiUJ34hY1Qc7byBPQYZzUuThLFHDURK3Qq33Jvr5R8nrV2C4f4bSoc158YejREt5K8EaAJmAYoVTQsJwzDC",
  "key27": "39FkrqvjozCuTmHmsDTpmpSRBVq1iU2LG1AhXK5d7nuU2i4kBbtKwUrfw9nCdmCzLcdfpnzup3pQsHdztf1w5Xmj",
  "key28": "3sU1RArfcNReJUPsNVbnz65cH87UWvFwrXb8tsuM9uywpbrfwckh5Vs48jB71NoVdqHftN8eTHBpDorri4Mquq6e",
  "key29": "5nKXZPELjyNpA3s3KuRcdd6GGvAVWpPe1oGdFQLjDF5DYxxZKrJfcRmrc9xs8RspHLrJ3iBmnV3A5tq788K49yHa",
  "key30": "588LzG1zzhhc4JJNLVeUyDFFZGXDnCHArisvePb815HXcEgL6ZcvMvZzGz9dAxkXsWj4KuQSt5td4YPZRVuHeCm1",
  "key31": "2pdK3i7c7x2qxNCYT2ieJPM7a4VZ2QPiqg6oyqPgJdFxA5y5t3gdyTU2AZ7qhw6p2WpkHMTPTwrNP2cyiZ7rP2W6",
  "key32": "FnsiDTcu9MPGEUouYP72WatJgZ2oBd8FB2ozXMa2Xp4KM4kk8fsq63uHrUGQorbPEJBxca2SpCPLZdmoAXGS2un",
  "key33": "5jZfiWSyHboZuCZFa879V99zp1Cr36ZyDE4yT9E5ur2sKYH9T5ij6Uq2FLKDHkBNo68ZZKUn46GqwpEf7vnswYuK",
  "key34": "LsdoehUotKtwCMugxennC2xBgAaLSHYrTocryU8TqUqMQipFGwoD6gF5kZEXqEWE1KoSFrCG5KNiYGEXh3GDwS1",
  "key35": "5nmeCVMTQeBEVT3U36B8cN1VeEZGxbtbmYZFtmb5j1Pjc3vTvrwLP4mfXoAJ1nFSnM8z4VhkdCJQzhdeBfHSt2Co",
  "key36": "4sjyM8rrtv66jbwkkz23QdYdu64UFopqCXq8Y4RQLowXB5yDzJvaynAWXssnAuRr3R1AHHU1GorWRjejU7C1pqTj",
  "key37": "41NzoQjuGWCfcZ74PtDviDGzqMjyyVJQxjiSwpmjCHgwNPxH8C7oEnLN6Ezz9vVxLPsVP8jodX4NRgtdmyJjnt4Q",
  "key38": "3CN8VKpocYN8ddBiRFg4yXRvnsHAhJPDobzc8EC6eTUDX7BrVp4UG3qBgkjassmppdAisjhkiFFfs6u5hhQYDiDT",
  "key39": "26VXgwxEzTas6FhdD8Wxb5PNJCWfVxQ3MYDFV1Hz2i9Y5Wj4x3Ept7euLVZvkZuNLRrnKwJBzu1xEsZ8eS9yY6f2",
  "key40": "2Ho1VEyBwgju4ujZpdWD4V3TD34bt35jESSsQBhzTcgZeLuanKxhJDTqkPnrZ5QLLYbKu7Ha1nXTfVRuSB2VSiqD",
  "key41": "4fePjdCu3kWYq5UKwZMxCjQegunqscVU6bh12NKxfw8zyu7P5jaWeaXuDHhsDXFZEroCJcWerepXDviaJmJ2Yp3m",
  "key42": "4XeJBVmeYFeTn6STa7sGq6af2oX2BpuSQkCoBf1Ko1ow2YjZrhfv3ZfebdUC7ZcPi8DyQZtRbxibvkhYdzzoRCSZ"
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
