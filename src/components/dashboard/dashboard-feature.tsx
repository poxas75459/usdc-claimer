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
    "rLDW5xTgX4JWBsPwLiaZE2NDBywnJnKRzTGd8f5v2wJhudZgep73vvdBPhZpLQxSLDsq8Uj8c5ERLRo8jQic9BH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J3zZ8VBjdaaixxfu28n1SAKGQ4aZL8N89Ve5pp2W1zJZspnjiBb1qRon5TRNCTz5CGHw2cMYbzE9DMzzwqPJae5",
  "key1": "3w8npMspWGixC4HC8xP2RvWYLBSbVNGnBmUjbD8MUdPHQxh9v9nMByrNiJysYR4HmPLLe2vk1Pt57f1dWwtfh4q5",
  "key2": "NE7MZGFJW2u2TEMa8dJ6kCZpTxJMvd9uME9HRwa1YiVzFxGos7j4vTx551EHJB9pJ3qjaNVZD6JcBgfAVWWb7Pd",
  "key3": "2e8TMM8P5y5qHMnBqXNPzJMawWFEQ8MyKg6Hg2t7EYMeMMAhdyc4iPynp6fUTmgCwY2aM27YCvgncuTw1rGLoJqE",
  "key4": "3paJbkzk8mip9VKsoj4axSMxzXw6Ls3hVMVbbDcxn437k3STCLgzu3U9tRgo7vr45ALMAp7HnmiKHxbGmKhnrV5n",
  "key5": "4tkTSsN199rJ1St4tCYpcHuWaaUC2PYBAXcxaVQ2AqqwDRBS8vdh5HmaAuwxkgsCUbBuKidowNvUCNnQde9gFziA",
  "key6": "3pFoKpwhd4yTWbegDTSs3faLzehZ7tfML4c5xxzAVMwc55Hyd9g4GUQjxcWZxkjsgsAZ5AGshP5TBJntjNDzkV26",
  "key7": "3mzvtTE9raVK7BWE3qrfj4n8eX19sKhpnnUxYoZ7tdATZVLcbsZQ3Pk5nA9xFr7XTef9EZmuij4Q99tC7w8WYuRm",
  "key8": "2qauZKdUENCZwdHVTVxh7HnU2BYskRPzCy7zm8azmSHsWCyHWynYfYbhwSEwfW8eoeesD91yvYMAV3VKXFduhx8X",
  "key9": "54FRtXVKZXxRn5SxP242xAo3dLYw952CLx4BS42goXC5gbRCfcKr6PhX5feynGcF7NQJDBY1x3XxMWm6kGZ31ZTv",
  "key10": "3JK1N4M1YTAmSwvpitWF4cND6imuTmTGHgPsAWNhiHmAs99vRqHrsv5WKw8wXreHaZY9Y2RzReYE1FqJkoffr8Yi",
  "key11": "5eoPCBqGJxKZWfENU7xevwACpEh6LUi4TgBpQEtkQvyK7N2uDKXAiUsTLRi7ya66mQzw4sx3VgiMxCgLPq9ZJoWd",
  "key12": "3VtqaAniMPaHgLATxGMTNNbhZK4wvSo3uqHW21MmCp8FZo2kJkgYVPDzC3KJ2A2bs3cQSJDZVNZ3HVSK4AbCcseo",
  "key13": "3dRTt64PRA5Ju5XKNU7tR9Tdi1tnCzFx1LZYJ3xfm9Qp6VqeLwFdBYccoA74FdnRmVknr9RHHbjEMCuoBQQ9EqGC",
  "key14": "4yenQYcopV8GocmRs9vyvB5gVmwxAPgrexzDEFVNwqbxn2xEJaZPyLAmSX2r6ibC31RPNkXiU9En5eFb5BT9dzmN",
  "key15": "aFEn4rH9Lv6aW1m9XZAk3oH7w5GvumR5xoNsSvjkoFYfM2WHxWybs8xVTgew1d2dbXGKADFePt1dq14fDtZVeWC",
  "key16": "4yUexZHDzuBoocSj5aXMXTV7gGrEKGBVQ8B2vvU1n7zihxTzRy2t2GFxfwAt6Kh3JqveMZ3Yhzn2zhM3broSP7pK",
  "key17": "acRwfiWqQXmXoQQXNoPRcrSWiuqFY7nGRKheAL7YaonNzk8ryChupvXME5tqyYTsAMP37q2jAi4tEBHuXjSmAPF",
  "key18": "3MhWHqwLvBuksS5CBpAu5j4GicW3mhRQfRujFMrGjUNqdtT9CqFuGm34HfPcaSW7UNpGcSZPRpztyvGYKvxjgWs2",
  "key19": "C3BAnaKCsxVQVU94H4Y7osKbJucW1kLCGdUTECu44jnG6k9qbe5xS9nAMpQfConydco2ZHKTXx6k1D9r3MEm4y1",
  "key20": "2bcRUX8SqRF5xnhEfDprXF9fFQxsmuf72VKhriGYNMExWHRqtiQXiCmQ8Z8Se5NW4m3VGvVJVsNwP3CQ9jms3jXd",
  "key21": "2c8baaRKnYEaRkX2WeqDXwcvXgT7bRKDWUXoFUcxtqM4ik1cv4T5SkfJPByT4KrwKjBNMXe7Vajxr9WoYHqSKkey",
  "key22": "uuhAKjkbZLs1muCCFg6Hxm9gd5biwCEUNf5P4UmBRLjGk6vP7oku1eX2nSmg1q9UvD5BD4JsP3hTB2FzhRLymW8",
  "key23": "3CaWxaDCkhwBxyA4j5nx4tnZ9hSt7bkWSxHsVuGdQvW8FaAcjzq3vCWfyKLRfz4jNSy8tYpxPihHmNVZxvdDfXbZ",
  "key24": "L32Qdqnb23woaAiBZGncKaK58RVRGs115PToQwR6GqZoMJ4puBzAVSDqxKYdq8Gm4vU2aj4er1CD4LWD4ePcuBn",
  "key25": "3MAN8SNQ8yH3SRr2DdHSGao2ovfHK7sWD4FKhrQKbu8EVaGTUW4iZw5xnnMi9gJzoKXy5ftW8sx52dZfKSRJSvGr",
  "key26": "4FDGUBvqYjEK78x1oy33WTV4EHAmtz6csZpRwSPEDqh5x3EwKaJ8T7rvsn677L1x19nonMHyEZ8hANafB9yfcM7d",
  "key27": "39mjrF52SD3dcMvSW52sFSacpUAtxgityZQ14kUAe8W8bKkfoB4wg7kMmbHqgQWmLgGFuJBRpHbd29VkUMZrHZ7j",
  "key28": "VvpRu9VwBQBHVrQq7ujXQ32xkW6gShe8anTZVBmuPNohhs2DXuFFSsQSZNrHrPPom2dhjjiVp9y67m5PWJmXHEn",
  "key29": "2zDJnrkjWLK5CnsdCTBZ3b2FVYNP4D48JBrDe4wn9hx52aLXDHiyAXsPDF8zKczeYrrdbFuk2Gcp8Q2vgp96Vgpn",
  "key30": "4uq62tDs3LFdmFC7YUoe1kiXBwCSzupXZDSdDNaDftgApAojCa8W13B5wW8DYFhqWtueLo9LqQNHXg6FjGaDFiV8",
  "key31": "2377yyeWbFg1KGPiFp3EM7PiFNG86t6Yx7eJCqbTfUmxf1o3B4PHt1hajv8a4tuAZS9oY4KtVp3aTjEmYJjxmXZD",
  "key32": "5kGryN7nhu2Ed5yCBhcfciwiyHrJtZeDjMTu1JdwRXKv5DmMSWqAWfKXqZzYW5M674jRLuujELjcq3yER7iGZHUQ",
  "key33": "5egES3KMCSpU8aXcLibaQxdLucHxTMHvudDzaBS24noDggBSx5tSEKYqN3wUPn6hQNfNdGcJeVtqtZCvpct4DSp5",
  "key34": "3Cgexc8kJ3zbhCm38UQD1FkDgZxryxtUuBD29RK82T5AEichxsgVqmmiQLwQfrkdkGyQ9Ht7Xmvx8dpWYwRBjDx4",
  "key35": "q6mM6JrMBM648nw4BawPjTxbUtYjidVCW674Gdt9onAoo3FeTFiSXctfFHjnNDoc58tWcYoeqBEPZDGKYmXPnjT",
  "key36": "ERExVbP6cHKeBaXZkPvyBTzAx7wcQTKg53BAu4vKKReAPqqMydK8ooC7BFkdbxdj2etdVD9LnVpguQ4VKsPhW1v",
  "key37": "67G48FoDQnBMCVjXbSuy5n1e4nSD2qvQLUWE44D3DdoifKKx8ebWL4PSGAPWs5X356uAgosZRT7fWfJx1oiBDaM8",
  "key38": "5aqhGi4GGtQFeHrtkbnFJ3bCLWJggDNbep6BcytPTGQb3sDnCTpKqc8ar7nEAVLFMRExe21pxFHfu7gkAfZKgKxN",
  "key39": "4sJB79BLgzkxo4eJoE8NYZ4PtJaKoCbqkUawj7y3U38vvwkJRFYJHHSJyh82Vx7rUQgRHnxYJw2ooCCzypycypg1",
  "key40": "3Q69kgVRgR2YCPe4ft1v4ZddpoHH4WGzP6jUk1W7pSA3fAfM4NozT8eKkDMkumcPfXjrEHNgJ86FwXLef71xbPSW",
  "key41": "4awyZApdNhJ4oGCk8UrJ8aLFi9EkJpymASV6unrM8poo1yfy9CCZGnNXw41YVoeJoCHn2YMpETKqNXCQDiw6Ghpy",
  "key42": "3ZUSJeZnEx3xzFvy2YbDbMGzHurk13owU2PmwHfn31uzNCnSeqomjprEdoguwJ1HTiVUeoeCaqhuVxmumBhjX6Kq",
  "key43": "4W8LDKLWsYQcyPjPspkLUcXxwKs5vgfJ5zJEVLkyTDJJy4htE6UGpjHZAkXg4Le9Ptg5A2GfubqzdRQEbBUhUUPK",
  "key44": "5qncBM76ruV2JaVZVna2VrDe3i3QqdkipwEY1wkMxr4S5iNQkbCpzqjKv5kH89jqxaxXJ6cYU6QHtmvkqWYv8SiF",
  "key45": "5bygsFtMwo4Kcs6piuRtt22zQyNNvzdwTLPpWBn6sWop8g3fUpsRGwJfJ5kmwe8jSKPvfHJY71HYVkhTRBnDFUKV",
  "key46": "ZKgUAvPgdToPtLXdbGTK8h6dvho9MpcqA4dSjTmDYr5uXmtjqWe67FZSxAQhMmQGXagJ66rjizE5QrnGiwc84Cq"
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
