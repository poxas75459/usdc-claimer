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
    "7ka8cQV2dux17hkT3sUwN8QE3c4mttHnpRhWQythYbbBTyzjoa66jZZMyJTkyDxUe5kT139pCPnoWmtPpbrnHUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fTUSL99NMKxgyU4nRjtCd8dveNcZowxHC32WVfbVy1AvdVZNwvFExspar9BuhwrWyUEMPbWSkqR2DYPYSfYK9oD",
  "key1": "rei8hDR7zTpMGNvWTNXHwmycXvBxGygvF4bMqESJNs81YxWLRXbxJFdCXNN8sxHc7TRqQuFx4DqjanfEQy89oqE",
  "key2": "46QTxychXi6cMRsvPDFzjA5wPzybawJZdP8SuYp8onNA2g5r22Cn1AMFd1vd27hLRpTFLqusqGFog9VEJvt6y6RP",
  "key3": "5zrEx5MZpfBeekpdpVDzfK1V1W11CEokBK3oRwbziWcgCBahMteWGEe1PZ6h8N3Z5DhWJpHD1renVb2wqPV61UKZ",
  "key4": "3pSPtmzTEC1jXyThSQPq1nw3VEkueTxrkGacjXX7dCAjaErzMAGSWSfXjCPkMMpPSGJWZh4tCXE7QV8Yhin35efr",
  "key5": "8v5W9xRTfZLajV4nWHbjmumq5B3b2UKHFTpP9jLwQz9qc7Wf1cvMe5MQETBua6wKXgUeiWUgv8wZDHKnMMNqJGb",
  "key6": "4yCGZSjLkKN5t7eoUpAxxNUsq6LzRQFVnfagxDptgRvSjDYLjdM3Ax6ZExYp3rVkrVwj9JNDMyq6EnNhXVa262SK",
  "key7": "3ZZJw4ouyCvejzHHPyQW6A1LV53oecsoBnT9siVcHk5FYU1HX5NDBM1e2D6gCjjcG725Gwkvf9REfmQUsCUsiCzg",
  "key8": "2iFPAj3K389Cjwhj15EgRyZnEKo4beaVEr9Zxn7LgcT1niGcTg1s2vvfW92aHAJRib1PKiAjnLtKfcG9VHnMGjQi",
  "key9": "36VHi3PG5YmEbCfFEaApFDSabQezSbHmSgiJM2CBTpCB4vCXke1Vk6EE1M3zcFVRmUcaJyJy8f8aPik4kGrAeQTz",
  "key10": "KwkNthSZp34zLRPTxq2Z4j6s4KA66tGVpfXHZ3N4TP2pfouVDjdqvVMbPXKTEXUFHZAze7VQRRg3fz3u88yrn54",
  "key11": "5Ccy9YvkH3L767Zrh2gbrBw1FJmQNQih8kyUZ63Vb4qjJ2Fw6Dtc2XVmsMMaaRg11QsqvoB1Qxx5vPT1upjCmizs",
  "key12": "5CWL4kCq35LvE1kBvQc1XfcZpS36H1BsmZvUn7DhQYBziwPnpniyVeoiJG3zBAG828Q8jZq5w8E5jbU69tUraW59",
  "key13": "2c2Lf6kraKRVfHTKeQdg1mTL984wwEnTq43sXsrNVNQVg6o3b2K9BZvsVAuWxPp8u5oxAKYWg3Ptoq2Dbs5TnbZG",
  "key14": "26RTPuAt8bKBAWjk6dNp3WRuhkJa24nMAPdtoLiPZ3uGKH8vABAY8ThtiofiCaxmh28QPtcE5M6pTsqAQDjJAxC8",
  "key15": "438UZQ8EziLhbMGCK5vC1hbGAjCesmwHmMd4dGVXZoHXcQfgMQCaAhEXrGpoUg3JSL8158pKw66moYDFjX3xQbcB",
  "key16": "2KcLY5ZuLTskoLT66TMM5BoZNeWhJ3SXoFtHMPiSi5dHF5YU3xWewoZwm1Wm4bT42scjnLJ5MxvrJdxy9b1ZGvqy",
  "key17": "51K6gNthMCLf3aTXyU3hQNJv53nMa5dSRDiQdAz68zbgQkq8N5XHq4FXhdkTqkPsSmrQaGXW4jXBDfXF5SUmsV4j",
  "key18": "3SsrrovU5TsaAXK3vZh5pyCiPGVT971SuauWj3Q4J4mXhJzxL89o7FrEhnsKQvVUf2UghdpkMhiGEkS8zdQjuusG",
  "key19": "45zCiB4iRkmqundcXN4WntBFWZiqZFYdCrQauJ7DYqWthHYv4TzH4zsQUUNz3qpfQBhCwBDEMaPvPziR7huk5twd",
  "key20": "4igto7knBfEAUNy9eA767ixGi2cnToXJpbpxtSR8fsYkisNwfwK7Mo7rdgubpDCXQUycnBmgAhSBgFDhvcDe7vvy",
  "key21": "5gkgX7udDVqbCDVtJQqg2hcHJeXkXNcG4qt1jd4SmqZtJeQNH34xFK9ZaBV4CjqiKmYfL8awW9Kuin99NonBxzgW",
  "key22": "5sukX3tibLJMj5uDRDuiuJuruL3pfSr1pkryB4uWV8PBSv2mS8V5LyHm4EPYZNC8CZ1pEiapdaY6YJEb3xL1nms6",
  "key23": "4jxgJbLQPXrmufg6zbELGdFG4F94joRTjyYk6mipkmmKvMhcgkCPghH3eRGxc98trFiJhw3HbE6UKHAjcWye3oyZ",
  "key24": "1D6ZpDUN6CCfiGzwDa1DzFooJcFqZCgAnVRPXsDq22wtqgYepdgmwjTJnt4wYPcoeJ851AHGKt4SuNgG3EgHG19",
  "key25": "3dRjtWTQEQHdwgczipB6S7aKpekw6bhctz51BVM6rxf4ihStBUdMWfJUTPMo8up7vN2BACfv62irVxZPR6N8myGo",
  "key26": "rUJWDzeejwkbfRKNa18u1kAyALaqbTJhWxyhoXDcmqDSPHit1NcqAzN6ggoqGZnitqkjq9DnafzCfMtCFC6MMST",
  "key27": "4ccU5W4UecUfMWsXAQVTqff1Xzh9yfuMYz29brTFKDFuZR7RtSZK3xgkYy94EEGT9sQe2vZHPcHB1ihzamAEfo6d",
  "key28": "4p2TGqgMXZbLkfUqsQ4YrbuXJG4MsKU3wobd7MZ12ZEyMS8dWiq2cNuTKij3cCRZHcvcJp18hTbzepvhYryKqZPH",
  "key29": "499dpqaAF41Li9onEEEeZzQC7njNgbfxEfTtQY3kuHt4kacoiuE3TDvphwkRVH2bFsyph2kQ25GmFL2kosVM8cTh",
  "key30": "4CgLnih853VaJdXGBJcN6jUxoNCShTH5jSypdx8aTBxHaYZ7jtiDMYTrhKusJCqyBDen5fenJSP4hvz1b7UpvVxF"
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
