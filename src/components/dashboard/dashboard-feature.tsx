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
    "5qs69GumGDsWuXsK9QDA5f9VG3wp7i698ApbtgtxufivVC4wGRWaEDgUwETRUqoAUfeLgR4GAKjMY8CLHi4tNHiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HprVvL2pYi1NEBFQYmq4EMtonJtkS3ohPnp2o5C58VF6WdhzxnUWneqv4bNrPxqSneDqtBzezkb5bXbCcoGVt2q",
  "key1": "3xHuuwsxGD5aTvFRThsSP82hTGRi5HFrRpLVRTWTXM38jNyJTBsEmYbneni1z4QfUBeZXX5o7zCskX4fYZhh6raW",
  "key2": "5noH6KHb1CBKwZQrdHUdZMvFqRXs4iojYd5YikV1fXkNed3V79Yd8XjQas2s7v291ZkC74m5Ta3NGsrgHokkn5gK",
  "key3": "3gFEA9nHWxwNw9RswqF2GCKbr4G8VzC5dPyPqbpjDaXE7w9UfMheqajfEHuv4VByiN3TLTVpu1bzsVYrNdRmmNWy",
  "key4": "5iQoXhMP3BRo3RFikSPM1W6YTsTSdhuAL7ojuyVzfbicH2TRRcSdDB8Eg7WvVEmeYSEjm1nAh9eWoP463bzcJXKn",
  "key5": "48BAsN1SihHyAnhTuHjyTzg6gBrEf7S3SxX3uJJLTXmdo1DQ86TWAt5rPsvycELgjrWYLEmSizE3szFoGoTA1b4R",
  "key6": "3NiqeReS6KAiK1FmYc8NZq82DwxttcNuFncugS3kh5z4igEKWpUZ3HqxEiZvwpUDwZz52wDWk5AnU1qncUgKTLYW",
  "key7": "P8rnRT8LKZ9JApesjzZZH42orBQ2WV47uf7RDfUdKNWK8z3qxZvBaGJxLDLU23GhkGfr8usRLmA1wQzrT2CY1xv",
  "key8": "4JinBkN1g8ZLhpGv6beLkchvgafGfzjLuxKQgFpfSrDNxUvwtdWGy1UV6frfuAoztp2eVRTrDmYHucTHxtviTVhr",
  "key9": "3BdubHwVcmsGuK6pmBxd3VJMQJYYekbemkyZyjEJJzMPSoWcfMdhPwfmefL6tEe3x3g2RAMYdGTXAWAK1eiG4gm5",
  "key10": "2TYWzD1L66bet1vuEvNb3ZR3G2zNVfE9ffY8xkYTHmynvpxfEgZKJmFMyvB5i3MLFZ4qxtWSnmiGD2yD1wsunduT",
  "key11": "36FA6isZnt7HLMHhtreC4DBCGNRSKT2Qsf6oTSYen95hXPMxXFpKpKne5bFSfQFL5wmhjfqzuSreiUDaqz7NzDJz",
  "key12": "2gGbJAUcMJRuGVk53MQnk6qckQvqSmN4xr971viWQ97414pjKtfGAwgHBhKP8Nrh3givQ8zN3HueN1WpBud6Xquk",
  "key13": "4MCX1fYT38pSv1hULUMWu3WoArzTBb7jFrJio1pzVR6W3ne4TnfEKMQjKougfYVtSTiXBA3JkK4aT4kFZKMw7rq1",
  "key14": "5PS9pWRRSemDzcnn7XbQvj9LyQv4kBC5wUctAYzq7VcW96pLiGi7sFTTjGKGWoPY9JxNMP2a9f2DPQYNrV615LiU",
  "key15": "KD9ZCBBDhZUC8QZTvNRcZKCmBsADphz1ih2XqvwBGD1W9xzbeM36bytWSoTNwEs1JeMmeQu4K7BqbwrhJxxDKkR",
  "key16": "2A2x1UhXaA95gMHv1xJdW925AsGav9tf26hQYYfUqnpALByThcXAr2Dzr6EmKgU1ztZwu3yEsrpcua14hHZBy9rF",
  "key17": "67Ybp8HhVXM9g4hxoge8ybcQL9945oSmofQGUNRtYCCsqtXEvPFn5qcBmRMwVwZ4LTYmkd3yv4Tgdb2tUF7pu3Km",
  "key18": "5tKZq2K2y3zFK4A5dqbW5soTcsvnV9X7RWxfPegPgEEXDd75pmeuawZGEMmtcRDeisRHZb9r8RBxcvHji1kkQ2u8",
  "key19": "4LWxxEhQzDV15iyTrt9f1jQTkUruTbKZvjEHbDwLwP8SetnjsmakFHQpDuYWQ3yWorbhMLp3Hsm9zZCzs3gRdFfF",
  "key20": "4Q82BeYYG9zHmNayjjHw6wHaefn7uWGLAVdv4ApohbgoW9cPmdHBSmmLiPptR6nChXjk4SL6CVSbWuX1f2rru5Ne",
  "key21": "ff6318LL5kY9zeZbbk8QrWAyXdYCsPdqWaHw64tYbd6uinmibhsdWsU1ATrfnLZqgi2oxNd3DiUB4vyeVmBU4Ak",
  "key22": "7niDpxtVj4nzAfnSbsvQEJbeX1a2HtoK8UgD5AvYCbp1fmQVA25romEvhSPVh9SrGGJoJZZ8oiL9LmkMD6n1MHv",
  "key23": "3ZUhbjczhDcc4VH41YNmYpVd93QNbrTq2bTqFPm5wmUJQFZTuqKAsP6FUKojzYKLXsXJow5rjjX4Zqq7K7hkUN4P",
  "key24": "VMXHk6W4Bqfhz1ba9YTir1ftPLwKL3ES3fyx2xc4aux3Ug8gwnDtMBV66NgVHbLNaamnVU2ijbee9Um6qqHYHoY",
  "key25": "5Ya5JMEaQxcrnpnL4wXuz1irNPR9uJfamzF1RKPENmnzmWcD4ztZKrvMThm4L5hHBNz5mBEDR5twG1pRMPH51oLK",
  "key26": "2i5powiSzQGTiaXADE6Kn3akiAzycM1WRJe422obN3i8xsfJoE6a89EdVWn3EarBG8QqHKZ5Lfh6n5bAieDMqn4i",
  "key27": "4bFqrAhQrSX7ejC9PrdBbWsJASXtJkA2nxZyEptyMCqL2xotUjSwZTGudDd8est7HD6RcThGRYtGpu43QrYyqD3y",
  "key28": "3fwxLSkPAWTxPTXSoBmZCoZQebvfRVe5TvTkKhCqGZDftRxwqopyeUasazXo6viXsw48ThP8NiW4moNjcA9uCW7m",
  "key29": "eZmT36gCSAjUjXywfLTN5iD6H8FMjNPTANSRLH5krQNiFA1V7cTyXTVFmBA13gv5MxGK5cFLWmn5riyAaWKHMEs",
  "key30": "3tX23SeLkrv5xZnT6ak3afkfuyNLgKC243MRcRp61Em7VpP2BArrePCx9189YrPdPHTsRuAEkamHVzTBCLoSoMmH",
  "key31": "2365oDJkiu1HFVb3DNCpoWWbMf1ghacELPhDL3mQ27C3mZqeaJPpY11yhHtAKweRmnYq8ew6m3LrVj7JuRoYf3M1",
  "key32": "2te6UHWEUW5ojtvb3yVWidNkNACjxDKr9nuikpmbCptQnfhpwsc4SogWMUFATGrBS1c5ofwY5NxSrPBLCb85UUJA"
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
