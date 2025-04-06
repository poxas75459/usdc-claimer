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
    "4A9Tsgp6E8WRrUQdxgWoQbsZs3Y29kmWvh9whUPFE4VRHvRoxLihvSXCtsNHrqzFV13x7MvTens6sgzdhKucu4kQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B4wgqNu16EdprPGWVDhSUKCNX2EseENxGr3kET7kSeXKnL6JSC7bquyJz9TF89TQt6Z5ppQNaeqXKeAXcnuQF4A",
  "key1": "3xT6LoMKLf8SQPdtb563tMKegGZUZmwGdrBAdvfp7uSBUXRHipMB2VYATCZFnfoFMe5oBHn6aYtgWgxoKV8L2BPc",
  "key2": "3UfEsBBVmMbjMGsaCqP9NC5EtogF1nDtx5N12TMsQLgbAXB6mwJCbmCDVhP5HqAnimJwirPWcMJiL6ffkUXacztv",
  "key3": "4siBEZHy5AhaBxtGTmJvHxjMBzEchhH1jNdwfp3h2X7ws8s81tRvppxaJfhDDWFk25UxDE1cbFDKy2aY1PJxXbYZ",
  "key4": "2MC2xcDHf6hDX7D62cizxYkkZ7j4wDeCPLN66cw6hFmC3CwKad6E2JKCG8GchYxpwjo9c4MLqTcQvzPzJ7jHXtqV",
  "key5": "5kJuv2xVep6f1Hnu5Lq4Mmng8JJu4nkU8oJ5HtbPZwLUZzUTt4QtmijcFqoyf7AJuM9BXEyengUnumW8sjyeoMGE",
  "key6": "3G5yfnQCEdFJURdTHFWYr7Gr8fgt2NLrLiWxQ39zvLVHMt14VuqdgX3RPf7MJbFxF97G1zVkpYkSw41D35JGfAZB",
  "key7": "2vV2XbdGLgATiPugdh7VRuA5kKFrrLNymAV1nNJ8nn4MzLDWcbCugmLTEf91qdGdma6TFfnobjzsi5LCDGbxJiCX",
  "key8": "52EUgCtkN7Jqi4XgZQ6MUYoorDwGupnnfG2BNnmNKw9hgnayxsVqqrDXcH8ksLFj2WRYYNzJ7zRQmqsogehNF8iX",
  "key9": "2Y2fzrRHYeNFpV6ZQXkVgxTnDJpvBk79AKCpbSbXzpMh57fm8ShuAvgThDirYSLA44VcuvgtDYa4paESwr7nrGYJ",
  "key10": "49qDojBhoWcUTxc9xGgTUcKqqbYvfKMxfYag77YHsNgNBJbRd4Kkm5BtvmcGUqexNw2hip73nTBuAAG8zRRXt7YM",
  "key11": "4jRF51r4ENdBfYtTXKsLAvPPukxTJUsvqR1HA8825K6AwRgLJc33iaQUpcCb5CYWyP1yet1XwGgocGY6GoZQjk1r",
  "key12": "Q9WPpkfSAuzrNGM5UPYhMrZRhEctdwRi8Sxhc1HqGPm5ocikeq9bPsH8gUysw5qD8QJgWszgzcHm8R4zKybbEGU",
  "key13": "6V3xV2bKgq2LJ4hDHi3tHnmJXGQhppr8K8UH3gS56aUGCR6PvpLpk3aURJMtkb9cy8phrMTW1R9PV5qnpgC8azV",
  "key14": "4jnrPk6ut9tzYyzQFUDTeBM2gTKsjixCBbfzvXJ9763MYAHVBACJyJEkf33FrApisKsCigFWrjtYKGkaBfcp8Wig",
  "key15": "4APY7W8zpbvx6Pgpe6DNL5NCFS7UaX5a5DLW9jxrQjcCXUz9BsmQLhHijaZ8kxLq4oaLQpWBUKR5KGeWdM9hoyb8",
  "key16": "3nF1LGyeAwqgCG8wZ3w56Qajcw5m7rr2e47dcDDbuPCy1wGyo6WTCmqjg5PW8iVsgKwts5GoAm5arjJZfsYbk7hQ",
  "key17": "sXaYiWNg9eTC67UEZusdCZNutW7Pcqz2L5g3wkX7wQ36iW7eNyATv1tDB7jchMQenSSGmVhEdPhwJBX45w24moc",
  "key18": "3bxhYrmKyopqjjSb7eTG9ATe5omMpBQnfNny7udP5xbo9Kdn1UmZAwchmKSR1gWvGF1VYURymKMdZVFcYbbaMqgE",
  "key19": "5tRcNZwPxNyj7JJRPrbxKjZbLwZWXUnuAnjQ6tBWS5Dm5o3nLh2Z3po8C5Ln8mH7GCZoCHtHpoS4RXVRVhDQo9mh",
  "key20": "4Yxg8nG3wZM6RF2szvuzJ15BocrfmCA3NptqYfhEnSj1tsvM2365dnUQP9w9FK9eA3LhYVffU74PCWwF1LEzHFzW",
  "key21": "62CaUKP7XtesikcEpb75AVikENsW3QspeKCakn7tGGMjWLRuWjKotxLgiBHznNDfXqX5qTt3kSg86sBXLAEzaQzC",
  "key22": "2mk5wtn21Xx6jzT2eajXHKhSMZcjbj8PNDeAi38UriU5UU39fUwb7kW8TYUj95bG3t34f3arDgaQqfWGeekYJdur",
  "key23": "c8tD1ghShreiU4dcA5zN9R8JkBZS14gNv74JeZHxfMFJh54vVUhQ9ujbqDjeupHM3WUSuk2YTK9VMsv5hgjYhKb",
  "key24": "5fPj6LX2yKrCFtY1QMSKpCuRGtjLqxqBBibyyoxT2aX7NZeFtYtvb446ndU3sonaTtJBn9U5EGbddehMYAnS8Q9F",
  "key25": "62cdLX8Z4Ww3m5cmLTfRkac6GSk16TmzNvNJzbSxcYz3HU2LqD3J46Yz93yc7296nHX8nMWrwY5baFxcWd1iepXj",
  "key26": "5yqtTjy1WL3jgSoXwqaqPusFSrDyTfJGR5HQeeLAVzM9BmgtTKGypPmc3j3RrBRrkDmyvNvqfvqK3eDPu3vSFSmB",
  "key27": "zrn6QrCZh6UjbU1LS6z1krt8sgQrTuzeB7LvLXAJPDafxk3EZmaoxEF4xhR2gMqGV3gsTPbGksQnbwNY8Cw73kp",
  "key28": "5WH5bh2nKBDnGumjLk6V6R69jkYSX9bsSrJoB3GnXweQSjuBGoSE8NHfXq3SMTeTTxHWNf7eZjuyYTh1Q6msmUpZ",
  "key29": "5CuF2WACd7VtzMohTdfGPQGAb7seVUxj5AmHYrDpbpmeD2En1xbp1ohVUSiFGSQUCXgDKWJxaiUuN2oz1jxMkGdB",
  "key30": "5MMhP6X8YLiLC51LZZba3LETwBic3nQnkFFszFUSG4kXnixSWjaFVif41R87G5vJ6BnzySThS8HdXMA5Q1LXogHX",
  "key31": "4bxcWywqgFnMzQEKvsxCB5HGBB58CsoTCD6uskuttTuZHo6pURHSUB7L6XuLsnDGFFvcjjCi2yi2iqFBRsiEXpv3",
  "key32": "4HYx8tHcLUY9jTYBhuyfUzwaSYKN3xjQ2JDjGz5YG71EUBHByLtqv1B7espE5ructL1iqVgs3HJo9q2UGxUJZtrP",
  "key33": "sV12hhb5M73uhg1dgN396kkiV3Yfg2WDtacwwF3iVSJ3FZHg24DfsGJdeyFWxaJcvszdzVgSozcTzVWFCP96Nsa",
  "key34": "52A4zhP4J5WstYJByjww8hXcMjtgAY1UFDNvAeQvHq8Y79MWJLcDpimet2xkzxeU4j36a7dF68FXBG4SUtpp2a47",
  "key35": "4iANv9vAeRTMZjvcAnvPfPzpu53R6vvvHDHoCh74GuAvh5dzURBXVXmzttAQhT7fpaXkTdo13nimKwEViUApwyLd",
  "key36": "trLJtNWhYQtHSVLQLntD5VoNHkGdes4tC2E7NRgr25KFNDkunkF27YXeK5Qn1VUz26ubmFrRDumyJCkRpS9Mrmh",
  "key37": "65Aq3r1iDCzoGP2MiDRHoaemEZQbD7eEo9qTaEzc7zQqRvSHuD2cGpMMHsrgW3uFtebwSFrGvtXcy9Geq1Lt7in4",
  "key38": "36ePduxLCrrrNmDp8EebA8pk1EtCv5tR3Hj7ZMEZhPKyqkS1eQQGV1cRYW1u2nTXuVmwT9DTvf2JDb29SuSkpiSC",
  "key39": "52Jn5VsoUx8DBkpapjTZoHuk7HZ7UE3jfKgh22kv6ezTbFeuHwT9UQLxHNEoXDgMeq5pgcpnauk5QFDDyDHX2V1y",
  "key40": "4aVJhxA5cqPmrZHTiUVaGZUd7gxCJRriDZAvxTmeM6t9dAvqS7bANc7NZVKgPgQyy5F4W5nJSSJotq75FMShTJ2R",
  "key41": "4q2Ut45kWrdujQwhYPsdy49qEwrTBBxZJ8px2wRBaxBXhw42eRneag6gynuJUPsa9JRdt3ePCwrnfRoP1t22qdsn",
  "key42": "3oQAWecKcpNpoc5PMAYioB8sN54GpbmZVoyJ2RvfojJnwoxgF4qezmCKDkKYbLcWSh882iPARHSkQXBxnYnqLqPU",
  "key43": "3o6Amk87Ebfe7aWYUSWqqdfbdkJSkJ51KzXMLhpV5WbZU59MpgMnvDcZwnbq6LWoBbrMmsZiBku12887tq9no5fm",
  "key44": "PPURTtpZKV5UPxfJMS6bnaNZnt6BAwWCHhScY6LP4m7CV1iWC9LrVBvZeWvLRRHfnEby7GSv4HqDAjURfgY9pTT",
  "key45": "4WhMqYNb4xBjraxnPuv3gEQp9VLNW4WPExvj8VNAaPtn3dLJH9zp19dhsVRQ3ns5swfsqaaWCA9Fr6G14t65WAaK",
  "key46": "dcL38FQ9HY7zi2UBi3VcPif5e9Jqhs9KJ47veUifu3PaVtgoTwk8gs1pHKirNUvpKGTxDRajBSGfojePjVN9RFE",
  "key47": "xjLdjFqdYZcYFPpWJFEZ2YHVRxjUq1tSY5wQQdJnvsedpmaVPAQDKVrYwzAmHJTjA4a7ayYWxDX7DYT3giDay3b",
  "key48": "BvJU7UUXRKegFUxC6bs8sQAGELx6fSdYKk5Q5sehXtQ211DcGDN3S3BEdnM51ZBvTRFh7ushRDJzgkEof2nYVE2"
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
