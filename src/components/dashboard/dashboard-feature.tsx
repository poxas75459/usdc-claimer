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
    "5i96a1C5YurYr16nDk6S41oCPfybTUySUhLJpTVfHgJvib1Jg9GZGVDoneP3W2k3L714192dWgSZqvBQfxPSfce5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dNrDnedHKFiDTiD7ik14Snd6egcHVoJFCeniQcva2NBdDGvG7ZVLBrAaTcCjdNULoLtMtXXPDqU4oKqU8hJaCu4",
  "key1": "4X9yC5np3rH4LStW53CV8ERLNDEzJw5sVmyH9eLuFdWjDMQNgoEFScvhvJwkttb5gMrYvze1ePmBbZExCwtrevxo",
  "key2": "UJpAhzAJRobRGjS5PfYNdGkj4kgoVk4aqg74rYM3oASEnFeMbNwYkRExpFhASDXi7FYtAAd1g4d3ZUbKRyD1avm",
  "key3": "5EtzEqATepVGnUR4gSodHoU4NghbgygCpufxnLhQD2uUve8PgU6KNtSvQwcPHdAmSM5upZvmzEZfcqJ7rmsXBySu",
  "key4": "3xq71J1XFAF2kyyExJssXyB8GXXVeq3P4EsVdgGC7r2aKGAGHsBQCkRegY5vKZGSDCA54aELfNswYJRNpf3N6Nxf",
  "key5": "3xgZ4aR8KMzrqEF7ZE7r1AzGVaSGwUGGFBt8ATnWdybScnphig9RW1vgtcYjzkvvU4GQdTDHGcu3EdLT9DjkfKf8",
  "key6": "sMYMffMmsg9P2JzWUfah5jzzYqYYX9noPvWSEBNg6VTQJm2qnsg6uigUEQDEcoPRa36BavYdeuA4AsitCAdsPyt",
  "key7": "5CJC3DWzLmzJ44vK34Pkaoho3V4VgZmjMZsSKrazj2j15UYraMZqSPjXntC28MpVJKVajmkTRjxM8BoRYGL3Ejzu",
  "key8": "4Uc61oisEtNcTi8QeHKZDeqqp3iQepz2bTrx881zfrmVTAYTQpMpGcVwM8DPcakdrBapaYyMdYcgqm2y6dV14MyU",
  "key9": "3DuN9d7Kqtsov9FkiQmHwEaT6SG5rqAcMQ42vkDJbV8z9xg1HQXKgqBkxswFAzn9ae79w396ujtwfU1UuYQdy8Wh",
  "key10": "2FSYb5EGJcG685eQ9PsW3cMCbyaZFwerrkib9BpiAyNg9zhyHjUFFqwDyRTZBdTGyLt8noRsyo5YnfuKWMxUhBDR",
  "key11": "5fGDbLWqTJ6Fm1KDyZnZhVqHSdECATviug9Ejt5xcxgvqZpVHhtVUmNvEPunwBdhRskrnddCSFswxTjXkGag8SAA",
  "key12": "2hXPwT9GPjC57w1QMtqKFVE1ckAjfszNfon6C88ia9yv1Akxi1wHspCcgGNYrvQBCtLT9QNYqdXwr6hsoBb9gChn",
  "key13": "3rNC2b233HdiV9srRQKi4r4Yfnz9t31cyozVVXjBDpGfCgyAYTkEMtgwA7MrCSFWZR5J3bH7TWgJPFeUFk4cZc4K",
  "key14": "4E2kkERtN7YhftJfY1fyJZZrivP8ykFF6tbYY3Jiiy316CZYeL7fAPN98MEqnMF36pRAinvYexHbRaSFsXQrfSWv",
  "key15": "3TGvhK4fcPT55nFk2M8KKMDiX6GtgD7ngBfjddvWfFCeHNQ9dEZQEVopoAfjC6gsWHpd3yhTkaETDmZ1W2gsbHU2",
  "key16": "5fxTMrXGg8Z336kvhhiEaW9H76u8k7BjvtG4jBRx6Wd4sA775GxegKP3xzKcadsQof1mGaKyWEPDLuf4N1esae7L",
  "key17": "2Pks7gwnLTJcPCoJzRqkjKDN137i5HRG3q5xrGtitUfMqs8LyCDbDUH2zqCmB9rP1Bs6oUcrbdcbj4AwuCHWFqfK",
  "key18": "2UQjK2ypceAxUcr64JxnXL1177RpSJbRLuSME7biB9kvCDX8K2JK8JaKdTFJ5V3AJHqMwJTzBWgbovLuRK1bspj2",
  "key19": "AVDnRZSe1PR1w7P6nXvHcp7FwF4ixUrKB757XwgbGsB2g6ggx2uhuGBzgpfjAQR26eZZeHCZKR5ydZwxcJKgTeC",
  "key20": "4F5ou9RiUdEw9jvTh2J2Tcpj3yHcVcsSNFoL5TP2dj5VYf8eF9bdwjhz4TdiCjsEky4f24EDYXdfDoLy4rVntHFX",
  "key21": "34iUs3wvn1rzP4XdtzkDTyp1Zd3tTSx2467QyqMHkRTunyAtB3oKLqCyiqVvM1Qz5AMcmHY5iUjw6AxmxMFTGBVc",
  "key22": "3tVvgAXkFTbdMU83Y8rVwGp1Rx7PXXhawJ6t9ePRLECQKAdUHQfR1Vjwb1C4C72ZTVcgngsNvCNGjNQ8jHXQXUR2",
  "key23": "3V29hp19uSdRzCUHPcVJfZdqYbpko2ffo9sDaB21saFNC7CMfmju6RpbsDQ4fXTjZ49URsNQWpadGRAJNwgQK5No",
  "key24": "5GXb3eRiTo9iDSmJqa2QriJqYYvtCaL6sov9uxQKZX4MCVKVo4zDBKYJzSnou9FGtgA6eQV28xLVGzpHhXkpDciR"
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
