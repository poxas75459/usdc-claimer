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
    "2vCJqBqxVTbQ43tkWVTZEjw75kdSf1yq4uZfHdVjLqxnHFa9jLxevY7wbrYkpbXf4ViYThAasG9m3qef1L3jr3km"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44FBe7uCBbknvYXJ3h2RpwscZw9NLSDxqam2PtJ8Ke3xHtwFfoYE5AqtJFRmeedaceLh4944FND4wkRtb47mBxES",
  "key1": "5Jm8t7fYNGKQFnMyUGXiXTdREH1CYRDu5JWhKjyTXU6dm5SsoRQ1uQ7jGaUoTc3kuiDTShbymVYUYVf3XaBi8q5b",
  "key2": "TLzT1Gct4kBFJWYYRebs5NRXNc9iajbsvWWxbr17nqAXa3zUyaqXDezYLfDB2PCsPZmm2nxvoNYHyVRBsVg5EDQ",
  "key3": "55cpqdjo6hQaHZs4rbuM8ck1wahheejeaA6h6zmcw2XomUvUdpUzS44Q8Jkg49Y2ETYdTX4JX7Hh2u9dWHT4bicz",
  "key4": "52ZzEtWHTHVSf9HtnhxqhgAZCQiHC5A4YpPsHRswUkJ5gQvL85rTR9GQAQfuPEMtQ7jXXtAftSSKBq8HFhWSa1tP",
  "key5": "2xSPyA3aAD3NxM6uuouEfZYPcX8cXwBqrEJMyq9tCihTqM6u7B881BHEWXWy8TTeqN2gc1YqtTdzz3QaeY83Hh7o",
  "key6": "4oWs4DNvuyCKo8iTYsG5q5CQCquKVHqfnHLsq91dsvDno72tUeukt34HnYTHFgYg4FNnjN4PvXaMqD8JwVU8b2LX",
  "key7": "5hWZwquEKv2s6Q5gEx27cYKdThTeMviYQtLPv5YVJjRMt5Hm2jSt3UQMx4dbC2FA36G453qvDZxkaHJvQNCiUvVQ",
  "key8": "siQGa2roofye41a3XKjs9ou9Hjtn8Lc3pbmmJL9ZaF5TF2HaHaWHfFbFsfiHzVttS2vxqSW2jMDeGFuUbFFL2b3",
  "key9": "5oPoxE9wHfWNERyT21d91z6y5M9cCJGRzLuA33j6aTVW1Xxfn7HnKeSv4PHPRGyEwRbsgr83nCWjRavuvfC5ToGw",
  "key10": "LcXPzjqx5YcCUsxaSFfCwv9BAXFjnwmatG3eUmUK1fagHJym74wqycrNGcZLXGV5Rxrt9hUzUfaTVuMVgpmP77V",
  "key11": "e3RLwVR3m3KzGvnNY5KTYdcVubG7RQFXLogJdutXPs2TxQHbYndgNMdVsDxLxvwGoo1tMW6PTYd198Y9r3zhTtA",
  "key12": "2zPdK2KD4BSSAJfhnNJJmcmbZbpCrgK7mCR2rZZRUxjpJBU4KHNZbiKRB1wbRUoL43dUsgHTkeQwKShfuDs1n2s3",
  "key13": "8WUTtbRZL3JWFuJ8uhb8Z8hYdpktk7DHEq2uRFtm6WdpWHKdSE7G7Y2Gz5DHsbLjz9ZEjRFmEweqnyDNznGkzQM",
  "key14": "4K4r3f1MfBCVnALFdY3j35tFsXHmX42PkY2L8dassvr1oNU6tHrDuyZhvu3MsqiKY5thvSH14vgYtEm4qgwV6cpU",
  "key15": "3qkZwk1f93a4MTo2iJBkLf2be2zAfiR34gd3cFUoca7soPR96k5yyHArkLH3vDRqFyQ4GX1RhPWAng5EG7qsjBa7",
  "key16": "3CWAYmC7Qhcv6cjoFrEN4cXQAa4Y1URVgH7UphMoBRK15rRBK3LE5yiFePqK4545Wkfmgq8Z8vXLmnp79f3Utjcm",
  "key17": "49wJbD2PT9QTC4hgn11uRY17oF4K9XBqd2Qg5DDfU8m4HNb4z3bxfrfodZEqnbeh1SyUPwxYBrZmWMAiBjZ7QDhp",
  "key18": "4s6mDDTQH6fsBLzF6AJgP1cdY9bN2j9sC7h8jMdJPi2hsKDMHWsM6EVDu5EvS77DVypVvKfPPoMFPJeLz5kQBLu1",
  "key19": "2YKbR5rivykumVXFGnwn3ukJArnSb7FDVyfXuxszJm2TqpX2LEkAsfR8btvh9CZHYu81xrNHUk6nGZ3oepKgnFCQ",
  "key20": "4oAQWDCpjPQ2XV8vPh6oNErQHdKG9W4em9TZLwtUJCHBL2Cb87ofpWsbkqbEw6Xh23jiZ6828fSb7XZX9QkjXaRi",
  "key21": "4TCjn4AuJTp1KAMGy91ip4V5sbRFq8YHkWqUAzPDEk6wH3beSgx7qMcyA9ouhFmPXxYbRbe4rwXPpaXAGJ4Z4Pp3",
  "key22": "4yHvZgAKq7GBtmQSrbkhDViqZDjPi2wWKpaxXvrjMn2zoRBXtKTq9dPQBWiLGSYGtS8BVAg9Akyvo2RDKcukAefh",
  "key23": "4E8ucv2uuGxUfiyHhxTWMn8X9kP2G1ASvRmQxRN7HYSSq5n8nDiJdxFCMJnn2gtrUMaRswHguBYgRNk9SA7CkzgH",
  "key24": "k2YHUvuDAMCgPg6sN99gbYuAVLU7kJVep8uRvriXgAhYD7hdDQYvZxc5VCd4ahJnRznJCkfwSJmEt7svHQFDXkn",
  "key25": "4LKtmCJe66PsE8rbaEc7FQzWciecRovnejXiQBhfCWTDEd1nxz6cpgEaz97U89Sh4utvN9YvnJ2g7Fbczk8JQZK2",
  "key26": "5Dj8LipZDiYvJ4nQvqBFuhdTWyxp2METe5SfgWjcNQVoNj6FGVunUYhoRXrJM6abLAJrsWncqixggPXpiumhxAqo",
  "key27": "vXmNwPgkeeKkPZ5FGnyQdRwG5EnL91SNGeBzGq79xKTrdLi8cvz99eb7MWqwwHzxSbcU3adHaCCxrPG3cqBie93",
  "key28": "3jWQvL3fPQZXnvgcTiz7rwpxmVEyuJUGkdp4r3UFUEKQwEKUPwfyBxv1y2Cio4HQy6731o7YFLWaJGWKXSECRH48",
  "key29": "3KB2LCFArM64DR3C5mrkuw8dAM3syH9XLdFnr6GXqwJqFDEDA1CwPkTu2KRMzWFnkGGqhEiPmDvACniASTTS5vGo",
  "key30": "2CmKFcBiCj6A8ptaYSTGFmso91QvgUnyzUwGp27gbLepTj9qhALJbaLCVcx2q5scvAhJVXvkNNKXoux8xgZ9JP5S",
  "key31": "4q9TZqxBqGvd1vyqxmoGbGzc6R5SBjMzNx6JysbZrn2dZf7hggZ3muLom2zu3kEpR8642Zq5xXjW2R12nWoB836",
  "key32": "3Gahi6dEA1oRQS1cxfJyC7rgNdTkNSPB6ncHWNfy8vtxKoDatCWiUPsVXGQhWCR6PhjG8tZYEhaGp56n9vvoEpc1",
  "key33": "Ny81xqyCX9n7UXFxwQEpYMSRbuA7sB74aGMy19PMFSupgJ7WhYF3B2Kxf6eoe9HKHV2HZGUsJ2S7gu8aApWvJ6D",
  "key34": "5epGRe9mCfGvuVvqbbpvbNt3pGRXDfSic7eVhFUxhfxY6mWs4QazuyGPxwdKJ9Nbh9QM1VX9GVvS2K689rw93JsU",
  "key35": "4u3DVEMdS3pnqNKbMnm7v3N6VFP8uDFLwyYgqjp3ayAc2syMTJY1Ed4mJ3jHtH1ySMXCaFBNpWsKEQs3PcxEkKEa",
  "key36": "5bXKAx86KGauvx8qwmJxT8hJWhUQK2cTDpLyEWv2jAnqwN3GGB6SJCcnPT6vB3qitazNVKcY3Mc3gzPeADw5SurU",
  "key37": "3rLHaLfQdLTF64Wnr85Qj9CzQ6kbY8fzkAQd1Xq2xEsmhVsCmXcZLNUGNVP8XhKewPiGWzed5y796YmfttTC4QN5"
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
