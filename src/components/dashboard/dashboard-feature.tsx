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
    "28LDYcK2SPueKMTDfMsTn2ZAQaFaVxpXdSEgwiSL8RjuAG7m4oexu5hFG8HMXqBhXE9HCvE5GXQ5qv7CVQuzPdGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w3ngmnM4b2H9Cgnfuka9NKZaEjBQmVJjDAkAAQvmfYsoJijY1ya7dFuYER4pGsbsUFLfuu8UBvqYg4XRAwAHpqF",
  "key1": "491RoxfqX4c1GMfnQ8SMy8cQHdgFQDY9KvHcPVMSGkt3otaBN2yjnALGZnoRKfVzk7DWWzo4xJAL1nXPttdLYFrZ",
  "key2": "3NHsbKwk89UpJFvexayReoFzQBJFzpq4mEJDrqKnsqC2Au1dspRniQ4Jq7uqYTs56V2tCYti6PWHU1d5YfGj2zrT",
  "key3": "2e8fV5WL2Mi6ESjzkgXVW7QTLsU5hPjfZCBMuyVveZDHD8wjAH1VsHNyH6LqM13c5bNKMdL4ik9YxQNC7XQaZvDW",
  "key4": "3wz22uhCpqqjJmPt1qjcWvA97awo8r8gVGZmdxMZweY4Gbe7RmU43ajnSNWLmfu2PmVw2Pep9LfDeqUMyMd2vWRD",
  "key5": "PENdgZHChmKFg1p8PbpaSdiMsZRxwtsmcFZMPdVzymJi56s7WdaszEjBCYN3YQFWoVCtAPyRC5uHR5TY4MDBT5D",
  "key6": "3n7kizKLzXJMSShvJ8qtufr1b2YQYteaeXD9Uxyhqox8RaKYLA5KeVALdNtXsuFefeHhPXX6JpkDZi7HA39u6ncc",
  "key7": "3rMpMGGwMecSoc7c41x3zuqVzBKP6GcnRfm2igLPdgko1jZviQucmLRLMRTEYn9niWFuYrD26dDUTMZuhKSEeBgL",
  "key8": "HJ5xpRsNxuFVx8cbFrBdn6Ufor1iJAVuw1geWr5wNBo4tSqsr2XRrvHiAYd8SfzvAVnxKsrFbTPH81QZoTrV73J",
  "key9": "4ZA7wKN3qR6JrYRPPrz9WAXLwApRoDBA7u2kjyYSqmKCQ9NK2W3Q1YBCaMY3EgjuGxwCmiefyr7KYTwMQj97ztf6",
  "key10": "3iqj3zr5hrBVevy1JAczEEYQTJuEJg7pghRt52JuEhseuptAVvqSQeepqYqtMoMV8nkxKLU5aGjM341DdcaDU3Q6",
  "key11": "2voQoxKZF2SJovJLk1ePmBCD2mwstBtQmmfank5m1bS75scsYqKPA4didcJZkbvwRT5T4ATbN6JLyFeyPDxHtPTQ",
  "key12": "3Nu3kKjpQMZSGchHvUNmKFCcaszHGVj6xi6VMosK61jhwTTQLwuMRjzejDWVK9JTfKk9oJu7jiSkAdndLajNUw4E",
  "key13": "3ziVVx4M4cae5t8i5ve6Pvye4Zn9rJD31iqFqfxk9Ph57ukYEMRXdwytZvN1bB2ogFVyQ9GEAvkJE675iWCQaVBH",
  "key14": "2A26f5SqwWvHG2YQaMYBgRUoEHV7BZ6N5rgKmLkmtSDvc2ccFurRwiVd7WeKFkm7XzjQye3GfwHrqYxZ8pscPGnA",
  "key15": "4uKpQ48kRLha5fWXY8RR2YMF53KAwUVa4hHid328YycZL3DAiY9519SQsGbA4yJK3Ln74gmJoYBRtKqofoiEWg3f",
  "key16": "k65GnWxSn9ekM8awZ1d7qcQmNYVbc74gFQmWieoav1iABVSguHbb5HJSHqmZCqM3FUXUdME3hNWR5WTz1s1AB3Y",
  "key17": "23neXL5Xw3oqP6fbLmi3hLHbn4iHFSkxdtSH6gXnh6bdEitsXZW5rmuFDVp5H8hW4tRxyYggs1cttGGc57Qf1d4n",
  "key18": "5ds4ytH4Kx96Me9HL3SLiNx17XVsvgon62XfEH6q8q7pR6s4PYU9vLxeLH6WB2Kb5VX1TnhhFtSbuTm3TLtk7HC7",
  "key19": "36tAuvrVQnqFRmyQ32JG3jfeSmZZ52Ymj7LQCZ3ta6RiGcAaJJsnvUPSQnS5rxbQyB8ZnTT6a8NKi8wudjFN2zBi",
  "key20": "2znEZRUvFYXgGLPXsePQd94wTXfsENgXjiRjbKEd7RSEJctEeEtyQi1uQec5EgGMgcCYNhABpVrhf75RHSu1ocKS",
  "key21": "38S65vRYELFxKqcQjwggsgRuAwHkWXUuq2rLF2s9NRJT7NzJVBqF7rf5kyZL8CKd7AB51fqY3VJbWFQH6ogTu3ys",
  "key22": "4CCR4bn95aXzP7okoqgnGy3gEvLexm4tMK4YnbFkKgQ8ZmRvkxmDtGUCKR7GARHoj6cgsFpQmFGEVdTbBFMab8uJ",
  "key23": "63Z4fatpRcq82YkWKdeA2z4v76Qu8kt3pMsxQtYeYgCFS25HQ1LwVgfT8UNhZjPwRSLFMFbSmVhigEDvEZ7RjJCc",
  "key24": "2UMCKKoYeRVGk1J3u4qPt8dR8wr9Rz1Qb17q2DWo9odMC7SEhhrZo9MMi6Gn3dX1M9vnGQEJFemzcA5oMC42yPB1",
  "key25": "55ch6peQz1xYX4mPbqZMX4yD3KQkBsniYPHRrmrJ6fwtSFWdVbdcUpGvscYTy4k2TCkh1RaNoCD3KsTS3vBbTA1V"
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
