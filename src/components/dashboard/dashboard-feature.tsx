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
    "31JNFKBgbUvjTehskhPXtzRNzJPK5V5gRcmTTbBrDbN7ERR7dUdgPvpdpAdDtsgpodU8n7P9DyNkiwtGzHSYvYYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xRzD67hxfon3QYg4y1nrtsZ4MYA9eNVz75HUm6de9oUSrGLXCkHDa5mnWz1fPFJWbgFTSPcxthPrnxzNay59XnD",
  "key1": "3B6797Bo71R1AHKQMBMpUFwRpybwUAE9Xfc32o9veTUpjZGBASxvrucUyMiEj86JCDhwJHh4xD3wZHYTCeyjCUeC",
  "key2": "adtL3cDqQz74XnKRCmpX8vTx85d5fUttHYZiab4hEMwr8Z6LRY3CSHYvnBSbpTB1sL2sMXG3b9fnhEmQsGejsxp",
  "key3": "4UyQaua4BWpEepHNtytQCiKkmg4FphUMgummujc986MmGfFUUPoWS5cp7mMbhwqjWAifkshwFXutNZo6PTojf72F",
  "key4": "5N2C2JaknbL3QnEeK6QChbYnKHxZrQ39hSS2MUXTo9XJVhjTZ1CmAivj6nt8674PEwDzZjSyYbRypgfYsKDznL1B",
  "key5": "bgRhSMemAK2GL4dioGZ5wDxnL1uYxcumVamYpBX394SLuB6sU9Q8t236ocjYbqTXweuFWL6ztMofu8xwX1RAwUj",
  "key6": "2jTEz2YWDw789eQS3QFdQdbiaN5WTNpXXgyTouD1jKArXFQ1B7as1GwPyEzHcWMPVmxqodDLLdfMrxB2mtMM28Pe",
  "key7": "2fj4EXwz8vXDadRCAdm5J9MSDtLzzob7aVLmbBSBiNiv3mayVZ7kErCwLB6HAZbTPDW41bjieZToyX8TYwEinafX",
  "key8": "4DeiNdAKjJE3DTcfk196S3TG9rRLhyaJDsqVYjmhf25MbBZA6YQGJ7FsXsVyuiy9vNXz6Ha6rwa1RyBqd4z9AbZQ",
  "key9": "5GwiwrZejaiJ3Y9667fH1znJdBvakQSqJY1kzNahixqvmGJ9mr7fU8EQQBWpQEXUaryvzevCZkKt6C3WKLLmkN4V",
  "key10": "3FyXBMnsZQY3qQU4dmK2e2cETQ4ETrMS1quByoEkhiAftzGDixxvUa3yC184HKDYi1s8yikqBx2RBpU4FRK9sGyv",
  "key11": "41f3DT6wxQq5tDQw3QvPbR6gzS3mNYKhZi4CTwT3waPuLzm6TJhDNouzz83s1RByzhxjHASkzQoc3BUMUb6QGJxX",
  "key12": "5mXG8ZBZ5B4qwjtfsvK4HtkNYKLkjrwMuggvusyBiZ4M6CzggipgYJNoSsNmR6gb7miafMAhEq95bngn5yjakWeU",
  "key13": "GetuW75hotYsFdoJ4BuQzfYe49BiA9MtKZsKM5iwnvLAFnf6t1XFNSMbBJruBfWuPbqAsTVxe5r7GVeNxnTjVr1",
  "key14": "2dDCHECcsqXGXGmr5YynMxoqW5B1Ndc1V42mz3YUL9HUPrgfeHbifir1i8brv3Pv87VnsETzSthfoX6pHHpefCJ3",
  "key15": "4PhmygTpyJwFzBiaf1QdGDE9iXE5a6esfYmEa2iArbCmss9eDF9PZyoRzNJbQg29LkvNHboFu4V6bZFDEqkFdaiU",
  "key16": "5sAmv9TTGtqjyubprRFYjLW4txn9kqXpxbCojs12zuA83syHpBWxkETjeF12VBtZrpAhZf8vW8XevsQBhheAUD7S",
  "key17": "43GZYoQdsvBEFfErR2k5bB3Dvk61XWvVjcQLTm5q94jrjaN2m3WEA3r4KpaACfkYCL8v5wPGaecwfPuNYT5XgwRW",
  "key18": "4cADHtdWJL935DKeEVWbj3SriE2LCXZPmumbtwgkzAK13pw99yqTHqzk922Y2NSckKtCz7NKik4aCdhRutkA558Y",
  "key19": "3MvgABPV5bZgbJoTmT7CExoHCMwx7TGRkAEtMwTtw614BKjjpXxS9AWz7qKYacHMJ3yUh3tR2bLjUmmc4ywWpf3B",
  "key20": "5dVQsJHZG8tDGFvB4aGcrDAKDz5cuixm7X6Q7cejNeLG73md8mxWUXCnx8dimJmP7E7oeABis8UfFhT5GrKTuKyH",
  "key21": "2H6tu7pwEFnpwwqhCneEFVWjwmFPwfA8WFidH55PkPMdnXotTEYkh52N8S2ZAh91eiN311MTCvzHoGEe72RoY2zm",
  "key22": "5oN142chbvijKSCsC8zLbj7nVgavKQEj6RLbVto9UY18oqDDDTxeeeHjWYJ85v4jsPeEk98GswcMzqqV4FHcdt5",
  "key23": "3PKvGar5uSGYryiCTELCHXhYGits22Lq4NHm1okkhdFk6oKHLGcYHk9HTv69XwcwqeT7A8QMgNbqSxyXmT2B2DYk",
  "key24": "3GfBWJQjNhNEfYR3nMxjBUf8zJU2WJhNwVzKpTTVePACyCC1qXvApwo5uZRsgtGCZ9uMApSJP4NsDxSo2cx36ckZ",
  "key25": "64rHwE1iu8cq3HSuLWE5iiXRNrUpauwedGbCP9JaWpmYaHWGFwNe4KsUTc1QYkf1oZJHLm1pBgS2WXp464iJcRdP",
  "key26": "3Thpwt1yGYALu6wwJFJXKc7Z6wnLqZgzx1TE8Me2jtbgv99EfMyReiW5Bwn3J8G5x7hNzUSpnZ9xAKCjs6VfwwRW",
  "key27": "2zgTGqQ5zGefYenRdoZQB1XAMCB8TpGGWsPdEWG4EAk8iyCtrEqBepo66L6fwTKwBBMwWpHmPTdExHFgHg5jbrMF",
  "key28": "SskxobjoacdLQBDEMLmi1Lqxz1nLH7VpX5HjumT2rkpWNPbqMEzrchy6UD8kXbeVEDCFHw5TriASRkaET1GbNUq",
  "key29": "kpRzewXpAYZmgyG2VjqwbHbpWCgg99Z7NK7XGA7FWD2zfBm6aHsnu6oJX5VxtC6AcCcEq8Hb7Uah7TKz2SC5yjB",
  "key30": "28eNb1hgsk3xrkQ9j5uA1BZZvHibXvr64T5d51nAEx14zPWHXaLpy6jaMUkoQEppJfiLukwgdg6ncdvaeH7psq9M",
  "key31": "TczGQ6ti9s1LDbfQcQ855B9Ty4gz1oFdqxvCtW2Xta1w5EgoaMpWU1vwv9p5L33kCTXgU2kCiB4hSzst4NLHH9L",
  "key32": "4PDL6Jzoz5ZP9Zn7AXdD4ZMgYT9fmhKctLReccHKzAMpq58dP8eqfJoQrRjBmJFY4Stkzybm2P2avH7qhoQNmFfu",
  "key33": "23hieBURpz77PbnZkudcHp4wMuU6Motx8vYg2cWEQKCcH7TWyjFFoX12cdwDvcbk13LWRFPt1MwXiyx278bf6ZQp",
  "key34": "pLmUa2R8zLjvC5QnXoako11kbqX2d2665op6vsssWsRCQuYRQchABZYAm1mtHDqDiW2y7jP1ssr3MLE9vDy6FPM",
  "key35": "3rRVvRyTAarWvNNL6ZkVS1bYphbDAPbuudKXK3tXM62X6T85QDEx4fpYUfnCgzbG6A94y23akEucvuVYL8vKkjhB"
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
