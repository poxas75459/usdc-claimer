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
    "3WbsQHuXjfkrNEvab4XZHew3SHgDTqUrJUgSiUTdB9XZdKcpQNronUgA4ZWEssE9dxYCUGWMbMhJxVx8UoufZABM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SgGGwJa3iyTcGwCY7ChCuAjCCQniurKcnmK5b3Hg7E6QtxNTxugzSR4LsxTcf4ZwcmdARhGu2FiVL5yNX3oir21",
  "key1": "4jC6xHm8aX5RKLGBRTi1ZR2VUeSGVu1T5yzKZ2n7hrwwoZoGYzLHjpTdFwUtWrce5hgqUS5yMJtYmB1SN511qsd1",
  "key2": "3hmMhDSP8ehRitZN5Ri4XQhnaDNrVKCkqUTep9qgUpsUjoJ7VrWVCo1UVpg8X1j46mXDmNJLWo5fy12ToEzcRxMr",
  "key3": "2PT1U1K6Hz9oxJosoxXQWkFbQn9kyYsbK2kJpzvPXGMqrebb8AEVvBkyDovSFxyUPymmhhhJppvp8d8HjE3i2Uaq",
  "key4": "4BR4A931fJjj9QrxVZYgYHTdC9W1rCwwK2vNd3T3rVhVWRTNJ8nQETteaezd9QDDaYh5Gwh81YR23aCDqYKXjLnW",
  "key5": "3g5VKWV6572Mv4NuHqiw1prBJtpDdrNzfY5LQcUEjjzuFL1W8u7R7ZAYmmWrAFSLSeCPdoo3zbr3osdbvu766hvo",
  "key6": "4FntXAJPHVt8FpS2uKKzie69FW7KtVgh1nvShNys5jnaiWsXLqThvJnosrKuphUKKXnVwcNpMGrtWxwXNWzKzvnS",
  "key7": "4RpwSVKJiCDdjZY7JDywaADdjtShAEZTt1p5XFMnUT995yCce4ihUtY2MdFjRELfqQwctThhXVCJi46F6tQkbbas",
  "key8": "5Wo7yJuPYW76cQ51jUNv7NVZCsBSHpTpEu9qe8iLguKpFtbcA8XuJ3gy1cjJmXMzGvp1HfYJ9nxQ2Wj5AyzTKHSe",
  "key9": "4THjLTtV1KAkqWPaqYsoJczdZyBWg4DqHC4wW5BzDPUf7Nx3qge2HNpSjJqDPsdgi1YFvV2uUApQX4ogFoJqcA7d",
  "key10": "TZ8WozNbxfD8KpVfEerj7wqhZhNVrnb2ViYusYkNKxBCv2riCvVH1YiFjsNByaipJsFWG8JjLkJiqZM5y8wyeVL",
  "key11": "65kwFSrxyhN1g7VArZfqCgpokmRVZsyaPEy39y2gfDbHf6MKeChk2oE3uHRDdyRDKboBWG1FAUi3HHwgfd9EzroV",
  "key12": "2Enx2WJLVcUYZgcicLFn6bb3VpF2M9JSBDeyxJavsDeBXLR3m5cj26gNFk1Veap3UVUDProwixArVzG5W57vam6P",
  "key13": "UJhwqe2tmETCHbqAgVYaqqRhbBh8QUDFJrjncoFNDoW7ZWbqa8Vp32vyvnWTjHbL5osVw1Mg8qP8dEurrkCHD5r",
  "key14": "3AkjBgbjG214omXeQrPRKbAaLL35a6cE7wt9yJfQC2LoJXQHuhGPDzBmU3VtbnqNnfEtbc3e4YP7x4oNDWumBQDW",
  "key15": "3BBsWjJrXfRvWmAZEAJy4xa5LmCuTtQNkAAyUKLPs3SU9U4eq1FMCTnHP42CWKMpcmZvC915zzEWYV6wr6vUUdxQ",
  "key16": "4QA6EPG47Smij1WWYRBoGfJmZcEKkTtKeKrP3FMDqmwWivKDxuchCKf44GmwgEdxncs7RhzCHZf3okEtC4pmRHyL",
  "key17": "3YfWeMFLuHwGKRVcs2cE8ddQ35rNjuo1E2xnhJLhc5fnXN9Jktsm7gmESHbuVb4GSbU6ArCAxA9vN32fZdkBCuuF",
  "key18": "27Qtmf3HVn5Z7LuZX7i2WxYn4yyotUYepEfMJPJHVxcoP3CCJVYkZrtGiAiLo22WC3LNwjkTwH7oHPnjE64PTh4S",
  "key19": "4rbqYLL5Yyh6GcStv6hmvPehEBNhuf8AEyc39J1uA5BteDYzJZoS4LMJWdG7u8jfwFtY3t1MnbqmsbUXM1Wy8t6S",
  "key20": "4Tnvge4y9SLTzdqNU3PasF9KTQPvU2gprMHmqGs141JMyTZ6fTjMD3JgLsAbKmHzhEp4LSRZFWWGM6g2g2WgGAAH",
  "key21": "5x8xbapQn73m7aHNJRYmmFFuFLw3BDcFAtMsqw7M8KzWyyXG7zXQPii136rh7jzsvtRVfUELCaacnddqSquaWHeV",
  "key22": "2YoYWLazc4LjR6jtDZjizJgmKPWXL4dVSWLZJfq7dJqZEFsjgazXX4t2wCqLaPYCgx6XGkecAD9Z9hobJsBogFK2",
  "key23": "5oFrg5i54dUr33KQw7eke7KEAcEfE8R5TXejkHzGaDAin2ibpo1iJivVi2VaE9iUY7YsbmSmUqiNPm33a71CfJRq",
  "key24": "5u71MqMuEv9WAyiAbmHRKoitSRfXAwer3M4ZikTn1Cye83K7wz9BtRNiAUoTi5GQAt5hbBrV6KXJddZ1u7qL4cfy",
  "key25": "34WBoWCREjFcBYf7hSTwXkMtG3HUKeuJ1ehZnkLHYSyit6wn1RpzZ79AhDw6fXxykzXmUNSGnvcjioCrm9KPxJ4C",
  "key26": "WXYJr3MD2AmzQLF885DR3Si6g7Ye86fLd5cgSu4p2EgR5C6vC2zJrToneGhBnM3jD3Z5FuJz97cg9qDpksNBKoF",
  "key27": "4ZnVa4bU7t7pYWnQQurJCkTMgrHfQwhWrSeqGdrbPJ81v5qmxqfVgP2WiWH5XPmm69n1i3ZgtXrGq3D28pi8bLwT",
  "key28": "5MnWaF2imhVuTEbStTuzyAJhFkYiF9LFG6YySEDYTFgsx6jy3VDHihizCNzL2AdEohcP3Lr3zwQQtnm8Xv4xVLqP",
  "key29": "5Ck1TW41HJ8x6CXhHPSUgoSh1bkjc6726g4ZufyXZhzz4DqJYBMNPFSfkeHct4JUiVnazAp6djWK9sniqSWU3VAe",
  "key30": "4ZsHZWrymtJvNzEeLTDMXcC2GrWi5MKmk49YBoDAkPoNxDwhPFcPKDk2eTYL6uXsAEisXeD9PkZHgq3ki88A4A8H",
  "key31": "2dDat6fHiwD6rxab5CB7ope6p2zZ4SZvwiqMDtw5JmV1BKaLakn5TDMpUW35UAJZv2LtcRPLsmTjAFVhf3aDEAZ8",
  "key32": "5vDRh7eYB5bmhRw25RCneLV6f85K2QxPrVhUe1PgE1FiKNdoxr2bdyw5nRbgswQTL8uvB78umnGokiLioxV1SCqH",
  "key33": "d8D6oN6a6aSPdJTSNF6uYmJSN338hbeCHRnJqD7QthR76feC1WPax1xHBtqFLj92zhbFkg1q1PPPpCZiR5AeK5e",
  "key34": "UFccJ3KgnXFZxnCmXXrZ3CJgBAwJCcVG75FnfV9GhXN2TA6KBVFKNCAWHNrqQ9jyFUaBNA58GBYK8zpK7Ge4KgL",
  "key35": "2FnJrdHEuncpXisdz59oLGMByawV3rN8X3EcGeDSMtQXUKyYRC2LshNFhpUjLvKdWiriXTkiTYobLuVyyruQwZV5",
  "key36": "39YPNqXgNTjq94W3rBgPn6tsk7JzKx2T8WjetdjSMP75uujyjfApGAwxrbJx1Q7AiVzjxpCUJNewkcDCDxQeZN3Q",
  "key37": "3LkKPrzcp88gekn8puzTbxBaKxuiZn5hn8CduVxAMoLcdyrKb88fKbKDm4wZQ9xGgyFEm7r5ytViea5z8HKcsEPa",
  "key38": "22CqpNVjoB31eni984drh5DTaxDsezWGGTUyHbLRbhrk7TBxQzR4r7cYJax7mFQ76BBpJPLEtbtGf34PCUxWFJ6E",
  "key39": "xXBkVzkz36j6vUSzkTLkcpXZveXDMVTFfz26owB2ERno7VH3houVuFmRDQTtbTgyTp3GfNRnw4dLPp9zD75sk8H",
  "key40": "3PZ6ndTghrgyS3uQ8Qx2BAa9kqyXXh4vTA1RrAkiUKQtLw7zFssnpkk4fhgaJMXq35bYCmRvjJfiBhKqKy4D54WU",
  "key41": "5n7vALH9JhwXhEJkpN2Vdsu3XfQ7LxiUzEe6Y6Lk3vx8eh9TQ7Dfs5L2KQLtaoXfTuLxaU5tX8BGC7sULBtvZfCt",
  "key42": "3eQ2rdKuz2GT4GvE7HuvrWdvE9gqr4uoE7JTJcGwMtBRYuJzGzYJ4z8rBk99CCCK3Souya4wQpCpyFAyD82UZLWm",
  "key43": "3gxAkmNumR4TL3F38ytVQJ3oU2CqwjgJz8tgBMn8XDDDLapNy6ppfDyjWo9mSqs1oSiBnCYxr5AJJD4ZyyJyCwKN",
  "key44": "5PoM6X7h9rNB9PMxy98nxtf9mEnZmPyjDCAPZZ3cEWcNMUzyrArJbAVkCcE5f9cmqvAKPdcGZdwu7MiwpyapPgy7",
  "key45": "34UpzqsmNsvwyc3SaY1shAwiucv66w5NFQyraRm2AXU6DuhtV6ettx9DS2eYbu1F12pbeZWtdd22wChjN8W9EYAt",
  "key46": "qbtAYaLq4BxG1TYUFUaSQZxSHVXTgmFZjJUskmgScobi6NbSUAEM3p7wBd2apZpxvfMs9RV8SKUYsW7B1CEHGmn",
  "key47": "4zamZDZwCKRkfZPszA6xRWpDFyfpp5SovNakq788n8mDXeoeTALR6rHToibCeJfvC7FbNWEayQhqpvWSEW8goqPM"
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
