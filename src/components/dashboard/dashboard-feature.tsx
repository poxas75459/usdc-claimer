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
    "2w7vUGKYGwRwVKXcocoeFSfoAU9FXCbwbkGVdEQqKF5NhZR4Cau84PfwL9yT2fgKPguZnBPPCjjmjmX5L979AbaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WumNcUFSKhGQUEDNyzwNwgvqEdJTadmu1sGtDAGfoaJxVz7syaoEX7wAnYUFShxT3Jfrhd4HgK7Gfo5E2zDx5gQ",
  "key1": "FbKNBtdeSVnExSgvKFTSRec2zitZLzcuVYHPVwV4d4azbGJuMVDn8D6T3BbXoL9J8STbKPQ6AeJK3PWdF9BawnD",
  "key2": "3v6LRdd5W6H5bezoG5EhEmm34rb5Jrn6XvpbegbhjbrvsSCeG4KYE6uR3BBF8UHvYEhVD1T7uuBL55BkEoZVnj7w",
  "key3": "4WZKCRXQE1BDGfnGaifuUog5oCxVY8FXymWkGGrcK5Kug5rFRoQNj7vKR5UquqkBng76Czx5jZG4dgQEJM2VPBhe",
  "key4": "8nfRqt1YGMp25HLpRT5BUYZHKkNk1feERJ3yngM3wywjoC6ydXDTjL9BpYprvL1yE1JBextL5mdr8LngJF2Sc92",
  "key5": "3tM1ZE4PSMBi7uXYzNg8KunTMt9seJ4Y5PgkyJ4DgHVvwUfxXWWTzXKChsLBMTP4rNjieyEB7EzfMg9WsLHauhg5",
  "key6": "38Xav8gCWGMQrec8iZWatX5TgroZEL4BocXL5WmTcmE7jkvgQnBMGiFAUjDdxr4eC8ycqto1qU1UD8hYu6BYmh2i",
  "key7": "5zsE5YUubg7HseGwU2nn1iwshvsTLX7zkgWh6Y18Dj43BqGnX4JKEeJ3B3EZqsELiLAEnnacSeNrVNy9yAHna9nB",
  "key8": "48nAGecG8yZo6qUF53nU5zQmYysYB6MiaX1TWNrFAvry1HRA2wVWzXGqPkZBSXtZzcVuQ5hMDETKtFVh7tRWaAuu",
  "key9": "3gSvR8QDbQxhY2w89heRpZ4yxNQ6Y7zq3dUJrSJgTTZS5qtbmLQBudnaiTbKqMEfJhB3WdNRK3wYSxCL7qwLJakT",
  "key10": "RhvyF5KVHb4zDXjKnLtqJ4eNfVqiki9udqfhuDxKKquQhjHH8JUiR7QD3VFZFTqm81zbpbCQamcCUkgkL6H5kvi",
  "key11": "4ooUdqj2popjtmevgYLnZ2JEcUz4UH2a4ZUv7BpAGekVu3foVh395jLAkTxtXxCNfPLSe29UoVQdNnfYN7R8nszv",
  "key12": "5QoFwUtfz7EUxLvw4kUhMkupxeood59cBE6MByF3nxS26MtKv1W2UPNuQw1JYczCATnVNSM62pd2khVRPohc1VtM",
  "key13": "4GTDyK2iFRKyX6ZVCyDaK2fVx3JZDWRn9bV3jgAufEpmT5Y3UJ8FLGShaBRkQ8LvxQ8HPic6qFuLu2NEdtqNeBLQ",
  "key14": "2N2EnssLx6Nty7QQGwuyQf7q7dSxuyfLjhkZ44PsXx5Mr8RLAKCrNEXDy9AKjxoER2Bw74Q4EnRBg9CNXAZf5Rwj",
  "key15": "4vmL8mydaUywiBghxPdJ9GrV2y97qdSZxthBwdkJQFPbC8oSbKoztZoR1symX3Bns6X3opPckiRXyQQwZcyQUEds",
  "key16": "3fBraQua2E3vxPHHBg4nbyN2U2UUaopQ8Uho6gEesecAaojmtTVHe5ndb9UXwHDULxdwZksW3CD9EtcDf1HtLni9",
  "key17": "4SfniF1pJAvErkATnYBd1jrLBkNSGWnPJBFCiW1StSxSwUyGwxiYuNyFfyiv4FJSrS6KZ2Krs6MyH1qu6PTvEm91",
  "key18": "3MDx5AVoqrpk6eYC1X2Uot7VmuhgN1RvAJb9r1DKPEfZxRxP6mwChAUkWju98Av2BioqcCjG2u2pRUccdeSB6sac",
  "key19": "ijioCsMPw84eRADLu2pJJEasqqq77zMmMtDN3Fng1ACvGtgB17eNSSzmpr3PkcYTk6pL8QR2htMDGNnkXgLJCUA",
  "key20": "36eQVZHC9MjfNBFHx88yh8M5roT5DEgGAj8DRyqekxbQ9xFey3L4k5Ex68sE7xEDEwoouS4NEJAWsSu1BK7Lw288",
  "key21": "63AEJ1MWtrX7dNMr4KKL8xS8Ne8s1Ji6rwtd5opDQ5jUksUGUQ2NXTtyuUGmLSt8Dvi21zUzPTcXEkwCCq8iiKWf",
  "key22": "4MDQefyP2YCYhhG9J71XauiJfjkQH2cvzKAZEK3Jpv6M1dMDS67goQCTfbb2tzSghwyedT1iYf85kPJtdFGrA8Ez",
  "key23": "3EfKFjoGjBHDj8n9HtS4q9oR4DTAShaBMzGXvjBVPGE3MKLpDK4TqG4EC3XxhaSiamjuCCtY3qM8JYTXryrSQNSb",
  "key24": "2SFFAv3b5kMAxuEKJwNHCo3Ctr139NQLmyraqewmP2qTwGwW9j6qavSXN5iRWJdWF1fABTTL2XYc6j7ySKF7m3Hf",
  "key25": "5AzX5iu2V8Ub7taMD6GYnqCLvLkamWnereySR7DPz8ErZCvNtG6ycKon7DjY7Q6WXtRXrD5qqyLAcZnqGEj9NqfK"
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
