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
    "2WAAU374ipBniXFZCUJHekAEWcRrgj9F7hVYGCnem2rGebJcg5uremUAHnQcYu4fUj4FaR5yjYBzdiTvxX7XA8uo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CRJe4QMtjHApUTELKvfABae4Dp2h2cX4oX5nKnGA5xe6hE1fSEkpey7wMg77V4S2Dv8PW7YmDxhTXKqfqoHkod8",
  "key1": "4khMCkc3NGbkk9ieFQxG4GzV8AALLZmegGfnpQJrFztrPen5HUrpyAaupKYiT421RQFpk53hCNj2rBU3oYtQ4RUr",
  "key2": "xjeEeLdcBfcf1sWYs7b1BhC1rgs7WjJnXbhcpq9dBwy1XdnBxjsWnVJWd88QQVAtrHJXhsEegv4MmEytaMYGWVN",
  "key3": "3VZdu74kRL69Ytp7mq8Dq61JAWQ4cuFQ4gvDbRRdt9x4CBpYK6QGCai6kuTAb64XwVxRLWcNe36mntcyeG4F5nbT",
  "key4": "5ue9yp7uFuY2PqP5BV4amCZQH8WAtEhN3FAccxWuJpivc8a2tHz4MyyZTuN2MSU9ALpg3KbzohgpwXudJmaUuJP1",
  "key5": "exkgu2F41xxeJP7cNHQobqrEUpJcchc4ESLjATgttq6dXR9bdRnSn4KrcHzTnvyXFTyf8XFCTPHr7jvrDCyJNvi",
  "key6": "a7S3NxLLTe38Kso5qAvXi8nAF1hTnkKu68V7DAe5TJuYfsPiDgQ57RkFi5mzq31TSxgvCJLU8SMsczjwBqp2DSY",
  "key7": "5fTFgESmfbYEMSFJmdBhWmfkmRp7ctR6cAz8h8a719VcZaMYcEoa9PhUTknKVRyWyZKCr1ZckktmmwQt6ttCVufu",
  "key8": "2dnsQw35E5qW91PFfJmGc4qXhPhnAWEimkV2bexWrprybQo63PJYAd5PrXjHRFzYhPvb88Bs4doXxu4o1sQXpqcp",
  "key9": "2QWVvFNGEE9kFK87WLzm8DXuh6sRfUrEK4WHVxKQPGSwFj2pCLdLVjGT4EWENgtxjuUj7M1dPz6NDxPxc8JyBmyV",
  "key10": "4KDHLB22Le1memR4kedqk8DcQxkRxUGb4zQy76vvopcdgUZzc892bGyEPgdevHFxTnzU7gbW77kipaYaT5G35C2A",
  "key11": "3bevz5RYHHwCn5fA9FHiuVCQBePzPbrCDV9wtYp34oxd58MmjqXK2aMFn2LiivQMDAyDpTiDKzsr6DhEVrUmx8kV",
  "key12": "3UCA5M3oRQdgoXieu5q2WRJeotPjWxN8hNLoA9NQjbdzkSUA9scDFiZmdSivio32mLKSjeFG7JsQYWtSvJd8ccaL",
  "key13": "2HMSWN6fFvL3GcVRbPJwqYU5zHFKZ19Wkxj72mZijo8EbYkiK1xqWJ1u29V48zqFoQeomeUfqSxYk9CQcahiYPzi",
  "key14": "5vQxMqXc7tTU2DRJG7NoDTV7me6iEtQMYRfUAJaLmNAgHJVtGQsW33CLqKhVfcmfYhksng9AWNVfoo8oAmVG6ENk",
  "key15": "4D9s5aEVgz2XDshGp7wqcvsUK3j5mpnmr3tCWSoFy8XDabx5kaoeuiRgLD3QVnSgLVU4zeV4Wq3Cy66bqSh8CBNs",
  "key16": "4WDwKC6wNib5cEfmRCaByKRECvBLic7Nnvqjyp7okUWJ6afAf2QzsTwLs9xBh3a3roEmwG3HwdHPWjfZBK59go37",
  "key17": "2ebp6vrtxPEWGgNbYDRQV445WDDnVxmtTNaBbwwtkZm45uYcZuzX5T4iZJcyURJZcLZ8N2iDY3eJQv3HnQyPC9zW",
  "key18": "67LGtNVoFqKuoQkf4euS95tQe625y2gsQKjrrmY1iNgQaYb2U347vtzco8WCnSHrb6a1Lh4Why7b27dpn6Jzjxdy",
  "key19": "ECCF7kync5AdaNkCwi1sXe1Yrrr31NjKUcJHftopxBmSMZ4mDBB7psHZs24Cxq5ASepEuiwTG17p8ufsSfbQ3GY",
  "key20": "5jguP16dcbxozXCzzfbumgge5H7pkAY47rhDWpPjEFSeRnQQo3hobZjSvGLWqPia7Wz7A4ocz3SBCTZDYnmVX7Ta",
  "key21": "3bK2MzJxXonq31JcLzpVHnQ4gMR4yeiqpN57KPTchhXwTpKo1PSxmQj4hXsxmrRHmtfby8BokRJ8S2grhL2h7QjE",
  "key22": "33KXbxgxY1qQssqxtE45Q6AejvjVZyZXTrdzug2VjueVXtKGx8z3BZjR8n1fYKnyrujyWFLyKgRZRGh7oFHssSRa",
  "key23": "4GFLwr9FLVqG4gd1DeBAaRNXvNMe2Lk1bkm5HFCsz45i18NCLYP6oqXHWnjjHh4RFDbnK2YBHvmbfG91CBAAPVEZ",
  "key24": "5rudDoH9hLxE13EphKsnUy8yKrX8MwztU4A2bKGniZfftk2f66kVxeYc41EQDCdg2NYQMvo4jWXkPa9Aj2ewQS4L",
  "key25": "3HgcQ1H3tFtyLxpsMrKvU7AbS7zA5rkdd9gWf19CyTwxYdwQf5sX3GDtb3VppkhdY1Veh2zULC9KP6nTNZkMDt99",
  "key26": "4MaSbaCwMdYHTk66KhqmEqmVkGGFm3AiAVRxQ1EEfkDQjBPGYQ49oCK3PJ2yAfEDqK8Yj7CfDAveMsZz77RBWd3R",
  "key27": "41gzruNbMhVFoVXGDfteYid4H6ND5stkGg8v7zX1gMoLPYuL7itsz8wHkPrDJiAArFvJJqNUAkhwRFR3Gxmdu21q",
  "key28": "5YCesa4hrG4uvc3WoE5HaWJw98r3DAokRB5K8GESXYV2ZZyjkeFtbUKt6fLtUPjM76NnbuCLUDxdwEP6hFVrKrMT",
  "key29": "2qHjQzDzZuxPExWo2WdPDJZCEzfcA6AqxcrbF6nszDkaiqaZhuP257tFzRZG8KJvaJ3cSsid7GZkbSrSvo1rYEny",
  "key30": "2GswMy4FqAoVvAXwiAK97s8cANSMq5B33KhQwamGgryJGbLeYNcJMAG44nPu3Vr9vpyn53CygxQwKsFthn9upMoE",
  "key31": "gSWPqfi1vCPdnxhTZJ32Q1HLyAnHjSBFka4PWKuodhx5Y8ZNsJWG63H8MjCqLgG3cb6tjzdDz5BqQBDS6jY26g1",
  "key32": "QR9n9H5KCLC339j7mntF2ds6SvqKniaMK8E47txJvPc4UwGXoLftZVPuDFYuqGvi7UCE2FiFjzbFcMjekmX34Qq",
  "key33": "2hyBDUTLXUPfnhhEDxPa6AyX6Kjxns5dqnYcJvokgMWdWKQQuEvugK5cURQEYNL8aWJgvkjVK9Fw2W6vYcyrYN5y",
  "key34": "2SMvcuNgjh1hHBSmd4RmmAYJE22YVM71tcVyY1WKWtqcxN9F4KKFqZkKy2dx2uG41Hktjg7z283zx4S7kHW5Pmc9",
  "key35": "3MN1v2jHUKu2RgDMLN561kkdUKLTxoE967jwBrKQhDFeMmSkU4k4oAAyRxc4LhL6uqdpVSiJCns86L1PDFfK4tWz",
  "key36": "3sfps7XKP7KVXPfZP5ZceXL69uBattKDz7bGbYNF1Vs94NjeVPs7c3BZD3npL8BhZSPi7bgspnkCqmQoXGrTxnop",
  "key37": "2ewZqNM8ALPaUEA5R3Dye87yexUgopQtnms6Yzc5YykK3tJwGM2q9xkaAPa1JgcXbUY1B8QFGbgGDabHVHtfRZek"
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
