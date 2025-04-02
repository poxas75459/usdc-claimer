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
    "2ukHN7ogbvVS2YM6uwPhAZRq4N5fmh5AjPu6BziKd5G7DvHx3bgNKUZKZYmUibHedR5ddMbXQFxagtcUW7faGcCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23eJFN7Tie94BYsefJjd6gtBb7ugFJt5CvSCxVdRn5UwpQYy3me36D2Ro3JGLyEKiJb74vgf5QtqtguvADNA58CP",
  "key1": "2Lncew3kTG5sYCxL2buW7Pdmgr1RF5eDdTwpZnpJvkkCphz3jrKMoBAi21Xeociec3FSu9oSRucWwQrfofQQnw3W",
  "key2": "JaTDKZZvgYKmnMAmePgz4G6jeLq7t6qKXGbPMUYwdH4jTMzAfChhFbJhx1gUd6Aw1d9Yd4timZJKCQYZoDLF1TE",
  "key3": "4tA8TLchETrwUZPhG4Fg73rk5AsTpjDSaojkBkKi13ECPuxzfBhqr42EdPYKXpB28U9YUpfMXnEPxpHgX4imQ3fX",
  "key4": "smoHrWRtMXucc4K1seuNZHZGhkiAvfEmxmQSXrtzCsULV9AjGvS3emT1sw8ZwzmDuprWCyVqStM68jY7ye5sH2X",
  "key5": "4KtN72SaVeAFRLMCVaKQCTE1AjeaMDFeE75Gb1m8a7uYNijf2RUcxiPXiK13r5c7badEK3gd4EMxqCT2w3CXJM1n",
  "key6": "4uBkBsxZ2pMa6ozmg5gnVAWJrNxmbPicu947XctTeAx3WbYwd8dr7UvhQCFw54T9x9YTBUzxUXYa1M8JV5N2gECP",
  "key7": "3nhFZBmfdjnxEdV3w8mDJUMdVLUHx29WcLUPxETQuNY19qPFdmRcmJxnvMJBAHuTxs6gzqY1nEQ3VfSfX1txeZCL",
  "key8": "2CZMyEheq8pm5QqzKGLpfwXtCRNUo8ACohWYjsCu9YyhggEs9kYQHKWzLVnhvkhBWh4f2H8VZGsCyYeLbfr6Px6r",
  "key9": "5ew59RJswVnsceazZpL1GdoteVnMDT2rigZPR3ML8Ma9mptHA9hRQiQGA8sASdHtHjLwu459chX5gajzTVQWtQDn",
  "key10": "3mxhkcnwKdEGgokqiXdMGBk33ENaWfzfwsH6eX34M5ubwE5yiwCXbsKX1fyXEcnXzyyECGGnDoinYgxTMFwM7K5g",
  "key11": "5oazvjjptTcJ2cw3hj7DFVxNU68CFrHypRk2fyBjUnHJL6ugx3aDatgesKYjpttBNswrpxUQvqveRGpvB7rgYeTL",
  "key12": "rC2NwDB2v8ZxmFVt6UHekSd3APhcamAMCC64S6LmHtSmtjQqRgjbHQ7SZJfzuKJQVhiifURjMcb8nNE8LXs4yia",
  "key13": "iChD2X7kxkPp6QGbwCWcJ7CxFyrUQnLTnva77u4d4DwsxACqcVWgG85G7cf8dECwRUsJJJDDqg9AHzH3rpdoxyP",
  "key14": "4HKAwfhYa4MnSk2sT4NKLCkz749aD3wFPyx3UAbp3XhH49KM4BpXYTHKTXxJDXyBLVj4kJUkMo1H6PRVqdxCvHmg",
  "key15": "3X7FbXm8YrHCzUFW5TMkrphjEAoYBjharxhuwVH4Kqb9XvQ5N7Gt6tJCMGJrwwxuZXu7vgTrvWVE649c2s7i1Yuy",
  "key16": "3hcHQrix9ZnA3115VFFSeXiN5URBr66zjrS2q8GmsSPsNuBJy2xw9umKN5qCgKc1NWr88M7SXWEu6vBXUsbkhThB",
  "key17": "jgqxoyzAoT4AsBuUbvr7xFH9kVLJNmWgxaGC2ZZFaTtr3WaBfAsfUTRtfJEvAbFsoRJhbw75j7aScRNcKMDtVZs",
  "key18": "2f2k2KW7THbAA5PsYcgDAMyQ7iBMhpPhq7nd63a8K4HPC8S3fbpb9d3eXTYgSCfBH9xXceXjc9CDSfZXMtjqB8NC",
  "key19": "4wSjNNprG4o9tSqgNQasphU1pqx22ghurAnTpSYpcYZ1j3d4M1zPJsb5eRd2x9bret95obygVcRhkzwbzxMqgNrA",
  "key20": "5c8My5D8k5Ua35oJn36n974K7UtiK9UCLCRNr9dpddQfBS1pNksLFbAV3Ug34bhoZezVnSyoTmR9NYxSmn8NAHC8",
  "key21": "2XcAnbF1L2fwmtFpKwgkVopmwHNt2TuSn1hiXgVxfbMhCAsBxNkDsotdHzvnWeSpS6YwkmNwqtj5eMY9udQQeGm9",
  "key22": "2Smg5wrbnVHdcQvaDyJsEBD7AwBDd5DU5ZJtVke4dXBC1vT1svaFaUH5Q6NCRMqbQ8iGSaWC9o2WfcFaZLTAm2vX",
  "key23": "4uSnk7E87kiAyTHCzp47PHabJ9S1D1MYbV7St4bRx3itcTQokxHEaSnjVPLmg7qzuGpnxj1ik9KiynB9CwsGGsW",
  "key24": "4uHmhwztxT6tdew7E3wwBdXdGDTYE6HA56erM5ogeE7ALbJfjiJYpdUsqd7aZm5cRXmNfT3dcHKYLhw9WQjcqwMh",
  "key25": "3sht6ucgGSGZyDYZLQcMUuyvjB8psw15iy4hvgTYmqhynvYWphFUsqaNr9XgHRUBKXtpZWExqCaDwNCfXRUQWHUv"
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
