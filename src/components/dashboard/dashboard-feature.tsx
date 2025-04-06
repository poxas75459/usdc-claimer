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
    "28kH89QPXGuyC1fN4AyHTptEr7HJcr38iKqbwAcGfkE4aKM11r586Ky8s3U5wEozMpvLtop2X82RYPfpXXyKCYzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r3GkUghvdfU8HMsLsmpA4gxBsYVyEw5qUhmvCEQRieVBWxhUipix434GADDf88LEcgQBF8XFjxZY8bEb2bkXviD",
  "key1": "42tCBBd66qp7tcTF37zHKGaLD5uuNw6stzWcZLHaZ7RZeRxLt4qziRfj3ZRcPibVwUm3veCsGF5TBWxndiq8xdHE",
  "key2": "2kQPLtTyA9obwmPqjqVHk6hAap1pD2MPA2Ev96pAqsLpn3pytQUkN3WzpfFm5omojALP6Gciwc72EoWG4KX96kQX",
  "key3": "KfNDrWvrmsVC6PKiNZCGBUTL6782dfVH6LBjyoxcLFDTnpwcAnNSaw2yz89uEhedez8CgXA7q4tQ9eGv7xvuAQX",
  "key4": "4jbTJ5CfB5kgNot4a3dGxKNoSoRt5V9JZaD69Bes1etX9PEZov9Da1ptQJS1NKLJSkFv7eDo4CBf7AEetKKb38tn",
  "key5": "3JMq8qnhLzxu6RUyit6TMgjdE3Ae6RJjJVX11mLo4iDDczUimmV8y1ckzZ2Ur3QZRAWLUGjyKEQJTjKXchj8PA5t",
  "key6": "43JTnEjsFtMTDobuibr6NuqExwzJLh1a8ksgGfKuxcwSFgLf5ZRCCnfCzjYvAAn1bQBfnDMhutwxvpUGzqCswBk9",
  "key7": "5B6BMLXmqsHkn133ejVLF48mY5taWXRw6Mj7fipanMZ81ycHjb6cL1SzJhXFwF87UTAt7b4uEzBKxMUMKHYJHd2c",
  "key8": "45d3U5y4wnkGSZunX9dzg5VCMRbk7vHyRGpNbpECTej8PPFov81UijiBBdC7rcdpB3Q3V8kqUXFvLttn4pS1Fapt",
  "key9": "3sVyh59Y5iqnvP3Zp3iGL8xNGKuqRQ2FCDnjFmCYgrkwXo9Sa2cDSfesuoRTnxVZsCguVq3AcMXA5qsgHXnwy2oZ",
  "key10": "5TYK9ckSEsu7kVJUe97qBCHdJb8wtRJmTt2UXd4A4hL3jeF55bE9R4hXVLDYzLPGC7vJWwVzfiH8yQckAhvWXB16",
  "key11": "2SJ3AFDjUhRPJB27VDFf2aeo3TbkMhE689wb1JTUXASnDETtKNWq4v5FyTEP5gKWuyAwbpAQmwaQMEeSxctw47FF",
  "key12": "31B3c2u6fbTEKjTaUGrYDN4w7ctEER8PyDJV1HLws1EFgATNUp8YfeH8eBFU93a26n7EUsH3FcuRDe9AfzWk2wcP",
  "key13": "38suS6Juh1xLFhEveQhguZ1bjpTyv1ZjEu9DCK7symUeuhfjiD2F2Y1PkdjheKQcAkgXs2VEcD5RcXHXDvVMxHRx",
  "key14": "5MKAbUnhQrm2VdrPqVaGftgD2t7rmkZA7ecuGSea6xLTLPq2LADfwKaupoGhnLsADaho3p6J3ELh1wgn2SNrwJHt",
  "key15": "5bBmLk52uqnTZtHj8Mq9TY3zdnuZLQfRgb9Wjup15yfJqBG2DS5PxqVE4y6TijdGnkUoLWgrukaoAso5BbxrPiP5",
  "key16": "3xwFa8BCyEZdmz7nuGEJm98GLgL9dcn2u48fD4g3qaHBTxTWHZExJXtCn2rPmQg71YH6bMKQQN751ETFibN2FfFA",
  "key17": "3mgjWAxTKzTv9eywfV8EP2iGnr7puX4nrsG9bKxqKqDWKoQAx5z41T6AYgnrFuveHf4mpPZswoiAHSoRUzJq3kpK",
  "key18": "4hWMtmKdPJNR4hCHY4SND5zKzLrc13HYhnB7NCs6Xudb8pYvC6p89n6WnjEivamBfuTJN6f7vC3k327CSaSBu61T",
  "key19": "bAgRSa8vFvrBx741mZMc7NJdRrVRwNEpRocaFRiRcUeV8xv7oS8FHZpBbVM8NdYGLjsZB3obBBFmp8ARshvhDbS",
  "key20": "G7J3HXRWvzvziZiYeSzXEYfAH26D7Jksw5wTVbu9Z7263M12nLdiwR9QNLbUgkNRGrhGkPuxcyBdg6GxZ26XDWA",
  "key21": "5iEoMMnvyPZAQjsNJoPV6x2MoejvCTbNwdJUqyXZyNAAxJK1SNChnAjTx91kxy7wZrv6cgNvs67ryB6rJkp7jkts",
  "key22": "4qKVqzr3bsE4J13mWtKuNC1DCbxqmqz4Whs5o9U7xFNMVGDUSoqktZdViBeo18rtwX4CNkVmExw7VxuVomMMmdbJ",
  "key23": "2RfQUMPe6BjhzfyHSq4S8tYsfuMGRxCv1pdJ1nUk5q5XV3BCuLu2E6b3WqJM1pzCcsHPRpzMCFRQAf8yaoYcpcap",
  "key24": "49yKmBipnuoTctoBzFzNb42RUBBSDq7u7i2Q4R3xj5mysximqycBy1YbzHPwKVjHuEPwWvKjMuF8p4FnBB3MG6TJ",
  "key25": "3ejrghCDvkSWqBBdzf9U7AufsA9TdrWsDUcsjht8NsDt3uNGcdJg6QEBVRnYk9ynZDEgA6Fx7ZCVizbyR5oiFBug",
  "key26": "422qaQVbsA75bbTrHTffjpGoyhz17MZpBJccYr8Az4WNnFwaQG72XsLY9YcqA9iEAHMWwpnEC3ANNzf7Vjg4AXsx",
  "key27": "3AA8fGkpaYHH3fQNnvy66ajWbKxtyNwgKLRxZj4fD9CxDMxeVKm2k5wSgymD2q4TUpyaU4fSybAKGtFKSbbHXUmq",
  "key28": "2mQnncchMpws7kdJy96s9FypPuUq4XY4xjYZVHCo9QZTuYs3hHTaitujiby559JN76YUeK6WAvwe77dNx9i1N6ME",
  "key29": "541dPgpxPTfKU1eQKcc69f6ZsTYjFck3VQajQBuK24vcd9Wcz6UJUnR4TdZNHXCfuNrqWAf8Ew2V7y9U6DQbVAwX",
  "key30": "5ZxRPEQL88Ki8pGk453QMUUqQYPeQEKFni5ZAyLMSkbEAQi9aWXdV6f5FAd9CyTjAWEtcpLtWpEKGkZ7RuUFEKRj",
  "key31": "31qZ4bGwxUPmuxxQL6BUDCSHW8c8wkC6xDKgK7uHyydpk7mJaE9Z2kcTo6KUfMynMJ9tVLEQoNAJRmDU7raSoEbc",
  "key32": "5npYM4tA8XFmUkGLuF6cRJ84yyMoXtviRoQH8TRxgXUVb6wsyugdraKah6Prn1SkZeY6dTS2gdRErC1x6PDwGyfx",
  "key33": "51PCbFyBaAjuxuNmyYnEGZwnMkGhhAoUgAmXg4qCh7cxuQw9e8qEcmoaJp8BrCKd97D8ygYiwFqXxUCcQdSQzACr",
  "key34": "oEbL1o7terTq3WHyLgE93MHvdkpUqDNddMMCWpXciE29wVUie7eL9cG5eGZkjeFcAJMXH4e4EKMiSuFqJvX7NWz",
  "key35": "3g35t8LYkyYg24NqWvm2osTcPKt3iXByajwUG5N8riYBPtXAPRtkaRT9wHaej8KVsaPiPB1GYMvKU8yhYpWRiSv1",
  "key36": "2azryn6UPwmJKuEtNqfFrtnnKd5PqbtfkDmP9Rw7wxFBooMAypyrbCz8WAUdJwvkT2s2g2BUCry5agJ6KepALz1L",
  "key37": "5gXx2WP2txexHqfJVwmXzF4Y1M5QZ34TypoNL6QdXY4DKAkyztNxBansVacZVh8FowRRxK1N3vtCT1kDZNryE9YH",
  "key38": "2eUjmEi7dQhDWDKq34HkSS3Yn4MBRDFBEts1MZDDjRkf3ibysAa4zHzENt33qnt94564Ni3GkY6UHTGCDBSaxJtz",
  "key39": "4fKSa9FCR1gBpSGJRM4TRBSiPVURaBhvwCNcAizmXmbw7K55hwVEeavN7AqKPnPm5i5VZMDEkXWfARvw8nrT7bCL",
  "key40": "4aZvdPsz5qcypj952Cwzn3qzZfSeJakELCiHwYSF78ESswGJ6iSSCuRExELAf1jPG45K56SKSCzGToZoonN4ujeY",
  "key41": "kkod2CfBDUt39eJVyzpBK1N17NpR9bedbmR4NvU53YSRjbnTiNiVHx53fWkNqBkcQcWi3XMTgTh2PsoHMTWJ9AF",
  "key42": "2xujweWo112ysjd9pAvbi1EPwmaKvgzXUTwxZCMu2oELJXzvZKPHyKABH4RytAciEmYXdaz6XWcjowbVVQQJ2AbF",
  "key43": "4AfQVfaLyiU7pMteTJzV7GJs8zrjJ21ovYTn3XDiRyyHVXJkNvWdTqbpydnxHQNHHsQny2aTt3JSy3SdFJB1UpEA",
  "key44": "jhDsq2VhzMVaJWCBPsSmNjGnXdbWh8dbhiJu7SD4m6Lb7W622WJhHSMmHhcKcNLhMHj2SsvmgEU3jKsikfNBGdh",
  "key45": "Sq9GXn9ztP9bMSehJ8NYkzXuzZBAf6JSmqHREvrNcnuokwVp7NkfpWSbgEqdpgMPBrWeVFVWkHL178egZsm1SZX",
  "key46": "QeNX97UPeaq2SguPVyD8fr8G15LJ1DyYacjLwhGcNHCeYEBaVNGkEFhdpcRBr117ucYeZUjDyxPy9ZHVufqjEit"
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
