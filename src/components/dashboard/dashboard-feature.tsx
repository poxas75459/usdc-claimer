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
    "4fhmMXLsmS8PY45g64PFx2W3p8bGmCMzgYjhVjUtqqgZnmvYvjVQECy76HUBR32eRog3NFc1sZLYJ4ikGR1MtVUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DrHZgSv9jy1ZmRAzQAnYmHqSasfCExFGUG5h1yVW3WMPBu6WUfADFmM2VtL77JeRh7asUuwTDC1tEFNdRpJv5by",
  "key1": "2oFr8Ft7g7Z74EQxY3yZko2CyabXigeNUWTWaF1TcHTzp6hnyyUwedjGRjmzKw1mDphkvng9bnFXSUfuUGPgC4K",
  "key2": "jKcoRxCrDMCcv9PiVmmjbpUaH4DyM8KZdwMnhZdvgZyHDqLcZtKshHzLWBX58BhFSE9sd68wBBxsUCPNNd18CP6",
  "key3": "X1J3qUTQ6U2woX7rLvPw6QYf5J8W9tMePy4EwDfj9NEdKqA3vxMsQ39VM5MKoe5s4HHnjijCvwJAfHcRDh96KkE",
  "key4": "5ycSjUGqCLCtSbwN7nPQ7DANGf9WvY7EYKn8A8DoYXsvEiSqtdU8AJk3qGjkh2XFXi7eTjGWQaG58Hk3pGpAfXpw",
  "key5": "5GZ4CmupaKZTLttdcnQss1F5tTxJ9bEu3RP8Wgm3zEq9raomsJmTvYheg9UA4iFyVeKj1QWawdQK6jtYEGmKqigr",
  "key6": "3wEnNbH1Uf2PjGQrWUQinmapx6CBNZiPWPckHkiSoNcZaxEkL4SQeNUG5RdH62guNvwVefTKLpaK4EoSNo7y8WyV",
  "key7": "4tpahawafZfcXqw5ofmAKiVDUnRGPW9BbP1fZfNEzTwLtfFng5WvBUnvaJxjgVQafhNXix6Cnn53ePEuBH1zpUSU",
  "key8": "4YWxUqhqoeQAkwq5xwGyugzweiwwtVXweKuoii4fcadLEvDRuGvPNwEA9repB1BwGPF1Yo72oZR7gJsXM8bsHiLE",
  "key9": "4ToqsoVDmppF52qzd22QW2KmMpBZEbLw5NwGzwPSE7qGcCmYHX8jwpo5CqcFGnALSCVv4cSbpZnHpZAVj8CmQcpt",
  "key10": "Vp2NdRnkJB7p4pShSMVSVLt2MPfvZDgyLkNM9rQ15tC69bgQsxvs5WRr94j4ovG7NUDTo8Li3YsYW3izcbbmvBV",
  "key11": "4akdsuiY3dMG4UVfnZeqHLzLxHaYSxwjokq9qDK8xsxqovuBnB6KyJu3aNMw3ancV9cvTHXaSe6Bnw8akXtxeYLn",
  "key12": "3jxvvxJSKmmKbfotw2P7V7WuFgL5mDgqsSUUoxvKaaepSmq4f46vzYFej7vimL633GQJ2sLQAmH3tCoNb96pBKcV",
  "key13": "63Z56M8yW9oWDL1B7EWb38hyKHLCqCyErxaTPJKiPWbo5eU4WsV6YgWaLgmLzyuCQtX7LGJD2wDiYPpU9h8wZZtP",
  "key14": "cEm7UZFmYVwAzvQTvGBCkFgWtGtDGZC3Sugrr8ZG9rMwd6zt4frGZZbtDmXTQvncRShZB6ZUgoSPuyU6hQb9Wno",
  "key15": "2eD16D35tQzY5mEuf28fe5qqmnH5Rw88vMHskTdmEKbbZpVPSYTzAb58AXoiHwm3X9GeJYkr8rC7qVdFEyWNsnVj",
  "key16": "5rTC42xDmafp1pfUvuQVerA6TQLcoYdztY21whwwrDQCvKc2WYJpoeKDH2cZkFNcEJgWA3UNVomonXofdRRjYz5b",
  "key17": "4T5pqnD3iPN6JyqGhkRevVEDYmqmf3LUR7vdCHex2VeAWPdaBqsGDvMGVveyD8791pjTns7feRanK3nrdmZUr2gh",
  "key18": "5VjuTdXWrd1yMiY5PYnHy4M9MWh1koecA92q5ZUhR8RAy4inbYXhGcNRDG5EFUBznPYqPSxWtDBbQhmYdxDRSArR",
  "key19": "2RLkUa5Ng3v4QTsCCNoyHU9CLyZbUAX49yUVVY285bSWCvMWSmAmwdobH5XUat2q61wWUcy21LndGPFUnZcnZRn5",
  "key20": "4Ze4ZBnxm4dfVeajrF3gCMMeWQL7d8qTfsFfQTjYkjAC5zmeEJa3WCmuvwarT7o9wvJNdvHSTxnfxJ1NFdNiDGdH",
  "key21": "5eRmJLZRiBmwbRGLLJTDBdc6C1qJJU5zyVFeXwLaK3RaKAMY3soni2hjPj1esatnbC8xhKND9zrXEJRVmW2sPxnE",
  "key22": "3jYeQnRdaSfpiZEH8s3xi92BLCQmgpUihZNvPZ77Dk6NVd7Y19BfnC6uFyAUbrDcRjvu48oHjPsqcMtGKb6U8PZF",
  "key23": "4s6NfNARrqDvBEnMVHFosEcCxuJAgJH7nHNVw2M9qzV31XwVztZPnBbWsgkzA9mhNFSBYrXWywupXTSahyzGN65b",
  "key24": "23BQa24h58MAWZBgd1D5YDeU63WdU6tJsXRiUvTTtMdRgxPE4HAMDcZwnyCLo8tZ8SNpiDWThUf3bSJ49SHRTcwB",
  "key25": "2wA7kbS11oWAVuxwdkazMfgs37puVu2t8GwTBNWsDs1HNqzE9HW9XMcwCw5UbC86VxtjFifYTctxpKkwFL5XAB1K",
  "key26": "3ZWCzcyZWzWk5H8fwQMMUH5rxiRbg1BmA75yNK7PJXq2tyYA1K8ZBV4NxAwaQMEiFS4p1K5oJ2AejyVrfm612kmy",
  "key27": "6CFmohsULJsM1aqN57MyjVtoE83ALmpsv2DTV2cZ1B315QqMJddb5qPSBkZXRaUVMsfr4BX7brxgGrb3jzcK4pZ",
  "key28": "VT7dB5DYaEPU64XR72QcEdcUEWqpc5sYzPcjbvew4mfWiyEC9onyx3HuLHTbWeukNPgHiA8zo5Lo6i8oC6vHE2x",
  "key29": "5oyejUHNHypCRVrJ9QiYjt5szQXY1arCrhBapeKzioKqUYfMea24XEiRF5DMWPEVd38D1o1KXujUgemTbrUZQQQE",
  "key30": "2DtANyjz2hbfiWN7c8UmS5mgeAVSCnHdjvor33xG2jCW1LCUswHNeggFJvDwus2jU29MKrxMoqcqBfx6v3sZEUHW",
  "key31": "2NL3bB8Myq6hP8ZVBteimbAWh4HLaLKMYEg54t5yg9ByTSCoNpR7D8vx97tomuoeykDZpUnKX975rxwtnSq5QLmU",
  "key32": "438T9kUSBMgnpScs2nvCmSJsuDovRq7Nq7anbYsePFNZmQQHWAtWUhNiMBTazxdFkcd9mx2ZW18sUzVfitYrtndR",
  "key33": "5ZEWW129U3EKYW57yfPTmvtxQRUWkXLgiVCip2BA7bftBxVNxWw1ZG4cYDzc5KAnwVMkS2fThufV1ED1X5NyyHSc",
  "key34": "2fYdhG8gYACqUVaEgsp4j8B2jS2kyYAsL1kobnCuUyh3aGwUujXaR4Kzbma95d1Skj6h77KfYt8pKa5qwZ3wbGMT",
  "key35": "4LhgdKv5PtCPH6NdDKtpX1hAUB3LaPjCnXLikbtrG5iULk3NaMqANvxmki5akYAGrE5z3wemCKSqAjayLFZSoJW4",
  "key36": "2fFMhTvPhiB9GRKEdcbCt13jo7URHkwX2RKRpWUhhFj4mdaZnehevCbequvRUHor8VCwTUJjos5GEZBcCBDyhsDM",
  "key37": "V26i4kusPrXtUCjAngJdgRNs3gmd59fKVKPcN7M69463NQwnypkuYU31Q9Ciq6qqpGjGt6wVV499cwnwr21vmHc",
  "key38": "YHXPw83vEsHxtS6hHJNV2557shPpCj24rPw8jYPQ4mKux25BRcrgad1KApYh3sJKrYaY57ncuvTDK2coUoDeRLT",
  "key39": "3hDNgZweNULSaeG3oVrLWjBp72VXRu9SCoe2WH7L8xqoswukYG7pMZF6bxWApAmQ3QeifXrAybSxGWC1fz9TT3rQ",
  "key40": "5RHrgU6iiquawYNPkXYDhpFAD6kLYX3MxRq7RpMxVuGs6XjGgXbsK2Ay8EoD13tBfBKSpRxBBeV4bHt1iTHQqgki",
  "key41": "5zqpHxhxcEqDFQM3oEK5eVMFWWqet4XckRpihewrFzZbPfGJ97w1wEBUhrzyrdezfVbWZqauSAp3omaFUFew8gqG",
  "key42": "GM2554bgCtGTYoDqquSEaoa4TmbjmtRdMtHQZJXtCwCRjXrpGoeP83s9p9wJi81wA2mvpPcV6GnA71z2G87GUdA",
  "key43": "3WbVu7yTWRjzMvEocYtckjJHcJGRfPCytWaywhvPtf4tSXZqxgunsmWxnLRQ6FUKk4Ty1DSQqvfSPV1wywtUkc86",
  "key44": "56wS2uAJVfotPyKkpNq2PoPKKCK3Q8ojFjnudZvAVTeCQkSxmU4WtRdWqzNtEyEDxNkpcmkBEFwn4WdyMV42QF7J",
  "key45": "3NfZm3vtGu2vy9zg1aiZqhxLsvsMij4YMHn5Un8Hv1uwTnyHcopuugjUWEJgEb1MqKKeczypFjoHvTbMqMZZ4SNL",
  "key46": "TQXjnjHRQUWcA8ZDEjvUs3sgf69JmmzDAK4T7BwhzrzYUKQ69cUA7SvnCPzTP7Nar3tRR1FoEBRx6BtCvqZvrKg",
  "key47": "5Z5FXdoYobbtne4HqXQBrBCMbctjzGgy8RQts2NXDUqCDhZrShxuUV4aRN7U4jmM4BSytfmwmKCmg8vHKDzvk2Ux",
  "key48": "4mWpgfyhcfV6BbDo8Aps977R3RdTKYCurzwBMEvNm38vJR6Ekh955x41kMBwDK3iysRajyuPzHxfwQwTbAf9sSXY",
  "key49": "3tkbPmBpTE5YTR24TMfLZS8JZhqvbqZMAeYE9tvWsQYke36s6XNG3dXmuHcAjNb7uemSyAu9qwwkHVvrbjHXccCQ"
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
