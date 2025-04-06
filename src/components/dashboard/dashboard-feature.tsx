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
    "2uCAvDTaeesQXKTQ6vsz9N64FkxwJPPT67T43yAXLtMLYzxTLd59gVCbW1XcLa62EXumKJMn6wLSUVE1nwASBqNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pV7Nn8gjpmZKmpxyJXQrNuN4MFXV6sabcFXA7naUmJovDhNbxz2CeXXZbC57rn5Gw4xcsF6QKo1Gnx5X6GjdKLA",
  "key1": "SLppabUihCH15LQ6QVWqMHJkAyDVgAMRMGXkKZ12rGSPK6o6KfvXrrZzPAA4xbdfCDAGf1yeQUavW8BLfZ74HpW",
  "key2": "kWYrn2USMMN54aozLbRBzjYXZ9UbZmY2vb1PW5BNsonCqxXgJPM81Qon5QP6NuEsAP7gDtBQGxgChR7QdBMv6ay",
  "key3": "3VbGrxLjthq9i75DkEczUUV2BzyJr1s7D8AShAuENZ5RQvPzY4gfYoZSMkqaMP9SY7a9JDTBtL3eu5fFzDXvuDWa",
  "key4": "4U8wCzc8pCJbVrrF7UnxeKLvriw5wQkTmJx8f3SVcY9om7VtraWHdNeVhG1aEpPTJ1oAUHUd5YmLUB9icnWxLWBY",
  "key5": "3YAZiMSU4Z6vuUAShdgYMB6uTZPhzZU7Ppf9W5ZMfgzXb9TDDFwq6b9Uf7Xtk5s51MEK8KK2uxTiKSDf3Nj5BrG4",
  "key6": "5WHKfRxRdPhNPMfgKYpDs5jZ1uGHiimvj64vQBzBA9PC9WYcWG9534WKpMPVwFMeKuwue1k2UNTVnnHZimR9FStm",
  "key7": "5rr8P8KeMgDfBZguGxZ7JJzGHicDFaBKNqZskYAfR3wZ6osWUWLPidzogf4k67oTF5dGywehnGBKn2aeBDd4Yni2",
  "key8": "sHdVJpyphgSLFeRSf4Wu3RquaYU9pcpqmDfxN55NYD7aRtYQp7zJYRqZjWq5Y6ZwJ5yWWsspYWpnPvUrFMi5yTv",
  "key9": "3nwvJ9PCFBjw5SPLBN7knaXrf4xKAgb4SXfKFaUMLBXFo19m6GSLbdEGjn912Xnwdt5Xif3CpfuqTqvWDUDkUbLN",
  "key10": "2RtsNLiSCJojc4msR9tMSmzr3gC6sNsu59N98qmnidWkkeJD8RUSzmtBb79EGX7UQ6DY1ELkV3UpxqRutQgUBK51",
  "key11": "2NzFiu4w6mAdGnE6bn5ZwZnEycbe33gm7rme7CffEamYpAbXmcB7uVyuxyHaZqsfrXVwuyNnxn8qkymDk1UwUcoG",
  "key12": "kpzoZupyTYDxEFLgMoyX8gF8zn6FGniwEHDeuZ2nu5s2J3aHry7EJHLu8LVuXR5epjjt7jmKuvRADEcmhD9SACR",
  "key13": "5TN55EPm3u6skGAE6JqsRuthfaBk9d4ym3FrdrVhhPEwqpdfEGvh6m4tryRtJt2uVjy6VL5QkbAU7snZ2sz2xFBE",
  "key14": "5cAzrtvkN4CBKMMW5gBRR94eRwL8nGe25Eum2PJnYgsRYqsL9BCMuDbeFfULnQJ4gbXopd7GcMxD2r5amkNKCpNg",
  "key15": "5ByNwzTSjSc27cKHiKmwxJRxBqqURBtD8XVah6pmNDjcdHwJyqWF7QaWVjtmGRxQ4wdJHNash73WET49JmujTUxK",
  "key16": "5qsEnY6c6sZwTRmzXR7HgWcHwtTVFXoLspiFmWEZBFozQbj24vypJvcAae96XaR5RVsbA8spuk44HsJM4t5W5n75",
  "key17": "5ZJzhuE8bPQij3dUQYgUcgG7Q9q9VpjWRxZp6U4vCZjjhygDF6zLCTHx3wKTzkp8huoWGrBMcxzcN5YCSyUk61FE",
  "key18": "4pFyK5ks1iyuDEFV6sNPvcLWLmZb3NQmo6UDXmRm28rTpAB6RuLdnzzMNPehzvQ9FDCibmXPTZRRScgBrNMeewwB",
  "key19": "5Xc6AWcrNTPEuHfgzqpUTYfQjZtnYM2F2vayRse3QtNjxMSa3S3AuxisZscDpWoF6jLayMhnTLMPajqwnsemsLfZ",
  "key20": "LKP1JjLUaQYGToxfvNcxZonwk2PULKLToTY9wYT6PgHFtsX5k61t9wW3592WCVyggfp4Coawfo86qaacqhiarec",
  "key21": "3ZSw3p4FgveRWUHLQWRKtR8G34kP3y6BptmVQeQsdQ35GW2TKY2488HxMz43mDhfCj2Lzxam3axDMbfvuGS2UvKh",
  "key22": "44yTxpUjtXG1rupLyYPhmzd5A2cwL1NpsEdR96e2EAom7RYey1kVV3pn3CoAVHHeXV5dYAi36RtVT2XEbdZRRJZh",
  "key23": "5qASZYENKiuxRRUyTdEYGgHw45G9TV3wR2tHNdqydStStjXVHLm7xVXEJEjz7HTvRGrt5gHBPo9T41KnYG9wmu3f",
  "key24": "2Jgwuv7zDZm4ppHieTGGH3WsojDG3AKEccr2m8WAn4NDSyaLsSX7igEeGaQY6fGBumLGsn3kj81w1m21mgUB3pF6",
  "key25": "5xCaodUHrBzRwG4oth65j5QhMjf9QrkyZBrWh7rGfN8jyXBtqkZLAgjcjDEcTMx2xd2VdWuVMXj4eJXf5dc1jq8r",
  "key26": "5rixDomwhSSbK6zAYedb6dgCF2VQAWtggyqNtdhaye3GuyZ2p5ghgubNDEBLu39Xn6dvUsjhSWUm77kDUR8Tk974",
  "key27": "314P1NFUsZj4AhUYnZNKW2gXaKm3JMMWjVtqfXxtPzmS1VT2vYF4ofPy2bQXSsjyNHRcH8rV4Sh7zNMS7eCkZAgH",
  "key28": "2uLtpKymJxdJ7qp1UiGBDes3Pqb7E4HxEJXxrivnsLSFghLFuQ4QG34fs2bYvUoC2CW4mcEmDGwStf77dBz1cEAm",
  "key29": "5gM5qyFHtv2npPqhuTVM3Xuo6Lk4HfQFX8TS6puCU98rHoaE4BdWV2PkBMNWRiLbGHgeA34BSgSHCQagFqFaa7cc",
  "key30": "5cCiCVxkDfkN3FU3xFs8iYYgCvk6jazBbHLNetX47Jt4HMPTqqqb3BogL8BhxKcMn8BptwhXmh4yovXtPnusWwpc",
  "key31": "pZpZJu7AjskES3uwdRwagYwiSJ4rivHsuHVoaGz15GeYjicmKZddMMiZvkYdwKQWVVCGPSitGVw9tVDPEB9AyQg",
  "key32": "2RsDK27uaFXwfyk987Z8trki3rQxUr3tDnwYN9f9Po83DY3uSQxjYNHDD5Ynj8MriucF5kfcomUQuYW3EtLuGczY",
  "key33": "3Yundvo1dmAEM5GX6dqN57FKLQ5A3Jz8irFnVj8YwYS1UTi57tYeGfsWXaFU5UvSHMQoeyRuKaqKvHtVeg8N9SkV",
  "key34": "YUTEEksPYyi5KG3bGiLh2Qs6DCPjZ2oj8Bh4fQWRSJKFN3A4RrFGp1uf4UD1U1xVWvKEYJ7af6Pe33Mrf6YP3pF",
  "key35": "5iwVqvSacHBNa46NQ1bbUmLhPHHFchZWgQLVsexaviWxxX8Wa565rsFs4CTGgbSB2EVsKgfk3oWVfXVgB9ogag7C",
  "key36": "5i8jy1TPcN5gW6CmapJ898rrZY8X9q2NLuLQrk2zUwGBvWQdt58GSZZoWvVVCXJueJwvxJLeqRLtK2ftkuLWisip",
  "key37": "5vt4vSbyhae6mTvL8zBVkfxSXoQy6j4UBjc8LUvouygFjAo2XfHRLfZhB3E4UDAMZGtzQuifmpnj1ggrrVqsQUHw",
  "key38": "2MrMFwLMvM7EamdjNEPp9Ktr92HeebiXS53SSkiMN6fgRc4vMprttLtSZW85Jrpy9YwZ7KtYsL15EnQdTK1K6YJA",
  "key39": "3zfL6Y17krksJu9o2psnvQAaHcMJmm9cMcehskyj44zd2MBaLNoXCz6nQMNmY5UuoH4PdY38K5pcNEK4FL2JokK9",
  "key40": "2umCY9TtQY8u74BE2Cg4jzY1hNEfFfMqpxLKdMdEfk2wBGpKLMs7WLb5Z4sp4uaxrbEYYRjBT9wouurrwtyVHpEG",
  "key41": "5eHz71AXEWGNLmcdjCqqW3Hw1xaKiWBFYHbgiLEV3mNxSQMvh8hcdoR7rZyHgdHeu3Mi37XkLPj26rmWsEVvezUA",
  "key42": "5QUVURrpx8uHuAW3Lxkf1cg6W2WDYJmNkHJpKiAajAY6QmYtiKgzdFXfTyVkQFWnSbi6bJBRAdoqfPRuMVnGnt64"
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
