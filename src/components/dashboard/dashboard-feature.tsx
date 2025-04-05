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
    "5skQYDthfCBpzTPPnmqWLdFGk65wSBsr9qqUVDv7VAdSiakRkFVhGD9jkmknnEywe5Uac9JcS4yhmhGP7VGE3nLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i7LQAEygULCGPheWwsW7qEfDgyA24CYY6uzDpjcAnrqMEdGA6gMpZ91LVAGAeVM3deP4UvwEpQQYHpStwapZtUF",
  "key1": "3QMgweaTBZ9zSGzTfx36Vr41RdBpLGEyMoYCHWAT4CxVzC5evzizqHcrkdWgxAJ91C7UWw64TXPnwr3BKVEJjmKo",
  "key2": "44kUtAKJh2Sm33Q1arRFQ2oWmi7M6E8aY7pnW8Tp1C9PnMpR8SdwtgYNEPjcvZt862KnPt9Zh6jfa4Z6h4PqycEL",
  "key3": "y7oay9jCY6SS2Wcf17rqk8xxqb3KE7Zh7eG96vqN82HWYzh9f3upUMAQvyWUQbgM3Fo7bYr9NucKpyM2h8Wn3Hf",
  "key4": "64FgakdfuRFZDctWzivFoPWTWqk8ZBiZR3ahRKcojx5bXbTzf4bSujPMuP33aE4eToPWy2pcddf5j5L3egZVQ5Jf",
  "key5": "5PQ6VnnuYV4n8J65Q1ftF2ojV1q9dYjSwNoSTH7udE9kce7E1nMi9M45UAP1uGy3Dy1E5SGdJ8tvEjffr2vRgowz",
  "key6": "ayC3HCJgG43whu9yC88y2wQCeFxr4TJLVdCbipSDo7o4hYP8NdAm5WhEeG6S4XQAovHfVLWHd7ANCep3jpe7rve",
  "key7": "2e47F4ZkHtuux6eXL9vg5QaVGAHQ65CufVnNGkHfaXkfDNzn3ygxkt7pSoVPY55Z2Jd65Hg9u2sGhJ4Nuwyx7GMZ",
  "key8": "5uVcB3QhcbwTDFjm3NvbJfJEewxRU5G3E91ytYL8T2ZkYU1AjtM5R2Qykp9zcu3pDDEnvcctWCwM9JtSGqjJNQ8q",
  "key9": "3ZuVdfavGTssWD79PFrnidukErS8qx7Q44CY57gP2FKT291uzAJTdQpC8Xbbi2EyUMtovGdpT4uxmEns8qGckfss",
  "key10": "4EZPkbUq8a4ZT1v8KidN6zb1HUFaHgaTfkg6rMVVvxbcZvirigeq8P8AcgSpmXd9ze71zMBKDx9Qjrhex84hNpdb",
  "key11": "MbneC9rDxA9Stv2X12kLYP6PBqAkqEV8CjxrVnF7Axz1yodf174uMWL9pXEa8AN8RS375aAPH2hZj1BbCT9Esgn",
  "key12": "2VEfj3ug5gXxdNJhCya1gMuveuF5n7iojv7XsiRknGNvnHy5vWDTPBaB6pgyfpNndr6Uipj4PGMvFsW6NAKJfxTN",
  "key13": "dqZNxp5FYekEBYuqHBSe2LagxycGQhvmdrxtUGDLd3DTwn41Dd2einwvNiDua3GCdZfwvtnr2nfVFUhJFzbKHfs",
  "key14": "3E3BnBTHXHvCw8UsSeRabmqd6qrRfM6zJxMRvgZ5kHkTMD5z6metQJEvsykvnMR47FWXr4xBN75sH2aiea24P86U",
  "key15": "2yW7KGDsxXgjZzvBZBWrdbLQG5rDceVJF6F8mXi8KjKcv1ZEhRM3b7kHHBrepvi2WQcyDs7uSZkMJu1sWYXELHRD",
  "key16": "2arQuuZ86qWcB8sBVoNjJBLv5CCs5EZ2JYB47HZHwuf4L7UrrEkyKQUaZxTJSukHwhtabHbRZxH6qS2TpDCFhrus",
  "key17": "2C8VFKrveDmCRhBpuBMyVRJ1g8PzxRRQAmoVkXUotDGFq6c1bRxXCPkB2aGshYW5LJYh4GCoi1TENjUU74NVX7q",
  "key18": "TFSBuHGyni7ZxM5vivpEcF7ByYPxS38cs5nJqrGEkiRyCTWuhNphj5cVJfgTmV4CEjVt6fnjgtdQ86Pv6jtfbF7",
  "key19": "2M2YaUL9GEXZsGuQCTAduGi74QthqUgb4PWGTwpuSjaCvLS4k3XiQZCNUjerawJkLEwh9pNzWeYjuyafdkqmKfJn",
  "key20": "49sCgn9ouRCq1ctF2JwNG4cvxsPrYYNe3H9eD8CQ1UNwszeMqxnifWbxmb4jdgPvH6vAfc32d5EHq9crCXTFjTaN",
  "key21": "53vkQwFLWRLK1gVrEh6erESENiWC6EbcyXRUfs6Pr4v2pYbQnGUdt59Jm3WnNCW4gLHhxqAgMJqUZVUxazqYuRm9",
  "key22": "5X5T3RkruM4YDEjxpPkiaRoBmqy3AGR9qNM8YZ58Q3mKX8b6CNurzg51x4kEwBtis5jpHC3rroBVVFBmgHBk73XU",
  "key23": "jimFRHyG3bVdvCBjfRPywYadQxmrA2u6G5mRV96fhYGKrA9D9UAQpALJLBaj1xutFq9yzegBDuh52X2MD7SMMYp",
  "key24": "m4fFJk9j3Fe9EPRvYVwc6nWv9Xi8mpHFnnHqPxEUWzLgwXuyJZ79ENxYr3KNtksmtnbxcEvmEKKyHg1SZT27M4V",
  "key25": "4WVUVqp766U3daxPqyaxqqsjfeEqqy9hq4wfmfpoUSGzkwH7rXQWg6wsC687NUVTV6u1sDa7STcyvJqWMwsromjQ",
  "key26": "3vPb2Wnr6hxB1uAzXXMNQZd388GA7YCj8Vm3qsnKCcpYVT7Z9JRtBx3Xsw2nMKoiz3jbhg6TnmdeT9hy6z6eCK7R",
  "key27": "3vnv97mgp8Z7spdVUwLPZE1RhmdyrQotnKxxMqTgTkMDTmC52bTg1cZtEiTrLL88zg7EPrdihGw49e12rS11U1oJ"
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
