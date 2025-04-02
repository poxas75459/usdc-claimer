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
    "3Vg5D9WSjQE7PL6k78L3DfenVjvqQC8XEdoMmiiLwFJ65MwTizkqf8gLkq5pGjyMKjkJQksWLXU1wfoxA1trKmpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2utspvA5B1xwhaHHaWxns7jTiueiNKQsiSjoVHGEgwh55F4zuAZ8rMqu7nV77Am7pnVVpnJC2bu6eDTncuFQ84rP",
  "key1": "4S6azSmvBRDE5E66jV8VL8JzCFiHMNSXZ3SRnmeJE5U2ytpgrUdU6xnAmSKpYq7itPNzbwnhMLJ7p4sqD7k5HvAP",
  "key2": "3mXLj3sYW11tFAhEL8SqEBTeaqNDSXo8URRvVthELUQnWjonK9GEnsZiijyUuvqsgVbCjcbwbR9cJBdkeF2kXPfc",
  "key3": "53q2R3deuqdL54EoJ4djLysDpSEy9YG2d8U1RhUrmeAVWyNWTmL4pNz9wJaz1nySYx33wQMSg87FyAwjnQszoa7o",
  "key4": "36JJ4KKzcVXqzsT883qD59h2T5KzKdmB9MxY2XYULWXhXR5WbfzF4QhaijFtejNqkqevtLS3RfwrLoFSYsp48XpL",
  "key5": "2kR8MaVuVNRtpSjus1hU9XRMVzKThygtgT7AsuoH6SFcJatF65WTZPyT1sndevmTLip6JURKZvaizaaF3zrBQC5f",
  "key6": "4qWFH9LBYeEfc7Dw5TxUeSdZabuREMCDVD6aHcsgEbM8RRbMwYjHgf6ApEzzrwP3KcPTXj9J3jqyMzsdDSHxfqCf",
  "key7": "5jCEX2XpAWe9tVcXxoE3EeK7GmncCbXsCceWoyBe7mncFULaRaK9fMi6D9j1cdcEwN6ximTrGxcLsV4fKo8oy4B5",
  "key8": "LcrN4w2EcUeMwSkuK8W95vMDgnRGDrFZqXZLL4M6HBP2VmkvrsdeQGM885fDLRY66YbMFuWKB7WjgcH8TByYurk",
  "key9": "3kQW5Z37212xBEUpGNkgBet7yRXpXx3BZvzduzRwXLC1GVECsaovmoWBRK9Lf5rPtFHpT4BDKDNBDBZHs6enQJd4",
  "key10": "28aGaMvwNNmCwYwmzaUdC9SNjch93BsxFecXTtbJTK1CDt6oBgrrpcnCBBj71ZE37ngGZ7FGkauGdREyhZRwE5SR",
  "key11": "5EM8W1rYcNrYy3278ABhWh7gdKwwpFAwUAjBTtVJp5wqQ8hPUrUw6HcEedp6oC6cqZk1ew2BzAAiVyRq53SceTQQ",
  "key12": "3ayXSHrJ7Rb6jGu3RXjjkzPWWJ46zR3Sy5w3fkVV4BkFunPojZPfg5P9vLWG3usoxmk8wpnVfr3Q4o5bjhrsT7JV",
  "key13": "5fxSe7v2ne2azNm2Q9qMMRQwkoHngpQtZv5Kjqczr147q5L711kRiSFC9ouee85iuYbmSv5UCMvmtTcB1ALHASNr",
  "key14": "5XekVEWFmvRnp936YWzGLfUMHAcjXH4xfzHGLRPEmt4tyyRAz7nXLq4NW7r1EPtdCUy424aLdmvu8QbKE7iDga9Q",
  "key15": "4VtnkvL6CsibKBEyubjiDZX3TkP1E73ypAPR1p8ehuML3zwxDrmqLCRPrk9nHHph7oYWnGiaqT1AziTkSEet5ZsZ",
  "key16": "2hXTp5Zq4pNPVwfKLcHxazYp6TjjTTocyxhGaXCDnDMrQn2fQpbNpw4PuKoA5ydjTpp62k3VZSvp7bs5fcMKzZ6k",
  "key17": "3u6SC1e26yGp3ee5pKk6oJAkRBfVvQ2Kf8LP5GBUjUxpHL73nvA8AXkrh3p5xdeWvwLFpd2UG695nEosyziSsqib",
  "key18": "3JTzP2cSjF3cD4tnDmsiQUh2dzV3qQRqjUKmPZQCUARKT7Gqpqpa8LHivF6oVLkbaBRXoQHvVzGVaNeS8U5K4L2x",
  "key19": "51PdKtBPCuHexzVRKnNLMod68BT7i8SD1Qeiuoa93zgESVMvHrhaUEXgmpmwWBAKdNmmkbBSgpfraF1tNwGZCW8c",
  "key20": "45SDqaqWpubN7kgjdC664YNpX77hzEaSjayHrY1qZAcumzQNcFkY1H9QjRTu8Wemi6Ethb5KQHP4zWvQU6AKjtPe",
  "key21": "3FTZ48bUoUUJQheXQhR3b1AVic9uSA2cqdRb36r8z6HdWSCuR4pb6mKVeac27hDezUnxVDsVYNvUzqxkVN6yPKJ4",
  "key22": "T8f9juU8FF5w3GVLqPckVz3DMZHbeCtK5DVwYJptdY4vHLKyVWXUrZr4qf7jpwRXdvTqgTEGn1iZEMTt6hLVRoG",
  "key23": "4mYw7WV3FUQYSD4F93TbaLbbUJLVzeU71YJghq7gvxhtEnnonYq1QeK2quWuWC7smZKbGd8yyLacL3st4BuEKCYu",
  "key24": "xGCtQgLbK2udnoqv4d7saALmXxviBtejieoMweagNrTopC7RBrqebiPmwMfqRFuUos4wuFDE8bLUPnYaaPDCozM",
  "key25": "5txtpqbQnP2jQj1fJin7sbNbwv7dvmLXmAefukGh66hT2w8oxi9nwm9HaCMQttcgB7AxdNNvY7b16wbrnLtnzX5y",
  "key26": "2TSviq6DLEREX3yyU7ajWZDwUxXcw2g3Jv7NTx6KouhA7PzhQcQj4GZM1bngzvv1wCx3FEKAJ9tKGYTdVhZGUnHN",
  "key27": "4XyoaFZgkzmh2a3BKT5WnH4SGSZEUnjdiP9uLwr1FN8US2DpDV7p4EEyu7v5dz2rxX9SHAjJBoZTtFVt5xaPybcX",
  "key28": "3ZpKnLaj5x4U1h3gUQ2DrZfBCURDtBiXuo2iHjvwWXszNqKsdP9w1nUqcVCg22YMsKgeMYgzXC1sBboaKb8tWJRX",
  "key29": "5ez6JHatpt1uiFR3AJv2MsPUtDL9mGmBFveCt38S6w1SF6Se3GQR2KkqFerPeNjQbuf2Xg1p8azbjMmyP2YxjMS3",
  "key30": "5W3PsFdvWcnRuGk16tmzYAwEE6mwkRAwf4yXGzZXwi85kTkoPs1p3fC1HNr5NJabYeS6P1H7HuTKvjVQ47RhYjM5",
  "key31": "pRpX4v5SMhwSthKoRsYj5q6aemi4nCHMNBoaXRniePekzDhCuX6CZTEfiv8LT5T3qq91vechu4Ce2VsGcbjmRYp",
  "key32": "212Ku3KQJUAkCCLoyVsNPJWeWzhh8FJvDH3rkGtbzJJohSuLjqHaXLYYXRGvPVxPKso5SwSBFRA9kjFScLibjQib",
  "key33": "52igWJH1a6opd4R7K4A9yHjW24jnrv2tX6sGM3vw84ME1cqs5JMzvTwJ98YMBv5HWPrz1dmeSmGujDJn5vD9ijRm",
  "key34": "4CZu7BnSX9BGNDvzAkRea3fWzwrGqvjPDWWpmb1FuB4BCGEJrGZPKifPHuRKNMAmfxbjKJhqEGiG1CXkw6UWTfQH",
  "key35": "5pZgKc4T9Fh39qSo1Wwtgn9KNfbei7t7aYs3DEUar7wHu67157t7nszDDpMmq4iqWLbqGxuEUGNtAH7rj98Vn4mH",
  "key36": "7bRchHYCkJ7E94rHHuyzNPhiitTq4M5k44XQkxdT4n9LjLTD8HgKiacMkPo2gP23HymVJ2QdVpd7yFeAkm27orN",
  "key37": "Rq7uo7eztYbSh5A4U2kTCesM9tL2BFMSfGyTUSrNsjt3biFJN1DnSSDt56f5HJN8VigkUmYq6ixYY8pNTvVyBUb",
  "key38": "3oBDPTnU4n6YWNYa8jNwyYN821jFRE3DJSg6DdgE69A8ytmSbf1C7K39Q3d5XMSU9aeGXn25yg5wMSyFjUEyjgEM",
  "key39": "2EPMkrpbrSJnHKmWuqBCWp837EMhzN8DqbSxDDuYwevDJ7sFP1Nt7MWAnfob2YtJXyZj9zeE983Rdz8mm19JcQF4",
  "key40": "56jFiezU4nzAQPFLiwWsXME5RNj3E3K4gdTBkuvtEV2XaSWFp9RUhnJi6WTfkoJxnAT35NdZMmHZyJ8TYUVifFYs",
  "key41": "Ne5rRa9diE5cDB2tmXUDBeoYFeUsNcx1ZhnuzhZdqorRK9R4F2GVVBXav2wNXBFtMtAtHyjRSk4UjVkfvR3XjF4",
  "key42": "3Au3Q6tHDYuC3daQDtYW779n9wbPdsTRWgh2y5BvALDpPRFPSssEXtD28SRSf85g7yjWLnwQWh2JqkLojX9Cw8qT",
  "key43": "3Hu5kQsmQCZujdtiqMa2BEhXCzDJfoQR7etRoDuHnDb9MeomW6qAj7FcbjizSC8cu4Wo9KTAowYejGuKFqPaaKbw",
  "key44": "5hwhWDPKGXSJ1LxNfYtTJCYBtygWC2xMzkwr2S216PYQWEMuMwZyKqQUu9uZ55TaW8N6vp2628xBW9s1tjc4CiYw"
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
