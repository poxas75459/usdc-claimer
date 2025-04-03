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
    "L7hpSvW7ZMtWSzv4UCfNb9NHyGpUSFbkJsn9WaC6F9sC5XizycYCphwjj3z6rKTGkeF49jxZ9X23MxC7vqFYCu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63qxgi5v6TiLo5QQwzhWjdfeXuL6pPJWZGbZwiRWQULzwg9WrnnWedCiBJ6XJVfr5WgwHyMX6dR5CRGCiaJ28wBk",
  "key1": "4GYfuko9uy84hwxn918y5z8oQFtKisYu8kZe1HJmiwpueuGGRSkP39DX2hKYpCsDruBf9uQmDF1CiZjyxqmDpJFB",
  "key2": "v8BTfiDHikFq858MJt7S5qaKgkdxzR1p8cxSWbvEx8yDdUdBoL7ouvphsHKFvVfggJcjmT2u45bopXojA8PcFvf",
  "key3": "2z6a62NTj1XawRLWdBQoMTMacqkg64Zxz6bgQBAcFMrLQ7ExYGSrUmyXLsHesdcy4apShQKbznW8k3eugz4nUS5Q",
  "key4": "5SbT8bmTE54TNSCRmAUBge9EtbM2bWAEZjCRugaAYefc9NHA4Ez4XpVqwN3FcRkCmM4jCkyqKEjkFhQXHmsSMDjg",
  "key5": "5X5rzzgA87KBJarvHpfujpjmnDMajMn7oQx62ki7irCw4jERDCrZ4WHqbxhyv1ipdeCdvutq6wviSj4fiwrAdVju",
  "key6": "2AitmBHchmFdcvhohkzzpsmPUeTb6vCsYFMVxx7VNyoEywLr8wiMeRv5oynPxVAwRE2FVMUwAE3DBPx1jrRZgA1W",
  "key7": "4m8wKix1YVuLWm26svp6MW2k6gxcinRg1R8o6wbqVTdXT7xK7CiH6VLKakJ7TajigfSZpD2EGsSXwvxmdUTN9kFr",
  "key8": "31Sxjzz1uU9cu7K8gDiuvcPbZ1MB5em4X8mDDG5Gy91UegP3sYtQb69MbzugCmcjxspV9tghg3S5DaBnpqjCGU6R",
  "key9": "496EoKUZkfwbTxfkHdFEJ8QSyWCTq1fk9fS3SR5JDUqbRxrWAymg3TZdsHoRasA7nGMjyPVVKUXHmxu77c2ezLeZ",
  "key10": "tVfquq75eT2NJ3NJxP1XHHRdE3xZfpRomHespwxnjhbsWMBtkrkW5yofKpA5empHtGt2Q9AWSb4PWwdeqdEEbsN",
  "key11": "4oa2J2zhZ9gvNuiLzQVgLQZuycZvgzjT7ErBHrCWwhtrUqvpHH4VohWFS48wXoktvMz3XLeDtXUM3keBTLaunvSd",
  "key12": "4j8iyjwk2QexNQC1JaUZWJSEopanaWmVVZ4qKt2Naq5pRnJDRigs4pPcfjm83FkQCkvWs21oBK7Sya8uAYLFAFBy",
  "key13": "46a4QtmmLYTGzf6egT7F1duHix5Ln81TpNAKqvDvZiMSS1QnEWRszUFrJ4YPkrVdSLfnehZvGJUtkij1a3yb9e5C",
  "key14": "3AjRi98Wx9kabqJB6YgavLfLe5mKJ7aZ1Vp6HkXfbqTDvHGzHZoBDs9qq4GY4P55cJg3SsFMwu9Um6AUsh9vh43N",
  "key15": "2eZ9vxeSN8S4QrtmL3QGpUE3BB4K9pq9tz2WqFsh5derF2fW36Y1Y95nLPZYzvxCQ6PxWTLrqLCrNzyZJdw3L6qb",
  "key16": "5vLaFDoPu4Js4CEnpzsh4nySaxJs712XdLQWJDJXwupJw5vvckeEwMuEQ1331HUZLR9pFvWoQgjzHMQZzSpEsP9f",
  "key17": "GQpmZHER1hZ4Fe2VQV3oRexA9G3cr7zi1ZyYWywuV2ZFmNfqZJeu8hdSsfdD3ZthzQVafnBZcduziYz2ehJHU1L",
  "key18": "YoU2vYnkaWVmiEr6LhPEKfLrQsXQmcioZUSgYvNVyXCNiCyaVMge62utWLBrcnHxY4hb3xCjHi98bFTV8aQu3iY",
  "key19": "2DkLtQLWhuRv5uYwCf1ZGKsg4xhoRkQjGURwVk1jV8B3S4Sh2jNCR6cGac6wPHJXcp4azLLGSFZre4FtkDCmnBkf",
  "key20": "3hsDcovbj78MKPsfibSS9yo3bBE1SeYzQCtYSM96kiSgH4D8AXmuNEh7quJoubuFBuKZVR6XU4S5tdwqVtSL1BQq",
  "key21": "2oayB3Srzz46msdihMY4JEJNbvyUtMYWQSbGoDaBDcpuQK6bRRmtYvWTgaHg9wrXoBVM3pThasavQRhCPzRaKL7e",
  "key22": "cYQBq27Eh5VDfHKWSrrngYia1XVS9fcybEhamdwcGx9psk4E3fMtpVVdQtiuMQvqsrg9yBHf4TWTd3bAc2w342Q",
  "key23": "6175SWS3CdXwd81pxMsWHiaAqFMkuSB3qn2yXq9eaAW2Qx6846GTa9k34pN1g8oU4awinmmbT3qatJCboPr8EQnn",
  "key24": "WsG9wgZCtwEu1FMHEMTvUXgu9ZW2EGHk2weGBXqy1JBnRF2ENdVyaeNL8zJyHb6hugBZUJ1ba4RiZnXqJPZsNov",
  "key25": "25zdcJU3YQTXwmPg8sJgRSLX3t1evDQMUxJU9gnU8qg16cefQoSUzvxq6kDpsdVX321eFr6SzttfUqZB6eDmpZoD",
  "key26": "fCezVSUqsVD6eyvTL1AbqNo5vRTNNQHaPjzno8vrvZ7C5syoTLckHuozCb6nkm7vakZjD6FGLa72wgqHj92YEks",
  "key27": "3m7jtaNzBHkPg7cXw11YX3G6jxnSPD1hsfyb2BnZtgiAYoDtUYwor8HNY4b2ZeWT9G8VoHijs23aEULQWi1QsAVf",
  "key28": "5fwPVEE5x8uHD9XHvuqKTdPDEVLh8rh494ePqtUqV5KD6wrj87sob8LXxqjNy1zZmGAmXudtzxCAJj3kDWA6oZB4",
  "key29": "33cfZDWZte9fTWq3daGYe6cTRKmWoDrQ7eLxQFhgVidQbbXdK5s5g1UieZmSFs7KUkWkQduQMqpCPAGcxrCU4ixB",
  "key30": "PK2w1HamDPxq4siPFdZXRFbL5bYSEVdF9UF5N4SKURdmRGT3KAaKGGwb2Eat7oueRCTGeaoSUPPvEnVNvVhq6iZ",
  "key31": "2SfbqmtKS5gph7JuL5tSjF9sJ1zG6yzqiQRH5XL8J9eVwRWr1sb6sQtPkrfMdPnER9T7wVXtCSmQTBck8XoF8twq",
  "key32": "4st4TuSQxpYA8ewMvB2dBTtzQ934jRja3c8CdSJx7MgTywF7V9oSxTHvW9Vmvtob7DpLZCocDUSuXzVqxNw87jQJ"
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
