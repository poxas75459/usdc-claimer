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
    "5JXmQe21P349HY6Q65U6osDh41PA7Q731RTMBQkNCm9aDJ5dUpxBjCxc8WKKeiTL4rajYZEtGHct2pjBTYVTnja2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zEyX74TuNmnXK4zQJ2Z5QDFgTPJwyk5sUc561zkp9duyY6tjq5iw8wSa3vgoq1BxBJ6wVd2qjuGhfykgLku4MpD",
  "key1": "67RHPVvhnKryY22mcv56tu7nZKJUaPqVn98UMHU6NqDsSRKrfTqquLaRLJUeaC1EaDEC5LFhq54vNapTCKDvxTC9",
  "key2": "4zqSz87VwPYx4KJiVmwbYsHNDLFWJzBWGRXMxTMRZyc8DaRvxvN8USMucq6YvwxnmQUTMHLJEucYksWRsj76Ygjz",
  "key3": "3aTd8x7TQXrcZ8a7FonncExFE6k2yXxQhmqZy2tTzrS8RNWpqnsbbVLpj1oGajnTc4FLowBVgUHuK8Mba4KEv2if",
  "key4": "RR65mpsfgaYk9jeXVamPdBtDgNvC3P92yaCYENKhtuLisMMqbqnuM7vwkUCVtGWckh3nDDpDNRm24PSt3sZs6tu",
  "key5": "62b2zxTJdXG2BLMxYwQx4CUYsg2dJxpLySsGREbEg3zDPFsF6w3QaHcGhoLaDFhY3WkEL3B1wDS9LWuoc9PTBNeM",
  "key6": "437bEXcfyS4o4QADmJQoAqQxroZnLhYMeSxSZrrbNJRrnDBq8dAA531VLgho8NhMEJVkjvssTCTLEnpnuWiknqPu",
  "key7": "3Sx7nhozRsb3w8oB5WYnpx54fHjY1Atmh4JU6S5xFkRsYMpbsswKdxszb3rgEDweFvbXUgmkY9ruubseVmXYjeBt",
  "key8": "3Zm82Ujp3knQskjTMBFRsN5VenRQdWo2ZjD5TxdNzA6Z16m1giaABto1AzfiKCo5DitGVcgjnsPvP9bJoS5TG3RF",
  "key9": "4uzSeX4qh8TASU36c7MRC9W4o4jmCUBxaj6ieDNLQA896ay8RJCndZgJhpvuZ8y3Zi84Nfhxc3i6U1rwj6rAuD8p",
  "key10": "6kz1BjqVxi8twgp6XEsXHns8NRoq8o2oWCh1xL9iCNpTXtFXR4PoYY93xeaKsYB6hFD4fPYcrKS8dasuop2Uh3Z",
  "key11": "2UDi1eUTPd8YATbPyDmmzX17kwkpnbvcufgqHJQQVQDQvP45w7vBZtm9t6c4nboVw62uwACyGqMAB4DUYvj1R9hG",
  "key12": "sEUxsX66a1GUzKiWCUuVJFDH8cyENKWPQdDHMGZD7eWbvna2KWgzDQW1GW6sfwfgL9ogUuVzcQzPCtL4tHcWw5m",
  "key13": "NATNGx6MW2zPeEtEPQCZ3iLsv9gDDPU1NqL2xz5ic3sF1bFBQUqJRq5wznFdseDxYFXAqZWkfXQsSoD7Wg7fUn9",
  "key14": "5nDv8X4FhQQsCARufdduumW3n3STu2htdeJkpjEGBD6HwsppaQ6JdqFDMtCWVAH9RWy5pzbJSb9e2xoChmXm6P9L",
  "key15": "5BWr84iJRYZ9zhdo9jqa4pAu53gXeTx8mvQZF53ncgYcMK6kwvaAm1c2GBrC9Ca7JpncXYeT9AubeLW8kWAmdyDy",
  "key16": "3mw3bjSHmgU2JFzpwEcufCTB4nZZ4QqWT1CRhwek3c75MbmsSBCTDgtoPBGo6TLQNgY3yqSaKhXUvNDFDg78Mt2N",
  "key17": "4RM3kyDVa1TsFjQr3ziAiq1BGjCMY5JhYoTBVjshaem5FSK7DFK13n2UZhA3HTMgDWcM75pFP29Qpo34KUxa6s1e",
  "key18": "3V76gVkZ2SgNWqGA5vCzeLyS53DtYBxmMp1zsXJJAJoG3uSFP56VZ6nE1TvUYKKFoL6yvnTdLQNf1s2wgv6PcdbK",
  "key19": "5Ae19DRS46u237GSD56xe4eknvvdHfRyBvaFa5DnbDyV8cNgB297EbBjQxm9Wp34cKN7bnHseimijddcXupXimxf",
  "key20": "47GwYMP78YeovGGu7Y4ai3gYneW4fnrrNywzKnKhZ7BaK82fPDEFhVndFXxEJ2CS1GdYuWaNtTcjAYijFjJRfyvH",
  "key21": "4NgC33LjvbyASnXdZ8yDN8Cb7LHCxG69DaJ52J2iWPCKLRT6p69aLpy7KedXTJuXN6dDeDtDvdok1qkFnSXwvJfw",
  "key22": "4L3xErkKPzAeWLsc6W6YLskDL62nUvrNzfYjqw8qcmEXDHEbdN2ryMYMDhpa7menQby82ZLDGcP3Sz4uE1q7SYnV",
  "key23": "aLXfRkTwmbhbLPM543DyC7zpP8SDSGq3ALRwrZSxJgED19SFcKYnQ6t9v9dPjZgF3aFShiKiSFakgWpRdiop6BZ",
  "key24": "21iNFRHXcXPTXTPqxLwaprqoM7z7uSSCqC1YvazsKujtb8ToyVt1vy7bLvRv4MGuXYqxzXRU23nsY9AB5RMaeteQ",
  "key25": "KnfXrk8URqr52s87umSRfnEudmTWYwrfFKGyRyeYvrHeCSoVfFNjcE67TtT5rYs7zrRoQVi4NiQRwWPTwweSQvN",
  "key26": "2fQnqfsqR6T8CnXuPL6fTmTuqeeu5CfeL2q6LW1JmwWEMNqPvvvoJUtX9XoQeoWhvTZ2BuyQh2VYxn1zi83kFjyR",
  "key27": "5ZWSiUDk9CjC2F3VEQkhcebhna3Lm3NacpGL4J33NfRN9pwNCK23j8gyfQXneS5xsNPagiw9aWhxP4XsYWubUwwp",
  "key28": "58gMVJBTetCSWsvbWcxPx5Gxvi2AXnGZkpY68VFpbQzAjRZ3dHSgkqF12JV9rAMjUcdmBzH3ZHsUXKSbwUvdWKSU",
  "key29": "5iQkwJgVjUrDtkzmrjDj9HD9mvy5jNx8eoXwLizZKZQjuZmymXqyHvvQeuAzcA16S23diPPLXgyQp7VV3ezzFeyg",
  "key30": "5u8TEp5eZV8DGp5tcuTAWMVtWQ1e48BEhuze2egVo4fEyXnCexSn3ib2DpeUWQFQ1AKY9TrYWMUjwKfR2tmiyvCQ",
  "key31": "3hQZX8sVZTDQmwtstkZgNwD31xyuhka2RXQrUGEsznrCuSyURU8dN9vDPdhBSpe8Ho8A7oNwXkM1L4MkHhx1NisP",
  "key32": "658UxtUQF2t795ruM1SfmurQkesp1BJTjSeKyiac2ZC2QeZ4kcmSF5f77Ajh5HFc8yFSpP5cMXuoS3atdg8ycjEp",
  "key33": "3LikK4DHuT8ZxmL64pvoYUp4YeqVbgy2ukTjujVrT7nWn8n1445suMDNXXFfZvxyh7Afxmk7nfy49cfdbc17hLTS",
  "key34": "65NoNEBu8tQJ52LeiJ1bZatZojYd5hb5xvHBfwd9ZXZ8D3g5LCpB8pUDaDrNjAm2AVQAxuCKgv8ZwnS2V2xxw3Fx",
  "key35": "ELs1rKEMChQyvujv8tfooM7LqTfcKTKRfXJYwN5jgqJmvkdxemiebMf2YKg4WhFZd3sU7otE8J1hJMyLGtZrkd7",
  "key36": "5T24kLCJcfJ7EtuMdsvcsmy5wXDLCn5rm5kc1kF3nkKMfZUgN3rFUT4FuCD7epmpPCTqeQjYwiTXqzv5MWYDGTt",
  "key37": "3XYiXV4egP5UqWc1SszapbZozDEStysU6Z1h8owzHd4tG1ssUREFyS24ec1ZpqW2tz2MPJpdnymz85fRZ6USjZHp",
  "key38": "3DDSMcuGJF8CCWvRhPVbyao6htHsrYLyWAZxDfFA9MN4MAfhvsZDnFYfYPk2C5eZN4VYNnrhGaegUeP7zS3CYKWd",
  "key39": "4hYnvG5m5LMRqR6dnNZWpXL4ZKVtffbxpxPbcphSRk5PHrxf4FQdk4HV2i1PafCkq3D29BubrEcAR5EZNYEakfsH",
  "key40": "3zmKdpWj3TKvSFY4FTh1ntcKcXtVyfcFASkJK13cLwhEX6xTRgrfCHh8g3BDzwsSmmUJvd5a4w4r5xFyQnh1K3E9",
  "key41": "5FASuY2omxvF7BsAKL8AC9p42NGscp14ADxRQb7rcftNq8SghV8azGpAThpF2TsdfRpXTvCwkdSRmPyExMKGEaZ2",
  "key42": "3cj5anRWFSQqnV8Ef2YjECeojxsF27U6ArfdtFd7k9utdaXnnruJnyLeweN8FNKnnSTj9o3wrgT8EkUCbc3Yut2e",
  "key43": "cGvg2ZCKteoU16Q2bdV3UTw5rN31ytVSBnVqdBv6JtjY3deakrG5oojf5W7hje3WP2N9FtUSqPDV345fZdax8RR",
  "key44": "pavyBP2Kyqhzb3QJCz1dWWgnrgE7rvB3crFvtcZoFw8iwXUxQKs7Bzzwyx82RHXGNyCET758WuJJrh1JfhtMfQy",
  "key45": "5iif4Xa5MD21BimVdjAZ982KGGmFVoiRVaZPiQRDHMsePS872UnFZRa4C6z6Eb7TJWNjoiS4ihJHb8b7vaze1qPx"
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
