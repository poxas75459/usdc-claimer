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
    "jFcaDHmVQ39vPbYz872sScJD4XTw5r1k1Qab34piYYaG3xkRvZiJQxMY2hn6bCiHYFNc1X2P1y8AFYdCGoTTnd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sxKWyBN6xoKtr3APonnuJo9kTFdHXbxQfRzWsga7LP9eAgNtuAPLQSpqztypU4yfvLHVJeqkAG6hPPhnphZXEN5",
  "key1": "2mqKRyqEhKVihKTbbu7K2n2uKxVw82h17phQGK4yowkM4dbsDNn387R7T5LFXVuJiPSNiSV9uxeSjXnLPozpBHP7",
  "key2": "Lr7vkcU9bxcdDmW628RVjoFP3KPM1yH7kxwcR9D77GnQEutoxQnyAVd8CuZ5DFdprNqwRGxcNoasLghXhYta6rS",
  "key3": "21JQuXt2Nm2v8z8zJh3iALf9b7sHnaWSYDjmUuRS4UdDfT4Vh2pyZiX8PnHWuUo7FPYtXrYgLFHGeYq3pAJYJkTr",
  "key4": "3RMMAoiLv8vpRCCJMJ7KFrH9NqTNnL4JFz1qBeESzQV9r72p3KX4K2QGJLCYLpSjCWPUXksEgyiVArirq26yiRyE",
  "key5": "4qp3i4ZRB2vAjzZk67ckV3EwoXqJm5BiDv8ry78f5XkGdX9pBm9adsmNEHSD5buWXbrYuqAXx7qejseNnCtKxxHL",
  "key6": "4tebuBULR5rsZYYNQ7hfjfV1Q1goicSAiBuBb7C6TMF88gXcyLUpbahKXq8ju6DMp9aXm2tZeTqZtRbGuyrLGYSP",
  "key7": "4E1Zt11XbKbzmgGXJYZfgV2vn3dwhGjK3HCVGh8oURwyuTQtYLy1GE5JMo4ABRXan39TUVKawXbP5Ym84AtRgcH8",
  "key8": "2vWxLdADmmQgC7JZhmVTBqMnum6xfcZ7JrEonLvRKpArWzL9YvkPZtB3x2CndcEfS7BipJA4Rhjge4yB6yifGKM9",
  "key9": "2vA8ruk6vu7wuiZgmkSn9TmkNM7RoY8pT4tvALMdHjzcxGi91ndQdJN2pfGfTaP9UCYEgJYENPQcwNDurRDeDurv",
  "key10": "3gVod3VA1gQAwMpbbtteAZjtUTBi84DoSKRfVdnJyBPCfzpzQAoSmSTZnrmgqt4cUTYTyLA3LYyNEPnC8JUQD4H2",
  "key11": "6KdDszw81zZjfos55UyDs2hho3QhjGaLUVgsTfGKNtpfRUo15MPo3vGAPmKAcx3ZC63VARo4uwKkFNhdThbuGVS",
  "key12": "39h89Z6KdQZDzwmnNMgGMXYgacHxTapxv5mzJj9ZZtebfst7V7v9FfEaz1iqoEJpU6E97q2mWpPBBJYpSNB8rcKo",
  "key13": "R7DiifCjiP1jYdag9p3q1GDczyayd2cBF2ytSynqhK6iyZDFGqVKbsjJwd2nZBKLY9ZsGoZ3PLGvJTQP4oPDBPv",
  "key14": "eNhd42AGTpFthzmDgPHfhWo5pyVD2za2zth3EmtFPdD61wTGUabt8jeuNzBUFUFaFYMXX7kfxbr5XA11pW2YCiP",
  "key15": "2rh4nLCjfTv6nb8JLvnNuartgYuJRQNnDatEoSLsFpna1mzMo1XSMVXXiXcbYHmDpMjQvXDSpFNW8SwKKEq5QN9j",
  "key16": "41Ss1Rb8oEhtYnRvQKmNDBbhBGx3ZFFGRbXyMr8uhuH1hZ4ba3nSFqHBHrWipZGaHAPH3Pe5rBbRSg5x3QAnB7xN",
  "key17": "3v5n2ZCABve6VFPtmFYBMWCTpjbMfD4Lpoz9n53kmeXTyWxWo11yFisCpriQwjSrMH1RidAB2g2f6xsrBk9bm1xt",
  "key18": "in1pf99N6UZXxzcxio4f93dadmWpeXp9sGaeEMmJkdEYzKDqsYcamDf8v1Q93EjAFk6T3MDvoDES9tMtKQaHHEv",
  "key19": "317YZST5eah1xNXDbvjPBXEQU7rh9k3R6KbgBnqt6YGrqx3yVBvi85cdNFG3QX1Ry32y6FSyD6wSDZ2XgCLh2JZA",
  "key20": "4Sv8x2TSJRhwNbf5H3kkSfhD9ueiHSmd7g9JKGfLuttcx39UhyNE4agK9w1hQ6dgUaRanxE5xqE8TtmEVnZfxRmp",
  "key21": "34RXXpvLGjbVqE2kXQDfhpEmWCq2CAiqtdWTYD6g55HqZfsCsir1XtTfoMmZZpd8hNhm9K6JvkfAbEmWUeDzctDP",
  "key22": "4wf3fbtn5WWEvhdtH1RNXxmqpk34w45jV4aR4Cy79v2Hb7MubBpS7BdhTxtLz3Ey2MEWmropguG3XnaRPcVGDJro",
  "key23": "5oCkM261zKLXQ2umNBdU2cFbPExoyzf2YgemLouQ48j8DagWa9tFzhLEAPJ2mB8CZ1PuC3vYG5F7qTjGDhgEZpvk",
  "key24": "553X8JYAhfPK5QdspYMaoEvXtf15TYopNtnCEfCs7BWqcapBeJwpdZPGWiP57cgZd6PZPjkknvxsKo1YU5V3tBqE",
  "key25": "2gsXAUsnDbTUdh2AE2XAaR9YPsZjNqUb7M1xynHRgChiha1myfsJHwnZuZ5EayCqrthJgPacZzRLmKfMsBrV9jjC",
  "key26": "5r8t9n3v3uDbA1S3bXWLhWq8sMtcq2byh2aomzELWwYhDy9SWuoWiDYmbJ9nQqyCW2tYdEFXXYkKRF4DP5QPqSKz",
  "key27": "2HvVNACiGgFccLB6pWLSPcm44ZibpyBgaxFxSzbEpa6RKWthYvcvTgHWD2tebo3vazPoh5za6TU1DnvWaJRdJmMi",
  "key28": "515SyH9HCmELnLCjm6QyMp4tXZnKcRZY3WF96AdMVaHSXzXq5M3vY8VfRK4ipeG4tBbTu9oJtY75Vn1QhYiePiVu",
  "key29": "4oj4D88Aax4gQ6QC63CoCxtzyzLxi3EkmQFpnYWoZu5pbVSJdphcUYRxBCG7EmNNJaFkcqfbrxyoN2775FLLhPnf",
  "key30": "4udPd7kLT4NJjVjXATcAogqMSFiUVfWjpU5osaM9hNWSzbGpiqGDRvoWq3nEpsCHgYALbtBA6YzsN7ZVYSAZ81cz",
  "key31": "Au5MLXvn5RchaNg7YdDbrKYxut25qM8NMxyFUHPUGLgHY2uKVEfCGE8QZXe3Uz2ppgiWxR5PoJ5hiL7s5gN71Gb",
  "key32": "Bc4Nk1gpgJLpqVpxJxbNmvM4HQDLszEB1K5wScz1JonbQPQf8TVMEuHK2JSBqCAkjY1fj2hJj6Tn4Q3WyHg5RhP",
  "key33": "jCruTW17tTVUv45ADbgoFzaJkZdBwu8UkJ4YR2Cw47foEDNn2Ye6Zb9a3aYMBkkt8UkAwerKW63CQMLXFutcn9j",
  "key34": "2UuY3DKWBYGfwc8Zi7zLbxoNrk4mkw8E4c17A4NJBmc1qqaEw54KrKwYdMvhjPMYYdtG9JrLhpxC5NVfnnR31bdW",
  "key35": "5KPbFJ2oEYTFhwoayoq9WLkoWwGNxTeE7n2K7FWF9BKoqMUnYbNLUsnwXxZ7XXvFnE72KKiMt2Br6fL7KE7pvU8q",
  "key36": "4JHfedXSfrgjZxQtSjW8GqvjzR7hE5swBZRfcXtz3YLL54porK7XMht1dX9TFozjArch6UVgGeSpXy6uDDpXkzFg",
  "key37": "2zfqq6ZZgoPzmm2fUxnrjBn2C1bSLbQJwpJUB67ePCo6ja8nZ89DH3bsd3yqR1ZuVaJiY6Ndw22aPFiShBArDnqR",
  "key38": "5zHBDDJT5KMFvdAJDVgba4PUi3h8S2s6PUAc6whrpVNoJ1vBMVKWB6ByAmZCpc32tnsEBBLeJd15wCRdXdrXzyE9",
  "key39": "55DkDZVXtjEKKoj5YzsLnWvxuiah8p69mfvWocVQsVe1eUSVUysBZpdeMPoY8H7xTF8FWAqwrVa5TsAYUVxj9MAD",
  "key40": "4KUChFWzre7GLGiNJmhijbR6R6qrPcqP6Bbw3Du9NbDDsmFyP3dQmwN9sSHnxyGLLkaghV2xCC1rsRHUxNKZtTxE"
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
