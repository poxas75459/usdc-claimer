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
    "3p6ZZsFsHCRAupkXkofojhCeeCDBKxeAJ8UeCdv2XV3U4DXrRALsP8zNeXWa89q3kSckPkD78Zhvrj96jK7Ph5WZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jxbvCZLvzwNPv9ZdyNpj3ZHMLQXo121wgi1PF7xdcrfUKyCKuaYe2Y2NVvhGn5NDds9xWLY8EH7XdkSFXysZSPw",
  "key1": "XakB4jkfM6Nn2tnodDc1rpXAA64WwnaAH5i1GAAdyJ4RCdhJDTsE3UzuvKYz3igJTCrTgzyy9GhkV8THDdW6bzH",
  "key2": "4AUUCHsHPzjK1hnYYdrECML5JPo5qhyuZ2KmBnmwfndPGhyMJqssqa64PnkS6AqDJzNrijWGqKXKRhGj2SqaxZ2v",
  "key3": "2YZV8RR9AaruE8EqZunoEutzFveSTyD6naCpVveiaH1HF9PWBxFcp1m8nFitKh6iTtMPXbsxPPDpJpkezTVmQtGn",
  "key4": "7ePMwktvNAAMwE6Qn8FqEeDcieJkPeEtNqqcr8SJKCYrUmdsvSLQfvdAnbFnto1foZFZCddwB5E8rATweRRmN8w",
  "key5": "2zB9DDHsmsCQspE9rsjKQcVazFU8yhbiRgMjoQtRvBRkm9SRaj2tD1gk44PhbTnvafyrMypZC1BRi9L6k7kA1aKK",
  "key6": "59a881mmd5B4CvHcfAEcdk9zvwrENashQcSD6DBjBgXE9kqMT2HsMEKS9dnqwzfqo4fopVr3DHB4ByTS7nW7tYcS",
  "key7": "LjFoxUMR4xP18rQcCXvFd1bbtVBkSznjBeEAshr8uSyL2fhvFp7GSfuGEfBThhYDyUr1ZewBM6MDiFfBDfXepCz",
  "key8": "2nDRAtWg1D5cY4u73Qn4RCzBnmnv2oqDNvxpTTQUnHJXjXhgSbzFJ9WQDMsdEevdLrCXMTbL6hgH7knVVAGUpkK",
  "key9": "3j58CeiKgrJxbRhtFMmyUwtbFgBM1EaBMr42dwL89ZZgmhbTJi6ggcjmdjY2HTGKKLnx9L9KiTHCqg1xSDjT9TKZ",
  "key10": "43aoqr7441PRUa4EspRJo9d9oFcwBKKCj9XnzDGy1cpKmGvmVmwLRqz3ez81Tegor2jrPGHQuLVske3Ynm69vtUD",
  "key11": "5vUrCvYJ79a3pSNJMiQdeuCi5tL1nQ2RURPFf3mwGSZf6GNi3RHjqzamUeD9EfNuiVN3pPMpWR7mNQ599mcmUAJZ",
  "key12": "3nt8voZR9XrHoBtcpzYP3tTYQfSHMSvD4BNW4oB22uEQPtgZFLVYoWopFDZRGxsTPdFFEtCLxdQF1o1pknwe616B",
  "key13": "3uzmM5cPJdjsnc2i6JEwggKx78qsZ1MhmiaNuv3iLMwJ7r1cK8biGJdjrfgwNsZC1BqVPmFxbPNnP8oyqBz3Dw7o",
  "key14": "26ByqhqwujVCJSL2yHUYS1eetjwYdDjiG6ucHcQ7KyM9dd5edATjfjoPPQuJcoCM8RRNcX8KGzMF6hmR5QcodZUh",
  "key15": "5YYdqTGWNf8c7xYukEZeUFfkh87o8wcHu75rg6Rm7bpQtYxUrEJ6HG6qjv76DMWBuYhahF39AnwAqEUi66RD8Ybs",
  "key16": "4XE6dpXu16ynW9LF4eHUhknAzA198dkXAEDBqmDkphHj9yRAHD9tiBCi3XAXvFEXwQiMJKeaD34oHZ2RWYDtArDw",
  "key17": "3MbqVmkEHSac8HDV1Z53PBE19Jmf7rcipjbqdeWExvCppY8ZUp4jcQjNk8rvQCZ69hsbthEshFHuyEtCPEfQXLrS",
  "key18": "aGvt3Eo7MtefDXVCbs2A7wPsn6D2SUiBmboSQQuc5CdtcLeygcwxCwKqzsdxefiviRdJXwGnfY2E1b3rRcQ8yxp",
  "key19": "3vm7GTTuRuJRhTJLjcjrg5PsVBhA9Eupvu9tqBagACzACMYV3qJN3nqDvH56E8ekWF6NvJE2EXM2U51isB82TqmP",
  "key20": "8pkaBdspwLuNWPo9EzbPZCQrr93G5ZYUP789kxejSpHQhNBRzRT1qds9QRbaKBW56Xn2iUFPrNDs2XohSRsPGJn",
  "key21": "3B9yvFSAeev7v6RCPrGTL3F4SVMWmzaSaaT7DdDsTgphkSXksUGgNbXYR5HViavegDDe8HBMT7G6d2eeGqB2bc9c",
  "key22": "55YBFEcZwdHgFMcakakfvTQQmzYZxMKHGpzdeHH97DJcU6PGtqiK6Uk1J43EZf7hL8bZPig416QvTWfFrqHUfwSn",
  "key23": "2EYhva5iPXBRPgukEFTBsZMy5d8aKbzyGWjT7UdxSiUL6dXEowaH7R1DEc9WW3cWFCAoNkKnKcck88LwwLtxcrgU",
  "key24": "2yvFAtqiCykKX6SyBKnHdgsx6u94wwafUiZJTqiHsg6NDpoLXvk25iL49zSNTc7k1WuFRkR8HM2TAzNVW3tf9tQi"
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
