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
    "3jqHtKvYeCnRtv5YUAzGRvcg5bLUg13L8cwSswLDtUkwkJyY1mKWouJcfBFHmRTLA7uezTkuiz1JJTpSxD1pPaHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JFz9qaAkC4qvwvPMw8rRvR5xaPXgD3bihQNPt1u3QQyoymJTgJ1guug3UZvDWp8Hgcs9NYktdaqkZqMVPgBMWno",
  "key1": "57t6RBmmxA1QxHsntqbAj1fYVJJp6LASk85ZGfyRQV397X6p1G19R7pT3txXmr3xebKeiMCQwjJGrJqZRpBBLHeU",
  "key2": "5suUg9kwKVJGjrum51JykKmseA31G4hjHKViYuH9gnxM1P8Fo5rosKT4wB2U5rrVryPvKR5PyKUNEegFZwBzn5UK",
  "key3": "3MWw1yqL1aYa7Qj9yakBpSqkdMLQBFQCktQo4Afj5rd2ELGJtrDUvcKRqYzUD8htVajrL6yWUrMcGJNrbStqo1LL",
  "key4": "qHdaBEbhFpiCHZkDffHGu9Dhr2SXuhdMzKfNhUJf6RadiLMKwiu86A1Pqi95kYtrnFYiivSEX4eaSC5vzwwbJhq",
  "key5": "sGcjV3udEeZqt64XupkrNwv7GWQv5Tscz1eFqscgy4CHjXGXNHKX6nUzzRFJJykXi6rxpvAoYf14eLXNE96f5z2",
  "key6": "3wwRsVYGuoH12PG8qJYeEHoJcPLteDmhnLTBLckiFF5mdqB9qoJfywMKbqe61uob333imxUEFc7PE2FDYrQ43XYi",
  "key7": "WQkbdGjNkRPQPcJJvYMcFQooXn19L7Yy8hYTKFG84FbTKkAYceqbyxru6WR9bwQB6g9byUJdEVioNDPXrjDZu7X",
  "key8": "4f452Wy17sy3F1ry8hfEKj6zr2VT4kKpTTxajoNfrFpBwRuUY2Gort5oFeKhJoq2t2YViSXp7cJSFKkMZbronVnS",
  "key9": "4WsVZkNd4121uVa9xV1C8Q7eBbMeBfqpQgBLYTLxg6scHPyTNYDTzFeBQWQYi2WNRwdQnS6fymYPUwWJrAfvU1kN",
  "key10": "RR6gxPtXhTxjcm4efMuhgZo2s6ia9RquZWesGMaBU7ZezXGGR9DMS8tAbKA77TzAH1KKfxVV5SiyUrbVwafimW9",
  "key11": "58poBVfhA2J16USLgwxqNCwZ67uPpQTzwFh3iws18uUYYvYzZTY9FyD1QHh5yLLK5zGAdrkBDx94HGtsMLkduD5M",
  "key12": "4RhUTtvMKxb7nK4Ut1N1y16PxTCvvjRxXgCwkEahV4e7Ptm4WLY9JkUsNnowJwCbEw3hQ7Vz8Pw4xd45FSXvYRpZ",
  "key13": "35C1SU8NSaRHrng3Nddqn1TaYoTgvKCN23rmZfspZwoczDSuai9owB3ZXmqus2r3dTjTLQ2gqD7K19ctCuHb6SjP",
  "key14": "8tsP7xDXc9GmWNGXC8Mouzqa2GaUGzCzjBpneWKAukpKFh566bmgtHmw3PKkRrkTNTcHLUEiuK9tM6MYyXnjwUA",
  "key15": "5jFVANo7xukhwwmWiDL3NbL3nfbiLggLBaHtwtbGx7USyg9kNGKUNkTqNmT4W161Qtbv9cbpu6vcb7dR6mxUrPRg",
  "key16": "5AUL232jb1XRB7fPtdpAN8pEJNEPjbePGTBY6PrroJE4DsJ3nnYjfe72vijxBUPukriFVj8GP9kqW5azLLUa46gR",
  "key17": "5KfHrXGH5qibvGtNhyBVhHMmCwwzn8rNa8Z1y8wieX6eoCJ3YQwwngMuueTStJBNNxJcmNya7yxpnfDcAwYqzVi4",
  "key18": "iFzHGkAmbHqe8hNY4LKz8PQ7G3pqjhwDviWhh9djFgPyTZTfGhuuw2wSJBkThuxQQPqZ2yxyK87NPLxFjp1X7hp",
  "key19": "46CJJMX9iKt1f5fBUwpErYkctVJUgMKy2vpPXWLETR36mGQRipfERVay6R2bxjyoY7XQ7Kv5JHzdg3WBzBb8jWLq",
  "key20": "41bDSaAVuj8ckwDhvaEgyxhJSvHJD7f3txSZ5oTZQUoRH1AvsNdDq18mTYLhQDy9CtnvGgZtrga1v7Htgri46ZYd",
  "key21": "3c5yYebQJ1EaG2EM99CiqPYYqM8GjMWCNxijb8AkqfbR8q1mMoXivRrNiwEe9Q8HNZ2AzcbkpSQTMEjAdPcTVi3d",
  "key22": "2iXSCTqm6YqSjzfjxFwKEXdnkL5MRRe5FbJXhrMKH8pE89cv29UJagU4818XPvPuXfPFHrtQwbjkC1Becg9pzN5q",
  "key23": "4sqb9JYA633z8dXnkCJae4mFvMHVRXyfHT1sY6PYhQAsDuVWu91tb9mo1Kw5XBAxKJy3Dau9bvcttQoWd6jeK1FX",
  "key24": "31G1dBct2mfupqoP2ndw8yZrzbEF34Aqo1NGx1tkUM35zNj2588DgHypNvovBPfmaH1USUs5jd7pXXdb5TDTdvoV",
  "key25": "3Db638VbR1fH1LK2AGaDS2s8Qap8tVvCpDzPKiZrfy9V24sW6oo9zM5Hv4MeRur77deDvLHhsDWXvSzdWgKZSs4p",
  "key26": "2PZEG6ZZBbccwZvS9e6sFPP2HAAfHB5JLUxzNxLmUbbqjxhfGxWTRV3vGNNvKfEWtaCjrzYztG9eXNgZZM1uiDw2",
  "key27": "28EQh47gbhHUuFKiDA6HzAQpuiBZmNTZ7NdsCQiWyVSvBTTGFovzCAx6gZFGJG7ZHjvBE66t5VZ14e168jtVJb5W",
  "key28": "5WS9fFsoCFKpBh94RBQp95pnP86axDQRzzLGtXe9fZwPGY8aGcJm7gAHVXUi7HsBaUCZ9tagbdJFsmKXtfgzgYcU",
  "key29": "2g5rK3MTHd3E1cTRSXyBWz73yJhEqxMv37QiazXx5PkoXv1WGVopNRhLGC4G8sWCVUd5nXXoD5zNTmvRyLmovPM6",
  "key30": "UPq2yfs1iWrrkXcgH2bvzoZpEA4nSRs3GPuUESbNsBeAjsRpyE8bmq2QKGKpefrm4SfRZv6S5MzvYinbnBxsaaW"
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
