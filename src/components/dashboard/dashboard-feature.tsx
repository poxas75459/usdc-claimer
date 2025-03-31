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
    "647k2vYfue84JA2s9jkH3mrfkGLfgiK1jtwjbp6fCfxWmjqM1HGN8g5KERfVZ6AtDx2AY6x521CbDFRNQiCTrCr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59QsM3F2koPJu57a6SSbJmFrLEzAf2aQw7tUoDjLdJLNxZt6F5bJmyU7cg3YsEeaQrgZ418kf2nxGXuMsMdnKihd",
  "key1": "2MbMJ2k1ZUFfhFCfvYvNXRAUnznU9PgsjRqRba8GdKZdEUFv2jhSdvqoi6aWJWJt2auHuHdKP3EMhn44XfHHECmT",
  "key2": "9t8GpUxvwThGNX7oKVu19ujeLuvDRWwfGhbv6L7i8WHXnHJcX5K4X1rcEqsWTvviQnp4QgiVk663sHXdZXTB7qq",
  "key3": "28R2HDJPbUxcVF7krKQ7YphWB1h14VsZGLE4Fe1vivceYGNAWThYyJLx9NoGtaVPBuffW85WTPLJfuqWjHfE8DV1",
  "key4": "3zw5Ka1uDG8JUzCZUJNVmZxdezGUucu51f1ZCtrkhAb79JJTetJ1tg1uxmL4GajUFkkzSjfbhvEcUYdGa57X6mFC",
  "key5": "3xFP4VaS7Xrbgzg5oEENeWimikJa99GpT1VahvEnTRYF4tdbkyNGVfgfbndaLUFXhRiJgUFxD9Nyh99i593RtggX",
  "key6": "Zg19czKnc7Vsh3XDRFabcFq7sUuBk4WTaZjNWP38SY7Av6dzXquXMyqmcoPCQEUwiUUGk4C5dCE2BXEVXwgEPnx",
  "key7": "22ytXaHMEBRjE7fVqSo41NYmZ7k4QGprkSEtauiRkw1YhsU1R4f91447m2hUgRuytDPGcGJZygmK3poqgrTDt9Ho",
  "key8": "4t76yfgM4h5FgpKFcW6Qeqjc4oMZNuRfW9Rr5K81yPzWmAZHYRHjBY8jzkBpF4bEp51Eovv4QY4YNgX3UxB4kTtJ",
  "key9": "3837ZFhh8hSjLqCLT8Tz88Nv5Xn1ykP6PCQMdLbYC114RWSsoCtjW31vnqo2mGHs9H74HQS4ud66BRi8UQzgKdjE",
  "key10": "xVRmz1iF9DJFUF92sJHotJhp1yVWzWUS6qumTU43BtWPqwNrwM6ayGwDkLbEFtAjyk9DK5tNMvRYAKdt8cUaEU4",
  "key11": "3xsVaDDzPSfDQ9JjBgDJ9JyXWJfUXji78WfxYTXYLPuKFQanRLTqUQxBGbmP8hPVq2xa3JDUwcpJtNvsRmf2TJww",
  "key12": "5WWAGCWA5UcXApis7htTnfFUpgAnTTGa1eNwjm72x7nCfsux5WZEvpgkjwdNhXUw2WNhVrWqrfC3j6fZ4xax4nko",
  "key13": "4vAQHBXcbLHWmhSVeQK7syvy75mEKP5Z7ZoPUeUSR33eyfKMPiPnw8wUvZ8rEA7zVyRrCQqEDFfBL766T6whSr72",
  "key14": "4aP876vFudWFZ35cKGWhuFdxfQ5fCM7ooWyQys6me5BxbVgkYyweaMuSQfNsB3uyzYXZetkTgLLqUZvn8MpEH4jA",
  "key15": "5uWTTqSFGD2qJ7Mwpfq6yK9xcpwYQozBrzSHrhv6FkXiNodjb2vsim3FNSWipyka2ruvj2XXsCXEV5Huo6u5azCL",
  "key16": "3VccvekRmbJR1QyiTxn3qiWJegXd2rfHA7wKoRFULvxHLH9MEaiBtJJcMncsU2n5s9FQp9gmdHEJTcT9otmWbUXF",
  "key17": "2Kdae1RahgAPm6xxw3od9t4rWqe1iFMXdWeRLwHMDYzm4qrSVogDVU2RANHyuX1W6eq8rjGrZNsKkDAyrU97LFey",
  "key18": "2eqKhHcR2YdtYDT1GHPcByJqeeYpoVWi83okWZSNseNyZUr6fT3G4YapWk67bpTWayXjv7ETUCjScMYR1aRB19Lf",
  "key19": "33dpVAjY4f87bbq3YE2btWa1XKSM6zCnpfA8a5mXDNXKspNcgN837Ui2Rq6xjPKrggQU5BNL8Vi3JyewHKA27dss",
  "key20": "4grFTYuk8HGTf4yHhXPwBizVLGKQEYPxMQCGRPkgfu5d6vcerir415VJUWTyZ9pDAGCPfwD8xFuBhSWdN4baBCci",
  "key21": "4pr22syC2CDue3UJZhPkdbdzC7WgjTqg9zJJMr8Qa6WTrGzErw7f7KBsQsrz5HgwoP9X5sLWj5ipbhaCzLMihZwv",
  "key22": "5kEttbwdgXWpqrKFKC7gLygDBuWWHHPBwG668aZ5BscRk4Axk5qssTKK9x5U3Tpmx4KfjaNBrvvQQZ5XHRYSPYoe",
  "key23": "2v3TCn29cQVv9xHxomyLRVA1vHD3qC4gkBnDJMT9inNN1tY7mACDZzh2Dra6Vutr5oYgCrySEekE9hPdPTk4poRD",
  "key24": "2ekp3LK35t2o8dWU3PoERvYKNFtbnpM4iFaAPjb3Ps8Ncs36XAeQoDXmZSB7fXzPAix6zpfHh2VGdxcbVyv4cuuE",
  "key25": "2MoP9Ksu3WMxVjqjtAhavdQsYas866WiqYvi5SbzVqCR7StbQnmfjDQxhNxkXdimafy3Hdx8AwRzDAdukHQy24Ns",
  "key26": "Syc3Tz4Ajv5med7tsQp5y6tP1T3Ppj1vLvep7Xk8wTjnUgdfrCopMyrwxXvDjC9JcDJVz5KZYvwJnmswUJv2z3w",
  "key27": "wwYgwrP8HxaAWv2qP91g7WRTrAoYJu7aYn58GnMQDpk2czYgbMPwsY2bBfnBdSjMvW1SZsVNWJCUJCwUUByQxaC",
  "key28": "475QvbVc9Jszdw759HWAFmGxW928Fz7qhuRU51fgogvP5zdpR3BLTJzKF4Nf77MXFJUhb2tJTRVo6kVz1JvZeKcM",
  "key29": "5bYetESWMqtJbR6JytWghSPHYXSuREeFWDAr3DLTkjF54dtYQJSHMHZ1c5DicEWWwFEYaEhRTEePj6U5HMPJVzkm"
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
