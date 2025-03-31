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
    "2NTTxUfFcNDxqrKNUNpUthyg1fakREvmG7ZEHFVd9z7ZKpzSegJRfQjJWaZp2sGgMHwyoAiQcRsZT6v5DzLLLoBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rWJxLcXMB8dEM1FxeDjXtdHuTkNn1GJiaDo2RmMczSZYuU3oEhQ7JZs1JCbNPnhtXYDFWNRUzgFWKytR7s8rnf4",
  "key1": "2ggdHWutg6xsxSHyErCGbBfCjLQk9DHKPM6w9H2J2tRKy39dpBj6Bg3Rx8mH7Z96Eqjh4hdBnt2ttQVodR7tymTv",
  "key2": "61Hk5hHAEhuVSWmhaoEGcciQ48c8b4MbHLUj1WAvHfZ5Ukoa5xFMRy551TCsp63UWfV5N1bcq89z25X8EypJrVvv",
  "key3": "41WrMsV8jhXktqWG2q7mPutF7HCWcaQ86GEyUdVSVnt4R3sbmikECXaagETiNAQ9UEufpvXos66itdE8wB6Fv1mp",
  "key4": "2eKPFFxsBv2yKLobU6byA3LZJBvCTg8q1wqwgw4FfJd2ASS1fD4HfPQ3YaXkZBm5asDyD4xsiryJkk5DLZqRP5E4",
  "key5": "4aisXG8wFxBZw6UUfwCPAKVwcwubcZ8WXRicNRk1oN9AoNyWe8hvnELgmKUVmS14Px6t4zZMNnBKTX8LmKecDDSc",
  "key6": "9LshkgFCw8Dq3vTC8mFRcQ8K6TdU7LpRBbJXZV38VGuzgrUU7UjpgosowLzwG2k8u7SG88gP4MF1Z2w23Q3H9og",
  "key7": "3dx1Descrc9eGZm48tpqg2qqDrLg7oRFNztNMMB3pzurzqZcQMgDogtMvqw5r7hZivcxB3W3jjxnkGEQLFg3dv1f",
  "key8": "2m39Hjr1AEcsFU16dAKFmrsgVesXxqJAHFKfV75Yn5r9Zbr7dcLSt1YHPqc3f6B83RQrW9H14DGSonkd985KZTkZ",
  "key9": "3YRQk66tZqX8u1GwanKhrCWT3ooUXemUdaADMq34VWcwY57Mqyk5uckF6rt2yxaF9s33ViFM5zmg38cZP8LHZb2h",
  "key10": "4JysaY8HdNan4o74kjjQVVCbXEpLYak1FgBTRVjbL7qhfBd3D8pcJrBipPqavBLT8oCSTMu5e5gNrPQk8ZbLe6jq",
  "key11": "3zWEhBwkAXVnaeyhndLigshsQd1xQp6yA8eaq5LzriiyJmc3kJiu4QjSJCEk7yDhRMUoVMPFCczdEssjFB9rLEL8",
  "key12": "2ayaL6YnVsDNmXZaQnfM5359PtQFyK5fyzziDWpMWgXfBqG8o8zA4qwDmtm9oD7jbg5wC4Tg84wxJwLV44GRTx2D",
  "key13": "4MWaSNVZzxxZYotDQpFXj5ahFchbTgDbxJqvJMzALiGGXwTBoJvM3LtoPQ3o9c4AJLQpAaeV5xVaW8yF6NPwHQa6",
  "key14": "4ZLnjAL4yQ4mXyQeAi9ogoCWJrYNhw7y2nJtg3kgscSZrQAfci3PiTK2yHh51yUYpSoGVFfLjvCMY1mrd4VFCPhd",
  "key15": "4Fx7SnjKi6rhsKvvXa3Ryfz4PAbqfnc5k7zFn85nSLEWUYmCZJMLnsGi9Am3THnyidneLCDNM9MAz3weAisetPWN",
  "key16": "3xgr5opW9ornyqzECBDRUXtdA3tkcpvf23egFL9EBXf9kKE4fEUnePXMtekJGFD4ceL3KBDykrmFSXsaJ1pRbsB3",
  "key17": "2QxP3gaskpipxPfGhVJNG7ADoEEGeHK6VeqA1je58fwX38UxM4DtZL2TTMxFeU4FgWCcSagrwDipYpnKVvv71bGh",
  "key18": "bzskAnmvJqfiWbK3pXwespYe7ch5y9FfZk9Bzsv1eAvtsdeefP1GLZcBgr1MBSNk3aEUWe1kdMhNKu6Mzdnhnhj",
  "key19": "42bdiMuyobDVrKto82JFW2A7hQ1QuarvsZuuRgC8ShjyuXgz9Qvv8VfHFQRQio5TiYGNEUick1GPfyijH76xfG4H",
  "key20": "22TdwZofGmASeVEYHitYq53B6WtuteA1DP7nVxu9RwcDo2TbaYiC7yhME9d72yXkVbVt1dmxp9WQn4cVZrmrUzB3",
  "key21": "56iMBtcuuuVaddYjhm6Tq9xrxs8D75sxfMNxqY9hRxbpvxh43ScP3uz2wabPNJWjPn2sEkp65DCMcajAhuUvQ8m8",
  "key22": "5D9JZGsaTVayVBjNiSxwQiFrYaePePgNbEpjtAR2iWdzcPU88bSgFBeNqdurcerDsRghyspthCjCJe33Duyw6Jni",
  "key23": "4UXcf5UAUziT9cWtNvhcpMM7ddWFKQ4EGeUujkmNWxUGgND9ygz4gcd9u259kMj3YgVejcJgerSzX9Ga7pUcrEWT",
  "key24": "bZsUmxaJ9PrUgcV8DV1Q1o9xYAkX4Z481awLipr4rVbYiZyz8QMsZ1uGnRyRkp1ppgKMhhp3HwEUNHh7E2vLadw",
  "key25": "2GjE5bLCArCRSbZcBov95n8Pdp8EutEwoyEZaAvpiTm7cMdSHHLPJPnHCtX4Guk2rS7vzUqhqoNTMttiGU3boLKT",
  "key26": "EhsA5jNdWvqxHH74yHswNcmk2ZCwUCU8ff1RR51FWmoC4cNsVS2fo91Pbvc9C13Gk44yp6c6DAmgLT5pz57WGi3",
  "key27": "5HSgkwr3tBP1Gmxt2CDzEexZepfW2yTmxWymdCWfsAdNkBKsfSgy41ucYugEUkFThSz3A6VTZfpdMdP6YYoGJDMh",
  "key28": "3NNRoXynfVCsAWfaFhD4f9voeMpXncHtDYUWTJgxfRWuWDx9oxggeFoGEpd31PaFyNZaZBRPBaye7a1gwbYGi2Co",
  "key29": "3Cv4CqJWq78MRysmT7eYSC2dbAB22bBbJYJRc96mHrRRw1d8ShWqfzo3F9mLRgskpyxDtCqwiu8ujnPUoo4gJrMx",
  "key30": "35ER5VXe5yvPnm4YToyuXyFS5SpbtbqEsKxeKhABFdcsTerFPrAjNusS9cHHCPa4ivvFgtfVUpbPkLrsk1W36iSy",
  "key31": "aYrvBDYXnURL1GHykijbFWykWUPQEjFZuMtwdyoMa82L7aPqy5FjRkb5VFjHzEvSibRMiyPtwpjvJ5u1HgTZ91z",
  "key32": "3mPV4wjyWJ5v1miUHHKsbP1LXwRZMPHU7Pt7Pk35A2ZcwHQpt546HZXLHsxRBXvXveK1ZT4CBk7tDgkKNYr4Q3qM",
  "key33": "3N1W8qUyGH7qMLxteqMBBYYhTUHZgnJz3desDwZHd8YrKhr1SdxqDiAgwJgELrABm7dh3QGLxXUNZxabH8fRToLi",
  "key34": "2vcF2pXmXmQc6C2PszFaNqF19f6aR1yFoDVdCcV6rY7xYucvwJAzqSkTCUwWi17xrsdvUeuxuc2DQLSH42F4ZL6G",
  "key35": "47t21Uqr9VYAhd8dZhbLCc9BqjJYKxXh4R57KzUAWaNezv1CqFMcMsR1hcgDECRUdZJNbc4xLgbkV9ctrZFTEehp",
  "key36": "452SmY5H1ysphEiKgDq87p9jE5YaE1vfZ2kUevMTComxUKqA78GyNqPhVMkFk2puV7brKWthpDoPk3aDHgBs5A3k",
  "key37": "TNaDBy8Hm9XH3yWrJMM8hQ5C4UBMiC6idY5aTHqLsQPM2L5tFkGNciCbwCJMLjHBkDXFw6mPTapET1qHawy7gow",
  "key38": "4nuknbdqsGjN5QLd7RCYJscm12hCNg6kFviea1fyaSRTdEyGDji3zREWBuNJUBQfnTk5H75B7AZrgnoAaUKaQ1d6",
  "key39": "3uG5bsGbGVkDp1jxZ6KSvhP3M4HfxnXJ4yfvxtHQtrNiH1rxtgiLerQyBZnZ3ty2YaWUZT8bLyxA6uzTCAhcdDLd",
  "key40": "MaoYNjeYaah39izLHTsxy2XijZKTQc4h8wdPBx8RZdjk5yxSgVjeELMoNjPKLocx1bpqDyF7fveKRoJY17eReNc",
  "key41": "3QKtRtEVTXruMXWtPAG6LBpmx8HdnNaZQADJXGvusYPvNcwdUajSWTAuRxd3pC5TYzi9kXHveFVWGrzyTi8LfKjh",
  "key42": "CYKiexSHT3FUJjhZUUUJGQYJM9F97Yc3mj7XJ8daTatxMpmXLs3y8pPdjXvoaL2FUjepJfUHdy93AgT8h1tuKaT",
  "key43": "4kNq69en6TFQC2WkmFL57RHUf2QpV9zkAB3C7BzKwwm6PjRpJHnyCSutPVRyFY4ihGBeDzX4i4RtJmGUxwLoV4WX",
  "key44": "3srAt9ixyvv92LaLSz242gwcx7GQcL1madjKwHD3bWvyB8peCBERpSzjsKdJgnADAeVQGiB7aMQcd8MpoaSXgPPs",
  "key45": "3Tyr9S65AGN66CALyJCaqTuD69D7ucLGTA4A6FyNnrMyk2U17vESmzm3hSKazFDwsiSwVCXaEQa7vDVZN537LVSV"
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
