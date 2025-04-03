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
    "4kLVqBqBxWy3NmW11amQQjPU52fB4W1R8o6CqWbdRTY1PwdY3yCi6jgGsdzb2VKUF4esjUnn48gsFs1naU9sBMdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xkp7bm3CfC9rCrnrht9seLrENGo2WaNEvtDpkeh3Pxox6LfzMGv5CBGofnu7qHtq32KbvMCmiFpKZ7nfyBxwR6p",
  "key1": "27PsKMtngzQjoYmdz6XQiBnH5epqbRkGZT9HC8aeCPdks3R7Me8usZ78WGSN1roDpgeye2WBModXmZfh47Q1tYja",
  "key2": "3WwUpyUqued9dMHakzTmwneuYQk1mp7LnTrngz1TXABYbVjysMUu5okAiAh8hNhDN7sBxrcDTyZgajt9LZa9QxBQ",
  "key3": "2r65rj4qsVRKXRpqRQ23Gx9cJ45Rx8wRsDwmc9kdQXR9Giac9YFKdC2rfPp6kgAGSq3LNJLBLbzQ9vUbghr9CrxZ",
  "key4": "34nNpSd9S2RtotWKSXSRHQiazAFj8MZ4eu5aMypXin8Cqsr8AyZPccwwV34fffbnBqT7zMNneSdh1damrFq75Z64",
  "key5": "319KHT63WctK9CTgpPoRR5zypaGby1efz6T36QGowqrNFUuaqWTiuBXWEJTbozide2Go7uT1tGhwrHZiYB4P96DJ",
  "key6": "542uDAJWxgnG5YrZhtjt9FN4rExy5NuPSPu3dUektY1gSnY1oB6sD8iXg9aRo4HP7Tx8eoTcwcWNC8nQEEd8ydNJ",
  "key7": "c7dvbUrXSGUALEZzRcW1rd35wg16Y7UiKf1Du223FEC8y7XJHgNY2sALLLsW6Hic6V7ZZpNyirZ5WiTJjU7sKms",
  "key8": "PgQv3wPWERavbqbaZ9fmQPxtFjj3P4Fw23qj64G6Vcu6BqAJtTcjY8ryANVQcBLYJudpB9XATCCL3uTHuAzo5bp",
  "key9": "3dGP9BupFezBZMSgymSB4NxHoqzJ3cFpuS1DEVPRZbGHEPHW1UNoRsCeSzczqe7yUVtf1jUt7PNYtTAZjCUCbrEi",
  "key10": "5RBXHXPJmEK5jm8znjYeWqZYJQoNQQFyJnWxfd444qata8v8sgLbkpDWHXDmn18ypuz7nbvSUPUUzzop9taxzevZ",
  "key11": "2Vxh6oFeN4W2HcxZaKvgRdhLk7gy7XVJHn8m5M8ipTJPQ21qoUuKPVRACUtPL77BXjmYyGdsxYubTeR3tAUiqck8",
  "key12": "2eJGiNgmD4Gwe6FrZByf7T6rCYWGsZzh8TYX7u1cd7cCX8bj363e7z8hNsJv5wUePzS42TYiMioJCJFWtxtu5a72",
  "key13": "3cAiZTbn4SQFoMEW2fBCHvTCtbHW2QNrGBBhvLCvpSvyhrbG9ZvNaF7aj5M7idxN9DCRk7RCGZyx1bHzEu4mgAwy",
  "key14": "qPrL3pNJHkK1JNimjxBVyxW5wZEv7hZSJpgiFUeFgryYmA8DR991Nmacwpkkk47EUrLEuAvL2LLjqCb1pmnwo3g",
  "key15": "5T1e2GqbYskwmtvM3xzBKPSA4C1SyteZrQzpTPCejxznZgQU8XcPeMTmmpw6e1Xy1EkwWYK2SrJnUyUisf5qgi4r",
  "key16": "Gc99mBLQYAMzjU9xPsc3M22UQNR7d3V1sY5zGhKxTNt1cRHkkm7M7fy1sUDNy6XHJiFbyKud42m6d39PpufUHco",
  "key17": "AkMeiQxEVyyCYdXw58NGcBr9AxEpToP3KBWYWFWYsDSDHfiCABREagPKtq1jypUvyEYEgVrtVCbLCvknjoB5GDR",
  "key18": "2xysaBhriBLgcPBZjftCD5YFy5dC8wRqKEwheXitz9JWkHbbusLDe6BoC288KJyyUajAvD5C16iCyHEBwmBA9E2R",
  "key19": "2giD8DmE4skrrMz4tMW9oRR8AQyTEgGzpZQ2QZJSnURnqeSrcw42o2F9yz6LUBoXD7x54T9vfEPS5TRpCZ6gXmpq",
  "key20": "3mDGm6LWLSW7h1yK3AszbZXymEywXEbaE2Ky3igQVwBJ2p3AGtVQBDu7eGYtqQEuVbpHxYMP89sRPgSdpDzWx3nm",
  "key21": "3e6YdT8m4TZbQuBdEDEjo2Z5o8EPyPjEUwwovjsupWoyKJikhYuqCDWcVKLRuck4Fms4J4sUcKReDLU25ZJg77UJ",
  "key22": "41jXaLhN1YzedT1oDzHxTG7TowstwtSvD6p4LjhMDnPrTALtndUqchokqDVoWGd8wsCpmpD6JEZEkcvTtxDJjSLk",
  "key23": "gPdckECQzbmvHdJGLRu2xhJU6qhtvB4N3p4mbV7aXjscmaLaQg7z1zZspeKjxwkJbCVR1mdDg9RiC5UNdKB5Azm",
  "key24": "2TSwFHcvYTHQNh61n1uH8C3a3vG73pY47RYX7ix3kKC26tQsxy6QBwCrmj43bYt8HHfcjQmgnwZagthsmbKCCX9J",
  "key25": "2RmfPvLyRqcc24A84XQ6UFVtFuWVGX6JGU24dUMNTnyEcXdaJP3yTF8uTEYkj1s45xeQruFNPyzvLMZX3wuEmqMF",
  "key26": "2H3FiTWBNNc3t21BrT8yiFeA34VbnCtyNUXCdvgfwi4nGx8wVj8xfUCXkbkbWS926dPaF3KcZrbKdZPzKXhu26QW",
  "key27": "5WzokAjmRxZQtGojgXCz7Chys8S3UHhG4GSqYeTsRDbMDgtRcSzh8p1RpnK6pDNMQ3bgHaTcyMQtcR7Fzj55ccGi",
  "key28": "2xHBnhVMSL8RaqAC8xt6f6TJaD5q3BMr4diXY3bRC9Np7EiveYbDQemGX9YTaAwAPuj7inctpyzkLimGYq6jk45S",
  "key29": "5xtYdkcCHdchGhss5PQytnRzFQrxxDWhSrcZbUmgvqJ9fm7VnRqGos5uUnWEuuNV7uurAfd21qLXKni9LJXjJeRU",
  "key30": "rRb8pzdtdSvBPK9Tx29tFi7TXsN1bZipZSW57oHFpej43tM5U9Am2xMTVBdcdbHg13dGQghHDoaC4t5VadLvgzE",
  "key31": "2qPafroEw6WxR4XcMzhHtSMjVw7mMDUEbCYzR6nz7KTHqqR6jKjW6zSCCDCCwKgn1qGJfsn3VWN6vyLd1FQHcDtS",
  "key32": "2ZtXihBaQoHityNBumiR8Xr6CuZc9vJM8aKG2sZpXGLDvfJtXTpY9gGe5yThxXnmCPgRnQ9grPKo4juUfHj2ApT9",
  "key33": "2bccbsyAdEr8UpBSF1wMY3s2dmK1J1H3DpBDKqXTnMzvwbY6tjLw5DGQTkjCXguPAmbcSzbmG9z2xRYCWupyQyeX",
  "key34": "5iqirvM5rMSmDTCxM9TZKi2Bj3mbnRfCeTGDyrGcaSNMoVoDaYyz4Yzm6uLwNZpgKZgA3MfeK9g2HoBeX77x9pSL",
  "key35": "5tqgYkJXk3nz25vjcNWDrkUamViSHFRAJiLJpGd4GLvktQiSg9fJVoU9wtbyeuzzBCW9twr9ujWHb92FdH52vpzP",
  "key36": "YZJctQPpGjS9wi4jvVBu9QA8yxhLXVv5pbDwmvgek5ohZoodSujpJCtpK7iUkA5zyzXptXkb3VTTJVr5c1HDYMi",
  "key37": "32cCrMb26GRgPv5B3GZMr55KGJjmff6Qk6b6fPA2wftFhTChykQSCsZnCHD969cpn5h1ZtmugBRuHDvEH2dHMNtZ"
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
