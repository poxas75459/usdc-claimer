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
    "4nxYo2VE2Ss4eUqabimyaNoFnGgvqAqNH5FsEQtzX5ymwU87wz9mFFQpgRXNdNkhZSWJXYYtzdessxsX4CoqCZDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vVZXNy6zMJjwxMzCFvRWKC6V42gNTF2jw27vQ2hWprHVKZYWQsMW36xUfvbB4GYkRYbYSXgKdJ2sKUSRAexJUnW",
  "key1": "2n5jesBDEgtUXPHu7weFa9zavpTVTd1nstFWttumFck2w5wLuoNznJxAZRS2PAGsSHisFtpaj7jaFS3exoqKnBAA",
  "key2": "3YdvTcbfAHGfmg8yBrW9dxnvaUNRsLxyxcqeZzR3vk2Be6isi14sH8M9mRovKt4Sn9tcZVFEuo1RHhyYcfoBNEvu",
  "key3": "2r29jnj5H24cRmmyWCfCCBye9PE8Tf6ivZvh4tRK67Edrd2UJYRx2G92GFRNjLALu62Mntm8MM1M9AWFr15subRC",
  "key4": "2kWzGH9Wzr43wQBNhk8Fxg7N6bD2SmQwSLEkfURZhDjeVmf562iDpMmAYeuHCKxftdy3WBZZs8mnjfeuDZRdrBoS",
  "key5": "AxksRCUju99hYEZhnshgeBWFXnPxwRMv5xPiVGYww6vi8jUjrDCU748CPQvHkHeQ5pbiwwYfZvvLFtGt5aaY2RR",
  "key6": "4xegtUj1qzrZT2CZ5t7rw77TDKorGchXPnxNwcVvaKRunj51MG7SW84f3jcaP2ggytCYTfJdhXM7n11gBkMB45Pt",
  "key7": "4qYHwtTWGK9L13L1pG5QPbhu1iaRDJRgBBwAf66bmW84mAKqBs58bm7dFpuegwqymum1d6axkgXqDSzAKf7mBcxi",
  "key8": "22SctkWcQY8mYNSwA3Ct88hzvgDCKRJimUt4oj43AHgPwYQE5naB9aEpBbP1ZvZRisvPS1VE62XLTPUu1L7tnncK",
  "key9": "3QfbUQwvUdw9xi1WLV65qHseB1YsGswqX4uR6jWKjJyi2ZZEQCo9oc6XBNgmcHwaYBYbN66QpRNRue1pi1ur9adi",
  "key10": "2EAqiz2C57xkvpXfDpagSbBPXPcYf8aVZVDqFSQMYFJ2NacpJ7p2smCcebjv3dXgsew3WEfTqZ4gedovf5URoYsN",
  "key11": "EnL2bVsrUnnNpVyXcuNgMKpPJwUGHV5HVgmsUhEFwLqBGoWg6axbwaRZFQq1Jv5y7MHJJBwUwkJg2RL5BFrkbx8",
  "key12": "62hnUqCYv65MxDYtV2drCbEPqVEbesCy5aqSd8D1d5Vgj57dLdZSjeYaTFFYAFMeTsD5chnEebSiYzxc8TRyzjBV",
  "key13": "4HAbdS3dv5Y3c8NaZBh4RRNb2Ydntdon5nvGUD3PrjdpZPncA7TcLUYUNH7cQSEf1qsFY2XmkKeMG3cz7DbWJDoU",
  "key14": "XLX1cdCwqbCuNonfpGfdMWXoyRdeq33WwxdvJ9fpQ2ojwFiVum8x1NWRLgTkCcECq7KWpW9d6gjFjvFNGPpWT43",
  "key15": "327CyCjW73omU8NHjHkEzxhdTYxxcA5GeGBaS2UVJryYEAgy6w9MnsoUMeHdtxj8ZjxAiUUaHEBkGMWvpdbPqFvf",
  "key16": "SJCJWjCZY9NQAYTePdqnjHbVehQeecqS8dLLj8coyDc6U8NwbBTRM8e67uHDerFy7u3wFtvBxX8j4NR3yY3oAx7",
  "key17": "CyyHGhTm8Jno2JCExh2vguq9xmS8YNHKMe4hGu8YPK4PjRCLJUGVSUxPYV8TVfLjcdZgjg5hrXsfzBiJnSc3J1g",
  "key18": "3BpiDgLcFCRhG1Y7hpaJCz117zT22b8Px2iEv5qcuWUuvkQnZ2yAuih1bWBeHHMoEDTnHkwDEk6Zd8TNZdfkZtiR",
  "key19": "4E2323askKs9EcvuFd7HEGMqFEVBYv3puZoY3ivyTnmpcE2bf9pN23otznkSEsx2RijE9T2FTziFZBYU2Vxk9wxr",
  "key20": "pTg8YyYtz9mMCfVN31QjfS7VB5UrUAQDvuV9UkLptuEQxNxocEF7e8vkbtCQeXCa6wF4wWgGTHDBi6of3JMbxTV",
  "key21": "Pn2sSdHvzs4f4qqgZFWQn7DVyodtWy616jZoSXB1LxMTfBDbRb9wDQq4uXhmuBX6TNh44VTiCKDWBzHQWzESGnt",
  "key22": "4J4Nyh4JJmnGnJEwYsUTiaT8942F9L9aDtcjWsAWvSWwwhb5G16UXP5QV9vjGfMtWLUkNVstsB1ezuEtAHiyfpG6",
  "key23": "5VEpTmY2V2imuHEFSL9yZJEc1oCmGoPdgwgNYKcLydeuWweT9sjUQu1m6AEg4wEGPMLtCM2wPFHsCKBeVxoHoVW3",
  "key24": "5RDqu7845FAzKumv9UXYoXiYpMhL9y5Fk1snB9eekwsPkJqJEpWvkPcY1nBkHyTtoJ4GmRWpB5fFipSDeRcFWF3M",
  "key25": "4HWXjusAhnvi5chXWzMmuL4oXnFWvxMrtU2vAj2JfxrAp3adN9Wc9TxekYsXN2HLTFWpc3RV6sfKmaRSqc1G8tF",
  "key26": "4d8184kJhMXmouHuekhGmtLRocwHEVE9J1NycNUEwNjh29UoNVBEN9SVxMSgfaXfRjSAxZMEuCUN7fFoS4WR9oJB",
  "key27": "pN9EDDdyrp8W6aMLGrr9aJV6dpQYzRy8d2Dt2tyUxeETBo7yGn2AMUQjQYCUMwVaniDL3thMEwnDT1az4kNre6K",
  "key28": "3SWphASYVZJZqKeq1oufEYG8rN7Phx4CSYFJZain9REe2iv4YFiNJYdxPczKLXNxxYeq7mjDHPX22TV6pbbeFBD9",
  "key29": "24Rv4RsDp3NW95c7yp6VSpwTvfeXv41TShYZVrC1HdSRq3wpcsVwPHc9sX8Cx88ykFsFuEX4vwRTb177EJA9kfUf",
  "key30": "25Lt2YpPfM3BftdL5NFNAwHWrt9ib316fU22LaLabRJrgdmfvMCFAycpywUy6wrmCcm8X7FMf8pb6JXXJ4nJdkNY",
  "key31": "3Tbc6qQZ6DgzJd2Fd7Ed7rycYAbaWakfWFnkgBUfRpj8vhRNRTg5r3Md9Gv3jH74V7v9mDJ49uvAuCf7Rn9RfnLw",
  "key32": "3mWyspTwFWKxaBRcifkfYX1Zce4Ar2E81LP7VGo252DdhupBb1ew2QWZjth6JVDQfzVUrcM6yYVLdPiDiyULFmVR",
  "key33": "3wctC3QfZEpbb5QCstnxvTZp2MKFKMq1jJ2EXf6WFwai8PrQXuMsWUkz76C78sy2dkN5sFNfQaqwndNRjbQ2buJi",
  "key34": "3ZtBu3wVa6X3SRJ994S2pYjuGoXCWwjRXJDMTbafVoveswnG64nQVMXkYyBcA654XqniaNuEWziagxsZcnpUEjra",
  "key35": "4wcXgsooWecfkmKfbnYPMbEFpqvjUy6dLrcCvUkKh2gk29rJPWMRgEwTZk7f7wF9gv1Mnx5YAqVymgRnLTBBjhqX",
  "key36": "3TM71MBdJmG3FJQLTcbyZDRksgou9U9yTY6hPVY9EwcQitSBi2DW32x85eX5GFEGCkkB29A4yU1sRAbR6tLcN1tV",
  "key37": "4Qr4HkvRmhgSTqVtDgx2zP4XBwGZE2KHdYWhWp5nf49K48DR63wLDc96ziCUjUtzj3rB9DUoLyNeLccrTToV3qSz",
  "key38": "62HUMzvW3DjFviiUGWp6iGj2L1FS4K8eTNCJpdu137UUiVtwobDYHEQ84tQinUBL1iYeQMu9zYTpGdGYwoReaHKM",
  "key39": "2FfL2tjS7A2k6R7M7Pep6zKDMDJW8NrNT1gTYLbSs25X3oRmjTiuL5q2bYxsQM7ciTuT5cWJs94oWZhR4AgsYtk2",
  "key40": "4z7sn2ewVMVcHy942sh9skY4xvJQF4SQs9jGm6ubxgAr38eRWQARrayaPaH3zZRowqzaeBXxYY5pkyGqRMkEa8WC"
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
