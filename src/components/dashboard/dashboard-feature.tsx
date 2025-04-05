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
    "FKPzWujasKQB9SkEJT3msyvLXVSz71TFr3fjeyKckABHQAGHEGUhMoLjkuPJmqX1CjsDb5VfXt6EdUvy7QwjNtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BfyosMJSpbWBxwngUuvtnjvDkydNzvqZKi8XL5iwcKewtRrkGf3iryFyFujSsdvVEJMLfALNu7GxPV9X46nk6rb",
  "key1": "3XJcbuM2mzCDohtsLJMrkkccnJckd3rDkLy4LJFpz7VRYqsAC1Kw8UXJHi4cBzLY52ePnB5dC68CvsjN529ZoqWn",
  "key2": "4HRDYNABhgqJ7ucY3uB1g9xA8tEiMkv52uypg5m9hZH6diTq68UkzADUDxECLCq22qW2nAYbWCQ56DTYS4iZenE1",
  "key3": "4EkjUYrvU9BvttPckmxtpAvVW4Bhb8Bs2PVcXXqKYT4CQC5kXjW9nNzkZPPpnrTM5ECa4Xu7uB62qdueaqVSunbC",
  "key4": "43dBaqgj8S2oAYjZqyDYopJBfEtU5ehFQ5CbrCSgEEA79UqMiTAP7o69b2mH7DmfaQsNPgxGWLd6FTCJFq1w9TBQ",
  "key5": "4VycZBFjbBe3WbEgBMFXWn7bMWivX2RVJWh9VcSm5unp8DLtugWEqaHsUicH1iqQei6GHm9Fesg2PfmqEzHEpMct",
  "key6": "5myWXHRJYRzq464FwkxpCs2BQU76UJbwKpV5hCNJP2MKUFKt1hfbJCSGr43WnT2kFDhU9Yy161fuauFBRCAHkheY",
  "key7": "5pM7ZftzzN3rSVxPEeACBN4m2w2B1J62HTzFzwkrhgwN9ec3RjKJmGiXHLbixoDopjqWzPzQbuXuKtn1TAfDJQq5",
  "key8": "2pQPMTCJJrAzFXz3TFFiwfgLPWWoxQV56n9Lhjw7JNEqAFcJNptgwL4KPzZEbRzyXmTkrv3DuxG8CcEamVV7sj6c",
  "key9": "66sdQK5XFoxXL6sVtDhBMbBhsa27nGcyGhFaqPB5Hazev17kFdXp1WNCR6rqMRc2EjJHifRycs7gVgXSrkKWF2XJ",
  "key10": "49577Wa1cHh3nQjUnaA85PnZ4XqH3sUHxtnRw8oiXtXZ3PUy5WZTrav59Q1ReGD3uUH8uCfGjbvKfT7auQTbNi9q",
  "key11": "y4pMC86BdYFSvok7otfm3bhYbykrY8pa9VB39M3rGA75UDasVWwkZHetfhgQdxW5z2kixt5yex7UFf53TUgrUgV",
  "key12": "4u34EioF5FhZm7b5qzWY2h9XEJNf4yy5QiAGbHJWffXAfc3osT3ZJ4MgpW9gpeZamk1G8LkYK15aEtvCnbJSKgay",
  "key13": "2TyY447CoSNZe955J8TchiXKboMetYECnb19YZHPqkPU19GNGjfzkFxhULcxDBc5AjVCqj7N6EBKC4DTqhPJ5zv4",
  "key14": "5gcAxcTTFRkyoFjWgHAvBaD3coG1QNzBaMcHeULEmdhgWNpxUYiskbxD57y5MgubNbrKdjGhZaMHoMFuW1ztNXQP",
  "key15": "2Jb2UsuaZBHq7BhKU38MBKs63j1B5j6cMF5GDgeV8zcSfuKbkUJtxVbHjsXf89Db75ijnC97ds11EdTcX8fZMBDE",
  "key16": "31JWqpD9RLKHm6HpZkRjcAKgzecycGQvQ76D568QYiFybF1TSJ1HyEmxggqhY23wY2uYyRYz4N5GnjwAuPtz7Bce",
  "key17": "3SdNzdsWth4gks2N9RkxFb3NuaTnuAe6Hr5hXECGh51ysGeBUCG78ZQMG7BxWw8qKM7z6bsBaSK9Bi7BHEq4x9Ti",
  "key18": "5vzBo2aZJFA2S1sWVTbKNqxfbcXZ4qPYWsJat1bBENtfon6KWZk6NKsod2YFECW4uSfLwfftyRx2fpD6AhsS4Bww",
  "key19": "4wgi1yDwwKt2C3jQ4GBGcVrQMuh9dDKMoerky643ri46MqXmYwf6Rbf9nmJsc7EU6SmrvkAFvwvQFSAcUnwwuZSW",
  "key20": "32YCDnAqN6aydk2hFAVVbeALAw6GgQVEe57S9taYtjUAfnDXgj1EVjHxg5yFxVh4fMK1rLh4i2rGJqYEeHwfUZjH",
  "key21": "5VKpit8LfU3nsepJ6RamMbFj7E9ha9GKTkjBNQrekd5fpJoAtbdbNRQtshWbvWiYqMSsdRwVFvMpYK6pTxVJi8Yr",
  "key22": "5bMrKLLsyUKF5o5y54ehxheTU8XUZnE9h4rWhu2NP57sBuYPS8bUphaP1wt2NMAsxihb6tQ7NqtkuG2wLh1x9mGm",
  "key23": "2EjvTkL95Br77WzM1s7gHgRwQo6r9Kanj232ivHuUxuSFiff1zqnmzCveGuQC7YNLtwWur13fQHhDriVqxLbfqhb",
  "key24": "5YWyzpX9as2u7oBVkcXeQ3bFLsGuQmY6Sg4sRrndRHb9x8pCmMXHVB7yXKaSCWsV364LUUrnx1srhtkK2Ceu6XzB",
  "key25": "5rAUFxcuPuFjzLRvHZbSTp7eojxbAhNCWVzGbBMQxEh2tdnNXvXtYrU3cCarwU4Ghwoe8uQp9rA7F69vFqVr77qD",
  "key26": "3M1H5fRGinRYbt9j9Pk2HBz1M6YPpnbmffYnL262FipWRiHaYt4VxG5LF84vwpN8oQXLnQJvWgDX58D2hi6FMXFR",
  "key27": "4naSPbMjsS8PCprZ7hn6GtEr1rZdB5FUkt2uE7ohDRQjr3ywZ9BXzC5HsAxh5FSC2yef7xjLk4h4V7JXQXhPG4iJ"
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
