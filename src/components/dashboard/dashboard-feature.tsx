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
    "LT363pFxwE8JR7hACM78ky1jn8qUvdadNoynoeUrCqBKhgW9rjaYD6p33Hsykn6wEQQk7JfJkEqwotbGwZ7xg9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UeMoh5CvDZ7nxhMpXjxrC6mFQVNqCB7z9ESryZ4HDoMmQ3QwKmifrSR2LepCyy7WMTWQyDsVr7wJKAL7R9dEji8",
  "key1": "2y2KPEuj7DC4xU8xe2HARNPbsw98GneemBSG6hYf6w6FphTheaGogwr29nFkcbnvKMAfYRP8nws1zpLEhpBg4n4F",
  "key2": "4XcMit6rq3Bgh3SYxZ6AQUD73PPh1wMe37PmD5uTyY4ZmRXwhU8zPzR26TzsGJRFNLEEoecESaXNJZijFEFMhH7R",
  "key3": "45fiNnJQfpRhouLq2LYm9H2LC9PfteuYMbDdnid3bKkG3zQKsGDTmAUbf63r8XzXdca2ekSS1ENoKp6tF9ghV7EK",
  "key4": "2aDoBi8enf3nhRXSn47gFUZdkZNWbLbgKhNdQeY5rCLzC3pa5XfxxPQYA2MAZJ3WMu71xB8QmBcPKRw1KX22TDQr",
  "key5": "3dKs3yrQLRZYK4LE6mUpAprRVDaGJ2sazPdSajoVUZEuXyzhLkAYMa1Qhd18QXAB7P7y1gwndqZUuuDVbuBkKxHi",
  "key6": "3ifmJPDLfhpKXwNUtLNkCHGCKkWeRJALKG8L93ZmDpUwxA8kSYSqxCVdrwrjaUKjbbLMGwJkPsiMwCpCepYzAqgd",
  "key7": "tJub2c1z1oRhy379HNgzs9fkZ887znMYGQdYYuniXU44zTAfgM4UX7Bb1RPiYrHMHCtMk47pkPqkPrhr8nwi6Ua",
  "key8": "zJ5QsZH1PyD8a9bwCceUdSF7spBm2fA6SGQZA8Wig1H9FWUTFEDbYorvMPfAtNyKVg8PcgLLGwYpzQ9s6e3Z4hc",
  "key9": "3yGBj3qi64cbXm1gvnjAoJ8EnRGryWwe1UWsFNerbyyLB1ueWvsqf2B8nmEtq4erZquMLZMuBJdL4XyjLoyySyPz",
  "key10": "2KZX6NZjjD9PAfLbfreDdaN8WbSpq5TK4x3UYRgWEA1H4KFJgKXwYHfgHsduX8ddGEU7CC7SW1aVHSNVvkEULoVg",
  "key11": "27WPiD8BJotzqsmzEy2dYUDPuXgg4YGAM1GaiHSpAcqxT7nbWrwpnd15p1Zvu8zFAQV59N1aTPh9oZSsN3a8H4qJ",
  "key12": "J79D2yqtsSEDZDmUHDdc17MXKG19fK4tk5BLyC42PR6JbttdC5vo1fqFm4Y6rtNskkowDHgy7AQ1inu2LuwKNDc",
  "key13": "b3kyrbSL1Uc4GvuH3eTS1sNcE35HbHLoDSKCKoSJLjkxrsPsrGxJKFgwaCR9v162MnohtHPUbudpmLiL5PHCsKF",
  "key14": "WAYAf78bVdFRBRisvTfWiVZepk3RY8GUpaSdFbjvaWcWJ6M6gZF7jVSd2HZfLVmec8pvhCAByZM2VbDRPpBC6S3",
  "key15": "5TMVzXmchPKHD34VLpWfPFkj5SmqqVvir3GshrWerucGpfrymMNB6YyK5qbzDmocwzPH2wqBoxcANtJAJFx3hKRj",
  "key16": "4MRMTpJR2kSKdk3QSPGYHE3gcAgop7sJDD686i9wdctXtSHPxRujUamiWpVN6BybGX4wNipH98bNhnNtiQLRyQcZ",
  "key17": "58EDUoE3gsumWHvtunX8RGMeNBmETHFo7hUpByc73pVVqn7RDTyjkFM6D4GyCMRvLAHFnrMnApT7T6GMU3sY5Lt2",
  "key18": "2NkYrEE6UQtHJCeBv68W4b1DGF1Kxb5eXCSUvPU6zeZuH8hqTDUwkuzVL3yDA6Xv1cuUkdbrqqSiZVmtZfxPpmN8",
  "key19": "4djGuoka1ZjAo2kCVWTKdKPG3WEZEGt3tfDAwe3qNY2PCHeW9AfU3zMUGQQRL3jT1kFZQmQktezCeiDNBwGQ3byb",
  "key20": "2tD5un7poXbhXFjsVeu5hmmGuJi72NXLKzuhqmMo4aT3uF8SqAVW9KnCdaJdnJRwKpNCczy7ePd5MqvBZUnUjVxG",
  "key21": "32UXrhesFz5e55TUviE7GNPq9ogi9uKV5BMinh47d8TUFrjqfJkBUL1KWnBWMbeVBy98zdC547JmLHrMU4yWAgfG",
  "key22": "4obVLGrUhnTx7KkvzTQe9syPPH3CAU8mW9qyDcSmiJuvh2JHSGdexZqMM9T4LEjPuh7AimXEJgXX6dTakvV9XPqj",
  "key23": "54cniKTmPxrv2pFCqY8MDUBkhQSFVuhq2K7gpb2rrGH52fs31gLZ5QvkwpgoATFjqv8PkAoYK6NjmSh53VpAzcrY",
  "key24": "4UfqN9SRN5UBx4T5uUc1YFjBqVSCm8q3CTtzyoUgvdMcAnwnPwBVN8PAZkitGWH8yXYiSMt63xwbgGq1wwRc4EbT"
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
