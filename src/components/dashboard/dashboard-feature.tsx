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
    "4aDgx4gJBcD5jAG8RoSHJwEFENKUzgEud3roKndDmPn3n66Yne2Ege9K6m6roZdfmgtVZZhGb21NnAhdybeUVZ1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k7AgTprZ8gdKc8oar7eGMzBJyGXd2Dam7c2GURPN2yh59BgkfW5uqGkX2caWBYdgEv2kRaPyB9LGVkUV8hjHHWW",
  "key1": "3hcDdSCzWKHKG3Sik5PrnT6Xc2T7uEswuTN2ydPiACPzX9ToVZDreMRZip58uP8qzMHqDYpfy33x2sEidcf8rTvB",
  "key2": "cLif8YDCwnyrjCWupXuveJr7vmVN3A94ZZaytMUriTtkSEBkXKJcGaAdSqnQXrkqMQbRPv53EdG71sfZSrjiwvc",
  "key3": "5KCqGBkiWqhtdLTKCzRKRqSS4LVynVU6tcZrCdAnmiouGZgaYJgvY2QgjKGws93xwvqV6Lcy2p5WDes9rrst5BdE",
  "key4": "2beof6f36s4ahR8fbKjHVyEEUaCkEDNX4AsWH1gNacJi8H4XfByAM7EdLEaPavvVmSiaAfHG64zmLpMRo3UkG3T8",
  "key5": "KVLVUQPwFyW6RffkvjUVJ5fbpeutFV7d3UB7JSx7rHETMjLbVg7hoZ5ta3s3LcWkn6EMdCFKHmLtmzG9uLs6uvX",
  "key6": "4cpcCf4hjrrGcD7pfc3zCCKbJshmsGMn9zFDqp8f6HU4Z4pReWzK7xmfqRnZ2W8Y8YwzHrqpURiP783BRTj1de2B",
  "key7": "57SmN64oYfg34wA5DzUm7hiHUJtu9da6fKpaZ1Q91kn62bAe4tAfNU36vTjyDptdqcNYJZBqRRzTGjihq821UxTH",
  "key8": "4oXXZX8o619nXe26izJZpgpNC8nd2czW8qAh8QE73B6hYRpGNrbVTmsWehLoC8gYAGt98D8sxrgBjfj8o3fNR7Sd",
  "key9": "3jUgpsvrkpXjWSo63TXref9JapWK2hoKEiAQs3rNJHmVFKXHcdy4DWho7BuoJbDt5ncSA19snQyhDnyzmVpDBz96",
  "key10": "4ikz5yomoFgYaK49J1sUaEbXiaWzUecnUrNpyNXtmoD1HkWNeCJUDKcARHQTsYyyZS4bkSftHpEy84cH2zYJYrco",
  "key11": "5kyxDeUPLvHnLx56H8Ta8Lz9wUAqN62wpfgsFydt9VNJo56Lbg84HPC3YDqSNkvNGFJDYJWpAK2NFEFWDBP2t3Yy",
  "key12": "5q5Es71CeYkDu5DKKRmKjJDnawMFjKDqpKUVGepRpPpqsgPWZyzC4BpvhpHuE7mKuGSd6av3ZP92GDezF7ftCVqy",
  "key13": "22mgfoZe1HsAFJvTSAMPBWTLohv2HqutvhfHCPRs8myaYs7j6sbcMBismadT7Da14oHrWjwc7dFY9grhPUtKwVyW",
  "key14": "4TbUCpD4SHJ959a7mWxgFxXbukYBKR91fogWXyFunDt1r8dat9MgKT791gk65re6t2PsrVJbomwA2weonv4MRYpx",
  "key15": "5a4SooTYcpiVDfQWVN4Dyp7FsQwpYVsguQxW18KYQZfdq16SUN6T7enqDhcP7dxgcmDVNjcSEjqb7n7cP16Bz11m",
  "key16": "2AmVBUMBrU8DYFznfZdEE6HyRQu4RSpqAC5VurLNA5RLhYFZfVx11F1WvFYAikJ4J7SpTXPeDXzmSuXjYVDMYARR",
  "key17": "53hnLyVEhAsT9evnrR7b446EePmDawpwtc1GRNcLn4HLmyGpfjBp1RaxuNoCwznmAUTHAGtY3tFanSroqRpdG9R4",
  "key18": "8pz6yhzPM4HLmNgr5huWJ38FomjQMRDjbrmKm4D3BDkv3X5m7uRegfAX49spqfo7xuKGNu9TXdZ1v5yDZ7RnQGG",
  "key19": "37G2mVmdRyYKoVvnD3NtDY9d7w2b6cB5kwUzZ8iSTwiAKbthuEDJkADVGcm9jnEFz3v7KkUKSw9CnTdN1emCjxCs",
  "key20": "5YYcmnTv6gFNxZJeztan4jV64bbaStQ7rcG6JoksSCJnhbyKBSmZsw9nubxQBBnhu47gp4TdN94T5ECxSMUALsXq",
  "key21": "657TyuEaNqwh5dTxZCvh5EzJBuTB7rVERueUvnoeoc8PNy1NWB2J3uUqtxkxD6dAQDorCTTsMMCGhMS9eW2wj1P7",
  "key22": "5AuVd8pVDAFwdNicMPphayVUepS8os9hwiUfK2ZyrV1os8JZm4sbTDNiTo3wU4vcaNgG9DjTrGjooCawBabY6gkZ",
  "key23": "2XgfgY9PXkzjidECcZbA2WLe9Gzcg7UaAtXFm23fgJxSzYDpbTVKNuYeY4YtD3KKt5dmLM7oCPMCwSmUsV2FTsuk",
  "key24": "5x8mN5ddsYQYXBsCLmD2BveM2BaAw8QfWrGj4zfwBEMf2gQM2bxdTAXUcpiCGaPgpU86fjdkh6dPhpHjsyUVTpHd",
  "key25": "hPdA1CeMjH7TYw2J2et2q11Dk8p2DJMLFRsezmPKnWyP5YDJcwhLCWnU6CzyFWo8Eo8mK88Nys2X1fDDJy1SNGY",
  "key26": "E3WxD5aQq73pa4xrc76LqvbQu17ewKEoZ6gSaqd5nFgW8Gt1Ev9hP6kThCFPKx2DEFLruCdL39ZYwt54WsEoRF5",
  "key27": "2KNWsz3XckyDY1vA2bfYGtKbjkUVmV6mRHy139bTqeWE6LwYouqMbQtkPv6Mf4pirDGyrLPnsNiio59PSmQWfWDJ",
  "key28": "61bmFPvveiEFFRy5CNvqapZ4FVeAuKbEyP4a5g3rvWe4yp78WN2A4mMrA6UR5URJGxSRL3hFCeHcu7vVJJwxnkg9",
  "key29": "ALhtuHuD7RDubKwN4bs6iiKeeMBYNMA2bd8JSdeH9bKeDfrmoAp1f1gm9mmsVk2jgzhZAYXAYqFsCcQznLG3XVi",
  "key30": "3LJbfW7P9AWGKisV9nZUpj4rr5eu64ugAduvWoRDxDFcCSWKhNqVhPigy4qWF35dywv4vCNGDWrefLqpRRREG1kT",
  "key31": "65nZxwffYT3Tb6Z37xU1GFWGkA9CBZh4Qs7PpjjdHMGdbYBFKGN8fgg8KAmEscYQuMrHMdoWu336n6EsxJY8LsJJ",
  "key32": "2wkK6FwRNoYyrwBuCjh2CA17apHPnwcRBf8FHJXkCsPUsmsNkKwnrQmf2dQ5GSd1jNJsVmqE36qw7ftcYLDRoGWu",
  "key33": "5zqpGHeeFPAJS3iwphUJ9pxb1S5XcLegUjnHv6n4NDBWbFWCPCEad4u47Rp2Ei3zri8dJtBbnL2JV8yYRifaV5Ag",
  "key34": "3XrFDjbJDV8GNt2xP647qLHekYbmZe6mS1n3Ph3M9oNseujmbkSNrMfuCwAe46TPLkKbE7J1zsXBcGshiWSUdFH9",
  "key35": "27k7ekpoJTZUAnARpkdbDMuufnSeCscPa3WisnCr4qwttZEBwJ5UQzjeAHc2uAdG9j9rPshMNm1tGtints8swZmK",
  "key36": "JB3zZcP8KRgQ4X9hqHtx8ZFXDVL6PZ4oQWKwpk4oS6oioTNwVEGVTGNSuCLsZWtFCmJs8M6pyrL3ts89Bes9K6J",
  "key37": "49HJvA7AaSZNLJAt7MEUbTijifTDNezK6bLKw2RNQeSQ2DZnLjTTwsbkSdvo9EqyaEn6ohgjEMXysSXawULbetNB"
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
