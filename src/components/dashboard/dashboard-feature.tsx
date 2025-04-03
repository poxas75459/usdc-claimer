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
    "67fSoGQ3JxKrBTbCh5p9FPsS5Y2mAhXFRxbH5dWqTAqMJzqJQhrVf1H3dr7NUdA4dm27Gdzo5cW7u1oymJsmH24w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cy8xY1HwdgjUxduvSRUAi8KfYYvZAAD6WNgDfn8Nps6J66zGECN5dnE5ozF4bV4n1EFvdZuZpp4BDXJz2859Qbk",
  "key1": "xK9GN7GAbpue817mVmnRyZhoPNDrRVjFMdfRtUx7suNQS1GicQ1vb2LQZCthDh46ouWq3DaPGo87VxQ9h6BWHjV",
  "key2": "4Fp2wV8SnpRwH6YB9F5G2SkmmPNuxac4TzRtuewYYCZ7wQG7GYpyr3GnkSyEJcHUkEpYcQgXmzNRHKHJHk5cCSu8",
  "key3": "3SBmDvYUHaAmaamH1vZTDrKUQ238YAFGxLMBu33YojEcV2vvkAvPZhgMzxgzqSGKU8pXD3ubrmDWuQN2KhWtxWkK",
  "key4": "fKqsXQhfTRywcGWtJ9cJ2p2Fz9z7jR7wjibK3A1MCU83BvUHLHFuYxcPVKQgyopW1EW92J1crauzvf5LKu7rrYC",
  "key5": "3CfUhP7S2pQguS3BDtMDSfuvCLwfVXYdxeWsDVTwt5rPfR2YnUVBUhhpXsQYtKJdjwVnYoaBeRK24pDoRfw6H87E",
  "key6": "3Sbt4JHcJc6GAsnLF9Ycu8L8D984rfoHBF5W8WtM9iydnhVFAmtJuLVLjNTfAGm9veK3Ugkh2cpDGqQmhKdrNS6R",
  "key7": "6cwrTBxs546D5LHa2zfMPZNknqT6s98WmfhpSFrNwERaqU6KNGVRaeYD8fRiwoHhS5wzTDXipN5xz9pZrvyNqVo",
  "key8": "2mkCXD8cuvhmAWRg72h3UpLpyo9fqEunrP6AJQdXK3GsBquofvQVBTWZjckubnwWH271c6XovrLS5p4q9cFMy6vV",
  "key9": "2oLJZ5jsHnRQUMwJRwKwvCS2WRAkXvMK5rqjJsMfacU6i8BjanwAvhZQgUGXGibpi2s9PnhST9vhdF7odpHZMK8B",
  "key10": "3CjtbxBvQm6s1Z1P67K57XrvAYCkSpyd7cV1wogAvGsHf15qWDWtNJ9wzw1wsMXx7FaczeyV5DPuZ1P3RuTxx78w",
  "key11": "Mv9U8nAQdCPbq7zy33h44wd4K3ncyjCDC6jdm1oZAF6JrL1YF7ECRUJJefT75wwzS3QJUvdTsFuirw6Kg4K9xbw",
  "key12": "2CTefn3gTtNzrrp6Uqru9KzYDCJa1o16ND7ivbK7xtBgRNXvRT29EMrjtiYzqUPRG4KCrsnLhGGx4effHrKJ3ctA",
  "key13": "4FY6RBH7maqoyPe6fvriZJKS84U7Da3x1EmxotKnoomcdpm66SujfLhZpLbBaAXZjL9P2W13Xx2Xc6G79LcSFGkz",
  "key14": "4ogsbT1wheT8niP1weE9B1kkxNQfhyJaYm3ZBkuTrUwRLiqP1fh82oVxnp1PuDdwmJH7CHRViVwXPnBsmir8dr7z",
  "key15": "3vExc6Jfy4RuD2CaNvMP4KWVWbSe7Kkv6xKRPoTxMYESMk6oZBNpDjuj936zJWBGTupe6gifn5kAp1r4Hsm1rCwi",
  "key16": "WSLzyrGPEAU6a6NwiFXfbwoSXDpyHwdixCPyjqg5U3SfYQuG78hU2rokw489HYFBHVLczGA3g6kZitjwxTqQDWp",
  "key17": "34aiKwYHWGWEjz7iCrVP6jGnBHM2B9ivkZ1ZJcAAGi9bRCoGq5ka71AsPZj115TYc3YovS4JscHXYKYcEAGnw2Ws",
  "key18": "JDMxQhChEvCb4bCiSkpHXrFaTmLtSX7HwLnWZjFJfevNQ7zVRdBfTkA53xaK8s8Pg2oijB2Fg1t7Hp7Dgc7Nr2e",
  "key19": "cSXgxDkQYvxm1Q3r7VvxtmE39KfYaibPgpB7oZfzRLMYWm4njfXLQoFJy4HKoxtagadXjBvQujtHf3kwwNpaSsb",
  "key20": "2NU6xcxf2RNsyi61vSwhcoueGZ6TSNnWdNgdV7tEv46D1CY3Wa9pLe9eR5Np2Z6jXF4Lse3dXd7G54pdJkDfx4PA",
  "key21": "5eagTLthC4qSHB9bQoBvqnpBzx1aS4YjAPH2bz7g1Yjgpwi3u6szGi8iAiVKdjjgTXPBi1YTckEqvX79rTXXRdf8",
  "key22": "57ZjracxkjCSUFSSgMTi4Zw345QfBA7MLWRT1WWMmgPzUkCyChAHphuWmxjac4Cu7HAHK7zcCRCqKKwuTo1YdVzG",
  "key23": "3oFFNgw8ALaRjWYEHfZ8uFyFtD6YsNbkSA3y9wrf4uLNX2TvdCxDHCgguXcnGuZSGxEqcTQr859FLkcz7ryUQGjr",
  "key24": "E6t8q4qhWRw6mCAdmGwKqgUrsGojX5k57QF6nLqzygCiEx5njKNd9jjeNFQmktfmYLsr6Lmc9mw4JA7jZBy9Hb2",
  "key25": "5bVVuSpr9ngE6xgvbCJmPT3phLA6jmwU9WyfQm8Pbmo6Q3RJcrH8RoA1QELDcX3WD68oYnZxvMRxZvLSLk8xedUj",
  "key26": "2GLLiBQHWETopYaWaXGR7Qax65PdToFGYuUCrqRA5ofh8zUKu2BGCgkwAPEgoJs4yrMkB8AoR2J45XJj4LrWtEpD",
  "key27": "rECF6r792RQ1t8DdmRuRrUhd6KNhByuPEGiZkAukKKjHFQZAqtSr8bQKrpN5mUcwpPS5fccgRsjAv4kdAvMqNju",
  "key28": "2DxHwZm9XEj3iq2cyLNYC6nnfgZPQ46q4Ari9ksJZ1fkR3UtSiRhkoCeF6uHa5t24bWFg48m1Vd4jfVYmvc7U6WQ",
  "key29": "52kGiM6fPovCrK7jegYX1vWNCDcaa3CojBxKJ77VbfuLCKYPas5UehzyftG9dzwqBqWiYXWGp3HA9wVi3BUwJc3U"
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
