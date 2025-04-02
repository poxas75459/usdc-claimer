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
    "2uhc4f31LLw6FQCHKyLcWYnRfp5NnkLebRDKKUN3bXhy6NLecbpX7j8Qp7zBapFsuVXm9UmP8mT9ARptgZDGTez2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AfaYwxVBudUQcRbcsRN1dPyu5V4pXDPm9cc3dtpE2GLvkfHLfPf2FT59XrQeBTXkMTNALiJ69ZWY8NULvHuiGaT",
  "key1": "5BSEjzxiWACWCr64ArvrDa4HQw5D1JuvrAMG2pf2pgnPQiAsVp62cJTNvibRDsaiAcFh74R13tQTWNXCVemyeYpi",
  "key2": "4hdgvz5prtocPhCYQNwDhxPr99fK82rYiKwwYDVZvNcuMBhLEfnUmZfnHuZXDK25ZtzHrkYTQcbeK1ZaKg4Ju7pV",
  "key3": "529XGQhinfztt1HC93XJVFi57f8TGsswwkJ7Uj39xYkmRKEPNaNpYCFiKFXA71HmKRYBfr6CSz2v574NVcK3G5se",
  "key4": "3Cvsa7Ft2iPTjbqjzJ9R4tHaS7jzpcRfP4tHDPTGmY3Z4ei96f4DQi5wq5Am1S3c1egnVv4pAsvMVe6fuY1xx5Ns",
  "key5": "2SavVV9ykej7gLmRVPEao69dvaYGSFjiPsgEy2iDEtyZQJ84WdKnruuZdAh27h3MVvVgoTshLdCR814YXKMCKKaf",
  "key6": "64kMsSzy3TzhhRbTZpV2V9TawZrvKHUYHSbQq5xfvFNBsoE89X8GNHq8VHpiuXkjMD3KeDdoyxs6trsNf6Wyc6G4",
  "key7": "2Tkggj5ZHKuRpxQLsWGPbk4zYPdxSUhRzwdx1rdQLo6FgRhtKdGCks81G5rquPoAzhKguMc4Hqsj74GgesyahiGr",
  "key8": "5m5SxCEC6Y7YwLWiKZE8V2wDEtTdD2RTwoxveZmG363oCjK79P7jLsHEwxzJ3naseTJ2RneNTuLsb9YR6YD71kKw",
  "key9": "gk7urgZAywZ84LCQwnL3d7yrb5v174v5RbcferERZnbM1GDU5JX7NUgfFFv98EuZtcvvLdiwaqv7fs7gnryuVB8",
  "key10": "4cVkCjV1xXJNKaMPt7dQLBrZPVfQDBVb5Eg4fSY7Y4u7C7pWmdXdyWJT55BU4muASMvmsKQHvPHCwj8evxyDztgc",
  "key11": "3one84swxaxDN97ZhNSdKYvMtBvhrLiY3h49y6N82Fsg33iZL1eP7zy8k3RSYrBS5BMKG33FcMHotAfAiDqEraTD",
  "key12": "34DoAvwd9g9FxBFusFRRHbrwAxP2mYDteUeE9sJ5V9P6toWDBeQdS4zNFEJ4SLpEWaFQMfBy5rhUMjD77ScPsGG5",
  "key13": "h5oNpcHFh74Qqc7qMDVqtYiFERGap4B9Djcn8VbRdZfVhrEjPPXPc4aZJb16tWHkWeW4zN46Ca2BXA22gFSUejY",
  "key14": "4CW5XJrXB5DN9ioWxnPHqmEG9UerBLd3euS8Njnwbv8ejg1ZnmY2PMmqbavKPLn15pbxJ2JidfYGG8dzXnQJF7ha",
  "key15": "26pKY1LwiPEWQBWiSVVfAMS9tLDBdxNG3A5zepbKf3c5W75Ve1k11GdtnMDELrhP1mCuo6ceNpQgHGjqYGVgqHKF",
  "key16": "5QWPVi4EKzynbHReUNpN6vzNUUiwutgwnjbE8wCdigMpFY3TacBw6LXHi19b2TDre7a7mscByaxR2o4rDbeYuPaw",
  "key17": "4EpvMJ9NozrZrY5KS7CUEVaPPJz4vP8jkdQ8D9W7D5uHcnjJZVxq6uq8BzRSVKhiv3MtcDoH3MFdsNv7NEYoXbHT",
  "key18": "32tA32rPmjwT6G9D3fKDfEXcsNArGMGvcHXSv67xX7mjdUTXghb5mZ6GhnGvuqHAgLu66PyA98fDfkzT3HNnS5Rs",
  "key19": "4VfQk135g5k7zMNgV4GLV9g8T1eGXu2p2h8tLpqeHsXg1nW81EREygupuNQLKetPvct1e1g7stC5eGL2y6nVMaYu",
  "key20": "2jyUcX6twDcd8RDmTnUvENa9ncZTwZ9kmCqZe6EtxeS2djxrEHLx6uXTdPmH9JZqvVoYCEmE4Jws4YaVHnYug5HN",
  "key21": "4wLPGvH77AUtawDoy8NApfDPL75S8LoXS7hvNboidFCgSVnbv5pQXhUhPprts2gf4wjDJDi8fVmxzziDdwntPiED",
  "key22": "67k4Qsurar1nQCH46EicgJk6WAdjRq9AMQ5ZSHvtY82saLsQPUMLoPWrEwJoZMmxUpzbNjZ3VuUDPH5vBCvV1tHJ",
  "key23": "4RF6LUtXZoopQD4EwZUrDf8X5hVyvA4kQzBE8xR1rep6g83JSJ9fpy8RZeF7RyHHfTHMSoUQMzS79cbRqNFRN5en",
  "key24": "2Zzf27nwQBpgRht7Y2zLfMcA6qmSyG4giDKzVpHjDKzSd7QzNc2LBZR1UcgaWgYbzN3ekRPkxH2gVsqLjeCrwMfU",
  "key25": "CNTEGPRZee3dkADv9cpV9MZgemnFjBUhc1d5Yyg5JrgYKygaEVC8RV6A4tL8wdK8GerFUzrUayAAGaYabEQScZk",
  "key26": "4qnxi7kcW4aMMyJe156J8ySudN7pDgxPT8bznZovsZmcNwvRjZNFLCyJCdaGwYrmE4XtKBk8r5CEyUa2iBavKmJf",
  "key27": "32L6mVgFnwEKnHrT7j5N3ECp8uqPN3HBv4Tw9yyzAMbLGMa3Z6fg17rwwtYi7VvQdKp5mN2tWjFgLALXxsvY3c5B",
  "key28": "MJQffWNVbWeheFZbSQni4iPX5FcbGT65PSQX3hBhr2SQ9KKYKgktAg6sDu9j5wQGM7KhhTWRSm6SVqJqRCWpr4v",
  "key29": "2xrpUrZZ5qgQXf56gJ8DD7JivmQ846vCcbqDJP21Ry1HiB4kbPLjPaY2ZEUKe9SM8H176M5kPt1xqhovwQ4dBcrZ",
  "key30": "2hgjbGhatn39C67XoG1bCJb37AwLxo5NmSZ4ZC1movQfZmh24mkiZ2hMF55Wj8bqMrmbjRJHRvosN8Xi7RxvrCoN"
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
