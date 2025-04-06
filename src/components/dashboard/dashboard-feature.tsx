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
    "4jL4gXb3wTpQ3QPp9a4czLBa6WCr7y83QotdoW5oN2GxHhFFJ7scs8kqBu3BRgUfbfYGadMB84gygkWBZVQukQhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U3TwwiJuhnXwazSr4GJ3q88iVxuSAAsBXQR4SuNP4eb12Q1pwTsdiuDyt1BprnqtscbQ2F14vbdU85yNjUYqokR",
  "key1": "3zuXzEbtNVGE9PS4aGirHeWtSi3CwTDdMMyRH3B1GuMqFBuYj5gpKn4SqnrBPUrBzxfm4LnZx4TBbd1uo48dGaJR",
  "key2": "3pX3m2PwDMeuZfL7zdLPqzTS1KSmzc5SrMCP6xHMVJjrKTN75A1BVXiRMTuw9qzJf5E5AvuWPFiZgvNMqs45uEiJ",
  "key3": "2kRLRm6KeVVv4ruh35HpBKzuJGewihuBwFSt9FbVYVF7BTF5uxv1zvy6nc9Xj7uw7u3PGv1tqxgWaYgrgVz5Rx2v",
  "key4": "3MtsAb5WcxatLNahGR1Qriu28CSPA8s3hvB5speqv6yA6YXiqbBv33BKKWsQpC6R6wp5K682onnUJAVrXyXegcTJ",
  "key5": "4KXCWAW44mTYLS5X8GbBVX92E22eeL6ECV1rrfwUWFtfLpPkvnxxar6foB3t7WCB1dNgpmjiHM8Whp1r8ACXL46v",
  "key6": "3Z1a3M8NhqCCcNDGUrf8MJ8nRStcSGUPs18VApMLXZwiwRvfUZswkYfkcB9N5ECoc7is7uzA1rh4eVtqFJqNgPUM",
  "key7": "2fMxHFY4UCJGjmZ7vxu6n9vc8oA33DZPT6Wi3Qny5auJbNhmkmfJ9HYZdzm9A6poZ24oM8K445LbVfSZrY7x6MxC",
  "key8": "2dpX1cUwXMrbjzCjno9fyRrpZykRErcvu46jxaCovrB25pr5CTbXEziWy8EMcw2737cAKzTsjHFnJkjXcpoRmi2b",
  "key9": "U83Lfk4tqWWwf72E1h4d5sz7vkw6eksZmn6uPEHZjieiLEfbyR2tZnVNJKkq1aq15U5djQENSayZ6ZGdhJYUEPz",
  "key10": "5pejoLKcycxTU2ZW6Tqj3gGXzaynjLoSQ2XDVzPdPuvc5b3jLF9Z56joZLTMbeekKDHFTiSVyzTFojUaM2qMydEn",
  "key11": "4rUszTG1Hhsyo3a9xaT7RTCsTqgQRngectV74SjTGvGSZWmGmquWdmPASnLNf7RK2Q8wyQXskr5Wmm1yYkqkHaGK",
  "key12": "54o4hQEfPFT582Widchfzq8V3d9y89qSgnyuRnaQxkkk6hwZCpcuuHubHWJkgQD6neynX7SLNe2dkQyErZEPDFCo",
  "key13": "5jzM1UYdSvPqs85vgH8CDk17wvNPinwYRuRaCeyJA4G2PKnLiotdKAQQmT21FeUuy7deZeyp81p5dEdNZMFjUGoj",
  "key14": "2873ZtaHsSAXPxZAYBtmFy2eFHXEkobzM4y6tPq2TTxYVeQVM8KDvcmwTi7Zh8yVPxtK9RvyXp7KLMNeTdi7hcMQ",
  "key15": "K7Skvx3EfbWnvJMpBy13Cv2QX3FzQRY3fbmrERqdi7EXNVqDgdMgKH9oqDUiuhRjUV7rdus93Wuq6ZMECH9LfhL",
  "key16": "23gbyUvSPfYSUbeyfiai1P5qjMK4emC4APKERqxRruxh4EoW5j4NfyQKbwbtZmPcQPh6S2jm3uvY1K1m3snz87RZ",
  "key17": "2pCu8EeF88dM9X3q6j1cQQXhoHCZ7izE7aUB5Qceo3pN8gAG9KDwVAHEkHfy9aGmNNs7FY8NtD3MssrkHzz7huNq",
  "key18": "4aWNHowv2qxGXE2rYK3abbuqgxNP6LDDUfVvpfoMjEYyHPvzf84f4ANXqJfjiaAKyPyFxoKYJH7v5zXPrbkd8QV2",
  "key19": "5j8YpHeaNQf7F3eGWZW1f3zuop517pk8hgN69DysWoMBBadXWc6i5c1ZDhnLhMw7P5URAXD35388RqHD8b6GFh9u",
  "key20": "3BYBSwjfLfjWxR9oHGFBZ1fSb2GU9yQC5zQBR8j9N1dCnYpjy9ERRk3VsohG8YTADAq3AF3nBjXzasQFictDy3Qt",
  "key21": "3CLRtRxoYnAby2YUJSxE2b2NaM2gtgNaKteq3QJDTekAZ85fzSYp9J4tsD2Lmz5MLZZbLijS4jhA3vXgmY6Jtuqc",
  "key22": "5su2uSdpfpivdsysusuLJBWMCsuS3cyNGT47X8w7TggHqZhD3zZiHMhqCY5euuvr82xoUUUGdNi417VvYVtJBv7f",
  "key23": "P89WJiyTTQDXB4wCrwqNXc2BejA7FtUE3biH38CEtFYtaKutemS7whdQy9WGwmdQxYqU5qAU5FnAe2x8BckrtJD",
  "key24": "3XUSjYwYriZE4UBaKfRKmwqwbe5Nio28bpPCRE9BJH46VGRHr9XMQB5HY69G9ZBVpNqaDacjJyfTXgECG8x7dBcc",
  "key25": "3jsxT68crZHSvUeisZP7Exv1tC2eGiXagqzW8CsjhocDjHBEA2RGipDMnD4LdbQteNQri7mkrB9ATuZh1maiMWsc",
  "key26": "61pxHWQxQ8pXjMZMvS13AEAoe55d1Rx1MdjCcyXGVkjM2SmKLL4ujPYyHzSxzttwYPav1mLbi5mAqfx3cKywYn5f",
  "key27": "GCKY9YTKMMF9NEcbE1dnUjfedQmEim4yvW5vQdLALdstXY3yLsqojiMrR8HdpuLmvARo86ZkKVZdEG41kB9fzCh",
  "key28": "2puRM7Kvx4PUa9RdrJvPznHUhyKkgdrBoyWYJQK8jiwpFR5JKJmzVvJbdXFLrHG1WzAPikGzeizvKo7r3AnT365K",
  "key29": "2KrboHyYdkHbiDRgmh9uv6Hs7WduABs7wHSToHHa7ZBYA4MNFkn1kATXMeVVJQuS1n8SLy7JWnLTnNUUttipFCDh",
  "key30": "4wKF6GKnj1bVsmRjJ19gop7PWxb46kg4vxDXMw2Q5oym2qFgZsrUCKWn4z1AovffBktzjjtdFp42VTwwRNxrmkhv",
  "key31": "4PnasiAuVFzJYxzc2ZKqiSy34yWgPPpu96uu5MvPzYQF2DkR2uU3MQygfpeGWSdzJY6JjRHg8HL6vBx5AjsNDBP6",
  "key32": "3evzv5XV24TGhritP32KFVHV4U24qC1Bfa2RcsZ3hXukyWMtKZCf9xac6aTunwBosvTova15hWurSMNUBaYoKwsv",
  "key33": "2BMAvK8jdyL5xt7XPBgx5GJPQ3v4iV2eVKSB3eTEUSh8PRLKgugWQ3UhnMjecWJWifH9hc1eznzQFYY3B66y6MoT",
  "key34": "32Z6jn3rMq7w6EzbNnPGSK2JkxuF77y99wACcpZkMt1bHTb6V1thNUyYJzvWniNX1cSj8ejFBdmkz8hFS47oh32J",
  "key35": "3PbMwMxrXFJCVTnby3NeAJuaGAxqqiZ1xgXdUfRah3x5KGRf5AW5myDcPiYePCVf1ykcmCQigE4PKJ1xPAirnrc5",
  "key36": "3tw4ifXjCQLCKbDRNV1EsVXKJZtcaUxsmNDpeNxoXaV4HuN7JAB4SwkswzoG1rRJgkmzaJ3rgLsnZG6DDfJHWRVE",
  "key37": "3yhcXnxNpcaQeu4qaTNovhqVGv2MrxJPrqKtw16SX9d7SM6HttZAP9ujw1nM6gbMKf1NLyff1tyyFHutt6bUPFAP",
  "key38": "eoGdLejdqKEGgv2HTAhWDBrtYdYEVXCc74iPoYsqULJAQ3eLkP197pZFShtgu4y2S9YVZeZMTLGvdHGS3KhcboT",
  "key39": "46nGdcHBCstQfXajsSNStcLeVqPdHpid2Shch7AAxdTbdwRB9D1vuXBJTfVpAgvcDp5swVjs1tUD4ZHb9anJm4v7",
  "key40": "2SbvfEmKdJT5HvSCJiFMuDw3QYTem4PTjsHjm5fDaTk32CXfvDsL2WVsVrQL4QsSqi4Be8pmJsdKbqy2HEgQctMM"
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
