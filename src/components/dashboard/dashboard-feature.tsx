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
    "g7o495qsH1xXkSuzeJZLQbUN8YH8LDfg4v7EtHb1jfCWHP7aHT7qnyJpF2rXdt1BgEG2XjTqwoZtC7Rg6Sh82mA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sb7V1tt3jAbvn4sZdXBZEP1NK3VyNb9G9j3puPFJFSGJcfw6CNDzRwhtTnEiEacNqKLjEgHbeXb3udDGpQqNJuU",
  "key1": "4p12xoQkRk89m5stj7coUgETQVk3T4CuF1VeuLpNPLGeAkZmwV87D53kJPDErnETy2def9iotUENNUGR5Yi6U3B6",
  "key2": "3ZwyZJE5dy3u9zSdSBi2gnPDQ1VfU69PeWmcJ715nwNgNB3nnny8j8WAqczmL2TeG9rzWE6JQ1aqrFc47TL9o51i",
  "key3": "371xT9skpoi99GxQkkJ329PQRNucxszu8pbhwpvqDS7zGWAPWz6DRXpkzQVeC4GHVeFXePxWLR1ftFrrJjoErS4d",
  "key4": "2XuHJFekPMhR9MvN6R95y8hmnTv4D3synFragtmjqcaVZZWMbJT1kFagzzgyG2mGuj1V569qyL64z8KxZWL35YfB",
  "key5": "3QP8zQdhFnWaHGJoMTDyCHGgtiETkfjDR3XhDNBdrnSz4NBajbj3csM1RzHjG9KrNsw9UgBYiHQw9RiW9dep3PKj",
  "key6": "4WhzWZsiWK9vvd3NckVmL59UE4GR87i7qBzDh1mPNHWSgqxij1xc1ZFZ7vhg8PaZSy36Ssg4XQ7gkqJxrQDYsWpD",
  "key7": "5iz6iwNKcTN6FhQJcomP9bk88j1gR8G95nmc3FS2cnj17NFEEtZcPLUahfCvEnqJiX6Z78jSuUnq9WHYRKWdnyX9",
  "key8": "2XNkPZR5cCdRZxvjwHzZGLDr2QxcKtdT5eJRiV75k7bH4RdFstPogaw6K9DkvVVGdyZsoaFK2JDTufGisEKBpQ6L",
  "key9": "38Uk3SeuTjpN7SxnPqMktxeD4aVaZg74eijLyJbGYWwhrG1hyPXVSBjNniSaMLe8jZ6iZp5FU3WnZWwPwX3cRqN1",
  "key10": "5547E3SBGBQGMm2tgJCQ6NhuqN9CbMaXNKZndZAPQe5hLqxk5J7ttWtnWxqPQgqY8MoFY5juf2c5CZ2yTKhxbisk",
  "key11": "5XzSGco84fM3cbVo3zDHhjZH5ygvibxoLzyzFR4QyJjp36nhhDEG51TZCMpkk2ZBNYFJ8jmaRoya1vVfSfguSEds",
  "key12": "4KyvE88RkGpofzuCfujp3Zj4u4qFaRKCqX1ZJdJYy61faJ5p6LRruG8a9TT88CvkTLMEDwVBhZYFgR5Fjj3jsCvo",
  "key13": "f4fTU5DbEZbYE3agiFPvb9UT6m3vnEgXU8xj7wtKcGGPqmMvgXc7vgo3zGn8dF825eRzagnSEiYULBFYScJEV5H",
  "key14": "5yuL9VnTqgaTzLcr9shhBpYr6NWzDmuVK978S9UXKCLQp5uZJ6HBDNUuwVHtgU9wVW2qHhy1rgXpefVKrv1ZXApL",
  "key15": "2hDjn35tsFyWhG5mE4p9eoaTRe9fYP2niRHXoo2fRLwrpZPWCicMqX7iB6jHMK2dyRaTqwdUV1VkrgHVvn9WMawN",
  "key16": "AdK7DeaTv7JyXXwoQQtZznmZ8rY6mu81sReppCg6Whf5ryyH6EJGAB813WDgG5EPMdN1nAWYS3LHDmA9cQEAGuD",
  "key17": "3TEq9DExZXKHSfc9wH2BhQgCGLz6iEpe2k27d5RcnaqW6rAznXyz5su6bK4S4HeVMrdYpSjM2y3RzT3ekxbwgwHb",
  "key18": "4WximqnsaAHjDPzw1TnWoc3vwaAQj8zJRkCGgqt9xfyRrF7TKZttp99B8Z8uofHvPGtKhu7T2Hy9Su9wwNkwaigm",
  "key19": "2ftotoxfXhHw7XGDijgzusWCrMGNHmC4guFMKi1bA8WneXTzmQE3pZtGBdTvKaG91oCRBnxcD8dGj7xqXwrUghev",
  "key20": "3P6Bh8EHNmPdtVZuDphEgRsHxpimbGyqGdjEiAbexC4dR1XYyJGmSa88s8bUWg43yZSkEBYPWBgquMwRPiwSTJwN",
  "key21": "tPGoPntG2FLVztzqGgi8hq9s2piLHscibsg6z6q6GUZeQWnp3Us1vKKafinvzv2VsxxEiec7VmVGddc6HAyLMHY",
  "key22": "8bUQM8eXfhH4CH9obNoTjG54P4VoV4omsX1SPM1YtBoMTcbgifcxN9w3Z5LaDpAD674hUzoGDRehFS3gy8dJqyr",
  "key23": "4rri4MXFoaLks9Pmss6LqGDXPcGRgUyg3WaGMhwHXohuHhp2UoK5PUfk6QoV5jjSoZD4CyxxRJBib71qfpXvDWZ8",
  "key24": "53Cs8F3FfKu1xGpC9DR5mBA7eZEaKAUfN7p4ZmXVhzmcQhgqM4aBhehUL1VX2mChio1uCVXkC6ZkM6NQqja9iogL",
  "key25": "4mUACSSK4AKqRhguqnFWhgrfQApVwGxNep7Y6nv8CLYrHNirdcj55nvM1QZwgfb5owWvakw3PVMmxFYwyDaKrJxD",
  "key26": "5AW5Q4w4B9Fn9krqvdaQj1hNV5DS6kBQVkL3arv72dQvtYbtKNGfHyJPmDMJP1CTVXBnCkHQZF4dTj42KNeg68dQ",
  "key27": "PRYeRQnRnBpLbvNp5upWHHsVRpZgXSk1cAWbaUsJSQuUrWQXmzQL7UNAukR3fHEfsX6MswyaMxhRRFiTpFLoX8T",
  "key28": "4G1zrDDBuX8xrFZfmvacEVa4Ub6QazDMbkvrmt4Usdu85zPDy88gHCHzC2osEvUnFxEoLQWRHtfoXgGwPAHmSovN",
  "key29": "5dL5p6RqLk9ryr5E52SNuatAf7BizYfQsvHRgvbiRB8BKH4WgGyk7HKaSujHDSo6HznJVUBHfomnGFN7kk77GfQL",
  "key30": "2V9E6yrDR1DTwciaXbSvPgTEXdYBm5YrabAuAfszC1zrfTWJvchGjvyN5LYk8CVW7fMkSaApEVAXdUSx6kPL9dKq",
  "key31": "2DNpi3UL3dtXWmZ54mLXJBhyrrXvMLYj7ZvmZfRhPBivjnHyXRz5wD3oRcLuZAGHhiva4zgUr8fw6dTab4BWdDER",
  "key32": "3Lmmw1oc7Fb4LQ2hhZmYohYLLvcAhmxwvUikgsc8NUz9URduCAsWpGDXxCfeypAxuKBvomYGccUjoRB5Y6jf1WbK",
  "key33": "2ypwCKYxuzGuqChqJyhXUscMRSPxeJr8969PceMcqhB1WksmncqvEuJV3Zh4dTVza5xrQr1mpW3XruuzL5k5hxzT",
  "key34": "2kkrETo52H1RyVT76uotLkGT6hfMKbZP4jy3xK95nnFXVbgsfVWUxMYaU6EYaQLsfm87jrPUJ8eSM1q1Pr2L6813",
  "key35": "ZGTQW8CNrAVGjfmrXw1J5tvZVavBTdSeTqKwRqP14gwBuUMundTb1JJmj8zbx5p3QQmkeJhn2zqHye8nYZa4nHo",
  "key36": "2vheSMmYjZ1qWyF3DEuFbKuuRCrF8LymzpePNZePmzPTe2xmcv6RgsHdnwvjUfkg8uRY8WQa3gsV1GLGhAbc2WkF",
  "key37": "4AkVBgJsZGuB7j9Ei3t2K6AdxuwZDuZfH2fExWxcuMxYYMTqGavUSwLzJHeYyRUGjc6FEuQPDpiXdDewpKy6pSgx",
  "key38": "3Lh92mcZNGQWicHsdo65TckLfGcoK8u2WFvRt1Cq2GkBQjGSmeVfF5Q6GtLyz7oLQyQgSpnD4i1a9SeqFop3h9i8",
  "key39": "4Sy4KtBwgMsmnV79Nkm4eJnGmtt2CcgvZyazB9a3Vjr7TdhED2mFfxr7QvhVmEuRqHagiUci7awzqgDHW3pzKD14",
  "key40": "6n5kmqQexLK94vRAuvhJ1PPg7Ssxbk5xCfU5cyC82m8tY5nVmMFs1bMBkMPymkLnFuD1oDtw8NLSpqGnBninj7E",
  "key41": "2KiZgS9dcP5w9y5qMA3wF3ahSTrj5fsjvoJrKzbg9MAygiQD97zkqcdjWCMKkLqcmt87z2ZEw62XqF6f9PHyyLdh",
  "key42": "3unYX2exp3w5PWfQWE23WK7krCea23MsSLdAeEjenGTiGrgCBUYhHc4hUnUJAGqyXSTw2BfbbCzy5h1E1ERDirrr",
  "key43": "3YeeK87aThgrf9HBvbBpmK2jmeQfMxpX2iq3wMgnFnQCdzfPyX3XmAXNryemsQrVXuRRQ3ffjDs3DMJSKvysVKZz"
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
