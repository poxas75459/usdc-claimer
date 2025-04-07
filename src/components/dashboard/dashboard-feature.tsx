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
    "62LUsJytTvwTKwM1J4Di6v97ju48srk2wE6uJaJ1ivyWGeobd2feLRSVDkz9o2XbJ1spdu6SigWgBhSstwZBJbxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zgf3vuxWx6VszD4sVVBXEzREdBjpZdQVKC4dm926h6wgc5s5aAyEBMmuh4Y7yicF4Q9CXF9i4tqTv3FQD7SQrAV",
  "key1": "5QhZMd2A2TVHByXKSNWKnJDTHbxazqxLBmkykesLFNAhMc47mzWHVKWzhTnXfdf9TPs4M1T36xxwFgWqBQWtxap1",
  "key2": "2C71JCe62mTZrEZQFX1GP8BL1NXThiRsgF3a4Rhb3QzztdKeG63NGSNbKjwMHx9f5HQuvkE8cTng5HCfwkJXkKMH",
  "key3": "3ZZzubLzSnBmG4R95FdMHHXjkavj6zvCKwxdLJRN2sd8rPnEBX38WVb4wSsNgxnys4RjT53jd2ZBhuf1xzniEbkb",
  "key4": "56iLCwS9stMseZGViCAETAj1WrgMAvJW7ofqiFRqrfunMXdVMXe4yzWrAhTB61oUPZmaWGAJrRnqqXjN3ictpLL6",
  "key5": "3eWHU5jNwMTQ4bUrbuypXnBQ6kbHz5ntePBgrkipj5tMjTUrCf92HAUUS5teEdt7SK6vcFYDw4RUKdruxfv3bmwB",
  "key6": "51KP6jB96DCzuQUUNhUZn3xVBhhbNZGueUa6KxMCPUM9hNjYQ2ajgcGyqU3ob9TDs9LWn1gABj88QPPgtpMgZfUT",
  "key7": "5rwozyN3R8PBUXJ7uYCX4ACqKEHqQ6KUhTUtEHMrhrf6pL2kyexmgmV2PfJegfwrS4JqKmMrUagYhS2kYfiqkvzD",
  "key8": "2GDQL2HwFUn6eJFvSB3Aps1wnotdBBx52mgB9zZmAkn2sb336ipFDtjAqTXYqJYsXUo7ysnKdX9SoWP26xPd5nk2",
  "key9": "2FV8DVQdLoCL7padPCCzJyD25YjMkzYxMMjnKCgacmpayKVdrDvKnmB6QpU2fk9HZrCkTLWq3tLHeiKdMAASigWQ",
  "key10": "3fq15XZLo216gtTCBvmmZD31tFbsYWAmpqUaY9Ka6pDQXNv2dQzXpjnojdkbH2gRaS6DEE5gUfCTR5pdvvjVGp5E",
  "key11": "2CH5jFrm1vbTWqU1J5mEMAR3KQR13R8JyEwba4zBQK4Z43PxQAspuUJqeJ9cocv4PHxocvyuMcsw3w8NheuUTHuW",
  "key12": "SEAp8y8PwMg4175KT7yALuPfcGo5CPfa2nxnymjtPVUZceqTbZgL8gW9zNhLGvksK7DkNDxyVxrxAU2eZ5sS8mZ",
  "key13": "2k9A8L4K54Jj5oVRCHuSFLJW68z6sEbZyq7osLxJPUtTgB3s71k7NVRrP1QiCaG4pmQkQuHnnT851MqxkcPAcQKc",
  "key14": "raqCA6uLh24BJaxXjJWNMUn2BrJA1JXY1Q9uLzHKFisdLrw4Ab5yn6V11LRUoASN3g2SE24oSuPKjpUskupdwad",
  "key15": "4SUw5J6jaHVRUnByiK9BX4E5Atwp8vAyUMzUmJARVSacTpo1oRRwqStSfbTQXMj72M6a5V7NsN3afyxgFAX9sPgc",
  "key16": "4GEmQHmTDngCgqdWmxTqDjZQycN5CrPTcBrLMvcmJgUPdnmabenpiYrQ1T1RWXBYD58zY9tZbqDf5sTWt3n17xPs",
  "key17": "3Y1LdpvmSQqzHMxBTfm8hqGAht5zowq4gFTWDBDYgcwRpvvtYGnT6fTufSsx1CkxtMErPVodK7KzZnshZ7msXQMB",
  "key18": "4hNyMFTwiZdYeCj1t5GGECZ5GfFSiCCKEhjevT3TkXjNSE4j4DgH5Xz87EDaBvtRPB8MVtAnWw2zPCFjpMPvsRKX",
  "key19": "2Y1RA7tQHKTZ6hPG7wTSHhDCCe9sngENkCRquCLQ7GuvG3cHUFp8HJh4t7UZ3nVowLtB141ZuKryYgVrgrkRNXiv",
  "key20": "61Jd5WUGBCcyYZo8HGKSRYvvuye9D2qcZVi9ixnB7YegtMpScL4Gcwr7nVrSnbn4aSypnne5K1TsxrxvskHcxJcF",
  "key21": "5aqubeDN2aAvJPfkHdPWYMuRMzbE2Ci48T1ZFYt4c5BLyQqqr1iRZy84W2wkbx6RuyEwXQthi4ee7h16nbcZaDsj",
  "key22": "9AAKYDqttFkmUiTCTTNsfPR7J3r81MN3Ncw9CTpKq8LrU5ohJEBnpmeUyUqyJ2w7vxpoVQq5tMXNMKHQRuhZWMr",
  "key23": "ytVSedjnaH7Ko7PwasCur4K3BM4vHUr69AjdfvpuhCwbz6AvVgt5GaJbNwPQxqaBEmGzPZzzw8upWmnv1MPTRX2",
  "key24": "6SJA9MycoBPXKFUVzvcQfZcfVgMstjQsoP1si7rZt2Crh2cJ5ypavccG7RGpF4YLn4LsKKYTdBanmESuiLGDRKS",
  "key25": "3zYjZLdutsXoNbAUaW1XbckUvApNz5aQjTmeSDwB6HyQfJgEc7pV1aaC5dZM2hpdRzqVt8ZqDPoPnxDiL3tPPyYc"
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
