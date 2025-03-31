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
    "4N5Rk81D7NcQCyHUNZuf1xQ6XJcuiBVfJdvhHDvWz2p3Pg6j5AZ9VmGBoCMPvtHc4qSP2p9ybbYsJiCF4LkZ5Ygv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WwpGjrWRVhNdsJcyohjNeC9C6D1T7hB7bsZdw7LzvRK3bbhUVqcVacpva2xnnRQBsMjuKexfbgjeoHckA19JAxz",
  "key1": "2HBJPU42B5Gp37EDSuACzmgMwpracis4kySvJaGHU8pYTrSraJrVUHJL399ofYAyvLQSmmPrhdFShR1GS9kDDrX",
  "key2": "3CjnXsdFwMcpDwFrNeHHMjc6QVC31pLmwKBY5ts2cw6k8wSfBRkTzAM2z4ZrNGYUGZ1ALDfJiXib7RSgs8bD8y2P",
  "key3": "59Yk697fQTXPEWoY7GZdDhUjiSXp3C3agYU9ofogs2c4wq8JQpsBSkvfEFUjpq5AX6DHU98uFpuGVJCm1iECwyA",
  "key4": "DFHMj21FNM56VFjHGjMdZCM8pH6DRxbL2v1LUXmLom6waKACnQCwMvpcuMUDXPugcLYJMHKeGWNrAiHd9mtTEFR",
  "key5": "FagrubEtTRcnJhK7JVK5CFiUvT8KZvxLEEQh1BGYykcWQXdrv5cpEQCsTny4U6Kce9QWHp4pqiMxxvq85x2rdTi",
  "key6": "4vwVARpCktGYXi2TRxQCaFKZ79gFr1Tom3GyxJceAoC6CgWUZJhyiZZUyVbH1bE5tJB91GcDkQMBY6M8JQ9nBmk5",
  "key7": "4pR2Kr3eDJwBa9eiAUZRZvfHKPJZSwQT3ob49rpCaVoUuVg8gsA8qthrCPGUVxXbmaf6vw6TM79JVbKiGbzDxoXa",
  "key8": "4JJM2Qozp8SBiQg7WQtNu78iDkQHjuU4zci7KU2LRvgqXEortip5DzbgQxnTsnCxE4EqGVKYBGJ1ufeuhj7upjqC",
  "key9": "63ipZaRb2uynuLhQ1nJaAwnPvs1dTkHxVEccQLH6bKiUqSPNtvifutBREpQFmYzKSFmNuQEHpZpkZpe8XN6T3s2D",
  "key10": "2QcqiyuL4LUmWrXDaa42UVpGsK94a21n5GH9DjBh4dAt37ZWZVBeAPm9cQmZvBCPxuBezBP6JKUdhgrH2YoCxMLT",
  "key11": "3RPTXKNWaStg5mXpmJqUTYLhWJLkJfRkZW55gktiCaR145vHyhYCADGtRSP4aSbDTWsj5qhjbL8CAgtMJUGzsGZJ",
  "key12": "4DuyVqhv3qPFU3wemZk2vdqoRuVXWtC5V1C2aEwpxUzwJVTLh9rcBHgxSu6TDa4EygZRKL9GPiSe5xtxKEVJ31Uf",
  "key13": "5sMJRK3saE1ZaAwrnM97XcFkmJEz6ymyodR8oejLN16LaZUyMG8VQ57NA6Yu8s3tuv1g9AE36yHNkEQDF7wF7FTh",
  "key14": "CcgiVVv5T4a6ak3pDEVoJet1V5ZBEELq24wArFP7eBJsBiUhb1kp8m3Efb6RJEPtoHuZkAgcTrqWFpiTP4DXHmh",
  "key15": "2ZeEVABXiCW1JvLGncwEJBpEsv1LULBo7cm6hiPJnvUrniS1Pdba5cZuuFhwNRAFWxs5Y9RvjoiNeyoehNMuBQoT",
  "key16": "62SDjFnC5k2LyDruMdTY8LeYsGz94DBbVqZEZotELatG7MKxzddGwbEjyHedshJT9RtSfXw4gQxpUdvyq8A2waAE",
  "key17": "4koCD8kydAeGSXinVZCFzNJtVZwQUvYdvhGYKuLyMd2ZayznsTEbappWHqwyfQ1qxb2CeSN46bEH96j4LKVUi4Sp",
  "key18": "28Y7AmnV3AbqJimNe1VBPhXDzvMyi9pXPf3BS4PLcVixnm4xSV7wvarnKbHMViXf4nyEyPRnWtHtJm9ezo4LCMZr",
  "key19": "3isY9uWMsGhhCjf7izJLDJt5gZN3H6cmeK3qUx7jh2VxRiy5nYYgcrL5qdbANXqhwbQnyVwrLCirXhyjNLn49Zr7",
  "key20": "49K4nb4qaBqBNqEVu4AiCTwpyUTmWXWZ7oyx8ZRuAxq4VKPRnniJHCZ3xipsSbtkGD1dzmQQ8amRfiDpS6ehj4Qy",
  "key21": "3adt5k3uEH18MWyTTApCubKMTR4FcWG9w42rUb6RG4W2f9dSCoTe58ujfW2fUZJS2os8gApPZd9KMSgV9Gj2kT3R",
  "key22": "2oqwJzbfFhSDnD3mBzYY6u9o58XJtPCuUMVYuAzYptGxXuiZmVPu84t3M64YssohMin8ymimdy36vqco9rHVHHid",
  "key23": "4FeEU5SWsquJt4tHUhySKoV12MFvLp4erhnFnkPFadK8AYhum86NLdsVBFExEmWB3vivjdKiV56eNQ4iSDVkFRBn",
  "key24": "xLocUNjBcHapvgr39aK2cHNeXuqwtL67GDAZCvexmFj6yJNyqKmAZbgchzhChMwWVbMnxruawDc5Tj8yYZzLeQK",
  "key25": "3q9nM24RYBAXBEpKZbxtKaDvnLor6jz3kxxBo5ADMCG8nTPRVEwR4rXAs7bzTugzycBN6cx4qhCNvSkU6QXyGr3B",
  "key26": "4DNfaL14dYXPQLVtWrEs6jpY2hrWXe9BCT1ydQozjU78f71MGjUYaGWYE9DxbprpVM8ap6Dhs418K233tPV3oaJv"
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
