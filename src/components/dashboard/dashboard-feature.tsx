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
    "5XUC4BirtELPN7y7Z4zTDqLqGXfTU1WoeY1scQSQG6XCDXPYuUgjzYe4nzQtztMbsH8gtk7cAUwbFSQLba3t2XZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hchwdxKZkGDsrQaGK3CEeC5mCBV7V3tL5kgfjFNzLbatu57xG9ZnGECm14LkVKCN9WeZVu6NHFHYhnx7M7mc6wN",
  "key1": "427oDfyyz6gqrHPsfJr1cxTpus1tGMGyum8PS3dXDEvRdPzcbrGXwPZTxcWsd3c7RD8r7R4XNSwUxPYnYqFTtgEs",
  "key2": "3BnoPFi8VYKtkn2Z1gbBjhjY2khkXrESWayVXKcZUANLRTdZECkF34vw9mZZnbKFK7uJ9DaEY7F6MdeZJDfJ6L4e",
  "key3": "Uh12jD76aWKqmdeLutuEvWJ1wPLfXXWQvAhmYnsbwqvg2LpUJevW3fXmPmNrnCAqWPAnKZd2imL2ZwV7v2pAxRN",
  "key4": "3TwsmnHqZuhW8zds4jiAWdqgcJhGLH6uG3W5kA1sjgRRtRPU3LhEwFNqg2VyTAJ8JpucJVx75Ug95qRpqDzMXCLj",
  "key5": "4FZoFBKN5r4SXoVGNedUCHuTiNwmw979Baho8MmazyXvxYRersLU7wfHUZjDHryTZbhW3pDQXFEfw1ZXgp8AvppK",
  "key6": "28eVhh9McB8ZcWan8mJ9bq5ZZ6LGKHJyZQ3DKeEJPzk618NfTLpQCJMVVjuMhmup5JaHBJApukowpqQL16J3KfPN",
  "key7": "FL2Kdj5Z3UbF2YaZhi9aGy9EtbNBqHromDZATgtNGQAggJywxi68GNyX9CQgqqcCRH75Fhzv3L3Jjm7Bej4F3Ju",
  "key8": "5rrB3PjnkBSdxUPvNUfXEEhCGYqXmX1n29gUEpHUyiDFSZnrgjEzyNJcwLNdiWQFDrTVjKPmK5JXgmiA7txdVkgH",
  "key9": "8mfQEh5eedPCj37nHBC9EksTmiNKmT8i3PLZndmxzJBiRG4PcFvrXhHPewnNiQWWvrzDqJSe8A9NKPa1wfgQzPQ",
  "key10": "V5xCk2evZkFTt3DrZpPT5aXv6hZy2WR6Js2bLfYQDRE5M22n41Coc9usL4z85YhD3oz68JfDdZPXwLkZM3ataTc",
  "key11": "49yRmTWZHr26KcVcm8VtpfgtJXrkhPRAJwJsiZQWdm6PfpF6PUzYFNmDhEMQuzSczMML9kHJGwVxAPjzbuU5PLx",
  "key12": "2pUpGQfhGhVKZX1Zgja1A5kx1ow1UcDKPWpqGZsUYyhVEpxrnX5fw2ZUmsUMNwJLXEQZbBJFNj6KFVggvqJYDAge",
  "key13": "suye9v1BxsPWWanuTuYteftMysjEvuLKDhckjVpqtYSCehEUsCHKv8J3rfeS1Tk3vcGkFfWFcmmKcnmKWCKj5ud",
  "key14": "4ihZqC7W7W1XhQmMuDZJiNDr4NzvAAGpmhGvfMduauxg1HsCKLSD2d29i1QAz6o1GczBNQ8PTXSRtemitkfWEX1k",
  "key15": "wcPnQySnvJsQNfStiqp4BqqFShLWkE6aLKfy8rjoF2a7vxwrfMqqFsASnZJnMApCTzG1z1mFuezHjsUZqp3DUWX",
  "key16": "52X9ekyTFMMgJYLQSQihtbxiP9bVuKB4TKUsctUC3j4rHnmNsVrDLrtju6dqZvxjsdGxWCyiLL4T1SZw8RCweraH",
  "key17": "2aTpEzeTsaZxgm91uHsJayLmS5gUgdHZEdvWLwYog8J2Mu6gL9BiCk5BBoxwVCpxD5MwqcZmMHmMhFRuN5Uu1EiX",
  "key18": "24F2UC5RtYZKsH2siPFexMQiA1G8LpeKFR3TNHYLnFV4Rnb3kAEuH4ZiZ27i34QqZ2x59TBHDaj1ZezRWWs2chjs",
  "key19": "FN3k1XpUMEczsZNmDN2p8SPZ6yVmJwRdvmooQxi4f1xvAAu5i7i8s4LV1udxmxtWubwbZsJk95gst6bcodNAt6W",
  "key20": "2gJYqE7EZiwowN6i8LurqNWLP7vkKxPZzS7hEdHdozgcCdMTUnTEtenQcPw6Cf3Mqv1KcEbvFwvySaCsw2siwbj7",
  "key21": "4b8nawYXJsDjWivnV9HEBe7sHomDHwpBKmwn2DSXrS4tpdn3ZgYXsHW3FWjeR54wQvTinyrz8UvKM3BFeLH1VJjg",
  "key22": "4ZRkGH3MCUoeDmK7Gxn5Tr5gWxqfQMqT1wUo7U5EEAjngvXEH4LHnJL4DgMJYRGLPJBxfS4Ph7UaJu2J5uPKFhQj",
  "key23": "5Nob8dHwCvBbnZ5f77ZjsnhkEDKrRqPCXBVRBFP3S9JVtYroSKFqxZMoyEvmp6fTmREJvS1DTzwKLeG8XYCoQbsU",
  "key24": "63xufnrkirSuay8GUDpxS5xv53MsnfCsMmETnp5GiS1HzRHb5GyCMyz526TEiP7H6QvVXdB5T2cGx5RNmmyQEFVM",
  "key25": "93SAz9xVftVsCdCEKyWoBUVsYPsMc5fyrJbAFtUyfqCr6Yh5QWrKXyt744MEZAdSBWZkACdftLJzLgZw6xqQvSp",
  "key26": "QwuKYAyC1vLLPp6wdh7uqYCujRxtM642VW7T3gBaAga4Ugh1fRb71N2N231iEFvGQQ9U3wq5eQqWqnLf8stUzJA",
  "key27": "3SLgUKx8XyocpdNnL3guH8jJEboHL2FiSKCMaTadeBLvwsDyJzP5cqjZJrNSwKWoPAMoYsmVPHThNfByMeDuw89c",
  "key28": "Vc6BWtWFx1jFLATA5MNwxUc8XP6jLZ8A4W4FZsyAAAxV66RSjJWhdpnvfT2cdw5e6FdMutWVT5ixupB1syHu1gt",
  "key29": "2CrXNuhq9GTdnxEBBiazos66m1knE1RD3PcteGwHutHcS9f4HE4C9rybvThQ1136AgVdxkRgSZ8anrBGxUjR4Wbs"
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
