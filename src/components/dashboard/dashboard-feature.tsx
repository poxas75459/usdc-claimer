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
    "4Wdvx6XrVLdDeKH1K2Fs3rYj2RJ5pN3c7e2Socvoh2RSLMvP528o84MCcNczZUruFW6ZLduTRTagq3cEPam1Mq1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DemR6QTtDRKj821WbdyZbrLoKrEgCuSNeCKE8jqeYndbnYxSSsUUAhRNHvzUtFKUG7JhGJ3LVJYcX2WknhJ7XrM",
  "key1": "2gXse9GtL2ftT31s5JrYePBqVkuUwA9PZBsPSUqrRAWeJ6Vc69yoevnWvWZZWPB9BzBkuTHCErAti5JckiYpg7RM",
  "key2": "3WuD1HTfjcpgKfgVmgnjM6RLooAWkgHmGHVxiChL9kVRtRh1Dres57S63QgtBBvpFcohkjzJGMZCaeGoUZdq4egL",
  "key3": "3RVasxG669P5ssTc1WHRK754Ve3rbNkrtUvU3VU2c7Ug1WsdxvQXhpHA8DnjKfvDqq4f9Uy4zjCccM92XKHbpR3j",
  "key4": "4PLQ6jXbtgoty3eWGevxT9iBXpjhNA2fzkBK7n5gdy776pGCfFZFvwNMGHEKsqqc8iTP5mJpSUUgFa2soRLTJf2s",
  "key5": "3hjkegjju52MBaKV7GzD3hP4UiEcjvTBSFY3WNqwwPkSJREZRducVM3qXobKuKyzGRXmsGmDS3YLojGjsFRXFVNM",
  "key6": "3tCUCQozuzFGtYEMy1Lqyez6yPcT8omyqh6d5cjFnVMfMEJtQtPBFuZ9w972VuH3R7JXqbVQUwSUdzQ5tcvFSqdh",
  "key7": "3m6fZ35bW7GfVigEDUzkr3KC6tj35WyaxydqZNfraKrWa5DPt4q3Z78kSpv8AuLZeQaeGfLkRa3U9qJxHPn7EpfQ",
  "key8": "oD8BDdZ522JnxuZQSRe7sKwKDgDBvTLnhfaMH9JK4oFQSXrJ9MsnRNiSCeuRmhPhRSwQkbwAPovhsktuJ8ZjyDt",
  "key9": "5NNDDQnuNj2ApHgZT4XmKHbU6qN7oZGyzu7QEcYBnSbRgkVz74Kqp22B8K7bZV6Pya8ccYBJSku6Xc9AL922u49k",
  "key10": "5YtPsLhG6PLgiZ4i9tzaHUMD41byWDaYrmmpBeyomFUu9vmWdJusTB6U45YcPxM1UmXpZ2KVfw9PME4Gx4uAqdFV",
  "key11": "tC8SZpAtLdfZbRdgXV4DyJhFUfYx8hVjsr5BnekPsGyeVPbE6YJ2zKyTdhAN9fiWE28jSdoH1HyDPxzmeYKJFnf",
  "key12": "5ghJV73J97pwh5HpHwCNaiwL5AJd521YURbZiYsT2NmMRJiYeGi5ojxdkwyvZYuc93y6oPc2oPBuBzes6ypaUSdA",
  "key13": "2X7yqNJjZH97KEPoMYDXCAsx7AAgs1zbtRrTekZJBoUuWfwwmxB42fC89BEFHhKx8i7mgD1wuSexHZhz8DCTpy1c",
  "key14": "5C5zE582waWFfRx5Mmi2S3h5PVtKTomUrujQnw1W92nsyCnvUsxL6FvKRYYPMjs6YbzWj67Ap7c7BdfcsYreo3nS",
  "key15": "3UXwJ28et4i2KRvpK6WsyfiWkwykERSqBepCqjTFSMShLRg5cgi4X5vaT6uZHdJoXopHWqQez3J8hihfxzGCUqpS",
  "key16": "66YvBJieUTRsWgxJuE33QnnxipwmAWN9cU5NTahDmj8yUrxL2VbqnGM8cCtyTXZqwgsAu5X3Gyx9hjqDQJFjRUvz",
  "key17": "3JbxU3LRQTKK4XSWtM1cxtqcd7gTeNDRcjPWK7P1w2dbw6ed88vZUYcVvW1H4jyDApGGzNKxSgHMGxRCWzTZ1srQ",
  "key18": "2yWx9P8J5P9vH5f1oHRXUc3du9rSsZBmt867mS4UqqeLM1TB6RHQ4MScoEeu7Hi22fvPoEoz8VqJ19FLmjySDDfq",
  "key19": "3RRx6TCGAqXTJZNJmHc4VAyEjvQxQGVPsHtEqE3Z7jdLe3PKdSmYdr6x42tUmQUeQeuuLm5Q2sFMW1DLULqy1Dhm",
  "key20": "5xMLbB823y7h1XsPkszWxgZwtoF6tRwUnvqZHXWX7giWExDCCYu5zGRmPeU2MDUhxamjczTvhkJCvhrLmJbMr3tK",
  "key21": "3TaKcM4LkdckDWviLDDdHEcgap7THpmQ4JkdxhC8seRPLAiqbbB5MPWWfUpJBGWRcYhBb2p6aDqcGcX2MpsK8ouA",
  "key22": "3ME4oS5eS8N5pcmiB3naMDDrr4HPHayahWGQ8SY3BTUctfj81DJayLjt6t67JwDmux2owkszEnVZgfoKkDWpQDKT",
  "key23": "4EWs6jEJtfMMcWLGFBJGEmEbJZvFSgrTjcayNoFFJX3zPGLmp1WxD4hvGMGwKmPHdUHnbmwy3QRfXzZoQZdQVKoW",
  "key24": "33jnsG4bcLxCPYqzshKpHPYit3mYzK36FqirMu7NsQLEPPW7gY7VKRtAPv2JxjZkRddz7ab23DNr2nPoFDrUummN",
  "key25": "5cpdRPUaz4bGnCJhqmJUcQgckTxUkVpRE2vdZyrtFn738antsaQaHmTECHjAJk6F77ouKz7H8Jm8VEv3Y5vXuKQy",
  "key26": "4Fp815t7nQiyzCRCDnY8VUguQf9xNJfnStrFU9BEHRq1uXnwWarwP36pAsdpNHcq4h8U8kVrAuN5B7vzWCgYqyyA"
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
