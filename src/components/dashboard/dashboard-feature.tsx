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
    "UcACrs6gVMHDX1uGjVLpqKQkTP4MGL838VYoeD3KY1u2YJ6KMW1mMgRznaukZhRYGM7ggqLW7sdY8yH2vbxSjyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GBwnu25nUMKUL9EG7edQQC5qUA7RyAicLUVNvPhMagMEYda4ci6nJTWXpepyXkFw5QDMExh481HrePCuwCPHcGc",
  "key1": "5LKdHzBvhET1tAy3umSbqEKAqrXmeeTWGN6krQvkr6F2JqRPtg8MgP7Da6SpT9qz7mk72gqRAASML2SC98pAzugL",
  "key2": "5VkeFHyXVG2JnbLMFMf9GgY8ieRewkKH7s2vnPryjQjqm5tvyKArXkP47WR2Wu5cL97FVFJgMMgGx3zP31vmwtmY",
  "key3": "4pzMAz3D45RbaFBXs5HykL6i3tXHRxfwiFzJ6rrd9mqV948rQiSfTPtd5RTGA7WUDFS8Q2fQWQmnYx64sBWCt3QU",
  "key4": "3xraV61q7X4Jari8ov3wMeNPgLdgGU4C2Lr6Q6VzkkQ3gRhWo1w8o99g3EkLEQy2BmkMp5cRQVtUFTDQwtP9ZxTo",
  "key5": "5pLjEjYwY8bLnHXAjkyWanjcwnogC8LyvzzbYTW1SaT1HDHNNktQRmH2w6ay7XxZipW2VuTSb3LFzMFgWnCmM8ZX",
  "key6": "4mVXJ9mwtAa4xrcXpioSRSEvfzAihttWSwZyP4MmeWYD8DSWR9NrPV2Z73TEUENAwEbWFNq4oscBJWmXCH97kJNx",
  "key7": "3tfwLz1jCLRweN6VGWayWscRDqCsvQQeUbpK26nqBBuSaxpD2xA24dkQNCDdaA16mLXZG2bE6yvaPiCihv3nRm6h",
  "key8": "3SXN6CPMLh62vkPoFuwoYsABKDRKgPcVrSJkL6Wv4HL6GZD4hz8D5R2zwXBWcPbfY3K51yRPJBG6hnYW9xYq8Pc4",
  "key9": "3sLhRRLR3RXmTXVrB96RKENP358mCD5bJyKnBgSJ6PDv28vTziLs7hAzsS9a76bm1LXnYkMU1h1h1F1wQvwmpZsR",
  "key10": "4XzMQDqui7fa1ytZZYjhxQXkbneX2wQodV4EyzPTE6QXnQxsMNaEJrPNd1TGn7veaDMCSVBpkoorYP92UkCeoJcK",
  "key11": "3nfKtbXGHQTUbrazUz5KcXfv1Z3nHVeS1K6iiQhZcVPTa2dxwKvoyhigmvufoE9CodLBSqx2PWuvK9AFnfsfMZYu",
  "key12": "4LUAJVYhfDXFzyQ6NMsHhtt1uPUAg2i7UWxr811vzs9VKZGCmu9xMH9rn5kQhEisDp2aky4jLwb4xh3FHbmoGaev",
  "key13": "3GvMm1ehoexJcNXMdsf2Z33bNYjHRjPKdUHc3aZPgnUNkMdd3LtxeYtzNqydtvGcSkqcSMZDo1ob3upA4NbRyiNN",
  "key14": "XWeVbTroJAFckYad1efzje8sdyfhCGHmAkmg8SJDLWP3jPFyMFrE4rqyAgf3G712CvSBSeKFLeFEPL7THAZYb9w",
  "key15": "3pGSFy6MpBXkUP7GDZrUTJJECFancZv72CE3RVyDXzrnNcE2BfotfhSiWSuNNR2rxsQ4HK3H55ycjryyqKQ85hGq",
  "key16": "2AzTfMfMfEbXki1VC53W2znKHF6Q2RFd2jSicHjMNz1JFxfH2xp5EQhpBNrkG16JujCrayyyZuuttvfTjQoqxFMK",
  "key17": "3W9YkG9g9Ka4vaNHEyjaxnUPAb2A35Y2pkkfRYHebRKQP1KRsVtSLF5e95GaXVBJxmfWRnJCVLykwsLrxXYPZGXR",
  "key18": "487qV8JjESDWck5xVS7cPx8nUVyjvdQgrdc8Nap4xUWAqaGVtVywJQSTsbb6ebeB4qJvYY9J2NtBJfpxsn5vMtfw",
  "key19": "44bpBta6coJKcd1R7sre86FP57Umb6VamoJWk8kZecXResecDm2Zd8LnpK4yxPbLYmRw6a2mPn12eqfzdn55SkZY",
  "key20": "2K4mZLC2enZJcKLmFvoWpUgSfMEnrnrbuffYJxoUz5umEkyjMpqCJRnkAZTvpgtJxDGwVnaaajBif5KPXeRXEqgG",
  "key21": "hnvtGPrthSaUc3aXEdsg4mv8CS7zZqEFgo7ciV9PubEkSDMGvD5ttffU7RNKnZzgJRq5axNeGv4a4GNmLoyUYve",
  "key22": "3RukjFtiwkiaUQXgZtka7oDEPQARvNzc9CBjFGx7gMZWpmAraxtKQBn726msvojpprbbrWwuJW7CkcRg6NKLdrrY",
  "key23": "armSFBTdAmUR4d9xPKAaKsHEJKoWU8nyLRREzt3TK1NfCYiVu6ihZ3D8hhcCmw9v6LA5Tuoe47r4ZV4Fp9QaxmJ",
  "key24": "aqoGp6fvD5F6wBsvQ2PxBc2T4jRnbJbMRxP7DDhgXTj9k3HbrezPR3vDWt961oP8cXnAA2r1QLf69bmr1bSrPhM",
  "key25": "3gpAbR8sqDxiTQxk97dyiivxUMJhHmoXTGkCu8x1E7BveQQqPSE3vNPWJz6it4yraX8w2rkz3a9kW7VNEcdQEgrw",
  "key26": "2WByuYsM26puq1jCraj6xKvVwbcJRb1s9mLHyiHYZEdHbF9aV7vYxnt6G2R4Zfa1gswT3YZgtiwUt2QSMgNs1dme",
  "key27": "2KsUs7Qg7gUhDkPQUDba8mBqZNccp1zV3J9EMi22qS1vhuSu1oCx6812BPQtUMXT9GfuuE2gfjhGknXrEcKGNxuZ",
  "key28": "589MDEYjQiy1Eo9X6hfRHa79H4sMEDuxooUwLJ2HFDGC3zmq7kCGJ6cWMgxCCM72KFQZLHjMk2TRmdLJi5KaAAhB",
  "key29": "5mSSuwHNy69op87xmBG5pqgMUxijtcUUnfkiKVGBVYENAJLFmPPMnA4vKYcxJ6qZDe8YQVTkv1oRUnH4CHp4MiKA",
  "key30": "3YFAcpcH2HbM2nyWynvkGC6WqMH2Dgd67Bhmtq1DMLvTJFLnP66EBX1JC6a6aY2rmPcuZK5eE38bANm55squd4wo",
  "key31": "4dTXPDDSAcyAMA4yjL2Q7gAkesvMJDyQWPxHUGbbp6wxp7BJ3G9P9vr3rfzgHQYxu8T5ZfU81LxfVqf2k3cMJvsE",
  "key32": "4PYds1XNnEh7UHDPPe9y6gXpSuo1uKqW1DW1LSAGxvHrgFT5qGkhpv1mb58vsYregyyHNwfmgG6gnsfaijTJGbek",
  "key33": "4X7vff5erLrdRYi1kqBaUU2bW3ENaQ7X3EYqzPhiazcBSKX1Tno7j1pxRNt2PsXC1KfiqB5F1gsnNrRG4tZqQz5N",
  "key34": "2vHFRZrxbGyj3bNZJhdTf8YkLcboRvDEqvuK4aeBAz1WKjJX2hvYFuafLrp7tHxiwBy353YsJDGbcKFc7D4fBi6U",
  "key35": "4jxDNsUB2ue51VxxaKW8SPc1zfdhWM4gA1ee8R6hu4ZxYMi9Ab35vfDuYCiFanRSyu5Cy7RRfpzHwVmVjNYkjG3w",
  "key36": "244tkYvYnnm9sTH9q7FraGjWnbGdHxQ8Svi6kxm8X6RgDiEnKebGiCw2M2M1r3GkFJCsppW2WCTVjdSeHWVZKb5E",
  "key37": "3E418Gr5rKEU6i1agmfZW5Kke3Cu7GfUaci1HztEhveqZY4uP8M2mZMFfy86iqh6d9ukjNox77dyBPYf7qgDLFxu",
  "key38": "46xhrFZM9FijSfQbZq9owWkN9L2wwdjyvoT642u5xwxASoezuhFGo2E7JcqmdJqPxd8R3yHfsDN1u3MfLr929fxc"
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
