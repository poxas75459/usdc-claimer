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
    "mwEEKEW389n6xZm6sYjUPLJn2P7QSeJDwYL9DVR5qFfa5twhP7GpiPWELQugDZyEMthqiVabtvaWJaNh1usVZN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SwVMTWvutzZ7Gr9VRj1aPaHPAZXEn6JQLQhhbw2JVLkCT4cEAfzpm5wfK1pfAGYyLoFZ236b53CabRkizX7RTR4",
  "key1": "N1RXi5y8qA7KYiFkpPCM3TXiiRojJJrKzc7U6VRmNBqa1GcN5VFcghcHxUbwRjfKqYKbS78kz85RE3HayRgwsUU",
  "key2": "5boJDeFTBqfEjb4Wdanycz2q7Ehp2UhExekmRCH2TB1WGsS7ZVKaUjLCCNEdfajLMbqzABJJHvziHi5Dg2Yn4idr",
  "key3": "31KceesfyuxWoF999JgLNwAuEe1AoGAFadauCq7tRvxiuUb95gZYerRVfFxigMESP88Ctjxe5zf1ogUogHTf7Bxv",
  "key4": "3znB26tuEbB97rSk8i6NrfKWrvGyHPLRjgvWkxfdjPJiP3mVTktH8bDQ37Y2WZZa42fxjX4LTPkjtAGVxwyTgS2d",
  "key5": "3NqqrD4FMMbf4UK2TYt5cNJTEbdEPpnVWHGbrXSVKCDCmzEHUPimq6QvEh1u7T5aorte8NWuj4PgeE4cKXEBjxt7",
  "key6": "5872wx1vzM5ow1tLonEe7u6HTwDg9ipPy9L7rM2kiYxchC6vA3Xq2FdkwQgny74jZRbm3VbVFrH5qYzd9fHiigwC",
  "key7": "3FSLres81iy7hjK8vU4sgQTjJeHM4MTjQDviH5WYbEAPhPK7pAy5rFAAQF22ajbkxASERFyauWGy5jJFDwTpGpYQ",
  "key8": "284MJDAfNaxvoKT2To8VfmErUoVgEAnxNNWGm6NcexJgebGLA14b3HRmjbf48CNCwhDkjpubWa4EUqMLEXu9Ny2p",
  "key9": "jT9ekzDGH97LBqfZNx9vfRn8tyDQ5M26T81GX7cfgegfeeaxnb5rhH5eK9emjcM574Qe63zAAP1vKLm44uWQKfW",
  "key10": "ddZThUghabYDqHSY1xLHKPkudi8hqtzJyh1nb1iCeoGN4mhz4hmoyhK5DpGRA8CVBQieNJHnjXWE2kVEqXBn3Sa",
  "key11": "4QsojTeTg2RQrzgQ9QJubikgsxcNQsueCBDDDgX3dcvEmFkw4RCJiJZadGA65DGRgYZHdPXcVoUpYacnrc2hH47S",
  "key12": "2WH44o7LTmjYXQ5ktDCdxYrQ5dLTZwp4HFv2iNTCs3FojXon9GyF5wUwqTArMzqaKkYTxdf9YRVL4MQHivfRwVfU",
  "key13": "3Huq32cg9ESiwNxMpEH5m5qzwAd89rDj976uTMg7iBUbS821Vxid8qAMeHhvzZnfHVEh2wUgbUNcAXo7EM26izew",
  "key14": "DGKWbTtHRkqQBMwc3LrMxDZfXc7PWbGg76tzf19hqaL8o1BJYRTHLBDTDm2nz8HLT4Zps6v4mD6yRd4xbeB6wLB",
  "key15": "26pnaFz7nYcLU4Dp6LYt6NjPJ2NZKGH5PaDGRGftnEYsfRUFs1HJ8fQL4a1VxED9PAX8kLjWJRRYaHiZyC5Tc3HF",
  "key16": "5UMhK3ZXXg1XzyxXX9edUd7XMNYGHdBrCQgRRwU36TdEYigKHxXR7QfW4L6Nu36bxMPyZ991T1GM83mMiE194HW5",
  "key17": "DtrNkCMuLhvRs6JVp2kCordYEh1qTmT7nKGbBqCtUEYSktShBNphcWHVknKVBP6fUmfZdHxaQTuGVNBQTkkEeoq",
  "key18": "3EvNhFKwKN41DmQLPDL45C51BDDNd5Mxj5ihuYxNRyCRKFirqvL1Qezgsebm1juWZV2dt6HEHpDQ4rQmNzRBqW1a",
  "key19": "5a9i6mrC2egxNPhofKHyojm8iW7aW4eyRvq16HeB8hgSxydf2esfYsTPGWxH3WZRPSk8hoqJaP1GzrvvUTYLzBe7",
  "key20": "wVBKkxHbCZXqZjgtSS7B61CneA9hZCoaGG7rsGQDTh3cEYiW7W7evVE2LLBR9gQT1knEyDjTrkZRa24r7utBQyw",
  "key21": "4DfLxZAH8qmRWgAbdD45RE5bMPxZVuzEuBQH9NhiTHaEwPddiRMTqsxtjH5GT9SSnYJR6qGT1ryn2Ahwmwd8CZTm",
  "key22": "4vnWHo5QW83UoPuZZ21Z6tPFR75MULdyMPhKNsNcDoBWHDpLyyUrd1sbo2TiHPzbQR3U4G4egEqE1Zm1k2oxFCd3",
  "key23": "5skmAM7NDrDbR2EEbZEw9FWeFxkLESTy9gjAj6VpkJ2NpuyALLeuePhBDEE999GbLfLYe4uw1JcE4WYvT6KgNPo8",
  "key24": "jEfddfgHZSc7yz61vEpajzSANeumb1Qaz3k3Kpt9eVvH1McW6xutAB7To4q29DFsyRd3r5SsnxiS4BEXRcWPtF5"
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
