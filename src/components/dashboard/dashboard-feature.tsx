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
    "2yoZ5ZmPrPgJHFwgvuBhgaQf4pPffAub7w6ogD7G7e12uTdiiuWVUavZbHdfhhb3TgjqxbZkLC9XTjJcV4pQ1AE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48otyCj2qbK2J76ARhuEbvzbs5qGTycq9F5Q9VesQXbqecux1rPNZZGJognyQpzAKEeZvvm4DNQgpxXFSTb98EJs",
  "key1": "5rmaJcfFNTGeizSSvFcfYvzvsm4b5a2BtVpPe2tTNnUB8Lrvt4LkGXzLayMjYbohjFEknGVHRM8oRP76PAFLsevN",
  "key2": "3avycbQuJePZ9AgvAZax5Kgkoszcw4fxAYYFLUpG3cj7aSNJpLSte65mFmvCY8gdxuMpoPA4MEdqAJpNYNk1KPZP",
  "key3": "FYtZMCcR7GPiEBMW51k4Qfewczfy9rDEBHkC1UhmMDLPTFonSxc4SsQdDG7AVHbQZMqAZbbx25KJMBZxJhTszA8",
  "key4": "3JqxEai4HAYvjn3hY2mfcMEs8HdSg8MWDgQAh3RDLUFtEwjwv4wVFX2onQ4mehcwp5MxY8fziwdDCeYKGsbwomSM",
  "key5": "5oo6uoB2mu2pcBpmyUg1NcgThFnMmdz1uBv2cEFCnHnLWyeMjf4baskDzrSYqbXJiDUxrkktKRutg4njg3MWKXjD",
  "key6": "45a3RFKm3Goj6ikfLFC2UUeNjCTzC1SrdNwjj2AXBcbf7Mbw9Ny5MAdLrikZk3kdebVoq5xVGeiyk9Sb5cvF7iVT",
  "key7": "2ix7hy8QTLGAg3mZjyyziJ5Zraz4Kr1NR78suYtY9YqCtM9z8iyxTPXThEDzHFC93kbUdstnTRsBGd3GuyK9Ny69",
  "key8": "4hyf1W2Edofg9JELaHadBFRrjyHGTbjqYLLjHupoZfJq2YDu3cCaYKTGaxXf29uQaYne64UjSD5qwQybUsCj68DN",
  "key9": "Af91yU1w127ZuW6pwScbNJGm8yi6JzvPRssNCMBcZC8snYvcUL7SpJ6YLeUV9tnQwpquJdWcvKLqnn3RhhzjUSX",
  "key10": "q5pitvhT2QBZRt6gDTG9rCJ2T9ugiVd1KJxDErxGvekKm1zZKA9TSSPY364GMrnTXsFShrh8H9LfjomutdLknck",
  "key11": "4kdbdGxamaPLFqe9mBpVXkpkQ9koxoCKUFJ7cky1ZkdwBBgRcca1CLXTx8hF82Pytt59uYuGEXKYPzKYnxAvQLYk",
  "key12": "3TVPvR1XPtobF35Pp1r3VavDDzRNvjp6FXNyjG5YUshRpEY7g5Aup1qseXpkpk4BBS1j2JgGD1NkSFpMkxGY9RoD",
  "key13": "UcX59xCiaEj6gJvt6zR7vUKTAmGvN6oiK96qd9Y6E3QYmrukz3eAotVUCdZwoQjoyHHuhjfWUA4nNWtKLpeeBhX",
  "key14": "GsrpP7aUe9DZ8aPEPEscBGU1EFz4enAvjZBZuHuykuicfFrumdKMhQ688qaURfSrRFfq51ABNAdPCgJe9Vjy9MB",
  "key15": "234bFqg4HQ7kAVNQUn3AaajRKmyiYanzaLikyXPRRfQ14UWsM9DVYaHcm3ARbuh7LmJ6tnJpTkNScuAtHM7vxR9G",
  "key16": "571vHvNoU72j4bW1WnttVxZckLYjQjV7djJMid3kphvVWSP5rwc6kCKaDgop7JZWyQEzhJDcnkKw1vyLgZyuzqAW",
  "key17": "2vJRPgHvFk2aeBTczswqGqpDNH4FyxtSjymKSES3yWn65fxh2GtUrQCw4QeTBs6ncUKiSi2cJosTYUKaMQbbUpux",
  "key18": "iBn2zNytjvMNgNY5TmQUqGva2PtgzVy75nQJAj8TXoa3dspbYsYj2BdGrG4M3ZzPhnSWHBfje2Lry8ZDuqZFKyx",
  "key19": "q9iepQdxYSWCjNkmqMQu4P8p1BWsqPMC2vLX75j9VizewCEDx5FdEStm2PMBcmAU1H71FDumLCvrGjcS2C5TPFH",
  "key20": "2F5DLSZY4twHKZ33LvgWK4mfEr52mXzbcbEtfPoAaT9XbLpCk665o4M6R9CBJVDds576DPBRMJuMCJo1XGYMkyGu",
  "key21": "VFYXdA2FzNtKPwt1GCWJQgRVbSu5gssHcCm4L57q3RypDGVeBoKCNTuXQjUoiLVJPjphsWdxGotvdfiHJvKUMgK",
  "key22": "t9uhSb8A8scud6zDmXKDiF1wrmw7wv2v1fx5qrTWKMtmyYwL4GzsqUFCXx8Bj7pYzm8f5kCHNawuz2zBtQWPxzy",
  "key23": "33SZsoQuGGBQXznGQYWvzZ7LZ1GJcaxxhFLFJeAFLE6nkt7ig3F43rsNPWsKziMJgAbie7dbrvkSE9V2J29vcro9",
  "key24": "oWHhFQBudSXXXxBzGsjX5kVCd34is2mYQMn1zBDk81M2qLRDUPSHQmpWP6aNDLaAVk4NYcEEoQrk4PMNwpmmAeY",
  "key25": "2LNA2Q8bd9BG5einDbdFqM7hsDpdCKmKLcVFNGnVRjkAm2eeoahqYhDHY1gfNTTw46iU7z4QNdjV8GB3LiJoEUia",
  "key26": "31YpSGbJqCbfjmAj7PBnmc1BXbsNBCCxZuuZkKizvyrjcXAkEjWNfXvx3SBYyTi9SGbaYRqgjxZd74nLSBAhATpw",
  "key27": "z7g8AEY3tjKMwKaQSK7qLqikPLEMXoW8pHLxf36hJbrC4FCnwoNF3NyUZvESimYKW9UowUCzVbnorCzPB84hJ7d",
  "key28": "5zCiRPEhSh41ecwdcmPY7LQtWTevnSr9gdDbgTgCesTFQJw7vrTv2w8vSkdbkr6S8MDmQ7uZxQQ2XEfr8AY4L5rd",
  "key29": "2LQyBX2JDd3mQvcfK6haSmQsjen7SB2Rdkdy5wj22TkjB7ErQHdBpCnkyHThuwHJbQzHcASK66ypUsoZju7WDKdt",
  "key30": "4udjb9YFgNhTUUnEVsDm4QqhS8xkUkCGbA3dSxQXox3BmqotK7J9Ssi7XtpGhGVSz8mv2qYctJWMP8n3FpyQYaUq",
  "key31": "4VcBgDW1af3RfRhaLJ9S8ELCpxA7HE7SUzzXt8unbXPPRev82BE9wctxufkDXQRXzbfLMHQ8btMRv2Wka9tmzLCr",
  "key32": "2NrJvh6txQ68dYEfsLEp2AQHh6vFQdfgBNdbbHaNPZ3iPbe6hEHUbEgRVfSzEag82LwyVbyyANDjhKsBHf2LHNqo",
  "key33": "3YbXxftMAWH8B7te3rtTnH55vDeCd3QT7MqTMkwDX3Kn4ZAtnJ7PB1Lvif1FfPk6ysfhk13b6Cs8tLGvCoMkwHVW",
  "key34": "4Em2DKgjwfAVrvK2xWRcSmTTrKzqBDRsRU5TRdNf2KzCg6A8djuSQvLCEhLd9bvKbQRd6NWtrEbg6rHpM9jkNdtA",
  "key35": "aDQWNUx44dER9Aa3zYMUVuRSHro9kbjEus4ARnQsRBoCTMGvDnmJRDMu97pmu1XiaykP6sfvUH51L7nShvjEFwh",
  "key36": "dXPnTXippkpGirK41AeP18SPwUhZjbdv6xSBNjg1xHQsgT5piiyQBR79K2ApiNC3nFGP6RRW1ZeQRV447zCbLJw",
  "key37": "2kMnDBSd8P9zrfjDEXYXiK36RL8w6bBoPXWRCYkGDBY2LkwuY9QWX8BwybzMxsX3VUALffo5c2fvKGVWHeuAXCwU",
  "key38": "45dXtxnP9oC85JheYaRwQataYZi4nD9izWqdsM7YuLzc6FVjPJYvYdQYxN5ak8f9J5juu2o67p33C6fvtNrNdZmY",
  "key39": "4VztWQDFNprzawEWCSGq8mE7tJnHWLVUYdoPV2FVBGhFQf9X3L6HDpUxUTSL6ALfAHHqBUWyNZbyg4uD7c7XpbVo",
  "key40": "3u8MGD4ESjMTsoaGek97zU5bHHmxHSpD5bD3HWWDdp4UWqu56YzHc6JSs4n7vCKq8KMkEFKg2vPw2vRzGDjj1pnN",
  "key41": "KxKWvhXGxk4T6TJzrdMnKMiVvLFKzQ6LtKihaQThsJ2vudhCBh2vioZnuS6kaHNvLt7i7bxTwywGLQpDiFSQSz5",
  "key42": "5xzsbPFyRwcKTXULFEWJ3uD3zBPj3cdULAkACAdUdZgdN942S2aHbKvMyLhM9tGx2zvgjrFnEvfYZS4u5GTRvmVy",
  "key43": "4EwuEqWsBcxAba33PDF7hszcPSvYQHDtVQDBQ8Sy5ApLFZZD3aP81hxgkPkPm1zqZf2dFjEECe5GtnsFtJspAtQo",
  "key44": "41JNJ4dP9XDkSUqgYveFC5sgC6ua1YEgWuGypo15bSnPM5pszRCuo61mqp7GbiZfMdonJ1VjXqDxSBTzKAsFXGR",
  "key45": "518Mi7PNH7sfBR62AbLEoeCT95XUsF38A8WKAkxcqsMzR6CjngmSsk4EZoPB8CVLFvGUNQctE9xKxsdnXrsD1RVA",
  "key46": "3CiQ2fnb2TzyvDRBdf3Bp6JqVXY7tP5GZhGMAV78YGjmeX3qK4jQmE8YVDMygQ8emNxHtXybB2jGFnngauCdjrFX",
  "key47": "3cgbmutBVjxdTQT5fNaZACgP5sowzgXgPMK3ArDaKDqzHHmtKCdkKvNivJQmsT4wMRSkr4HQMcCzFz1L8EbKudh4"
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
