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
    "4ECrznW4SDsyWgqW3rmkLX3twGPwzj4YCfdtmyxTDvMZAaSZSP6So1qem2zAiNfpKwBWcxQcwnpp9dAuCYSGnU4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cJYmVFCbKjGVwS9i2me72G76U5sTCYDLFxTJQYn2oaBfF2dn2nBQHQ6dg96kFtJWDDTYKuevrbrD2LrWwW8Azdq",
  "key1": "J6VEsqZJPFozSdZJnkKyAKdEntZT8acKwuqzq8Hw4YJRmNATxFLMDPG7GD1GQVjgAANGQ545QvvC8sCBMNxW1xJ",
  "key2": "21fEwnrAzK3v2ddqiKDWhnHysXziM1xYBNuuuVfFCswuoc3Tb1UgdrRRW8ZcUEoU6GVDkNke7HZxS3k2Kq2TnsbM",
  "key3": "3GF57982nEaYpD9LvS4yw6YVTS8YkoTwx82jJoKSYFqo4TV73t5D7WUuWUvyk7P6TA7n8Nb1Avo3fQdkdnftQNx",
  "key4": "z17H151AdnrMuKMtvXjp9vepskd3DEAqC4DmoMvmWCJaWgFN4BU9HPkFbmonDqr9HGcSDtdMy7v2HNiyo3ruin8",
  "key5": "2yLbXJ3nsLTLmfNTS7DU3PNPfKnCyHTTn4UbJsS48oCEcRC4YmPLT1wpXSUtwJ5WfWmQqqcGcaqTALz915mEN5EY",
  "key6": "2oJrsEEktPbNyD1Fs5tVWb3FVro3XYcE3aG9afNuPztqj7VpM3QL6uj6g9bg8FV5AnCNkixC8mDgC7hvQG9K9nBq",
  "key7": "5QdD8CoQLPG1nC7hx5jmwhZbozBKtTN9Xp4rCnHcCuSYPFv8tVARW2LW617MACBZz7ey8zuV7Agj25EXkjnzqraA",
  "key8": "5ZUXLGaDE6CnpadSkMbR5g5XTv4JZcUbVYbgJSNiRsW2YErN6sP1vtrReRD8v3yDREK2BYCopezr9w7XagyZrKQ1",
  "key9": "3LnqZtgw5VykLCn1CMXXScKCQJSsXj5pqtoQJmH54e45KhRN28DDd9n1Rp7feDoZuwZx58w9tkpykNhwM4C5DYP2",
  "key10": "4Dn6b4o7dgKyuCvcWN8sqyTRpj5htrwLZRXZJMguMXQdvuBuVg5HfpkFmy9PTmjBVzGsViJ92Ba1Gm3LxRPYLedz",
  "key11": "5ETdRRk1SeCJ26e6RVK2TDVBBuCFf47ayMbFxECdtRxPKR7ZVafCTCRSpVWYQpEFwdRcRNS2DuTJniwSLYyvDSCb",
  "key12": "2RmS14uogH3VpRzK35uCbPNYd7aovQM3HefS1y2qZXNSe3aGQ4iJitzEYhRz4NYFdVtkYJ24x77DVBtEXUxk17Cg",
  "key13": "25TSqH48fuzcpVHAJGr2M9CvRAGNpBqitsjMoWFFBZNMSKJDZC9bKJravABuuMDkYcswReQbhy68duaAa1wPCw1A",
  "key14": "Xr92jBgRjRkn4QwHvyMbjHq6bpfkc4QfSL9qekUKoBZfJyLSwGdXyeaKx8ttHY9cYiRhaJq3Rgkmy3NxFV1LB44",
  "key15": "m9QSJinAVW19bTxWs4xxHgDrWmW8nbuMgCapAg5iVEsERgBk5khtw2rCwgvkKRvTmRyi55qpCTLC7BiWiYRmzY5",
  "key16": "5Rg3r6bWVDfjREcKzEZtBXs59rWKXKDw8NdrBb4aZHG9JjTYt7v4M3xw7VhBoswqA9Qj5M9bZDivdqCZD1BpYsgQ",
  "key17": "277zR6Ut5mgyZ3HAhrx7uq5b2WVa68kC1cMUptpXtsTt5gZ293uSNSdC71kaTUgXYpZAU1mQ5wfGPaqJtRw7As4t",
  "key18": "4ZXauETFay8YUhaySrVESnoosMog5witwLeSNeCPpqx5M2CZGoc8qJyCGqi2ePtKYvWT1VgdyRPU76ZE2pgTAgZB",
  "key19": "554LgaKdf8crwjDSXbc4wbyQpJy7kuyuhCXyDckXtm2CqtoiwnFiWH37C1ogyzrq6pWXUKDe6KMpDULE75iyeHsv",
  "key20": "sRcPdAACF6PuMQLBf9pgaPVn5WEVp2iiaBZjPnuK8tEQfF4oRsUoAfi6xFmnYyiuoRs9girzJMKv78bUnwhNnJ1",
  "key21": "27w6YHtzLoM8nfA4NfZCw7MaUatQNcr1dtTQSdkUVCjjBzrRAvAexefsdR4YXgzDm6w5T1CknhKCRYfu6GFjMtcU",
  "key22": "5wMuatGkqvWCFri3Vuh5ucENufbWwYLgH8NibLU5gBCu4QzSY1UHWXsHUp5KNWTSZkr9KFJjWk2gGt1rE1JmmJVo",
  "key23": "Hi5htL5nVcQkwub7mXScFVbPdf4Y7sYcyJAgTjVmAQfxxHYWtPSqhMZzc9BnbVQDYTzLqjwV3XGJAHZj3qKBNqL",
  "key24": "5kxKKrFWWUiUUJSdwAR7cMefKs6VvBPcJr7NANTqPCCkVr4dVcG8wLLjVRs3EyHAur729PsGBCWP4Gm3zEA9zc44",
  "key25": "2PcCoFHxsaPMDEfTUEFmMCq8M2nGGwsih3VT5Jsc5CzWCw6QpvRZFNCx2wrXJoW1rZnvCGhEkCK2UsxQYavkoCi1",
  "key26": "5StMAuVys3u4fdSMGmsXm5y9qLijrWiuAXd21prAFJkgiGqq3bf1BNjEBE4kXg64yHUKvcPHSs3Z32KGpf1EA8dn"
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
