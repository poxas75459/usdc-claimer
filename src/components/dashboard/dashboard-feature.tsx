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
    "4TzUN4cWvqJyS1juqgq1c7Qv4qvnsT4jzQ7x1sgwqxv7Ubc6ccJqdvbwE2sFZ12h5XXhd7Hu4GCoNxfrZWhHBSyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZvPvK8EZea9ogcbCqNJHKM164r6R7TSajNvroCCRdVjSv6nRdvbKQbt9FcLTwmQPhyFDEarjMrvQ5ySHmGXHzYd",
  "key1": "8zjFtQtLAW9xLM1iXdtjjXs8Ht1ChQxD5NP96CkWaR2e9X3FZ9tM3889K5VaH2LZh8HMNRfwEZFvEnr2SeGARQG",
  "key2": "4956MWssykrmqoyd3GZC9uXEUb7yr1q9HqqXMjxbxg7yG54BNg8hfxztShujkp4RMjFoJt2DyyGWgZNczf9ZxoV9",
  "key3": "52GzXdpeav7S6CU1PCbUG3mTG9X5siyGGTCbTx5N6E7PyPDq1Q6SN5sGibK8U4qvJuX2TFg89HgKsP2cVCMFop15",
  "key4": "5Lwy4fe14tnFovWZMvgFGaCNLKWd52r4CoVrgq2Fu8Hqtx9UGf5poqZ7b2z6jJHeJMMZLC4mQt7MpGhRLfvzmyix",
  "key5": "46PhvPsjEspiEMaTR6sDXQq1UguDUGKq6GxrQn3QVm9wu9cXuyPtUF39vMU2vnbZ1caXxcqtXznizRUDpRKRQKoY",
  "key6": "4jGtWXbm9MPqujcq7cdSH3kpzfJrbFKTKGniRXgeXeyRUZwLXi1sfLVWKF1q6mEXWPjp7rPbxEVXYc7GuhzRSavf",
  "key7": "627BdMvHCCnYbjCY3ZLYZtj1CJH7wD1HQqZf3u5k9NWVh9rbfYczu2ZGnvLA3SsdnEMorvSAyNtzJNPt17ixShRF",
  "key8": "4fjS9YknGNf7DF7bg5eTLNLWM3JHLRtzKEnrp66CV2PmSg4dHVFkXorKmLiBFfSSts7JMAvPY7M5BqGg6hn2hVDo",
  "key9": "5EtHKcV4dBxcuhhwzBix5xuKZcBbCqSaxP7rWZsUj8hByrr67CQtvsbwn5N89kT2j6FygiooxaNqdSHYy6fikGzV",
  "key10": "jfK4RfvZhfnXrGGd28xgFQDtdmWWhY22zvLj5qUiRHyiZK8CFJS7US9gDWjbpCjcsfFG5H1J42YsAbzxKLaWvrw",
  "key11": "277iTC86ndZ97Cm4EiL5TkjLa3At1jbcEvPoiuRHxXB81vmH3VjQuZpnAaWjEVGpotREHgkgy4uYgjDWJV3Eqwjr",
  "key12": "4yA1j3fF7Y3ZkbGemFVDaoFwPSWqm9DkHKT39as93RyDyzVe5E45fozSF6EfRrqCftY5TZWk8bHLNZWS9QjfPMPA",
  "key13": "Tj7FhcnKRu5ozbeukEQaa7fTQNDMA7GATAXygZGKTB9XS9vVdAomngoFmr13S3yyfjsXgLZ2yyErMsqSqzG1UA4",
  "key14": "4wTnFXsRpBt57oLEu4H9uCuq3JacxyZPqHp2TLAkQSfzm8PPfGNhQHf2deL5GznFLzcvfr6i5WmgDm3dif2ciEN3",
  "key15": "4zc9TRtzmicNpwbFSkcSxLWWpHgmPKdkSDwjqSwFW4uWSSe2tQEmoDPHWa8GmRFgFjtZndehZ1NaTs3Kp9QhTzmg",
  "key16": "28E3nHCxhnBD8WhX9h17Vmq57zt1iGb6nWtuJmsHbWpZqni7EdxqppP7MxWcq6Puk9Fq6f1qjtJSQKYT7WsNKVt4",
  "key17": "4fi5iHqRQikaheedeYn5AuuzU4CJ84r2ycVPcH3CLCpzwb7b1P3nL6C6NdSmVsdkni7zPjRnDbh5zjPbtcfRdcmf",
  "key18": "4pzEhCc7M8vnQ3BgedTh5rHzevdJNJGHeVvApxmB93jNt4pETAPuKz6LhHzVGVDSPotbPDRkLb3pDWWvzCtiyEAr",
  "key19": "49Ym6bQy5cKzsoS5atXMdnCQk298Ew2jb4uG511TFY3PdoQgMQZQz82fTzrheYUsry8BuqWYbNmQhx2tJbWw4Py4",
  "key20": "4gnfBtrQKYPeSz9eDhvMfurdo8EhbUBosU9o6vtg8N3EaNTTnHhH4vP6sWqbZu8Xo4Q2HFc4jLv9M5eainpJAR2q",
  "key21": "EonkHQTGdTZewPXig1g1AUnNCZfz7ripUgfEdMDnxypGpcsbjDvnKfDpqxSrHWZRPVCDtZNQ2bkAuvhHYpyqGD6",
  "key22": "63HruUjY7SnYAS7K9MnDwbbdSWPa7SSN2rYERciiYdBrPMJKR4epLHko9QVYukC6iLff78w25N7479vfFuW67H16",
  "key23": "4wHSReLWuyMJ93H3PRvD3quAbNkCdz2vGKgsbm21XuUf7dFAQ6K18zTeqNDW9kiswWxmrFih6BuKbj18VmKYcUHT",
  "key24": "2LsiHus3DDjFS1yyYGma1KsRcTKAeJVH22h8khcLpc3bU3whVycw75PyUhXHV3oFqiKN9hobepnkkFxq7yu5yafm",
  "key25": "2DB3BnpeQRw97dQTcBqrx4Ye5mms6cE2cVgiuv41Wnx4Nmw3FiCmBTs4xdcm5bsrWSaN1nbJcQhz2XJvPCq7VYPf",
  "key26": "47br9o2x8fu5AZJdnVWpeeKUJyPq7ZjqVDMrsHYHaBZjBgj4n5MwsEfQea3HgpLHNsLQR8fs3JKXFYWshvg3S4vn",
  "key27": "5Af3fPMB2ts7S1my5xJtPdf187NA11WE1b3RH8Zq3rkX3SDeu9xoomCu4LjigQHLC9Kef7kNYvLwKpM5BXVnVHPc",
  "key28": "56ErBpAL5jdrzGu4f6Prps67ym2groKPUoUKcqkPXEJAzgGFkoXDP6KXn2BVwBTdPz4MCLvdQFV8tYwbPEP4DZ8h",
  "key29": "2nF15LwnJEGNzjcPkqcWy7UD46j2oN4GzrbXZMMXsFEucJSGkfC5QsewDnRRzMBqwgmRubvoqVqxQkZZab71QSM2",
  "key30": "2JrJgDbe98QAQYXur9neFf8mGWEY9X9tUvpqNuPSH4PukbthzHoK65VHcfbmzZEnYRTcH6xNxs3L5WKAGTeRVoAr",
  "key31": "4dAy8UNy9asm9NArxBYXZVoSYgeFEFuFr3SaT2LtnL2FT2qbhkHovv3q867cUFVqe3LGiF93q5eGPE8nP4euzTVh",
  "key32": "9j9Ffp7Lh4x3yMQby5JpV2QofLY8JExnhDnTyYkEzVT2qAqXm444yz8FdAm2PGm2nhQnPLAq2u4DMaJvwh6CNvf",
  "key33": "2eo1sREaxevnssyf3pWK2k2NVTh8kuMURGrZQxuPVUMoZCQVH3M7btFHS2qqpPoF9mSyJdNJ72of6kicvJgE9gaX",
  "key34": "48Nn11B2c98aWQsvJdifUh5CmCsjbmERhoSV8yxFEbP7ZD9VNS6NvN2ZeZXz8Bj1CXYvY6oKGZn3WXWfNXNKbUM1",
  "key35": "2kTqsxYdhqLmYJZHhmwER4XSZEkG5od6nSVtrb4kAdTByKmpwAWXyAr9K3DewQSHpBKU8AuaJSMyPTDGmuwNS4Fr",
  "key36": "496bmbC5nNQCFVrk7XpRxQArDB1uioKfHQpKt91hSo51amL7G1cwd2UngNp17UCCAcanYDDezVs3RPAy5JFafbYz",
  "key37": "4YnNxbjGU4jqTwqbcfmKyvToC1o4iByHBsRkukZWHvWcELKz3HJTjCK26xXXBp6gkQtwMEYVWTGxn86Kzhpauiva",
  "key38": "3xM2s3ZQY6AiccoVdsQiZudGXeh2FD7A8nvX6TWffn2pTWMJQ4CS9cyPcFRFf2ZQ3APj4tSpVUZ46aJLGW3HYvju",
  "key39": "2wzbx1JAEfXMfvmKmYRbGgZjaduQn7UywpoMMiLUuK3rVRWBexxQ4Jwc2QZGxV4XZzvXthkkxX5MTm6CsZoCamH6",
  "key40": "4JMFBsoeJYA4MBTmWVGHQz4kUYmeDp2ie72EqRaB52RYSzT85quh9baUSPwoRfVKWFCzLfL45gPUaG26p2Pe9qxw"
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
