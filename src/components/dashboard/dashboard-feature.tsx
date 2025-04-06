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
    "4xkzZA6uhseUqhibUtD6v4PXBEKiibbuyeumH29vMHaSPNDQnCTiWqxprWibvMZLZ4YwZoMWwvP4Q7iR8x58jGJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n4Kg1LmEthQ3Pd7aNvj3rJVBZp7XPkkD38Sqd5UWADm9Ur1BzXPHBuc6nPa5hMGZEpbSxn9b56XCD95v7yuHmBE",
  "key1": "591UN5dKHFTE4wYzKGwJbtQo7yH12BZpXuePkxL77DQmXbGs6WXcA2Vm4gRkYjj6YVfKfzv3Yv849xapV545f7ng",
  "key2": "gjSqQHE1CP5oJiYTqLUeGTwcYTddempWoSQRp41ED6VoaTXf6eevj4osrhkG7qG9Uy73ktpx4YwAkihhsogqG1K",
  "key3": "3WspQAC1YdDW5qQHBbfLe9kRXECzQmd6UhNmdTYQjR5PhyQoiYvhKq9M7AH4DoFxMv1qV8FLVPhBYwStNHPwGgTQ",
  "key4": "67k6VRRZV2kGCRjNkaLGB6TVs8q5iEqZr8iRksnGo4vSPLMiuxoo2gs3fy5iuuoypSFR3GDm9D1S44VTLoycrwC",
  "key5": "4Gn5SqEU7miXhpxKKPrTmBGRVCkoAhiWzLNUUdYbW62Gpbxa5kK75wA4dnjmmK7qV75hBrtBMnUYpQJZRjbcJuMU",
  "key6": "2jFejU3F3qwdVLVVFSDsyVmYAP3eoHbAoVXzV51R4QRSyRwv92441x3ZrK7ScGHUFgSESM6HUVTBTVaHh9cxueEm",
  "key7": "4aNKSZT3WfnAaUrxuzYjLuNEczyQ7wDx3cra9bpkXP4w8JE469VtHbRsQhz1K8UaXPW5ieYXVqoffvCMRSijQame",
  "key8": "2N5CnZzwoRDBAfzsPpwhPRrfiWSa6Y4EvscrtDQVVbCrGF3QicByxKxM4HNVWkArwUEitAiyh9RcgyBHvimycEY5",
  "key9": "3mmb83YF13ncwc9GBcWDjVMJ6WyGE4ptXhQZHFNWp9ZP4godQ5MywpN8Jf1ekEheeWWevxZjY6baQNSKJcwQgs3t",
  "key10": "7CUt1FCwsuh94AYrrZYufWxWxBEDbe4uNk4V22BpNxYeAzS4fg9dTRE5KCqji7kf2LsyQs7PQqWjuvCPjDbnQz7",
  "key11": "2mWvUXeVAA25pHcinun3o1jnto9e9vKz3khh8yuNYKmD5AspqLH3yFUffViMC6GFNQ1mBojhLEXYmMZ76LyZt8Dm",
  "key12": "3Wj8iBHVPNEU8eBN1Z7RRRZuVZq75QBgvvm3RMH83LC5E9NZwA8Fehh8R5ZZQqvaPTuRuP6AENbrJ9SXnvbGUd6y",
  "key13": "5wpWEZGUEbeBwt7r22XpRhncE4un9AedGSLGqQNnrpMDt2tMQQ6M8ef9v7dqucWuTZicGKyES89PX2U6vQEmDVPU",
  "key14": "wdQD4wwMvYo9dPAD3fCzNUEnFLyZk2E7fAGZyuLbnqreD4f1YwSB1yMtm4nq8wKZwHCi7hYBuPR7sEvboJyjaFf",
  "key15": "2Wx2X2cR5E7PhRcANxjNyPeSrR7c2tKuP6rNMXcGk3j7GR7eubZQNKdDQzM3TXuxL7fr2jatkEAmEPQfhS94deSy",
  "key16": "hWpnzJ65e2tNebs7hmjMTMPeNe9KKJSDFKubETZYVSzFStQ5L78k58et5o1uEmH9YZf7rpx7vtxdtyi8sUceDdY",
  "key17": "2aFpofdAVYn2mPEQ7Uqvu8MH9GBPs4bAwTV478vC51NPKfQejZGqvVWuVzBDqn3FQoAch5dimwiGArQ87c7bAj7h",
  "key18": "38Wwnpdu9wxKZFNh31F6hzxMAHn1n8CzFYbywzN8eNpXyzMBwXQPDrUUtDJQSvzvVM2WmLouWuQdnMDfMYA7tXd6",
  "key19": "L8fDEF63HgFAgv9PBNWXaK7VvmSvrambQvJ48zuToDhrfjN9f6XVrz69w6Hib2kQxa5kC5dbhDTUeUTzw5gUJt7",
  "key20": "SDVP2UpVkB6964zw72Nm4YmAAJaD47mEPRKbdwyMwtYe4Z8czCe8tyRyHrJfN5AXWYWaJYdopyhwu3dMB1b41wk",
  "key21": "5gcpsiHn9d4MSkiWMKpjd3HscB5fsjPvjB9ySSFZC3RZ9ymtFCHGWDd9m6xr3pgFmiX6dVrDncQF8NLjjdZWkoZz",
  "key22": "35gXPBu5T81Dqf3EkQ2FXzaqEr4jKzEFbXxKGUtXWHmAGeqYV7U14ssReHNY5Z9KifK4JFe58gkPhixdi7UTKJW",
  "key23": "3rorVgAdqe5CSdW8uXyYvYh4LYSGUryFQ9GQDT2HjdsPoAQkc68iJA2nQuyykDxccsdbLcaq92TrpFT1iWeLRmyG",
  "key24": "5wjfAKia6bJi8PLxvhHz86qpN4cj3XKoRDjAmZbsb7M4AxBZkkffgu3R6UfG2QHfyFUPRhVkgdJcRhEsrzNbqsBR",
  "key25": "4VXCsTQkG9HFeAZ6QM7hFmVCvjauZNaV1rogkmW58JN838U8iz5MVGMrv55wes5fJPfzc4DKRmVT8WgbwRz9yB1c",
  "key26": "4JttNUG5fiPuvJeZZzquXEqkMu9dasmGU9NGTvnkhwzqdnk7t3HwXDsuCNyc3yjUNSaSGu4u2ytkj58LzmqtUx3b",
  "key27": "5VXKLv9vy8N47gwrBcPk8NwJTbWmkEcV8UchDBmBQ1cGfLcHpp2W53SgbgjWfGhhqL6JjQphG82sUh82iAxKpC9T",
  "key28": "4gkadRixWXSvwMiAJagg9DJXmbsfqp1Zzpay5kNeKgUJxpEbqCDLP4V1W9xM4PtF6TwykchCwnAwkTZ6jHRZXa3U",
  "key29": "4NjTYRvo3NHYzoq9yVrJ2vUVvypfYLsfSRu1KHVqBKdaX3jm6HYqyS5jCXqEtcoc7a5F8A3UH7rMshVFUqR6J9wZ",
  "key30": "3sfBpChnyN7F8NZDoV18CTWJdwSW6x1wE9JKcbnBvryxcN9pmyXmVrGJNw2kn8MB5qBTmbcPegsxhqRVTGqPTCxC",
  "key31": "52xcvFqi9aNtQSz6b58KfDxq4FebcHXRVoipyLopWJxEWmqRs4xnsMKXyratCGmJxNyP1Vxvw6pUm9hEmxoDMrVY",
  "key32": "5W7r6U7K52MsGrD43twe3cBhU7gKYC68fjqQuuQSNXq1AxqZEeX5QNB8Faqtzkry61S1UweNFTZGZtPmD4qPTH3j",
  "key33": "5dzq193y1msZbPbqies5XofU4xxVKFuP1drNT9VHiHUPWeFickiEwt2ho1HsCKD4RsgZhXR3Nw1tQ4STR2tkcbuf",
  "key34": "2P5NmvrNGX4gPanS1THUDSj9aaqz7Z6Uw88uXXs7AjJyPKhUcnxjxVEG1tyJjtXHs3mjeeR1x9AMmn6mAUbtjnU8",
  "key35": "5L96N9WYF1sngJU1yP8G8A5Kp2tkNCYrJC1mmNZPJRkQdLUqCJMMshs9MrMkKWYhJhFWrohfNJKYRnWEhNmEHDrp"
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
