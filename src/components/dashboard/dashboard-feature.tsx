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
    "3aDeB3u76gLD5985ZgUnnfBrTBu5a9BGEKpNZyCvns8xppnZdqviBTf7DW1oMm8DQpsgzturM9XXNjrsgxLEE4Xa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EvZfeT4d3XS9tmPjbomiHji3CUa6CcXgfnHPwzFhpyBWKH3CtbPgM1EVveBqgBUcfhLicFSVPWrTtEoHp1LdTs",
  "key1": "3HQAob6gosoA2zzXNHQeMxk6CeVk8LHfysodHhNs5wUHdCuniohNWKihG1a99nHUyEXRPQFm999aH8fkuH6gjVCN",
  "key2": "2Wyc1Ks5JSTSjg8CVnXVLo9pwys2dBmYn6qp9zb7NKnh1McQm3gAgp5jEFQnoF9zvgHrUBhGUqiXgnv8vs6GzYze",
  "key3": "5R5tkcH7dGmaA2gVJugRaSzSGYA3WR9PFgMmPAZ423QbaG2BXEMLJTn1QU2JDDomZe6NnzH3xGhYRYYKiZsaMj9q",
  "key4": "2HCPMhXExdvfauS49ZrfjcYDJmT92f3BKf496qnucnQf8LndaKhKjfQVk5BJDRgUo8jzj25EzFJa7c44SaVBPcu4",
  "key5": "5iuHBZXf9a7g7bjyvHPpYMMuM2hTVhzBoghQQu2YySdCNByrPyyMCp9QnUqiuegDQFCwvZjzhUgzXjtAtKMcEE6f",
  "key6": "3iicvJrBeJCuzPDrJaYPVQPuBZGcsUnsSzdmcxiQFMgwVQXaz4b8oEA5nWi3rkE1t1zYpDcaLSY7ieNcbC98NYcN",
  "key7": "2X6eD5kotzPMCd9jM5rWFZVGxR7hNTgxMbSLAki7Cd2XVynPM9XaV3Fu7cDa61tKciWBCR5Nt4JpXfUUZSaojeec",
  "key8": "UXyhjnBJW3zrzU1MnQ9UYs5HUBU1v1Rmv2LTCebGRUeJHvx8LPoKEGUycsaG4RH6iFhACxrzGinR7KMF5oB4zCF",
  "key9": "5Xvd2tgKtMW9LC8RfE4vzdMUon7B3xsdsL8PqDtEUA8hdB2GWpPBWEAcxzKmY7oxEztdFrTXiP8yU3t6HoUuoj7K",
  "key10": "4bhQxJSdYNZ9AbKT31kuF2GyeE9ZAxhDUKRqLgX2LGqPnjUDih3nBERjFSTk6MuHHoRCx1BnTRKeWMXWLcji6S9G",
  "key11": "Nrx5FxRUbrc5B6neJk7znN2ttpK8xYVTMjZ2caHHTbpmWGTzfSR2eNsm6oSxJDvCM77iseE2jM5ADfk3WzgSeiS",
  "key12": "3t5YHL1d5JPsNPj5p9wa4uWutkjz9LeJfqhiJAGF8bnhEJZ2VGpJmmJpJXN7QCtyrhKSafSd6fxdruD6pZCCt676",
  "key13": "3m6gbj7pu8DQ2t3Xd52aZgEsKLTgerW3RSTceYKov6KDTSCvTA4RMZLcZPQJGEmxXDA8opxxmxhjHftQiHEVPe2z",
  "key14": "onuumjSsWyzj9KTQx5jCtffPsqSV5XpDTdLbnwurL2q3dJfQiXByQ3Zee6jsQH7WGMQyosVdu2DjpBhBQp1vreD",
  "key15": "3Lnn7bu6tnvqBzWCxkrkhRX2Zdf9XVDiLGxvpiDGrmBHvHxgwTp5bDVUUZRi3chKkZsU5hyNJ32zhPM4XHSdWGgx",
  "key16": "5MYwneqVBSmG1BLK8MbaKgFjaaZr98JJtkyDb6P5iGVrtPEFuUebfvh8SeNh4pVxzBmNEV6GHZRL18GJfJNFAEAB",
  "key17": "3x9i4ihMVoyEJsU7m26whSzXhZNCdfECUAtyQKRQsTBCG7FZcCqJd4hsLnVTmBief64bRDNS5ciPMFtsxmCrDU7u",
  "key18": "sH6fBw7R7kMBopg3iL9XUsPBGwT7zLpEA7LMdaMkCgYj2jmi7ALVnjPxADhjv5stP5aS8dRzGQNRW6JmbWoF3ny",
  "key19": "27oMe7c6P6vAfcShBAz7qygxVTU6y9A4Ti8DJUSA9hXiGjSxvRD2UcWCus3yT896vMQZZkv2NJzRPNzTbC4thatD",
  "key20": "5zKq44iBr9c9Kynpzv33eoFLbV9AqjpcC5HRKGP7uSa9TnuVuox9B7YzNEfrXr69MWWXZqyXz5pHDd8nJ2sfYESV",
  "key21": "DatrVNRkHKCGRsgaorQUKdKNNfFnZUJRydaxhzLPq7KHKNbLURhzit79tevQgdVxfshtuH3yWotM7RjyjFoyjz3",
  "key22": "4Hq4bZX2ENDUnBPVJS7F6gJBGs4sT5ir8TWETn29ePZA5PrzxxsqGDyMy5SWusiaYWox9pruZSM3RMN6CFxthX7T",
  "key23": "2xj9fgSLeJA7hRSUoPtYnRyuL2PeHjPcb3jnzQMm2SvkKR8huL4rBu7fNBAk6fbT4mKKhnaXUZnCsHojgUipcdnD",
  "key24": "3mvNZyukMHuTWFdknSmGh6Sabbf31eTugcdDqEfb5ej6SycW98HvvccSF9D9KysyocUCcfxi5WHKWo22BUDTVm2Y",
  "key25": "4UeFFK6WEhj7aSzpAjkhBcsUjr4VTX3hufH5zDZHJSJ8CUgXpqi46qCoFJtmQWAUjnbfqug5SVCFghgzn2NV4jwu",
  "key26": "4wbJZ1qsPvXreDZQoRZ1N2UDcaSQ27Jm4aM2D5CkQokvYFN2DWXpYZsPD4KSz7WbJAjkLGTVdx8SByiQFQVhhuGA",
  "key27": "45VtC8RNi4wjesNKjkLpapfxmg6UKbkwoEJH7TKa6PX4DFU8Ca7rkdSt7LxYBw2YmN2rrmAt6sWTyhJJQRBgnycj",
  "key28": "RD45iPfXg21jaGpNT3AKbZhn81SUfNfWYb5KiaTFmV4ewBtrtbekdUSRKQGzryza3SjdTA1ibUZZiDdqJAWsifS",
  "key29": "4UYKN7iXe3Z4Y5z4rdeZPBpAeqDgzrShRzfxeaw2pNZJEfNQ7coSC61Jn7Xr6aNptvX1Zf669BXD9vUQZmULvXk5",
  "key30": "5fhz72mb1ntjzYWULTNLM1zbjHsi5DaYBqmjUMKqYgC8WBpDn86rKhzoeDFCBxzJrBQ8jndN4dK6ZerotQw3UiQj",
  "key31": "KFCvsF179yb5iMSZJMCQJtXtjvDTFspkHKB3ZkwJwdfkUGVFMfMiPMvdxK3H6J7mcULhRUfuFmyyMM2VS3YgPQu",
  "key32": "4nu6KRGkXAYNhMMrGrsYBfZPebGpMXZWfCDuwhjv427ZPnw1t2gS23mQZTiq79NhU9TwHpXzfu2H88cRK4KRzAa3",
  "key33": "gGTakhM3qnuhgt5cWuxG2bw9jX6XvpQnFgfgv18QfkcmpZAbkPia8ZQn2bBhWEvvaDKhHYcH6MiccBm8fzBms6A",
  "key34": "qzxL4WVesWUkzzZYR2gtiVcGfTCmYELjtbr6QoJ9vRaXQBPkLshPBuuvisN4XKq1Sz5kCgVaufNXayxqN2uLK6V",
  "key35": "4yfGDxdgBJxtMa4GHe5pBiwpm5h2ErVHcuSoTKmx3Nno2BTSq2N9yn5ARgoZWE7oaZs7S3ikjGP69TUHD7LXhmLV",
  "key36": "3SC2NvTpZKSGANB9vYGHdX5d6zNBtsUAdMiU8xRfYvyqxbuNtn99mtFsjKsCMSuh4mNwD4t7SumKRR58ienvKGav",
  "key37": "4ncCUyspGgQf6hGDJjfu2789ZLbiwNompxFSWdijBJpNFiXQfPepxaH7KKja1rU3bFF2FuakhRDmiRFSd1ptTy2N",
  "key38": "2LmaYhxseRFDUru4QD8u3T2RRCeuaonxAmz1NbwRkx2SYUG6w1QeHA5gJcXSp3XT7NZLE63DsdcHXNUMPmpGD9FE"
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
