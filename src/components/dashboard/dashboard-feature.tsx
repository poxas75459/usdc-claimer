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
    "5zxmxEMof8NaS6F1ujVH2m6L1UbN7bkoBqemN7AQVdEwAw8FWJyFsue5dqBD2YCbsiYbJ4vsCQkKiM7j5CptwWBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pKzDYV5iC9kGXz2oHD3Tmf3BWLPXj7y9oPkWCGHB1Y2USnghayjRNX8SLkrKem569dbvs9i189FPRApTCEy9V28",
  "key1": "3GwerACVjLZR5M7w1i7ePpMyNh36oxpUUwBYWdrgTekCTS1Zc1av7KbMFdpfPif3sxzuFjA28gupZ8u8wcHjRrJt",
  "key2": "2kCjj4RU3vX7ByUgK6t7tXpcUCtaDASY4v8KXSHEnLmSweZzjtFxNeFmonseaf5muYS19T65g4kn1MsJgBmH5LTX",
  "key3": "d8hFdrNyqnkgYSi2udS2HndAF9Z5YUdcvmaHQ3c3RN9VFY5XJJbJbMJKJ4GEjZN7zXpycd4NoEEt1EHhW66jPTr",
  "key4": "4u4czmyuih6zH2UXWwwYQkZbjrfTKvTDA2AVkDGJe1URngRWXpki4dqHtXEjAVPrM6s4c1EgyVx9uNr9QM77zvPF",
  "key5": "5YWWANoeSJZKqtyRuiQMA5sGTCszEjxawyn9d6sNuXKjxkLNMVp9aZmaoKhv5ZJ8EY18bxdkF5uTHfBw9ooZkKPM",
  "key6": "4TaNUPx2mHQr1DzZrEDaRXaDvT4tQMNie8wiSSuQuU8YAptDMiBE74wFSHxJnoyXVTeFNQ2hWTDv5CwdCVAe2Mtv",
  "key7": "2CfGv8kcTnBhF3jCssNd2GBdoPkJuh5vg3exhvPF5EktJ6QixKiogUdCuebqPd7NCySju5MQiKyqEfDGivC5714c",
  "key8": "35Fd2Ww2FaHiakPHZSfwMrSNo8W8J9WBmBg9PsKeaAnuQfQy3SdCJrHz8YtXVp58q5Hg1SAkBkNbFJWG3keLMVPm",
  "key9": "DsorYynK3fHp7hGupvditAT3rvnQAXan83j3a4ShZC49F9iyu2XTgorPC1oSbcDJcjeS7kEU6fQaT6KQqYXZME3",
  "key10": "LM3x2dx1eW8CWDfoMfhmPCEq778SqqindYKdMm9EUnUcsb1NvE7ufNUo11W3kzHrBHgCEERQS1yDZAGm9paavvp",
  "key11": "3emECZpLTkwVGd4k7JcJ6LWKguNumQfbusrnEdMUZaUxK63sAGwyNwehWxpysGy1GQk9TzEFGZt5pPbvTtKcExa6",
  "key12": "4BphnqpFVfhDFiwfi8uHhwhXyYLNAN8NNNZ7uc8JTFjTL5zmVLMsj53ULKKiCg7S26TPnFzqjbDW3XQVgHvtRRtS",
  "key13": "4PeT6Z1STznYCCfgS3hxYn2VCLBTUjfzGJZ7syn1V2PxTxdNGCMQSeZHrAmvTRbobaVS4g7aoofXdvYhxUHfhB9z",
  "key14": "2W7QEusLPuP7Ut6mXXQHrYT3sn5sqQEdjqVU9wtejyQgF2DSVWkMBrJqexN4BBSX63P1sCwcZ2T8ndTiaJER8kK6",
  "key15": "2i1zsFSJvWTM3jQBHAGmHZ7Fn6mYsokf5jAx4Kt77iNusop5ob5GJDuuuCxKL8HgbHrfx3VzjNDghqWy6eZNBpnt",
  "key16": "4MgNuvGQViBe81dqiTk8YLfvLLe4BXrQSAi4S48VrVDHAz9vuSkvTpXPkZnRocNgaiKxP6tymcL3Lz35k5UqH9CS",
  "key17": "5GLxSyAr3TkUjoqLnxWnCgr1T8EoGW1BnkSSuyYoSCxQJMa9L5PfVpZX1goTZkzTLZgVHKAD9dqCBe2Lh4U6BsVd",
  "key18": "4X1tv1UJwfQTfVAhqv1r1gX8HnzQFJL1QroXcPfM3zxkVt8XGAue4KSr4exkG3xJpY68UrZaQCyebc5MGDZRWSd",
  "key19": "5LEf5vsd4SfjnGQQXB2Eu4KWAcVCJdXWAYcLbzHDLhuUxYWnCMddD9xfN1Wgi15vmHsKXgmXHvRotu4FgVF5BDHr",
  "key20": "63pE2VEaqUq716VjEFGsvfpHgDuUrRjGobTmdPj7ThRGj7uxNuzSkEPzycjDdDTyHJR2vdHx8KQsfQVexd75s2FC",
  "key21": "32rmhDMtPnFLdxcE9xDXxFTbVQbTBGmK5u28fDiHgQCkYiiNog3MTujQZ5FoQ4FwZqNEaWDM9f8rkVbpFFyjkWyH",
  "key22": "31kEXqwy6Y61gridfDEYK7XyABhHLp7uFJnTpPut5Lf9ZtfbFDwZtd2fJUPKYgmactfdZMP9oritEtnX9DT2HBiw",
  "key23": "2AEcVbqS4V3M4Jg3EV27jqRsuNaoMfgMGCfFzEFxhKfQvDcQmuyL68MmDj1AYSnTNDAyFYBrsPZxzvYbgbucTCSs",
  "key24": "2F1F7ver2wJ97Xmy2sJxPYhHn8boSgSPSWfoQb8C4tXNuMrBigEArSgAWeH22FcGAgQKuxG3YiD3WaDm1Hv2Gjyj",
  "key25": "29xzTFSTbPVJmundY5NXiDEjz8F1TrmL9ZN3gMsTrPYSeDyKdQoV4rF9G3tSJnZQ2LkK9SQJBxMg1NwkNrCaq1k8",
  "key26": "Wnut1eF5a6UtziP933GsWpXoUqrahEwo1vj7gVpoKKicwwYRqYVPTrmDRvrPkC1bKCc6upXwgvkTWwrLXJ8nNft",
  "key27": "G8AUkYoiwuVSEED3L6iMs9Pk9juw9PybtUmHF9rTdZzRnrsvjRdiTT8hR4NynBQB1SUKUetMwcV6qE48b4FYSit",
  "key28": "4TzJp3xASpqtzQpHZX4KKv4YyNuJTHbQTtQUAupoJRS1WKyHSj3bHCKdzvV3NjpHCeNrrmfSJXRRPAwKWqajarTx",
  "key29": "3mA5HxqbtrTDRFVBZPZaZzQAYrGPprvrMeQ7F4vXqxVedKubHDkvYHLz4xeprtQtE27azkBKVQmMyJYpJgx4mS1R",
  "key30": "2FPbvrg9Wt9PJfMnLwjyQEVJ4BUEjWeBNriq2gvcbfSr8MSi9fRRLYb62iSyDEBmCzgeH7DvK31rqBpuKY8wvKKQ",
  "key31": "4GVH5gjdDTGmmuCFZK6qPZCWiCsRnrYv2sKeY9CZJJQKTjsmNVGdtb7WbuK5hhBV3ZvEEJNKoQMZsPYgKZgXf2Fk",
  "key32": "51LsTgGb5QZzHCSBk2xMNPqjA9dzkTSKjLoktgAnMmc7pjn6fRKSyTdcyt9eofbCvUe6dYDy6wWP2RfmWqqhNBHP",
  "key33": "2bwmEbJv6TANdg9XUmEf5V8go53jALgKBHeM1op4DuG4VXDHvzThp4ME4UcAhRgxvDkE1Z7kfgg7bckJc4JzeWwg",
  "key34": "KjyWqfAdQGYGfB8cz6rsAGpUR2J5yvBoCX3qNW7erhoWQKGLZdQHn4zmA8fCd7CE1CokbxN5EKPu93e23iUZpFW",
  "key35": "5hvoRsifsaKBpijR2wo9q84KiTCuZBeiYJk2NSx8HRxuiQUD4WVeAPo3Hxgy5oibvwnW4BbS4ZXVH5NHtFZZfije",
  "key36": "4rbBxbGuS9anhptM8jYUqya5KQhirm6VdpCnxmiCarYpBzSKmnT1iidLGtRo2qTfYTU3JmRP4SUy7QqFNqatWN87",
  "key37": "2smWo1R1Sp9FXDhmJxsyk8kWbaXM9WxcYQQoDgyPNWkkRx9ZiNEdWgd4zPaAwjYUz4Vxnq7XpPnDRmcy5q9Eh8o"
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
