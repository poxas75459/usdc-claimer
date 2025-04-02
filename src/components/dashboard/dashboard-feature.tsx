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
    "28JeutAvvxztrtA2mWzTufeFfGYXnYeAExR5vRJNKpKpsMw1JgjijfEDHqMtDbHYxWGK7afdyAbTRhYizCqQywLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wuzqq97u1dVoA9e7s3gnF2tvyHYaCDdNWMG9BcAfJz1c6P9akmgHYSNmEgsjywZAyyht91uRkjqaWaGUgm8xDWg",
  "key1": "2aQHfDjZTfiRqdRsHFDj2B3zr4fCR4vh1q6N8ydsAWCpyroqu5x3T4Z5zQ2cRXy3F7b6NzrMpHLD61YZsQcRQg67",
  "key2": "2xhNhWJwTNboaiwxAWzoLTJwa7MAaKdDJaStdoJqcdSnLxA8PGsWe1V2oiW52H47qAGMkbGBPqoWnNUHdQN9otNS",
  "key3": "5jBjaB2sgYobnR9EkfVCHeUWjRrazyT4dmSYHUdT6pLiqPaX9KRm5Xn4KgVEb5PYLsDTWwUWyxNu9RajKsHHn3QL",
  "key4": "66sX1JEbfnGDVywyTnrXhdS8tQhAuAgkQqbvz95WyPMmtjGeTJM6sF2JG9dC9NjtSLGJjoT5hbA6BPicVziMn4xf",
  "key5": "5eBNjtUokLXjPo2vhDRVgAfFrJDMDGWbMSo4qb5K11uABuxrmNYP8XcWPWTtB2aizzr1emm7KWZoBi81Yc7o8LWY",
  "key6": "35YkQ8bPzHRiQHt2cVr2wYRpvEzCFEyc3o1sFkai7s3EbA5F9jp674wD5nWHKQsqGRFLWusMEHfULqXB78sdEa25",
  "key7": "4K878DhswsNJ3ttPq89FJbFsdMZyPrQg5ubW6mKocvWsik3qzKe5bdRrDkdKohuHfiP9zjLkxNiUkyZKDHUfFwd8",
  "key8": "5LwnH9u7Rjudze5odit1xuhgdtzmvdzUuWuKMouuLLKqLACVR2e5UtFRS8NQjnn3bQfV7TQifJDE3AmpPVGyP2VC",
  "key9": "2GaCKjGddN2yvhrewby1aVtwvT2JT7EoQQfP8aZduqN3D5vNgYTVAHdQ7Cjy8a64D7PF5GBPBnufjNd5gnfBAQos",
  "key10": "26ReGQtnnmwMACxTufMADHqA9BiMcoqJY5KXbhoVMdjGaimAdVoYu2kGaj9s4RWMfxj9xBmFMvDE7ZCw2iNngQK4",
  "key11": "3EHuNfroUVegopMvEk1uDe4fpKwKZCEiVB6mbGoYAhcznM4UE8nF74bZQdnUBpBQ6DWhGLCW1NMzNq7w9x6dm1V1",
  "key12": "5PAQRcosvCc7hMJgYh8WUkEZRMWg6n7bmTcF86N8k6qAWo4qU4JGn7iPy4HMtnMAjgPGtz5Ry1r3HWt26qWuKTbm",
  "key13": "3nXaeZM1dfz2S4VdUUQHYMQcSYBJ8Uh25bQcrnr9w5AWurV749TEvehffhcZhVwSprKEtRAE64P5R1CfxzLJd9AB",
  "key14": "k93QwLUxKp8JX3PE3mHSDBvL4KkSVSKw2QpSGNfNWzYUu2u5gB9TtwMyzVh632vnC5DwWEmDsi75BNXvtVvStCX",
  "key15": "UnTFVM6mxUUKzUxNLLruf3KfoFUszudMFvwTsSsNEvgEH3kurr5CMF1gig2ydVAheCp92XdWTWLmcgiiBt57kTQ",
  "key16": "2gNF3t3e9ASjVPPs5ZzgfHVQtzsceJQWLV4XHPHD8aiS5h6Dm8VKgf1gFm7JgbaQG34AfcKuhrh8mr3uHVNPP4cn",
  "key17": "6VWN5gcWF8jTFsPXRSgT6bfKtkJvEh8QHCSnHb9FygdZECLdwZcJaVsRBFgvyrjZDzaV3XoCiGtYqhwAUddD8cM",
  "key18": "65f7nPbuvRnRUpXXbQzCaHcoprAABrpcKxbbB4VPzkGAUGifGbCxVnxo746kWV5cRaWRFq2GBwq2N19DfEne5Tcz",
  "key19": "AySTpAkx44kpHxZGSbZFR6y7MN7Ddo9ox5HNLZDEAaR9rAMsMfhzCymk7VtsgPVQqX6FSp1Ldv2sEemavBPDMfw",
  "key20": "pSot7qVQcvJAJmQr92YGNHBvvpGzbzMcyNZTjBjs72vXi79hH5nr3UrcUQ7qRHnrPn9jEcPB8HK4ZE2Db2EMwFs",
  "key21": "4J2JqoThwsLARxLGFjHZhTpmqDQ6wxxnTX8YydT2kWY3k4LEbQBox7cKFG4SbFFpTCrS1gNybMDt2TSeqjFtGoWt",
  "key22": "4Rppy5vpcRKnLaurkgwR6buG4rN3zCWDQZpiEuBeruWDhvBrTDyn44cbVUmpFCm8FCkYoz1MnpHuXXXQ7yuZHcGb",
  "key23": "29QSuwXk72rzJoJyw39EEsAKndQPxRtCZkZ3FWrCzgjsXbJHrpdwgDvTKbY8R18mYQmuBg2nXUQUxUFQLTNgwcpt",
  "key24": "55K9ZB9EL8J8qF9R72dw4ozt6H28vsuUvbVP2kuonmXMQLyxQSVj5XJyqAhdwrvoESwydGS1p4qsCS7ujYrYzYfj",
  "key25": "4k16g9SR33thSLKdJAMobTF11na21DNGrnsMp1Ugj2QPhujophiKiwrQtRZo95QEJTe1cmLxanY7U1BvCGFM86ZS",
  "key26": "2JsTjrpfCHrzPbUQiFT6ikYzUrRF1EDaVUTfggtJtmCnaSjorAmsCNuXFfxcA4fAEdEEHcYQGxzRhEFcyZTHRfBq"
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
