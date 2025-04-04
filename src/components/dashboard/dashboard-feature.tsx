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
    "54m4ZZxt7RAg8i4hVqJThPYeAJChaLGuHKt5TzWKcRwxmrqEEYkpyXNGsdLRHuSgfLWMhx6Rc1ZvfPj1Fmnnszbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tn8H5B8v8ZFxKUo7SB7TNFPgh2QvQjDKuoV5aURHPD2eUUXqpPoaJrnfQEsXsxtNw4k6TZ12bXeeVtwGGEL95d1",
  "key1": "3dXt9TW2HJEGoU8WbsW6K2EApz95GyhH2CabTwcPEn1RVTxXxNRSnP6cFRqtwPtaBGc4VNMbtc1VuYW1RczMc8rQ",
  "key2": "5ZyFenzQHnuTYzYEmCE7VbjWtiG6V8X4FoTPP3kKFfnLuziqkbviRtTAFHgfWtKh9fz3SGb6jsKGj5ouGrarS7ei",
  "key3": "5AFy2Eao1DbZmZxMTYTEZ9Gkb3yurxm19X7TaGdXftzHUtrey7d5hA2XtsAkd7f5dxtBp66PV4MeEV2CvAEdVMgm",
  "key4": "3XpZEmk52eDzQBMTA3iMNeGrhaZvwkBztcdHdxh1qDiRoqfY7LdHqN9xYnNwdFPKhjgYXcKyGLKcTZKdTLBp7e62",
  "key5": "3sFwkGj9PmeG8WpY5HT4YzBGWhvHxnwRnhraU3Sw1RzKEQcHaLi5ezzrAmvPc1FaAjkHtycD29d3BadsXuTPmYrU",
  "key6": "3qhunmt55q3tqHz3EHViWSUQQvxaLxmo7zwcnLJtnhKpZBzFZPFL6otg4Ei2RykUSTGgaAMK8HdSUa83t3WBuaGJ",
  "key7": "2645cmpAhaovM8g4NpiD8pJdo4J3ZKm3ZpNFsMEp9NbEX2skmUVVinBjBUMQtStNAQMZ2nCTbVK2FUbAKk556tfJ",
  "key8": "3wNUfj6G2oDuoJwRQ2hbr1CyBDHVesPpVG8srayNcSn3HqY2gb7yG3aBVKG5xmxGn43RvBaPnUR8iev9Bg3VXBGQ",
  "key9": "2h6ZEpZJ27V9HM5wCCNowqJrNgPVNLKZZ4z4gVLSdk6RYvuJQbW1E4eCet6uAJJuJ3bAuceYRpa9ZXYLVv5idPZ5",
  "key10": "5s39dFyZ646ZBXdVLLsXBwFnMma6Yr9fYcjnXmDrb2FqHHhUkyz6xiqtF3iYfHu7VMq8K3SQhepx9g3tTDDgcEwa",
  "key11": "2Cvft6c9VCgPMJxFhW2SiyRi9DrtuFJCZva14QDf2AUBveXL5LJLzGLc4yP52qeEhwdwoXXK9qYpBjYZzJHep5Rw",
  "key12": "3mAREDM3raAnmJ6YgTVTY6jw9gswfr83Eg9MPPYV55TeoXDQ3Aj6tSsvyaZ4sHMaaJZB2DTgwvashZQX5Ffawp3d",
  "key13": "2noToxgPCqPnjrxpQo3k65GGfpirS22Acs97zrvfGQjukSVYG8Kp5RGP2dM3MYTf373pNDEuUwkSDjTkji57SbCD",
  "key14": "3ZiHd8Tkc7zMogQ5APcVjaRDg1U3tZRxLg9Auap2RMxUwPqcQ379LiLAgno35jsL1RsbSGHbb3hH3KY5axyYAYs4",
  "key15": "3F7dU9T9FgiCzKmdthZ9aAK8GUiVVf9ji4gJe9Xu6JNMGuGyDZrBNMUoTs7AEUFS4mViLnmsC7JTnWGKfUHQV5q9",
  "key16": "fYsbYD2H2KE3Bhrri8uaZQ67B6J5fMUWAJB7U8ddAbshRLtFRV7fXhmZqAnA8DDTg3JGBdmxLPNpz28gLyzjkFg",
  "key17": "5x5p55qEZ1Abcy5G11vQMpJcDtx5SJRMHsKB3tqL57Z7nwg9EgeutNc2GuEULLYYVReaM31gxs5j3MwuQWeozbcC",
  "key18": "3QvcjncyK91XGPR2xFT2TAkVBAMYRycowvugypjyXPWpzXDV3pCAgLuzhNmvWdBfNRFB6Rnk9vrxkoyFcjesZ9rn",
  "key19": "4dQX8ZALbDxTip4hvmri6A5UDv57ZUFrnaEk9tY2szQ4rQdnLCKsoRx6StPg6HXGYAnzsPzVSRxqHkoJ7cbBr28m",
  "key20": "5KW59BV792jG76mK4WP2xDWBuSzMGAi8LqwWG6GU4Qmq98kuDFaDcqFhX1VZ3oAthuZZFbNMLkdhbibXbCHVqsrX",
  "key21": "QqZ8nbUgTUcStQZ1DERB5tCS9a9Ts17wkCNzgD3LxiHVYn3NBfredQdoKbjNpq5qVzH3dkGduuahAa89vi2NpRV",
  "key22": "5xpnshurxc55uXdnGc7dMz46xU97fritGzLDACL52LrkpLVbWU7Pf3ftvNjkqBpWoxnM3d4kZwJPpbTfH4Q9f89A",
  "key23": "fDfATzrPW8DvfFNLgkAWQsb6VPuEZpcGtMs2fPZGpj3bjv8hP5cy9hqbC9iF8r9aLsbhQoyD7wKx6mWGNsQWnCn",
  "key24": "3Gq56tszVDFEp9BhYu6fz59Mb2gz2UuqJVtDtdvdNHj5p5NTwxu5VtgBD9CdM7TfYgpaJMUefQqJcPXH2o9mep6S",
  "key25": "4MLAmrPLEfj6dw6j29KDomXFsCjzGtnu7iYZ1eKyyJJ9q8ymE9vsC5d1KB7XJLERrUFAeHcySMkvxh89e4rakqC5",
  "key26": "27PaTNgHwN7oFgVkZ643pUcjNuu2o3HvcwsFKSV73nrNmXLtkjA7UQwtnYydfyV8mRu5shbgdpUYk4nLXdkjq93Q",
  "key27": "5KbR7sF5zAXKd7XSyUTGZERiKCuRgepcKzX4txnpBMxY8iY2NWvApa7cTpcdAgRd4wj38Ax3QPMr1QjibXSoXFqV",
  "key28": "5d5aanpUGauB1owHSKCV1cucfCxSw5mia1p44PvBm2VZGEMZMgQRvFcoZ3gJrhwn6yfzvBHWJKysgoBeZUMU25yH",
  "key29": "8Kg279sdKU6dURfRw6MtJoNMQ4FuxENBHM32BqQJGXU8Bs8Mks1WPGyUMn7M4mosHrtxJfzjB2p2v6Y8trdwB16",
  "key30": "361AAGEBTaw48ZvDxmVCBKZK8ATGnKEGLnG49k5D2cRXLoqfzZJdcQC2TyaHVu6L4kazZeTE1L9mYgQUzJkTzb2k",
  "key31": "3g1DcjAfLPKcqucaDTodB8Tjwmx9XnUsK9L9AABXNDobwyHhNZ3XhzFMrSuXzELX87AzZyoBzNvoPVQsUG9F8ab1",
  "key32": "4KZkHvoFXJ5psmajUCsTi8KMLYnXyX4c3kSeeUqA513HJioTAMBSeSpXHjNtDgPrsezB1u8soTU4uqHFCu8xcUQq",
  "key33": "5m7UbJQMNTLP8PT9EgsdBZnMkUnZRw4cCBenGqL9BjXsE5VEmSaosFuJfMjyqL6YsVp31LmVe5beZm2GEV7inApL",
  "key34": "5scX5WrFhCTHPqpt7tvRmcGN1tvaE3YwJBJ5uqMmb5bNd7CF7vrDvVKd4oeBox8Sv8HEtksrKHNi22yhqN8gsG1L",
  "key35": "4bsVYVZLdiHz2dkk2quUZeaUQ5NoTXyExDqK16QkyPHdikHV1aVwjHsuDxahwZcSM4EcupugTUqKG3ozj3V5FSQW",
  "key36": "Xgi5eDKCUJnMeLpmLBwHKuAoiD1hn1vhSZ7rDGYjyVE7v6apZKKYyW6qYZ1KcTMp7b7qFFXwTfCof5h88szPsh1",
  "key37": "3Dcry5eb6KS11zb6A69Wx7ryYYL6urEQiqtHTFXQvqmFKH88TkyXJsjagvvsmrsytNoPpEF3SQHkNejXqhDWdHgu",
  "key38": "4oSDu7mBnQj1asg1PN1FKwp4AV8x8WuLZgBhPoekhbGhWuEBLXXLo3RkXS2H1k9EMy4h1HwDX3EcMN4D9satLsbj",
  "key39": "4PDZKuUxAbSNHRgCendGQ5EZyAL18RGvmQibpKSmHEJXrS3YZvhiz9ZkENTUwZxJn2tYvt2jc7PTkMp8qdswvnWm",
  "key40": "621dEdCCPDXRYaRgHEuqb8Stfkdx5VizPDjmnqBvUc2zH6kuLvpU6fdyxmPsg34qUy5WjwXJyeaa8wTuHfbKjhZD",
  "key41": "3nW7MFVD153K5sg9CqkqB8omXXy9z9U3k2YW9gPCgZCvG4GzRxZNJFQT5K94395fw4JC2g6KyLe1kGhFcgzz8Chp",
  "key42": "3yfbz9WJ1uUVK6L7ckSVVMoXUxKutz8LkU4d4MDAjGqHdb5mqnjvF2wfjMBFRu1XGWrNJDe6TSXa6CriQ8YgcUH4",
  "key43": "29LyjuJWJQTxLXgBQX8q6u3x2Kndq1mVtNTcj766cxmuNBewgY3awF3Ft3PmNwUyVhjdsRYFy6zeFRSmLhpxFaf6",
  "key44": "5SCXuHv39BjSXqAdT2Sd4bprEYmmymMCzFHjRkz3qZopm6zebim5qutPySioJyTEMLApYytXGarGpveH6tap3MEU",
  "key45": "3kvS1KeU7mYQxy9yjVsxQ3mu2mSUix3Ddu4vvLrBNVzs6q7zxS5DJPtzY2VWy8xdrvfDZUuog1RKDv5fEChKa5sU",
  "key46": "5P7hpoaD8MDN7F4vF3y9cJoXTBMW6BUTG19WuWH7J8QPwxwwCUtHKwCymWRLrArdFXWWgyMTyfpM43fegbTWFVJ4",
  "key47": "2pRTYTKy4rDQauf7ZVH7YwrbLUbAn7aUd1VPjE6cULWrLKrTfxuDD6vJD64FuPHDU2Aep6yrEbMofAeQVm4nVeNg",
  "key48": "51yrJryM9kxVzHHcGFqYzhBBuEjkgEjNBLqGQyQxuBhFVmcHrU64WQfNEQaqwNeYiFitwi5JsQu5vnNoKiHvM8Us",
  "key49": "4BZKgsMssyQoCpEpRq3Nm7ixZKBNnjdPSKScGrR6m7aHA3DgdTGVCudaHH1B1Kp78caevnRxf2rTx5MCh7iNBKKV"
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
