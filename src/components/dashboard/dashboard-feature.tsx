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
    "5BRwPFSti5XUvivBdqLFNoMTT7Q8b3jqyYuBcyUNyFgMMA71qBouYFDQJ97LpsqL8JMhNSe5EfYCnFnC8yhqASNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "298uQfV4Wpyrr2c7HGJ4CbBHQVTBr9Z9j51LQDnbcvzuhYtkiw4WheCVmLYLupQBvYL9agijUsiLdHGCCNS3bqeu",
  "key1": "4e4TLumMc3be2zsuAT83gfPg3mnLVRPjrnKp5Wjygt6Wdq3zT3ygevynVR2pVr3VL9beZGYxjZfpYJni6P3pRxfF",
  "key2": "2dDSKskxadtJyELiJ3gi7BrkfW1ASidMFutHYHo4xRzdqaRjwpmWNkRFu5JTKwoyNRU7RntAi4bhGFF4ydvLEVS9",
  "key3": "4qKANWwEy5kZSNEgVdbnsvFhFp6DV9j2APf3wAzWMyzSKZuKLzBLxVbgUgi5bUAVn8vKQj8TigKfRxc21jdifJDN",
  "key4": "2yB89dJ8GgyRtyyn5rUS9MNnYb6Jfbn8NbcGcTaeUEspJJscz71gDmHR7WAN58CCqdUE1CLcsYoXJrJ4pGWxKhge",
  "key5": "5QLtRuBRKudHQvtdX4KuZJ81hDjJkuq9XeAX81bnJpYzynus46iVNDTguS7xkYGyqGczttLv6nm2zNBjPe4BfDDc",
  "key6": "3QMCK3cQdkvDpmAfU4af3v7JLLsRP3EaEi6DKGHh8RiXWpMtLeA4jmwrUpFC6VgP3yddrGJ4advdbadBwzkF6FU5",
  "key7": "3VZ4ARQ2xFp99JwNg6xSXG1VnjqSB1iUSxHbzaUjyWPkftRyvPsKyv1QEWxfa4mHiYeKmjhgFjKfajfJJUkKCgoM",
  "key8": "6cWfcxYVZkNd6sS5g2kKTDiAZPHxKqdHRgZ2Rf994w1xf2pCfEpKV62YUZetgEsTsmx8TccB9xRKfZngiwMJ3W5",
  "key9": "2M8zrsTvJ7sgFrUMsEtnHvrPtYQC62GXB7WnLmK3NpX2EnPuD5MdkK9sVr3SGYTd31f5jhuTaxHTnYfvgJ6dUmAX",
  "key10": "4CMtKqf2p1NRQ5QfT9qMULFbos8PtKAcqeTV7UMBBfko4d4ZJnMKCKhHteryW1Aw6f1BGH5jqANvF2Jtx1sJHKsw",
  "key11": "3mzYTPn4CtnTxAZ7znm47jAEgYirMgmer8zQ62YxthKvzVc5WW9ABHuwaZrpf9GCrcmJESxuGBNLsEpJWNQeV656",
  "key12": "2VKHKL5jysrNbgDEfDVLCb1nu1bWj8XvyrhTZpF29w7pnc3qvidM9J4i5w5PfDQyXbTLFAzTg8wpXhx14XhuUQGo",
  "key13": "3pQ8J6oHMM8jvpw4MPXJ8oiLXKE5BNMWSeQoKf1RWtjX39jffT92B4QZ8WmwWNZbeaiFTmG3NP9G9ykj1rUj9j3",
  "key14": "2nzrUm7Gd6ibUbDsGqVQ3D5SQyBQJ8i4nB4SKADi5pMNZkUARnQQS8AaUFnGEbCwfmqU5rvYyGHXUT23TaCvQPxP",
  "key15": "5DEDtRyTHDhCUpGjzWBFf2vCxKEGfncv9bb4vFF1swuVksko4Zm12TwQs5oevzMsgYoWDypDfhJUhJMXNdvQbErh",
  "key16": "4y6UbBVWrQ388pVLzQycbdw7C3aPt2FvdggaZzN2uBsXrhza28jbSc69NZY2RJVRjhoNCfAUmnBz6hJ7ykkirAoU",
  "key17": "2m6bQwbLH27qYWSDXuSW1kzbd5KP2zz62uuXPsxX9bCVEtGeznQJe5uBHBHiZx8UUEL4SL4sayRD6nDDu5q35tv",
  "key18": "LkoW1Zs5GLE5ohgLqCEoJKMv76nGmrSwKza8boEvC4HUGNTCZDvcRBcXSgjKmU259MouMDtJng7pQM7uHj4DNuZ",
  "key19": "4Yq3ycXKnG9StQ483NfZE5zSCFMDabZdqRbGCHWnk9XK5Yo4yMWKR8qebqZ8KCYjGisMqRJHkFaQU3DYqE6eArJt",
  "key20": "z1P6dv17PHRKaELsrCn9KcvCRzCsNWkxeDmDSFcTuvJLR65ZBMnP7KNCdvesNKNiK4YfMsPGKrx3TjT1aYZLkeZ",
  "key21": "jehTAkuZEM56nGWLwdGrJGddwB7PJw4DqAqaWXG9cBYAEUpXny5HcXzvqs8DBj9FqmXvxwpnoCfK9xE8i85i7T7",
  "key22": "sBszXZEPmh2cLbLj8tQNzH4S5oGCpXTqSoJhaPHKn2P1ijXBR4NpkcQXxxd2gKU1pGDf27xi2yukRXsgb7umvuo",
  "key23": "mtFpu8eepJiBd7mEydTiW6trepSNZWLGP5oon7waw3bdFiKPJAXwkLxj73wsALndhsWYJJkij25gZrUEPTYDL62",
  "key24": "4pcAdvNFp5NqjE8xuaMWES6q1CNmYfBcQw6edJzRWb2Fo2PyyvRJ9taecWibLJ7GzsR9wVcADzksja1Su8LRAmxP",
  "key25": "qDSf7PxoUcLHyx6ZrffHSqVD4puwSmr57toyoFXM7BH48rbUanFhWK45UoR2FX7UuGwGY2WWykKA2MNz1typxqG",
  "key26": "TYgdphhtJ3TNsUxbM4iv6VKkxCQdw5bqWemxWGCJoHW44wbFMbPUuAAXJq2ynDHshq6BcVXxVu6AWwthUrR5Xa8",
  "key27": "63jTNNF5o4N2XwjNYrpAuUFcwfEpGeSFsCTewtJx1XDbTY9czsqfDP2LzogAuFvjJtErXJdWXLVZkeKagT5obLSB",
  "key28": "5zXrTpmf5rRCibaitrKnkNTjuLWX5AH1QjhcUPWjqLDtDcnmY5oZ7eQRsprE8WyxLqR2nRJzhFBVxQ4fqmHYYGio",
  "key29": "2dpA7Vd7uq6AdoJuWzpB9F3Rcqty7tTMuTrZFY57QB7zL7ysgqYkzTmLdEPokxNvNv7P8ytLhoS3SFHcVwYvdstV",
  "key30": "5kk7Z4oEF6Ge2YHWVXu7Y935sPH9BCPQaL7hn9qbU1ANAUTt2DNQEmvj5bAZ6caNgKSYYnNYMw6hmfsGaYN6XfFw",
  "key31": "FdwKnkGn1AHKuFY8E23i9hipZFhkfA8t6Q6aRgiB8vGCuWHfzorzCSPbnYUtHdHZ43R5P79kZnUkD8PJUbu4LtH",
  "key32": "jhsr82K9yUZoWshvKYbqvrxaphWeWUPxMar29Q1BsrLij5jKV2gi8RYkJq9MA5T1weMKKpb67spnbkAH8EjDooG",
  "key33": "QDtPAC2ZYG1yzTPfikn6CjuoK2g1ULYSqWfedD5PR1hE5TVJTvu1PsQk2UnK1F9aqrodN2d19gbWfxpyrursaX5",
  "key34": "3hnQ43sCpRNWSPQC3WQSYbzqTxf3uYPUhj2CNPV5Rt5SEd3aPRfkU7Hd1RtshSyaKMoeycefcwdonvB6fw4nuVNv",
  "key35": "3nhDMbhDwWZtRFDUtw2WQE9vsJEMLHnDETKyTsj9hWUEsGxU3L9ZdaofJN9S2wwHAg38pt87XqrK5c7Qe7FbcjJa",
  "key36": "3YsqoJrWiVLckyD2zHQ2tnfHfytEc5zrWWyGzHzxHKp2R8t9JoBU1RLXjYPNAyJfuhRmfPn4j78wTGrJGSEMeRNr",
  "key37": "3ARMFwEhkBj1NhxREJkTGzp2CDaQWxGMQ3kB6LsRQLxDnxrD971DYTJksuB6nwcy2Xw1Uj58fUfmFPqRSiSG4aq3",
  "key38": "crHmn1VYgtNcYgG8nQ3M5L19t57RgJYFNkDi8pgUstTM1dxTr85X3t4oQSAswdVBNPKQ9vqA97JqxPwM8xAzGh7",
  "key39": "2n5hiKz7FPvTdtZ93FM9Hf9oBddiKcuLQ9jcL7dPzv8F9DRJQbXanmey7fdpqNsTC8SwzgNu8K6y7xryPW72U3kh",
  "key40": "CE3gWf77anPpUieXXzcYR9Xs8TDGwEgH7ya7U3KTWJPXJPby2eFsbA9Buit96MmnEf9pAH7VCuZXdUFktqEm3sX",
  "key41": "5nXMg4LeB7g68yGmhXkbxRktJBtRkPh3GiLrPvPnBUtvMHUgfU5wFZEfiQtpvkXPwNBAG4Pkq5x9vdLvfvdu76bE"
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
