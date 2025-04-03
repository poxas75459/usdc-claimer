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
    "4txkGCA1uSueoWpitGESE7CAAEaeSqpKcZSkcicSoWAMdCQggxYKXr2DQdPRZFvCbDmpxQfvEBbR9nERV6dfkJnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3drHRr1avPr8iVr1QPGUPo7S6TvnCaLq4DnUzZ8pxLYixnLd467Uv1VjuG8YTDMPH5yq55Uyhf6gAKFGtSViYoFM",
  "key1": "2BkembsAh8kY8Az4gAYrwTuFNNU42HS8oA7Eke3FWG3QBrFRmXaFLr9FhzRJmL3sbugnjJeDxPUVAqCpoXVg2QFB",
  "key2": "aP2gPR2o6wT1iPC1iLWVxKt4gcTRjFk3TUGQAhSV1g38xcY7jxFXfAHGGtsPPKTo7Mv28y51BWCcahtQd7sCg3j",
  "key3": "4oEKCFt2HDjCLieYagWdGgVyh2M6vpVvHXgPy7UnyjN6iyZUA4sRoAo6XAGxjYbt5hMnFrefvRE6UmUUehaKxZrk",
  "key4": "3b7ks9ea2LPh9iyhrovB3xrZwfhHKfBEpJttH6WsAKYjVChetcGGVEFRL8PuzteTroWo94V4BHyc6foDSxAm1L2a",
  "key5": "5P5y82VR2tT3r4cdhdARJJrSD73MPc4aaFRw1b8zb7p3a2aScoTmxyJChfHiACAi3je3v9PMg2Q1rjhAgNRyvk5a",
  "key6": "NFZN9X2M62AAmGGWEbZvSTWXaKE1wta24QVTVEeZ2JkQJ52HuDDzQCDzKaeWajdi9wdT4knjUNTKw5VzrbufbqA",
  "key7": "YBSXqwHdnTCAEWe3fsfqaP2deuvfizXHmjr4MshGoBNdmZyoGC95HtWLokmPPJrFpzoZS8YLSuMXwSscc8YMMzp",
  "key8": "1Y23kVYVm4Fb5qHFCcw3yyyGrwW6tonGFUnedwh1J8Pbg6tzGcah7X2vFgsd6MeAQPyMDA566k8AZKgLWGVpbrZ",
  "key9": "54X4w7trevbMPv3saRJJdvZqcTKVQR4qRzHb3SGtqZmkaqqknZnaoYqAYSAnuR4ZSRCjMrNSeVKE3VWkkN3JtZ92",
  "key10": "4KzjXkWitFkUteHc92vJFVrHMkgPH7K1cTfpAhSddE46iiDyVFvAVxsF5AwEPobkBupj7yWFzLHZGpWDXYTijt7k",
  "key11": "5AR7G2mZWu6PpMJTmAtetckvijU1cmrdotRRQkq2JPUdEiKxvxHfFFjdCV1vy6NAHy5Ce3yeNkARmN73S7tz5fXW",
  "key12": "2EAJJME5FXmG3NubDPgp2QetqfWddUpXFmG7NZe7fYg5pppbbpqw7riKDz2WnD9TfCTvEc7V6aLKCQt9r2Rd1LsK",
  "key13": "4xanMgoX4Y72ay1Fabx488aFqHCCcsNCkKd8ognc6YbEaYj3zcp1FZ62XSnQBvqAABr9QNg37pHPKcYMZo4sA6yM",
  "key14": "22Vz1mkwCdKyd8rih4Be5bXJDse7DmwJX5gAFG2PVtbEWVF4kmwrAmdTM9SjGVCxNAo3z6RaCo6ogGmCv28zXfU2",
  "key15": "2TGA8Mp3B6fBKq2T7CiyvUevHuH9q9A6UY5uA1xLZF66GF4r4uo55RyU7GeQVwRgJ8jBtYZ12gEK5w9etWHdDabn",
  "key16": "Yid3wtwcvsAfh44k8K1UXoy5nHKJZBoRLtcEZYUYUDoazMTD9LVPnuUisHqwXsiuzbssrUDmV4wZv9M5jhdzBAW",
  "key17": "5A4wtpw9MYnR9yhb9Ez8RYVjPwWBstGLcnZQ4kCvb4spicbTVgYbiARPLaRaSETi2U1yGVNpkY8JYrxbxSU3cbtN",
  "key18": "2ARyQ83EkiGJZBRgFZsSTW16yti198gMvBLXJQbiHgPd8ZncBqiN33YJubxZpUYWnw4PoB2gdrRVopfmdxzSQnTc",
  "key19": "HeGsPxsc5wQ4zL27T6XVPPrqwjwT3RdSAA2vYu3yZ4LGunhrrSssjsXzyFNbRrnBVB7rZET3LhLtkiboNiuYeiz",
  "key20": "2KncuuFfvoia1q3qQwVxcsKdtaquuLXYKTjDyvuDj4uf9drhRVcuGYcV3QoVmDvHnopdY1wQkAP5ZWtydwJmmyAr",
  "key21": "4DPq4fNquHHhcMWx66DW6Xw5aqvWuELyiNF1jiek4yH7DwvGJ7GzgDn3cmdrjwZdEfQdpGDYd9rKGxdftBay4RfF",
  "key22": "2n7jJiTT4kMc5qqPDCYd5MWhHAqz42uK9ybYocELNQqLBkVAsFVWLbHuLq7o5FkdD3dy1A19bDmgWaR3P7Lu4nkM",
  "key23": "qng6NCc2N83LSLrCUkeZeYUxruZ6beovSdHLVTRqxfM6uWfXGycbP9gYxTw3gSHMEZTuu3YP8o35GPmTSuXqoAF",
  "key24": "2FeSFv1wXRuBWCeA7ABPZPSoA4TUnhWP8xDjAmEtqmbj8KN57hy5iKYFFkx343DxqdJKnnWCfFygnQ8ApwJfDqdh",
  "key25": "5yKg1PLDAxWokyXAuLQucYPFaeybQpjX39g9tu4fykygVpaJLBBgSzznYpiaVppTWSobJwR3Y9kt4iPmTVkmUPgK",
  "key26": "4VPED6hyspKsKSc1uG5SejFvtL6Tf2pYSztxPshesLRyQKRkYcJZqZqz4bSLHdeQ8cYayh6MHM74kek9NBqo2ui",
  "key27": "vxEyrRJJvo2xrZFdYB2PQYvBEyUwcZACmYZuVJ89Pob398jbDPkGZpHh36PD85HHNCHTmrAPq7BpWPEZzw8jWY7",
  "key28": "MkyaxutTk3vD6GMHQXyCYwJSdWDAJ5Qp6zobVXXyWxdpSBJuBVKQMQtLGwu1DRmBwqPXWpG5vGRSey2vUTaNT4J",
  "key29": "2sdrfooeSs2ztyknPi2GV1P2qTLXgwLmj31HWvCCcw6mcrZMzD8nmFAALUrZU6YM2nghMx19KwbsuR64Qb4hfGwH",
  "key30": "4JksHMBeyJxW4Ecj1CVek13TLNvqRcGXHeVpm68x2ASm2TBT1Ko6Tqri9H1sxcfwQCHfcjtyqZ6kNbAqnKtxpyNy",
  "key31": "44ja5fKgqoMuGaCZyD5dEzhtardEKG2QmLRi8g7kzesfBSTury7fQdK7KfQcqGQuDSJoWEWTHabrynHb6EtLUsm2",
  "key32": "5AazHiqndg7oiJvM8njeJoQ9RE51pHebuBJCpW7yKCJqQQDYJqiPQbEQuBSizYyDY6XsebXzYQiZFRBzNahHhKFt",
  "key33": "3jXUF8RYaDYRxQw7oPDzP3Mn6QQ4TsPizBdvrxhtZdougS6NK4bH4FmzWBeEEnoAt3Rwe2VwPNc1Bz6iGonS693A",
  "key34": "F8PQNNCtSKhhCRbm8S7h8TFi3hc8Mahb5RWB84KDb8Qjn4LxWgrybqXHQJyjDTSFYu7PtiNC2mdumPbz3gb3x8m",
  "key35": "5NbFMArSzDJcZjA3vC2obmGoCP63dq7S7A36H5GK8Stu4ZyCMuaAumPfRTxcHLVp5kuHDhneCWRofMiUfJ9wvpyC",
  "key36": "4s6TWnH9bV1jJqEjD7hbmWURmMxtKFhztSBp3nRPfEprtUTLadqRxAsnKSEMfMwNE32RfuxiTv1CXko48JyduWMr",
  "key37": "2ZH6u84RwwKNdc4ixiU7NjkdZQ96rbfJ9opoePdJQzNhPE1vKuDhtB1YpD2WDj7Mr8twwsmVguFgvf4BgRGQvLM",
  "key38": "3vKwQS9x9K9vXShr2U8DrnVZB1K54HPF5sJ6rkDAzQRVmSuvr49Fd8t9RqBpQx26hMFS9aVZwZagmC1HibQWokxb",
  "key39": "3JMEFgZHWgAmYh73jadugf7BkZ9qdNNhX27gGD2bUYnLBCDM3fvVV4kxyjLspYZVyAFhR2fSeXux8UUb5jXZzCjP",
  "key40": "2yWinJrESk7V6JJyhEc4gzxyAp6onZcfV2t4JaWXzSkP492Vm14DN9h1iNVhBojbSHsSCYjjxVB1Uj4cT1sjrj5f",
  "key41": "2Sd1bi2shbeHV2dwdBnvnCxTs8AGnhV6PeVRAhsZmdgz5yK1KFkVyTw9F38FRdifUaMZGnvkRzBG7Z8oA1cbarDW"
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
