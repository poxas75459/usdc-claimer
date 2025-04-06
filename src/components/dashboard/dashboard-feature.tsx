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
    "4CZx5vn8PiiTGMXLGwLZKnn46ctVRPmPaUaMsDGCr9WvcBRjxCSheeTM55zAVEFiJeM5RxJU1v71CL4Yj16ExDVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e3tTdheNFwjtThhuyQjksXoyJPDv5WDDy5sZ2WbnY74TuqB6As2fZM3oFTnDBkjn8T178ZKPKVHGdqSGJBDUSwq",
  "key1": "2gAUWm2UQWsWvcFkK8gdXqkzWDdJFo85zLx6rJstyK7roipg2CopEy8ByyhbNyefpePrLF5ZCN19tcNAdguanvyd",
  "key2": "3yE88xEeQabHDD2Vh2F4oDsRG1Pr8iZMzyjFNE1sBdjg55hNthAXiSaKzb6pJuZbvybGpCm6FgpF1Pqk52AzrSRq",
  "key3": "2QYtW31UThqHNYWrd9jDrxyYvEPDgHWh7jx1NajT58X4Eco3btwLQZP5i16oYSKenWkH6JeUNNmrj4Pf1fi5mZz1",
  "key4": "33o7D6swE379UkeXRNhyThUNVWJoooYqjWM1JvEJyzpVxsSDPpGH4jzs6obHDm4m8Zm3MgG5re12BJs6YWLczhZe",
  "key5": "xQ1SDXFqio3CQe4bTwTa8Ftez9eCv8jQvQH6KcbFwi21iToEP7F1yMEHmUgdrVWwQsz4jPwgj1B4AL4bEs5yrwV",
  "key6": "2Gmiy6zfmyifG5fdgAkqJ3bU2KAQpCvS371V6hj6MVryiExnxiRXNqLPw9fHkJFKiHebhCt2KLob93Fpj5N2WuoS",
  "key7": "32x5E1FvgEYnneZcA589Zx3SyuixjDXh4GcWB2phfYUnySLyxNJQnD6kEirmjk2VnHokCDcooi7wtC4G8zHUvrqJ",
  "key8": "Cv6aAKFGwHoxRP6d65eXsaCQhMYG6U3p1D4hrjy3Cx3gGLNSQWwwSjT5FYUtqbXDCfUwZ7HVEiwqXfvsFxznMHL",
  "key9": "4WMLhzpAHJJhfYpTnPgPqXCgLnTixaibMci2sbGZg8zNC9pUxuFJuRkFoh4wK6GhJw4U9Qgyq4WeVyquc5odbevA",
  "key10": "4xLRTeP7z83Sdrf8GPnrxPhVPWGVRP4Cd46zoXap8ZPQCgsGC9uHBBCzLqx2ejGgT55buSPrC366bA5k3XVoUKYR",
  "key11": "3wVt3uFdPGmVBc17AQN7eYfeW6wp4ymfQDu78NQ1noPyoUWwHEv3TDRaJJGwqAsnsFpMN5DjtTzsutjnPsWT5ojy",
  "key12": "59qQmWh5FCF2rPZs7qoP39pHk8jRacpanYfXDBdEPiyzhNH212GwZmn9dhs4vc1E41SSm2HfYo95dbzdUxh3jAzR",
  "key13": "QrJKNwFfmEWLN1T6N915WaR55gqr2PNCG1A3yXbEYZ2WXm2yvvq3LDD6K5UBWg2aY49qqaviamXW83z5AtkzWuX",
  "key14": "5dRLGU2Nzhw2MGao6ZoHMwH4SQjVxoBXkEaq3ssKbam2vrwU41okT3hwKz7Jvsdrgzdzbkrp5FDMSFrbMpaKXMZB",
  "key15": "5yHHkRvjDejF2fmoV1hWUQtcS2Y3U2CphTEiZVQeY8cpv67Av9nFCwJjMN6YC2LcSHhbLxzrnh2GNJAvA6NSbHu4",
  "key16": "3V9d7BMMrWEomNV7BUbwTWAnU3jj7Xj4hUuhMnGhH1vA2YbnpU5XBPdbYMg3yhE3MXAH23LBp3iQzuAwT4U6MZPp",
  "key17": "4yEAmbEtGZMKv4fVpUNkqb428vGwVT7VSMPdKbX8YibBt2zEiUESWGGPVQxFqS9suMKzZW7NVMPZ2kCtgcQvZJtB",
  "key18": "2E9U4TbjU2AFvLK6XxrshtVj2wPRHWkFH9nqPofFX1CExvBY7pf5ekRDspjegnkofXFqFBAcXezHcKn9pKKV7dmf",
  "key19": "4AuYseHE9HHmGZ6MNUYwYT1EroYBqh4FKz7TLh725pLinfVZ9jsBZnvJfrHhgg3D3XwbWq6rdjxj5yCxKG9XoS14",
  "key20": "3u2Gyh2wLe1ABNMwLfdwdDq6JTFwU1WiZi8USRXi9hz5qxVk5pd2DwVa95Yz9WyuMCC52cQSpaUXwCesgLQwgHbr",
  "key21": "4zk1uwzxq7KPFxdigH7F76QbzasWCFttpGJUzXxY534jmub9UfXpbe1AiMFTaf9hc2HEnFj1QPXpjDpp7kitTELD",
  "key22": "3pZAB6iRi8bQJD6LEEPf5dTijTyVBinw9TSU71HRmz5nt9CeHjF8LQ9bubur2GJaurJikjYdYY1gvCtoq2TncefY",
  "key23": "4ds9pdrefaeseLjvf46Qy1zrpEXpDrMe3Gqi29AcMKGgPxoZpLvt7a4x8QHgghHiMPmdtPDz7TB5NFeRHFE2h4cY",
  "key24": "2MLy6UKb2cN8iED26Jw3pV17E7Qi1KuAyCmjTwJUadRm1EYwXismCQd6cbKXwN2vGkDxPbDRV7ZCJ9dU6cTfcDYs",
  "key25": "5Strcyzdj16TrcMYda3VBUfCDT6wuGWFyzPpAeZCVoJeWsnabzwAFH5Syg7sZoC5iwFNTtXcQByAKkQschysRqv8"
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
