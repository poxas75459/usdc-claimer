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
    "5T1MgDmR5xAhYX5pLhVgp5co2ZTdmFNoXUHqkULVrc5BwrA9vSuP2Ayivasmioeah47jP7uaMyZKLh9REtqzANG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iMQao8yVxVS7kSwScHY6PwxjeeCoggibeC94U6zHD3up3PmEiPA2mczofGHNPXJNFCvbqx7gr7Ft2vLNfuzEqP5",
  "key1": "2qx3rirjW51BnAdgzLQRtgmSBthf2BNTxxZRrsDcQnRTo3e1yvZBFWkUFNR8an4skYANiS6tXRFmzN9vyKXvZnUo",
  "key2": "4mSx3ouoLo93NUy75mALDhPLDfWwhQF5k7ncT9LANLoXP7kmz25n52tsVrD5BzsVUtjE2Bsu88HMPh3zhwJv5AMt",
  "key3": "2mZVFAdNv7XKNMQJF5en1xUh9g1z2PHSbxh3nrq3BhSKCFU4Z9pdFkHUWuVAXb1TS99LKLr4exEZVk7X4YkfjF9W",
  "key4": "3cxS8B9wroRD9TvPaTkYN583yzywX9SP1CARVoDYrAkLasu1z9VKfJpowcrrGmUfuo2bfAAyGqdhTEN2qd6MmZL2",
  "key5": "51uFGMNv3vRB77b9LameLkUFGrugmqjTQAMRVg1FCGyx97Kf9PZSsdSaBbWcJc1h8gwWiiHBTjUUte9WJK8RsSuS",
  "key6": "2xc9GyFG6BoahqMxPyAvmURDzJMUmfd5NrcoWaUYtnDcDN2KWcd8MfxFsEeFhwgmjPt3imzTq6f7vUvVtbEkUZZ",
  "key7": "5aczmmypf611gpknrCgZWSvzf9AmfKtaqLhJ5ojtZRa7GBPn9ycnFG67ghTPJBfVCE49TSm7TPWEg4m4VsE1WuHi",
  "key8": "4n9AfVrmoLLYLPukrHh5tBmUfYbiiAMCvbMZaAoMjbCPVayGoxkr7c718AA5Pesd1a2owi9RJ5P9PMYVcxGxH1wr",
  "key9": "2D43ahnnCSrERJK5D5w7jZUrDMw9w6uNm5ebJmTVdqh5iAzJ8sKFvMpHBmQtf1HuFr1mXYVGJqdhjx7AUG8Uh8JF",
  "key10": "4MNAEXRdBxLt6KMzQh11pV3adV7EPrbfg7mM4Gtvp5Jiy7KAoBSkLJXgK4VkDUvhHt3WbqY37WFLRan3vUVtaNr9",
  "key11": "BFCeVt7goLSBmGzawZXFywNZSsWc5muDkaPdZXeb6dpqrEVy2EJ31VXQP6jQoVUsRLuQaoUN5JuPeVPKrJwYtH4",
  "key12": "5DHo8A1d2xkBy78mfdWyh7DUSeJfYkh2VUAfGiS9iznm8CEWTbmc5M3dY73YkM6zyznnYXaD51c7L5JPBYBB4cgd",
  "key13": "M3jyJwL5dDjX1NS3vFyZKRqjaN9ZfzDi5VbZkV1yjDSRycXrCUZJFTTujizFG5JtnJnQ8UvULR9cYCqKEUdCwfA",
  "key14": "2ZyCNVRQPdzRLUJAoSUXDmxvhKLHPuNLmbTmrxQhq2ynfpxSX2YqXWR2daZ2nAhtVrRCxBJH7bM5c8quTeA4T1U6",
  "key15": "wXMRePwwJR4Z5tV7girysApKZjxhzhuTFnAWMFXafmQJypKnVBerd2sJb1KWeHGa1UXovajSBdQyvKErxbYhPjV",
  "key16": "5cSeMe9N8QYfAsu5qtZwN2EPaed7LrxBYKT2NcN2H9mjLxYJKaewDhR662y6QMbXFfeL2pJwnRRxhLiam1WkK3Y9",
  "key17": "2RSZXuoSEWWkAzBrKGKURPJkT9kYK5R2T7XWAMcPKAtWuGQcZ3dSStW1qCqYRBzArR4b8rh48gwqb4hLijdS5Ncj",
  "key18": "FuUNcBwwS3PrjEEkvWuKnW45GSPxUx7Wb1nwhD1BqjQNxvvgwkp5GAZCiSxxDotdz2tAAcgq3xbZBjAQd14qS8t",
  "key19": "2EEk3wPFgbwpab4q7cLqhH1nR9zm7r5PVQGPkKWocNwdtWkJvceWrTB1wDCYsFXz2ofnQ9Dqagf2rr6gN5aPGVUc",
  "key20": "veg7MLvYdbVzLTHX9QjMU16EjSxSiJBNNhvEZoVWXvYTb4rYi1AHqJU1V2MWua7UoFbp9CaeMozesNimPssVd2q",
  "key21": "5eU4BtHNivHJQw7JZvHuu2wqu5w8ViHRbund22CttFFBivmCHgfTKuAKybbou7W7YMswGVVGyL2YAvHJUoCqxFLV",
  "key22": "5vrbk7gbqTZzhGss7qgVBjSYSMDC3VW1oWfL14Zan2MkLUzg7oXDbyh5MbuZHRkj7qzUBT23gui52Mh9osSCJgxX",
  "key23": "BxP791FnMiX969K8QSK1Hj2zxw9e12sbTLga2U4NKNQWrPFYNgtB4sigzAjyA7cLJ4kmCdbGFZGwDChJT2n4mEf",
  "key24": "4grCsjNEEL1rL1Sp7KxKhsYoTTWwXj5yMdtBhkWTrnvUQi5cAzUijpqayafcNUvSSDYemsZFEcYiFMCi25dVELJC",
  "key25": "5yFzi6qDKAaqhUR6tRsJxY5aa9VNWYitjrWG3YXB6XrDpTaiLudnu2wpYwnBc6M42DQKfLx8XG2qWte5NJcSBHnr",
  "key26": "5uYDzHURhFWydsaWJ6t7y4FLu8zUMNJeF4SSrptzP5NXaYoyBGddJwkYpneYyp6GBrG79qLgmfySncZXEx3T6wS5",
  "key27": "5TMu4p8Anib2QmPLYHdCuWK1cZJF5g39Di8eDHDQ6dVuLimn4NM2RwQpJiXU6FvswqrKdRACFNcRba4BNdX8Z78M",
  "key28": "21TDKYrzemvEirR6wNSnXiaEmDxvVQBppJ5tqp96Wb9WYoXmtpDi72PWxJuRVVx58XEegRqdbkPx3YsHDGdajGX1",
  "key29": "55iMKwasX5QB8TeLdFPRk4MUiLynBzE4a7icZrm31m8yzd4J3cBJTh4PymhdTEydx2Ty3pBft8nZxFXAa8fVok5m",
  "key30": "2KQgjc1kFQFx1LkQGAJXENDDiPHwaPMsGMy8UeWXbf6WomP4C7WKgHqYSTyg8R8rTrBdgsfkznqq21fzCwvk7FTv",
  "key31": "24nFpJxX1QHZSDMhwfeoKthwgXciQhZNMeXW3T2wuWZCkre3wTrGiir96bS6gv7rGjJJnFzBUMB6jZ3mZTwUW1LT",
  "key32": "3Bnb8Lr5dRTroxL8drAYCYgBTKaQxkHiYmK8CX6eaEowruozinozFPRiwKe2mZjo6Uxfu3HuYCxJCJ4msPX2NKED",
  "key33": "4K1AyE6vHuixdRTg8eapg8ePXbYRWgMbSyjGZFj2qKdf1FECvf9DdtQ5NG5uFhwafT2Tx48auVDg96djHRBSTHZa",
  "key34": "3JFgort9hUTDpYGcZhxsXpPJZbvjNy2FjXvrdxXPHxq1Ej6pQM6CN4DKcr8sfDoCkgfN7SQWSwig3VMBkBzKLu9a",
  "key35": "6fjELz6aAg1Gjpt5rityJ5Bd69PYJDwARWyN8dUsWKfZzbTma2f7nkX5qAzYpf8QCAWNKo5L6M828bHsE1GNaXB",
  "key36": "5aVYHqXuHqsDqPHf2A7ukwWDiXzM8EwucvZCELCTrdsm2549scPiTQzr4F2J52SxHxEGToCWkcDe3homq1CSF6A7",
  "key37": "3vtPt4MYmZfyLGdbwJ64DSRym83VCrAK3dKs9yeBqkATbvmzxfAf1vpjx7RiYyomd6tpQBtWvigWi3kopXdP1vfL",
  "key38": "2iBPa1E5voyh4XZQmWSVvRjuaKvxeRaqD3AwrQckRTRVfg44JeXMfgjTeGVvwzWB257PXavpKUMudSPMZxuhuFj7",
  "key39": "5Shk8g3RHuxVyFWt2jtwYoD4RDQC1YpjuqFjeFCsDCPRRXEewq8c84CBHiBMKbxNXgs4A1R5VjmytU4Kk6ThU82d",
  "key40": "URSdv5QBSxVyaQYQVafBgT3piwoXhnZrVawiv89V6gGqjKvveLotrE4XgT9u4KztBvePEef3tksD3hgbjKfNhtx",
  "key41": "5q6MSWUVwtfPa2tLH16FyLPf9yZawpkhcQrZCznEan8k3JNMyNwGeNBYL1UEsAPMwFJdMK9GeW9mKnnhLGKojC43"
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
