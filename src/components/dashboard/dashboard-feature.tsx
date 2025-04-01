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
    "tbRs9tqjxZBAC3LNmUxmjhLdHw5EhUFGMVdc7MpWgNZAJPwhEBQZHdKMoLorQrX23cssHMneKPNiXvTFD5YVYin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dh9xeHcZP46uwiDZnYcQt4L8REbxagStpLjgh3Z36yySFYCwwypx3oVXLpfqKtvq68g4KZGmZf1EhYDpEzYhR1D",
  "key1": "21oxV1gcKuJiEEbLCNg3Wj6J7zD6n7KiU2GoAH7BcNV2gUbssPzqENHNcxWR1AhjxcX6KmAD86VdP8fsPgnjuumN",
  "key2": "4ac4Ln67WBiA1hgVotSoHbzygPcFj32oSyXG5ntGoDoGtuqwHjVzPtY8VwJLhMaGw4Rt936Q2ikCUHYVkQCyP9h4",
  "key3": "2RYJRnypizCg1uxNMSEyGgBL6Fzoxx94egnc84fh48uzJVVUvoSYdjDMsz7q67eEiqpxea2KqnbVcWytrFF9i4ff",
  "key4": "5cn2Fapipw1VVc5hppJtJuKe5nK4jGLUjCXazanxWqKchMZiu7mScnxrYL7y4iGXU8j2Ym81eEEqjAKdk2bQb2ro",
  "key5": "Ti4XxrGHHrMwYhN1cAsbKvootzNSGaD4av8VYjDWizHxYKiQjmVfBcLgFDDFTAmY4o3MkGrLKFVnvzrRcxxwyxf",
  "key6": "5Vxd5MXzmQNoWfJEGsqSyYrL6t2PkpxjB32i11cZPJ21S9WGVpxVBjo4rqQ3SXhQDNFSjGknjXCTCfYef8hfeXao",
  "key7": "5toxSFPzw52d8Bnxo7f2AfoC9LuVndfGC36hUt3F9WRPnemE57degxKu26rVNNMbYACseYGUHAqqsDKWYDiX7PSG",
  "key8": "2hfq5kpxriJmQBqfR5LYQtKaLh3EYW5PpLX2nrgjEtcKKUcyLSg4cLmYxwbuNXNDNHT233sjEuUEriL7gtCXf8oe",
  "key9": "5GfdC6jiCS4HuzMYAGUz9Afx27GKsVyDwUnKsd4bcUL2x9YBmNJsok6aMYHZW4KmVStMfJLVSEhK4wPGb1Up6Emq",
  "key10": "f9KVHe3zQ2g5jwRSqg3owmC2KjYrKwuDkGivDe9pBwZocM5Y6cveqbnFBM1ETLwDrVZ19ShMVizfhFdtzWyCFuR",
  "key11": "2N13wm3vX7jYYdEnNTpVrToev5ieSokEbgjk3BvachMVCXSSj6yAo2kBVF8cbEYjQjX6a1G8rU6Ej2MaeV6HP1N2",
  "key12": "2GdiXLeKZxhVyiZjRbVTxNuYS2GtmHhD5cuMaxaQp2yJ9kEgQWc1z7S2scCMqftCNy8GYT5zBGedWmeMDZ2UcW9c",
  "key13": "4ZGNiENjFLvW9XRWgYPqnkAD9akGMboAgFHs4KdH3iqnsTgZ773bcsPbi31TJhWVJPhnWy8pGtquqBweitFXn4Zn",
  "key14": "4KrPoakvTakZ2qwG1P4AacZCs9HJf1s7Wx2JpepWhis2WPF7gi6ouAXU2SFj4CZF2sZNt8QuDPRQdWe7qih43ZrY",
  "key15": "4ppPCNFQE4SwFPGs2RpFMLqm8H2NswB2m7z5s1cbcan8wj787oetLWjovcf1kcsM24gQQriFUoVWf5WjbB9ueyVZ",
  "key16": "5AnqsZcPMQembqorVghB2aE3vtyuU81UZaCdwhKVqWATD5rjogXb5CMy4WnUrtBZk8cQknkqsFjago85bfJq58AN",
  "key17": "dtc2aCM6KpE7ZPC8SGwHqFtczDNz4hGz3RdFsAM9btFyAHa38LZ6rsYctK2iiRuXoCAYSocEc65dtFFU43FudHw",
  "key18": "3UqSGkgWbp2Vy3DiyYC2CZ2pF2JbvfoncF4sHnykAQ59DeoeYd9qdPDQyXafbARuNCWj1uQ8FqWK8MFvhAiRfx5c",
  "key19": "4At9gpuGYNoZqTU52V84oZfQBoMpqwqwcNnBQZZD1tQaY4JjvSmnUgji7cCQbxvwLKYbjtL9FYSYyYCCyQYCRxFL",
  "key20": "4ELEKRgZ3qkMrFo4CSeVqRJEBRmUX6KnGEW25t42qs7q8osyLQpgz8dJX5zbVyGGChjv7PKSMXeRjbZXZ4Y3xgWi",
  "key21": "635hPemW5sj3nZixrEjX63HoYb8XAEJj4W7SCQFGqZyKAn5wnUm9xcCBc7fphrEFFoCukwX9rHEvMQCA75hqH1PL",
  "key22": "32H6djDku8n6tJF2Bov8Nms624fBEjVShW7qQi8rd34yLz1xn2CvDugGrJGZtCtWESmqTWEh988EH5Jfpwb3Qz3B",
  "key23": "2ptYmGpyhAPquWNfvAaSAVtSfAaAreXEnmt9MyqVnk4vf6whQYKTxN9fH4fjqdwjUFo9PUCuG5DyXZUNyqe1KfJ9",
  "key24": "3dCVLC9Jkw8hvJHjnRUv2yDrwMHCZRA1e2Ps1dd1PqZdmPr8m22MyuF6Ca8cnFkvVArwWA2BHTcURPWXyHuEAGS",
  "key25": "2hz7rRt9GXwH44VKYtCoARWnUQCcGbwbekmLmiCYxKCYXve9UCJigmgEWsLye2WKaDi7VioWmxrgn9CnbwdeFBUZ",
  "key26": "4xJGJkvaiLsvbbM8FPrtVHBQ715tCKh5sg3s2reaLctxojz96UGnnpYw9Cfnj3AALiKbeZ8A3XrCAVmp2DqWfU5k",
  "key27": "51zxFksECJXWPhm4bZXWLXMMLezXtTA3GdNbiKKEFsCco1CDGgZxpJHGp6KkTmTCmon9QxZiukg4A35eQWWb9v6T",
  "key28": "2RGWpFmpetchDcQqLZZT2EY8skbRnLMPhhEZ9bqC637p9dMLKtNXsaX64DSDMKortWqpFDsDhdnHwFCzzA1i3VeC",
  "key29": "3oeA89cr1cWyK7kr9NRAHc1wnHV6AD7xJdJbV1ksXRqRoGHu497ZLUG9RPhQxTFhBUPX8Fqw2yJoWb4ASGD9AvRf",
  "key30": "2FhJAMRAGBUn22qJSMxHvAgtXBk4MwAkx8czk5JydKpC323pfNLeXF39u7ciHnRXmo1yEer9amVWkAtq8GWwz9ZT",
  "key31": "4HsvCoY2gWKZuvrqoHgyAtPjaAhMkegcCEkzHgLHWyMWrZEqVfU5Edw2NSf2JkRL2iBMG4pkyDXhEw3jX6WyMeLS",
  "key32": "P78HzPV3LFnxeRnAtiA3GnsgBJByscAnFPgHFn7dupi4aUGJ5uXPbNCx6zcfraZt922wJUFmFmd9m1uLiJYsPrt",
  "key33": "233NmgpvGcLCrY7QV7K3nphYPER91J8dBfHRj9Q5q2wnovvhtxYeWtbtxo45cLaUhJP1yzmat7Ayy2HH1pfC1t4u",
  "key34": "3vhWn6cdsFW6jN1M7PMg582gnDHyypFqPMJ9fxjm6tbZFbCWKfUpbSY6FW4aVsQLiSkg25Qs9aPLsJ2gfvTTdbkU",
  "key35": "3xyuSkTawpwKvcKr4kpHvfqH5SyCpH6p4LVyxK67QKM86NcneckZvjNoht21UNJSsenS3m5hT1XMUSxB35wmN5Sd"
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
