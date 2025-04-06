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
    "4Sqvf8JHgdezhzk9ocq9f4rhQ1rF2ybXg4h2Rff2xdaPMjMBQHSeFbiQvK5U1L8jzHpA965kazmmhsh6k1U7bTBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V3rJSm8kZrGLj3WTazL5rrUWydFMNeNx67vVVEtm9x6jBsvBuNn6SAwoeob1TQBy38BwG3kKDB8mNMXkAZiFoaP",
  "key1": "2ng1UsGNPAYkzC5mriVAF6JYHcNmSyNxYminUv2Ve8Xi1ja5365E9S5oFeSGpsiAPhoQnBnZow3Le5Dcj9YFPE3f",
  "key2": "226gNMEuiTyWkLR95ps5DBAoqJ23m1T2RVSLSNoFBkt8WSZiriya3sbzfZNkZse8kuDPAwXL69WtdQcdVLn2kqMX",
  "key3": "2MaMDUYukBVCYckFQHb7CNcN6heFaCBggiTigruX8PPiYwaiFSb6MtqTyazJaewaDiwnn5CnQfjS7cSPP5VTSUSf",
  "key4": "4AHVqorag1sXM1eVwe8MFyvejX2XnyEsnkQ9ktaXXckxv9RJSqJjjm6Br7C2qmMu6fUPFDxqdKSbkudEzbLPMLPg",
  "key5": "2qkV14RcDndoYsJHPCWKHMDZaqy3QwFXYXjHzhoewxKEH3SrAqvSdeK4JmYgGBHycn6JrVZ92DBnugNPfLRUZvBe",
  "key6": "2Qq9M1fW4WdWqYeA8UTAAraoFBQFtCqEGTnJ7RpCoVLq6bosNvbv1DyB1gUHnFt9MTidFzrVhDieo8q4JcjkXDPf",
  "key7": "56Fo468taZGWNxhYDyKoV2HjZM7GyEpNkXr5tN7P7gxMd4yZ7DPDKG5aDUPUq7KLgcQHbNTpFneynCd5T2wE6NGT",
  "key8": "2Gf6sgfABadEqBoVXtLbEcQZjFiHThF5xxr4BsxoCthgmF2VviFzUPnjL1YoJC9Tg6FcdY5UsGpWGYsmrNAZdUbb",
  "key9": "22xMc23wYd4p9XGqqMW2B5nZ5g2rJUbMYFRzvzfs2bMfHYzGu2NhtV3N21gwqfV93mKg7Y4sjgXoP3XmcLaAokE7",
  "key10": "4aTqhPAtdkvNqeSut4XARkenMEiovztn5XnNFiKnEGAqAsZvgGzUtd62G27zYHCauc4A2FZy9W1Kc1YAQ8dxnDWD",
  "key11": "4d6mEJCz2kv5Bm36PDS9qSyM3jEn5XkqXfvaaKMRWQkipRFsHAfkNvoiwNWkbVgUFipnxxR4UgwzSQ5gkjiS7icm",
  "key12": "4mArjaYv77LxnB4iuoUJPnebJ6F4t8kvjevGVGMtF4FCUEDpZeDQjt39tVmsuAuxrzMXttwQTDKQyBmFv9TuPky8",
  "key13": "4Jp1htv2QhXwd3DLrPzE5BpybzvH83QrCreKVVW42tWNgb3jvJHyRERJsWVvf4NkGbW9Nrpy3L8knXRF8qBMMPTN",
  "key14": "5g6GGkVCN6oaUdTVenPUyXwpTt9ucAanJgXf8AtqYspiqTSH6tVsh3Uf25dHepkLTMUrs7bzLpQjzTc6tk636vQN",
  "key15": "3kvnAhw3JGBXLdrxtLSih51EZYAQumVQLvhEr2uDGTxoapk75A3sjoYbjRSW8A8KkEW2kRPvpsd4pPUyozL8jYFD",
  "key16": "1NYhz8nYkUHPzwi14GnWEjJVyHaGiHnz7w8GcSYZbsH2UzJ5dKTTZ7NSv41SPTasD3kagvUqpBojWjFZdVzXa5k",
  "key17": "5UJHUGv9a92tXs9p6Tmr2eZioxthxkA29hbVoQNqKCHQjZ4spBRjTWVpivr1r1oQvbT4GPMBVrYvVF6ERmSi81xU",
  "key18": "4dHqRGmzpHDC73pknoHALMvhWV5Ddkbe6iDXbLLHG2jHcV2w2QhzxkELyGJxz7BFw3gAhAk4V6BkFtPpZBw7WePE",
  "key19": "3DfEZm4YMk9nSzCYtT1fcNT7gCAUTe73Y126ajKxjxfbKJFM8Z5KuoMyqZjUNccPkcuFmaGmDc1Acbnm2bHHcRjb",
  "key20": "3SnYGJjE2AQwQpwjamAzBB2eWmkqC6WbBwW9tJ8CQYUkN1PKaWDWJb63x2gb6aVHBBJ6RdBETBo7vwvw2FAE3tA1",
  "key21": "2CfXWmwc2gzXvbfkWbWp959t7SPpGNoEqfi7Faw4z8EcdKrEKpYTJ2Mk1q258mrtMFU8H1K7RsReWyJjg5R5PGPy",
  "key22": "2Hi7qvdR7wBa6fVuWqH1Nfe8duyoVZkANRBugdrofKyYkhpKNc5x5bbpd9FquKmqu6RPk2zNW2syNGEmEo5jyoQW",
  "key23": "5DgAgHuCqCJGbfXuZVZ8MJ1HVwcSPQ9gVB25MKHoAfpKN24cGSDSGYVwoxT8qiKLp9YgbHNWrvmezY5ZoWkRqgb1",
  "key24": "2Tv6qsgJhHPqmG8Fo2APSN7WxsK48xDGTi8uY65THd6zW7pnipJEZhM3Dz85u37NanSkNYpXwNeEBzKmm2cgFUKp",
  "key25": "UGSWoziFk4ShwNLq2SM5yWGjbRWEJQEDrpTLz3oN3UQvguFZJ5hB8QN6PfPY1oRP68EQY3HwKdTnGhxopyLU6NC",
  "key26": "5pC8Pq9ZSqdyg6w3jojcAGBFhupNv85JCMv4m3TsP2NZYLqj47mt3QYasei2WwCmag7QzbxXL7GMhuPh4qvTjbQa",
  "key27": "59URm3Z1YSSZNNDWsSdnhpn3HGeZp4mQbBsBdZ5x9y33vqmDWzakB3SELm8CJ5X7PVJr2q2GaKKUXFsURXw6EGmq",
  "key28": "62YiCHT68CpNVj4AvhCc8tC976RRaB5hqcaPbR6HfE1m7LMsF7fubHvGk3s32EwbSxaUMaE1Gv8rW81Fdqzr1CYi"
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
