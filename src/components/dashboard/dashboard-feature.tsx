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
    "5atPFDMpgtMM3MFSxa955KY9qpZAmjxfkorJi77r8LPqNJxB7t5iuwPFDi34i7pyd1ci7yeEdMyK21fTZt79VcS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G27Q1tAsREN8W7X3GhqazdURDZ6hLqZpQgnRFXaKVdVirvCwpw8HbgUPz9gUtbUU2LMDjShhAszU5egJwvq62o4",
  "key1": "3wgX3yyXDjwkbzsiarriZC61u8hGynZFd8Aakp9opsD6vN5jfErT3hqRS5drUQuE1MUBS4qeowoFeBeCwSUzhsNP",
  "key2": "46t371k32ah72WL9oQjTZgXec5Ti3oXvudtyjZ9c3AwfU8YSoWMFtZpBagzMi17HQDvF93GpiPmLJEaKHnXcBkUR",
  "key3": "4Pnzf6afPXeA4H5Mmapvri8XmZUM1dBp6yfQ6B1TCBWJnZtoPf4yP7PPYCnTEp8U3oLcFCWcNbxGHj5CkSPJ1H4H",
  "key4": "pZHetxytJVzD6g6EtrvUAYgWnFN816zXxqFrQG1xnoyXP4tS4YxZKfi2mwznaJhEHv5ZfLtnGJ8qR2Hi2x4TsM2",
  "key5": "35poWAXbrsck57uaavFHXhtwizg1mXw4kR176ePFEQKtLBhWrfauJN4zbawj4gGRvVAHnTYhW2VeRmTXMABYwk9t",
  "key6": "3pRQCmMReGtWr9UtxWc6eUJdNQfXnkFDVJBFd3DgpX5JRcRtd3Mg81MDpzvwsUp3R6Tmj2HGbyGCw39QC8gc25Qq",
  "key7": "3qPwbgqnSriXadySWq7fSM2oDQNQueVT3SBbj8K1HxfmQNVyNmTTVCan3bMSkcLny6cceV94YBgrXH66M9VgVXq9",
  "key8": "2m7DqMtLs5CeTcy8n3XEHKE8RxFNXRKwmbz1vTtFurg3uYZqwrMBVFZuxTqAM5dkoVexCgn95if5kTW5jEyysPBz",
  "key9": "5LZesRXdxCxpTgE49jKJ9qLBR1FuYxP8HMJVf1YfNLqdxKAuvwDZBgUt91hDJ52FCtRRceeARSrz6E75WuMYoTrn",
  "key10": "4eVyR5s1NmMcTrSEnzwMSNLBV9vNno7tjaDTrU3hYUeuCxTW1ofmBsEhB2R18hSELiaRyjcwixS47xFiiT2aDBjY",
  "key11": "8Cjnz9PxTEgB4vDMpUGSEu23Uwc7mk1wGPhZhA2UaqiVZJNywh3Y19dVVt4e5wobQkgdMzRGKRYw2kX1qhbE4pG",
  "key12": "28E5f2E7qu2kNaraYvL3NmqxYza1bNa9vpgjSgepddpDqV37pRuvLeSHK7QNxxnF5NmkroontwjGHyidX9munYLc",
  "key13": "2mgMxkxEPJL2FhggXiqQJkxnJTXkUCJi7SLwwRFWZ7LSZ7CFg4saXzxsLLpjSj3A8E7Mm9v6t5Dm8ppAwAuByArW",
  "key14": "32iMEp2p95mXaASJRxbJVdpfjdyD4smAFoX3MMbHR8fENhWbLoqESb8RwVXbNCwuazifqt7t8N5XikeBrh3CRzYM",
  "key15": "bqRdhwZXG32pcDcrGhX6RjoWN2RdY3r1iT8mxRXkwy7zE97pckgz4jzArkLGTQPnNQPpt1Rp8jcb7cmjmVrMANM",
  "key16": "FkuHL6FRSpbUyNSqxjj679vz3ty999MS4oS3TiViJ8xfVKbqQmRiRCJqGr9KXYMxZXxRJdwnr3reXUCFrrQYeVW",
  "key17": "2foCJ5dXGtYku5i3V7cs8RqcMETpSkhNUkN7Le9z8CBzxJMBXVDX2e8CYMqdybFcEZvBWMvB8f5bzxHWekyXxhfD",
  "key18": "4G4uowBruVG65XALBi7AGRUyigUQa9EMkkcHRpGvibw5nTDHwoMePLpw5x9wyhrNBXKz79uV8gSpQnwVXyhuAhtv",
  "key19": "4kvDGyfTbzL4k5pbVrUyVKGXJ4hQNXewWraEekJK5Djan24WmrNRk5MS65Z9KEgvMBkNb8ZUEX5dQyW3PNag4gMN",
  "key20": "5ahBqT1ZqFNkdNyARMzpoR2SoVUTpSihTV1497insnj32afgPHuedMqpJZkBDQBgZqwhfekyUZRbcXbcxXC7Lqpw",
  "key21": "5spvU9no1eP9bvwReqvW8dDFARFbkcbUJGKbmh6H3cmvw3uRhw5ouuFxtnPiu32rBkTJ5VLxTNc8JNnDFnQ6ZXjN",
  "key22": "5BeuZFK6UQWRJz1GmxDCEDVNX46RfPViB37VApEG4BSVzSzc1rKSfFhs9HF3d3PSRMZ9HpBrK4oeqPod6wBCpWWY",
  "key23": "4XEuoCq7iFfn4Jdf76hMrKTy9kx7JEiV24Hqtm4oDi5ybj5HeBfzySmGH525aPFU8RRZNF9HkAawmwUS4rKSAQR7",
  "key24": "2QzSx4eh1CkEXbN83N5buRuZNFmUDPGSD9BP7zL1gjfhDoTZH7wjitAGpkUSPuWt9qHvd6tpiwedz4ZR4a44RbLi",
  "key25": "5NAG5gT6kfDH15T1WKm5HxtWp69VhanHLaoQfCdKZpKom8ftzrPZP7vW7AZek7JBzBKbzguYL4F61TfRew1qRi6g",
  "key26": "5CCQ7dWqXFyLUyjXRb3D5N3oLvj4t6gkwDQKRbC1XSbS2AZJMVxs5GwM454p818ZhN1Pq4bu4oiWAiyfj33GUskc",
  "key27": "qKhXS82NCTgEyRfGNc8qWWaU2tkDQFwb4jXpxc6tPkNmuouDHkgEXW9Zc2b2VbKYJHtRntCDAh2UMy7wBSwDNYe",
  "key28": "24keiu6xoo2BSzMYhSD9Rj9J1XKMXsXEXwYz8ixcv9moZwyJWyay9A7gnYj6FUu1yMBBqW8ZCHQ6fSQMPMiHtvF5",
  "key29": "oR5X51h85WvpPCozxW1JwdkKvYRkos1JuZgUsaL9maUFx5mWDtASYKPQqA7bfNTyymTvhPPCym1m4AUVAVY2Uk3"
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
