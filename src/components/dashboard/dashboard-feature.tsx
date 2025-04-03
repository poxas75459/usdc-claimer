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
    "56jE29EQiyoncuDbNBzaqqTghvPunV1QRLrCwtrpDc5qmjZchZFFgxWoqhx1mK8KmaJ5Eutkz63m8meGX24SvYfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QSJR6QbPNBLWPVMxD1qH6oiNhKbG629ntoww4AXwoBciEdADE1XGv7YHWBUsgz3D84n4UDESbfiJphLYuvtDa9N",
  "key1": "5bUs6cCyKKXLpu7XzhjqVWBfr54qEG8asnHG9Tf5Czr6dJRKZLSUNrCvGLrt8wX88sma7LEk8HKipzHEkUAhMuAP",
  "key2": "5enroWmwonxUb7dPvpJSmMvVLb3Fo58jSUAmPCitZKtPeUHjML6VgCze9PVYHtzUAAcdEAKjsudA48d1iVvTrLwC",
  "key3": "5Kci34PFVcJuR6mTPTysGKjW1efwjbA47SKjmdiC6yJeyyYnxENzmJ7AgQb4TpFZRFj7faM9ubMLjVUH4QP5zMbE",
  "key4": "3oCgQSqRKyf8cuMJfvkLnJ4H4diXJ2By7oifdAyHqhqXvk4s5Mu9V9qTPioZFL8BgghEYV6dAbMgSXWznQHT6QnB",
  "key5": "3JwNTHcDUvnJ46XLXEsuBpjouGpkNxM17ZDHnQ7iQQUYmqnr65iJsGWHCPvcQq6XS4Gt53czY1kTfS3NxSE6efcd",
  "key6": "3FoKznDXcWikVQTmoWYbpr81m8xva44uZknH87jvFgdHPJtXUjanw5x7atbhsTr2rFpyYKvrsJwR3T3v4wAvy3ZE",
  "key7": "4MiGkkp2XyZ2CHJ6LScLRKKe2jAm3jMF6QvkACKSFNh4s8RugRybHvmTF2vR5x3wGF5rrNNuCf2w6dTNTfFxh2yR",
  "key8": "3Z9TPL62mfWHifSPbHtGz7BcXaMSRmXA5Bm6C1bPtpv1Wg5BHMviCJPPyBBWXotdNhTUvRXa9P34BGiXKwBRZUsX",
  "key9": "3WvjkFQfL7Em1Fe1kf8qddwCJW8Z1Uno5td7gtQzT9LSbD81W35XnsQR6GtYFjq2gr2nVokq39tZ4TGgGSdr9v8F",
  "key10": "2dD7u7J8sMXJ1ApMTKd4gmc99jzzgduLejscqEMhS7F4Uv3szrmeQveuhoQ4texenV1YzuEqpcGqVpJ1e6pYKpv5",
  "key11": "4QZ66jA4QDgPLueJqoXMZkAMKYg8ffXcgb6NhYm7nQu7BeFMhzb4WhbacjUPqYck8sq2EFsdnQH6hxWRj8tbB7Z2",
  "key12": "5mpkRnzbT37ouVqZRB4sHMTBmFrS4dxzfNo2JcH47p2DjMW8Bp6YTC1CqgKeXwiiBFBRuyyRFuT4grGJvgFnUaS2",
  "key13": "3UABLoXGuhCM5rFR9YX3UtQ6JEYn72Je5fWLQKmgV5avgmYsg2U61pVcxd2MFKnKDcPiG2QR9fBujEvGkSj7S9NC",
  "key14": "2WXKq31JUgeo3KFMRyxc1k5pucoimYFMNTX8BqmPXdrsLHLA1DUy7VicBBEofufPWRfakvSP95GdxQV1GyMWtHfx",
  "key15": "LoULgbF7XVJaMGxMU6CNSrSf8AQ8Jv25m9N9SDpktgcTXyZSdyAw8R6u4fAXYg2DWtL4baMG8MedmP4vRFmEAPL",
  "key16": "KHTSvgbda1965rYoGP6Fn9LA5JRxdPS1yC6grDkzgXaQT2fezRqCnVyvvp4w4XMYnTtSUaRndNL8QGAqNzVT8ts",
  "key17": "2Foz1GCxLzyiqj9GaRkciGsGzgsVpAJh6pmJ6dNBngAwZMR3K5y5jU7hh7zDowSyVHchkkQnqBghc6xCKsR8FYPq",
  "key18": "4QCdBx7cBYbh1TJwNXgcBM9HPeNkowFENFiDPoUZ67GyufXRm9VqxkcBPqFHRNWKaHafGvSN58ywn1x4FtbUr7FG",
  "key19": "3m7SGd7wdfW1tkCvTnTJVjtNFrWmxNGUrZN3jyPS92oqAXbWRjXn4mWSrLXKEnXFwDrZcXc3ynkKvKGX4aDDio7X",
  "key20": "5kN9BWNGXq24xhLwAuLuRnoyfwt4iz9xknF6DSPzWqCJa9wEWV5j9MsLg3v67DDK8SwvSR3zEYcUgoh1oUdVNpmy",
  "key21": "5eW5jFrqtnA8N5tBrd3JmJkDmpopu8wNrx7ZBFrKsGdMrsqrRUwFLf5t87LjFYPZLjb66ktda1ntqjLunFWKKJRd",
  "key22": "5E3wTVpKivdR6fm61tnXVBBJCmaUMp9DYVUG7zf3CecVcu53PbifNcbPF27WYtuvZ8DZUu5tLcny6WRJ4UGkoJGa",
  "key23": "5PzfTNZVgKeV23AAqHM32XWAgfoMAKvvf3z28AEw6gpwAAXsZTTgpfSCqA5qUyt51dQV2rLWH7NYEdmotndfocbp",
  "key24": "2vobkjAxCKb38544AHDy1FPoNNaGa7yzgHY4mL1iGrWvWKJMtCJ9xpxKuGEKnb6o5FfWkgyhSrnR5SsDHWDYNJYC",
  "key25": "4Teo8BJKXEh7dYPAG6dX2vTsSstP93cKCAasC1JH3mavuqhnaMt748cLDx3TRCn8vWwGD1N2tJkwR53yww3s3oDt",
  "key26": "3x3pcGZScqYvzZe54nWCKzMKFkafSE57P55r94xsQhA8UycE1ABMcvDfXE8N68YyR1qGeSSgjKuTLZw7QHBLKDsx",
  "key27": "DRZScQ4YiRWQJ7emj84vptHACPmkxkq4GaVRNkaFskpG4di5YGiQmT8Mt7mQ92wHe9JN9ABSXSQSnUkuKUwGK4D",
  "key28": "55phauD3kd2JzwfRHfe9JxvbXbTQS2195RhNkHVFzy3iTFVh3MpGnUSH7Ci4vWSvLa6AWDcEyz6cKG5AWPCiikL5",
  "key29": "r2F1wn8mMwofzepRNfhHj8WW5aoti9BNenqkEiKRanmJABmeTwbRWMejec69hKUd4gJsFQWAJ6rQWENecjPy6Mm",
  "key30": "4L1o6raQGHS7F4KboQunMjpS3cH2jTzdNjyoenjKLHsCy2fD4DUW1bkLpfdmphQXUMSFBxkkb4ATo56HmhBnEtGT",
  "key31": "49bY9ipSudzVHkaMpiPEK4qt2gQZsj2xQEeBToUTZEgEFQ3ucbDeFaeDmcQXhbKVsw7kFTwYxu7qNFvc7gcjY3Cz",
  "key32": "D2AaRigqjMP1nRx65rMBFyov71Tr8DbyBdjbapQos3gxgjz4cADN42AxWFTQMHhwSmv52WjtSm3i3uYc7zQCLxj",
  "key33": "3Sv8DBpFvLeBTWqzqjRAA9idLKJhCum33EZWpz8kHtyWCsmSZY4KzWLM8Mz4MDu5G2iEmA5xSczSYoxaXNyva1E3",
  "key34": "2SpY5DWrY8Ln18888RiRsjRrjsUesbzoJtzcFVeGv2QioH8CMiVtLULxHKPMjsuH2Bwp1ufQi2B6JovnAkpMr4b8",
  "key35": "5hLZFzHGo5EoGyF7BMv4JEVXgG2d44B5vXgoYYqtbuiEDxYB8xkLn52vp2rKyR5EitZdNawKDcxJAxrbSsmLMpNd"
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
