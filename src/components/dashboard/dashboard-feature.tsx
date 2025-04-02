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
    "3z73xsr6tfhcSixkVaP4DbnfeK1p8tDbPrATAH4h4PNF4EG7mBeHZwMSq1vHDRMPKcd8djRA7Mmt7oq1LuQNtKaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SHniTdiYBu96SjyexUxw9AgsNXF9bF1TaVor1J721EcTFNdQbPxiA551hVM3rimf2k9KPJaBE5eF6oybQHkJRCZ",
  "key1": "2aDSnWaE8uFL2jvNVA5U4uANeb2xWsCV4Tt3yvFMBarCYkUWtZLA3qy5R7jR3vjg58wWGp4FHF5CQNLyMdgUypdr",
  "key2": "5STUhQN3FwrHvZSYBa4jbL1rj1e49kQC3TtQfaQiLV5WJwZ3sHpYe4y6YPcegzP12FDS4HZQ29n5qXuBpvoSCoUZ",
  "key3": "4tc9PraymHh2Mxw7whbkENERubYDqAvybxt7y7T7f3FnU3Grq8iZGdWxeogXHWAmEvwAvnRw91A1MG3HMqLNE3sj",
  "key4": "tZmwGJNfcyFSbTyhaDi864jA1YKiy225QgCLqvDgd1wNFQ19wrgtYiRLjN6MFND7JMu1uXoZJn9a8iLMuwNpP3B",
  "key5": "456R2LwMPpa2Javw9QHdqKxLBsFe2J7RQHXybUDsqrvHHVmPcMB6AUPa2tYNoAEStU6fAzDCaEiKVXJhMQQRVPAV",
  "key6": "56D2n75yCXrY53Rup6UJSug27Su6DTHTe5UiNDdiFowsR59T2QmeKMEt9CVJsLmKoACsmC5bWEyrFNvZB53fMB3f",
  "key7": "3L2S447e1FCcpC5aTsRpfw7Rx9qi9EUpB4u67cDp4t88zydDXnGtcc2TTGKAQiYT1eQCJ4ngBTfiXfFKWtSxryef",
  "key8": "3VtHEkfYJKsFkDeJJ62jzqKfYCQkyakaauUqUjNyzuT2kiuNEMHxBk5QKK65eB4uiELv7mYeQWe6hKjHFBUSfA9b",
  "key9": "2zhZoQSTFao2iVFy1VNvHzsquME1JYf5fQAr89h3tqRsbaGRrnPpZLgnfhHE3Yofcfk3jrojtj1VhaQ67dcuqpuo",
  "key10": "44QNb5cAzy9vEADZacU3o896PZTaB1mE5UuAPTxKecBmCy3GJfrh3fKjft1KYFNDh2LoJ54aJBd5HwMGJtxrgDRD",
  "key11": "584S6mCE7LujS79DRRLz1TMJX8wNvMf4zRFZnfQ7PWj4ucDgzdCwd9ueHrD3K6qnL4sNgu7opvK5D6ZFFhRcvQw4",
  "key12": "42GNCZ3yc1K3wHF5Y6mb7sbpssism4WyZQsLbkGD5ouH2jgBZWpydrRseckUcHaW1e1dpcCnyv4tzJMYh4sGJwUi",
  "key13": "38XtChGJ4Yx4jbw9WpjCySFWMF2ioE9GujQ8iiz12DWfduMTtVkHpngumH8fm2AjBB7LqXf4c9Tgd1F1D5fL44V1",
  "key14": "4Ut2epqJ4tsWpvfUccYbSFywvSGRfy3ucwfc2w7ofTRBK8MGmq4Gyxh9Cy1gZJ3tzMEiGa6wfQ3P49w7Eb6QYsW3",
  "key15": "2kr1GLnfo1a9xoiDqHVBSj63ooe14BCZPLrkSaQEVeVefBiufmR7XXTcsPGQJthEDRkUyBnni9ZyMT5gzq2811sU",
  "key16": "5x9Uaa2vDwTSeNcdJ2n8rtNDARtNYYDbyKG3mDDe9HSW59d9KpFAbAXUbp5dKAbv4VMwTFGySY2chacjuTfSXvES",
  "key17": "5PhtoPjiSxUHbo1RGHAhLZaqrSTp21vXVCxQwjNqcC2RgBxmQrUrWqAVv8dqKrSrtYjo28cHxbFAYS67txhXoAiQ",
  "key18": "4d8XGYfi7NkeUA92Tun1cf3qoGh1fnmbby2Zxqh2Km8qYYNs9f8rcd92SNTu1xMGvoQGTv9XkeS47xQFFRwPrwj5",
  "key19": "4ySg2Qy33YCdreNTyXs6kpCdnGkMbjNBwRVwH2rAaVDEK5u6xriSr7YP2oc1MLnSvpJLNq9nWscEKvVFX9JhNXW1",
  "key20": "5tQJCCdHPkUAexBc3gmZn5jhwQb6gAc2NJs6wMwErG7j8Uu7x6LZ9MaHFRxd1DQLRpmfy3Lqgd7ChJtp8CFc5Vr4",
  "key21": "3LSb9Ep9y4TqMJwDDbSZywCfALo7xxUfEHcMxzosSmsZGaqNq2wnjVJuQTXy2Z1HaiTvQs2xRPevcPf275HbmxE",
  "key22": "3vwc9QS9BfwLij4ZSpn158Gxk8ST9yMJ5Wi2TEnNFxYgreKcusko6Wa7H31emq9Haa23pjPo1ihgHAn8TQWi3qZ9",
  "key23": "2hMzYruf4rB9ECkxBrW6Pg1ojki4JwdwzPHbH5HKb9hJUg9X4cBU4zmhtYP6UnS8F7S2KnMK9Ahnf7dsvaeDrknA",
  "key24": "4L8K1ecm3cXCWVFikapWu9x79HbTEjaui7zGiQrjVbTiNfrYvKXu7VWA1vo98cCRU89cnmo4yaKPGmQzEHDFnQaF",
  "key25": "313Hr6jwKErGcD9CtQ6Af6kGyKDBomFWY11tsXSaYBP7RqKp1XhEn8TKQTe1BaCgZoxYV99MqTjmE9Qb8YfSYQd6",
  "key26": "2WJtpCTJQkt8QYhadsSymhgGHV8bKfy39AjSN76ENHc1TZfNDLKHszQn1LmfVgYBSPmRan47G82vf9gU6jdk8USB",
  "key27": "yL6v1T4ignEgJXoyY6PV6V4jHPiJjGZDdXDh7dSNDD3cXb9AEmfnJi9ABZVkCSoeYpwosPVMamLtgFKfHWcykW5",
  "key28": "4K9rjZCBUavunYvT58Qw1pUhTx4c8DYqGCCELE6NtGEGFx39WHz56pknVHCEg3asgP7wgGAg7towUXAruibDPBTG",
  "key29": "vN7mghtCoSAGcmAgbghprRvqruGrzJbS8gg4STkeyEUDUStCMXq6rEffLBcNu44tdoPpx2T132imMXbKjA1wFPY",
  "key30": "kgFKVaoCR5ETjp5UBaiJ3dzkHg3YT7fzE5hq9vcdJsqWw57RgdjoAzw83F3S9PxedGJXAKC4sHXsbaHx4UXc6si",
  "key31": "9Fer59PLWo2VRU98g9xPzWzaEcbkRxduMkmBff5XBD7sBpYrTf9MPSLJoKdQcwo3ApakMWHnpMuwAkgu58SDtCZ",
  "key32": "58HDBMEgYiq2qA2Rhj2y7xUbm7a91FjwEaSBXkmiMQtAfc9wavK6wWoY3Aj7n9S6LPVcG8QfgbRAmZE3jESNxdBC"
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
