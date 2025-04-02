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
    "3bB8ohT9DHLrxULXvoMan2Ty7LPUT8BfVVMyEyM8CVhUSpJdZo4TBovNtzY7q4p6wUx2sHQiYPUiXY3A3QJk2iEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ak4hWRRfrJAGKMa8axVnC7USRqSJRexYkGyb1ES8XMSGm2RkJofvAmpZLXfNBYNbc9cXYF6z6p8uk93YWJPobH6",
  "key1": "58avtNDQxSS3BZGgBanbbKWqH8vKw4gvYtbPyLDHTW4egiTvZQRFEV1BRhHKTr2h8RR7HwpSTNXdeFxaTirssq4m",
  "key2": "5LkfaaUofPKMCARFpHwVmGmLuAiW3Qmc45ExCoX9vD6FtVkLLBFQKzzKsvwYPDTW6NeJbsxmCPtoeuegHYjfpk82",
  "key3": "3P6zKLtNTDdsC4yD1qsC8sTYKYPZRVzkFBRZpqSJsWbPV1LeNmF19M2B6E2F8cSrVMbnHNes6FRd3pgEVVWzoddq",
  "key4": "5L65X4Lim91AY2UwSjiAMy9mBFds7oDRQsdvLUDNSLUwXvwuiNNDRrDd7yrZBJDHs2S3ZDqQwbUVEU8PYHN6YQfV",
  "key5": "3zz9uTkQvGjwQVAPcSnpWwx4SJV8soZmE9ftHgd5GzTBn6NoZFUWvnCU8vRfpBtMMJz5GvLLVXXZNmcbxQudK9BM",
  "key6": "2as2MqnJkakRsp2Cbed7Su2DY4LVC4Vrc5PD58b5xcKxAXB3nxJ9jgmYrxJDdr26obSCMZ52uPhkr5v6EuTX47ji",
  "key7": "3Fvh2oXmX57fs7YDdT6wpRttpJM34qe2DLC2KfPfNPMqNaVgkP53eqE2RmCMCjRRyypA1iBGD5mUbySCKHPNfSqc",
  "key8": "29hbGydnby2PeAPStVNoJBCZtjDcKEqSTQZJh1tVkiAAs6VoboY5M5eJVBUXUnDMatG9FJnyYKsVr9bGCwD6c4o2",
  "key9": "2wuTN9qUXhMUkM9yaQRvXyjcbY1Y2DHfDMhr5iwE4YDB2dP3AvbJhanWQwLHLRPaxE7jXP575jW2S6Akg672JWF8",
  "key10": "G2p5GiXYyckN4eQkkigEGCpPVRfmwVEmCkmxwBCwFEkWQ2qkUwmt6JrxHDQhJCtA8zfUy7bavmuZsbuYKqqM8tR",
  "key11": "2HTMjM85SzP69C5yYSDtY9UtHYgEURErbn2bXCt3YdfrBzEtvQcQoAAX1rA2Xe5uqiNq36HsoCKFbbhMCxNkpX8u",
  "key12": "QBXEbqbziZTh2u7VwqYXcCAUWwVbvUgPFwY3UgF3Qnfn6eXQmyEocfJ2SR745sgCGksYNBUEzCdVUjgnz89Pqsn",
  "key13": "24ixT573fBKxF5djwbtiWiM3dH7HVKhsmcjSaCeFJUXaz56k2TS77knZTz2vFMJZyQQHTWdyDdgJDYcZZBPbYGMC",
  "key14": "5fa4hZpCRbaTM685oBYHu1cmmeLeV37nX72MN57uQADJMmGPKC2Uc2H6YchJxma31r3JzHQGRChoNNHdDQBVEgXh",
  "key15": "3r57Mr6NkTKYGxoXxDdwZGkcfEA1ihsL8XUY6PmNRgqiwfm6cy1ahvxds36hR1HC1M3tAMMs4utSS3f1zg3pv4Qv",
  "key16": "3gSw5CgZW5TFCcU8zHHSwUdC4XpkAu8rKmecpB41RFMGfyPuSUfnZfkmkZmQ6b7xw1akp3eTyJ13QEABiFYRaT4j",
  "key17": "2JZQDMT2Z3jBuy5L6ttZsFNXrstumCcjGfmN6bro8sAdKZmJJeg1RLbww3bCr6KjC5z15NPz99V2tXNNynd1XS9V",
  "key18": "5dMiUe9QPpnHkTJZExQdygyDHP5CD8xSW2Wc8APQNY4vatQDbdTxbCVcUXTsMyqHSKMKYiwRbeAfNrryYUdRxBFs",
  "key19": "qP9BoBQbUCvsCscZSTm7r1wExCP4kZpopwJzKuLGJkSQmYRj2X7yoAcxRtEnuv7bSxFnBEvkikRJJx7Ly8CJEsC",
  "key20": "28iKh9bYxbwdqKKBbcEsRosfMXA9rD6pRChedeBfsthKM2PmjcS8yePMvjdKfTXMUuN1H7VLy9fE2ZCb27BM8bE8",
  "key21": "5tu4Lrz4Fir66i2ivd6Y8vb7LANQGsC138sLyrPTygt3RqWCdFr8kA45E7r4b9CAPcDh4naQJ7YeeMCh7qKCbVKE",
  "key22": "4jxkBTkSdwUGsfGNQJsFPRjcNTBRpYS3vTHV4cTj5mowj3qsgWpCgcggXY4WWEuJPYpuqxAJWpYpVnBMzfAYaicr",
  "key23": "5WBECnJ6XFyAasWxMaYDsFPMSZYzE5FTXSWZSf5EpbTZV1P9FfZgUyqD76Q6xEG9NjVNLM4YUBmJBg7u7i5SsCtm",
  "key24": "3XN4aqdrvpMPaaamJwDnNM1eZtsRgysmCsgg282B1KrGEGhH3JDtzY4ZYs12Xc91fssk8VFcctd1Y6bYMNbqcEHs",
  "key25": "24WeaHygneuK9g7XFhcKcrA2b6uNxaQLRNAcGz8NrVwg6SSgj21VyfhJUDnFccJWCLDduDB1ArtaZn27BZuzpXwV",
  "key26": "2Fe6Ep73ZU7efbJ82AjjYQwBJ1nrJnCk7kj8oT6mbdQVu8YXQkwix4SX737wVhuKJgEu9ZmZWoprR2wfGW9WMFMT",
  "key27": "3oXm8c7cvJCxa2HiUXqxLfZeF22ZNJ9MPLmkVtshUmnQMqUMAoUJTE1pvjRb8GDsTrLpceTrTujVX4eZX4Neu4Yz",
  "key28": "4QVga8x8QqpTePjYMZu4Vn7zSQsGAJBNuti1sUEQRRxY8VTMGwteDqb2cqyqAxAYek3fJ6ZSJjeCN1qDinJfhQbX",
  "key29": "2WjCk9qQEzfcHQrPJVUZNoMJ8phWhf4voZNevpoRYyxKZW4E3eER2ou375hxtaRphXiB1CPUeb13yDYdQusXiaH8",
  "key30": "4qH2xFrTwrjVyzvhRf2pNwz7WWbK81sdkjUm87zfPvBoSE23nJ4xXMHdx94VG9VQ4CQwiL53n4itmmMSZssKfrmP",
  "key31": "3GkcPLsrFWHLZremNpZQvSoJwpSafvYofmkfLPQXqUvnNqo86vwVeXPYeXWZELk36cLq9etynyL8DowQQxtE224k",
  "key32": "2LVSmzu6oBc5mJ8kAPvFvjjBfkEsqjWH1VwDm683mK7K3cuibQ19BAtYprBTrW7VFE5ZdbWaVgg9RAAQkhrFkWzY",
  "key33": "4eMctJSE3bH9JPwdHuuMm7brjebmnHFPHWVLPVkg6TkRz99NkuP9NGaB9vJ8BxXkZYsktg3d1J6p5nHsDPt6P9ZA",
  "key34": "2gvKuxeZQzutN3MixC6vcLQereiu8gDcN6ZB5LTtPB3qaB3LU7SoovgFxNaKkgCULfedAEnRrQHwviCcmdYT5Ay1",
  "key35": "qovDmBTaLk5kQdWqwzQAy7bbxQ22rc8tqQxQr4BFLSVRsCfgYTwTTo8NBdHLVZguFzB75cyTe43XhWBqTJ4BWC4",
  "key36": "5dQFYFJqrdCDFLEYnXZWP7gmKxhouhzwWtYWiNN7RRXdiUAZY7cLWj1SVZwA4UyK59PWk54qjReWJe78UXsSsLm7",
  "key37": "3bdu7zzHD8xtVVo4P9KhErrDLSr2VL75R8t4wonARVDfUJQ2xzwiELVT4HydPHMahMLAD6Bacjt2abUcK24hZkEL",
  "key38": "EPf52F363e3nJEgPTiNaTxXA1EFf4Jxf4kFYJd9b8J5oHVSBwrsJkq7p1Yp5ZCUrmWos6mQHVFrytKDeNhhXM7Y",
  "key39": "5kPR6tvBBegEPbVsEmDdUUWGrwLirEZYHGDzayxmQPEm247D8AH1PgPJ32y3vkMJFYjBBJr8guWTpoiEvJPamuP9"
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
