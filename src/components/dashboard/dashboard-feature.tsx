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
    "2QZwv2MqWEgaqdjQsiHBTvGcebtDey3C86vk5BYKx49XrMHMWBMLiSQ8kuV7XRUmTxHkKwD6KsNFaxdYfug3Acmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Li4S6ePavEh7bhWnf72K1yWaCTyqnD8UcPVQyYd7G2erNJ1SwmwnjysoVam3BuFrB5Fgojf9w2j4qSknJqHyD8B",
  "key1": "3yw1yVvS7gwJFjQcwiJQt1VDEbzioATHJC2L4YVfJygtxBtnZd5h8QP5GmQwsvDnQRmpbBmEMwDVhg2afvE4DtfY",
  "key2": "49Rc56xE6nY2gyofvDfuBDoe3AAUtLiQoQAMDryS25DNnWsCjDq32ztK5iPTS3drzw9itSyw8uZgYUfg7kPKjQRE",
  "key3": "3P2H1cnSMXeEzuY3pP1Jnn3jzir3ySY4rP6XxEqw3wQNfpRvVgVjBTtEJkNwxRuY7MiBAjYQ8YuTxvRDYj172YP5",
  "key4": "4ctfZHvAdUSELNDsYJssdJuoPN8LRagSjEt8cWtPvKDTDQwaSpSfCaxkdXLUz2WrHr67Ft6ESLt2xCqhR131UPeS",
  "key5": "2uqQDPMihmS8HY2tF5q5oFrsxPxpyDM1viVwoibG9TDuCNtMLuEYsjRVBqK4SDofS2GuivuoCsB6yf6PtjG7iRmT",
  "key6": "3dvKkWGGctQvsp9uVoFw2gXLnMwSjQHcaDtRGqiRGyhnqD2K6QMBpwQ1vqBViW3qdgGbVakTEwSw8avFstovs95m",
  "key7": "2GoFKzNJxb4Xzt6gojxWTVh3WTXdfrDJrVdQ7kxTRzp1qYriT5CMny3sPkyusL17wEUFozqNmXZDPBnM5NoPyeEV",
  "key8": "2pNpWbmuh4JTbQAnPuH8zJVCaCJWEAmoE8G1DwzdcStZDR3T8HACqCFfcCdWAGbXSK2zALuvQKrKWFAVXDBp93qS",
  "key9": "5ucSWkEk4jtenybgxu816AMsjJANtRAYksYCZ6yfLZY1X3caiBcnHH67s5qAFYVHW8S8fPnnihymGxoyKvTjjp84",
  "key10": "2kxZYdmPrjMr6YgRF82ZWbKwNZwJvuvwVWQ69WMt11HVRoJKUxjyHNijHx7rkEUfv5ohbzTnmjQUFsnKsYHQZTmY",
  "key11": "Q5Tdne9U4HeFLMJ9KfHe1CEBePg1qWEuYgq6TeTBe8MDcinFzi6oruHEUke7qARxH2qHKCBDNnjgvhPKnTcUo6r",
  "key12": "C3zX7bxvFf14N1dXKpaa5Rs6WnmCCSV8VNDEMpFJ26nihq7tBsfhQs7oJRcq7yqB2dHUcp9ps3VLGrFwaNdPjDk",
  "key13": "2UkJfZDbo4cXkhjDyLWM33KdVEPFVxuHNqKLaGZXJeK8PcqCHmwZP9Tm9j5gDDr4aisdqGVJQkq1HMBV66TMvRsN",
  "key14": "2xtJHUTWehVubkUpAdqTxGCbrsWJq99ooQGgzHTMw5dfHXqWySqDvMrrMp9g8Ejf2Ez1CyLBomuzWCEWoeKWZfAD",
  "key15": "3v78UcbmPRU4o549Tye3583uh7E2s7hotrhDyDjtottZmjUp7afWc9Vdq3ucoopgd5a7kkBTLkbZ6pX6esUxoEbU",
  "key16": "4Wevj2Y6p4NSRhaNUvdMo9FuGUjuyqYF3W21MfatuWsrRW1m1Nn3KmBD72fW1SsVgKymrkibif1azGgUdGjcrvjD",
  "key17": "oSY5uqQXXCSvCU73Q6qauDUyo3gZhMJ5qvpt7qoE8GXYGatRiQPS4nRTafqdqem3jMX9G2FqaV7UNpFtBu9m8Mz",
  "key18": "5WyYCJvi3oNkHiVcr3CSKswgEZnrZwgBMPD4nmmY8LRneb6hzjYk9sbxT4Rw8mJcZkWMF1cMH7PuyjHmcTiQpHjZ",
  "key19": "4nwZAPVwsdKcYJeP1dEAKTLW4QGPu7GJuMSkDFkCR8bgEq1Q4rNeXV8KoaDFQAs5eVVKte5wz4s4qve5SzHnhF9Y",
  "key20": "58mUwBpXzFUXuHYfcWvfEgLdwzrzk5CeqXERthdzzn3d4yg6DNSCy6MbKzVZtrsfPsyhvdgmbhbzbkVaFGdoPWsx",
  "key21": "QeHBNQDLPqNo9m2xGT2oK51uGbFDGv9KDqddV6BA4F65twazYZ72PC5AN9sZFodeRpKUXVuaHxHB6iFnNPXboXy",
  "key22": "4jCZyJepSUZEavYg2T42YWs9LPr2bSFNcCCvq8opcBtn7v1Zc9eE3U36ZVs35tZSbbQ2zpRGDs68TYtsaSCYNBbs",
  "key23": "2JUgAxKgfKiBFygAvp8SviyrSWvsmbtdPsbLmrWdtLt2xS3dDoUkDbkEpd6uxHz8m8iF5RT3UsNP5pgWvpz84uFm",
  "key24": "m13F82ns7iXX2vXzKr4323jeMWV5zB49yKfsQ5eVkBwrdgKcBTAtRBqfPPdLjmdTwgUesJuNKQ4v2TNaoW9FHF2",
  "key25": "3sMBEXkNHozB1ueQsa5R4RCbXrHy1s2HBQCHxEFNhMPDEJzcGQP5fbtG3QNS1K3AhxYFDLYXLuXAWQqWm2ipr528",
  "key26": "3vWwahBYWkY1YBT23cu1P1PNjGu3UnEibp5yTJtxbqizSUECdzSVQrAupg2a4n5u2kN7ae5FiSzFCMspph6SE28F",
  "key27": "389QNH6gYuREZ7UvD5Lp4JVnaTuk6MqYfxJ5h5ojKwTvV3LkyKV2anuk4hzWyj3AWLBWzmXQhfV4xmVSQaLjzVmd",
  "key28": "2YYpZ9mPPndqVtgakEJ4HLL4mG52cWxCe78RfL4J5R1Xbf5iGYC81iWnWvxsgV5JMuroVqrNfSXoPPiay2rsRBkT",
  "key29": "4cmuEYK2c3aU7LBzTRiUAcdgU5D1GqgvWSNJwMLHsqrv2qz49ZcQdumDupJBMQJgxz2mkTZEgd9RfBa1zVxiKYnp",
  "key30": "67LGhCWccBxAQcHrq9E8uvyw9wUpyaEWobJdbKzfa6FGxSuVHPfLxqZ2UJMCMp5KcRJjEm7hDvg3kUufw7zvHRnB",
  "key31": "39VQMpCvYER9DBxt2hJaasYAKdRUmcF5GZq597YkzSCWVn7Y6HbYXBaLzXESwmWoKUkwDxWcHyUyCqcR7XeM9ygv",
  "key32": "2abvD5TXdf1CELZEuNawtaQk43HjxXwqKtgxecrenoaKxWsu4ETjCPC3YgryuvdmSFEJAtaNt73Eq79amj2FqTwh",
  "key33": "396AvZeTxFEMxA8Gfs9UPqKd5oaCpVRd45cCcWgBoTBgyMauW6fxKGKdrEFRS2o7PVmQVNYqnKLyvNup389FCh79",
  "key34": "7hF7LEDbh6dYD7eFTiCB7KjHYMQdYyfc3jpRec7buyLwsSH6THXfsx3DEuEY6rzYiu3jWPMPUfYzqi8NuNCBXkM",
  "key35": "4Q3kDUo4wYLLWVktzX5jKMDyNehSTkEYephQ1DNt49VQxypoNE4VS3Wr9Bac9scLuGLJa93tD1BMiijZsatS9fSh",
  "key36": "5TgZoEw7NK9PjvHcxsGxpXqF8zuzzJgaag1ZSVXNaWjiED4A5YTRxosnmQKsEHj9SdGGPW7fxCb8YuPc4UPvZgx4",
  "key37": "2bs76jpkJoo4dXAMCAjrLcnimf6TxZ4yH2CpUAdHWBRccsvKRvjTzYd1ZTNFFKZnqdjrLhoAYJ5GLEBdSFPoMnTA",
  "key38": "5qezyGsjQ4oZMM94DCZwPriydRj5eiSCJC2BeoHfmUbcjhTTT41ox53gQAWhcGHQwLLY25BkwCYp6p9A9mdBvtgw",
  "key39": "Dv7kpQfP1eHhqcVPbccVS7C4vMvfqDwaJ5vUMtk4n34Uky66YyHYS3cSSYGWB5vi2suTDzMNSNke2kdNGMSYMxj",
  "key40": "3X8pHHXp9m9cryQ1ognfpe6pt1MehaGxwqtg6wQdLaZ2JEdEYdcdU32zbLtNEwig79xEFYtimWCHucU7S1zDQNVe",
  "key41": "4RJmCJpKT15hjpPqppN5kqFgJ83K7oyymYLhD7QYZJYquuHgqjdYCDZgjmtuFgYKzFHtG7HZCe7hPKj7baCHRmHo",
  "key42": "TjPvY2amMKSL57Dvb6Zy7kh13f4ZBLbKpVu7qTUpRRrvyowxEpBCWHUfazC5Br3TB4xQ1thJeAVPj9kBtE1AUir"
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
