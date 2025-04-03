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
    "4F3Vq4KVonsyfQtHtugwzCPYkEtbcXsQvZ1jmTczALnqeshjTe24fq32DgAvNtxqYZszRBbdEbfUgFXL1V5kQn6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZeaTjkzoAbu5jCfYc7UFJt9gJXbh6eN4sHzNZqwiFxktBfkkA58vy5CskzaDozXPLMnn1hHgPMbxG2nPo29FFaV",
  "key1": "32M9BvhrPShw8yhTzZ21y628Aw1mWSws64AwUXCtNnX1r5oLuNf7w5i6PzxvC8KQ9tjwtk74kV9UXXmT4Dy9hXja",
  "key2": "3S57Rn5hvYQMNV6qL2TvNVvu9cP95n57TDNUzvvyDZgqxZeazaZb7VNvnn3LS3qTQn6sM8JxDnjdAyaZkx2QVbxT",
  "key3": "5h913qAzT6GNkPZtUEYccF5yBTo5k4AKZNUy51MxYYY9yh572foQiM2idenJxTFPcC6Ff7KH4dTcumQvuT88Jdwc",
  "key4": "U6mjGVF7sXmQLsk3mCvftiGZn6Ge99fPFaD5vMYU9xmSFPAc1B5sx2WjeUGFUr8AebjGwJ15Exq9DwnWiu1vRuX",
  "key5": "45UpKYzEptkTMG84tcwhxkT2MBRb8qBuUojBq3HEXJmWto3DqNiMLdk2HhZGb5oSaST6JmJZsbArLeLRD7eaBx2K",
  "key6": "pv6EWghtVEgivLYykFGSxmRoqDpGq4FDDASJrG56eYnQcCJxFbJBeQt8956oY4zUoDpdRCzLvX24rK8gnp6Ni17",
  "key7": "iQuNcVrUQQKBXMGNKcT4goubRRNbpTwsN3NUyG9LvTZanjoGLaJLbHDzxHQKXaRd8fQAUQt2jtaTJpAbEsu2DFM",
  "key8": "jhiaSuX3oGtyDWdfUAE8sq1quSUizMyEaefX54xWhZioBWfi65QnARKbjqy2PocDeUoxC9u4TJNmyhs1wqaCjE8",
  "key9": "XLzrmyKPPxWyZVWNGrKgeUSzZ9zUzjiqFkgdtZU4BnDJmefJcMtS4HUN98TQhmY5e88K5HDQrhT9SyqsJ2DWcMA",
  "key10": "4PAKUcXBdPfb9HEfRFevnBGEiDmN2N855mk2UFPSFpmXXgWRMT4uM4BonbDMswRf8scLXzR7KmE5q233z5EhHjYZ",
  "key11": "2vnzqhoEKZpA856Qu7BBVudhwYdZE9DNtcWdWK6tNaGhAZYS9n5VKiE7FhqLxYZk2AQTzNABPVpxJqW3obWYZ9Mv",
  "key12": "321fU8So6bBoH4V5qDH595f9ED41idqP4snwcELgWwUntdqXmqGtEv38yEAT71KxhGzH7KKmhzfRTdn6wbV43ncb",
  "key13": "YY6zWjVM5XxaNZTCUVJL1ehs28trYLTrsfrL6MFosb7SQB2cNxbeewRSr51jis9wdmAHa9cq12sM8D5FQ2bTPZD",
  "key14": "3shy4jhsikivKDrFXkgUmCnavMKikXt925rQjpFUcFH21QkWvnpNYwZyNomw3FBBFR6xt4aUkt4hEDRq8m2kQFua",
  "key15": "S1VXQmybiongqqosiBensLSRwF6jpx5ygKEdeyaaALfRfRpRiaHTxCyHAj6CpWaNXP9KwteEANWHKUXGy6thH9g",
  "key16": "3Y8Z7kKCwqCiCEgDRKg16eHFXH2aVqB6kzbZtATiHxPRuATmawt56UXJPceTPECrJT9voYm6CD2p13q7KHWNpeWU",
  "key17": "5o56RH8bSNMWwAnyNWjUyZus23euoZG5Zm1FafEEur9YuEkZPEBUMjCKShqQ7ysjsLgTVBfS1fSdzJfmWcRUuwE5",
  "key18": "HbZMpusz5FMQHDQ6xdBqfdaewJpHoYE5vL4PFYNoggmJPGSZu2dn4wsmenfixTgUEHkppEKsa2hnJorB8ckeypv",
  "key19": "mzMsK3HSwWJhXX7Y96qszRzX1ENWikqrUNjkEZUYS3qNi4mUP2ntrRhyTnUCL73sDed9UVsh4oXFvBSiR7vBYpw",
  "key20": "pNjVGMYXX4bH4qzv35jnKZ8Y5eJoCBM9HrA3CJQktjvpJEb6AcVHV9RHx2p8VrWhMGCDZBMpw5nb4XM8FtQ8Rm8",
  "key21": "4kmqBg9TV9rdTnKtbcotkBCphfvs4X2kgNzwgdhNLduTuiNt7cFLDmjPuvDsjEAmNxzXXAMxBLWvL7ZAJLSdWhpy",
  "key22": "4KgGpKXhWuxvHTiB5hMsHMBqKiNx6QpU6Lsxmp9R4p1sCdKRAPcT2UU1oSBGyWXBqPyDYSvPvg3vc9vMkpisDeDM",
  "key23": "4ppvwqHtX1LyFBvyET4c6zsZ3wdAVn4BKsZ1gGwoyJfDww2HRmKJjHzAW5cRJZ3EvozWcYLsTE695UqZLrLHhMmm",
  "key24": "3Eh5GB1a7mNKiarozDbtjgA93C41EVnVBjK4R1H32qukh1iD4tZRJGoWA7JsQAaKf1iowCY6QaDXyhL5LSA1qox5",
  "key25": "55EuLwEK7vw7d6Jofrr1h9UzaoCPctZv4aZuLABDeWWcnM77p4pmr6pQUxgdFpxuRoQNC7K1ouMz9dwN9aju583x",
  "key26": "2zVVUX7GJi2hFYJE7AFJHfosTg2uq1D7QEresJATKHyTJnhPxVqgaP8gktYFSzvvuQbXJnQXvLcMe3SyrBSF7Rx4",
  "key27": "Dj9Y33zPNvMU2uZudw3eVxtpnaZ1fRSsfU8ga4StpX2tsYuvD9FxF5vMUcuQhWB1kzqqpYYK5tCvwXqmC2obaa6",
  "key28": "66z3256H2vCv7UgZtEvgyZdJ7ECAr8GwRYLmbArZpsAVitkxtR2SKSkUjWdyigHiWa4auxiXb2PTZNh19v2oyMie",
  "key29": "41p1PMcrTbJEyxjKcbWEPSUDe7Q3F7HhtBTnxUYRDhdouDpcoS3ezkFPSBNwAyr4qc6mNL9gtKAJZzQ9M3PP5A7w",
  "key30": "2UEifDA8ZZLAngFrWQVkfMtntvxYWniNm2zpe8DKEVW1xFffF1AnEDfVjjBftZKzEpPHc4qfxuiAWRny4rNCjmbb",
  "key31": "47t1k3c5ex1j4QR6Lq1Wk1ihiLTT8FF74yL97SRDYyRFfQNkp6LxqrjxwpBPEDJQy61NkxxJBp1ip1YmJvKRMx6K",
  "key32": "3XhMvbvVxZ2ikzrzxuU2jeGSrGDRiVPKAT1Z8RV3XpJFLUSmWY7Kv5V8jSS3X6RFbgAaSm2m6gfpjM2JnDSgtCVB",
  "key33": "4zfuUTBDgMRoNHTijRv2RwL7wtU2yaKXd7Ctmb1vffnKjVPnXDYTtQxRMMAdxgQM2zk52Bn8wzXjE6xXXDe5teym",
  "key34": "mqSSLCSwfF4YdnJuM37rBifUbnDTiskyqrmNUtz6styuHBU1VHC4kDgg7bY6vn3YtUvcHdNY8MDutb1WonDTzsh",
  "key35": "2En47sxY8eCEhtZQPHWw5Be9xdgw32RHZH2fGN5jvBykEKFzgFgHfwyZRheyXMBCpAi9gFap11zaPMMiAyvbEbTU",
  "key36": "22nij5cPwXd4nCKFifxxSsvs9sNKk2wX96oFjuhhW7qUesYxKH25XSKp6AVJLuoj4Q4f1g8A9UQc9YRqSdbe4yx9",
  "key37": "4R9zRYN87TJ4HEYgnZFYfythhepckv3J8iwYBAqkZL4GyqzuhoXbG1MKwMifc7ami1Z1Xc1kwdXboB3BcxaAeLar"
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
