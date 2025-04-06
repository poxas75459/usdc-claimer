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
    "2QQa1Cuc4T4y3iUiqpC9xAgsrH15idtRn3SrMqFJi6osdTq3StxMeFRYAiSbxDJeWPSywSJahRtiqHdFz5VJdath"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VCVJwenMHaQz9ZY1Vxb9jJE5CfWmfG6bvxkjFcNHMESxJBHn3oU7Cb3vfFx76pDHcfybRzpzPpmFU6ueSaPs7ex",
  "key1": "ADuUCXtgFhs8drLiqayjzZmAmmjKyZWcCdtWwAzNLx16QPV22Xz6Nzf7FUUpMEcEpNRrv1mqwKXSox5SzcVQUHw",
  "key2": "5ccNFuBabhm1E3ZfGrpktV5JKsZxzeW6sfvB8Zd7DRpxjkitFFi1SPRtDo8z2JvhS892QQ1hAsay8rJEA4Vn7jC4",
  "key3": "2Ltr3MuqrbPkhZTELuC2A7ndDhhYTdyYnrKFutK25WtTjnNepgRrsZmdXL2dCA8hXWWXVvKWrjYwX2RmuP3dNHZN",
  "key4": "23Nkm5BJYnXvgsJhPQB6n1HgDRcGzNiuYTCnz8thuefZ9A9oGMPF2Rphw9Xm4ZeavpQfgpDBy8q2hLMCsKRpWLAG",
  "key5": "4VHRcDY9YVXE8JWhSLQccmAseMqwiHyDXwx94gC5atUXb6mDGjkJZKn2ZwKUNGLnYoLko5XKvpxwKXNE5bVTXmmS",
  "key6": "2V4WJ3DVMYia82MmLL1FvVpMtAN76HZNmF1JJ7RtnZu2m8jy98u9cPiT841ofUnxd3kxjJuSCJ6UptvxfLjm2Tfp",
  "key7": "5wHCFXQY36aFYJgxmqBu4pfUtfU3SS8uoVkE6NRoaW1uecNFrngqW9dnNaHWvFnMrSoe9a7WCCLARGH2g9tfyZ7c",
  "key8": "5q5f7djg7Kp5nbzbB4XxnVyCykPHLEYZTA341SdXQndhN9Enrk7M7iyVXq2etSL4kyuHTc8fKcjVoQSzfciL6XM6",
  "key9": "pSLzR2yTNNRU9khJYEsYLeEgZwQyKbhFyzV4zLHVZ2rYwFFbBy7QGhagFWeGP21ZobBxuz4qyhFpWYgLkpQqDdp",
  "key10": "3t49fSiQWqF49T8tTM93LmXs5HEV4yvZ1n2daCxB3guSeRXiuosfqFkLcQ41MjeUkbAWtCyNS97QpJJ3X8qYhBJi",
  "key11": "3mP2Kv3iVcq7xFuSbVri4t2TcB1tuGwQ4HRL7pZR4JGEJoGoHLQpGV8vDEzGhkZpaTEKSBs1f8GgfYywHoTxo7Jq",
  "key12": "49VbdsyyuhTHGX8wHS54cwZskjfpJX1V2RtJmvJW1wDuDtADFuGtvd8B4e8v6oVEV41sp4cKxYzJD9tzyeYWAY5x",
  "key13": "CF9JsQHT6t49h9217EDhJ4Js7s8FK5iFGErLrjJLp4o3exZnsgrR3sN5PAfeD41v12pbhBFKRN8zGg69wt9YnKD",
  "key14": "5YPhmoEcSTV74y5b8x44dcxLDKC8b7p9N5auXupvTVWvAuXVqQZ2YmJdvxHyHjeKrth1odzJ4Za5FbddEcxmqtF7",
  "key15": "wrcnFPhw3wLQuxzDdQmSKi6h1kftu6EWP9g69PULmgMBLA5Wt2F2FehGSYfV4KR2SaoYyVpYvP6pbTE39Btg2Gb",
  "key16": "58oHbeLbtQka5ZeJxPYj8kgMRkb7zJKgGCGABfJcGYxLgKpVjEoDcpbDjHkoJNNjoDpjKTRGuV4U1hSh1HHmRj29",
  "key17": "5fz2mM2Z529FKGjKvZKY7GKdeLotycLuXNQWnSX4wpSAa5VXJUKV1wS2nRuHNDzA64jCwvqFKSgFMVhkzEcmJRnn",
  "key18": "8bjf4ZUt6MbffffTDzvChv3hPv9FbT6ND8G2cevaQSYL1A2pDCbaqkT1RY7ANFaKWmdo4oA7EnfDgG5FDa7nTAk",
  "key19": "5o3nQGErkf3LHn6TEGhhzHr2mKkr7P9xMVQjMMFH7NGMfC9EGX6D7e2P9WwHsRQ3ASQEHpm3XhRKJLuD2y2oSMoW",
  "key20": "58YeHcYGSF4RGmVLn1fB2p6DBvtTqNX7oLiWuQ2BvanvpGhaTbnTPCVPrCZxNfETewXVL5DVmKQkV4mK3dxgrxwv",
  "key21": "4ucGA5pJP1PmfejyBDAGRd8dbzfULp6ahKgYu6zpryjcUVqDAw5AwRMgUdkD1pq5sE7sSue18nABmKo3QLM3KBwt",
  "key22": "2oYwNUCMBqWGMErkwsHCUWLefqUtJm1fMn4KhG2Y8F2bz3xKxbq5i4xbXTnhFKJ5gZ2fgjndhK7CXoM9Yu3UQWbn",
  "key23": "28V2vtzDJw3ykQzEBCQn4QBE5WYkBER2RD4rkQQo1DoTM17XeMxyaxnJcDV7EKNd6GBiYcvDKWMgup33nqcRcewF",
  "key24": "aSDBdJZMfFcG6bXuNypfJ5xZ9ex4k6Sxk9fYnxkbmCjyJsNzF4Lwzcxg6n9yg24vqbW3Hq6stndYUXC4Ld8jTap"
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
