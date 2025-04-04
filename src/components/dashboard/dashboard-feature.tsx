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
    "59L1Xqim8xXDzCLj6VvGQ5id4B3GJevXbPAPSK2NoLoZ3DJKREUzpRRh577CvYLkKiadjwHwxbSHhAhN9TDCzKQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iDqMk6fsQCFzCvT2f9d9mUTZxcL9WzEwU152xQLaqLhDX6bff2Uj5MLsTMC1tETWhVn2bwa28wBCf241Jj7XoHY",
  "key1": "33kJ6t7pPe1ep25kPC6TAMdu4WnEVfXQcZaNB1RCib6nL9r3hoqLq92SDEu1CUM89c1dHRCwN6geqS2zZMugeecZ",
  "key2": "27P3wdbcUev2qpD4u2uk8g3GpBdhvMLSymAGX97Ehqx8As8QjWALtCH9gK2V2bvPSDP132btz9wmAq7U4Y6rgjhb",
  "key3": "4WoYFYWXz69LU5NAtxzi89cdLhyrxyLm8mLRYzPoAiFksp4uhbJjFLie5uhVUJjYaXuHRMTPXQu6ff9pAt8MRFn4",
  "key4": "3soaNyv43wcpTaV9NX1wGsf1tn1gr1UzDvRCkYN6krp1BNv19mEuo7RGEFbfXbk8qD5K2zVkmU4buaCkz4FDFXjG",
  "key5": "65ztG6W9ahjuSdikZt34PucqGzKm96c76Sb2qyiwqp3H7sX5GwNsZPyD9zsEbEcLB33wCjPGE9BvDAtY7dzZgYYS",
  "key6": "2JDok4VPxMoEfuBrFDSkrB9Tv9kvWQTpEJP5eGwhCMMpxWEAhLvaVAAMk2SE1qivebPV33EYCA3J344xTvbZJnHy",
  "key7": "4enjPGqpukFLR7E19obAbDzvCD4RTiQU7VQE9QGEKcjsbn8MLejujBxaFX8Ls7LU8NuUFiQedKAW6hKuQT3Ww2fR",
  "key8": "uEuQF5aGzV6Hi6JC1ad4kNJHwJafyEFxin9w9Ex1uRaYFe9TzgR1k6QPNPKvaYXKnmwCSDQECfKPHMPLRKhg1Us",
  "key9": "3vsrCDcbMtZ6BL1UK1v67vcv9kExwHiSVwSUTDFW5FjFXfG7WGW9XbC2gosZr8v12x4LXLSMxYNFiNU3tKhifG2x",
  "key10": "5HVoCAPB59C3QixPnBrAiVXsXxyUPMZyrBwhjcVBGTRoCQ5Ciy5yg2MCpEDFfoL1ath2BbfRbTZ1DHh31Q3qFK6D",
  "key11": "545o6vWQBheto2F6CxLMr6xTtfxbAN3kVGLtQgdMMhZeEsFu4BoFi5dN7E164nieARQK3aGYwZgQLvsm79fbcnrg",
  "key12": "2vqvRNZbz1JJuR3t2ZfQfdhrqV93zvatyFcTNb4XypksFx1qe5RujAQ5fZ6HxW25nBcdKFEFUQhC7BkxDhK2eFfw",
  "key13": "2Cqw8a5iPm99KD4R1cHMHocj4HMKLkYSuYG9Y5WRFtUWMJokhtxmKbBeq8KBT75bsf4fqpTEKeEE59oku8p6qNDd",
  "key14": "2v2aN16kPjt3HDQuhBKX1jb1wVx6uVBLRhpPqmd9ozcKB7qnVMDXdf8uSv6cZWfdLzQU7nmvPq2tcQk2smJT7Pr5",
  "key15": "4FNCDX1mkZKinBAvGFR2yr4ANUTJ5ZJfh6egkzxdrF8rcj1Uufh76kEuFbQ3crEY5Jvix37SH6kYKDYYrYDr4gJj",
  "key16": "1QsLvKUnbxj8Ffz3EWqgwUxqY3TwoKPQAqHThadGMyJ9i4554Mx2JaPNpRbXCe4k6DsmKSGd3WkaULJMnhzt3hD",
  "key17": "jSDDbLGaU6cugMxNsJoQ6TYcQxQtfVu17WLPdrYRUiTac9osYa7iJUiexKQfq92z1AnTYgGTJ7N1CSX1TLb7WSk",
  "key18": "KZirvnwZSiTAAqw36USxKw88TfiK98syb4QpnPuC6hbMrQzhxyzCC3NM55KWLRWjGG1m5RViV8VhowTi2C4aJKu",
  "key19": "63Evttx2wvGr42UYmT4s2M8m6jzHExXivNzptzZ5uHACNjFfuTe3e6QySYzQuweZFu6Z8KQ9df3TwjiCvzgLxuCz",
  "key20": "4zaxhB7Mhr371vmVpC2ugNtgtN4CSvB7pDJXDaM1M3WgkeXrJg2qJft21Ao2nsqBMqXpq3d6z6jfJxwNJQFURcLb",
  "key21": "3AGmMZfGKR47bWfwyro8JJ4S7gEe3bgsm4X9ipJ3o22KN1v4zzdPg3BkTYTkimAti1Cr4Sf9aJNvL4WmfjDdps3c",
  "key22": "4mG4WJuPzFD9ezog28Tx4LgzquN5zfeBojLPateikx1ra1mAp4L14cCrsFZD9XDwLkDnzpsBenxwW1yBdEaztm3h",
  "key23": "3KDMbr5NMacUrKXcRLNoXnN6qtajQYN9HDyCDZj5nxvwWQgMafcj8HedqjY3y5bgrjtuVd9VHNz8aaEE32TgAcik",
  "key24": "59bVL2drGzJrcTJrr7nxeiEU2C9Hwvqt9BQUUF8XooQ8ADmjtF3upHxUzBwjscPdrySwZEFmcz2xFj88FPmYbZQF",
  "key25": "39h3pk2C7t6sTxc31xGShngUWPtAnPL7pGkor1GmoWthAxx9SGPZeGqCpm1X6g76cJsfe7E4M253EQEHvpYRHNMz",
  "key26": "EPUL71AwzctuZvRK2WuWk2cVJk53cwqF1rLeYrwexUx6MsRwhiaLJqXXvJXxsHastSvMwxdTW1mnUdqi2rKv2wP",
  "key27": "5bMxWvuYi9hv5MsTEGZqvFZvN4Q59gG2GLHHztnJu8CnAEpDGZAkEjarBCYkX5voCbdudZ8rER4HRm6xe9hPZXHz",
  "key28": "5JjNECfM3K8ctnL9AxDpSZwL4fWsXo2FEmL6TD8Xoxj7AKpBxCgVnHviHamWwjeUWTvo589ieiGaBcvSfPsBZr6k",
  "key29": "5bQkzVsYgUExjZ9s952oCyht8MRcF6XfTjcksEGA9YT5AFcbopvGY2TZbhx9frbxD6BQ5fZXKTgk4uh2RoXgQWJu",
  "key30": "2uMkaTrpXyct576isELXazFPgs6KY79wEhDL92c2mutyWDbzsPiGBpZWfYgHuFQYPsvaZFg11WswDj2wz3XT99nh",
  "key31": "3vJvUND48Cs29LnztkuzJt9sTF99QwTDkrDN9UH8t9dG8hZk3vBqybSFq87eZJGDYYUXV2HBdzqxv7QY87EGPEKF",
  "key32": "2mmmGKiTHLtrEUkf9Qpd8YnQp4FxBLZU6YJW3TcDDnF5hdHpG9VactmaRUrF3PDoKFGAoAm1iVV47fkiTytc6Xrm",
  "key33": "2Dk8g9jZ37Kszneh6dSYuWXsjzAZ5kAczFDYgxfQ2wR1sEsvepL77BJabToEvFfVSfX62K4BSth6svEAjJcY4shn",
  "key34": "5L4YtmSYRx51gbTB7vB4wCyUbZfagavwHqEfuNwBovDE7gbjgRyWySn41tJR5NtAKeNQCDHzn7132SB7idi8zoVe",
  "key35": "gJdWTUBgDcAMHDPBsrBk9X9jj8PMQsAXvxfudfskjinugMAqQWiHaQh7jopb4SvzDAEtVgbaTBwbgqcg8tZPGRY",
  "key36": "JLko3X3kgyJjcBFHMEj2P3ZqMMDVKEfBpfhXiTLqLon8TQEVWXGMVwD2Hwqhjqoq88jPwkPt1QJVv1MGCDmM7Uj",
  "key37": "1MLs6Y7SkuHqRGrjAJZD8cDy2s4PPZPkpDgTE24qaGj2sLfp2jZmdeWEVv9QRhstVV1ehdgpDnB4XhQ2zgKPG3S",
  "key38": "5FpxNPqmG6YXiqT73FQDiviVF8PYM7DkBbspcAPkcGU9HTnUfd2fzTp7uyM61VUHUiJH38H5zJYvusKGxFxdxsLL",
  "key39": "5dwn941JRwm4LaK3n1rpifSYS7iQrfKt57dGXDkQhKWecNkCQzCeXStC1eMtVLAePmZa6chTSZ1XYME1aTprgh5m",
  "key40": "3qkZH26ZyPCk1a4nYerzRc1JKq4gZJLAnCHee46dyZwU4uH7PUxGgugmJWZHSNtekisBqasHJ1buUTcTqR2HYQjX",
  "key41": "2fXeq6cdnEDtwJeBbYqnJBJh2ypjRysFgfJszFK7LZnYwtUkryszk2puDvAAyE4gYGaWE8263THQbmw638e6he76",
  "key42": "5xz29oLotDNaNvRfo9UHHBP42miupYtHqBHKoJ7hZBg8mVkkpAtwvcN57N7orsZfgwktPU6iowvjwANLErjvmEK6",
  "key43": "2SER62peuy85PtQBtymbmL6sS4k7WAaER3paKUYUzZW1rpT8PzetWu1XdpWxEQfnrvkKLsAE1AD3ctE8bmfxS8ph",
  "key44": "4G5dvkGosDHmEzKdkk68bSgHUV97MxvMEEvNRVPNHpYb7VmZJ1YSF1T2H2aFe8gRsccmyRt2J46hrs8QYc3i1NVi",
  "key45": "2fjHAM1AA6cuBeFe7hjVQYNMy5gj9m6x7YiC6hn3y8wCanpB1uYuFA3NsXVGinRXEK9E5o7vjNJ7tSx8APfXq1M6",
  "key46": "4BdB6wgEizB4XaZLMSUjGrtqNyKscKDq64KXGxYBoNdBZjEafzVeHJKW9PnYrGwSq5aTd7bLMhmmvHpMjn1iMWvv"
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
