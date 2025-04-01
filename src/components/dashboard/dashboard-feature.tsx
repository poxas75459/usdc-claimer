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
    "H7CAnrgThzGJYiTwLLPFxQdHpa3Skenwvenk6TA2pzuUGqoJjDFHQPzBXz3rYaetSuQpuY2HyAkCT5i2wsRu3Yo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S7qAmr3cBvfw1EMNP9hfYuFyuzGvkNXaZEnW6rETkCEwGNUgf9eai3tG4aJqNspegCbpmDCZSzYW7vByssq1iRS",
  "key1": "3ygBjHzqe1vviqJWpuU4udmMzwudkiyG99wwmLtbyYYmN5BCZyDc6oZnMJkxGaxtjQsmJRUh4RW7qcfe28HQc238",
  "key2": "5C8rXDenbYsLrMm3zcLPx6MU3EYCQqH43R9yKufApKpXJ6Xi4ytA6f3SULGMGPseCF5Tpo8EKsaFEp3nSuzAsHug",
  "key3": "3zJuwfW1Depr4XFFE9D1Qy4rKZTVq4i9w1W9HPwoiJHCfVbbdstA7F2jSQxjfHQH7Y73z8Torqpe7fmgvCcvfeA6",
  "key4": "636p6nxkqeL8M1papP31Kwd1e4xxun6tTs1ahcFXNcu9HDQ6QkqFT4iCisgc5Fo4RAZzDkw5PduwPwEYssN934vY",
  "key5": "3XZdPyUQvcqj4UUtWLMaLAgDYP257qzR14Nq5kAbLSLmNtcZceDHXX8djs7fkwFxMXFmw9NNtFeavR1YiNWmD7Bp",
  "key6": "2at2c8ymVJcCUe9YP6LzAnEUssK2Z2KPm4VPYD3CdzwMmXRmK45zYf3K5iPEyAbdMXcC7LpiAjzSfPVNw83aR53M",
  "key7": "41Eayb2LrukosBm5f5uTFyjnQpxoqk6WU1EBLgWVeg2Zf1wwyyTZ4kcddL6THohhPyuf2u5VWe3ePJBpwGFAe9t2",
  "key8": "4yL3XXkhbEk2gdmFKXkVdRj7QcNE6m8g6voJ6WWfqcR2y4rTJ84mvUooYA5u18PvkGeHTV1HrcB9B9uKfstpKjgk",
  "key9": "vuXEWw4m8gVVTLXafkWR1bwiFAip3QLWN9kHm2p2kZDhCCdSYeES1VsEQQR9BnxnZ4R3KWADAHFV6RPwTNnyXwK",
  "key10": "2GqajpPjAYki3SSeCBknh9aEwUiffrNchHRpaBhpWMXprfeogvhGD4nMPsV29bwCQS9B2Py7sfCEBtjSLh4CLD1R",
  "key11": "adDuiS7rB4VuY3VpiHcifXznTeKgmtqNv2BXw3aXvnMsenW2LvdmDSgtkJa1MmiCgcC4iqk2Vi7RhkK1QkRSQ3v",
  "key12": "4kgr8zoB3WCCWmET67rdCTkZjXTS3kBwMsowMTsjDwFH3rBz9hSpbA2WpM2NfBnH8G4sezZvmfaYZ1AFinnQCJsT",
  "key13": "66k64Qw5P5MkSSC1bAZ93cFfpy7YrNikCcL6WtgxuDraCpveeaavYTPYxoQ7upQ4fqZoJg5LyYbpq363Xhrqz43A",
  "key14": "H2J6eTMZtFLESi9ZBxZhebb7J41kmq1sWD72hSWtGp5L1WqESUCKUddxeetbDrSbfi1DvfmZQxtbvS6KGyKEmcP",
  "key15": "5BHQL6z5aH5zbpMN3XQXWRSq8hSqZBP2CxDwaiV92bVh2gM4Eb5jk9sGpT8zyQotrQfHawLMotrzrLpWoHVCEaDu",
  "key16": "hDydi5xHuNMG5hc4qVWpgTEj7nNzfxQWhVvxNJRhU461sVY53bD1iTx5VQaa16y8vmKe5LwKuoA4FCNrp6nkS1p",
  "key17": "5CiUoiCqjfPovn7pGjtaLUgJUotmXmvbQnbQUWXipoeS2fVUDsLbkmksfVoeUWSuFYwA8M6FEUv5zdgxomk4pxoW",
  "key18": "5RBkLWPiHEknpdq1ewGBtd3giV2rQ6kMQHRLgbhhucqPs4eo1sZnTLs717j52WrQEjdX2DVsb4PZ4Ha1CLEcAqu8",
  "key19": "2Yfd7MuqdCCkXUDTvrS1DMVpGKpXTc6B2ecEfqW5vTav2ZqC5G1L19YBvCvByL6m74YSgUD45sJfTUFtEzM4t8Wf",
  "key20": "j1ZpEPefzFQsxBnMTW2L9GK2XGTDNDQp8iMXss51ZEVFn1aEwiQeWtGY8q6KcNE16EMURjigxZ55dEZcQR1HKfL",
  "key21": "2e2iNAzkT7XiGm7yPnAFaNsZatwYosZRniFqXuK1UbxBTWYGXNAdtM2iWxaAsuziAtwJuxb2mqRXLDX3oMh1R6me",
  "key22": "4B34S3sooZw9a1CJFTMRmzUvTU7waZedJvj79RjyFpe1edvKR3jSsByju7jfDx9bHKTxLWtAs3BJRjZ4uJ6xCJEj",
  "key23": "3hxkBurvVCaUSY5gm4whTRpfw3xv6WySNqunuaGT86DJ7mq9PdQk3pyp5nLG1PAtdECK27D1jfFUbm5XYomhkmNf",
  "key24": "59ZdosPkiUvJQjZy1Vg7G4zvJEt4CU27rWqbwM1BHpr6d3bhzHM8iQonngktfP5P5pp8brDYb3hpXPQWcmaLnNv3",
  "key25": "63XoqkgM9jFoKyx8NPvndAt2JfagrGPvvRNQj3qY3CGefFR3sWRrM8GGEyZcZcUKm9XZ6EXiBLBXaKkdxE1n5WBE",
  "key26": "PgbTVfKAELJsbgJC93gEUBsZoi71WQWn44MBRuVAMcEYwWuDQv2p6VvcMdUCgiwF6iZdwHBcwYM8cHWrRmfdvcy",
  "key27": "2Tpx7sRxBXyihTAdysrxKa9VWUtfQyJesYvZkbhi8EoyGmdihZYGSCokFzZRcfFwmcqf1UoYNugkBUtgPpCuZy21",
  "key28": "uVvsGR7UX1i6MhJnnwd6i32h21kxGhEevsB9XiwfQKrCgJv5G8inX4b41V6Ai8Df13ehE8SLfWKJqz5nrSi15ic",
  "key29": "5GbkkHeDuojtZh2SVqKHarH6ASXnLsspsyaCwQAenHHn2Ne1nZ7wZfqtDkv3ZBKFeF5MdCwwZRoigqNXPH76y3pj",
  "key30": "2UMneSRh6qJNuuTCuDPgvvdRmz4mE46wDn9rsLEoZRpcxKACdV8WQ1L14PeBwaaUBWf1zympMo4rgAE2dsgXEoV3",
  "key31": "2rnMfBjcMJyngHSknr9GoA33DERPaVoipvmayEiQrvXvXuR7JHBgPhwzCma79FkbLJKNAAWsskCw1Pgx87W4g71F",
  "key32": "5PUHYQi2YP9w7xvEjn8SdmUsoyKVYcY7DrA6hjWVwWf3GzzpDUfoAMLP4BPn1oHHD8dGCKuxdcPRfweT37N91mJ6",
  "key33": "4oBU7vdsg3VDd5y4TsPcNpLaCfUSB2f1KPVkftnT25BnLf5QWttYadcXwH545anxWmzE6YhfmWdtgyvf9ctQwVRb"
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
