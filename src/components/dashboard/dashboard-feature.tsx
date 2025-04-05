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
    "RV9xV44xaozUtpxfQsqHoxYeRh6pUCCS31Npa9saAk4L6APjoybrdWhHYVVpB43NrK23RBMruYfgnPGUsH8ajH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yfL6LWk5mYY4Dz54D1fYmrL2U5roRnVW3d4qnEhBt5gEkBBGuJaHuKHGTjWpPmjKMdbPEyvbjscq2fGCLFwrcur",
  "key1": "45sNCGbDV45q9xNJPQBK1o3FqmfSw9f6Szqb2DXf9jQsdWnxB7NaifLvQJ7WbQ8qTxb3xzi18gxzjqL9PvA2rWLs",
  "key2": "5zwkT72o9jQNTG6hh8xDhsUgGU6wMqupWmFMzXh9p4WpRBvkNURyvMERSeRxqejRzq9bNA53pvFx3pBUS8sxdERZ",
  "key3": "2xebvcVuKvDMXVgzYsxadKZwugNuiJNcU6VjcwDyQ1LU3zxQWQS423yUHLNNVkS6VcnE7RzGg5GhEcrV7Y4sBDdn",
  "key4": "46RQfNhrPVzvtdKBRfKMTDXe22oPaKrgm8Xnf6tpG29QzTugDdsoqM6PGPyxHn1HsQ2VTYm8ZBtbGN2t3sRwyEJW",
  "key5": "CLW5aYdEGCiidUgyWZiA4CMbmRnf3uPuBRfGTLffHMPUESf5QF9L6aWUw2a6oVVpKMvhESBd3PwNKYRcjND9PAQ",
  "key6": "kSavtZnzZWSQdPWtQkR7DvtDZq6W94PTUzzD7awq6hUi63Yo8BZTE7kJaDzX3uNDxZsziiBx9QRtrLr1BRfV7a9",
  "key7": "3F1UfmYtJohoaboyjy8HYVPxjPQiLKRdsMSvCbKBVQaGHZBkkLxB2WiqwAR6JsALJVCBVoVrnmU1xytaRBpuYpza",
  "key8": "ZHjqSMwAuE7eiwTm9hFqvrsEkVVfiyGeCUyYmzce9i6oMc5CxehXCi5QDByqEVUTYfbJBBHHLA7QgXPTZSwF7kZ",
  "key9": "4zVnSjtXBQnX393vvrJU8UduXP164Km2kSh5FtgsdPtakqgRCnBktCZBSdLNbW9YTt4oafm1Lr7gEKDsUwkWswhF",
  "key10": "2RuC1jyrJaLssQSSw86FYCZED799vfz9NmzY5CZFhXCYY1hXwEyA1DjAXcBXKakU5kg55ZDnVDVN7TmhjAACdfyf",
  "key11": "3jsPVZPfK3hPTMkm7FmjKS5gKA5HstWAc6ouKnNyLDE8xRVts88C8U5HTLQ52EuYjC9PuGC9WKXbkPLiNBgDuN6y",
  "key12": "3jf2APfhaqgYbESejPMjuJNVt4HBrrC7BKmnXmUwyEqvJjLRdi5fq6xSsb94pCo4CZj7jSnHTrzh8TaeqGhLcnVo",
  "key13": "3LjE7Yo4HcY56UAS3PYT5vR3hqzwXM2kxLdF1whU3DrFhAFR7tKaXRu8rYYz7XzQAoAdSgLfv3KgT15hwtdEmhZx",
  "key14": "2brN9PxDiDMpEaGHQJ4nWs2d7kMEMiyn3zR4Ygb8Gs1u87MKqq2AJL4kP1FCeuetEjWJFTnaAuMpHzBCSE1J2QDg",
  "key15": "3Aw1phJvcZWYHJyk5NsBvsqF4kbXS9Bd211rpv8wKQWC9aZPTzEYkicR8JJksbbnSMLDTxcLNHaf18vMSe92eEbW",
  "key16": "nUvqPffzsP2m8GKq2NrWNcNSZdwCnwwqCQ3avkGcKhLikgVj5N7NybM5XQxXXRpPkuYUootmTcdJVcq81WuyDXj",
  "key17": "46SK3YnxhhCnUwyodgz1kL7U3bWgr8ZFo3TKoGUAh1fTxrUwoCc6UX3Keww71MQNKVrwig9o9gKBmkVwz4NhnVff",
  "key18": "2WDYsBmkAQwrYTh5bD39qLQjJJB1GM9c2qvAwHzZDccYowoSq3Ds6CsqnxCMVjKsfSEtt92GkiMvSUrhq6pta4vQ",
  "key19": "2T9oPsVDt5VkheeVJZoLAmJHehCBmq6gMCGPcEa6giN7fjXQKcMPNhBVrCv4bjCNpHrLW8yJPSY2tDp13JXrpL4t",
  "key20": "3qLVEVKp6ehjZDhBZaTYGbq5DFtEbweLK1Q1QZ24mnkWyaAMGhG65pg988abthKTxzXkQTFd14XguHQknQQjakgW",
  "key21": "5wxHtAwLWdhQVEMxnqC583ZycgFX6AbR134fDVTRyWy7S7Be7RmrWjQXh9omEEXwwQGw9KU2JcohtFVa4Eckj95W",
  "key22": "3g8rb42ANetKvPudVVLCWPPcWNeJVTNByBYNk5xiSLWqjNWYWrg3n7Cm7HDNSx8R7PkyWxcGepCfkhZ3GUJsmnn1",
  "key23": "2UtXsKC6ocekbWbu9PVMVBu8QFefS7e43VDba9NtZWy35GbKxQoMiUL3qUC6pA2je73tebFpSLX3tTDVLnfkw2wu",
  "key24": "5CoBqo3Ud6UKQdH2N5FSXFgDx1Rgkceaoo9iQr5fo8NjVVzkUAPjP7EH4ou26AWjo3Woyq8Kt23A9YNBg4aPQEoA",
  "key25": "DBkSYDPRrofVs24prczuhNPrEzHR92DVBnhWjxzthQmrA8TbXXSeZvTSsKmvmTnT5VnQ8WWUEuV5WSpRNday8au"
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
