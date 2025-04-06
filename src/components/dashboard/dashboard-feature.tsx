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
    "44miP66LtV8qfZ3kmJG9pNiyDLgKTn7scyHWLmKz7bhrPLpSyKXf4Ux3awQtapHc1bULuYctmd3J3Vanfe3JyUz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36JGaqGLaijjVFfrsivngeoRJJ95U7bGGfUKcwGuaaokdEFibikUgqBGQXUSkxDite3GdCgE1bXTtFZm3oCsJYTD",
  "key1": "4k1rhjhcWudGcz73owUtYJT5YHhLjw5HH9T5uEDSGjZFsW9wX8gJMwqqVhFBo5bBPW1iH4LmcENSFfeT11qcssfC",
  "key2": "T6u3dr5yxzKawBoLX6KLmudHagDWkEZrk34cWxTonQKrSZtYZonjsC3Mw5KsYX43HYpKD1n3vkMAiGKVn9siYiW",
  "key3": "2CvkTZuGNvAV5kGEfayz7v9uwRV1K4sy656AQRPYv5XqvrEaYMiN3HFxTjQFXYGKKnFT8yoqFeRbH8eGoXtb8M6D",
  "key4": "4CaKvdNAQUxieEfzmZzj3qRQiuugxC6E4SmFszHnBKizkg8EyHxB1xiFsV9pufm13dowedj27gh1eLuWmeDTU5oi",
  "key5": "4z1gPLnxJve6AUeFqJ5Hb6M8Ng7WREEEPeZ9NJ6LzQFqFF5yHt28qNwHGNmDmpVNHcGZYWHJL5fALqoGxZGd7WVg",
  "key6": "5BbKQYwW7CbnzqawHVqmaXmUasAiH4H8CfME3u4WQWvjcu4VHApE8BF3LhEHiNUsC5K1aEPDYS8KntPkxJ58SMzX",
  "key7": "WnWv5vKg3jChjxMZH1kZYVjhmVb2FsctVvp1ty12jc7JJjiq4shmpWSgALNBxAv1jSnS8XrwUbHKNac8u9k52Q5",
  "key8": "3BvfiweUeeMrR2afFvSzQv7xPmYKGvA4YeoV3XUDoiLbRzW7wvE2qUFTzJmiuvn12JPSNrHbi5ixBKLJYfZNWgPY",
  "key9": "5gcrjCEGJVM9zYveKU6e21BSLhzAGMPEj2QtFCMwqrCiL38BXeSAtmphhphjQFSuNNCP2NBbQD4A5vkNZMkXWeg3",
  "key10": "6ve1dF7KqTPnYkz34dMRxpUG4p5uYR6X42nqtnE7ypXJdX37DsxoCPdmFEB4V5knqarfqigr9HBDc48FZq9xmfR",
  "key11": "4Kj8cyYJwuWsgv5GPozd4z5XX5hcLkcAVLAwG4AUYWnMXSXUr5p3EboppndNu81G7QbeXWniJ3FhivRb2EqWkKrT",
  "key12": "4uNZfgcX6Z6AvfgeGwYyf3kBuiXjRmRgF7imPQQ6ndMDr6RKnouWCRPZ8EDnpnjGAQ6vG2shqEcvncXNiSq6L71r",
  "key13": "4c8a5E5Cw1ix7KPns6ozRvmHB4aXKVJYc6WoyAHUyY33KxGzGN145W1m1cqwrxihESPjHZAmzsBMJjhn2LnhREbv",
  "key14": "4ZJ23FXvUwnRe8dhMX4Gx1VJpZApzunCMe2zH5NRfCYJrjzMAcHfb2djBbzXF2ecTDijzWuoqp3pJFGfRFrREWsn",
  "key15": "45WB1oXTkSD56YbpSUbBPasbyv9jyjL8WMEadXfWUbkyTkm3TfXSzjb9BxApYWmkn8YBHqWsWWA61wXJpuQKVBaM",
  "key16": "5qYyDYc48c8QpdUD6E9uaKundiJvvEFj8VbqxanWx1tsZnQ282AwFeQcijCc7CHfgDRgPXYH3zuwufTwEL5c8Abw",
  "key17": "4dGorESgnBD3YchVtxBA1BePxeJrJWdWCX5rXnhETnyZ1bZLLyLaQZE2LRGT15J53m7j2w4PRVzDRUX5anu3Ukit",
  "key18": "3B6V4RrUG65sjr6DXJtf3m5jmpbF9kv3CFvKTzLv7aE8qxqWWMo1yXaWLSTpJBrBUvpjKVWRVLdeFQZc7jGwZqxP",
  "key19": "N8nvtHDqFxsZfuL3CUFS4gxdWrc78nchcjRPUSQVkFVC3MZmU3JaxCixYYmS9yE5wUJ1TT9Dc8fcTcrFoH9YikV",
  "key20": "3XJbTb6UtoT167c5wo12g7RNzET6FJQBk14CFqNS1Pk7a6Z6oktZg9SuiDE5QfWis32kqiT6UhVvpNbFXFAeDwiK",
  "key21": "29oJotKXgK4acQKatchS8cTidMNf1K2sM9KuyEx4S6kiRghdQF4HK6zNqhJCnEBqDZ3Js4Byj1i6FvVbfH7oaKfE",
  "key22": "3X7UCizyo8Z8USFyDtmyUka2PwUzHfaGHeSADX5dHv9XdisJqKbXcHF2FQ7jnYPh1WSCMQPomsAbafEDAj9xm3dq",
  "key23": "4JZ8DD4H3WBXkzCr12G6iaxQu5MAeK6ABhzGyZ1Lnt2sAhDhPQxWxGCkeBhQjfUmqpmxgFVKDMsnZEYz67mdpN7S",
  "key24": "2rgMsLpMLr3uPNvKB7VkwurXm5wbVxzayAxroVhb4vvUxAU7wvWnBraULSjBCKhfej6NhQRLbfByRz2khGU1TVWu",
  "key25": "3GHBx5zkDUcfybRThY1ReSs9vTRAeAC66NNXxLy92bufKR2RmTA6cmUcBs7z3asbDUAvwr4CQiXJSQ82VvKu6ZWn",
  "key26": "wEAUvSxFY6pqG1r8hHB6y1UFNrixPcjquPV6X4h6Z1e6mYbfGtPN826MpqjJyetscfvGtjiTYhpSYW46Q2Qqkua",
  "key27": "4MX2Tm1E5KyE4MTeuFX4xGgep9ow141hsFy3q4tQxQKoWCgjPKdnwNMGhMRnNWQNqxgu4tszpEmoM3JJhmCGrFkE",
  "key28": "pvn6mLRQfsXMNbfMJZzq8Ag9XmWkQb2qNadgtptCHnmoa5kQiPi4Gy2REHN5xJ6sKtcw6xyhjMFBVDzhdtttnzB",
  "key29": "5iu6GMeR9hTbB5WSVL3KvBRxv3F5ZNHA18VfEBsz6dC1PNREB3rX4B9D2XnfpMj7cNzM3vCwUBCLVe6p9eo9ACfi",
  "key30": "58oo6jDXz4sfPtK39Fi2y4oteXZtKUa3s3vauxshittB4RScWKjfqY9MaLY1dzmqeZ5VcFyG6ck97WDTxMBf8PZB",
  "key31": "5uC7LMMKLQ1oULaU4ASPeWR6DXq4hB8X1RVc55AgNoyY5mC1PobxnFvnApadNHsd7boG6DJRGt7RpZdRMpzvMcM",
  "key32": "4SRqzMABptfViZeTnPTweucatJLg8AxRhNnErccDMHF375g1ngGXQweFGQBaQTXjU6g4xq4E7wyVn8ANaJKRfdLR",
  "key33": "4ZSuf2oVK6ypUWRC6KeMk7gQSniU3YgmAQ6fphiH78RcXQXQvV4EhBSAgUacLZqK4vBRjq6bwqaJMCiqdgB7mBDD",
  "key34": "3ZkB3ewzEFnzabPqeengiFaX1qVdNL3tW1PAcC82SCMEn4o4A8w1R5tWrzM3tcmo3RCRVyEiFbiU9ShP89NHfwmU",
  "key35": "5qSFmty72TbDUnfkqFCUtHnDjZcr2MHVQf3fXer9xjGqhU1dA3qsgVcCZbUFPb8pMhDurbo5v3GJ76idqFumQ8nS",
  "key36": "B5f8mcJJrLYTtQdYk9LnJUU7SBc21KUimwLwbX4iEULQVoKvQDKfnHy1XZWx3cGNAPxtT8kbM2v1hfyAXT7zQNg",
  "key37": "414tXBkyhAAFbraT5GwqfukMjZww9xELjMkPVk7pxgbpadiANzeDskYvQ2jKVqYwPCriAvhkWxaC4B9k6SwggN8V",
  "key38": "5YyxyWuxHsbL81Vi7jBAEMDURZDTSMaUaKgR8qzn8LtGsqSK6g129TBJoMSfHVQmcMQ6bxpbTpFtp85bbVDaj7DB",
  "key39": "3Z5ZPTCFX2JJNTi84qo5cDsVarfraA3V1ifQCYXgPKDQRM4P1Ku2dkmRyGhzfeoxvL8vKBGqoasfLJVh2uqdwrEt",
  "key40": "5UV1ZQtsZL6495GKbsx7QKKjYi1TfHTsv2QBTjYqBbn8dT5su1yYLVXGn8NQrQSuLfoyKWM8K626kouTn34vxhUe",
  "key41": "3FftjT9ykqSbsy7MqTTCbFgwmqSgpAtpp5ZM77UKLYtccjV1rdGFuzLLC95AmEmUqdWvto97VW3UEpzoZRY1Ct97",
  "key42": "o7kUVF3eBQjX17D5viXzPZUxMcZ1UdCzDN2wJKE7ZRmySAA3nYHgwmrYcXeBgefMAQvKaQzc4c4kZM2EbueNjBP",
  "key43": "2AmmptsSYNEBvdkEQaUNidNCixJeN6bA4WfVTEZ6PnnzgX2n6w5M16ocxkwnsgs7ATjqRbzGSb7SeUV3BGMveSoh",
  "key44": "36wVTLp2hhrZZ9nQsDDWi6R16wa1jzsNbUKRX2a6EniEQFYGCjyNsFEo457BdXGoy6wwKZygS37kkK1RxXPVFw7K"
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
