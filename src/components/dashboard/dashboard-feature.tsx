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
    "4Skapz9ZpQL8jTrCaDG6jhpbZm6xajqJjbyNQwXiB86BkwwPvx8HzqPp5k2VBAQ5GMz8DLyGopJBaPe6eW9Uqdxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58ZecebtysvJNeDuAPHcmkDHHYatLEHR5YmB2abjaotUpVcEUkiMszs3xfb1V1NrrcDYQHw7rYaHZEfLSYNsc6XP",
  "key1": "3inbBmeyMXh76AerUNYjmprdLSxbGtWuJ6xTs4zG5toVNh85zoFwqiQJfUmLjmo1MDbQU52Y52NqQrbYPakxB5vr",
  "key2": "43UsJwUtQ11GT4yxYowwkTQnnFTnKMTVQDHPmEzZFHDtdGKMU3AdRGwAauqaZ6LScKevQ2aXJvRhLbeXBSdRmQXz",
  "key3": "2etpwoFBeqXTeq6pPctkNCcEaxdgZc4vmHqb3Wxicfz4MkKTFgurFPfWpFjsPUpThCVtnp4eQivP2kDm9fwv4qz4",
  "key4": "2zoPXxqbvAP64u2e9BqunRmB7sTGRFbCUQG2M2yCCEFtbW5E5jJ7e3VA39YTbGqF1PcSevMGiW6zESgrWJuu5LyQ",
  "key5": "4eYo3yTeviVMZCHtuf2pKNQLsNbzqNwMyhZWzEYiVhCAajQTnfDRif1yDCHwM7HkscUeHVSv4wMc3wDPPwUDKGtq",
  "key6": "T9npvDbkF5AgSzuSViF9saVUWzHFAd1EKjNmMNbbX8DNW9D1tqgzdC2t5cwTVFW4Tak53DarduNUyoHspRErumC",
  "key7": "3rM1wsdqj3DCHij5U5ZiEojbrLTTs5uag9F78TDChex2D8hfozWrSh1Jpk5Tr8EgtvDHbKrECAzXEyT9Wf8QHPom",
  "key8": "2z6umg18a7wNznF6pYNuKCueTQ17cB3KP5gZ5HZc4dJidsw4T7ZYqhkgdqZC1zVzt1zNSX1XBLKRdTzeRhrawcXc",
  "key9": "3PVYmKFfpJCfWSNSkxQYVrwbU1X5DzhzVvjut45ELGLuJKvtDjYD9S3RrDEE6QsW8yG1zDBckpPNcsjMrMLRn6xF",
  "key10": "cUD55uzUDRknqCG9T4enRKEt2cHhzNN6TZr5xt9YF3wJDtc2utKhryLBRScYrijiUmw8tGtMkrMP1DMqMMAUzvF",
  "key11": "3XTqQE9ddxbw9wBQwEAwWrcnAsmqRzqySNb8WuPNqoV4YBPBmJYpxLyv1TKjCSwvwQpHdeLHArcfe199rS2k2awx",
  "key12": "5vUv8kmxm2s6hByCLkFaDVPTSHqSGRb5eFyh865EQ3b6bh5G3YRKEC8stf5PmpCdXCbqk2fjMVdaZN29CgUFvFbG",
  "key13": "4kiwGkerj656sSU2Hq1NLkb6cMPc4w1KxUsi7RwiTbdQwPQ3LSC7j8dGrjQepScp7AJxkHHNuQCf82FbAc48qPLG",
  "key14": "4A6NwECJ8v7rVgpdryrKoBZyaBizw4zrXJgfbZxc1AZJ9Sq9316Ts9hYqkgjGy6QGSfuq47K2oZYJmym9d7sfjHW",
  "key15": "cSdrsba4qsAdCUBxyS6ApHDefweANPGRnPCREaV8mHFuctXytPfmgzJ3ZyNb38DegyJvRPDyRpurHwGsRXVGyta",
  "key16": "XsLNc3ZF69SG2f7hJa3idiRhXhxPJeMfxckJEdpVHXy2rPZT3WeRbudeLKY25xDaziM4vVZFQa3ddpzX6Kr2Wsq",
  "key17": "4AVQw5HftRb8jcM4g5mWMtLpDUHpmgs3aMAXFfxVB2hvhQ16heb9YNSxSjRvf6ebUt8FoomCtUqtD7tLPZFbmpkn",
  "key18": "25bC6JHtNWwC2Eotw6fquYbevjGFfPUvPCLksdsCJ5v3o56iR6oDU1HvYC83BGfR69ZXjikw5igeacwGV1CJduHL",
  "key19": "5w5DnhLfDn7M34qtvG8DXFz7C6kAE8rZ7WbwZXzTGPNRXaDUKAZYApYm1yaEk33wB9erZg4rxmHmX8yqwRADsRKe",
  "key20": "3g1cb8bvLqZgkrYAe4nv4armMEUcAgtLYWXvsx6y1r4ZvTRdww7a1iV1CUdfTokHbfVk4P9xk8PEqGJ1oY2RgZSV",
  "key21": "5kZWGrDXiC2bqLLrJv5rxfADfVybhnfD8zjzrCthUBpXJkxxpwnaNdtooWHCGHVFy1UujZ3UfjYXvgWPsTbhnwUa",
  "key22": "5gkDKYLRpKeYJaKvoKUqhXhdwdQzieZtf1xWZnuYNaAmm7JfMhcHtDwKbdesLr8XZfZ1hqpep7CZJGsXQ5oY4pQr",
  "key23": "3jehsnGu7kfvK4XJEGiVWAR2ouQYg4fLEDir1dAAWi5SFTUFffMCGAAzj9uQDa75fFrYL1ripZR3pmm8TVXrWZHd",
  "key24": "4qcmuhD6HRvdRGQWbEeW4RfBgFx2duszLKdc5o3CHUWuScp7DQNxpX6utx9kmB4uq9q6PjcG9XVaDZ5tPs5mHXTL",
  "key25": "51XPq2PwBoofRtes5aU2txsKsdgLag8FEaMzY4bezu41vUrKubrQsk7KW3QbP1CDmxhqs3FB4WMuiYV5H3uQFRTq",
  "key26": "39WMd3pekbzmHWz7FTGkJs8qxSKsn4w7kRfSKUtEBNHdr4pKFWmAQ4SrztQTPHtcTwwisDRF6ybmWeET625JvBhF",
  "key27": "2LEEpnEMvjaq9ExSGa9zsizGrobL77a9nUSbr4qh5dRdQQB5KVkAeqHS1obeiuWLRMcMy4gVDrFn7X3zNLrkKu1u"
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
