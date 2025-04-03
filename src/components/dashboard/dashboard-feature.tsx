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
    "aWzZGCYGeSW9Mb9zza5sLJXum1qVNz9UVWqjfBtcApujdc5PqNhy8KRHLnhvfTdeDxNpHLfwUWfkrMgvt2E1yit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3siFUqZfb7y1oV8wn9KqzDYBqs9yMgQEgHT12ZPzaEtMa6Zujp5jAYYrdqEDrCP1HuuBkTx3FyJPMVduZ4BsMVp",
  "key1": "4av6hzqkmuXqitXgvw4dT4yAG5a7piPkMxmeBrgSGoCS1Ki939W1TJyVDpnNMeKWSJxgdHgGqUUp1jSrKRXoB6Bj",
  "key2": "4uonhnNNBwnoiraPg6R6et7s6xfHqD9KCHfxF8VVDZ22RGDsjdfNioBSjmFYt385Acjeht4keFXnvCM6sXGry3bF",
  "key3": "46JyQVzRVUPy6DxEnaHXC64iuS8tMERLBiTBg76xuCucqGCGsrat3gnzDDahzJwDYhEGM1SnTRSYAj9Q1vVhn3o7",
  "key4": "2TDj5p9vmaKwxtuHhwBeXv4j46KWAUCg2yT21X6FJViDBLeJzTqdaSoux32SoayoHbJNz4Ruwx9uYqxn8XKeM96m",
  "key5": "5q2B6UZjFXAr8FB41VPhsoLQbqmakj9qmMCo6CiseztreT7n7HYKzMEiWHPAowDVn1QP4ECnVNS42Y2BwwFsKcB3",
  "key6": "U4g2LQJD85DcFiUSkAUP4s3HDJGveMYhGYLVyCjQMsSF25Nm7y42E8vN1bWJNMZjJudcuFx3v5BYQWEYHrYCQuB",
  "key7": "4MJE6RGnHSwXTaiEYvGQncFohJp74uqWhXwUVSFActQuKbLmFUWui9631aJ4kHTTe7sTTxVVxyhyeoEgR2onVLhG",
  "key8": "3SwfNgTddyTwDATZbHHGv7wThPv9GGveS5aDhFfbmNAPmc64kh9hgajFXYjUBumUY2S6sS8Lrmd6fgUHR1mcCWj5",
  "key9": "4So83z7C3Ue75SxD27ZEJMaDDzECH4g1APgGy2gC9WCktuKABKyBpYrUkFtKkrdi27MGzEifXY7CYRSUnj4KP9dJ",
  "key10": "5fiT6LHi3vm6B2Top3va6JWEUKukaSCEdk4Hh67b8WoFRcrKH1NAkjvU1FEhvRGrt1Yt8Aat67YtGBSYc1ioN2HN",
  "key11": "ERinrk4u7bcAf9Nm5giURJ2af5UJja8CZUA9eN23nN2MAFkdjoggm6vFdVQ7FZz5JHxcYANEB6QWvesCTyeimzq",
  "key12": "41YRBx48F9G1tidRdv9jGoYZphGEWPmPX1kisJ9N5rxGUvrZGTCjpCir1MDrHPjDUjgoMrt1vMRsdQwihRsuGQ3X",
  "key13": "3ifdZgk89gYhd39t6ZDSiecXC25CqvGqqeinRB6ef9m22oAKEvEUiKZ67awFGqQVMqx77z7e2gX5yH7jDGFDEZFL",
  "key14": "4PC4Kmg1trripMq947L9n2G5mnPwfCkyvctmH2qsCpaL5oNyzvPBneVx5mUbvhYE4cKW3uRJAjcWVWiJrYq9VKBN",
  "key15": "56qjXNC2LgRtiRrBN3ffpVT8wSfKwGCND6ZanttuSGsB6TCtdK2wY5TaNJenHv4zTdEhrELCmUWbvcBDk5h3wxWD",
  "key16": "5cPrRw2joq7C9GHoMKhVL32HaQSTZRSnaiTUkPiGPa2qyC2XLAVkADoDU7uhDeUzfr4LSNh1qWmkPkVWPNDS8yNr",
  "key17": "2ZGKsbiKmS7aaN5LjDTAH8CyU8q2xW8KppAxw3uy3GUfWwASdPnMQoSD9pFMm2tRNJEPPHsdzJziqMSPNBgQ8zvF",
  "key18": "5z4DLJBiN4SSDiRPUbsv3gYQoDsZSkbr76tEG3gHku5TALkgmzks1Yvj9FujxPzMLSXfSAs9aLXZVUNEjRhC8y5c",
  "key19": "5muRwKkA2VfqyTUgxeJGTXVEBNDBbghsCmc7Atwe4q7qxMCRSeuUQnUSYUW16mTpjKeHAzkCTBiYxwD3HbruPTHt",
  "key20": "4UCkbqwBhxnUKjUrDbVD55bCFrRniQwvoUTfUpoZepKjz43LjCVf8DY5mNixLbAnFBwjG62fmera9k8mr21digzS",
  "key21": "4M2L4E2r6t3TgZcvcK7KPTPw6mdqf83Q6zqNXMqWm1F6mz95ztFczi17t4B4MNFUk8Y1gMPfNJXgaZH9UGmfs6bZ",
  "key22": "48jPzYCuwEY9wdyGFnppWEJidesWnjeAgz7nAWD5yYU7RRGULGMMRJMEXT2jZzT8i9wt55Yqh2BmyTTBba1mYuV3",
  "key23": "4a5k3XbQutuu5HJFpgUaVZwJdAywwWdRxvw9WW23ZWKjRv4DLrSxYzoDhzjekg9jGuvi3V23SaWQHCvAJwhzvuQ6",
  "key24": "3NbALQ8B9bHRcdCn7NxgrDD1nvoSMaxMuo2cERuHv75b4hw32eQtooNxHZR8EEHALZAzUNxa9i3RUFicUbCwNoKX",
  "key25": "3jwV46nvg9TgUeH1SCcZnvqvBA2xwDRniqc887jquG7gBxcyRxoaiPVisVeLrdfjYZX5iZU4M1cACYYUfWqJKK8a",
  "key26": "cDnVRz3vUp3tVtrHZ5HFgq41LwcH8eM2iFKXfzJV8YaueoWYSmDEzVkNuDDSSgXoA3uh6xVzeNXaxttV18ZYjpu",
  "key27": "5jDDXzNSagbDgtqKCUqsZKue5LLzFfTBLQU5h1bSas2wW2vTkshPn8bDi89VZyFBN42SLB3LmQyD3DnNwki9RMBT",
  "key28": "3U1mooT96fk7TGrs8uTsD1riawnGRgt1A3KBq7RRzhzn6hGrckWdjDRT88oB5AEbZSMzmxGmehLqcjtEjsjiNt3H",
  "key29": "uJpcXeeGDwBUZMR23kMZ4zr1tUGM1pYXfLuRLFm8Y48dJH6Wui7he9zZiPPpu759RygTb5pPcjc469vZJJ82gRS",
  "key30": "3CGMBsiKtugWXUvf2bi1bPqSUdHcJehKvZaDRhEb8qWXeA3G9LRNetHLrVb5v5MtBW64UGP6ZNiUnt8U1f15L4zH",
  "key31": "fhfvykFtAhM1ZHSE5m49ierYXbJ2b2foLSSDPvhoUg7LQE43DxCJpm8cD7KXcvr6DyGrcw48JojSNbqPCv9EfKn",
  "key32": "26aZE5xV2uCVxBXX48ER4eZ9QayC84uV4dS4ESpWhqwcDskRyDTu8D793RbfM6qxSFt2KsMEQdcGKdbfyLcHn8Cz",
  "key33": "5dqiUAs5BtvXe3ZsSrUTXtVTdKzpiLvMXrrxqmrXtUkCGF1XFehYgZVBsr3LKzNDZGHTFZSg7icFwwCpAGxLLpK3",
  "key34": "58wVmSLn66bZGigmyMWTcG5xGPHYSfp1TiFaYe4E5jXdG1TLKzt6KqRrFAuVTcm7j7bfPCfMmGg528NZ1rkgGtFi",
  "key35": "4zeUSjoENZuq3Bm8jpED7TiK6RgEAWnMcsJdyg4DuuBgXdTfBBmH5Jbz5qjtGM468TqdLBnHhFttPtWuRW2LcBjE",
  "key36": "62f8ZXmYSNXkcsEQHhuQzBD9nUfZ4DGPQ3DZyKiehk3pwWQLF4jxZFk3EQWVtcuR96PB1Pvqopez16zixnAj3Bk4",
  "key37": "SFAr5obZ7i7e5qWeXQCYTqCsArrUad4TgPsFS75EednKgcSpFuGwFpuuXbadf6pA1VFDmkJQrWx8hf8WnM63ywW",
  "key38": "65rrKzEhc8xMiab5zWmrX31aoeTKjYFmoH14mDB5Zrz1NsFkmXXDg3vuN3BCfXNKYexKCXG3SbLYs4LTM7fuBPF4",
  "key39": "3kLtiqrDtRWoL1CuudWD2QXhL6fJw8YDtkETZmKxnt9JhdHFNLgYiPAJmX4kN4kx1vEjYBrqCQ72LoZH5CmPzqAX",
  "key40": "34J7opWhZSFTZ56pXharZAKcxRieu44VtCNhqTcuVht85jHFUpXeCwKbGK4F77XZ7VLjEmpGRmhTHpfF5JGCXzx8"
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
