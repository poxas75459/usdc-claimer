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
    "zfdR2vTm9czmCF9bvBEHSnzAYqcvmUnnPEhH9XF3zfcV94qsFLxeZ2dASRo8h9BXdJ4SyKyzvFULd1MoxVk9Azi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wLujJgMZQo6Y1G5RjVChN9HJu4yUjJe218B4Xbk8x4WBJqd1ELT7umFFVE3CjrzSu239mWsUz8KUpCneJ96iYeY",
  "key1": "4GKivZ2EDiWz63XAJWygeFbBiK72FCrqsGZJLdPQwoE8HeSdZnBLVgRm61gL8BaHAhQMJcXgyMcLvrW7DygtEjQ4",
  "key2": "2SuQfWvYbjswZwivZbwFEq6ZeYHxMRi1zzKbnuDYnWjxECUqoa9WMhwcVgeBvu4NhqBBFvv7hcLGx9m2om4nqAt",
  "key3": "ZbCRXYLcUurz2E9rTvz1UMUdW9tii47RgARGswqUzqFzYWVQEz4dPh2QCiiMfwGY15sa512hrUgkbvzL4C8hm9S",
  "key4": "2v9ePhsZATvkbGDMR1zStMRnCt4oMHnx3bxavtEMbwpk232JyiBP7SnD9Y8qSywVhktHcU28o6EeqzySSNYsw7QG",
  "key5": "uopZxyLH8BwzXi9j2UunRkA75jTghD26Sr3YyD3SKu3pPLhiMWU6fXzAusiyvCY8vxmEMMuUqfcj8YydnVmfMS2",
  "key6": "66zm3F2fme28hxsL83YdKusSFSsFe52JVykfVSSeD7hWoCvvRaDYHnqUoH5Ef932PwjKcA42Hd7hv5zK5m7efn6x",
  "key7": "zSpvVY8fUj4AeeqPXtH6rcDs4dn53GezbewBQSfVVFan7kS1mYouBp11bF1iBZwS59CfLxHnpfCTRZHpwQfp3nU",
  "key8": "58RPkmwxM334kn6AeJEKRzNsZz2Kti21XwZXAiApSStczQpgPtKNhwPbpWPLaSt1AvMcSTwmfm8feMCkjb9WHaAo",
  "key9": "2uQvYS1Kt7UG4K4aTXtoL8jxBtUNVTY9eSjPBhyRh6pQrQ28yJMf8HBfdMcmyHyuEHSY2JRTXNrQMTWpHmpmX3TQ",
  "key10": "2jwmxApDtjmarb5MQvrwqPueAw4tb3vvwRa9PzWMqWEHRufk1ZLj6Y1K789VfaJfeVLWCicMVzmDpqbuLqXECo3x",
  "key11": "67KrHzu4yqUcowqaAAAv19SXHn5GfafRHe2aUGCud1JY7WgmkEMK6BEpHErSLPtuXkF5nyYaQdGhm8xeej46iGix",
  "key12": "5q8xAtxRYaE6CE1QTsnxzhNk973kdzbNEDyMea8p29NKPgTUXvgRZHwFRp5zuWawwa4bKpR94WkgvJzkSbbbKms",
  "key13": "5xDHx2VQ97nmjXGANE3qhNUziU513Te4V5BKjZQQVW3cz8QnjQh7SvbnYrvYYVArqUaddq8qfkDJsXMT3hYHdfyd",
  "key14": "RLkoMemimNPo1nLe6XXyT27akPJBVr6nJzyWM4aiVLYz3KYyBv1pDnZKwqVjwXvbrtBnSABCEqR2NXxLj7Ht1ZY",
  "key15": "5quUq6UiUicv62FX6tRNx7tCHVhyH5NkGNAZrD73NdAJHe7KVXAd9vnpEQjm4Q8eJjRh7deXYFvvbftpSbhARWja",
  "key16": "TYVPwPB4btx7QEh7ciU8deHhCTPBfQ9SVFUwyXdWP1ZgTjFhFLjEyPYnxRyPBTF6hWpHVzXwdXT8dJ8YiAUa6dM",
  "key17": "Z5ujUVFrX69Thkebryxqgn957VAKkk86EiATZhgywva4Hd47aj6NriW1edNCHTZxseZvW6QdUoPewejotENqN2G",
  "key18": "57cC4MNq6GrcJmvRo3FwfxzPW8GWPLG4GkChXXncEjV3Ug8PWagPZ6ELK2aPiqAS14n22iYwVQRTWK618Z4e7S3U",
  "key19": "4mLxR6FAPLQoekpVndHJ6YUM76FKoXEVqYdycbgq6Jwzj6oNWBJRkzSM3w9DfE3JTfdDa8N95AYp4qx8Bj2Ei3a6",
  "key20": "5hGFG7qfE6gGwKuqWPE75Y3EDEJYmWGQd7BFFA8Qun2nvCXNVvodip4q9F11SWpaWasik567e62SqKi8NCiu252j",
  "key21": "3PryK9qfiGh7MVUT8qgK5fbfrhe973TuUjDdszUr6rmyos6PVnC6QsgCFq9ToTL6VwDyi78wtCPJigXuBkaMPHXc",
  "key22": "53eQ11E6txM3JXuMghVL4cvqhSKjY7GGWCNg7t6ex1B51YbCHgYvgZafMZLryMVkbjiAmnPKLHiiCWFz7vSUx2Nm",
  "key23": "5wpwWWXZxYrY5AyeHEFmsS8c5diHD7ffZy73H16t3UQ9amMc1WkyRotrGTQuneFbEvbKGpUeMDxJ2sG754AEtVV3",
  "key24": "64SeM5UvccTYyViFtjVLnQ1stCVE9MSEgvgdfTTB12aiJFujaW1zYpHMd3gVZi817UrLTEE94S8MEZmG1FhqUut",
  "key25": "2CqeuTL8La8ZkXwxTFKbeVLLCD4ern6W1r2VTK1vZ9TpN4EbtJBfKUo1MoFiuoJBnhFbaU5beumxyouHG7AETKW2",
  "key26": "3U8FHkUWKYanbBYxnRe5UKqJpAgDAkuymPLHLZNFYXzAFYkecmpLC4BTqgtbPou3RRe8erNL7gCLj73MvndFWFPn",
  "key27": "2XJCSRYz54dHMsr6bokjx6dW8GPa4p6Qm8bSj3VntRmAZ1kogcQBXvDta54Q1f4XrREAyWmoH6DZC7cXPnXfxSZq",
  "key28": "2PffmmGFeLngHMkHasKutvT8sMEh6zcKHVaA9yeWTEY1RMCsBB7Et5RAZaXCh8tbDEHoRSzRQagkSxuqQdiXvZWL",
  "key29": "5BSBVagrBrZqJRwqWUBwe7oEiMdZcbXwB7EsXU5egH3UUwt1Ju8BD2zJo6aUYuwWzMLyUqzoKGZSsM7fW17cbNjT",
  "key30": "3LDNhokaRwxkHXtFjyxbkZow7pawQmvnnkSx4czG6ghf1JiHtJoKkbprn9WEjz4gzLgi9bywprcgHWWJGC1G4duX",
  "key31": "3aYpSebXjgaUw4TJkQ5eUJ2AzSLTc8amk26WHagRsJkqAQaD17xHe9Bc5wMdteWRg7xaJZNETgtdWk77Deb2JdUC",
  "key32": "4V3MSehuvCC8QY7kThuAL4N4yvMMWbkfnRzYwp1mq8V4QbG2DZBZ5LuHoQyJYooYNij4rJUt2hoDo5DnXqrNnXb3",
  "key33": "3kn5pN39BZ89KnU5bXC48hohakfLZnz3B7v36vCzd1HQu6Xp78wh2vSaMKKe1dLtXFrdKWmXUUstnA5fCFtfmbi7",
  "key34": "26cUsYYxXRMRcvkBvjZ1GcYhADbEnaJPZPqFKVGQkRymep9LJCxiBuEYU17opVRDLUkpDMnDBGXpDwRefP9e7pkS",
  "key35": "59RdY1123PhTTRdcbTPPUFG17QfFiPkMm8qnM1f76TR1eGyXcACxz2nvvPVxjX5Xd2kihEJ7Amqq7vpmLYxNzryn",
  "key36": "5zdRJW5M657YdPB5sqWbnPn7F2pbNQ3m2ktRqvFsLrfEgGhs46QsNebDAYBRL7iXu5d9tg6mEt331XJAec4BqyRT",
  "key37": "45vSoQ3UXfben1Yop4kyVG8KCEFA69msDUK4JLqnAgJf8Z5ttUzsgh4ppJeaa2VjHQRiARqSBaTA6x5YDFXBssnP",
  "key38": "4Mznjp34LxQHiMna6k5m1KsEXxCr6YYSnBUNRgj82N8M7EvQWvEpjVnbxv3NFjCJi6ukALs6PCG5EDKSCFjE6yow",
  "key39": "5AEzHLooNc2YGBSzNJmai2gNR8B9BDLV5kKLQaq2H948SUmgUxMTMq4vrhSxpukqhnHDZf9yVqLQXfnRnRP8KQDG",
  "key40": "2P9WuqrVnTpQDPtRj9PRLTMtndEXbrme6aDFhqqEvyMCXRusGqkxWEYqQzdcvmmQGGTJeYtULah6HfrpWvm9TW71",
  "key41": "5ie5hL4zPXboLFfQB4jmoAz4RPgTQd8owLK76HKnU5V8F8VSLV4aN53XEop2VbDyvatX7bzD6ajNMLLMWD2kM7vs",
  "key42": "3YMpuZrVDe3Re3GmtBn9X62umGmrdAJqvw5R34MKUiK19tamLRa73UDzPja3Ejh9oEoHXfAHCfCCqVMVAPeaWAXt",
  "key43": "4x6ERERtL3w1qEDgbGehsWMrwenRszr24FLAHEnNGEhNS5GyYa5TNnZUUZawizK687Yns1v6QiDXhDr6M5Ci4NND",
  "key44": "3xjhCye2xn8QjLMazFdQusZbMrRynu18aHfu2V3u2cGxCz3XUNu9Ejtvvf7mbXS5WaERFUfRweroaBSyN9UDojmy",
  "key45": "ikwaGQeYfD1dCYdw58W89DKtma3HFVYmxutLguikfMrhWvXAoZVeFzxbzMMduHk1tgUSkxMc7h8LgXfxr4spRAE",
  "key46": "YvSzXDkgFRsS584Hqsyxa7ttDThdAS3f6d7fJfigcxfoDDAe128ECZxHxgQmWknMg9eXwqHC5UKUmV5C3hHdqmK",
  "key47": "jU8PKKHBpbQQXEN6LdmKFuFuTdaWiS5o5L8ynvcYGgqby6CabkcfknkeTHYUtHk7kFTEEqerD1SgiWYD3fHuuVK",
  "key48": "2jZ7pS2KGs13JkPvNfnr7uHW5kozLQCQSQcNvFnez2SThb3f3bV3bN4vXdrAjq7Fxa6aek2ykWDsZ4vDYU3v5NCf",
  "key49": "54QTMrvadFiPhWRLB9VMbyWjc1nXubXsN6qFomwXUy25YJS1gZsvsdSzvb2BwiQcu5mDLX4R4qzTSFjaoSyTrBRf"
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
