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
    "3dNE1SRNgMTL4krq7SNnjgqMg1X8w8TxbKerhFXcivgvz9QnvrrzAVmiphHAiRRw1E6kiwX3A5Pu6Dhms9195eqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n7xMwYxm8WcSch6fYoNi7fCXjVoYZL7eWFDTyUsgtUcaxe4gmw8NQRzWVRprMVtRQMStf2UwG1aJK6bwR7svbq6",
  "key1": "XQ4E4BwvfAo1Wy2mhBdxbaVbt5vvANLWG9HAxHzndksgwJPBw3NsqfHs7j8G9yWuc9FLbMTC8abaGrid8tw1xyU",
  "key2": "5bDsXEdsDWLP3vXhJ4zR8E6zMf9VVjsu3obP1Am4J2qcTuapKrTJUWN4sdtzbwyZfJiZvRtxttD7PKAMRA9NFXrB",
  "key3": "FMqBtDwcH7sBbEDKK6Wmw9paNBiuvovM8a2d7W9E1WdX2o9g4cszUYyubtZ3gPSNg7M2LVPet4b8JduUdt3W73M",
  "key4": "5673dGvkNvMbu7i9rSaSRzQ9Wmpu4AMPvH1MWfT6bJSn6RpLXsmeZ1AcV5Kjhm4d9HPggFwnJBm2sqYQ8cBh2f93",
  "key5": "2R56hfPGHJ3pcx9UToKLz5F8mUEh7KGhMo8EaDQhxy3xoFcdA6uqWcg33S5TAm9rkJGbV9rw2NfPyq9Rd7riCtZh",
  "key6": "ZDzo9TZCFjDu9Zbxn44tdndrQEaHVYG3zLMe1EH44qpWJtp22AJfrNWHitRssjKKrg2ufePMYKGu9Npb4HRn9yv",
  "key7": "3CJuMzXXQsxoaxRb1FvfxkGT7NMrF7qSqtncq1LavKQhDN6jtVVzpQ1qsfYiire27GzARA2Mu4sh7GuULM2PZLTT",
  "key8": "5FLKWmUHpkHwFsFd7fhy6p2sb6FTjgHEYG6wkS8tmUWrWeCC149UqD8MPahnSYYtVpAE8DZiJrqMQQN7M65GKy8D",
  "key9": "5pF43jojpQgmQ59EDUEpuMC91XtdabS4CvF227MXfNnBLooFNCTwc9VXhxZocJsTkZUa3AhKhRoSS8xDdqZqkGQd",
  "key10": "28EvhWPFtpGQ8R4RXiNsX1WX45d7xxwiLanEUCRY1XJUQC2nJeHZh5enm8a8VvD5dRQFxCVZNHTfR9t2KVtEp4iC",
  "key11": "4oy3fbH3wrRi8ooCJHakAs2YnZLK4gEE7RGAPC2gznGY8zy72VhujQxZmCtC8qYF13PoARQYB9VtXFAyp5hCx5E1",
  "key12": "3hj1R2xLbFrupvyQ4Co6cPJ37WyRhdSzMkfAn5of7QTygCan68kUCoWbQFitpQ3PHSh3EkWVV1JjUFPSbRocbuQs",
  "key13": "3S9yWb7nvhkNuAepEiD5M6CnAtSbEunAim3oqnBPzZpUZZdCiPZrkKtJzP2GmjPUi9AYfviDScBGTXW9hmEnvCcq",
  "key14": "42vvJVaCkY2EvHZLkf1knSJTadsuF5hVak7eA5muYgfz5JQTBaG5L3NW2CaRBqsCXk69eHEDGSKDNdoQQC6B8ib3",
  "key15": "4HYf68UuHhHKZUdrZ64Rr3NdpW8s8DJzueKJm7QAGBQx7YpRhTFt2wHUqKjzCgwKgYwDS8sbsHh9ZH3EsyVbhPHs",
  "key16": "9cGpP6bURqjz37S2LGhofTWpo1Pct8i7N6bu9zzr84BU98Bgpfc62wTcbCAfQ3rShRYaytsyHfhsnaqwuhr8woY",
  "key17": "5bK9i6NzRfannyZKyEFnGuU6GyEQBu4d6tCrHknsVFJ9ab5Meg2Zv9do9eUkb4WQTyKGfwyH2C8F97GQ36ei6DNu",
  "key18": "389DqoqvVwx5QQYjqczHakTezSc2mKNsdzpP93yVfC9rdWE1ivxu7ssi1MsmKib1XystwXcj3VZSogNMZ5Dtwv22",
  "key19": "5mAg5pjp4XDM1bxrmoFt7uRxSuRYaw7V6jMQYFs9W9brbA77hG78Vu7L6pCwnRoHXe1U6C7JZMJgvgvkJqFqsNRA",
  "key20": "2FmNfBv2y8xoApuDbFRC4F7VkdsbpZ1mCPgiSQQL6JNA64EndCdFgXcZWTpiiLgRGCuMSs4urj7VQ4ZC1jGikHeD",
  "key21": "3DqEP91cBgwUkAnYDVTaftvkHymSnQeWLVXnhzjbMgqCPLmeY42XkFksS22haFnsRPHsBkURNeNTFguYT2M4URG3",
  "key22": "2Mfwo3cTm3KF9d7qAnaSnqcYxU5qnFYcejwor9oNb6rAtFJUzT9ZvamWHJ36rWVHMkFwMfyNJdKx1FRaukHyoUFL",
  "key23": "AA5FzA55SgmXUnfNYp9Qc4wk5HUtP5DAGn5ZNQm2cUKnQZR4mDe47SF7Gmagwtuz6khP3UMKHmSM43NeyGvmdx9",
  "key24": "2UK9gRYfaT1zBKJHYd91QvNCPcuTwCdfqXimG2b36D9zrja49HHKAZsrrZZuS9dtLgr31EgHC8TGi484ebjrJ6cj",
  "key25": "5BunVdcjduBxwE3ej5UWjqadaAvyWDdhxDQuJzr2umxRch6CiRo9v2uzmDV7mxasWs5EEqyez1Dxk95FfFmMhWV",
  "key26": "x9gAsQGmzMVd4SSRjdLfugPs4zqLpRfCmqa51Y47kkGxuKnB5SWtEg1JQmYqkiqMnMtXkg3XFjJ1jpYvSm5wQAs",
  "key27": "3J4PDcgHtqtr8daUQcMzbBLapz2gAuu7wN9XSXF3eYu4nNApJSzPo69vXep9d6L7DJ7GkDzTjrCCdcLvJVFVhGTj",
  "key28": "41oqoEuC9ydyyAU9kvSa9zn63iBRrb7fJbGcBfs3faSiMjUU5v8fZYyidtTipr2T2L6vp6MhRPB4hQpQffDxTLWn",
  "key29": "2G6rhEBoaaY4vKyy4xnjdRvBt1UC5bqhgcffws6dP4kzgCakpoNLjMG9Y8rCQnomNRm7LAZnAkHYGYV868J8qAfA",
  "key30": "4pduqY3gNNDZN5YVJZpgYb7GanakBQqmoUFEnSMcc1a6UUjJyCZVucXNo9PrR431j9XLoPGRfvGhqEXpahMgosXc",
  "key31": "2392aEsKLsoeXhqZVA7zk8vxDqLX68Rt7w9eBJWHFa5YjSFSLh39AekwFeJasVtLW9cuAsh5LVq4vifYon1vtKPR",
  "key32": "3j5SEo3ZNCDei5QQ226CmWE1oDgke8YA7CkZRYsRvMrf9XmuQKirCTyt7Ue6PWkKnsd15G3fTpNgCDWS8bpQRNec",
  "key33": "4r7fGLi9GprXP3Uv4krrdJQqxXNrfPrKEnSG1nbPPxv5V1NfPuzH9NWLUoptMgc1vWt9aTD9TiFwbsnY1wWfXN56",
  "key34": "63AQhoU7mFaxyppx5tNRUrRe33E9q4kpagN3ZBFVryXiZnCEP4xJHvZXK9moTJupjgD8UFe6p5hBFDFY1WkUoho6",
  "key35": "2EvHqyXZNKZseXbqFyY3LcyjZprgkyxjSbDyyGPyqH1YBmi34Nawamsb1mGww7UkaEy2u4y6petjx8mmMSB2h1qC",
  "key36": "3og7ZnWMFxfW96zqK9obXJXkUviJf7nnDFHHnXxWpbkWLx4v9uidG2hWejdA5ewbmcZ2D1g32jeBdJDneuggsBmu",
  "key37": "4pkUJGPbmyMr5LwSY5BKiA4FGVPrEp9npsZwxkgkHbNDQehdhGcaLBTmXV2E5CKFuTo4785TRbwePFBeiKfnT5zA",
  "key38": "3P2eCaDfWYJA688B5KyfvUHMDyLKcRSwFLVGwRAoCr4RtcYpTZqLZnyTx7EviP47L7aQX6aCvo17YN8atQN7EEEd",
  "key39": "3qPQwvxivNsg5epuuziuwbiRTZbt5wwN4brTnW1Fx4FF68kD2eKwELbJG8TQZbbw1kRKwU5oDcu1NZrpH9ViqcV",
  "key40": "2ZehwuUGxJMMpAgZd2hG3DxPWSjyBTw4ZvsFpiMQVLSXEXiFk3jbhbfdsATggunwuCy5kQx2dEqHRBTZGAB5aan3",
  "key41": "2d1UwLe5Qrv986MZhogbYbysPcQxXVpSBppNo72dm6Z4QsCchHqNJgu5Y5biBNEtg8ruGSJfV7oHZCBjsL8r3Ru",
  "key42": "96NAfe797SnXzfXcpTprnWn83YTAy23j95EnNrotR6qJ8tUzsjmHgGQMihPw9nAPFK1skYSJNH1sdfiqhtkJj22",
  "key43": "56zt6nCDsmnMoyL6b39QbYBBjLT5FPQa23cLsdniTLuJnC7QytLFZVnYzsNVusmH5W7Y8WWP5jBavmnehr9CPb55",
  "key44": "34RJEUpSZsjdkCh9CQvEp1ovUNPLUtFwZHcu2ktYJ8RegdJfY9nFmUAKY5GYFGVAdMzYRbgX3K8SZ81cxEdEYGWP",
  "key45": "WGx627TCLkzngsjkym4kdQeuQBGCR9Qovu4rVUb3ei58uU5b7Yjing6ZFSZVBj5Mq6xU27VG2yMttWuPjrh6pzC"
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
