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
    "4Mk5gusSVQXRZs93EUuRCUmX8neHbGeVDx211arywGAX1m9T3ki6HAk89FST21sG3TJfoP7WNcAyWhtrBN91yVTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ow7K3YGH1iZFnhcyMnSEBbed2g3zS2bWe4nM1N36SweTTif7hUMqwJzRnzFDqhP1ecWwxyHzLty4GRZDs8VMwW3",
  "key1": "3H8XG48qs6KbWSfwwwvscmUhk55T32C7iMrhLKX1tJYZ79XAQwc1JtF7mCBQt868bqTmtgMcrwgaRfXHasA5vAEE",
  "key2": "5Vvc1AF8LhjaHMAJ1TdaWRKVBBp7BYd4bNNbGjrPbw8eMJWxFiKkUSgQogvbLhUFUoNqJd29FhQSYNenoXwJYLRR",
  "key3": "2amqHb9tM5Q4546ZyRsVaUXwRb9Uoqty29bHcYXiUbh1ixz2reG46RL7G6YtLKRBKEPDApyZ2jdtX8mUsS3619yz",
  "key4": "37wdE3dSWF1DksNEtdp2LA82kzVN2KZowWTDsMfPCNY5PUGdRJjVij7kgqDTqwdsRHcfc2ZdqGMtSNeLArtZPni1",
  "key5": "4dqVZSP146VKPQe51jGzz8i85ygDtwFWqXUgrbYL8kBfdX1mDsXrscYwHzhqtGbFLveT4mujfoJ6MsSk5XYMHoK8",
  "key6": "4wHXSz9Cdzqvs7FN66rmrQh1kKUakekPyEM74j8NFcKohydFujuhkeKh5w7nsHDeekFhXyk2jkwbfKE2C96asXjT",
  "key7": "4vW3ZXgWxFHdSXTHjCfDKS9kRvHmpUefaZtbPwg8n9uDADjM5kAoUvYiiZyzRzLSKb4yLijpkR4JVi6njgbkD4hh",
  "key8": "4TKWufZHWk7TWCTGXgTc7cBgt6sVgdcsDGTCDdN7yFJ6oR7G8cFEf2F1kEP6x49gNJ1RPXJ5Cknw4PH42jbkFDSq",
  "key9": "3Mnkx7vaNuth5K3T9S2FW9rRndXKoBKhNoMRZzXrcTTmFaLMbpF3RUzjtwXkqLpZ53ZLGHXnEYunXTrW7Janjep9",
  "key10": "21ssyT2ZsJyFQ4pjdJX8rsux126xNhVvCovhfA2cGzYjHZV5rARuPmKPHUMRpbWuBYQfwxYzFdnsJp1Fc4u1BWyj",
  "key11": "4V9D4REgFH4necTRrT1TZdZXY9H5Nmg6BPJJcoiKntkf5dE2hGxPWLXRKi6QHee4ZqYXE3wwnMquiiQQot7x8tV2",
  "key12": "3jfYRMn1ux6NmfpKK4Niptw9Yknh2QXQ58aPF1kyLCZCAevD23ZfZzqTfDDY6TMqrabXt5MBST3uqxYGnrQLg6kG",
  "key13": "39Bx4t4YELrGymHxoWohJk94dRWXEHY9GT8NCCqvLG9SX9FiVobP9QzRJcpNL7oQ5CNRyNBYDxNE4LHZRN8xpkjt",
  "key14": "4JdkhvtWWU2hPnuv4DDGDyxgZ6TvwSwATf3oTw4c7Z2TJkkAfe9ddC4nxnMBsRDEgXv6rxA3Wsx6BzRUuoQDuTkb",
  "key15": "3kiteg8RCMBApsKK2c6ciW5firhbUPC5PLpRTETiBiHSsA432p4LyTMT5nT8622xGPkoRyUTTjv1umyo43kRKFoJ",
  "key16": "65PWjkEkq3Zmv5EV2VozNgcG1TPxB7CmAfsaWzGbc8kGyuqCQTZLPvwvLzixznUvseGnNuV1YoS5icXbM5z7YQKR",
  "key17": "4iBF6nbAfGfarqRWeboeDLmVNJCGm4zAphSMq1WmRmaiSdVFHJzPPSgM2FCjAqtLmHDuyTFEriSNbVA3i5yu2YVd",
  "key18": "3CMMUiKrcPVrEoLNH85gTS7yVCAFieSxGYaVnhZjjL9UhrUHzzc5AKE3jw3Ub2UsfZE5ByhcPLjyLetYSGjiveY9",
  "key19": "5wa93pPzuaksgTHF3W9bXib7bLDjUDq3b2tjRwfZZM8nTbJbBNN88ha7kQLmasrhPT24qkzyd4ykQTjqKxMxB2nc",
  "key20": "yfSYRuUj737L1gMcs19B8zERkWpUBwnhmn4A92N55XjJcTesxNBkKaY9YPBcLTzXNJPBTARVMhiqjXFbyNfCr5S",
  "key21": "2xRusZcQSWSFk3WDTaiw9wS8eGHmGv7BehrFFSpKs7HkZzP9Fk8xhYAk5oPw5mB6Z4YBMVvwvc8mdDFuQJEo9FsJ",
  "key22": "3ff5ekAAqoJzNHqV8aiGCrVXTci2Xga6C7J5HGZu9znGsCtPPKrpk3m3m3zQVwenH3ekmiTSVs566tWvTQ7gDexA",
  "key23": "51jfdxBUiSRojuYTNshP3yBaXLTvFtLyCZAyAbnNaWznveW1WMe3pZhvHgyttGXokwDdbbmGf9E75RSwSFKkM7E9",
  "key24": "4sv2v17Fsz8x4TXJmJkV1X2YUzzGgwrHdfgX8g4q3zZsQEnocKr8ymBa7z2i2Cbx3F3jr4j234NQgCPvVX1ABxTR",
  "key25": "3RNho76wrsHQANF1EoLLYugpFuFV7NzMmSksFgAJ5wEeDbZAV5rZYELFuQt7RP1RmTeCJQZhCzWM9RqKQ2FQm4RY",
  "key26": "639sLrmcuQN7UHv81TB3xJPmoEPMqrnoPi2Ji2RHQEnbD6wL75uNz9mnThtXoRw9o4i4TqU2BQqCuDc4P6g29kae",
  "key27": "4u7ptWqMhqCh6puHrAdEmyrKrLcxwxkhdkinwGcRsh55tXacYAzA17Bo7wcG5bR4JruoVHBPwtxgcfxzW3fD6h5h",
  "key28": "2JZfNGMLCBuYNznBhUPG8t2d7TpjpJ47u5DGzzskLxrRzYYRZP4jcXESrA1G1CAK3RRuk1aAycgb9mLJvM8AiedQ",
  "key29": "3Y6GTZwoM3MBD6nufqVpmLMBGZUqU9YW5QQXYH1Eax7pR2HEdjJzwLRQw7GkavkESmUqBrU8CC5Ka5roo6sn7dTL",
  "key30": "sgZtKhvPQyeYSKZHY2eQjBrBH6mk1TjLvUWphg83SaWNx5vidkrV76rvu2L9gptau93yqPrXJUVi1wcmgRETS3h",
  "key31": "8paGUDc6Vs4n8mhjN2eGcfydH61wiJpnocBFVhqWU2om8SR9vFPkpjMPccwBQmnRmSLvqAz9bG5Qt9G7cMijTf7",
  "key32": "3ZGkaCQWQfyLFMWydjf8QnKH9w9qQBcw7UYEFkM2Aetj8ooKR9QQ65Cg6QZrkhjLsjLoDsiwpqkPxR5mTn711db",
  "key33": "3HQb5JQRspPYHC7vm1SS8UeHTaeyNW2nKK8AKXoJaR3o5t6H9f6fWNvBz52WZen8VhPTAAVH826tPkJHQULpTPid",
  "key34": "4UtXifps57G8asee1u9FWK7SEotU3BcFdZMjNyomRAiqpv5AAiHLQR7AQcSNQzLbWFk5E3Q5irt6DerXByfimoTZ",
  "key35": "yxWi9C5VeSPquuVrZBWLkzhWsoVEFscT6bLVTeAtrcFdMsLKYKz49mCPiSLWHmwi7q55teKibfExVAMtqYZGmeR",
  "key36": "5uNCBru7B8SgEe2YmrfKqdq8XPyzxGwbmXNnVL7CSHbsLUBupjeBfsJ5r2FfefgAUg9PFG8CbCR1QZGvjfrEFzyd",
  "key37": "4Ki35TYFGyza17BwK5pLSQzXdyhVr3pCMjfgDGf5ABcDQbTwj6y2KmXcbXVKuyfS42caA2dueZFnBuUmD51xr4Mm",
  "key38": "418tKY8Asj4ZqipBWk7At5Wsgm3cKgCHLpXnK6DybtrY3FD4x5m7sukjzgzZLxGmEzjZZtSeiXJ5hLxA5zJxk1Cp",
  "key39": "3apXiSMnPrtQW36cLPmYccSyvvnQjSAm16VPLjcE44R1oJZv5WDHPQMFSP6wg1r8iJwfri65s23FV5yrXkiNa5qe"
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
