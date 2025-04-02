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
    "25HfeevJpmb17b6oTGrc1eYbsXyXNQWXXxvYfaYHWt2e5Ny9pmra5RqZFtvQAGDa6p2wWr3Txm6sPKCDmAiFfcpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jpnQQMxVkvKGL71x1BsySDftoQ9sKUWi3ejoEuLSdDeReS3d5oYUdMpaLKkRJZttBGSqBygk2hf2PK6qRjB5QxV",
  "key1": "54okmRGa2KmvhXnpGbYrCbbKCHw8jZBXUH9qcHMeEmqaHsoSXDsc1RMSn1rjnBLbFqsaLTpduvEqJppC9FEABeqh",
  "key2": "4Ua7P3UkF5WeuRZgGjW75c9mYqtLDcdo5C9v5F4RsTfaLsc2eCN6pCGXuDh8qR8HLQBgbNGQe2e4jx9UbDwY74sE",
  "key3": "1Y99fcPYA4q5Z76Wa4UfhXXwzrA8N5XC2iEJsBWTXvmqhn6CvrjBkEEeDvmMxz8C5ni1n6brkrY9Q1rnBs4kQcn",
  "key4": "16MPQuM8zZNzsG3nN6RXcGPp9GfrY8eWxR9ZpWUjFyi4ENQruieEk6nehXoLQ8DueUkNyufceEb5qbk4W2GSx2n",
  "key5": "uuStNuGWrbeV5bnfy4Pe6XFf4CgFn9TVDXDq7XBbDH6mPDr8meGuq6ZpKtEKj8aDutvNfoXGaeKFtftBmm7gibT",
  "key6": "2eChXYxEtzzbRxAfg6w19dEszDykPRJtMZFM9Coj6193iDDDC7K3bB4dLeuZYsKweWQWd7ZLyvsiJC25QMwnPFpg",
  "key7": "Gjav455ofU7DjreknQMoewcntDN5BBMmv87FCgfnRTPbusJxCbdXZ78FJCb27VTbRoa1Sy1qJZ72Fght7GJwZHY",
  "key8": "5xFyS2dZ27EuqPZpKmrbvRVueuv5TnkdQucqF8YyE5KFWLYWBLwZL5CQypzkDhubWTZZXwVCnXFYukeiTV5Wy5LA",
  "key9": "62euvQj1HwwspoVZyJBRXWhcazveLm1XrdF8R2aEh4zGchcwt6L9TCwmbrvdrmTdegXAhYT3jgaYqMG8osy2pKnE",
  "key10": "yurt3LFVwHZTqfGWhLa5jFUoJ4qaoTMRwQeCUYE6RD434RBzEotws3uAntVWBi72YytZrob1cLoXwytZPxbSoVf",
  "key11": "5zGBuoEfhEonHFLHstGhxivLaJnbuWw3fDjS6KkudEhrzSE3eMKnwx7AWMeo5QDH8eJ2kdtggLYcUAzXdnf6LdRS",
  "key12": "5Xf1hGXom4jNQmdZrqTAsRjXnVm78Uq6kvtCSEA5F5BJoHxBra9nH8SbB6c4whtsJMqyrintNgDcEcQgnV841FEe",
  "key13": "5X814bDjAtf15cHmyEzwmEDCeqvms6hohTZdA5NghHv63jo6MXvQMjFAcKBmTZrC7Xh4EqcgJY6xFFugDzmadBJD",
  "key14": "48Q6MthC5Ujw5y2SZ54ferC66FadzCfTakzFmHrVyJxrXX9Ta56XT7xwVRwTW9TSnK2DzmXvtYg6csPYBsRLHecG",
  "key15": "59ta11wdTh9VrEyWEhTz1qYTwbCCnMhgurhaYbsLEHFV45w1JsbnCLyuA1BZXnN66WVJ4DRyQUBP7gvuv3cVSXLU",
  "key16": "5vA7JbKRL7cbdUKf9c7DeTnmAme2vaN85Pr98fdsqxCkka8uQTznSqMAyySDEiWzUKLMnzouVjd8G6gsPCNR991s",
  "key17": "4272xuoPL1QUTxsSUR9KrQHAUh898BW2uD4wj8pdJNjnWskcquuJCKGLy2CuUc1rdtpordrEz85bUCrMFBaMYgEy",
  "key18": "2EUX35LP5PSzC2Yaf2hjHT1QmsR8eJrP9qLCTVWS8q28CRTWv4oeonFwWrfNC7hv2yfDp5LjhmXhZR7ezVrzHsMe",
  "key19": "5MqshtgB6L6bsWZ45QMg6VJNwzXiPZjA5uw2aEmswGG5Q3ssfHSK9tFzqvjGofAE4oKp8WMfoMj15Q75VeCd3ALk",
  "key20": "2MRzgQzRe1SjoesKwmfyBZmGQ1x2x6cDgGS199ULNPyHt2jAzEAM9J3D11NST1L6LvgZTRSfG1aEVcZv3E4YCdRF",
  "key21": "2qBw8oXFxJ1RMrqTEgJ5mwhhVUmJJHDfFi7uDmNiahzvXU2kASGLhoP49C2QUktXp9sXM6JbiANNGAypdUVF4shd",
  "key22": "3gwmwPRBK6rDh95hWdMneHpBXU64EVsV2bGMMTAsX1ng2ii87XGUUZG8Y6FB4FrNsqszvDCRUQdLX8LuxcTh27J4",
  "key23": "4CE8bQMiNxP1mdoup3FBaGUrTn7EfuAVfbXKqNKsUyh5usijEyc3p2kwHShLBQXuPWMswDQAXbKAEDhEeLU3thqC",
  "key24": "4QGj5pkGemoZH9EN5AwFmvcHhTvDzrXkuf2UrTmy2VfbABTM69nLY9MGVPDe4ezGx4EX1xxDsESgSqWsFWd8WtQ7",
  "key25": "5K5mLDqrWVvZhFcQtMFCW9WNMyhaAyoQpac74yMNi556hudfi7dxoyyykzjPYAbncoqxVsEzYQDCj6fNqcyvEqEp",
  "key26": "44eQUPUUU1ZgAGVn92cpTKTh8rEmdf83t2JAaerr4hLCqCQ5b9psjwpVe4Zt21gRGGosGbiqzXB6WEP88XzvQoqi",
  "key27": "2FTok9Rgoh8VZYuzTh9QC17EAkqedqsjvAMYM6LRS7paiGjVv5m7DDosUCPqYaXeGLnhrMYDZ5K8ZCN7ooqEdfMA",
  "key28": "X6dQY5BNRywmKF5souoibMwUT6d5oi9BQVHKsx4TWSt38UK6kNG1jsLdGMTVr7pLvqrQW2XkR1mSeX7j2xnTwqH",
  "key29": "5s3pFqi2tVaCvyvFPzeCAQY42h56saeLYGyWg9kRpZUtmFks76Y55qik7w7uTiWvUyMq8DJous2Ku1zeTKvC4VpK",
  "key30": "2KEYF9Y6i2grkhgxZnUJk2MF1H7td8QDRgWyfhiGQEooTp3H3QEERM8pyNwXhzPLPqK2AMQM937djBpkdEcG7yN3",
  "key31": "Yuwhgd8rzqbD2QpVQ3mnHK1SqgMZe6vZsj74PTkhocWBjAKED2TRd9XJWbzorjNsHo21ERmqm5n515BunfZurK4",
  "key32": "4XF17c5yjLEcdgiXS7ZcLERauzScRkqjnLCSKatxV28KQats6Moq4SDFSu5BbohWgpLoC5mPxaaYKyQYkxNYjuVM",
  "key33": "4nXaWthG7Swj2SoFzz8UMcazw7YCKKztunJPAGA2EnSZbp3EG124ivBCyzvrqGfE34vtza9tuGsTKJ35xmACytx7",
  "key34": "4EuAVt8Aw3vFKxT3u16VRpvesSJ44zme6GgdhBpmp9KzeQPKeznePLGsKjJ2ZWjNsdzgSJBJ8cuHQ4sPqr1yf4vB",
  "key35": "2i9Zs46m27ddhxQRPH3yvfcczPhRbz31D9W2iAsRbqu6xZQEKWJpxQonxtZWRgvptRMjouMExvbCcTRAoNJfGwh7",
  "key36": "ccdhChV4oeVtfz4sQSj7xuByFCKeJoaKJkNvyNAYZ69HJFuKiXave9qcCM2eYwQPAVW3jX62zf8qG8ZHk29evNm",
  "key37": "JpgXf4SzJg6vw6nP5rRUSapdjij92khdG7qUQxif8tVuDEXZQq87jHeDS2LFsBkhmgiCrJkNw1aUoniKaRwfTay",
  "key38": "443f8BFWTHtD86om4keU3rzBq9pWcPewefabVdn4pUid9Fq1Qcv6aqRVbsgTp5vhkh4QbR9Lhxubbw9yQ2H2QWn1",
  "key39": "2dWQ5YBPo7LF1W2p6Cjy1qhNcVUDihoR325veNFkNqA7cmNb1u9pHzdibpnSG8wjfmj9WQn1WLsR6LMiRazrrSMJ",
  "key40": "3jyy8SsHHmeSCcjjrtVtmrpwWjzfGqFB2V2Zbw9C7kfnWCs4xrtHWPTen8BEgVw7d4HyvmPsVt1pvaHBydxNgAWk",
  "key41": "5QwMw8Z7kpW83enWCYsk5votRR8V7MQGoSuGBRU8EkNzStz51r2GC8wDbdSLZHvNK529DMNszz2N2Tx7xEMzuSqE",
  "key42": "2qp1v5rvckYw1po9k1rWSW6Y8VK3HrGt8AtF6rDdkHa4UudUskaEQZLHkfsvf2eng6h5oBUSh7yDiPuSSN8DnUZ9",
  "key43": "3ShsSNarQSFWP94jVnJYzeDkbGNpMQxFhBBarvfPXMbFZECPkQCFXHqvRFpZtqng5zF8HZ2irrwszs8LDs9MU8tu",
  "key44": "2ypP1A16HaD6jTSVf3BY2Z8gc3kZu7UjmwRa6uEbXWRnasqwuWxMUyLfxGxf3xeH9RdZuTNvP9xzKy3Ks2rk2udm",
  "key45": "b7t71Lwv1hUJfTQYuWnjDFh5g9magqEvuHomrfVvpSThsADnBJvtRh1GLmL5noVucF2jV5TtcUUQebG9xTzipDQ",
  "key46": "4xGafwE3xkPqqLkkrq3j3BKYZdkWDC2iWyZywWW5yJ3ZHbxZy5cMgsitS7vMwo2YyYLWC5mLBLja9RS1GmPfo3Yz",
  "key47": "2kXqzG3NT16mYJW8x6kvu5FByZLYrcYrsZrVwTd9ABvM6B4sdubCXd6upF6Wtt5NaTwBPrNR9f2QET72zGveo11d"
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
