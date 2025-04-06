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
    "F4ouQdTncg1jyw6YPHWrte2DHPkGStNRwcsRchS4iLJ86TkHircpV5N15J41ywZ2JgiJ3kyMqefk8vsd4CqZTw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mKRjD35raAqTmRwGxHjyYL1uHS4EP1cm8iDsmUaVqFavhskQrEiZTXt8UQT4P6xjZJgfcXXNvTxEYo5jQmutU2j",
  "key1": "4CQonHyYt9EJuepJU9Ka6xkSwRy9BMzoGMfLXczXx72z9WRMf56FWQzULaUPzMdReZgEDjskHTTMJkV4GNr2DRfx",
  "key2": "4ZmV7kodTwt4r9PdsdErqV1aTrN8F39H5cXsuu7orzD3ofqUdwZaSQku8P7KRxLS5KaVz5nFJs2YWjETsTunXPEm",
  "key3": "3YdbzX2WVq5TXnmi1SvMeP5WJM29kTdVCQdM8jYoYY4ZnRDsK9q4LBtenaCnkTj3woAgY32x8t3mG12bdyhkm8UD",
  "key4": "264iZvjaUFrHWpiJVxWEb6JfP2XBCWYUbesXWXCRqXgEAVxB89nwmoQWGoGeTai41CfGp4X2wE1DZ4bZ9U5XVBtu",
  "key5": "4vMfgY7NEmVBMyQ2EyU3M6iAbEpdEQ6uPjBTxUmPCJP1pC5vWx7kEVZFZoXJ76avxwXw7NpizPqGdw6vg2RFWqmq",
  "key6": "2hC9gXJrjDJe9rL5Ltd4ngVmLh9Si8dydVYBTtdg94BhvouRN2XdJyGWv3Ge7p5nHQcdZNqkSCDva2cvCh4ikm7K",
  "key7": "3U2UwNC9j8Uj92FPtvYrYqaSEjSVR9GX8DUP88FhiiiUVLPXerxCzCZHP8FbYZwbRRr3iAFwvHakbq2ZkXHZg14L",
  "key8": "CumJ7Lz17HE5zEJXvhxRZWe99YZb9PpLb7Ptwyw5Tci5p1VgkpiSaqzMo4TfVpCHnzqXDeqodVwzRQq6XUMQkuS",
  "key9": "4GTrbV2RHCjt1p7V5RtLWqK284v3DVb5jxpPTFFET76UBsduyQp4HiGUgDVqXDbxr2ciBedCUBnx8MHBAfb7qwB2",
  "key10": "55aRJAeNckxTpdmnvRfJxbFAtj5RV2WADreAHqjeUWKVbpeK8tmCqTKXktkUkNdyX7QAuAv2cW9sMy3GmDZQXgR6",
  "key11": "eoS8ERWb9bAesXviVJCaMSFo4EfS83cJMFpAFSjVwHYU1F9YNH83vo6NnWrXQcZcxYtEMCMA31AUo6xNTjpCcDa",
  "key12": "61AKmA45T65A36rwGZ4CVGj8n3rJeNA46NNUKFQWV3CXk7dGcaN2Kv35Htm45LQw88A7ZGsLDrk9GbkTa16Svq71",
  "key13": "5qYjKs32oprTCs5BFNmhAZzFXkqU2dFF3YgQXD1qNAkQtyUg87m8RskyEDiYcPgDaYJqB5Ve9W3CcQP2THBmLMh7",
  "key14": "39dWVwqTyfyNuHmp4CQwDtNDaKUs9vaKqjr1VRhjQL7ty8nF7LjhmqF5xDRxYESBSSZcSX87f7At9wCEyGEkhs9Z",
  "key15": "BCjNViQzD61TFop6nLis5GSQXodoxczP1Ur96ctAuUkBWkzDhnB19AV8QqwzJ1fWfve2Dg2VZk4iuyxqEoJ86kB",
  "key16": "414hjRHsYEE4WUF1FVCJtmaWfo2oE6Rt7cKnpqpYXUSRazYEmaZsvQb3fzzUCHCafkVyPPJnWP2sF2dNB7AqjmUm",
  "key17": "29sC3ViKUTJvU2x3GeNKFQNp9WJc7ZjZ2t1qFA41hQEKE1RPHo9xz6KYgmruEx8wnY6rhRxA42wzmjqnQhAcFFD3",
  "key18": "5DEBBkjQsAg9SJsecZWspDz5YSjCneDHN7smiFsLzwzykZnRVFGYR6snw8wnZC28TmezfvAoNm5sHWNkeoXR4CPx",
  "key19": "BQJuWN1JCSBHcdDkMUjCVcoZEMG4n1Jfc84UVFrisCP7usi6jfS228ynHM7Ne6vFmGKjw6uGvM5i8KUQo9Yi1UY",
  "key20": "2vzT7ZukbcpFDW5wCDdPqLGz4LkZ9jHwdCThTqVQfCHh3FRXuuTtpnhFSPGLpDJZQVLJ6mSabuuQPvdQ5KqAhmPm",
  "key21": "fhBJYiE4T44XN1cL1n4ciJiCwoaz1dmbZufBCC4tgV8Yzy4A9ihUAHgZbmkEmxy9ArMg9w6HRDNPyeV4hP2n4Rn",
  "key22": "2YrYEaMNTjyiMzgPtBaiPAa7Yq5z7WqUxDvmfEQ8GRD1eC7n459aPVxmANSn7cx3oYuT1SST16eycApbx2UXpmSK",
  "key23": "2ZJjjQnNbXEsZM3KMd5FDe71hshmtURjQLFZY5WLoYfwKUDebDADj6C7ZbfmwSgXYtcpxsTiEyAw9S7svNNbcF9F",
  "key24": "5LcSHHuRf5t8Mh4uaJ7wWkQGffNAinbmv5XUMSpaEwpTPPuHqru1DFKu5CURrWPZUsLZJ49mbYmgbztAskVWi8Gj",
  "key25": "5nRvsZP1EGmsPdivx9hxFyjHBd4VdVkdwyXyHm3n7S1rUNUufLJ2qBjBtFdzNjXyDT6Ap6Jh2Eis2GGoAPNkoRRv",
  "key26": "2UwXsPF1SSg5MviJnuRiPEWCCPYiimvKiVQ6tGj8W8oLUyknr5wtKuk68wZzrs3bVKe3i9gvDhfGLwQBn2bWiBBe",
  "key27": "2NxZKNPXe4qzDP2SRgSjGapGPhhwEovrxcaUAwTiRHj2v9fHHJf14jysBCYLgmwT8R4apXJKJm9NZ6u7wNQV7GTq",
  "key28": "5k88ZNP24izAbwzZsppKmQz4R5uSrcX77439kr5pij1CqWLSMFDtVzESm9b3zA8TF6pCxyuNT2yKEhpRUdwfoE2U",
  "key29": "4v4H16q8nLkqb2bGGtRjt33P6fh8QbZa2sxzUnDDnpz8eS2X1kPoAxMPFA2pCjtKJVfow8vEcDvzfyftZq9g42rB",
  "key30": "qNosyDhXuRZNoUSynZKrJD61DyPkLaXJ2ZCoFCxtHmh5A1rTAuYwxaG4kCgC9dyzcKTW6hnc1KZipghbJHzYEWF",
  "key31": "4UzRJnSCD5BuxcKvr3Jr5duJE758d8J7TqaNR3xz9VG6YLDRmbhRgihSB1AebEw8bCAt7LYtDvaaSGGq4acKAWu5",
  "key32": "3w93LwG5MFbDiJGsABTBacpa7FCKc1FHHQMMq8HdmSMHJU79pzS1v81pY45jjEBZ8YEW66R2a1wjjnvjQj87C6dD",
  "key33": "3M4MkXxZuuG23uXF4Tg7E7kLUcXUCwcGFmaUa4rQi35T7rHj5UJ8TfZRdgQJVws4ButaJkpWivGibZfzMujfd3hq",
  "key34": "56m3eNhVa8KvefUZyMXtrt66TmL3Y3gMpkAV6Gh5amw3jbdouGcYhAP1k2ZxTGqAwHq32cdqG4SypgkZb9JDmenF",
  "key35": "qcsGrFAqm4kwNGnZGuwMYmn1mKNHSFG9RMDxVC4mfnEp1D9vzicbKsD9QQ8RrgvyNLSs2DgGx3uYkwKCzNRM4HW",
  "key36": "5nVVSTgWEV8DoahREnoeVywBZqyJ3VonbptSbx5Se5RUoYyjWuxm2LF2prnN4tk1ZnZcZRpLNhn2wRgcb7fYDiV6",
  "key37": "3tM7FJn58G77ZqXNEkcbqH4EMKPAPsbhrwtTTVCSvt42U4fpa3Rw7Hz89A57dJtZLEjCvXWN4jwoaR4coiR8jaoz"
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
