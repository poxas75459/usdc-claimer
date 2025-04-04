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
    "2nURxdgHj8sfJMqnaWX2MDQz4nZFmKEKgkSqWau5GxcoqT6aRwUaAaxwN15SDyc9JGRGXumwAsRf6GHFRjDEmZQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bv1kjhUm1Ux9XVjjgdYw34J1Lty5b5tS7TLfQPKr6344Biwt5YYSmuA61kDearmb95BjUFRWw9aGva6chXcErCN",
  "key1": "KxBpyXnzEXYKX4uwYAYp1o74ifRHRYV8kWrf3Q4xzBeUwsJ2qsudrbEpNFYpGMNUF2X4ukovDmFzikrjoNVvax3",
  "key2": "3LLo7m3PdPzRUesL67kLsoAyJsz9DVDaGbkq6UD7hazebYk6PvoVy65YooAmXxR9E9xnUtRFmsDdDYDT2psvq1Fo",
  "key3": "2VNtugauJ19pKAhL1zz4YyuxmHgiZEij6ReKMJ1VkRNL68kUzpv91d25AQvJUQae3LjxSBRSWETDBpNNFhVdXx6t",
  "key4": "2ShUGZb7Udguhe86wqNJjWyn7vQrHMVK3Hf5J8mTtTkJzADJTQ2Ge5rfjdBmCzCVwkNeyEnduvSMv6Snanr8wPWu",
  "key5": "5WWpE6DuysaNzkeJ75ePi2vp5RB1GG4r4tGX6vFwxUXiQFz9aQwoaH89G6Fq4zh7M2SiF1N5pgMiMj9iRpEZco5N",
  "key6": "7pwPsdXZ6weU5VKKU1d5kt1iSCMzCpQevWdx64ETTncSSf9z8UKQHpVwyxgYQHwhKeAKWtNwRWmSxLM6aZG1eUv",
  "key7": "h4WLH5cWb8w4DT7BJtxazeLuCMeE5oY35g5azHw2bwPRoLS7fQUJa9yWBWt3fWChbeZFHX4Y68VtHEKQuxXWRG6",
  "key8": "2K6C8tD1MN242TPKYPdN3S4G77se11K6GKoQj9by5KEJVveGAVs6RSM16KFLo3cDnc9qExguGFW6hq9B6FVhuZQp",
  "key9": "2eRbQrm8xSyBS5TgJfMfDFRaijuhR2V1XNfh11z2u2fGvjMz84kE7BrskEHQXc5xG22tAQV6taFeGpHiTvWwHas9",
  "key10": "3tic4ZTvnGFm6rjyd948U5DMkreMZuxuxkD8kAv7hSLMFbsgRuFH6vAKsUPKLLgq577bJFvtfrK9DxpEc8j5Q4NR",
  "key11": "2uL5MXpzjh8HEzpuk47drJCDfRpYJimoM2m5UA6Tuc8A74nrcfp5P4PCcrt322EzM3VQUfCRjgXgnNCRiJ7QRdSy",
  "key12": "36HJVvuYtweAhWLJnWsykGXa6sEubL7aNVg5kH94D1pE7UbBRxU8GcPvoeX4U6bSDwsyC2rKXhhjFNM9nKo7MsWf",
  "key13": "px13dM4EC5nDUPwSEBWACn88EKSG8izpzG4cgBquzatHnQ4kw3rhETgrXS7dyQkrY8Cdsn6YtxKPpB4ZHD2QkWu",
  "key14": "4FDRWCCYd2a639Y7j3THsanSQPm71zyQtBEuY7prKY6oTJtjWt3srwhM2KEVyKLya8reLPuXaQ3BYCg4kovRoSwN",
  "key15": "2uBoAgJFEtmASRvH5C4hxCnRGNeqgeqwehuc7iWVQBznQhBikG5STV5aAhV31MBcTgFcop4CA1CvLEcN9znXHBdM",
  "key16": "65J7JU1WeBxmqfr7pAg5nkHQJZbMRsEXVkVg3mByNJeKRMW3yE75dfF2byhnwmtBt56q9azAfV6LTQBb49SXo5EB",
  "key17": "3jJ2z1edrxqMfMFYeGebMBRU8VMg2fabwCkgBVZpYPmRvvjU2V87rAqwmFhkPFt1JsS4HC7XqbKFudSZMSaj9Ln5",
  "key18": "5ECwTHrpepvgnjbkfxxhmKbz1wwMtborq9tJ5N38Tq49cTq1UiLjyjiCBF6mfYejzB68ot6jVqQdj9wVpQ2xSYzV",
  "key19": "2QYYeCF7y6StMRc1xnzTTr8pSjcGDQYpwBceWKNFGj2WnctAj71Kw9BKXMA9W53YRwpEvy26UwgtKBS97iy695T1",
  "key20": "2Q3ersV8R5YEA9HpWoFBPgFU6gsWeeYAuUaHB8gG4hMLiW2QmhSfA7KG4S2BUUGhpJQpGSiDGs2N8YVQJNmdVNeR",
  "key21": "2Mw3TQy4D38utz8BdWbjUVLNNv8VdaeDsHe4GNYquM3hYf8kQuA27M3uMp3WFrywe19MXSiWtkfNoe43vqLv2f3f",
  "key22": "5s7knofrT6GXPHpndEs6s4ckdtuztyUXXcnERGTBXg222c1NsjhvgLSh2iXEgpr5yaiJEmBNs1vYf3qr4iutdPqb",
  "key23": "HuU36okiFwaHU58tNyhW3uB7AVgA1kcpvJqSaAGoYAC5FEt8yac3De3BaBPYUpoZ8cJmErA1e7az2QDseqpjXKY",
  "key24": "2U42ihEHAAdDydC7djGhB6obDLnD7a4XsBS2JXPbjCAfqsyEFxzAAGRi8zJkTjDi5yAK5sKFob6G36DxETbsftWz",
  "key25": "5ReFoerYgVR4vX5Ee1e88x4itbM6RvCUPWBXC9P9smPhKVtLkris95SQjXU9ASXbnVdSq5oHvrc9FxcikxzLAUeC",
  "key26": "21uuWXLiXuaUpu18YfHm7zx8HtGYYjFMG7jzLfFY587kgPXskPVW147LZSHt5JZd58my2dERiPBYiVRo2byMDyRm",
  "key27": "XVwbJaUw2HmqeRKBvNQemV4rMuSzsrGvnH6Q1ZAy28MViWjEXNL1zpvZDyUWCv3KzB2qsd8V4aYAZufP9fY65iC",
  "key28": "575547SD5ri6NiMRfvThN8aKZxE8aRm4UFCkHvzgeWg8j3z5FYC7zVfhqCEgYNAaVZUseN2Mooqds91SPozob1p7"
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
