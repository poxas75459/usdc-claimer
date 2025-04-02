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
    "4KaStHEe9K5oyV59y5Zzi6p48V7KoFtYKJQwpxhh3XvRU9CZtpfxSUz79xocSCKbGaDVQeyiHCdQmuwamar7XMYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hmz73pUr7a6M3n4oHWsmpQ2Ci1LgXKkop6gfxH7FwjVjcS2BSCZdG756XkCt2HtFAPsq821bK2qEVXu8t2Q5p2",
  "key1": "5737oBn7gFpJ3mLrh5SowhbYPPzMnXiKu1YkBNz1ev4YVKFQV2NZoAJ3oMRXSWAtVwAgWJoRusW7TLcpgy8DpZ1f",
  "key2": "2jb6sxCQMJW8wrZ5fiCJ2PP46pifVAgDqt4MbVHWwyyPXQktm2PSacSLdsEZVRr9wkpcv9JHd16EkXnUmGEhp5gZ",
  "key3": "wTKjKvLcLmXgf3YGmYZM4FDkiyHxQnzv3ReNy5ZgPPWYqUVsvE7U83NixQgZqzP1BHTccwE6dXKYxnNs8QEwpAe",
  "key4": "3dSvUUGG9Phh53dy3SguMxopUgV4DKtKnNP37kW6Y1H29TXb7h1HMpH9GciWeeHZ9ZpWY5QZT3tXN57acAoC6uY9",
  "key5": "2v4n3NasL3bpwzBzfyuLrvj3CPy9BZUa8AGseHRnbmYyGMbCjRhvVJEvVEHKrNbunFoMq918z28bsmatBav4xBbL",
  "key6": "3TDYgyBHurwyvChvS3Juc1ikNBTg2V9afpGNPfdNZ1UmvpLeRX3Zs2VrbyQdnS5BKuSUtr8f8A395LkbA4N4EFSN",
  "key7": "22MbQZJeNWmMDW3YRrQLFmEapv8wDAVCEqWU7sVTryi83voxxXrUcaEQYHQ6GNtrSocYfm1nBKakRfcdF9HNff4n",
  "key8": "3B2XzYX82CACgQEUNvKSzmQrrbEMzjFGkGmrjcH2sXvBV2VVwt9yBE5qWom6vBLjR5ief2Xme8L4LgTkPiuHsPMu",
  "key9": "2FYpKupXyGPhN2oZLFjupRqDLfYGN8DYHntWcAA7dCX72Sf11voGhZng2MNeiSyUT3qrZ23YPpxa3t4r9oYqhver",
  "key10": "3i31NKPS9sdoHVWi97jJmaKry6cxSZPe8cTkVAmhchrNK2VUKbHBqa8o4NjB4ZkW11YMQNLUDVBUKJRyXssNPKZU",
  "key11": "BxSJGPXkhjNckqtZB9s2HqpS2QvAtKsiQgLwhJGXxDtAZbf1Hbvw6p2VfrogQ9Buark4aDu4Gp1faHnqjdago85",
  "key12": "G6fPgSkAfxq9oiGKSHQjCnBJUmNj3HDnBdeuS9G3NmirhZkpw6VKTVBJmE34qwANRPtzAcMaFd8mMBejrGaQTDW",
  "key13": "66vSmPf5yLTEnHHDf8JDmmxjgMTV5NG2dZAeKSFeNqgFfudjJeRaFstrmSjgtqkxp5d3ndtVLaxtZQFdeuLVUdhU",
  "key14": "5NneZ5R51cDB8NiFoP326ojjU6zyVdsc5t7dJu4u5pBrNNqYgeXbdeADqNXc5i4rvqXiM6mB8frbV6h1hHzDamiB",
  "key15": "hmthhxECV5tbtKYNZRhmqHDX7k8AWrkdy3GV3momF14Gw4EyzpgaQNVjJJnx8z6VFfdBKHWobkVH3tkVMyHhsLE",
  "key16": "5ZTxaX59jwg24hCJiPoW9hDxHTfW71MTm3khUzGjQ1PTaRcHBgZgmHDJvCsEbgGCBTq8ygKa8emNcrvLDdoyWGsQ",
  "key17": "GGqUGD68thz6VWFdBh45Q4ic9FMsnvUW1AaHuQG1K32hhSy1mW8932HUcntFpKwf9ZBW8fDmNQVVSr491oYDkyf",
  "key18": "3GXmHkXBQbmXwv73KpMFFiKzgnD575n2fCTNq3uNPBZAcJ1RxLmLev8YZ661tEXEpiXBhRhWMYJzMSRjTot5Mrk9",
  "key19": "57qvizu8rPQTq1eJHm3pL3PCz71jmR4TuxahZbprSwinA2tignTHcpqKK3B8E5npYBXLfa19nAU873BiszKzy8o8",
  "key20": "5r3ZiBDQ7cB5twPK2XNfX8T9y4FtSAxA6XqRg15CaEvJWSjiTDnCuPfrANZFCzEGeayVrgeMaY8Bg1JqGFdwRQcf",
  "key21": "2frvbwra4uhHb1zHMuKndAmuWBBeSJ3yoBtKB5XJ75joqieqS9ygpFTz6GQqPXunXL1Q8UqKXRtvPQyT41Aef6Hc",
  "key22": "5aYKuU81t9fY1qk6nX8RGoGtsonPjPFeiGAHpYWsAvnpZwrCSx2SiZaXCwcmmrpuzB1vNKzyoH93D8QDa2hmbxUA",
  "key23": "3gfemKSSy4QzBsQxSYU4seZjtD5UVzwQ7PYGCmJLguctVuvEmN3hBtkGVTUsJjybhdikyJDnBe4gbFHTmTTpcdSK",
  "key24": "3HZYVdzNgCbgcyzMXc1ufvTcMdNjM4CH7fHefka2ajgRmPYUjzpw5FBGcZBdAJmosyHTBpa72aGE1qzUjcrpiyP9",
  "key25": "3Z9a1KreneAZMQ2ndjqSEm2ykQGC1LM55g1AtPnemnLVhD6aJaxfcERrJFTprC319DCQNYubHnhv3WZ2JvH83DHM",
  "key26": "2YVbxkwVizdEzGTsZ6Bs41aV82YESQ7BBqqPbP4QnDSsnRVvXRLzQCsm4Wf9Pbhq4gyV3ugqEJhQSedaz1d5qvHT",
  "key27": "4obWTVg5UWpF7RbSMZMm3qSxWE5r5CuowBD7JvSTmPQ5NUwV717KqcK9zhHjA4VyZE91QbuLB7y6r7PqgH6Wtmpn",
  "key28": "2UvvniaH5X8jhT7dieqha4CEoJJfeN6UHePpDNBXXVV2njfApFx8RtmuZXoGo2eDVNrs7PLz5Jg7dUwsT95kcvV1",
  "key29": "3aUz69qadtRTpGddPQyGRUS12n2FHQTi12YZeWYY9jh9scWpdFxANBbL5XG2QAtCKTVursXTQBMC6QphozXHP6NX",
  "key30": "2LdG1CKQngtoPAJHpU7B48i1E1HEgwVoKczWtfFk2TirSquWd7xRdjXPJjeP6Tzb7orH3sVmeiATULDjubFuvA2C",
  "key31": "2XuKdp51sxEXS6EzpiHmmQnUVRGhRv2uLU2nBpNLAoDLkAB3cGv4FMW94XUKWqeJ56foH5yMVBpd7Di74z9XTbJ3",
  "key32": "2wdP2sKqHxibkEHfkdv56VZHzSDxsW2zRnuapesB1HL4ke6xexL67Nah71DLa12ztVFdZF4KPoNoSJPVT8uy7XMW",
  "key33": "5jSK2ySC5GdTKo4ysWcZTAhVAEsw3GPJ5GtAjJmiXihjj9i7moEjqiJbq7Cf6vszvBJX1bdcSGbQTEhsfwEfYvSv"
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
