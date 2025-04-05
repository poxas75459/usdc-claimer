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
    "3Wha28kFbRcJpsL9V9earj8GaVSH1PFmNFdAMobhwcsmgEFyfzhBqF1SriBW3nQCjcpuDEpK1UpUS51ySLtYXWBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bPzfaJVu3M8y2WEQKEP5g2nR5D9HVfVAd2NHQwYsqiKnLLHJ2EfF1oAcxEN1HcWcUeFK3Rm66SDVqagFkxownFj",
  "key1": "4RyptoZJk67Fri3FdLRGbDQscSnJ7v5f9eBsLy9NaTaA8fyavkrkKMPuyYiQzcpwc9bdhRYeNRjwY1cJ2CatTadB",
  "key2": "3c9iPZ83yd6YWPiGuVEgEQjn6G7pw4NvdXgVXZNaBPbkHBev8gnkYfduuBLMbiCz38ZajoSp418CoE7TDNWfmGqt",
  "key3": "3fcsCons4TTZKce1WJAZ4tYh8NPYea9ojhNNUY9arTWj5kz8fxoHpTkuRLnvzF78tnwDkLxMrtNX86kPCeftA3v2",
  "key4": "5fbRsM5Wu2mPHYSi4xxJcr8R4tkx9KemJdjSZ2AHbftVvcgRV8r45fkV6EyCkGCaTJc8JSKcVS43HAHc7mKVNXKK",
  "key5": "rM7AeyM8NPU3FJWWPRMgdn9N8RhhQTmPyx5YrGMJ6NME57XFWk3KUkvy3wjpxzYAjEobCfZsp9zyzVBszv2ic62",
  "key6": "4tKfSq5u7Gf3jCyf4wauVLJ958y5NBMHjE37vPU6g6GSUxw1FfBGx3jDKvKXubaANTNmEtpgeNMENVPgpFMbxMxh",
  "key7": "4xzJqSrqivCj7KR2Z327y6X5XmU5XbVsnkyHmqtK3Neg7Vk58pddebF6ujhfrYxq6Bp2EqsfLfAeniCZMWjwtPMJ",
  "key8": "qNEqhG72dKY4MJJLGP9y3K2j77EZ5nk9QFTinPLnZgr1Jgmb7N7hU4MhsTM8RGWaaZBQCJQtEtZ3bX43x1fQPru",
  "key9": "z2jxL1Cb67TwNtsnWgJwZM1gXAPY2imHgYbBYKHnvNRZCVb6CvemhoJjrV8krmjNy7HXEiPeCzQ9VHwwZ7kmB8V",
  "key10": "27d2crp9VRKCSSESm9rFe28YrR1skTP3NdxBvfihcfJRz1dURVyCyiJ47nf56MZbCaEv76x8KyGFqYxVWn9sXkAd",
  "key11": "RFeEHMMZwqMs5Y5F93zAp6JJ1hyEM19VFjzzFNCgzLXFwDKiAB5LeE92Sp9nYRcpwJ2AMJs21xk2Dufz7hkojuZ",
  "key12": "2A88LkK3R1tFk48adKZPXd2cXM1W7k4uZjzW5yUzC7b3GJcTUDR4N2kdvcTKAV9aGfFx41j7QoGGiNeWFcNs3Xpj",
  "key13": "2gckWvxzx9S9uDTyEDxysKJiHf1NzJL4bUK4NbxHzWF2PbzAqseRQCeNsvYZHVk1MEG143JdWYDyKtc66ha32cYg",
  "key14": "5Zyw82x1gGBSNVqdwSdRzL7WbhThDBB1RSZZN8rPjWrc7d26h2qTuYEWRTCfCM7wrRXNZY13i1enRSEMUCQNFkxE",
  "key15": "64g18YuyEq7wUnNu6G5G6ULhf5jpZiJEAtYbSZK8Sd9LvdSc7DYySYLjjiT1d7W4rRk2BzBCK6VJAyko6iQD2V29",
  "key16": "2XsQ2vHGetxVLigoYdQvZfJyRPvNyMYXeXbAWpaeJkuR6h86iHwWWcvxcnh9jkTkN9iMaE2TydaKGdYoVPnkDtk6",
  "key17": "3NKpASuuPP9S6PHTzNbNDvkRWz6RBKEBamT2dJMW8wtH9PNDpUeCTF4o84asaKMFZCBr3WTzjt5xjCsnesz8ouqc",
  "key18": "4EYBL8AJP6btr5onkXk5NENkVpCcwG8KeMegs7kxCMP99VZcpaZheKyzPEg3HsyssiEqE5afi9pEiLsSeafxN6NC",
  "key19": "4KA6PtjbyAAje2gS9nTmZzR4mArMg9TjkDUTdMShtsrTu1mqLcuxQWRDAaP4FBwKMw9XeP4u9fdvwz1samG3EhC6",
  "key20": "2jHNPD4iu3Fkfeyd4S55d7uzcoxdp8sga8EoaaWynxGKUGmRAptRQyYsAqsfTtRgssryGyh8viCtDFaXe4SZ5v8R",
  "key21": "saGAnAPd4edANd5BHjrnBXqBcbywbsFMsMm1VYvctRVHA93LmiLUM522VYpiCnjuiraym3AduXG4hFxqM38uKVV",
  "key22": "2HTCTVwq1hZLu3X1qGo8UsHV4cxdDMAK7waTRmE7Fsue4tdLfW9SvTYyeZ61rrz9s9ywh3optLYHSSgyPM8HYtbY",
  "key23": "2CV531v3UYZ5tdvzAvJTuM1Y68C8FsXa4ox6yKvZZKXFEtJYjoE1By43bS3jmPvG17wwC1gUz43mGCfQwU94wYZu",
  "key24": "5pNzHqdHzR6Utfa7RRZU6guBpQjuHcxZWjY9sUshaiihEdvFemffpr3LbjHMFvLxj53k6YxZuKvFfeBETsXThRFH",
  "key25": "387Cg2wJeu7Me6zgtZz3hYtHq7wd5gSkL8TufuEqL7g3VLjHmyFzX7MigfM8TPAPWe1LpR573HcNr8tXeDsjeghi",
  "key26": "2TpjWyEtHEd3sNMTACqeewenDcxEmJL7b6TSZ62fDNHfXw2xxwfULYw6CJwwnVumA9Bt1uzKhzHYaqnhdsEsqWjH",
  "key27": "5TS42igQgkYumacB1m5yFDnoo7wi5177JEz8VUEqJWPASNVsFUYYzEtkXTzD4SXGtVzKxRBWW7LbTFSKFKkLZb6R",
  "key28": "3N9L6VjQA4WmTit9Zi6PgXSKvNKiDFyrQgYhHarFP4XreBeoHmP7XWTAx6brHSXDKzsp1bqKDZmHHCj5PYTDGTrk"
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
