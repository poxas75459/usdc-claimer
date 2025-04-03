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
    "2B1adzdB8qhqqaMByxxoDRDtGCXWuhgEP6Cy3M2rrBuSr81BMjkJpH8nPnwVwLQFxa7qxkJDFG6a8pFxUjFQNjHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GYMjBoxmtMpbK8PcJJZVoYyMZ6JPbTmeqGxnqkgZpX3eaFNvTVAyrog5BFbW77eR5sps2hiFmWMHc5HqE8naWiU",
  "key1": "2AckLybRFJGAGv7Sj6RckUMn42t1JRYDQejBtBovw9spDBiQdBCmqmV7gGn1UBJH1DUfkD489FKCbaev2X73Dfn4",
  "key2": "2SbhQwPxnMDapC94NyqAXToatpQEnqSkycX2XxvuzVihGtAZo9nkQ6SBqP55WZ4ovLrfWYgqw3xA8FDDSLsZZxjU",
  "key3": "37iUSNezgGjETMhM7MaQTsT7uibef2cEahUUE2fygdDmWpFMoWKf2RFUscJYXNyxcYZJCLfkkSaWDAHnj3gDqrRB",
  "key4": "5SWwnUShVQMzL1nzNooCGYY8YugFewCvG8v3CB13P8uyWnquY4SRHxSB8uE5nHi4j7KTKBYKS15BH6hUj45pzdkB",
  "key5": "5NGZHA82XGZeY6dDKRRJKi7P2y6f4boMFfwfDSCPbfQkuVgiamkbPg832mPrZ14MJanTQLUFrumYshTmfESTYJiE",
  "key6": "2ce3i6SzRw8Fzyde4n4ZgLZr5MXvXgGF4eBny5yHq7PkEPPKeJqysSkHEmBeDWXzSYTpCpDHGAtv4jHk7XTHTV3W",
  "key7": "cRMBGR2WdCa8uhcZDq7ykhvGQDTYCAtajj5GorguNnhbDQePqXqRoTzrXLCRjSN8icTMj3j5Py36q7YTev9BQpJ",
  "key8": "4wWjeCwMPTSkRJd4KzHfgd9BitM1WYbMkTMQeDcV7zSgehfbLU2b6osbJ8ENcUwB5hXywuRLYYLsXyRssBSxGLQd",
  "key9": "3ey7v36CtPoY78x3QjTvgZbXq1Be5iaNgft7xmwvnidArwZ9KVcJ94yxMDDdxaty1MJR3nvBnv8HgiWey2uStFN4",
  "key10": "5XpYJ3acgyHZWBpLuFy6hyzR85D4RcNGgqbAtFvGGT8YLdBpmcLtftxudgRZX4CxcCdMTjsAcu1MZ4jRZwpHJqVd",
  "key11": "4NzrDFXm9ZAZ2NMSQoJUnYxfewSBBhhAn17826bNza4LrYt1UdbcrH4NjT1EGEpMeaFioYqU6S6aHNw22PSbYZvV",
  "key12": "48db2B8JZroyq7gMb56PwEtFfugf9QDR4YR9m9UpQweRWtt6keWK6gwAownA6fsioywR84xn8FpZGVmSdBvKt8Mn",
  "key13": "2dhDJQpfVHyXGNmEDS8TkSbVhapMpxWDjtEPJmV4nenprXHyLnbkJix7TsttXgM4bP2vWy4kt77gXi7PcwuXoukW",
  "key14": "4wMNMAKtGsQZFJXvvbjcbLPfhZn8TR146tagTFgAkAM4jcu9ZZaisfAv3WTtQPNpud5oaoGrnC6AVes2dDPajAPZ",
  "key15": "5fZxo8HLNvx1NbG8T7Gxb53jx4qPs9TupJHYFcFMfeP25TYB7xx4DxA8Pvn8iuvswCMuJcrjZ5MqVrxMnvkfU8eS",
  "key16": "5GyL6t19zTpJe8Aq12y8267j95M8d4C8vqWRds1QMMPwKBdg1qVvAaQL2QXaswhHuNyZAcMUe8NaTQXv9uGweqTw",
  "key17": "4Kd9bXgsDSzkPeJa26sbpiyQfzmzwMFjwzmmzRFPzEy5qDntmj8A4pgTp4Ni9jiQkAJra38F5Jt69ToWFFtppoRF",
  "key18": "aQrmod4JQsmBi2rzccjoGctvSHTbULzkdn9d8LnxTSREfS3PwcrnSrj5YzmhUjS6DFN4dSeH3zbFVANcvDCqyAJ",
  "key19": "469uqibCjXRNthwX71XAFy2w7W1rm6kRobVrTnpzPk15A7qEFuiLcdZrbwB7pVYX2w8mEaMGE9K4BNaTTiLioMHJ",
  "key20": "47h3Y5Q17CuRAzTsx5EgFd6RC2XBch5Ef6gr7enNjBVhv4dRVfZij7Wfpq58ES7JAsVoqXR2or6QrDZdrAvoTcFD",
  "key21": "3aqQre4P5sf1BoH11gzfaejJhdFgvt1CWoig9iNdrrB5XxMXP9ZsP6E97gPbf8zRjQzVugVjLAu24GQqM2MFzvSu",
  "key22": "4AYSzG3NitNDhBRbMCDr2TTWHGE6nkE4zvsoG1xVMRjSPKuMWbipqbAQsfZDGyNewwskDJQ6Kr5U1TBBYRH8YoYm",
  "key23": "61B6jghuoKNxpeVReL4R2qmgeiyQ5L2CAXwykkwK3RrMVc8nLeYL5yz4wXD5bAtMhKrgmBwmkF75mAE9FayZiSnd",
  "key24": "3GF8GmfC3icCMf2ep5cXAvvzEyPu2TBDpHiRXZJyDWnWZte8LhnLL4GK94tc22ERS4pwj99eLp8tDUihtcDag2Nr",
  "key25": "ofuPQn4QgZi8WyHKVCJfxezw8Y2tXfriNS4dSR7rFw5kX15tWgHEjjGRWErU37m9FCMuwrdz1F77n5nFUWfH3DJ",
  "key26": "58FyMLRKDfTqsHw5MvwYrA2R5WTAHsAxqBy5Fi5pDdHRFH5pg4K45GxCFvQYhayGCiNXf12JKgw1NTELHfsDMpzJ",
  "key27": "4ioUQtJ6pHCc5qe4RgPrL7YscyfShNoY6G3GxHRGmyNNngyANM7wSE9VJTUQpXsWumj1Z2mHe3hb4dyNnE5iXUtB",
  "key28": "2LR4at19jRFw2Rmg7XSvVnBpVwo4H61FTX8SQYLMQ3wEtF5J1WQz1vqb2Mr5SB5efM7FrjUxpNzg5E8TWcsfCrWT",
  "key29": "4BYyZBBr96oJRi77Hdvhp76vtnVBgPrw222xgt3MyG2koBRTKYRrGZtE9B4LdiBkF9S7BhMFeXMt5BsMGjEyHTt",
  "key30": "46bvmhRSon58DmZaugzCzXghHwPw9BsgHpZyypmLB16Yxtj5c3Hx4EDnuZEjB15NVYYdrjdVRdAcsjJiuuRcNKPD",
  "key31": "4gxgYe9tudGDxaMy5bczqHmFkdJ5fFrfTuW6PaBvLAXSauvmR53kosa9bWsYfj66UsH75L15shBAsovs6QEpKcSZ",
  "key32": "5oUZyivsxofqf3pNcPqCVeFQT1GcmDr1izdGPQ7uShKPVuYZWax9LJUTtiVZZJ5ZRmmiZLG2LA57ZNBhBcGn8C5M",
  "key33": "2EBiM9q3PVkwegMNDcZnDV4pmWjD8PvGCT6HNj5GBFRnZJwpGC9pycSKtMrhhnpB1E1ULjjMqyi3QivoKiBoWRUe",
  "key34": "3mgHvu7Xopt7w9ZPj9TP2XJZZt9NN41JSw14zLPz2fcmu3cBvH1mVFbMx8EPiuZeiPUehbBnRwZmxaxE9GQq8TDC",
  "key35": "5LWDRHiUsDVq3m8DDffEk1iazJcFmYKFp8yDYCEJydR4VP2iBRWW2taoZiEpF2eJamSvNouqW3gr9CEpPrPaF81M",
  "key36": "2Aa5D2Mcmi16QUS6yTzQQKDGcUdjStrxT5XB23r4bQ8tLnVhb7JchbC6dj6Rtp63CnFrkYtht2XubjcL3GogsJrP",
  "key37": "2TQjo2VgS1nGAbQ4QqHv91jucThzEc4YpKSonrxWtXpCrY4tMXSX1RMVQ2ohkSLW3RLXrLhpqQMqXTB9xNKShuK4",
  "key38": "aYsZN48vBSxJhsjEpteSxSwowxjuQXJGhgd6gmp1GTBckDZTTDbDgTtUCAzNqJvmeuQsW9y3ZeuKS3Eim73Xpnn"
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
