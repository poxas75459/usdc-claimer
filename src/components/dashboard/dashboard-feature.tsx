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
    "36ipFUkQGaADRjLaAZbf24Y1inavLm4AW5ii6PJRxp61kUV4dmGKRUspURnbsXtbxfzMKutXMqzwhyLQD5BPbdgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hjeLWstmu6DCjhrx974uk4nzQpthmYTJkHAU6riyV7ERTwnTgNCn5RcR1CE63Yk9oX3YDE8cPBAD2vFQuuAjjhr",
  "key1": "44zaabtFG9r36HL98yUTDrLfSoonvTwf9Ly7EuDwoxfikvLq1Xa3XUQKCLWNmuKv3YSG95k1rd9ThrXTm5PdovBg",
  "key2": "3jJb5FwHDCEfC35F9zeahe1dbuniNhHuuAQkC3Eyqjk1m3Nk7QxCsrbhJuNQP6pWA88Mqm6k5LBqmXfEuKppYDrz",
  "key3": "4P6xDoBHyg9ggm2cGWLK6mjUQ3qsBMfn8f8ZytPUKKd2W3fpx2TrPFmcNfhdL7Bb7AbsNwPs9XnauRQnfugmABn4",
  "key4": "45UBFmoRfWxxHiBH137zEQTL7Pi59jEPa5xt2bqBLSmd4K8zWjVfgQ91okkeiEeYiYud8RCSnh9pGG5dBPcGAbSo",
  "key5": "2WGFk9ZSLk87QhgUrGNW7eEHyKWWgR9nQGmfj1qm1NcT3THE24WhmE9rUiPEQTcVaoAMRrj8BpC63CAGBvLNdDBK",
  "key6": "5QjNUonMPFoBHSahphF6EvPCnMp6eGYCDyJDmM4pBZPLxg6dpQY9LfHXcXSmh1oDC6ajibrH5uLc63zyzZv3nSg7",
  "key7": "3bFVix1EGjC3py7EZBvn6RxM9HQEZ1JsxibAv8vmU8c7tx8kduRxKGqav3dipB8aPFJtuJrvenbdVWtEZmeQi91e",
  "key8": "4cwrxC1AGQnut8opmFwSzKxrQefwdEaYZ8rTWJ2wzHDVxQHn6PdFAT1rHdFez8NSaJrYedodzPicBGR6AZ1LPcHX",
  "key9": "2MPg3XfMAkvz2ssByUPxsFYRsLwR44NxXyWKAv2Ys2W3T1Y3u4H97C4Sb7xPgdSvgkSu4Sju9fDuCK6JCQybmexQ",
  "key10": "5UaGn4p1az39WN1LRzAq4HVWajMbsgkFv3MwAXATG6dJ7k8sGkUBg25o4xB93iffm3HKrZYgFuzHKVQJucM2UGkm",
  "key11": "3G4giizxKbdfTd4UK5fmT7LWTuiAbfgQobZM6H4XVfTH3s11BKYTksMbrowhSqAPtam2A7n84EQqrMEYqEngCdfR",
  "key12": "45z4pBtokDXo5jQvRZNGvsWQ5qydA9Wy9r1c818TGauLQs81afnzDaLMG6yCNtrKm4ieE3MVpG7WU7z17R8k9f3",
  "key13": "5gNWmQjAZMfw1CiqPcU8g388jp8qqkGvFZbdWHaBKjfGRXmEct55XJdV5NGEefikeyDjX5jGiHumbhF34WsrzenQ",
  "key14": "25vscPssjk7YE69xx77QUYusFvNMrdve4H4ANG19SwmVVcNA97dq5pPAQB6bcafLbaKGUGKvtmjUg5APfitjrtFB",
  "key15": "3cDTggLS8b2KAioFytwLnp5e1tfRGDdx11u11kEGLZR8rv8iy38kGbTmHcFiJzmZyByWm8EJAdyZFyNRmBwBTEnq",
  "key16": "5DQin4KeiUZqJWa3cML72SUKgn1eojvakg3mVf7G7fTRfPQDNxSoLBfKsuaT6yaTA7Mc52jks3VfoSrph9g6oMPJ",
  "key17": "VgYWWaaN4ZsaYeA2Wr46XX1X9w1y5URq6mmz7K7qaxvWNrxJfBfU76UiJcZQp3q5qCmQjHFQZ6k89ipVsHjTeWC",
  "key18": "4Bv3o8awnXDgfEJMNYUiwrX7XnsDrZ6jE1NbCtUC2oayYiqZSWowscghn3HjYW9UUZDkyUPAkND11edmoAjBaXEu",
  "key19": "3cTeUqiLV1W3LGr5nNwm185n2UqFkVNuBPvTf7RyeBLXwgsnhQDuctXDHgEsFvWadybcmbhoxWPnc7PERJiSb5xV",
  "key20": "4ArDqAFivzP7Jidfufef77a33WhkxevWrg2ACg8Uy3CCSz3AdgfiFxLCnrCAyJn7a6Z9UWpvGkfo6ohn3jkEoonF",
  "key21": "Dze8itkNJHLd431uZBwY9LDRwFeZ9ZcxTxs1fHRZJX2cYUnnuVqgWp9NQncuLA1mafd2KUriAztZEziidHxBswK",
  "key22": "4S6rhgZtLMQ4L8EhjJBS4PTPzrSsxEGXULkApRz8AsDtEtUPFFj3A13K7AmvDB61YbnTSEDcMycHVC6W5mBQTatF",
  "key23": "R1vocdWEQC84wUHiowoAxduuePzDbkrs2somiUJsU2fCViatL4G1JgUj7pTsL5egfdPTzpR4DmN2LNVLRsG6xHv",
  "key24": "52rDHjvCua9WhTdtgErB8skXjTKthiwi2coozhi1bpDW4BKnDWZJS6Fvcq4P22GSYe4LbAFReitbCE4wbFqj9BEt",
  "key25": "5kHEEWFABne9FzdvYm7DmjJVc5h8WsYvgkKHGdnBKaKTXZHeehtAQePuS6tVBAX7QNHwxvwztrLjUNXwp7VcHUDM",
  "key26": "5U79oxRRv1AyjCP7ABQFDqHthc3Rb2ZLepTTqtHbXkWPQhPnsXUJj6KqoZHzoyXkyBBbacxpEckdrJxZu4FW9W7V",
  "key27": "4aW1EbFimXsnk9saShtRqmZyshuo7CWZ1VN7JtFs7Suog5ria4y1spoFs6NMWwjcP62HjniqxFwPMyUoUUaA3vZY",
  "key28": "28oxLDFB2zxA3daKKNvNLFwtibcUYLZvbRA5Tm6KPAzbJh41j6sRsEdv4PAEZF7dGLvXH3bHx6trY5Un9r8rZDu9",
  "key29": "4jyMh8EgAWBzrAu1K2gCHqyTb7qABz5pbpopXeBG7yBJLg3meQhhqyJWorPVBwmfMygbSdCFo4CvmeqkYwptCTHR",
  "key30": "4sLrudPEZkKvKRJcUyAktHHRosdmXz52rtHkYS4FzVffiz4p7frx9wBPkhLhKtuokhFbSAyMqBxvMHHwNPv5yKVc",
  "key31": "L7npesBr72ELDfN9FCczs9Uidb5Ydai2WSJCLwiRhGmug1wjMZF2mB78RRRT9jEmN7iFJAWqDpTtiEfCbjGfvYS",
  "key32": "yaGqT2ipm6a5FWyddZbZsHesjX72HReNzZS6mmKgxds8R6U5wZsNgWrrrWhNqqCJS1xL168YdRwE5h2UUdrUdGB",
  "key33": "2q5erdEo58rAyim5XjHEs2UP8kmjFrT7wAiobVrEBR1uK3TX1F4k1pUDa338Gs9RDWgjzUAoo8NH52nWtVLkifTc",
  "key34": "4jSEh3VBZwnkGgAr6qoW9KGHJ2W52zX9LP7xscicUi8UBUZRo2hYGZnYzJ1ZbybVee4FTcft8UYuBzgWKwdUsLdJ",
  "key35": "62D3J8uB6ASVntSRK8QWD5LsKuGnyaVM29DpftvuPPV7n75ucY4ggUsfMghUvcFakTwuWrM2DtT4yE5bp2fe3VaA",
  "key36": "2JPYrUiSdC4kgXGPNqE5LuaNZtSK2D3KbtaXJDbXmKCDK46D98XZbWWwjEe74yhiAgLuYG2Kq3yzxNov6eMDV1Cm",
  "key37": "5sWFxrJvABZY8H7tMXb1HrKZKCK1vLx696TN2mTMqM49DuJp1zf42zd5ZMSVx1i9SWqgyoTUikCX6jhwAspWJsNd",
  "key38": "2bMchgMUyVTag5QMBoRbSczXwazQtonYtnKCxqTLki7hUXW1Nzz2YdCoUYEpdQavDadxvig2Ba1C8bRoB5k8ruyD",
  "key39": "3bQpVhQUeVX2qZQRQpkzGeXgENPoESM4hqofju8USRAjgf6zUU2Uiiku6cXmXeLoenWaxcSEpTk7jv2qn49qMc5y",
  "key40": "4jB66ii86NrJpZQcVh13ikuK5sEAbQYFtEYiizYVDHMYJzMbeu2NfbY3XSyVkFXTzKX4t82dtJJrRLyAagcrifxj",
  "key41": "4jcXQLgp3ZfMzBJooeR47iiBbfx5tuJm3a9ktpy8phhZbzAN8P4nMk1aJgXTER9GGYMgTMdAA8aJfLRWYvrM9eJQ",
  "key42": "3iapf3sLXfWrdWHRJmJL2hLnPKBfwbebAxSu1JhgTWxMeUjpLC9GAsEW7kPm4FHq3skkpBNbFCcoxUGAQzz66CTL",
  "key43": "2WQ5Cuzw1wh1bBc55fpPEQHDY3TxiXp36KkZ2NLtcdzvaXCTBeCidXfYuoJm1fi6KuUgtmKsEtHLtMuVE5xRgRG1",
  "key44": "4qa91tZuU1D95QWppPAXT95Q4ST7jynmWNY2SRfq1mXsWvVNVmXS9kKZyrXseX7mHq8UAwjHLsqp5UaRgSBQehFH",
  "key45": "UNZ9wTc7KyQSzRprPLpWrxqkFj1EBt5qF94N1wU6nzN3PHbcDKzZDeECSVgZrqsP6frRHgfePPQP9ppCivKfd1q",
  "key46": "pABW2NvVCCgyfTqvpyqaUM8z5vgbrmv19dZ71d79nAeDdk7NGUyErSTJ5ezVNvLEGTxwi14qGXzA3HDvw7VXguE",
  "key47": "3qz8b6gWM4LMcmgpPi2ooSW47c45TAgyLkCfjvsVJQUtQ658RA2QSTcSwhjFT9CGMCu16XsQMAvx3JBdTumXDgYU",
  "key48": "4ppXQ915u3DBrfaYx1LiqJM6D4M4YtAnPDNKtZPV3Da3WaBFot9W8LiBLBKd5tAvYgZFSiBva87TjgLckkHiM65i",
  "key49": "59eoYsSQJ3a5Xs33ZgzCrAFoZz2Prdz2a7UkYk9CHK6GT9G1gxV8kCxsPTcCQRwrsUwJudqNeSJqueeT2pjo6yyt"
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
