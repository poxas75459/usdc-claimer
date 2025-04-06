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
    "4ja7wUodABysBaoGdSE4TxjmKvf8srSVv4zNUFAcZ7yFgVXsrQjiqoP3GyHztGiATxQNEnPtP3rBGfC2qWmYE2ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zfQUbUZbL9XfFWduNiQHrHGMEwXbSiNhhjqsk5hbS9Pks1oJ9pi3Bh2FkQhs448bBSpRXmq1qgahrqfBveRm27Q",
  "key1": "3CvceVjts6nP2P3VvZc5mrMgAD4SpQM3NY2oFvaq1eZEZvbyBksjqrzc9R8RpzCY2hHR3nHM1DBXcYFHm2J4RVNe",
  "key2": "45xjV5qnTbhk5ZHWMUTG6ip5nEzdAYCkvKsmQpZpY9xe25sAnv7TwxxQ2uVEm6HUQeQe7pmPs7EQQerNMEgZ27gu",
  "key3": "4cuY3wUt8E84WnMDuhEy3HQz4j9JXRWpJzPyrN3xAsBipL2Dva5YDuCE1EGRXGiCctuukJHF2wph5vLTr6u867GX",
  "key4": "t4fGf5AuhxUxLCsXK4T3beRedCvgEHdTmeo5dGMFCdnexJYsxjBw9kEy7aYyPsCHv5n3JueXDQrtm3YAiNudJjq",
  "key5": "5piYVuLP6LhR4hRF8wYG3g9nmYJkmmSh1vr13R3Q4KUXAqHndR89npkQAr5Lip2c2bN7uQVSYVHjqX4nqseRk1u7",
  "key6": "3vRqHepWqq8DCsm6U5ViNTBCNVN1MCX5vUfeyGnWShMksdqxh4zf2fXHybC7pJrDEfE5cimv3kW4zqyMjAT1abxH",
  "key7": "621yjx58pVh4S7xGpGcUB5HKQQHY8GLMYPPDYGcrbKK9WmPnQmNcrXSWFH2a3nbSZYg91kMpcTCvAtoZBkjoJtR2",
  "key8": "sWuZTy6uXAF6Z17sYxszhDAceoWnQKr2cA6Q6FvLtD6gQ4gujA9j6wngMnXhSJT8xoQzowuznEMGF93oPEbhEjp",
  "key9": "4gQGhEkK8CPQKkZr7DmP891fZyDpEbhngBWqvyHs65u1a7AmZz9TGPH3bDd7H9JUqAQuMCMiHSofJiBCwD9fnDbS",
  "key10": "5szYA75fAFUpNAjYt8zPU6M3rsJckm82Y3t3SWhAedf6DXGt2ayvsuZsn58CeKvP7MLUXunAy3XGJ25fqdDagdWU",
  "key11": "5E7h6UUw3cGCVDmxeT8iVLcDWTq7fEA5i9iVxJz5wqHpD3p5RWow3MqfERiyu2c3E1S19Arzm9PabDiQkNqFsq5L",
  "key12": "TES73JDiqfs5KjWZoVgAnnkYQM1ED6VT2EoheqNi92pJBcv3KxTKEUM1ZJygsY9BhtuvKpSDzVAhDRFMSTmKuiD",
  "key13": "5nRXknG2z5scHyeTRpmBkHqcg9viM9zxYj9ZL31Efo7fbWK18NoJ23o35pYZCwDtyj4oGjBgww7xFbFWrqBAB5TF",
  "key14": "4PDrJMH9VxuXo54sHCPeY2HL2mCzWX5UrLE8G2qFvmm8PDUaAYvYCFVmtJAeNbo2JJbJwx8eAmUtM7RFWNUvgCMF",
  "key15": "321nJhPYXk6hBjMpBvX4FRkm827pHSrmB1vjUSX3pHoBN8D61NQkNYv8btQ8mMv8j59yugbztaWQny5ZeySzSFfo",
  "key16": "e2wn6WMWbzoNstcmYc1NChiKkDrTJnYLysw14NeutNxGYWYBXoqcrESa1ei1uMV9hQXW9dY52wpcWeqBnvq8RMM",
  "key17": "2j1otNiNGN7LXdCMu2aeZfHsRQqrCZRhvEi4nyvttESrfcbpTar3A9n9t3AExUKDBXZiLvnmkrR6JSLj9WoDoMQn",
  "key18": "4TnAiCz9sHbUcxF1ZnUC3GWifnJrb7e1sH4BXXdG5oi75NjC8TLmdvxSc1kDxQoZcwnah6JytzsprCqdzzT6xBEr",
  "key19": "3iCHeYeEb8kQWYNXYrnrZ5ssxXNSTik4uRmivhpjSvQCe9E3gXQKNFpCjdLg8QVEuzbyWUCMYAfkvtZuF2WwXNZX",
  "key20": "3jJfcvoY12DAVQAkEq84L8xif5ENk38HqeGiaU8Vb19ATbsArPDKzw5jx519CHkUw5BBECryWYMC4Am3SR13Ytcf",
  "key21": "3cd1wafYoVNLwhz9TDHBDfxRqbgbdid7RS1K9nkQ2GeqbgVbnZFhc5LaGmPuqLj7TTtvM6vDn4iKHZB19HX6eBoD",
  "key22": "2QqnvgSf1tHVN3cnmBws1r6425NKvXaf9H8mduTDgJT5yrBjk7UHPoq7t2uTVRBgNzFu24rvPKvjbvgz11GHsgjS",
  "key23": "4eecC9J8exfhZgxUzGysNaKz2PfmAgpHYUGxobGv5gs7r481GSky8dUZ7DCSde1Ts8qJkJKG1uTzXKpZ6V4Fkxdh",
  "key24": "54172VqaaB4Z5rfCoSBdw9Nnc82aqeWccee8PRbge2JxsYATcRZJq9cefN9rXaMX1VUZ9qoPdRGH5Z2QhcWfbzA5",
  "key25": "3VP3JUKtvsew3rLNZG5segQzKkSyQ5M2hPuGsYtti6BHDrMqaq3URNqSdkE1T6YzNEZRwmgxbzKqU318Em5ZPw45",
  "key26": "54efYyWhBKP2QXLcNHEddsWoTvBAidzPtj43vA4zPi9j71JZ7YCYhTVR2p3XPBL5h2xq9pHeWNQ3MyYceYN1S2ce",
  "key27": "2Dq6qbqoEqMCrNrns7MNN8u54oDuiQW9NsSAqCuWmCQTXnRbMxsGJvgUPmbxhW8jCgJT334pdAwektTNLN61dQfw",
  "key28": "4vmUqjwbHezwMtspH1yb69HNPyGA7MFXT5f7zWp4ck4e4rRaxCBPAN41U61kMFHHvEpXoKkjc2bxPi49adCdVmAr",
  "key29": "S9sDYUrNPXtBhUg71o2kBwFbaSh8HafMXUtNRFDdMoq9wJyWEtZ5c2EEkVf7UDd9JKVREqimqNXT55Q5Dx9GVH4",
  "key30": "34Cfn9WCWuEXvMQSuiQ7F5uR7QrQSpmwY4MRV4pwR3RW28DkSViCvfiEkJPADKyWDMsA3yfNYRF248z9c9xZeeGr",
  "key31": "4MZVxwaFVog8LTyYjEv2CEZCFeL9rbGx6NeB135NnhRJ5XjzVojKihfD9sWhJEzxpNXfzKvx1wWhWPD8kiUthhwp",
  "key32": "2Xzw37hhqLq39qSjj3DeoM76urDEi3QNrv53pWB9GEyhhHUKAvVRjnc22UamtucF7Di6D9ZNixBaWHcVQ5XxKUTd",
  "key33": "htfDBtjpJseRcZnDwr3NMvMW7GRE263WXJHJzrpj3C8zxodsehjeEzXwGNKMf8SWUNFvLP1s7fyyFZSMJQF7KJM",
  "key34": "ds3AMoB7bjacX4wg9iopXiCJMUE8kD7K2Pqoauq2XmaMhGpzGcSZfEyQWSMDfPgdMfRU4NpEC6dCMDsaVbACfje",
  "key35": "2HeVSZnKSdK6XWpVkoMtw7TiEdUaeHB4QJQHrTfcLoBQ5eEmFnne5vB9TFwAXGitmZUKv6oLz2WSupLiDyehQre7"
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
