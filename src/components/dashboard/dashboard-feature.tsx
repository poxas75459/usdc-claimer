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
    "2hpcdMkR1gTaTHj7PkEVeY2V662b4DN3XR1PmqA8u1crbXioxCYFsvjXNEX7Hz4HgsT17ff8ZkEMhKuBcUqvzAyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59RzfqdtVcRQhFLdvox6qP9wDu6YwJ7YJPvVRz5TnEWCDZh8F2EVCkhs9p8KWnUBKYD3FDHFr3SUe2iLp9xkNgUg",
  "key1": "3M3NCVStsQtTtiJ8u8Vv6g3o555T13NqTiq4ejKQEyh7Xds5tCSN6e5LeruKn1mXgN3dkLGJXDvzE6eGrcg9eApf",
  "key2": "iwRLGkpX5LZZADrE2qP4XrdmjaoWsW7wU6KM2YqNV9J88NanEz2V724ZpaXv7MSGLbVXj77a6yuXJPhCJsAQDjL",
  "key3": "5apBCLaa5h9HRziL9g5WNgV3v7J21EUhf2p4RRAup8BZuiBuxCgb9PsfmCiTTDX262XxG96ucKoFabYU7tokJCn4",
  "key4": "29WYA6gGLPQ5AHcZNFt6VVUkdezJ81b7NE5P4xNmDq3LtKY3tt28VPU7oNu7T4BFmRr4Aqhhmi7whuSe1aYZ8EEW",
  "key5": "4VxhFG8edWkRDuSqioy2MuHFegPzLWUTKCuLtr8uWNsMhtDVb1QVoQoWH3ULyYXFsMpv2XmztSHeR31KBHGwuDsB",
  "key6": "oHEaB9R7KB6NpWX3ck7FEGBubMqW4TQDscQAtkZno47nUVKdnZ9C7q7n951ZAsjJLzonPYJvbK6E5Nf5HcMhMdj",
  "key7": "3N1d5kQdkjaVys9rmhVaknB7zJumBhEC9WQp1uGXLuh54edbFViTihTyQswkv5HErkt6zHUUPQdBHDMNsSyb19Ui",
  "key8": "3kd4uQ9PN43XDg8emCKLPMueF3PChBj9bARUaYpCwy2fXaPT8ZBbqpq3XCnZsEmjtvD7f9Mc8mkGH6R6zfkr2hmo",
  "key9": "3K2QSV9CAN9Bitz7T1Ep8LCwruG2xUBDZDhUBE14kzrfiTV3huVGBZSFmMaqoFLgNDqWphuXn98CBqQkAxGw6Mj3",
  "key10": "4MrjURMkn97yPdvfBm6zoBMtzmgbPe8iA5tF4SdBNSGvhdVqZ5sVouiYaejXzT9T7y9pecHovrqDWckcDkPkEsLx",
  "key11": "4vLmuFLGxs1UAhFLjPamG9aRw23ZPmEDZsgRThFAiJYdd1CWHqRpCjvUhkZQ7L2XDjec8WsFFCZg27Gst2PZqffA",
  "key12": "4rGnVikfXLRkkHKkJho6d8JDmyeaKa9Prw4L5Rj8ZmwAgDzhFxZH3eb3epzmxefLEpE2jyF6kKe7LNej3njVvt55",
  "key13": "2J4idJ3ybJEcA7532DTUSKdZDDCUzLoEug95CTtNUZDoutDMHUQXfiJjd7Wvi21D48vo2Aj4Rb6nyf6PqZtfv9HF",
  "key14": "29LR8Cga3WLtZfqx3cZ8csCV4nmmXHebxDz4Yj5HEvrMKkCtfdspnR3VTs2iT5dr1VXNUwK7UQzS65QWaCzrdXoJ",
  "key15": "VeZbgHSEUwjzRbARrrCTQ461de4SswuN3FmEydoiUfZwVfHHAMaAGef7kRijwVxhFg9Df1vjfGnbJHma7SSZc85",
  "key16": "54QYBsa9avL2saTx2V92SjDTVareRv76QKbqZn4f53fiNLFD24vhgrqGK9DBPE7uRhqKu6SMSqRXxf2Z7ERiaKjk",
  "key17": "oeiF9eSXd3jQx6mQYCDDNV9JiB7Xehom2sNPgpNHiq9KLBP5oKbd1r97K35c32SxnvTq6QNNnHT5EB7QXxvqBGb",
  "key18": "64a4KEyjpYwjNMBmcWxkoU1DmU1CJ6ZQwT8N9abac22d1Ug98XkryxFp97BtMaXkAhQqgmW1crPnyzR2fwVC5wgN",
  "key19": "4nUdxRMUnc7u9suL4fmfRrsNxgSFQ1w79SrjTuSJLuuHJrXYfhGVwMze8K49oFgGaxtbEZKEmnVV8Ppfc6dD9jXh",
  "key20": "2M5dtyMx5UYZHSTwLjiNdgQwxkr52YNbWUiRph5FCkR81gGzjihnoBw85NskVTzPRBMXMHf7RRvZhg3vP24MKEV",
  "key21": "5qPWzPwCwuRteT2ySnqLtuJJPdqAdw3BZJjerC9GFMpXBMsDC8kmX2QbAUGeaCXS85d5YoFgZbHtW63wWuKpHgKj",
  "key22": "2mJLU7BPzPrHubkTb2x2rpGhaicD1qZGJUqwDCv2KiRbNxBbFS4dousDUr36ZhMFZ8g82VCmrAGKiUDk9y22J15d",
  "key23": "gAaW5BrX2CnvDKS6EjRRfacwQGco3KWcc2SfhXfBrkYnGQ6GaQ1W2Fjihu3M4szpjUuCtPaA6mjsBYbrjmkgXMp",
  "key24": "4kXpAxnzJgX3wzDtspU54LCdQcSLizhW9titJgCZ1jonVYnggN7yMoV4uWs3gPngxfK3T8Tm9RuHHf9zLDQnee5k",
  "key25": "4cNiJdLf7y137eVS1XRQdLS28j5GYofK9bjt21Fe71GXhPipY8PMevKZ5VuUYPU1K2zZUvJ8Qr1frUX8kcty9kEn",
  "key26": "CHFRTtNYJdZxoFPmWb2E1LXMYrTARGhPiQbBPFc3VJ8ya1WrbH1EooeneqUuzZMHa9H5bzzCxaQhkPVEfgyZMiU",
  "key27": "4ma37LLNvzq2zAANgjHRvwYLhohhGEhTcBGtivtQ9ZV5ke5DQaovZAE5wGkHzehGSCDD49pWm1dXqRkE9igLzSJJ",
  "key28": "5k3u7jG8sUk7zTVQY66au7oW1SYph615qKR7vgb4q2ZRQozgyJuvPofMyVBxkPGUzyzgcj9spKLK89R39wE8HRGN",
  "key29": "5GGKt4UsF8hVgrnDCcdBuNHQY3ArjrbvMrN3TeYwHqeodcqHLtsmQh5Uq8HPJRyhyWAQ6zG1DYLD8Nkw5GsnQ9gq",
  "key30": "2t3TMdZUg2vupyHyHujyVoYYbo43ygeQzk53Tu7z7kBG54dogXyoCUFQSfLETY6e1KyAjH515VWgzuz9JPsvyCZS",
  "key31": "4Me3HBJh2Hnx5PmTqBxMTbJx5kwQvppqU4vXm4XJWrgAMdHrX6Wi1xhNwVkfs4Jy3uxUZMt9tRXsGcJwq6VP6YMU",
  "key32": "5BgRyhzQmmhaGXGYwtg1bAT1qzHS1nth15ugYLPyTYTjVJkwh9JLqw9Hdyz1MrMviVTWR3Ysr7DrHSYBNPHoPBrV",
  "key33": "2Ci85yuTpbicWbaj4FK9KjH7q5kdb5epSJaWGPdXSr6Uowk5xBDB4oM8NxZyj2N1umb8AEoEtd3tx9ZnPABs5TDK",
  "key34": "28sknFzkQC25ojgbhaxFUYcE3tdY6X5CwBNBYHc42UkuApPKSKHXsjWMe9KY2eJ18oYmL6E1KtDgeBMxw5ou52Nk",
  "key35": "45tK4SJsUiYnXnXXzPYTZ8w4vTYxrVsKaUY7eyHeMBE9omUUMFfygvATeh1eiJvAT3cfZUru5y5i3TAiwJP2fRZp",
  "key36": "3FCZ337K1KF2tpQFG1qCfcuwaoTC7vZScmhfrJcYBo6xBWdHwuQGE9ZyTLZsJ9Qjh7QWxaWBtp3JvpWDjQ9ESouR",
  "key37": "4tkTjRqeeHdnsaJz6p7fzikXvkNLWjUdZd193m6HKisbLv5RbMcoXDkPm47e5kzu7ji7BuGBM3XUM1fjs7pim2nn",
  "key38": "2wjURmfKEYVzdjSfY5yo62KBnSjrsQDE2g3kU1RAh1dunB5aV3hi1wioGU2zsR7GkGnq6kjz9frdsmLoAkEJ6zb5",
  "key39": "22J3cos4VrSRsFkdnC5cBacTmAC3WYAudxFGd61RNWZw7T2MnLRrQriq1y9GRsvFNqbZP4DPnDsHU6DCgbdWGvcW",
  "key40": "5971j59qTDrE4NHZsPT12TPc79fM3BADLuvD839FFFdYj2akgMTer33M5KogwL9YHfNitqacYFFWRmfzPWPd2Roj",
  "key41": "61FfqzMaZ9zQ8V5XHs3ur6Ywmt2pgRGT53WA637ycvGh32DLksd9R1dGXtKF915SQXMFzJSksKB48U7frxGt13nT",
  "key42": "Wc7vqbwyeLdhV3Az7J9BDj62FNAxftx6s61cfH96yCrLb3KfapwcCTPKkKhZ2EVNyduXK4LWSXgMSm79v5wXaXr"
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
