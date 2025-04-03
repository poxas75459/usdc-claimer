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
    "TqsHQFWrW7ghxu1GtAHX6KBF23n8mBNY5tAx6mp15W7z63vnEM3nKSQxuyxutnj1idPGfjdT54aEJrR3GhWtMaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FRAjZPj8mhi7mvDcbHjLJJvhRcQ1U95PvGf3EeVjhwYjrPZ7qL6BcKHrNNzfUAPvx3zZrQ583KMBPBE1LLByNN",
  "key1": "4mFbo3sX5ULWyBigzQyoPuuV44QbFQiGwbou5TL9Tjpg6M8GvdaQKnKsX3ZpjXJV8behM4eD8VnkMsfNqEktYudW",
  "key2": "3yDBTD1yeUPrqNqD7jnwRgUhm3UR5i6qCTfoYPnL4XgwpSA46okvveJP8jNa2dWU14fFn6bYvRydT3YsziAm8Vry",
  "key3": "4pND7hfmuUxwELYp84ASmAQDC87xSBnD4nezZBN82h4usHzTQ7adqpUVCynKrd3z1Kb6TXzMKWkhs9GzheUdqTP3",
  "key4": "2AqrGEciGpNBKQ4QpfVm6WG38ZPh7nXz8YAoENk45QgujXYpuCoho5q8KCvxVXyvR7jz9BSWbSonyZELKq1VBqNX",
  "key5": "2mrENqt1Cqku5utmpwKZRU1zUtrcB7kmB6PgZwemqjozeDUC2utZDt7kVkXSGLYH5gVLkRYpJp7S7qaCMSYbR3Nq",
  "key6": "2N1rR3pUrtBfYuT64rRRiFtKEowVofNfcTBSNgErX9g5WfxDNPSQedt8NTrcTjxwVH1Tofjap5xApxZPS1M4g7Fu",
  "key7": "ZcZ54B4JrF2CgoLFT9KWsZYjCt413hAkA1xbFFGM8PvyKrZ9viWWs1AwhvSQ76tJKyKfrPtSvco4824xAc78aZf",
  "key8": "3HMmsguX7qEerMX4kmqZcnnqb3h1V4pKsxnKcCWQthdKbKnmnXtUfb1WgjyquYpYHfcaMdRLcY1sFnrGX9RdSCRZ",
  "key9": "MB5K6Zbg7DoBKPd8W9YR12MEPtFyuKq7RyXGcRsGZi9juA4gaE7wF4HGQG1F4MHZfissQya3PbmLrTThmQ6oFCE",
  "key10": "nokbt5cn55LEDNRdroASU3CmsQ6CvVDscLULgnbCWaSdBncgfRzp7uud3e8Bi6wBeCH7744zCGyWMe7GQ83Yx6b",
  "key11": "28nH3Sxfq6xh9WWJcUDHM7T4esgaKRuwK3UBFuuvFX6jG1FkXizFmG8b6XMCTQgoJTTRSVZf4pmNSWNyy3XjPLLQ",
  "key12": "4t5SgKVfciCHGofbARY8yhAfiBjVT6k8HJ3vTv3Eks1xooXcU3JpsZaCZyAzpkVzPXzqRZTrwzceLsUTUCxZH14J",
  "key13": "21D87Q8VDKzw6KAaPrmMGWyXNvmKBpmxiryix76MaCRN1JmNrdiAA7NtfRQ41Zty1JJ1X4qjFt3SArcbiVxYga2q",
  "key14": "3WBQLmMG8J4KXLJTcet6egLi3EpwJ5T6TfRnWdnHdAJmoMNzEhKqvrNEfNEQD1DzUirTRygUKJoLpP2x7Qjwah6h",
  "key15": "29B5ExdTdmC9ETN4dzeF1r1VzQLZsGeKxq5bQ2f8U85nKevqMEAXgmbFHbSpxQVLtEunehFVjchnNT1TkL2yzMzV",
  "key16": "YjQ9S9qy685KhWmdVkLdH6yprNswkNEYYjHaccaash9VnvPzUDVrWgGwDXwR3DTW8RXFSMyPh21eMazhm5PnMih",
  "key17": "6jZCtB8FQBQo33U468ihmsEL71R1aZaevANNzMxh3MRh8SE8rPdn8gXnwNRiuuwhHhm8RvPNz6uMjU3WRMkCYho",
  "key18": "5AoB12scUhcttQdRxZMoTZFh68S5kSpyg6jz4cz1HWUyPhmQYxcEcF2hHQ3CrhGppj4uCbagHTS8CrmqFYAKujXw",
  "key19": "2bCu7gDty9HneLNht6sUZvc3wp7ZGnauf4p6VquFx39hKHx991DmpbwmYkcEKfb4PXnXAJQcPwe11XZsM7QDjn7e",
  "key20": "y2RSEd7UPBLzeEPw32s6x6xWC77RiwbsMouwzdfG3TE9AReyr49htmTLDhAzbareb7Qo41F3ZWrfkx1sWLiuTFG",
  "key21": "xVG1QpGEBHPsmLq4NsM55pzBWXoBkbKHidhwH7zsSrD8eab2SudtbnYv34ZKYfaKcoyLt8c7wm5x3JLep4QVnkW",
  "key22": "5j5W1vWPq2UPxTZWcqgMDjgH7MN7ahtMb3oTdVXWMWrFAUhdNhUZ2Td8v4NWpzeMxN5wSKiPrWcUegM1d1JxXeSx",
  "key23": "3MttMfirAvJV39WaupcEfKRRjcm3LvW1iF85XemFvHyseEVWBbpBwteHHNX9kvX4yHLeyU9zX9zMfJNpw4EMN1y6",
  "key24": "2QsZzo33HCQG6kiNu5NDNQuVHdutqtAAL3Wq53djW5TSv2pHWa4KnZqec85j681gf6cy3Vx9ZvASP7nagTg9K1R3",
  "key25": "2BpLATRwJqrmLhQTPZQG9trqVoFFYGQJVwAgzwfirSjuDvYd7yVRnEUTsWhMUdG6uHTJMigCUJS841nvLP6q1EaS",
  "key26": "5du4R6BtiQU7UaErPYBSLMN2G9FcjwitiTmDjSw9RdQhCNJvAA9LUuWQzq2xk1iKwxaujauKUAoyLtekCe1RpNKs",
  "key27": "3w3T73pL7rbsYuvscH1M9QEXYYpfBH1wA9FHAbYLTsutKTydvBBBqLr3my6JaR4yKqQ9CJpUweRsTLhYE6aWcA5g",
  "key28": "3s8s1QKF8Taoaxu6HwwkpsEq28BcTcKUtCr5jPPyuTYVDBv5L6J6GtuRDPSz1VcB684TTAYtoCQqUUKPcGJcZULL",
  "key29": "4cPVqqpeAs7iE3DRCLtmw9Dmnh8bJpzJSFfHWYCKF8SsCrwoHRGfA8D364Hf1A9BQwhHzoP4VRiqzhcA59jKDEFc",
  "key30": "4unsYWP1ay711fuaiaCD5mtXwkL9LyyKFDatbT7Ly2R3udVuZnjqg17hgX6Fk8KqZG2GCxUPKzJ93DqDu91d1pe7",
  "key31": "2hNQPGZC4WJ4tKG1usA71rSyyYLQf1FVafxpnCmdM9k3UB6V7QHrMavYoLbb8uvxLMwpDESaRWq6waD8yrbE7TW9",
  "key32": "4K1NyTAGGPBBwNsa6k3JtCcph2MWmvAKYL1dhDQw6QzdhmP6D6tPVcja37qKWz2MD5dn2yJZQe92AFXtYUQSjQpL",
  "key33": "2Ua1RpFt2DtqbnyuC5Ebj3PPMSkz52TBsqmwJC1PgdvX3TpxDpvv9QPhrwUwFbw8kxpE1PeWgT7D8fsDrwJiJcbi",
  "key34": "4nQX5qSgK8ZwNM28MjnPb8Ye4hBPzzzBgUeEbKVERwHyRUzMZJWacbgd8z5xpkrHw8EZLpY4Jc39ya7PymJNgFYA",
  "key35": "4M4w5LseAMb3fQ8Hz2wa2mm1qrktFouRuipq5ragCB1JuTAMF3Nveu5sfSmg4roBzuFNiJ3Zx8PpumdpzP8khux1",
  "key36": "2S7bEK9Sb3yPbWSH61nJb7n1mTW4iaaFGnKvwfS5AaKH3nqBN4YtXac4BBXzDaw4yicuLAm3nXh4nP4tiRwHD4Yu",
  "key37": "3cVvEurRzUCRcDSZb6CdmRoVzcukJbmyxeq1NiErBDRHbYsn2zxZdViJBKPtpQ5FwJLLivGtgneDUa7y35ZMBpqo",
  "key38": "32xDH4v9hFdRfCURGJ5XU1EUkAEsxQqMpdFvNZXbddKLd5VohWCoHmpdzM9VUc52JinrmreRxnrw6CMmPsN6siqS",
  "key39": "49NG8R2KeQ1LT7pv1LUDXmN1fzwQdiHFNnBQMpr4TPsyatKoaTuV8L4ejoBhberXtkhUF1Xb28ooHXahhGpA8HHp",
  "key40": "towbjyaX25MTjwjNcnfKGyb7GGDrpuew8YCiZuM3BgBKuTp3yVptTD6ScFaHop7BQKp4vz4KVF9gUKWMoaDBVka",
  "key41": "67Y7XmV5ifkReaYRK7RwQPd4Z5wQTjneRHDR1udNso3iafbsi7PpJzjXzgnxT62FMU8FL8K6Ysa83VPQrbB6KTf5",
  "key42": "54LyZ748BUsh6oBQxs6iVGgPrkpKgkL3UoD8qF8GLQ7q76aZMvhNBAZumAECtiHUD9PeaQJBJS9a7YvKergMvKbU",
  "key43": "33EDBz1o7u5KuRLaw3fBJmpKGqmymzbF7pXzvYyLqsAVos37PqEzns5grov9a3EPxRJdo6zUjG3LPKZFe6RE9exn",
  "key44": "4raM7pViWXTmhwKme2QZg5zXec13nsVwkFibtbpTNxMCvNKtzq9TbnKHQm6LuRgqF5ggZwsYj6quSQHuxore5W3H",
  "key45": "btYqbGqzXaQugY2WoLdrZHNL8ztR9JJX8GG98YMKkZS4TZGDNxNiWfrLjW6XMxoR5j27hmdYPjSwNbD4q4n2qoQ",
  "key46": "uR6smMMWxYm84T6hjqURaseDm696pmQbWTQ3wDkx7c71YHu3UUPHPGEPBrr3SpqPHN39SjL1cvBsZirU7pdNDQr"
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
