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
    "4rvkwpb4B4pnKmCkuHomgiBhsdtiiehiczKJrwb1X1Q2LvpjfUrzFBBFjir77BnAsVhqusbzTPhNjeh7QqQucbNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mBkWnTrCNhK9WA28FNmNoxDjCj2YAt59fCHr9Vn5YwPxLnzK9z55vp1hFxAW7n19TvhHWy7ToEzuKjKYHNcrGBW",
  "key1": "xsaqsGaNy69YBLQf5jgwtCELmUyg9nvVx38HaBXKmcKntep6XFawPHcUpL3VaLELppMVGAM4TjxyQgJy2dUkKdL",
  "key2": "4rjoZVJNC6VjiiaRj2m6Gfa2oqRFs4vehCsmwzB6LMvEgTR4PSJTHNnyC2PFmVrputTiwVF5RoPEA9Btb1seEgwU",
  "key3": "3EcH2kVeGLajfae1nWVZZLofpCeJNAtwZLJyHmPWDrye2tDgUS2jytB38sLKQ5Xhd9ptQfS5gpyRk146CFeCjWP6",
  "key4": "2WjEDrswZ3KuoW7TXT2weh2pGphy1nm9u22tPhyiEDY2ZfsC3NHoX617LKtv8NxYYATmYrDV8uHrAG9aRKuMH8td",
  "key5": "2rMVJeKt5of6dxbuKS7U6scjapw1uT4MykZWoSYz7ViJYBJpf29WTFSjLYEU2EWPAZAPqZ2DYqbE7q5musXaiGL4",
  "key6": "35uMHGuj9Vq4oSBeGuqNUusKV6REJhZAag4mDYuTWJ5jwM19mFnXVDMQVGXv3boWkhPyx6vBwJnS6cizMiKvk5DD",
  "key7": "4VDQQdCiFH4SoCMpSbcyHin5eiV77xGk2CJ7d7Km7gq115a15nL4YMm5vkF3cDHMZez6P84c3ypGiMT5v16Z74zC",
  "key8": "3CBqL3nF4t4CTVExCEBa2Bq1w56YGpXwnx7CCwnfhzcmk8hxLmKfPzKkQfzL7upMieCNudriqd3JL3H97PXYiprT",
  "key9": "4oSNaM787S5mWvNWYeTPLnm2UKErbhiyqnN6LzuqZ4hKquqMjG1ziigGSsaysr8wG2BSAnWzv2fyB5PJirmD47Gr",
  "key10": "5iRZyQQxqKVg9hiakpGwx5BUi7b3Su6z2MZXBgpKSYNFMxn4nZWeFAdrTSjAMXKGu2fxpuVXsNUXQQjfvGwHcMe5",
  "key11": "51hxLS1MtaKw5hhBWoAg859gx7gu3XNvPYuJrENKdNGg7iHcEn3LVMw2aGpWNE5mXsPDEudmEoeBmBoULRxneAAr",
  "key12": "2jvkjh8JV82WH6T3zB1fozT68mxzu2EV2Xx1QwPY911FSKLLD7z6xokcGJpbiq1BmvxdVpoF47E8S9DkmLhtN4ya",
  "key13": "2TyaWH5pVP629kxHU9vF46ourxigUv5eWwcRdCvMzF7rLH932iBgUR9vkKvPfQnPsXZCx6wLbvsNQG1Gj7rwDucb",
  "key14": "25DPMkZsg3A6217qRWmJ8hV7FR8tRXiFRQost3i3jQTKLSEnLDNDEt9eumdppKfiesJkoVP4vvxk1CC3mZVh2Lvn",
  "key15": "4ZWhjDHZFSnhJzL9TvGReZx3TFUhf1kMeLGeCry6KJByBU3kRKU5bZPNDZAVpfAg8hhTdWLjdMUafsEuQRqeLeVE",
  "key16": "3exSZZCdZgZNFkcH1PYdRpdRfJP7j7fCtJDkcnA2DzpvLr5AWTAKELJB4YLfBv4cYiUNcHkJzWEcE2TEAa7HrF9u",
  "key17": "4ipaPahuELTWrY9XGfJyMWdkotYz4FGWk7MYYNV6EQugo33cpTRU9ewKATXe6tS9y3bhPg7Qn2UpghbKssNtQbfH",
  "key18": "3DWvDNGJNgNM7yHyTZyFQC81sK39YEjYNoWiL6rZgZkyobfQSgf7uhACdFHtHpGJv1HMb4rBMWmwKQP774TTFGKQ",
  "key19": "ty1e7qWnjHRb2dJ2o57oyQMy95uRm1FSEnVtFvD1V1ZGeQqBekTZipKjNTFknNJ9Gjpfxx3PPy7hmz2uT4ipAUr",
  "key20": "3TW2dY22SHcsjtcQTgtbNJbdUGdnWC71p9Z8DfZnQ19k25xMGFaxbEd2LUrgehfjNLr2zqVRfSP71sfToQai4Fkw",
  "key21": "mpABJFyVVaWe1nBSJ7ZDnDGeA4j6snjBJXRwP2odvR7c8dpTz37sthbRgfqyivywkbeM2RdcSqPbkVK6EN1Dg2J",
  "key22": "cv5WxGi9AazUhw3HsAhuNy2tsyaYG5VPHy4L8NH5EzsDVAQgfMp2tcHEpvdp9QZZ9kir3HrJU3Q1pL7mDdN5omx",
  "key23": "53xVavZaXhmdKFLqmtH52VTjXTFTcMwoEHb7ZBpcq3k2ggRParCzoJ1yTyaVUQ6R8BwnkFuDp4TBTCYKFCWp8GMf",
  "key24": "3mTRuJfQNHuPPaGzGbgkmwGh3AVmRB5R4qjUPrNHP6ADLS2drngsyqiFhUwruhfgkj9YvebokNLaQ5MHb9p7ZcVq",
  "key25": "5d6kcwRZcGt9ESDuwZGBCw9M5xyA2e3tu1pJf5rhUY1zXxTHArkd37xnrNt337xpKPffEEArcmWeoKgipYJkVtej",
  "key26": "37aDbUFeHhgN6v6pvp3nysHTnBjet4YZkqmUWZqhGKtXyNC4SvE2MaeYeMGa2DrMAntFAN3U9cRTCmXeqSyXWL9N",
  "key27": "4q1fR5U28443UgQazFdXVg1aPuMsadwdqoTqi1NckW6cFtDdNHGGa9EYKvChPK6PQ4g3odCrEWsSBw3GzjGVFSmL",
  "key28": "52vPa2UghV2FqjfJg6bm2YjPx36FV75KZ6NYxfLy49FszyK9qxbhWDFmQUDDjd4iEtMeKqHFkFEKuvSvyfG5oUMB",
  "key29": "5FkL8s13S18jr2ztpDcrQ469ScbHDsqCWgwPaY8Uyda8hxohCd9h4JcmGwGkCwiSGrbBnBTiBFEcuXK2i8mebndJ",
  "key30": "28yQh6zcogoo72rkhLWR24koxYi9Vo1pckCBNjjHQFRW12Bohd5sSpR67tmGAmbK5sTPCiqhZMqiZSohVsMYsa82",
  "key31": "2Q3d6Q5w6C6Xh9bFajw7THzaaxX5tAtc8xsR845b6bHuPqjRgBgj6cLo6PpWJDGzbuMPscS8ZpCgFMYhCdUBYpcD",
  "key32": "31sy6QLEDtMbyX8AoDGD1eiphWPHru5UACuMz8LRxDqaBPPRoML1d2Xh2aFFDdvgbE4gtoy6CDFsM7DbjYH8jRr3",
  "key33": "4JnATes8fycCtjrrL6GjbFUugwJg5CMtPHV1yhVw6DwUocFEFdPdfUt26sDcFgVcdWwrqsya9LJvR6nX5AH9aURo",
  "key34": "6d14Y2fXpzjH7xo2AkjJC76jGdRSmTjhf2GB7emzEjcBNJEqpcq8gLZU1AXAvYZG9kbjFHnAWeEuGG8jcCsMj4G",
  "key35": "2yY335HCwPPm8vQiJdndkzQCsF5ih5wRPoB8oT75HL5kS1gtrFqtHq7Er4zkpa9EbSsGPPPCXYBALK6i4vUTUen",
  "key36": "5HNA2SinV83qsNoAF4pEjubDXD1Ycj4dGyRkHSChjAKj967GkD1epRccmZp8AwHtAYKJj2QBjh5buzg1K43tCd5K",
  "key37": "Bi1XeTdeVBbdoGf5erYRcLvGmvnmYrqZdKDeSXXeKVPAFGY7HmRwZvdAVyGu9oGD3SEG6idogWf9bsDfqRnr5Gf",
  "key38": "5QtSud1RUA7FLdGVD2st5QSzbNNw12wqPaCexRhs6oxCH8Rg63mjq21VaWQDXPn5XKQQnjBKU33Z9hR8L5Ykbk68",
  "key39": "8STqJmJ1S1ccoEuzkbD9zbJLbhgF7WaRzk4z6ezhLCpiX6Y5g5FgafwoWpNwYNZQjEYhLBfodWX36ekgkTXZjPG",
  "key40": "UskN3dnB7SghEWoo1WBMUrQc1goH6yBZwBeXdJeQphwEiz5aT8CFeC9HJBqNEqcnrVA9EE3SK7GcXFwebDWU2rG"
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
