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
    "fhzDgND8np3ypPoNyiTFvrC8mEy5n5YbhAE8CvXDyMhAvfq3sR1TpXULsScTay7XKYLjQnGvmkBwey19gAFKESW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XFF61iMj1BM9i7jckpMhsgDQfTtZh13VhZWLPn1dyC7rn2dqzoVXopi6MiGp4zryemZu3uewUBMAuj8CTKPRwqQ",
  "key1": "3BpEcgt5iAuAhssSGYxarRmWCgLGQ1jMkTLcYxSPktdfC6dLKpJwrBWGrMhvv2fhFemYg4UMQXJ1RBPAHmKgLQXw",
  "key2": "2MfFGUKWq6rds9iD7rsB9R4b4WZUY6bAd8EnqUZWHsox7PxY9MXgFeneqGt2fggHXXVg77k2jCM2j5SQM1zuRBb8",
  "key3": "4TYxSPanrWThjb8XTgUENYQvnYgLVw8kewjLphQi3Rb2zyRyChWaqnLDGrmZgMkpWhhrLYEU8feBrZqjHrqVuQH1",
  "key4": "PEUm8W2GuJWDx8sjaWvxFCxBggKuHPAeAJRMsmwX5AWsG2GTghZeNyD2rYGbuw6Exnp1B3xm8VrmvSf1Jf1vmnR",
  "key5": "5xd5sjzFv8KZHeHzPG7eWRKHgwfao94YQwcjhDyPcqUCbgqXMgwgiJZ2i33QScHBcL7nz3fJix3WgDzyR5BQ1eVJ",
  "key6": "XfvuNQvX5Hj8qe8BoGhVdDmF7m4yFiWmuVgJQg5tkd6GzN7TLvHMVfMwpw2S5U4vTwaTRLYu2zBnkD2JewrBHLU",
  "key7": "3n53c4zb7WJ6thYEmmLU6wiK999ZBQoKvZF1vnF7gMgXhmpVXYBNpYWsQvEgtra8WKszsXrvMKwA57ziU4kTZ6d2",
  "key8": "4FtToewvoGLicXwNKMZmjUDuai9RxpdEKR9yXa9syq1wZZBbZVSuvmKXDKdqfTcHwrjHyQykXgDF3bT479dCyWHv",
  "key9": "5iE5DJrNnrZnEkKKTt2Tvxpq6FWG2e2Bq4xiWGVLLhXpSGVSSu3vRCuJMMiSFeK7jdtMgZMC9PwGzXWaCt4Cf5px",
  "key10": "4auTW6WtkxDJ3yfc5HZYq5dEe41J4JnJN2D8K6wupZMfjceGHAKnh42zNmWVm3uUNuUGfJLqDF4JNkcoSSoKshcJ",
  "key11": "JLssoe3qit6cPjJmU1VfnHCJ6DXbEPrDR8mCN3wAGHCKsGNrxxLJNwvv8SthcW2EtVUEqUsrunMCPB3e1gojzyA",
  "key12": "UZLNB4xuQewmXDGPznR6KtfUjjGNwJJJyqCKEF3w1LRMxseu8RmWN361CVaju8xSxUyFjM1jjjwMAxTek8gzkLg",
  "key13": "55SmB39uECPgkT947aLmFWW6vCTEuozjphhBtmsTgDjVKkg3uk2kTqLZoRuLtC6gzt8YjDUXV7AqFsq4M6269yKx",
  "key14": "3pBPC6ayUGy45uwR9HFZJjy3wHZRMEPL24hrHt2CwUoWs64xE9EbkLe48wgJGhzuo3j6n3m4Xr5Rx5YGVjgVcfEy",
  "key15": "62P1pdrSes95G2pJRGfVpfXVMSe1FYT5QCSPmFrPq5i95H3QW9o28cuns4CuBC8jYnqbPfw6QC7sidcevf3TzXCP",
  "key16": "4WpAeCevmaS6vsvr4sXKnULq6BEfFGEsyaA6YdmKDr629RKFqZDvHoYFzLkupdMj8gefQqNd1WxDUaFZkUzTq7TM",
  "key17": "3myu5TV2CciRoTT86e65DtvgNPcAexxn4ySczfca3xecRBkYs1mWgYA8YdSBWm8YHa1totqF8J2FkZF7Tq3EYn7B",
  "key18": "4S7VW1JsUx3pXtvZXHbob1JuLC6sabkkEdaQxhvBPBqLd8TbLSiisri7CSH1KkztRqr2mAsg9f4hJcLEPFzUU5sM",
  "key19": "5CZQhJocwa7mL3PGLJPxWwHFj1UqiSDgkoWZ2RYp9w4S2WGZvuVnKb5qxcXmnErUFiEpTssERe5kQQCZAkuTA6sN",
  "key20": "2iQXno5QgtF83okD5B9VFS4ibyVD2bF8584s3oHgj6TwJhfVDKHJNqJYpVpXBjBdpiYtjGWNGSnSh92XPH1o79bC",
  "key21": "2f1SSGQyhba9jkij9FGDYLaGC3AzjDXgHje878AGZvoxoEaxP6kh4temHXuAUBLihdy2gaYE8BpgEJYGgaDF5uqW",
  "key22": "3DKW6PjPeFFR1EK2MofXUQyyVGiQ7SUi3njKSbgH49XVeuVHcSogydZ4fAJzfCkWpTyJZUPVorvT1XizJi5p4E5v",
  "key23": "2MxJcKrd8LaCRFuaQivDgZopoAD6DFDo4ubanWmLDwoU9Mzot4QKX43D3BpKBgdkEY2BxVmgaKrerhD4FQ7jCQdc",
  "key24": "3bZJZ3waS3V8SAcZ9vGiwp6nBrgW9gdv6UsZuE7REQVnu3epVnW9d9MJvenD3WyProBAfssqwisHVXamqe8VxQGc",
  "key25": "38L7pREDtiKfhWwsoLxAHnNjF9LkqtW1hjSWgoJrF5ThTUHE3ak7iJ1B9hjnqs7PU4mYXrVtGAwPi5QcKZGCsuVj",
  "key26": "5amTFTz5tZQ7hgCBkDYeK3XVxiSWX2dAnFAjhGYxTtSrXJ6jvmGHQ2DyydK5WWfGKHHHVCkpzrgupe9Mp2xvQKcK",
  "key27": "2ioaEdQcdoiAZTS96bYCdRuLvy3PouiozzkBjFFSTxt1ZMdnKkG8WB5vkxqfaE15aRX1PiAGwTDVAKTuU6cw46p1"
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
