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
    "Ksn5X86b4gYhMzxJCbwVkxgAfWwftvxQ5KybYuvo8QUSjyiihvY8x7f97BETZkaD3WwXX6YrJTyMYkSJKvpm2gM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qXJPrToRj66BGhKH3YQJWURqr1agPhSewyT3cBn2wdxUCbYVNiviYbgzKuwocZmMqAG2nB6NoiF9AzpdunMTebX",
  "key1": "41QMdvRVTrhkzTGm2aUwJnH7kWe6jrUCcnSUd4p7hKGYBmWXiHbeADw55pSvEPeSN3ZVBnvVdPcMgfyT2bRPJfdT",
  "key2": "4DJSYP7J92TUnNJVmM3uqfTKMvWJSYPzd1zqUsZdXwGqUA5qmNWxppW5Jm61QQ6swwPE6qDQ1zpd4AnqdypsfSmX",
  "key3": "4eGj6ubDcBf9y4mbjyiTkvsECh2gSALewMt7UBzzxUhusHmK1t9uXef3mKFyfs4TdufEuZYFVVrDscBSDnRcG5RL",
  "key4": "5YqeCSiNKbqhijqXwRXwVtPdQzEbdiwHk1V94you46E6VU95MQN27Bv8aaPK14xaNkqUcaHX3WViwtE5JvqGz6Gk",
  "key5": "31cXFZyyfaQt31DsNbxeVFJ9i28ZZEXvheCJLRUJ6JDdLLPm3r2EVQrjZPBUbBHaZpKG3krr9wPwkYWvZJnyBQEP",
  "key6": "46sB8NNxw9CEKLo7c1XgkU8ZQqYYFch66AhAySjjPNZ1WfUpq8ec4Shppj5iNApxD9Luert7r8PJU4MqNNsc2gu9",
  "key7": "2RtsSByz6ACCWKZnutHy5q8cnn9TgdUkUayHfyGyEwPbk1D5jBUHHmPvto3F3NrF8CZf2Lj4j9rRuNqLga7ekKUN",
  "key8": "3LPXf6JSRh2gpkPu3W62VNpPkjtVK7ZcGspwczNWCbfwjw3ddstnGpDrjaFBKfdvjE8N38wzWS4hBKva45Eq9HHc",
  "key9": "4WQJNTeat7nwPWcHHNy6fuwGuE29JxvJ1NKyU1FimveHqkC4HD7kBAQZAXRbZLJDpqiTaMbNGzVoari78ABzRoy5",
  "key10": "3KTDLCDim8YUEt19aJiSTLsq6JffmBtcm5GvviDVhLea9ZNZeqJmo54GmLzjCFaZxESpvvR2gXDqsC5Zf4qA6d79",
  "key11": "37h7ACvjqqCy8ipWKz9HVaNTVmP4tGpiKofoea2Rp6AFNi6Z5jTy7qxVD11wqZcF7NDPyXmdLWACtFKSPaDJFtST",
  "key12": "5AvE3qj85Mfsx8mCb86ABRnhBruJ8LZyBnP8yWbgQtxkMor1if7Fm3B6pAL2dT4dTuzpsN9FNJ1ENsMNaTQUZ18y",
  "key13": "2FsPmHDU6v525u2wi2bTjyx5Mz5BSWYhXX42u34pMirGJqcPHs9TFN88bV1vRBBkdVwXaophpQ6dzyYmixuXExEQ",
  "key14": "AoQpz4HxF1ArDnYiUVRVANtzkBV5teuUXZzbK2JRB7ZXnLxiorXauMbUAQHPTCzZL2cFipUUhh4hSKuCEE1Hfsk",
  "key15": "qLKFJvaa4tsHQbbgMrdvhAtwDyeDd5ZxA474asQu4cm2xc8z2p4wmmKxeSyayZaBKaUGAJ6cc9om8E69VmBoJJL",
  "key16": "2HnxRAmnmEqYbHiWe7MW3eP8uhNrrUT2NPseduHreVi9YrDf6qNttDXgCUc1VtqVoACKNeSLh9AsuFBeHPeMpuZS",
  "key17": "bLhEaB99rQJ1PRdKQwhxkF1s1r4n3Na7NGUQ4HCB7WY447xQLNhRxy2Kqw14z37xaau8dh9r9DK2vXti4JGg9Ji",
  "key18": "28GkhBt4fk7MaEPaTV6yoaDfy2WGwmE4EX4fVtY4KdDjNSE2nof6b66qqT5r27yqayf8eyGBrvcKNJN7z7zpMZGD",
  "key19": "qZ1A7ywcJC9TTUU3bPQdHNHwNxrzx4bgqjPeLqeM45qjBMu2g7R7kNpViEyLPDALDnWSMhsiYBfbqBXgHmJrbbT",
  "key20": "2FxpqGKD5rJBrHZR4KKDYSpVdsUhwvKA7VKw6RCWcSEs7cXM3NY46yJcyj4wfv1cJZE8fyXCfWBKnNx5cVkmie4E",
  "key21": "5yuuKHC2BqBn8S5VA9JEBMhGJpRHnzFNjwiqtgwaPWoRzMKF5SCax9oSj9pFMjqq2RVK3FzRxmY4dfzup7rfMvuQ",
  "key22": "3nWUe95omQtNHFW2BPPywyXRj3GtyFcz5po4h4MnLksNM1fNWLEXuTy8dvxXUkL2ZcEnsybaTUXLkrC4FedpZ8oa",
  "key23": "aP44ugQv43toqMW2qo2JpdwoNDANkSvV6V3Mg9UC47KEMCLAKD6uY9D8a9uBBnLuhsmFT2bGvdPfbjpERaq86Ur",
  "key24": "4WKyyaxY2vTsNH6v9Z7qvBS2EFRuHaJX137A8oprw4jXTeF57bHeR7XjvFiA3xh3zD1hFWTwP8v4uDePwoqZaTcf",
  "key25": "5b37KG5YBAsctpQiwCXXbzkifHC46qQ484Re114uLdvngotCnV8xBE7rnSy1ZhC7YkCaBXEWtQiNvxgixSD2qp7W",
  "key26": "2cFBJQWfB5x5mZJg2NRhny3UKh384mZLK4jPwdKdPiEsytEwwQTRsSeeAuV6idN7pHJaRSC8h2TQYvKFhwvuRVKH",
  "key27": "5Azj8A7FHUjUou5GByysg5wawa7ZmsTbmTZVBwRfZjUiFgQpBSzY8wFhU9zgps7JjZ2gmBYmNpfyEFZ5dic65Hpk",
  "key28": "2BiCjj6ntzmQHTqyaarFPuKJA81iie6eD3JtJezD2JULc9id82ND5suxcTbZQzyaKUVDz2UPoRwndpWxdpqibHxR"
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
