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
    "5sFjSumvU2Q8LBikoaF1ie55CTVdyhR6VTxuzn3eqPua5Dmn6DgpYFFE8PiqoRPdKt5TvWwjPC9dFnfjJe1MvqMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NZYeBstneE2pbszEZaok4C23qT3GppQJMfSeqonYn5MjEbrAewxMQHk2ML83B7CEX78VF3zMxTyuXJzPpPZGwFc",
  "key1": "2vxpJ5NyociUEN26XjNBTVtKaW9rTgRhBWyDXVj8a2SnPSCwYj4zuTBQPdbJUxfs7mpJeP7LdqZKQ9NcdCXQLiTx",
  "key2": "4H4V9C6d6waxhvUt3LYnMQBFvUx89DQ8r9BzEjH4K13dRuCb1iicevY42D7hmsCZPUNBDUymEDCb3hhvdwRVHNxq",
  "key3": "2HfniQmN48XMQ1ZXu8b6qfrMooyzPk7TDJ8VpEy3pf8GQVcyq3cpZ9erQYKX6SWnjX9BRonm57bUPRrCYG47Z2My",
  "key4": "3QpZQDb2xC4tGKq9fTSkdDJMB1pHgi4PCmrr9DhZEDN34q9LBML5hZ1SJQA1VjJMtcq5kntZeRMcZATarLCs7yLp",
  "key5": "64ZL9SRoNKxmqpYT6ADREZhZgGXtFbqLEWviJRDP9qi2JFLjquZmU6YcdtztpCTLXxaKN3GKSKgXesCjhWuCnwDG",
  "key6": "5eTF99GrA5bFbjEdPZf9AWYcibq7ThDTasPfYWGCAGY2dCHfGLDmEbkpY2aPXHbsiYEemjSfkvnDJXujcPohpBXT",
  "key7": "4L7ti5R2LjR1CG9jsrp1Hm2UHE4goBs4RcJPqysbqgqxtkRgB9bkUDTFYi4GudHdttD9z99nbBWK4Do9CQW5WQyV",
  "key8": "bSqLthEcsUGUPiqnRNk2bjcBwjGs3hABMUa3q3sHZFaJZ6mp4fxWjMhA2mQhmxAmF8UxL7QLMcUgnQdpR28SZKe",
  "key9": "3K5VZ68A5iWmYqSpWtsh4TVeiNWLXWdcFDrnPBfM8ccRjNJzog33BcU4WrP8VxQK7g2oNRbbEYia8MnuRTs49mk1",
  "key10": "3a5c7RKF6HqqJmWGaKZ32MkXTeZAF8Uq1WFxUhavqRT39ux1vLYLqndRAiZPEUUX6mYDsgomkYojnq1DDm3Fn4U1",
  "key11": "3YjGaBPCpp6JAZeHmK274QjNTKDdTsauQKuifdCCAdqneGfdqPHQqXMUV21TsGfLY1JDZjzSBtj3HF3mxj7ZSFJZ",
  "key12": "5Ns971hXTNALh4XqHL6YJ9oMzqSmUCHusd9GBCvXNWy4XQ1BHGGFH7ppjadKuYiP7uJUSDEuYMxoKUaeYrL51PYW",
  "key13": "4ntXTLgK6TGaFxcgZYcVJJDKM2hSmMFCCdmfAgbY7oG4PZDpuqbWkobPi15PzjwNmqiZGiUUiRiiDjyWSkiLd85o",
  "key14": "66wrefA4yGwmm7NTSDNsdidDop8UUwnWqMf81wKEH8G4WgNZiWUvuAvdCv4UXgrQVGYh79o3QXH4ED3CgSwcYLRH",
  "key15": "4Pe5Dz46qSt8TYARooYJtFacmf6agbrweNLDAVyV2nUvf54LsA6JucwPEyXrjH19QcS1tfbwdMJc3sS9BTarS32q",
  "key16": "2LV1NLnaQumJ286iQZVJ7Az7fBCtWj6MnoQuqPYJPx7ET9fU9tgSta2iLCMeHhioSGTn8PHgQpGdwieHxw2PiDjE",
  "key17": "SjuBzRtP5Ctu7J8DyXfQdoxfc4u8sgBgzspbM2axSibXZNvQ641RQVm6FuFCoVU21fqcB5ePVcqpdjGRDXay2fr",
  "key18": "62Lh8TgkzqcutCCNbzZtMjbeR2w4Rii54k58AcXAKkw7EKmCr68DXKocPTseYzdf4Ufbd6Tie2J7cR4WWjc1BHhb",
  "key19": "2EMPFjxeAtsz4QVRvy4YcJnoDoZihsF2eoD3EEyrmdSFYbknLEoox4423tggXXf3qppW1abPQ6mf2jBBAWTV6us8",
  "key20": "2jEoVpF6Vx8ixyrqUr8oHQSvUcH3mRuxCmgCPh4goPT6KtmNUHrPJd3hQ29mwdDsaFVsLiPnBrTCkftdxnyjcEnv",
  "key21": "UCS8N1Gk3mqEo9D23yZuTwKxnXWR5SVdTCMaDVQDGymQa3tXLWYqi5mN1VMagLKx7DnruyVczipbwan4AUhWqt9",
  "key22": "1Q9NMyq1N2kKztC62xb84qWgsEs1qjvoxzZ1R4NL5krubiBBY2t98p115k7q3CgeYzLVXEZ1mTio2vN97jCR9tZ",
  "key23": "63crEeKNACzw5c3xXyULiH8ZQQvhUAHMdkqSAmy1mqZ4CCmxfZQgYu7Sw5uVcrnWvUuikcMq8NtwN5cd4cozrk8n",
  "key24": "juTPXfjifN6H85MURFYddXwQJ5c2ttYhhYeCe4fjhoJbqE3SeeaFHb3cRhfUDEpPGAi4Mwfq47RtVnJQQLbBJX1",
  "key25": "2dn9HDbwNRNviwaaFkbwNdNN5KoXGzAdZmWYJzP17EP5SqRDBmZWJzQFhFEhGAfS8vyaKCJjnCc94uACDsg6QNAW",
  "key26": "2TUhPBE9Gy69ZNKhWDbs4qFNgthFo9AznGHJycxw7FccGTSEoxt3nWCvBMRvqhAA6U3fghZv8scJDzgLiMNy2Vxk",
  "key27": "4j7HGQyndXFJVBiyNMZoUoecWbvcmexYDJ4i5smzmRdcHckW3dySemH8rg2nRZLpjMZLZ39BcxufMHJNX4uiHhJ2",
  "key28": "3EQFTw62MtdhQCpR7hdibNQzepUMAqLz1U5hYkz5WWDnnKybw9ZeWyiKHiMS81jX8dQNQdF7a6L3C38BaroU8bJH",
  "key29": "VfVxWx9FSMffLi8ZPX66qF3gbf67sHVWcLPLXv75KD9AJg3v5344hXuBWAzqMfxamz13W2k2JfQey8NrVBkrwcB",
  "key30": "5cFbLAbodA9jXRnYGqMH2Pq2GSy3oY92MvhYQwZMuQm3FdAU1s7K5pknJQZ85pK4gmnSD9JP5jJa78jqC4t4jsAo",
  "key31": "5a8rxecWCX98jVFjaw1VvMwt7csRchZd6VLiRw7jnueVPiAiYw764XyuwdtpnnNJbqdvjsqAbVsKHEqwxZapmvwo",
  "key32": "4ezC4WDDCbBE9MyJ4c1mJbKdodXExnJJevWe4bdbk7cUa7p3ovoCmRpFtjL6wDPTTtRksZNwWihkma8w7UiYaoc3",
  "key33": "9sU5qTuvgb2ThczQaiT32EChfeFNcMZWSyHYV9aWkFJ1y6u4B78W9iQVN2R41WanCh6N379JLP5pK5qVcV8xxLs",
  "key34": "22tybSidADcMTBhNYN1AMuwLRs66k9YH8GwDzQdZvFtmJ2VXrxqnkyCNMZkiJ1VC9epXHHUzJPRVL4ZpxW1rZUgW",
  "key35": "3Zv9WgXcng38r4AG7UmYSrULaa13zc2Z3v1PWCNWpPwWHzosFE8AvfcgFBNJuzPBDcM6XH8qZYsKBAWVqrJPQqAJ",
  "key36": "43DdSFwxB8ddZMfGibmS1CsV83a1YfqNZMLDNVSKz3mjs6gxquvBZbtTqtQ2aEeVugfA6mnZvLTowkA7rgYcCCjf",
  "key37": "5UVBREK2DqnUS68NFsEzqgb3TL4ycuay3rcSxHqEbW3AZUNhnjiFKQT5FveDYr9Hfy1UjQBU7iFqB7UwnWCcPn5V",
  "key38": "3dcK3iL58rLNF3E23Rk7zbVtRDdPFDVhFPoT9mfcYHdKu18x8wj37MVdeAFx5cPDbQmyx8BiZrqj4TNP4otQi1fg",
  "key39": "cXdrnfFqEZQtm7nJS9YxXsVDudgRKSNatBdBKAxH3fUTswy3Uv9id3QzTFjVUDGgzgJ4LgtDDRHgY6byo4AA9Bu",
  "key40": "b2NBDhtdycN3qrm8inPXjCCZfKEAo1h5SNRpkzn8Z8cp6mYLsNPt9KTHrnmFp7L1a91vfXRBdN86icarqSTh1YA",
  "key41": "yEt7L9gJNJBcqmC33feocPEP1bXwkeiPGWj6mHJRP5wvSVpntpzqGK9ipNwJtEkBfix8aYCmvdaFr88RQTnVxdU",
  "key42": "3r2bZpz49Q2fCu3jh5C8PrHZYN6PQV74LNtLmXpHCXcDjMMnAR5dJKAuxcbDMUTjFitj8y9QeSG29U6kPTwGsJHW",
  "key43": "4CQukBds2hDqbLdsEvWmhDqBs6ZMFYvFEL1DYnYqgfCJkAs3pr5FGEBChaUZ3FJTcRYSc6pZBV4me9JR6zySUrAn",
  "key44": "2tzb3nD9cGQm7bwrCKEj4zHtXCFXwL2aonDzH5Jb3EZFGA2mAknY7NAqt5DaUpz15fFVGWjsYHy1BA6w1NprHDF7"
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
