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
    "Jvnxe57Ykp1qaRWq611zfWh6yPtt8Ff8K6GZpjwhzHPnYwmvgYX3PJNEL2JYhncRKpkfHkZDqXNpDZvBsdKUMch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yyeSScPgJP2ximZymjDnSHJNqUXfkLvFUKzEJM4bkWbAcCxxVjHKUJUY2ZQH28YvwQeeReWPNEoueGM1mwRRjGw",
  "key1": "5pYDX8p6MrnkLNjhtdprU6R2MNRqKxcj7x6dM8WzphSv6guVbJbqquQ7tCYJNEcRDDEBar8sDLXs5bLofsic8vvz",
  "key2": "4RFt9Hr2we3LQ6puSBabiM9i88vbj6CMpA8KCX26fzXwpUmTvu3B9Upu6v3DvpEs4N9YMyJm3BKrYBPQhWGNXSsi",
  "key3": "H9QsUwYL8joAVpJ5TRgxKhvb28iDXBXcyNT23yBG7XAVgWumkY2uQZ4HeTXpxMjQZiuXLnpaQ6Aw2YcQUXW1CWZ",
  "key4": "KPb5ybux1nZANZKFLHcYRWgejbdpQKbRh5PyNdVgPa7SGe1wyTyodyDcVWDo4v1tHaKYGBq48NQri27DfcxJyv6",
  "key5": "4MeDENuwBRgVVZ6eksvwERg6H3aq1p7WLj6ji9u9esyejXpXTM4Bsoo9KA7rtDMCz1ZBAtFnaSH9h2ggWaC1uU1b",
  "key6": "2w3NjmSf82ZtaERGNoYoJigwwDVonb16F8ztGNgGYqWyfMiuCNnAyZ3cUUnqqv7j2sXSuW2daMTGkAVWy7X2q3Wh",
  "key7": "4PVo69RuMUomTYjwj9A2Ub1hr4gwk9LNnoe1tHTxhf3WWi8ve5aDkairJKZ5zxiJ9XDToUFT2axtCN4aYdYFuppF",
  "key8": "VaqU7dfyKggMyX8DvVCtnPWmg4CapRuCSsbuBycgPMQ7RJcn3rsLhkBsaSHkiZUj9zyanqDYuMoSmnCGNZiQ7uY",
  "key9": "4uPv9CUChegTCnbKnijmaA1Q9eaH57mcLSKxHgaTCG8PLwmEtu89o2fRBcyohderfVq9kZNu4UqvPcg6QK32zp9z",
  "key10": "3LnLvH84cm1BoruXwzGphJRxxdr1iwkSogpJq361sCp6imCzFhrt9nXzyYdMRtRcnbXwVau5DszGbKDBQLXPoGog",
  "key11": "5jabPsAcjir8nTCU6oe1bFZDvk7sqqe473cjFkDp27RCBJTeQLrcms7X748VxQKCkXtuQiWHJE2w6AeDfQpACKg4",
  "key12": "4STMrU26jVXtfBrqRdhELceENg5ZwMpaATgwje96AJsTVoLCdbNt5H4JDf66LKu3mrVn9j5nyt7BdahLZQpJLJhn",
  "key13": "5pa8yfkKjyeeNGFCaY7eV9ptGZ7cdKLR6XkDFLUQnACJeiR6yPUybb2HTWt6CCrmxXY8iwJKZ91Zqqt8RY1KfYfm",
  "key14": "w3h5XxAVo1FtJiuEBXVLhMoRf88UmcQBLifEuqum1NTPqA1DBRuDrDde1jfHYc5M49kLwXgKbK8Z5pzYhqVa8yJ",
  "key15": "56WmJ6HtsVHqUZEjJCVSqBwAfDzGy42fthn8fWSPWuikvBwEcuQTfTj3rtGq4snG9FVDaSPyouWa3CjFa7vNSxz1",
  "key16": "3V2ACDQgwde5dvr3B4qnZjfrS2xAcmDCTetPQrt4aVenQgKE543xKie17ZRv5i6HgvF1FWXdxiaPpCZm8AHLtAj",
  "key17": "3KqnK2FNj241ahsUb3iCGH21vbE9HJi9q5E43sSRc3NCXhKCzVTobDLoMziRw7qestAnGRgYV2KL4YaSdXGTAe3k",
  "key18": "QcbgJ6QV3AuSZUwPJRe26t5nfTLHtdPXwAc7WPS9fFF56UDRTFDaagCssx1jNigUPVVJuV7TeteHE1sMyWwzxKn",
  "key19": "2JE9MC3Ub2q3ktBCcbjjfLvfRnV4hU8w5KyEBYzDVp7pwHtKUrBYYEcGsuMu4677WmqicXEJkydzywPguDcFVF9G",
  "key20": "5syd7GB8HQmmxEcqDWs7yt36LM9zkJvQhoyt4uFmspbY2rvteXnPNATtQRiQMZkzH7PepWjZwVhkkiC9DbYtbC3X",
  "key21": "mtBgB32mvvTgMN51Dh7DaZsPr6LNqvQxW4TbgcY3smtRe2N8kcoT7fg7yXrf69uSUYG4kh9ymU7rZpBsoaSgoCc",
  "key22": "5AwqUb4rtzr6oXVCsXBGnYUU6AYTuweQeJegUhPwLi7zHrTH7kA9BtffLag6GTFrwHoQZBeaSKSi1goiLkJCEDqS",
  "key23": "3QCSELoTyAuF8yQQzXNvcvKDiBkujy98QaHqqFch6vAE7qjJwLZchFTv9sKjxUiLwCRuXtwiaVhbr722jdK4iVdM",
  "key24": "kDGXR3Fk5Y8k1kR6zCkqmYGgPSKNbVkv1HURYYgYkwmemmz844Zg9FuKNEaFW8AQKqYpXUTxNxrqAYSGB7ntXBS",
  "key25": "cCt6d6wLDZGYyNU8LRewNFYLXE4ziB1MDzaF9JVw8UVLWPbK9dXYHc8EZmTJhfySuerkhSAQX85VK3BQnux2hvg",
  "key26": "ag3HwgAakjhDSxPXHpL3qrgxKwj5Qacj4pYUEyFeemw1ooYkhPK24ankPDaPiFiHWjHXmqJ7mc1petRGJFhkPs2",
  "key27": "33hWCZMvZRXxsdvTx7Y8WVpaTrUQxNukShGwVpchSm8bv6Q1UB7E6HpCvLuG1Lk4J8epa2dFihBMTEB2P5rwiHas",
  "key28": "3A5icsG3j1gJzsdPjGmdAiJ98vAM2uCmQUXSU9b5VCLjc5p3uWwoXu5op8TWyu3i7ZnA7dXiRkGBsN8qptd6RREN",
  "key29": "4jwi5KkdggjQdPx6SHMM6tbSQ2ZyNi1W1f2PEHw7pZ5R85fVVaCft9qohGTQnDnvb7QetbeW7MpSBhV4fRJwVgfW",
  "key30": "2375jsXnV8xKnfikrvGxaP5ztNCp9z47W81xQv7LaLq5GnXQAWGTsmLU5MUCy6snRbjGSUQmwvMRDxenRkctryfJ",
  "key31": "2KbCz5sz9bfiaYwYyLJKGrnSNiVf2Tg3Zp7gVjGYtjiST3VVmomAE9hV7biy7s6Fjw7bDLb6d7HQFvAkCPgKb6pd",
  "key32": "5RLTuV6gMooHJAq222QazM4X5bCwGBf3zBJxU3hxhhUfHkhzDET9eRHAKxfvs4gyLa3j9ugt5GV55RwWpZsDLiuQ",
  "key33": "q2UrUssXhqnCEcN5fmha7d2mqHYbEtMgDty2c6PEGsjhZ61WzhMfxFm2tRe3aJakCGGxMtoDioxiNAAz18j6uo6",
  "key34": "3HTKsZkJGXcZSaQowdwnCLvbGd3pawU833vxpYfF1RxAnjW9ywjnoJJqGW2BVb4QckB1xNfUVpCTTfhcjkdtb3xA",
  "key35": "tqUYeeaqZiQp53iXznWA98fzWaAjHHMuJKQxjtiMfyUooPaerJAAVwShNnCscnZ5HtppPLm6Loy1TD2adNtCpjx",
  "key36": "58R9njJu8X7nVUK2zqCJLyZ6Tg9i6VTvHBpTvPKKADq5xBtDDhswk6t478PswgLPGZxoXzC94tbzV85wQAAzTSC7",
  "key37": "3Dnsj4B2FXwcoGp6tQ96Dyghje8cKN7rBwbCV6tbTg8Zi9o1pXFfTDsVMZk9hV8ozBTANbHtkdCQ8ao4NiDudnXB",
  "key38": "26jH9RDDUk7UJPhH8yeReJqW3mgAZxbErE4DwrwuRkTY9f8UqpSHNNgQPGyX13vLD5TFmUfKg64FsaXQw4LTvJ17",
  "key39": "5jkzCTBdmY4myvWEjzEcP7gvHnYbsLhF84W6BxA2rmKRzSaQtY5YTRqznMBRt2JNFgPcKwjbrPRwWkLkUH64SJsy",
  "key40": "3RARjTBiKYtEmVqdhqbtAHFg1EpsgLJ2qJ1hCtzr9z9DBTYhkEF4PsiRWJsrZiM7XRUxxyqhVSknU3fvtx2kPuqG"
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
