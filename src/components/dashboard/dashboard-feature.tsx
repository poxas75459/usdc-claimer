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
    "48GG5gCTgx7WHMDH1TQbbF5nR6riSfGShSfiDxktWpzu66y8mwxvbT76mAkqXm1o6tDBQ3jQnGGDmdX2db2VDJBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aeYkDGAJZoyUx69CZUDYFY92NwCcnMCDrw4qf1Jn5vCNeEUpNfzzy8LHHk4HXVFqgpMY7L3JsMgsrWRoimZYjZU",
  "key1": "5yQkRoWB33Lm7x5Er5WVkHq42rmY7RJ44mPzmonY33Uafvy8etZPXfcSjSyXrhfB2fJW9L2U4zJWuPeRYsnHYTjd",
  "key2": "61kTyEDXjbWZ6pc5B1BW466Gu3c9jAVP8daKoYvAHzhBj8edhb48UwL7NveaF7cMXA8d9hPfns7PpeRA9qmRGEEv",
  "key3": "57YbyMWkiZ9XQNEo2aZpP9sRauZsxaEjjYZwUfNqfQkuUXAWC7VaS3o2Z1VRUx1BZjek3TkQLcCUfLmMP4t6Vfjj",
  "key4": "4HHRJ3YhqosHuB67bHoQXXH7d7VYZ85H6ysNGPQrgK2sKiQwTPjdfjYPFue2o5vvSmqqbW1kQyp5K8w1WvekMipr",
  "key5": "2fo17eN28Z3S3cf6XyhFbA8QiGpszDJmuiMTeHrb7wihLRkVRWDmkbHYjTp8fnFX9uET4Av3SoZn6H4FySFpD2tu",
  "key6": "4VdPQViBKg7PkeTG8sYV7uadPmn6ZCe514cMFV9nSUzf9HdExzw5tcpGSjytoWx3F5HKn23cywdkgJRhZyQBHLGd",
  "key7": "2PiNuQhnppkayUwzdvJp47bM7TdxPq8CthsWrggVuynj3J1SoHj1ZRCo1KvqZBVvHHS5f8pBxwcCWh3JbhrifJee",
  "key8": "5UMYm2Dt5PNcX2bJB7NF4o5GhRbRUbV29Xq2KVavihVPdsnL4ZYd97yM62GPxeJ3VzzMaBCBoCsHMjRyQqD8kTJq",
  "key9": "5PKAi32TWtgKU9q5Wi7TY3asnnMDP9N3GJ1sQNyfNx5rc9otRCQrAaGy8BcXeCYth8kWT1nG1tk8AsiLfZNW4mSh",
  "key10": "523xjoF9U5Yvh5asvS4KHbij7LA1sUmNg3VG9fwZPefoJick2KzwiKa1s2rSqG8hdNVvm9PDvuTCTmMZKnz3esN4",
  "key11": "2Csx6kGCZUs2B1U8SYEpXULafqGsub2saFcxJrVgVymbqTrNU99aHNcnosVWmHJFRnzjhAZtQknEu5H89kkS9zDS",
  "key12": "3jPKzUv9avJxkkBe7Zqf3spXRFTQSwsyPZSRWWQiPdJe2JXnxySEitFg6JWCwTKch1Uo1gbyafSXU19YKK6kUkVM",
  "key13": "5kwzK5FwuiLKtquLh1YEmG3CtY3rCWVkcCKu1c7rFvJEoKt4SxCvrjjHa5FzV9JUSMzLrX3kYAts1AsMykhG771F",
  "key14": "4t5qPsq7byuDhr86zA8BPRFTbnTjosNin2rNQzoUBZyygNozayPXZLbR4KKp5kDT9Q86Hr8jriFDwLBBYb5zqPit",
  "key15": "4jj1dLLU1meMc2MMAL82fbdjf21rWk4eAkBYGsYjbfYgjidZzsqSHdRc7NS6LbaZnLRxkEVxieGCLoFjjUk1JRZo",
  "key16": "jmKLYqHwrdg31GFpu1u8rdCPBrvw5sUmRtHvsF6fnBCx8jhyRge8BhHpktdyyYSPYujoyhT25sv8b6CcD9BUkV3",
  "key17": "3MsKZ1KQGrw3SdWceBut1en2mqJcQKcURWxrXBp3WSFGmmhx7MnPcjRGBYZovHBPRtMvH4FqH73Qo9TtzKLF3i2x",
  "key18": "3JhCQuCKiz9KUP3EPbye3wDdbFVnPt5GfnfLf1vxi3shWGjyw31wUpVSbKABqwzMqEs9UC61BMNsnfRL2Rh9fCNa",
  "key19": "4mW2ffLx5uN3qW3a5uRJ8PF9cgh8JhrUeKndx1a3pmKxgBMPva41CiM3bp26VqBiaHxDsHhwnz5U2kEUnqwXHZ5T",
  "key20": "39AoV61Mq1JHcfwbFvzGToaAvssCYrsX6M8jDT34ncLTSuQvUh1x73ayubZYj4LhMh8fqvByJufceDiA5ijUmnLF",
  "key21": "VVQYBntcimRcK1g96nu1LbK5La1k5SuEP8RJZqRuqMH4qWYHW1WknFXLtXuTnoTbfWHJ964dyFqcbtSvEiKRMQB",
  "key22": "2e39Lu4TYTnmnrpyqsanRz5U866hD7cgzsZ9eKGWTs4QwCX1M4vevMFwq7tdG9NAedumWe1gGX6NfHRqqA351XRh",
  "key23": "27TZgKEGzBuifb6zngXv8YEwwCgZDpdTC37u6sVTJds73viZ9YyJ93Z58igijYCEknYe6VcjbWuZZyHkCMvVr2Bc",
  "key24": "t9EHK1cM8R8jGMxW9fTBLZEmdyQaa9Y1tPHbWA6YEBDnnQnD2hyCcmS9mgiKLh54jNUYHp21St4ZuVUrXzmvPra"
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
