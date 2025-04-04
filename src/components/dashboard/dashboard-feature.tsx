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
    "2jvPrMtNRdf5grTFB9rXEJjg7V4BYaa8khftR3hQYQZvECsp9ckfKJn6NpDNiFiymsvbbJExkRrnvV8PxHzp1WTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n1vM4W4duerw6VEeqDTbfMtcit3SFchnsV6a5tDmtWSbAgMG9M8MD2og8An7Jvxn3MxsHN83GcsTsLejoQB8AuW",
  "key1": "2kexjLZ9vXPNPrQsDFakAmNPFn6gxGWbRG1JS2UVUnUo62JhDLENLRggZ4vNyQfKhRuZrzT7T7o9nhdco8ihMmwn",
  "key2": "2vQzgSvt5b3RymvZqD1zE8R4XELA7sTnKunuqZ3faQwGvnUuFwF7QUSHfnon4iDJaZEPXRyoS7pAVwzKbD9p8oTy",
  "key3": "4Q5WqaDRAA7Zmavq8FPjmWpw1p4ehw9sk9xdtn7bsqR4MaGEmkmpfxY3XFbaBG21yygVzpBDdZsix7FAASzvBPuV",
  "key4": "dKb8jcM4MdjAMhfBncQFtCQqNzRwkLij3AygFZWfiCzA3WsnN2eQbZkvwUD2JPFVUeFKLMU3LaTGHm73yCgYZT8",
  "key5": "ccEugTwAZj2EQbH4Qq2aXJgYit24VfK9jPntWY8HZWdonc1zm3bdvUJCm2AUBdPSitvmPde22LVjyp4Fk9C53mt",
  "key6": "gCNZUNwvXJ8GX2Jdx852y7XP1xKVYce2i4wVv6pv1pF4qN7WwK86LDez9nGztCTm8aL5BHmdgyD2pFaARfe4vQT",
  "key7": "QJ46gUAzha2W79jPZgmVDfUPnsk71UEXCcJfzNSNNyupHyuGo1pGa7oQFWXRyXFCGewqNKeGfmheWqoYDjj367h",
  "key8": "k5mpdUkHFsgBwimrjqBjLKC33roPNLxUepB5oYz5Xrrw37BnuRvGJEg5tdKpM755pY1TeQM6fDyqgPD9U1qPCdo",
  "key9": "5oN64ftTAs3zoDTiW4onetejSLR1Ka9BbTmmKunBakMHQw3dLAUNUBcy6cGYEtWuEi66GrtZrSnxGkZuAn1JHUzc",
  "key10": "33yfDdNkRnxqcXug4P6ZrtKZaZXkamqhxrAdY5ABGGm2vgg4XmSCsn4SYbhctxT7HmbVr4s4o2YHxFio2ZuQ3TeL",
  "key11": "4FUsNs1s1d4YoWDfhvjgMeDdhuVKy42UQHQXUJMJjEjVT7tcq94jZWAuVoRGg46m83CD1drzvLrxuyftMGh8VBrA",
  "key12": "36PLhZcd9vbqKgAkAZuh2PrpwJcNTunZ9rjHniABy4t7YZd28PpB3Gp5wfJsnHJFM69fafnBxiJEVKni9FsZtXbQ",
  "key13": "1HhCuxx7MFVAqpFmvZbVT7d1cGd5YneuAREuYmyTYr5BVBaWXVgd7LbpfGVS4mqSECyfaoxEZRU1itMXHqHB6z5",
  "key14": "EsvwCdC7dtGJpMtgxW5mTQjyZqEuacb8vLTCHHrwGW9mQuFREc3UHVjaB9m6E6vdk5Wtwg6KgzrMCgyesS7D5ib",
  "key15": "xeYXagxiCptViWwyGrpmBDxMuc5V2e1AKmXseiie1W57NeCyKVUwqb6vE2aJ12G3DM2mtHhuABjN3pPvMiUfJBw",
  "key16": "4b5KzDpa3M68XdLLQTk6KKwaZo1a4APBZaqfzPk7VFgZ5LkVs56V7CQvuqKUj62iwrXnpcmFHhjPwXPsH6yuS95y",
  "key17": "5cfawvQXBoj3jyxKYjN2vJZy2ETjtXxeKBCJYL3Tm3VQWyAHcuppgg6Ne3r6ZTFocPFzf2hh36xwdpNBb4L1WYbz",
  "key18": "5En7EzHj8SNsUiWJr9PLgnDoRUhffz3Zh6xPe3VAWqomdkyHTw5NNEjVrF3zyK21kAbmqhCbvC2wYoPmY2si1CX3",
  "key19": "3JCmfjyqG6SMUZBcSJVkLAskRiccHgiYC5XPhQEwTVrmvTRvu2a5eqAUiqFyjgWb9oY2JRKNZg5UdLo3pJd9FwVP",
  "key20": "2wAXPRz3RPeJvcNwjrrwWe9FUcfXWgrjNEzKm3XypoFdHs1opaMWFUe116za3fphxV9S4kVh3DWNUk2RMXQYtk9",
  "key21": "3Kx53pxqGwUzdmf9W2QogbP5b9QxNQFsPvJ1twCbSnMmYGo5hCBxVsZVo87daxpz8YUHfz6wvS9DesrVCZRaq5QU",
  "key22": "2FEzfDGD78aXetEU1qXuvBnPomg8EjZA5vxMdrMZKHqcC25dfFRddXo8qsvxV6yeKNPpUgbeZcmbJR7M332niarP",
  "key23": "4biwcNBRmgeQjiNA4goavUddNgXSEfE3DQESV1E2JUZLosrmKiPzm3BmR5mZ8qLB1ZLAPRL6ZsGQDuKBEeM8GE61",
  "key24": "ZxPB9hdt3nLBgZ4MzoTPZUv3ChSNgxGhuLZWrqG6oUo5Yz22ERPCEzFxQbZ12qN5jDLWg3M9rWF686V6LxehjFo",
  "key25": "5VPANXGB3gTYNANXHG2GBwTddzXu8RwKLQCiyJ9kMwaZLFCeTr9bpUNQa8oa6ht82EJPH9DGyRT5U8vAVkWEsTCi",
  "key26": "2kzj6ddbT4FJBKBttKaL3W8BHDVyDdwcuAmcw8WqmDgAJ8enTMRR8MUNg4FdiFLvVLLpAQwbXzSF3yYs6xyjQ7Xh",
  "key27": "5RmJMcJJQx2NNujbWH6d5ic2F9VvTvjuVzXSJpmfdUNQCSM899PiBDVeT1egaaTCxDvVcWrQGqrLxU2xm4SnucWk",
  "key28": "4rgAVcqzbNRkvpmEf59Q3EVmoM1A5SM6usYoXoxRgawuXbkMMJW1fsqMQ7mYUtGk2i4F3ytxXZ3scD4qFthwLvKW",
  "key29": "5HhndVmkiJyWkAeNrfYTeJeKdAUwyaRPVzRrJUXo8X9ucBKjdHbesNPRXbCfTPVqJengHGRZ2LgtF5zg59KJpkaz",
  "key30": "2nytrvNfqfofyyn9FKcLmSEVHUdHJy93LE7iUGbkCzYwaSaya8Xirtr1gFvW5s6GxNCCBZCW9KCggW6UXxMMcL2i",
  "key31": "yCPDhg1Hiq2BMbCVbxibMHrZpukxTZQAmmvhvpKZNi9SffL3hicpjAUdghiUAF8UCSiupkogdbSgVRNNPFcDTPM",
  "key32": "5GoiQTFeenZVKL53gxVBvvWZRhg6ATAJonNS2vZGznuD51cTDcs1dGXQ3L5JczCsePnZ1zWoJHrWSSgaNnHe9BEZ",
  "key33": "46mVebhq3387PZtisXfWwDzsJ5duk1aZYgAHRsGb8FFP5L6LWCfpxXocioJcpiSiSHamsehizC1zgD4F1RBa8sE6",
  "key34": "GRNg3tKhLyhhoxjzcF67gQq7ozj5tixDX7KFi4tf84Ni73EVLAccmUjJTL5wSe5Nj5hw7JiJjTF8sDFDmEJaDPS",
  "key35": "29TEniLTJucCboVZxS9zsTTz5EG6EvZy2qUeKAQN6FNsoNhE8rELzcQwaoZRF9cn57uCtcbUP8Ykj29LpNw9swL1",
  "key36": "dpuzzvQ3jeMToTStZRjrvrRN3J9AfBNpJqysbnHZJG8H84oK73Q4u3YBEWHHkbYp5L73UqMG52wRJY3QAvgwWzY",
  "key37": "5RhoDmNB2CTQneYCQMQuu941B9P8kwtbU47aq8rDLxN4nbzNeicjLiskneJ6vr2HKT1jH4B9zXWoctMJFsdonQKs",
  "key38": "3dAp1eSuiSUxEcpddPcnPBL7dvqGkN5EDuAXoRSh6r1nbN2toNQDM7S65rvpfHZPadN5aPXBhLVSjz6T7URpQ4P",
  "key39": "3uhSZtAcsazKEJLRCpPy6q3ppMzPgvBEFJBSvqfmj7cFps9U4pn4ADJG7oHcpWTh5UBFAPhxHoc8tDFK5A7BLGJj",
  "key40": "EZY1SQFzkdNhyVejRctWAh2HKJsy6aJZicNKVSMeWjBUBzmVP8esvgUbcEo1919ymD8AVwq3KZZAiV43gBVD79y",
  "key41": "asfQndtZ5eJY3W3Gc8GVpFMjViodozrfWiff83jaKq4ZuAZ68S4VyAankXRw2NXi7q86YyJ9dxUpgAGXFTmnhu1",
  "key42": "2fUfEyZfCfg8uKAEpqisDnpYFeRuagkaL9zes3rdnbCwv1xQheUmFF9F1g1ciA1ebkLcHSHN1Uqa6axBnmjvBXvW",
  "key43": "56wtQYGSk7HDvRTzgoJHt2drYeXC5zYRpYLFACeGSKiM8xtMmA6kQkZq7Hek8uNKND5CNCPsduCNj2Si9SZv5fq",
  "key44": "QDx6i1AfX4xeYeQxMs6rHc1BA9dtojrRWUDGfbu4YHe3ziwYvXUBqCxAuUNYyTDZRebMAm7cXVG5zidZU2urood",
  "key45": "2hH8SLENzaHeDMJNDwrX9TKrUy1YBnbd6ZGusMmSC9LTCpLRJ9Ke4bVEm3UZGTGrA8vzTLZMSgCqGvE1qSuuFCx",
  "key46": "2AdCx1PE3URv3CFpwKZWfCZQmx6CM8SQUDj9NP2oTxWqzH8vJXow1W7roQ5FXRGCyBzi9W9CZPtKW3N3e3njSQ8u"
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
