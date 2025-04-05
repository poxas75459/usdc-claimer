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
    "2wfSv9X1jS4Kk3EwUaD8sSAP3qtjAq3rjg4AdL5w459HfWhNjfbnwVAN1GQwa3yRwzS5G6Vj9c4h65Xa3PkJd6bT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sb7sBZ79rHpoHYLY16gr61dad8yJW8iNmSUvAUztYpeNcaRBRfXgYwF7SuVRsJmLWFZixpRFhXn5oiAJ8v2MBFo",
  "key1": "4Pb5aGAkDFdxVncRTabD3CUgBBuKG7E6yUQGgoXqgMAXYAx1fJvLGaXaXuNNtpFrCQoaYrjqYCS6r9nVmc6Y8e2h",
  "key2": "4iLfPkDZZ7d1hhx4Mo5r7J4pJUXF4y6T4anm5v6TX5J9oEjGTbP78RbsKHqLys5Q4RzEMR2ktdZbzQWjBCNjaLEa",
  "key3": "3M4yRSisaqhGYGSnqcdXmUwzipaZeX5YXft7tELsNtmc13cxDBGMkhP5Vo5zMCsXWcimkTrB4ARZ7m1gj8zS36nK",
  "key4": "3Nd4HZs3QFySFP4QbrZteALvynHBs9w81a96KqmAeSYgjFb4moVdojdUdLYB1RWQR1Z5KHK47erDfrjP7MChuSiU",
  "key5": "2M4TEBmSgtGruiYFa2co5ozgoMQGSpTDABabhV7MqCXg6GoNMSWMFE3UdSWWzM2yNxq7KktojcFhn97chyrWR7vp",
  "key6": "fzhp2MYPbxAVThX9swgnhh5RxFqNX3HzpgmEpCV99eURPSNWYEMpWFoCuwh4Ak6cHQJiKLAXiYvhumQMQ7vLWKZ",
  "key7": "29XENTCqzvp2CHTT2CJQTK7c5h5p2q8bHun3WuJRwiKiDC7BBQEUmXWvQXXTnQhbFjykNdQfkX8AEeEdGe4YV4Ls",
  "key8": "5zPWQUVEKKYo7bvtB3EZaUNR3JcHb6ypXZKm38ij8xS3GBt4sDLWpEaCnjyX3VMTyo1WVYYgpaM684q4qHa9xwkC",
  "key9": "w6VajHUD3ka7iQYCZmch1w6wEr6WYdJYDHFjXxke5njHkxtxUmya3Raz1Y1NfZX65HgTgpEpZy3FoiSss3pbuoo",
  "key10": "3fEJLp9FSno7p9zbxBM63SVXfEtCYdfTNDynS9Ujp5mUA6APzKY7PERrk5fFN62TLXRN6sR162PtTKm8qkhZqN4D",
  "key11": "4PNkdSYnFwvUTCEy6g2XKjR21H68uxN9WDnrC4JmrBwQUSX8raktFotK6jzX644xuG8EztmgpVoNedX1fYkL5Mkr",
  "key12": "4fNYDKLJiTs3qSeebYHz8XMkF9gg37re96GUc1TxEQ44hnk8AYUG6NJgtxun2RJir9GGMybLR8WLsiBVAxAXzjVR",
  "key13": "3z6uCbGAYAwNNTYHKFH7kejccw6u2TyXuot6tskVYnxDT85neZnDwMtZFqLxS1Nogq4zuNuMasXr7cccFRF3Cbvk",
  "key14": "4E53KSiLNUyCmEynPJPfoYv1zUrrQCV14TXrsivEZ6cpVVGnHiekZWWJPKYwbgrasP6i7VEja4sU9hTWHh27Kejw",
  "key15": "2ennjjuV3xxWTL1RNxviKyuWYJ8bGExHAx75TzsaPsp1esxM57sh8N4vFqFHC7NzMVYQuSvgx8V2r35ZAgxVvDTv",
  "key16": "5Zz1s1nkGn3RfgqfsMHJDm8gYb3ck2Rh92jaE7NEPJWJ9BAfvbkSFLk589PPiC4weWB3DeYmnzBuaU2ELnc3w944",
  "key17": "2Bvq5PxSGdGDZyLQ461jELuEAbvFGwoUjcDesy7SiU7xa9u7KBq7p85UHRgFvanBBjJqs62LoTr23tE2AuJoDZzf",
  "key18": "5U93vNt2nRH85fg5xEkjJ1dVsSqyk41EMTjPBt2TvAG4cuAWgF6TYoU6X8g5gYdCnm9URo8RQSXCiUaFrMEiTtzx",
  "key19": "2mSXKfj4yxF1WHH7zxMTPxQHBntCtY7bu5R17Qv8pfSA8Y1eJwYyZh38n5dbTFigEZzx9cRSwXCTmGQhhj7SG5HA",
  "key20": "2tCKgcwSfx7e2DqQhoGvVHS1ZYnJCLHjS5rtTSyDqD5DW8kbCsmJnLTLZ3t6eCq4WoKdvcz1SwYh8vxX5Zu2zoTm",
  "key21": "2n6nSNqB9unWd4Wcyacur5rLdR8Wr3K9nqcZEM1viTfkrSfAC1q9bET9aaFRWCRRpzFRXzmuo2Cr7iG7VRUigpLR",
  "key22": "bNuZPAzonNMyheUQN6MivaVrPaHtZwb8k1ERcDtEoeGbv6PLKqoPcM5KRAmtENimeAKawvmvyY6N9A12gT3nq9B",
  "key23": "5y6z8XPnB5qa7Jb6yacpP3drLEwaP9dmtLLu1DoerCT7FxRoR7MuGB5AB8aX3Ebz6vws1dfyuh2sAoZBtXGtUYM8",
  "key24": "W3Rpi2SzmF3rFpF5U6o7kANjePyRjii7Yi4Qx2R3Mtk6eQM9aUGbS6m5wyufFn8npFZ55MwxZScVtYBrcTcmzrS",
  "key25": "3LZSCZVpAkAg5P8U78hDB5hgDFk4pW3wVB1ytM3QMwtf1QTBhSCuF3yaDhntPbG7Qcn31LU5RG9u3pByUbuZrJ5X",
  "key26": "RjFcT9vFFYf1qJqHkxjcPAsr7MWjFcBrGpfWJvrpCotqtQ9Vp43W6WWcQdz5EyTBMLBXEVTHEn8mM3UvsSZMX8Y",
  "key27": "47UMdJ6ggrZTMiqQTZtXM63u3L8GFp2L2p99KUR71jtJpaCiSUZkBeybxhY3Ewg7NN1MGjxw3FbLVrcda7FHrcJf",
  "key28": "4Mzzc5Kt4vYEotAFxfUnCDaMwduVcESBfjudhCEot9FYNJZ5nVdM3rqjWM7DKt2q2MNFryCokoy6Z78RjBEWNkc5",
  "key29": "3DwixWRwrAnZo4h2cQRb28pvmoiGtwzXBqume5YQQQA8ry9oFXjhpYTVQLhRnrZbsHRTpFLXT2Ftc2XCNwMfbeVY",
  "key30": "5utfjYFw6LTZLnNzEkxhEfzgvVJMiLM7mRs5aTuXHQpJXQU8K4dpSSexEzDsnN6eudEvdyj99eBoTeW7h3DDTdhB",
  "key31": "4NC43Q65B3r2pDuu5adKj7RQDnJ4ki4FbpV73mVNNytCDNuUGNsefKofEnwcJJhkPqepKiy2VJ3B4mJJe6xPNarX",
  "key32": "5LL9j566dWDK62c5VDF1gKk2QaVDCREvunLhmD5BpamLioX5ejs792AcDvVHQ9a9Cv6TU329r6bCkkpKqfocS4Ho",
  "key33": "4NDXjZNpGcBpPFCg9NU6162Ao8wG13p9iHBkabAoYTh5LJXEsQLDNX1zFahb58zBYhueMTuGGrgrXkuPHqdLWeVx",
  "key34": "5Q7o79caWMPwVHjUmdN8G8SfFzcDaUmmrYnH8Vw3gno1bWJMmbnKrV1Yiz2rZ7ozm5At6vbHMw5dSXZ7oGgjHTkS",
  "key35": "5ugeiMWAnjWxNW11yzeB5kFxdKTByV57xKaMEPQ7Zwui9JLG12coERUSPY6T9ePFMeehPez2mAUpnGHjHmGAPrBX",
  "key36": "48NUDnQkngegdJky4AG28oe7FcSVE9zydQDpxvaRvR4JLQFedQN3oy2hsFbzHE6YoRei5dMzMRZGgsPX8WW2xHAX",
  "key37": "4GNac3hugkgXVkC2HSni8YRy6Fk9ZTr2NMmSMYbkXc6xTJumr3L32Y2Me6MqKT9R9idqcaYYRDpjECsHSvXJ6KJM",
  "key38": "3UAxXdojRBG6cCxrTkB4VxNw1m8mskjdWxEMXAMvbzALCL96ukUpR9y6dhguyiYYacENfcC5VDp7oFpAGNqV2Z6L",
  "key39": "5D2D4p4tZzieCCNgosWsxDKHkiEMCpfZLoak6UXazVxnTwdcr84Qs7wHVHy1kwNiFhLZWhC8xHewh4qxNJ9qZvs2",
  "key40": "3UydRB5p3ngYJdhJyP9zB3ti2EYN2sv1PxKYxRaiwKuK2nvVjSpAoDfw9kgdgBSz6tmmQ4t2WjpdY4kqkrsVcCFF",
  "key41": "5pNuakhu1EXnLwB3ZCasfF4qHc9yPuJ4i3ToQ8ND4VnkTrmMyyhrW5Z3qYp5fDaVrMAgVYCqeAaZxp9SfbMwxHU7",
  "key42": "61hJoMZiryEdofsvsBkCaLJJHDTr939TNbg9fmajvbRp1HCM1w77wETrYZS9mCrxbjp4PY3ExYX1J2NSNLT7Tojx",
  "key43": "4MDkjsDaid3CPewPUBKhYCC3fX7LX4u8fP1zMowSv69AkywRv1w9ZHXG47yhSUAeSQL9qEH4SNcT8Zzz7B39tf23",
  "key44": "29hwUYfZAs1aUd863wTomPTd9ksYW3gJSqqmXaP9V9ULtdzBQdvtjWup1MaAATfrdRPdgVCVFw4DjQwz1YEtmNtR",
  "key45": "2UaCwiAi628A74xGxPmehnnG3jqZfWVic6SdKebUCY1Z4ZUiKrudGFfw2tuXRPSHnYFKXYHx87sSyMxmEK4LNcL2",
  "key46": "35S3cKNLUicMmGD2TDCNHsqDCmyMbKgZt7xWaS1DGUYVdeczip7Rjo55ArwGYeQ7ApkxRDHZkEav4QHqBbQTsLrH",
  "key47": "2HdjpVWQn1EoJPPN92xJFvWtPSFJzXQNehyi5kvjoMWbuKFa5nHD6KVdiVNJeyHqoKTJvD2o9NZXqKYjHvbJhgM3"
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
