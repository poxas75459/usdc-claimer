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
    "5uw4nawgoUFsMxPZ3fDWkkpFkwZheQ6KL2Xqeyn76UUDhLoUFewUdKhDHTqzBgTmXSQRus1jgZeeEvAK3anFSGar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67qAJUMeC2LTws15im5HWaegfwbF7Md4CGsFE8qQZDXj5Y34ftaZmSSrQHPCShV1UChXxVr6SpueiD47tCsemFPZ",
  "key1": "4t4BG5t8G9sVQLCo1GBrroYFhNSSroCYTk1kLCKS71XJeoYVDvxGKtWaQLMogVcyHN71ixHuLZUGRdA94qZnQM8N",
  "key2": "3ZvRUeD8DQdYBgfzT52MTfXfrqXniHNnLBxE2F9PVwT5MGoSaDVjRhx2JdPGyJzUXj5m1nDekwWnuoFKoNsmUqsP",
  "key3": "4YSAuMAEAnzEt1kbQHWTqUipziY1vBtfMpxKrph9QCyU1zHAEEMRXCZRggPCDtA8TfWg4uvEcKMMxVrhB7mFBq4G",
  "key4": "2JpTp4AZuQDxe9asEWBqU6Evdg2NA8nFs1GHogCGkRbyW3H9PpiW73h3ecYYwh1zrnqhQAEZFqWW2qHCYgzc22yh",
  "key5": "3R6j7niFEfAL9ARgpqjzH46zQQfB1hBUq3gRarSSWqwh3i7ADc7bJCtMsjLhySN3dSaNYjEPwYqKAaa3VyHyLYpT",
  "key6": "2bTH3rewBzManYESpnV4uFBA9UQNTB3ZuDb1WnMRB9c8Zv9EBv5JGYEPLgrYDwf4SbQBb8XJMKLmHnXLjuKjy2Wh",
  "key7": "4BknW9UCAssHV3Ls9sbCEbcvcaCjeDvyuMnwrvbqxHtoEp7GMuBqV4niyhK8xRLoi1xRMv1MckUZmXY31kS9sRUp",
  "key8": "4q2TZm9novLNyHhcLTvpPM1JyPqbqnZAFCCJRskpSRQai9rNUBxqvD2wnSc3nw69Bv9QFptJypiubJRhcvapYipX",
  "key9": "22Dzu1MbAfVKtJbHNStt6LxnDYZ8jVWaSdTCXV5w3z8hVSz1DEonX8HB2gthjjevVFq1ubxbWnEWcWrX8iFeG9MG",
  "key10": "23X5qE7PQj4oQyArNwDyWeTT6RusyVpEpJrfHHuzvHsMvYhC29UQjSv6iaGvDPnyHqYUSRr9VrvLZAg9oDJNGwpa",
  "key11": "3yZovPUuBBGyH6UHgdhuVKT27LBoFvwkShFwUPGcUK4GZ6psBPmYjqgceXwxeQeCsmEs5Cz6HSDnnFUYUQW5faF8",
  "key12": "5pqHLef5Vixf6T31aM77L4Vm7mQBVwnAzoVN6o8iYpFyAjSYUfH67jE7tT1zmdYa76HG88C8dRbA1ohHe2wDh57Q",
  "key13": "2t972a1vCgnx9t9B1mKV498XvPTVzSEJQaSMkpsz73HTLXhmYRwywCxoMgCWFDAVMKqGDA63HE7CsbPj8a5EhHQr",
  "key14": "qc5Htz4P1YA5PEAW1zo5XiB9RM8wWH1wyWukVwQPkM1TRSQzxYMXQDXYLeYCvozYVsKQbmZDihnvygxHWhrtpge",
  "key15": "doWpJtfWzKgctCisiT12g8jSgquaDmENbZxFyUVsWzDQoaEDJV82xCMoRxCbfEUBViuEtmDghtHsTiGAAmqekaj",
  "key16": "59XPfvrGW54MQDUXnVurhy3DNWqcATCwtDXnAKwpWShbJ3jJYfXscPAz7RUeQeeu13HZ1xPgAcGdo9hEgp7znikC",
  "key17": "4KPEmvB9Rxr4oSC3ThceFR3UyoVp57GJNa7RwQapy8q759XP3SEdsiZoMkfNGZF7oBgEJsigpvMhTFXWVUcJWPGe",
  "key18": "2WQqXVYzZY2RfvcXeNzK1g4Qhx2vxAYVR2ooBbGHVGpdN7iAi6wqUVVG6DNihbkuV9mfdAzUqAasXSXM369cjkBA",
  "key19": "54abphpXuMonm5fk4t9n3M1gx4csUyNa1deDFnktEPfA3ycZVbg2PQ5JuziG6Z7JUXz49f7uPKpYfosnPvzzgfpn",
  "key20": "342Ly2mqjeiH6q7iVHou7Fcbx4tfAMTc8oy9VTHmJYkiWVnn4cn2rkEsCogXLZojZVpAFQgvNVSWfuGdgyWrgToj",
  "key21": "5RgSvqzRzzGBFp3QruXWFK22ZbTLiaAh7hvm64A3fmKTvjXhZzqgVKGUTiciTRytKrgcnL2rCbDiNzypysPTmPpy",
  "key22": "3qbBrNEFJQbUKrCiVpKmz3dQZx7zwQVyS9Ptn5B5gu69xmf9RnfpRkwgp5Hw37S9dYU8CTTxEArvL3VofUH8FXhz",
  "key23": "3SdJiVTPy8dinpm8AHLijgGc7mKMUCk387CxWCBMD8gQuzKuksDf8PYi5mkrhsH9MQibPK2eVvzREJ4DTR34Sg4f",
  "key24": "1C9guPxzS6vitPZMgRv8D1yWR6Gd9qXyTXF1gUpMizqV8w1hgc6agBqG1Mvu8zGyyY8utcdtcLNkRkENYunThH4",
  "key25": "49TRmzgLnYqWNxQXiepLiKBrgXxZCmADTgAriRfwYcHEHw4A5kf1bRoRTTaKxt3jobLWD7MkxQ7pGDyoxJu6zTVn",
  "key26": "4PVgpgNR63PfrCyxuo5ZY3C9YqqGit3i2qS76ACDTb3mYUKKvrJdDc8J89MxybNcjTgwz46PhPpWBKXxc52hfySg",
  "key27": "5VzQgt3MFav4KjEFNQE174VEhYjEApEMhFYfdnAym8zpaKddeC2eTnrWx8BtLPHzqo3Uh5zcWnrZXzCEH66vdxPJ",
  "key28": "3ZqvCJvwaqzPiVNBMdoAnGY21rSkynhtJcudrQL36oQWmKsn8sr72tKWR29wts5hn5hPyoSyYfu26vRnuNXUdfGW",
  "key29": "2BvKRGgjJQo6HPZk78XT9dkHQVRkgNQmG4jEM7YkhxzWFHZkyBL5uYJ8maxydahV8uyStLEzV35TNsw2jrLQW8E6",
  "key30": "5zGD7j2sLbRVz6Lf3T3TW7mp8UVQtS5Q9CkU4L4mrY5q4dq5JFLyZcKE4hbjA9UyMhTguZAvkPpk7fSse3HFzSC4",
  "key31": "37zXqAkygRUsKCV5WFCjPUfWTbUrFLsgo3UKKwZtMTwjQAZXJPgBsveVoP55smKfE6PWgwk87ho2bhvfo4vfVEQG",
  "key32": "3kNvHBE7DtnzHR8RV34cQPsWujWTsQ71vVEo7VobphFubS3LSGbfFH8KtDQHwnqZ8QdFuWXFsASHxEV3Lu9ByvoC",
  "key33": "2cKqP3sfhGURWoqJ4P7jzYAdLCyd5K3L1WwPVsE1Jc7LBHbvBKYz1t2yoMJKdmeyRrW5n9bhtVDySpQxsDK6TPc5",
  "key34": "fPNiopsG9Mjxo2XzifkRXGTPi87MAG3PyLdeJncpyXQqBBsgvWoe9M6MWSLqyWf8fpX4DFuqaJ3LBKRRo4ngSbs",
  "key35": "wHzaggpW22HUsCTvamLdaQnCgfizdYbqmyKBRMaoPEHezXnW1oRbhV1vyJcqe4jVHkcp1X593Hhnu3j9V6fJ4mD"
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
