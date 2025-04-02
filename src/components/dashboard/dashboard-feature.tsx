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
    "5Nw8bHQ4cc3XNxc5Mk3Kk8hHyFw8TGMbF41RFbTPQ9ZYD1Ht6WDfCaZBH3NwdB4U6CfirhNovABBT4t3CPQjVpDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mcVJh5AwR8SBwJnNTXmNoYchE1ZQKtKPoy11AmhYoriwg5ARAaqkJ5UDwLM7FeQg5ewfjYxHMQrSbyMhqZ4HtX2",
  "key1": "3SFYew6gjDBpNiDfz1rEJJLc7gC3E7DEx3QgBxWfBxvkkJ7pz3d9xePBQTDrJhfwvy128JzmpWxpT3WWPgnX6fdy",
  "key2": "4k6p2sK6REBNyTXx1m6irQtSv1uR7ZtRotJUimdXY9RWSjmuZjJnc11421qQffEChetHyBtzQEABD1u7xvYUSDjs",
  "key3": "4Jvb8invgJgNaTMhxD3Fng6fLoPmCi1MT1fTXJTUekTKUNRjskfpyRUEUM52W4FaYjRiHtnPJpHbN9VBqgihPyBx",
  "key4": "2dr8i3xkrxLCgkercR7UYDSvmNyqwwH6KEUnY24WYmhx5YDtqek58Z8q9m112kCEsmXGRGCMEwb2vzT6y1MKuXMy",
  "key5": "2zvGTZFP3194W84aYfkcqCa6QfPKCu7xior9KAh5LCK8DfZaLnNHE5evwUiKFfLm92N7tnYPBrhAyhJUiqmK7yhQ",
  "key6": "2tgtDe3uUi1pZfdiZYqXGTAb8oaKzCs88go92oEXAeyxqot8xDcNr3JVx9PMVLzpzHJtJB4Z23sMa3pBXjRSHf5u",
  "key7": "efZ7reejw9jfSvZ3wTE8vWqTTFMrhuipiHwvTR1V3HhMoiNzXebHZMe5GpjSrZKFbv3PBbUAaUdAoCW3Rao5HfV",
  "key8": "5Zv24JaW7ZkSiAp6P8k6v6hd9aUkxcKgvsVUdiRTqAnajhvCQoA7fE6GyGoQSj25353NwgqpNMu8Sj8at1HKbKch",
  "key9": "3qMGeTAM8MACCJuuSAGhgwf5kA6eDbfAoSsxNdSN5soGKReWDFVqedaFzECkDgZzuLgS4jwykgytDtQCR15d81PG",
  "key10": "SJsjt3NSERoxdK6aE7CcMnMDcRQZyUPA6UAEwdQY41qExi1oQt7NfqgMPJuC9W2Fdb3QFz1tfDTvjFGScPf19TF",
  "key11": "3fNRh8HoKSQyu14XpTLgCNNWQKRK263M7z7hLNvFZra8niYZujESnZ8Hy83UqksL2up1EcecUXrf1pux2zvUyPbZ",
  "key12": "3wzdKzvNrZiG9uEKRC5dcye6q9D2T3K3fbVcueoFWK6viXf22mL8Y7aya5NtenSwoZQ9xcsF6M6BVgePMq7ZuFxd",
  "key13": "2AyrKxS4cUpvHCwDq64iKQnYXig4kGwJGH8thVg64wqdprZADfnpTbkXrXQwYy7AQyox39ta4ioa1KZAfwDb7gKb",
  "key14": "2UPM6z6UBZHBYBoinyQsnScZRmJV5ExLB9GZ71e7rCwtQZQ2cMqtZ4BcmxsBGxT1mtubKn7mr6oZz8i2g25vvZAu",
  "key15": "3ZYVuGfSqWGm8MQxjixuTSRxVtL1me64Z7H3EeQiwMY7c1UQapLPrn9sppToPF5wC41T2ewGvy9F7cDhixPDvdN8",
  "key16": "1RqcTEGSXWAEPzvk4RqJkRdZ4ZztPBTtgdVEp7o6QNMNrhdyEemv81FJCWSEAmUXtdeuMJo9KhHBmrGdEMf6ebM",
  "key17": "3xCjtq4Joyu6ajnSG9vf2MLmFqPLLhpk47xBdDMGcDTceN8o53F9Sf1ENNdRAZCHEdG67i7W8sixJUc9z5mjdMcB",
  "key18": "4GiQhd8hb7akoJkeRjH9pC2gVruY9HXMY8PmxFXHwqHMaQ7pynGU6tqYaBsAo78Tn5WgJVpBSL8kgQJZdd8rAqbp",
  "key19": "f6rCupN2iBXghvEHs8Fk5ea3nMiuwCnrZytGCZym7EeTq7QGo23UNfF7F7C4CvjAvXf7JVpDpYakpCkreaTHgKS",
  "key20": "4QoxrTGsj73wrLwVt75tJsR745biDzWY4KsnuqypuwVZX2ukDFZrRt8uo5uSRRr2N3j4HAMYhWqnRSJ8roH2EYvx",
  "key21": "2eyiSBwUsmWqopZjjXHk1JyeoLFpQBJ8PcRUvq9chXgDoAEAQHRknRyGSczmV7FYdY8V6jJGaseqooP9syKFHS79",
  "key22": "61M2FFcJ1TLc21ey9HkymTyF61XLbNKJQXNoB7oU9Bpp9yBpSpeDkjYhFU5SfdVjmeVtY73rxTBqgCARmstkSaDH",
  "key23": "5S1oTxYejDT9UiHcYzjFtB3oUVmnaL3oemki9gP3wZffWkcvH5LxHW6rvP8iCGfz8uNTNg8eMGwhd257mnpzWG6J",
  "key24": "JaxJJ44RCzPVjpiw9NUw2dfx6LhQRJrak1pta2bmrPjskkqn5THn52itFYQLpYuFsUVTbT4WKWQ94epc7BV5MYU",
  "key25": "26xyKmGzEiTzDcQB2Jqcr1XPBDrHEcsqzyz2Z9Q8y6FmusYxUWAsnWbAE67dbppVyrBM7qjTmH8HW7zS5ggkV1sy",
  "key26": "2WP6oq9eugwmfBozTMjKZNWkRfDaTKsK3vp5MsYS1No6CXcTDGoidd91HLohRDn6ppXvo1pD2frkrxGDaupGKXZX",
  "key27": "6HEtAAjG71YEx1DabTgzwLDnCv23fM6K3h3yuLcPzqpQ1kFDti9WUAPFi4PUNiCkBEmseSerzDbMG1S4SJTbdcB",
  "key28": "231vpv4sBXVGE3SYcTF1Pwgd8ipWUUDftR28XPY9zSHweSdjUf7TyAbATmwCuMZXkDSCwUawyE3zd2rbesfN7u4X",
  "key29": "5EqgLPoBaQ2YEiKqsh9FUpvV8jSaEdUi4HXsugLTGPUXWTXNcSznSBKomjNCAK7w8H7iG6uSiMtPv1jAYAq23aJ3",
  "key30": "2NNZXmSYsk4mdusrM7tREhvrf1AT4CwiTjoXaCHq78n3LNEJ74CBUmTVSkEQKX6nBjg2YnCSymNXjaDxdwt2zsQV",
  "key31": "2vJQ4rG5F55tz7yeLhdgnSbhAuKJozRrjukV8kAH4KT8AqADczSpZdPm2h51rTWRn8ovhXcjSRciLe82k5a921G1",
  "key32": "dojxSoGuKXCKMxZrp9t32HWmPQGQ2afDhM5T1LzeRSPBpcyKXxPcZu9M9AHbyUwZFHsWo2AMBoseBEZfcgBKSWJ",
  "key33": "3Tz41dURDE8kyfutdhKAYiZjuLQoppgw7fuvpiiiTswpGFi9cjocDsy9N2iVpa1ZCciC82Ns1AKvQzjV3QJALHVX",
  "key34": "4njmWHCnRXRHGpPCV48dxuzE3Cx3sZbKkmBUBkAZK3PH8Zb5RzVPgtNxyTreBBd1fzvmyy5YgGXL5zvmVGxEjCSH",
  "key35": "46aUbpypxyskLixcCscdTonwMHURK43SykrtygSh3gNHkmqAwskgNpJZYiEmFnTPXsD366wYA88iahJRBjBJMy8z",
  "key36": "2LNkcYxkCThp8bPbhRDLSNtTMQrRW2fJxaWVJXqqRTBBedTFwt5uoSgMRH2LoQd6ugrx1pU2QhKEJ7MjG4bpJ4iY",
  "key37": "3BdBB4aBomWru4WB7ZvWdgBFnAVwQLjcrytofHY4dNA7hifLcQ5fPT3y7XP98dtNBgYkmqyM5ixzAtnfxFHCGrdn",
  "key38": "2BvhqLQUM2RLGoqpcEeitjgxVGfLhm9bgt4QJKVnu7fAmsqhSohhb7yk5eePRi8Ee557c3hTmx9WuD7MfaEoFBS5",
  "key39": "4cSYdkYFFDhGbvbqpsNqBHosNWFeKX8Ledu4gjckmVneCttyL12MgrYWueyZezHpfSNb2TZuVqY4hbyJDefZTSNt",
  "key40": "3xHmgGZufqC1NsrNyULpEstovxsFMC2YUEqHRWbUwcg9aLWgFtRZWFpVsHhMpgCvgaqLPPsJfybMGB3MzEsUgfvn",
  "key41": "2Lp5yFoUpA5LpeL1HTMWjNDKPJbPhmJwvsFQoWQ5p3q7rtZjndLiNFBmE44F4EERDJVih3smov7Dsqho6ig7eJYK",
  "key42": "2NhF1LwNgvAja8PoLtHDTfuUxAhKf6QZcRQXUKePa8d2EXPfjW3zMjHrBrewoHGqWkwRam8frgSzo7CVbkHPEeCp",
  "key43": "4jS6cfcbR4KYPdNUN9UCi6bMZ8XrY2TCfB6gX9NVUTZhf3AkXYnbhtV91v8XwJW2YoFXBBRvU9Wmm7XnkorTX6vn",
  "key44": "2hdGpVrHRo5d7uVDTXX4vuE2B3Pcich69yPKFwApRQJJ2AM3HdHJAxrLbx61o7LWX5brZtTWPBEuTsEKqwxaqpGy",
  "key45": "22hjiG66v8CmD66MT55L8ZNMx5mp9i58NuxQ7DhYEinUnzAh4pA7DoUh8WnVUraEBT27kNmaoMdp2XLxJdko445h",
  "key46": "537Uo6GdwemN1qtgpsyKTTSP1iiTqsSjvxD2qXwKxJqtbk2aTtUgywyPCaSLiPFP5XrgQxg4C949NawfMKcoZkkS",
  "key47": "5Dcy3kMHpLbbLXMovZHzRLe8GmjMzTcaTGZtwM91W7JiuZTFm6y2No9iGRrnrTgnSuCPZqPamaKTVmSxzYvpkhiD",
  "key48": "f2KKJn4KU7ZKb4JUDzFEZLSnr9oPW9Hr7koUh28tcc2KNrcNnJNrPLkuxACFpAFxMVrBzUnX8bDhbsR6WvuPPNb",
  "key49": "3njYMsTfw2jdxLtKbDaKk2id4pRw2uVCxn4PY84jSGQFLd9vnULeWMkywNJZVUJUZZdx1ZAMhUfBDBRYx6sCd1Sm"
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
