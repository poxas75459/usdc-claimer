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
    "4iY9rbzbpzKeEJaFVETYienSFBmzzV2XCV9SkqpUpYLshMV58V7dXKBN7jjzJpf61qCwMi9WcbK2aSxDVfRQatQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ABQRBYi29tcKhX2kSfBU2tFRy7hy4ZobUU7yTjEpNJDctHqu3JzpLRSKHZ2FSnZ7Aqu9Q6iCsRYjFq2wSDaxCmK",
  "key1": "4X9CiBLbtuog2v3WNLmMEwdwdnmcL9feqqV5CsygZx7zZ1MweyP5iF6YDZdXm8CTNfYxAddimcaE4PmAHUSuX2mS",
  "key2": "EokL6HNVHQF1zB6qBjEkGQmeY3RqM4qWsnHhKDQ2UtQA9ZKjQjEVcuyeJyziytHup48N4JhKnpm2cS7TRp4eKRs",
  "key3": "5iicCCbXUsfhHR1ES8z5w8UnjpGyyudevy4WgwdDHSuwJLsZTU4HR7wHdsbPADsmZRT2npE7NLHX4ChRMThzYHcj",
  "key4": "37cmCqgSAMEMFrg8R4MbM2VReYCDMwYXrsjy4ga848eDHq7u7kxhRfkJ7XZifFqjjVsJASN5AHa1wAfrXs2zGQZn",
  "key5": "TnYGdyz6xbuBLEJizrFPSC64gdCJNaoLqEgGHFWs4qMHeqd6stxzuoYAaBksg9UsPoEhmooj1eJWJ6mxLs6XKXX",
  "key6": "3xxXBasuDmZjXxUcAzGfhcGiFAP9WcacRDF4LgeYEc1KbBkEPnfcid5BgcqShtbAF4ikmSNjQB2BvJy9uy2BuEmN",
  "key7": "3A5VM4HRRL28et2gdQawdFZcSQhzRE3V6RvpYXrL76m6WsNJLMsqxMgieS9e2zo2XRadgrVsJaNzdSsbUDaDZCZp",
  "key8": "5RP4FGHY6v9SiCsVqVBWQEG9ymhAbdaTqUunmeo4d45TJ93AVsNU6Gyzb7mdfspLz6JJVDUjBYH16kZHUseXAvU4",
  "key9": "4XMKjfDj9ggmSFK18A617jJcy3Lcn8enUJqtXF7Lq2DtLUqCNkdRpgE8x2UWs2KnsnGsFUX9te98HCJXSSCdt7gj",
  "key10": "w1se7B4jjAc5P6kpiyqyjNiYUEokNret2M6de7aqiZWA7zk2fL52xHsxpdAGFcJcYesRfru6PzCLZyZ23Quow1v",
  "key11": "2bmpfZxDAeZzwf38CHjeTWUWK1k67KMt37aWz8GmRKFDYZXxZKsBPDUWF64AaSTDou7sZihZQvjhyJPzCdz9ehMe",
  "key12": "3z4tnri3op5bHC5uLtu4B8q4XpmUTYYSqxjDzJN3f5YdtnFVDQQM9UmgonQkdSsdj9y3AfSvV6HFc93oXFXeDD4h",
  "key13": "5ybbX9ZtZgicRcm7yrmbqtke3RmzRNtGksxKPAGzP1Z9X4FeS1fdU865suxHqQbhYkFyxknbv8Qz2qaSQgt6a8hn",
  "key14": "4hj89FNq9qtDzAbvaH7yY4CFBTKtyC3XHdmzb2rNxfdwTK78YYEe9DMHSAxCCPZpFkPKdGfptP4EszsnZDfoCEX6",
  "key15": "V9PqvJ84Dg3YzSUzziEw7XUSfWoP9WFYhRUKwEdybYvXgsTT3wp53Q9MnMCXoVe478nPC2jpK9TojERpn6Lgmgr",
  "key16": "umEmot7HBdfqvPt4RqqhRdxhv4fZLqR1HY6giMgKDfTEZmF7oPLw68R7HBxPhQhEA5D278M5JMqZo43uExzpQbs",
  "key17": "3fAXrMxQfjKTrzSnKprrW1r3HTPeh85QxF8zNptkWB3rfibmpyENTXNT1yZkhVZAWS2m2NExckZHjwZMPFvt7kQ8",
  "key18": "5tVvxbohE5nxGVpqtKhQWx3dJC8wtfYS22fVTFVBsYfv2BhdTSKg9H2EF3iefhvTzLquBYVpUiB6SQmrMYnkN4Hs",
  "key19": "4KT9vxLgEL9tahfr4adQZ9FToNUFowFrMntkVSzvsijqfaX85gNHd8dFNNAr5hDmN2YsZp4oSxeCCqpQBotvQk3E",
  "key20": "3XnPVebZQpgr4ogrpaVDeZgfggPzH95TpBNgQKSGNnWkgNo6nstMxWnfNqfYwLwnxmoDXzgnkDZRkh886JGS9Q8m",
  "key21": "4eDr8NpStWD2TQKizESTodo5nQDgYQkPfNLMNw74KJXkL7pWTUqc5w4ap82QvSP1nokyvZTB3msooMqT4QgFJYFZ",
  "key22": "4yxECSCUDWRxdWZ1UYBNFxiHL3vWLzsXn32T1pkJpEJqeaLynAXPVwYfaGxeM1EBMVgHnGkAXYgGf344F1aTBnHH",
  "key23": "SNCKoiHFEwEWK197rx6jhHP4c2Jk9Cgtc4P92T9ZsRQ3xZAXpso2gmjszssyPC2rDSbFHytQGNbGVtvgEvTzP1F",
  "key24": "oeJUF2MzheqzYCsoBt7PrKwECSGziPqTfzYcBLdSJZUYNZxt9kXto1w3bzizNCNfSpYYiMctEgWadapNV8jpTmd",
  "key25": "21UcK22Xz7EUSyAvwiabWkYDig4Pc1fbnbqLVV7NLipRXQByYXhU4h7pVNt8J2A1EWNTEC1VuAEBRnj13rtDT8cG",
  "key26": "2YbY5bjEWYWKFWcFHD62exj7BRmMy8g6YujFhyhjhYssaHTaswXAez4Cr1425BFmezeEJtUDUbuqw795eERKJtvw",
  "key27": "5GehrCxDXERHWQRnHNzm3uvoavyiLeMmk2RAzYg3b9eTEopGytHKGihwMWu11iyQvodkL8KnqGWsUbvnm13oT6jp",
  "key28": "45iBv9MqXQwTmoUAmv4NmuZVm1FcDdRo4Rp8zf7pSfTbY94Emd8dvBB1ZunLJGyDkXNFxa76VAkAdYzifoQ8nAW9",
  "key29": "2vURL43uxEavcdVDumVXSwLkwFczmTz3rUMnEFjxh1EamgZT3o1pAL6iNQGzQs5wUbkK55FCyLKTTEsGnPUUM9nb",
  "key30": "62coDdbenVpFJ7ASjpqY1N7ii7pBmpNNF3pbCteszj4bQ3PKnXxZS51eHb9sdh5H2ZiiU4fNPS35kH5ceZo6K35P",
  "key31": "3NiXQAG8hbytD7kFjPbMLoVa692hSpJBiXh7YP6takdSbddSARj7VtAVomwMCxY7huj5wMXMBMBuGXEbzWaKrsVt",
  "key32": "2oCcg5czsdzpDSa8S5pXwTmUSro8xV7CixuMWafwC8Pt2uzt7YCeJrcHaXER1uH8X49dUYppVBHfNobmj7SYjp5W",
  "key33": "aRcBhYh3h1isdSyf3jJX45LKfhzQXfTduZ8j5ea5aNMYeyxzTg3LCUhFnSJwSdGXEFfpZ9HqDJE715HtkMDKP2C",
  "key34": "5NwTb7gSZcHrPXUN4w59vnXzKyhaLoxX8Vy7TwC4dPd958WYdmbkV8ixQstvJTaoJFTXcooUxCPXuCKcqJknvkxq",
  "key35": "3by7ADC45DWw7ZpBhSPnzyVKEC4To6GsppPPTaUewBGM2Mj1mDdpFUG4sCQ5yo6YnNxniAvSznStCBNFsKnFYtNQ",
  "key36": "5QfQQ5WLeayeieZW8Gs6mLekuED2P1LFatxVixyksgDptRGbUypJApbZyBEXSw1mtR4XKarFSw53F5523FK3hv3L",
  "key37": "5dKfvbgwqU4zbmGCq3afmVJJ5CxCr4c787kaQcBdX5scL7k6Et1w2LUa1CjpzoTzXad1mdJLZvuGfysNAPbE9de8",
  "key38": "4AC1H93bxrXbXa2T6z1FhXk9mgcWpTXiRuS4uv2vucCpt9eM8foVhnTREvzvb78goV1yQV74LinNUDxKmi52RnaK",
  "key39": "3GU3b9TPyeCJNGp7rST52C5k8mwm2tww8AqLeRXJkGxWD2aGGyk5y6zKYnmCwWBciZH2hqz8uXDTzFr86vzWqf5x",
  "key40": "2QnHojT5dZ3CNR9cccUTxG8qe6ECjBUTVCdQNZudWcMorm7bzGUf4Z2jmk3Mw3CMJMow3VCDMoHT8Rvodqkx2s49",
  "key41": "2QuZeRuwvRcYkqrxiWMHCpQSuxyyEyi2zTsqySPRcn6xjD6fpzCNMPAQS3JkANagmiDWtYN5vM9F7i4cdQCSSRtU",
  "key42": "5MHDLPmMER3gu2vEi6atcgWt7csGwswVUmoUe8HUiDz3MoFbBRA39MhpgqHrpaa6CAz9dDAACzgKEkRu4AMnCjqn",
  "key43": "4rgwWvgKRQnQjHerjV2yFQbAg22PhTrAMsCdhz97eT37TjYGSbNwSkY3Rnax8xkZtEMNLqg2VoAvLx6vDxji2i4y",
  "key44": "rkPT8ZbcEPDp5rGbU6GWwdhvokyd5ZdXwcg9hc9n2Ep174NAhK68MBvhwwBgx58vtK9c4XogWa7nvw66Z4PMJzY",
  "key45": "2N992x1TzL9DydWV43sUNQX1XS8f9PEVgH71QXzn7GazFMZ7AyFXjwCgG59DCHuztM6m8PK9v9fmtFtjeiKeM4pN",
  "key46": "5ttkFrbFFBhDDeE6x3g1PsCEc9bJLbt7Dg6jMMZQX8PCgNuAtUG77VW5mKH8k1DrLrBYGVU9KjgBdV7ZhDdzGh56",
  "key47": "4sdrnkaprDFT19xhRh7quqzSW5PMqsFhVwYkWcDoADWTWUiPKmeaX4C7VjV3GnntRnNoXv66toEjMMtjzENJfkYv"
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
