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
    "5BSPRs38gsJ7ZWAqVPuXBRHGLHGd2mVtjrtpNUpmCQVD43NMkhypGwXBE6GvQv6brfSbzs38Fk9ZtgM2Jx9kwEdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GZAUdUKBkvx1tzGp6GKnGjpnyMf4rek2zVjPnTePYM6U7UzW87NCS9c7ChStMoMeyqALH3yS5m71WfA9F6moTJj",
  "key1": "gZv1RW86AEPmawTJ72jJQCgE3XMVPbc2TTECiBCyxYdKoh5h5MmgXkC6Qkhb1gzykybFVvojFXbqpbLz9o5yakp",
  "key2": "5hU7tVZd1tZBPTy5W1SBf3Afii19faET2uR5LFB1D9ZggL7u5cyv6TrPBkMgTqPuH9T9gN2GyqaMAenoxPFLfZaU",
  "key3": "284S85CnZfQyPPE5tK7ysppgrsHiSpmVUXyi6qwMevBJ6BbgY35u4Ftfa9SfTXWG3Y4az29JBHEEfqFwKdtH77ov",
  "key4": "4ukhmwkP28AdUn2WUW41fvNhikMS8APWRWR3MQHh4jS8stZfZmAyBHWV2hzFBGGPrgAbpcLQGkiRzpnvX8k1rNS7",
  "key5": "4SaX8y9wBjnz7dWCVT1Ms4pVUrbqCDdnyCYV2Rfmu6fogke7RLHVWP1981WZFM4qDp5NixdTjdAht9q7mT5KPkbt",
  "key6": "3ibTvMyi57Bd1sZXW97UTDmAwyhHhuajXvSCCcspmMEtQs1wQ77hv16VKkGRdyfJkoQ63KTgzoTsyCghMnzkV2bc",
  "key7": "4ygwAfn8HV9VXJ9yN96o6ttDZC4Y5tq13DE8u7diLCCUQPTNJjqhxV58DsxVjsPR7kEduN9FrHuVsz1UWfRfcE8J",
  "key8": "3j3LkUFuz6AH1A71e66ckLstbCW5Y4zHbd3SbT8rQDiZ9D5dfG4JFKoSnr1rYkZHAPvBFtCz6tqXS4qtHwESZzZY",
  "key9": "2Jod2m1tPuH59vx6e3koWtEcv62XLi3tf5b4ZWicGmVWkMW4LtF7ntAcopuVi5N1NeEdvPNNZHWG9EhX5dR99uCT",
  "key10": "49eUBTY2AD32vfvvtttYBNcv2JHJFxssj6BAKYcY4Q1TTYpo5DLcqfDEzidBLE9zWENbdH8PS2QXJR4cqA9ZbBWe",
  "key11": "cHYiip81etTEncyCSb1R18hKcw1bdDmUmDYHQRPPydbMrokaWQvyxSVgLCETQ7XUQVenkVTp6jtMhPug7RM8pK8",
  "key12": "ET2MXQ2PGpNVZMrDkK6vpZVSRG4TCDNYsmmFCowNLj5KiuyQF2KiLVQkRARg82roSA6qyK3QRJ22RXcqznTNNzw",
  "key13": "3RLFVuvuv75AGxy8GyRdj5aFRkJH4sHSTKmCBBQEwcoFt5WcV6SwJgUTsK5jaKaEH2XHWko5zMSKK81Q8tsaC1N5",
  "key14": "2V5gUUERQMKmd81zD1uyvyV47VNHEC5aokFAsLGemFQ7Cr6opbm3aKZSEU7ikfQd2peeHmgkybS2VX6rmktJFicA",
  "key15": "9doC8jLwSDanExk2MvZBLx1krzMidx415zKq8vCsU3ct7252tDQZjySdQVkkw9q5ebADjXctqgAf7BgkaLQjW8J",
  "key16": "8gN3uk2FYi9GpMFEEczeedPGE6soFE7tyDeg8GLRDmUkqRdZyZ5j6o8shfaYxo9zjmW8MhDoGdHbqSvY3kJsRwP",
  "key17": "45F2GvinBevbVbQb5tbMib6jdGC4CrypDQNZhA7jz4FWeNRNY7Cm7dcAwvgAkRQWRmwuiiu3LaZE4GXSU6g1X5Sv",
  "key18": "2ABurwMNfL4Av2L4qWj72mUZgcrcjt8E45jQhCMLUoGQRKe3vQcM8Luj5JELwa82N1XR84reksTfKQg2k5HKRHye",
  "key19": "4DKGhi7vDTDKNm7UwqBFKP7eCgnNkcEJipt5kQLxcfGUixX5tAVNJ8N1WfqpfzeaALXt75vq3xEDmnRfgCDrzYzW",
  "key20": "4C8U6oRxbtLwrBbeMgB8EpK4fzTrLBZ23TrVU82Yx3MeU43i9TEP2ykidkphWggr5yAb3ePFzH3dx5GviubkzS4h",
  "key21": "4TivvHeNSRonknw29yZEwLeBWkdsa1kN5DbgaLF9k7CoyJbezkSF1E1KGeCaEEKecg72pB9QMwDYVFexDpbwfWHj",
  "key22": "3j7G766vR1r6gedE6vdNCQyi1JcouaUjMxhJ1xhCeQRqckkeDoaJMDPtW1iPgG5E2eu9M9pZJbwQxagJfzRpp6SH",
  "key23": "2neNbqgqNgaWrwtWziydB2FJ3iYs1CeLfynTGUP3yrpfbAh3nSxZY7WTtTKYoRVJTTjDHHwT9cUFrSmpdT9uTFtE",
  "key24": "2qX9aaYTy3FeTUAcX7ibrYS9qqDECYEGU5XGBoYsNGkU99pSJ9uSVrtn533J2WpTv9GNkwErpWeShcL98z87UNuS",
  "key25": "3CMKsjkwrVGs2WgK1CoFjnivvMeKi3YEtW6HuecA7BW5y1PPBhq2EWgzqSoLgxXpS8iz8u9DFE3xomwYL4ger6oC",
  "key26": "QG8JYwTtAz1mHNDPw5aC3EMgVEQuA4bhgAUDf31p4tSJ1RTeSWbwSz9VA72dvwPr8Vwd8nsU59fV7QSVkywA2Xh",
  "key27": "4VQnkQXGHLoRVdZgraPsziWedsaPQWj2gsgjdcXWs8fW8HGZpB9LS6RTMvRCNRRofXqhwHwYJK2KNqVVLEjRAfQc",
  "key28": "3AvMhiYTsU3Spp1w77bPczwu3JUAGQPF73mQ3CpUQmggkQX91cLmxmkYZWjzbTFeKjLaQdSnkrQg8GTsabNCUumq",
  "key29": "39AHQ5WSMtnxLGHPMKgvRE8uSkjZEbvTBRcjz1h91kPEn8eDmwnKW5m7tte2YvPf8w9J6xnWtdL2mfRrUNJLM9wp",
  "key30": "5pg7yNykpHNAUKKDcNirVxKNTanCs4Wg8PhFch8F1ek9Vzi231BsemcJG1Bw1HZgJz2QTdEi9tbMx9rUVxhBVGTB",
  "key31": "WSedesJqMmv9gDQ5HctGNzAkNQJtTLS1gCyVY59ZwmoJWnLQqDe3aJJ11iC7Nn4ZrNmr6xdnFHw1atzF95GCeHy",
  "key32": "3mF2KxTQfXJfu3iAAUgEHs2PGDuifGtBnckw4miPYRdQvKz3CZprUJPGJ9H9Sk3He9oEjWv2g7ZG1vx7mhRAvTtt",
  "key33": "2D1QDMeG9TSQhEtMocb52rGeKK86VpLpcm8bCb257vrm8ytiuzUFfWKzAYzLwwaLQHaN1hLxo8EdZnDbR16qibYv",
  "key34": "57iuBTrVqYBwng2Ctqe531UBwZph6TzuemsFDvwNsJ7qqPGceqLrJAib4NzgqibCbj4bWXPQucUSmkM32rtbJTKe",
  "key35": "2UrBbiUCJ4R3gd2nnaTqUv9MzwfMVZW3t3gxe5LKmoPQJH3TLtic69hvL2xqi9oTQzVSvXGFGBwhTdjCerqaHz97",
  "key36": "3X92xxM1GDEhjncfREPFYkQzA7zs3gRVQEKoayPPJkb15Cvc2QpaYEwpdpGH37RYUnQgCarNoMDLdhUqWcwA35f",
  "key37": "3E5aBnwkpJztJRW64NyX5dVaeVPyoFeWFxTjT83NTnsJ5VKb8gt2jNgbSWijKtxw7xrBLqb5Xxu3qdVL3nwmkkcU",
  "key38": "3v78LxPTKZVFBcptxDsnQxX1uyupvvgcSAz4VQQg8u9PLf7c8keCMHGaZ3DUPHt3hGuqvkUynCKStbdhVyy3p1HS",
  "key39": "2D9JX9UfgpFmz38h72hNLj5ibbVuLAD81g41yE3pSddRRypoXU6KdjRypgoepYHc44nL1b1P8BnGCGTHcpPzpmB9",
  "key40": "2jpPWAqEKJsxBDDCwqJvW3ze8vzPBRh6EJLAWBLATzPGTt7dBYoyuVfSkpeFStNDHyKnJ3reAsQGgCL5wVHFJuWq",
  "key41": "5gcz3UCJFL7kPC5hA2pz4CKVrqatt6fXHNKcCsA6LYzJxMpHgg5SvBMRDqEquxczY9KUriqjb5ngYnnua7Kbk793"
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
