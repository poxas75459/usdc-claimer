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
    "5VZy4iPEuCGgdUq5MsovD8Vk9PBf9y6UYYnrF6ctJ46Vu6YiZB8hbuGFpwvGZUw6iKVy8XJjHquPwQQQt85d1t19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QpKhEP98tUYSaViqWPNFFZbnH6FcdMv6eoVw8jkZdfJPtM4TXKrJ7xABfFfz3UJhTtSajN296GcmVqHu38Jy9S2",
  "key1": "2Bs7E5rXCxAqgjtJrhKhyBCZMgGehZNKbLirXo1pkfRKYRmuVidtgMrA5MoW6usfiH12ukb8NtA7nQpugzRmyBCC",
  "key2": "5rL2KDCJ1Qt3xrw7smHXZQ58mSHZfXRu8bipCT2jqcBhGsY1P1iAyB4LCD4ZrPk3TniRSqCPyvsZ8K1SDvPtptuy",
  "key3": "4kYZ5K6k5yF2WMs379bBsTVGMPrnFYJeCjtWw1BkJcePy7BNDT4xgcGU61dswZjScxN1HzBUUovH9vU89kHrC3wS",
  "key4": "4p5JxQ44DwiQDmvpyN2YhWSHTnWUkWE77anLaqRPQdYB5g9CUCcUcgVNBAPKN2R4LWwYmHVaJi6HaALPWk1TYeTa",
  "key5": "5vPQ5wsqXwxtcqyx2qkvDZd4eFbixdehjA1ZRvdAf2pK7qRXwmC5D6K9ps9D77K1CX2hq5jHpykj4n3vYR8kH3dj",
  "key6": "4H7ixZ19SLsC5FungSWqwA7NQtJ86rEfEYg4C4S8FKmgGqxBQpeum8yhRn2a7dXXqUF4MW7MVbF8PXuBxxELVU1y",
  "key7": "5CQFMZJ8uSwPNsUBT6nvfMwHAtfg61qB297RdD15kswKuDkJeeaCF4HSxntuJu82BB9DnnEXboP3GkAynNJURy2X",
  "key8": "VZFXJL3R1Yr62UdWR6vfWJTkXFeYmjq7BBy7iLCW3MHEpqzKMFP66Cq5uqc6fCJPfuJbDkFdfs2UBXaSYCbnqV7",
  "key9": "5JhDG12WwYWiqtbWDrQBtkuAXnRs3KZNoTDn2kf99Kp6wsVGkiVyHKf9i4ZfMeqrrHKdBMgdXt6vuUxNaRmLw5Y3",
  "key10": "y8dmvCzYQzYaZRBT9rsKV3g4aGwFHb33bYr9ujNp3N1ZgtRBTurCh7LmBXsfUc8bHizc9BRVCRn2gTad8dveMKF",
  "key11": "36ai4mGi1K7FmqxSSyFtsiCXSpBzBi5gsjYLhcApgX6hjuEE5EH31XGSsCWWfVvo2FSccL2PzYJkzGiApyFPHVPx",
  "key12": "3zKwzBxrgNSVmbyRPvdDeFqrEwHHkSqKDc4fSJojXUywdbc9Re1wBGjTeQYW26shQA9rFssi9kQYppwJXXwyEYs",
  "key13": "3Z3cWVvo2AXFjrP8qsqY2RZZeu6gNtRRkeqMvyo6Jy57uJ6EY7YA4WDPsSE3qod3qvwdxhV5sEyvp1KGm48bmdNq",
  "key14": "5KyJru3qarAJLoNBBf57yoBG9y8AhtBAAkJwtN5fz5SdHFeQ6nZZnQ76Bax9kcog47w3g16bj3R6naWSuc7AmtXd",
  "key15": "3zjKxjzgZNE1cfzeGoiXQB83CXH21UWxFE6mtFLLzFEg4QX8jzkNdq8y7RF5ViEiQajghQ1kxxVrmvWxGR8avMSt",
  "key16": "2TQEJAtnZGpgWtGbPSqvCSZZu9o1Y1tV4yjwPyi5tNcEzCSGNeTbECHBjeYbGKSN1ULn71e69Le22ocBkoyXDsm",
  "key17": "4RVHedCD7AqmYFXJe8QYmeuuaUAtU9CDeoLoggX7GPtTiHE9b418yRisf2v2r7ZpHmwGHmzdWJaV1HRABda2iwLr",
  "key18": "516DSccdMh8C6jJa1SgVy874HkHBKTxV9RVS88f9KhzwBtrtruYTRpYYC3Dq1HGfmTA13VMojAdYfepsS1v4j4CX",
  "key19": "pc9FpEYxY6kRG4A4ve1wLBC3jKzprBJPGc8CW9g9wezKc9DDDZh7DqK9Le6EMeqgQgqHmyoLxFV2KFX1KQdmbrY",
  "key20": "ndK8e8RB4sUxSTTdLMXDdJGJ9WiytHGJScPT2h3dYW296Dm4YERxJ8gnDoP7wZQhktCb3UhbvJAA1vVPGeReTGG",
  "key21": "2HQzVJteJnxw9q1QdPecEQExUmew4urRVGiyW6qMdJoCrSDwqaJ9DgpctPc8Tzhcskh1oq61nXj5BVvKu4pp3YWM",
  "key22": "VAUrCb1dXRHzU1u2B1vBV5XpKCNCiR6shViejHsEGJn18DH4KT9uFtqS6yisAWBUTCiSHadQyexZ95ZwhBDAL1y",
  "key23": "P7u9cNWCvKLRNmYaLbjsBh1gdh8rz2R679FF87dS5HoExste1F4sbSJR2jkAFstveSC7STgfRLiTeooSuesy7HH",
  "key24": "5G96vVyYXWnQox7LuqPLaPX1jaFJefN41gKNCFfSzrWh7trkF1jT2DkoFxagSd731ewgg5cydAEbE4VLRkPrqjvP",
  "key25": "mzQ75p3GdV9e76YjMg4P3Frg2ghcyZ3RafrmcHNCynQwJkzRb6xYnWLuzfukMcxYytVeMJjqbMGeSmkycRcezN7",
  "key26": "4mmjYG8Q4xxaRzLwAhZK7ecnYeGUijtCQt88No8An1TCuXbCH9BpHwzP1UYDirp8vFh2CaVXUUpVWrTo342ta1Lq",
  "key27": "5HvV5zCR7PuA9EPqVvQkvhsEP9CQYLCeDyVDWa4yWh6M5kwan8xS9hm1F9KTVekXzMr5hpNekaGAzSng5poV98jo",
  "key28": "3D8eYUTvRZ2BsaYWgFJdXN4AHEmuxA1Nh9zP7VSLEA7SbrRk12rwenYfe47v77NDQZibhyEVGjzx4ex5pbvJjeTE",
  "key29": "2zhTn8At94BTU4mCbYxpFkDpY3fbuFh6tG7mrzNkirasGcJHFWQEgMz69uwzT74TRx3zHqUZgykooVeNEPNmPHQJ",
  "key30": "yrWGNFBVZLgiCQ4UuuoJRSwEcEbW93F9eviuNTL8QF5RnSExeGLLkZesXo7q7PSDCbE78vsZvoGeeayjsJhE3Ww",
  "key31": "2eZuF9v6JL5fwNkW623LDQzhq9HK1NveWBSQc7SPrRFD5h9HMwVC3BXvozt4KeTxSpx6f5RRrh8LcJLFcjr3Wwfm",
  "key32": "5PjphAUMPyHXtFC55Gd5XjWmMJ59mHAcvEg3857gBgyZo9qXhzmFMXTmSCAqtRd7YLPDdk2VHWvgFc2GQfb9kaqX",
  "key33": "4edc2Hq24rdfiqEyPwF8Ybz3uTod9fsPwg8TcjQvSQj175dp4nFPhe62bwxeJKL2UsZmXPDUnv5CtTGrnP9D4ED",
  "key34": "3uz6jCFCkH5r7uW2iam1CnKG2283RWC6Leq9bVHodg4yi1ciEFtUqExZqh5QcVcELqADvtrNaBmH5v72vafwPpXw",
  "key35": "3JAoNh5Kcb3zyzzezLZWqxWBA8mDnbCgxMfGj86p21BxNgVTkmuQP3UajNsJC4LAW7L8ZYFxtZ493kYd4qrr9o26",
  "key36": "3utGNoVaTDRoeP8hLrQLpJ5RYHHNbN4LDd1kk74KNGExUskL7vhdiTEWJ6MAXZHzjAmajJrhH3ucWTyXAv8tDFXg",
  "key37": "64zxVD5NMjZDbiVHfm2JJGTWDeAbCz4RyXcWcCFi3w57CvbE2UfYnvR9kWZ5pEh3zBNKmkc39X4cbTQowrn6mKj7",
  "key38": "4LAKzzgWZ4ZMF1Bn6hEwbrJCLoXdXaCw5AZd1KBd7FF5UYGfvTqZVDPo4qssopcCLj3bNDPoXBcihy39wqvqbks",
  "key39": "4399un5JeTG5dHQi9PBiQofLCLAN6ZJmyXoZhZBxtYkFphw6DHFyvFDDEE47FUVa9B5JxmDne1yL5vB6Ci4At4kT",
  "key40": "3fQ5Pzxx9x3K7GTcgRxMuvJ5RskL21aUpWVH653Sm2d2DBbN9vu2Px9szfqBjaQhjAyLD8QikqrBLJWna8YcLFvr",
  "key41": "3VoSSibTENAGyiPCuCob1LAXBH5YwKfQddkDR5uAi42FLMGjbrXCkstzXmZjsUHyfECqKpMqdPPoZpXPpP6j58u9",
  "key42": "4iXBJd5xVEmaYKYCZkwT1KoKc8vq33yLecVQvusB77EhLJPhbFV9X9iyk2VGpfAHA4d2RNfGhsVpMXw9W48KRyBs",
  "key43": "3tXy6tfM2xkXqtpqm7eg8SkobRic9B7PG6ChzKMFZVk3SbHFVNxB1LRokP11y6hmwVghXniBWYJW17jH7vQu7F3q",
  "key44": "5wxcm6rCUiXM7hqpVRTTqJTKBEpDhyDnbnVdQXeaj8uw7kyQsGuD5PV44H8ahprZL7i4aooJF4yV3c4Qk5EPfDiS"
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
