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
    "5u9chkGVjCeF6agcSdQ8L4cf7KhGu4YGZH5VjHVk7vdmWfoCFdWUNYAkxKCzDUPRAfRX3PV5DN1smgDb8GHnb63i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vYsofHAFaqUgyfXTN8avfc2QJK1ADCUHis4S7jJnHoejacd4zkucudULqpXyoLfU6i1mQweP6jRQGdK8EgJd8GA",
  "key1": "4Dk9oGHSoowXELqKTA5pwxyjTP5LSoyKqyz4vVHMUHFHhMC6EbEARfrhH5iBMxnnFVHR1wRyJ8yzdoGT8iSVRx3Y",
  "key2": "5L4usiYqv56RWCSWRFyBrw9t8xSYY32LncCcyiKq2BTz5ttrNoDLJNGK88As5worxTT7hbFJUhXwFMgr8jY4YXTa",
  "key3": "5uUyiL1V6gyJh6KS3Moe9FWBJdNHWQyCPunHSELxVnesT85hhEM3aaxJmXQ3qcGxwRm3tbivy6rGAP4Snf1mLuMt",
  "key4": "3H5onLjWcKn2ZrhBteci6xVPAnD3GF7pspuVDnL8TJvHdU22iYz5F27z5wCsYE3RQFNLJJk5cFrctEiRunHn2DPF",
  "key5": "5LtpsCPL59B6KFZNrKQQecDYc8Ma16v8JUBtNVsARJ3Htj2p2pWmDR8gj4wr5odjmMCM3D9a2NHgEtiyVzFxB74e",
  "key6": "34Qz8U6svzs3FPGD48njerHGrnnGTwrm2VLpZGbFu1w85t7PzRTM8ZHBY741yankJKy4E5i7pUTSqg8cGJeqpHrH",
  "key7": "4DXS8QiXtUDKxJPENsZ7AbmiPpRRnmMC5D2BDVtCHdUzBSLZfxWMK7FiwTy4t9KPpRdKoNp6gvzudYxxD5vuenvM",
  "key8": "5F1mxcbi4tZr5JdAGhczVSvjURAeo6DLf2MAzTpoaWvBVWzo4sxNvX3zQEHkvCif4Q11LgbPXYDvhNAZHS8BftTS",
  "key9": "5jYcR1zksDbx2wBTSGb1WLJAkRwWLGDuHf2i9N6x9GUdNVba14DkXBQEmZtBJym38jVSMgYVj52CSkAjEHQiyXZg",
  "key10": "2PAnPdtzsS1uzp2TGEMq1sCTuxAmGFMHPHHd7GoeLqL5mZRCuRAj2aMmPSDguHiEQgxMD7Qpsi9nuxpd3beQR2tE",
  "key11": "623FjwUxYSWpaPkCGUXQNVVhudv8gFTV9FdaSNcQFKCEpfGTC1YaxvAFccDueqJkpnb5sBthZqYjVF5onNEG9BuE",
  "key12": "e3YV2yHKXwwH8fjaTfGAbzagdpf2nudg2csrDcmV9irtbLMdnQkA8eNdqwvBzRTHHWR5VL7CsnA63bBhd16FjgY",
  "key13": "2dZQyRzQ9ny2YqgGgDEyoRqSq71LxN41QQ8kbK8w4j3twmfHC2fgxHK8c7Lsdu9dbKDc8FyLzKMepnEBG5px4dXQ",
  "key14": "53rgRNwhWgB5scNVq7aEcnsFyz3FhsWz6vTTtrLmzGN6NHov2FHho1ngjwHtoNSe5E9pr656phAZPWeDPwnZZ8JX",
  "key15": "4tbf5W1eLgzEQ1KmnTaZqqqPHE5j6uWFdrMdvaPEVCSWGiHStPz4WC4LdypFf8uS6Uxjm5YuyvdwnfuqgBeAqvt6",
  "key16": "TbDewSiMXfUE9rUDnXd7E4A6VAmGqbJtGv2hJYYK1joJBRSFxCzqDvaZ8HhSN6XRB8ymp2Rhz3CRRtsbfcUbkjR",
  "key17": "24HBzWsVHJJKo9BTx33dFi9hvAtQNsJfC27zKpS1WCw1tjm3gN9KzwdsFcbWNk14KWYTcB1G9w32AxjN6mddTkx8",
  "key18": "XCxp61X2iFLfLGuswbM3NuswxWd5HmMqszsaGre1PAYc3xTzHBzeHqeQ5ewgg56Xe1mFThMhkBTSy6cnuo6cZWy",
  "key19": "24UY7mDAn53QvxGBA588SDEhhzAMpoagQobA2FQToKdivwQ5sL1ZghkjjnPngGv2ggbs53H6jyt4Y9BmuwLQH3yr",
  "key20": "4qFqx6wrCYGZ8reLgX5GnFeqzFZkknGXrAquLjxg2WMPyVaf11mZ2UoAQNwQduy9ToispiFXP7sRivCmHWfSAW8n",
  "key21": "3S9iR33F5Fz91KLdnCPsvhfPgnusUbKjHP7QhqXzS2hJNh4MGaLTGb2CRxLEtiWMTcFt2Y9xCo6vFBHQnD7ARBMx",
  "key22": "5DFgMqhV9VH7CHQ9ABTT3GPdePz3oDn5PS8TuhdkS2VcdBh4wRHdopXSyE1FnLdrFDTatP4HjaVqVuCZToq6iSN4",
  "key23": "hkgzXg8fwcoyU14FmC7SWMvtomCGbfyEBsLoR9YGbeQ7GUY1N8GPrzEGX495518opdKgQpAUmty8psF6vnH51J2",
  "key24": "3cHC8LSRdQ9DfafMxEn3KkqnpPuDZz5sWDi6hL6E6WUwty4Nt3iqNBMPWrCejmyhUavbbD4cQ6N747jEgBmLwma8",
  "key25": "2K6tdVv6EcPUoeQ41JSKfv8PQACpPH1JgmJ4M6EBDCtCuA2tpeNPLYMD2BztcgP9rrMnLQJwrs42LFK3bJ5hhTL2",
  "key26": "5YZcfZPHqfm3zn7c8CxJwpwGvLmmDCJDD3bgwDdhQmhjvaUGbDgke4w91tUsmAGY8o2iTendJRwyNeugbHmQT1Ve",
  "key27": "2ikQBwUEuboMZwDXEnppCvizRkGeRs31YPDvtmpMong3UgMYU9EuDeUnDwpKM12isD2vB8v88Lgb6d8vQvRyvrMc",
  "key28": "to1GRHzxN4NNvpjraGY73HSQ8qDSB9RqXo2yqUYQ6VBqbPWoicTkV1A6SeuVcNbFtVL7eXfo9mAFs49LHs4P6DH",
  "key29": "4VnAVXFjCkXE9qXU3QxbuWSG3PgSSEZ5orbSPPAGhB4n9MMtRRTCW8WnoxB2ZBp3jW1zy8vc23iYwqS3XSF2GSRF",
  "key30": "5eHtm87smvRNiPmbNvGfXs6aon3FTurEQnRY5YMS1nw7Hf9ukH4mhyxcFdWEQuXBm7cPe9DJKazWieQZy6ZaLPWC",
  "key31": "3UmiYw4XNCGWwENbSaqMEvafYKy75xEsBhFQfcgvuPEoFJLvfQw6qZ612e3HumRQyN3RLKJxRCsYB9BNKAti79vD",
  "key32": "2XEZ11yD1WwR4vRwzbxXdP5WsDxZpEfpRqmoSJEqaiVpYKiWDiTcN47gFf8Cf4aYK2wUqJY8WtGV4AAHYmXQQUbb",
  "key33": "2BuPrE5iSwPTQh2ZBz2ArC8URBczdnMgVdUvzVHALBGgXeco36KYnqoka4xEiXmwYtuZ2iRYfLCcS3v6hN1dHMXB",
  "key34": "2Mq5BAEVaX1gkbNgD3G8Pp6WtL1v4eHCB8UsXQSw26asptWDoAiyTw5wi8JkeFZKVyE1pUVv9Bq8g81QdbYU5hKC",
  "key35": "5PF17susnALWqoRmXWadAm9cZ6tXYTUAJYyUT2DtaxdNCXJyPcEPz4UTrCmEC9m5Wpgd2hBWzKaG4EHwK7i4SWXc",
  "key36": "3afx7bYgb9S8SbTVk6cGVQysmjgQELb53n3eKsiVfKpMeRtyCKU3U9PHc429pHyzwCkaEK15i1EaqVJ3PCmctW2U",
  "key37": "33Coch5uZkNPA8pjbfbq7D8QysHcuyqZWbZUrgafjKbMsYbqCrrJ2XSE4NV826oP3VGdFnW8di7udxxQefdLTPS7",
  "key38": "32SBMNom2Jw8wNGqtJ3ughbSJ1wLcAuhkePizha8PWGn1tYZ5Fwno24ZZmPkUrZbmXXwvKxnaMdNH5E5XGVeLn2p",
  "key39": "5PPVFaT46B5P6bBrBi2YTr6jhMqSoGGRxuuVLkhXiUPsQgwgzt2m6BuaMQ63pQ1m3P4hTxsB88vTijMF9KUCNd2d",
  "key40": "TMJkUDGc6YCz7F2GN2PNV2eH8rE3v7ZPMxtYaaxy78yjS6L2xf6gktPQ3ZFDNXKjZPz67fBQTc9AJifD2aC79bY",
  "key41": "4a2G3nHWiNj7DbHStzEC1BECv8MeM6PCAiBhDncMBWsiMNwnRfL1SVaJf4924spkGvBswbL7QR7DWYqafsGYqk1s"
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
