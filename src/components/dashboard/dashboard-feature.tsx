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
    "31SN5oqzpLmfypfJhsZEikS5vytHtW9EG6HF2Q663pztoexNnrG9p8D3S3FDY1FqoAxpTKRxewADsrMoYZcSncaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e4mUAvq9S46w3sqK1VFEaYf8e6q9HPGS12tMSMCZbGaUq7w5Qrr5y2pfYviK2TKJwU6PS4r8V6q2rjXHJyXwFnn",
  "key1": "2vH3WMcZPzjoLmtVTKXjbHuhnY4WKQB19znye8rH5udQVwhU4uQbMcVXyFWgsBi4jQSXwNe1hXcnTi1ygzw4Fsr5",
  "key2": "5kvEqD7rCLWmpjGrDaVrZjNJwhFTptBTyTJ1Z68HvbdNw1TwzYcVCEPPuf9yNRavZ6hkyHcqttMQeJYqEVGTjcXc",
  "key3": "2AeiKzoARxnhbT7PHpdYzq1SzpoiTKymMKDoYqc1VAaUGDrhFC3PKJfV42o5uWU3bhpMmeenxvSh78hKYhq4SJXm",
  "key4": "37mL34FNQTBwYhNFMMEk5WehdNtFg1PEjCeiyQ3aZi3gcBw4nzZ5FV44Q1URo7xcmwkmHFteduFnjLZw3mZ4n3GQ",
  "key5": "446JQVDDewCfsB9DWCZMStfAQU4Uso12VHkwXZTtMCMuZLBf8K8i3y8Q4eyWZ7NBvgdpkYquho1dkaFWm3W2pqGg",
  "key6": "5GthRLNjBR9UZepJSrEwHtScJWUJnVQ3iMoSWPMg9Z79wMAGQCGuDy7fkpY2c69BNZAcj1pPMtT2f85BsaSfccqa",
  "key7": "TyqhuYWM3MhCRiRHPdVyPgqS6AupDQeCAf9z6HXKMrmNa6T8prCW3oTaN4tVqKEmmKf6DXF3TzFRiNeuUUgTV1P",
  "key8": "NS5wc8qFTs3hWcDRT5WWD34H2ow6EjVsRMEHZgsHi19RubW6tNBf3cSPgr79sSnTMgGWKVabXZPWUwobd4qRe3b",
  "key9": "37gQ3FzCkKFDbMSomc4rs1Gu7XMfskeTohF5fK4jPiykwS3ym6d8jxzHRPGVS3vijyVXWwLpuRERUAfQ7GqY9NSp",
  "key10": "3HeR1Pf1B2hk7cjRMFx8ndGMqdo5FABx9wfwoGaqzdEYaTi5Q1RmvnZfmbRGx2WHRSX5X5PMcjo3FES4zufX2hu4",
  "key11": "63vdUAcN5knEWzQ6zy8Wd3LaiLWCucaJ9CneM2QrAMQhUDjXuf1bGFBFubTzN5XEMPQWMx9UKmpHWf229Uy8NbYz",
  "key12": "2CrfaWunGTwFeuQQdmVf5aRuSwhAheDzLtqNA24hZ35fTAmyUGAD6mzRFBiZgy3xSC1P594UCKZwJoYFrUe8GJEu",
  "key13": "czdBDbXNtQX1oy7zT3kQDQRhBStsQMrda1KLZ3FSDuYaBUXmSYobnfryTQPPDuWbPgk6xynQoxxeChssf3pSrCd",
  "key14": "4c3BZhc2Zfb5csfSVDAEpFGw7p9giAUWeCZAFi2xdKM9YicvShbLDZNEquqrEpT3o8LXdGgXmDm6hdk513a1sYMJ",
  "key15": "4Pv3DfKE1nCpfk4EVa5yPcF14p1DYyg8zfjyizB2YECvkKNUZdvcVGJV4KCkb4XaSMxAQTEfZPf4KsyyFsq7YMrs",
  "key16": "2XttUGJ294e5DvCiQcpQV6GhcTWuSXjFRtgv5imwUghQq7FcHeGkUjJ8oJtNkQaMwDsPANEamrpKv2jWK1imHCSq",
  "key17": "56QrqnR7rh4yqTZxfCaXmLeSmhhfT755H3DgmCjPomggWM29dEUCW2M28ztociDV65zhbyXWJPmYj3fgzKqiGD9o",
  "key18": "3TSPNNdMdTu68EgZNashzmoTe5su1yVPmJsa9qDzsa2KQSjmmULUpXFMRmMufrYPGsUaZqrz7nGKP4AggxySciod",
  "key19": "BewXWGqw8aYwQim6UsrCsVcAgoiXzQ3uXMeHQBa1akqiwupB5KbhiNtygfcqgFd9t7bAtwJtqrGWNysZoN6Pmdu",
  "key20": "2ZZceJskGjrc837gdd4jhYrmDxKdWw8vWapN8b3y3K4hJ7WTc3w6PSeLEc2x1ZV7EdAfiZsXKv8tTHSE7Sidu3GL",
  "key21": "kARHc1q2WQCoPBnRWYLcKdEyBxCCXjW3WjjTnRNZ2VTt3FTj3dkGf6bSRV9iwotzRudryZGykTZriqRaLhd3Anx",
  "key22": "5TuppPVYXMhzuSC7rasZR14dP5hTefyiFgKd9NGLDqoA7SmLjmvPLm2iC11wm3FWd6imuohZFCkGUNvV2xB2yPDe",
  "key23": "2Ve7P4aWDYect8kJXDraYKCfckrPkw21tr3wyMRCv2uVkMTkdYhw4zdimA82hr1WV2VHfybF6YTdpstvVZgH6rVu",
  "key24": "24ydRCE81G3KYPU26VsGHDVR1ErbHYu9g6LHbtHQ1TFoFgksoc3tkGVDNwd8k6PX5JvVuYCexZw3v5Td1cszGe9X",
  "key25": "5AFpCzQ7q83X4HyZCHB5un44XLokeRu3e8WFX5cZHCih8x54SY4LXPZWbvoq8MWpfRz7mNCkFbVctprE9sazGKa7",
  "key26": "UL5nXQStzL7QzD9W5af79rFd1rgXboT5YcNU3YXRPbRutybBBSWmKfJ5peWnhaJM6QysnKm1km8FZfw5ggX8zr3",
  "key27": "22RVyYr4YCLKHDGXrX6bbr8QkGw3tJdzYgd95vuPp3BUxxGaefFejdW4EBBrGwxpajKQzP2QkhUHpT4MDJZtT4w4",
  "key28": "2ziCbYDp4tDzLBbN6YZ9Hb3gNS5dGHbrfX1dvCTa67EaZCe8oaV8uKvWTT8RU7gbNfYcZYxKCqbjSsihQ2GJFp8w"
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
