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
    "4eGeULbeQ35pPR5JDotwBRcaMQETgH1C64EHmM3S7KyvcNCerWFrffLfZ9AqM7BYcgguNqqKjL686fqFFyLww4HK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45naSvaGNyxbnkuFxS6mGA8MLxuqjy9eZVt5EoyPagHdBGPdzxnvG19vx9ZqTjDYb4qyGByqqeMuXPtXKJFBYs1i",
  "key1": "45ATZ5uEcomQEkiX1c1BnxKGdUgrXxdPuk1DSLHpJ4u1Lfhd9XteFdt6VmvJiuaSbZYtejUvPviyZxSQbqvos4Vx",
  "key2": "2hAExg4V65Swh8Y562DYiDNR9j9eLSqSaUaSuYmcEEPNdN2sQd89aJN4MMQWr2PUotB2Wyiq6Ap9UkYU3Tk4pEyr",
  "key3": "3u4jKLVGePa2waVaQyqR8zzyqPv8sQM9gbwjnMPPVbniPiviSqjaSAHufEmJU1DL618kebFWuV4tKJJiUBYjkAaa",
  "key4": "5x6w2QZZP7F8rksNvEmRSFS28k7Ef6m8PG65HYpAfBWtzXhQAA4Uj65schbKD4GvvBYZcPTPeqD3aMLj2LKarMAT",
  "key5": "EBvcafCVRaHTPQxpiRiWAoAasjapYE88bqwySw5tqXPD62rwCNmZDybAjBgYRGnvZrMPFmEHhvia6zw3B9o2vN8",
  "key6": "2yPDLXrRDXSoYs9LNMNXZB8fVQeJNXto9Bg2ySSVidWbLNky4iw3DwnBQQ9UbjZeuqF35fEA46rnuBDzrpyWQTBS",
  "key7": "3fXcNNhQzEY1ogboAt7YjX9F9Ah8mbFRtKifpcvayYWY9Ek66RAfutPZDAtrfVivhLhyqBxW2BPmcTS3WWsF2ci9",
  "key8": "xGeK5DwANJ2skCxjUTBBk3usLdmNGpf22DNcRWtmtTRM7umoTFx59r5ikKdyPaN9owW6hMFbzHa5TfUT7UACNyy",
  "key9": "DYW5CUs37yRq3kK6typ6ykUiTtMSW6cpvhkQAcFhnL1S3EGiDzarjGNsXg7wF4edizVgKosrzDzDkaRnEwtUuhM",
  "key10": "3oPNecJmHTJP8S894SW8bLjgjtiD1HrrZwcG5cQgH8da2U6654i4XRQGbXAToF83FEbRmgqx7FGw2UWtqphV3c2c",
  "key11": "5KWHrYSqdzRTGsGcy4xU6toEG72u4NaifV7nUeU1TbDEjQP2gJhU7aer6sWCqppfThBNSP7t7kzxj1WVsXUrx91e",
  "key12": "3T3KTGro4Gg3kfdiKN7Z93m2k6rybREbX7xhf5729rDsr6M7p86SZdA2TVHYjS3enj7huaJF5PZXK2cdFbDRpGYK",
  "key13": "gSaLdb9VruCzrGYwxY3fNkVGtDV4Nr1YH9gLSXeDdorZCLs3mCRdbL1hMficBLH1kAKu1i3RhGzdvUTt1s5iU2X",
  "key14": "5KDxbcuT2ZfAvwWcT4qFcCxeZn1HPSbyXFxEyPQmPpmhWCnGKAAGEgXxj6pi7jLXnWLp9UitUQ6j3XfJxvBXt5WY",
  "key15": "K4qHRGPKGvubNSUKnoYYLx6fDyvL3bmeRCJCrH9ps7apqqaUBisw29FfmMGFQUpb4A7nk7gseLb4Pzc7JYmZWVb",
  "key16": "321HfarxsdarETcxjboEvQixZGvSboi6YCi3qxDbM3bynYqadMMXo7kGY3dX8ECuzZXUQ75TagoCDbfiUuEz5SSu",
  "key17": "3Ux1oLp3w5UwafPKCc1C9aCAxYANjuLgjCC9DSMCzFZvszP6BtmHe1b4nS9jTy6xoX2wCpPMz7N9WpP8wX5fK3EN",
  "key18": "W2EVZC4doRPA8QnqE13kUuvQ4uD94tqdNCDTHxcg7qNmjKqE5fsQonQtbHnBcF2Xh6SQMfRyvoqbnFaFjKFsNBg",
  "key19": "sUnJdeQ5Crkz7L1iKp4RyeaJCqjFHNn9dcx8tFPaz7Qmzw3wahqdwxPYXowfvuh16vLA6DKsfLspC6pVHkqdEMi",
  "key20": "5AdVpyKAZqxUCA9kYHdUCbsL8d19kxEbXWyukYYapcGebYnFYmndxXQT3HW3P1Y9q9y244BVhLFgRdfYE6ovdkNg",
  "key21": "2ELdBRY8YorW2AaBKYZWRQAoXMbMWVDV2avkZEU3LRe89NGpvTyFJ8Pf7XBvARiZZ4TGRu9nhSofJNumLhPrYUrb",
  "key22": "4Qzbh2nwR6rMkvLXyGhFNQHRJZW1jS85xTDB2xw1AMzWsaTrYBWoToix76qnZPjS2F4gi5chHEVRj72s5hZYkWse",
  "key23": "3LY7kVTSt6pBrBvhvmnockj5KPkYnn152or4u6XAVRxkNnc7drDJpuD5DDUo7QDNrfV86q9gmBSpjTkcozxZkbvB",
  "key24": "3h9C6BM9pMLA4S98sK5pj8hjMQoujkVZLMs6FdrfUuhav2aAwauRbEJAp4MWjkyPM7Uuf4oZmU7TUj5X5cLCwFB8",
  "key25": "3wiGLp2XKA86b8iwTrZT72kvE4QVVKmvCerZsNnxdVNcSLHHsHqf6aTBCNuFGF8jvJtC82MvugoE1mpH4d3VRf5v",
  "key26": "4haitU27JXxKZfu3rWTCLrmmpTD76sXdzxgKm3u6DGScKrDdrzqt73wKHu9phuFN65b8tihPmCB5UWJZRPxcLYaE",
  "key27": "49p6k3FdfrmcUfzNCZkiVVfMPttNkrsQQywFdAtTjBotz2wfFQcq5U7EVUBL22Ak1Fq2j5f5BwQ897CkxaWF3mgw",
  "key28": "5QUdWzndqFpsFDMrbB1enPA1D1BnC3Yw6NGLU4YXwyPcCrD7itMMvT4iC4e3x7SwkAJSiUTtGjKmnEvqervoKKi5",
  "key29": "4TRxMwHFredfTRCYJpKKkPVvNu6dx5zYi3cCkZG3H1PTNGcnh9ib3NyeXnVtmKo5LLg11eya7j4ZXGJPNFXGNfYk",
  "key30": "41FU79TpomXRGaXKwpckrqGuMACBJQnmmJZTbhK3K2PpAqFzNsQQDMHJeFC5YcQMo6GsDhghLTC5SbhWwhgc3uCu",
  "key31": "45EjPfFcTSYcGwwS7841XLdyCN9KF4Wd4ZperbjVAgzVUHkC472D4X9arAi5s4bPn7BrgrVC1y2bfHjWi7cH1PAd",
  "key32": "cvtEtnTWjTctUCctnPk7HQrfP1gZ7hKjqYWpJGab5Ei6GXEhUBQLVXcbKDAAZMeqZAZWPUxH9UKpc177pqiVHzr",
  "key33": "2Dy5HZHURzf8fYzBCHdk2AyT4KJoejPsarY6Lh7X2ZaW9ttWjN8bpEGzJjwPuFGV2zokuZqqU9cYjLR1KRi2kQN9",
  "key34": "4VPK7UvA97QDhQqcGsGXPx9HzwVwwcocfLLSkq9or5UvGUzGZLiJzmjVzrTfeQfuM3NtmUbBKi89S3aPrV33jzHU",
  "key35": "2npMTadr1dA7ZGPPgP5ASsGzBD8YBPjYMuDTpZbQ9CWg2eDX9aHfuE75jFrokC8Zzcqgh6azHzXcE7WK3KDuhH15",
  "key36": "3j9BhnoN62KQeT51EVqbcd56LxsYUuCMTjhZUTSS95Q95tMkgsaYfX4tskQdUZNP3V6o4uj4GNyayYWnSeVdbkHi",
  "key37": "5DviaqmUzEg4XsmMDdv2v7H7My85h4wWo8i2Kc4yZwHFtCofc7a6px7Xj6J21XLH79LXmQKUHjoRa4PJVMxkAVBL",
  "key38": "zPJiLrubpnN3iHpRMwxnwbhxCYHPeRLmBy3vSPsRKZbyJFKx28RAiur7VhM6HKcSL4jEtrum2dzif7ztRWCQFKY",
  "key39": "otk9Mioq4KPfsgq9QAmwS3n6bYTTHMp1eEkYKLVSmzdaGPGzwz5GaTvtZCRfQ6xvdShSiLRuDi9gL94YRDEDCZY",
  "key40": "3cpbZ5SsJkNkHnYhXo4nGfEiME91BSuvNJ6d9LE5maQ6HEGM6VkS6mkSJZCn7EKv3hdwowGKTgZSV49mSPAPwYQn",
  "key41": "oJBQSggoEo9mceSwn5W9CM6cmcLqEwf4nd55oqiRmkxVyHbtiPt1fGeBjARcx1gn8ALevS16sLkLAX2M9S1bBT2",
  "key42": "3SzzBbw4HaFu3ueNBrRxKZYMTEv3nt648whAbCycH3DzcozYcmhT9fnUBZJWcc98AdGqkmrZFLsb9jHuMD5Zk53i",
  "key43": "2H9uutjjUEi4pdr75jUqvUYF5A2kan17sWWszbigM5dFEuR2cb3pZfymGkzr6QoFYhySoAorMoBA2gB53oLt8sAu"
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
