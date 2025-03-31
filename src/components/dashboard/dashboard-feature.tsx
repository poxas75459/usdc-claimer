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
    "2Rrzy3QhZRTSymjYiS33pWumwiXJUst6FpXuo2fgqu1uCPSGsiNDMrinZghn9FJWNTknqsQEUg2vCsVzuoNh6HNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gZgWqyRsZ7VE2K3yU5xjJ2HNcd66P1CcxB7s8aeF6xhkEwuuzQhaxjeu7aabCgkYu5fwzJp1NH4V7arSS2rLkwg",
  "key1": "VUPiu9wYx7v4T7RTVdwSJ7SJPNDYRXW1LNvSJ6EtcLLK7ufwSCjQvBFMYGYBs2AwziQSehrqFyxBY2FPcxSMh7g",
  "key2": "223bKzxBs1UJZaZ2RUtG72y79Go2xuQgztSqbcPruB3dKSQX9MUQLA4J1dTXsmZnnAtCLBS59zHC2AffXHwZf6x2",
  "key3": "3zEKdf2GMBbGCkXA3EeDAygsjAsb8pdNYHR2RZ1fR8kah42rKMJdSBBLfbJPiDN5QkK2Qiu8J2yQAeoNAKxjfwJW",
  "key4": "3fSUVadLHZz6jMviwTMBqRcyr5fNC2rFjaYnMKq8ZAXemUkZnKVjiwGC7HDj6kvohpqUmydHrbKbGJ5UhREHhWfN",
  "key5": "21NrNgqmDhj8zpHsj4U3FWGdoz1gH7ABmcST1d2MJrZnkZgB1E4E3G9VHPgmAxTDoRseAD8ewmMT94sc62Y96yhu",
  "key6": "5KxiWZtBYXA6BYpuC152R9tLF1FwrLhhbDTyZtbACvrTo41e23JRx9UZwCzDsTHNwAvkFZXMUfkvYtfLrctXqzPi",
  "key7": "3wP4cT7ogdwM9t3pXZE53h3saZHa1pn2c2sm78VkgMV1endjLdmDVMsWrkw5BqMqhh3YPJhrbL5qbNUZXYJDbJ1r",
  "key8": "4mMyynHDtsvsNa2DU71SHTqawJ5ia57yrWXyLf5RQJBsNbR68scTu2V4Qa8xDsprYZAoQKJP7zXAoRNvsnTewGvd",
  "key9": "2VXdJa6ovK6e719BHbfHZpHsxusqWHfdYTTUq3jgBcFaGVYXqgS3vKcLuHGFiAZa6HQ4ZXEuBMEQmEYpwBem9hqP",
  "key10": "4V6rCzSQ1H9ZZXYGQpjeZC7m7HWFvytFQGbgUKGAzL6BUBPGTv3QZ2Ei2jkS7mTVD1NsrAtwY2DHmFwsbDWnxvS7",
  "key11": "5aN41W6jNEXfZo8V3MXAxBxv4rxieS8LmxCkcxYmDnrkAp5PuhbeiMuDSnGgXbou77vynokb2f8Z7MdBXJGbeGwm",
  "key12": "5LuF9uZ4PrF6BevjV6VV9WtAytrutZA8H34GnihjMZeRwgzJHH39H1eFqauU4ntaerFYZtms6fMgxobj2rWTqgSL",
  "key13": "4Tf5oNnsek4g5NuRnAHTcuyyuC8GHAj9WDWu56iKWmnPnSL15RYHcChVcGqwAofiQHf3vh8UD2VoXeA7cAezho1N",
  "key14": "2jUpYizUA63S1CfkV5XfxYjzW3tKcXA4LihtscWQyTvXUjeGJyHmQe1iK7HyWamHVNR7nYhA9Yzja8ansvn3sKuN",
  "key15": "2CTcCuuniphqNkNYRBWPYFpcyDUEZ55Zp8PdmWzumLPsmeWCpxunKvWZqAS8qwac2ybiZxrEGaR1MymLfURX4uA",
  "key16": "2S8zrPSXVRVFXURfa8ETgLpPL8BtCoiV5bTLFBnWScmjqYmpUSpG4feFhU3XCjr1HMeoMxSBMBKYoruu56LxKZi2",
  "key17": "5rXtD3RkApibp7HHjTXd5LNMLwViwd9nGR6PafJzf8rqincc82NVY3MckLQJ8vhRJwMU1AiCj86VFV4Mr6WoCpTm",
  "key18": "wMjPjaTCE77rzGHyKb7qwvvMbqupfxDeNuhDPF95BCMVbfY1rRicBKkv9q6kHbpD2tZEdF1qZeXL9nYbwfy48yt",
  "key19": "5XC25hbhuE1eh9bX7EfZjRa4vx5YjVcU4Y4wB314ABQQyvCY7x5ykiUVBdEsHmfPFmurb8eCeXx24mRxMgCS25en",
  "key20": "386RYz6457iSVb4ZrsUnGtrm2acntQCjKaXHoscBquKFFzRo6DDyFHzbaNHnx9uGAz31S8g1FiaEPKtR79iSEQu7",
  "key21": "3XccrYcs1GMoCKqqfBmkxQkBjFFY556D7FhFi7nMDgRYQwRZWXTH7mmgahuCtx99qbS87RKrj4NRh73yhrEnCnKG",
  "key22": "4QVhkZRFriWVWKFgn4W2HgKrQ1uZp8q2uYbuh6EaumtPyj5w8k1QxPVXVN5BvrmPgnJYc6uhndRCnA4iJRUqGn2q",
  "key23": "36xqmGNfQem5odKY61PS6uaCy2qvZuzw3Qxk1Vk8dr12jqs7YBeSetDsSiqN8Hu2yXcoBDT5bAeQp2BQ7ezRngEs",
  "key24": "3p89kPky3bz3b8nNZpzS79eGsACuN9DLLwkZZB4XoqCHGgPZNtBQW5uu3HrrrodXP7hVU3qZxYvWYwaJYrwJSpyu",
  "key25": "3BNt5w3yMpY3kf6ke7Ft7qdBkNyNZ31MajGNZ2pSfZVRH5XjF4s1LMYz4oEYne2C1D3jd6PdcYWXD9DG6JofzwbU",
  "key26": "3xBu2ysqjDB8M2WL7qVRLuDFrq21g9zKkhUgYNEEo1vW8nEZk1fekWGWx3ntzTqaaE2U1PoPNcd7adgP8nMkgkSG",
  "key27": "3RvJoGbvYxvpcfhxiSceMDUjN1dCmVpkJ74aiUegYGqFBYaePtv3tFNu7ymctKPXfGnKTA23xyb99ZQTPZu4aEwB",
  "key28": "4USvvQ7K346AbvtQvXZF1sUfBALRJjiQufdgDjLYNhgCVNJMeR6EnJxJ7CrjXZWVPZBGey3R6jUHpKz1phhcbAZz",
  "key29": "31omN349bUWepyEHV5apF5EcNDexCNFpcFrWpDEYHwZSEaqdFKAsTVQACh8m7dodCzU3GSHzSUqdyERqGE6iXvAp",
  "key30": "4J5fpLTxZ2Ky3CM1yXLT88RRj45HDP2satHSMHtysniUeeMCPH3rqJKfM7NYShLs1d5Xe4mAZPcQBQ9gLy616de8",
  "key31": "54SUX8zyMUX2PCzUWYUeXCcTBND8GuBYbzTUQN8hBGNEYn7HoHaYMuMb9Ts8xmQKLQpuokN3mi9m1gX1Sj9jihHk",
  "key32": "3fw1qqUZjy4q8WGAQU641x7ePnFeCJNc3CiQtjXjJHfiEW36RC76gxyB2Q1bVSvWcdpQnWx82jSQ7pnANzA7F6e1",
  "key33": "3MKSFGaPkn1UZ5dxqHX9NxmsYD7PJZAu7u9VY8mnPUPPoSjsyUVQh6GHnXaioJWDDhT5K8hXHRFPC5fhyNGPsD3t",
  "key34": "4N38LYTCfXhALsurYD1nHk2PtpywfDHQqd557h2nWcNkYmNqfHFCXCDVuuUJeA41ezuZgrRUQMEYmM5UDsMTDRb3",
  "key35": "3WJiPdYU8z47reZ76YgWXH72rjDYwVNPRQFtmiXcGqyfNdZzKtc8MuG8A4GYp4oGvr4UM8SLHoEc9SwMH9pUbZ3D",
  "key36": "4m2RgYd2BbwBMBRxX1ZxgLD7AonVub5xHRZrGXxg4ph5shV1UCtRNkzJF3YZh8GwYpbekX4A1A4T3Zd9je32aReL",
  "key37": "5GwGSsrjwAvqrmfEf18FwM1yjiDs8xzKzPtWF8yMwa9ju3PNAemq7yqdY4KBjiFxoR5vQZoSDrxHt7R1LxhR4hup",
  "key38": "22CZFnF81C8A2n5ou9M5nX8BpVWtEvS16LN8N9rvqZiMvFqbDd1HZM954EqM97PnMHJ6i66LWPfvA4qgYMJYsusg",
  "key39": "5MeXLZVqELWdcQfTRHxqYNZcFKTqojevirGaKBeWZ5BZa4mAWcM6d7hW2FmPvTUgSnENVH55TWNBRSn2AGcC7h7n",
  "key40": "4AVc19y7BgJ2KfTkkRmsoseWNReiCXM7LTgL7Y9Juj8egcPHy7VJLJVvm5aSV4sRVLNgwpGncYGkFfTw1LJXoaFE",
  "key41": "51D5dEYheTGxwZSMf2P5hp1pqSni7D1gnjme9MaDid85WqHd5z23dmVkgNFJEfSQDBzUMYgrFcY3oEV6DdnEo3mQ",
  "key42": "4sWdUbn1C5tV3KaDfdnqCZ7bhPX59mJvLms8Aw1XyypdFie6JUWjhhz7BmUbcfuef2cm2hK7TTFVBtDqnXezZqF6",
  "key43": "2RszdADcHV4pTXmZdgQHPN9mvaFVUSWfNt31sxpKwhxwPGJvt3L1vgBPgs9hg4CUZYW1wXAJ9LVtENGynsjBS5tC",
  "key44": "3L2oVNTHbsKGb1dd3AJ4DMgXY6tvfHNZ6QT36653RKVDCQiBuHi57LM8H63ZRLam2phpXiHaZEkmrx6sx3SdTzWQ",
  "key45": "29jPgZN39UebKPYKHr7vg7qwtWyZbBwi8Fx1aE4QpcDBopRD8UhNesUBH6QY47tWdmTSdCJRnVE5XfxDkN5aDV7M"
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
