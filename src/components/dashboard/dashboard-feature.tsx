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
    "tjMGks58BFwotJsgBSjh3KTMmAFh9MhGZotXTxqkLayuwRnAUXQmHXDG8fHKeNTMfLhVb1dgaBE1DdH4kgvwSqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61AuNNtrUfDtEMNdezSvqtQ8fTTtC52jW5zswkv5dXNWR6RkZn3dTAgQ848LnmBKvwBSBJ4e9H1jZoFnZ23FmQpb",
  "key1": "4snG8aM8wLxd2kftTdQLMeci3P8UTuhAuMj33b7pBdkwFNVVrLEZYfrzfzPeW8rvsB3i3AyTJs4F27PiLxNQNsW4",
  "key2": "6bNCrDnPb8869YUPG1PS7fsujc9hxyUNGnSNfWvHth6WzxDhDwe2ymZgELR5FbhqD9WfFpqu6yGzKf2QwhYkkg1",
  "key3": "5bN4m4aHKE8ttf3BPKijvvDPWJynvJYbtD2fUf2qcBggYntY326x69ciHHYoMvHSGGJT46gxAfVxhwRuvXPZRbkz",
  "key4": "RRDZeCcMqaUEe6VwcubCerw5stXHYnYJ7W99G9geVgbp1SGstyDnr1uxkEHgvUfrAHd2Ds2DP1TzviTgawhiK7y",
  "key5": "2fUgvSZm8UMVQq4FhoiHDQ4Ge61JQtzFAXSwhiMvXb2GzCLVue8f9xopPLzqZoaJDKrvV37d13LZm9C8FFqnYMM9",
  "key6": "397mr391K3UxniXNLB4Z5qeuhEvFyTuwvbG6JYrgNos5w9BFxRTE1V8UVRs1kuZLorTz8TPApGa3Swk52QKPkzPt",
  "key7": "3FSX1H8rY6rWA8L55GfrBFVW5Xm9sfSvSbYXScVCn2DKLecLmdr4YQtnHLVxrMDwLFw8eq5Kf9Bd2c22veZjf9py",
  "key8": "5mxj4qXGD72sbHRHBKa3poWJyS1EBJNiQRndHuSuCrsdzxiL7FLVbeTZrBMPfMCBvmFTGUWbyjBtEp1oFyjJ1U67",
  "key9": "66Bfhhp71B1VToR3a636W1WNtfiLGpre4EPsDStMFxRC5Vz174cHDxUjiGin7cMqFWoBoQaff7mJiwwxriHagao9",
  "key10": "4RNjUpunPf4hJUMcPpbZPpdfTj43spdsNR85hFhY9BJDsVpoJXi7Hnmu6rzHArcVzAEzwJfHP9YVze6v4xXgDstu",
  "key11": "46wJb753hcwMiKPCogyb3FFtaNMvRAPJN9MFDbLm5giHAGkST4xVwBVvAYc5sAM6RAozrgJerL2baQhLwN6oGMTJ",
  "key12": "r4KWDthh6gCULSKErhqD5Fg1qmKLuMqA9RArLf7PdXrgsXt5xiBoRXZiVqVms4C3aH4gLn8rgoh5RBeu3N2C7Qb",
  "key13": "5qVDyjSP5mjLWQsKco7muU4LiqiioKHAV2ECkwb7zRyDjtaXwwpiaTJbkQvFKqhVWi2sNwgn9vBGGShnPjA7jxBw",
  "key14": "4B1TyEbPKz4yLJHUn6EDf1stMMKM7fVz9xqxkrtXH4GVzGm91hgL8FaF6HBMpwgHES1gDVm9fRC7HrkzV19iuwPT",
  "key15": "24WveWLHFNKF1nvBDw66R4LegoBUEnAQcQVCYyVev4D7CZeXNwRcdAt5K33Se1DGnufmcKYC9YVRbeShHJJFCAuZ",
  "key16": "2qRMtxt7oUUDrk6HMyZ1nfz5DZrPGSJJ6eXjRMHtFW8kmsS6dDJGsNJBz716aBC4jTaaSiZnb71zt7YiZCAAhSsZ",
  "key17": "53AcJPcE6vfz1hU2wL2hJPxE4ASRNi5ZXQ3U7r8Rfn6MzWKFHQhx8XCekmZScNV1nir5f1eLxxaGsX2XQJewwEDe",
  "key18": "4JpuehUf6UQo4qthArZSssKkih1qsboMBTQfkBs5r6tpBeduqvdEtD57YFByLiBpnBW98cFGFxR8ED6A6CU1uehn",
  "key19": "2Gc71R4KUSbHLfGpy1w8JS7fTKfrzYPxbzGs1ABa3U79QdtCE7dGRCWnXvMNZM4R8pMTU6FvG8Sk1jshiG8Kbo7p",
  "key20": "4Rwao9MTHcj76yRs7fhkNqq4EaFbLRbHNuKqGxFgnhpAymkjruHgpoUehmeg3zte2URH3X3aMDk6P728oYce6yVL",
  "key21": "2JAwV9VD2vD8e48cXRCw8y7CN9gQudwoaeJUfdVvbYsfBtxCDAqPnM3wxvxKrfoM4hGFqsVr8icyB979i1WGz5bL",
  "key22": "t9ZhDgVEdvMSBGnLeJdrveHh5fHvLQX3o7tQPoSXtAyK4fVuESswUmnxYwWXKABsNCQ29nqAmLFkkUiCZUy4XzD",
  "key23": "4UhMzvWTKRVFbL2CuQh8ktGsw8hq3bfCadYu3ma3TqwsUSJZSmLUsDcd4pXojVa1DWTKRFYTVRqUtC728HkEm9eG",
  "key24": "3Xr1489kPp1pECQt94RZWfMoJmigoRXjtvqxa8XhphxPLdd9rUUJGMpgYRuKUhJoRMaFxLZwfToKAZrLnxSzmLmU"
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
