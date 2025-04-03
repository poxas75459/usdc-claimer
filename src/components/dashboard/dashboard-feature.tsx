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
    "3Wbm3PczYgYaVEsM7jdt971LHi6hPifP4nzidoQdNVRZLaEXFBv5KwZiErqz8RK2aPf3YLiXzZEBRvXcP1JKuDfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pfmRqxDWJy7u4VVSWBKHB8FYnaMcfBW5wX5wYJ7DqyVihVZqWFTpYLSvBPwkYKV39KVJWg26NZzbT5sRV3GKu5K",
  "key1": "2Qt811UmYssQCgaq3Qhb7VhEHvhhMGy43rrq6zy3QQEBcqk1ySuP5cZ8PaPpaqNJEjuRSRDjNATDRdEwSDwHi3vN",
  "key2": "62e9CSj5Lwa5jShDPzbMb1sCPNpTduXENNsadFG3wiqU97UQ9EjqKmsV9uzCyev9oG38NkytdnUBA71mbTtdfD9C",
  "key3": "3JiapYRdt4HxH42BxPcA4hFNxo3rVJfbPGwioFfyCSyoTYWVP2DXuBHTZMM6v7f5ytxZHMT1AzEmm5TPoWtEQneS",
  "key4": "4QoGNjjNtnx2WFme8mmyLfCRELhzuE5ZjrzXr8smn8dvgV5RxvpkK6Z9UycGfTMrHydKTYGNSFYDzvpWD65JWka3",
  "key5": "2a3EJke5CRkoEtktU88Ug9YBmM8pqg1saXtmxY7os8w2HNwLWK7ZB6NAwQmgpEqkQANHgMeXSqvaM4jCKiG2tfyU",
  "key6": "Fi7kfe4RwnkJTPLzdRgj1PMmq3KjSYnJXFZhyFPKjGqrNiQLecyPrx1tQfcTwigyWCSVcYCuUpAuGMpQS4qkcmA",
  "key7": "5J36n5o3pGx6kmhy89TMLHxxgok1KmNiFgYg8AUGQH9StYX2NaoAmrEjP9QhKVAih2yRxnwirQFLAfejoHKTLqnq",
  "key8": "66uM76ZtQdXP5txjVnWrPHn6MWgtVDmU5eZ2iTac6wDa8PSNpK2KU9g5q1Am9EUYHM4LErkEqPqQgGAZz2M3WMP5",
  "key9": "3KPLMV8uM6PyQtwMVqBTvbqtmd7mPkB7b5UPUBrxxkDN2xh3q1f2gfDRuiN8Xpq4mJsySxpFVCeB7kjEwiDU3ZaJ",
  "key10": "2aZQSjKp7kNg5hojprKgSQVZG4Aak8nBwZoBJKxaYSqEdubwUw9xYiAKVGt8mrPK83HijXK6JWtma4euXB2Z8Fw3",
  "key11": "33s4CUEjyZz8fvRnaktHpuCDDZWxkvk1Gq545gZVji8UZUN54QPtzhKagvwFdtNNPzTCYhm1XCJxTvNoy3YkJ2h6",
  "key12": "3UQSWKM5zCGZoGXrQtyHLvj4Zr2oVQywHu3msAjzLHNiGQVoocXqJWj5yt35QajANcBGycyMfkkk2Lb97jZ6j8xk",
  "key13": "5H8SWUBgkg1fLnNTN5NTKSUTQbKyjzf6FMswoXoYjcGrrgoUvvird8k1BWYhJYExE9pvMED54GZETMVcRqNQThNJ",
  "key14": "4eXzUCPK6BKB71qEyk4QqE2KbbArKFeMnZSDsC4jddzMbSsD9CF73CyBNSPBS3mKGLsHFy85YR6xQwr6VSEJguYr",
  "key15": "4RFCcidZMBfm3CfQHvzpDYZPUWFyiFSdyDg5ZkSRqao4KGm2E9NV61aT5kvMTDcYJjiTVraEDtC1oegHQctkPmQs",
  "key16": "v5iyTrVUczWFMJobtbza6wn1bJQjvA2sdsmJ3GjBid9i2URpYbnZJi7KSbERZUGmRGHmB2zVN1ui42shcMB1FBe",
  "key17": "4YX5xBLf2WKGkRh6XKPLkQqBn2u2Jvd8No2NQQvg2KhTcEyWKbiDgamxNtEBdK7bkTqtgmP8FLYj1VocMoxLHiub",
  "key18": "4RAYCFEp63F3pZqtGU7zmPKuSP5ZpuHF1GNPu1s3uwmUprm8x2ANKXvyf1rGTfMCLQi3bJY8ytbaErxnKpBvhD4k",
  "key19": "5nUyX85qw7LPefD7sYtvWUrEM28uLwNPCFPx3tVbyST3SmkTXbjkW6V2CCg1fYEimBRepGYUceP2imrZUcy9WT8G",
  "key20": "sgqdz1nQfC5oSSgHxYWcFAD6ibriSzxmayT55GTdkTjVWQJChEEaWSMAwcNZUjaigyYfLBKtPK7QpVixdyn95ZE",
  "key21": "5WLyrH5Tkb9UPXALECgZZEkWrnWUWr1uWzA2k5XggnAgZ44RMUmhn1K8mWrnRvzHqkjB1bXbw2eu3URPuPMbJi7b",
  "key22": "42gBWoz6xjpGRNSh4amE7BGtDmUPhcQYekkjqpxGSqJLu9ivPXJmxpJNTVkTgvih38LK7HqsJS5sE3FwXoN1ncxg",
  "key23": "4Czzc3L3vpuefMU7CfpmFZKaVpCgbJ2JE93urJbEahQZsQQMQnp191UjkFXYzeQux1DGcazg8L5vERyUhhWpqMUL",
  "key24": "nVVJPsW5PxrjNSP57KvE144MT3tvjAa8naCxV7c9brUUSEuRXeqezkFofvjyELwyMHdmqDRhpPPAThfmTSXLgqs",
  "key25": "3LQEMKTyG8pBnkjsGfkrN5gkuaK8DQJ41r9zc1Gq9kLEyfbxnjfeQesPXAaPg9kE5UQu2FSQiVjtPAAt6PwSREZA",
  "key26": "3RE4gMTF2S1JYQeV2buaZavpeDCGwkLMNQBJtHB3j9jYdTzfU9NCU4b8tEXMVMxnCAtRUZAqaDKj4e9RzRAfWiKc",
  "key27": "3fgkvrps3bfUqYwBg1tsdRLnWJnXCiacx1A8JdWA8u1GPbwCu7uts2MFSZbPFEWdtcP1JDB9KMsFkp4mVP25vFmR",
  "key28": "2o27oA8EjjWVDh3j6D4nUgzfDiwRfBp7nuaY2QLkbHc19d6N6yY8GUasWxYHBjnvBNVPpAhmFXgg3Va6mc4P6BBK",
  "key29": "491K9haU7utmJwudKaQJccEuTU3FbV1D9oV72ChPKWJ4D559EE4juEmDGMyb7bwJaFxBhDnA2Lzw1LBuZC4LAT7",
  "key30": "4XdVgbJb9gBBfuQzDzVPDc6fxx1ZMFH3j5nPUGNb5VJ2PGSUXD9N4Dzep9J5LHaPsXsqbS53CK8ZnRypdxdYRPcW",
  "key31": "399phZfDw6cmd6aiUPWdvVBU6UV8PzqYaLoAWD9n8dr5t5gSiXrvPCKC6Gn7MVWQtjTcanUgNQ4YXGYnf8VjZGqx"
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
