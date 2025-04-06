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
    "gV3GGRJncoWoHuXquHRai8iTd7Tz1TnqJScBKoUGmKzBMUwBxLqjdUiv36Lf274neT22RpycoCWVUUoXy6Sdf9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k1MwxL2mPE45kicYMG8ZroGvdTFyDQ6qha5eGrUxYj1c2b7SwPrUej1Y92HjLnjmvUcBCS6aNxtVjh6fiSDs7pr",
  "key1": "2zWi8TpFJuk1z3faAGg72Dfj72H5CsE7ZCGQybjk9u42v2SHBWQfu5AGTeBh3fVD5hFLdMdFENZx9F4XGtHZAHM7",
  "key2": "6ycGx5DDcMJMZbEA6yfD8sHksSaAyxkLa2sdaq1G42LbwszVXyoxbdyybcppkhsv5T1ghUSoRHg65WkD4B4PUia",
  "key3": "2dy5Y7Td7nMiTqnYgUCykivio13C8e2r2Ey26eutvx1ynV3YhbePiKf8oxeFp97BcWz8iPV2bCWeBuNmAKexB67a",
  "key4": "3QGoJJt5BiNXbhd1BBHqTFLd1KWgG8bYNSBePeaXJ4rVx37WiJBoin79WYvG3kAihqSxanW3ZdAaQSWKL2jqAqSa",
  "key5": "4KgWieYPgtgTDHRpAR4rFxLc5zkzwCQmJrPCsZMBdQYE1nYUCbixyYjm81qMzy5SELDPhWCZUyN2JVG7jsPo2Qo8",
  "key6": "7r1pr1g83ocX7QS7PEp8epHGkEBpLoHxfGvuruEctCue9wjttPNxCCrvRmR4Tu4rZgKoG7PZQ5tPUfs8JttFKga",
  "key7": "2gtBFbJuYm6zEUj6t3it26bRFVweoHgwHRRqdY6LUWq97EjR51YWXMkmmzAjCTzxJZNyqVEwbYbShsEb2ZS1rhZA",
  "key8": "3yhkMGqzjQaKZ6nkDMuN4BkegiX4NoXzDXdWv86ikvB4dJLPjp79eQP5hDjPXc6Akb1e6Zmz45bYzJUjADuM4MZ7",
  "key9": "34N6MQiSRLgqd5hxJvTisCbjCpr8XC9aK5hy19aEw9Y5WUom6mYgCXC7jzzJzstPctjSbdzhViNdSsnU6w6zfgQu",
  "key10": "2aTkToZAXdySKor5bbvm4xZNLF3h1BBiFuY9SgH1v51S8cu1Zs4eFh5z5HnNbBzvvGpBK33gi5vnCADXu1S8rNF2",
  "key11": "5jZDHKhfJKHQkeFJFEJbeTSfZZD4zCUm4shJfzxaWLjzvZTbkrp7GEcUQYjtvYv7eBD3Bak7rJbd9BgLRtvyqMVk",
  "key12": "URGi86YUBDAB9fjMFnL2sM2uHb7c8anZqv78TzAW5qPAnsRFTGFFTx24Z9MrxeEX4QtNEvnLqeGAqtzZ1HpwW5L",
  "key13": "2tbqh36S38qzpxz5tu6mKNpSQ2GzgwdHVL4xgSXexDNhahWAEziEJRRnD5X9T8sToH5oboySs1YrpTvUwK3FEkkc",
  "key14": "67FHEGeN6WkRhH2Je372BqkDW8KKqMSE9BoGtF5aofhNqUUzuNV77Nw5Y4Js98R24mzcjdXcPJYwvwbPmDG7zWpu",
  "key15": "3qty9EzLEBCJ3R51xMqx7cKrJkC4HzRgWgATYioc4mhWuVJWHL3EpzMS8Sk46kjNLgqC6UjrsraaTZEko914kR9w",
  "key16": "crExJsXoT7o1XYuMagFb3ZWtz8ZZua2oBRCmKAy3zNqEpBYrDE6Ux8Cyx5J7Z7nqBj4b5B8CKkYhkgi9a2yNmUM",
  "key17": "3pBL5a1XzMhFH1UK1busFL2bzg994WBSdiUDjmVVAYwC4E8sXhWNfFXH3pDzQDehuVrAck7gSVfNRz88XB4S63js",
  "key18": "4angVU8Au5D9pGdbeJGwpz7E5G7kqPvvVyDTn6daPLFW33DcjuzdRt2bvdErYM4VPhSmZAizxbAhohhghboe1BEx",
  "key19": "3gUjGFYTDWXUbPQuXhz5k3F6CLNHDw53mAGvWnvazPqq5uba2borQzxSHC88SWx8899ZZJDtg2TP6u1r3EcdRbaS",
  "key20": "3gKVvKrmjF7k5XD7zdLyj1JYPVmt2dE1rP8EfqoZZW568Pjd8aNeZ9pYcqAku1PawJjciWKui1YoJGtFkSkMmFmJ",
  "key21": "2XgxfbGe7trEtioc57HYr9DdW3CYMmuc5Dj4DoNhD1YiXaaARYJyNn7sDSnUS4DRraz9XN2Uf1fw6Nge1rUcUXRw",
  "key22": "5of9hYvMXQiwA84yjHrDyyPJQETyxsbqhoArvpSstMKVWFxyXCJWM52sGUzBnKRMFfSuNiXJHam53vamowQXHznW",
  "key23": "5PvyuwWdvc6SDJrBqnMpWBiAfZVQxzTzeUCJn6p6zoJYRcrMr5Yq6LtkgqwcN4vPUcrdrDihaqYJSi29at6ZoBLX",
  "key24": "5grmiDqU49bem4XXzH3WJzvC2sMg86SrYnrFNRNow5e2u67QYPZ2R5x9gqxghtJa1MwCn6834gRnFbrBVmfXwjh8",
  "key25": "v5BJC3xoD5X2dqqDwJo4HBYkJBDfD8YPpFi92pXR828tZDRr56eUGsv4cmADWtnnE2koMHKEKiKBAvYdokS3FF9",
  "key26": "2xHb9HgkSnohmxEMioHF2duZXxSho4ibRyQ7G6qNyXkeHTiVpyRpCnqzhbsEBYr5Zw2QyPq9U75Y6P9MyAgZeX6i",
  "key27": "2u1vdLZSf2rNZr5oHCg8pw5DEj2xj1mXPdzBy94p5gdWFaGe9AGEyLDaiThCDqGZftnbbaQ8mmif7WZjZNhG2e1A",
  "key28": "5sMC9CjuLbTz5rzszBYfS9NdHKCCxmmHQWfSnDevgyLBh3HcqUFogaXif3Pw5tCpkvHLZ2jy8AtCB7gMpjYTsauC",
  "key29": "2Hw38uNPkXn5Nnon7zQ2ALf2H2UsmipBXgLZziA1dwYxda1q94hA9NXLZn2uyxkrv9N9kZhSG5AyL4BdAWKNmRht",
  "key30": "4z89dGCy8UTWTRCXX3xjisNztYoYSBTKYEErVNxfgRYfTrFKxPNZGWmTdWrJZM9sEgDYbtoB4L3nsFob7jPPEzTv",
  "key31": "329XaonKHKciM8z4FW4w58muH6qzFK6XC9SVVgRR5Nb2f4zCwdcpWGUEwHFxz91zLri5XdWoPa74nxHg1pDUqfrm",
  "key32": "8jXjnuU4HKyooY8WYV1HWee8ZH3HJ4aoV7U9WZQkPt21m7EnW9TAdoj82thBTd6BjTyNFNYiTQBkZMGwZMon1b8",
  "key33": "2nvzkYMQP3N1wDFpFwP3mvorSRnBtTSkgPWkogAoJYJ4m316tu5oiqEMcgPG6oMsaPZUfaPFN565wc249aE62Doe",
  "key34": "3W7n3ZmuD8YguzCqCziZTBGCToWZc45aMzcS8P1LBDUbLN4m8qtPggX75jLS4LV9XNHkTwwEEgyRaKKng4VHFHta",
  "key35": "5DBQLBAkp4Bs7525hLBWYa48XBbqA5qVEUw3AAXU759V6PUt8HUzgCbp6RVKpSep6HaSbHc3bBXQLbMDXmd5NPn4",
  "key36": "cL72PKySXKTEVJmzCBZ8amKAC38jdPCcnHbWkTrDizh6LKD8wfQoHqWVgj2K8b9GpFGWxnfDoQiAuUouUbW3inT",
  "key37": "3RNjFg88dfAiLj4uzKpJPgvynLAd1LRgDtw2ZFCR6sVufnnWYFDXz7fac17DuRtzGod5zP8uKpi5Mfq2yTAeJHEP",
  "key38": "3YSEFS2qEg9MEdFUfEGdfbfduPupYg8v8UyrDaY6ov6s8DobJ8mPnpsne8vsrB8TTeezr5gwCoXpG21fscsr1veB"
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
