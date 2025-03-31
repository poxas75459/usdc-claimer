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
    "5mUqmAPv76CUz1AsiPc64uw5ViwSvWJ5c1bnZfT8nKBMn7XR4e3AeG5uujX8zvCwtbe32DVkv1934HnxwKptyses"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37VvZWLDMoJvZPnJNHn2P1ENA8fxfX7QtvtEe1ov4j7MAuTsKQHKf3Tvgs7n7w2kXWpJBRviriekqDmvqkftmwjX",
  "key1": "5EgunozSD9LsZzDWsVdrpz9kE5vURPk82CkzGye2dvM63HsLiSqN6uk6N3PdcyKArttqxjkvKnSL4S6zecBwKmXP",
  "key2": "4HUeysmsrMrhLDfg7YLFaV4BnmV8mtPDp15qpynHJRvwp2nCprUev4y9VtNWDSTogzDm37iZpQFqMVAqf3sGXyQb",
  "key3": "iwRBwKJASKXVWfeBZZU8dYAKHKY9m2AiUAaCJ2NdMK7uNjCyv8pqcK54wwcUSSSnK9EbHZoMWd1fNZtkVbpJvzM",
  "key4": "5ERzFHyt7KHyTGmUCw4ctHFzdDKXE1PW4pziwzBJ5U6Tcbg1cPHjVKxVFxzSgJoxMqowG1P8aDPoXeitBCG62t2q",
  "key5": "oJoGxR4sdZseVkxwZyTWa65qxBhePFg3mugMu5uUkRj4nyn9FazFWKkNW7MqxtjcLJfkAwK8d29P7EYza56ybC7",
  "key6": "RFmV4134cJmLHy2mosog7tQFuNaXCCk7zbbaTeh4H4e89qZfdQwEEAPH72uCvz5D3vjbXXcpSxiX3ZygvQszkDN",
  "key7": "3rmCVwoZg2vgZdArCWyLAnG4DWg1dUWNLSMTSXj5XSKkXAcGpBgaB9mVHfJpZWr9APNBSJ92qEqHsEPsvCac1U9G",
  "key8": "4XBweWDShaSyERbA7tJThUdTuCjTwYVHa6bx7Cq1ApRKdiomF13RFD2k2SZKik4dJHCQgJJG4MERXVvWAeDweWUS",
  "key9": "Hu6yCfab1RmGKTFCoW2GwtYoWx7enHHM5iSRNy9L2GdBeLUDVF4Pv2VsU567UsdTP8Xge1KA4NEVXwujtuaMHfq",
  "key10": "4EqZHaXfZ9a1LZgU23zFQiDsNy3F7KFCDNTujtH1p1KfLdQQM3NfPWiVunyFLPoWXeegi1cP8NCWNCZFBSmoVtVD",
  "key11": "47mwPDrhmXRDpJUzFxwmcuY68HHJWaJnWbjYyLUFbxxMfB9LdPaN5UFmReF7Y5yczo4ETeCWWz2AnMUDnnFTvEB5",
  "key12": "4E5cUGpLxebQXR16JUxVAwbLfo4iJ743hwTBUMdbtXe7Nn428Z4JHjk8szjAW5U28s5z4qYiySeEJJV9RAKDQC83",
  "key13": "2GAkLzPKHUSeKbAByEeU9onVMmmJPqBBMDZij8DL1rfF2sRTTtmMZKvNReiYTaz1Brmmi25TDvbA4ZQ9Jo5aUbfc",
  "key14": "4xhHS8Rj8RDfbUFpsfGrxRWsfdQ2KqCNeg6oRGAocMq9qwfRUC1zmqwGD8BL8qRcoXefR3V4H64xYPHeGghAcqUo",
  "key15": "36gitkwrWYn2bcAByHH916D14RFbFrZHaEyZgP8nwCoemXQtwxX45ccmLo1t3zekLEZoS4TBbekVb3qjnd4r1uVL",
  "key16": "63evoYbRLvdBvGahNbEDWYksPAVXZaejnfJwnJKj4J29PyCvWwvvudFCq9DJjdiH97ZPLzBgi74giBtdrrajZYKZ",
  "key17": "ZPCWUNemdhLpHChAv2JVgdY5jQnJMgMBELCpA4LzDZfcJJYmyursYkJzJ2gNsXe194zWEf39s5f5f7hHdmyojS2",
  "key18": "45vkcJSXsYPWzgX9H6bEp8RQDSu7vA8DQZJGZgqHQXPrYxzdqPE6LofReTbPF7vRZvowg3U7bpP8dcGh85s7ChwQ",
  "key19": "51rY8bEcHpK3zNbxLMzJnHE4DvQBahtNZyJWp11xgknU5S77AZuwyaPeMJN9wjZuNgHh4kCNgYcuP7CXG1LSaWaP",
  "key20": "3aLdtqmLmQRTjGkMPdZxU5mRN3gc967k6qJ4x2jNkpDhGvRbDmqqfa8bgDs1Ga1vsigUjJY3zivknvWZmAkaTKN4",
  "key21": "3EAUBsqzo9atFXrwwxJ9eu7mHMbTHkCom1L2VQNDt9sxknjbBYf9VihBQwkoas4NdEW94nN5yfGSNEpPGka6ojWS",
  "key22": "z8r3d5uWcyaWgrUraV1giwFcLkEzRquaA8D9sJ8rm4eNLTwpKWeQHvtiDte3M42XxQHfs2VSadh4pGqs2Ta8BsW",
  "key23": "gr5putuAWcabZVar7MBYqGeD763SDsb65WytvDQXh8BDEm9Xe51Gq2ibTRA7vqgWCzEGALsUj9wXykmUXPURAtU",
  "key24": "44GudeaTtyczEEeKEmQJi3VZzbaZHx5Ff1YZdFY6owHwZRUc7qvSKvmH8TRYUn67zwaseYRjkfrF5JMTU2bCJ4bv",
  "key25": "5ZSfn1Xw9gGEg4FZ9C6cYLNzScGAQS6qBHW1n9aMfrQc3KejRt2bKZnp2Uj4EmFi4F8z3Qie4bUGGKYYtr6wPsFh",
  "key26": "52uznQSKB7BCg5vrAdqTZkbJpyXu86onFt8JkvNhKmTDELsPbxc7SnX2WQvRkB8cJxYnaSetiVQaUvq9iotPL37S",
  "key27": "Tz7jPTHYvgD8XYyLRC2Bx3YuvNcGw8vz3LBds7xjxwGSE1iFs7Db3cMyoTwHVGTJavNqcsrj3Ucmn2AUwVMRpCq",
  "key28": "2QYqNtxQdhokDWhfoakKgAD5Yd9CCzoZyd1rWXg48vvYxFQ6uanj7FEeYE6U3eYWtDUqmB2j7tiuZmWXh7CxWcHA"
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
