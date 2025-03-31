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
    "3bLYfLUdtqg8VmvKfU5j716EdvGA9bBZSFBsyk2wbKwPsD52A77waG4m7VMTjRYQGbbgi3rHMK9B1ahU373yJfoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bKNkoBwXHc325pd7fEYVGrKh8HUtQSehMJY3kJP22kfy7vAXW54hNn15rx9GozzmoiiJzV5LdsfxaKNLBaFV5iq",
  "key1": "3xnQuMHh1RnWRmcMaUKqBD9Cmz2hMkvCCA9wiuu8JhizRsEcLNUL2PCnMQ2qq4qqHwT3A2qxuBoSr9HtrK1TU968",
  "key2": "cRvCgYS52qnmdDjBANE7PqmUd26yVQ2xZPHdQTiDj5DujMegV7vKhUzbaJN42MgpgWgW2ZgFi9N94QHH3BLDYmo",
  "key3": "2aAFhFdY4eqB5aFrpvEX3zJda1h7ioTynzD6iF2oxZJFkq38FwZaRxYAfgWUwKA7TSsPeXhG9ZYwQNfo7D9YLXbT",
  "key4": "5SUvm2dqaHaYDBjnsDKUTrP8J5DkRc3aCX6LFCbWLYz6m5Evs2JHRPk24JYxdPnrXQCteLriTscCbnWz3BEsbBH3",
  "key5": "dnWJa6i9haUdH9HRiQZi6YsdEAhkec3tzk6FtNN1b21dLYDK4diSrFNhwwjHfSofwpLjoRgT1FxkMcrv6SEYc9K",
  "key6": "32P6n2fusU7Ektnbdnrru5nckcWBjEPrip28p7sVx8Re2PQms3ZqGG7ANmeGYArZNJeZuHhrfnuXCojpZM7wvzGN",
  "key7": "2zxkvLerkxwBGKgUpnx3PThqKUhMkmF66nzxvoEm6mQPYnMR5wnttap4XhoMbSFSYdy9bLj9AzuT3ECDD7zWkJF9",
  "key8": "3YGq29LYyLURczRcPLe3jg93q3bsDqd8bfAuQkgWV5Xp6ZJgtaasgjyEAuwVbp6ZTcatEWfqYU6AsXH3BQSB1j3d",
  "key9": "LkxT1u1tRcAeXxWMyFXoH2KBUYzieaPr4AhX4LspkXKaV1JMZKEawH24s8QzHLr8WNV9UDae1kQsTMBtWC4igUQ",
  "key10": "2heLjLTKX7WR6NqVpzA3SVRkHgnmZhxuSy3Rnp4s1spQw6LBEs5KeQQ5Zhn26BQKonCPrDdM1cinFHaYu3u6NcND",
  "key11": "4HyCr5ZaWegBsfaozjCUyhjVzZ6V5SjmJmPS2ezyAnHWp173tAxfphTo3pmS5gd1fUBNMqhJRFR3u2p1P5UffJxa",
  "key12": "51HZpspvQhYcHHkeciJ1wUraKmv8cbHbfY9DW99pVruPZnXEpwuk5FGK6B2HPhfmAYAspR81ERfPR6BTGiKyPhZE",
  "key13": "2a1vy95BBx1JG7KHJras2b5d7U3pz339JW1G7DYz336WmkDSqnRXMpSPfpWwsJuoxNKipdavC9pby3NCdfq1s6eF",
  "key14": "4Nq6sijNBetziphL8kqKWxqiD7L6FRGR3Mch5G7F3NfV4gXrc3eNqPtgMJr2Uohg62tsWc3fQnknGqCg4aKAt7CW",
  "key15": "5NkF8xfrWEZuBfqLuAAvnUAi5fafC2b91gkM4w7ynTfADg9A5nMqovvVLyAts9r3wML2ibiiwrfqZNwaVG573q6V",
  "key16": "fFBrHNnFg6gDj9GnGbU9mtSxZDRRwvjb3mw8Uk3Gguu3Xawi7LYXZhMdC1B4npAWRPMPgwf71EJMP4GLMbkRpV5",
  "key17": "2jMgADpybm7JVTNfEVNJXxBFWzRB9uDXgzirER9s16oLduuj6heLiLL3mNyMdtaRKdLh2xtbhsKRe2UHZL5U1T8y",
  "key18": "4u5eEpcg1ArGoQsnBgop1Gi2L79dBGNMzFrCNU65tZdnrTnASL9JRsC4ngce9HFfo9Jtuodbo3nEAFVEY7HTxNd",
  "key19": "4or7vRkGrVjRfnMCEfGiu93yjeZkFj1Gw2yuqyVcP2ZHmyy3eWV2px6GDMBCgR9mX7uPF9NsRkrKZ3jfgkKC1xmM",
  "key20": "58S3MQcvcZfna4fxWrBtyQ7sGif5bioZvE1Cq1jepkfN4RdyrBjrub84sFjoV7QtMcA5WnSTeSUTs9WVNoFFvs23",
  "key21": "513jbh6fF23YqyFPabj7R28CVpC1iWF1kSNqrTAdAwzcKuEJvCKkBMzmFfbv2ozPZ8gQ1vGaryTQ6YQtA1syFd1x",
  "key22": "3M56XAabLNLWzMTEAdC6pxX3weC2di2QHPU9emU4QRTc7JbgCG52xXqLZWyVp3nfkuDxikjPDXozRecr76rfTJZZ",
  "key23": "2zEUBhckQSzxQbAvkjVzzifhUeZAqbtz6WmLHMEw2ahfgbYhrwooUBEob61WJTPdAzqmgV11uprHaGTKHXvfDduN",
  "key24": "65u66ogRUhqD9kfTCipw9tqK2nKbiDJVmiFrSkCqM8wWTXVWDFetPTzLnqa6BmKxmqJqvdDfMX3f3CM1PzEs8JZV",
  "key25": "5tkhrjh7Bq3uxH8yv4eez4rKwVHdKZprHUNe4QNYdXjhauA6Duve6fEjQhTAUsip4wXD1GtZbB22dSKEomi25m9F",
  "key26": "2EWcuwXhNJzDvu97DDZ5Bjui7WxpT4gaczcLaYfuvgoDi6uU5jz8RJXccDP1ASEBCc7vaqf3RkxSSRZEcp8ZdHPc",
  "key27": "4J7wsPGNg7AbM7vH5YUT7g8eaT9y2RNaqShy95NyV38N9uY1MxaVo8JhsYBNAgA3a5Skdn7pEBCqHiEX53XBXLDf",
  "key28": "4gk2VYmeCV5E7CZcbKuBpsoXY7LN6LUq6wDd8q5SsZiKhPexW4EdifHCqSvi6cVEsYQsw5sgL1k5LRhnKq8CvZ72",
  "key29": "2tX7bFd28wYYHU431CbFLCUapF2zXMYfL8JE8bTonC2Dzd4yTiLUpjqp4Pi98bRw2BAsZnUShvHczgwbUpR6uj9H",
  "key30": "3nZBfXJntXF8sRcz9rV4gpZZugRXLodyg2RzWiKWfP8CVYr9sEmfrXDLEFrqQektcaZRHjV1puLzEjBvsxXzQS3W",
  "key31": "3NEMJRDbkuS3vohaemZRUoGok4Yoye3LANSbPioHzbNtZEbtEE4orDi9LwSgAdhD3iBVkgfzwTdrZr9Nnn4vGhs8",
  "key32": "2D9Y838ZyM58j87ahQW4mKNr94e6RvbFdDwsjyDhohRzf2Y6tdTCuxAZ9hvh21J8XPNaWYDbxyS3Ap8AyDcg2bNj",
  "key33": "54QkoaSDdXwpSkw3RSjT8iBBNmBbRaNRiT59YZyWVGr2weL3kn4XQA88wardXeBGW84MzKEHuEx2Gqp4UfdZXmVT",
  "key34": "2Gmavp86xh4Gtn9jhjKC2HE7FkuMwbJBPXomik9GuN54fyyv5oFynpmhjFdhGuwHM7ciTHR74Janj2jsbjXiUQod",
  "key35": "2WH2xR5M8Y1cXXQBcdQ6fHcVgtQpjYyuKENyctAPBKnVDdDGJixphTJaX4Dc1AGyBe8K6KL9g631BRDdfkNS96Lk",
  "key36": "NYPPaQiqLgeNpyPjd2r3UvSsnMo8sXDq1RuCdaYDL4UGkZa68oPKppDTxATFpgbGU2qA33GYiKGWzP5nmpUJ5fP",
  "key37": "9vAiBCTrYxH8DBDHaCp7TMM31VURH47wPUfLZHzcRLd4P4dL4GBovCNN8ihgyFePEcv6Nqhf9ME1uypRzi3trHE",
  "key38": "3FMVMmbFVDdTnnCSRr6azfBEkBhMustceKrf1g2L4iTZRJ6XWemwsS3ZDgTmpUAB9zRsPi51TLZT56b3MgdcxgSs",
  "key39": "2mFK4mJVeWxF1hMMws1Ddn2qeSFyoEJHcEukriXbB4okNAKhNgwUH5rndRR31H6EHkDr6GhRvM2WzEv2bmCD6Q4m",
  "key40": "4TdZbV2tQGTaoQBsAEDpd5Ew5RL7aWzTXXkrL5dXYZUY6xu6WxxktNhkfphUYR7iLzFJRhiN5A6kD1wHoWEpQAPj"
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
