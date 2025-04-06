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
    "3NJtYShNu5aM9agudWow3aGBhXm2wrFjXcmfwvCDYD8qduqnGXsdcNHwvxHnPmgUcCZzynkVZsFuYsmKwzGybB4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q8n8M6UmoNKtn2H5NqVY8t4Vze4DcY9k3awMQvKf996387ipEDx7Gi9ih6tRHAsqfjBTzmiLKWAssXtTNp5gxmh",
  "key1": "5FG65FRFs5jNdvk2iWQWNrjC17JpDS6Hbe7THGDTKfkCYoGXo215cJAchBwRm2qYTQkGRA7Z2tcnQmJw7PtSvY1L",
  "key2": "24NjZEY9aNF6cLSmkmA2coxqs77kdkX7Jz73tesTmgJdwRCuEdPCf8t3gsvy6q7VAT7tM98mFo8JieCy3wkdkzc7",
  "key3": "35qdjFDzT9FiJUu9qx2Y2Xr711dstYRajLzAvxESUyJkY5iJaCVkyXQkbS2CnKxTrAYBeutHmXGpJUnLvQANc5Ei",
  "key4": "2mBxedPEvUfDTqsm1ahM8XvM2QHxW76qS4e5UDp7UnFyBUW3cou2SiHvKPrcFrpyVKGKGJPWP8bX5MHEhgau2SwQ",
  "key5": "4g8HYhSx9Y3Gw8FouGip5gohosotPgNW3xk2MJHL2o88NXsHBUs73vBHkEEb2qUxbTbKLfbr42FPTmbBChyt3Axr",
  "key6": "5qpGc4uWJzmmDTSL9TadXxWj8oxXqiakkBXQPyPGgVMjYxU6fVDDTVgLJz47ToehGZgjGmZgB5UipUkJ5ezurb9G",
  "key7": "3kWFMrRcUeKMAnwxARrrTrSUZCesriye63s4jUBi3KN2DF7ZhrCVZDYiHGUzcaT1np3H3E2TBrV1HA3BGDnwF643",
  "key8": "3xg5c1C3WTJNW5RVamHWmJk2nKgGD38H4ALuy3Po7wSG9hYystdE5nNjsfHMRdd8Vnp32hQZdfbtcF5FrsZQRvHt",
  "key9": "2WFvhzfdm7HWUi5sNR1GnhDTuxe8tZXMqwksbCRe4yGD2EPDg6exJgaHZjT5qceypSc6upLzqQzLi6wnr2WTSa9j",
  "key10": "A4tJX7uL9vb8JLGbJFL5t5wsEoGeAphW9AAoAmwemJkugjyHzuwo8vhnwfyEJ7eESCsbiZd59Ztn1Ru2hTPn2QQ",
  "key11": "53mVKYB2FFEpYJ3dX7iyaktv3dmRgV37mpkaZUgKftqvEJAWS1Gg3Hem5jWvPXF24YJKnkzBeCScZMCy29BHvZH9",
  "key12": "4cYMHtV1H9ESBezKzHndZJVxR6GrJ8J8L2f2daXzY5SMRmY2GchW8YREi6iehcLNKNRoowhBnMaDwQxpkShp6S3X",
  "key13": "4GjAezEyZjeGfhr6EXUs7GsiV5okKoux9doqM1Nd5RXrNedJEPYNY2YxF8UugEVmE1mqqckdYvAGC1EtWaSKE4c",
  "key14": "4auBGu9e6GbXw1CmEBKRvsngZ57vcZYAdvBB4kKBEfeqkqBjQUFZ2x16n46B3C1H4NHjfv7SzwGK7ueofBHRr11y",
  "key15": "2RoH66ibq6PHwLmtkvkgoCP5Td6XVwxSZ2j7WgtpMrahNiqPiPG8bAjbtjWYv3jFvT3wrfCdaQFmYE79e5pJPbvi",
  "key16": "YWncwYghX79ASVuEbvNYvzs7KTCZNW4BzcHBszK69FvXt7qY8RZBB8opVNirHxWeTY8ZpsQ3ptsaLRo3WrnRqMY",
  "key17": "59Eq4P2L2pXRU5Ws3zaDyah9eT2RRTmVm6Swp3u2XmAFDA4iW373pZx6TFjEECiKFit4JCqYVY38Pegpud1ukyxZ",
  "key18": "3siW8gPtKvHQXLX8W9XYSmpa8kP7QpNAxpxSw68UaHGEf1GWHtoE1jSxi6JQqUq19n3x74UmmwBTt7JASQB9dMv9",
  "key19": "4rqTiAfWoa6YgjWc78x9BhhjdLuPv51SuBsKrXJzQLdVurQoCV6YXNyQdSycjMs7M5NzxFtsvuJyH2YHd1j3kNbn",
  "key20": "4dAnVE8ztvs5TyTa6hpZKi8shXH3JvRZSTtLKEnB8zEGoQQLxwisZfGPWEPUNUW11Af1T1rr9XX9Kt7DsSWZWJox",
  "key21": "45U1pxqKJ595YFxTb2oayhsDyeQKfGbyTTD19psAhvb9dw4FT3FR6okmVdMR3kyV5fMGBJChbqcRPDBSGEYmFURR",
  "key22": "42RU5YnmMmw9aQkjqL9n1o6LAk4Z5qVkKTFBGtYbeT2E5fTc6Qj7xEHZuCRN61dtbZp7ru1gkM8bZCDwBXP5SH9X",
  "key23": "248Lkpgf3Qfdhg1o3zt6wXLZsT74mbfA3zoETHWe8EHAqkpfdH4x5pRjbGtE6f7QvoSicweVce7nx46JPFUDMVjE",
  "key24": "abuYAkCixU9Yo8pDPFVxTJeq6cDPJNhS4WCNzY7Rdd8wMjGrNgAXB6WngRV1XhAiCeVpQ7Tiu6oZb35Mf8XMKAC",
  "key25": "46xG6wDnGVTW6hBVWPCQ72Jbk5C2NiAnAR5SsEjvz7E6CbJhB6Jy8Y5vvXwpyiwLnSsmUSHWddnRN91NwXwsXsG6",
  "key26": "2JJrdVb6efHfCuskVsPJyFkk3sTgsPP8VhvPTEwajxCpxnhWJ4Sri116163gatiZEUTqq979MJbdEbCvQtYvakZz",
  "key27": "2x12x93ueDnJnXonyLS13F61ERRSy81qVRhCeeN1ryvJeuN3qc7M3tqrYPiKcbyHjRz9uU6CP9GX2KN9P2BCe6d4",
  "key28": "4MqGsMZ7WL4xFoUn7YH1EEypEnFGNTKQndzzaRi8N2s9R21AUbrLiThYHZDyNUkS9tSdMtWGrgfbi1Am2CpyhYok",
  "key29": "2sEfbicpiBT4gVK4Uktbqk53x6fRf84EP5yxMtCLm7XZkecmJU24ba2RF5h28QphigQXbmvenbGzRNWQMoKG6xQF",
  "key30": "4qQE13VgtBtmQvzCLEwNbFdxZxqwE8Twk37i7AgR7F2MU8ewV2xnVgd8vx8Khcf7YN3eyZvg25vcrNT8sD4qSwW9",
  "key31": "29ckkhm6Ukhb8RaiLzkNNzWr9qjgELntMfNCbCbqeQPrCjwmxrf7zjivWLrpXMsR6KSsMepR8k4ijwJQQ1urzGa4",
  "key32": "2QLbyX5dLeRSVdudsLvadjD8izrVQVn4xsGeE72d5GyKF13Dwn2WouQUmETLsJjCFuMeVjbNy1MiJVJbJowQLfQw",
  "key33": "5GyRDqqd67edistHBQRzUitWEAANmNmPYyuyiUwbk44WyhgzA9cZxmv7AKJwzbA9BMaCb2uEyKrwRAz6NbpZhFYe",
  "key34": "2pGq2oBdBcznkBLVZ5ykqaP2Fhu3uWuXecTqpxCQSsiYdM4Zpq2mD2DDLVwTWu6hL65zbgPNFyUQrYqcVqn7hGoq",
  "key35": "5jhAyoAq8q3xqiusY3uFNAWFZ22BEs35uUpdvBz528M55r1QGDqG88QjoKaRLuNJqteYXWiToQ4YNSzst8t6iFRE",
  "key36": "4dvWvrueX3seMYf5em3vVpURMAQRuKhLmtWdmMc2GT7bVHDxggAMR8d8ZTyrPs5qQ6Zftz63Nim4xYJqUz36MKw3",
  "key37": "S6cxmmoL7YEZJ3utGJUkE5GDsMNCu4hKmvQBur5qrsgKZd4Wc5wtEZeuZa3HHDmmG8L6CFWJZh8qeq1jvATkq1s",
  "key38": "2J8uiaUjdiT7vpPz5v5567tLYCojeBYJuB8PiCLe3bVSpwhBrazSmodyNAytxHrUDPMgbgshBmsso8MERxT2T9eq",
  "key39": "2X7SUdqhwFGRJHjoqAwVBkEyXsKAKqoQZatDR2vcmRDWcE9Y26RxwAR61PKB9u7AGV3CrPoKY4FdHuat5KkaSXPe",
  "key40": "ESfZZmw9rrtWXNqQJthV4Cxoyx1pGcPuKWJe1fwXH9sJUxX8VpY9ZQnX9Si2zPh5vCJZmpRMCmBUCcdzfJkp5zx",
  "key41": "4hYbxBxXay5sT6WnVNT2B1y9hxfRovHfaNwDZeg9y2KryhZrN94CmT8suXS8WsJwfqp1Vrp5xYEGgxyF3CN8zw3c",
  "key42": "YbPV3ffiYmK13N5DKCWBi974JLbhLvS6gGb5T3aHgZZx8A1aegPvmscbPqFHvShPTzRTUg3bQW2mYEfr8946K7o"
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
