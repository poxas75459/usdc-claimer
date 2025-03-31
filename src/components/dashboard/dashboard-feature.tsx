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
    "3oKNpnVd3Q2trq5zbHF77iJpvYNREAPyBojnsU7PZFoT4gPP32DCEZMqEVy5u6aJ3A2Piu4dFzo7cp5RFSfVPHSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LZyz5yTzHNKDLsnEvktzMi74qh3TWjGJw8oD2TM181WHsdjMGnNQrBKJny3Nvmv2kejaiEZkpazKeUp2qugwddt",
  "key1": "4o4EzHWXgaqY7vj57rUY7m3yL8zpZinZTEwuoFdV8jq5HvGRJjxrU4Yh9UjfuMBHdEVo6Jm687LWxnAUaLjDE7iT",
  "key2": "2tKEjz2KmXaY6w4dMS4NAA6ixUFThbUb8HfEnLULdb3CqnVf5eBvFVjG65hygmT1Rac6dVLyWJH35RjiufcMg6fn",
  "key3": "5zFT7ziC8LLz42VVe4R5zrEgsUFZjkjnThvMWtHSCymedqRaV1u9KxafTgzudZfdcY5poxQk1jU9aRcL49GFmskX",
  "key4": "41GhFAXXdTmaRQ1cPU3XfFVaWU7mdntwNt24T6XCna6ZdfTL9RXuDuK4vP88YpgA21fgLix8mj8nwbjWVQYhjqww",
  "key5": "5XQTV8bR1gdZmvkBbU4wV91QmLCUXHQfVVeX37dGrrMrBcakE6dJx2q99J1HVEAmL1qcVPVWrVQBDDeKhvsfxYGy",
  "key6": "4hb9HZE8S6u5Dv5Xy1UXDtaJsGLVy7yACn7mdtZ75Vsdz1bdR4YZZ7mwkP3k5SKmCg3TH6VWWEuxYcBXesFdh9SP",
  "key7": "3xm4KTxfi4GThAou215HXSxuFtQ2EaQmEedvY45Cu6FUprugZvdBYFTSstDQ4mzVPXaDZGH81tUcgqiB9rTT8Zbc",
  "key8": "3MF3z3jHYQMoku62oUPFszMZ6AhkyWuauHrG1koKxb7PGk13pjbe8bQRmAn86AVMEd1GzFHVR7d8dBP2M2tjyRZA",
  "key9": "4SM9deuoNz5oSfB5qTRDAbTTmcDUnswrKH2MjfD6EH2i8Ynh4J1GxkoySTKB8DeA6UdJTSS54j54wkWWEJmEeqC3",
  "key10": "4VJrB1QFQoHa5SQ6TQesEF8zja4MDjNtUh3PyNspqRqfuQdWKx9GX35U9E1p7KvaASEcxKkLMTErZxtyV5xn4tWU",
  "key11": "2iT5hjZ7VufMRgYL9iMzL3Nq5enjZZtguEXGQHZTKcGG1vWah5wMggnN1JRWeuZX8fD5F7hi53Qf4P9xxALGZCtv",
  "key12": "63zeV5LZQTfJrwV5dQ47KsZ2P28wJLZGFr7FbmXReGtZefzRd658cLhhF25S1z8bR9N3vA9nZz91HVT8k2b9T5ED",
  "key13": "3GoSQyDgp4jdXpBPy82tuA21S4re1DnroqMC9af4aysnMTEVodZTxHh5MQyD7VUzCuKAgz2XJLcSahDx8Py4Xsi5",
  "key14": "2M6URxNUCe3ih5MxuBv8BkwozQ9U7uRit2eYLYwjsgEyJzjS2ntnuhuSoVYWCxjs185b3TkRxfWUhJAEdb1qX2Bk",
  "key15": "29knoMCLAHsJfNKoq1TDDU4hARpTvjKVodwnL8AiXDQSC6n3twPVAtoB8wCw3Ep8rEze3LvUhsz9MPyroEu3xuHi",
  "key16": "gJohUgRSPXx614jkwCdoFGG33qwNA5fZVQ58RwfWebPH9VSd4jCr1g3Esr5NTiKmDJUPGAHe7W8L1L7ZDnbHJ94",
  "key17": "4CZybKxcJUFBroPvREUKjsSg1W2MbmTLGPXNVUEc5w7nVZUQDBhV4UcWtr25q4jhJTqKRz4M41FdJjjBb7m3iS24",
  "key18": "2YW1Ch1kGMrPLY8Tb6Vcvarx7FBAN9YzemE632gSq4KgWkPMRMDsVYpmBK5CnRn9tnMgYTCf1B3Bnzcy785wfJqR",
  "key19": "zWvSxaMLvjidm1dVvsGT2dHc3Wgd3vHYemyvK3VayiqEcbs33S7NNfXURqnJirM8fRTM4oBNmmUyJjTgWTgQQ83",
  "key20": "2asdAbb8g9osZYXg31XXAB2jLPJb2vBdxv6jdqAt33A6pt8adz1vwLhgB91uEWtLra9LoboY6nSdNhzaPCpg52Re",
  "key21": "LzchhVcqh9z8uLNvHAEcmHBYwEPUEtQidusZejPoBnQYymrhurKCVidD8QP8RJvVQiMpgAWtK1GavtXhTBYCQ8e",
  "key22": "5iiQPf1or3ZhPUyotU7PEfyndXSq8z4r85AtXg1LXuqS2fephfGuFNj848FbtmcLoSof16zMs5YSYWEt5N94dY1L",
  "key23": "3ne498v4YL4j2GtuuY4Wp71fHj9Wykh3PE6EC8DekG3mbSMRTSW5MXZUPLN1SW7KkaW8ZMDt74pCDwTGzxMmzDp6",
  "key24": "3FmgQczm51WwDSa2stujaTERoJJxKor3ReA3mjz2Mkx9mv4cNTWGoHtDVvehhuQFGoXzK3ppgZ8XmstY4DAcKUQL",
  "key25": "2xykr64R6Kwx8F2EkBGJmH8qE7FzAbaEdXsAGsG2XYfDXVBrxLhvEhsaGH8jZbVP3XTGawYs7dZGQuTUWjG6fkzh",
  "key26": "2Xnxzp3Ex8c6DEWV9HGARS3oGr3cZmouVCboThsXQSwAVVYVBmzRjqgwtAbSwkzVeyjcSMQ5xwmAkqwJNhapTSJ4",
  "key27": "615cVxfguxxRRUvWrJAFNYd2evK8Zxd6w2iq3VcFFEeos8qXVjFvWtgUi6FWWirbaorj9tzwQndcsi3PtWuVifFM",
  "key28": "ZBjYgfHjSjjiQMvX2iVfSjmFEkbHrPcGiwg4yEDJSKaqS7yHFxR2YMaF3Gnf64zWppCUwbKnEXmrfcZoF7in1Nc",
  "key29": "37uX6cWe3RyyMZuft1fpEkoQQUojUquJGCHfa6SaobTYK7TLZDmEE7ug4oirihEraWYB41y3rA2bH4eNUmhiSki9",
  "key30": "2PCa4rrJ7TsgH8deT6aP8Md1oXpErLssZLKrCr1to6t3NbFfD5v3f6x9cnBM3uYNLc7Vhv4BSt7XKG4VQ7bGATfD",
  "key31": "3EoQXtrm7vDWRGhkLTCDAsieavfZbvVtpJpVChzsrqviyad6b7ZzkP3UWtf5t7hdwtAg923Stc7y6kkjuVY7GuDf",
  "key32": "4pbfSfjZZc9BHdzprPTPF1wvjztmLtBjgjYhk1hHrF3rpS5CBqJ6ophvpVcuLjtySw4FuMHBN9KjL7vnv2BSVDQc",
  "key33": "3nPZMX1nJwdqQZGFgazVYVJEodGjSeMU1DGcAgivEQsQ9Mzvv9GpeWptwHL3v6vJMCwYmLgkvGSYjQoYcykqPQRb",
  "key34": "VRsq3j8gUGVKrJLCri3NLQN4kXajQzAhzEMCmKPieNmFBsk26tv2fGLenPdFBW6eznADVHMbCmeZ7DtJib7pKF3",
  "key35": "41yeCzpAAanA9zKb5JZ3bHiaDiygZRChMZY9tsHtFdy5nwjYEbpQwuexE7S5piuw2hJCCCMtbmRSPqQmyVR9Zpb6",
  "key36": "4PJC6FKJhovEG8jyuC9xvU4oaUz4jyBivCSC93yjjGb4FzTx9pdJxWU5zzdqMBkiuU2NhFwDxRLadug9iLSrqHTf",
  "key37": "46rjgugj8m6bz9Wnxy4qetGk96LhPgevXv3WGBrKCgm7JvcXWCETJRkT97ZdaTeasj4WZDSTtMohfcgkzBgXHUeR",
  "key38": "3KwyMV3cGjA32uYxVxMJGxbmeXYfYyX3cg7RFpQR8HYqq1eHe5Tr1QUga1joLedLpiydQc5nMS3FdKZ8bQDgGH7P",
  "key39": "4z9UTbk9HE8ZbZWAC9juWWA3YZbgPCKFp7AxaVPKiepQqZSeubHmf6Yv43iKFRhLUKo3EZFdNqnwGRpE1LRDcC1D",
  "key40": "5NbNDREWsNYMAwHYGKfQmLdszmHrtTzrDqopamEvuoU4NMz2rszn6FeU3MhcRM2PfHWFzs8rshuMZLrYZBrnQ31x"
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
