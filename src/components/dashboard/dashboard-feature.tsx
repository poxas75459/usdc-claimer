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
    "4VmwRNNkoVx7sMx5u7aRBE9QAstGunvKzpTCvsgLCU6RrYvaX8rzFDTHLnyM53bC1vZ2L37p3rk1himnU3RX1Fof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yiY1Dq4SeQLVZrCVt9ndpkfz1JBWQ64ZK2FUVetwYwofU5sFnfpyMkRUQFSt5iceDBfC6UKpGoV4JLsRTsK93Y9",
  "key1": "TUsHupfVcH5bbssDut7C4fsj1JYMc5fcpShGtf2DhvqQ6HuQ5ZMoK8BAWE771UBFGUC5h1HqwDsp3nrQLQKNgci",
  "key2": "4RZ6aWF2Uxq1n3hXo8QaXAKQW9cD6awGRk9Nvcub9oNG1kFPpn4zmwUUdrFr5G2TXwUkkxgXYN4ykCoPC275bDjj",
  "key3": "5dpgFXLpLz32mSM5gwGGGUkxL3jZpMLaT1PBPUn2fRjo8z5PYEPcMJFRYfNcKWqXLyoan8UadeX83ZTP3vQNydzj",
  "key4": "5KobSuAp5PTGfwePWeZfD4KoDJc5jwuTA8SFgiAWSxTG9fC5GJGZCkuvTb4bcwo2N4VkVFox4AQsh5VZsbpSJH8j",
  "key5": "4YjptVzxcoLaGYPsUP6pAfbDc6Qxuzrk4qeE5zVen2RwsfeFYpzgi6M2srJZ9YSA626BEw6XjMxjY17tbBDhyZjm",
  "key6": "2HEE8gwXWy1y1Z1UzCmHHbTK7TEQnQt7HgaJQbUqsdo1QFHTmB4faRhCbUJUsVGsJac5s7AiEEs2ZEKTdbjqK4rw",
  "key7": "3DnS7F93XVpUHZd9Rh17SFmMriQjfbo1NSTDsTyFde3UYgAyB5nsnphZB9yG64sBhBtQKpTGQhcNBzipSmQubXsi",
  "key8": "5jvFrncuN5qcWA9MExu8uqf5eyhbp5q8covYERF8begyhMYR6JAFomi6DmLxYFjrCFkTfsBu43qQUbXQEymcqo4H",
  "key9": "4omq1GwUiZoGCymqZEsrArzwsG6XHWajnE79mCnDMX5j7B9eeiWtRKC6kFpSPYooB42UdzFyXuPXRPWgVk4QtP6s",
  "key10": "wBGwgs2i72PPbn9nisDy4wSUFonpGwtG7iNQCiBp3Rd2GTPcuy2Xj9pvuKEr3FieC6YGU1uZnZprFDzVYti9QZ7",
  "key11": "3MZaUSa6aRN6bQpuTrocxNX9VcWBM7xWHDfLoY5ofvHeuSUkifbi95Pyrzk6Ld9tGCkgHt6yukFcc1g3Y9VzdWrt",
  "key12": "5vCaCnwZfwkqwbALxYKEGaMKToqWcVJk6YuA3gzz4FJQnvQ6m7Fs28W9YLnMHr3hdGQod7xEZzGmMKwvVHKfaoJ5",
  "key13": "4LEEPyto68ZpG2VgFxPuinGKwbTWzC68BuoY1zSCDw97zsi6d4nHCw5YYaWLZnZrZ7CyNhBSrRwpKbV6bmu5M7mi",
  "key14": "3GajPeDnCugaZvBvVSy4hJ1EVwbqB3UnN47mdZVBJWtrEWfiAJnxMiG2Q9NGaDn1J2kFVoiCcMm3f54F6m8Dvtyr",
  "key15": "3k7NZW8ypM9njZiWMPqMxfu8SmiRG6fidLxZMZZFXvNpqSsyiY5siZj1GUGrgVE4v56o23qfmmLVDkuq4P7e7cU6",
  "key16": "4wcmmuBYTSyqEWEFRXFRuap9zw78zLAbBRgWiBQEr8gDypRFKKwmLdtPK1GVEpPRgUTwdZQytottKRkxw3TTEiqC",
  "key17": "2RhkhUzSP5MzrpFt6DZgjDhqWysVVXDGvhsBZyKGdKEzyZ5fHUmnKo5LJXzxiK5E2s9pv1L9rrFVSEL3TLdM9AGv",
  "key18": "V8Cnw8sx9NjWDyXtJBvoFrutCvg4ACqjk98vEJCcsGKPj2VsTe5HdTGu58VR9qjGEYpKZ7QPsnJHLE4pooWT1fZ",
  "key19": "3XamkTnhazKePpQJyRwp9VPYpYkwks1XzEef5hbfZtKf3GDj7M7c7kS4y2zKa7HbvwrBxrL3x8NGTWFAboimKPMx",
  "key20": "4Ab7MH7qG3x4UJa5dQeB6H1FkeisZ8FibyCqaupefb6rAGvaRBibcqNPc9qnqSqxvbcnEkNZjuYprgGXiNx7LLCt",
  "key21": "3S7NDFaUDgbzP7FpaZ7fyha9LMC9H9RbS3SS8zRTQtpBLPqXg1V5mHDMTy4Kok14BQ6mC6gEuFGU3sZpuEae3CPM",
  "key22": "qfKnb8mwkZkwLm6jvhAAWGXeS27vHJJYcjbySkMAWGgDdLEYpPDN9kXVhH4FTqrq8FbzcJF9rtTzujyWBjNCKMW",
  "key23": "bwnKgJFiy49W89Z6VmvZ28BLWfR1h4y1M9d5hMbniUZsgcXihtJPEv4eT5MenVosyjAso5dNbhi1yfgLhQg1bAE",
  "key24": "ewDMvCFbsVXydAAad3pgahEgPEcM8tuKqVFhFzpAdWFQFr4Bf5vuJFXRTLvbXywgjCF7siLV889XnfcwKJMRLfp",
  "key25": "9A6AGXYGXPpemGm5NGvVJrWAcQSxN3ZZqbM8cQHZTnaQZmfz9YRQtgTzHCwCDgQNGxipbQcx47yvAkhYz6VPQjY",
  "key26": "5VD7wUdZ8qT1oDMnsJy6pa2hwis6drQiqFCerNYbZhWXAFhtomrQs5AVYXgKt93BM7RBYdhti3dWkNF4HqFTJax9",
  "key27": "2Pu9Brnj1656gA4dkGwJDriErSE9bi41ViwnmvCfi2scuBmZzNnU4hWvkukoEX2HxmXvXAVFsV1nTx3cn1zpmc3T",
  "key28": "5FZEDrv5GEA79d83NWpSQ2k1uiH8YFD3Zb6h49b1qJqeREj96hXLeMju8hPiNkmJJBBesfVdq4Z9txo1TCWmw9KX",
  "key29": "ULBjgReZDpCrLwzmgp9oNsU9TRpAtgyhXNuPLPJtAZ6JrU62BoA1T3GkF2XoKR5fhMxbMHaAh9sTphXFwhcJVEn",
  "key30": "4ynU1QgFc9BJNuhqbr4xLh3UeT5J9UuTqwNaZwRWk1NMnjRzK7Kng3j5Sdn1pDTa2PQoyKdsqNeSr4bgDkHsLAHx",
  "key31": "57NdB8nC9asMw6uCs4rq1FGgTUueeHW9yqkNgoxfVfwQxi8cm6F2FC3SeJf5k9DwtGyrjR5UMeoov2eQA2vL5fTZ",
  "key32": "3BtWgosQ9fw8FEN7Lmck445ZwjeJJCQu22zrJxnnTfwbj6JwF3cBfbK71pCgNGqy9oqoxmq1kYetK4mkU91pJLox",
  "key33": "6aePpw8Q1wL2S83aju89DQgctZmii8fb7X2r2kqe3iNAemVe4G7wCed849qyM57oyC2c1nAfhJ1XmFPMpVXWhWN",
  "key34": "5nhtuf87A76PABR63183sMz5oNRC13bszejf1YCAoENmvFrNWw7vzSUbbHgD6KMLyS6RRsuMqZkMhZ7Cnq37EiL4",
  "key35": "3kHtVJsXSSsDHCBoXFeGDDC7AVgjrNtNLLgWVyp4x3mgBY2cVxnrbv6tnV2BRqn8aVLruxz4kgu4oPaJ3VP8bB84",
  "key36": "3qJUztyJXaUVHMMtsF5UyLKQpSFhmA2MdDt7MzZTxnggAkDPnBS5DLxAT4g4whAyrLNUkDFkpr1Vuz2iV54pibAe",
  "key37": "JX9CrtzcMNJ9FxN5zKKjQGziYFtDUsKbp1JMnSD2raqj6RnjVhCpLoV7WEu6iVcdCqpvjY2s2BLZSdVrq31PwcL",
  "key38": "2oVMqg4yzVhuzRTkUE5ZBMfbd82rwv5h3kEWA1GVYhZ55raxMy6iddsMuA712VcHa76rknemjfhoDnCF1Y82vJEF",
  "key39": "3vNGcG7BYEKzu1N9PF2XaXxEnFeuk1XEdhrxD6LFhFs85QGragNhXNWpgh4RJ2K5yABfyFPyfSkokFaobcpQ2zGM",
  "key40": "5hCJMYxP4KEvYgq6xXxgJvHwiVWPmfzcvsh9jHxWneDZo4Av6PL6qfhcWUbmuuKSc8GnUbzCUe8CKPRL8DSsnzrz",
  "key41": "8MG7RMAk7vaVNeV9avBW6WuNzns9coNGa5iNTzGcPh8DYbwpKkLfMvAbp2GzmsRKJqwPDas2RyGzZtuWwT7s2TF",
  "key42": "5d54hixCoeGcsZdeWUioZDYWv22C8BWP5WeR8UHwKATW2iYjer5oQ5gQHrg5qpuyb1fGaEwpVURjRZ3CTdAWkyZb",
  "key43": "3fo3cRh8ZkPykGYeNsrctguPJDhivWN2qeCGit12DZx7bfBbek1BA262m2YcomyrESKTnAK4Rakm5XFsh9pjc6wy",
  "key44": "5iJbpXfd5L34fpKSdjajMPYjqw6ShG5TDxYoqpAiZgXG22aJdYfQtZez8NYE4Q47LmXqc1gkCQe2RT1wEeVz64DZ",
  "key45": "6TshBWnNtxt3dvD1NNy5Xk26L7yk8MwwNW6CczxzFkXKLJMejRheftTNgua1pyxLYCPyErwZWmVr1otYpPN35jg",
  "key46": "4q9MhAuiCxEgkbUcCBLpmMc5Rkd2rZ6FtLxFhZqaifUVcQMAtitQu4ANjzYT9DrgRJG5hZcib2JQTf86ZhLyW4T6"
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
