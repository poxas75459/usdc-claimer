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
    "ZPbVWYFVFiYZSEHeQSmKCCQx6237vghYhDkbeikQScoSDHRadVgK4tV3PS9EtTx5NLoduZTCaczFpUns7TxvK4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y9GpfbtvqcrZ3AX5JzUWCkNbi1nSbAYqsDKBrbsA8ZitmypNq7mgs42GGYeUp3zK5QU3ZQ9JFftGLagno1VL1FD",
  "key1": "4BYVvkxTtcyZDHS4c2Z8JV24HoNcw1pdkYckSrNzrJwD9MbpF65RStUGUaAkhaJauNDqB5PiW2kvW8pFy5BVsQBP",
  "key2": "2gP2tfypRvppmKHCak9A3e7Qx8jpgrbKB6uoZJcUNCFYjJbt8NBPQCjEx5zoHUnohFnDvM9J8cRSzh3tFugqW1UV",
  "key3": "24VubC2xogrzG3cWjjxzoAtFvAjFZttuJCqCYoCuPWesgK48t2HW9mEdJUHvGWEXZThQSPFq2MFh6pinrvayojJb",
  "key4": "2j6UwiSX8R7vfEXgQqyUZiCo79g74dhJnZMPEwKU8sPZmtBXskASqcFCtS4N2bv6hxcaggd6eYcsKWPgcKXezhUF",
  "key5": "378YdYr75kLeAG2peQp7dwh37YVGRTHCmRGf3Y5pQEPSforVrPqfDuhh62KcoWG1DSL6WFbCWdatyfmxn7XgyNoj",
  "key6": "4B9SF7Z4HPfGREhDqLWQiYpUYN2GiFgwHEU6rYQABY812ZBLt8r5quwRn3eGT7xy7Zq6ZLfpBGgXHgDG9GX3Q36P",
  "key7": "5NnZ5mT3rNAwFt9F6swXXgbpffP16a4hfbJezyoPey7qETKVuELixCztFyQrQki1JrBnMSJGGtuiP1KaJg6mptKV",
  "key8": "59b1qRnzp1AXqrXs9h1ik33SnhZdYe5VChr7gqYRhZLT7xeSH5GKsVBYbXfDGqCrG2ijk4oLozQeVXsPZbnutktn",
  "key9": "5HtfmUoUX5cvuusR7q7MFH6DBnuHVFwJNiFSucs7AyWLhaZWajcTMB1dC8PwMwAUR9GDn14KAmM85j6HqkLU5tw6",
  "key10": "GusPzCcDVjaYqCBqjBQ33PiBXHfwkaxPX7MvDWJnSQSoDVaY9362SK4GHnDA7aJtpbZKEVBnPY3o42WL2U9kLnt",
  "key11": "ygLbvKtN2ewb6pG1hTir1iXvMg86sUp2WqzwJExyYrWXBFmms5sA7iaB2XmN5KSN5FrGUfLimEUH7jroD9N5Zou",
  "key12": "3x9Uht8RWUcF6NHBRhDuR4udQpYt1HD1ZodNhEQ2Q89t3qBHpNBjhvWSB7reT9tzkXpRRpSGvDBwLag8RWBgCfxk",
  "key13": "57asKxVYdhV8AH6o2erVmccHevzEBXnY3KxbEkgJNCB6qw1HuneDuahRiKNz4Gjr81fVsS4yY3xG3sFQtBedmz5R",
  "key14": "4EvFe6kWzNpWKWpnh5rQkpUqtq7Xj9TRaM8QcsiwXLDGUKzGDKRU5ZM5p7WL4wu5RwZqGqDCJstMkFbQSPKYcqbw",
  "key15": "3SKqdECKsBSGVF9LXu1jrq4JVbevbN1xAByPbiV3XbhRhnY1Zp9knWkS1ChJTr6ZxhyKoLVqZ9VVfZrkjCLivQ1",
  "key16": "5sZ3ztk34kWP1aSKzSzPhd1Suuu19Hg5DdgP8RXNKeRbcQ5QFDbpZvukz3uvMmEVE4c8Zhwb9TVe2pqeHPwEB8BP",
  "key17": "Zk3JjFVkrePFvhKhwyaMCW5YxArRnLm8uEVh2XhzK4sRhWyq6py9mSiun9bH3qEyDhvX2uADGrYNvLzVzNDCg33",
  "key18": "5PXQJ4ZCXMG5pSrtPkTCVzzGXnxcLGui4jV7XPf6EabNUEefqf2aUhn5Xg1shnA3vZRZPv2RdtuQYTLTti8M4HRJ",
  "key19": "226ecqmYoG93QQxyhzREDKokvAbgdF1dhiF8WvynALkRn89f9XnjDt3BjSsyG8GPe4agRnwcGQTEDWSGEJ9VQkES",
  "key20": "5BDQUttzn8PM41Vuw62K5mj9o7iiLwDBw58A2opFhAkFqTegtqDhAYiMg57AnaBN9hnnxHogSaHmCLaeAu5gP8xV",
  "key21": "4TTC8w8e4Qs8a1geh6MB1TFXKqfHMS8dLgJvXVpmdV3AxRkZRmMy9BidRNSMQ6vZGkDZAeXvchFh9GSWEDsbiy4F",
  "key22": "35BAu7Ms7Bt4TWdcNffQY362NvTWLFXQNAcvPTDnExkfV9rdvhg2PxQp2YpK49T4moTZqKokw8aRBuGpHhwnLMVp",
  "key23": "czZdcXVsxYH4hxvBYvn71Sg9Mxv9JNbT8LkELCrH2w2br6m9vgc72L2dVEmJDFe8qz8amT4o793eLKY4MdTCbPP",
  "key24": "4uLqFoKEagVZorjaNkRYN5Pphq1gPBu6Zeb6dKeUzBAsmNhMBSmNWToxo4KFgkpwHfND16JAB7reD8aoKTqPZLvq",
  "key25": "5yCYiVKGuF1xj7BimRRj6BsPFf4MNGRtbfZp8z8igt1xfue3LJPehcDujjnqYF856qWKfyKd8UGannSXTwtQ25iC",
  "key26": "3Fkr4s1fVzhAMbYWF7uZcc47vNJGz9NMu8mxCE8g5dZfqnya8erHhcZtFVymfzgdnGsNv22WRgLBBLz9rucwuY4t",
  "key27": "2sDxCoLPPr4gGL9Xa3Gz72e2vmpYPQUdDpMJBWp2gegJPEbyPPkRubutUzEbaba9b6bfX1iitu7QFEzr37C5qFn5"
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
