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
    "41bVcwLchCydKt8VhdAawvk754dFspWoMeHcfa1FwnY5wF4h3wXeHU17dFkMazy5xDcqm63pBiecfeckoWyqoK1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2akN1UVmR3Mh1rku3HXgb1wGKXCZ76MuVNB1t7DYgdhDpMZmukaJsAoJMkp2huEgeBksoXsrteDoGQXWRDcZQbC4",
  "key1": "5DC5vLMChF5FuaRANoJuagBjiu39NSwsSoKjrSg5UDRuqRqB1XQvTWJa5SowFFaQV34LXh195n3SyY4X9PQvyGtu",
  "key2": "5VLyJUBu89TwZXc28eK8VQgXqdbUgjZ9JczJHd1Yo12HovTQC9zi1uJEvvfsyEwgpVYYvKYCzh7RKNtHFg4dczza",
  "key3": "2AhXN9LrH1jEK2RbaSBhABrNFaiqB3ZC8681mpzB8p3PanRSMv1HC7tARP3y9Nf6JYR5wfc6b26ZJHBWLsxh52mB",
  "key4": "4NWdfipsd6WdL7i45wuvUDpCwnfH56xiHEkNJzxDeDj7su3ZMPNZf7Hsmq5v5Cf3MBVg7sm4zj4v4KHuB7DBunfd",
  "key5": "wsXHQYToftHUuKKCrRCNJDHYZsZkNakQLHhoLA7hMrfppBHPdxFTszyx6AegykZBA4nxzejGqZuE5Pj2k1v8hhb",
  "key6": "dYoNKDte4Ep2eFTJbkyvryDQyWYkVhDPc2o9z5HtWpGSPv5nBoEsYCG8ETcKT1UT4seskmXfjASbBLpHJdTY5rB",
  "key7": "2Sg99JR8GcQgWVLG6h9uxAWVriSg6yhw5PbGAqwU3a8XE2qHfegFtvyNutLZa256HLZrm9b9Aa5hk1zutDkgYoHM",
  "key8": "4BE91NgNjkfZDw8T9rW1e9HFpXt6d3M29NoAS55RvNDPXGQrss4ypeds9s8YCNNU8kgFoFzxiPkQyYaF3SK9aBbB",
  "key9": "5MNgYaSiiStKmNJvA4J8FWfCbXo9oV6LDLNY8Qo9bWQBs6cthoyXpm6KJsLpZfLwzG4gtuhS4aVZdnu12dPgKcnd",
  "key10": "2cmyoGqomwqByNos28rEwpUA9coUQBxo5kziChhD7TC3yKttvGiKp8oDfJdy88zsW4KrCK8n7cENPWNJzq6qaySe",
  "key11": "3BmN8i4n5nT3iksC29XED27asVAPF4d983HKr5up7f8k11L5d48Qq5HHX9icRbwVySpbCWBfB4vjUrMbYpGs5eob",
  "key12": "gHAbK6uJdt3yYCCh3CypN93j99ZMrHidykVvBjx1QzoSbhFeCaZwStC9uxMUm7jppxmFuBaJpPpFisceA75qMDA",
  "key13": "59Sz3i71fDkiWuBfYEQEqJjmxs6wXbtb51dXfoVt8PGrGmhU34cVoh7nmzAuri3QGhiBQ77aPA5m5ipqkVJK6kQ5",
  "key14": "671fd2eWwEUEm7pZU2EgHijxceaZ9Eg92kuTbqNnSMtHAyZ2aCGggMR1LhK4yAv281ihafi49ToV7MEVzNyxjvTF",
  "key15": "2ZmHY91PZkJE1LkSWLJALZgY23UqUYEBvhVbpxRHgHE8ak5wzYRnQKxcGmEJSF67WjNFVFkZcX5W1EzdLR9D6GE2",
  "key16": "3jYfM4STY5E9VrnVBhw78VNXQRXLW1aKJYMFzXECBPoE6SRDq6XfyTjA5ucLCyVS6gSLQxKKcKuz8M5bNU2pwXew",
  "key17": "5ob7jQiFW7GKKkabnf5jvW4nMpHsAzBpWfLydxiiMJ5XkuZqGJMs1GV5h3F94oY1KtnvPJsJz4GCyd2trvKGX9qy",
  "key18": "3kpKkZj5mX1TWMMuj8Wqiioqb7s2uP5EVp6mGdSddkzWeDGpNM7pRjeyF3WeriYRqS7j89muHcRrwdmd3Mo49SC4",
  "key19": "2WtRcYQek2DxbP9fgfn6WW6RnECphNiwEiAsCJ8TyccKgx3uSWjL3EqhjCxaPsuUzrPZuCfFSbv8nWCRD7CkeQqx",
  "key20": "4mHSRCqYD57rbwLLiZMChKyuR57CHtHkGHEvkwTwV88ZyFA7nXTpqUcwSDDQtZSktfDucuCZPd9gbSsbMSQQgju",
  "key21": "27ze2Dt9BUJvUx1iKQndYXaB5EaBdzzL5LZ1RsysLQpEV6gEhXMQ2k7QsVvQ3ed2r2zpTwGr4YTNcLzPSHH8zSu3",
  "key22": "3wKzdqAgGKQ1FnHj6cHzFv18cCRg1DnyE4qrfpK6TczmH6heY7FGsoQTjMnp8TNE9TyTkd5kVzjvmhUY14WvKb3P",
  "key23": "GrpNQCuYUUkg1J1uw9vPM42DiARZHxjdqSgnCUvS1FbQ8rkz1Xqbj9zjgLpMWUcM8uxFsfo719JQQxPHAKo1zhM",
  "key24": "RVE1Hn52jSPyfML9Z43nqpwTscAftuYKxDRZJ4DqyKJrQtfRKNbY4kmzJ4daLru1HZMTHVcCkQhAno4wH9mhPMp",
  "key25": "5SAk7J95eUw5AHwEuCEEjUFVr43GC43YzE1D8sbHnXP4EcEwVvEdNSmcWmZHAyxB7uSnd7VfpyFncZJWXXdMtUTr",
  "key26": "4K8ALuaD8EE6djSY72YdWsk73f2gaZru2vcByXf9fGLEeFasd3Veg6gV16Q6Bzv9atwfu9nu9odB1gMX3Dkwp9FD",
  "key27": "5vN5hY7U7Q17CMRUpJgH5ezBSbpELErX2HLMhx9UehL23m1yNh5UuzUakfQdWnJcPa7ed4hfsMR1Gi5avxTXHR7h",
  "key28": "Z3mhej7M9ySepTYLyiyrjhutjiuXH8KfbjPdr8PyzpCnxHkkFn9R9k5tLoebPDFxmuGFaAxk5WFbKiBspBLZK8Q"
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
