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
    "4w3s3awu4QT6h42yA5mp9PMsDFSfaTSrGvMeRNotWNmDNWEj9b5hvcyH9Zb4DGkPq2WZa48JHEQhdbE5FnAym86v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EEPcWQM7HyjFSshPgLH2mC8KmizXAQcAaGuCJa5e8jjQsjYJ1DdHrF9vWDNAo4an4nXS2ujeyXKok1L5bbhoTC3",
  "key1": "TjgnpmcFXYgxBTJTsMscSjpwTjxEa2RiuXx4BF622mNAP8TT4Txsw6PrvDHM6tnq776k9Ym38Pm7Wh6Bsn3bGbH",
  "key2": "5n9M1PCk95hCHjHb9Gu6D94FmF6tGuuTcZuHzYMXDtBfKF7ScrBqPz32mCastFKmph98efbNUvgwgJoo8RSWrnQB",
  "key3": "54NKH8DkFrXaj9j4u9E3o9vpeCSfF2iKxhsRP3Py5PvYzNnuT8WxQxbKJdyGhEF4BPp4zkcigKMFMzSdzn2DfMm5",
  "key4": "24wdbdTJairYaeQZexu9DkfuGAgYD1CNiaqKBqfiEX4U2qXSzRFGAKYiku7xM7GaGytxx1m6iK6KkTJ3aYNZKWSs",
  "key5": "4yu6ncYxGvBaU6Qo44yA2619rEQPdndMphjTgG55A8utK9WmfxtdURzD4BScCEwKeTRa6WMey7S7fxtgJyANTo8h",
  "key6": "5RBBEvNYEZ4tuZgvvd8mM1tGyJfqJLhqVxvwRsVVhyJSbyytUsiKmDs4WHR7KohWAbeVN5RotfcYaTCxRj78tNXf",
  "key7": "4HerFWHe7gphdimG6T3yVyQvae42VqyhiNM4byyHjyDazsGUxtPnkBzdmTVRaksLDAGQ7tQwRHpnRVKVkQJdNujv",
  "key8": "47TyUma9ENV7zDHvdbRMhbg9kx24vVVsdwpPP9Ezgz4At6HwQ4yxuKoawj4oNnqc7pxKep2RujzjeN1DnVyMHdPq",
  "key9": "3XKhuvpVHaiEt3dws5zvtjjnqorZQx1v9LL5kUj9F4VwLSrCyeWqx99nd56viwwWt5pKDvSk2ddvEVykar92GJo5",
  "key10": "2itTPUSm3bWpmbzkdmJHr81Z6QX611yo55ciVtUv2edq3qsqxo7vwq7zF2PYuCrWbU361zT2mD63ceeNBSqW3XPk",
  "key11": "2mFA8NHvXfrbyZCY46u3voNKDbGqefnmkiPMiZxBYYkUiqj1NNWskNj7dbbheYzTdt1AZR7rJb6zUHGMyHDoyQyd",
  "key12": "67YbwACxHTQiJnSKDNRdCYbGVnChHfL6G4mrg1bQNCFXLf3yoGHPnPAYqUii7Ephtj6pukvvLFmp5T4y76uDccbJ",
  "key13": "3APWParDYoVEduDdgpwug5Yp5ci87YjxSPc82oNK9HMBtvDMkkSTEWPB8GbH2vLBFZU1AjYpd33xxAPCT4j6FPnM",
  "key14": "4LmUAFfZ9nBwizUWWKgYx1hoeVPhfMvvJM2BX2i9nrVTJ2WzLJZve3SYkPbzS3SQrYrs8w19wqRRTVE5yydMt9sd",
  "key15": "2SfkmzsNB2djwwJ1errrm4hwkhhw8NvH4XpuUAerMoUWtTp5KimMZCEpVHYYaGqp2rEMGBEfoX2auamWS5dhJDXb",
  "key16": "5CkQDxJ9787bYgk5aCm1WALFGD9RJRx7RcMjoHt3nydQ5RyNMSTqjXr5hear48gLxsocP4oCkzAT39YicncUTkUV",
  "key17": "2qbb5oWK5RWVVfYW43VWDeGDUjotMGuHUoyxPV5ZP5uippJ7E6odtEKctgZuLSchryvf1bbYFFnpaUFV91a3aWjR",
  "key18": "SeDgckneDL7K16bMy6yYZ9ya2RrLUdYPrSJz7MB19RKhjLx7qa6c6rGiy6o55hDphrXBw5nnrvz9Pu93zEAmQ11",
  "key19": "5WSaY4k6aTS4cKPQGSqVP1DbSzwE1LBpmGDQRkZAj2M7vs8gHgXTMEnQB8oJ1J21MuzzQ26Vka9s2kMjrLQRBPdp",
  "key20": "5ZoWoPUMmy9a7qNwpGbEGAwhXNDM4BegrjrjkY4pYDR8a3fdWangmuHGhJiiK3G6rtPahFn6Jp7CYCkYPyd8FAFL",
  "key21": "5qEKy7Hnu5Ekoppk7PyYrwnQec5d33Z9E8qyqiJjomjh3fC34qjyswJESfUPXw9zGKVoRAbpA74ZX3HsvMALRVbN",
  "key22": "3heLwixMsxPDRZfM4gYbsdXbLuPh89okZqznrNCDCuk6is6jo3JWvT2HYLXngjajZfdopTaPoAqHKHJEzfiP4Roa",
  "key23": "4anNZbTAXXhBJX6T6nhth9FS2VUJ8rKduoGF7Wp5AyRmARLiXCdYjpNJXYKovjVQxub29LRcjjg5cDbYLDGDWJsx",
  "key24": "QWYR6xe15iKGNtvvNxQgJt63KHXdc63SbyW8QAFtuB9zgcQgN3FCd5bcY3KzHq1QRLeczGvUAbGSszPyrSA6fiv",
  "key25": "3fUrJWXSPEh7Kh3diubyhXyBgF93yxivAsXwtRnup6fMCNDQWXsrmCeZW6cg1RrJtSQMELGp4cUi44ruUUTGtPXL",
  "key26": "3eUR4L4vFspyFRdrqpxqbH9Uss4i8w3V5NWQZuZUsDP5v2ffobw8MTuy1g2djc5PDA7ZzxVQAWLpMMxoiT7mFbgh",
  "key27": "3uc8NhBVv1XSZNNAzLi4Brqg47stCeh1UG8eWTCNN7Ta3ryhkSH55RjjoUU84A69F6ZHXdHn1ejJu9e979pB2S95",
  "key28": "5Q1NGw5m34nhY2KD37BoSS1idskTvu1nmbMfxcdrU2Xs2RwKTxwSg9KfvxyppTroskNHbNQiEgpv2namSg33X7fS",
  "key29": "e6bnRYPp4qj8qA4knPbt2GFFDp3ayh5bHUxqBT4Rzg3i5PFoNGhFspwV4oJLg2vsrzrefeUznd8fBy9QXzP83X4",
  "key30": "2P7ERFHa7GhsX1HFpJnocFXGCWuiD415LTxpnRfmQYyzE4gyLgVpVzTKBR7zERVye9D8Lmh9TqzayFRY7hGVeMjt",
  "key31": "PGmF5jgwL7NracMo8rqZVwed3PuRSGsxM4TJ5YmXnB3ariXVL1Q2frKhYRmT5MLwAgKViCxR7VbFMeFnnEpHa5h",
  "key32": "2685qydKLyiwapUCBrUJNyqdfVp9MapvZMnGYuH2jXzZUqGNZDrL6nwFGzJoAujNgTmQvToCH2o9Bgo5wGct8yw6",
  "key33": "vYoZYtb4G93c5Bg9HNvPMkT7ofZXxnZNQHNAe7VrAhDkdhM7YtZZF77wyShsGquTq8Nt5C4DSvrEzdyq7X2wh2n",
  "key34": "34CkjcCJziUA9yQxyu4B65dZmsSNfhRGGKmTvUvU84hTgcHdPhcqZBx2DdVigawQXT4yWCfV2LuqjpeJa3SziXjV",
  "key35": "AKsBdwMFeTe6mbHXSLAqyegiucSWJDGGiRumY4k93oUa3XPBFqQwk2eVqHLvH27X9CYCLUFRAh9gKDJY3ykYUkJ",
  "key36": "4on8jXTt2AkY9H3cuw6JgWh1D7hVkrGnMVUpY4jHbLRXHW3yrxGrcbxHvi3TfZpKPJgJD3yDJsYKMFBqfmuZRJDK",
  "key37": "4ReQpDY5GsVszEJqJ4vguqnf5xTq5cHeuMZ57nSoNBGgwUrA2YLBVS4KQPMjs1d4wzfDNEXgBvdtaf8rjF597JP8",
  "key38": "2eWEEUWCuLgDtkrHfJZEENm5zbU28K7BeRyxbbiC4N6gDiawx8js6nwPYLr6raRxymfq3fXLNYUdSwHzvH1i4hhX",
  "key39": "2u6HYDfPXLxFgMBpTVwdthCKYwAt3fJPSSNPLAW5jC3zDP8Aknxuj6Lp7jNLFnWFJwGq7rY6ibpHxkyt34VNHgzh",
  "key40": "25q4yTPEDVeckzeBrwd3jMbFevGac64YhtLoywtTLTPqVHhSuKyzK7UApgsK88477ixEJMvnTVEQ3RmJ2MnfyXJy",
  "key41": "nKxzDcP4kBsvtgtxT9beb7B3jRH5uBpmGPTe7xWPTV83KuZTWqNUFBKjEeXBmJNP6rTrv87GBuVNpDn3FzXgGnM",
  "key42": "2UiAqQUjpRcbufB9kP7UB9DuFyZrRPQfWCZrAfMN9gCKknRYB7yioFtDTWurWxSCKJaAQP6ySan5brnHgRbwTDQ8",
  "key43": "NrEABdhSY2gH68fh1SPkaP2tU1HnVV4wVXUX4V9mP38We83wWhe8HdrjLbu8JfTRaGZG8CnPUqxjeRi4ANc6Ltb"
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
