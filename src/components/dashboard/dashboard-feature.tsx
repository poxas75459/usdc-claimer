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
    "5YdyPHQ6ceqxhWXrwcosDnMnvVwjSovjZc1pqDDkv4E1Rq99xhPYZX4cUKhW3HUjhUCKn8yRhyMbd3n58nYPpJqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51cYVzYrPrAiSCQPrzgHMbFczidaFDGs9Qp8qB3MDR8smTbnRbZpVFjyg8oRkvWyE4UYFzjNaHEjEbtMokCYBdoE",
  "key1": "39uXaYcvj6EHAwpPBkeVHoF7MZcKpz2B17uSz71nnkWcR3tcDA6Cqz2kLPdNw1jhvPd7xTxhrQ2PaqUbtmGTnti4",
  "key2": "23zUiUreQgxnCAth5sRNM8REdq8KF9PZUUYHtuzrS9BcveUpwyneBmyZ5z5s3n4gpngskfKsH6QJCMKwScaPNJNU",
  "key3": "3Qd5FKxikxWdpPAvGYhrDZPVHGjcb1xw6AKKpUX5VZkEYC4eDEt5sgHXRwaTbKsMcV7dy9XwAFW3m7vCoP3m5YEY",
  "key4": "5FQzmPwShF1cZXeBiiPHVAF2PWSrCYyct4MDfhYDtuzMjMdyuEWNNdBxjLLviWcxwWmpT3aVodxHsPrvETvqJzEW",
  "key5": "3KMfrza5nfJxCSn9MpiAW2G5LSeHDmLiSEtPbKQCY3HFwm5zQ1tjDx5Wbf2LpjpVaV5wp94rBLWKnE6itmcJ8po4",
  "key6": "2ScRYh8CjicG314MasFHUbYddB4Xxpt82FsH267irysE8WX2phvNA6BLMjfFEKWJpuhh3fvJa7BxZqVevYJZVaDb",
  "key7": "QjdDerUavaX6EwE9Erc7DLuf2v12TrfTvN7RhWmasYrE3MQzFQH6QBDa5QQEk9UHKBMuhRQBxV3LKb2m9tBFsCU",
  "key8": "23PTyotGrCgDzoeGZmMnWpRiSyAHLFEqpFNszRqz5HReGhcJMHad6TQQiiJapXwRRfqM4DgRqGDUY1LuUqGYA7hq",
  "key9": "2SJvTq1yoAErUnpdMCBYwtykZbJKzY4wRFT3XCnsNcpZc48T1iMGoEZ56HZBfpui49Bp9kyHpguWFtrdwyLnX8KW",
  "key10": "3vE6Ccag5cLJQQb7JDN59oRrBXSm5i3xtYNPLePeCnm4CoSc7HQGg82bMRcoEiLY6WWiPYcvaQDJNL7PwDqLCcBd",
  "key11": "3ds1MovS2TuRvD2LSCR3Z2ouuwvnPu9oghQ3mKNRqPs55gP7wkWigTEC5ew4N7Hpu6QQobfnZAYywXEbfdBGJcr4",
  "key12": "5Yr9eKCdrpndqbNfV8KHJUfQ8vEbrwRN4jTaG4C3h34K5Feg5Ft2Td7kiYPJV6AZkaZ5m7VGKExMFMqQu4CuEUcy",
  "key13": "5TT3LA3bMFGBL42zx7fCVZEyXwCvDWspqKzKSajkZNWoUJc8x5zUhkFgB1tWT2YaSsfLxnPwgFZKwbCBNGJrjgPy",
  "key14": "46mgYoW6fo5sNXeYNF2KbNWSy6eTCrTF2DMVwnFaMUw9HSDc4tM25dba8y56FdjQAnKeE8WU7Lpt2CasKEmb8HA1",
  "key15": "5E55Z6WJSCPCr1VFeUoShrxocuahaho5bhdTkTmZ9uHwSNqeaYuB6Qpc4F6uwsxJHMFAvjBVrCLuTpJUZ3nGU4vd",
  "key16": "1obqphqMmeRqnAp2QJstGn5eafKZovzzJ9TYcaYbejuKB2ZCU1JxCx2fnUAJivvLzkC7TRSKgtV9AipYtbz9HJK",
  "key17": "4aEvb74xU9Q7b2BRcUe8m7swUA6q5APsL7Tv1dCQqJa3uQh9Kyou5kyLhzGd33ZKgeS8szpa7t4K667Uu8KhmfqX",
  "key18": "5XVEA1tL6skNfRuqscevJJ3he7UXeqwmd2cFKyAAdJLvVaariEBoJdjh1VCYws1u7fT46T1XNkugm4aXuVn1K5aa",
  "key19": "xG7mWcKkkSNJzxec1tyBAVp4jzmTkNKkcRqdVWK3RG8u8J8XzGs6aRF5JT7JfPXg9TgsHgfPbjz5PSLBAWHrDNR",
  "key20": "5B9YD7osfn7pM8R53vTnydyJLKavk8L2xTUrn9icFSMUw6x2pbLdKtV2DmVxgRKxjFzVsQCiviuSiZt5axSbxc3i",
  "key21": "5KrgXwV2hKa5MESEorhaxc4Rdp2ApU8cXHa68iatTAeZDjGSxXvr56CeT8cwqriVYQLbytEPAU9ZbxWiWggVA6PM",
  "key22": "67fM6s75AKP8a82abykCjrPF6MLWvgr7f8KR35R144iie8MZhxeRdffjkcbpTq8WdcMu9CEgKq83RQ4H8MpAfJaq",
  "key23": "2zhJVSjtz3i1qzStYY4DxCi8WYCFXfRGKAWqXbkiRKzud73LX3X77WPr4ot1xkN6nXzWNPDpyEX8RHjsHWoraHYc",
  "key24": "25DtK95baWREAy2BzVpditEkF38U4wz9A4otMn1N5QVRcW5PPfJCP8aCqhLuh83ezGkkchppB8ozJMbm6eRbwcpd",
  "key25": "4Lx8bg7dZPUAJnN8UQhG2yA5tLCkWXqxFY1YgNNpLnD94XvYzhtj22WSaHs6nKX1joc4RtecmwuV2KLr9DKCLc78",
  "key26": "5ADCtvxKr8zZgWUuhW3Q785CofvkyNP4BEaaQuUw1TRH1AiWbFQrXzT6XRf9zn8PJrdvm7AKFdFmq47GYEGHAdE",
  "key27": "428jMYeruTUnXsqdJqtgAqLo1qqsw2yeXKLDfTVsQHyzegB5hcQTDmFtatmkzwupzxdPzQvnULWHamNKHBhPejp2",
  "key28": "498rsVChwXppsreEW1GpN4VMhUABWUG7Qh4YAPZ6rLt4EmFYRbKiE2jUm8oxkdyTcbMcp1h9rzNiG97csfVk9G7V",
  "key29": "5nzF253nZ95MY2cKDLzC4iHdRhA9ZesqYh4yyBu7VuzP2ETykjtqvsQAR2m2hEULXTjzxnGV6x6qqgzevZSxePGf",
  "key30": "rS4fGGBpAnmnCqQJU9U6ees73ck462bMZJFgJVTPvCcKmNMaRXsbFFjSqhCDr5AjQAUnrfsiXfdh3FAq6NrohAX",
  "key31": "5zftB5HjmfFvHPRfBKyA1pLbV3iQoEgXipcNwfxvYky41Nf33LkduGeWBBDSa4BTtWS29b5VVCXYPKNPTzyHkowP",
  "key32": "357s1mkcPWVSdNoGvDD6m3WHGWmQBCC8i8Pb8pAY4SMNWL9gPsNvrDhK5KLnuj54Me5zxcuqh2czvq9MhNRFKo5Q",
  "key33": "2KstrEzCraw2WGtV8QN4xRYZ16MDttw8DBrnPKedFHB4EJ3GYBB4ZBWiVJeq78f3C7GWWTUcsC5xsC1p15kjvWaz",
  "key34": "2E2KGZTMeVDbPF6zhsWcTXed4v55M3zCkg7AfguSpNdFTyzEsRe7Uy5j8gSxU1ii6jS8kUdCoLmy6XjaSa4gqsX9",
  "key35": "5E72r2zVpDCViemZT5j6MgW8wQqBYEz4NYLZD4sPSucpNSr2yQixfo4iJ3Qonbe9Ca3AkryxYzDutVHij5fgmEWm",
  "key36": "45QXDRpVzTvdXRnceRHt5wGUn9zpDipXcXvBSZqj6Fo6sVPUyBPPMQaSEgzx8xMUKMa8WiYU72AUAYzd6qoYg8FX",
  "key37": "5xX65wzFY7gdtQn5rNo6fcc13CGks8mUQcbPNiatk4Au4KCZznAZCpzqwo7Bf2hhKF39ZFAY2hSyLzejSJQD1mPt",
  "key38": "59kQY8Wys156XbJjremmXsP8WPzHRMBpbRrUCQZKMVBHTPePdTvxM28qbUhbM4SJdtXvB8V5MRkb1TZz12AwtH42",
  "key39": "5NcPRM3Gx9NTTMicDZdFosee7MCQQbiDMRpwD1YwXuAqtY9UtLSyrZ3t5EQWad5fdLSxxyYLHQSS6J1mhNkf2Hyw",
  "key40": "4XaA4SrhNgSnLA9FcwNrsCE56iNuPCWfG5uD1jfYcMdAcGNbH7eNLnXAWpJ15CYoikovrJAjMaaUktWrBG8f2FZq",
  "key41": "uys6L7TBUHRJuG9synj9MPzjRnsyL6X1HQA8z9Evhm8awNPYkGxmY5JKmZ6oZ4quNH9qAgHbg82avQCXDBZ9Rrv",
  "key42": "46xyurxRN1UTCuZ8J5eZTZheWUqgvNe31hMoDRqWMFgSMU9bhjS5NHfuHes67zqUPVPUSXTSQ8HKv3XpLiRzmUGD",
  "key43": "3wpS8RoDXT9JjeQ4feBb1MY4aroRDFPzbcixGCWZqfxFBBQQqxcf2h7kjtfCoU4rkq56nTf8DYcsjFecTmNG64sE",
  "key44": "62bdr3UhRzCvdenavSvevcJg47GcZQ1QeGn1pct83tdGe3yKhVgrGz45uasZcCRPJf6zXeUzXvim7YCvsLxq2FXW"
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
