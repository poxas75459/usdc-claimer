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
    "5voGrd7bQSpgocnyFWbZsTcRq6fRrzM19Rtzv1WeK2PaF3M1hZmCDVAbji4i47614pgZEgKnsSBpP5izXSoEsqcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yjG9UdKFtxWjMtx3vkVyszG1ZJB4hEvwHbesQWktSsEnrFvSgVTKe6RqsEYK7naC3E37JMd8hvZRaLdZG8L79HH",
  "key1": "jY2nagA4ixjVh8PFw8YkVbe9RZmcS2Tgx6XLu7Qn5nJhidcspXDvuAGtGMB5hLNwzvTb7aCZad25ZsgwbAe4Cu4",
  "key2": "3HbQK4JD4YvyWskocvMZ9FW4pm11AZY8wrU69RXAhV7o5e9ScVMvquTwqgk4kAtRYo5ssyXAKiMvFTsFfiFk3EdC",
  "key3": "4o9VyrwZtt2T7a24GuAy6KGceQdFNkNLb1VVWdjzatyj5bBvcAoP7JPoeAmR1EBETJNExq1UpMwJBpzrRCeN9REg",
  "key4": "4oUCqbkSqzkEQ5fG3NoeMqALAgpYhJA3fbKMupx5QTFU4bZsGJc2V2iBff8nSNKuLxNzxT6MNFEhr9jZU4WmTsuy",
  "key5": "2KwmhePjise4rRDXKXA7MomS85jydQcoueU6k9GXoTZ5mdm4gSBrLo3bVXLqtXShaWQVYLBjpb8GrQ9tKXWqb948",
  "key6": "2iAkVDtP8QK1GcE5dNzjBevkfV2Mvbc7ZoB2WCaqBnnfg65uzQM8G5aL85JQzoZa2T5huNHohWmTSnzN4d8tDLxQ",
  "key7": "3h6iv3WVPBjJ1jsVyXU6NbJ1fonxEhLJ4QHQQJ9wuUZDDxPgmXXkjG9qp3AGUSAGHC3f4D9f8LCoYG4o2GEJUfkH",
  "key8": "3cyxyttjP7jkGXycBCcdxgKHkfecM9GfyUwNGHJoBsM1cfdUrj2pD7Cuo7D7ZK8Bz3KZz7dFSesdFAuAF2CTK6gn",
  "key9": "5Q5rpS579bCdCDLPaT8L59NgTR1agbXVyiUu9c56szrZweBCmSVmKrv4gpxCYmK4p2TjVmPhemSsYtcgSTQRwqV5",
  "key10": "57azYm8JMa41Lp3YEAmaQWYEMotfmjJG4wNm1xn6v3JdzkCKyv9sNpffKsVBCRgrzX7qSZirkFuDUEXkHRPkGLwL",
  "key11": "2dnJDJbN1N3s7n1xrCHaoGEiunSXv3gnoDhfN299yubnPL2gknfrm4tHsFxY9RV676hqVrHZGVh1H9HLUjvBjAxt",
  "key12": "5z34gQ8AjuhGa3iqF7ocRfJFpnbHukVBmo91AukxJCF2C6AbAtRX9N6u5mRPaqDgYbAev4k96Wq8BRegyDbhpvqz",
  "key13": "3kuF6EpzL6JEJseEVYkEbu67Lh2QchukAWxybSRfWEpWFfLsRovBUREYKWxBGXx2PUF7t7HSzsLFvfn4S9qYcUxA",
  "key14": "4jwczA429icPNbEav611YUhzQyKrLqQFiUo9GRVjTsBuqTSG7eNS7XzeEhAB82MeLH6XGokMCY1pd9oYrqQFU562",
  "key15": "4w4GzJB7wCxwYyPtDC6DfTeSK89g4oRsxX4SCtz6RqwZVqhSS8LLYxViA2q4xJuUEUVDJCLNtQyGXTEqi9mEemvS",
  "key16": "a7abMPattAd9yzr5SA3YmyiZxp8BrDoyueh1qn9tgjBUDvSzmb86d8nN75RQJQ1kJSi7S5SDy5ijwzFg7BjpSk9",
  "key17": "2NcRQijHg4ayeh4VqM31LtpYXiEBte88Sy8Ggx1pM4MrvdbQWo2NbW5d5tpCh1nT8n6SKvE3YubYY4kfs2rajtwR",
  "key18": "4W3m8tT1KYAddsfBZF5rj2VKJjGeZTo2YNmeLnbF2BsWwLFJoyFk4xTypGUYSsuVso46p2jtaK57YK8iAdPY9Yet",
  "key19": "5UdwefUEJ3sd3FtV75niuFGx8JfcWezqhu4ykr8cEKZTem4dL5sJZmA9yz7yv7YVhbfGww8HrGzB7BbWeuFnVwuk",
  "key20": "2r3vNPrdVycPtCdRjB3jgJsJNCMmfuB2GzfYCRfqRmkXfH7ghY5C9RuT3BpHzAT3XebJV6s8QtSLZNyiwCHJgJGn",
  "key21": "2nmn96z79f3oURbERugFiMKBkdDzUowaRFLaMJRMBLXR7w3GdTYVH9JusHjMrSy4GX2tj2STkhUBoH8WRBa9y1dK",
  "key22": "3kherfo9cYTwnh1RqxGSWxfsVLgy3cBVJ3pWxbpRUw8WSt2EDXRb1vcPubf4zP3R2tX5u45Gthohi95jsMUyFFKC",
  "key23": "3a6sAKZB4JNnKy2snrFzK2QcN56wkbdVqmbeW1e4yqnazTgtTPxWFDtT9ZrVG75yAYxuhQpWJ1pvsciNuGdhPLwx",
  "key24": "5Exmiyt4Zw7KBJBRRnej58LPHCa6TEqsFQb86cyDMVNcLwyDTSdojxkhmSyVm4cjVqHoqT5uwXBuKFHEbSzvZmrW",
  "key25": "2KyQF66hbwatkYh1cnyzf7zTcbfoWUsSSKwCGhuhUwooVaNtfQUUYECekZRUkc4xKtBbtQVL7ry9KVfvXYimyFt3",
  "key26": "RQv46NjnfTCnBR8EkQpXHvYfBSNxEcehReRJxPc79uUvKed1U4cmRns117N1goptn1aDPtxcjZK611nnToqfREz",
  "key27": "2RQdiSBZEudoktpSzUC93Rc3fodAhRoKruBzL8WGsyYeJfigYszvT5RmgAcA3WsGMAX3LZmgdDGzC9iKvonA3K29",
  "key28": "2iSejSB1n2tFs1WCDB8SoQh9xuQsrad8jfh4NepRjUq6ZE6Rc567EN47U5v1dacgMbavtHzVY844GzJfrXpBn1To",
  "key29": "3gJuRtRZrfUK233BKiWLk8HnzM2uUwzyxxAAChTaG6W3Wj2tCjCHbDUPFkeKpH75cku9ByZgNbuhoFxdkvwD5x9T",
  "key30": "4gdgcN4FjivUkMXFL5U5UHGnmTtNKF38yfgxhsfj6b35NmKHG9fzBXT3ZHWHGwwxst6im6YaTxsrhRL3JGkCBh6C",
  "key31": "7GbafYpG4Fr942f7KmGYZmvsuoDShF9gSqstKNAuVkZ8rgbJGUtZCZwDs9CpjCSfnzUERNMAbrEdAgVU9B29piL",
  "key32": "24gPUGRP4Ro33nM4H7XqqDR7buk8Eea2pBwyPGrWNbaFyvFiLz6A5TstdQEYoitkmvm5hZsv5PJAxQCFnpRpX3Xy",
  "key33": "5ZHytd5vVvHgBJ865QceGCLGnEmdB7pDd1ctVfaj19yEthXSyknkRJM3M2fErFhmuub61kGTrh5BWMukuocJKrPe",
  "key34": "5BTziwndDCMR4XoKqHEAN9HHJxCNh9c4ouxSRyS5SiRmpzfswYkXCgCCosPXU84719YcMLJdXxKeyfex38X8MjXC",
  "key35": "5HxriCKDxXsVN4XitWK4zR2WvEYmAJu65Wnc1B6T7MW6zKJ4QJX9Ku2xYWfCz71E55tbVf6zdYP3N3KPv7wL3p8Q",
  "key36": "2B9pHSee1nYCPa5DswRaDzLRQaMCAPmsUALqLb9xo2m88XAR5PDdcskbc9cJ7PaAXYV6bJaaPVfs6YdxZwDS1Wx6",
  "key37": "4V6nunsJ4SdrSru155ahXB1xEWmrXdZB8mFbkkdqRPigvXdd7LsrAmY1iwRxMnMGBT9ueRgFMZvSxBmvCLjH7JDz",
  "key38": "gxGzFzJPqkRdAXL93VnMVTqhWKQYhLP5bYrZiczK5Jf2cDNR182EksjqnoRikPWxuWiwu7pVjGHvtPNxcRKF68r",
  "key39": "5oeNaURydXtUAzmoL568vZJdTgqmuSSioH4XRUVjM9Lk2cJhPLQws1o9BPSAhRLTQGBC3fxcRkNXou7R2sSJc47F"
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
