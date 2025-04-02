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
    "4pXWh8mXMw84NmCBkX2TYz3oRwobz9ubUrUb9ySvNqaoecaZGApEacCdmYeQ62B1h6QEm9DcheH3RVVbxQrGSb4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YWznFXjqfBvdKccGSdiRvNoum1GuqPnaWU2YXveDfUAKz1TEVzgn9oXze1HzdVEbDu3mtB6iFXnbRU1Ys6oezEn",
  "key1": "m9QP9x7HxZSryPQuV1uX4RoAJFrJARriFRFkJqorLzJDws3siDKHb3MKrwM8uqhBSuotQfyYMhzb29PVE4V4V7W",
  "key2": "3hELy98WpWhNhmarwDsSRqgVKR88fys6GfGQB9eU6Hnwb9DBUyFqfg6VtZUoKQ6bc9Rv5HRUPHubu2iNwtzLMi5q",
  "key3": "dHzrVHXk1wTwCgQsrdQkEdeBXX4Q8JE917c4zxt6xytiYoDXCVfoXyZJ85fa9kvnAEHZTV1zrBiuZY9iN9AU6dR",
  "key4": "4e8Q6gHkT5CgqQBMNPQ9js3v8FS6DGt3B8kk4T51613RYZzLkiqC1EWi9j5vk3MoJfsWY2YTeNpENMxwzJFjLFpZ",
  "key5": "4MHyjpBX3jEXq1Lpdg7ML4i4bNgXku7LYnee4i9LK7SyzpBghfcrBcqSX39JpqNTwHrnoEqCGurYHj6GVcCz2B2C",
  "key6": "22LkoeGpi8Kon9nnvnucsx1RUeb4qL8UQCFbrhdmKNuTcu1YEv8pry6CGjFidyXTnJeff39Wv48Y3vCkFAuHHogz",
  "key7": "64BazsF7LwoVh3vB55jMWog4nxBKuT6uqFWtpfGEe4WepQgfCquZiiAyvrTH6WRwX3ZLZcnqBXr6CZF4Ew1HA94L",
  "key8": "28LmMSpcbfAjh72cdKdiSy5ubxeG7YUxDsTrJNp2koVGWnQRFYgBgHQP3avcqv9TipWWma62xXHfT4ELeaRqHPpb",
  "key9": "MNbsfGwTWznVFE8eTVEBLmZLziMxqxewzdDv6AknHZ7jWASLCrU66e6Gi9zgLBrrW8FqjhbjR6EkNNNdj7WTwHp",
  "key10": "jXpHquNn9pnnHiWFbNAmYoqSZmVo5zZLG1NtYh6kNAFoLBSqgN9bNpH5g9Eawz53bJUVC9ppXxHe91rd4ssSfoF",
  "key11": "3TYmwFthd9szGE54fTn2BMyManKPiXhfN2Z6TSgz6xAHqBMPTPBWdfKfbjHbqWye8o3W9if7gaqFhXS9fabfbMfg",
  "key12": "2Wt6Mn9V7FZ2FQLYGaGAWeerjLrQV3gKGtsCF8yomwg3D1ukLZDxCnD9iNwsup6oGXAC2M3qHS2KB6nq5YzgQrxt",
  "key13": "3rLW7R2FKBmtWoNAmH4Ja3FzPku3Uk6KTzviefCtKkYFY425PjteX7HSZeXAVjzt3B7iP6b92cD3ip9ALasYuq4n",
  "key14": "3PddqYEnZBzFcrzMAcMNgjqhpGLtYbdiwr5wNXJTebBzYURbvqAF1zbFw2dTZgGCFrLJqcLh4MCT6Ngda3wrtaBT",
  "key15": "BYSYJTydDQo5nA8uzGhMrcZ8hU3W488ru3rbFbScBCsgPcjohrFbJD873E5S9A4dzYqcDfTXnpxoWPEM7LnUXqs",
  "key16": "5N7uvaaJtj7zWrAXVuuQdaobjVzMpRVoyWLwPJj9MYYnbA6ZTEKrVwoxw47znKMrVpEoS1sFR7vAJRfpXw4KMmgM",
  "key17": "2MamvAUQU9UDfev5JxWoeAnGt5y1pGRz1jDJQPgr4qicqZcbqz4mpLQ5qxp8xNWXSgLb1kuEWrfTWzr8xRcqhrYF",
  "key18": "2vM5AwRMeAjDfvxzjt7VyPyhgDpVKrSX3gCmZKHyNdE734Rdnc8bqR4U2fMaNm9h4oetTNN31i6iniAqJE1FospP",
  "key19": "wx9SHafVQc7QxfDePmLnGQzPk42URFkTauVHPXfCsPby8Yq51MVah6A6WuqxDvTiL2pynYe4H67hcoybP1qURc4",
  "key20": "YggcHtJTHAommgGabCsxzwjm6rBCLiQeLnXkCsceB6R7hfck8qpJdi73bKyoV5xgEJ4Fj8U9iEhzSwZHymXZvCt",
  "key21": "pNYo1W6pKnaC6nT6LVNGcVciSnK7TfTWfagnDRQBjRzvZGR4fUsQry2HahXdd9zdMGSDDAEH8cexvb5sarKbpe1",
  "key22": "4Miytz4hCeBZD3JD1bREwRhisX8RrEJtj8foNwSnsSaNuy8WFUAMboXQX3DHC2jhpSRKrnYDNRoBX6mnMwb4KEhL",
  "key23": "3oEk3n245p1UqBjNQe2Jvd6mXbtfpcdgNcxWw6vFJViUKjGkiw9Q55wCQ9wasaqiBSjZr3LBRynEDgNkzHfWABdB",
  "key24": "3jkbERLgw1U196H15L5C22ttoMcBhT2YLAnJpcysfPKsfnMBTinHGvToxPArYDhrQH8HwGfR677uzpFZ5wS5d2BT",
  "key25": "3PvH4dAqBDKLx8VJZjXMLW13vQbq3RqfMrNxCNbHagQUx7ETLJJf9wCe2AFaa8CNUGNS5bVhSejKUBbJXB7G5TsV",
  "key26": "5hTU5ux7XZEaDLrVaWNE8MAELdws6ZHH3Lx6TGAZQCmrHvbwji9m3aA1rsHPtC7QKUo4S53bDoqaW9imJU6te9WU",
  "key27": "4JyohjHzk3VmjA9ZnPfYqpz1xcTJQHCJkKZfZKuWRYy59VTbLtYr8YHb7DbxpiU7fkMPcBw4EgjgR23gjj8hrRGx",
  "key28": "2RApLmst5awEf48oUMDSyz2jnPMtpPi3Re69BT1MgmgsVAfWpdKe7g2E6mANhJrck4h1pJSm6QT8fdSZ5scX1bvU",
  "key29": "34MuZC9dV7arqYv5moNV5XKsECTpnNRSGKs2aJwgPNVVk1BjAqS8FS2SrjakhbmJ394pPm93pFGbnfmB6nUtYZEV",
  "key30": "3oWw55JjSS4Pune5yhhEfrhQw1UPc7MvUar3EkMqdBk3PY99YSLqScwrfXTHkQ4XiVdgjZAUgwreJGd3yrqJXJtG",
  "key31": "3T1RqGXumVC211brTRKipkBYo1DiLat6Z3trpRdcQQvxeqnbf46MSVycE3gbUYHgWzV7QgM9wQbVTaL6HaraSPSk",
  "key32": "35sMF6vhN3QHZwcN2t9JgAv7TWAn8dGjbZDAL3o4Wcc1bG48gANnUMKVoG1KJyn5m26PRxYdBt8eXWeMaMFvU98i",
  "key33": "4rfEyHhj9rLHHVrWe9M3gmYHjHLk7ui84mCGw8gstf8oJYpHiKKSY5uVJuJGKhbmWQc9Zjr9ZPsrP6F72wvRLV8m",
  "key34": "42fRxyXPhnzUkiJ5vyeJkYjS97UeLvuKbxpA5bqF3xmWcZ177bETyrktpy1HJBc3U6ZMjcDkEgGgHySDpcjcW8Wo",
  "key35": "5aPd1gbrkF6c2NweoX6vk3a9oebz2v3xCXJKtHhHY1Lgor22CVaYEfwRvnthpYaLEA25r7jkhgszqbhCoUsYv6gh",
  "key36": "2HZ9yqG9UkungEjNtBqa1xQqUvWhm6YsQtvnxU2WfgDbba9TNHkJneLU1Tuxt68sQLKAn6Dw8iM2cM86AzSQEhct",
  "key37": "5FMG1PAtBsVGaDgpniPLYuUhhDRhyWyVTGbcfXNtFkAfVJCTjJpjfSNBCYp8n79RRz2bEBLDgem3vEUUMjiR25Fj",
  "key38": "489xTHksQAxu8HZX3mS6vp8SLNLFVW8k9iSfupwHwWDU4kWVXkvmyfFs7WNW2MBGw6zGHNBzFcaAW4BFhVkhPbjN",
  "key39": "5oJ1H2FpYzzri3KQEkhNzCGNuaygDUxGnBQGTP5YR5qvGoY1Dyn4EEuQMyhabEQXfu3bJBYFSNUz87o1X5TRYHv4",
  "key40": "2waz9xYkw3ugQTuvgnExUkhApLYYaKt1eVkrfcnLBrRF8XX3uri6vgvVwVpyeKHzdUg9EZq8oTFnyBDGKKXMT9P6",
  "key41": "8UUqZuUmKdQXiqiwRo4NP8RoqCMqsEu2wFyo7rSo6d5SnR7NMsKMzntso3EubqrjT7SY4Ta5UZtXNjVpREAKx1U",
  "key42": "4yiWfSAKfkBZjJy2z99vnqMDTc6cQsjDsyTt5n9MeFCTiz1vVE1Gq8hssRYJwBb2YtJCHN3Spi2wceFnrGe4ieFK",
  "key43": "2UPg5L8RYzB2skVPZnVhyj4C8tUkddm5MkeBTGc3LdTRacDAm7mwsRy8hLcqXFtX7PkLe69akW3RnUWLG4fvXb7Z",
  "key44": "4HX5psxGyv16HNu7tDC4PPJYq49y4mh75aPBdyrojZVRwvZ6J5zhCQLd3oXXhAdTZcNVrPs5MhHxbb5ns2fnDbV9",
  "key45": "3GjTn5GtgB36yhFegJ14tHpY47EgcFsHuPXjVzaNuXjnmBDd1eTiustKWSoMKj5sWs1UfhDKXtumsmQvu4iguHvY"
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
