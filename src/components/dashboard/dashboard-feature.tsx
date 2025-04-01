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
    "3jePECk5dR7PtcJutj4wojNBXYu1YsgJdqwaBo5ieEBV43o9XhfaA6ycCFfhjXnJcGqQUj6sBWtbwMQEhtGBFo3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nuocJWwCvuHu3gaviVJC6K9Atgu2kaRiektyujgmaKk7Z5FSKjBjrtBxwMADChnudXdMpKTT1hQitwM6cEeAhAE",
  "key1": "NQAJySZjFhE5QwMXCsS15jrXpwZgz6PqsdVX5FX4qQTj2DKYrWkSUT1tNh6UMew6bEMQ3dViab8ZMSXUfKEmRtC",
  "key2": "iZ2x8TjxiQGBuFsAT6HZbvPte1hWa536XNQBnhCsxXgEUczNCG8bRWojfgHtS2GMAQVMnAM3QJo8eUxj9hLr5gM",
  "key3": "62SqtEURfwxekH5rR1AAmnadgUxRb4TW5QzpNbVPdhFGzctJoduXiReAeDxMpcRxvLrdsPnauRbuzQRPxbYyLXoW",
  "key4": "UV6o1CKhjpCCP3yCamigpVpU6JASB7ki1fQQDpTcuVvVnUYkVV5RQWmjQhyxfR4Gcvk6g36D2JUeRu2XAaFppTr",
  "key5": "26win1PSUbiZHgpQhDxFWbUkK36UGmP8Dmj9GuqnYFPPqx2bdZ28tjd36156SPfjy4s7Bbfd1rGxBMsRzgS9EQsH",
  "key6": "3cvtjjqj19GpFWrsi6dxtyF9JrsAcXMQzXeCaH5LBL5cyJjx4AMoMrjcKshXpMwusADZ1PW82ktJUa76tDbRLUTe",
  "key7": "5edCV5qKATU2i4q5EB9g3L4ppaR2zw8QiVoiNqXBNSkwrLmR7vB78zRrjphrgotATM5VGp2AX6skVuPwt3jHjgHa",
  "key8": "4VHKZHpg1VkEZyqXyQHHxH1FJtjFXqUw1baMDAkA1B227W5xs3WA9CXpFavom2XDv4o1uaPwHbw7rDnP2wrpihz9",
  "key9": "2e262sd9fd5nXRmxWYCHEWiVBX1fv5fsbXrwMfyfuASUys8EWDd5ju6QLYKHfLftNARQSxgCPH99UAxadpAnaeb9",
  "key10": "4REBKCEA4z2KaumhAgcmidzeCaKNokQKMiX2Co3gL5D7ZuXWmzRDKGz2dDxrpkfWmV2Z4U4NLRJjzZrRXUNScaR2",
  "key11": "4idzqr3WXBLLgN8tDceNM4D9khSrvskTVCTeXgJiHumED833YiFtaYfZ7zXutHkpbLMTcdqsMK4gxvxoDZrCUh6S",
  "key12": "NacpGmoU6eogLWyTyfsXzinohkmFWDPsNm2HDbw6kh4AwLQXC3JihG6knpULmKBot8vTN5KSAZrJxoA3vLFasas",
  "key13": "2sKK5ESUWGgeDzAKDidtBpjZfrtBkhQXYbG28bWH79N8HeXmXypnTyJGyosBuRugF5NVNah9VoyxSwxdH2YyYiQH",
  "key14": "2ypQBXbqQx7kFb5QAD1SxVCpcP3398XuPJseSgMc1T83dy9q6vTFAi1qRKyydutbv8LUbTTk3Du81bN5cin5ByEE",
  "key15": "3WZqPM6gkdWdXKFfZG2HLj7AgTwWs5aqJ97ujJcvsg5FQyUAWtUtyeJtDrVd7CCw1diFGxqiB8A7CxYhGsdhRaX8",
  "key16": "gugbWQUu2J46gPfcGypnzcZkNExy4W2jifPpQF9AUifknEoXbZo8VKp1ZbMCq7JvYFF6vknhU6hkwTx4VDwratA",
  "key17": "5PBuhpiHyyAg7pXKvSJraFxJLNGKcv3Nvb8kSVfXnSqG19Q3kBFn2kCRa6wA9VC3YEBVqZRxmuCYw9TxaUj5yMhe",
  "key18": "QN4cnpQEB4mmhpxssztHCUbR1F3xvXXUpC4cY1UjgG4fWbGELrLkzRcN2BYPTp6biGD7g3R9zMk9TKV4huqv5ra",
  "key19": "pi1tUKrUj9cpQF2tSj3PHFV5gEWZPFfeV1Jjg1s6bpqqQcXYn6D4g8PgmNHFfEfR8RzFFM1SidY6dKHLt7xvzpS",
  "key20": "3ikEh8YGEE8954zPetiGNGA1AU9r54HpBKytYhyzuBHgjvxxCWibEq1nYeDaggj78ppv8xRELNrmEC7m6SZePgKe",
  "key21": "XFkWNudarjdtef28bt8iWDWCtfuCoTmUo4A7aEjvWQXbaMCjkNiHyEfv9cSe8ov8yRAafuo83JbBSV4DzvTXTZC",
  "key22": "3WEiVxTQQkhnsoS6WSGYRH5Y1eNuAJ9F3r1RUtPNy7nFK37RwQLcwaBnKZPrg8vRARYTB8KEAPpKx57e5f7hzJXG",
  "key23": "4mhKnR8qfBDQ4Qgun4s1cqXyZ862FBPRsFn5FuLGn41bp65orEnheZsJf2J8qyC9uA5Bs2Y62mohvXwhadVLUroH",
  "key24": "595bJUA8hiGEmhMSwWZmbg9q5bkkjWqtKxWX2dwkMpnAko7KjNNxzUX9DBebdsKoQPxyRtGfCdAjPaFjPaZexZCo",
  "key25": "4PFs4Pgx2iAZRmDhBg2VChBXKLrZ4t3Mqb8EUpCjE3VMNgvZMss92LMoDQPHqLkR9xBAbZdZceUdWrqV36m1xfw",
  "key26": "kDzvTC2u4vEm2axykky6oz9ZzD6eUFBX12TzHzeBz4gfgTtFDpGiSKoBZboKbj7D2E1VPf3K3QQV8dSDkYphP8z",
  "key27": "3pKxyHYzoc2QF1W98DyaxzcRrqjp1YfS827KJFA3mXzfDEmJVzzUTjwV2yTVG1pNpLRxeVQhyrsCauXiwhduhanW",
  "key28": "3WY1WXcgLGJv8WF1ckNvhDs64WaFppMUqNrkRJmh3hJ5ufNM2dqHZsi6xsTzZxTY4ii85oYT66dBMf5EvJvxHA9h",
  "key29": "2MvU9WvR3yZEAjAeFW1JHPCa3fbobmAbDAq18ezwZ2zS6EakazZmmYYzcuSC8Uphon6Dwp7jj6GzesS618U7cHAU",
  "key30": "3scQAkmZ6dRfBNYpwbPg9q4ogdZAFVvke8BGPFGgfjaCDo4wvSuim2MiNP4AZ3iZcvZoLfwAkWktrd5LwhxdSET7",
  "key31": "2bA518eq8QtmPgN91ZQ8vpEJK7WDzw8VGWyaUGbmEzXjPsBjW46mDsp5rC5mf1UTxVipXytwhR18YFVQVJqNSDzR",
  "key32": "5ca78TFm2E3pSAUyTwF279RgjEAo4ts5FogHCYQ8xGSgiuAqvQvG7SNmjxXd7UczwrmrixvBLHVLpHj1ZpGwLuLK",
  "key33": "3zjCXDJcbj5khRprN1bogo6HVvsyoZ7bis6trm7WpAR19miFSBLNe2K9RcCFWShcxKXDBCqovLsfutogzZx62Abf",
  "key34": "5bYhksm718MBFvQ5cqism1Eh2LuXKbiaTFnqN8cncA1h8vXPQDuYcTdzyKs1Ttz2cZdLi2wUFHfKaVGo8JBWnb5H",
  "key35": "4ezLjb89XY4J4e9CgvMbSQWehJre9qhP2SWnZPhsdHMgtxtznTM6sV3WJNe1WxAfJAtBsMYb8eRUvbuBw7oRj5FY",
  "key36": "3dJS2gqN8PGXX7jrLeKQubfZYEjhJzJxmeCxTHs5HQvq9BxMb3mDykZ1cHM3jGcJ7wLHtieV4LiayaCuyE86sbiu",
  "key37": "5w5P9h91hYcmnYrsXLovqro4JbKz6XjwYQWwLnJbJw3nYgK7qhFWbiCFsKHHWUYrdkDkgxNmuU2w9QtUuJJwJn4c",
  "key38": "4mcxon8DB6oca2apqQdshVzPWji9JthbhCaCijNfgKS48DtS3tsnyrt1Bk9QgkQgqvkEe6wLCbXsQz8d2qMyffiB",
  "key39": "2R7Vp9YaUpY8s5SE8yBKG2XJYoa94GzNBg5QJMU6DTw6X65fZadDeqF7zdyM7aTU2a4feU4MjxqryuqAnQGGy4L3",
  "key40": "FFtoLHoCcBREecT7W1uJoTME1Vf6Kwi4qhFfd6jGvyvef2DCiZvACPQU1bGF9rorkohv4NobMjfK5fSHT7E4GpR",
  "key41": "3UQM64wG8pEuk2YDha4YZt1K8ZjrmqrDFSjpje2o66DksdG1K94d1eCvapVCQuXf8L5zdCvdFJHLJRBq61PRLpen",
  "key42": "2xXFUsZBwQuVYpqfbehMK7igJek3R7fUWwkLhDdZxY6SurPoTTTFwErfnMHzEbADQprtmEktvfV25TT27VVPmRtJ"
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
