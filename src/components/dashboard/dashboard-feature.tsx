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
    "4vKMi1WojwfDWnFCYLTfLxbLFpYkgWnTTtMTgDy1EeeJoDCxXeokUPzzHSuUrDsBrn4cCMF16uXYpe8A6hTKKn9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QaXzGxwUgRt1pUnQmdG4RQYmPVjPXEvPSiDBXn7zvrjB4Tvq82sCxV2iq9E4e3XZZNg6zUuzT3mrFcT4YTL1wqt",
  "key1": "4Qmyjyr3U92DZNgj8wSTtTQH5zhFHserihC2ps4g6hpS6Ghh5v6rVmtjGHY9FpuKbqZ4t3obvv6MXWn5cn5ZonTf",
  "key2": "opjuqEi5PL7nVuVUU8yanqsxgw6VyuGjdXeMxZPeB4BHyfrS5x5bWvrLxufkimE96F52mtBN7Xo1Ma1mdprYH3F",
  "key3": "24wb5PPfVQXU4U2rEK4QNVbvvyiiTzjmExNGbQo1PkTpErqLq3N5gzy5eJka8onmDeoDLjgUNBn9WbLG6ri3UjMd",
  "key4": "585ZvHRrnM2MmN7XqwmvsMHVzbsrqHtNjPQ1KHtuMXibDUUnm2p5a4KgtEZJ8xTSB2i5pbC5NEQrSmSKiZGjtxsi",
  "key5": "5XSvEi8kNKpLW1auxSpP86KYBVW5e6ZiKEUpsLbTkUr6QGjgHMaGtsFmiMEnuNtZW6jWkC9sAe1NiXgg2t1rn4Gf",
  "key6": "2r5ZGhVAJquo1auuwqv2k9XpVXNgxizUhpfuhXAMahViJfahbp7WnCczN2DX8R6F5xWDKmwtRGS3rVWMSK9gqpVi",
  "key7": "2JzUZUNNRotwrhBV1h7kUPxMsu55zxNE4cRyZiTvzg1qdq4ycnfeBahiMbkHhhzo88CEe7hJs75BBwKiCSfDB1LD",
  "key8": "7pKvR7SyuT2X5EExbrvNmrqvQZjedZAVk1LzrgLSyVpVSKc5xyBL7hrG11XJRbaUtik8yTZrUNU529q6wPJjaYa",
  "key9": "5gR5rPxAbkYQezJXRwD2zkiNWuN6dhEGj9qQfFuQfiJhb1LKGjPPUFcMsgfBkdRxww6z3Fp4SGSsoMzxs9iZYzbj",
  "key10": "Gm71R55XNZP8YSd2qNcS7K6cEhUejQ1BWsFZSJMHSk3dGjZimEuYEkARbpKhFBBSSSXpJ8udw7qkWRBtGKPvjLC",
  "key11": "4MfWzLMHVPxXw7UUt4pLiU8nXAnFA76m2vnziJ8r5U6tDKTxZ3eaGWmgB8ZvVhcRH29FCMjDoTMGibxy9rVoTssP",
  "key12": "5ALtk8bNJrHi5wcWsNhB3HqbrVWCwo3DYF2xHixqX6EZpfMawvQSxFCQx64Y1GqCaHxKftmhn1dkDBF7k9zQSUHT",
  "key13": "4uGXAF6KDkNPoq8ZzzsJDJo8SgnEdbyegHHBVgWcnguy7oLAaeuotJdTP6V9474FegpLjvVC9DQYQfwawdx1bim8",
  "key14": "31PPAkDvGzD6LZcvLjnpWeSu17YeksdUTzQjMVBCo6iPxqgY9wNwQjaw8et4rYcxAMD3tWzxV454g8EMRUUr1rMQ",
  "key15": "qjSC5V8kT3NGcCkh49DKrtTfTWBagVs29cB4LEUh1NYQYr2ekn4oN53hqrXxJ5zRShnZg3TD72PUHy4E3QbN485",
  "key16": "2mFoQXQ7vvmcfPESQtDhWCsK1BzbjFEGNtBeuwWpAfb23B3sbTigv6hnoKJVhGDqaeDrqvw9X4wDWCdzWNn3CiLv",
  "key17": "5MVYKSHSmos2CRLH211D9zCtPnQB588BAnqKJCwzD5kfmaTq3PxJxvVGW9SVG3C8H5dfexZz2949ZUfXxnw9RWLi",
  "key18": "2kBppzR9bW9JwXa4YmQSPQQGMmT4mpLbHtNiq8CbSL1Rn9u6eVH771ZEc7Kaub8aUUia8gpPnf4aeS4QHorWKFFn",
  "key19": "5Fizrp1NnW8grtF1ov5F5K6NE873New2EjZUjyf6mcyvBHGN6pqhHwtNR8ReKu4m3iopbkGjT4jghCCHP1KvEfTk",
  "key20": "5fpTsjGbatt16uK5BRnVM9YA5TkmaQAdPntktLC2kZ2PSgdPULgQUhZMvwb18uZ6ycNZDaw9dYv3pUu9cszdFjnW",
  "key21": "E88CgszppEgDTmTUL4m6DxzWBMwSG4hqud6LpgEGEfE8WoPWYM7uHbUqcAa3cGSt2u2XHzrL6MHjU3subnoAAEJ",
  "key22": "45TgYiYgaQQcWBzrrWMYqtrtW1k4q6ccnZfi8xWYXYw6NchtChdBbdcxE3Bj8GTct25RqMsgU21ES96mN78nedhu",
  "key23": "2utobR7atEHYToSh2DqpVhsYEmYD8i5hyTh5St5ZnHCG3L98iv8x8K12WXzArnaGG55RL4KXZJwEefZCE1ZretbA",
  "key24": "33cdiUyRvrzPSJBhapAA1r1gVbDaPAUjW5nQ2UvxrafVLFJZdRci4KBnKQiWgQDjR26fdhrvFaKn6Jof8xks4amV",
  "key25": "2qLAu9odoJpRCXf9rsJXdsjJdTL3JdircEFYrvN65y6Ujb4v27shrZQeq37g4iuGMKkaazB831tQTckMRDbHpBhx",
  "key26": "32scBkCfvmx2DxfLwFCeMRsTj59BhgqT8v4kUs3iV9Z5WN3qxaBcjieHL7ZHmEKtvbuivPC9JN453Hv3Kv5YitUT",
  "key27": "66YujqaaBdKXGBMRmUKy5vbZPxUswmNb9vzxhQPZiC7FpLVrhkv6Znm2iDfpt2NJdz2mtuVyFKTxkxMp7Zc8pMzc",
  "key28": "4DqiGdVJVbk3xaJL5VzPQEshhsy366tXGcseQ3nqVwB5yn8qRwuZpgRvotaVeELnNcLNW4prGGRcp9G6VxrMFvy4",
  "key29": "4Q16LgfBFYWb8ve6gAYSTDrusUPDBAsgvibQhutyrgQxLRX4pwVBS2EkYEYT7PFoFKpFqfc5rTR8gQy5NKuNSne7",
  "key30": "ZYXP9N7TiEwbXUGoByWxpTeqzYfHsxX2BxTwsB9LxfyyPda3heeEbxbom2Ddq3mMtu9BPw8p9J3YVqZ26qQA36A",
  "key31": "5tn1LkAQ6BqRkAXTmA1bsYvYq7xJsTiBkF37cWj9j4ZR3zQDgRBXjfRo7knAUmTU7NNsqVRCXUZcpxED4GM2w3ib",
  "key32": "mna5kUWPBoHCG96y5yeJfgcDrQbrkgRVGBzPrhQf4zNMYQBNmtEmjdumqXg52MK86Vt29AieMGboMdcxxDwjYQC",
  "key33": "5N43GjUiE4QhCuPw53qomuN2PtdvvuRJdPuixtHjhbjdZq7gA5DKfBY2XNMAh9HcAoGDcC5LjngoDyZYv1YsEmiV",
  "key34": "43ArzDxWLSWSzerNBcSKPZvnWYVcPeMFq7QwFBmgauA3cmFUgBz9x99gfDfgLANvCGAmHD6kBuChBRTcFe3JzW12",
  "key35": "2LqWiFoQDQT4QyDrn4NiW7AMLMHTF9PDY2Qn6xKkyW3h5WpuLRdQCa95ahiq3FSJzM2XtoKhoVuWZGiDu4VqSgWg",
  "key36": "5aejeM27QsUmaHdMaEbGDBbESsXpsgFwCNC5oj8Cpu7jJx5aCnhL8B5ht9LuNeDZR7DAm35f5sm9BsKf9DnfqMJg",
  "key37": "2TEoWeVpGE9KEMm1MRyBnKe52EgZXT14Sv4EsX2ngeLzsstb2x4oVHmwZ95pM6e4RASk1fm3ob3Y6mmKsXMeomFu"
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
