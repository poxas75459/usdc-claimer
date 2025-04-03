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
    "5ZTPqnMA9VA1FtLwPCcr4jiDu324t1ZWaeXgTe6KVRYmJK1JprbX6AcRVu3KhvYgijanAtTdjjjYB7kRtETbeFe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m86yR67YrudE9QyqBBJvnEX7a5ryuNwVKbvEQV5NispHGLwE1UJyoEAvP1TPQnyKj4nzAFDxPvLcCwcZ9cgYf22",
  "key1": "BttCotbA3skFskQrgr3ghCK9hD8Z59StzDpBUTYraD8UWbQJzCUmZXmcUkgW83NJpLivP4nLWqCS8xBRTq35jhQ",
  "key2": "4uGY2DZHzEAALi2cVpUweB2hyJjRTRodG8uznJKijC1B1setCKs6mkneXcuzi86WhEzeceHR81AtYuU7WnVJ4uQy",
  "key3": "4rTa6WujaQN3EpdoSpZegNjtKY28FSpayhJ4CknbTWmQBFJVsYPmEZD5coDRN1HT3Hxd5bhFU7oRCPE1dCdCRw1G",
  "key4": "C4pQim7SfAmCZjMM71oN31V98S42CYkGFuctanJTBgiQ1PEqPd3sAK6uj6Q3fLjJipdEXWgBSZD55kEtYFxKnqP",
  "key5": "BPxVVc5Ced8wGVbhDKM617dni38r7nkKwMJSvT3W5sWaLKRy6hGamPfL59F4karThe1iCTR5zmRAUs854aaTnaK",
  "key6": "5RFFUA6UhPLMRM3oDdbzMqkV6LiaUekiYpBZSRR2hsNsrVoxGi1BdYsJ6LgSoFgq3H5jr8mHBikoEBRE7Y3YZmuk",
  "key7": "4tbPeXPp1qJawKLxHJHA8g8d5jgp55RvsbqNGAYkirrEqrT9NQxo2vneE23kwYJodkHwpVfcFy6SNHvc6neTyMcy",
  "key8": "VfdQuLPoRVBbTWtieccxodJ3Wd19pbMYQREm5haenLTy5LbDAZPD1ucwYy38ihWLoTQ63tfb2jrxJD56naPdqWJ",
  "key9": "2Bv8ViKVWBN54nYETfEM4yYkteZkqFWU99jEZ32qbiMzPijip6WryULKmiPnbHR18EdP4ji9GHKBsi6rVcLwa2jh",
  "key10": "5fF5EYCqRdsL2gwEU3bA73xaZXdu2jeQ5urpXDPVgqjGynNzPnNzdxMZPWFvCKxj72sEwuCGRLJAy1i3qDTdj3vW",
  "key11": "2fEEggqbJzctrji3jLnDrAkieaip2bucEYUJUoeFbYRqT4CUcgwT6MDkBRFFbV11U1DiWxccHLxcFjFf7DAm3guA",
  "key12": "5uvjcFwPPePtupJ3VitAVeR4EkE6Rc4stp4pjLJVzCtMNJGnYmHWsV8ARxxQjQgDbogaTiqJjz22zMwWDJy7kFG",
  "key13": "RpaEFQKu9YhzntywYvS3V3zrBKC9CNgTGbkNegqK1xG7C5N3ziiXY9HXrwE1xqt5hRWUixtLrPFeEkgfrbhHDVn",
  "key14": "5eUH6CCkeJt4UazpUY1byWBjtkqTtGQKnA5APmiUjdVj6QFZXBpXBskUXaewuY4kjWX27Ma1hpcLXGt3A6hkfS96",
  "key15": "4AzbUy6LyeJWb8n35DpDwtewURUFVdJbt4fYbf1xzUUEHPRmjLtiFu8454jkLHfTWRVuPmpRj9MjmeXAuF9qB5SV",
  "key16": "64Uvq21PEHoMRrrkPNNAdQFG6Whn9Y9Xh7feCUtaBWbc4fgDy5X9KKbMYCeiZJjF9sde2goSoC14h6RcxT61u62K",
  "key17": "5mUogFZ2BLfscENKZRLhwK7xPZC3uUKUNonUDQS9pA19dG6tW7QUUu7xM9GUv7dXpGQZ7RWwMSYwZ9y51NMcumqU",
  "key18": "4bfeXZkEvaMiivUKF8ykouMp6s8u6ADr7KieYzzLoSDoFkBwezaCH4HY5B62hvH7ULj57pTvphaDhA92owtMNKGc",
  "key19": "2DBKhs3VB3tFUzmwjkjXZP6xCUqcHZi6mpj3WvsunJoFmWGxXi2RnFwhhYLkiNqrUxQdNXinPR9rhCTv8ndgk1se",
  "key20": "5HBTAaJrDdBMkrCqJqq2n6fNDjwJdwiamzNYfq5ua3WJP7JF5Rb5pFT3TgjX7MF2Hqwcj9ScgiYeVovrFWYi6YGK",
  "key21": "3Pj89KUxen5wrWpaLXfkYb8kuGix59SV3KsWqeKxRirktADvjLNQGw9ae4CaASxioC75jfmjAYEgxazv4aPbrHEX",
  "key22": "MqW3TocVS8y2wak2rwTvJ7QcR6YHRq64uYLj9KKmPAZs3Bj4UnuEXosFwLr8MXDr6Uzb5yKi8aVPPYpkYtFjtyw",
  "key23": "24PMNsY1SKsHneqtXPvU7pZQKDbfMDSrYgSNqfH6YCRmmPtAR4ApaqRxm2ZKEpfiwd6njooVRJPTgay7tK5frQ49",
  "key24": "2rEbrH9kTtqj3775bUruR1JVRkJRg7wnt8i2KjYaz3ViLaHunFwRwSWZWsdDjzuDgBDzWDMRwjPp3dfihq7mLMXi",
  "key25": "5hqJSTNetjW8kQRZEnB49Qmd64Aj4BRLnKzcDFzz5g5XrLK4SiMjZ2BML9xKJeJVQWkLHjHtnA8WdouGR1RXYsSD",
  "key26": "5KWbPwcuiCVGm6EHeYrdMbruEiBqaWD8s25eviWJoo1jA7XLuznGqoaUbpp6LLCPwJ3D8FSfvc3UGY1enNyuZxoa",
  "key27": "JS1xGxgeXydqSK2LNzh7JYPAE1KT1ZuVLjeTLGsMUAhC9VguE13u3bjspwPpWrVG6TZYp8d8oEjG4k5e5norTLf",
  "key28": "5tMVrt2teWgnZzJJEyawNWA7Q9B7XUxxMy12q4Dq1UasEeSLCwo4s3TgrDi4ofTXgLHMubdxQfXgYb3ipyaKj2o5",
  "key29": "2zYL3SMQZ5ixq6m2R4AbThwvvguqbtysRrchteN5UwBZEXNiW1qVLKK5sP5MUHo99quwpEhUfBE1mdDN83wdXVNi",
  "key30": "3EKyjz8b95xyYYyT8SxyYMoi1d2GpDuGhmfb5KBhAwHMeKLq8MK2gtJR9XAaVrZkdcAoWE4HN6cvJNv2b839TjSk",
  "key31": "3UWT6GuRpdn9HyQCrBCoYK3LAhT9enuxdYLonFd3Qrcj7Hoqh5xuKf2PrGJNy9TxhxDsRuvM3AB5wXgHH66WxZrt",
  "key32": "3xGGvKZZ3UxQSqFwHSUGozM3b554WemrBmCAAkKDohnmjZFQnTEpSs5Za4UbatFXUJPMaD6M18qUTNcxJhGeAaTk",
  "key33": "KQ2zq37VZnPPi65Lkhm349sfAZ1GVc6zYzESv9T2DDkuy6hAGZP6mypAQPW3Bw8hoHdtaC2wJkCkDYzbVwoP2mg",
  "key34": "4sQfDy6LvFgJDbfndp6P8EUWdNQz6Bm55bciwHC9s6XVDeoGzr5ukjeS958B97es8jrgHXKRHH7JuyRS2zVBpa4T",
  "key35": "RJyDK8qPBNwTEZT4Mgi61XcuPDp1UFpYhvhDE6voiGFwHgR1LXroMBKJuHkFBbndydo81HVsjenEXfiasy8ddwo"
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
