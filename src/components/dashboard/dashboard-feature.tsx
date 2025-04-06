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
    "3AnnaGj6EHG13ezh2qN9unGhLZ1cwEKjh2HP6FMnD1PbDFXnbXiYaESPUMUphH3en4WcvxMYXKWgyDdgQr3Bf8tY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KvkRdgA8nDEdg4dpBF3jP7vqfY8MDarPDryg16q1jTT9BqSh1QqXqGYQxJP8we7v22Beht4ZY8A6hcyhCozUAka",
  "key1": "bu4uhPRoJBPXqJi8tj5YrtydmmbCfCPuAi34eNmMBkcDFA9GCBsQdTTkRQsMjBv7FEPMtZfAc3KzokGA48Yymcp",
  "key2": "yXiQsavPDo1XzwDmuRLqtyjCqqrp4hnaqWNq8UkppZLSKaKe3cs1htFLAK6RWXwwVkTeRorANryL7oCNfqA3FSc",
  "key3": "3byQDogBsqkGnwj9YSTiNUAnbfFxbH3xfgUdKRuzxMP1zH7hXfFmJfW9M3ckXNVjLqKt8M6Ckdm8JHMae6vKADDz",
  "key4": "546PLp28N4bBXaCdyrmdjTjSVdpwySa7VZJD2ify4DbYkeMYzTgM5DQbaPZZXu8PMZKc4C15XqSigcSo1QZjeu6m",
  "key5": "2kuHLxPgqPBrjmFsSqJmK6yvHBBo4v65kefjT4Tmcsz1QpBm4PCgF1Hgdag6yrPhE3oX3D5yGGwfK1Xep5rZs7an",
  "key6": "3jZU9qGdQzoHEB6xojbxkuZrH3bFen1gCAvSFStypQfiSn8V6qwM6Gs8rEorG7CGdaXNQKxPcX7WRgy7SKzZEVTR",
  "key7": "4bP697vojQkvr9C746yrHULy5redzAL5L4XFj9bQMC6BJnDnCYWsQLs6GXhLPc4DkHpDmATbjSYy9HRRUd6Zd9L2",
  "key8": "2N5iFevjHCq7CFpFKguXw9eqP6KWT8GUvab96jWfXBccU5HJ2U7oHvVoNumqkn6btC2BovgL9mymgcBKEqUmDchc",
  "key9": "XBQ3kknytJBV4oetsF9ckBxjufzRTuWbGZ6rTBbeRcShnYjCA2h5JY2tVxbZ8uvnWgo1EDu2DDMtEm1tfF3dZTC",
  "key10": "4DsYMLC4i2j2QimMQ1jUMj2DiEDHrCeJk7rSdzP9vHYNEnaMXaB7Fyj5hdqwLYEN1wddBQQeKfDhMHFrUFgsbBuw",
  "key11": "2HBEZTSDrTShdNuhMqfrCyyW8Y9PB2EBXWVhhGUtaZb9cbcKZvciRz86s5LwETz5b59SymSK2hzJCk2vVTLuFoNq",
  "key12": "41U9bjjPbUSukUGURirGZZB8hUJaH5Wo8ktyHgDq6GeHkwn1sjD6jn3mJ4rER6UU7XWNsEKUeUWFM7LKXEf98Zcj",
  "key13": "4mq53tE2RaoceofSkZ88sBQq5tdw1NZChrsrAqXFNUgMv6FxKuR96n59StDgGRsYUhcXxrPA3mAisKFkj2nxzxcj",
  "key14": "54vuDZhxLVKqZqv55VNsSbBnBytBnj2yy2A91h6vcSF4BebMbwPohazM5omQnZmZQ5FH2BWTRqAbLXmY6Qm5hWZV",
  "key15": "3Q3bkiXss2WxNjdSXvv7DBNo63gm35Bvh3gsSK5B4ryejymvQcdpBRqRzRHtfu34L25bnAEneeFq4KvJeZFgX65b",
  "key16": "469CCkCisF9GDFqMeNef6KqVyFRsVnDo6RxcuW2xrM6H2Nk5QMdkP2MYGQpY5ncxigUUWLECLXT34iqfuT3hhPH2",
  "key17": "3Djc5HyDkJ48GXPS7j49tpQ9wiMQqKLwbJMAuMhbo8hDEoyGyQa8kUL4P9tZgKVJq6eHubzNJasZgDmXgX8f4Vch",
  "key18": "4YjLFWXHc8hCZ3NrP6gBTJgrFYJc6kpTotn8QiaeQ5ZttuqybZoh5WAzkwjv4xiUcKoruxefEaudo26wQaDRzBaY",
  "key19": "22pxX7s4tmJFUVdMug5SjMhXKanyVCjpppPRk17Kwq1AcQ1hdLZosVNBMBCCtWVHpnGrNiT2pv5e2zuYGqGKxzWC",
  "key20": "26ewzVnobqsyEf8f7f5Z5WNBekBqDhTzT7WM18AZFZMk8J2g6dQE5EqYQeCk4ZmQqnSbQ3bos9McUVrdhpPEw3GF",
  "key21": "3xsMSbNqtCKLCv61usFAxTWrFpFzoiQAz3ynvHEayi3yvGfwF159WgyN1VjG4uJz6WKmboZGWP9yYUFjGZmebLa7",
  "key22": "4PHttNNnXLw3RrQC8GDaAKGusSWvsJYwJJkztwo9MzVCZzRQWjrNxRacur6FhhUu6Xd1fm5kA6928kDZ49DSXzsA",
  "key23": "3PjrdytdtNidG4QMgbPccYLBaVGKch1d9MtxHt9XGD5TNTbt3oCfNmKut4NCGppApdrafnPBJ2xRaXdunkRSPfPB",
  "key24": "iYsNhHKj6VsmECQbXxEeSoVrVvWgKELE83wgRVqXJzK3W35HF2Ljebk7hcVS12EHwU6714k9Gfn8D58XpMtyayo",
  "key25": "4cNVgX5k2i49qpBN12kBZTJi5qrYHAUjQw1PtiMNofxpMMz2w8boHm41yWbteVTmwFii9c1CdKA6ZUBLcuFtp42u",
  "key26": "2a517j3mez8teAjQRe3Lv5RZsDcukgDvkekLv5DjD3h28sXjoznNqxkgVWwBay7yaaT1xdWu2toiXCxjxgzLAfKJ",
  "key27": "318iaHcQwdfyMUUSAfEa2AmJr81vxYByg1g74n6V5aJoCABVkVbCuTotorPHsWV17MaV4G2K8EmrMafsaFyqbdp3",
  "key28": "2r9oJmEZAVhawhz7rPGNkV8UswyL38ecJRq8vAUJGxBb4yfdxzy5ydU5WNtaEzuKhwmQk7DveTpvkgukVbZ1vUnL",
  "key29": "pzBJ58e1ozZE81wEcS96kMtMDeZhWwkueZrqR94gez7WX4JrUQ6gYGf5hk9mBzZizsW49oGfqdyUARCnrpWVx6N",
  "key30": "2wr2UbYtmMg6W83auq5FddXoJKHFeQnRnmB2KW4ZdjfyPeURV39vERJRMRS7qEo4v1FQzvnyTeBQes7UZLtFB8Tp",
  "key31": "3RVXzv9hEKTVhntp7uHgBjXHLndmpjdni2C2ysXLZ2gZidFARNFwZ7nGR7r3bCBsQoRxishyhb8fruTwqDiq9njd",
  "key32": "5jZT8CL9Ynag6ANquDdnMi6vCgFX1AoT7YyZ3n4U2c6wVukVp8cip3XUymdoDuiAYdcZW6qeHevSaxBphXqVmXNp",
  "key33": "2UoEF35SaQnZ5P2KjG4pEemNgUjE3L8vioK8EP8X4YH8gRbAz1d9PGiSeWwcFN2SA5YgzbpTCw7LBpUYbEZsxToJ",
  "key34": "3MBy6C6DX3BVnSCxGcD2o4njGR8oLv7BCNo1xmujxvHhksU5xXdwaJEuJEWcmjf1HWkEUBgJ5ZHb5QQTNDTi32UZ",
  "key35": "XgfS4hyPnBLEgnaYP6Kp59dhvvjG114MwPryb22guXzfRS8Te7A3h811oYVMprNWjt5Ri3gKzNbXpGeQFDtHDja",
  "key36": "2QCrKcERBjY8pwTE2h8bTeMU9XrSAa5zoErc3Yb9XMB7bWjWrbmMfmRyG3AQ5Usqma6TdQrJ77bcBRpnn786pXi"
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
