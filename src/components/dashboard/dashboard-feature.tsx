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
    "3mokjqAQzoHVWG8oJyg7JBPKzYAfrzmaQUJrCtqP2cUn9GjPqLQXtmr63FqZC6pZ7dxCcaC4AJqXEif24Udw5BbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m2QP2cBaSvLGpAqSvzph8iRCRp8PMTmWbLaYgXieHkeoz8EaEh64jy99SkW49aPKW2oSzw7Ej7kRAwNNUdx4CDo",
  "key1": "5KsZif6aYvJbEYTXS7GdY2ZAdxefJwMhbtHmLt97qVcFJVt8NPqYHHyX3xryuJnsSvcuWipHeWHMMKFKfCW1VoSr",
  "key2": "YXsqHv3TKqdpoxD5ug97EZJUpR9mfyURd1oFPQL1hmLq2VaUs4bE5MAj5FZXRTXd2B74rbLhipBWHBQBXFPod75",
  "key3": "55GuX7bqEXsJVuLsarYaGhbFqw9iMSu7fm7jpAV9pGV67Nw4oqesCkdEdXutWHmP3LfQ8DksNVqPLLfFXqqFDP6g",
  "key4": "4MTFncdWPnJerZr8WHQdhDkZD22ASDkYAxnQtn8cJhZYjXeGGnAGDShGEyXsy84m8ddJR7LHf5NPYm9Y5wmSZHgk",
  "key5": "5HpNZC3eLgbPeePNJQF5CB8DT6jsuEzADGDRRDCcver93ueAWwLamR5LbXqGisYjaYUNsB5y36pbdeiKhaQo31ao",
  "key6": "4jebBkkryXA2Fegr16B2fz1cX88s3dAGXYLqGUHaXUcewKvXJYt8b1E4VfFxMe5S6TA9QxxfKr5QHNdVC1hoGEwp",
  "key7": "kjxo41ejhadhFgA6H2Bo9iwTeNskKsf9DfCWphVNTdTS4k1ko1ubJieS3Fa3pgjHe7avsynnJBjZgin3vdfR1M9",
  "key8": "2jk5a9jG8MUPyUXFQoWdYXiWEKer4U8u9UJR5JUaXeACrHrTmP5QF9ZznZtZV5FuE9Tw3MA2Qms2ezQfov7TSDku",
  "key9": "xwahDfHkB7iGtUTuxGmnzSDkfwta6AKhFNDJno2W14G1SU4Z98LczqHGTKeRXjagEsmg6JHzoMDJ7geBekqVGhL",
  "key10": "4CLKYJY7KEh7Fzn11HqNGWb1sUfP9rhDkzoXssH8ejAowQAw5CdASJmQqX4wcHJyLiZnWPdZJRAqjMv1N8i2DQjr",
  "key11": "33LiV5ugkQPNTyLWpjzk7XVMN9Uyj77eJJYrvdpLQFbYdCBKszgHGsmu59ezHtxNNiJXnYBywdYvy5ofkYvaeLbt",
  "key12": "2fM2fuGsGu942NJC7FGXbfw9uxvZQC8frrsyc1E7bcy1HyVvseUEqzuZ7E7mLdp5RQfBeHEKhNYTLrtkH58RzTNd",
  "key13": "56PETKBK6hk2G38CzkJhJ65Bt7PrF6M4v2xDt67r2dvSdhV5MqXkeTGa6dfQcJ95GAwAr5XB1hxVkaQ9qXGvH72A",
  "key14": "3s4Z8aGqYQ4my72bwK2XB1hoRmGQHNaJcgX7o1jkXQcLA2JEZA1vfrSBYBDgoTiC1AMbup8R6W1YdNnzxfw9jvRf",
  "key15": "4osv4jBCsqtddBTDEVLrqzG5P46ccKraz7JW37zjav3JimqUkJ7FRVxJAC2An87NHpzhNbGWfy2vNMP2YytmGTvB",
  "key16": "2Vfaw2wUBpaiLjrJeTBPGoHsdeZz1hk5mLA2TnfTU3WDnBnQrMwNWqiVAePEYuMb6BRwD7NjW9XGR6bDM77yb7sV",
  "key17": "3Ea3bUR6ow2pV1vkt39DJEuPvyRb3fhtpiCJ5VYCiox9eGCKVq7H27yvJLHqg8p3jpPFBoSoz8gYcpUyqUU1Vzx1",
  "key18": "5qoruD1ZofzbiGdaq4VpaUm547tgh99bLEFc9yvNYGM8uNHuhoj9HNKgH6zNXtcWcM6J4QqLPkbRjpnvnkGu6bym",
  "key19": "4Edu3iYkoy3qiJTfcs4k6EdaVgtkaqyNreHAXMkLZmuQChgEAkZZTwFdzUGfSWZ8eBZuKxxpQL2MsA4fALXR8X7o",
  "key20": "3EPoSkP1EQXUjDtbuGD3u6kMnJhdEG4t7GDb1oAXdLKUS29TVWBHn7YQM66UuUuxyJq8Z87hAESuuKbHwFwB3yfL",
  "key21": "2HUp7965u8dJsgX9vhhgKvfksdkY8W8hi8j19ittoDfLB2iZk5K3L2MiAcmbfoCYNnCXp3MqPzTndvyfSzReze68",
  "key22": "Uah4EUqbF39uX6C96YymUjW86yZnrsCqNLt6wfQeqS2nB8saaocpbZSGVvp2pxNuG9c9Cu4DcXuDipYqmGazq1y",
  "key23": "4HwCfmZ4c3zRb4hrhY9ThshRpPV2XTHbQ1R2vKm79BVpgYTTBknFZXQYmu94dCRMWUj1X8zGZ9AxQEv3sht26KFi",
  "key24": "4R84wDh3d9s6cKyYyVD7Py8ndko7VS8Ppos4vXPkDXTtwwEgxX4EoRgyAkAHN4hpR2EXZ77ebhQNqQfJ1wmxuFft",
  "key25": "3LfaXdNhGmcrC7pLdnyCerUCb9hTXcQvWxPh95utUg59uLe8Q9mMHS9D1ja3MWdKBvX9mH57FQdAe2G4hK2g627z",
  "key26": "Y2kgptL6CJfXh7CoN9Je87VVrbfnXYd7Bo2wV5Mf33YM6mbnDbtwCoGrvTACWn1Je4up49taXhKubcUCzhHtbZp",
  "key27": "4vBp3KfDzcXzz9wT2Bnaf3k6ZmaPYvtzbxCJH88k8kE39FwZ38yWEBS4gnJJmA9ZgJbtRJm6p5cgcfBLVFxHF5EF",
  "key28": "98XaJZqHHMP7P5Nz9JXx9cu88DSg2KBfyE18LHFx2GuvfDZgiGb9YW2o9juqaVTfiv6YtRBhYZGyTyjBiMQPxnN",
  "key29": "3nxBgkiftgaRojrAxsj2c7cPARqXEiJw79RroMvg3ypgAYdopkPwjsRUanARsM4eeRTg4YEPRuQ9MZbCuLGYCD3x",
  "key30": "5Pd8SeP5GJHqQCCTfmdN2f6LPQAB5w2HLAVgHwtHz9sHwJ5h94YuKYb2ou7j3TsodnaQMzftvKWNDJdcikqDY514",
  "key31": "3SvQmkYtwfpqhMPdrsUEsZnuaeeddXN6nBDMyrMhTPHgML8wEpCpJLpdK4wRAu2EXLNNyGv46sJ5V5NrxJjk1vn8",
  "key32": "tw3zLrki6QTVgQQ4mvi5M55yCSYo8PShdpfT5SGLpwA8W5QPYQ16NogxRFQymgp9wet6Eo4gfE3WzCN7tzpunco",
  "key33": "2o2YUJrGf39Pa8CUVq1W9vVPRgDCsZoMo6UVuZBdFtQLSj3ZtC43ciaBSx2gJvdEyvCbRtohAhjzrY2QNALaxvp",
  "key34": "35c2eCDy8PBVPyA2KrHVJ1ZRoqm19aWZBaRLPd1SjHrpnJ5u6WQPFRT84um1XdraATmP9dHGMPq3F1WCShDVB2wk",
  "key35": "FFMDcNiiBrD179tbVURsfAorBp6Zi31Q2h6DnxhYcghH218yVeV5GVMWsgqn3X9BWV3WSx3uX1CPe6p5aqdDcjD",
  "key36": "jM6fwNAy1VDhD32cMbTDXNnEHmF33p2e9iG4DrnJQv27DJD3eisKXaEszfjypm86xqqf6z2WsbPw5vMnqK8hZwv",
  "key37": "4YPfMAJBm7w7r1etq6FmhBd3VB7jCGxTJeaZGRsGgTGXZKGkT3Ctysi7NWjnTSixnQrdm1H16jLUbPxPgcJrvVcb",
  "key38": "5WiMyyVdHUPzYSru9eBRNckZUsaVCNxVodZG2C2t193nEkUHVzVNqQP82CDtyV17NCAqKcfbYZ4EwSBWfwj76cqd",
  "key39": "2mfcCkwB28k5V51MnBpxB7EXQUghpVmm9tQyRrGLbDPQMhRLQRPoYWjrVSBoLGyjBTsR5x3vGriG94KXamW4jtK3",
  "key40": "5hsMYA35ufDCF7jQCdqCahSVHqpEB4KUnPxVwRLhMV8vNheJMshDQrWj3dvfecVFbWnTSSnZSUbrW1XHmpXr9FJk",
  "key41": "xJzQgFdFb33TcjZfu7C4X4PqYtwRfSGvRbQETXMtURo1wDUUhmRkLNzuyJ5ppLHR3MfhRK3cKvBVsXG9LFGYFQc",
  "key42": "5GHAYEdDoGDkjJNk8vpNn25woE6PuRxKW88Q1pcKYrDXcQqi2BnreHTrqCD7jkhBk1mWNkLaUXJnuUzR1DH4eeo2",
  "key43": "4q8iyUw6jHTpqBN8JmWA64A2xxsL57aBhLsmbV6hrYqneAgsjGesJWQuntB2Ty6VgBizKaimVtuHiikARwAQNBzG",
  "key44": "4xKA5xYTuvohEuVhAeqF7QfeMk6K3sNYt329scuuwu29aX7zG8WhaEJ22DJYz7Umr8DdZdpitiS54KU3w7hnNWmh",
  "key45": "Lx1EBbFCtjoEwMSAQ9SUSNxiXyqfGRpYqkoLmfHMajNuH7tAwQxF4fvSnUFSVLZzbfz9HZ7m4hnCaJq5MCVMhc4",
  "key46": "5XdgAizw33E7fxpDe2V417RLRY76S9G9pPBqzhdVhQQCLc655Xsq74Tw5WMiw31ygtmW6XCxFEyM9gA5jy1DGzVD",
  "key47": "5w5oyQjn6v3j3h4an514G7XpcuRdiX5GVMhABtKzAYL7JhEhLLX9sEDqpgHoBPbsvS3WUfzjHDedtBoAWxw6qt7j",
  "key48": "2oE7g4WbJQERpXtFEWsSw7UfM8rbeLJPaFssnHQVveM8SMPZcKbdZw45ukDDccc55Mfz8zixebwsfVuK4h3xTr47"
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
