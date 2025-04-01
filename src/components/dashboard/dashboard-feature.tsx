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
    "3k3fiLZtPQbQpNZs4Tr5jZkj82RZo62Z7GmA9B79HYfa3CdvepVpd1WFQDBej629LZxA8ZMpnDGBfZKz1N29xiMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CmAkJ1c5ot1WHYQG3A89vaeu4RKUGGKvwuURHSXXdHBzxRVMk3tbdnzFQ3R9pEBvcFSG2rSaNhbTXxsbHGgg7kQ",
  "key1": "5oZHerLGzuE5y9Sq4LQ49FUDYYMjj1dWfSLbMKPdKE1uMB8hBThr5ymDxzxKfAonuGtj6sFiz1Cn3DJ8UuqNWLNr",
  "key2": "2hWiycARqER5xDBpCqr97aKVuWv8NYV7R543TjAz1BvcTSLcqUedYf3wSUn8YMSdhv44csS9xwPsH4k1yvCb3epD",
  "key3": "4cEzirgJe4Aq6gD6SAEGNLzVTEAMUC5Cd21HaiNm2DeTAruqHrGTaQMqms16iBEgJYctNMxPVP1ECQnjMZ46mrYL",
  "key4": "5wRwVEgXMSmFw8ndUvLXF4ozikYDhsfTVPjLfz54owpvg4uTwBiktzq9BoukWSjeBKVJTM1oLxDAZgLtCyiCkH7U",
  "key5": "VH7k8nAXb4tcC2WrjFKZNq4zAmP1sexRjsCk8KDm8C6KxiQKmL9mmVNSfjmKPbNQ7hq2Rz9SR2HTLDM3CC2kksM",
  "key6": "5rRNzvFXzqKS8i7k4WLYJxXGGDJHvMxsw2JJ86Wfm4dk8htxMrecE5TiB8FYFYKGpmmdoasR2FL2QozoKShM7rBm",
  "key7": "4UE6wxZeagx4Q8HeKArEEbgJGex8N5jvNikmEqD9bXEi8zJUFVsj2pHVa3S7LqsTeRZmo5BVDHtkw4AWwNWwTzUi",
  "key8": "316RT3MTZo6miLxovShwLhcaPv9iY5PK27Ski5ofJCCYCpmtqPneE7FGKG4EocXcv6RMAMQwCVowzTTKG3UFKAy2",
  "key9": "3XnZdfVqPjUa6Pbr59RLfRnvYRj8AcufCWuU6VjPzLSg6JUErmzT1Xz3ngar2vGsWudGqhg4PzD8CErd8E6xoPv5",
  "key10": "5eazDLvtcooWK1SvkKHjVKqgt3JBgoHCcaTtxnGpEZfuVdgJMfkDdzSDtK9Td4rHngW7tWaHwEHbPpr2ZYcqG3UW",
  "key11": "24xBCZ1m7DMfk1kGyyvhTkvwkEsi6jWyAMJiro6pfkZvbDy2fegFwq8oYUUwUdb2v5cZh3xHu7rsREMdNNP569wZ",
  "key12": "3cEsmL1DXpxNC2nBtyqcwHrwh39jggSMVWXs53TfU2562r3ZPXD5CgjAmMh2ck1sAoHwR1Jz3U1KqsKkYMuaw71X",
  "key13": "5i6LUBViY9z4vWVgZZZQ1eFvE4CcvdAu2vkKK1b8b9gYfNqwKX7RTurRd56eEPVsSAuMTx8XAyisLgDkeaeXmPQB",
  "key14": "4NpALNnfpPtD4tNqFR9bFJWZwPcNWabdMFJfmY3aeHnh4cwN5woPhU1YcqYc32PFkoHAt1NrF1FoCSY3P3YRm5AZ",
  "key15": "PPzUNhxSddrqJGRCAKruebmhLJwfGrNo9HaXJ6aYTo71LQVD6Mk1aQruSRWik22Hof4B57LbW9hcgHaYnXfNDPt",
  "key16": "3e44UaUdgzmoAJvGifK4HBxuS3BfzXkR8nirAD3hzUoauNX4G2Cq4FqjpKbmTZvwJQsC78GzwA1A1Cvg9bJb5gE2",
  "key17": "4aCtMs6tCpRADEMaqJXzEZ1FEDAT834xAvswD38UWAdFAX26Umu51rtdXewq2nb5PSvKVJgNpGg8ZXxCsexZaG3g",
  "key18": "3euqVvGnc4ViPxbkBbAYCncQHiLDQBhPVd6o2sEaVBCVeSfvrbhjvcK2eaVWGvS1ewVitsYuD5w2sZQj9tpCk4Ys",
  "key19": "3WWJFNqf4suWSToWDPhP7e6YCwAbyskatd1kDcMBa8sJnpNnenhK93hqmMYC63MUpiPJ7tJs4k9CfhabTbpxdNuW",
  "key20": "Z8gLvMugGud3yiTrgQAJvuwGMPwEmwDr2odFTiSjyHxSxQMDnUidAejDwvWc2a83adSiPz78o6PRtWWreJKaWor",
  "key21": "4Bs197G22K3ib67AyKeXgomUPHSoGRJdYujBeUDoJ9MG4TJZQEaQCrksnKJhqfQ4LNfu6MmU2Y54WQD26WSXxmaR",
  "key22": "4w2jm5x85szEJcrnzNioR49JnyDHPjd6ycF1Sujc9BY3sjiKDwUYqqzRaziSuoEFYjZax14USDUm3BT2cAaZjsY4",
  "key23": "2HuxAN7UBcoT49EKiYWt1PGwcazQKV6Q5TtybHHhReX18RMq8TvaijYgXzLAmzX6xMURYyT2gZF6kDmZSQzHLxpW",
  "key24": "oW46YFarwdcTsSQZhYDXqcAiyLWJwz5sas727wuSSZx5sd7xSocSdNmDnCL6jRxXxkd7VGVti8nW7amziFUarLd",
  "key25": "5moAhHgpiFfkdA2GBzERxf4xoXLFk9Qjxcp1FkTWzQg2p5rgEPjQbW23kAWvWxycXm5Fpi4ajqkBocvg72VVo5W7",
  "key26": "3qpQQ64y1mdjuawjozn5vehFNEUrCgTwRyHbVs9eDha6XCt53VtENwoFwbBSxU8TteR1A3gwHBqakKNVjuRqMsDi",
  "key27": "63w2fY8FL4rZYQ9d7y7MZB7cKdsVx3BnGvPVRb6pVZrJjotiddmbpUWFAvGVmDhKBKsdB17ETGdxuUeW6PqnQkkd",
  "key28": "2q1T7bSL2jvyQngjXA3cD1KF9Aac23X9X1Ap8MzodCxGmGkKy1KYqF2qi95Uhi4Q1MZw8Rcs3v7tBaab9S9dQA7K",
  "key29": "sc4pVb5WE8X3eTnBtafkjuLKNtKdZhVAR3DBtDY65CMtvy61Pzf6SwUp1CshWdjwzHuNvjpHMHPo4bDCQcLc8AC",
  "key30": "4pLVqQDNXh2Fi98662kr7oPa8ospBduPjga8qdoJhBqNbwUb6c1127kKR5wq7BqmDYnCE4iiGCAiSWeKNtmtDX51",
  "key31": "5ippcZrSqcn697JAcEVz5WGbsfQjMMPihLb4qwYFkJRHsGvNbX2S4nfB3EAoTYFXNTWRuQZttm2RjEc5mxipp36C",
  "key32": "46LqvftaJKW6D5qD6jUWEJQTL7ekcnGDfzTvUZLVDjgZJ5RdjkQBY7TBH7KgjZbz3Gw2ZZnENJMFQWBMBvtgznzE",
  "key33": "gYC1vAxtk9k9FRLrchoDtfdcS4Rqi11omr4KwvGLYuu1qgJV4KZFrCbUUZK69aJXfdfQqzVMocz9FThG51SuF49",
  "key34": "S1fNFKnr2PzSsKVhY1TKykCX8UmXU1bCdGKsfwsbT3bSykardBa51Z1imneLV4N6ELaYkfwzSRoL9tu3uisKBnH",
  "key35": "5erJNYLFSH2hZmhh96pcFcn2bpw7aDnwQUGL7Uz3TtUGgmN9ys1bddMMxaokTPVExLC4dc88o63eQreBfpvRpSd6",
  "key36": "3EtutGxVVzoMPTvk169mBko31mWiJhZMKvZ4y1qTwmRJ4zmYbnQKDYAcsm1RhmfiU8pgarR5Wj6k7Hq6JJRYMPdy",
  "key37": "5z6szxZZMfYjeRAbEsGNCBLDJSwYmMVPKFytMnXdhReLxv9Pa6Hvz3T567UUGAkBUxZbfevzPQvCzWjNe7qKvfL8"
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
