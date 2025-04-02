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
    "4kpQaXhL3jDDjzQBGW7bdg86ybcAjmewiA9pJSYCQM1dnZgxN96cUCXUpx3dh3a4q9mEaSBT4eRNShHz3dYDWTAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dKKAA9R8MB1HfBZ3C7LG29YB7z6rtEu74GzLF3r5SxwCaQiis2cSjh4sTUcMz3FUsZynSHdu6CuFg5RH655LpzY",
  "key1": "ZwakPtjMEnAm6i7teKzpuygG9wKLeELqXaef4BhwPTe9byrnT6n5CuxjjVundm2BUnfgLjX278MnEx1Pk58BWmN",
  "key2": "2LqgF1ZZ7pZ3GC4CrpuD4hpTWacLK6MVciwJ3umZLpqK8PBGn5j24DCnBszwcFnyxgHc7kVki3TKR5KwMb6wtzeE",
  "key3": "3hRnUmWsy3JREHKHqCoMjNspasZLiyyTchYsoZtLYnw5uFwTxunG1U9fhfRnDYhCYBsF5V5P4AGb6MyRN94yfUSf",
  "key4": "YLoKY71fHgbpDXPbuspdbt4GuLNzNJ4BjLPC9V87EWB8fztSUwAqLnt6r2GrtejahwBKi4mdLSZWHwgJpri6LJY",
  "key5": "5Gmj2BqB9oAs3f6GwYQsWSPiryQ631kumKGhxpGgruyAmT6DmmHnC5CxXAD7XsPkz4oBvkxVMGS1ua1iKgy5Q1BY",
  "key6": "4iXKSinXcdQXdJjWRyE6z8Sv422j2rchyj9Kz5dVbwn8AHEwTa46TDJ7R5gombci6n9vNfHbKwrrxogFzfGf5m7h",
  "key7": "22MUFTfZDGsGWrmXx5QcD6FETC3MDwvViTkn4q49bXruAxyFT5agaGKB5xs7uKZZmDkrrnJNX9D3hLqBa7bbJpoF",
  "key8": "33P8bqSvduAgQnt9K2GoaPxX4MD6FERbrCUP1Fe633upht9kPo8JnNZaFYscd6Fkgee6kWvotD41FGgkLRbiW7vt",
  "key9": "4zM5hvaehdg5db2T8drPzJUiKcppaqiGRZJky1QDF7hYqZ92n7h5zbgmoh2VazKTV7NcKkgzydojBLQyDgP8MjJ5",
  "key10": "37GckkpUT8B6rZqg2bUD5V2GkABMRSH3pnd53uANqJF6z5A4vadYwMrTfbeHUzMKEF3Z2cgmrSB17YUpygS5RF8z",
  "key11": "5uUVo8kqxRBYjCzQcREgch8Nc9NsBAJs3GVrLuyCvtPY2YaHRvP3MkJAwoeHRDm6FcBoqgBziHAnegQ4uJ6Wj2d7",
  "key12": "2u3qWXpHbVham1Vtt3CbgAijYaWP5h58rj2ZQreHhqyeAFJ1JqUxuKpHPPEi3tvkhLQ15KifdMRRE8cJ7Cvtp1Az",
  "key13": "63aAbxGUEMyZtTdExwL2ZVykswHnjYAEPsRu6gebPeDrcv5hCTxuMkyc73131rC32ajVnhKXJdLHuNssvCCV5HUb",
  "key14": "J47P1wHm3tp1moB3ZFhxg18odx9w5sUMBd68m4B2wcy6XwDRhgiFbPTv8o2RuVrKrFyZm1ANczod1Lv5Wx6qexY",
  "key15": "3oV2ehzUDDsTxhan5SsWjGLhDCvGbpCcwVTfxkC7pob9p18EEbW6xuCendo8tWjWgboJXCrZ7HRtqvRCoeyMM8iU",
  "key16": "2ZSasRyjJt9SJun39ZHVXdrE6XVWsGHMA5ZXPed1UUkuhV67TAKMPe527at3DeoAxKQkWyk91bNGmXxdAyvgcV8N",
  "key17": "kwCxKJz4X8esXrJwL1A1vC2X8U8XAV4FjRojMFpRJ5dahF4xEAqFmvAuKCiKqrXsEyp54PpE84oLBtSzw9YLZ1L",
  "key18": "2wVQNmWZqsQH7JTwJbYmW6vZB8doxxTwadjEfXeMwh6Cz5MdHah1CpEkt5GrRyUUG1SSFwGHjY6DJ7VxX5DagQym",
  "key19": "5YeFYN31TgszPb3mxPvu116rHnhM7viGNvtSDigaqcTGvKviuhdujm1BLSoDmZST4vGqUi7nTWq1nWGTYFCXU8e8",
  "key20": "5nxxM8HzwoixDdWzP5EkLBT9gxYnckKdT9et3dYzEJrtfsLeD6Sx9DYkqmkpjmiU4gE7VhtHofxEJfb8xEoVunx8",
  "key21": "4j39CDkw59jkmTmmKsMEbrutDdfHkrWefYHnujQDzogkwQ1mjaHf8Vf8AyRTpUmPyeitWDm8V341q6DuYR3RDBPT",
  "key22": "4wkPR8ddAxgaATSuhLJfqLaXZLRLNJckE6J9GUTs9LnZKEdBuhJ7abUegv2UDo7P285y32LZ9WApNmVhfKYWAgMX",
  "key23": "8zQoTKajaksFe5WyR8JBUMgzmCGKvfK96qaJXMKsA7FKZRKiYrVkB9Z4wXBUVBbQ4oZ6x2RF8RR5uPK8rxoR2oy",
  "key24": "kautjApscAgVriJQHonwJzB5xqerQmXNBk6ngnAmjNqqUmrCBuDAkV92StQ5yJXjSEj78ZBcX26i8oQyjkQ37sy",
  "key25": "Mic1PRF1SPFNMoFjv29gM6BcH87Ye8DLkGEHpXDbNE2PiuYZnkAePYQN6eicnEeio7CbpQfvEUsNVniagsW9N15",
  "key26": "54yG1554Fs9GchM4Ps7sEUC2drL9V6HrwTzbtPsQz4dceTvtFAeyfba5JJXiLtHQvqcZGqPk5LBz8RNzSJWKG5hR",
  "key27": "z4remuUxEt8RzcaWVFSL6Vki1CpWpHqpmwa189zHExuP9U96R7dkKqvhCeWk2NJNhkAgryDTAnTUHb7muhLC2fT",
  "key28": "3AtES9L4cwRJ5UMhouXh7FBovjFhVxNnJ3Lg2hdEtEwGTd4FXGMorJdKwWC5qeSYxojmN8fwvTHeT4c63Zs7sNp1",
  "key29": "5vRk14Ty8GrfxbRqa3H2uurVYa8vFBF4DCK1rHvBwHah8Ub92t5Uv7A2kKmjqG7oXyZYekgcaCuhmH6ryycy2NBF",
  "key30": "3u5WuAkwihcikTFuANC1CUFtzRWudb6RgytxNZfsRrVrpRjW9xhohkixkgvefKJc7uEaNurS8BcpEkYriyPLXxZ2",
  "key31": "3X89q68Tp7radEp2jXshsiupW9zj5Q7QsGUaN2NFYmfCQaWS9NvfMSfHwd5ohP5eH7Ye31hNGz2fdwuwSVN8LTxX",
  "key32": "56vA8mDJq3bd2fqc4dqUqL2jnZJRvoHZ7aYX8jx9UcaAW82wmxGhoLVX161Aiqgq4cSUGmLAUw3KwMS9sQ5g6se",
  "key33": "36F2jBwpmJBLqeUK1HQgJVhLDrCbCnFpT2BbJUBLPTv5vEF6ko78rr9rrAx8jcHeBC4B2KR8HtVxTj1RsSoM3cSd",
  "key34": "5rmb1s5XykZv1zMTs5p2YquHxKac8RtCdUhQJKege1A9bYJ8RsztMXa26VRweoF4FkE2iuRBLiYVajD1cRjDVFNz",
  "key35": "n8LBuuE7Nj4GiHAwRhVzCAU9uFA8iShqkzJxz1YEDeyLivXw2LqE5dvwV5foVD1pHF71aJEM3ybGngTJA5R7es4",
  "key36": "361odjChtAXfe8AbdSwCF5772uK1Cfegr2pmkmCmjP3tT4N9NntNBovHv817zi4PJcn9QFwjq5EhGFvb7D7Ct7Lx",
  "key37": "4SwBAYGEsRzC4zsnGHsbGf2z91xAopcKsodpQ2xjM93H6rn8EnkEueyf1eAz4Z43c1AA3rx9J1tc2VDA3PpcAfXD",
  "key38": "3p4bFtzEdzkRZNfKTFDZVfLRjX1tmyHNLxTP2prbre15ngCZhgFFbzUajzvP8GPNtUueNUzFd1eKg6sGNM1nJo62",
  "key39": "37MKrmgWWteB5TGmtQrh2c7ycaUixxnEzzPZ6krFmv29yyL1GCRwmNSUAXJ2SobHZzQcisK48smdXEDKqdqkn5ai",
  "key40": "5rrCz31WdjucQ3FUAUDLKacx5u2m1TZ63t8xaYdJZtWqM6rVfbfnnB4wS48omLrkhWurYn9ryjNQFFcwP5NtSnL3",
  "key41": "4kdpmUo84QHApsmbsBdnUdPZE2L4ShdyFmMzEX5LNwFwrT3XGkho8yZ24j5KyfApMG92yddR47nK8xLmCSbyZKcs",
  "key42": "3a7irqG6d65xsem5EuEWwAFURBSYiYBh3vrJrbwePHv5QEHTdh9Aw7PW8PCK9dYWeLDsKV498D46RQrBB6wttjB1"
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
