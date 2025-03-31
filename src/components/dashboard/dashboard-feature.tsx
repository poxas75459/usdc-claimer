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
    "3x5xtKvAYGmzF7K7U4yQ8QPjk7ffZvr9cfVHCGqJ2Bq9KaD5BGvVFErqtseUzuo4WitvJM23xjgjQFUviTYjYDiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AXMJnT4Ft6mriHEzye6JCqGPeGsT71wSBhTSCui54JtRc2XzF4BKUaEn9qzs4AkKKiqpeEKzfc4x7eYWgjYnJii",
  "key1": "WCmo1pEFTrw9bbtJhCy1YyrTWpExP2csDb4d6Xp2jfLx5EYsVyrU3j6Z9CnYfKu5BHaXxkPqCSGJvdbhhi65Rgz",
  "key2": "cwKDgzdXmkyivGK5gKy4xUy9K1eWm3R5AdWxWqZdGrBB9dGsJAeZouYjB7dnjCfp5tKj672AWb2y3DYpa9kK8Qp",
  "key3": "3LvXJzUfXWTihiuQVME46bN4BPSKrLLG6jsAKjTCPwfoDFWCf44jrR6bTfEfag9NxfcwVtgJyKH4Z5tZtmbxhMRM",
  "key4": "4mMtLK9BGYuN4zuPRDp729NRGNikwfLbkGp3uAJxTXhf5nPrTv9pzvf16WXq7Ns24tj1VimBe2e4vU53kVrP5kx1",
  "key5": "SLKdEGHYv8SrGFVQNQMqWMvLM2e5Br9H5s8aBDmRTc4uU3tw5XVT4WWHYN2Pw9jsoCtDzJ2zoxY32dpjz1m4iAE",
  "key6": "2YnDWDRPiceFCgJb3cNEDjsPLTg1dJ2KYs52nv98MobR8uaNm2VjavzWBgfHzL5ydNvfYPPB5Pp22bb5cNXk7dTw",
  "key7": "3A5sR6LhFL7M9LL2BBVyhLVZcpbEgnowMar8E33ER3hUfntxEGR3wVbeUeb1yxt5VfyXUXzj85tGYSTAd6HqdLeJ",
  "key8": "3GDPb24tfiQWSCGupkSrKBcHosQcjmxbUmhgsa8NkMysvTqSooRzH2ynsovbasaEft5p9rXCmqPk75BXTRGNAdea",
  "key9": "4sdvYbDeGeVX4ZFyEwwWrMHfP7gGUshhDkup8LwbBxJwrpwJnENQboSsV97bq1AYX61K6RbEh1wMkrTn6MyvrJEQ",
  "key10": "2qUpPm3wAZMQLukL6iQ2fNyGbV6CaRAVZSEBAsBX5wVuH1gLAbuojvh1THbSiPERe95Y4fM5chGJaRh9e2xHBnR7",
  "key11": "5K9vv2d6Chq6iAmPUbwzaNe8weJSDHWywtc4C692ECXpzGrUhUBFareAKzcBNTBC82CnTySpGhQWg6759YtGoihH",
  "key12": "23LSW4dajqfvT7oMCLiJkH3vfBW6XD9Qeia7YdmPCfxhotrBPQfXeqf5KUYTJFsxj8DwijcJo1YxZFz89KNqHdrM",
  "key13": "2pPqXuPgx4JALYn4cpbXe9RMLejekPvMhN6oarU8seLDQaDvJAhntSQDKW19VTcsS2KRmxgAUAYUVseV8HAFafz9",
  "key14": "2dKJaA4TH13vujeDybRQ1cY588oDm8ejqZH3MiKw3Hpovi8rECzB6f7B3VCjkpAZMWdQ3CHyr9uJ31e9DXprBeRu",
  "key15": "EVFCWRk3nPtzh2VZzsLqBp9M4kH6GxVGbbFFNyEZn9S5qPty31iAq4MKcpsZRyumiUfZYEnkAqaD9GqpWi3CQvg",
  "key16": "3iiaLEEhaCxkz7pV7xp9CCCW4W9EBYzFdMRNcVVNRqVGNvj7XEzFGomjZbCwUdZz62dW4T2HtbPG21nBvexwpYwZ",
  "key17": "27MpyJcEHFBFQrzyWq4rBqYg9cUCrgB6BupwEgmgfUmedtASTJmERQ9Mp2M84o5whZRUwvcd59m2QwHxEucEkCD8",
  "key18": "4YG7iNdzgKMDdXeECwkbr64A1zEQd4WSwXUmbRTWyh72esF4ABDCRnVkLWWDDx4CGYaEbbDF9695zghiVtbhUgbG",
  "key19": "NdodQiiFfrj8YLgYafizJ8yStZ3SCWpqZ9LR1rfXFoEYjzFw54ezWufRPCb8ZKmRy7RvE2CpkKCzrnG8WwQXbXV",
  "key20": "5D6FA1oeFETLHJ9vUZnPb2u34amcc8Wh7Yc7fUSZzgq8fHnNT6oYVceQwrsz8SgjGQLaCKviaMjEJaSPTmAKnH4K",
  "key21": "5jZYVKv6dHu4Y1ti9xWAoaTCxY3tAYuELbKFunhS1k6FZpz8Det1KgL2qqCYrKguxEt438rbxh6JzxMnkZKjBvSL",
  "key22": "4vrHXJsasHy6wXZPFbpwSsNn1U8XeAZCkxpf5oQpK5FxGZJvQmP7pPEsVi6LXkXwxeQUYoZDaz4s5VNxXwidC2ZP",
  "key23": "i9ndr93YyLuV3dqkaJ4bDp313SiCvjEq7N1TVovNUnDFDLvMWa4iZoKJQaDeHpZ1vy2AtEFPjddLCCjXYZhmtxf",
  "key24": "5xFQ1f72E5ZQFH3UM8tKkDy8EPP5ho3WQ8sEVef77i5uLewXUx3BCWifMAPxEdhzCF3acXbVHowjnj799VDm3sGj",
  "key25": "4BudiLBfTQd6WSmdzY72YbZBp8Nu71tp5dKUbY8q4Yqer7woqqsU5MbwPKzmmr3ii2D1ArzmjY5zc4Smj238FKRK",
  "key26": "4AagCs5rMHdQa8PosF678h4E3G8JuVyYw4VM11rYZgkU7j1GE42JSJ3WRx8Pkyp3S2W6NAhAdSjehwU2uiqrioVW",
  "key27": "5oEQXmKxqNVSuovJqhMJwzEM8MyohA4NtzF9oxr7QpMSru5ghiz2yJPogbjZtpxscH5yKsUoRnQRtEjg8XFoC8yt",
  "key28": "32ozhPxcNBWCs5TUnnXCQXPa1M3vMvwgKn6NyYG2JFPC54uyzTXbjDyg7zwkQbRjuds9oG8fGV8bkJRvvJEzVfEz",
  "key29": "5oaV5MWYZsiDRkLjzDtmz4vLCdtdfZK6o8T76FWvdvTrPM785wpZNcMT5Rx3u4pi7SaJpNNL23WKA528rWufxr44",
  "key30": "2fW5YsVfG7CZHubTMMZQ7DsF2CmZn8K2wEAVqQSDasuqYWmhVWX38oKo4eLA61NdnqihCDMz543DHgeD4bz7d826",
  "key31": "3FAy44oVNZ9effUECeGTqpUP4em3gxPS94VyCrJJiDgVBvSexHX9bDhoRhGzwJ8r7cZaNXLawiy8HYfa6ujsWgHq",
  "key32": "39zxjVuXPVwtq83KiSqFx88u1JEtznpJkpCcUnJf49V8Y4bxAneQmBtmqKtjACp8RReBwhukMenrc7uC9SQDQ9Hx",
  "key33": "2SABbVbxowzMfppiUu5x2cpWdbXkL9Pxs7w3fREfzB5UmoWVhAjG5uoDqnaPhutFLvoYDrs4a3JcoTRGybLHpVfQ",
  "key34": "313fdrdfBFxgER5FmYHXenRWYRbVuKTFewzvzoVc1mWYEd2wV5eaUXXYQgK1fPR3QVdxPJixEMj9FXJKBWsHaAM",
  "key35": "5T6FQ4H72WjfJgvuhVSHsb9LMoJkZ2zBoQLtE5iZsZ1haP8NZMCCDosjAzoC45K22ba2p9XKJWTK3UbTGbaiP2mT",
  "key36": "4cS9yAyvW5ww8fJSYt1FbSdycz8EghZ1nfPTNjn2UphsXfk378xHxPuAznbmFJ7tDDV7erzwCjrN4TKMXGsSDXo9",
  "key37": "2jgsgPBJRUuxq665n6tM83SdbbtcYWMWAVwirSzAyN1qcLwWyq6j4vtiQe6j8RnHLz8vyPhePTJaB8c2ehU7CD98",
  "key38": "3MyiWfrRFbU1RoxCzSf4M5PQPAk3RzrQgwTY4rAs13MJW1prvBqwbXK4UNMmdoPCTz9tBnLQKGmyUJzRvF9bUwPz",
  "key39": "3zMskTPeJfta84EBnsqsjciDgxLfNRUw6uAbdg5vxpFMYtxp3LuxdQoL7qHFcRCZBtVdEQGjZPEo96EKLT6h9gC4"
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
