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
    "LYHyuFh2jBkZxpkYvuuG9y2xVDDHqKb7vAUaLPx6oKvJpNvBQPh6nrmjFDW7LdJtXMxyzJShcE7F2RMMdwx3dod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mcPVfr7PHow9kYQbZAgtwUirGShVJaxoWTsEfjYwYQDD47pV5ztyVbZTzeGrYqTs5v7YyQV6J2nBWKrPnkuce4V",
  "key1": "5YJDZFW6U9RvGbcUoBahyk7okuohth74HGGUAUpRtKwkNKA26oVjp8o2u92mN2kiyCCppbnHTxDD3ziWgLD44dv2",
  "key2": "3vvVdp2tz8z2gLJgj116mMAzJGc8o4rZjfwzVLKnzjCgGaR57TZuNxwetAFEsAPMXG1Cj2qeB4XM8SSmS5mYSV78",
  "key3": "2kF2PqymkQ9pCmBzHUSAKkEEFdQ9txHwYYiUnfMsaMiUUfafGzzbDs7VW1X57Q9rqgunMgy2HB1UJRCgarpeJjX5",
  "key4": "2PUhKSNrfvEgu8WmGfnwquiEFa6G5qGaPYJDufEUqGACFX9idLqvahxPRRuWhFVa8YX3jmCFwJ13aCUbTf4K6bnm",
  "key5": "TDPvdibWDRBmTibWLY3uPy4SJEW1GaBZ7LJXMfw4qP4QtGgLMaqqycgKBewcAYs91x4yfQCbDEDCSRdN3wvy52q",
  "key6": "3bpUjuvdAZKp9zmGU7UebnJtGyQWjePZuBRLMapBe6QYT4MTjR9Lzs5kPQRKqimkEXQiRvC8ZeupUyQGUMr9ZVRc",
  "key7": "2kJ7dvUco5wiGNTyDQ213t9gjbS5Rs4SVjpDcgqtiX8Kyt2VT6XyB4aF9hY4Gv3Dh6bT5f3ndTyVzikzgP6gpVwZ",
  "key8": "4fNoTBTiojdwLhNS6qDdvfFAP3FbVTeZ1gUjU6WzKyNnbbRuTUzQNsdFjUT38wPMZt6zGrMDe5ox5TJm6yKhxHCK",
  "key9": "54qU4nnkLB1sCvwRe9Pf65XLViwsbbT52wm61TBmoigRxrCqTvZeBTqzWCyDS6n6zCyfFQuLJLWgKZqv5W77JmQZ",
  "key10": "4Yd8CF1PwKe9EwdLHc6QX2jb48qScuzu3jF7z5ECLo23QbCTzYjJEpGMiqfVymppYc8vrmyhknGH7iuaP2GbF4e6",
  "key11": "2P1Xt4nM9S6EGUiDarNoigGPjCc3hvGfDSUwuEgbd5cmubf3YgbA8EXMvGySbUZxXgySxpnc8mK2fJYM5EZRVP1D",
  "key12": "2BTg26xuqeohRjkZtu2asiHD1W2oHnW1HFoAa5qHyzvu34GL8oYaWBXgq2mDnHQZu3ufyHRLd3NM8zH93nqVv8Ge",
  "key13": "3ftCMsNFjHBWJqiQnwR1DdChNWBTnWG1h7t5cUB6fKx9Szq5bGbZ9iBheeEyYzZhc4U2PjpMMrZgWucM9Ue5bVq3",
  "key14": "5PKJ7YEjjRRJ7PxWugidDvdH3nfWtN7i2cMyhUEB4cRmrJmzM559ncYNcxnbsoKiE5MXV43x7D3vZp1fXawBZEQZ",
  "key15": "jVD3NVRyVHWDzfdkRiTLcnY1ZgLWGSwAUwKpZ24w8yDFYjZyCSRLW1GbtkeC1uhPchM7udXGc9ZeDwxKM6BZkAE",
  "key16": "2qv91jrtWqBDHN3MrGhJFkxYhQWBbnjrBVUmi4ssZYAxT5i1cPzJmfgc6cLsMrn7s7BJxnj6oq3VZqHF1K62KnUn",
  "key17": "BCWf4g2uDd1NbUEHH9weoMJfdkV1yMjkKpWK61AcfBS8pd9gNQfLD9532fEh8RAPphJNLz68E7wjxun9u87VEb5",
  "key18": "4prsq4dvggmoRAWkN3eB9FfUtMi3JSew7fmiswY8YE8bDfBg6RtjMgBWcKD8FSg32TQ8d45YPEaE23L9AnCM8zn",
  "key19": "x1a4tAWEBCnjfJhomHnsoj6o79Bga2FzmmATUQ19EDoorgYTgbFBHpT1c5ka9crj9wvowfMJnyyd3MNUpnUMKyx",
  "key20": "2iDjyNpkYrWmMAm8J7T3br3E8pUYV7ohb1mnEkAVRyZE8o5vWkoPhdrFvC2SfQCUX36h7kMbk5FyuM3QdCFHsAQL",
  "key21": "3BRtZ4HFbfoaWmLxb2fr6Ph4CXGFZN62YvcpscMhFaW1iaCUpVgwvhuzyKtFpT8QAgpTkjgk1vgYPjR99PAdbomt",
  "key22": "XuUrHumXyPzR7knAkE7YLUCEPYMKPQvve26PM2Mo3FNCZKn4mnaoVQpyWij63JReLJ4dwBjpkQaqbyhKPhGcwwR",
  "key23": "5UbXwEiiNpVBRQUcD9rc7pys27r1toR9zYpJ2WcVz2ikNAm1Dy1LqaLAikE5DETQ5odZ2Kxv1uDQ1FUjGSjA6spr",
  "key24": "3QwfqnfNra1zbxsiqJyhAT3QWr9RYw78iYoGDg8u1Vj5i42GjSpV151QJRRwExeKDnE3LrkQKc1kyQbp3vR6P1Ew",
  "key25": "3vR5CjYCTrgyMEP1p4Se9dvRJNUxB5NBJ2P1BP794cZSRGoYG6vTjd6NwcBDCgxZR1SyDWuji6fD6KnGvYB65nzz",
  "key26": "CrSPLVzUNyWk5GgqsK2Ec4PU8D8Rit1bxwit2FQC8cpxaYSjkvFMiSs1apD19yxR7Zy6ExW5Y1cXicMcdY9w1jh",
  "key27": "66ZnVcxv5hHHft9RwfHwC7xuBLuK8xGwfNCXTV9qHFgYscawaGfBz2fAGsWCK522Ch6RwEhFDvPh5kkQCLoW6DgF",
  "key28": "1Zo9bsDGFMvBJSHGuWJGKXU4GtWAZ1yC38UHgLPwz3QDydngUAnjX4YVfAcmTGXfru5RnkpFCEocQxfr1YSE9DB",
  "key29": "5YujCan2yqTzt94X2cs69mwe1hY1rWkUgVhQscxHXeV1W5W9AbxoRoLU32TYkNVWypCLmMui6dcKKjyYrT7Csvd6",
  "key30": "4u61hA5DDogQpmcXbDmfpqWvfPLN8zrpg4y2hUBRavic4RWUbBZfurvoJXTfAr8nK8pzM66KXGA7xWgzecwKhsDc",
  "key31": "8tnvwkLCyaV3Fm6ErJDThgEVNn7iZUrtqr1vK95gFZWKdVM543ooQUKMruPsSz5HJx34KKMajFCZHCXdAfwB6U6",
  "key32": "4xY8qhaEexksmbsgx7vUNGPfwoHJtsyKxnJeXrmWP21hriynxpPRwiixrf2MTc4xBSkX9bPJtVe64uLAbeEroEau",
  "key33": "5Zds3m54UQDznpNbcougqvkxTZEoJucBfc8skumxXj5e2pdHw6xQjFZaNRgVZE2CVJWD961WNPzYDewXw4ktHffh",
  "key34": "27VpPWxSxzwfnr1nmyeJMmtpEhwvB3j2tSdvAaGKBnvY8LeTYtUx9yvJTv8dMJAMNWJeMsAfTTxdKsMrRhZ6rhPR",
  "key35": "Nvr8GsrGeRf26b2K4yHKJoSrLdwotbWDh5TH7HQm9mdjFyi8n4F6Q8ukac1XECGVQTpfzuJuK3UTHZrnXVkjbch",
  "key36": "BNb4sMhGuVQpXbnrwuMxjF25ZfxMTRdzhhPNJd7o5mcbj5BQmgrtBCvzs1nfPf4Usd9vgTwPiVhfSbzg4zGkfdu"
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
