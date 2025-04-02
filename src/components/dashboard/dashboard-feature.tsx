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
    "4DdhMTi5kmWkoenpY2ZEAmV7N4Dw41T333d5cfSw3jHuW3yAsCT71vRAwwXWZZbEwKpjo9LEZCBmmjVb3Ax1hxmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22is5TMEWutScVryXxPFjbR5yXTWgBvHu7CqdLn6NF9xpoS8Sf3ipMDJc1W5dWxhdhopLUu2oHUgYExNvoiZ1Jqz",
  "key1": "4EQaXRjNcnSWGqisYmnB1daonJVAYdGvDwPWcXX9JSTYkUL9gaSVK32hszSQ5aQphPR2fqJQUdhH6E9WQM9svvL2",
  "key2": "5ehDjheU82UAUjRKhXpC3haNXRTL4gsJSup84irkHV1hfa1sWJwcKNX92p66SUgeqzvBPBqKMJYRw3wD2ag3Gq8v",
  "key3": "3sV5byM8pK8m8ggFX7GthgwwcE7UDRJWjRHVr9B8xcmqiXjrnDKMc7xrBoFaMQNZgWjd6iM8WjkhVKDhxHaL72FS",
  "key4": "4S1qvyD6gxdcmfEbhAbMMePn8KQHSE9YVxqXyc3GWbsmCRgGHHkg6AiGrno4XSye4PF76kaHQKUd1exTdNNFzhXo",
  "key5": "5X5wxMWm7pBN36aBhYJEN5RaefKELEUgixQyDMPSvX3Lg5v9nEBpcccQQKPDi1DWsreRKFZq3FHKwBuE9wm2nJoN",
  "key6": "2BnUzymjUU4oPVXkxvtg2ZVBhYwxgdN7MStBnGEbrhn7HXvhwFnPTu5mLns6iJfHZnH4fdsyDwiY1HWAZ91LTLhL",
  "key7": "5RKA18HZ6kRp3c1BwMwDoRHdYeVCthsvnWsxWfEqAqUCAUnYTaBNB5KkW6m9oHyyT7y5BLrvs5Nd6adHBxzLijb5",
  "key8": "3sdWSzgTGcWusAazwiEaU1sN1uHDuSkwrHwFMfMKD8UKVzF33Xp7SsVDrYWXyUkHfZ3cEmiHGYs54xLWTy2e8fBt",
  "key9": "3emTGAxpHLn45CmQ6bYNWQX2YcGGWZqmpCMnJf4kTGexPVVss8Y8rL1PySswdGaxiMJerGmQVJpX4uHvc5whRuiL",
  "key10": "4YhZYDfbfbHfyqS3mYbZbT6T1sPkENPjjRXRJva8QWqrBXsLaPcZf7mP1pZLQCRXhQTgFfFTMpu9AovDbeVKshoW",
  "key11": "4MBBAJ8zRVtiPUegWn1BknZv6rcm4SHmYFFsDqoxu6eb5LniufvHjPRRAxZDFzzvKhsqiibKfiN2FDrbd5hR1UY1",
  "key12": "4ad1Q4EQbe1Vo8kwU8YgiATqX3W126g6AbitsywMveYYWkzkbDsD8n9f33evbo7MvSJStyYX4nJKJe8HttrUi9v7",
  "key13": "2BcMvckrtMRG55mGQqpAquEtG47r4Z3P87PyDBgM7enYQ8htcjLiCJTsGczySiL7312C9USTBBRMpR8SY7rLZ9kh",
  "key14": "4HDhJboJehDdGCVLpnSEkGfbXAVQgzYzh6J92feGM11u83TNvbWgX9Qb5PVsf5zp8PyhZathzHVCkASXYo1xrHgE",
  "key15": "4NbWsoo9mEasHVU9W3dhLBk6HtQ188KaNYgDPbt1iiJyXTzrEPopYgfG3sSnRfMNS7xeZcfBWnqa2CGryqesn5Db",
  "key16": "3oBLbJ8qHpSc9K4kLbEG2cM8BPVgf4DVwwSWKkHFExRnqHCXb92dHEY37XwCLm5eJ5C2vKszoKAgLaRHRrQWKLC1",
  "key17": "4dwLhNzRPNDTE9edPFEvKq7WVgTvnQTNpkZo8EvYW5kzCREjxLWqnaP7XEbRTCdrauRDMSFHEURZVh5Z2vtvKjYk",
  "key18": "29whr2APU5MVCCRGapcHKazfDxBLj7HSRs1y13wqzn8VYdQqrpLBGyM2tia6VGybNzoyxiFARZeHzhuGbSqtbNSk",
  "key19": "3KrxFwLiuhV5TQpUTFpiKLtkQSPzuvEABVHcZmTa6qSnMdZCKAz4B7QDvsc1ijntHWV8DcdcLraZYZiBXB6jqUNh",
  "key20": "34iLAHEUYK8iUpJW7R8NwFUYw2bPwZydrL5xwLBshGUE5ZR47HC9F5n8oMbu8P4P9FM2Qz9gfEC5qv3TmJFKLpec",
  "key21": "42hSGdS2xTed4EVK5KA7P2Yt43iguRD6jnfC9vJ5y6fxpBPLSo4RkwKQP8TMakvvtNZN5PpqAvCzD9sZuvmWsA6n",
  "key22": "vmEswJj46dFzHGeF3ENyiTsNb4yED3smxj2PP6HifLzZ37oFex3iDfi73fjFHcvCyQwzUzRAJN1GGoq6tV8jaLF",
  "key23": "3c98RhfN2bkLu8K1qc4R9MR5yXgUzAggwijVhEeu3t27CRou3uFtaL51TWVvx7pZYgu6HBWLCsRbnFovgRnvmkRC",
  "key24": "2JQdhab3Gh2jAhchSpMyafRpUsB4WKqs9sczXvLmeKfu9urfJ3hkJ1S8xP3gUf8iMTNTZZphmAEKVYUAo1HeiH1b",
  "key25": "5MhdJ9mpLSXyPEsLVC6V3nAm7qo2Kp5eqBYGfzsdvZdvBqnatbmjhKQUGdB3RwbDcytPcjFpKvxdyGmsAZ1gTFhY"
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
