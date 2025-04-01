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
    "2BPnY24u3mzufUoZFuZja1pes93fn7tMvSU6wUAnjX1YErw7Ljwqx56iwt4Zv2ztbucQNg5YBroY6tLHAy3nHvHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Vjckmy5a6wbKUP5fN6JQbJNgfpfx8h2sB7tkuWku4ETyFKtKZLt8V57uvfwZWSK1LfPdqvC3RJHoLNAMKQtehr",
  "key1": "bYv4opy4LXyKpyhmWzwQi4cURkEdB56faeeHCA8RfP3ikGNGbMUFTbVyg5b5W4ZxsprQquoQ2tPExjpWGn4MPyg",
  "key2": "58He3hqqmkMDRW3TUeTFt79krYXSLwmMHcgGkzPhDS8bJ3ELgDVs7fA5aAScaUD12FqdXZPhvZ19cYQg8o54d66X",
  "key3": "22w3g9GSqkoYwrMUSBdBF7p8HPRKZnJfErQVx7tsWZNeYzAN88PKohH4k137vSAM5RuXoLvVfp1CY7yojV7xJkc5",
  "key4": "UpZcwUJoteGP3oQism16pdJnCes39Tbt1cTvz5EyPer3epVQHsMNmhDaLtxGW3wHecnLo2kS3rrjGARYmnkWrLf",
  "key5": "276DTGVszgVeCYUEG9v8ss56gX6okCrqAcn8GYYp6WYXoJ8fWsWhzqb7ZTL4EAnnyB1h5aPGhgNembGDGUE53NQ8",
  "key6": "46Vgw8hfunu8J38xi22DfjFJMxNjdaKpXQ2Aj85FX1ECtCouRfMoEeXmuGcAGFGDHEru5e5MSjXq9Z5YhA62mt6C",
  "key7": "2yoBmYSb2HjGfMZ9YuJoDbhPVYpGNHNNj81bUUQLf2PXkJ9g7wQdsNnjoLwA941yjuSfcgTBqmbuTRMj8Qu4uAve",
  "key8": "57hDJgDaQ45RZjGbATAkNnTXyowL7TwxhZd3d6oHqEJksq9VvyCa1NcpB1WE5we2wb3BR3Qae1gaej8traiHNSMY",
  "key9": "2MmLN25WkczG9SqLcCSkHsnuQxLKXG8e5QQwZTxdba9hGQTzvZYFK5o58gM4uAU4SEieibue7T4DHnyCcYpwhN5Q",
  "key10": "2fjG3EkDM9iAjcR6KuuKc3drLwuoq16yDE2PBcWbLMP8FCJ7vbCUJLe4nuq9wF4QYrCzkVNpGSzgUtrBLe4X8GiT",
  "key11": "5PTuHdntwtJxRpLyn1RpX5oLfAZqYjnkJTZSkFgdpU4hi4cm2uu5vRd7CKn49gwJzpRMEMwsd5ieJvSLVsisweWu",
  "key12": "2LhTraN1uMasFn97AVpPxoXfx1CrELTqyKPXKRfoik37vSDwYAzGJyMZwTA43zLyQYDZDz6NhZn1upmJL6fzaWoA",
  "key13": "GcGXxVbVPpYgsRoM216p87YmgMsNYVegpM6pNti3x4SKm7xZC2QVJH2XTA3uvCETVmefJJd7pddRZBJ142p3X6M",
  "key14": "211CqkGpg1viMkE2MYoT5DT18Z43Dhr1oGFwynT7yyAN4gjHnHmuXSwMjnvoszJXtdE9Fm3dqVmVxFcndce5C2aZ",
  "key15": "2Kh9rDNu3a1y49sUHJJMehNutvdZ5YBCPv6y5RyvjweM4Pta8XM6WbSgUjvyd1q8uwbGrmeQUEUArKxqMGL7SQqp",
  "key16": "39DFZ6h8z3R9b1eXqmkQnAVLc7BtZ8gD7RvndAf48AJ9aayNVdJF5Pfwb1xdJeYNDkwoJCmq8YmWNrqH66vn6Ljg",
  "key17": "6jXzSr9R9Lt1NtJXEQfPPx9LPDiaTtxQHGrJDvibu2wgZSsNzc354QRXSkbMPvWh9qJ1xSrwByVWP7oKqNX1rgu",
  "key18": "fd2XsibN91xEo9965DqsBfD1p6TFQAg7F7EeBxx5rd2PDbHinc9Q3xgfKRaMMzqSh54kdxcoEWXL19HG9kPjusQ",
  "key19": "5q1WU5aAHC2ZAeiQuRghsvnJnbJW7TA11pWKAbdXc2qrKY4SWWWay386EL4TEcfiHXDsSaeEDwLwZuENEgkK2KFx",
  "key20": "5jXzYBTwLTW1YVajcNEkBFugcqnK5HZnnSdqsCJH8TKbkbvvR6TmwmyKN465H6F2wpq8ff3G48DjF5jtaAUMFrnE",
  "key21": "2oBz6WqmNddBN458CT8JkzqSvdyE78VMyWUWpTZgiWtBYmApqyTAZmt97NE64LLvZtq4NivN9cn7Bdkvtv1DkLEY",
  "key22": "2MLaCy1Jf4kfzmytaS8UVzSQp5pwmwK4kyGvE6ULwXB34PcRrCTvEaRX7ZwJuTWxtTkwAwBw7T6We83stHYQWLKv",
  "key23": "YEnvcrBpKqymMGadGhKx7Fc7frLUZSPmdyadTVUc7bUNGTn49LYoRTL4oLXwneZjxSTrDe1TpvU4okUkjyLvY7q",
  "key24": "3rC28qDJZJcuEgfx9UCsqQAp11gZGs6x98z7G1kiszoUJaiCi3hoTY88iNsZC2Gw41QwQaZBSfbWiyyPJng98bWo",
  "key25": "5iVvoSQFEaw8GAWMupaWdxUsntT8W9ZBVyQaJ1U2y9Gsbj21aEUDdv5GaEy98bPnyoY95CqkEJSrwo3amUC9wbwp",
  "key26": "47Nu8z6o86sSEPvxewxocsLwomsV3gT9fG8RMKD7EsntvvDTLC7Fz7PzrBfDhzFmqmAJARhZbUxQy7K63GsKMEe5",
  "key27": "4rXwMczH1oGuFmHitXFFT28ZLV6VVa7iDR6LiXYuHmUrDKY5WKpzsJSfQWtn2HBkrPMmafiuDFgNDfw99aDajoHJ",
  "key28": "2UBYP4mhGVuE3ZZeUkVJ3JgGeFC3mxGJaiYsGSj2S2wDywMopZdXJ6QSSk1UmMezvDWFGBRKL7BxXpL9zJiSjDzd",
  "key29": "52Rw9QxxgYHY7Q4noEnXjW2ZrHmLLvj5uDNnTHgx9aVbNM2Q98r92ESTD3xMnk5JkAF9LNHboHA6jM76JgWTVAw",
  "key30": "QeBRM8mmbykqVqa6cmEtxyxoZCJVt2oNTtXh2UoVBsxZJmu2wGe1a63QTcuxzqe5Hke4rGnPzFLFz1irSQpcM8f",
  "key31": "45TbFKHnAuqvC7VtwEbHemH4V7z45bxKwDtbKsL8B2xDwxRbkWExP4v1ypLt8XbndhXymNsCXxdcZjNzAgzxVkY3",
  "key32": "4MKdCvRQg5tTTzMy1CNqBfnz2YmF7Fc3sLWJzxQ4oFcHf5agCi3PcFSzrgsrAhGJDFgZ7f6J6m1SrUwH5hH9HZBL",
  "key33": "ma95MHdpLbMsNk2c1BRu9mBWqtYvMtmmqvZQbQ4Pcw9mXFMRfoyc9nGCLvrd3Y1n5Rua5z6A3LrCuTXfcvBZq1J",
  "key34": "tdZCahd7r6bdFJ4mBqBuy16D9iS8m2Z18ifPiivAJjKhXWXXRsH3SojxsW1CoYa2ZNcXYvhtbpqWB2Q2bNiu72v",
  "key35": "vQT171Xr1unX7Em2Tj25RPHsUYwphexqFMK8D6UZg6p227Xnt91mHMUkMCkoNH69D2Dq1V1VPfwJZVirxRxY9N5",
  "key36": "ZPPUhp5Kdto5Jgb6abaRNmZGbj1SFRTVjMxV8eJD4uSU5BpGuoG1r1NDaAaaapoPhjRJbUQtpuhcokDJHicxam6",
  "key37": "61wKvDTMm9zawLYw14cGASquThmB3kFPUKZg5mMRSx1ZnJ5ZTFDPC8JTKb8ktfwp47T4sSWbP63pWAmyonpoJ7TL",
  "key38": "htNTfz3EjNLsNq1QQVYsCYzkUmpeyCB6VzabsEt95CwW1ni4c1NRkr8YrqSNPN7tnmWnEykUgC1UvEJfx1CcGVy",
  "key39": "5cQBkoM1rTiJK9usKkgiK5NLtRV82iWk8EQFhwrNNZYZmyraWKrqV3fx76MRTLo19A8zcQQoxqx9rN36tAf5KToZ",
  "key40": "VqGQ4GG9YiAaviT7PJ4EYZNCp1QzP3gDZLF3qSBx9Vxw4x4rZdZTGQsFUJSxt1TKGf1qC8Jucv2Xe4bMXBVFZv5",
  "key41": "3geq6CPzUAK8g3RSPRTji8eyKC8c78TptgG14bCt2ijLX8Hf9pHbZoXkqHFUTZRtbTRWB2AHFUjpb6TgroZMt6Bf",
  "key42": "5Ld3GWaXRThAqCG45YJRbq9XMiBLw6Wea2emgebWMwFg2zwqkSLX7eGDWtyYG9GH1qaiZoixq6DvyqDQ4y1pfGc6",
  "key43": "3GqpcTzpN2Vkg4GATaESiEo8bGyYZB8okAP5dKNhhhhTSUYvTWpLX6MMiymP9VvaRwNNr5T9jA1gPfGoZM1TGWvf",
  "key44": "78Qr9JxZVrYb7Pi7bKu3Ug2TiuV35ZbF5Tv15o5fx3uVT1a6SGfc77VYgMeEJAdb2YuBXSbfpNVpjcEUaCC9LgB",
  "key45": "3rvXrUpFnMkJDxkUgzCMm4Tybsnh43qyEQBEV9uhRrU4ncahZRgvtgTUaZ7PjFfrJVpuojPWVaCPZRmovaqwKk5x",
  "key46": "4meTpYuMvE9gxHz57LZUBApU8x9XwTxUeqpyQ8UvUMS76N7PZqGzm7HRn1BvwTa2nSp3ec7n66CWUJHXEJ832RDt",
  "key47": "4kYPPLRDiaxDfN8Wix73QCcP6mXaJWX8GFH7QnmFnDGGJ8TNdaPt4VAXodmTSYxjeZoaKotsH6xg4drz9qhi9sqz",
  "key48": "29kbuKu42EyfL9Wd1wafZkX4wqrdRDEFPUGiLZPzqMQyVXA82vW1EjUZWUYetQpNaktfmZfhtAavxUu97xqbBYFM"
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
