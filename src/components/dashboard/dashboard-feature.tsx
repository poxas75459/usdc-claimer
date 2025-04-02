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
    "2hK2G3sfCz6uWBzZiZ6JYM2M4RaLr8yc7VdeGeCtN9aqBgCArjPaRiSVHT4QQ1hqGMjHn3fJxiiBaQajVhdsD7CR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eSnG35trgMeuGj3Wbj8CaqMaGHbPt8edBzFrUpzJxyXnhveqxWCqmNWzwxLHCdF4CfPhpjYKgubHGjf3LbC1iEy",
  "key1": "4iFdn9qvbQU6APjeexSdNyWK4DNPitZbcM5cZEeYtBPUEEQnMD7gnNb9Yf3L26ZRqv2Lyg4Jn6Litf3VgTmG7Fir",
  "key2": "29mJCpDEnnvPUpz5v8782XJ2pfLnWAezRVPPpceTjT5mDrGoXfBYPKQS2C9bpJDskQhGmGx9Bczgt1eEgGcjt5CD",
  "key3": "5iHfjFLghbgqwUGE3bTzVhVtKZMeu8BK7bsVLmLwPsjjQq9VRZiZ18MqyLxYsGxHTbDHd7MmiFQTGJV38wUV5TMQ",
  "key4": "26sHrS9gaAjPHkLgyrk2MKKmi987qvQY6aqzjTLdCZq83dHgfNCfz5p4guiywpbj4eggs8VSUx9iqwpgqzEhbyQi",
  "key5": "4bf5aajZQVBV4EV9jodEiGoYV163r92s4NptL7MVcD51o8WNiE7nrk3GYvqfgdoigPxr94oVE16frxfHWcoy1cvc",
  "key6": "5BeDxXCrH7b6TLffPHnTRxY6W7vidzGuSEC86SfErwAVL6t1eErRZSKXUAqKfA57MvVf9v2H7zqnHxgw9A8Wp7sZ",
  "key7": "4HDuortbnJkurh5ESLpHBeZrUT2RvBtnqxzt1awv4fbzcwmmXkKPXiUo8aDUeQkDR99BrgkDyRsNzWdayjTvqsaL",
  "key8": "4XiGxHYLaah2zkf15UAJRXrBr83LqdSov4ngKdCsPUPEiK2v1ZtinJX67aQPwMsHnguqFEGXvSbeUo13Rxz59bKJ",
  "key9": "5JAavAm6Y1tdoLFozwK6AT9i52EtyWgLbiuin9ePY1GzPThoC5jktwzPN97bnjY3xQwtwVXhysW1pKmL9ndEGLxi",
  "key10": "45TpxumCW484cCuF1HakuwAZ9enduJxPiSXzDfMDAyZDZDomg3BQsncW1FcqvAEY3k1aaAjpTbXzKSzVyVNT9RRA",
  "key11": "qDQ7vMme8mHGJ4RwRx5p6pxSAgbnL835rfTbVi5B9SEnZNsEvyLo53fb8sFe4RWby7Hig47GS62JQURCizmcGyp",
  "key12": "4FG8JymvBzCNofRgD8cX7iDgzw3Nzrt1Ykdg6dFo4L9y7RGhUZg49oXHXkLuVzRrQh748VZL98SsKaKDnFNyJ1mx",
  "key13": "3qocEkGk6dzaYDwW8aPoYZRKPxobQJwicfigq4BntwNMJxfeRJ35CGdZ7VxJszWArL9SqzbbmavyUbNFGGd1HbAM",
  "key14": "3C45XSAxrwKmHW21di3tuRbYuR6widj6zteEgCoAy3FywrFL9yAyq1DN8LvdgaNCufPWJSw9j7VJrVD52piKioPq",
  "key15": "3jrhKSwVV7E4Lax1azVXabqLAkC91gqLcDjsgDiVP7tuS3xH3XY5tw4BWJke9E7hZVfLMFDZCNdP7kWjbU8Xxc8L",
  "key16": "4rLx7K19v2GKcjybKwqwPvf8znDcJSMH5MXBEcWrswTpJqMoAppCHMbMFdzxaeAT6YoZ3VJ69bNG92Jm9eGswsNa",
  "key17": "b4MkWs2FBJf6CC7Si8disFy7cVEyDFNERWs1TDJdfMBvuPTor11Uebv5wb9jg7fSD9ttB2W74uS11isadr8ojDY",
  "key18": "2mXGFiVd1rXPYzR4rhs4WiVbTUC1on29Cwkk6spPVsBTD95RVcExKRjEfN5S2k8U5w41ByY6u5aAtZC99yapsAdm",
  "key19": "42snjabe4L7XX35EbWTL34jzejUoLqUryfHKHhYApPBCDtkicRneDC6RRig8sa7VurV2Ab81icVMQ7PDJeQTfAUq",
  "key20": "5wgfi1X41fnRB1gbDBhZpoNdLbgrMFfkyheCBmhZZnbn2w1h1MQzfeeWc6EqBaLT3uCoXfAm5rfcXgMheJ1oYzP5",
  "key21": "3wMi27TSavjYDh167eb7YTbmxVMFEscdn49T6AiQrxwaUzK715bxZnMc1XmqfstMYB3XhJTSzmsjnAVzWhKg95Pc",
  "key22": "UEsyJEq3H5isD7YymMFKQvTQY6XwRoT8CsGPYn8f5WRT9cg5rWsTqcMahJVRn8tXWRb2RY3E2mvwBWcdjgjMnzz",
  "key23": "SGc7AtFrw9Jq9sEhAau6D8VgR76F9vNvikJidVUpBhJ7CbS5mgGMJgnBQ5dWwhin8Fo5UEWUT7JbVMNP7Mre9fd",
  "key24": "62AV5xunQE1yKJJBfZCY7DYgNcDXxe7fgbyCVBvu5oPkEggNaTbjhCpFfY3oeds2gYawFSRZPJvEvasmCKkkzioJ",
  "key25": "5XihFAgJyitGafJJ2hutmqv4Rk2kfwQh3gbKwtYkkSoXCcXjsCwavasPBP6v2pZUhZgvrRMDZ3U4vRV9S81oUw1o",
  "key26": "4aFL8c4qRCTGB5FZqarxo5LUJCuuk4NUHAqPCacB5QkQwsvjmK5PxQZKV64hfq93uQayUyH68PNqaKH4zCcYQugV",
  "key27": "5qUBezZ6tCLTmYMSt2dYGP818Ju8NhmgL4WaDHCYq54w8qujubibZBRd1GyGuBSJcgReR8yBk4sBARgW53EmeXJ1",
  "key28": "55zFHXQzKKEvUUySFjDoabgsoBXgRfomZ9fpyKs7YQcAxLTE7PYcgmxtFj17jofHqvvBmrw6MBBPa47hhtxc5ZHp",
  "key29": "2NnWa76ictmjEhwnAjwnQgrum6w88e9w84anT9rsyvDV13CBSBEeq4XLm7xpykaxEgbx4f2TqpP8Wi3cCVFYeHSf",
  "key30": "5urf4se8cYzMftk2fUyt2miw5giXMvPuy74JmLCDXeS7yjgWmjHjFr1uwBAFyxC4RFFJ81tufKhYXZUQatzrtRfj",
  "key31": "2xrGFL1Vzmx4V5e5DYLFeTs7gyLy5HwtQYmZGDVyuEc9CcM9qQY56w7eSoDXxcebi63kSkGwayeGTS2WsFbQCPYS",
  "key32": "42XeSXvD22D79bm1ZWTp4WanFj2t74ZZ4JapKZBeFY3DUEP7yC1hj8AK2EBGkUiaZai85PUAQAM5uJwe8ETJn2Uz",
  "key33": "5bVSCLaCEpL5FqMtcJ1bvtntAL1KAg6pBdkySeP6Pkd2hzb3tZBFXNVJRYcJguuQXyQnjhSqemjzcfTY5p7dPn1k",
  "key34": "4Fe2BdVkFwtjBUsz83UCs8Wwm8JZMsrgofHbdqhPdpiWmsU7SQtVhb8i6nHxibDrxMGCskMRNNvzARCd23Ey4stk",
  "key35": "3GP831ngh4aCemHQWKTotKbybHa69HqZrckzSSpDQdpA1oTp6D4Js8HL4vfT74SqogK63sa8CeJUtPKFXbhHKtq6",
  "key36": "3MJa1FPdn8o7Kqnqbv3zyyyryn6F5ySfzkpaS1K941URGuAuDdFy1TMY7x9q5cekHhV7U7MVFCJ5FwtDLc1bFjqQ",
  "key37": "359MvhRbB4Db6n1Jx44pQKqP17BUniiGjm8KJ27AGM8PvXtQFuWn6tXXnYfiP7bBCfScnfh5xbc4gS1BErCNH3h9",
  "key38": "5rKcrsJvBj9jkzKihMPE1Luy6XAq8shNnuRq4W6qaqavEtNr14zVzMif8mBmHLGwdaY2N9yaNAEnR6kLWfjhZ5TN",
  "key39": "5GxZShD18zBG3dKtjgyL4TWexHPnAsfgsmccbGJhd3BDYT5izunU64U8134KJ8cDVdJvUDFu5zbvTTRj9eDbWizS",
  "key40": "cGPUrUFU2uKqQEDU6F8EkNH9JVZDco7XL6nVSYQukyV4yPgreZACg6XYqGaK6RLg9qVN62FztzMtszPDq3X6mei",
  "key41": "4CmYC8nVRjB4tQbMBfWvDeW2mZYjGqMvzUnVCkmiqraV77AXDK2L27zUu1bjXuYFuS7nXE1WFbBGmsqdmzLR4g2c",
  "key42": "N5RCqr7ueup3qKJDg9GVsAx8CCoZrtrHokmwwYuGxmD9mpqV32kEPvFmEhKDqxRadNJLWfHvbFjHaCsx6EnSHB7",
  "key43": "4BwLSa4AgUTsAEBpGgqky1gP5BAC6JypXYL7s4YvE1YyEkzRM2KceRTQEKZEmDbM7HZtsQK5mntYXmJYoTgWyywE",
  "key44": "3kU9qkWqBJDbCJmQtYr69SHe9Va9brJPz1q41byg4L5zcBcSb7K5bdDZbL1BTZSEogoHh2gg8EZuA2Gx36xj1zuT",
  "key45": "TWANKZCxKz4EoeX7cBXS4N9UeH2gJF66MXVbNb8Krnujgm6e3GJajWYVtpuWHdRtdxWjcdoohy85gweYEt8Nvbh",
  "key46": "3qCNz6m6A3EH1rFWTGGw4x2SpqE5dRgMPhLhEmNMG29Tnm5dQHsnoA65mEqahauykjybESemZDSQut5Ui8r9Gbhd",
  "key47": "4txTXvYYg5sWKZEcy7vixN5doU7NMiTbQRQJAdjnNdkMBespQ1gk2Q6CKuenVzFKhWS8oq3J6nNLxpG5Ucg7NHjk"
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
