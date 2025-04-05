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
    "2o5J9TCssPByErAHD1d3a61RQpszQ7uL9sN7VaJKHgg6exChu7NpZ4Xv9tLsmF4x4ThvxCmmWtFGSHA3SahwAkF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gYP4qhfNwb147pPaHPaPpa3qLNiizAa8Vz69EHtYLBfrhbmWBR9Kr8Xdtiq1MGJx6hQNsMfEGQ3eHLGdsyRYYva",
  "key1": "58mgBQb4BE8x5iBUKTwGaMjbtruh4uUGUxYumKpceTBxwBVLbCyJop9Q3Lgg9hvsvA2kJG2SSiXi1s2JFUzH4pLX",
  "key2": "31YYseKRzV8Tpo1G4jGKeut8dTxertZjnbbfMnUnn7rgraP4u2oHsYcoViYPap55RmmuWMGtn6U5MtXCjyYtJVAh",
  "key3": "2cMMEAtDUQA68WLAwtULT9sP6mURf2qNYqW5GQPaxKjGWbJ9gsLeMbQoAvCVsMosqAMbJu3vbUVFCP38BH47YZ2t",
  "key4": "34KHfSDdwma3kCbqApMwKmme65x8XkYB6tzFeUAjkaMxc7uqJQXX7gqoBTyD5jFBtVFU4arb8ZQvRrhMxG34ceg9",
  "key5": "5KksZ122tbnxeXamfykhL5RgBpSGohDZsXu9pwm28XCstkii4yvugypMo7WDkcFzhJQqrvV7WZECZjhCBV7JpuJL",
  "key6": "M3wRWRH2KvQz6nYEPKoL1H5DRtagzUEV1bVuzND3eGQjNfC7kh12UhGJawgsaM3j2cNvvU2kiz8bTZJspszR4St",
  "key7": "2YWWCNXedvDWAuGhAkdAagZVg53D3HGtei9UaDJuu1UAiQmHoDn6FJXahs47GprsVcSi2E9nkPjRWXcZiVPb2dhV",
  "key8": "dXXxGvahLjgTreGPt6gNNUCMT7wEL3j52uxQ9tQHftpPKTuEcG2cCAmmkcimq5XzKZMpWVnadT3TEGmZAyhFTSP",
  "key9": "xiR4UB8NDsfH5T4ak971MLT5Hav3wdFEiBzZWVfT1nZ2tJkDAF7CxUk4RPz4FtHEKS1YdVgpZK7AnPthjBKPdKu",
  "key10": "3YQqFbhRMGvZdAbtcmmXxvKJv2XqjYDFZfDjsNfe2rU3Y5Q7jjxHBjqbn1NoVnyGfbjpSK33zX6uthpoYwAXHNSe",
  "key11": "3xQuUkzxxCgQGBNkZLh6XM6ySqjEbrRQBq7EGbh9GJQSqYi6Zy2VQrvtVCHK8PS7sudjJSDiXLBBJnkT3YtNxKk3",
  "key12": "o8wWjYxY4EVcbqSc2USz7QSc7hVWkt9D4dBRMCAyfGuiFWpeb5UMjhK2ncbihoBarHw2hZYgNxfBpHpz1Y7W3aA",
  "key13": "RDvFP3Uo9XadpLkH42jmZ39GVf3v6LFnufwz4g3g8Wbu3TK3hphEqTeRf8RtjA4y13czamtbBNL36zFUchNboMr",
  "key14": "2sr1aposyH9ff92q7WbgcNFNy1gb2go9HeG2jCwBHiXSj8N68PAW4R9YwYJz8JyY97eAmB4mdbV968AMJj7mGaow",
  "key15": "5rnKv1k8XZ7EHTv9buAf3Qvj6tQZMYDDQHeggzMyp7rZWUCXkYbRShGVhhgwW4rWw3TNAiPejmYAmXGAUf4oLRhW",
  "key16": "3UcxVQYV63wpAVpfyQGiNGrZmMxarve5kdKudKhZ1N6apwAVKMAFZJSaSwzouRUA8bQbzuRk5Gb9z9Pdt8RXZVaV",
  "key17": "eGiG7kJfzaf2MmC9UYZo8Pv4KzaN557gVGdybuRUaA31swg7LPMwFupc9YZNi81RBncP4aLv3htTA3oNzdaLjvV",
  "key18": "4mxZoudiBwQkzmTKYjvX9vbyjN2MRrxao7h1xWMjoZC3hcWXaYnpVatarhxXr2o638ovYx1Fa4TMVnowg7vvvLuT",
  "key19": "5JrQw1atvjNqWFuSSRbN4e5fDKB6ZeGNKmqDNVnHnJ4yvFh9jMseZgknDuH8Gfo3Nrh72KgZqPdJuTS7jhD1ECFW",
  "key20": "4jweJh6Es296HzZchFw7RyNu9gpMcWs8kSvobGsPam8TgNi6Uuv1z7efVJE2pt4KmyBCG7otLGJQ3YaGoARJC9am",
  "key21": "pZUDThfEpi9CcwANNFEuKdZ5W6xS6c45WXdtVwyMsnZVLjqaxACTMYjy4n1CAqGnNjxQcie9RVDEMDXm18xXRGD",
  "key22": "5JHodf6QLYtMquwDDjtdVGQP3surkHRX7dJ3ZBFbrBgGjs7qNNp2A3Jxe4uGy1Ssg1GSg1jJ57R1RhfdUhPwyP7j",
  "key23": "2M4QiH25fZe45wmmHmoNdttWY3kZYweyqYJKwE5GzuXAHhTiwyMKPq2zvRnkmKAt9Eqc57XRUdmUnc2wH1iAJpcr",
  "key24": "4dyahnTyyGGxinyoJyhPBDRMXUGuhCAXqcmZNQDrjzSoarSVHq1yrn9DAx6eGHswdk6f4tQAZWBc9QNZYm6j1ZdZ",
  "key25": "51Z3sZuyG4831BM7LFAD5XVmpBwq8P3edza5TopEruKhs3UtYvMtZRfBJEQ85r2qnZfvynBq26C2yPDHYUTnHTfz",
  "key26": "4bUy7ujJYGeCenyWUFg9Kne1U53YmMqoLw2Yx7tKBPJqNf9YSFw4SVYxGMxB8Bie6EvvuW5Lemgq7EgBADnkS9qQ",
  "key27": "2PfjP99wqCUamjdgbHwzydmjKQf1ThJ1MK4CkU9DKBjqvz5TNM9S1H7ghFCtEydAmSiHdXh9UPkbwxYEiwN1X2Fx",
  "key28": "ue5BnZxixUa9HZhLY1CUKjv6DLvqN8uG4PKb81Q9iuXEzkpoVKoSnX1UjctubdNrciG4Sf32awmqebdVkcfHqfA",
  "key29": "2uyYqaxN8XariUXYj4dhSvqrpfTXAQUt7FnGh5vL5s9QqMzB9cbRkEoPsUCAcYGqU7cYdoWpjyJ3e5KYYHxqA8cR",
  "key30": "2zrazpimFnwdWr2cyKEeGSRoAnAGSKrEBmJX26UdorfdUcYBzWuahzeDZvRum26edZTMyXhcAxVHSh1D6bevzXag",
  "key31": "2e5KXPQPia7Ncet6oyj7qdCjjubB1N8PPLwAB22peSQZHzTir67GGV5b3L43kS43qUEXncMTcThgVbJZWg61bANk",
  "key32": "2EHJA9diYfZmuA1AV4YeDyCJRrrNcH2ZnRSX6SL3oRCBSKESHc7xvL5ax4PChzAVtG9AMx8HN4qKcLS94MJBMVFZ",
  "key33": "y4aaKxWEWEMSJZ611M1iuQQWpEnTtp2BSe7ANCz9D195BjfgzmU5ZZq2Q5kYZaViRyV1ZmHgy7vn1nuBpfn7JPY",
  "key34": "BVn1tP53NC1uupDMrCF2kExXbfvxwqZbKtQqgtLg4dyokJNuqgtBkjymF5TnceoCRBGZGzni63TxS2U4Y2tt7DU",
  "key35": "43PmViwBmRkA8EPxDTnycdVzntKABTXR4GoMSBzfRmV5ZVegAL4JTeXcixp8KY9K4yfcFVZwTNb4Tz5WSH3BbkHY",
  "key36": "61X3u2Vc8ed1r3LAjNJi6o9X1DTBhN912fqiZEV3HpoVpxZqTn5sr7XQQiR9wCHovKZAWr1iQBw2cas4Rza9Ef26",
  "key37": "61DQhBEmFTWwtRVEu6FesKaTsxXr2z7dr1vadsCpWxwU9UvPUR9K13wP2AnzKcRFbDkvSksgqx757LLKjTCeVrVo",
  "key38": "3vgd33fKPxH3C4gXrLCgVSu9rTtzyKc9TnWm9RR6R4A1PZwqQ82ro1oWKgHHnyRNwYnAKKeCLEQVmr6xbMGjPoGs",
  "key39": "26fxX7Wfut5f7f2dHQDnTWqF753YrqqrLDkPmoYsU2HLyXxwmNuJ7kroXAbxVRbtMaNY3XCd31svAKyx4JpUZTHd",
  "key40": "4gm25popL1NPdXAeAqqhvtX3MuaWWvg216yhF2skTMDAhf8pvPmdwPYaHxf3JJrzHMLzSghYmAY7TwtEjB1oPMRs",
  "key41": "5DZeyKoDKp5v4xtvFtpJGyWw7gh4h1cPNBxNTXUgM3UwbqEoxPgMAVVVxBtfZE4mPG5q4uckafVrYVqALQyJ1gB5",
  "key42": "2SJXQtSkhC9L628QRTAi3mpjzbBFi8jUbJt8T27k7VJac4XRTeVvkACppJXhQYAL4VSPaMKxc4FDzTKhbeeQUW14",
  "key43": "66pKbYHYtY9Q1JrCyDBmL1qHpghR59VYxrtxRFnH3ndHnfYhyyhnMDCr1wf9KWpksaqyKrS37WhfqFc7dL9aboY5",
  "key44": "61d2U4sjowAZvyFguxwaNSb4fLKqY3TtQPKVG1Q3rtymz5xsDHC4fBN5HadfyXa4qra9heJmX6isDfV8HmCD9Z1y",
  "key45": "51vEXoVVtjzNHP4ywJYSPTvHyzNrRxaZYfTdGChXg1ea7MypJPNpJcNohiWiK8bthHSW7FcYL7MBaUv2AQLC9zvc"
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
