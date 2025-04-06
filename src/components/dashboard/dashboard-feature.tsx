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
    "4BMdi1BYNXyndJAM1SkEsKjdV2Q7d1uGrMVCZMZYRaAehRDg4Ex4Xh4vAt1LvarDiGTKxNeC1KY1NZjnFonEctBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4djzzT3VXNrfAdP6Exz4wYBH8CoCZGayBnyxrJkCdVgxGpacng4bdic2mEAnKDgBT6CHQVYRLWPBmVyaDDpi3qTx",
  "key1": "29Z4zK8HkxCiNQqtCvFdJHzCqLdYcxFNkb843Cg4J623Bj17wTC7qhdXnkvmZnfowS8JNT9FAVQnLxVyEVGWGXTf",
  "key2": "3BYsuRgHyS11PRC3KezfN5qp6jFpJsYdkwXfV9cd4Qhk7SgwUTgX8d3ahsYUdBycc9PXVa8vYctdrS8LyCYufcCA",
  "key3": "2xY1dziTm723H2PhjTPcD68Q28FHchHh32rezqbdpn1FUsrAaM793bakoCBjNod9SEDZQCpcTjoQUe67xjLzhCgc",
  "key4": "5DHB2dFvegaMprPEDy6fxQ3fQgyGEtiYHXYXu8u8M2SgFNX4uHFcXhYYmRDW8AevuKDzA4cdGWXHPvfFG8cC7MPt",
  "key5": "21CWXkSZScjAcACkZaEuHrSFrJJk5egqazjvaSWZCxczWt7ofF2dRxEepYs1TnfLf9TKUt89V9hpUv6qoy45ryG8",
  "key6": "39r5i1Hb1DdLNj6UDTjhv4DZ45adeB51jMGv34ncMY5uP398HzRfVEn9ZaSLUWYuvcVVJvVNRFYzbDKCnqrCJpjV",
  "key7": "Uk8CoqNmPa4SR7Q2yf9kDTJmywFL93eYZB4q9CkQRrG8GfHxgHvoEAD2fQhhTaUdgsT1yr6HWuceEcmk8GXSCWd",
  "key8": "2HNixqzLVzuPoi6WTTdGkK8EkKnu2L4hHzrjW8Be8VZMHdKhHG7CQZvTn53VUFHTJmGZiRgvwwfB5hSrotG1R8VF",
  "key9": "tjtuDHHz1KPtF6ReQFsZEjdNGLYCRWhjY6qY8eWr9sD876AvvomFxBrHX5y17Bz9Vcb5ZoamAYDkqpXBSVzXi6u",
  "key10": "5982Fw5ajGtRb3ppJvUyN9q5ZdrDHSC1dGzqTi5a9muwY9mgaCwAqLMVSxFMsa5uaepDFZLWfGKrUVvBNUdjuCSp",
  "key11": "2L8eSzL9o99PB8tV17YymdcrLNKU2RxstBrGnYfhNqiH5qYyd1JChRhEi45EayTsB1Pfg3asmJvvXe9c3MbggRL1",
  "key12": "3GVfWNNcRu7UcTF4LpccBZHf8CDkPA4nfd47WMaJi33Kh8d4c6qAXy8Hre7pBZj225WTaW1A6eAyxPjDK119zNas",
  "key13": "2k7AzGjeQjSkzbViFJ29tjtUnjofJ1PLLaZ56RS8KCJaD142nefYPfqLx78cv3RcyqPQ6DbzJ7ewdFbuDpPi7qpR",
  "key14": "CmTvuXuCeKCMjYptKpzyLYbFmpXgF38q9HYzochtqX5tnL2DgixhezBF17vnFo9Sub7DEDApKAWrZYa5cpBJN4F",
  "key15": "4nECkyHBmV4bTWgEZ1mUes8xdsAbhJV7tNj3PnYTeNUnJBcGZS16qc4vYCryGtJJctPRHennSnUpiSs9qk4DSFxJ",
  "key16": "5u61EiGzsYgCmDx4tuhsVodayiFVJXKfChSWcs6fG56MUG8ZqsFhMQJtU5G2pPFmtURCRwxjntM3L2uLLzVJyXU3",
  "key17": "4fphcCQQGxzmGEHiT1mF1NB1ujwBuXB67t1ykez8njzVxCB7noW3YZo4y1bAHmMKmNBtmKxqWv8SQfTnecQC1njJ",
  "key18": "5v8uwKoRLWfmoDq4e81yBzZdCp8Y6oibXxb6iHNhwMUfrwFYaz3iNHdhYzcUYJWkXiaBt3x87dcq7JRs4tqhTSLd",
  "key19": "4DZfR5ZivHYntFGJu9HcffZNG3nY6LCJ5fSnTzz5rQHbaJ2LkeLgH1yQ2JqdhoZVRZJjv5JiToJQYuAtE4x7Xn2p",
  "key20": "26bt1pZWDhLwBW9u9N45MTE12NxDjhA6Ah6uc2trmjxxQoNH4rbZ1RndyxhYRU6CM6agsGCDxMiueqK4BZDyCKSZ",
  "key21": "5bPVhz13w7UKHeGhD3epgB19hcZr33d8GCZyfu9yVA5e3QVPoFAzVt3hDRfZh9asK94ouKdA9e4cnb6NNyS361NC",
  "key22": "5QR8ZqfmNEt2aeuVEYyPeb7wDy5dVz5v1ST9F3VEQqLZWmMF3jn52U1VwmADDaioQa32vBEpMyKfpqBtgYrqQUeG",
  "key23": "2JD3a8u7SBef6Nr257XDReorpT1Gb29xWZTVSXRW5qZQBTwyFcR3rgas1magjP4fKEdcjiGhodoHLFdsn1S2aa6j",
  "key24": "SnYuNtVwruMmJyDjua2KYZYW4gTmEjSGCkQNMactik1HkkemFJvTi6HJAMaR3iZt6Xw4PGZFooTiLpsexfjMTSW",
  "key25": "4kkhDZhFEypxbTBHTS77oYArE8F5MDaRboZwUzDnXyg3a6t1o8BBNXbtkqQi3FiYJvxW61nsQWbFhsQeCRZpfJ6o",
  "key26": "5UcBXRkopNSVg1hYxZi6LjvqfukmBsTiXNorLQxbgBAcgAMc5oF9Pn7iaBF1wVCx343poPJzamh5d1CuojrzKKkS",
  "key27": "3azzFjPpihKkJhSDu4WwrDfxKq1YMqfNftZX6kahV6C3a12KknvPnA3iVijHkXA1EyGnh2a6b4R243o8iXXe1Zba",
  "key28": "RwvtBHw9u3TFrCToEHYpU1q6rBvCCoCXPsHuiFGjFWqTFxB8kRpQXLQ7ajWzyYLjFQqcNZm2V5rFRShyqKZYbGr",
  "key29": "4hgwwFj6wL4329BZoaSnCTrSo4uPatkwFKTCgoBX1VH39orGQHKD8L9EyRP9wQXtsBufSazrvxaCi5rFCj8trTTe",
  "key30": "bAbJbFYVfX9vTUKbXRFF8cfUgFY9d2Uh8KHzwdGiMFwHd1r5dZEsyCj5bUUrXjvkMxSixuqHSuk4iXFFCGuWkyJ",
  "key31": "55Ve63Twe24Z1E9RBD6asjUNhUc7J9rfLaPFQVYBx9zEay3wHZubYRj24uv3Wyk7S3y7gLzeKXH1XxyyA22zpxyJ",
  "key32": "2s28W5pLPq5P5GisghVKPtY8QPXyozA5ErQedVX1b4zBz9Yww6GBGYnuE7ca46NbobmdnqNi5UwVACwijsWgH6ua",
  "key33": "2bpv45PuPFFMBUpSBoQkDFn5QqbyGSYWHhx9jv3z5B26zhME3yV9omhpmEyKPAPE7bPWUC6g4qJofexj1taMg1WM",
  "key34": "42J6PJuhuxsZWAEccLkgw2vvTMn8LiAUXFEsUruFLYDehygE2rAhLVeKd1KGDXFVZpwkiQMWR7KMCh67ZfKEnnHA"
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
