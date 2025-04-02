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
    "4ye2sf38gfkniWpuRrqXP6VT3HkbWrqXpMYZDqNDjaQDnsWyAC9LynkmdZkQNTGXQz9BG1PbeUFipMqHbKxSUqsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yegJF5uXFKjSwdcAGvkSEp2o4viamwmY9Htp5aX4RZSxzNcftKEQryBeKYrSojrpQdHhRcFzTdoZpJL5rbjvpqW",
  "key1": "27qRjHSfQv3ewBM3to7Vnv9t1fL79eLBeeS5x2Mg9WUm71tnztj1fh4xgmzYBM8QWYKL5FjJLe4tjPJkZqcvUc2a",
  "key2": "4fZjPZpJeGraFSeJG7Aw12Fb9SUvbeAHDqv2yiJqFpJvvdSHp2FNdUgLKSE1eda2pMinD65UmTB8rx7jF6ifEoDf",
  "key3": "4UqdNdE3Pa8Be3Vu4i3xidCjvsbWLXNsMmuVbX1rU1SZTsjyFi3Jvhpr8usToRx2Mgomc1PrA7nbtbbQRDhoKyND",
  "key4": "ztb9weKPctPtYeoNtxs6CxnoUF54iexcpRdx1166KyiqQ8WFB55Radaat7DUHQFnEhpCMbbDN1d1dj9cu2ptNJw",
  "key5": "3qq2Tfjgc7U3g6MbfJEMBuSKnyBSjTZBYAjW5CEGmRtwGNWH1Jenv2AtmFD4CNENLpo5V4sRmHjyMhV4nu89PMvc",
  "key6": "3WAvXrB9YVsypKzpunfuWHJL52ibxztRUkPD9ygfxNZrs8eHtWCKkrRwJC4PdS2gwnjppRANwkGPEeR3d9oy3aMo",
  "key7": "3aedmzxDUMpE8HGJvabYVbPKWfkRLBTriL3WkyrfHASQFQmquGpy6RVjrbNaPj13473TcVPdispbE1GZSZoevk5L",
  "key8": "3s5HAkXiBUZHzNLCyWTvE54gDW2snCogXut1U5EvyEtKK5jThsViDzh3LYfgk2pUNJv5VPzdLF2rBsztWEoYtbqW",
  "key9": "5Spau2TZiEDfViyASi24Sq9oPn7ymeXS4GkW8HVnqpFWviH97FrbiCJVuzjnP3zCedGQJc6Qa58PjvATqusKxVyd",
  "key10": "4jfem5KxGfjB1GUTCcNd5u2PziYF7Nxa4CiD5YV3uTkk1W9axMRs5xxQhFR4LT3sDpwe8yguPHRpEFTRe3q6TZyn",
  "key11": "4tMJzJx3LTckMXo8NZS9WhMxVfQ175ms2gP2mdfK1W44yqRDQ3MyRB8k2Bean9QAodN7gvsUco8czDNoXvVxPJm7",
  "key12": "3Nz4Gu9FPeA2z6UhBsLAnH2TGrZTJoRfWdd2ZdwabU7YibaQH7uFETuBMo7aoURVgVYeREaEx4FJwkqc5N8Rabr8",
  "key13": "5STn7scVzKXtsfxa25kDTRrYYFuSVTgb9oL3ATpBx8on8VEA59Cd4nfYQgNGTEvtUxjxNZeCbCy6jBpgZkFh2bpt",
  "key14": "2srWNyaRgg6hpJ3o88nBANMgKbrpRwyKEhcBQpD5DR8RFvT2eaD8DvyhvGpb3Lb8ukW78GEGcgj1MGy8GGHLFP9F",
  "key15": "4BEMvsaf9VmaJbiNtmCZtJf37XCAKRHFWVkK6U3yU5Xh7fKStJE8H38iALBNowPfVtgWshEG5qeWz5Wwk6kf8zhH",
  "key16": "5sLhy2vtvTZjSkb74aQk1P4BTZY7CN5p4GCF2sf7FkSkn5BZqSY2CzKm3fpua6zQpnTyNfYVgWJciaiSx5UgVzv4",
  "key17": "f5jsJCU8NAKcHtcfnmk2Uunb6q6uZugU5UuV5j1TSjTg4ZEwnAR9hSKWJRhLL8wiL4tfecuB7TneTWqCGo7sEQC",
  "key18": "2dKCP4QYXjht6ZQERZ8nNh3DRej7X49meufX6qbGjVHDK4dqq58rysDSwzvf5aDLaux6WTAq6UPURFfALxdVJ9Xf",
  "key19": "TytgX2f2u7EuYMqmFnzKGsewpogaJYzVZQ5YmsXp54SUFEneeYcc614qqefSsAiZUYwBEn5g8XUoje29q9RpUJp",
  "key20": "3QJX1kraqJSa1VxELrW5nsLfVfRVRnmTf1AA1JQsU1sFBAb2vatHomp2hdPP1FLjRciTnyBuDpdHtNSyThMc7riK",
  "key21": "474j3k1SJu7A6ehLn1hSpBDAZYsNxXNX1yspqBBaT9s2T66fWXX5LCPjPgCLWPGbfSn6RdyHgoQsAYRxWnLaRknG",
  "key22": "5z39BEJQvu2gUq3sUwATrQux73BsNV28VwVUiWcB3yP4zHSXEogHTfbh7LLneRw1LoMvJbFQffzWNJx7h9K7uuQ2",
  "key23": "5GTDmw6aDhSnybxLZLFWHU9fYJt9sEyQGLKJ775hJe8MCkARdKW4uRqd1XLbPrJvWZ6WLi9zzEMgNvZoHpLhXCop",
  "key24": "oKncJ9ps6pkehvhJSvFwCrQ9z2z1yxHmgQ8KusiuNU4ZGNp85UodySk1p1EL4Vb5grWHUjP4Eke96NfZsWFJFgj",
  "key25": "3cxexsoHJVqdvNpKWAaiZebgDj4XQ22hXyLN3pzypXHDLyRasJjJd2pHgK68W4ABm7Zhvo1XDGxwLuLJgXYS2Nkv",
  "key26": "52NsYGTb172R26Ntsu3R9oNDZXJqgye93DZ6Z3oCNnaKaRhP4RbNkMeq46EEMm5snCJxm5vozhBqnmusMCgPBGNG",
  "key27": "5wyLrDAGWPgRer2KQkeMFbNojPuUSmrYZpD3Yveet8M4c7QLZrgAPRLn2ZxEStY1DFNvTZDPVc4k3BKj6drn8Ts",
  "key28": "2R7eBJgdZQyDTbv1zc34ogasoQBNJxMqxN9uxMFwFSicpfCF3txpQVZitzsS51Z5cVT6VCb6f9ZkSbXQhpb3cNHE",
  "key29": "34DDQxpNsobZmKA3AfxUCTyCx8kGWVzuw1NKtXLgLX4QtVDzTL3mVvG5WCJQXbGZ6YUkpwNpE9U1rZf9a9TLVdT6",
  "key30": "32QPa8i3j8iXdrhDYbyAanfW8EyDgmk132GrKLmCEac1F35rJkhAWKv4taV1yrGzjpLCuK4jMv4RUaSpUzzh4ZQL",
  "key31": "3tn4E2WAhnt6TDDNuW2o1XEd2U4mZVT7Rwyc5gm5Ka7Q6pR9eGG6KHaTBYgAFKsbR52zPBKTm4mqefL4oFzgrZPV",
  "key32": "5G8CHSSiqN9PCubeT3CeBq6i7meU18Zo8yivaePR9YTuAH8zyLntvbS2zF3xPey2xponAjT1QwTFjzqhoYKTZHgj",
  "key33": "5QvD9V76cfXKQMh4GQSFoq25MHZPbMM8973p2t6L8KRGUg6WKjM8psMgRGAyKz7yhW39minVjGyn8igMXcDfrCV",
  "key34": "365ipponnyoXHWjRyhCkZG997coDFKTM7Zsg1jKxVimJnWifikMWw31T4DqE4xVagxqZHGL4QJNNChbC2bsH4wzP"
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
