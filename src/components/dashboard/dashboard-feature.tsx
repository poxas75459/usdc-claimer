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
    "5nuv4r8aV1NrEN6YxZNYRVPFcps5CuLoYrG1NJ9EA43Ep8oeqSzmMyiHxjdQb2WqdvHXW8UFatMGbjYNHJMF3xrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GtKWjKQKMS5U7Xn4HkTPjeLT7hWBSRF4ptVCq6FvEqCWDCcWCBi4S9R36DrGAwPY5T3nggLckyScnouUq9G64Ho",
  "key1": "54yjvfGzxyyiWahx3xqjGs2aVsJoP49W3DRbiEoQZZm7UrH5EGjExRCgofVkyyDCZPUFbbj8MSBk5d7YXTfQmvLG",
  "key2": "64jNXgcnmozbtduM4uwvi5xNy3uAGCfAiViqemdtTWJT64tHaoAfaCMcRmydTSE87QW6oVg4cjn7ofbdKm7mZ2Kf",
  "key3": "5iwaEpHE8UWYWeTNFcRKgR2MbtKxXVh3LCbLQ5WcuGnNHj3VX6uMwmJU8yxD9gstyvhoj3QiWUS3Ku61caHfTvVq",
  "key4": "3xUjq5cB2R3BCB5PKtcQscVvFoaQE4pfR32gDFS2ugVXq58H5PmjkUSx4TRPm1rocCKYa4ha1LjDip7g4Qip2nKU",
  "key5": "65dSonm7UGQwyrhiHjPGWnfk6LkvfFRiXSyDQNmj2wfdSzKTndUBUqUqNYQy1S3Qgmw3P51bUfPrcD2KuLk7GX1H",
  "key6": "621tYaSLeYJx9pVwBLmzG3poZGyYvTs1SR9P9cFvbNzqz8FDkc8w8wAWuKtpgMXaLrW8CJnE8XC4eXsLidpDS7zo",
  "key7": "5MnY9PdECq1RAta5AJDJZes7gHHRQHjTdSXDkhamr7pk1tmLZVrTETkAk8iQRaSzTBDgPVTMqYYt5uEgHL35DSnA",
  "key8": "4w8qfcpASN1KmSBVpUjSLyY2oeSdmvJkNTUhM4teUVNSNKu4LqSm43p4rSucctU65aL1JC5j6wnN3NwVKYykoMD",
  "key9": "5S5H1Xozr4pDCirUB7XKfNEmrpyGdyPeAdnUNS2VwudPppUG4oyJprSuNkJxK1iwUvKSi9Nr626KQxTypW7Jy1x7",
  "key10": "2ZAQSziGN1zGinqYzm7fLmCyDmt253LQGTAkSxKzeDsmWrrFkQmEnnq6DfddXwPM6Lrk7VN6WFvQb7dVjNMtb4qA",
  "key11": "2gMfnUsf7HW2x3UD8BsSnPB85DGQy5hwJfbTDXTzGS3G3n3pAxVyp6iBaCzKWtLtg98dK3L3DkHhKEk8GX1Yi7qh",
  "key12": "2YNjXtk4tCJnp7L7iR71Mpr693Q1mHRtidUgE9assxDyMS5a9abUdHkiGz8ydc7jxnrWYX2LBSw5MHszcLkoN986",
  "key13": "499nzAf5QKdriiGfQ2ZBNwnjVa2EszzwpZzyKugLvdQwzPydRBuQ3cqQ8QHfTnvckmU3qgdVfncrqNU4anQaccYa",
  "key14": "3irCChZdiZR9JB75o847262phwiamF1MCd1tHENBTGV1eyBNjY7LQa2eHM557Gw5w61HQ18fYUZJTTW8wN2urg9J",
  "key15": "2DcoWTtRrM8x7dwf8tGw8XHEp8zAo1YHqi2yAoL8JE6LSM2qji14E144DMXEd1Gzpv2bHx2pmDCVrjimdYQH24pR",
  "key16": "EVqhtXJtoLfi66A1jq28hF95X1cAH3ZRft2aAL2UzZB9UNhbfY9Xh6f4STi5K3rrosnVK3GxGEwJN2U4ot3DRaB",
  "key17": "4zT9BMYuibTDvCXVKwM8rLQiKgr6MSSudnP2PsnACHq4bbkQNdqWriHt6ZbYf8Sg8NtXQkeksVprhkqDnCSin9Be",
  "key18": "T8pizXQ3xQcpCzdiHgYGbrpdwQni1X9nH1voACKotqomLqJBmMp92TBr77RSRFmJK9N3mjEZCkPxnwLnH2UkV4H",
  "key19": "4sn1VjcEj18SB8xGhTU98BzfiYWboR9iwECnjoxgHSGaBUxWbP3oCwxdTuMQ6BKoamwN66HXCK2sZwLgoPEkn4Uw",
  "key20": "2RGjdozNd8mG3Fg8W7MBzyfAS8JFfzHwKg9UkHRpVZVRr9ymtMFEXX2nVrA1V7H5MQ9e64bRqi4EYCpot9ankFFo",
  "key21": "udLHu1momkjw1JnkNrf1xnteyv597JMNCCzSoTUN9A8J2APvhzCKaZub9zAJshpzHJ5NoscHym1VuAQ9UJuDWSx",
  "key22": "48KL5m2rxTAhfbvPaz6zt318YHhLvwjdoC1DyUWMCYo8ezjLogdozkhNKY2LwQe3jxFdTNrjRQrTgShfNETpSasX",
  "key23": "2ommuxNwKjPehzNtr9vyzqkrHzD7UvXEEm1rAqNLt9857foxc4qL6LCTmN7EfC4CqjfShqNu7Cjty6MAWUqkz3uN",
  "key24": "2XemANHBTh1BAjfjJbQh1oogHHHvGc7Q9aaymCBa4Sm9P5itwxTNBirhmix3hH84sn3ccQJJJLLucfKCAWnJLLj3",
  "key25": "5ym8Ha5Zk92cC5RJcY6yKibCvyZ8duBZPtFQGv8oSCSccAqzbSYPba7DoPq6V4KaxHPusi3NDoePJHQe6K2uizWr",
  "key26": "63xRKdHZLs3eCqSdSJCidfkbMX2KJxedd14n1hEQYpLyquHsWMkPJg2K5GNfMnFYRg9qE3pQY797siMU8A2nvkYa",
  "key27": "44GcRFGTx8qm3SDaQe92jF9TvQigAP8qMQGawpRrt2uS7Hu19PVGqBpBL8Euupcoawdg4UCYccVazjnmYbsArgsB",
  "key28": "5Zjr4s8iFcD3QVqn1dGUqUczQvsJmeiiDTyR4AGvarKicrRYAFNzgJh4QSidxcUEHsCqQDRkTMJJyXnGGL18yTsE",
  "key29": "5kB48CvmhxC3YYWK1NtdQzvp9Y6QC8poM65vbDkkqvbr5DR3J8k5b728E4AUPVnrdCrci7d51nm9UeuyGXc8othk",
  "key30": "5mCavJfTBqKRbAbysmWpirSCy9BGouFojDrt8sC8yKWQBtFExqS47umV5ochHyGUUXbtw5kvgQp9twE7YHjRcJg2",
  "key31": "4zrovRhaxYKT8cYGVmn76ZWkec24TMvqencgu7csHB6Xn8APxYkSn2M4JJX772Jndapfo8os2RksW1TSXJrTb9pD",
  "key32": "2MpN3995SfjnYC3EwjduScJzoRqQT3XnCPqA24n9xrErNbCW2sgom3KbLtiEHrkMWUjT5Lqc3tqFq8bBTR7Z86DU",
  "key33": "4wpfzTkqMZApM2jappf3UkiGk5TpwJWhsWrk3kCB8no2yedxEGLzhBgCuSBsVapX7Tw2eMuR4p7oyKH7Lp5Zf2r4",
  "key34": "31xvMrRmoLRC2fMQtscF39SMF2cjVswBfj54xpKEYVxYsrWXPpVqf5U4yXANrJxuW5nv42RQikcdxpe4hymR3rnh",
  "key35": "2MdGDCy3BJ68uf8RrRbsYAzLNkuLFkhqQTHEParEBFf3mRNf4LdPBKmsSTsGsPki7f4vPhm9FCHQL82zzpuNYQzK",
  "key36": "2zdD9qsgboYAE6mTZvc9GUgLTHP7qYrSaUzHqaDckX2UhGM3ypx7nvqXkC44kyLCEBv6VLVFXohowvt54J4KMBKm",
  "key37": "5zNJbGeC7nmAu8H7x6joaNpm7phZzan2QfXhV9Jbji1UvzRSKcyZUSBhX1CwQyPH5QGfTQrN6YE9hkHH1LQjAJNY",
  "key38": "AcVkBuFRk5AwfGsYAvxQB38yAbrtniRwFEJGfXCidpxm51UmXYV6t49kTmsHKV118dyTtxJqRE28EZK4Kzkuuw7",
  "key39": "2DuvAuTfgGHvYXhykTrcLjwN5PCs8UiqV4L7J5UrYa9ekVqo4iFNorSRaqX7kmbmWbi76surxbKq3jTJTvv7gFA6",
  "key40": "3mVUt4P16UAKsNHF8vhUVXGv7MSWXLas5LZGzgzZzwDwQJSjrgLwJY3KaEr4Ax8QUnezLUZH6Z4Phq3PwxFasvh",
  "key41": "2sjRRekTqyPeqPgkoPa5wqXTYsSHRBeBMvCT3C56njXJUT5eAWaw64SBXtLhSMkBtZvdFoJ37Uk7PRZLbWF7TtVq",
  "key42": "1vLEHEQ5EJqVSHWzbrXQcGF1MNyjBS17vxEasHZ9Nz1jnJEoJzAUpFUtoPbvEUD6eMRTNVJmZJgyL5k2pjGKkoA",
  "key43": "3s4fn6PQYaBZd6HUzTQ1Ng9NgQ1Q2yRod8p3SfX2AucTxkv1qPuCB1CpnMimTkvJ5xaZR5du36rqexYymx1xT3BN",
  "key44": "2beyetNVRfLJiiKwWwZYPwoR5ewwrHsiof4oGPPjPFCink3xnXPfNuj5XKGRPtBFFEidUhcCDGPn4YqU1mF6L6rn",
  "key45": "3w8TUPkotAL4TfNT3Ebsc7uDK25sowJ695PZcotk1qKbncBNN779kFeEKVQ7DsabCaCSGAesk2RqLNi1kWVtHjDN",
  "key46": "4JJiy56CvMNpQWWF4wm2nGbH8cu4U2TwZDAzzoRudet1gtsafdyYviuTdUaKZRH8pRYDb2JFu83x3DoUfnD8jdd9",
  "key47": "2nRFugitTaJcd611Ap1odiWjqgiDKfmZAHuFCM9g4j9NAUJ7jZRu8xPKjLtCb1fJwco8PNLzMA8bLiWtTom822B3",
  "key48": "45YYnkzkfdYtg78p5mF13d7Ght9SENN4U3Btc7e9d6Bo2GFZ9jESCH5PrfoTh2QwCWWVTEtZWTQiro71KbCUViQG"
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
