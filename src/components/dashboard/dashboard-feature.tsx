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
    "65UJ9Y4zCCtZTDDCBfb5e4qewneZ3KD8tBGdYoNdi3eQi5FxtcT7va7ePooKU8NrKyGd61QmwcStLxriQ1amEX6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oqGq6evR4s6J7K7C9cbvRxsMh8oPJtJag7oJg9ZiD9y6rCKwzfGdZDCdtQP9z7ENRn7GRGo6bcZyWUAJM88U5jG",
  "key1": "58vByGsBBSF9epGzVBEUiXwKoV64vaCMgeig8H6ayCv3XqFCB6pGgdFSwHfajWCzRC2goJkPdXFtHDgGSAGbLQes",
  "key2": "2ney6Qies1u1BdvxuNxZSjgqfu2xAFqZD8JscuzP4sgVWYVntxMHQ5XekYiftSoAGbgw1VxJwdkCwRZu5nvurHnm",
  "key3": "3VfopftvrY9aTsucQwVck528kurpEivkxZAcJEDRmqQ4kdPRE78n8awpJSkQiMW2jskuCeJQxXSQR9Hdvr41KqTM",
  "key4": "4DCiGWaYhy2V1yPtZWKAYqKBz8PFs3ftc9YTfB9GRR2nje9VcLau8ipt7mo9FwoLeSCySQeeXqqytSW47PyWMhNu",
  "key5": "4UXee6BXotwiALLhCTWEkwJR6hRBmuSMarpbdUwBKBDwzWyFXsQ4UQoQfmMtLC3br819J8gf8EGYJNB3GfWxN4mj",
  "key6": "3E43wMnUv4TE5pgR9fXgVGnA7zijWEoSqcjMQTRPnBuGe7cn5s66f223MbH8nhM2c8mz9cNiF15Gwqn6ao8Wg63b",
  "key7": "2ZWn7vDwQmb6Ezcfg4Jqca2Pds3QGyRkginSNnps2H1okhnB9VET4xcQQR9Uag3JLgzkHAEQBBPCN6ypw2ec2LEK",
  "key8": "336i6c3etxdqYbKbPniFnMUpKmQjvpBsYVsArK5FibhNf5LzFbwV3RSyFMoBgCBuZLJAyuEQNX5iBRriuzVvgDFk",
  "key9": "5hixx9TsVkb9PiLddnb2wuJS39xiWioV8yRNWNMa5HscvVSAwcQkU4zhgMGEnpDcKXWNJSDfu4RSvDKPpXRmr3j4",
  "key10": "4d9sY86z44jHL8rsJGAisHVy6YK2MSm9LjG9eib4sbwdvynhH4xtGnMA8C5xZxwGZWawQdnjjc7aMNATszL5wugy",
  "key11": "64goyoHRMvp2KE6jYX8KaY1yX2vXPuaE3g2YcNWGSzMH31dY4fFpz3U69kW1cHEWhHGoTgjSwyp26n5hfm6aMfXo",
  "key12": "5GPx7LpwQVNtHUVH3PZzVge5RSd7bG17haiC822nUsm2ZweCCS2ahBjwhwe25GTb8dHXfnpa57fAp1hudJ54bSiF",
  "key13": "4Et2zzg8x29YcmKh7Qo9fzZbMNgTh4Aza9o4QKwRKR2YUcbdqz6HPoKbTHZ9wQrCNZ4UejBAJzCNKmjFxM4wVesv",
  "key14": "3oggAiWSyToXEikurN6ZfPhso8WHiNQPqjX9WzxRsfBHuJQv2vskTQjkYakJ3DRrTkN89bj3KsqvdAvHdbihavdU",
  "key15": "3Sy8PYXvGZcuJnaraYBdFtocCaku3Y9bS6mtEnS2DDVrc44xvHUX9fGxfwToYk65f1s8iXc8dkeWJ1Pzi1nMgR1y",
  "key16": "3vARSHnifCqpWRJsB3NUz5vexwTyS8YeykgVpLJoM2RrEx7A3t5jPFaydpEcU4sN14ATXMJM3Qxz3JE14tN6x5t3",
  "key17": "2jm4cu1DRY4ZCbrKFrx5YLAfDXxNAEPXU9Hn7BZmDg8DvGH5h92tYdUe8ESFXjYYvhBdtBKB7dA68kpcPfxvaQMV",
  "key18": "53aBEkkEuGDyjpELu4bK8H2ixdVeUzQvcG1mvKrTTpuKoS22QaDGRJnMvVHYw2UshaZ3u4GwhVN24KuWGG4zukQZ",
  "key19": "4Mq1RC8yGa6jjQvzU58LzAWerSbh5SmHQf4sNKdoAqZ7urK9fpffzct2YDbrAeGWxyW1HgcJcVnWyyG5NGaF45rp",
  "key20": "6nWH1KmiMCsMfn3vJpDZ65ksqCyaLB471rbnLMGH8xn24N6NaXpSZEz4BAw9NTGfPdecu9KPQLF7Yt1Fb5eGYrF",
  "key21": "2aiKUUR7rHVFzhmkYWQ9rD1qkZNVBx4sYwjNZN3CSwWiCdiouXBhbRw7MB4G8Lo22fEiVTKQzjd91Mms1hFm9esX",
  "key22": "XXEoB61nYSMGy7wd3VVrfw4BYdnoCdAstor5JRVnXrR9rT843NT1GUr3vDp9MCCm38g5y5LSPRmxWQBA9CQv3rQ",
  "key23": "34QaYehpagMy2QEUXkmCemEjCkHfzkR3sKok6S8DAqdyzdh1khA2AyLCcWXgxgGvAg9HAPhKmFszboAFYjtPXRZ6",
  "key24": "3vwSkQezBrNeqqijwUeTsQVtc32w5UW3htN1wtqb9NJCLPqgQM3c7HduaTWGVMQMwfnVBXhkocy4ABda54nuM9x7",
  "key25": "5BtdpUUW2iLr4Ve6bZvYEM6CbGgRLx97aHLve1Wxp2ocuvEk2uCbAmTBEzookBo5FuaHjhCdAgGKbkb5BWaD6Dti",
  "key26": "5RC7EgCrLx6imzhvJtLMhaEAFZRLkQAmt3zUh5kRRT6Pq1wPeqfU8n8QN9LwVWoTXk4i5FicijTaX4gxEAmFmybx",
  "key27": "FCWi5nfZiRaEvGGq1zWHhkvsDFCac28tDp9LW2NbSWf5TXZbDMWCGvjAYMAmnJZ8Fux1uhNja5Lu6axRE3tyaPt",
  "key28": "2sD1dw3961w5umPFZePFQweX1SJi6CcEnhyy3PopDsrGdv82GYJfrarPgT76ZYXgRFf9xunpGfBC5615FPLeSotm",
  "key29": "2YssRsBUicSuBxz49zn8NgjdRpsSeSpp5izCas5uh3GKmoTWraU3qNjStcaf16ZJS3xLyRZ9z47Umbk6qf9TGoQ8",
  "key30": "4Pis2BZt79csrLuvoVLEdBhvaDTtCGNmBAx4s3PSnoP6iFTA5X3uVV1PNB4aS7KHFmPbubgU4hMQHjEpWCXQL69A",
  "key31": "kwLq9zRRrg1aWJYfnYtfeNZF4THXib5YeM5a1hoAwka6bYXdUG79JR6HeQvz2raZo35k2dQCgaKb2XEc2dEu4Gr",
  "key32": "2FWQ8wLVQD1XUifJY5LRYDwRtpTtyFoDzwzMfKhLyAMqd6ZYdBwLqNZBcDJSNfu3HmwS4GAbF5WwZZXvYU3qpbX7",
  "key33": "3QNyiovSUkaawpcdPbXTMjgFM8VRTyZCASKbjmv5iKjKDKSzHB2EXxtAbQtcMGQmCj2NQphDB647RNgsTDREivkT",
  "key34": "25JdXnPm2xCdR8fQ34sha474oFP793qHKSjctZsi5aDKmqW85v323wHvarJoyGJYLQGQpLYo8EYFGMD7zh6VVqD9",
  "key35": "56fRYKbPCgWjf7LddrsvUcRvWMmwPEpDWdvmDjsBv5viAR1E6YrE58hzNpyWzo3YL8SuX6YnwB2kvnAnzG6Quxhp",
  "key36": "39qz8bjrB3tQ1CBSV8LVMTojPHNwzxG69dyFH82cLZbR85SGyULnmJZdKSyjWXKj7ggQ2MGpLBVTuCS39z2KSPhv",
  "key37": "2Ta7V7VUCtCYhA1hcMxNTWf4sr5WbDqEMR5TUMs271WZ6qsrWS3MN2m92bN61iyKCRY6vE4Y34oXHTw3VtVh2B7h",
  "key38": "5w1fqyEk4PX5kYJzf8VtQVDdaRofSGN9FWoSsy5CDAZsbr8EhPSGAxcsRiJWhySF4bJVsKY8LZ4CgvS27h4tP1YK",
  "key39": "3c6qStB2QM9ZWbtWx1RXBaQmvZCwGpzimKQD3UKBQFneRF5YSTdpbArWo7N4bRzvEghruwj3JLpb8SYbzHfvMRHJ",
  "key40": "3U6nf6Hs3ZNYr6jZt1MnfHvsramq7Yfwzvfq5LaHn1gPfrJ45vR1ARptWZWdVy1je2p8tGPdd3T3pwtAbvgQEG4L",
  "key41": "3u6K4nzjgKWBytYwyyjxuE2BvkAXNd2bkeg4xiUVorxoCED55aVFgS6DkShHFHNL6iMTXn5cDZjw5BbCKhMun16K",
  "key42": "63Qwg9hJjQq5zMs7Tq4tFZV6a3j6CQSWcbFbXBto5qgZZ9c62RjBMbZ65TmW1B9tiumLetDLtypdBmsUyfgH7kpr",
  "key43": "3i2bMHBSHG2DkRj7Yt39UnSwDJLKPT9VCmPaNzQECJF3eau8QoXrEC65gdBrjPtsRc3dPE1X1fPfhamTvW5PUWz7",
  "key44": "4NFLC5soYSgbRmLawn2b8uBTDNiNfHTqLpJsxSYiEBEGLyiRfXG6aY4JBd13ENL8MEH4prGmdjYVNFrpfyvmwXtD",
  "key45": "5sdefrgCcf1uXuiJx2i5sju6n1iLQa6u3uNJKhpXGGkbkERgvtbhaXXVCsRGMeCjb4DGzHAhya9N8sW1CEAYrmK9",
  "key46": "Yn97B7REgYgLETo3tvHNF7cdmgABkYcnDMCt8vNhwpFFjKyatC28376TCdkvKjWNV8PwHiokJSPfPJfsK9RvRge",
  "key47": "2F4J21CgtBjZ7FNhmbEzhagv3hFtVSxESzUzGffJTUo4MXNCKsNSyrnMAZK8SfBvoWuuY9L5NQbmFZwBHt5dt5hx",
  "key48": "2h2mnoZbraynRYVfyK9PxmbLpcetWFAAd6nWF9Mazr5qUa4LveRLUHCRmP1zKZjyVMxWLhLz5xBQtTzDhLN8BeDx",
  "key49": "2jag3AGWUFc666uP9zoPtX7nXKR7FXqkWLd3fRxonVjiedvBZuME7uZgqgcGdZHpV1reQVfYNM4C5c9odxo1jGJ8"
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
