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
    "37FaiuGRrSn5xb14Mzs5tGwL4jbcmJw1Dg5h1oiSZPrs5WD37RjQs2HJcmk3iPBnVu2gqJdRJ4QiRdjorVNVkdVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VZ5AxYS1Spn7Y4fuv41QiQGcm7ozbJeAY5mgPyaaT7P2JSsUQdiGDFhZHHCVMF2yww12N2gFzTjdYKUmUCPHvig",
  "key1": "Z6vnS3SMjDsiz6guxm4eb5vvmj98RwaiLDs6ux2QAi8EeQbL7XdzVVeLVcbe4AddnY4opeq2TeoPgzakYDJdR7o",
  "key2": "nMKmvd1qagzoWteALPfe4gLSb8Q4BqUEd7WcoZmkx8eNdAhXozSKifXb8EkqUDEaAmH1yVtUC7zVF8ew2XWkWt1",
  "key3": "2Wv6HhPBS9GdFtamAwFaSFsReJbfTnuYjvujzrFPAn4st9NCgr2NM1dHxQhdeX3PXv4NQr6fZLf5pBhmSujdS58Z",
  "key4": "5bGV2Rp9Jw6UsoPqWc87cMXFWUHLX5Z9a9MRT5Z8RXAQACJoXQnwAJ9npQJkfy2dBuezoMEaPUpEd2TF9FX3z8X6",
  "key5": "rsUwVVCqkFbJFji2V8UtxRHrwpykYKUVQcR8PmaF1rXRA9DU6ZxQTvWXgbe9QVPuDsRs6USmH1D2nufWEW3rCSr",
  "key6": "556p9cmvBexTCUbt9sGUj1KcMpxJfTfJjQxf6pvfNSjRDAp8RH7EgLpBQpD9eD7SxqvWdjykdK8QosNPUKhi53Up",
  "key7": "2zjRUhAdYKnZKJFmoSkooS2Nb8kLTYzxawbiwzqHaXdus3Qmvc83bbh7JaHJPfhGgMcmAJjYSVCdzNkercMT3hjf",
  "key8": "2cD3mCM2TuMSxi9Nnyc3R5CcDgseDXcJX2TWZBBQCGXqTrCBT1BBzEyPATkwZjrFdeXG2As4JUcX9ujUfgbW9z9z",
  "key9": "3ivCPvPHcyuzhimx2qwQ5Rg5wbnYGx39JPWtRvRVkF74iqd2iQYKXkqPgq9xd6Jmoe1dQgnMZWzWH7z6oiBLFD2n",
  "key10": "5usj2dGikdcQGyEtwDRx53yiNPjnWvqvxwsodigZEc7fsMt3fDop7YJ7MrmJnrirShWPGadwPjvUHq89M66kcFVK",
  "key11": "3UvVjKp761TDxiApihBpa1LQyUpZcWqFXrmEymwcXaEViKs47mgDcVXNMJRiQxam6p1naTmV4Fu8fWdDpgjTU2tX",
  "key12": "61xgzRQNAcB6qY2995jKnUHiF1HiJECjZEZBRsuZnbdpcyeD3p711vSND46c7fnQFu659xxNkbrRev7TyqMhYt3M",
  "key13": "61vVrHEfDrJSgqbpSNtL8uTVyQ6fUd6GdCudh49oLWtjhVWo83L4UWWhSE645LSuK9aiQD55gJMoAnUKacSmRidb",
  "key14": "4W3SSDJo8yhGqzkhsP9xWxCEiW1T8WfFnWcycvkfHnd1cFE52i4Km8zjrQGWXiEQkA9SdSZyL27EhmwEaD1D9fFg",
  "key15": "3G5QYGSGamGhCezEVv8JFFAQwtBmjWt1yZeNRLxdopDQWWHvSzG6bk4A7xsLGGovUpE8sveF1rJbbm7HX6rV2gWS",
  "key16": "3feRjPT1PsssTkeYtNtq4qwxSn7zMUwEHFtU1aY5mAsiVmBuKQE5z7L3RupL4NGXjh67wwAwotLDnL2vp5ZxgxaT",
  "key17": "3Kp7PwwfWy1jhrJ27hTJbXLxYv49xA9U1n7P374wFYRNnXJdXCBBufSPRX6QxA2vSgsh4ayYGmsUnEHYtsSTyVYT",
  "key18": "4URxpiydd2iLrS88jHX9HKdehxwKrF4gKw6mmJKnFzn3cdouZmXXvEoctbexfwwciNhF18oTxVfJSF7Q4ZmCXtUb",
  "key19": "42QgPaWVNoLMpbFx9KeMAMVccQYAVKhTSsgjUkfqyrMUeYuA2jhQrUYduKTFv2DBYyo2TSPQCCaAxMywYaXCsawd",
  "key20": "2x3eLU34m73MSGgor4PhsWvDokfnz38kLCfxgobi6BmYZ5m5sHZWNT6ZboiyrbrKgYh6MSDiTfJF6AoU9ciRbzfs",
  "key21": "4SMhF22ZbtiwafwYDo5oA4hN8WSQ7rmGk9TbmjxipRLkbyqHvc3r4fcSS9ZMmBBvw2V984BxdpNedjzxLaVwspoj",
  "key22": "3ubsfJFs9KXEwGdDijRUshRV4L1q6ZP5ov1JiBnjPQmY6ikbB88vNKjgXcJEBvQ31dYysoV1PWF4r8u9585Nk8cR",
  "key23": "2JioP8qKyJh73FxDnfAG5ZPFzHPq7WtmjuTu7frSicvwKmRPkehEF6b2R5oVmckmp7cjCJYve8BD6iURd2fRx7J2",
  "key24": "4TzGJ6sHeMBzjPfuZSfSMJyCNEwf1nMRC7836Zn64p16Dq1G4dxSsrSNbihsmVdoFBe2uvvWQfhm4c1HyLJJNpCt",
  "key25": "2rFE2mUahK4xqJQk3pjZqRHSQnLQUnbRpp1wi4kJiU4qv1hW2vXv34eYqydxf772PSWaV35zYDSYsk3LTQ3qsJLW",
  "key26": "5wwbHhroLjdoZzdKedTmwy8MqBP36yiUoPz6Y9t6ENwejq6nZe2wHtLXqN4KZg6Z7as1MsabDJaZ4jw4ZAk3PqVR"
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
