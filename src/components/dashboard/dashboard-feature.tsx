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
    "3aUgbvSMjFmRew8PtFrZmKSnHhXamUqPQpQd8uNdPoce7VZYAvVLgZvWeuRuyM6WTDrYxAddRWAqKFBPJkvp9qLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NYitBMYiSKEutt1y5wfdyPBvnpNLtodwvxTA5LFNbBK9ZG7xW7XrfgH6EJTdQwZGKYVdocWiwhsghqnPiNqDpJD",
  "key1": "5nwWeqsEW5cQA5mxzBfZqoX8ywrHvkRQNVzZDy9YWZ5B4hGr4XHoXvu4gog42VmNe6DCDjUeqYUmY7VT1r1doKQs",
  "key2": "4CUxD9LmZRVeti3cdRYMbtqf5uMUUYbnEt5UxH9k5DwWAcpSUpd2BMFhyfpo4ZNDArNnz6eaWFvFwuVG7X7jCH1m",
  "key3": "2GwGduDzXUgtCSF87TheefXzVHuffShGBMSPKYhnxjEXgoPBcEaESJRiRAK45Av9Hp4i6AaEBUFiJ1bJBgbVUiDu",
  "key4": "3J1JmkZSgPvTLoKLvdis4j54bn8e8SRD1PeeQFBUPqVU2jTB5HRmvU4wJ5ykq9jUFhNvNfVHTwQLNkaKkdnshdPf",
  "key5": "3RstQ8JiqqqwjRAz56mZtCvn1KT4PnhBGUU5JAA5YZsPDbiHXAe1b3Z4jdEq2BTfbMtwoHVtuG2S7JDP75n1mbwh",
  "key6": "2zTAVEyNpCaxsPb6uD2Q887oKtS2E8n9LDShjFpYyyauUJq2yRztSxRwkBZtDJjH9Wwk5yJZA1jc52whDkeJb5FC",
  "key7": "5E9NbJwxJoh7dEQutm7istZm6TF2RddcuJzsmA9rKjKHL8LspNYgxqqzPjsNFVBdbM37x6p8nA9KQeskQ6jZEe4J",
  "key8": "34M1SYZ6gbVdVEvKhdVPbc1VjXb7V6GJ27dUekt4CPa9KaSEgvfGNugx63gRAVsKNxRphfkzHFiiGw3sfHyZdTUg",
  "key9": "3PvCucbJLPVpVtKMnabo58s98yNv6mgAW9qoL2HdgKEPmMV4rYZwmhGqDgcxQErEb6wqhkYCEYmwZ3hq6fjYVX8p",
  "key10": "3UB5eJfTar3TUuDxE66E26EjS4P5oJ8LNPQoD72wfDigQohFFv1cn69EcXXucyjQuQd9heQBhAzWejz9wNfjhNzA",
  "key11": "4oGiWKLmuJw91VnYQ6fQfQ8EvH286UXkTyLrRtYaYbRxYttJn7WqKAyUstfZ2itWbwTxhxEbeETZ5JwVFPhtnEUc",
  "key12": "4zRNU792HdENE6TcgjZ9xCuPBNU4UVUDfaSxPbKhCq55fpgHmR6hakYBfGy3NfjpFz9kXXwNT9jrJ1fAAjc1symA",
  "key13": "pja2ZRQeUyrUZTBLnQoZKyiH1UmqokdigKn59G8aNAi6DNT8z7zjTi5u9QFiVJszaaoPh2NbEkTxiEzypmuLB89",
  "key14": "3pByjzqZpKX6Dtx4yLkTegnahPrmeBH978Zopraas422Jb661fDiJZ6Qb92VNHWgJhWReoWFoBLTKyEFDDwrrmr8",
  "key15": "5vipC6obNY1EDVgRSfd4Y6zQfCzZjyg9dq3x4UaWLrk7ugeLEq862HKvaDw7hcFmqTdMKhSCt2mbbLPzrdpo8aUV",
  "key16": "4qxUGVnYDRBfxXNy4nMWV7eiN3x4gTcMg7HHnMYCTvLWNeLJpShMJZ2Ev12WNkTzm4hpxo1fj5jDW9sLG8QPJuEs",
  "key17": "2GVBRr3o8QP2rU8mGRUF6rrLSQLuk4crGdztR4ecNhqDxhpmAhSW1nbU83vxfSToq57TFGPaKDtgTuhwwtbpZh3P",
  "key18": "5H42EGAkAQF8Evf57icmRJnS5FGanytjs9fC63ehxLvqH89TMK3UxfVErwySPdtgxf4VimPTn8f75ATzJEpiHX98",
  "key19": "yYrq49YspHWiM8eCy5gSohYNZdeJLt8Dw596hYXPtuCTtMuAxXaFcZAECkPVc2Hmw4PXr2hezmyW9Wm5GuV5tec",
  "key20": "3hypVtaCu3WTSop5ux5EeGoTxq5j4oWPxFt9FZm56jCrrzd5j9mUH3BMqgdtLZQQyK59PPxzjqKsa6HwoE7rbZzf",
  "key21": "4iHt8DjSqj4KHSJgx5a5xHt6NwBSPNBkGhC4aqseFzVi2PqqzTjqojQU7zMK3S4tAUKbhSwDWzYYL4SsxgNKbZov",
  "key22": "3SQvGjGmgvfyaFENWAZD6iVXT7qYKDUagycopf7kogcZXi9x9kYDfdhEB7m1QbyBFyKDfRwzPLgRu5wHTNqCd9Xh",
  "key23": "2FfoYz4gqmr4bCkKZzEb8h9BXKmPaecnMJnRKwjRyfoK1gbSFzCGBSSWToGqoCwzyksrgG6oHvndzwMYKMLrWC29",
  "key24": "33uBvmLyzYxhEmBjd1U4KbZekDGBt8iVX4jJwoZ6Ch8i4R5EjriRbkZcPtUhNPewqwpsFK9b4fGG19vSnbQumaYa",
  "key25": "3PGP4ZSfuc7aqTbQ7uGZVDkxcqY4QPU4zjL7yexLpURAKawRipvEmYwjnJEdq2YXRvmdVemgJhN7aHrANwJJiGiP",
  "key26": "3ZQ9FxmmEyx4YiDs6Yzi7X8SnMB4T7qHqHwT6Dn1goMRuqvcypn2bviAtRw6jt1GNbmKp2UREa5QSbTAEDdPvenf",
  "key27": "41hP4JSezZVVDin4ZjqWyuFdEgv9SKQtiNyrZ98F8zDsUBXB5XpqBjJzYqYRcs92GVdbCuGedtDz8UPErzQUXU7f",
  "key28": "8qvKhEtRmbSVSdhUhUeZ3jTFrXhgWAU7BTq9fisGhBkXS2usndQ5wuCQs7JtwWXtGZ8vWgMMzhNmxc2A2XkBeym",
  "key29": "26pvCZWFVd1GEmck3ouipbyQVb8WPVSn5PdCgo9mv4VEesHmpmhDMLWL4S6MftpVw1KDGyLBTEDCFGze9yRzRo4n",
  "key30": "5AVB3KWVcRnNY5DMrBejd3p9g7Mnd4YJYfrTKsR89WwDVeX1NZF3H87PF2qeQBVtkcSAcGN1AawhSXW1GEZfVZNU",
  "key31": "3qd9bWwV8jFcxGJXFc97xznAEgApUugjYyXynuwKCfNVBEJ4RqX6AaKwZD4rxdDPDAXnSfSUxDSsxq6ocxaEVeGL",
  "key32": "5AZ18mBj8rctEueAb1kB8vBr6x4MmDiAHpSsJX2p5GpcBqyhJ7d3Wm3BdqGQJJdbHtQaJzZoNnjyxdgsTSft6S5Y",
  "key33": "GAn9MosMNZ2PWGhdVoqukAWpYEAWNcvk6kigsTYY6EPPgdMmKFCUxRuxiSYgKCm7jMndxqHX6aYCs1RaeGh5L2u",
  "key34": "4ZJZr1Uamscao2oKo2cJr1x9WMWtE4Wh6x3ZVwZJafkAtivz5QoTdMv1fu2yvpLiWvpN2E1id9ELrDW6XQSSRX3X",
  "key35": "XaroacYw2K5qY5uvCpSR568RpFKY2UubBXmkDrSpUreizBfwzdcvLAKDmscJyWuByu6TE2wBrJnkVqgcaDAetmh",
  "key36": "38knrmirzWn5Dko6vPc83GGpaWzTYbJ41LZM6tyc3LTRwLkGC53g6VBgPRh3JrogkfvpArUTa4KsSJgxKKaFuDqu",
  "key37": "mTAvYg2w84aFh6jcoCKdUXDETXR1UMSmsEsQE4Th41fjCfWFUXYa45ETeY1vCTTxuC48DjRb4dXJr3ybq6Qfzad",
  "key38": "5eVR9HsoGcC18twtCJ9BvV5u6tDQfpzkqGHa6ZrrniZJb7cDAuPbVjCKHLFSsY7WgQPC2y6Yjm65DehJFwv6Exsr",
  "key39": "58VM3qEBoJVnk4qgEP8j9vZgvJAvLMz7CSvYJ5QoHn9kaHKSUPvfgqpB2PWL97nkdVpmSHwNQEv41Tmi5jYyDoLo",
  "key40": "63XXx9DzrvgyafrdLKgNZXwnt6KPtLEANX93ViY8fcxayJLtPoQZZxdeJYZhanoyVNuNjv6HY1n1ED4FjoGPjRt4",
  "key41": "5gMgS6n9Gj8QnBA8XsTkUgCZJASGR3Nx8bRHBGSA5JmR3pmqTindozrrPHYt57qadsEHjBdiENR4DtVqoDb77vVr",
  "key42": "1bhWrMtDr8hTZRDKU4ic6nVqACy1GBnSfVCiznCdQCPurTm1FwyJcvbVQTooMwyzMTmF21bEfkukRdSPsKLGEv8",
  "key43": "2u8d8aj8JBCJKmkkPjxoFmWuTg3QTSuNqzPk8kz15J81rT6pxeA2DcidqVviPCEJH4unKkGioXCC7YiT8Pep9Mut",
  "key44": "UvWLWSMJMNX7Ee3xjoJMGHDnDb173eGoApF6nL7uQ8NUe6rUhbPurJVDYBo5QyExAHNmoNbEnvMe1QQLTuecTxH"
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
