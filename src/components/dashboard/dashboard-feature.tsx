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
    "KWicC1G6onQ5ur4aBxHRKburdzmFe7gPmevKZG3WJhDn5TfqqLXW6ac7ehCShowDsTLSzXd5YHUPG2JmKJBPtSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ppFqkVBxfy5MAphqmwRuzM8sSUtt31G2bKPQRq8g4xYteg2NcL6K97q8vh3eB3XyLxN5XeTi3p8zsMRfgZUCFUY",
  "key1": "kT1TH2i2iqgP1nHD15riwHDCazFwCJffLZzS5udPUXnM1AbvuFhgCZ1cuqrC4xPvR5QbsEnmTDu9sQgAVHQa4hf",
  "key2": "2Dq6vo9Rtr3BNJYda3D21qnW46Wzrp5wadyax5YAFrGqL39oWNAduYutE9WCVdYUFBgAYcpHAB1EZbBxKDQ7Skio",
  "key3": "5DMnRTWXudDNybsKCiVSKeNQi8mnt1cyz8q4RRMuAMRtHw9v8tXz8S2rjpKSFce57QHY9h1eznCTrREAivHDFaDe",
  "key4": "dRy6RRXy8nhCg357rrkhmegzF1HYrLHHHyoZVVDGxzvVJrecmh3myxg6SmTgGCdBvssHLkLHcc84mKMcijB7kmJ",
  "key5": "3QtpsGQ3JcdpYU4KsEshrXCrP1dis98BZdk33TavMZLxmVGyHq7JuKYrHnHEEtTViJD1hweV1NqU2kWkBKwart2u",
  "key6": "ixPVzrBdpCys3mSWfpiNVZ9vjJdquQofd2MDtadsGdHsF4UbP4J4h1nKqd6oHosBaKmAFqPLZifTVVa3BYBkMys",
  "key7": "BqBXcndH4DjaD31b29vmtfcZ4DNvAcvch294duGWqPgYvLgUQyMKtf7P4PWDQsjizog3PN2Pf3TGuMzBHLbHD2a",
  "key8": "2GdNfDHJYzK1Dz9j7UVa1EMbZHcnAca9kqm1ae5Pw7WVUiQJKt4E3fNkLd7pNFfX5ZTgPEwb2ub492sGQszApH4e",
  "key9": "4EXsaPcnN7wWVDrUZa4R2LrHSqeXAvf4K8sXvUqHVLsjUnFVcir6Z3bWMrgBbeXcn2Q3YiDWHymKxxZUqLUQy116",
  "key10": "5vggBjeZJrWDT6QXGpApjvzD4Cb46FJbzZVPg4TgYZeC4Y2RJShr8PmfBxsd4fJX8B3q5mVEpmMpjkzRH5zQ7dJ6",
  "key11": "3iyz9D2FqMuX5SELpWTEGdZTKEnP4x8XPCRxtGNqDsH8tXro2w6GStgzvtU6boNWpvqJuVjA91Pt38UVxkk86SCa",
  "key12": "2o6Q1gHd4hPrckgJ3YVVHCrtvGV7tkZEJxvj9cSFgcnP3KMvucwKjZo74ybpgCtefBoG7JG8CCAwCb7NzsywhcgY",
  "key13": "2xqguYJ27ixgxk9tBe8eji1gTUo1qsz7EREs4bcLLo4MJCXQjQVmrC1ALSG1EKa6NwG4qzB14iCztAGot44NPJSE",
  "key14": "4Uh4Jb8UuKmfZnypAzdMRpEUVPYmetQRprBfxgWVebjNHQnXPvse2H7ZE84EQyyPvv44QfqgLLjGvHk6V2d7sgKo",
  "key15": "4Aps2W49DUNKCGa7AAxNrLfMY6JtiAuY2ZTGxG5J4VX7SSj5gVg91vRB1ACS4tysWUQ5RVQ6VhWQMrE68ssZh4DL",
  "key16": "2cxZHNZzh7nGekSYGuXkhw89UFbXckGQBfoYkMEyYjridzSBCEyuYVdhhWgC5PP9ADAmt9YNMSTdcDhRqLzn9HrV",
  "key17": "49JL6u5fWbH2NMaQdwKhKCBd2fQmfNDdCYrDDcgzbghGLa925MR2ASkUryTzvyLya1MQ7nNQMExjcwjpCtuLqhxo",
  "key18": "5oui3p2S1qRBrUxBxGqKtnLeqhFc3DSi1U8Z8RhWyRiXztJsWRnRBa3BTQCuPJSRb8vD37v5EaJ693nrqxKzEVcZ",
  "key19": "5fv86uk7NhgB1vsHGXNgJMgQWbG3ZFiwReQUopCnaURN8Gw5uD7FSuUzeEeUdFWXsvG4BuwigpA1FfGTTuEcXXHf",
  "key20": "5pjHUA8KaK5eXdatWkyAf9hnGsZxAenNJgu7UF5bWoy4zcZoA4syusDEsG9hYz3tE9fH2GeQ5fVQhZw2VVy6FWM6",
  "key21": "AgPH7AvUCYJkxQvKYvkSWPeHNDvAdM4h8nrsqBQyWSt1hfzHvN6b6tUvuDeya6c7HofNf8MoSdRLU1xe2Z6NHA1",
  "key22": "3zuMhVNpRUiyEbf5jcxLncQiLHDmfsEmKEerihmaEgH7F9YB1Hikjo42BqdnaB9ksab9rh6sGmq8yCMgj5P3EnG7",
  "key23": "3u1Bw17jiD38QvpiPiS7LdAz92smYhpTZcXDG6Nd4LhcqHPjLsVJ7aqwmZtmf93r3e83wCQvLqPNCYVSB3Lo2nkw",
  "key24": "2j5ZxWvED6kaYpf7FhgHLwKfAQnpUHhoKZMdyoQsv7tA7FGNfAin26TCF4jbj89DTUzcZysUcEfqAhGc3zRKHMUJ"
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
