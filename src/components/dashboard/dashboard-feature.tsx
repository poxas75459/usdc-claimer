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
    "4jKJFGk8ecDGoyRMhCh6hmtCWBgcmtc2EYkdxA1adJpvBCcyc9pGmbh6U5bfGBQVXCqcEmY5vMQonXKZaJZZuKMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mcx9ZqQnq9Nak4f76RdGEP5KAgTezU16RNthAFh1Fwtg4GDE48PdgiDH6pxx7mUkLHk4BqzpFoaT4Hy9vv9HTi",
  "key1": "52NVQDPoLuYQ6UjvGc2HRwn5Q3fhT7KPnTQj2fnBfktq6imRoonTEt4i4H3Ysp8P5dwE33GPFNeZ5pkAWjRTDVSr",
  "key2": "utdJV7VuBBj52CHPyyPfGVyde3LwF2aFyGL8LpMVdGTWEoUDGSCjLCRfMM2kNsUMFrY1mRZch4FdnmnnGu2iM9v",
  "key3": "3KewrwjQue1SvmFTpXiJDoAM4FwD1SqBNZy8TNaGgzggkAPJC9GiXKXFTbTFhSy1SRXrY3RVZuThBBn671WhBaNk",
  "key4": "3oUWnfaYqvVM4Cu8DEm9cTkqCQeD8kUkerU27ZDZ1NiiuPk9w7eJAVLvZwTZdEfFJxXdrfPZgw1preNgwefnqKpq",
  "key5": "42eBsYUDu2jZYeSHGEE6zcs9WDNVNNFwZkC73RoLseRpBrSHac1kzcfpkwTV19dnTgoSKELVYjfCfqbaYigWPGkH",
  "key6": "5aC2gebrr9yTStNB43TF43XyG1ny7KLPy5Cv87QtkWB6zBTUhaJLDtnPgUdRNKf6VUVDzfAHMc6NPQDwKoARzvpR",
  "key7": "bsZWP8FfS7ZPFKXhHwGgUARxjkTAb51nwkyRVzd16vxVt2SeqbhrwgBmtrd3PkiqgQrAZkAtfeyH8aUppKCRWD8",
  "key8": "5byEVtNdKbzQxuWSfRRXKdXAe2QF2dpBiNcAskJ8n2w6gav1e9YAcpQf9wk1GEbCZJsm9sao88DSvjpswTtViSHc",
  "key9": "5hf1os2ddCAgKcnseRYqSPQH8iAxHjqp8mZBNSQqVHABz4eE6N7Zy34qKNzzuKcpQ6F6c99QDJvAUVKoxg48w8yA",
  "key10": "2QwAp42szzCZcwoJuW2RxZwVseeW44fadMDCBZM9ZAu8Bbtotd6J61zzhppBMdNbSmwg3niopPSFYZECaLpYeeq6",
  "key11": "4edoh6ypJ59ZCbu32KUz1zcYpEapQYBEY3Bi4PJjXJUdfchGnLy9hndDkgdiSbg2R98kCGyCJZXFHmASRgRVn4VY",
  "key12": "31dgB85aNfRbPjr9yzvpvLZPakP4xDmSyXShm6SCxP37JwVD4j2rxJXw7EZWV2KPYuKfG4iTtGJwv5s7nBy3en2n",
  "key13": "rMTRgRJVYufzBHM1n19CHa3DAxuuF16B1okhGtxv66pjDh3Jf43K9m6EFJwH5yeAx7fEARS2ibmRCqSSECkPQ6e",
  "key14": "26birjSMKDAjRncSjaQpKajsTySWbYkn2irs3K9Fspd87aMJYWBw5DwcT17TQXyWb9oaB6ZtTErKW7Uq4dS3xwxm",
  "key15": "4F7GgfNvKz6wUnb5fGkKyNTDGWBCKDcsgAti3xyuaCP2WMrzCWECp2aTcuu4zwk2x6YKCRdRCk6rW7KkKDtsM7Vu",
  "key16": "gRoQzcNVRC1TPdcjGZ6QeZkJW2TGeUQbHPvsgp3tVcrAom3UTPCnCQxdrhss4MzRgrX5e2emHzBeWXfFBqrizWT",
  "key17": "LfE1XxQy5R7LfFUKZwLnSW9UAa9jPaGKsUjMS8N657WYiSMgVuEyXPqoeXp6zU13vg3U2BTc8rPeXp3swcxcSgp",
  "key18": "5nK66FpHiMk2Vr92na1EUVcNDMpH9S2TmCABDnA98NEZ81ddorSk2xHtYV6J5cHH8h1xpwqfNu26jV9yZmF1WpZX",
  "key19": "5n6KqPn76fwZDc3rTVXzYjFNq6Zii7KW2pbf4rzvEiyr6eBj7XGEj9k1vacBHNMP4Rsi9pdKzzjkuVc1we2ePcko",
  "key20": "4U6PfBpKSQNz7SQyXwjRtXbeKgQe8UjFMjXJY4oQVqpY2ZNLgY7gokEbXvk3agSVghgkuETpM5ZbRU5xkF6f7sw8",
  "key21": "59y4eBWwkNPEc9KTzyMF9sYqrfs7yNHj6zhvfNxt4idg9qPxwyWPvSb9JMPca2UTC9KYp43Tqb4avVPvnXugby1D",
  "key22": "QBHAY3tmrYouirk7s6U1NQjfcDy8iiaLrdFovjwXMfyrcupDvkTNhgCCqNhhLogXFd8gB6V6Xr6rWc9cd7UADU7",
  "key23": "2zc3NFuZtpz6giBBBckVFDsZr6y6561GzedWSMKRxp2cGECukfCtWxn7tEBL9FNZY5ffngmbvyYxFdXfL5EQduVP",
  "key24": "55Fju2Zz4FU7rMJXBj8pt2Q9SogQrGxvBSVKddoPgpzQPHhJhWxtt86CB2PpHCJ76UNYWPp737XMCNnhjM1S4LRe",
  "key25": "53CxvdgsYtUZyoFqzW1pX7cLWN25GAGmkHknXqPP6tuTPDNHbVZN6NMFtgRJ3kbp2SiRz9AfksXS4C4fskSEG6YZ",
  "key26": "4hS26KqkGcQRoMftSBMWpT1QmXG77fE2bn6A48AsFD64Mc1HPsJQ3KEKE7AHD16G1Jx3YXVH5ciddhmQLnwWsGSD",
  "key27": "nAQKYg35r6sy1Jkh9tRfmJ4CCmFiLeAwP2tLHCpRjzBv32okmsX31ujBWcPQoYqszapmRYK22VF9J7DppK7JZtd",
  "key28": "2bGcxHujFqfdipp3HLJrvb6gDLYekMazTgtpWz4rJiimsorM1BjDw2DwYSgpVAbEtETpbnrEHfW62iJHFgj78TX5",
  "key29": "4ZohyribwtRi4a4hcQnEon1KHafajadMkxEnXMRdHme6Q9iL3AWqFedoY7JsZzaAxW1NRwWX1iHMJLg9Z7bzAsMn",
  "key30": "5A84eBJg93CmYifmtDRqV9MgkT7pwXtEtWB4VMYHG6sz87veSCGqkEFgjrUAo1NTpCstCKFFVuVYzfw3k79xNfPW",
  "key31": "VpqPqYf4nqijjDtjU6r6HKyGW3PpNZB2wY5dsqp9WQvu6mDQoCKyYzRQ7VMvTfmmirf8PhkNAikH5FXv79CZwSk"
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
