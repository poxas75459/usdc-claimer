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
    "4t5Ujs9YYxmVSMHpQ1G8tn3tdr3XfV1LA8aL9Q9LJsSeoSTJoL75HNbgz9tBxbZLumPKeBAdyyHG2sPUa58cAryX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BkuQrgisUpzJ4zkpA1vaHJkjWuehqzR753kwtuZBcU9gDCGTgc5DhtsNZYBBs9KJTt2ch1ssAsduZziDsmg2D7u",
  "key1": "5cgp2YMwwo5NDJiNvxcd8qgPYWXYp2m9QjmWsWpj5g97KB5JbqE5VRuKJkSrn9ZfP6t6UHSEeHpWWkujuXd4RtAM",
  "key2": "3c4UmtLoETYiKP3fVBnZr19YChRJQtFwgxxDkFLQs85gqvNjjSnWn9nwFTQHHSgsACNPe4MHSxXPhxtUvWcQ6bM3",
  "key3": "38kbac3Fe5rptvbU7QcnXU3aJNu5nARdnq4rwdRtE1Mmyj6UYAkQb64Cu45nFYamnEf954aHt7Qb1q3DANB7eu6C",
  "key4": "4zVCgY6w2xUzbTVDqFD32WFMfuJZ2k1fyNHC7LDbs8hP74Lntr8qi4LAvH2e8c7BF8Rs4ou8UrULyLwTh3hvHfGq",
  "key5": "2JBRakkwAP3g53NCXNXvn7y4F3AU1J1BvvbWBmzW2jQYo3hCRm5UkgymDYAgLEoEGuk5xi2Z5sH8qmZKgcidE7e6",
  "key6": "43DiS622EUoykeuX1LMowHKJzm9gfNaZp7YjyK559m7kxCwgTsL44uopGT3QVuvr9r2U8RsWFfaKqqfBaX6JrgbS",
  "key7": "5H5NBQ4vsfZ2GcLyg8aB3Ctga2pUnFA7tkfgigZxufBhcrUdR1nEqC1DyK2C4hRR3F5Yq5wtHRGGBghDKhDpEakJ",
  "key8": "TUudm9TDcxJQ8JkJdzS21m7yyvX91MKAipPkd7ZUt6q78hgcyD91NsvkqKrhqiNrMmQ4VsGbBvF3pt3LsKGchks",
  "key9": "5Dg4q5VithbTeasStTYAnsTvTt9THizd16fVErneq6EjFoiQd9SUW4UodELsurYWz9xkBt8iayBscdP7d7wrPqDQ",
  "key10": "4FprLcVB8M1to7vMCSrh45pPsuMP2EKbsaYPPqmqgRtWRhbz6eayoFH4qcfG9AC9gAbW2wtizKb7Ms4MMoWM7eF3",
  "key11": "4dbRHjYsL3MJUwBu3EtyUqDxAuy5Eb72PCnjRBf8ayhBE9oJc2Yfvhi8hh1cbdqtARfdi7cVx4SUJx1oVfdSAW5c",
  "key12": "3qQeigHFY66yNaZpgoPFCik1J39J6J6Y7nR1f8QaAFBcBAvUFmDV31HLbTvocYQQZJDYMUwmWW2u25ZzAt7a5HMi",
  "key13": "5sZsHjX5A4FWECg1B72cu3Qe4QDyR7vPuGeTKWjZrqfBpWLjm2F4ZPPBPLV1id7Rd9K833sm1xA6YuDJ6fjrZTNo",
  "key14": "DAJbhEARUy4jPu7VeYnDY8e34RNmS6ondzmoJfNhp5Fr8DyDJnrykCHiSAobuC6h9Wb62B1ScEamxT3wUjqQn8c",
  "key15": "4j46LoxA7y69tiJyzE5XbNCXSNQR1BiADz8aT66D6n9FeTfgFoPjnQQ5CQH8bAMj4NC8eZ8vfULp6wggNp8XKzKk",
  "key16": "3DDpcQiuBBP6CRGJUeEDSm4jg3S1zcU5yapMMXk5QVMhLuoUjyF8APHvJHCQ4rBBxWC9fCx1gK98B65dELAgHTW9",
  "key17": "2p3TMjF4LRbAjTY49Yw2tXgEj15kKrwM3EBXSHXJ4WBM4zUUhbiPHBth4qD4snfo45YkiWeGQJoTUHkPZofEMHGQ",
  "key18": "4uk9x4xUX62rxyTn49xZHYcLBeTigwUpbJWgZJQ7mb86AUFcnq8CJ2u4FN1KWXg5cEx5Qh73x8vPKjcgu5bRVJVa",
  "key19": "5rPeS7mYz3WLpyQ1XqmRDVqWMehVdJN1UoH14eHdSmXb2YX6ka6knVqE6wjcM7N69QqT78Y684S9FPfA1cc51WuQ",
  "key20": "2Cf2Bes6MAUzThbmNAh87yrWcmvCGSJX15ohJZcP1aaSDG8wM6c6k8RdojDboaUT1TqReFVGuXgZoM3nMqHK2dTB",
  "key21": "KrrtfzA6tmEmy9BhrC3urT1vD7gUmFXTrAFhFpbv9Q4MUAx6qrTpx4bFJJ9Donm77A3y3TNKaHYyepFumJf2V3a",
  "key22": "3QiwbtJZaefVUZoahyBPMEDCqoiXVmrJM4og1vyGf1PkmuMR7eFDyRZTfxjh654qPHTprgbXRoHFrC85yCWK7pj8",
  "key23": "39cJjThK1h1j86XtDvWJnQMovXg1ePKEnxYqvgSzcW1kRDsh7LhzjDsdgbsLph5vSm7jopy7Si4jtJ4YYnANhH56",
  "key24": "3m3Zz1EE3ZwdvM6QpfCjEJbmNWjDbbtbJy6bevnXPtq3Cohz33K8yXxGxm9meb7wsg9hd3eXSorEqLnSvEVfMTCx",
  "key25": "jepeSt4bXJmgYejE9GfBzic1qm4Mxj5r6cbQ8fZuvzC6WMC8uNHaHeASDmE7Vkq67BzrPtFkTZRxguZ9TY52GVv",
  "key26": "5UWdRNfomJf7F3kaEkyydiJ9uiZaG6bjFwmeC4XdEwGDFhH47BicvAnQHCLHJNJdv2vmZDsQjoEvQf8Dx5KRpRst",
  "key27": "2uzhemRYY8GTnYi13AQS84GvJZpQL6jZAeJKw5NAPMRAMm6Un1aUcJFoocjzdwaWT4iVKyYYZ5XnzFnudx4oZFMZ",
  "key28": "2rSkQJqa8VFCsuZuVJBagqSW5RzjywGWF6HveTpu8ign8aRrdBQSHWEibKTvGpcgKSAZQdU6JTW5ejnCKbW2hPyh",
  "key29": "gLd97Ws1VZR1PjnhkhwBJ1zZBhTNrCXhrWcfuZN5yEkmH2BF229VE8ZTj2s2uXdUwZXMaW6WbdXRxgQUJ94ih5V"
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
