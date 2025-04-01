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
    "29WCYWo3yQk4CrDRgfoSfU3MShsdsjPd5Ui8KwaZVfoZemZyycfeYBw3kNfS8z7cqGHzS84Hbq1oEYXaQ6fCMgBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JqxYtBEfvxzWnLrdn3P3k2yutE3PofntaFaWDmH1Hk23vqnyuvQxA5R2Tkq3zJnyyrGYTCPjMYvKax8kupAgG3N",
  "key1": "2inC95EXRTU1Ta5rigj3dN59NuZCWMGLoBGoAUmMoiAVpSQ8JcH3yFuLe2ztiKYXhEZF1dxv1DGQyqhVHdWGRBd7",
  "key2": "3fNxJcW2CtMMrSmHn7Be7FGHForgbVPM8u5SVqfqmjbH9ctRFMwRm7EpFugGjP1wiS5LoPk6gpezq3GDF5idDVY",
  "key3": "52FqKrXNxiMXWoG1TuRjT7fRsh359pJVN9bBmGBdmfzDWJgr6FE6WtgXd8GVD5RxKnJUpqGFkx4uC4phEkwnGiSr",
  "key4": "rb3DBw71JawSWHDUTXufbmCVSm3VvpNymwRoNQLNuxwfHMtykRwKCpaqPc1W6bQc1xbEHzZvVBHGmnWVF8UQgUs",
  "key5": "5ArKoVGSSwfxYnSEE5g3PG9dursSQDr6Xo6tWL5YwaZL6gddSyvPP32AucJUcxF1VbWGEZR33TjiHaesuh2ZCaKd",
  "key6": "3BSVtqcnwDPB2UP7FMGtbqbbtVwEgVkBtZsVrBamkVA7JyECsHvNFvbgtcSnRtiEEagTDDoypQCcdLLU7NWexcBj",
  "key7": "4tsfr9LtEngEGZbG3yPvbUgG1dqs9vv2RceBvcHckM58g23gTYUjj4PdReXS3qHgRFDRby1GPmcu6uRrn92TiTfi",
  "key8": "55doNpxsAAq1FcuFu5Cx8FGFGG5WFdGCbcP9kgs7JXrkQRgMJHrvNw5dFceWttpFU68xQtRQWaz5Zn3R4wycRznj",
  "key9": "4Y6Grr22xUVx7zWyzomKLFBs7MLHaSWweLHXVrNNLHqbvzwwtGB7SbPoxT67njxebuTkdng3ewuaX2SMnEBZi9dJ",
  "key10": "63tCoiFuYdm4UGJjMicghD9M8nokWqwgqKJvvb1HsZagaSGDzDr1cRZpuuuHE19UbBbBvjQDneXMnZeFc3HyyWL2",
  "key11": "2oAsH2qpmmxpKMmnJBEwrKigvZPKwRgb6PPwSbeD6E3tgc1xV8AseYzqsL4itXRYpQq62PktVZY88KKMm4RTywVq",
  "key12": "5ohLXQUNPMRRCgwvETGmjbUpcDfLEwGtY1y1wWNB6ASqav9khUShdeNmNSK3pPZo9i5XKwwmYByXBGs9tMJLiCLU",
  "key13": "3YZYEw7d3fLrdu4jzqNTh8t6R5Ywg3pTRukVa7qkYhc8bkwYc6gn6NiJnbyJGik1iHHqeJpH3c5qNqJMq4Q8Jykt",
  "key14": "2HvxM26EgqbEFjEFnzypRang4AqR5BCRSMGw5LTHkK8KAJnyf7X1PJRuVCtZeSEKePnCCgMFgcTYiuG6gpn6f3Gz",
  "key15": "3SJTBqdtKRTU5UeNoNpJd9Uyj4S8gwRAXVNJXJsEnuv8pKk6saAq9TKt5EkqxqS7uFLWZDdu2Tahb7bHaEgukuZQ",
  "key16": "4ScaBdqTBmULSVtmu15PCR6H48VeGAsgywRgSMwi4RfxWZYUNFT3J1LtrSxp3AydTEDrxR8MroXAogfaGi1AvrEY",
  "key17": "5noXLKtfUtifdqAiuTWWzENmkpJxCQcYZ9ztdB8c2hCSUX6tj7Wnw3gntbRnxnikSedHJzGaBLB5EqwUY2aAwKy6",
  "key18": "PAonUogux9Rws1GS9ALh8RwxKL47AbqcMgtduP1iDkJeLHgspRLqGsGQ28JfWqjvTsCzRMwxYWd1D5eHCSbrcV6",
  "key19": "BMf2ucaJfeYQDf3YSAqHBdwjXzi8vM7zqqKMzDWgr8ULsDNxFtACV9LVCKQGTcjvZUu3vfDxdmhWxtxRdaAWSTs",
  "key20": "UdJneTk2nTCsRzhWWUt8Y73mB4hE2Duem9r4WWBnZU86NUuBMPiKaY3TUU8x8k5U69prXCy7ku8XvacdAkQVihA",
  "key21": "wGa3ywyTunD8JpKgoSqFEF5exaxW7dd5fJPkNYzbVmwkCLG6iLM3iZVJQ6ZAx6TebxKywgcmb86hZ5ZsTaaqLXB",
  "key22": "5rm7BsuXVTVAgb1rRMFvLby8i7iNqJU6K85gnuCrHEsZQa6RUmBa2LygAfh6H25WNvQck7q7fUKZJULRPtK7knBg",
  "key23": "5u3ZmA7L2fpMFFHAgLAcNKNXCQzCj4CkydpD5R7fiBHehDEFe4ZZimmyof5S1STZV19BQAx8uMNCTD72e5dZxxc3",
  "key24": "3s1nVkJrzihRGs8wJPGst8hfanrPPKHeb4NMDuLGWk5YzSjqxftUoPsEPjxg8qrWniEgJsMp1DRdd9bi1nWkGEa7",
  "key25": "5VzmMMDoKN4d5qkoXorXFhGSyb3EUMstyGD1dNwa4wiNZPVdZmf8A3rarRfNvW8NhQPo2fwAakjUS2SD8HqsYxNg",
  "key26": "5Y2jd8K8b69fNNzYbJgfxCswwmKg7mKU8dy8P6GQu2LAzzu9YrzbMmV7EMoRfHqxJndPDLUsTKMufn12yX1ScxBs",
  "key27": "wYHHQfoY64uaGsWhM7GCGbZXTohUpoTgz5e5QCm4LMYynAW3svfN5mTDR8FwLqPHjKdX4eg9UixvbUqVMLi1o52",
  "key28": "Ywh3otC7T5ACmBFeYES1eFZXfW5Gi3A5Qnfd3iCvu64F2De64ntvdnBpKpzPbi8gf1byWAtX1NLrxaVHYoqq8R5",
  "key29": "5vUfuLgypa1FPurDoSLtZbJM7ZSQJaWysBLz7ZDvbkzkNca5jUiToPCw5s8cvdeW7me9AUxEJuVPjTEDB2zrqDyX",
  "key30": "3n5JNd7tPfQpmu8ieAY7ycL4W5yj835nfHwNF7vCcaLEGbNBAQ4VTUExrq4hxY1eGL2jbmcswQ4XtUhbhNWDJKSt",
  "key31": "3GUq5CJ7v4pJJTTrGRA1RqVNDJP8HR9M3YNjG8J4sSg9qDEftrtiYFDxFyNfNbdmea1fNAdVENJJ5oeKYzFHC4SD",
  "key32": "4AyeiSXpiPdUSYGJqEscYEQJReC863zKF9V1z92No6povSVhKRWsihtmpahGiZPHdGR9icWdg3ofphtX1UeGQnix",
  "key33": "5NKNphzCfoLWGXijEY7oLrxRcMb7ZjQ4knZpXaoroZUPF7DnoQ8AHUwUZG6v2zYd9iX39ud2bjxmRBNKroRSHhEe",
  "key34": "H9DMsBbDMDiYUYXxJzduGgTF4WxbGx5pSStYrPE4uAcxov6Ej4gSeZ2zrjCGHGrrEEWLqMVzKsWKSY2zvbYQEQs",
  "key35": "3K44SE48FqeGUU8kdZQHkbwRtJkR8XXdu5qbSZDVr7rj3wyj4KdEGqkNwvoKE3RFfhx9a9FecRsQQLngtB27NyUU",
  "key36": "4WkGH1gPmRtvpJLJLoWfA6qyaDPpZz8wkeMqCvZLC3obznmWTCmRAxPSHkwSZUAsdWjCHiNaHPLtbMZ3kh3JQcAu",
  "key37": "4kCUM31QwQ34nsY7M7ubPVWVLLhdfKwneuK5vcDQi8xLNCyowu8Au3ej4C97tCkVgcsSJWPmWWiBwsU9gVSBDDrN",
  "key38": "27NLNCb5fM31ee5fUtiwCdVjhPk3ULAVp5Z4hLJSPxV8JgPeHLNtkmHGxcKdNqUcCtBbgc9qVxrgNKkdqzBqGfV2",
  "key39": "4D7G2T2ji7rwWmviUGdYRdftivcbhiB6fXHKrczNp5LGH3yrSsnLs6hd1cBGv5ELqSa5GtsNYCXtGJf9SHtLYEBJ",
  "key40": "AWGPcuPRhyjQf6NjGCUSLJ4UM9sDT1ir7cavQeCbwxz2kvoJYPs3WE14soXPP7GddHkeDx2sLPz3BdFKVw3jzfC",
  "key41": "5GP3RbTsPb5gfM6rXJtP86xHwtpPRXMCjLayytEZEUSdp4TasNXrw1Q67r3hqi65cWpdw7pvC46TEoiiq96YacUF",
  "key42": "pqEapDvi9pR58ZCPUVTykLmZXgQiUkdNojzKoCGuaJF7JEoJrtct7LykMBTa1U4Gdio85hVu7seG63Y7BjqBbM5",
  "key43": "dQodn1okBFXs5kihVebD44tYdoKneCVraU1MsYyKXtp72Kzsbj62PrG6yL6v1aqrkqAJHAo8NqjKE7we7NcvuJL",
  "key44": "5MsiJweESwChZZ2u3xs5oJSRdPbvdmrbcnfnfViYwksoUsTCHTPhpDM98gRgaTBCEuz5jagfhF7EvPFRcwpCnsQZ",
  "key45": "2FdDKtRgHJhD4utwcQBfg5MCL99GpDihDLfn8kRYo22E9hB5vFFW8FZfaVPBkYrYngko6Lr77cQ7qp4nmyjGmo4N",
  "key46": "663qw5H1kF2VXSq1YUB6PFaQd2u4GFZXFUwa3skS9FrmBjJJHd6dWjFtH5wftEKU3swbZSkixEakmpzi7NKyQYnN",
  "key47": "5oaHprqRdd4Rau5cGjLZhrXSyfD2a5Jw3tzsVF4yamZw5FrzKJkLUAzihEM64BFeCHZCFqiG9yx7GyxhL9ZuJXXS",
  "key48": "2SrM3Y7C9kGmFn4koA6jnKhi1mwAGfJZXtZSzd2PCGDHFkgysh5oL7pHxELAQowqtuAhecPq9jMCvfvCAKxbz1xx"
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
