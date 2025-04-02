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
    "29Bw7Le61fiG3b2xSL1Cv1oVXAJwqc1X24azKcLkoDKaeTsUFGmjYhzUnsDCm6psK8QvhJ8xBCUJkRRw2GQvL22L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HdWoujycP3VzvoEjm637gJqhNAx1bTCph7nW2jM4WTQd8yrwdY86UGXTKtDompHzjJdkpCnEKaE5AE1yLsLMn1e",
  "key1": "2idAzkTknzVyJAfY2FbbkoGYQoYP1zVEtaX2qqcC8pmpWvyVGiq8UyjKuJ7AJ1X9RBGXS88Qy1pdzBF3DR3mT3aN",
  "key2": "22d8NCNJU3cfxrrQGUeRiMZr3qR3h1SUsjFhXHqfybEM1tdP1bFzmXkioZtHpAiGefUAAEmaw4P6TndMxdaKPiRj",
  "key3": "4ZU7u2RjNXoKNDjwmpjeA897pdfSzzVhJWm1xf7YkDCjoHmEf9kkq5eGvCZsUMGDa12wo9FoaSod41B75qhtqig",
  "key4": "32M9oiEuDfv7gZALNToNLNiD7yLJe3W1ShcGkmPGjYnEFnQLqjtKEYjgAuTSrJWcawDzoSk4J6MMuDxUM8uf8TX3",
  "key5": "kcFquDnkSN9CHdhy9iss8aMDMHeW8dvdj51U6ptD8RkVRyZmddEKjNEWy8myfAZZ4kmZzr63kSzKKb4quhYitUN",
  "key6": "4TriwDLwKPAbDoqfGJpQeeUM9NuqTT8CQPsR49mTRshoVaNWJgsyS956Zah9JbHUb7V3RSQKwKztYZNbtqWTJzGD",
  "key7": "2A3ZeQk6PuM6psDAcy9bntg5V12npHqjTMxh7a7jSPDRDtbPjR9Xp6iJWwpFQnySqTC5Fo8YSQUU6CLn83kZPyiy",
  "key8": "3kCtB1PZP2Y8RydHG2EfDd6t1YUB796ek9non1fBKF31HHkCBuFugSnttAcARQwvp22rPmBWGTYAPy1Wa1LEZiYd",
  "key9": "4vEZ4QE46VvPULFBZuW5HreXa3XGoDSaxSUk5uYzJYkPrRHKM6ucjP4qhSxjaq3NamA3iqTVeeNc3G3fQsphSYGZ",
  "key10": "NU4m1MLUBbEnMvVmWZNBcRtJcCDdBkDZrbVedaGgTmycRGW2qkjnvid5aGGu5VwkFmmLPY3nPazJf4dfji8Rbio",
  "key11": "2e7BPZQN5r22qvVmr1Ei5f9ZXo4pydxZ7yVAkciqsq5LbFTvbXAL6EikrtLKkDhfkyNJHWRrhbUhDXj4hEPDyrKe",
  "key12": "3vNBfJRL4gXynTtepBpsiJmbymSF5M4JxHKe97a3nnonwmUsoxumrcWCyq186etESRDUCsXRapmEqgZwc6RgtAFf",
  "key13": "3u52X1risfBuYJXJYriLsUhGCQCq3amz4fLyJhShPn6NWEEFqbTYUR1htshG7dBYg2KEXM5kJZFGU5FZbqiHQDzy",
  "key14": "3Y5zvKK5tvbb7sYxBSxZ44pJh4bYQ9VFEejhsD9LiyLaCyAYgjKGtLdFUXm1poFB8v5q1LN5qGxktCL3hxACxLrW",
  "key15": "2W9DNszAQJFjwkvonPCvZkrzoum9k8S17EPxB838GibCNPVyWmENPWnRYFxdgNtgpukaRBAXvjb8CKqgnEm1aDDv",
  "key16": "3zkc7tzF3uYVgQfMugMLC4rowPGb7eYY3Zghimij4E7qehfPmUYEhJ2BQtgUgdNFvDYDKh5ttVcbNT8LSSqP6Nfd",
  "key17": "2hue63b2sg1QBBcFEEQZnLsgtUbK13EbnoXf2QDrf7yqs28ZD31UUzAWdPcN12wAxVRVtu8355n4i5gzzkxcG1Tr",
  "key18": "31XLmKyZ5bJX6PwujEtq2zpSA3bqPdEUJY4rp2XCWQTiZwmxMXhwEFfVEGZLVhLx8psoTN3s628GVJz2bBeNDUJd",
  "key19": "4HuzM89Zq7fHhQazALXBRvCNNtPVGvNjVUwS2KucVzEWoEuS5ttRzAfY8g3j6a57hbzMi6UGiXWV5TXstTLejoP7",
  "key20": "3AiX19n5C5NC4G4Z6tGBRwbkh6eGzXFDRepHWcpqyeXyH5fU3F524dV9VVjzbMXrzDyLpFLeE2VEJ9WYwCXgbAfK",
  "key21": "5U9RiCNgDGRmdepCaKKgeFrVpbKhZ3eE699a2dz2vaLpVmH5YyfkYR2nYVAVGzvjWCM3MsJVkEV7qfYRzcyC5gqf",
  "key22": "24DmowvAEwSCTsqh4dQEk9jB2MvgTziEZvW1hTTZeMiWEuHvWo1DFMakSMcNCVfQtyDN8xE1yHfNZmVjHZeAyDHo",
  "key23": "36KqGrR9ZALpoatEuGzfPpFjMr8Lj5wESj4CqtDHmhRaEfSK4MJ2SRQE63RYVQkM2TVdqaJ4pgv8aRbkdGB1j3R1",
  "key24": "c2jK4SaFVnRRooSmjEmF7gH65tdcXSMGz5fzttehz4gP48L19Ecv1nRPc3NgsHCVGbXRhP6B3Aj7WWidRiQNHHp",
  "key25": "4jfcGf6jq9Wp7xoPehbpEo9NmEmd8WseNE275TDUhxGnqmm5P2PiCCnXqd8SNGR3knFWNmsyqqT9LAdYzCjaznGD",
  "key26": "ZxKLkCxhF1pxKRVkEYQ1qoxNEfBKgx66GyqjF5uV6Diwx7qE8xR75RquCw3uS5HFnFmAuC4a3wZ64Vx2qRm74PP",
  "key27": "2hqWEp85FTdhZsHqu8gNx4jRiELoz8DQUWgT6vfTfoxiLt8fcYfuH2ABtn3ybGmHGE5ibzbKfB3jfN9W39rRZw71",
  "key28": "t8UhvHJBzKeLbcWnaVVeU4QQsXcT3rZfiN5b5k7UcegUKoUhs6VxFEcNQEtnMS1UJXHzYmurU7Eiz8KbEWqLGwa",
  "key29": "wPwA8p8f9DpjGane98mSbgDftH776PUubxPurXWAox3Qx2nJy3Fj3M73wSAdvbAPePReEKXspQbt6gpMK7qRWm6",
  "key30": "4cBGpCGADuUPtMwFV8aCopWcqhZqWB9FZqrssRj9Qf7GXmvtmdzVWkmB16KzsNACriGYcQb1vSRrc3p3uUeTTqvi"
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
