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
    "2SqZxf3zLKquuSXTUt8tQ73X9sProE7aaVhsFtw7cBp5oTUiuHx5Zr5u2LArGdKQecabPP7kqs6vhvj13nL2E5Su"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MUi5wqYBxM4mifbii8Bxs3UyRczSaW246Zokz7sF6vFwAH6UhgVDng6S6P8YGFadFUBqrp4tg74NXxEa6EaRwdm",
  "key1": "3GyLf22ENU6HAcpTcp8RihytwHsjUkw2wrCGE3VJvJVU89AZ7on1vDcivikdPnThGmKZyJpc3mzotF7FhDUuPCPF",
  "key2": "46BomKA56xMAbY2FMWSCGhD9u1hxrpX2pyTPSyHM3XnawoJgTG6HHLM1cixW43saxeRJ3mRWMHErre7WCt6BUDYW",
  "key3": "2awNpWGz9w2m2aXQk9idJd8eUpuUhLc1QGvU92vAkF3LXEXzem9rnK8ZhVWUGQDU9TmxPr8CUaSMpL7LFdTwLGoe",
  "key4": "25qZBHFFxM48bmkrLh7d2ZguUt7NmY1C2ZAa46PnFf1VvPCPCe3ZxwsUCJsGqKpYCTk25wEyBpD3i24w2BgjfzQb",
  "key5": "3MTUaGxmwbKT6Q4nc48bfgkTXFLMDqN94PxPpfSA8zCZGn8gi1VTLdiAWsMtg8Z7GR2dh3HrkMV3PaJC6cumKcyG",
  "key6": "2s8VqPh3urccAuLpRvxY2Vbo6QGqe6XQQcdd1VviLSqxHRx6mcE6GjAm6TiTzH4QgLU2hccZnbg1AKGHTaDJmwTk",
  "key7": "25PQFk1BWGrKw5pcaUarTxsky9QqPtPHiA1dfkSL6rmwkVYnSCoU6CDDiBndpRiHMkUjgiyfoiQpXVLyFhzVgSwK",
  "key8": "m1vFtigoUetetNUH5zuQfhT577U2WFq8sixmBJyR8v6P2RDcVeAEFW1FKAqY4rWkJAPCQAMKjX6HPT6e9ghsSJX",
  "key9": "3W5U7nWFg5395Qv277KQk9wCzaM8d73td3q3LVKAGGWgEUvTrcNgD6hepiE656PQ1KnRzV9BduXW1grnLJ44HaqM",
  "key10": "4ihGhP7vBVAwRxbdCLpbPCMvjXFMWMFBJi4CxnM5uQeqi2RpdiDXct7vUnJdJZyVUzmNibCAo7g5gu8QJPqtTp8R",
  "key11": "5buqsSkycgBwhrPAHHtpbN3TPFqmJRw3y2wGmxX4PcyApt8er7eFeNrhgZ23qhGgEmobJAfdQ3gib59Z3C1NXn7o",
  "key12": "5utgiGk1NYA7VXS51g16vpUMqbLqqJX9qWg2Rw32PwiJfS68MpKhL2TjANCn2Kbd5RHmTSn8JGnbQFVYypc1EWQA",
  "key13": "5dCWYVnHKmNnQxVNSWaxGJr15WEX52ZDGszKAQqTyKSAZsVVfrtNAP6AMKnX2GGFKGWLY2Vuq4H6A6JGCJV9urZm",
  "key14": "3CpAGYdU1JTx5JMAtt2s9o3tRNaWN4NBJ4PuFTsHiG4qPHJnPymXWJQUfFizYHq9eAWVHfHYCRyAituSSrf82B4V",
  "key15": "221nF9f18WchuSHrgcoeewfLFsznp91NmCTYamXB27wfmwT94hXgRz3C9EwqRqYsqGthkmUiCsFWDhWDMMJ13bqE",
  "key16": "3LAGD2PuTaFMHnQ4dx9bKiRq8jtmw4bbViha2oKgewuoyZs3eBn4kLwXVDiQr79aL4o7DVUtFSWDLNC6xVW2e5SF",
  "key17": "3SUxui3ALhsbVJGwBnyBPpjCYmANYBfN46HJnfsoxCcDvs3U7if4jtYPEu9jAXD3PqMhsuCh249LkEanGHYixhQt",
  "key18": "A62mDurD9PAk9iFbsmmKvEtEWhJKWqtpdv4MvPNEZ3SX5iKL9udNfprD6fGwhbZp5opp5AEGBJWKyvaw7dnkX8t",
  "key19": "3a8vjZS6SXT1h7f8U96aHEZ7SPyWYBxabdDmQ6cX9ut2oKP4RNATrPeAzTAR5xeMPqVEkxUB2DViNkvDVoeupBAz",
  "key20": "5oBq8NkFtu36NyRXsJy7JZtfmnZ5geWgYBTje1Q1PCcASCVggooe1qgZYdaSFN3VSYBNSXik2piahWFrGYjNeCar",
  "key21": "619TuBYTrbWcqu9EsmgcVDhuRhRmWfWeQEPdt91LDBDNixws95xFZThsFZUhwH5RkWYvaQAAUgvBSxZrgfMmAF3m",
  "key22": "54uTDqhRPJ6unDAHJCPfWNcQrGfiBvjUJWZon343XcvVSTVbBydftfM8n7SCHoTvthahLKvJ9q1i83BWd8iNiM7j",
  "key23": "35RwbmA2r5FN2W2M9yfUBtwGq2tvaiKi21EFP41ywNpgH1LCzExfeeZ3VEwo7C675r9jLaSJdKTz3cBBFmXwmCXn",
  "key24": "3czM9rZPs5CJJxoq5cMxXuQN816wgdBCQ89CmZDkLsupK5MjkEDJYiTyAtAyXoVvAknUfYiNJJwbFausS4UTTdps",
  "key25": "3gwHhw4PZuyG1x7QzLJvJHGM1kj3JhnitUoaxkyTDYUY6pNMRiSPcLVpX4Vrk3o2FwJKkVttv2SborYUQFXQAzyp",
  "key26": "5pvXQT3L4NArCHFu3J8hNZf4xe3NSHctaLXju8Aa84tGBmQhdesQ87VKKe9SgS35aGkUnZxkdhGPxaAF4cdKnWoc",
  "key27": "3stDfGTyinjFSRJb4Foz895Vz6uHtq1SK1WMyFiiof2MNgsiz6Ww2AHLx1XhnRtGoeMn6hre7KPgHrk4kAzfDHe6",
  "key28": "65nPNKLxgiBEyJDZB2c75a5nssqhfHxBwy9Yixc7jhtFsK4QN3DLWRrDtW8vohqpmUFAAq2oL7xXxFoEsMoEYoqk",
  "key29": "2n4dP8kaQQ66UDbSaYXyUt8Gj8PpgnKzxhCmzLBz2ju3WKkjJ8oXDU7nK1LGYgL1RU8HnsaV4DSRLjnf4cn7kJF9",
  "key30": "4SRzpZQu6kkEBTDNkFQp2PSM61eKFTxZrgrr9qMREHzUo3Wfj6v6o7JvcxC4R8TJJi2VVBxXwRt2kd61w8haZF7W",
  "key31": "3hiAH9FszQxUGVpmZ456cLk4K5cg5x1GjsiYZMMFwvhGndTVSYtudBUpwymC7N1EsUjAteK12Bk3ua5be5HevB3L",
  "key32": "311YVMEGmwd11N8MLf33p5ebshDioRqzcinWVxG2ofEwDJ9ecynewfub5HPj9eUbVENmB7c5CeybevsArmpNHGk2",
  "key33": "SWEgdNf2UqmkXRortWDMfEQzoRVoJfScbAyDnJGaSN9rC79Ty7Y648Y4Lvk8Z3heQwApMn1kgpUoTwSnh8sna3R",
  "key34": "2rwEtDrqhy7YWDiyPAqXAeV2KR45b8GEMBEwStmduX5UAp9NpBQvRxHnfHSP34d7uF3M8DWnNyU3zPrhobapVb9G",
  "key35": "36dbZJEM3wFPqM1JQYGQusxJQM8QBpV3hckUkFD8mzZAGxg3vGmYb9uANa93s8CZ5EiUeGKHqwDcADUp7drg9HgF",
  "key36": "21MbuAi3epShM13dPycQVkn8BJYHAedZ5Y2zXVLkLXFpaTVhwxDF7nv5HdHYCvppUchuArNhy8HsJaKdc7VeikTp",
  "key37": "5BFPb5PqYRAdCaPubGuMjpCp59mtr5Vrvi6Qwfo7i8TYLGN9sQXQvADNfch6jB5EKytHwg6nwU2MyUfjzXCtJS82",
  "key38": "32Fmn6gXWF1ta4a1hF54S8bq5ZKbEj37yj8H2cDesaGdCF8o8b92xmQmB8qNJbYXeQxnaqiMFz6kmtwEvep3Gmuh",
  "key39": "38PhFB4bihXgfPCRHvpwshCSQYcR4uvHQxoy3Br1C6bPg29Yy7NsQg2LGE4YQEjKK5N9e4JXYYMHY4LLkFAYXveD",
  "key40": "4ikBEkL8znzEXsFdDE3yE7oTUXb4s7b57X3STNkjXwamrgbHdJcDAV89chaQQiZCxnwV2DHvPwQ2GyuSGenQ5Xoy",
  "key41": "4Lqq2oiDyvfkxF6EgW9i56qybDHv15o1AyZYmkFh1DfC6JwRv7rRTFXwMGknK8DJLm8UxT66aVmPLA7S3kKnog74",
  "key42": "5LXgCQUd26rwCPa8BQ26kzugkpL5wEc2RirR7rwxxr2QXWWhaG6qi8A8rV4DN9YMyZK6QVi85GNH7NKRvLpwEG67",
  "key43": "2RXH2C7SjDLJxFZSSycLzGgMj8n7K7SS1yNkeFWLaYfyvnigqCf4iikF42928PtkiFZGFJQPQGHqN6v3SChneo4a",
  "key44": "4KxqgvDSFQVP1sCahDedaMGAQLk6HxHPUNtAazALCJfz6YAxtpAN1SrwA8McFL1QL3W6Jo2CQxnwHwwVJPKQ48RT",
  "key45": "RhL2UPm7JSZhhjP7omVdpm5sTQyPSBZnaRbb7RknXdtwKbcZ5zhSNHbXQpJFWypwR5uWjn7QjB69pSSePGh3hW4",
  "key46": "46Hx5eCEHx1SqcjPfERvij4hbjg5X2u1TwASmzDc4U69xBXYWRw8RwX2mXb6ucRLcqhWyjcFETzxKCED1sKN7RBA",
  "key47": "3xCdEoShiiyEqE64UMkSi8HCUsoeWPYjniNyC7o9gTA7HMj3RVZkpeY1rP9xELd54U4BEpxHJ7fm1Wt5itUhtmwG",
  "key48": "2JWSp8swoM3AMzcyXg6DZuC3whHjUvf2pdEATLH2EFATwnYKiBmjq6KguFJyLzehjf4AaiFpfTYVNSNtad6tgKJD",
  "key49": "2E81dxPYAADy6Z4smAr3DB18YmAVEG9BwMQBbbAAuvmwA64V6QN4L6uh1zeA25mbyeaKiaoCDESKRqdKXhVsGHve"
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
