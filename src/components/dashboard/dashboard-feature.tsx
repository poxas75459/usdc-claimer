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
    "2DyEeW3rLdvVCFnKQkd5QNv8PHu8pH5cocfrJvQyP29vNV5XUd2btNdfNn3wmB1bLWkzd3n4BR3SgC1VQqYi6Lf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SigqJLAPdMqNHxNxekS6iChfvVrgacErjd7weeuJJaE21xU2CfKEY5zyJpwiLAVpA5jo5Rk4oTByCz2t7JWKS9M",
  "key1": "2ZJpsd4rzaKzGPM5FLonNPacMM1ZiNNtvq4z4be1pip8CaN5g7kySFQvAq2zU5PQ7vPBz8Jmz2ehBknogwqpx597",
  "key2": "M5DwE2nczBnRgWL9wZkoMBPHrLvCxJmhWL7D6aGuMJywso3u7A6WQhdJkwNAQNhCGzhyGXnTx4tZmXkRR59pwDU",
  "key3": "3oaDuTrGBwbv3VYjdcwQotsqPscZkkAc2S9Ae7HhD6RPAiJGWrKu3NQ95VsKp7hU7MYuRu4FiWDxcPA5YQMtwi4S",
  "key4": "2CUhQteFFhqXYYpGr4cKeNyXtkaog9pacKuqdiU4saY4rniJU5ZLBPywS1jhdXVk6Q8QwfR489r8outrg6NkQJPr",
  "key5": "4XnJNwcVjzGDPUYktv8ZNdQRi6binYYRV6FNFDyrw5DoEEB3RnqLLE9PeS14761d4mYd6K51f5aiHSxRAkqdVTP8",
  "key6": "4vPotCCUTum73Mb1mNHK7MXTosYrYMmjcg9qHeHRJvVi38DMnFbXunoSmXEY38aAJ4PyAfsbvoZgTA5pj3KkmShd",
  "key7": "qZx8X3vLbHRuc7B6yW6rYjkoxxXiGLWyrXTUcrScors86ya48rDB57t8AmjDJ8snBCPCx7ctqGtxui9tVLo7Bdk",
  "key8": "4gUj1fArmZ62qUbuLmD1dtsULABv7w9ucZZFEZ13wbZGUaKH4PAMqBYTp4uy4UJA96C3gDyoCfj7dDbHUXqMzH9W",
  "key9": "4ASzBzwzdmSrqisCVWwGwfbGLvfswEKUsfhqN71uJaudvFNxUvY7nZBu9cVrWzNS21Q93zudFB46FuyUhxCuwK94",
  "key10": "58xJWMowyQitCkYTqFyNuZLo5QhkZfGE6539PrnFAasU6oLrw9uVrcKvgnnDLmcNxtWWy9hiBRjUWpZse6o5g1JB",
  "key11": "5jHDDmGNwFuRuv7Pv3XBJQDHvC8jGjRTQkHPp21CfHn95jz18QAwATWqu3FiXyvikd3hsUHdEyQTV7WVQ6txkEoe",
  "key12": "5J4uZqHQxria4iwATw8isifNGQebsae2aQnpPMVmEmcuXcGPMj2H3aZdz7wmn3gWUK4Z9oonDsDkeeMxCqKte97t",
  "key13": "2eX3EGC2GXeGupcVqYwPksycKNtU9QKHmrk4GuajhmCUfAiaUpnXZsoZj8baH97qQuUT7eYBr9G9jqgmFsFAwavQ",
  "key14": "9KzQtwR4K3GnEDnCzTcQ5V8A453EizBX9iBCXxw4at3hTeR7G9Xg6YVe36xWpHTRxDPUf6yPyNPY3zFeumeKcZv",
  "key15": "Nf9GfL8VrQruXL2QUmmzjyT7Yk79v8F1ru9ePcZ8ErHtvVdc7rWAH6K3tgQp5s7JnwundFW3FjmyhNV3AF8ya2V",
  "key16": "zh1ZKN6dwzbPMycmzWRnoSwS9izanrH3bk4GZsKXQsQLAzZcYayaiY1XYyZeZzeLFY7CB6XfAsnhSxaDBMzqBNf",
  "key17": "5gsQbT8B2EtoWun3ZzMAza7QGZXvahe9SSrFwECAEGs2Ga1FHWeQXgnGoMKoyJ4DPWgkm9DpEP4fEfuezMgASwtp",
  "key18": "2X2dANDtoBD5tFv7qmrva3VAeJhZDKU5NpZVaNAzC8L7PTHxes5Su4VpiQk1mdYJsYGpSAnVAZaqYcnVNXqq8rhN",
  "key19": "3q51ry7wsJTunQXCEcZmWN2ETszTLHrEuqZDhZ2SabcnX2gqmPAPq1JakHskU67zpxUuQu3kgLUUDAkPue4Ku15R",
  "key20": "2riAAFyESDkxhYng8MR4C8T9Z4BN75aeeK6t33M7KRuuLDjJpZMvNobrD8Yvb7XMCk26a73bUVGRc2773vAuGbos",
  "key21": "4sUojD5HeTvEyPSTHFRUh57Qrt32fyF1qGzF1jxKLUXmxGviE3bqdaX9d2Mk7pCmGBPPKceq6qLziLWgwYiRLKkU",
  "key22": "29PPVYUNTdxeevSw6HUdni7Dcxnkojpa9BqVYRvEgN891ycmtN8rtYYZyWynW7xqoMFgreo18cBUNT216Q8VceqJ",
  "key23": "4nwPqmZoGtWrD5tY7yQTf7568BMzcJbGkwP9MrExiLFGF2Nw4xfcofwHS8jfncumFr3rDghxnWsLEa7C1jpTWU9m",
  "key24": "2tKQprCsP6deDfCGguo54exWCG8vM64UUC5shF9WKYWA28qRun1CXcbJRYakjCyn4C9eU2CxNm5wxq63HjWZYhzK",
  "key25": "3N6dLjroJBKnuhJEqLHHpfbvanwTbTVMbDr4YUaQrhxScxixsvKHTYidsXn1LaFYtQ1N1AK1ipFqvvz4ZQRaydP3",
  "key26": "28j5YwNr1sHK3zo5ktXg8KStWC7919fV8wM8oZuzvbLaxtbBejfGLU4Z5m7gQqRXBXTkwr199RRDjxx26Eareniq",
  "key27": "3xL2Up28hwNSBeaJxQ315xCP2FMCabKVUHgdUudkzjGvT9SrzdyucS4ifUPuyS48LF7zr4sWiUa9ZPppdzP8aLGR",
  "key28": "55BvnD4xqwbqaapckQx1qAPqPv3FmGDWrYTZ9iJg3jg4Nx9xSBEF6CS66hka4Y6hJqA4vxdgmY6ZbYE399m13Rjo",
  "key29": "2ZwNMGKwYUsupJ99hMiSidJNPMKZ8uVb4KF1C9pDsVpU1zGs5uyAGcJvYvy1GoRpiJVKNafGX27b6qLVQaFb175u",
  "key30": "zvH9fTSYSHfvWko4ktBFpktXZLJynSYowTNxtSYn6aQ4zNdBEHM5wAvYinxNdsRuGPPZzRBorN2i3dix4PUY6VQ",
  "key31": "5tiHGSs5nd5wCKhVzQAE487nMmt6UGqMkcVAc9dzqDvW3a2BwZcP4f2mBxSFQEXYwkx14LYBsucCamGBumuQ3oQh",
  "key32": "3CQ5kWyGbtqxTi7mtDDXPM5wRnGwKuXdKLgq7aYZuDAYbiafj4t6byi4Gv8SaUN1J2XTCe5iEMigsfwQx97YZu8o",
  "key33": "3Mspr1WfcJCmS3NyEZKFuiMU25hYEy5PtyYufNvcvkq1CYWDReZwvDoKuG7aE9QiLNBu8ZK6chWUSBXGi7yAYHY6",
  "key34": "nYGoxWEEfwNqFBw1SKFuGfx7KbmHdMj3dNWkEjfCnRUfQP3ECnVaf6V15w35L7CrSHBfR1wMgb5UFVvQvC4BkmC",
  "key35": "4Zg27VGCHCgs113peWb2crNcYZrM1nGntaobPmew6u3B8RYiCgftL9bvdsu7RtpdJXp7w1Nznsa5JFnYKadkp819",
  "key36": "2UELdCmUPZqNxwpZGanEisr8PHkSngtYvd8nsy9KPZZVhiGNuPUbfRprCnwyjDeLQAzEQi69yPiMa3p2uYd2LXFJ",
  "key37": "4HYrCk7j1R7SKencRhvXidhX3EDeewfE9KUffKQC7qRkWFX5Egcogc52FjavAx8PXUJHjPB1u4SBLWaje2XsSL6x"
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
