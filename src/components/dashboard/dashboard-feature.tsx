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
    "4zHcDk1cr32kyN4Hyvci89a5HH87ZH3sNVLxXbVfZjRXeGCx7JeZFUrEE8rYf7p67h7ciqB8acum5LvnmaBzBdif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tmp7ZmxYVZP1wxE3nrvdZ1Qw9tBvYyvMPDHS2UpqRrCRkvcqwHKj2awiCReRgNTUhcxupWqgot8JxtZ3gCX9GQz",
  "key1": "5gwQpxALUSpneBxxfwFxEWDYAXkbNotqY9ZCmQ7D21dYAuNeJrrT6L8K3g6hGAJwye6VtrMg9bKMUABBXEfhr2gK",
  "key2": "2cE5iCHu3Aq87pgsUijyyhQzaikBYrXxJqCpNdjVBGKVPWmDmbLaCSKVpGCbUXrTChBjEJjjxHCHdRgNUwg9ZM3e",
  "key3": "24Z7ZqDvtMFhaX2b2DAUWHAY5UNBDZgpEcFj2Cw1QymhrKq59PxrjKjCKXZhHBn8gNufQXoDWV9uk87Sj883aEzT",
  "key4": "3bNEEA3wbKmy9hQAUWnCg7XGMeZsfPf7yNoj16TtCcT9zLaduQ7dgzg7fYe2ySo4Kjrg4P9QchKvfgbVKGtqiVZn",
  "key5": "45YV7ZymfYu9A25UiaqfVD4GZjJMzHRvYNGN7c4dbYnhuEeYbWUu4dD9F4GBsMivALDncqqpxJKVr2DvLW9f2pkM",
  "key6": "2K2489QpuCaQg1pig84LSr1Ya7jxAL2yNzCcnpF3N3DrNcujcqzpjtwoBvWbSCWAxo4to9nEZE9LhpxEfd5AXL7n",
  "key7": "5dMSguYd3wFe4HnPrJtmjHqVoGQV6eUNtFYWqsdbN2yqWbYGduq7dbyjbRYFSuuDb8HxbcpeBdExeoat78PiBbPa",
  "key8": "5wLAn1mJiRDMDP4HuoQKQNb36DWk9pTRbCAUSoJFKqBn3RxiquUKDtuDwsAjHHWXJEmdYDa4iJDn71qRsLP87sM9",
  "key9": "38EMQxQEYa2RTL8FBWaMvjM9Uqqq6Z7f7pn8b722oo5qxMaUskJ8EP5xvc7fByaLRPqdjpWnvadbe2kCEqauij1d",
  "key10": "C4N8AWrDQk432RVD4K7tjAJiaxWj9umHLRkQH4jaJZCJZzwji3RE2uA57Gcud4fDVvLhiecvLhzEPoi1en2uHfP",
  "key11": "5vmz6R1BuN6JMuZg3mAxhj2vqaRaP3aFsjpqYwCVGRYDQESQBpWXkrCXEKNfoz5i1EnQ7gTjousahXaa4dC36Joh",
  "key12": "5E3uD3QHLHLgfBzLEcAAyfayPMvrcLacZdmvGNh1PQq7FNpzuKY5vdFkPxmEVYChbxUi3tJcHhfjbRm2iz1boeUh",
  "key13": "4moVhgLcRZ6CztZp69HzzHwZQt4dTyU26pTqRJ5DYRWtwB5z4Fr9PfzRZ6x3jRE3zqVnVoVLFd2kadJ7XQQtCdRw",
  "key14": "awAayc7cnramx8MwJKpKazQkV5UugKY95c38CPDJqMHGVf8W7uA41Qt7aCwq2s7W3G4RmpZMYzj6RpQZNhkNLsP",
  "key15": "5kfXUAxB22EibveSaBLwcSzkk9WZ9dTUh5okk6LFgMdtUL6p5mZehmwvC7a7t1GEprVahnBDSXHmwtq1VMkGdJT6",
  "key16": "37PR4jG7gFBY9tXSXtpnmtz81huqA3U59zqoaQPU5qmD2Te3i6nDv9uxAASAuxm9NT2CZfGpvCV1whkbTjQUki8U",
  "key17": "UyFVe59Lf6wbHEPgvW3QSimWxchVpo6qCZxzSmHnxK7nG6gJ8rjGcMQt7N9GnmZqsmiYMG9c8Pmsf9mg4d8LBWp",
  "key18": "3s43LwhR6uGiKDDhUuuCy7XuxUWEhcBrQEStssNrdx8xo8NuThbxqHbxvTAjbnV13E364ifkmM2wyjt48cPxTdAf",
  "key19": "5aTAaGcLY7casuP3S2Bg58wPNoS5MvHCqoWp58dTJx7omjHyXX8uNV3aQ76qLMVwpb1WpvgMWhbd5ijvGa6Hapui",
  "key20": "ebv8wz48c39E1RzdD2yrtGzMFuJMmN1LwcpXpUihVUvBYgg3kqrgEqzWABQ7bCQ795rhDSi14zTrkyTouM4dCEZ",
  "key21": "5r1F6m2GWG69SV8hL8nbnXkwZKRzg257MxWPTGLMz3NH2FwsjrkUU5QihLPbdKBhK4pRf6BEbEJNdQhY4KKWu31q",
  "key22": "3JgNTKcNbtWcXS1ZM6ETVvb3TdXoF4jXwWNxTfpw9UmJmeg4DtkJ9qS6pQLGjr9qkGYdtu3nF6153d1Wc1Vb4oH4",
  "key23": "3Jpxx3k28LLLMLwmb14GHqQGgy7tSK6vfPtWDGz9syxqKVoctnGAJdZKXVLXQzwd3KZGxnD3FN7XyykHu4iXwV8",
  "key24": "5qDKEfr3Xjjxmfvt1AowRy1FN2KAEszRSCdryLxPREAnRvcwggpBK737QFahaXE1NfYtD8NroitvUfV5YdFQQrtM",
  "key25": "ip3JBQGZnVWJtq6t6HUV2jgJCwKSLHCrBkzNgnBifXf6WsjX9z4x6hqw7phLGikeMA4ubdbCBL42jBjrobgVrdY",
  "key26": "41qrn13xVqqcJm37SCJaT1aropAtWrTM2infLAwdWvVeTbZE9wwTGDMo7ezEw8qthvrifxvrZuFwKoVXPzeK3iJB",
  "key27": "49WRvVuh8msFnejGUdYzY1E6Pr7Yf5626AwWor6HBX5aLaQ9E3NUJosXn7MYjYyZtqCfqr41PG3LGmoiQofSQ27q",
  "key28": "2XPjd2MEpKwq29jugZPA2wZkD14EfoQyaUR5ZFxXyFFpef1yVa4SnoZxpXB4VdxhsAjeNoSKUa9JR8i2Sz77jUBY",
  "key29": "4aXRMGgsCvQHsqitCV3mDUD2X6aNdKVKWvLwNW3fVX7aTTP3RKcLGaEVkoiCmKWeRzeqPaHYA5m67dzxguNWE6ay"
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
