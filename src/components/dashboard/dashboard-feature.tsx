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
    "dujXJebzm9whcwCA7XJRL9mDE4PDVyoTXwBtS94JuNHwVijbatTwrvAWqT8DEU2XdJQQpL5TJi4kkgDsWLja9Zu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UKcQiBNGkkGd3HqzTSUzcE4bCKCpWTKxMDxYb4VTMjEZh6g2Yo6hJ58doQEaz1GWx3AHjBUDALZRZ1UkVpqRuCq",
  "key1": "oowBndTZKmrZsegvNNGpafvpnapzX58qUnEYX3ECdLKN1XsLKV1AP4NkeWEb7DMGjNWSVCJq9N8aaWHUzrgTwYn",
  "key2": "5kvrcP7tqCPd2mvn6tNACc82noGD5xKVDUXfUvQVsnFSuLCdTsEtnCXJhfkPXWkN3c1yyB7TWa4dRhdPm8ydV7ah",
  "key3": "2fw77pe1ToutHrMc5HFYMBXiHkSxKtCf8ZfEGCUEURmmeb8bJwPFteE5JKRgMp8qkC3sKmm5zR625Xe1kbLHcJJj",
  "key4": "4Jsg6CjY3Y35ZQCWJjFGEmfYXSwXm1jJCQfsj51G81uHsgZAJdRzYXFmMkATSbqQmJ987qFJGu4TCYseKpGbQsP9",
  "key5": "2rRNaLc7DDauQeaphGrd7Ur1mwhxNjp2kNdsqLv4NksdB7GXZ3jhFdtCtCHK9zba6LJESR9HsoZGYHt3SfiXRBQx",
  "key6": "NV9BJTwawpQM9F3LG9QGrnZwwrFCW9mSARjM5wy7SzfH5pw7d8AwHRWvu93NpokQR3gLDfNomoNbcMHC2TpNVBq",
  "key7": "4NRHToCU2hQkLvvNRR9RX5CYjmQuVZHmzcGv6kDEaJjLsxawWk98WjST6967fwf7iJH4WAvRDBGDb2dSr7w4zVqX",
  "key8": "38HDUBWYYFCLr9hYQGgU4rdbgdWcSAyYCJrpTjFFes3iZYRQcejUBXPRNpetxzQnw5VouJKxvtSe5oZXw6N98qc9",
  "key9": "5QMVsabSeiNEWbjNaoGYQjfK9kfSWeGAZAKjMuE2xyPQdFJeqxV6FdcFowyDRtSwBpQze282enyUwXVGRHPLv1uD",
  "key10": "5iMUaPoL5aVwYdi2F2PjXeHTvv4apYPQXzTxD2hhn6pch9JyuMTkCf22CZnm1k1h26ZWBV125jMFnCpTB6CZHSYm",
  "key11": "UQeQra75EnQJzvQpNa1tkkSbueKhqMTsxhorAik153yNprv8Cmby4XNt4nMtB5ifwKd5FJYM3npDUEbN8qL7Hgx",
  "key12": "Cwcw1v7MRsmEFDw6PTV79fxJo5c5unpFB88ePeRHyxqgZfDLSVnNw8M4N1mJ2M7PXM4v4TwV3J3y8duU43bUsGa",
  "key13": "5DbDopHNniyYsBbrn32tfg3Xa5j3XKoUAyQvSTSUqn3xpkhQiTGcF6nC4Q1hPBbMyTHPUN7igQzbNJQk2aapaQHT",
  "key14": "2WFZtoQ3k5em65fRqeP2n23F869H5KMr2KGNwvArRKq6gyrJhp57gidKx4NaJQvW3wvjw8oDKF7Q8xjdAa4np1fe",
  "key15": "STbCxLXNLk73YQPwuUQhhBq93DwXmZTJaqdQ9yhXicPNSq6G749WEyF79Ebe9KHdGurapPHy3YCgrnUj4W95V8F",
  "key16": "3hdDxAJayzSkSEuL71ZzVW7h279RfUNbNv3TknKTMpEFhqoGYXJgR6mqsew6KnsW1C3j3sVteT5wGJSxqmqhyMzv",
  "key17": "4aoMKDiWwrHmhwT7GwikiauMk77PaFGUKwMaNwfmTModd349GY9MMgKNA3mepLVbYvAkDFo55R69otTaZKTbsRwq",
  "key18": "3L64JPhryV28oQBGsB63a96Ao2ipTt5hqHXSLTiGbJ6iyZZjEzmxuen1rGogpXh94y3xwBwQiq74P1fcBxucuCai",
  "key19": "gz1xJPbretU8H4JyXxA7V8fUMSiFwWinZKngW7kXxq1fu2Dp8VjNxaDYZgPdUqqsEUTUfstoLUKfqLewxBMfNDf",
  "key20": "3DFk3AEzA2yWeVuRUNjvKu2o7HBSeGKTsRsSgMAiar3hGqe2QMpwyAy4KUUc8RjMtQq4iXDw3WDpPvAXb7G3yEoh",
  "key21": "5uHpGimub3Fn2cj8oRsq4bkWByTdk5aC8uzfbZeEtdqDoZbEoT75TMxSa8McQLtd65WThZWG8FqdpX4rZk7rXA9c",
  "key22": "xLtUoq83u5g6YApE1xKBKVCuPafcACbXpc59RoAC6rFavpYxk8YQ2iudVxWt15sWx1zrTPEUQCR3Kcg82J2zWoS",
  "key23": "VfvnbaCcHrwAZ7ZStHraW1CGFyUxsVg3QaJjpwnyXDX1tSbPcfyvrtswKWU93UfzZ4KxVGygVsYBUUBDWTE6jRi",
  "key24": "3HQiFcBVt11w1BWCDs1QnPJTrKs9zR849kqXg4kRz2qHb7eV5481FRRAE8mcwkYsgV9aS1op15FiBDtXwcrK1bS1",
  "key25": "3fE6WuAj6oMaaqmWdK7P2XMVacH5M1s8riUrrWQXWWZatmZCw2FH6twfm3FbcNFYdSKn1XeSXHou8tuEQB9E1TmK",
  "key26": "5RZ3Zv7F36qKPy2AErKmNiwH6v2gPVcNa2vMzPv2qoLS8FjU7kkAg2XpRhggWmSPuXd94GHrmMyumnpsQftoaCf2",
  "key27": "4n9uqofQedkRZGkUaHQVksFS6WLT4MLhJ3njPM8Nt4MWfb1erVn7EvSMWJjNjzusXtuL1QyFa8fJxhdPh1gSnXTP",
  "key28": "3aUvfUf3WiDF5vJnx1WmwqqRwtVfXMVpfYQYG9GpiczZADjj2q28N3pAGsbUo7vBdGoNqswfKNptmSynnptDZQwG",
  "key29": "3qmRDxSr3Eo2RXBvYHrWZi3dGiJombVWZRzdVenScUeZSoXJpbPvveZuQtPBTR35hMrvtiDfUVKtUCJGPbk48Yrz",
  "key30": "3EQkTeb2rSMVyPFQy7t5Wc1VL433sYyM3q55LQDEmTbT5LLTA1hA4iajradjUVf6fpTSUf3c7yrW66wNbaTAY3ky",
  "key31": "3FiTSK9KfUcQo38oPGczqHaSKQqduhu3GVv2SkPZSDcg9DrbRFVoriTbA9qJGGL5HnVtjJ4r1dmjEszZSYLKCssn",
  "key32": "37HHACkSunrrmVrHUPyLu2ihJgJozZZMJYhA24HxndjnC8QLMJdiJ4nZhhkLQSR7XW67CG5Q4pbgHRWGqKrvMP9",
  "key33": "wrKmqEsk9CRSzRJZMZv4jCxcpT2NB99RcpfcMN8FkgbbRStGsnwbZxezFxQVFP2zbNFBnL6b6o1p6Dbo6FJpUBK",
  "key34": "3dE9fBiC8gF2A29JcEwfBGgtFmevAqcpdDncQb3FgJ5g9LmbqtLtijtsTmUeGNLz3LwbfcQwU4XdvPVjsYmVizNn",
  "key35": "j8zMJ3aLk7zaYaKgMdnGJxdFczhNBscN9vGcvdGUAygo683y3xR37fMDLzNgJ9av2YdFxgHjop837h9pHV8kL7g",
  "key36": "43K7UJsWcEpXFw891nZgpFTP4gfeZKYBvX8ycZyqvbsD7W5TJvH2Py2MPQ2ai6WVeWAtZU9rEQdH6x4479dFExMR",
  "key37": "f1GeJQ8a66tS4agcjVsEx5KaGATQgJHNoeiSdYw6MzMtyh8W6eDzhGzfHgkMfmxXNpABoMKxuMc6MH3SPimFHbd"
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
