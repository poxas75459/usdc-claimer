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
    "4FasEMPwaRccoZS4do4i4CD6fupQsTWPzHGtA4yXVKWyihX52CpHuV2BFKkiaK4u9niVyWBLwoQjMhRqc7pcgtUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TuLA2832aoGdD9JUfUw7JrGPF2wfKQnMT1SrQ1ob7eqS25Vy2XUL7RXvn5f3x5Hh7htPVRbdJhnq2qZ9K7nSGTQ",
  "key1": "8txDPHajgjfJnGL6LKDT8g6yAFYEXt2ws68iodZdYhoQcMAyK7TLkPfj4YhMj4uhsV9BgF4hdZt7bZpUTRkq1uj",
  "key2": "Kr6oKopG9hvR46MHgrSq1SGTURXzegFuy6HVsZLjQ6wr2RHCdF6C5iVuBhnTsRQc2qLwMxWNpYSjaxxHxcq4RqH",
  "key3": "59BMPEoYTsNi8oq4yfTBf7dV9VhQAy664HPYboXhdLRcq3BCX5YqPo7kf3vydDkHgWB4hbMPTvqYsN8ZYk3FpTA",
  "key4": "MQJp9HduNS9N8DTK5Vpoef9J9E6bjegdhUKv8JZGPP6pKTMth3YanycQhW2917RxHQ7sk4fEMf2FsUxWqMGZQth",
  "key5": "548HQa7RaerCK8nkJVYPzAzLZB2EHZLpqM4pXm4JzDHdcQWaJX6jpi1ePYVQ2x995Vaf9f6DRPmtfsun9fLZkrpo",
  "key6": "5rA4j5vHN6dcA81TTT1miQqYbK5etqsupGKzKFN7Qp4eqtiub9SZqxby772cvhdcG1sYBd4WGZ1tKgfgwQq3iVw2",
  "key7": "2NPcHQBSjFzDtm4KEk6rz6RnvQvybqmMJFqzcG8tTWLUQe8hn1JYtzswLToq4axXJ81oosjeSKFZgHc8twWvshdr",
  "key8": "4p2kW61KcDm6A54NUqkzCtp89FnhmX1mDajJGER7Q5bqXU4PBHNcGSALQ4yT6GzXmeKijH5Y1d674D5NQe3t3dri",
  "key9": "4qzoxMPyNiNsdbc38abu7TMz9ZEHGUScRBfQJ5E76FBVzoo5aH5mtWKc7DbumVE1mKmzk62BUYQVD8Y8h2S6tzAd",
  "key10": "2vvdpxSgXUVE8ad8RcnJajfPc3VfkmwCW7HdFBuwnsy753DiwuJXz5NpqrPKs1Hhw3YBzmCDwTuira7Afuknhjpa",
  "key11": "4Gn5vbFRq7rvUGp1BbcmM5nbqqfWDhq26BpdHBfSvdLKDbfParJWg27EwjJEZEEi7NNiXzdU6hTom6fy7oMiCVDr",
  "key12": "3orYZr8Mf4u9HKL4t9YHVMeCer98owfLerDEs2WmVzxdc1uubPMU1G7tDbAFJQbEhxh8jDKihVgh3YjULXBukWiT",
  "key13": "2QeTEfF5p4dDo8JHoYRge9SLXcdXaUBQt6xageFPPTu4bJBk3RRqkHBdQVBJopcW1aSktPaU7jEby3NhnVExy3tx",
  "key14": "4UiKpFv3fj86pSxijJbeaQEPHrTCP8aR7Gh6CFXcB88vyMDjMcXaajcSQmC32FZxLCVDZuMSMtjEE1QUE9wjcv8a",
  "key15": "sbrHwgPxyA4abQ9g42jak8q96sGfUV6CUY1rawnN5Uz5cLz37N7PqmNxZ9eyS1nrnVPGsrWsppWkudfqVMRWZ8m",
  "key16": "57x3aD6nMKYxoRSxcdAqCmkjvKKJU4kzDv6577Fr6mun6edwH5WVRF8U4q11sKvwa8xSvzxZADN4nGYrKQTedYfQ",
  "key17": "wDQtyuSs5nxVZn6Z2mJ5aCJG9biusMLHfUFCgYno7RmyLeXGn4xWFUwntBbtXoiiLZPhxq1WqiUWmjum7aLQkF1",
  "key18": "4WnwYRPg5rBgGK1BQwew1fzdGY3hH7kFphYb4jKhLDgQ3FSGJg817Ey9mUr1dfV5PMzgeVs9fzpy9pQjk3fypgGB",
  "key19": "4StWtd1PwnDUP5BQ1R56yNsPhbQMZEGFTxTDLkpFtR8buGaV1CSWZ3cTxz74CsN7rks6xcq7pAB2khsCRBxXA3gv",
  "key20": "52V7peVEm9M9zni4QZdVafzRa1BsWu7KrTW77Z6Cn2sx393puJ9WH4sE1wfzQtFFkmQDD9CHdenGBHJ6KNoEcKgs",
  "key21": "32W3ETepJgqS6yg1qyXxk675KNEuan14bgA1dYhe2MLTeZdviiK2mawe9dknE38UreQ7rBrK1Kba1e8YXS78kdEr",
  "key22": "Dt8QXjbKoAmBiZPTTZ7CnayWDhkmzESmXPBs1t1CkCTkWSQLCWAZ7q5FPCGc4i3BG9o6f2d5b82Sq9v29D6rCYz",
  "key23": "2od921kBmoT2USkiWykRYJk4tsZGSLTmxdQGFmHqGa4riiY7pfTNrjFnFLpNopQHv9Y82vyNQrCAsKX1fzmwSDyj",
  "key24": "15spDLGMkh6ieYNcuti9jSSu5DsdBYroTJG88zb2D3U8JUUDz6hoFo49CCRzBcTn41PmrudQQ3cCvizhUEPHoAD",
  "key25": "ySeyLsFsn2UwwbQeXXcJ3Pi9ZTZ3mGqGJWSRf2AbcuuCVhNazeSPvoEi5kz8Ryt9KZnMAdWnAN9Dnhrw4eKPhsL",
  "key26": "2fVfaxdVkw8zPEFr7Yrm5jXt8gfkjZQrvFaQo6HtsdehMMsDkhLd92PYwhgCV6BuvX14ee54ThfapaAFs3NgGt39",
  "key27": "3wk3pKQFpFTA8qWHzrE9SB5G5SG3GXrYHnMscoH5ZpBiV3aV6YhqJ2k1v784mmy2sqgaUKYxDHNN9YJ87A71s5cQ",
  "key28": "47cPVvW2GGWJR7inoME5pEez4urewn9sFGfPTaR6c74iHW6nhF3axPESpcLHFWN1xzTovGqJCne59X8aTtKySbm5",
  "key29": "5SLXftSNgiVuZjudKkcYR4MCnv8YgdhacUyuTfv51fZewVqeZxXpc7T9K9bW1wper4KSKGWijxNKtyBUuYRaHBNC",
  "key30": "2EqiAXHAaXQrwSvcahqhaErAHbhe9Ac3DthmcmtyNnNTntJmNq1QgUTmXCbFHhJmCapnBE9M141h58gaHvS7cU6Q",
  "key31": "28dvKtCHaorwgJB2Vjetmut4mK4fhc17UxdDySC6VHYj4QPZUTy6CVsyRDD21eDH7UtN41NrfzCa5NLiZM7UPSQ8",
  "key32": "2owSyR5xVAVbe1y9LFR7JRhoUmMQ3Vhx3VLkNyCuT6GRFQZtcoptK8TL65QwqQJN5krGbmfHo4aRoUCPmEqAsZLH",
  "key33": "3VCV1TXn5WXs3QszLFho7fXjdaNDv59nRjzgHsKEGN5fnVNKt3Uu7NwGBQxLDjhxojqbBoL4QkG3ZXt36CVbPogc",
  "key34": "5268CXhNixhf8vnkEpPYAcKp9iffcgtVEpehbp2KG3zcTy2JTQZmZqX1t58N1SmZeERRhukkZvZnZnkDVd7jeAQb",
  "key35": "3d5vQVSZcn8qaomBAZYjchhRDC7hqb4JMgRztVMLA5HhXqWp4HkiHUGnxMH8sTWRN5qZo8bpPd24872VcJPvdyCZ",
  "key36": "2DnSka3ZJvNWfUmBMPmLMA94h5GywRk9jFFS693A2DxJkYKGSALvnVNjz7sFz7Uut9rUDjnSFuKsWZs2brpYGPFU",
  "key37": "5dPEnp9zwVwgjyahB23pgsXnEyUqYT9AtVRsLJfoWpGEDumUjX8j4M8uALHnFQuU5msizJwcRUF3ZJkHrnx6zRUb",
  "key38": "3KR3fLPCdziiPCqLhMxxLjKG4hEFjcQ1WE7F8StfT2qKoyYqh2riYkVy7NaWWPDh8vMPaLEmUFMFk758SiCTQwkG",
  "key39": "2Y4GDawFD1HTQAaZ4m6SnAo7QVERVj8s59jRLVgqZG3AT5e9aMrWifkHQfcbvnzcjzvfRW5r8zjeS7pttMVwKreY"
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
