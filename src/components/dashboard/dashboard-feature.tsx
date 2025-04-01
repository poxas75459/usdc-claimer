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
    "3WzTachMSYizr2NYvnWazZPua1SJUrvbmcGiuSBYqcDS6xidrpkXistixsx3X5s128Mu7ij1sNc7HjnTADmSuyep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pYHtZXC9r1QhyeGZaYuJJcNRLqdrboiNCHz5Sx3Z89CE8R4eL6q9VRPfYTuALReDqEgAjNv6exMiUsH6XrNNbUY",
  "key1": "KbgZVCQmxsSRXMMRKKMWpHjt4EqHQVS4Hin6WBCeFWP2rSuUakzAyuC32k4R2Nqe1v3VoVoEtCeXeUGmUSvf6ey",
  "key2": "27mgTD1VnKm4Xk5bw2jJTr5YmJTuGD8CU3qzhyu3DJfzVH51QPb89cezs89qQVTbZmws5EBabYye4gQhe9RyUrsG",
  "key3": "4b4hSGLhbsTYLXfC56Jfwz3sKL2963Sn1EuQtsxU3jvM6vpnjPHuru8fvT8MwPNTPom26XQe7vaUAmqEsomVvZDY",
  "key4": "3yNGKVZ4wUnfASvH467B3To9yZficCbWZcfUkueBjisKs7ZCgxSsDU5C3jtQELC6H7pKvm9eAh2rTLpnXRYc3arC",
  "key5": "XuUeRRJFkyJoT7ARKDgfQv6Mw6RbV7DU2i6QFmuT2SDog9rpDc6Fiss4sJctqY3y1fbo3qsgCN1TRVCSBdFzk26",
  "key6": "K28UZXb4FE7euSSV9Z3XcjaQg2UggY9bovJVEhDVd6QViEC3Foj7ACfC2UhFNYP42na7CSMTtFn8AHkpPUgJSLN",
  "key7": "3qrmFQfehTiP5ednT3H7k5oHDQDdzceVRktmv86a7nEktysAxcwMdbGMyRH3z91HriYQoM2cuHhNRNLBASAcGB5c",
  "key8": "2yf9dE8vmSVhfphpidsEc6WbnrquqS1CNqfQpa4Qu28FHmbVXseS9cQigym41DT6Mt8KubhXYkgWNAusRyZXRx3R",
  "key9": "4WWJ9xZHYams7EAMtU85PRcvaJbBfYfWQueGK17VPMGvXtemV54Y4d9ZSpUDFb6R5GeEekpucHqHGVoJN7AV3M5k",
  "key10": "L6LNyEP9dToseGErPzpWxocDp8wHJM3YUJy7px1odbWrDmyaxM2KP8vsNidAc6kW7yWmDvkFvAP1e7FuEASgo4e",
  "key11": "3k6D9ZbdevDqnevE6eJxCHAiyj1TwZnZPXUz6izecwUxZk7fSLzwUkR88U8YWCxuLToPRbnZ9mzkXUbvEpxVGyXj",
  "key12": "jR4REyPVfehHiuxA2xH7TSKDFNqahrQ6hq2eGADbQzpMU3r66GgW3VySmUj5mvBVPNLwKLYypioHrYWNriD2YWr",
  "key13": "5W8a9fJvrdPbQom24YEER7BnR9KbCzyZiH5R2crfCRyjmM49z3pK1L2yC3AEeSeHYsaJMuj7oMfQrjxYsewYG3kt",
  "key14": "43g6YAHWYbH7mrfJVH1UCuS7jbs4Mn4rtaueQtravJKVJL19JRgxV3oEQybcrRR3JE9THA2rqEuyZggN9tXLbkzP",
  "key15": "3HKQ55NivXyg5MkzWvUNuLefVjm6F9JqBC1qDoygJbnRyjrptdsKaaPE6TU1tFVC3KmZ5TobxYLFyfcQ4r2LCWFb",
  "key16": "3SUc6dwG2tJwnoKu6LjpdTbspi5KrgY3wtexoUnQjzmnsK1Uf4wPZwmwyVVNCj4HA8fWv4oBghngaevhpngaY5ab",
  "key17": "4HvshVSbb698Rhim6cvdYRfYKwmVpMXb2FArAkLBa79MnSFzCrNiZnh157aHi6LWDmEWXZZ6ekSygZYZhUztqzDH",
  "key18": "Fia6nRvSCxax16ZHZ7Re3DHzWXEfFHrqobeLUP3QPYmAaXAgABf8k5VvwWnaj4zqGJEaSDpZkBnqdMf9MTf31d6",
  "key19": "5zk6dNtjHC827rdJPhPE4Ns5hdqadL5RypZcN9RJMBnNNHQU3bT1dLy72Uqcig8F1aom53rX9UcsSY4ToaLsNoD",
  "key20": "4ARyEd7cx9fWbGW3nuxF98Hh8JQJ75xdHac8mVsAckXefr71VpTZhg44zruASQyWSiMEBxHYi4Ri8C8nUdBdBiqL",
  "key21": "3SbyCcF9VWRiCYFboSpVewECigBhM7DNpe4VNjD3vdS8mhhsyj59pP2ZJao9RhjqjKFeDzx5dxhF8b4ch7xAKw6Q",
  "key22": "2n1e4bi319eFjSrCkLTa9oc7mNqa2ZLN7yErqwX15yxiea1PewFqXgnVgECYusa7U7x7q5fRNcLLJt3cWrcejnP1",
  "key23": "57YoYVhfLyWMDgh92PC1FRstXmyRTjA5Qd8oNyrMhc3cKnuc4StThPG9hrcmqfV5Hiw6U9mwjB8HPL2PvpSZK8Yb",
  "key24": "2koHNP5L2Sn3Q4cxxmRandDwdQnNryQErJtqfYAtu1cJDVDMg9ZDUuCFzGFdFDWZvykayBWZg9EgLwiZipR4SYp4",
  "key25": "4yhHyfd93JDX9jQDLcgsHGqiKj53b7oYmGbb8mDHqZUizwEVGhfsx3G7xwxdER5xo5NLb9dhntWxsrS24GfAS66C",
  "key26": "5JB8wTBXYyZiy4XntgkVhghMcNzZ9y4NYSWEdwGwVEdTggf3xKBTGiaTRu1oymGaEao1PhF9An51h4yc4bDhRhHU",
  "key27": "327wAaLHAwkhsyx7n1zb5rTNMaHn2PHooQ311acFS4KpuRByR2e6qHrUFmQ7A1DQpBkz4qKyQFU4EmaTTjDB4mfC"
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
