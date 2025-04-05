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
    "uW4wcUoDbeMCimHYAEdqBB7sCJu1EDCgHfeqGTyxziAy2Tynzq1xYNhMv3pTk5jSiQdSP6Khh399Fm6Vc9UNA5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U7QqupDzgJnoQV6DAHeNCqSThBpgFaVpErJ8efPXZnj6BZJzx7ctHKan1yYQK6hkrMB78mTgbqZ9jkuptwg6QvV",
  "key1": "5RVMdKrExQExqRAq561oJnnc8GinRRGmTXF7KCrGUnAz6uZ45ete5RSzuQEMabcHb37Pv4BxBp66P4aMSp6qxCQk",
  "key2": "4GGm2eagd1UGE4xuxmB7Kwh9oKYNKFpRhAMHntbscjpuDKMszVVBkuptasojdtvQdp1dieQAPsLKLKsdNCmucCUQ",
  "key3": "4ML4go7NybRXdryqyR6ZEApe3TXC76XGpAzfcp4yKCfrPNNNE4HE9qV7UTdbZLScveEEgPKQW5tBGZpSL2DS1GQT",
  "key4": "337YQPKXj6w1E12nDF7HHsHMzyNf3gVwDRVwiscy4bhwp8kFB8atCgfgbMTWRCDs9yiMWLpm4CSVM5euc8JYqaG5",
  "key5": "yZrSxe2Bz9x3JoyuDNRAEFKsLr9KwpTkTmsfj8rruvjb1Ev7RYJpchPSuH3jQe92gCb9caGJ3DkKRFRkhUN3PSy",
  "key6": "aTaEnFQYAcBH7SonZQurHgSW3wKjgq5oyweEDSsNFcMb9AW5EAG7S9bpc7NehnmypWR8K1p3MnyS8PxN2bkiQA9",
  "key7": "3hBzzSbrrKTKvwCy43L4mFDmGztJRPxKihnbxthFKokojDK2LtohLURLyKY2pyxgXU8mDK5SUTyUYyVxZc5xcRAa",
  "key8": "2Azk1YV7kdJvR6v7urkVD3fqoF5XxioC9ZP2po8JPRUwEZr9LJYNY1ckC8QTSzFc1qFsMRLd7zqkY3yvbtLyuRVv",
  "key9": "3QqAkRv2bkUoHKpfMeWitZNh64wnfzA3eVw5pLtDnQf2nXjUwgXQ895RgVruc3JGGZRjWz9H9pWV4bcGXi9R2QmT",
  "key10": "4QJcjsvQ3mZEPkgNSqYJkK7dmbbJYDupGZ2hV4ZNreNMb3BrVvqXUcpWouXZr1jWsXiHJ1hAwgZCLV6FYs4Qkcz3",
  "key11": "29cYd2f5ffWJrVUn21EXLauy3NUM4mF6WPkSJv6T8F8KGqpKdbkxjp3HX2abPw3WjGSQKVgtbS4ofpeTmrRJWG9m",
  "key12": "R8BtX6pmZfaDqWYzEkPwYbNoxMeKfp8dxqhKhm6Ms2sdJApfQKp8F5domtd3XRBsGQ4iYgyiwgpFSJxNChExT47",
  "key13": "rpvLGWhPnCaeKZM8jib8avnBhCmKJkv7894kxCJejTubJqGYSASaVcT8p9DhXTJuxGj72M4o6K42QTnoD9GsLkF",
  "key14": "63KhZFwKjsRa7SJW1hduFSWQrj9p36B88mEtpT71HzicJwKCzro89ej2KxVbyzK4a8UkkRZ3ApZs57D1ccFBUD5v",
  "key15": "3wPqeghVVdqEgstWUnLQBBGi8Xss2VXxQJAtUQdnquLVqK9AjD8p2fiRrPtCo1gUN7xN7H833hLiUYj7h4KSHB4R",
  "key16": "fXyvksDgbfDcPwaGuEePS2ghupbXc3hcQnKQcaJvan2sTdKCy7gNiJJx1aKkD2yvvd9V2w989EFXrquKUEcBhhC",
  "key17": "64AJNZsu391JdKXoPeVBwHcobLbpTYpfMHbmDRizotbouGpGkGgRbHZwdQhQuQzoQ3WyBXeGEmWmX7RPhs7zeb8f",
  "key18": "4Q5qbvdD7o2R86ffTxGqWdTC5f5HkwfgdmLWdUtz5mDR3YKceSKEbMuJgkdRzKKQbxLTSiW2KcGGNcveJVUax8pE",
  "key19": "4iXeJir79YHd2oC6AzbzoLTphCUzmwj43okKDhJAjQJS2ym8k7FKnopy1KrtgCuK67ACxbTVRdnqRaqBFV5yGxx2",
  "key20": "wCiNgBW15wBcmkayp9QHjMGvakcUqCMc7FdFuSFBZ2WEmvFUS2JpCExvMUqoxHnJxE7iAHjnCZBHNJBbiYM7ka9",
  "key21": "2uexb5Z6huDNXuMkkSx92MnSoYF86GcZunKaNL4BTW4UjH4cs9iEA3WtsdrVK82zxPtA4tSuRujX4TepXQJoksqX",
  "key22": "3BzpocEPMFqFdzXiadSzNkiA4kfijEsi2Pf6gBqU7U4uQ7Ks28HJDxdwhFHieeB3SCVcS8A4mNK2xgWVs85i3sa1",
  "key23": "5mknowmxJKgcvYCsY7aoVR1bUR9QHUXpBVewhQNKyMzRnVKHtyUNz4hAbLkQ2gojrQQDgQnMJvAHQDsKFMEoz67h",
  "key24": "62yrSoyKWve48k5gPnza4XsYcti6g77L8Zx9AvomXZW1atdJ9u3D3FGBYq5zE742eMiVghoAfge1Tu4QDp571nvF",
  "key25": "3koedahU7ZCKRvwQS1KXZptvodZhAxRWospi4BhHcTrWJu2g4CvyxtMuCbqJn4nTfZhn6xXNaYxJU8rykycY2Mxb",
  "key26": "34foZ5v1pUuSKdqNSyWxPXY8zr9Buh3YseZAqYtHusNpmvjKrUK58Gz5kRvT4VkoZzRoXjpgMgLj8spWdZypRVqz",
  "key27": "4rQ52eT4JYb6wYW41jpsYx4Rpbe5wCfvvawfFyQJMv2HoifHTxpc2fsxYUDn7oL6A6xrefz3Zo1pcekfy9AZX6yM",
  "key28": "QSMTDF6uE66TMgYV9WBtQCb6Pb2wJ2nQbaFP623B6o88N1RXZJFdDErqoWSkDd3zr5RtiuGVhdWPUpbuHRnsdXV",
  "key29": "3KbFWwzf23aFtRqLSF643iuvTyCn7GNQ9nV6ELpS3BZgqZd8P3MJicRb3SU4T1zXRaguCRr9pPbvBjrhDwkf6RN3",
  "key30": "BerFskazZ6F7UpbpJn4KVkSuCbuLAfDfdJtZnPfK99iCcXnVkZgepJtt1AaNbfCANcMSucbHFxvtZNiHysDXhiu",
  "key31": "2BEK2imwSrFEoAAQ4gNQATAeG4A452MhgEVQEya94E4w7FoLVzAezKKMmo8Hzx96usoBJsxo3ER9eH5bJXTFhnyX",
  "key32": "4TdL71v9cwawoVsdGNiLKWmA4SwpkhJ8FhkaCHyuskQnLyfgCCuaC1vqrWikqMsxpoPRfuFXmz8axmXWHy6Corjn",
  "key33": "3xBUyaggnAV5u7RYUX5qsTDnvHzZA1ADQXRhTdGv4jpRkCAem6i4TTSdhh8CgZSL8ywq2tFUchP9sNvQ5Fqwosvs",
  "key34": "63z3QLN3XxcanzpyJpAUQqSdqhEZNgbg7iEKTG7NxAq32mEi1wSkqTvf5b7z7drRFEt6sRqVQ2188oVHrhNaATf7"
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
