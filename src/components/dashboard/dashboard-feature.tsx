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
    "4nCW1trwQ8gE3v1viW3g2dTpDkbgkZQRexFZ7TcJyqr54DRw47bA7xKpMb6GGT6MnZaUXDBqeNidNkBPbLeX8M13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F2kJEAMcf4LyxkhCXTBjK3fgLTtfkcigDyYuppW2bHna7xgSb3jHW15PCh5wL6GWv6RGVg9eYVPECC1ULZd4ukn",
  "key1": "5Jhiqdczd6QNoU4ZVvftmTLSf191kuK4NjgLXZGyqXbNcXZu1bNDJvwLikyEYTLpwDPeENjUdSVXhvjFU8oRJbcr",
  "key2": "4dALz5VZhh7TkuW1aVQbbDcXmLss7jZrRuGgMsv2XkzrPyBa9wjfn3Hs5VWTwA6xsB1n32KqDvarF9p5VQGGA1Mg",
  "key3": "34r3v8K5NstaZ6xFGN9exYUpHPLGAGhnFwVcZ1pNgCUCgn9o7mp6Z67t8E3fuNWFYSxFsCHU3vfLqWoTJX9yvfHw",
  "key4": "2Q3grQg2UtY3s3Wzz3EXNGwW4WxzdXkVLzpzCzjyg6Z7N1auGXXprRCGFBZe3Mn6DzbKbDKrKSgChsuzf2pBq3re",
  "key5": "5BfZDgnsXce9v4u5KwxqUMjuVWRsFU3BGckwPmnCux93ZwJJa4T86B3Am6roTr8dS6rxsghc2Z4vgHis5MPuC41s",
  "key6": "2yjrpXjFUtDUyhXbtxP1GarePuMQCHi1fhTQK8WFe6hVNPnKdMc5PuRYgXVb4PyRiHkofpdWUndEn6QURs81Z9Uu",
  "key7": "5WRt2u4YTKxrZe1LDoaRngyotxs9t85vtvTsvjLwJa9v2VAtTonHfMPHoEA7hGYPQH528H4YsVYPAwHjsnXKifTV",
  "key8": "2GTdHY5WQRTU1zvMMfwUiWf2kjfL36pxEFbJA4wL3BX4XryeqUnPp1gyuxL2EiNFaPHE6G1WVinhC4pCz65PRoBg",
  "key9": "2jEvMWXfXJEYU3gRu7UanM1wGPu8DiaNjHKqE41L8MVyTmxP18PczcJY5kGdoLMRZTQFw4NPdrmAJWnBju969RTT",
  "key10": "4En476xy5fYdq4Q6XLrJHGRBuU4kYQFjyCPy2G3JvmGWBXqg9VufKRc7zB9AYP4uCoXfRQJay65cPT72W2B2MZph",
  "key11": "BkiKTu94oAVNWkbuD63cephu9M6GViknTcRQcR4DSzhdRSZ224TVq3vu6XsWGa3zjXf6Cmpx7m3QnJ6nYXxR9eo",
  "key12": "5nt58tzrx1e2v71TGsLSYoD7zwA9BmNQNrty9TZsjFNm39smhxpurrfa4TBpWwv1M4h6L44wrfzyaAYVFczgyh6X",
  "key13": "5CXH23ruybLvGXBrfWKTZcvxSREK45mA1SN4oBvBjF4dqy1ztS17LAgrUzVdeFq1GWAq5Y5g1mpq1Xn8QyKkV6GP",
  "key14": "ffkrVw2v8joxeSRv8bfDLbrFqHKigQTzpyLMGhw9J4NVjyXnnYYvWQmuQWs4Pe6TRfFSmka8EWdhTpDTTFoGZRd",
  "key15": "4Be4RGRA7kfnPBDTXqd6v8CTF3nic8GVcEkkVVUEuB2QNkKnaSuopi4rzPbZGmM3i7KD5jh87Q6yzFntACHC9LZD",
  "key16": "4MwwTHp8Duz24mv8YocMtsydwQWgUdzpLog6qBYPSX3mbQ8gBQoc9yCBYHkNa8vNtbeybT9qpP38TTS1WBh9BkeZ",
  "key17": "4wqCrnHfmu1GHG7NHJ8zokxdCCdUjrXHt5eQuiVW17Zx5QNvGSNpBJHsbVXYyDJkeAtbPid4XdEHCmeJhS4wj4iS",
  "key18": "3FmxkYHahnP95eqVzTPH1TZRouVmQ13sC5oAkNCVtfDHzFVCotZhbDFw2Ajhab2nKu9X7DD8jEdePLTE8kXMcM11",
  "key19": "5PdvzByxuRKDy1qDyJJT6wiK6GpAXrZZeE38oCiJLj5vwi2hk92nUij6EUecYfPJR819deongGMwba9CtHHKr2Ah",
  "key20": "3A7hfzHu8LVXHQdJcCNVpUoJPrkcvWCRUDkReqAZWiJaWRFQp8L9c6t5fprqCJcrdxwwMfhzSzBmYiJEZpifaxRg",
  "key21": "3jwGxSPyrPemdoZadNWwhTmfWoJevmnEgo6EAMbuKSfVZ53cawQM3zMJzd1iLHeh1TZSffbzHMwAeyqw5X6dfJ9w",
  "key22": "tBVJUg6atqyYULYhaAFBYgmp3WcXwXG4EGijcKPh5wU547SbpxbssfmjQyEM5VbMXqMDSEyJZ3aVgR9Zzp7KwLV",
  "key23": "3L194XiSBv4VHrF9GDR9hqLz8fHfDM58zsSorYdZKFbDLC2Yf6Ux1ANwEQ5F9S1s3VHQ31TAjNpiTeZSWqwv9YSK",
  "key24": "ZRWHgHmaCsULHR7mdDvPgP8sjSboG4wfrJchhRwn9uSnstD6jr5FSFzSH8wSuaVs5GHJKeYWhuuDXEoumh5vo4b",
  "key25": "5dkn3VZ7mBp6rgYwYrMAsUmVEVAEBT9Vvb3ugKhLU9KGBHzJ1z8t7BsbercLEYS7nRgMvEjgM5ha5aAJEZr4oMcY",
  "key26": "eU6udJMGGBjTGviB1A4ZhLTCSrB9zPWcHTkdeKMPBTvsn7mg3juY3qDjfF6HPz2rRzHXCCz6UNybEaC4mDNeyb8",
  "key27": "5eVnkbnnVgqQVx95BoBJ77ZzSZgt1tSvmyvPaZQKHxV8MG7vEJKp5Tp7b6No9LXefMA5js2Fv291MQ7Zt32Ryhey",
  "key28": "5d8AbKCNHjXGGtjjibLPzcvE5jgaURCQ967w7qkdh3XPQwNEgwAryZ2XFKypu6Ky32mbwGHWzVcBWMqf4o1RrFkS",
  "key29": "5UWwfFpu1EcQgyAYmErdvn5tqPrYGNPNp6fuSzbwyHewePbpr6FAQwm9YFRuFbSMWtXor3yprEMgGyfNJWB3ybVT",
  "key30": "g1y9JaLC72XHwVpf8hpoWeP36aqFGmvr4Romy9htUnWZYP4vTV4MMGtYGFUhf6CKdM1nGAyWEWRM31bZvxPQ1jB",
  "key31": "3Pi2JhzkcVfLcQUPgogU1dMgUvPQiarYYNjNXZjYuD53B9krr9JM7oi5ah6BZRvhGuv2woq55MNkvzRFq9kGQtin",
  "key32": "2rPsLprnVoaFcgWAa3SbuKMxxioX8skL9FUo2p9ujKpUYNpJkQky4UePDDKbZdCN3AYHpPwWxLPj6zfbkPfwbHm",
  "key33": "4u17B95S23cYoJWkAaqpnGLNpN5nmfx1q1KTDk5XaXNbi3NU2VmYSjy8qoJai4odw2eM2mLyXBtpydqKJTDyBZib",
  "key34": "3rQ1Mb1XxgmyGrYsQHLhku4h9miaNgNDGWvLP4iqZh6SPaktDsm9hUVEH3Mu59GzSoS3xhWnGYsLgrpEHpGGb8cb",
  "key35": "61ExmeCmb1H39ygspVtUsGrLMhUyAWMN7Eb43U2gitwTu3VBgqhqk7ContCg7Qd7nY7pGNxtYd9jNUeSjjNdNFf9",
  "key36": "4auyKV4z1BqnvUX3SYcL58bGGCyg3BWWQRFKgESFiBEKnpxZKVMLc4ov4XLp8811LLx39CDZsD9oS1fXgsVjp3y7",
  "key37": "4UjaZ238TihtN2ujh2EFRKvKgK5pa3zznZNrEFoshtuRwj1rMf4CMeaVGDuT2QspLqPdgQGvE8ncYFE3Ajkf9y96",
  "key38": "4fdCDDa9cUD9YZY4e2gFLbhhV1UN5V33wNif3qCBTzezVHtuRBudpnhnKcKXBLrMxHBsTSjKjG2jVrF7VeghKeBc",
  "key39": "5mfQYRtoK9DugeMSyamLasTeJFMzWhLqrJTi1P8zz9V7ozHsqSRdjFDmabNcEjob2LG1UnavZsDXdAxJtVE4td9h",
  "key40": "3iZsF5uyTop2NswLTwC9zr6KzdXpNBLWTJQrAy41W9cqjGZnjnggzmZGDDmXC7GLPMDpyAN9JiRX2eVGCCswfhkr",
  "key41": "25C5zdnq76eghpcdJYoPTFkMoTTYQRS67NKVp2gVTRpshTAzZdTV4cvufiW9p8MTs6WapqJB5pee78cuRPWN624R",
  "key42": "4CQZ2f3m2hYucgsNq7jYj1apBRbM4zdYaZCeVFJfRNTkbYeMAFZbX1TUh29AwKGuSw5dDRMUaw7tSQYkEghE8HNb",
  "key43": "E4neKyCH1gjWxJX6XToEmvzg5ocbRiL5SFAkGioVsaHdSndFNbiVxraA8acuf5eegAjbmHRPcmGGUpCB5cL3fST",
  "key44": "47KxjxTWFmvbkpDTemMEUHRmUjheHWw6UGFZ2biZSFLCEFAmgHAst1DifDrwBYDGGDUTU36T8tp6VFeRg217c81J",
  "key45": "3WPD347bwxjppRfiNLXpTpQAKBFMYkN48qzuQsCJd9iVovHasmskPse4KPMTmo1PKYBZd6hbgAHQr5Jt4h4c2UTY"
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
