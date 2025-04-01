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
    "2hnnbDvLnwxJkxTaoNtSE8kg5naU1Qtm28QwJwrzM51HFC5edTstHKFu82EQQzuNP86TnfHq9mEAMvYTpjn7J8C1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JEkcBLeLYbqZuWRjufnhy7tZGnoPk49AiRicjKyJzvdh6CPzjRpEUqGnh4MMNRrRwB6HWHyezwWXgtPu3gwtWEm",
  "key1": "Z7DBBUKd8GPNbwUr75dZr5E263RBnB1ahQw5cTeMv8Caga49LG5FdyMgZFrjEAvyjVntKCb9aD1hGrxc2htX4HG",
  "key2": "34ciCMygXKuETcpNRK3m9z5bxoeG1XPBpJ8wuLyTw8XViu3LhEAFFtG5FbKgedh9aHReujrPrQhqXjFLDrprmyng",
  "key3": "41c1PZvxj4icsm1tNKYexizG77zfquPQq3szoQoGUYGHqQPGz2zUTa8a1bJiqa2RmPKb8kqryPr1iS2M7BemYdfs",
  "key4": "2jG1qfXjv1VoEHk3xKhZtqh8qfHj9wtdEqWBrNHRsShbNfndYdQcf1bFi5DW8wgT2mABeYZYL8w8ymHpdfDENkDk",
  "key5": "5Uvbr4nEk5FiUKzPN9NsVVVCkQ91FmsCgorGPBBRvVsSTNdoFpcYwLCnsT7ymVehP4gSH7T5Khd5g9LvBFme253i",
  "key6": "5A9pSrGcjDk3ik2kYpT2CM6GXyfZVyA69JAqcwhjqQg6TwzjQ4BTnf87TysaVBXJZ9VQjxemnnP3gYWKbwZqM56y",
  "key7": "49akfppPCoiznT3u5XTacd4cUJUeizyfMVm49UkytCWEWCHKpKKtgqrP81WDrwFWhgu47ZDkFG8Ygf1CCDLxseAU",
  "key8": "3zMwF6S5wKVV69wcdVMsRK87skNXBpgzJvmfNuH1FaNVudwQaa42Ri2auVXELoyVKSDbR1MnEbk2WgesM9pHHsEo",
  "key9": "ZhGwdzsgp2mw69QNsdNCwA1aGXVDej8Xvebz9pbyYa1WyAjsoFKfXwfnUrzYbXeJDdc8t9iR8ziBZBPhvK67MpA",
  "key10": "4YwwU57NdWPKtv8cDa2MTB8ntF1oaPSFhdsS6Q3jAzkKifjRrbuSZEdGteq6FZjAobYxQsSN31kToLPAwDXF2G8G",
  "key11": "3MTFeQCZL1RngyCja1TA6UX8Hx26WrmsHznriddEco1wjee8LcpJdap2awhX4u8NeA6XPreKHTxbCmqu4aRw223j",
  "key12": "2Wmo5eecUfZLcACGLSJQjabnArfS67RpMHPENsfUGCdPg6LhasQ4chafF5HA4w6T9nkg1DP4BajkGQf1K3VByAHZ",
  "key13": "4exvZnLTju3C6GiA7igXhmzUP6Nont1adP4k6iKvUPFFDuw6R8dLZtsMi1CxJEQU2jtyph1HqKEfAJe9ipdVYcUY",
  "key14": "2iH5TPB2qf88ciehgf3R9b9k5nGfp5wDFQbQqbetkdiRTY1CMdqgpGvw5StxiDcmrEqKMKWvgAxCr2mPE6kjTmY3",
  "key15": "5GDV9Mgwbk8bunmGLtuAkEffrDQjebtUxJ7AqwpAuFWztaVQUdg1SLh8j3nWdda1LkUaRzHUvQiiJPH7amVBYYe8",
  "key16": "3hn4rEtYtmxEQ6z2q3a9j6Dwwvg2AWmj6DCswfs8PR4THVjvyTuSb8WqGMeCAwom4kLd8B2vz3XxjHTC1k4p9N22",
  "key17": "3qZKrHspx9iCdiubUeMh4g6aPe9zZKT39DXwpXg3MTwEUYBdTAoFoeoP3G1YD5HNhoo9fceCLWNRG2LANv7PbTkd",
  "key18": "S9nXtMNUwJyTrVCPLWwzY4udnGUzNW7hxu1enKpxYhqy2GKNBa8RBesjKQtfXF6x7nEVXXFxLXFzUqTJE4WbFJC",
  "key19": "3wNTvAhLeN4MrAoCjwREaWt8P4V9sb8CHpkrQB42ik5ixyVdSusHmqxe88Xs37Keufm2YboMrj7LXDzhoqQTrYjr",
  "key20": "fuADmLLseUjSWd1R86FqbFBj7LixSd9kynE9cJeF31HDz5WKyeMf6TPMUT8kVxKyMMKhct8A77HjAsGUdbrmus2",
  "key21": "2t4XqjPPsi95GvskVdhM41N5TTaSYkU2JGCcHYGbFvRMeToPp6DNV14BQxMfe3EAmyjKc6ndLgdiVxVzrMbj8WHf",
  "key22": "27CMArvneNfqh2xFLGG7awJNXPzjC31ztMDzrc3bbkdoCrCtXWGdC2PMstUo85dRUVn715RGkRpciefvN2EfhBb3",
  "key23": "3rhn4G196w3mEHEC66EAoFn9cRiCmGSBf8t46G1ST9uvceQgEZ24RuqsFL6yaDAns24iqTwGS2LWjQ5LXW36RDsf",
  "key24": "2TM1TsP2jgoG3J5fwpGzfJg1pYwdbMCp2Y2t23GJrTF7fDLKAQhcToFPEAKyLQ5onF7Wb9RqoWxSvQTnqpURTktV",
  "key25": "44zoT4NrUcnJQdvm8xm1f2oNpP59ojgM6AFCJxq6Ea1G3PYi4LyLsKVHvLUTxEXDac6fe54zwa5fgKHcCeC5zxDc",
  "key26": "3oCBpaHj89F2ZhS1z3jvz1Ap4haQcVFXJ1P2D6NpANFb3pzAYx4z9nySxbmVDj8AJo2QhBFYg9KUvnKkXmVYftnG",
  "key27": "66bbzsEswdjFizZYaVciuh9qHfVGWJJVSR6vhGveBq4RFFsxT5byTQstR4Bo1eugVEAPXqCjejYpbw1N2ag2Bjx3",
  "key28": "4dqxhD9CiM7ydDPLRRX4GntfRrbDz3neuM6NiToPK6kqVWr2d8CGJv1cjK73eTtohmBnxrcpu3NRRbFXXDfPTwva",
  "key29": "5ugGTspW9k6RTskyCg3ZtzLHBmL9ZGM2qT63iJFadknGqJUc35vGy9jKd3J1qXuZrnU5jpB6LMXcYgCkh2nytRoU",
  "key30": "5XE1v5ShqvmfPC8t95Her1pkUqaUJazbcs2U36WcnuBATY2NE9rWFPgyXrBNfjzuNADx7YEgtgYkebv7WaFmphu9",
  "key31": "TQjaGZ7cFfjWTA1ffGUDN4J2VprH4zemZGRymaUKvjHfxPTjgTNWxYRJKXWzgsng8AhY2Fy96QpqZhvpUPcXvyY",
  "key32": "4GUvQCniRMe9twtX1bMugaA8iD2qTAgEstEy8WZzFk3Vk3MckqHdLiBBaDttFWnCr6K5z42EsM6Anvgb6nZ5R3gh",
  "key33": "RiyJsUg58nqWbauu8M6LqNwn22RGEBtLsC2gdJ9dcpmu8RREssrPCUjVsVnBiKKEQ34eTGEnhqw1P6v4t2CiNYc",
  "key34": "3fczrWws6hsNUabVH8rFcbWwz3zBbd9CXSebtN5zLn9VDdezFeaYqwzAvmfcedspsssnX37ZhPLRVSvtWG8kbEV6",
  "key35": "5dv9CewzWMdRfJ38taVsFyPzbwjteeNyWFvZ2hxThsUmDHtqPa4esg2Mo1inX2xSwgut5TRYY9Jhv28YYRATKhVk",
  "key36": "58VXBNtitugUERX23qf5LjW39sZCXmgvckiWpqDhvyL5FbZ3r5RVda7Bo7D552wmDS1QU5RgGGLnNaPZ11yYDokT",
  "key37": "47oQwK45DLxziDcAyzPdibaw43mDd8J9g7irJbcAwm8AHs8ipjBTgeeXVVNSoBEpWx2R31VejcwaniTsbXYbfuor",
  "key38": "2m7Gq7m6TmtMq3FMEPwk6oBKWWQwR5KW1PQPcTCgd55WyVF3PKRKPwaMd1w2WofBRZM7aunktqQ3E9FUK4kZQyt7",
  "key39": "4Zp6jbD96v1BC5aocZxDg8Aapc1o1AWLSQmzC7z656f6YYtju2c32njjt23UGQTQzTfWJ9dEcAiXXT1dX5cNouJg",
  "key40": "4EQpSGvj525ygLzaL9AhKoJwKmoKMJhEVskvHueAjUq6Rru99AXrykgn428d4BvNWqoSCE8rUYjhzgdo45tU5UN2",
  "key41": "4WDMGFHtkq56bMDXKs88E8Pq4EHjbeVbZHsCC2amoqrw5QgHhb8yGNmTKHjaRDVUapdDEgGbahtKbGbMtW5PJRQc",
  "key42": "2Frg3TRdw9PNMxhRH9q4nf8sX6ian5n8cJtHm3c4hnJ5qMxAkuffWTEQ3MsV1WJCk6W1KK165wA5VnZBsQY6YBEb",
  "key43": "5qnQ5UCcCS24JSAr9ADuajjwk2vw7WxxNesMBR1TL5ioBHD89oUGuUYMSzpQeDSVz8hXfxdCsvagxY5oeJ27LX88"
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
