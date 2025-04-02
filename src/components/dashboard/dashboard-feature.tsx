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
    "9R2yipVB2LPF7oQdYtYUtQZPAXpp9hfiYqWvuFbJzRsihGS4Cpiy7z4LyQ2vWUxHkTLQ13wtjRMTwR6pNNw5fQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y7RbAEAV7P4F8NawdmgK4tvtdhDBWpx8ath3bEWFdUJDPGPFdZCKFz699QwHDn8TZkp1eUGFMRwUjNKYxBZcRFn",
  "key1": "2P9teARZX5JWKotM2o4dU4aAtkMhAYCCRjZ3qojLJGrWd7FJF8sZGGKn2TD387WBtxjAYw62Nj61PxbnJ22kzeue",
  "key2": "2ZxisutpR9b74Pi6sDhKAaSF6DTDYWMNwJtqtpjWPY55AD7k4aEugKxXtjYzUzy8ErGzYNo95yW38FpgaX4rAD5M",
  "key3": "4vvqcH1y5AbWFiojYNU6Q5pdoMXF9VtDrUBkMuuzWVCs3GHQUPBBALTzuaoN6BTBNqgjKureMN8HW8Dj9XeWeWna",
  "key4": "29NcDdvYvfzLjaQqNiARi1WfLxuyRtx61wDnjCrummwsCrFkQKjTKXgVgNMh3CKPJmV4hPDZkVsQ3pZrpbWVSK9t",
  "key5": "4DXmtXGwyUfAQ7RET1uYbWKE1VEVCgFabQy2dc95ryVSYNMqY99djc7f3yURmEHw93i2CCQAXxanUBjhJSTTF6or",
  "key6": "65vrhaqk8UFeVkYZHWbmRQyvtv1JM7horUDRuMhyLFq9sRLmu7ioWxWaFWJJmHrRq5Xt86jc8UyLkA68KZsoAbSd",
  "key7": "4YTivth3mRvMYfgUGV7aq2Gg32diBgZaJsvqQ3sPNxCU1AXd1mdistjSVrZBWK6HfUjPKFU4vzAid31qH4AjpHnb",
  "key8": "3JXvkKVBsuxfvkKisLQ7jHWSeVFK49kJx3zytCVjvw1PBgLV88QWsywffZvmyRBueXv9CDk33kuUAjZDaJZfAwLQ",
  "key9": "32RwSZns34SBC9kDCcRtdxE1xUPo6zjCzXwUzMgWBySF6QgR3oFNXioESaTD4dtCjLjBZvuEuMWcxsX1Q1Mb4ACz",
  "key10": "2kep6JDjm4g7ShpAteo4rhJwxW1vNsTUDT42JTYmEVkEV5eZq2qU6K6SpasLAz3G29JTBedws5w7yqf5yURWU4xD",
  "key11": "5LbJPCrV8iZ1JgpQrdQNeVsCe9A6NTHyfpKTCbPE1zDJ4BpBDWzRdpJnrunGWtsKaCqakffh31sz5QmzPU3qBfk6",
  "key12": "5poUpcHmTvnHDeLpSTHKB2uZYfLRdiELe61Gayz5Q4tm1V5smN5r49ZY6MS2bbW9iSaKN2bo735BH8FiirMaZPrN",
  "key13": "2dqoWUX6hNUG4FPmRi3PXP1XmQ3KPB1PjHc1MPfpN1BZ7yFiXg56KMPpZQk6Uyk5kyndX7ztRFAk4gJ3Wy9gWXGa",
  "key14": "44MGLgRFx5mdnXqQX7JMXm9rVtVBB2NjY2MGTFJRxvdXrBBTetVW3d8xNSQbfUQWiv8QvQX8xP5K4g8WWYQFzQqc",
  "key15": "Pf5kE4DPAHhn6h7U5F7iMH5eK5REMQ4J8X9mfS3DXtA8T9bt56CEUDFpCP5nuDeDTod6NqD7fcckT9MVe4JQEHg",
  "key16": "3ATddX5GqCDwe9i3HMayRAER1KE3mBQWRxVj7K8jdyGKxgEDxMzLnE67XdpNJa29bVbErfzvyjVeGmSp1WPv3tfy",
  "key17": "3QbYV7K3SZw5PFqbWY7kyiv3fsiv72vKnSZjEqWoxmQcDraertGQyJzCFBebPqKNj2Y1eDACSsCeEvDdYYzpc63B",
  "key18": "xjxdtmzVjWYVsL5XLZW7XChjzS5nGBYsd8EF7dxjyaoEHfD3fWs8RuYKpReNLAqBut8EEMQfdNVJAJxxC7QWDdp",
  "key19": "47kVxN7r4NaHHMy9be5J8CpEufPyRHpx5Lm9eFEJjBjmSWJZzaqS5UXwfMnwwDuHehKrkHgBAwrxHjFmfcPQzirp",
  "key20": "2cYBHGwnDYPRVCTk9NvsVMRdS9BJZjU6dqXwFNjna3jEVvKJcirxwkhYoj5GYVBTdUH8gGgzXHuRjUKG12uPhoVU",
  "key21": "4ZJx1p4cNPfuqJSQPSqELWnRm3JWX5h7ckV7JXsracm3dMzV5AvVnwo5KKFdW1aHQ84JjrQwYNs6UpxRTADbq3td",
  "key22": "4fgLKcS9w7JmppJi31fJdhM7NAdV4GnpQzd496c2zRLtcRFnFL3bFVZt5YeP5y4eBK5Sf3Wa4qckSvc8WzuvB54k",
  "key23": "64yZs3WL5YdmC4EndYbDq3mQ2PU6ZE5fdYHYkzknf7nZRb31WYSGwxEWPdf2rYtotUbhMa6UEi1cxsu8gCfusuKa",
  "key24": "3wmzRXoj7SAS6MKBvpBtKBSBiCb5CDKVYugGZBmZmeyECkogWLZND4fLaZMpfaHTTUW1YWrRS6PGUwMqzLQHS1kY",
  "key25": "3kRxtTRXPjSZJG6GDA22fkKZ7vgwZxiE2AqGJG7r5mLjgjY4fj1fq2WBKNcCw35q6hkHKw1f5iuQJ5VGmhXRs1qc",
  "key26": "53mv7K1RYiUT4sEgjRYKsH9YKYiLbmAnEfRQxFruP7HhnWPThz9oPhCtDXAFq8E5gqJHuydeVrponXo1pbEfV3dm",
  "key27": "2R1BT9Wvy8bQVUev3Mbx2DCMaEvD5wkGU3GV7tPBxe7sfVB76tzbgaZh1YEE32JpVA18k3HKoc6JD3jBFH26Rv8o",
  "key28": "4jo4tx7XTEnkJKsbiERTLxJe8KKCXqkxSuZ74JPHdUG5Th9eVtriGQnZhqnL1V8SPf5PaAXqcxZ287m6Gn5GjWnW",
  "key29": "4ESAWDLKYumCjcGUDTrKtEdULu2VmTDaDegmfgvm5JQysUkXAPajaXiB5j4TdBdkGPTmJi3ghMteVVp1PAdqaWJD",
  "key30": "ZhYsMjP37i86546U3LGjj2QW3cf6eMs6wk8PznvQQtUqQ1QdbsZQCmupovKdbjgK526s2LKzGZHDvC5zRTEmqen"
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
