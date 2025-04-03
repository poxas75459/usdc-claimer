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
    "vZ862rf6z4ko7EX82JDq4xSx5Z7iaoMJAgddiNYUZbdhFCY6pFTWLVTqdMXUhciBmaawpG1CunAsCzvinBbmgbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rRQAgCFCdXsexyoZNVnwWxUSacJ7SQvwqryWsWfpFSUe2T6iCoMGRH4vvnKnQ76WZzawpbTTZYSufty6aEiZNp5",
  "key1": "4d6onJAXYPF8kpkY4WmNiMwmtH5WQ9MjZvCTfWspjZPWQEDGQzgBNduX7RNUYH5ftFjHiPuAx6hBD8Wds5ecBH1T",
  "key2": "5J3Pawj8Ku4Qd9KHsEHr79cHpk4coQr6GMo54gmjUzhR24skvWR1x9tJTEe6YaGDGd4xAZdg6jtMLMNoKGro3eN9",
  "key3": "5YB2wirozZSnX9tXkaJFwGLPYdB8V6xjXxBkPNatPkcNHWgbYeeQAKMfpQ3u8Gsg7Vx5zGdGEBPWzBKRMPbUoayL",
  "key4": "WXzFkvFH4WBgeDLck9gM6FNXVm97Lm85Tgh5LoLTMrU1LfEbgBXQfew7tfYEFxKXHsTjcziC1gSu47DJGoe7e6e",
  "key5": "6QQ8WBEAFja2BaHPKF6f78saXSXg62fbU4UQY9BP37WR3hcZaejFRJMWCqNqumqRwrquih4TeaApSrXRzqZD92V",
  "key6": "4AUtu1xCt5sWGZtm5zEL6UDd3rLqzYYNPmq4aW8uNuHAAHXo8CmFdggQf3r7zFy3s85ZZCpMnrgiqchZbkBPcNCS",
  "key7": "4moE9WPHAS6EA1ZeBPuiZpT4rzwjbiCWJGXgtxVe37eHwryR62ZY5s1kowHy32WByQfkgd3uhB9bUNqxsvX9fc8y",
  "key8": "56Xu995LdyXMuvj5EE4o7R7zirMtj9K3VgJdd7K2pBREwPqUvK8gRUaQgqrRJjaNQNqsJrDGHpDdQp3booMsuUWG",
  "key9": "aA3iQPYhesxxLeXBp9RctxRE4i1ewJintHypgYzE6kUnokppUMdFDKzmta1zXUygMnuAJMahHQLfGSsATJ4Yba5",
  "key10": "5Mr5wvthJ2dWFz4q2YJ92xZtYQJcL9MCjbQ3BBdjHtSUsofgpfinpRDxHsVjpr7Vveck5TAsk7AY9CHcrqbcMMSr",
  "key11": "213oUNhxiNvMjRKSibKdcSZa7FcXK6Ay4oQ3QuCgqv1uQZC4jwS6BvVgQn8H8qapbtfzfohCsQprBcDeeTt3VLQE",
  "key12": "4PE8PktycTySzZqfKxQk9VChtvRazbuKMvRQqXYUnseHYpX7QyiP3skLr856v4c9w1hcT9U3ktopVdwaC1JxdG7W",
  "key13": "xMWYw9RfeEmpzxQhSEMma9JLE35VdogTC2hmudpK8pJRyvUf1EqPNPw2WRzmascngbjZ5xxVxtUR6M2w22WxqAv",
  "key14": "2c7SM3js35pDDwVTFNhXukAhZED5E9ohUaw7kH5K4uAHws3WafBuBguTSfN5B35rr265VZXUf8CEqVFFLAXpB4ZD",
  "key15": "2CHAxsSjixnmBfg2Xtsu7DvEXBCEujPyLWZLtDzN2QVUx59KvWgFtRQM647fiLCj6tDb8DspJr4gA1rsnG9BpAMT",
  "key16": "4cSCqiFJkqrxJodGsV6yDJTBJcRVimygZNgCjYNCiopvkXRHmAzu2UKzCestUt3Q1zwFosFsMuCWq8LoQNiLkD2x",
  "key17": "vv42UxBFfPtDFFmzvsrKUtrHFuxpGqoSQaQVat69RyRNVL7rYQtJFGNrEWD4BdEPAQv6c9wzpEyowPSKuyHNgD1",
  "key18": "5e8ZpW78rqL3nrGtBXFPPQMFoRua9zpeCLX2Ukm2XjnT5qkTmFKUxtE6McWvi1WcdMnWrxsrks9NBSh4Xir1G6Yh",
  "key19": "3AoFvwGjtgifFMTWz3reQEuVcRNyTs8EZAwcPFf3zbk3c9fp9SjBPsQwoCJa2JS4eFdsPwEzpQboghJQdLpP1cNA",
  "key20": "4zYWV2dDiLkz6uNWWTZLEokBsoTuoMMHLWB1cT1WfU2dPuoQ6gS5ma3WqMQvTS87NTiGCQwASAD35LmQ6LkubJ8v",
  "key21": "65bzPigGWULMR3NbB4N1eyvBmJwHN1yTiBzq9PfwtBYgLmEc3aKmuM3eEznpx9ZFZNxzKTJjqhswwV6da1CybMfd",
  "key22": "ow7KY3AHMWxVPTnoX9Tr6k9gWCYhTGaZzTf5iHfgsuUSz8akB8Hw2MrDrK7Do1UoJviqboN5GDz87wddsPXP6yW",
  "key23": "31QXgHqQvUczKvevmo4zmkXx7P5wb7iggxtkbJPsY6YrXe7Jrb4eXBYQ6bXsnmjYdSWEp1zdviWpKVxdUhomaRjK",
  "key24": "4EHTWaHZT51XPxLYy42hk1Mto1Kgko71afZbVTULAdt4sXXMVuAFEcuM6tgmdqR9Az2VbadQ6jUB8g2texUF7s7r",
  "key25": "3w6iB7x5axTzGCoBgAT3Hv6SZmxXRxTBkbpG25KWHwEvf7dVhZXb4oBr5mkAKVinkHtncNqbVqXvwzo1wd14tPV8",
  "key26": "5WJ6E7LQEaCjeY9MQm3rLvSDHXvAisFREcWR7idKzkfFkPaWwHpJ1yuimJwbcrxC8LvuttL4qcnQUkKFQQfnrNFg",
  "key27": "3CQcZvy9pXaodipFYU2t5S1hh5g6WYj6EMCvz8pRD8wj6TcW2byQPVFQ563HPXaKK1nQov5BnL4EKgikQPiGHVx",
  "key28": "28tUzWE4S5kvFT1NjLnFiwNef517LPDmjJfzJNpQEv5Udy18fpPua4EjU6WTU7bjBL55R1rxAmrGbzHW14mpbYRY"
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
