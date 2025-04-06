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
    "KvdNFH9sivUyNkmtdh6jc459Lv2otFduZY31zRje9HVGBavuPUeqLKhP7SBYND6d5Cyj7WuWCb7bZPFnQ4mW8Ly"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DDP59hX6eiymp6maTmAT42KR3bvqZpYSseUhw8HWDP3iRyzQbRDzx7VU9LwEAC2oDfXCRMmSyiYAziVWpH9xxAX",
  "key1": "65J9Lv5de98nhcrYGAqzoUXvNfsgUnEVQUmWxW5vNtHsFT7qv8jQSpE4pHHXNg9Tz6rRt78eUahKxabuyAVNCqry",
  "key2": "4Jj5rnGTn8iHEdvKFY13DVRVuMfWVqZnCTik3qiVPEbZMNzDhjD31BQTunaVKRbpxpy6Q6QKmJ5Kzqp4vQu1wdK3",
  "key3": "5tYh3P9oSFRdLeits1nxprAkytPdmTgb19NwXjNjsjCVURpaNkDwWf4BxiYNQvrYH7EPVG8xTZcvHoB4f65im6CZ",
  "key4": "5uD8GWWU2xJ3QozVbHPUsswi6USY3GdkZgysTGkyizLT8X6omNPiZwajLmwJ7qjfVtrMSRWw4ZaSsLCBiWfgufNn",
  "key5": "ioHFA4gGRdXRhiG2KNhdc2AgxkPuvr7PuxgxpXHPzDsP3FGbWSKez7h662kzzPkJ6ezAxDdFUHgVQnB8m5FRKtW",
  "key6": "2FBLpYkzzWRB8qMjXLsgnD5WpuiuiM43WkF96hdQLjPoBWdcyS8hpai4rGZE3bCdtHnNDr2rvdg9v6kaqW3ZkpXX",
  "key7": "2uiiMVg64ok9UBPtH6nY4KobLutrA6xspXWC5yBwjDnQe8DY3RLBQba5QFwyPrx6rVBZWt4vaGtRsUQ1t6b7kKia",
  "key8": "3No4L9QsVuecqwHXJukjkjP5XRNXDbB6L1SgCsb9rHo3Vy4L1FMA1DzLEXVwpW5g1vtJmAoMqNXN58LEoa1zKwLv",
  "key9": "94XWgEFrYAQcRzbrgqjnqUiudzuJYUtbmBhhKcpUQyixvpY8WnX559L3wv7pYikGebhw2YHZ1HWZWAs2xk7pTRx",
  "key10": "dhdhdo7mnd9hvaAP3eqiAVwsHVL2TdH4QJUbJBAm1b41GfSgDqECuSijyhNZPRKcgckc9YpMGqtzns1ekT8Lkij",
  "key11": "89GmKxek87eLCugcUECDLKbMxSwqEt8yLybBL5SHf1hMrWpFvnQZKZWYwoS757GC2pn2fUmMeJb5CNcTkZu1Z9V",
  "key12": "3GnQBL5MtwWjWYT7Jj1xWE8wqnrQyf3WjQrRjgghzpQi52HTHQLGaQzGuq8nUvkVmGdyCT1zBnoemWY696kHyGZm",
  "key13": "4Qv5dPPKBjeWiXjk4DjdoCWR3Jcc2B73HXXJ9dJGBMwzEPHTcYrDeDm13LmcPuuqLqQEybDEEFRHg7bu9bL2XbrK",
  "key14": "5UdFpfQzVGkbE6cjTJQus58nEC3EPKCdXqMpDFj2SnQNNfTQ58jhN1FNVHgeCgMf5MqW2eVTeuKmLLExhaiYSG4U",
  "key15": "e56W1AdvudpVk59GRPBZ99LiLJGnHeS2CCy68ZkreGHP5f7QZjxUEzxs19fHY5YCec3pLenQ8Hg8Jr9zUZcjv1c",
  "key16": "5WjuFC4KmaXHWtYuvp6hnX1rDp6vsAVRH2qPYXn1GCTDkRALzm5dEyzyFrDarVEpDaR8jWA7VER62bKpc6Df7FMt",
  "key17": "3WrZBakbES7VFQqwe3g2GNZFBxhsDsJnneh2UjGWHs5NN8QZX9aRXFVDH7aMSkzLNv98iarUmAZRu26ruLXaNqVQ",
  "key18": "2GZV3rr2rivm24R8RRxWMwaJK3F63xiDtA82DDBHWEFtnmDtQVyAi9APaMQMrUnq6CgQaa41dyCYVGWu8L8izZBg",
  "key19": "46nmeXY61sA2t5LCHW4Z1DKoevifeqXQorzAbktqkGCr54dqGcm7ZixwNBx8S2riYTvX8F8rXBjt8BmSuCD1Pcgb",
  "key20": "2zaRi5gtGfxCwJfk3mhNGcDJNGitAwcS3ofnw83uFh4s63Zfw5paNjpqytKGU9rXK7CsZZnNof8XYkaAA8dWEGJE",
  "key21": "UyMBxL2yzMUwX1Rd3kyNHGsNJEtTTbGcWDSsEzT9qP2AxaXDa4gYiudKmRH9PCJQ41rdnQftXGuLZSNYfWPNqi8",
  "key22": "5xR2ZYFrpbdMMxypzBiz5ZL12MgdHp4XLRiMRsqSqsXoL6re4H8oo7UDC5u4anzR3LXpoEg1zfGWriTUMrFGHkxU",
  "key23": "3J8M8zWea7qoFCnrccUXb3FR6WhQZZ78haBgknxSEX1XmahqPgYT5ov3uM8kh8dymnydvAZgKgM7cgwFmY4pQsU7",
  "key24": "4KwHHiugUV6ytfpoo4ykfAbcstadJyg7oVguHNZczXCngNRnbvHfAetvwezNEdUGUZh6hUuEcwku7d2HFAcrEGoU",
  "key25": "2FEtFtctGTpkwRZmxcc4sLEhqNqHnwxwXyBkWbstwseefg6ee4cBNV3qnHH7XdkEuQdtQJ34XwubCTgazrkGypzC",
  "key26": "38pBgFzf1DpdL4SoqWrgwwFpNrbe5f3dfFHWFGZT7r9UTiwpsGJKhSmAUnHEnSjXfLbxB4XYYuibvvkHAu85Fewt",
  "key27": "5YELS8ytEg85gbQJz1DdYp8VQKwAUMgjo1PohEW7kJFYSyhdPaimPWQ88J5zAMawDYdT16jJkMtdVv9YT8bEZXf4",
  "key28": "5qL6pgcBoKQHV9srWxH14DBCrGPCKq715Ycpr6hm26JXxnVqx88n5SjJgjHJgXZL16JLYJLc9YKQDM74rctAVyg1",
  "key29": "3ZWY5LrFfRL6LecUynd8jLgwCE9u1zmGvzqFs2FJ5xVbFDXQqbJ6gdcR1d5uDZTKmgXCBQvZAYxdWRzFzLPAZ5aF",
  "key30": "2vcyqjXZ7j8TZJ4R5iePCkuhntuXbrrUzLDBhsPcuje8U24m8v2hnFdWp3MzbRH2SYAycmYcyoS5k1nnRx7oMRjG",
  "key31": "2BmmrZr1v3DFCAD5Pz37XT3K9vdKkEq8cC9oyJkZeSWKp6UtzJ9hrZbY3BPfBYVUdMkyZkyHs8AKT2VYNDaCcdb7",
  "key32": "5PPWoDjax8AEP7Jp15pdBBuadMeJ5sz3y3FPqY6uKP958vBHCEA7zfnoTVHjQG44Ytra4m3FCb5aeykVThNVcFMu",
  "key33": "BQHwgnV7HexTSXLx76KW1w67TVQgPEinV1P2aoTzHq1sjMaqf4sdHBbj1UooftCskx18JwX5uDdytTAwNywiMdG",
  "key34": "5a3S2pngv1v5fRXSKDpH7Mfs34yKQzs1f94hg3rfHAf5yrDBAquXptbdenkwpEA7pGJe3YpkXudD89ny51v1aeWP",
  "key35": "4suieANdSdL2iGYUTFbT1pwAkkkcgfXPP1cBSoc31SEKxKW2WwAVkF13aF2hNymXYPXxhUXRnRNzeUF67fQv1E1F",
  "key36": "4XNpqNgj67nFSQswMjonLFhUxTTcBfV4HHSjsFqtFv4mfZdFpuSY3idR4DXaUnaWzFkzVNhGoLWGn1KA6rKfdoTN",
  "key37": "584KVzVuMsXtx5GFhyuymJi7me62rebsr2i432LVgDiiMaqKCKwrYPtEmRB4AKX8AWUixx5jKNtwn94DJFTFAuvC",
  "key38": "JSduPYXF8cjKzDw5TKgd4SCLE8dXAkX8cTtKpPxyafSuiSa5ACNLptBfEAxVH7XiXGoNx4rxpB25zEySbJrUZut",
  "key39": "58KbfH6G8aUr35jcBpPE4aWx88bg6qbXioQTLeF8Prgs16s1un3xDbyUuP7mB6UYAPi89JXKhejntRNPJjWc13Yd",
  "key40": "212WeQn3k8j6Bor99YDYV5sQ7URKwV3yjvFZadCaLx2BrCVr81fmL5AZWhFE1uYF5Etn8iCFXJ8K6m7X3PV5pXGG",
  "key41": "3ueo8piZGZqLedw4mrDQat6VmkirCgCbSLZBERpWZHBva6Rp7gfxbEgzrS3WVj4VR6f29UFi6aQ9jCixMih5x7hn",
  "key42": "5w7LmqgakPZYDnzCsZpZSzugngSwotv3trkiBGch6jzErr9crE2SCYCr8JG6BU6H9QPoY6jTkRjfYTsb7RBkEfvP",
  "key43": "2dzeR4Twph8XDwwiwLXHETyzgGaD5Q322m67YzKi1u9eXkzsqqdtsnC1myTS52xHonEkQuTJajmrvfGsigRisKQE"
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
