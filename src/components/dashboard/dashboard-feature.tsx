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
    "5YBNXuwSmLEtgw48RYjDRRwZezmygepyNSw3NFJsnDSC2tKgFZr6tuwjSXrRxqikxh6AbWNwhTFq6NnUtLL6yUdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ithkx8RUw2eG7SSzrha7AXy7ZJLnYVjTQYWF1Q4ikCahTKCkFcfW5KnMvw3hKefxHJFMG8pFzVnVmRtMQkUQrY9",
  "key1": "3oJzzxvLLVVS1YAgps5u46B8vKNVHgKWrxXEgWtcQmrhB7PvR2cozHsN5eDsqBQYuLp6t515P34KY3v5dC6gQjDR",
  "key2": "ewzHptYR7321JaCZesdAtox4foUsLW6eq5bXcJsnQ3r2EqrkH4s529bjoJENj8j8cPk3sCYFrThymLYpFDVVzJv",
  "key3": "28TdUKTQZixmCwdP6iosYEr1NP8V2PXcXRjdF3kpWvi1rZASXTrUxYFxDTDZdVcrgBpWgTtTQipKWZDckircQ1Pi",
  "key4": "5tB2h7jXtVTSF9TVRniYbATm6YvNRDcTVz1wd7bEii9QSzMDSWPucqKLxHRU1WodehapBj3mVX7k52WfcgbKfkGC",
  "key5": "5Sk2t3mnKG2qqsTa1SwEp5ojVpoB9z7JCq3YUyPpHJ9VPZXKbmReA3tcDhxakwbzousSJ4smZSFWQgu1fxKYYfkR",
  "key6": "2FZ9d1K6TRzPPgykiVNSG6JzbjHhfnNsQPXhWaWgFcNmGdTSfBpnPiTpSkkM2Rm4gjVcwY23smAD1X5iQszgKxwJ",
  "key7": "3GbqLdUhbwoJpoQTvHDxdxpLs1pbHiiRgBeDvtRfkiAT2wFrRG2x1zmmUy3uVzw91hxsqobwg1spZZZghY5kzJMy",
  "key8": "52HYM59ZwjFeDqmqb33Q5Er1qT3H3wbhcQ1QMMoVejHXZVj9xrNjnuKwTFCkVXbNa3KNLrGVw4BWexLFo9Koa1b7",
  "key9": "3xvgLeJXQLgTY8e1CgTz5JFDce4agERpwtJVUZWjGWsUp19q2PxMzNmdKyLd3y7qehtk3tDSqtiMXu6aH1Pnd1ay",
  "key10": "2MmxFBsRnfHdWKHmDGcgPJwSk8iMg2Mr5ARXC7o1HWCP6LRZYZbxS9R1M75KZ2reWeF4XssHoRFTHe1H4WubAAwe",
  "key11": "4XwPo1Q94BWToYiySvcEbCUBUsic7HEpt3qEy7Sa38rLW3Vc3LPStEz1rbXRhSQPs7eVi8wDSkJAgmZ2RGrjcjnQ",
  "key12": "4wz1PvfbXW5xM85dcCfY13VoMDW5zXKkpNq4Gq2H7Nkthdq8Q9BxoW8T85N37pk6Qij5pMhKCzdP612pgLkhXejS",
  "key13": "3rqrQ8dUUaaYSLfRw7rkcc5zjcF8DfjyQhnXBX6myUKGYN9CU8NJyUL5SRFFbKZLyATzw9MEjNpqv4p3TLpJwgMB",
  "key14": "3bQHdy973oNJahhzgfonRdzo5uLXfmrAprf76PwMBPMgq85hEDfvQc3JpCpuKdyiimXyv5xmzVMPfGUGpbwwxufh",
  "key15": "61rueGE6fBRSURHs3w9UDCmGp2EsBskC7XsZq6AKjAVUKBujRkha4XNLAnR6A3aKJUUsUu1SStoT4GTaj9ZUyJC",
  "key16": "5wDMep1CE1uPyHJgomtWup5GnNco498F74FbzKXkvPqf9AVfKVoAFYw1h958wnfLafxAtxjUBwqKzi5wgbYA146G",
  "key17": "3bDScccZ3X9Nr3P9mL1P5QA82NccEEx5XnaViR924eQpiTajPPPVprKxHdUsCwWBuaeT9P6UeQL5VL7nQnZVQ9HN",
  "key18": "2iDxXfETMsDbLzSt5hM7bSXzAjjS6HQHKD8sv3NY6pTdwEia5Vs96kGkHb1o8CvYeRrJza7TLx3CDqV5ALcKRYwk",
  "key19": "3LEMLfc8xNqVSDPXMihHZdxqweAR5tQYxNhMiGPdVxbzSY66iXnWWZz8YKo4yX33BEPAtQ13Q55oQNhtqiaAhgQz",
  "key20": "59yrBtmyrcTMUk9z9hWw7StEFj747XoLNKG23AZg71WpMxajABWMiNedbZDEw6o1cRqDGMVMTwX6maW3Ng5meU58",
  "key21": "2Zhd8n4ckqd3bvfTUzjsqSD8swkN8YCNjww9D1CJzmqk6WSuYwaBDYFh6PynMe9JYFnrekpYKcWFQiqfVPfUBjoQ",
  "key22": "3onaPFEibuLHXNethHhXFiZ2KAEcxhSdckCoTwgWr56Jx96qBPn5kYZHbnHbq4iV4PL7uNKEdzfkQ3cUXwWyB82o",
  "key23": "a1WidMZ7SS14j4xetU2FrFaLc9yknp1jzoWeYHnEpFNNc1ejVmYobmCVToeArwC7Pux1awmgsMDkqz7gKRfUzQX",
  "key24": "4UYc4SiRvSPBRxhwB8GdMoWNZqbEn6SvFPeEk7YmwGnWhRptjztAErcMirmbVCXe7ti48KHDe2E6BPvmPp6FhdBn",
  "key25": "2JBKyYWJ7AW8tjSMnKXAxgL7dQsfxPYYTEBHH7QtAZjwP61kLGjK5u3CDy7qyRtGubfG5XNNtUU2C1ERayG9iZhy",
  "key26": "2tnuotnHoFDb3w4zKNxxHBfCepcaUTfNUAYxKrhjuzznDFpXmEpVKsP3Zrx9VCNSr5h2g6s8zftNyudnUL7Fy3fV",
  "key27": "5r2TBpJ72ARkGhyuvrovKygPCHZkjcgwpBuBEm6WHjwYsbeL3ZrikFUKBrigSLxMTibbUkXoYWinMMw2ZioqFyiR",
  "key28": "5a4SFVG8LZKCJhciWUhJGz1Fk33FvNn2ZiHnM2qCLG92yHWSBsGbJp1SzDTBeEff68TsoYv3BDEqtGBtTi7WeDQq",
  "key29": "3VHSetJPivjmzvf5kFgfeZ55GgWynPBmCiVbnm5P48XtR5BGKp3RuTwGjNP1UD1GaiYfxcLWEYp3Mo1nWxPzjE19",
  "key30": "3aLy5JmoM96prHt6vSkQsY8B3zPvZcPqr7fkr4xGxF7UC1Vrj2u1zq8TrqNKMcHeKWfcaKKxWM31c3onWWVYCHwR",
  "key31": "5xRQZ9w1q6dx5D2qTDgc2aeT8z6FRsA4AZdLobn9RXimvRnwzaR4iur1fgmspUSskqbAX8ZGZzr7e3NW11x8tc1U",
  "key32": "2jDaWPhWY5uCG6xpZEnqQgv8HuskxCx8We2KdbLLrcBEy6LtBitDwgF3zLupnMbjAxT9m5DUgHfDfqZDKgWdnb8v",
  "key33": "65o9F7ENogjgiFpQdRXukExREsuXEpJ9NgemQnFK98dWRwzgGewfpYJ9M3t92tdJXBRiDDhoqbXD5VpEjZWZMQea",
  "key34": "5DbyEb9Gj8CAqVmzfV5a9UjJy761eQzJMNiGHoqboAndY3pqpt28gMMnu2ByJfzXFG4KSev8tipZuPccqWAiqNgS",
  "key35": "5293CXeLQcjGzQrJ9yZKrvfLDxDsMsrEZw147MLsV8v7GQQ4Lf8rk9Tx5x2jJ2rvwwwYDqdmL8CsWPAr8ep6R1fS",
  "key36": "3VowexFcwzmTYt1bcrVjZJ6ahLfeFVMsjdzCCsbPtVT313nwWRcidWNeoaH97FarsxczZXUxeQgurtzeEB3P1X6e",
  "key37": "3b21YypoDvyVHFg42UAHbpCnZqKNhxRFNofj9rh22D56gjb8B25w3CScyJ1V6dYNo7Fsjtw121fJ9cwczpsmhMWG",
  "key38": "5VXFsHfTic4F4v9sddzgSNRowVrdkJquJZRgG6dZQkTAgxRUYjdNM6gSJN9D8NSXgR2h5vJzPQYvUD9E9rqgEiWz",
  "key39": "621bUmRPAKPmXhbdJiT32VuLw9NGXFvMv3JDb3PXaVRVQvbeDDPbLK4bWyCjvyjYRSABpKZjXoC4AE1w4B77TPdB",
  "key40": "474DdEQVLbwhbrSNb6dfkiDP9674RKrb8eaFGX1zKmhUHtw8ZDAFgJPDkL5uzDwKsoqkWRErWQWksBe7ZnwK5ZJL",
  "key41": "eY9raHjxpxTWKm982JBTiP5knjaistwGbK9sbCKndHdvG7GqwNrJ7x6zRG2CSYfqRnavbnAihc4MShiMtdw2r4L",
  "key42": "3GfaE1KnT1eiswKk2hqMLRyWKNs2srmQ4oXPT7L65v9ajy2ZHrScNgYvXg5YQjxZNQiGUtSvpTur8QaG4CRY5eNw",
  "key43": "66aYdiQRDZTqHaDWdbPEibRqoTgFeU1juy3VfZ57eenAZzXhq74YinySYWF1xk8hR9xea1r1g3t33CGk2V4pPKN5",
  "key44": "4aycVRKQKZH67TwYgHqSrY9fKKikipHJigvftdb7WRjPnj7STzBpk8ZyBp3UrWc4RPwQHDzasLg8w45hfQA3A72A",
  "key45": "47vE5HCJbH9hnFGcJtAGP782jKP9xm9LUf58mhH95pwjCnjYY6mLqe2mY28a5WMu5deWKHjXkdy8GRgaCyb7rNri",
  "key46": "26rTzuwL3PZ3rk3MoBuzREw2SwJWHJUXDbLAhiF1bS1YsanpgTi7LudAZt3wZSUkf2PaF6psVSnGrZv6HzgaQDwd",
  "key47": "2iqVGv6SHqbnwfXyUJ3ZNELE2JEWqHe4cdNbcjwH94YVKmZ12DynxCXDqgRXC5ncmCG4hHKSZqvUpfHkTDuAmg83",
  "key48": "2F7NkMw2rqRLxN4nKZN7zzXk5nWcNsnhm5thx71kAApHHuzYKYEUvaZf7KY1jNU7qH5peHzAKU1RPYXeuk7u5jg9"
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
