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
    "4TzT8inwha2wBgeBeLcCd22gsrZ1K6UwpT9iUaXmPoWKkmQhLYMR2QTfLuPN8dfbGKdGZEqDD27UQjSJf5jL8oE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bDEHVHFeAd3EJqARNYjKh9qyGP2S9U1ZxpDwEZsANx4xV4WdstgU3pjwJEMs7oGDvJ7AyS6HAgCEZxpMAmQYC2o",
  "key1": "5kJbdPNDfV92M1Jwtt2hy6C97MKU588EZgJHLdFuqMnUAhCyEHzcXUxPzeRGFGvigHzpYndQiC3hSJi7UETZmVo5",
  "key2": "3AEkRnrgrtGZpQLga3Snzjc1cJT6TnFPXayymApYtvySt2GK2Nv1VUDRqakjnRdLNrYX4FTdjJ3nA9FC7WRvcN4B",
  "key3": "4bHARi8NpUTARrVuJ74FYWZ5B6ScWrJMAjTHEpGw2Byok7LUPRmdVqGUqPesGRyxULdvrFBzgUftTh2PWnQ95Xya",
  "key4": "2fW8EpB92fBPRitXVMiBaFMKWAHMf48TYWYzKrspg7ALk6puTKLwAaYz718wuocQZk4xYCSTZ9zpBaguaydyNkfc",
  "key5": "5mA27X4m2SuFMGKNDhSGmtoqavibscFdBmMvVVdzugT65FhYUxLDN7S3qCkdnp5Qt6cSazRN4EYnJPwVjLcmvJ4i",
  "key6": "4CaPzjYJjEEywAdhCEnYV7FgVo1CbipPsUnzHVuRbJErunizVdNEyRLt9GprpiMhwfs2nbEx3opJanQbiWHBkvkw",
  "key7": "63rWZxunEZgqZwqUfgBmczhD5bTBHyJmU9bhdwXHwKChP3qgmMATo1wCjMgMNtcwTMetb79Xhh5uZ65ZDTdEV9WN",
  "key8": "28zr9qdR7KV55QqLu4NTU1zyN3S8YJU5XB95fZzUFqt2d4sJsYv9aVtHSZP7RpKMepVqLabkmA5EnXpn2Yeyqf64",
  "key9": "4Nah24T6Rpk1F2UW3iCjnCW3KpDn7XdvnaWaUuawiiT8wm2KGe78EArzcmrPS1v6NGDSMcwp9Y7JyVQ9LD5UA33A",
  "key10": "5r1rNxK6jecnH3kPTknEiH8showhcXTS2TzxVA54vCEWbQbxyjK3wTwzRgEWpqsfUakjFaKeQuJhQv3QLXiS4p6r",
  "key11": "3ecB4j8j5pBFHQyCoNBXotiCcovK5T2JGJ5SUpdMz2MrykVoBcFcTjCWowH797pRRfn2p3SaobEmYz83buSJNJBu",
  "key12": "4BsA373zT2uc6K4knuHkYNg66HyGgMgD82guEgbk6CfWJRRmvMA8RbPtJqgujKom4FrKuuRocL3ao5tNoHLoSyzm",
  "key13": "ybfkseGpvHEYZUrRvg74dE4LgTgLLSgLxU7hL6x5L4F1ZKF3r6MGBqn3x2B87DH9K7tw9QYgWguBu9NUNcNcJFn",
  "key14": "4aMzr7gbsSJQCCzZ74zcZqzWcqTUQ5E3TQGseCUbuY8St7nUyzaZf5AiKKvzhX7jG7xDWgFxFsVyrVd5zqbd2R5g",
  "key15": "31NZGUPmqrxmrvYLnfAsiBKr4rAD4aFuS4s1nE8TwqUpcL8TJ43hQjYzmJxemm5Me1RzqLGWf1jv3kXr2BV9if5M",
  "key16": "4f4g8UZSx9cojSnvqYMjwvii1G5sAhhnMvYeXL3Xi4xdJcvfr1YAPXAJChof2JwqBXaNKeNfEb39SDPZ3w6SeVte",
  "key17": "Yh3qgMTHFPNDaUpemvLwEjY7YjYTqB31VbCVopeGvKX4GLifeK5hH3sPHehUV7AE17Tk7xZZbLfwAa7aLd55Ycp",
  "key18": "598SM14jzZbNED5dzwApXjabwDftJGSNvhDppZk8tZxFZ7a12brmnhPYDdXwGha8rJKCNK3jWWaQL3KuHTF8sGnx",
  "key19": "34s8CjCYQdzopzB2trSfeWaBDTxs5yJ6Pp4xXpTASnPxnejKaNXL2QVgDvec6mFRwR2EJWCMmH1wtb7fx6WmTx3",
  "key20": "5uerGmvWvLonoNiDKoeqpQiZaSxmJrEPhvHX7BS7JprzicL6NqSoqg5t765cMbsiQtiDzxrsXeAj3yF9poPiqi3v",
  "key21": "5A97tXP9Wr9pXmARwU8kMzrKg7T7FbfyKymmzHoTdpHaeWFgF9dCVEo2kvnz5R17wM7isG7votv1hm1TscDiKb5i",
  "key22": "5pTLZXoajXSnrzPawGbCzg6ytNsLwS6VC3kJN5rB73tMDG4LZ9z191aN1NewAQPhCPV5KBcf3AVC9LBxZgKfGhAe",
  "key23": "5o9a4ucAyYHHR1v9XHHDukHynTg1cGqTif1ZC9xvGKnwYmV1uvUpAkQAuvZckRTMEbEsCQsMkvszBP4AaymbMm4b",
  "key24": "2ELZMPcps7bRxQqH4e2u8qyy3v8XEcJRrm8ueoakogsxvMexf6yTrobeTmiDif7r9pvWsWwu15NTn3z4zB4LXzhk",
  "key25": "4FoUdquhyZ4PVbCKpm94154Bc78FX7F5YoPwNoK4EN7Kt6UEz6Pnwk8UX52Z9aCGMvzNBaqKReAnM1xeNik9tV5S",
  "key26": "FiH6g2KjRisaqBY5waSXXm6jRMRUuyMhVw3thDciwvPnuyTEocKzNckmMSGLU4KqGrzEJ4ikdURQAQfXDCji2Xa",
  "key27": "5S7WhAHrDMaXpfBsQ7xW9nz5HyGevrNgzKe4m288XDnC3L4cjYtx9pqSBg9EVjCvcmd43uNveZLg29cCD3tzwpAu",
  "key28": "2j6YjGk5kcCgN3tYTouRoRnxRRN4dY56gysvcY27pRmFpsMGQUbgLvbo2zUETqVEvWeKXUBbYZwxH17JaJCmhnXN",
  "key29": "3g61sdbTVJJxjYpnkxXbt1qnXM9phnkiS5SBgoWg9LiRKM5LLFDa4Kz8c89YA51n6RFv4kToP4bJQsh8H4AbyxGA",
  "key30": "58ELMuBz46TpiNPeyHZ82yrkoMTc2dyhCLMi1zZiPPm7x1APBptnuLYradAuLAzVbdcRCaifUKWJhEJzbYT7F2DR",
  "key31": "4RSwZQa4hfvNRDysq4DFScqMeW416oLqzdCs2ZG3xWL2mpnyFqZ3awjLMysPCgRQyVxPYh8rHTzzmDiNRfVSDaNG",
  "key32": "4BoqVN9JGn2ZRSKCMMPbN7bC7pKHScpog5FHrNr7REYsZvAt1owFsDUr5DRPJ3sxiiGUFLqLrQJpM5dqzkeTxvy7",
  "key33": "2vLsEYUPKZwVpbivo8A6c2jtfVcZDjrBUVrdvXzSvh6RneixpLcgCySHG9ffcDZe2NPrgjXFq6CU9QmwKJqrWMmK",
  "key34": "2zncEZKmURNZr4dLnPZ5doqmLyCYUdMXoXChaLVJFBx3MdQ527nZ3cJPcXbCgaoXYzBAEwxWkqGWwhkRYUtW6UM8"
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
