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
    "25gfucuD2Q1fMoK61NFnQ4hMoKjpzEj5jKtTfjMGAh49dqSzsKkKCG2jQ2V1UJ6p7NrK5sy2xHgqo7EaguofX5qL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rA5qQ1UnkdiwMFhEgw2ebHLUFXtAcuqM9Uqh2JR38opvcJMmBu3iJ1Ku38EzSA9neqEPF3K4Z22qyJugYKc4j2Q",
  "key1": "5ft3H2GkkAT9t1NU5JGxojcQhLiPkx8UiJNWvhxMgD4QiRb6gF3UJdggihGAYfCb5m3vksaziLMwfJqTg2MjnPtv",
  "key2": "5RY87u63eDU4GezjDeTuV23FmtRznf9et5i6mgc7TY39nt3NR18Ako1qC3gmP6yJYpLLPu6Q1hGFybnWRt3apcyi",
  "key3": "49ZtmTMr47ebkkGJ5CE5YQfbLdURHBLRvQGvKjkenkX6ekM8cZWnhYGg6obK4yr285yiQc1v2A7YUV7RDWiHjdUC",
  "key4": "4o2UfUt5KVBEsDk5WHrotN4erXS71Utnw8FJCi5PVP9hDmWZzUnzRQpyhzsHHjgWDwGTVUgZcweazsqrhtckStCB",
  "key5": "3kyPDwQ1xkU6AgPJLcmaF2uVxMZrf5QYnPERZzEfiUtjWzjrvoP8jCvncNS7qoSz2aPLnDBFY8917ES6gqFCWN1B",
  "key6": "5k8smmrVtLTjtZzMreFfomHnbz2nX8XQzJGYKPpYyyToSs4UV2AM5jeAi8ukCqMR6U74WPSeCDujRsUNc1T8LzAS",
  "key7": "cnPWbuSjXba8gFqxpH2kkQmr6UneUpeSPinb8kSUi6wC7q1SZwCPwWNDYxqctPTMiSEgLTYSnSp1DRi4C7PQ1X5",
  "key8": "4GbeAPvZ1e54q6LCa8HPXR3DiuK3EuyyjidEN6wbXAdc5KQA7xondvRUrproyggyUVkd7hC7gVokfZg3W1pZPnoU",
  "key9": "45KyxfVRNfDjPvnSpWQCeTNsLutaCvmc4WU2nGgeDsd8sx7wSpSoFtHwH7Nky1fwPbLzPpVtVXRAdoafLgosQTLH",
  "key10": "2wbJqiniRqxwFU7zXqUix4cjnjYFjRVkz3tSrEAuvr5eEMmcYioPju42fwEtQeZeTzhBDbGsG94nsbLSsCr7ePbh",
  "key11": "2iqxmboCiZbRUx8siREFXM4ofEMZuWvqCiApqTXCjjbXuQ4dUmX3cJjnxrDAukCQM1oFZDgpNryb8pYUKDXsCuye",
  "key12": "2dp8QbLscXeDsz3snF3yrka9GcXnKqztAuByNKrBzPyDCXTGeQTtuhGRHiNDfumLHDkAHfdvUayunCqZAkL5PfZZ",
  "key13": "ZoGYJwJTNkiQu3vyMfwsQpuHYG8dfMs7EGdH1Kq6WDiHsstFWGs2aBMg2FQuYSpPupSRXTr88FCzXJsaoYNseKc",
  "key14": "4sEcQJ8xz9CwV5UXVBqvRqyx5LXDigPpX4uS8wR34sb2rTcQf9Us7uXZxPaMHYQ9giUMJkAFqr4p7UqCeCr7AWKw",
  "key15": "5NiWT4xKNci5M91CD2ASjNH1gNyYid5dR2djsvTGMKKTBg7DXwUD3YUR5F5ksn35wQ1zE6bCgziSWDaDEazrSz9V",
  "key16": "5koSo4viLrhXZdyawLFhi5ubU1g3gf7NkUSoVjTdvXaJXjVh2oyWJVjLzHpUgSYuLJP6iHfqgnRVaL3rJyrxJHJS",
  "key17": "3mbKvv56xJgPr7h7MHyt4ZtbanqRT7NJQB1FAMhqmL8Ahx45aTDLYrwN9HvtUjd75o7j5XrSN4BFxRTNSpZz67Qt",
  "key18": "kPtXecgcxLoY3NapJDNTd175Hdc7DkUxebM2hQJnHCfGeTzmYkNAFS8nDhLxdVKjvf4qpzS9pxXgnordycgPoCe",
  "key19": "125uwRFAFqUsGnU3u7bYQTxrZQHFL1FNdnpGuiiJLPL5iGsY2j8GTut7W1iQ8dxGjMytozFc5gDRasbSLrdeuQcX",
  "key20": "5MMNy83YBKtGJ55Zdd1x7qNKL5M4sXnLSgdhX7vxgYvABSVvQnLCZSi3GaCyszP1dbdzK5gbSPkKeWj2PgrXhANN",
  "key21": "5Chgv8Xq7rcxJ6XwmifbmcFAjujXPihzaPfSGqPs2mfi4vXYJgEj4N7C729vqRvk2nVyL561LZU538JSN2hPshmT",
  "key22": "2QAmg9y73AX4iDkS8wC3o1foHQBo79wwkphWZQM4uuDKj9E7PJsUEVveF4SyikjP4fU1j9pnaWbnGy1VmZDheTxz",
  "key23": "4X6Ee8Bdgr75aD7553AyZLQg6VvCKjLqaTNvczxQzkVDbFtYKV5kRnADcmX476dztkzwdS9D7VyAsqRQDLMviXe2",
  "key24": "deYxF1kQvdy3LXopkpG3PnTuDYUxEeHPHAjdru2gTrzoRPwRrZb7wiyzLKLhRUz7nW3y1KrNjr5wZLtGupQztmG",
  "key25": "2KsgU2fUoaKBhrDsG8vPmLQXa21CsinoQMUsPm6SbTTr6WPMCG2SFikZX9TAi7NaA3CYJzfSPDLbJjikhKyoJmzD",
  "key26": "5qyLVSDZRncX1FnixnZkNd911iRGcS9rGXQ9ESckazjCWsAVW7AcqkZ8tNimY55ox3oe81DVMv1btjoifsX2rTie",
  "key27": "4RCJWtMDWv6xgusVB9dnA24zzsD6UygkLCvk3yLbDLw8bb3UAnHWHoMs3Z2JFw4Vw9TsnG6dmShYKfP2qNFmYzfV",
  "key28": "3n5yEpmL7s4JzVoH9JhhVSvdq5fhXbKbS9M1CukM8jnfXtDFd48xoToS1JkMUodS22FGsxMSWQgov5C9wevkLqMK",
  "key29": "26hzPKcZizDq83vaepcgYPC8cgQqmSan18ZzCSgmaJB4ugtb3Tki9yz9UfmfLPmrCQHfL5WHSLVfhXoC7we6ENs3",
  "key30": "2WwbgLzc989vqR88zfeU7UbLCHJtdWrtp4CY1QnoL3FDcy6pqNfErCSVwhhvXwbYuqC9RDrc9PGfT4bsHw9MTYQR",
  "key31": "2CZ1MANYVMBug2pByNaCHHyGrYyouuh2KEjBU1RNhN8LTKYJuDbhzB1DXhwCcp5NXEto6QiJg49nxbE5w1FPQpNV",
  "key32": "5FzYFa6EMyRHZ26TisB9ZQ7yfXC3kQcVqBJWFfTesTkkZd5uXMtEy29E2zXPT5ZdBAGGoyoFwWfnxHJCV5JtFNn7",
  "key33": "5kBEZn5wUaY8GKAMbTq5UnLxuLLqL48YxkC8xZgqiswMEQsmr2ArLFYJ25HV3nmhQD6N2TkpPnubkeC8PLqKpNEe",
  "key34": "ZUGRXojEJgsGqvrvrfqEiyp6HxdBVnprk65AkrTWnPB8G6FZxbmvmKyQ32aXXnMb3uzr6uea163GfMjyrX41LQC",
  "key35": "4kQKL4KdszAwLunb9CQAZYco5e1q6vVVstHgyGZshPU6RDPdPyCdxD9gCvFdZmZJ6vHprhPoZVz6diWH7iAamnj1",
  "key36": "UaRycddwpoegmnkNr86DdEiXn3nq2BiY7sd82XxNmUKbo2HPdn4EbmcLwYnkrRKx2sLavaa5hdKwdVc9f1b1kyr",
  "key37": "5xeaWQREAuGtipAnJtEoA9NJt67U9qRnTZtmwCd4njeCHRWttpv9fTCqkz6gcyX42CVbFt7eFJ2HuS4moDkSrWqm"
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
