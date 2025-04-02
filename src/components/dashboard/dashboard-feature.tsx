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
    "4wf9QLJLm5APBU3wmcNd4XVv4Q2aDuQKUUMS33JRmBSTzAiMtLG2eaU93HpzWw8PHvB2KazipgZuxCiVFwmkd4Db"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32BPhBo68UA3TmFJJeWQWTY8m7pvE9P3NU3VKDjJcdpPouo8tJ91bgSGFPVF48MQjf2VLybSFc6r7nRWm8DxdDTV",
  "key1": "328QzEQpACtjUZcNH4NBs6PAALEBbNiXDNScPfYUNrZJWRua8C3MUenmPCJQtriiwyH9WLMCN5hWcmnt9jCePcLt",
  "key2": "3AMb8KQGPnoxsTNCMPnCatqwz3ZZXwRMgdbE1poJ8z5KkGwsv91DDqSwGyrpH2rgzNL8QzbgEFm786kPFjRF68mn",
  "key3": "xPc246gGtz7FAKaRondPc6VWg3PcdQNXgCMaTRa1dzKqvH5jbFNZZhw77sNiHiUxmUUjz7T7Sb6Ec3bZRsTW81p",
  "key4": "4do5XFAtvfMsWomHHTQyTdXNU5KocvBMGzJVkv6ifPE3QBkGUk9Hv32ZT9i3w8iuVoCFe9T6DsMcZNknvTbTvVeK",
  "key5": "tp6ZkFsvt1hvDJfKKX4HxS8L9zbEhXpryprcDMJxx7LFwkt1ZbLmZcF7gbkFz6o82nQr9AMnccU44zziFpGuP7K",
  "key6": "db7cCN2RJEoTAQoW3793d6XUALKHmeMwLQ5eHFQgZGxEL29iNB7R734mKwoYur3ho6jkeUHmdkjmQ77gsKmGmMN",
  "key7": "4dfeZaPhUTyzhwBaMH19yc6jcf3qgkPSf42NPf4hXB3ZaZ43qgqLTT218qujdnFsUTy7gpQKGenrRStTKmTXvgxe",
  "key8": "3ELmN9cXh1KePdV2eUJWX5Vyxg9HJVcDTVuEyTpuQ3cF6MyX6P6syAsQxy6qJVHzBPrSG6TDyUuZzBvqmWyBFrQ2",
  "key9": "4LeMahyuRmw34vRGjabgFF6Ywm3nMk7N1KusTmjpkxGmzVK5x5KsXUE5CChqggVygQm5iEDMEpYupSeL3EVUvGSF",
  "key10": "jrS3eHuNCREQbmtKiZVRRUVfa6m1DZApzgwGvAJBZWWGcdn7tDjY17ftAMaPvXapxffWZFyZPuttffWoBJrLspE",
  "key11": "2JYfFhwgDNHwbmefUjN9ioG6EU4fSas7Zqjw5GYujwnPvPaPhBLqVozS5k7JFu1w1v6T2az7kCYBmTzHyCgj6Fdm",
  "key12": "4EHq5ndAZDJXrJcrSMQXKSSea3AvjLDyLEkaXqt6eBHz8T39LsMFY1xBpFkMMqb2siYgrfLDKonmEckeUhGbZ6Cm",
  "key13": "5fPaV1YpaPfW2zoU7CYMK28nMT2fM8UcYqmhisAA1DLtstkM8g4Kwvwp6HTVKWVpn4XUEMa53AfVLgBvGzn2yQ6D",
  "key14": "2FaLf7yhj96dSYM7LY3PXayTbmVLGQWaM4xBJqyqRwZ2QN54VhBWGhpdYHaTA1ZXSqpgmnf9cPr5hjByNcPCQrpH",
  "key15": "4wvGwCdX2X2V2AqTXeb5Qwwy8ipRfoxVTPvbyCv6kjdFWo8RnfTqJPyV4Erz41v4mcbc4GVx1ccPZ7wBVNbdts7C",
  "key16": "2TnuD1HaQSzfR2Lhh1FVRfB23hZ1C68upezjzzHtUcTvcmBM8XJuyXxYeTRJkoiweh139pBBYg7kkc3popKRKf97",
  "key17": "pvij5TAdhTdmZ6aY4jRcKghbdHZZJCKEXxEn89yRBgRFWoJiUnCPbLUCcpAEzBYuyknfGxUNoYLNYTqQJ7nVqB3",
  "key18": "2dtvni3e2ApuutEWs9psqEuqHDooPNZH8MUwEjBQbwhAUkdom7oGZNrppHxyyorTNDgs6EH8Azy9Z52h261dSpJA",
  "key19": "5ixrEAyM7VoTwDbF15xVn6VNejBNhvPNJTtJZ9uzeyWrWzgRnMoFjgXp31QdbdpugEBUuaUkrkemvTaC3DUF7n8s",
  "key20": "4m7ahuPFwTAgXCZj7dW8yzsE4GvAe4Ro7FUGW31RV3cXfxrkH4tZdYUksbkmWuv16Zpv6TBhjWeTp2LNfjZHjUcC",
  "key21": "255GZqmewRn5DPzATuxaoZfo5gibG3S6MD4NsurotJQH1tX6PiAJLqPMrC91oGDTtLQeweqAubXcyhkx321m6V7X",
  "key22": "4rM9jUFBomP15zY1ae95MrYgmxSM8jrwXLPNhYVZEBKYoX5S15Uk88641fXNazWm9cDbHcKGCpKAajUV9Dr2K3Jv",
  "key23": "2op3zucfX6M5Yj7jT2qCyWQ8kcZbJNgMedWY2jB4M33hwR5tQWKJd3d9G92y6KmgzKcYX3p2eNA8fyWcFmGJBeFk",
  "key24": "2R6TdSisRkSn3YfsQYnpPhNBgvcqBC34PVEa748KRq2ku237neEDvGvxXxJWJzBT8vFWBA9TMs1hb64dqCXrUhT6",
  "key25": "2aJyENy1THEaA64uiKwTjQMxb5UW3MDa3t9u3hfxCEgCC1JgwsXxN7fmrQRyHwKureaefMuRpPi16FMNRLwFz4RB",
  "key26": "347AgAvGH5ociPS4mp2byXYyvKLjY1DLpcptCSbM8Lhw921UGxNrbjc6YxqGJwzvwndcb2iFkDxw5YSLoS4RAGGm",
  "key27": "43rMDJ8oeTstNLJehKaFDPdno8bkKCqoZndbVgT4UiKQXVVVeK3XjG4TSVuXsrVmDQuJpHqEmiMUAZfpCg7JLfL4",
  "key28": "4uKDC6tYDh4UYXTbBNJKqcv4KEjbZmiAobS2kbd8e62ogVNvxHmhbZPj2hJcrADDrrLcw7omoc6fimRoMWsZog3N",
  "key29": "3cAXufQ4XQqCNoG6RSWTEwC8NJM82Rsp8gEejwofJrNjA7j8huxU1RPbYRiehLvvpetBiDHckcU8vWXENVhHGK32",
  "key30": "5yZfD8zXGMRHmwomnNgsrCAxvHiSLP11JGRBku6hNzV9KfywMx5usf2KLcyUDzvNAehDHgMLsvxbsmxRhR61Zx5y",
  "key31": "5qXUMNN44EDqVJ4mSy1BM88Xw1SPDt3pjJRgfiXvqxrCW9iz4TZD9vPAuZLzK1Z4G52xsZcJCTFACiUXsNsLwKuz",
  "key32": "dUr46PYFzuAVjyHA7XYgqw9PadZUzWXoVw923BtHpX38ucQ7TLUz8oCxqDH7CeNp5NgoRb2uMtVcAnoCKFsmDjx",
  "key33": "2bwjBkvowLW8cNRb1iVh4S7SZtEYbxwfrUt99K8P3uR8CHuNK1L1YMSybJ3FhgB5K4Q9SyNrNm2LHbitdEgqyzJx",
  "key34": "ReWbXMxNcSUoMYnryKubTda3RQX4kET6ncfjiYGiQZ2X5tKAdi5FiUZP5s3wXCrsbTDR7puuETuALSrU43L1YrU",
  "key35": "64ycupD3hNh3nS68Zo8r3jxdqCKRxm2jqgr3e5grbvwPDJAG1x5cBxpy1UzzyZHxKKLzmpUi9cWGHnfehMEJGZwb",
  "key36": "kCaxCU5aab2vdrqG3ibqxjp8JEXjqhqYyw7NUV1r9BD6z7nYKJu7MjE9g7JReLb9NW2KqAkxkcU4RwDzqs2TQkH",
  "key37": "2iktjqhsV7B3oFxadstzuwBA6ZX4uJJEitAh13sshwhJBywGFwESb2E5stkeuRx8uZa1SyeevuSJhLrrxZY2gnuW",
  "key38": "3s94GEDovAYWHyLi9qVvurWt4Xm9Rgp4NE6rdY9aRP9thoyqL8kh9oHQWVu5E5b8byZj1Wvjh1wAtB1npTNix3Vi",
  "key39": "2tHvjTnvrFSq1EUAgmg3ZDrtzzynfUKMymhje4Jq3qQmYDE2vhWENHbRtF7m4jwJVSuMQ16fxiijTZH9nVCvuLHV",
  "key40": "23Ls4ySmVnM18e1tZ4oWySbn2PFKK6EA6zGePtDey8DD2rn3Y8yPcgiVPAzwCsifjWK7jxDsBDxDVXUtf8T667Tu",
  "key41": "RQWjyuPKeru5GzeigWZTBGXFGMrZZpr5ckFPDd4beaFkCTheSLFpK5oYTSoqPcFpm4TZRqmnTXfnB5DX2eHvvMY",
  "key42": "gUHFaqM5YmwCnJunSweQTp4jqhuVYigXKsQx5bnfaW7x5CxpZGPP9QZTJfzCf7txAJ4bVwLkgtDj4kPrw4i2z9s",
  "key43": "45jtUm3MJNouKYKp4PKjowp4k8EyBtfKVvDwWByx4VnXk92bSRXnpK8kXu7r8ZZoDK4WcVmV3dtvYn9W5xgddQFY",
  "key44": "LAz4Q4mtUQqZJB9HNcjft5LJrES3fDFRq6Fce2kVT6WEg68MdACL8YR2yVKMMy9ZHtxJZQHhTdH4ZKinqSTXxcA",
  "key45": "myYvF8kPXA4MZnrExDYRC6GVD2cb4S4DphxxJjBwjoq6CHfiQCqSRCf37wzdnYSfDvfQBd2xDfMfxnU5d8DiK2r",
  "key46": "3Fog35KhZyn6f8e2pcCcAyshdEkGixwLGMZkS4CoJmqCDf2BQZhw7DQhYQ68DmGo5yytmaAPjDaj3LEmtUwXK35p",
  "key47": "4Loazuab6vV8SPKfK9kBfbRumk1y7NNBipCuDu5FaURY1dB5oZebCqvE1gtt2SmSqR6HiyAA3y3zk8gKeLY4DiGZ"
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
