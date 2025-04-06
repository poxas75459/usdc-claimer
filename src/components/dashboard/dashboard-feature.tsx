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
    "4rM2is17QzG45wP5NCDKWGnnikxsXKkC5nEFWX1AVNdprf33LzDMmr97MseWYHQsZAanXKBgLomcueiip5fpq28V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41cHAC9XSuqcNfXqvbGkatzAcuaZyEVhf3B6AziPRbaa3QpXs3xuux2cTEs5ewFcZePWgAdXpsAYkkhSi7vzwGMT",
  "key1": "N1fWBsFpbK9mK4f3UChuiP71PVumbQi8Jc8EzTxMv3h2Zm3qnh3XgKRsRtzsE2wzXG9KMcvZo53oc1tTiEtUsfS",
  "key2": "Xzw3DVNTR7HekaktttSPrRQGrQNHhL98cdSMWL2kk4vUyiVc6eSNBd6j2Qs1YD1VD6qn4A5GGNBp457vRyf2sUK",
  "key3": "eM7gWcooccsqzkRyCX7odC1zMPZhcjrWgKXoqJLb3i5hvmrF7euGynfrAxLA5JRTf9EJmYcEUXVSz9CKA6MxeXh",
  "key4": "cJffFk2AddtKshESTXNyuVedtRKC7v8BQZNFYYKRH7BX8WBAyZ3LWpp2xvFjwdzo285LLd52sDYWMo7wxfBnsvT",
  "key5": "5YGnbiChbWKSoV41BrYcHDsw6cprBphQEvwq8wVjNoXwXGBxLKHygMWN2tZBdJYyFBeXUQ4cJe122aJz2ABMwFX6",
  "key6": "4TQ1Gewhrwwi1xuRdgZfkXaBZmhDwedx6ctWgojGsXzFYALGmj1gLQvYGqRgyrS4uYmJfRagh98ATfJJVcsZ6rKR",
  "key7": "4DpcBP1g8dHKpKu5n4gNuFLkoUfn8MaMXaTPjeG3hLf47bfcSvHpLmdtAFHPXPkCfzwW8qXADAzuUrMX5mGoiHto",
  "key8": "1HK78WoAKn8Y5ETZ3Lncg6kPRE2GYcwvZ6gE3F1En6SXZyNHKxiYYiLJV66GGzL7AyUgKWzU3zzo6SqMWs4yYT9",
  "key9": "9gqCtppreikEnGBvjNtmyaMsm6gNpgDAcm627nt1rRcy1CnFYHzLaahf7y9xUp3xNpG1aYKPWyFKzFSmHno2g28",
  "key10": "5BKZuqgXBqx6PCViWGnnvoYLg1u9p2QVBRdu4WJ8Q97sHHWTSXccCiedzSaLNwXyqSUxw6gukZzsvTSBotfzuoM9",
  "key11": "5FQQ4Zni8WqzEdEPppo1wzLfL38SmoWA3q7EqCLF2errUoiSjrDJRdcSinsFo42uxZiPzmSpLsoHUwU17x7pw1z9",
  "key12": "3vZfL16jL4tNnweHQU8aCNv9Nc6c1ajnd7sYCA8t91QqosgryTmDWq6djQvAwrDLmmSnBEiGTQMsSJ5aBeRXmoBg",
  "key13": "2abQf2LJGtFm2JxpGWtKhzqEziG2dtXNTuFMtKUzpERTHYR1azd1yEp8tvVKt5gbewNnvX3bmAPKvL7xLXSGqz7E",
  "key14": "5AYoRHNhwM1kJpynrKqbz29ie1pef3G4idh44GPxZ6i5PMNdNpXg2E2efa3eBbCTrnRkxfVfcnwpKRfEyZLXBHC1",
  "key15": "3RcR7MaHKDHsKmfWErWkMquABScREnFdjL5tQNbWN47wCyXCV7ZEX3fwbjaw5EAcgye6D3oKufcn8Hw4sDG6bC4o",
  "key16": "bCJYf1PtH243MmVYRT9HizEusBdstZ4B5TL1U2hYRxxriCzbykW6VexKzEuRoRaWdDZ5UuM1nrzntWuecfsftkH",
  "key17": "5d68zs7WPduvaroVREJY1DJsXSGN9x1TmLvZUuSMAE3oFDmWu4FTYZzi53tsQqbcxcDUQWoSpJtSV3YndSpBr3uc",
  "key18": "nWTENZDTfBd1NvphsaGAgAAtyigED27tLzSgFVH7DxdJ4Kxdhutj9V1MA66R6JkgNqoDcH1EJbteLNBc9G58Bxp",
  "key19": "4XrjCQwu4HzVrTUN2Jz46vjZfgv6ptKRgFHPLxKFccA7fPRydb94M7sjgnk8tjG8UkBmbJu99GctqLYUTviXVnHB",
  "key20": "MsMjm3FAVBTFg5wfG25jvb74YyxBHR4kXW8emju9BAvhxkJzeu5jb4nbkmvpwbFtZsDscgRgyFKYNkDasBuGW1J",
  "key21": "4j5AE32pJPXC97Bp6YFKgtqpeKJLtnWypCuF4juq3ApkvjiWKouT1ZA1P8tSRopzmLgJ8SzGMA2epQvyhpqYYaY1",
  "key22": "2qyUAA4YCQqTxRmVJDf4txqcJsPNHYEenUmxZjLTF9KrToMg58YjxmMHg37mGtvvxYrP9UTATkJPAm3FFfBDUVg2",
  "key23": "66sUvQtk2Ahpo1qbvCha2ih8LpQ7gxtN5NZKYSgr4LaVZvsuPxTXNdn6dCDAqTzX9WBL38LxCekmgJ6SMxkPJJeA",
  "key24": "4uFPUkYCU8PDkxB2ri5eqz73fv61vcuobucadetzLoGz775ePCT1YMTLS76KYawAyH1eJ7kadoLDzvYov4VwzYuN",
  "key25": "QYrNay2ovsbQpdBfFrShbWYz54jfwDhAtywifac963JwD7RqauubhQLSMfqvi7aG8o89s1XS24pQdJiGyqeBT6W",
  "key26": "8rKqmXSmJLJ4H9YV1aYZzpnqurwxaqwSTDNBAvHaerao3Gn56gCQeaPBy99HE8tTHPSonKtzcnEN1kRVeTNWq6b",
  "key27": "36UVdug4Z69iBAQVMpRZ3yyFTSY6kXg9BJPiZ1LGmyphfyCkb1b99FJXuQf6FsskvZ7KpT9ANfp3Eq75bposj8wU",
  "key28": "4SqDTceA9XsVUGB7WhDTEWaDE8heiXpQHkSmjtNXCaKkjfzJkr4spgcTK7vQvFXfgTVUPfEePasfhjhXRbs57rzH",
  "key29": "2M4aCEDYqwc9gpLpNEXmcJME5V9XvLobKbu9MjjVZugGdY3mtpN9D5D5gAWodsDTqqo7h35DW2gzGh5aCewk1wjr",
  "key30": "5gu6bugzzVPP8RCkw2ESE6KVfCrKd7TQBRDwDawJrs8SKKmyf81S1hAY6uSw75Tqmhd6TApWfA1oZxwLv3nskibR",
  "key31": "4hnBkgoCHLLrE3ym6HgHcbDHm3P5WoMWyWypM5CFs57fxKtSJYeznBgpM2kd9MyAafVp4eH4GokGJg6bkZWBDX9U",
  "key32": "Cexi2SwNt9P4bqBVx28W8o5BhzD17mNSZjzGdRAECShXCu2d99WycHNwgopfy1M819UphtkFAVtdrhXkZVyNjkP",
  "key33": "FZAHtU2hj7idz3x4E3x8B81ndQBmQjsWjR3EwRRpdzvhUQb6QNom8eNzaj2d4GD3mVbo8YjAemW6bv6SkSePcBA",
  "key34": "27B9GgPsXodTSeh5o72DBuYfZgjb3smauagFVxDcbsxbqwRNPhhiBvBuE6tuERNe54HGmmL5etxUpuko31NaPAi7",
  "key35": "5cc3g5kGDJE5Coao4JZkVUZ6ZG7j12GVR5B6uu5pjxnutrqkHwwnSLXJBv67CbsEW7rpCJRboxL9ShptN3C3T65k",
  "key36": "57iamNyFyJZ7g56s7VLzrqJX4HjqmwSU2UGNuoz8mwJ8NhJofh7dM92HaFbRRU7bag79dJXpmfTboFFUwVNEgj6s",
  "key37": "2ZtmTS2DJG2Wn6DK7tLkQGD8jE3Kc41yVEjzB93W8bHr1AQrpZSJvgU4SenFyUr2Zse8CyMBuxjUDESksjo1Z2Eq",
  "key38": "2WumvJU6pdXhXJiA6N72anW6qg37HhHXR4mGfmSyVxXut6UGJSX6uvfHGYwXTwe6mUn7PjUfj2CctfHCv6niM8Gh",
  "key39": "2uDwZVLrHTFZxnYaTv7E2FkNRW8S3Cbi6X9iyeN8iuGwYHURAr3K5toVqSB6cbbk9ruJWsweYym5r3SSgwfS8pkH",
  "key40": "muMkfGxvJZjuWfYgoShdH1oviXVu4MqBH1rnTp1ajzF891fXTxdcqmCLGQxrMtzzPaJuk2YaHcQWdeZSztsawpv",
  "key41": "5o2wR4xMTNqiueHqyu3myta5CJZar4KrgyLEYcrDweux6Kq5oHked7brXvE9Hb1SzkZ68u7d4Gfeg1zAN4ncbHKD",
  "key42": "3sfLw1ktvsGj74X35QF5JmTBbEAayMwrUhDZ4uPQH2cXdYvANJ4s3c4MWzs7rsZveQzRUd2TQ3r2skxHDj41vd35",
  "key43": "5MpjkLBBVo6DmXPfxDVcyv4Njk1nvRViXDGi5SfHpEyE5hR2LDaraA6a4pCtPujAzFchrBb7NLAaXG8ruePBf9RA",
  "key44": "2eunHmDsWLTpKFLRfyCNwTbxrbSBvVugzqpFgqM29gyNj5XwwjpHgFXHE3t5HYhaybphL1c17tGpTLZYgPHdaZx8",
  "key45": "4kT4wBFijPhptugVGWJPUvfRFp6RimArcy3rr6cWxGHL5dwnDEqevFqAG8RkhXookpACxWgvo3xqNBH7YbgNgQYw",
  "key46": "5ZDJj4sSA1FTfNjdyEGMXvGXCEL5qbwKz5qzpxkyNecHKFrBVQeRTnw31ZXnd6rmcjmrXVEzCRxXJGF1ULbyW3N3",
  "key47": "DzRxfHPM6fp857pPgvY6ow6XXbKrWuvVo3xGAAWXCryMdMdbttGyUFuy5a9rFVFpBD33htauZ9mVo44yUHfFGXp",
  "key48": "2Zxx2xQwHxMKKZ3NfhVRJUQzdhkLk1haFFCpaD4A3MgHLoi2pwA8h6xxMFkWPGHBerNHUYD4Qk7bhzErFrd7ZuD4"
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
