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
    "USsWaf5Xx9S3ssfnoSfNEZoYYLzc23ccFn38hnto5nzwEdkfeQ5GJnsNL8YxWfRkH9Ai46wFKv3hKNEPBDw9E9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C6AvHQz64JTW7PZE9GfmCYkbjiJ5NVQTo85VPPJgvdkcAnHFLzKVQhkSteZPkWM6RR1Gr3e7Yg7ncCqbpECtKno",
  "key1": "5f268VSQJB4jLezexNpzSZTCNR4YMihvEhbi7SL1SCosoFrGxJTKWWz6PtJJvY7jcEuVj55SzEKSK6JGRycbVchz",
  "key2": "3vzAZnsouE2y5NfXJgZCb1VydAebpgVer3iwcvTFibZRufk5V2LWo9R6hfC6bUgJVb5iedXSTfoJudw9uBuzq2E4",
  "key3": "KzYpgLo5FzY4ZA5Mcq1cxrDMV3Q2E4MQJHr4CrrPBKrmt4vBcESNiczyQorghNxjf2ev8WmgjncU9usgmbjR5Zk",
  "key4": "2xMeihQio1d4t61any9r2WY8dWneKDasUPugN7vztFtzMk9gHdr6MSidmjN7mjosJRzWKpWLF8XF5W8gyxa2KZB7",
  "key5": "JgEeK3jbH6RNPnmTi6geo4Ak5WUp7rdJCUXULPVEHWGivkNavPUvdFBHawyvxDdugysNKMTHkYZfvvUneoevJ7s",
  "key6": "2vhfuW5eWnLE7nLioZqUgLjazAx5jwKTMiaAMmgALGpoq1qGRYm4rrfUeffPNTNJDSQyDzfxoa4sz7B8RVWERFzm",
  "key7": "4BUJjFbg8enBJtM3tX4ZRp7BJrjAZXfogmthXYLGqfRMGPLoueFKuK1w4KUGqyYdfzkDtRHXMMuwusPX5prpip2q",
  "key8": "5N7XqKqAkueQ94eJorBRZqGm5ma1K5ap5PUcu2EoZeDoojkCQSYtZoFUGWyBKefbhehe7NqAj2r2Eoxmaqwepx3Z",
  "key9": "48SPMwMZr3BzLaBqkiajjhHgizxDd7GiZSgGyofRdsb6TTdqf5o1whUXSZampv4xydGMk82A6umMfn9hf48mfnkj",
  "key10": "5UhvSoARtenAWZHp8sdweAM31XmzDyTascWqfjLBDTsw2fSGNV5F4mphXko4oWsCH2gEhRUx6Ndm5ZgutiR9Ag6n",
  "key11": "3g5syfCzZxdRhQ9uarP52QGUKpq3kZ9jEHRVJM7W3x3DJa9n3N6piaJAVxfZoGKt2Z1N4zf23AfabkKJ6KPRv5kH",
  "key12": "eTXHcXcVEybo7RAQ9fUMXRDU8zpEbasmZozp18dYQZmaagczzkaZoiuPCLJueUQ4Bt1k4ftEMt5rYAsxy5zADKP",
  "key13": "UJBdhcNNjZAjsyLRXNid9opnQNi6dp6FqzxwjNVQHoLeqcdCbCKyeHToSLsiUyxexLgbMr9MyAAh3WYpjAA9Cog",
  "key14": "2CUTXoVdh6GHjgdvdUuHXgCnRb1XviMvWR9vCmgkEvtPFrPWkeG62Cy28jVm18bNUtbA7K9LK9p5SG8WyU5B6nDf",
  "key15": "4gCaigPP6VWbNximQPctHPyEgGdJ4fUa5a2XZ83dATv8AKH6tXL4AyEeSoMU1mBA8ARmSz7QaLtY6wrD1nMwDmYf",
  "key16": "5k3jBj1mFMrEiJNZpNACGc4CuQPDNGiDSxhj7qH9xnDzVZbEi11GB9VrbSnRV1Nx3axRfDDz9XHupBsNpqgNaufu",
  "key17": "45RMRwKej8Ko3F6wVxbZoooNGeqUPKvh7czq4rEWq9hhNBDLjGGRbMUc1rnAm2gkCXx1N2UycV1JRqz59wb9FMVb",
  "key18": "4VwrjehD4HUw5Ub4WSF3vqVUKtbMWqgj44KtLR6fi7MfE7yB2cE3gSTzMSyGREQPesfpBRo6qCjkfo2kq2pFCoHR",
  "key19": "2kcS8oow1t23phKm7efXVnSKnUfE6xVLUHWWpyr3Qsx8PnaMU9tCTbD865KRCHU4W73aMB8LFH9oWLjQsctu1qcn",
  "key20": "qEzKC9Jgh2m6wRiJ3LBS3K21DohwNQawjHJQzbZxK8k5wNjUuHq1mjxg4LM3D4MJqdLsb2HuVNgajx1QwZgvQH9",
  "key21": "2utm4Y9nzk4UdimNhCHDfAZYnNYYrakjt4HU3NE1RfLNWvKXPsYoHAC4aZzn7q7Zs6G1y9WW7G3GwztY6YDgFh4t",
  "key22": "4h5LpDn4MDta5PoZcbpXXaq5WrAEzxyvWzfpVvYyng1F5DjEaKA4t9eV3DkrYNZRjRaif5Q5zYZsqMZWNGQCxLtv",
  "key23": "2wR5Yor9qURUQq8iW4NYj6phUEENYzLFts4tjHCsoTUAWJyLT65tjMxqWF59xQMqVKrPpqevkPZWgJNjbqrRquLk",
  "key24": "52j2d41WdsYiNFjbWh9unXrBALbt7VgzcH8xLLpm66DKAdyfrKp9JvC1oQRF5GvqM7oEa9UrErpkE1iWTdN6s6a6",
  "key25": "3Wp8eaThFZ2upLVdLbH8LUrS4npFRxHrZiET4CkBgRzoeG5Hkpudd6dBAmmvhH8FY3wDd7Mu6F5KtabdcfgnQUJT",
  "key26": "5DPpCECVW3r7CFqkrDcLZ3XfXdLRqdP1eb3xopq5kRxeh59xQ1Vry5jaCmGmhShQ4M8vo6m3B6W5k8z6XY3Y7SYu",
  "key27": "4fe7TGoLopByLWTwfWdsubF9GTvHUzzB8f9so3b2rkcLz1yVySq6xY5H9Z7VoMBJgGYDNjF883YTXkxZxC2Mbsna",
  "key28": "5zny9esvyHFXnxWPTDWCa9GeokoXkuSYvHDVkACK4YG7PMDtwrWjDAxYkkjsuXfC8V14qYjwf1vuxnKcWSPhHXTH"
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
