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
    "2d9YMKoiJhdXXYVr9yVH8ifbof2bBtUgnwcwS7sJvR27SJCY3Pq9uCkfMrV2b9RUnKmFLgin3PA6TD1t4K3E5ciZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GMBmQtexdBtnyt1UmN7tqjTdChJfRrwLDSqfFxbjkffbtam8xzhFxZ8oEvu93voWtr5mTFBUgTYkSqYMaAS8LvX",
  "key1": "2t3m1G1mrBV6GSjtdiGghC58CuJ5H1kZgQjeKE4oq12KZXxu54Uf9WDGx3k2Aoch9YQsSuS9tpKmFkzBfosDPNRE",
  "key2": "53HLzUNh5E4XioB9DKn1poSYUregnTRwutL4RAFZozwzgrBahbEnzafEAiqjzATZZkmo1DkjePMZUXASixn5x3fx",
  "key3": "5qptznwnxPhtNRAZ6Wf28bLh91kNTNDiAfNyDWShupTGnWfX4HWUCSdigrUwGYK2Qw2vhL7w3hZFYJrPDGA4Z8mK",
  "key4": "zGv6ZSkMALcCesa9aiupqTVkP6wmvNtVVU7HJZow9AK4nkKWY7kYd6jN9MJYB66BqmEToYHD1sjVPDDae8sz98b",
  "key5": "2Afw51gcsenQYHVUftzN1GeSnD1nw78GnY1xHenGX2CnMKS5GqJEJX512NFJXAh2FaYyjgUYHYsQFdd7KATSgFVc",
  "key6": "2FXjybbYva51ei9MeriZ8WTmH7SDtoaHLhoabsaYwokGPM2uAfjEP29UwnmhXMNmAujFrRvR65pmeGgGMmo3zjct",
  "key7": "KaaMd9R45cWGLi1p5Q9BM8RXHftBTJRbfrQfCFN4v7CXBkpDAdz98bNaCv8H9CSFMwXoWPqyYrgMDFQnqbA28g5",
  "key8": "4xpM66SxPYRjxwgt7EZbd42LNuCRWRikeDHqERPtc8RbAAi2hzh9iT4tvD99wVggStLs76XegnZ34n7YVuNBCQnZ",
  "key9": "2wKAw2eXY4UQyvRukdx7DBZWXta8eyLLF5sQc7Gkeuy9XYt89A4q7onAm4ACEXGHjpEatZe3qH42tpeXweMeFN4N",
  "key10": "4dtCWAkVSkiqFhPajGxre18JFCRynRkkMZdcKpcNGcCXQ7bo4RjsuBSMwkcsJftinZKtk7mymhpszu2uqKnVMZx1",
  "key11": "3H4UKWz9ptTqxArQYw8WMJw5re3qB2rWhSUuq6CExjwYjV2a2DSNp3KHnzihBeqf6XxHxtLmZQ9gsGaGDg45i2d2",
  "key12": "3nWeHUWg6uzo2YuLKHP9P2ZNUXDXeJV5jZ9LoKm56QiRhpNJpv7vhRi4i1i2yrpM4ybjwUo7kSKCEUwc7pFXBYA8",
  "key13": "5Medot2ZNu1s5pf8UV76bpXMTVhTzeiGJdVjGpeRZrTDMXMcJNV1GWaYjcUsoaFoGcMvHL7jNPD7eVkZHvj7yhxh",
  "key14": "3tviV67pye6MsgEgtGRRBhBomkb9an1BJKrYvy4YqCnsWpysFmtZd2Sro6MH1DzqRSouneUYXAog3QFkYE4fTKHP",
  "key15": "2i8z665KGamKMnFkYN9BG3ty3TWtGXPQGhxihdHu5maiXk7NhUtM8Q81p6tTJGsWM2DvYd7tKsAJWmGZkwmbkt3z",
  "key16": "3UhntnAvReZW8Q2nqpw4y24KGERejANvwrepY7JqxVGEXQqbhxuc3YzHypgRvn8HTHS4Gp8XUcYKCYBZPjv64q9X",
  "key17": "26iLM9npNjLGdrw26N571TNACvNs3CDUpeSYV8YtE42NUP752WGW9VvVhaBfkdPwpTv52LNgGUWHkLDrhL8VLArJ",
  "key18": "3CxWUB2urh8hkyanKn52MMuxYNvBFp3E5LUgKsgpV6V2ACv2icRFRm1ncVZPzTERCP1q6GhpG9yMjiciocmBt4aP",
  "key19": "2GWuxUFZr8ygygvA7RmzegY96URC7yMwxFCwKM6J5id1egnN7uzkdrnZBdFN6fwJgyh7A7ndVAgeNzrGdekNaHrK",
  "key20": "31QvRuko3D2RgngzXUvk226hk7aTnH485F8yn3SK9P7Ph1xKfXvy48n99SKFNE2z1dKyVRYDusWDkySiagw8pSDp",
  "key21": "5RBqLGx4T7adT8NAyvTsaAxK4p17ywgKupVSLeB2Loj9ggM11PCWyjE9U7H6wfjJGaqmzFmGFxXHW12mus6ugJu7",
  "key22": "3AsmwbmvmDnHPzjucttbA2ivFYv38XK4tnuYY2XdYWCiyXt4cQgQ1wDiVVvbftiN6yGpa1kXrxBVvXtZsBiHdRSH",
  "key23": "34cGBx9m6Lr1QFQg8tBt9C2u9JH5jhmPyCweAbJdD1iYQ3GnKDjiwbLuZ1E8MfptwGbk8ka29kweBanQ2utP2APv",
  "key24": "52iP3QoC42UCCXHd7VwHmU7EeL4N3UHu13brHdFSMWSbofMcXdLRfueJ7zjmL7BzohiXvSz6gyGEirTk6icessnf",
  "key25": "67k8JZqpWmk2MU316cqchn2WS6wovxgM6X3sY6MmoxLQqrrkaPxx2rkkBiXC5PWq63ekaPhDvkZK8pmN1oeKNGov",
  "key26": "27YVK5UrSS4XUK9DkoVZPg3YLb6hBKFqTbpD1scdEU7HA55Yr5KWino5Xiz9DFhP9URD7oXLN8Ydwa2jPxGuREar",
  "key27": "2EK3W9KHGFxEpzUBZXwFjSDWwp9uDusG4FpTe3rAmLADD4t6CgxWxSTg9GDrwFFQb5QjttY9V3tAi2nqUgxkVWZh",
  "key28": "2ZyMMgpJFpGAT2ogvdDtrt8ZG8hQnVZtT8rar5oQKHrt6qa6imnnrKGrgp28hBw6YmcZhRW981HUJHFbuSZszGZ7",
  "key29": "YgszFaTrVrEfozXx859HC8J9GdsHvfDRWxvo23689Xq2aeG9pq27xroUaNBXuVAmbQ8BPBD16r88YEmDX5Q49LT",
  "key30": "24f6tsHPKkpsYxA3xjkBmfn5VBNLBUfdJUYQqj4UUqpDkzTMh6MpTxk9SnqPboVS4JmuwQgTSbZCJE5GTmULtp8v",
  "key31": "3JkqqmJW2BY5U1ySDmF1MrzQPFcsKPKxXNoz39y7AJCKPjgvc7AoTfFSJML93JncDUZdYmV9vWUMzWeBXufiC6Dz",
  "key32": "5TFsFNJVLoF92G4hZ1CgfFMFHpwjqDAXCPWpTqVxqw6fUQ1zqCUUVSDfY1ZGLZE6fiPJ9kVgqjH9TQK2U9X9rDjx",
  "key33": "3EsNiWCGi4FR3VRSZ3FJkuxdZ8NE5HgHLRAV19EPxrzagv5M9HPpjYpa97czzty3M4ktk1NGVvK1NDML1PiUkxwA",
  "key34": "59CSrsfmTMPpBZ3Gb7kMvCs15azuHRqstVC1ytcZKMysUm9Zw687WzFUZqTg8qn8Y5dUnvuQ9GeVcYdqZqeX3HFw",
  "key35": "LRi8TKoLicA2GRe2AbyAiJtHkQPmrccjagomDdZA9HQMAp4fw1doGc4R3FBgYmnzzeZ3CrwPr9Jm7VQgMEmmAaT",
  "key36": "4XFfce5GjRXEjqwNv4cCtxdtgpL3KmWfzL538KNkjU9ENjYYUumGcfTTvhwNVY8UnfnFpqZ294D7heSLtkZ6dBb1",
  "key37": "4ibAM11rNg2bpZUJMJkAYdR9LAPH8u7tB8ZjZw1HwTC7wrCcg9abNhZgKoGBpm5XgtToUNWfGhFhPxYNMpJZNGSF",
  "key38": "4PYHUzSm3qyP6iUuC4JUb3Xw5vgEP2fFSZu8wWDAZAeexqiyJJtySUDjRZU2yuZsw2DkS7MqoVNa9UMXCjtDqB1Z",
  "key39": "2YWct7yu8KJa4CusonCu7Aat1He2RVm25pozkPZnrTTJH4mtPCu3f9pvSoiC4Kp33pCUG8y2Vk8EXmGkNNFXYPUk",
  "key40": "2Qf2r4Tk7d6LLkD5PCgq9UN2L9oPDs6cJN5q119KRVirphutRqqX5U6CdWVLNjYfvYSv1fJ5FrswYQ7WJ52rxRFp",
  "key41": "4u3ubW4bXkL9wjnJVoqqGyHdrcoswn2YQcLFbXmxPW61hoE2kuBN8QrXSKQer8r3999PWtr3USMgLi59AMYxYjhV",
  "key42": "58af5AxmY7zihD3kEKyqPTfc6Qv6i3oCaNrDzWPGpgcvG2wyJvHuPyepA7FgT9E3d4jGQuXiPwtVWm1DimWwUXiY",
  "key43": "59FX8zGRMQedbpasrYPNuqUTwoQ3LqSFmDG2qd76yRamwPPWn87NndE6AJsZoK1GC2ToHvGNHtfpSHtFQRbCUHcF",
  "key44": "3SnksvE1subTsq3gmwT2k91AhPcGehdbUjzU662AXtBXbwhcoHw8rr3gVGMXo3ry9Aw6JhKYyg4ubnE7DquxtAAA",
  "key45": "4jt9Vkq8CfTGf87wUnCWAvxWX1pKeVPYVzh9iDWgjwjXQrzXoshN89ZBcQ8PN6DJ5gKsNYNQnsFHuj1cBgSBNGB6",
  "key46": "47TZy72bnhvzQUA1xxSKmraz31msxhNqZLTGi7VuAzBzdtacikzj1KxYByUtXswxvXKRrjWrMWKUHcftY6793gaU"
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
