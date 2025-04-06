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
    "4bLy74HHSGU5Ss8deieEG3mo1xnBKYPxcafRUvmKePcnzXGhXRy9US3hC34RDqpEQB3GkSTnZZomAk9QTJcjJGAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yMXeK3wDaGxeiU5nQHP7KeYo2CZ7r3sKgZwbqckMhgwmbuWL2CBoXWeyJRqfWDK77G366QmoaEtp5u5bgj8zfkR",
  "key1": "5ZUbzH58tLXkYZdodHMuGbgXpsFKEirD19S6oJsP1LKnrdKTc7JXN62h8rr3vU1EwixkTsyaXVpJcZbTEDoMEKC1",
  "key2": "2VeeykPQ5vT34dDmBiWAsfiX36qqpSKnvHFf1pGaY3ZW31dwjSzPyjMxzXSg28d5vZ4fdSBNcPiazsGGFNLdhjkB",
  "key3": "5WzXxS7qu4Vzi3LefMjZZxc2cUg4RHDGnV3AuTq8hsgD5KDaz5vG4gwuiHCrPhARH3PnF5ZMhh3aLSpdtDdiJj4q",
  "key4": "2J13aQEcZavVvdCjLMPdBtYTjSRvPZnMvMtGJNxX8atn7V1LprAa5Vj7otWZQhjDxr8zf6wJq2aPtT1o5ZEK3spG",
  "key5": "26k7Mhn16wqFPL9nfSWB6GTWc5xkz7CkTyVAjkHzuwKZLi5ptbbPs5Ax5j1rjMjcdfYnfVAqBVbpM6xY2qrxQJMb",
  "key6": "57LexHG41myvpaHfJXLjJY9Z4jMD1g9i6xd48QpuEEs8W7JxQ9JswymxjerFL3yGSKBocKuTjT8aaAH7dB4X7QjJ",
  "key7": "3EicL7UTHxQqYxr2tEXe6t15LjPK6AQzj1XxeDfrGEPwuPoWi7YYLyWQk54UGrAtuod3UVNgRPPdfUPJczEmvvms",
  "key8": "5ghMaRddpKydL6jgH2hT4Cp9Jq2mhH82A6Z6vjP2dgfnPdQzrqicLuaCp9TaUUQmgag8s1cgWD8H9tys1V4GoV5a",
  "key9": "4GZfgBsYickp1kjRChJaqCe9N3Bvhofr1mp8rU8ViphfBDXc5rN65QE3Y8XVfPT6YDdfa6ZcYH9kkB1yJ2tzNWCg",
  "key10": "66xWRAj4erTSNdqBrqtzzk9bMXuJ1ZWMH3WRqLQJnuhCjuNL6rJY6oc6DoiBq7MPDqrdTTTjcxQaKWyy8Zf8km6f",
  "key11": "5wVXZrdtxrgYqmGhJqFSTkNH8bCMNCmFeYkgu2BVDu1qMsjKBUwb1jHKe7WRXQ4rc1QYoMSejqyHC86tFUvGzGbd",
  "key12": "MKxhaPGvuyBeRnup7XFDxGWudxHoUBQX3Qjr8zW7AuPMQG3b8DSBpS7HBU1da5EvLpM4sraxWyVMDq7bocXU1cx",
  "key13": "3rudHpzZ49HJt7aB9uwrSg1F24JgZtN73F2TuRFnNiyRUEkEe4kyNeZkF9bJFDXFdunQLtbE1dFytnSUJuvFMYN",
  "key14": "2Gtrr9Z2pYdcvYX46x16xgHjovZk46KA8usgtaFzMeurwUsXDBeFmw1HPJVhJe32QZFT6hVen1uKD2Kdn9MEia1G",
  "key15": "41w7mxTKRtXrXzG4oY3zMaW4a5kEabQu8xCCbdHrvESorcmBpuKVHrMFZFbEnoTpT46HMTnbzzTKCsxnkyQJJy7r",
  "key16": "3Nb8ALJ9FPgAH3ZfP7SDatiM4MBoCcu24sa8aEYwEbYLWS9PVHHK4cgMuYqDj3mVRjAMnxx49tgZP1fcUFeQwu6B",
  "key17": "3tSmh2xwWyfoBaqNUwqTAjAe1WtLiCD28zzDAMh2GaZFzfLqknHkKSknJVHiLTLuRff5PvzXQBGYDdCYFDJXEvGc",
  "key18": "5qg8W9V7yRkoCNy3vCmVsW4C6ZVgQ5e78ACPKirHUeVwtAB9B6j6Ls3xdiHALE22m6Ke4taJrjDqx3SuXhVFQypf",
  "key19": "3LA4y2JxV7WsiWyhUbEtyLMTyuAa3b2Ns52BLt8uFBiEvfAJ12aPCx2rtwEGeRje5DThSCFEnfxboQPKaRPjdhuu",
  "key20": "3ojpi5FRqTxX1FMajcoifMyan8c2T2gpLtLcx1WifXpfaD5tffEACzZqUhMEZxaU6VpkHthMMguCno4o2ob8HazT",
  "key21": "4Q5HcsRBLL9ULhvr3d92gMpPvN2xa1g4JW6Cgtw3vi38e28F2ubWvQpcYaAWmJx1ELtLT36u4ZY33XRSioUbXGEV",
  "key22": "x9MRkXFzFWhhDdQYUYCLdYK4XzD45ZUbhUQEVSxsbtnjbXcEmiRcdtdmx9Ha8ZVSvio6xGypuj1TjuNZ92LU6jK",
  "key23": "3ckMDyRPXvGwz62gfiqDG2yvJvuKJPm3N9CYQDQipGhCQoFDSrSrkr8ujWUP1yzdPi4qmH77mTJDc9kYi42S8i29",
  "key24": "6UcWme14RNMYiKteK1Deq2ZLqd6iHwSSgQkaBkwtLsSoqqeLJQpqhjJuqmpAiFkKkdMGxbzZRryNWd1B5hrzHpq",
  "key25": "51Ur7hBdYLfCDrUMF8pd5GwfqgoYSdQmUHknj7YXNXmvw2ecHUZv8hDhcikfMF9P4tn3QbCKLDdQ88RBcVi2JyQi",
  "key26": "41LPnHxuJVbeWnouYibU3HLznsLn4nkmB1WRDmtZfqJEp6zvUh515vLdg6p5B4K8QeK42UVswPDBF9wqzLDirNau",
  "key27": "4GP84DKBC2xovBBMuHenSM6MLLiQFNjjUQZxpsxE6SykjLkxomR46ZkT2UVyNeXrLWpetywwR4n7FWQMXVEjPKeU"
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
