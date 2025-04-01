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
    "2KwAyEB2so6h9eMv7jzLgFP6Ca1rt623q8qG28yVo7A1WpwJAc2XVQX19ZEH6ZmPQsKBjEU9kuwTsShr6PJb4fWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tsMtKESwCuEY4ex5KbXy2NEjYPXe9WGqBuLPNKmtbaU4B7c5DHcQmBuogVayc3QXsDxoqJU5humckuKPgSanodV",
  "key1": "2Vy6pXLPbQXHW9eet3TijTAMqpBFa3nhyuKjBHM1HFDSiaVcszNjLu75EQiUwvWAAwbjF4zdJ1V1wcyFzyYFGuUM",
  "key2": "5ZrUZ4yYcd3Qm6cvT8D71RbQ4KMrKgvcnJZmbU4gfcG8bMvR3H9zmepxtc1MtChSDyoWBc1rYSgtbio1uKZMhxNz",
  "key3": "5cHDsWeuFPBuxna9nLUMdsFFuSQiGZoDSamDhFd43iYBKKLLsrkCAAt1fgfXejd8vBPhdxr5tF8PsCtg7yjG9z6p",
  "key4": "5Vchiy7DZWmDUDg5gyyBeDcB6Lbge3Z7HUjMsUrbsZuduex3VDrcNS7eNWwxwoDtna9Q9LtvDAz2XL3DrxuZJEb4",
  "key5": "4Ft1et2vpjR7h5FrmP3j2S1zLuKMKf1AHyBWK2jVaKtGaYZbLeSjkqGoyXPcSHhJTZockcX1EwAU6Q5pzTCM1r36",
  "key6": "2u9fafamCa2XPdYF2Ydwca3S6ZgDDdHNdywecwNJnUzyw2H9os73vgDBkV5d1jk1Txs2vHaRjviohqj5RDcYuike",
  "key7": "hRNkrBf8xZ5GddC15knvJZ1aATnwUp6RUbpkXAbvNsYsd1FVKtTJBRLsN52gke1KTgHM9YzmxmTLamsnFEi7nTL",
  "key8": "XezJQdvJM4zoNmoTptk13WMCLPkCL5aWNHhcmUZtti9j6sj7H7C2g2hGhrK663RypA33Whq1g8rHpupLVax8CXi",
  "key9": "5oMMGztdwio2bWd2pPKqqisc844DA99kdrY2pwHEhtZGvy2hKL75i2VQ7t9srNeAudxRJzECeLkwE22xMBRAUnYJ",
  "key10": "39bvdCGpsRgCuwChoYmnyvw43eM4WzaJRAf56jQFtPQ73r9mbGFyYz9SqU4wCSm6C8XcpCxKxfxR3pPdhLZFDn8Y",
  "key11": "35E3mKtdam22PrZk92FwBd6RYtWGjvovegcDMQxfjC4X5vDXQhDWhPMqvcky8ZJTEci9degTkYJJhQTx8GMkuSew",
  "key12": "5CHoywxAyGYeUr4ex3ZYH7e2qTxexUcJhWXzo5VkSyJzseF1KCj5awJgBpZA2PgAgntUKYhjJhUK1ZyMyuoRc74W",
  "key13": "1bYw4iMqLSsYfc8aDDtRGmseqTHJvDKT4S5i43wHBtV8WEMG6h6Ujyir58MJmshw9ZdN6jYYRRY1fmnXwJ4QWk5",
  "key14": "5Xr76vLBJwXKsDeMHHa32UytmFZRXnYvrXLCoceRSiVLpujg8gRGT6gGvtgbYmSm1HHws56eJDZiDarenj9tz7hq",
  "key15": "5Pm7y2x8SnTdkcHppjubvE8jtPwtVPrzJMZdQrHHd75VNdWSqpdBznYUFWtSMNFbdtmrChPhbzA3gc5bmbf6e7vi",
  "key16": "5jw7EkGn2W8daahknTNtC1rsWfiMFRJrUHmD7URm5kfdkFWQjsjVzC9Z8KHFGXDJukJYkCYHYS7f5iUivhRJWud9",
  "key17": "5JMq9mgQDSU9isAxHh5yPFaLsSwhczEiDAbbsiQxzeDesuia6qcxX4c5AF96gcBidNaL5FWnSPkgTXJSodmTbskk",
  "key18": "4aAKyscNRSSm4vZ93MsBqS53bkmbqm6TC8HDcwuKyJbLeKsaoC6guF8jag9SCTEbcsg7LTE7hjw2wLd2V7cFxaZ6",
  "key19": "3UAnw7tgqcu7h8JPAwXHzPucEDFXRda42URyPuP9eWGF54nVg8XQcVKMuzmCHUwnVX5wEpP3mABLzAmYvDeZ96ex",
  "key20": "4qJM9QmZKGUpK6EcSUs2wDm5GCx6yQTo69NDqEanPkMPLWshapYtBN1AcStRXXPVmcd9cPhxQsxQtCEDvGXDv54d",
  "key21": "65u8ksgAy6dL3GjbNJDaNuFuzFXRrVXpLC5uTwsZF7Bged6JLdEq5ZHRe5qYmQEADGqvnBLsFeCeBRRzAkADUh1n",
  "key22": "ucebj8hfFj6qYk15KxZoDappUbw3mBJjvL56ia5qdyvTkPcBi7Wbrc2E5gUmvEToJM5zVffWTyUQ5nRVQCLYZ6Z",
  "key23": "5VuqprDFu7jPA78y1VS96AepLpbKdw5Z46Mez7j7iFqeLxmPcgwj55hpftihqDm5CBGGETruyRDs3k1pAR3pp5js",
  "key24": "4gE3QV5NneWLAMyEUzsJaDrjCibmsw31SScGx1jr8kmnru5b6NAL6X2bTYBf7sVaoiB8WUwMAUsP5aaTRrf7eBaG",
  "key25": "5guEGgARrv6N99AZVSbLXrgwTUeHpeYQjHRr3cNbEYWkB8YB1uhHiDBVf6mCFbQdtLFpagJvFCWL86i36Cwifaez",
  "key26": "4K3oExRVx7FJSkcYtrmV6HgSUPxqDtPU8yZis4yTNdB2k5rVFztCzmAQJntFKJKcKJYY5w1Fuy1eHjgzf35LB9sC",
  "key27": "277C1bSY8TiRVDyAVCHoe4N7KDpzXV54vnQqwdQp3JNhqJrWpXsUrzBa1252tSnYK18rHy8yKP4A6h76Nk2FY9zi",
  "key28": "48qXNvDJ81MidXjzonTAXWN73rW3ZZm5gMxiJinHxZy4xhXTkjY3x9kEYQr5wbMi5TZjjY4R9UQ2GDefB53LjTpd",
  "key29": "JB5Q3p6EJdsSZMafEmK9PmbsU4BhvC6FCrDmB1qYdzbNXJJNKaQtUgwHQz2zs8FTFTkNaJDUY6uDzRr15gfCiDC",
  "key30": "3i8fgJyWFk6jWKc3BpmM65k7RbzEhoFsuxDjeQf6ZLj3Lq3mGh6JdjeV5xwy35isTu4q2iy2924pb4UoTdis4VBz",
  "key31": "4bPSzuK4F78pKJvdedBsx7gpYVzMgRqXkoZLAFWA4fH8oPDy29XxkMyRa7ywpFMxa9CaYs2Kk5KkUkHgz1catBmU",
  "key32": "F3nuz1wxes5eRWrosHQKRCrNpqgoFwNhSGS8eLiWSV3c7bSn3qyfmjZnBBjvBL59oh6WT9sy6BhZ8mFbeuYFwxu",
  "key33": "AoCGRNHLVibnxM729pTWMcN9aadwLMkPfe8t9fQk2BSCpjAx1UjxZeqxTYYnhgijRiX2Zz27pwFuyCZ944mbPip",
  "key34": "NULpccMnbU2GLLco14G8skx7vV3CPqN2GyeYwo93EpJcccTt4jdtpkwFGK48M2tdykH4PFbsv1HUH7PBsqGV3o6",
  "key35": "MPTzti9QtcgV3q1aVZJuwSbcpGmzsUQfhmX8QNTaXEd5VECziMhFXUdvGDaMAyzLxkSwqMEqVSKqBTmT4fugwP8",
  "key36": "4HBFM8ypJLdyCZPNomBV5ym1ZkDuvFrqsnUrrVLYjkLafhpTwhs5kxXT5LnxgSSc1AhHw1ja3KDCEzSjTrbLeMRZ",
  "key37": "2qUaNyic1UjjLbiVrt9zrNQRRrf7pBdVWKpeRZsSn8ArPyUdoiW1TuMYsg6NExv8GyJCnCrcWK6mto1VW682gKGM",
  "key38": "2J7PsdsSjwT5oZHy3ErUZg2sSJsHQxZjjFaNGo1ocfYt6qdtBqqqYqnAADHKh3yQZuxXA8ysK47fR8CdoFrLxbPC"
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
