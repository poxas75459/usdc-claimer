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
    "233vQWFLCmbAdh87ewfDngppSHAam3STF8jZi6QJ561ak3SdFTdApzwfDJTh3BAPVHuve6ao3AN1ZakTbf4Ly8NZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XNQnEY6ivs8RswjndjToS7CbhpNNcdgSicYcBbhMnXX3APhpd7StAjucVAtn4YQ49q9aqejRXKVKccwcE4t3zS3",
  "key1": "2sfmnXGAGFWjLwWdWtnBq5jvxyyRqjnkCvpVwXfNpFvo3FzoQjyAh6zAwTXkuyFkpAMq4hsdpKYKtKGR9aLfAY6w",
  "key2": "3JHMNiZJ2pVGzrN3RBKrDrqdXDWRwnCXPmPRx9ajFSYfh6M1CZEoagJL8LUFbtPsMxpMNPFNTVQqmM5r1EHSUtxC",
  "key3": "2rWrHvEP1JTFL97QD6tdBS1RmrYvD9FP6F2XTtmKLCNssxL9pYXQM1HZR3WsnGMDfW8AcZHNqQbRfsLR2AM9yi1Q",
  "key4": "JxgeFCZMZXawTje5geE18efyLxxb3WuwtiDp8nswtqSgx9ykWGojwGaDYdprh4s15DYQwQWDFdHEfqdSzYqH5vG",
  "key5": "2yaHmK35D9fo3VU5Zd6rVAy58sABaGByamfzNB9rCCAadeUGiQdSyTnZ6RZ8wfWSzDPooBht3ToRMbUHUEBBVJku",
  "key6": "4ihr3ZJNb5okMPXDxyYpRNvBnUgo3nRaHRw49uun12zac8Eck92P6ASH4Ka4gGaZvoGFWtvu6abKrNvz1MgHDWJM",
  "key7": "3vKmyztMJJAQx4p5YGF1FJ8vWQ8V8D9yh2LPiyL5ZpEyMcCkw7qCkvsCFLGuZNrYFoEsp3pyGmRRnBHS6K8HGoFV",
  "key8": "5Dgjjs6SraMRfvBxx9UoNy89J7MDJoQWfHwcftbubG6udr1Qgu2K2YQsAYddMHGU7KfdGdSXuAUmSPkRFhcoyPmP",
  "key9": "oscs1cFkHnMvVWjPucSwtkxv7xQLLK1aqbSsBoJ496Qau7Jt5fctomdXFoiekisaTLt3oimheELpyDAGpQhiJWN",
  "key10": "4BcJmUQgdKp3ywNNY3FnM6Vyau9LxFb2qjoS4wKFDatVzG7uWukjQW9jBjx4AqZ79y34kCn7UcrUQzBMndoxXeP1",
  "key11": "42n5TbwDRbD99WoFadhKw5KkekSJJ7ZRxcstXZjx2jLYS19vLW2aDr5dYj34G2W85fmQQWbUKiQcBAsxzhAUCiYM",
  "key12": "3QbA72cntRcoDPNvrVT32wy32ikU5UYT5rG158Fz8cAX1ustXZfzWikPkc6yrjauc82yn571P19Q76WVqrUVGzYL",
  "key13": "iwYyHay8gi7XuaZZojGiFqvdkwCTpa2a3C87qqRdkw25ok3NH4FVPmxs8ViEmoPkYytiPJw1eE8YFUwZkSiUkV8",
  "key14": "4eHC3ELzaNZoDmpawxK4L1GmDxhURxvH2nXqrARJhfGMhcyeQbV4uZXtmgjoDoTARfXKHaDv6YWLHsbvPWQnZsjr",
  "key15": "2DWLDcZrgGQfLtrvMX7Zdyu5B6n7Dkwahy4B7SQVRzJTYwkNeftsnsDK4K7xqXucaxu9vASXNbsQ74vC6ABo6jdG",
  "key16": "3WuYp3Ut5tDpsbHFzXRdtVipGLeGkQMUtPS26qgo8GWpFXgdcp8Jq1Qkoronof6qaVP5umxRun4Xbfoo7YSjj4se",
  "key17": "8SWSm2s4F4YZhzvgmK9fwZqrNWYX2hZj5BhLUaYyJxDepkjR4KwugguSkxWPWmGQd8FnC3syZBBpMFftZ1qmoHG",
  "key18": "3KBYZbVzBsdsBFhPQNE7H5b4c85QMk6J8kugD6cAtvh6L2EMCYmNXEhxst62brZttEimDVsWjbFVFrgZopG3b5FJ",
  "key19": "v3DdMix2rs2o3y98bmjPgMJJzBgo2EN2FR8dcpc49NqQh7pMEd3jGNhth16qaxvLDBpXLAaxiADJvJCNHpQ8trj",
  "key20": "58wjRGqH9ZJxWxJJ8YQTNz673GTHQQTo5aMyTJ9nK9ZhUiqExvH2TxffGtbpFXaCYR6ADGPs4fXh1L4yYw1hCJFr",
  "key21": "XfQQUik8ALs6HvCaH7tQ7nogqH9ho7Hw5VnpGNooqhfpopAxTL5xYAJqC4vYK8wnJb4LDwgy739pMJBzbeisGAt",
  "key22": "VPQccQY4NdmheyXxWk5HCHRTVud9BB9wwR7s33XrhMx4JXiuueVSG4C3cEM3P7wkDLcUQEMXiN7c4zFCRrfkhWb",
  "key23": "4PgoTi9vyTm26Tfk7MGypbQm4Ct53t1oz4ztktWM8zoW3uiGVYVUuixUCqxWKkkuKJYvDSD2s3nJeuvkp3Yf8BXi",
  "key24": "3sTqCF9zFnBHjKJ7cPkWbacixHqpRNiZVAHJ7ea9qngqiwMLZaVWgQ8RQWj7jthbaPwry72o7Fzd5JaAAHvuVz8Z",
  "key25": "2tjuY9F1CHD6ac14JmwuVXAc3VdMgbtVP8T1ipBBQKwJY7AowYjMEu3FH3GfJfA9AsYrLbirkeeLWaZZjyJwzv26",
  "key26": "2Vewn3bvpmLHSbfy4zZR3keeqQkBfJQq44DAJmxtTQ2bQE4RFpr5u5y7TQUEtHHw89CEJQdaa7VYKvzPtTxQJhJJ",
  "key27": "5SZX7ugqwypLqbpY2PX8tFdaPTNVxXHckNb85B5fJJHitQ6wRJtZtSUtCaDy38uR74vnBjHbfudkNaoPWt6Q6GvT",
  "key28": "2ySwVCHVNrKKMvbvL3T6vY8v7zkxjgZ64RY2AEPxhh73n78G8rbmdgh7jdZUbE8EnxghvFWFhdXrcTyzHPz8AR51",
  "key29": "46Ra6vQUbpBEwxLoVXEmdjKFcBqV44z1PxaBnNyhmL9cnzA5NSyu4LdgWxLmo3sX7D6nXA7VjHLTQyApdAxJJV28",
  "key30": "2XXYmxAJJ27uLm961rcLJptgaerZyrK5qL8wt2AtKskvNpLS7L3i8F2udbWQ6wnW51XHfPtWcZckGwg85PxacAkg",
  "key31": "4THp1WjPgPRQ5eCgArH2wPFxL893bM4fzfaQgZ5MSr8NNfPLTYmMXBM6Z1gTzxMSpH9m468nXxxUBzCcmkfQV5BM",
  "key32": "7RM32N1ui3Uf1RGn59wBkqKC6umNciMS4P6tcWQEw1HjtGh6gA8Q7N4dhUBTiYwsYQx27ru45BM3KkP4h1ynYs9",
  "key33": "4bL4wE4spYtZa77S6JHwHRbDHLSSnkqsxxfFzNc7YxGNp3asGgRvHq3vS1uw8DiEWmsrkx6ASwihdyu2AzzqvVtN"
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
