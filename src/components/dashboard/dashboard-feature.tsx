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
    "4MBSrVqiaPG2fLr9A1vPHCKxDZr2LPXeNjKjFuLGWy2XumjcZ1ypbNbuRXF6AYZ1KGobRuu9rkGVgWoDsBjtbBgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ySS5shTeU5QNRTXqS2bZPLCe9Jc5cBqRqsqYspYK9jKCHrbx8MazeLvCHquGgY8Bw73m9GQTYingv7E4j4rbGEv",
  "key1": "5xtzQo3tN8AnV3v5x2zwfZUe1TqJoZxbeZ98tMZxi3UuxfhhJrLqgYVQ8VPtLQdby5SEpfX7QXc1amzvKKTkkwYm",
  "key2": "2frpd7dHtaJEtuQAQ1BFjJ3WrgUjw6Vk1cEoSVu2UqGHBvtQ3MSo3CsNtFj6jVCss2vpbkMAA1aArmZSc9w27PuN",
  "key3": "BWH2kN7RXQEPvHxqvqcYczRbFrQFQhF1XqYUsnJG1BtgT43GzodSpUtXqvzWB5XCdM4km3tR8KuTEvubNnhd6q2",
  "key4": "2k7rsMVHxgg1Y8cMU4Hm8V4njaW21JEGdJwMo5m2Bq1g27FQsA1cDLdyW5NoppHkqet9d76txLQELAdWWcMTM3gj",
  "key5": "4Z4fkgAAVCEsoagV42ePKEH9CRmho9FVQUEBYc2zVAyokgo3Dt8Xhfi3iBGj95WkbXeAuyjqobt9pNM27LGsVGts",
  "key6": "4N9DTouhg1WTNn2afcvtV3jkxMPeSqPmkMGQHmwzg3di5Tb6rh7WqaWzWB3nzbwx4iCYwBLPFDvBgzd9uziw98Go",
  "key7": "4gMoP7RnGspUuNaHeoBa56AHjimJyjSwNEJUBfcdGusarfiBdHbyGzzSnbyVjGWo1K7HwpKYugKysfZmXyu62h2o",
  "key8": "51giYqBnJAqRAAb1Tr1jXLKRXTEGCX8un6tCFdyStJrTNdMLoLgi7rgaEkoJVHx4RcAMbMcusQc7V4afpp9KsFL4",
  "key9": "2f5gB9oXE285rmvGAbnyooAZynpic2e6bJnY2HPZZ4TDQKWAPLSRVoUvUGU8ErdY86jFMrigZDZkkaZZuSMX2NF1",
  "key10": "4oHci6ciha6PTDoY84gV1QPfrn59gMYJMacMcZ4MXyxWjeArYw82fwwbEs8yUPbFNPAvLTvp3UnPA61h8Dw4fxdV",
  "key11": "5cQ3nWh4wQBkK4awdggMfAgURz1BkXtsqnXTsk91CHjMSjrFmrSccVCUohRgqX3Co2SCxfPnKfLC57ZhpyHkKirL",
  "key12": "5XfS8yRaeSYsPMbLdN2mqCQ5tMFWywP7qRGRhfSPZcBABjEGTdYGrHPTA7oJKfibyqdJkwY5Vmn5szQZNhKK1iYQ",
  "key13": "3krWsb1bb11Wt9cQ2YCtAbjiWmBNDGqQsWXmkRdt6pkNB6bYRdtGcgLWPKSCzpnfjvBe8YZYXr2DxnuJ8bnumQd8",
  "key14": "Zb6bs6ZRz2esA3QrVW7QgpEddBPyv4YhBNSdtvLTeCmUdYSSYcR7ka9SwxMnu9jt6nB96cYTs8mWBnmLMaT7wtT",
  "key15": "2YTxXVvaH4xHtkhdtoSmE7xNzz85EpX2f7t3yEQpMDYTVMyYwDbxD2YkzDYLPNN3biywKLLoCxRe1ZMM4RAyRxsf",
  "key16": "4N4grrrTgk523bjiCeqHiruCqxqodggxF5v1PgUG8CSJbExAwJdD5mXAb4optNDTXozEYmMgpkJ5NwZRK193fuVB",
  "key17": "Ew4pMEZ7eFtqL5trJQYEBPrqov6NZEmQbZYusz7xtLMLMLjBQCCCVyRy8oYPuNjv7kLCnuEDNeBbGsUTn71wTxy",
  "key18": "tZC6ata2k6Smfk9EiZePxQeGW1Zrf7mSVFaitZ4NxTgMzmmixhSxcuec8uHEy4mgFX9dd1XdWqEJo3wvJVDak7c",
  "key19": "2DFWQ3gcfvVtgdUAWyTyxKS2facF9vcrSf5sjPAQMLKrbemDXJt3BSNNN5rvac364dM3MxpiAedxx6mTgio6y1b3",
  "key20": "2pYvP8npjxxpZyvi9UpEuSr5iiuWjxoVfY3Q22xnxYXoZGZ3L46mPzsAvS9LB3VfHMWW91TUECQzvFRvp89mFxSA",
  "key21": "4ghAhUSEYUUvWKfYcWJ3qz21kFkXDKKtK8mQLUB6dcSshxPekZCAMTqX3dE1CPbeHf9Dkb7cyaKn8sYsNCRzZNGN",
  "key22": "4Uw1EpYu83bRSNg6uDMXepV1bbHKD48oqCLWFaS6kmFTa9mVwW8pnC2pajA4pwZ1wHEPMhFVxWae2to9DpBHVJk6",
  "key23": "313tJKePMFwdp8YtgwYEeQRMHKDCoN8VMPUMJAih1cMs1DP9GPEJzmGQnKqtfjtm6D3CGTA5Y4bnudHDB12pk5RX",
  "key24": "23gwmvegTSDYZ6MB9xJ6sNDTadCJR514bLPh7KS8RiTZSPGZYvV5VqaovXBGKBPZMthfA6hps1DCGVkEiDcdRHDY",
  "key25": "WBzvLFkzzRrbfVuSSpV2NjfUbXjU3SRng8dMGHVNuKchwsZjXrZhxTMePku4bNeedbeJT6gU7Lyh8z1N6w2RSe4",
  "key26": "5fvsAasLwdeaqXVTpJsKjEkHNWyB3SQAkfFpe72t8Gkfeex6YmaZyLfxGpD5Qd1F2Hm3zohxQhGo4RVC7rtfA3K8",
  "key27": "67eB19Av5AMoTWeZ7qHbBXsqgnk6rM5Sn8ZUYbFWXpmqfAzrkZHLFFPhymbwaW9wE3qtpAgWJuNasKGucPFGtAyM",
  "key28": "3Twv8F3q5XnHzEoEaWhWbJ8ri9ZxVRA9DYugbfQSUE5MQHpFif2pg6FU85u75WZGw271JpFGM91vMaPRhZnnqrJJ",
  "key29": "J94wsABA3yKv3cWfVJjN5sFeQUr54fNWah5qY7F3sYawP3XtXy4Jz9wTd42xA1H7gKo5APQyHmwQyKWMJn7uChU",
  "key30": "4EM3qUwpxf7Uya2a5yG6295QTvVeoPvaQn4o4faZ1tcDmdDMgp8xTvRqubyWK4DK4JYAxuHRbok57mFoXbSYvcz",
  "key31": "4qnkfi1GHFQ5xyPdsjJQFg8WZXnWrhxF8jeRdnWg8XcehmrTs4gUCgZ7eN3ZteY1Bkkj2zwfGnmXHdNk3q6NsUEV",
  "key32": "hMYPxTQqWuFU7DY1aj3Aqfff6KehwqgY4gDiJgv9jKiBnDt4m6rKmpu6HZBgkEvjmKTJCiicvSm424b4xGQxxzV",
  "key33": "5TLfdhtGYJmUvxwuXqLiJc49fbjxLiQDSaPsR7W2PmMAUhTAgR8EoGuYHxFTMbs6qifvDF7MkWUVAM8TXVTHU78G",
  "key34": "54rFR2LPUt6uzb5NCAEgKrdZtRrjzFwxFdvwBsTQpe2dceKjSTbZEFdYF15rxLQpdVty8pvnAaMxRjjHcEPNzr7J",
  "key35": "RoKrtKpwPLR1PEk57Si5qKKbZHMM2GyZKh7zwbQH1hCFgFuAwUa2RLSDztoSGeAimNguLWeQS8wcTS7qSxuG4va",
  "key36": "3bZVcdBuvEwx3RosfdsTTsdchFLzzukhs7jf5HK2sCPaXnS221mJspQsfHNCqJFib1n5smXsX9PeHqvHLvZsp5UX",
  "key37": "2t9f93w2Czb1MxGBFa2nu8t76ob8RURKNW7XuCerD6vQQtvjmGfdKod4roZMKq7tZU1iDFSaGrjkMmKMPVu6tWTK",
  "key38": "2qYtTZm4EHyyQbmkz1TBoa7fvpZLG9fppNyh7RgffVoDh34UqEqmPDvBLE6nNT3ep8fyp19zJFkyWjNh5Jeoebdu",
  "key39": "5VtKua1fa6bQSDXg4bTN3bUQ1xjd5oj2CBNEqyASCuQesvsU6mYs7jhgB1RugQSkvEjF63bqv31SHq5C1DX6B9sE",
  "key40": "3Ao5sJuEQxuf3erc2NaqrTGyGSdWQb9iHxX918XNwGhueRxmFmR4mjKgxx7qtUFLfJsPB2xhgtwCA7Fu4mpPPifY",
  "key41": "2Xh9oPW7FBwJXitdY8S7wkY9ZdUxs7JEFwZfUnD651dWerCKkVbbDA5W5X8MyYMbFLasxVrHHkoG8NCcQ9UYYTMn",
  "key42": "38dKEZJzphddUUQd1677VfZyi7ahq4ahAQtk6LUyDbodjeYAARBHhUxA3x4Adqn1qzS251yC1PqAZyswYK6KVwq3",
  "key43": "4K1bzd2oPBhu3ZGZmtx7ejnneMh6ncczeYrkhwMzmfF4kgaqq3tyrzWX5pdrYTxS2eZiz73UAUELaWEtMtvLnNmU",
  "key44": "24xRgfM4ApHaqPT3JSQMPrxGpCwuziW3zBsznG4MvC26Ne5ddcFLGKYJUreF3RRwe2LWhqVimCQmXuG2VNatwB18",
  "key45": "2ViBtgX4fhMai5mLho5FbMvdkHGZReb15uSWDkTrCnc2mvjZkHwLfh3RYPsRjaCSRnAZN8gPPzuwBtyQABXxTGqr",
  "key46": "2PmmoKLnaXfYaL2zRSRX573o3wyKHir73qZMCVVjR1ae8LQHCgBkepz7u1cdJXrY1S84m7MhcQCGSdQvnFAVHsmr",
  "key47": "4kPGr61fcM1FRRWQ3ntcdzi66Ht73QA3CDGkSG98GFPKEKpgWjYsaZhC8C3AaQUsh5K7zcWL1Ybs5bV9y7Mm6p4C",
  "key48": "5hhcsgCvwZNjcKH13xhhtrcKAT8MHb2grRSMSRvJKjQ2C9y2KgzUVmxqZbfAz4UjMQ32eyMsm8WvtyFGiSESYo38"
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
