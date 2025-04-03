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
    "2XWtbeNeknCFdvNoZ8JHnvSVgNEhBu6f51cGNWCwFrZTP8EZqga7opQXp58eMoJTCbJYN9XetDyNp279CYPZnrTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k3PV8NucgeZmX1eyArdvcdfoqTMrez541nKHozrpi6TUV2rE7UUfu8yFEffzo9oLcbMY7ASj9WFUcW9pNttqiEJ",
  "key1": "65fwovWsE7h2jDD7LGf7WctFZX8DWzjY3SUdQpjNDxuSS7vf2LbwFFFgW7V4KuuRbVnbfDEv2q6no6kum4XCea2j",
  "key2": "4JwvRppyD8nc8zxsDPa3fLrjxXzTXZFxYmBth7gfvoxBmz8juHUrDQprNhHmYyZYmPN6ADCBWh1STvohatEoJoTJ",
  "key3": "2mYjSEb5mwBQMGPYgzt6iswJstX4BKwgQ8cz5DiRhahgHFbkqBRGr3adsUMxPWVZYvPKwc24EQ2PjnUpBFX1NV6e",
  "key4": "2SuYsJyRNd5NzzSuG77QmvGXTRiT5985XZXmXbrQ3i3g1f9FAmXNdPJRzxrVhcGjXGwNtDphHAFz2uNBVWGQL4wr",
  "key5": "2xsxxvgzwUpPWDKJ9mupWUHpiPq5xgZW9xt1Cduh9edDFD4tgFUDvPu7daPSVzkNeRUvcXdWFtiabZprF26NYxgk",
  "key6": "2N4mDBSyKb2euG4zJRQhUWLCe1qPfrvmtGASqhtLmt5whMQeKtYSDpdrgoWiVcs7i5XTX9uZp6rSfC8FxyVuPReA",
  "key7": "4qK9i8Nz1Yzgo1hayFEdfq5rpWFLJ5gg52xPEvuusiwSDzYhh4zAhRwZQ2d86DFYfXi3Qgj2JGNnaBFAKVWWzGkV",
  "key8": "5fBYnwedTXwYXzMBaPgr2EhBsaBaLKLikZFMjFw16SsXpnbqL1vJD7nYTxZSYdnr4SbgrY6kVSb8BmW7enKdbrCU",
  "key9": "4rg16GMBmweHKY6iLPbQ3amb5yTqtB2UeUXFe92JYrGARt194EWm6XEKk7W4us7SVXn5hxs2cKnM19gCCo6iZJHr",
  "key10": "456bsrkpjtMiXLyzp3HpszqNgV1r2nbAssueEBoTAEX2SYRAEo6ZerkGWfv7f7v2dHcD91LmcRRsEcbce9PAu5BZ",
  "key11": "5q4SfcNbckfhqME8oYJbcZnMqNWxHg3ndGLqvnhAjaNiWCg8xPDdRyoAWnm8j7uaokCnsKKCbvvjqiisbdDzjM6c",
  "key12": "nxAzQ6HhRdURFg4crjgizzSVEHfposokyMmYdyzimw6WXG6dCsuYg6SxC9S9uHckfn5XPhXLtNzWXwh7HB9yjLB",
  "key13": "4qNAxRztyaGmSJg4u9n3pJ8koSnPLzdWefjkg7Uvceqe8R84BVzfVmtfUaNiVYk1GJFZCRWayMMQJM7TE7XMEEzo",
  "key14": "2kMm5r25HkNCoueSSGyVdwvfnB5U9Xoq83jgxYCjL8J1hipA8UAUyDTo4h64g1ooqpvayHPRk9YnP4kffWRooaGE",
  "key15": "Ff6YoJT8njHgqgQt1AyGUfe85Ptwqjx7wgEhoHjFF8nAnBv6YpZqAFW4gCE142671BabbQwbwgSK9grRmnrBvhu",
  "key16": "SftGnsdwRQKXycGhDvqX62MaQ7necXQCmTq9oh4WHxmvYt7sM9sLzrDpgGLjYArGvq7FSL4Nh41UfhgAPLgevnf",
  "key17": "3TeQaGEgdyiRvMY1CKCKYnSgFGKgpXZgQmHWSSrDWEUkcjrQ3htescL2UECi1c4txK4HFdykx1gKZizd7sHk7yLo",
  "key18": "62Uq3FJifHcDXKYNVBDtxjfyKxYvjStfGeN9GkorafE4sxdZgBgwUeqcfz4yeeAsxmzPUyjphhAda8wdw4qjcode",
  "key19": "3V8W89pMY54vRk1m1LmRjaATZPg1fLYiYp5rTpPXkF1Fd415bK2TyKPZeWHJJcKE96DakCV8qcqE9RsgeHdxcN37",
  "key20": "4LkvcLQfmsEb2oGTHG8AMMgkUsYGzsSzGmKo79S6BLVgyVsPGDegDRtSaq6Tiv3Roz2hBTAiMVgop2TQhfPMNJJx",
  "key21": "3ybpVWMxVpnvzesAUxJPMQv5Wyn4SjMqLLVvyUhpXn6RRawFbR1H7ZXLS8q73cJcpVhk6vkUu12HuUHYunuQPQTe",
  "key22": "2y7v2iHU4B5hArmvxjexvAu6kZLTE1tPmak7jtVcXo27kPhUVakJJ5HWD4FemQX9QTz9msTMQSj79j1Dq28XAnre",
  "key23": "2RMHA4G2pYJddJrJRfPbdie1hQvv5qZ4wERxirtxuwffEEeC1kSgg5z1wCyb5qsH5twFYE92RAB4h2JeeEYQ81Ag",
  "key24": "32KEso9vRz4JgmgNySrAzGDhhNDhZoZuy1zzt4ynzkggeSbB6hiuRypZvFme2KWiRL35AVfYNXRVD4Xb5ipZVKSg",
  "key25": "Pa6j3KJDkSuxCNo3QfTPAJMEzJs1MhoXVgw5ABq9VJ6sx7wRhcMzfVn5zjaHUU5nRSTZccDb9GVvnq8xnrpDV7m",
  "key26": "4K48ShGyqksfs2RU6kXF1i1uz5B2dSby6WKyxF3aTZRbLMo5VsTwshtQBEd3oDdddfwYDuE3j1Kpi8s1cQYZiGG3",
  "key27": "58EtaUERNE2ufqhfdTeXnKueDSQf7zKAGQjtJJyevtf25bRhF6D7PkgH4KoAR6DdpgEqeLsDLABx5nSFnBkeNv3z",
  "key28": "6b9STmdSwEoMTWZ9dRmFo9a2vVba3xBeJWPjbCh87Ud1kmXZcYg4pjTqKt2EXX1EzRagPTcAkuAP1EVL4CFKfV3",
  "key29": "3BQHTWPpHaSkNNS2brcDjpUHNbPab4XxdksbtTjx5MYjo8mDN4yoUBRgHh5f4XjfeswfabUiJTf2wYbBDnkwBEcE",
  "key30": "5AFHYPf3oNezhjTHaEEQX9vCpRWoWk5879t9XoeTczqZZc1yeL3f16HguqG78QYpEbSfm5FcWF6dLFRGpTZNHa11",
  "key31": "4EGLumyt9jG1vJHFYa7oqhWn3kNbLKWsUFKc7Z417nE644qnHkN55iwSTS23puQGZ8ETDSsChMWRHkqf3JwKNRUL",
  "key32": "4yTdY9svzB8rTaT1Rs8A1xP4m5M48vk4Eps983jpcxmo7P1TN2KqfTT4kVv7NTywKAhAYBbdtr55HocRDgypaiEc"
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
