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
    "5J2S8WpeHzSzWDKpVCSoaQA9u7JUzYz1jYjm5EgYgEWG2KRkXsYcDTLGM4zLkkGJW1eLQwrKkXfVYLoo8Bezxxx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3skt6RbxUSYAKpxAfuiy3TRZKdMZGRygFdYxbTXWWFVBMo1wF6XyV8bKymJWjZCW1uKnj64hvJhrsfNz65siiiPa",
  "key1": "2L1yU3tncmhQ6HorGYFdzATicBWJx7mkVFbt8Q56BpgiMvbAaiXPb9QeAYCLXjCMfC3ev6xns8XGXtKZWxvRaS7d",
  "key2": "3MonRQEhifxhrZqFSeX4UYrmqNguTT76wXnbRah3U3mRC41KRWS2WWiUprLhpn2dGQxA9rvZGKxJ3gcZzVYkdSuq",
  "key3": "4bRnKcUEXnSbw7p8rnjFEQXKAYZdXYY7mJzy3wQx8gGo4cfqj1XBqv55k9kL2e9jhAVrG2VRm5ij8oeX6jAnzfYv",
  "key4": "49iCCGcL3ABgbueUMT8pr6LrjhioY1HEDobYn9wCyZWCAUZuwFLm3UZ5q8wzaTrxeg9eQqAUeQf1vN4khkbqS88M",
  "key5": "mrfYrK7PVidzJ6ZYLEBokmD4KfkTAshRXnY8octmMBxukfUrXe9qEMM23iMtRQNCqEjewmtK1Ui1c3Y1Wb4wuAW",
  "key6": "4Bzgo25tXD26Bjvf28ETfCD785yXatQ1fAH2BJjmrTMrvaauHWY4KNrN9ejxRQSMEstG8a5kv2Dd4HiLPmBrDsHm",
  "key7": "8AZy6FTRv2iqrR9dJbf7Kj6rJvxfZx35YvAEo8LNBQN9pTnsG9iNguVwbpUxaSyiHv4hcjD62rWcdmPJUuLvWHL",
  "key8": "5ZMnNokJrGnBPbBU1iXp8gAHh2VnjSTrsXS3Fv8EeXYD83c2JRWAK4pQATcWUjPu8Gyg8jjEpWg1awM7hbGSHxkc",
  "key9": "3vu7HGGaMAWaGJBW4DFE6aooTwKUDVkVJNd5G8UJQbPaTH9oBvRUvGe5yB3UvbUowvwiFRhJdgR9fCkA8dFKbuYC",
  "key10": "4a24JMGKJGM7GoiHMWmiWnq673rfZeoQiQtkKmgTNPHE314R4dT8p8FpDSBkiAsnHF8t3Gt45hfnE6QrxPPbLZTK",
  "key11": "44kbKzVfZ1FKvnkZgtjHMjWBD2AuYvbLp12SyPcagYepekX8oigAPvQXLxHdyeMEbvXAGPqjWi3aUmYjjWZNDtB",
  "key12": "2bR8BJmNRPVYANJJvGGuakCi21pkmr6GWveG6R3WabwdbC7D6ddF3R33GaKm7WdEsS3US24JqJkP2oezWv7UqQZs",
  "key13": "2PjQKjxgaBauf57qh5fWYvoCWwNi9U5qxshz7nWYkpwtqj6rvepJQHR15StPu2onKePyg1qrnCS1EjrqP7rsoebv",
  "key14": "2bzxz156gs1SbRvGn2k6usKRp7i9AcnmF871cjM5xprHRUKmGpaiBaaN6HJocw464gYB5Jk1yfm6Gh66S9UcRXuh",
  "key15": "5fPqcnqrHKZHrGkdxzXQ9KFMEpej7mLYn4oi7H4UTdwYwS5kDMFPK8WmLgsKnV3okBYszenPgMzCgiQ2FNL5EAua",
  "key16": "5HrEEUyDfUBNjKkiJrP7pchmBLkNg6GsvA4M9sg39oNQVJnnybopoxRmBbzU7MwjyS1rkpkZaJPn2sjnfNp2ksHB",
  "key17": "5z9iSxqSw6wxdTkvguSiRYFoh3q4T2mP5Fua1r62nDpvkRj3Sd5wQTDKMJyczQYcryu57VKf72xq9sxAh2o8v7ZF",
  "key18": "3zTEtaKTHCYsSk4HXTRU1ru4nphHTwRM26U4QVzqnmkFPELqktq2BbvUmef4BSNCmpPQFf66duxujDX4CcMygJWe",
  "key19": "3zHU8ATmc7Sqswj7KToUPbWQc7kikr33yT9jCo7R5hQxuETkuUrwhncNVJMpfVp4o7znuGemsrgYy7YVYRSyQaqZ",
  "key20": "4JZoou2c9SxXkwbo7awXT7DJydu6LR5A7fWvcmgCjCVWe4NnZRtdpDwEBXGw2Ad3PwrGF1323PASV5iypxM7xLff",
  "key21": "3qkqVnmWv41aZj2vQHgS2qnQDuHH9DiCWqQFLWqDy4vEatgTkUEiwBFb3f9w8yPv6xJ74UpQFJLnwN9sFV9rEkN6",
  "key22": "f5g5aDNBkKmkymQCME5sSBbEHXxG2cCZRnz7QqrfJAKHzCspYDCMQbPgJdsPpMDhCnmQDb3WdXe1N7z89rd2FUF",
  "key23": "5Sad8EChWPxgSpGJUfduSc8bjhbQp1xmrYJ31JNs1uyX7KVwhayg12fTfECSEywBF1a7iTeCaw94CCSnF5GyNQV5",
  "key24": "5Bm2w2FeSWdtZEY1G9hLuVbErHy7iopDw6UBZ6hiFifQAip8AYFgeiTjHqFveUKKNi4srz3DejispMtwvB7v1NkF",
  "key25": "3rSBYiXPt4db7JeqcmvZYQ2uLGH6A3CZzS8ThnJSwyypwoVV8pKFw35y5AJ73jwaHqPw1BVYFFj7Z61fwdxdPMS1",
  "key26": "JtQmbzwkFykW1WCnTSt5AUf8T3dP4sybzddodJzhYRPBVSJVPjrw2wZWECMLNUWhWjcdLDLC22dz6ihanoGq7cd",
  "key27": "66Xf6RezRquYWibmXCswdGTow2LSsffkziRdL61V2oDXg41ata7Xmd8RqFNzGGrNfw8PMvcaFGrfYWBUsFkWFsF1",
  "key28": "4XGGaHQ7Kd42XxdbK4FgkcwBQ1WVkWN4LD76UHmssGbw4NNbKRFTjGts2wCdRHK3eNeY6xYMaUn7NVroCU39TFL5"
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
