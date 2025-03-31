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
    "3PM8bwBx8sbDR7c2vc6uGjEndpeLjJ1nPEnoVw3y99AWa5kGaxtXsod9Gr1eYSaopspCfYfPuG8VTwQEhd1s3pxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AqYA4Wds6EtX8GjzzdDMrCeqwyJMMm3yJER4oSgjvs3J5TiPiL6gi7wzz2V4VAMY1JNDmrU93ufTLWWKL8A2Kpb",
  "key1": "5L5G4GKn9JvfB3mjusSS7boPRCqVHaGd57RLBwzCNSnojEiVtfCquP8S5Sh5TszqtvtJQRXg3urM6mwiMcMWdNdc",
  "key2": "3wkkJ8f6dCrJMTfoYJkjmdSp9tSXYTfSwzeJyjesBcAPf2iJBFLNZM5Uv5bK1BBvbRL9f6YfaxvZswD5v9iafkm9",
  "key3": "2ovzLq1JAs1sb97PpvpxKZjgiHZ6PPaR88tGWCJY7ocJvvbxshqULaSHpYgiTcShYbCmnvsnZozcozb8PEUkVfhP",
  "key4": "38GTqrNm7QsTuPaxXcE67ehM5b2hSm6dsQKR5N36C3bNydaJLc7uTorMRaSfYvbBChkknL1ec4d8jBhnCzogqxD5",
  "key5": "38UQ4StSMYAiZR6ZwBNqXWJSLyeW2JCDurNW8dCiJtyqza6P4UYoNXR7YygbrFExNg2yQGs53LBDxLkr14LBAHY9",
  "key6": "5e51wFYpNzbnKjtGWJov5FxF8kWb7ZrkdGcJnLvRteQBEAZwDsgQGqRiUEXi18AeWqUbREPQme7jjBpK9YX5cPxq",
  "key7": "2MN3qJEZnbTVUHnMJm2SYqsSRc6f6u87Qujry6hVfc2xGNpnvAufBgRMU7ptAgQ6JSxn6MJ1npNK7unmx3ZkK9VH",
  "key8": "4MJovQ9yG65anhee7hUn2cCgaEtyBX8C2ZW1CkTsRMezZPW7beotcEqqQ3N73HJmWP8iQL3f7n9Rg9fNPzKKPTtz",
  "key9": "2vgN3PBxg4DbQwF9vUGMXCE357dZSZYCiB7385Va2wcUy3uHHiUtKSiZZbQDz8sjETAkd3rCeF6ykWWpZCvaQxUf",
  "key10": "3b8wdkRLSjc8Xp6WcCjJccrJ7SSmLvj6PHwYjW7ELpMANxmsutKNg9CvVvVn3XnWxs6ayLmtxhiwLCeuwdXD4JrM",
  "key11": "634sTDNttwTEeSc9Z1o6zyZFTq2iH85DKpiaNEYMDeEVSJKsk2dWWswd95TLdqr2HFw1k2amR7nG1aYSmpvQe4nP",
  "key12": "2A7JcxiP55ctNR9L2mj5489EBV1VZdg4Y5dEsej74BMGSMQw37eLKuaBDZy8tAmM9uHrUyWCurdxZcLsMijKXTSL",
  "key13": "5gCUURwMdJ5XvDjL649b4kmMKgpMnerNkygZJuRhxFHeZXbTDaq1cXHwyryPNHwhDRqHiwcLdKt3TCxRxQSjyh6h",
  "key14": "4MRy9NSyCksjE1uAXqHkds5pPDdtEJL8gLwYZH3arAGfWqLsVbRn4FZrJM2YumesQqR8iHfqk9yqSzL6abvpH8KL",
  "key15": "HBF3p6rrUhVqPjGLbxH62ZmehMHRxrs5tQnQ7ThRu8XfAmCgxLkJKZwqkpMupgPHNaiEqQ3dfcVmDYXSBqDm8FE",
  "key16": "5xfCBefjKPpTN6aeJTx6X1BSDn6xBf5xuGuiAQrZkdf6T5vvsLcEsXJVzijy9Yzp2AxxDW4LeHethUj18cB74BL8",
  "key17": "4P6T94HZtNiwUVoEQ2wnu6zqWGqb1umAtLmvZEM8nKSJWnFQh44Zx5awmzPJvcsRhra7yTV9vWAQEqkmv8orYBcB",
  "key18": "2kQDy8Zd7UsbZr16Yx8EpBxZTGNEEc4GPEt2jN2edAu1o9tZCbGPEUgmqvV4R8rut3EhYNMgD3XHud3uTxdFnAxn",
  "key19": "xNXjXktn3rPptrzqve6WzQkMNrvjDYcFu6W9f9s3hHM1o67q2UXgzde9ztcYoSgCkzzjLLX9j7RSYibX6dMMi4t",
  "key20": "5usQWR3a2aDH9etyYCpVK7ogdbucMtcPbsd2fGeCESRDECcQXjXhDhYSirYNYjTdED8pL4Afvi5UjQ8VfX8npup6",
  "key21": "5irqeeMmJi6BzaGtoiAVj9nYWZHNeCgB2pU8qdy28xNkz2kgYK7QjdP33e34gYjMivcGJEQhPa4JXyhEs9NJYuJB",
  "key22": "5qcaUTFyR7ZFo3JVwAPheDZgdtFzAHv7m5rCzx3kk3qgPBzfNY3LuQSy1GVipvNJhrdVpACc8yG5zn8pqMhg53gx",
  "key23": "3ntsZ44DVvNsgMRF9ACD2bhJDqLjAQTxaUvXY5oi7HL6aevRFy4eMAMcyEtBG1vBjxhxHpNNw1udEVaVkVoLCvXq",
  "key24": "47mogM76Jw5mL4NkLCwyEwdp8tuw13XoP3ZWd6HmEhKUJFhNKJGaqpcMToVzVWK7QPUePVrN1NofaoEREsbyDWNS",
  "key25": "5D8BPPJdCV8rPrzPbBpTfAzUXS6sW5g4dckjQD2pqeGViog6qoVXRQG6ATsQ1X5r8hu5qiWVrdc5HzHLM3rxsKFJ",
  "key26": "3Z5pLk3ESFynew2ZtLDqWfBpacWmQeejFJ1MemXM6SqwKx84rM9tn2FbGeXS37gg195Ka3C72f4pxgJhNquA2X3Q",
  "key27": "67VamZRFLpDKbY6tu5pXRW8R1NGDL5XckgkeqwwB35vwpRvUKJyH2sYgdyEeggg3KYWbMYjKHknZ4nxtakBnaXg6",
  "key28": "jC5XMRh7Fii2Thf2L1aCu3e5E9rPSFSzK64hQNqiytydnDKz7e8dwTVytPwEHC3FHqnNv5zkQHwjUJ2vAAdKkz3",
  "key29": "2ZCHoMk36ipEtBdaAANqeYAh7bcqxnAtbqf6me3B4DW6h8nLxkevWre3hk3csZAXzWGJFYkKSN3w5wwFC2W5DEZw",
  "key30": "2B1FzxkCKDsXtVTSAocSBuHNDD5qfZkBuGQcoVncNmsk2816UiHXAphRg7WwMJacpBKPQmJetxXFGZkwh68B9Uct",
  "key31": "5sEud7dQ4VEyPhCv1kUf3sneFzR6e7SrqD2QXAVXUaRjzjFdodA66LGH9UqXufJ8EjKbZQtJmbVyXfwJLC8a2rYg",
  "key32": "5ws4CWu3AvV5XDV33a8gq3xyrhJj2Sf1yLCpvgrVQQxPeuDPqa7x1E2FAMuR6BRLB3oouNtV1M1LwyLHMuUqqyeG"
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
