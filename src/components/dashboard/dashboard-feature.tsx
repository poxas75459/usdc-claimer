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
    "37a4DVPFaGnJkBtKBzNEQwxe4pYd9kswz9SvXEdo6Tf9sDccyEHpjeL6oowLhMUEynS7gJ857t5B5Fmxq7Uvt8ed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26A6DGSw8aCJzN3Npvwhb2Lf5qfMAQhppHz5CQeHnsf2dYV2EvVNRmtzfJnjoEXakfaat6uGFkY7FwLx5FZAb1Qb",
  "key1": "37F2ceHZhrahMLmCJGWXbo9M8khV7YKK8GDu7Dv84wTq2SznMc6hxaWiw3bhsFZbKu3FuJxjQvTUHNMTyVZn9uUX",
  "key2": "52ZxFtHak8ncXZY2jbWKfvzwURNypYpd7qvZXMZ3rS7PqjeEmiim6pCL3SMvNohcqj2gAaVzc8ZiEsuXCCDFWfkX",
  "key3": "2icwuaJ8Yg4PVV87UHM5T1aFAPquJ3GP8dcuKsAjLZEdGBnPpwVxD1makNaKv1kDB13P9NJ3p7xSVPyAGkCoehZj",
  "key4": "HMsw5jR4TNcEFFzxm1bxiTiVK3AdowPvTs6Bwr6CrdVps1DqJymkzfLBMVLjUrfqgkUD4ZAjKfGkg5P2FwXNFm1",
  "key5": "27af8projWtTr8T9kjPQ2ntbSURGbm4EqC7jCPMiEs54ifpxvoDCYxxaqYgTeJ3QNQELvJgbgDKfMAxG5WL6iLxe",
  "key6": "64VCaG5tiv9sgvcqbHqwJfjJLVegFDqfEjGYFgms9QFxEwzRHmJw4uDHbrcDSMs4xuxstfdc6uet6PtrSWQzJHsx",
  "key7": "BKQoc8hPHTbjSxtTTktQkdoFyRdV9xfqTQmz4Q2cehE3nuQKrHcQbheb63KEWgiU2Ye33HYZEZ84tcwpntiRToK",
  "key8": "3tY6HiV39cGDR6EnyJs2yg12v1WZjZEP2Tz2sW8AUxY95rPZQGjyMeDxGb9xj8rtfirGfVfuJsCtraJUPytghbBC",
  "key9": "zqoYUTLxMMHKe7YCL1jTJTSpcbWgHPC2W3pCmx7NJz9HJXAwdCZUReKfNJ6odkU9C3UbJwZbxewWKaxLtqq46Jx",
  "key10": "3yzFjukAWngs3UGmw7RTW9BA5QtMaBXTPV5YNgJd1SxjvUeSat2CrnjAvKKDEPypW5k158Xtvnh4gEUKttb6oprw",
  "key11": "B7MsveK25WY3WUzumkgT7daReuo1YrGjtFAkTfzguNVMogNB6kbHbdAr1q6jXviCaCdjVL6HA75VfYQo9PLLnMC",
  "key12": "3qHYpWQZDWMBDfGWgZ2hsc4TknNQ3Ldz37RLfm9VkgK7XFh5PHK38esQkRGcrRDuRmFtEn366cccjWF1asLruhPq",
  "key13": "4Xb559g46abRtAwfV5A7piuf8M9jjVjwFGE5rRrLbR9nwm5buFztNDVVUULqaeNx1VVuytemBYQrg5FwxQgsyM42",
  "key14": "5wA6fixrbua3WktkwbeQ3ed89pjWbrDphyb4qfqvP7xJ7YQgCDYdk1JqW5jpk6Yr6xfutj8yqqS4tmV3UWKPpRou",
  "key15": "5B6qXmvX8QhzYaHW1qpEfa3kCZzQWr6bBdug1exUwZekLwfsyocV3EMZWp8Wyw1Kj5MwfZe5BudNjBV2fPoEpAHk",
  "key16": "5Kag26x5qg6mQVtvgouYfUL7VTePRVYeAhNyUDtLgbpmsKQE9csZAZQfdoG4nqG5kyNsxFYMjA4ScT8ANfCBCCkq",
  "key17": "43rg8fMEp6kfZRfLL8xY1AcrD9jVqpgELEJpDUco13ZhPs8FeLzrQdJrU4nnwGEHbMCehRfzdCpXGDscfSKtax8N",
  "key18": "JCCBiMmx8EmdaJUBBwvkByWALifavZVZqfwbJdV4R17Z5DeG31zTub4HSFSSjLRB2vSfEk2ntY17ygC5cgcLifm",
  "key19": "knNqEHQodrRVjCZT64ZP4p3ANJkcSRS9hMJQXNNxXPQLGWgnNb7JrUTuKB3RQFsNx98oZgYomdqtVsUgJLGe8E3",
  "key20": "J2qEwCzww6954sLPRyZZ3QA4eZBRa313Za9eu3VovHSr6MooPqdjCypN67zTfjHEe88nxys8eizK9Vpt4QgeD9Y",
  "key21": "3FeowBHAow5fczy3oRdVfkBNs4gyjLWGAWuBSJMLEhEuTwHbeMvxx1tFrqVW5tsQRqyyNBGnfnfbX88axxt1qem9",
  "key22": "Hphytk4XxjjuNr3wTGTxmmCnDUbzTf1sLcbUjrmzLan2L58buak5LhLPFauXYJwVRp7N877i4cfgr6Qnvx545Bv",
  "key23": "2V5NXra34AYjyxqRinkcEo181yB6NxknUkWGqZpn9nmXW2CR5NUNtqDMY51TsVd6GkhxLu1HdwGwBdDtuKTLeazH",
  "key24": "2h8es8jPX2TB5B2du9HVYvcnfZAKa7RJ9Zq3Fzo81h8rXjwZnvxzjWqu4VED3RubVZvwTHMX5kiAfZybkPKXbXwu",
  "key25": "Ht2V3az2iD5kmBAEdMgFCzYLQFmLAswPZRAbPTic1vkSXwwR82maDQe9mzqEeUdnVEZxv6RbUMViDVbZ8zJprmf"
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
