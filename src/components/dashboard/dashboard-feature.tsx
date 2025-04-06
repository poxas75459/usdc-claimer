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
    "Uom1DQAMZBDpYwsnoP1r3nKzQ9UcxVcxG5VjK4tQqbTFSPabzbbCrV4RTUd4SATsrKGrx5dc8iRoRvdMujfwM4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SLGa5HHHL3dKnb6YTontivwuCELN3int2xBrQugstZko7rkLY95A8HhLaJVcSKd9wdh3eagBi1XaBL8bfz57Tdd",
  "key1": "6NP7XewxKQn5qZegh1vADekhLDu7cE5qnSq57ATZGGn2WJFxa1jodoMKgbAF35wfURrDmYnqSPEgpoirdTQaPUy",
  "key2": "ahN1XWXY6UhkiD1gWbouTLCDd8U75DHvZL2rXs1udUPJzmbCZNnyZ1UYMiRNBFo5EQ3jxPECigfsHK6qQN1wJYA",
  "key3": "mFTBfMi27na3e83A7LtKKU8MAcu8dv74rXtBWqh352TxR25T9oWB9MBUuqWz25avsKfZTNj6SDhE5CDr6hYgjVD",
  "key4": "2f1RFH3sz8BhhEkXteYQsPq7bineFiJWbJQ5HmCCGvATYcvVoNfa6EaQqy7qfQQhfDsYfJ8MtgD7dgRkwcNqDk47",
  "key5": "4UHVuf91uiqkB1zQWYPqgArzmCXoEBGM7mh3xtSx9g2TXELN8pzSLK33VRnBP7SAaDqDurFvSGeWw3SscJjNfLkL",
  "key6": "2GdRD3BncmQoNyy6KoeS46QiC9Zu4yoCnwmGHiWvoXomYFrz2jP4q53gZbYSZ3HMyrJ2w8RP8khBrqGhtXsNobRS",
  "key7": "2zV9DpfQDa1dLmH8WRpCk9wiC4TSLGpi7GfmwxKnN9abytXC3aVWUY7N6t1Rm6hwSMbj83iWAo1HarCYiQQfGkMc",
  "key8": "2Ky9AVH8R3onsxKTswwZYuxJpBfEztCCzRkQrB7mDDar6TbT4XYuLL1RMieHpZW9r9tTStjRmX4ewK55bhULxiXr",
  "key9": "4AnHnKyNcSH1HW4NiFuYccstiyhnxp7BWnixdXPJyQwojzv3qJcQZLJJHniX49xoQ8nv7sjtoRMeSrAWUAgGvViP",
  "key10": "4JDBRUfZgS8NtQFrEAzHfQ63KA3BkqQX3aCGtT6TMEJ1iCJGWdEc21kEs6RVHsSDurZu49KtAUMseRUReo5HcWSh",
  "key11": "62Kz3BV6f2PCa2GU3CVPZ3iEnf47Mw57EhGVxBUih5zqfcCLeW3qVPkFSr4r3jL3k6MND65k9CfbupwUxpgz5f6b",
  "key12": "8Um1dz7ZtdEXz7Tjg7Nw6NgmiiTggKAN44zG8R5zGuqRxALJU4KzAsWwggDhbedQh9j5SwSDiJDQHPH25YJb7cz",
  "key13": "3q8DdnnZ7pg17pXYFmeEbYRkvjR7xSPaKwTXnTyBF4r5cGzXwjr3TE7Sz6qZWNfGQsWSKCaifvFi5eZjExUGjAyw",
  "key14": "4uCfE5gHiZ2bhfarwXFag3israGCLFjzBcSkZnSjQs51gzWYmaACFbhVuiu6ALSLdg6hGZbfqqkJzdjEARwJzCCL",
  "key15": "9N3ocVK7UuSL5PJ4PCzFynMtkr7fSPBifo423hg1kvndRagBamL7b5mCeJM9QgK97ACRqRiCSqaFp4acHYsLxfz",
  "key16": "3a7WUzsT8dj4hm7hwFjUiEAD2HG2ubRt4nEyMUtbetTeetq2Yuw2jcLf5q8TZmgWLb3844JZ3usF6cuJ5dPCJtKA",
  "key17": "62ReTVRNvDAeUKhPHk7bvhwrPdDwXJ9xpcjCP8ohMzac7kDQCCbVdi2GEcVp9oJudEHtVauPfYWFxgjsg2b76wR8",
  "key18": "5BnbR5d8NW5mbpoxqLzArxxjzfh7G582EqcC7Qf6oYM12rqLrZ9XDBtGNwUR7UCRVmxfCJteHRGaXxDedGwm8oU",
  "key19": "neEJzdoThomnoLGeeZYJpidCYW1gQUnHhKgXWAeApDtnQAKeYwZ3xWXLJPhTuMAdQqoBdxBmszdBsYAbeZUHWqz",
  "key20": "2tBzRhuUuNZWVFBKifw94n2tZzyAmgCWPTe71RHCNDEkCDF9CXSQ5uyGRxxDuXGLKrn3FzaJZYA2AHzzkSfb7yzR",
  "key21": "5qCwZNq4MvxobQVyDWYLuKeEtpn7G38sioGxZ7Q4JM3fdmfK1rmEAZ3TpQadvUdBXmz1TaTL3PDLhPWvXBjxZMHE",
  "key22": "2bnDW7Gw4m1R78KgF7VEzKHUqV9CYFF2CBrVhxPfg9NSHDfvg16jT1EbJjjZumWEmeDYvA8dvomnu3yRmytAANC3",
  "key23": "2QQX3cc4DypuWPL8oKYJHvMGBiwiEi6A8JztGPy9Mrq8trG6DLxETpx2KE9kVLE3mWAhxWvBNNCPWW34YLYdCRab",
  "key24": "3Bww1m8xjcCkX16zMyaJUQ6mgjwdyUX4Go3o4g2j4QRrSX3jaL8mHnrHCjDpRgJRtHtx4qsWg2FaaEqntN4xm6KL",
  "key25": "ntZ15nGRWXVPCSJW3z6ns9g5F2nsSvbP2uYgAE4zsp8q5PqDfq95u3t4vG912J6Z5NXnk4gvUnBjAAPgffjVjAX",
  "key26": "JuvACt67z6aXLFGaPDLtoBKKtSpRqtfU6knY38KMVcJczZpwuzzXSWxFdyAyNNxsSE9RWH97hkmM7tPHwMdz2qL",
  "key27": "5KuM11EjyCrYMk2SCmrG7CccBUao98sqkuUtcmuwp2FrCmFDAnGmB4pS3xeoyyh5ZdBr7mVHAL4GPxB3xynutxeJ",
  "key28": "2ZMzJa59zMmS7QsB23DRgD4s6p62nYs1Y886PzUw9FxMMiKgbPenwxJCtm2i3CdiMRJ2WTcY3j1Lo6AVev4K84kw",
  "key29": "5nvoTmuLeDjXeZYbFtg6B9x14KFwevwW6PRzWRm1X71QRSqi7zJBXdsArkSqhgHwETVbSvYbczM7M4y2mGx7Xo7D",
  "key30": "Ndva8Uk9qBXxs5EVg1EFLqXicCZRstnbjm7LAdLhRUVMGr9CN7kRYLZVzeuoTTTpSJekHguMNP64BxpJ6akd3Xf",
  "key31": "2eatg3mUBCbKbYk6Meg3YNaKCmKTeXpZtG1sTPCSmr6BPjrDJQjwA2UcGG644rdEc8iMtqdhK1hRh2yWkPUbgR5E",
  "key32": "51tdFJow3vrXqLavhXVu7HCvrS8Y5C994ntdmTGKyJGeNUPXpDU4NMp5qxaHdFfujgB9swroCEBmzBY5s1e1ntSM",
  "key33": "4ZTLQXVZH5kKx61JgJy1MfEopi9oCSgAWCXkbaoWbNDXohWKdzD6vaUGuQcs5rJSijHRTxWbgPVTscFYhgCA12Wj",
  "key34": "3jg5Aan18iFHZcbHRoWp25ScqWivws2ZmtLzyyeYDLZyfs7UA48gh6sJAg9TkYYrHVF5y1Cq66Q2BRQziiWyC5fv",
  "key35": "4mRuLN5sLWsRaF3NWDXkZUxthNFPttuwxvc16eSs8QZZWgpT2DcEkQjvMK8mrCGmSwwvDJHM5pRfQU2YxjWjKXiY",
  "key36": "3zWkUDGQF4XnzfFE3GFkRASdH4dtMAcXJhtYbxZJVzjanAK2ADP4MkYsCXpFzDRahrMSjLo8KqyNX5A8g2hjs5FV",
  "key37": "5cKTzhzotr6zW24Le9fVUwasjhUeco9gnAzadTp6bEh9H6BDLkf1Lmn89hFwv1dL66qRDxThNRFWzVhsiyHpxbUr",
  "key38": "35iEqUcH8jQsUyPgTbHbCsbuMUVJbKjcsZgMpgoudTmRgjpExnn4GWkEPLkKmahEyLntnKETirfbfTg9TTy4wwnT",
  "key39": "5GrqdKAWTupvhJbchNi6Qp4WyBjUMc6uDbvKnh5AiSL3gHJpmLUxW5iNkfuT1ztCYLPP7y1EwnEnTzWfxgnxmr4y",
  "key40": "23bfyqqLuXGpXWYMA1Tcifxhksyd5eykaSpBLUw2KfuXhAYZDNMgZP7LRR21gFTpLNBZFBSkCdnZp3gPQgwUcs2c",
  "key41": "2JytDDk6L76UhLnE3VeNZmqMTa8gVp2AnRSZLACvb7P6TTZCZJHT13dBM2hFhkV466ZDhJzgnvR5ztPfkNdWGLH",
  "key42": "4ovsQsMGXVWNiAtY8bq6Xm5Yz5AiPzWnWPGKjeeWs641o5nZ2PEXEU2MQfUmFRDUJBxUKdCCWhYEyRjZH8NnjZPg",
  "key43": "3TBFaHMtCYnQakt88jQ56cCbk8TLwiyBtw53ijLi5EmnY1ckFdTV11DXY7QgpwFMwfTqpmvunFEmdXmJv5MXRoFj",
  "key44": "fyr1jir7GmTBkqikx96Aauq5jvYNxYZ7YuFKNCv7988ZHoQy3K9X1jimhbyynunQ742gkGFZBbhGiTzy8Wk7rJK",
  "key45": "5Tt9uNfNFASuz2HgKQQpxiRQ8ZAKWHPx2ChnUiwe5mRE9AueKEtUv3LHpsbePF5WopL5oqVeqXdxtCaLPkVzpdgn",
  "key46": "23gcdCbjLaiiMNTWY8BZTkrTL1a3xqXUAmcvfYtPHoWxKbXcSmM72TvSRZx2NGA6vEZn5s5P1tH5fXKvmXQ2wEzw",
  "key47": "5TcLA1dopAH57sAYxpAvA8g972RZRacNYiPAHzipxPL8NaMtgi2LqVS4QXohVLXkBn5mXeYqke2ba53nPs2EqQRF"
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
