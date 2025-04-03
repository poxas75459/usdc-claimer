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
    "baKD6EMAYHoSKfJXoMh5Tn3BosvcFidAffzmvNQjZH2DSUoB53wMsGrmH9C8eBSSQtv2VCcuNn2FWJNw57tFJMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d5hFVyChiEjWFmn8T5GegMH1ZEZTsNTW9xCfkPpNh1MjnG14P93PPFCjArTKzYzpnG8rf7QucBNAZgJDk3XDXzS",
  "key1": "5pJHYqN9ppkBgK19nTdoHke6LZ9dmutNJkDgWFy5zHW2L3Tp94EPJJ7qcnQ4nh3gMiCFVaUN2Qg8xBCwshSbapi2",
  "key2": "3nHwM8zsfVQ3yzkwgxYJJczmMAjb8vHKWc8jxtCNhBErUQnBcP87BRvX7XDnheUdi9dmkEj2tF5TEp6gyBjxFTgK",
  "key3": "2GQyihTAs4FMUa1moE8sg9CPVzh5678FaHQX9m5ecNr7dqD6qQBXpbJKtuBqrC8N3yBrXThhvjevwCV1TxEtFe2m",
  "key4": "3QDfoLAEtwg6LeHGJhEDXoyNuoGU6KtiJHxXvSuPc2mtnbkqNPUKt1s82EhFibeTQvEiUiq92a3TBJLaXGGtDGou",
  "key5": "2mTGRLVfTD1nDwa312epdYb5KCPYTr1UFtreh43XkNTzDKSH3M9GoE2kctPyet2ovpcmv7QYcT1oPVwudJ27P2v2",
  "key6": "AAiP5NAqq7uEwt6zqQEJsFeskfu91RfBGhnWsiXpE5awBaWMws4c4vdWvAruuUMFjojEJpCPSF5wnTSx7b5Vka1",
  "key7": "5vxQ9ZPpTUA7bTDYZVjTbU4N7nwFjcwQKbGrPEvd9QZEYRmMQMNj3VgcbzNBeSwr5FGtoonvsmtopMogAUaAeCwM",
  "key8": "2UkgtYed5PjVsbL4hgUuGQSidkMJwioMWGqN9GMF6vKnTG5fkgRHLiB2c1CLLtt8U1ngPfF15YyCBq7r2xwfivn2",
  "key9": "4rcYwnqgfLaqw9oQs6PYUdwyRSxLsPMhjZzRnH79aqxPUM8XXrWbbRtumYHAGu9XyK8iz9vxBbbarCUYFWbfHfnn",
  "key10": "41TFD8J4fhuzXRQfuxeqV5ha14n6xRUVW6uchpjA4aefta4Qeg8qzKR5guKGJ6aM22GrGWVWbDQBQqAo9xpVDrDk",
  "key11": "5m2Q3LKqaXDadJo7xQoeQSbYZVLjoiS7b78guK2fxXtApcGP5AWaXZnBmykuKSnYD48dPgTXUrWy5DpdH2CFzL7z",
  "key12": "2w8DDZtgS49nhkinFFtbk9SYExprCx2gtU2AATYMhWKENLmgsb83dFHB63MFhuvKFtsx4N6Q81a6gY7ckn43iGdc",
  "key13": "5xPr2VfsyugaTBTWK5hD6sXjHWxxDskX8cjUCiuu582LXA2A46W7WKEpCYcQLUBGrgWVVYWeZaAyhMjaZ9gCFMhG",
  "key14": "4PYjeutZTSCdkdKb714n5GSozqgBWSEr9bpLYMVzFggN6XRYDFceLnwn5gViU73maW3kz11Mb2qFi132UmWSqcfe",
  "key15": "2hLNo79MiJQe1naszDmyiUgSaASxWkmvt4tRP4c1ATdCuei92f5pU81qgiSBvadE19AzH4qzN8snkUgAnhAt7XhJ",
  "key16": "5LcxfUamvaGLi8sAm8kL5oPHdTMTccBLmcpHVvDgEDRPSkF5AKxj2Vwdjmk37Za5NSCjiqWAoF1JdCByh2MeiTwm",
  "key17": "BwjcbKYyK6HjuGPEwqaUikPnzrtKc2LXeTDNFqmsQUd44eMMoNtC3sD1M2uz4sUDy2jBfVkaB5EB9uofXg4FJvt",
  "key18": "BojwnPYAYuWnFABP1QeDnm17cz4div44uUrWKJEp6BT9tJ5WshaBsEiMaucFqqhscYMaHUTW4dRqXxBCp4ygbeU",
  "key19": "5pMTDZEvV7qVmhzboka6nfe9PoUu4dEHusrZGSDJPXZycVZ1Ughs7HooNBPfqELkUYMAKEziYdCz36wmAK6xMV1x",
  "key20": "2QYuhbDbTj5ELiDvpCQUkhyV9RLgH4bav8TpdEPN3RkJZAktVkjqeNLo49LD8dc7CHnULNvGV8DQf1ohdRk6B5Ui",
  "key21": "4582zAR8cpDTNCLmghwTjFDuVRwHGACqCW52f9GK1Y1JZcZTnEHVynSYffTXPmU93VvQwGGVgsn1chMWfpHS3f88",
  "key22": "2Gfadtr1DqWkhDwKmXJ3YouL3BjMqNoBijPzNC1FVyjuSUPqMCNUan6LfC5e5PJKYAMBecwEnGnrVn5Gz4JAgZBc",
  "key23": "34gvpxVFL8LwJzQnHQbXFApRgJ6NBEuftAEU9Z9TPMhuM281NmogtN1eiLxMjEF1omMPDdbfoMNQEjsSmH2CAnbd",
  "key24": "5keGZto4kkRmZLG5ExfvZv6FjVCnv4TNhbvBS1FQruGcBtjrxJc9pq1j1xi9YR3iYCynSfKC3j1zihEKju631cXu",
  "key25": "2s1BhVS8qpvSSP2Q4rYGF6A3jae7HwQt5aTyzZ41moaQZs3C8QXmRBsj1Np5SNrtsjdW7XBb5cYuUJUfqdwfgbBq",
  "key26": "Wguit95zUpMWUZ5jYX2fsuHGacUUu5JgrTEYA1jJfp6yPL5887cDge9YoYeLgjATwAtSmdGLrpwq46CG1N2f3DQ",
  "key27": "2Sfxq2gqHwiSBKaQ66VzSUwaEgNzhtoz3rNuLXrv48WGnkzpyyvutPXqw7miqPMdoJyS7NmLq9ovb1BiX9WS9k9C",
  "key28": "256ueo2eeBCejg5Lf81k3nk253vbJxR47nXCnhrQNbR63iPf8zBLimUdtWJVkBTt2fR9oMkMTd3LT6HWhDykoRzf",
  "key29": "4hhE6jhdK2T3DssNtjhz7TBbtgM8AS61nNbK2fD6oBpTppYLo8Pczcmx4EprUJvpK8BebkPbs5Nr91RfihQw8zyG",
  "key30": "44pFfWCwAUiqxqjBNpCmVzSr8qxk8pHM5vdZEMuvqmjiiqrYmAniM7sLQBE3L3174apUMt9n36LyPhcXuLzydfoA",
  "key31": "2TUYgNmAASjtEYUDwU19Ao5i7iy18HtWxTNdtdoc7rRAjgEe7GMCLFVJdR8rjcEndJnX14vxFcABy9hpxM8Fqmq9",
  "key32": "fKqWhWEhGg25Wqm11gXH3oHgBo41aHuhGTQfGGsnfLXbq6JEcfUpR8vHcVwNdnNcW6VWQmuPdR7dn2S64q6pFuH",
  "key33": "QeGVrTekn6JVuwXUDuNVywJmeMwh4SRkHtMoN2dwiKX9wWnYbvGmKnPq4YFwyvZ5ynP3jj2G4CWnHrRs9o7DFJR",
  "key34": "5ad6WEvko6Kg8JicFAXkgRtfKZ6gfDXVcrqnhpsY5QDAk9KnWDFidqziUEKCBKqLhSCuz2xYLjTFxrosp2n8cyxm",
  "key35": "5SLDe5spuWXp4d2ua9QeBFRwQ2RRJzAhAUbLo3cvDKaMFp3fExFAsZZFuBQ5Bm3ykBrzt84NKZmS93GYbRyHLq46",
  "key36": "5xTdzjw19ZH3j9M6SGYQUb4JAEaSVVcAc6AptqVxcWFFtfutS7bsfeukMHcXQrSCBoR7AK1uHB1xzPJEJK7955VZ",
  "key37": "7ZwAfK75TUSMXCDbi56fkHXRFm5DoG9y3zjFJNeaHkBaymR8Z1GVH83wwFGfW87XCD3ZvADCoE2tSZMs6JPi5Mk"
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
