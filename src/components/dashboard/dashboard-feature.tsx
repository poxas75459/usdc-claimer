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
    "Ki3sZPgfXUuAmXQHy7mdA4ho7t7ir6XcNmnVSME7XG7M1idAmi3ZC2XDPuNqhVf9zPzFNRkXLoL5ZbuP7BwjLXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MGkZvw6V7zTLLf4WTWJnmGQqbKFLAcvxyjQtNCpF9pKwaBH7BQRBndMAB3bnsYyCWmkapDnR2R3hao5yEQniswx",
  "key1": "rDW9FBsBjRy1f7qM4LSB7TbULnMekXU9JmcPaeEviTL6uLX9stV16Mq2A721WU24voB2mGKyGMq2nVeVnot1WMX",
  "key2": "4SnuSv18wLgUWp8sQDpMqH3mVZm1poPwdHUo1wmQkihcehoc7iYdgxxHFSbtehHer9NyPofGfQNcHufmzyQLqzGU",
  "key3": "3zzUsWGzgpSCvJ1xBWQTR2Ax2sKHaQMYtPwzWcaCTaRf9dqo4ywBa3ndkgpDGyqxWZdMCFmbEAx8zCVqaoDwQKUD",
  "key4": "4GPaDZkn78sGf2eDrhpe41387oDFsYb3XyiMbbFpUD4U1wub9kRSNjyXPvNFaf6SAVwYzQX3srxWQYz1KQyzcYNU",
  "key5": "2m2EVCurQwhtK61RmoXeKRxnp3znRcWDRvPbhSLxKU9zAbJcLe5Y4b3gtSGX2UNuUNdqUL5QuqWqeSvKD8V1H1B7",
  "key6": "5LzAgwPWW2FRxbdAshPdKWELHiRNCmAkL6Y4vXr9D4BJksUhCnRvDCJCNNDV76xsrmYsmEJpiCjpCFerDnFcjJcE",
  "key7": "4cwAkSsPkG2vEYypiUgn441U6x5EpYWzejUytd8KGfXqSeasBFCudZQXKUhPuhUHFxu2ixDpc17mkzHJoCS4DTSf",
  "key8": "5hDHuYAnFWxbpoBA8gyUVCrxikajSa3hKLPRRxYP1WPMxYoJLE1Lot97JZtny889c5cKHALrgz8u5s1XocigEaWm",
  "key9": "5WKmQSt8LR7yEGCq6UP7k71EnY9Ci9CfF7vfMibCN6wgTsxmJdXtCDM9UKRQYt51xsU5Rgfu4YAxfkvN3JMRDKsT",
  "key10": "61Enkn1d6Q5yvfNaLk5PTCD7P4rQGke94Nbe3QxeCxhhh98q6uzdPh6XySPHr4zpX6kiXszNJdh548kEDZpJUiHX",
  "key11": "2eij54BPr5bs4YvfHRMeTjHr1BRVNWU8htrxaRGz3tRsim3xTu2zLqoWp4sWrLsrXgYzmGidK4ZMirEvkr9pjnp2",
  "key12": "2CK1VHgHxmxT3ftDXQKAsbZQMfSnp65iMX7uDckNe69LUkyk9jSyF7XjKyNSiCZ3Ta9tjobADTgtnsRRxEaVARrf",
  "key13": "5x5UHHZJBsjbXBwTHYGYVtkQQD2Mec8DKA2jRGcqS8dXRguAhWd9SeqwxTALuy7i1XkhHEWJuaLT5oGPATZNa9Du",
  "key14": "5tgWCobuRrVQySaKHFuSfPjg7Z3y412EApJPMzhkqRRZag7PeiSPA9biZJN578aPFbdG5DTA1vsBVzrTfKcfZFTK",
  "key15": "55xbPkBhoHsLMUaVhNtyrBPuMgTrmRTK88vErGAffVgzdkTDA2QcEn6RxZMSJ7CTxDW4De16TgELy9VM9PsYkdod",
  "key16": "3qnLHKtQcyddYnSiop8iV1fyKSHWRdheeiYpc1NbTrGCXiUjaaCXYdxUR1hWHHvAEw6qa1xMSHbm8jZjL7y8eebN",
  "key17": "5Uffo7EKwoWRBwjqU79jfhb33pTwPojPknwTXxSGPgxPgNh8jKTVvgTCnMVAcyKwRQ433c4fi9GuQKU4fnHjES4L",
  "key18": "2A6vPCLntaTntv2195a2vqjMpG8DgUBAXP8LVwdUR9c4gnbVfRSExz38Sg8QUhnC3apbtqfaFNABGynrur7ZEyJ4",
  "key19": "ECbVjhxNQyDm6Wi33Uj7igoncr3pNMpBSji1VmCVmLWZCM3EKjccsja8QUipAg1mKEwkCLky1U5efJ9PPwvWFPb",
  "key20": "Z4fPurmpuUyrjW2YEaYC1KQhhGSwpBMaeU9fnrDu9Hm3ykmGVDFvhmR7kF2cXmPqyFvm7ETL8EanEjzcZqd8WLU",
  "key21": "5pmabn44xKxPBdjoRp3mQCyGVEBBirvL87YUeGCZuqtr9cWrquxKh2iSFDKHBvcqVxuH7jcP4xjT1Nj2e7994X4n",
  "key22": "2qiuuTLJQiUYQ97rHu5CgJatDRtJds3ghjfnBWCdGkSEY4zoRJ9iSeYJfLiAT1uk6TS1zRBq7Lx3R3uqFHr19ZnW",
  "key23": "42CxeKdjAReHwJ526NfjKC2pNwL2KSgF9oAgK46SftUmrve6yz4Am55Cfj1MgqJbuyS3WpWTURX92Rykm39WDnj5",
  "key24": "5zzzpj9q9xVMvgeAevdv1mTwSgJXCsxvm1n66hEPdrttf5SkFWoQjWMw7xoga5gmUh9dCsnXcG1expprQjMQsjZg",
  "key25": "4fUfDuiFzYFQXbs6LsSf8HESLPZHXhyfCJ4Hdc3JqXzHDQH5Ni8imeg9MsMAqxWF5Dy3RGpFwRaosxa2H3ug4LKX",
  "key26": "5Sp55AXkDqGg1XGgb4J7r7p9ac2y697Zz4hbwCgmhVe2zVEvKtSBQcyp6mSMxhojs4o6ezD7rVVj5Fupv7nVLwii",
  "key27": "5QXX6kMG7cMFuNjzUdAb72AyLB4CTjT2R2gBbKAm1AxFiBfpPrVDkW1WChn4a5hrAhfdMYpsDuHD6jSmhQR1EA4H",
  "key28": "37qzxkUDLqn3qwtFWPrjF6JN5Cbm1myKQt8yUCbabe2oqzwGk7sq2DmtCkRhsh6zx3EMtE3UCjP8oW1Qmj5HFkua",
  "key29": "3NQYccrQnM5qNmjw2r8pWKnzabjZHMJM8WqFCpyogQ1fKQcxBpoEVts49vWXvfoy8yPqrGYVL2ZK8keYEENzSpSt",
  "key30": "5R5dBXrD3uB7BZqm7nugsVWCA7yoAcLWQGo2mPqkQbM8GGg4PC2tTQUSScoLVRNcVXkpZnTHJLRatnmfu9qKCpdN",
  "key31": "35CxFKWmaUigiveZ7iMZsJTmsMtmVbB47pX3jaAN8q9JyAXUtcHDs6Xp9E4Bc3WRT1VhvPSxUxJsBNswxvGdazf"
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
