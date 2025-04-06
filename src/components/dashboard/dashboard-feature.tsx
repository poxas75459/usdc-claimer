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
    "5zSj61U1qoSGq38jPJdsFBZtUEv6TmGR5seFejRVQhki5VJPjwTJmHPFtvav2g5WacG6WVGvXkao6Ski2X6Jnaef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "421BtwX9xXZpQHJjngnxYX6B56F26oPZ9ordGVgBNuVBwPKSajKHACUpvA3sXwzJPxmB8AxHHrRFveB8mTXsh7fg",
  "key1": "2haoNZekHhLkQPECoFMe8abfK2fKUFtAq4eL7caSBGfu3yaUf3KYcnua93ceFxY82Z1GQbJxveGq1vp99Yqs3mwa",
  "key2": "5hxKVhH4GM5KG8n49vURsoYRFGDBvtDihgUqsGzogaYToSxGJACLAR76bX72wzqGXqpXx3FRpkNYbyhaVJGjobK3",
  "key3": "5oygCwECRtL5znSfgNuAiEq2wsAiryuPNhBNDH2Uw6jVVRD5VkR5iaMNwA6SWNfTj2eupY65nDqD9gkU3LNCo18h",
  "key4": "2i4ziRUhw8J58YDsfw35uyWBredY8BdNcdc3MnWgi74UZzWBqFi98CcxCXMRGxqsNXtbpaUo4h7vWhYg9siV881k",
  "key5": "AqDm3oX48DbpGw5wkKK46tx1taghdxTSuaUqaSjLSdukypKS9nJfitxnz3P4bMmTipmtK5XcnLodThfm8T2inm1",
  "key6": "RNXRXwjoQ8WDoLqdD6uJv4xUbPSJ4qzzZKatwy8ouZC1c4snpen56XhB9zWSau1hzweUFgjgDqB9T48uvGUckQ9",
  "key7": "2QmiJTsxBzj3zsebw7T4P1nGjkGzDh83EpHif8gfhZwqJpvHzt1UFqejsZmYjSnqtF1GkVH6QW61ErqgHjYHzyPJ",
  "key8": "5fGQYLSjJbzjx9p1m3Aj4VLhqx7RU5NEGUKuU4poiHVNoU5TD6qw8zq5BjoWp791mjPLMszMgCrsW7r2sqebYaWR",
  "key9": "5Gwi4JDhTDJymghirkShefiD5zjEwqAMgfGAJdfo7bQT1fCbJQMepfnu99ddD47vJNgkxB2uvYGyiz1XoDsspH5R",
  "key10": "2jAYmJdUH7ptK1cf96Zvt2UoyVxBJtvfJkQVTvmat9w5ssa9RdWfURJEyrJokTzPdDGebnQRQafD8vr38mJtDQe8",
  "key11": "5hfkNvFvfitnZL6ctvMdjm6xiNUUh7VuxckdBZMo7LT2Em7YGdaM3AC5qc3dy3wXpKU7G6BTCemoXhzPDgSLPzPS",
  "key12": "58kZjCJ863hQHS6CYrdWZpcASMB4GN2cAabtaTgscGsKzbCKZJginBR1DTkHgH9o8oGPsnVX6QLgKknmqRPPoTXu",
  "key13": "35eaigHYEkRfyrk7DQHCswGhBhYb7Z4hb3qc2HeSSoUV4FwhStbFUz3Lm7tRHGkZ3mMPpzkHc8ZUCC81noW7P2hM",
  "key14": "5roX4yaU9QURgh5bQsHTvRLaxQRjNGQxQQALfCUaoJuxsShZGRQk8BXcvDMw9vXwoUev1HQcEmn5qSHZhQBqv4Z2",
  "key15": "5Bf9urEbY9sr74hMGRh9ohMYFmrJvJyNZjD329YnWdzHebSFj4DMgxLNP7eCDS3hEhSSPpKjrFpze9orjHTmFrG3",
  "key16": "Xk1mwRarTKuHUePvGPAkPKWtEMprQKof1xzi2CBKH8kdjjgCFSYkDRb3h15Vn46Y3W2drkEhkWi8QQjoDohQQZx",
  "key17": "2BagVJRA3g6316tZ8u3YnRzQhMDsGUhJ2H4ae4kJFAjy1DnGVR1apqZLTXpWWiqpfSNSyGVwGtMhpT5woYCpSb4p",
  "key18": "49rf3m9owTseQYXwV32kYWuGVYUMg7KEQTACANEcjCnNx65YNPK22MB6Y38MAJ31P1dw727PHYsJo768mado3LWu",
  "key19": "ZZrD1xfiQvkKaMQydTYRNEGYBppDRAWc9ZGPe69Ubbkr5Hx78DAu4tDyM8rp6kY9887pQT18WPSvfagP3oQGfua",
  "key20": "3kPp6Bjg53cmrzXBqNjA9YEJeThx9pJ91ujLoqTMPomjkAarhuCQiJbHfSLnNJwg1w8XwgJQxbHndyxCCgB7Mn4",
  "key21": "5bGaHMmiWPfeq6vVBaftybneqGRXdoNC2YyruCPm2pAggDJjECYSZ4X1N3tgwTpZdfgyrunuZ4yx2XJMtqfKSda3",
  "key22": "5Rb6Wt649cb7bUqhp1kG1tNad7bcrXjtsCeqYPjaoVnQEvJ1oVLBUbGbNzjv72bUZq9c2Z7nDwNVeocyeUiHLg6f",
  "key23": "5gMCZLDmtoVaS5dp7KunhfsC9zL5msxJnB7SxgVjjEv9SgXc65JBHLHEDdGRq42JbJH6zvjTsn91WptoaWjYP7So",
  "key24": "2Mc7bCieVYAymuxevjsQmWVdQJAtmwJEQs5QNteuampFdrYZJuqLWDnn7RdjWrBotuCumZgPgYRwETeDiFBonk8A",
  "key25": "bk66Fv1ey8Br393C7HuXphbuY6jndAc9Qd97QXVnDcLaBTVExiv9Qre22r9hNZYoHNGHRjBCfFvSt63NrBTwBVF",
  "key26": "4UjuecYV2vsBhL1nBiP1Nm2EgCwKabKQiezcgS3qV6tzh1abFoGXrJQ7R2gezicrDXVDQSuCbXkwbGRf9T5PW7hz",
  "key27": "Jy8uxWnZkn7udxkwig51zXZK8Wrv9HE18szeq9pmzBirpEceC33DCnU4QDjC3ZTSuFPR2Xgb1QBH25EzNXMkUiE",
  "key28": "47jFB5soEX9qNiXP3RBFC5WHVCqzkhpx6xLswkKEPRmPMyPxL5ZbbsSZ8ZEmPDb2YekEN6TqmJdqAcTXLLLZssBt",
  "key29": "4MSJS42YHYXb42f1iPTge8o5qzq8F6e1LcE6AEuLjMCzMs2FCy1wZCo5F7X5dnrn3WDXSJSAqPhP3n28qiax6qnC",
  "key30": "4HmLXJ21zEskZDsEPA2Ej5VAWqQ8Zn7hm2Y6m5Rakm55h46xmJgq5k1nHf5an8kwfwEwK9PQgus2r6WsrsxZPrbi",
  "key31": "2yPyMqQnPt1RZffexsaCsx1iL73u8kM9aZBuauDDjBAay1tiStQAbmZcm66iXDLJK1nrE9oVzgHw7JBHc8Bv9ixh",
  "key32": "5sR67j38KjgvUDaoNXZy5EEBJii62QUpg5pJDKyUWPdQKTKgpwmLbYrZZyCcLfLN2PchdxD6W5zkkBVC7XnLAH2v",
  "key33": "2CFzJ4muSeftDurUvxvVzABvqJoVDutaetSFVfkkX2XrgY6rKtTNEV2BkQDnqJdmnb88TVdxQM4Lytkraa7S1B4B",
  "key34": "7yJkBa9LoGUmhwb9uWpMnZtwYvoGsmP7uT3APE1ZeLi5q6MHwSFZnvSq9ZQ6NBDTDxFyB19yqDwaj7wJRo9okYD",
  "key35": "2LvCZaNaByAGAkq36ZBpJvfh5HXJCCpBSswDFS2Xvp8bAH35NmMM5T2HdFhPoqx5wH2uzXA6A8CtjaXNzZ7BtBXR",
  "key36": "2shmig4gnnHfXp8F9tcdHpkY5rNqgjnF9M8CJeQKVeemjDTtLory3XZkRcayfjKnARzeQxNerKM8ZSKiuTwRvSR4",
  "key37": "5EEfyTppWyRvTzhKzjJ7ihNiUawmcapW8QtTvvv5Fnhtb3PY4KfpLGH5KGaR371jdyLw8kmbTKXbyKgHmkoNiAMQ",
  "key38": "2KR7697DiEVxEuBrVU5fEN1rZjTMpqfKJeCvrC69yhB3tvapyBCserZpf13LjCc7ht8V872seaTNYJiyguNTt5wy",
  "key39": "3e1f9HgmQ8c4TG5YPEZpBT8vdntQCxxUT4YZvLn21pNuPVP54fr6icYrNx1y1t1b5vfovQXPv8YTJzzWM5tXvsot"
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
