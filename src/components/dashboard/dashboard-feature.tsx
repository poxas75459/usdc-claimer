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
    "37K8pNR5hC43JnD1oBpX3anx8gGGJiRKtjaC4M3byaGngSoUPghy8z25vd4ohn9enegdUBBieTpifkfG9uMq5F6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "czbz47Xw5ov4G5wfD4LwfiJX74hBTQZ15Lsho9eNGRGNV5TeXAbx43okTEdrNErwq7qdW8x48v1YGCXi3w3MVTj",
  "key1": "H8uBTvAKxMDajGGLcRDTwFYDLoULnEEAgQrB1XzYnmChKaPzJouYXHraEXEqM2V5FSnD9TRqUwGQsnAdb5cjkYT",
  "key2": "4FJfBxgJh32CbPrbwdwvRKs2hDgdqPcPketGJDgowJct8uRJcWNtfVy9Q93gftHUh9borQjLG1M5r7zBzgKPBRsm",
  "key3": "5ZFDbVfaqvFaAYpMg15EPP7BSUMP5phr9rdV46MzzcFz5wnPg5USauQAt3JaemVsFfoowi9VJtnH7GpYSQh2XzPB",
  "key4": "5RTADzEhsNyVHEqnZXL6HLCYEWYFJn6qaWi8ctv6SFtc1UibUFZC1vBguJTV9D5org41chyqefsqqp3EPaUhXLbU",
  "key5": "58hkwspSnCxKmJYmbzQVX81g2NJBTKXVFBASp8oNERYimh6JDToon17DGUJw3nUaTMxvK1py4NcmUzchJPyuqVSH",
  "key6": "GfB6C4j9Wnd1jRdaQJEBqhE6ypy8r89tUVtfrVZoX2eZEXJnSLQgWqKn4g2x9o1fCRe5hRNAandzGHA242EKBAa",
  "key7": "4B61sxjWkTG8y5xnVRnhR5pm7UTxLNRM64swRdwwvyVjLo3TkZwbpEYEr6qGChfQkDTM6TjkrR9Az5uTrtcXakYG",
  "key8": "5kajztprWMManzy9CJtet6mBnDef9uGTS5JmrPaxT21eWEivBHFb2EGB5mzqNrQuEHURYtUNUm5w1LE2KvVrUcdi",
  "key9": "mr9eMwJCARgm2cmzMDWqAdmTNzxhBfi2ngMAkMxCLsh7JwiJyjr67nZgbq9s6a96rRGXqEdrv6nxi88SQKhGiMm",
  "key10": "2U3n59opD9qeaBzNxJPuBTYrLPGLKS3MiACHZiBtWS1EMB1z62uTN3QByx44CurhVRiZWhcJv4scLqRW3GrcGSLu",
  "key11": "3AxMTJr9TRaT3RnZDwxnQAjB3x1nCGpSWCeyVztXDPZHsxxBDdFQUwasgQC2B2vegHvcmsmgjDJGtDGPdt31SGWh",
  "key12": "2dMAYsifmpVGSFGYzDGhcJEd1i64AWrUGzYX3s9wRbskJzj7miHHzTL9nbL3SR659pMuGfoSNbvaxpCvhCED2hLX",
  "key13": "3bVz2SwRpsLCxTAUzNr5Uz17EAmij9Av4D5mDK2UmcJHxhtopg4Gxm9NUwJ4sA71X4KqyCsMRAVXXeRpYXZ2XdFi",
  "key14": "5rUrXQgYSeY97AnGQWPKfsvMM5dyf2WsFccPccnKPySDfDoF7gjfr2JFbFV5hScrwMfaFC1K9o48dYaV8vdc5QGx",
  "key15": "2jwLJWtTpExb3S7f55b5dMrTG92BvwRzUPsKBVfEAntU7PqqRzS3G4sbN8G9tc6CySguSitophPdpGTjPSfN2kH9",
  "key16": "A2iN83W83FhHkiw7kcVeFHtra1bWMnS7rLNZjKhbcYAHzZf8gddX41nVaRyLTYYozN4YEJg67CADzJk5wmuhUbu",
  "key17": "5xfHyPSWHK5zUQFBpXWpwF2ZPuJFPxC6FuEKyGnk67fTqkPmra5aW3N7HwaKGZHUHFNLAggXALTYRHh7q62dHdxk",
  "key18": "m1HwjGJ1c4LhAi2NS5hgXzkkJqNBFa3svwFS6k37fUExYs1jG1JcVWXbJZPA5Gy1f7YwUAvsQvfgx28HGQWpQGJ",
  "key19": "5tEonGBzNjq3WH53wtX3kDyx2Q5fFFraQPLBFxAb9ekoDXNxgCFLbKAtyoyJ7Fzo5jCr1cnsQ1ka4Gvnsb1Q3gzQ",
  "key20": "3wpedG1SnL6kcJQdsR6xyBmYfd6Q2vxyDB2ZCMt6UkkXav7SrTgHCjU5L2J5uUjjc9CMqdhpcUAbvMedF4uzKNPD",
  "key21": "oNNFtTM7hnGJWqFQ72txjdetrdFoXyN4CJ5Hoa9XkkH5bT2qqZ2osgQjHChrCRwks7TDZ9aqPeCDyKvzr9DRh8i",
  "key22": "4iC1TSSksPBCHrtMAiqP5Lh1CRpToVizkXwafpgUh1KueYgYfnrX6xXS8kAJSva29usZHAK9wpNqvD1wuYXD49uK",
  "key23": "4AdnugJmrz6oNBcErkUYdNDZwhwFZRAQydYpqjEDBJGfCZGXE9didQ6mtoKfP8woxPPaNV79qfEZdJkuQ26rpxuS",
  "key24": "5pSqaa9hDXjfhhbbNBMXsJmRBSANkgGd7n5d1CJMxpJ6BGwLrTXB4pY6ewwo2yV8AUwqvduhL1FoaoBY3MS7j5py",
  "key25": "YN7NzvUPxUzAKUfZwLchpofAAMc58xehvnXZo7JHc3LCJpJvNhAgWBqUC44W4tQG2rUCcpG4kKa7RUtyHs4oB3p",
  "key26": "27TPdtczLKbPMx7THrkyxYxKG9gsBDjgB5kfqT1SUm9UkMuCJx7mrDUryySuRuwn1Rpc4jWMBMBDkG9xoPMaRC8A",
  "key27": "3Puj4o4CPFmgpizW5TiJDCMbogY6NfeTBTUNfo8Vccf546987jvhT6ysqzVqKf4CFwVDcbbUHP5hUihwTu8gFcKP",
  "key28": "3zkQDKLwwiN6W538iXrHRtvjbBvkz9FLJeUXWnPA48dhJe1zHBZAv7bkdVpBBUau42MPMkb83Rep8CvMqpPcqYeo",
  "key29": "4vmmAtiApckiFY6ntnKbBCFFZ8iYv87HkziD3vupuACnqx8tx6YksMS1kqy4Tcp2HDgAGjZzCG4ZjaSJm2dcUPgf",
  "key30": "FMQN8qYhVxg6vSPcQKL6sTvvK6ST5erPf9NgEffciRacKpSeoud7gAzgU6bRDo6Xmo2oFtZvW4nU2xXL3EcPJGA",
  "key31": "595faQ1wY3zp645SFYFVRfL3j63rmoXme9tmwzMeNxWmjs4s8uQRwjtVhopBjBXSGeySQfjW5YKH97j2cFh9WuS9",
  "key32": "36nRXqGGtrjBpkFAJyCchsfk9cv2uaXr5YBW22rb8Hapox2wYCcRrhgVVp58ER1apz6dRStKjg5DZegT3GVVjXC8",
  "key33": "5EHC4RZytYHH6c5Aii2WSQLBW3AiQChWb2mjpZbupVsusroFigfrtjqGBTMXfKfesjBTUptxKgyHpXNdXCkLmxco",
  "key34": "2EXbaUnoHLqphXZAfdTVRG9VTi4oaxtrLEV6AYR7kGAR4a8CxE6wJ7by2dhHjKUuqp4xByW36tuS12u79yVQyUrp",
  "key35": "2UgabFYKYUNwUtBXCvdWBVGShbxWim5wZFBdLBwsmAvm4aKc21b6XDaDasxNMMaDqUJdV1avxTyt1ZJkkyMUygz7",
  "key36": "52eTT7w7zz391egq61nMHqZV17Hprffx3muL8N3xkK3L7m216JEQ38ydLPvYYffDL1gAZsgrKiYsTZrH2ALVuK21",
  "key37": "5sU2igXzQyDjw3eySXQtDbRXLMoBPnQK852XgNPuhz4WSPVDPgUQvVU9X9uksk6J7sSbAQXGD2E9GQmDsYYPYvVf"
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
