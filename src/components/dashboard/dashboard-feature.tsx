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
    "24pMndha8dTE6fv9jNYzbuStZz3H8CdYbm8hX4C1pvJeKVUNuRM5t5Hb4wDhkzR5gPyJW6iQ2ACKoUou22vHRHNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nYWm6jPBigzSGcvnhEg8vGwsj5Gc9ZHPqAxCsnjYE3Vsk8XwPwpXUxSGBaNSeqwmwN9s9FuXnC5MjyWCPGsGV4w",
  "key1": "DxZ5BbA6DMELiYMKR8mQfiwXpuUXwQ1NguL74x4rgMbbLe2HyiZ4XHE1S7wmxoEuekQ8XFErTdymr17akcR6vz7",
  "key2": "5PtJKKAv5XP8F4xYcnBuBwh72S8gS17MUKsYhTQFCCa2fD3Dm3kCUk9LQFyxvdBKkybfjtjRdbtrrkEnMi7kWeCu",
  "key3": "GjDUjdFcGDKwPqV7gRm57RoiCH2K7oqmLjv4AYPpR43wNTgP2HRdMZqBuK9Q33ViKpu9ochswGAbSRU1HbUSjWN",
  "key4": "5wu36YVtd6oaFWCdeyb63oAjQSc8tLG5acM1VbxrF4oeSSYUboLfFgEbJba1fNz95ec8JyNK6i6wgvRvk7b5oV68",
  "key5": "631xXbD3f6baf5AfPJ5zkFJaMrmkZwWh774LXpr4e9hzufJtvJUJj3mLmPDwuwoivC1P1ojkfo7FH8LViNh8Jkne",
  "key6": "5CV781ZAiTAMhaFVz5R6tWvxjakMspAhd5wKKzsBcmivWqQAm211mkEB1yUrNboF8id5X3LHvWK8J3E5HMbL9mmy",
  "key7": "2QPnszZwxKpdCo15k7MtkwMBEcxVEy1adyy4qn8QZCt26DcNidswWt8DKqF6Ljy8e6WhSWTKHS9w6tLZ6rCaPTCx",
  "key8": "3Wi1hHnPjUVXrd5P9LhH8jEsFXBGu5yMTYx1VvU8bDCvnYQCCkzHPNxKD5rGoYPUR1upm3pguapiUTMPNGUm1aYf",
  "key9": "3nrr3j8XnNSFu7153AaS3AHjMpGn2itEvENUw26H9W2xVpFAjiNbtoZHgqjL134ePgwxeiAWcD3mvVpTSQooF21d",
  "key10": "2pvgc8neBThhX7x2DKsqu7yBdQXEqYgvUsd9Qdjw93KhDzkrQE7qBsCCgMnGaL2KrPJ97AQ3ddcbHX4DmJRepuQj",
  "key11": "5ePnKdgFmZ2ktCG8cmkEzGCwr4ZC5qhx76XGbUWSCU3uZrC42RAPbVUiZDVDuJSRi4q9toK3VKjy5YSfVN96bSDr",
  "key12": "7XrwGMPzkoJhZkUQNoFrxaU7ebPD6C3L5KXP9zuPWgQtzAD5ZVQdpWaHJkV7Xa4Q7zTZ6FT2vHgwS34aJWDhTvA",
  "key13": "3vYRPqWEuyrmaiVggZWGnmZkNEQCwgtkrkVVtALwZAMHMK1yTPq1vu4uT6gtG2zGkvDkSgn5a3voFm3Hr4zcDdGb",
  "key14": "5rXGRxaCgTER3vvSAj9e5sgFCQMdnL3jU2KCg5ADCuhc9RCKFf134d4UagaA1N1twp6Q4NjoTjxmpTPNSacjysQN",
  "key15": "rtc9GFCRKHRHNPo9Mdggo3UyeYWpiSqE2NU1f8yHHLvwA6xxM8vWBRZp5aePdodViFUvyZFrFQn9jKZGcJBLbn6",
  "key16": "26JMmVvofmyLR9bpSMHtLJDREWB44RyQYQEQ8aDoxLPf9q15bM6RshFTU5S2RGJdTjT7cqisW3JM5FJwtx2gGSLW",
  "key17": "3jPYvQ2mryuvekeFCZbf1roNmH7wtHmwsz4A8YGsjBAbwmkhS1Z71aac67ZpgZgLdhRCr8NM88mbxzKWJEfXZyR9",
  "key18": "rECDT6RM7ATyyBqf3s7daZthx7ezEweo5YeyoTVEgYWQCHZp7eBkkkrhbciigAnDpHRmahDUZTDheqyqwHBkbnW",
  "key19": "2Z7TnAs8aBS5bmXiZaWS3tBW74WhQxwt7boTXAmPra665te9dGtTSwRaNc1MB7dL1TFJDTozEvY88ZyiYriCELew",
  "key20": "5djkWTxq2tWdQzHbGnQcKoXnaoB2BuNV3Z1FR2TcbBmEQpz3sNHnbTqk7VS96MMa77j7SirwHFYmAcoE7UaC2Y4e",
  "key21": "3EDVJwb5onHpcWP7f5yBp49oU7tXUmh6Mn1j8XiwUXzqx6AL1XxwL5Tj6bvZxxhbfEW14FssMJopJPf9gyuDNLfK",
  "key22": "jDjS2jeQUT68zDGXWDXyYAjVE8woPGmVS2BZg9aqe9XdhsbXofzyXuuQynfRk7TN4KM6MLNyMyMp79wCkoyFSfk",
  "key23": "3p7RvnYKEUYRjTrkMCedFZPuevRQsjbrtYqmRPST6eU53JSdugZWwqjdVyRCxnSUqLTnh1MzWQEWeYhWuAZjco8J",
  "key24": "4Dm3wRTqfTgmkq8oxLmTeZZGAJ7tESmUWkzAAW1zhU8j3os3wRLGxEMnHGB6vJhioKcQwVy4vw66Vx8uwkzfthxd"
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
