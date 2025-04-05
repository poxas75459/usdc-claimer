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
    "xrG8RnEM2JhrARpQULB18cVPfLfpMrU9F2zEccFVb4j3DnA7rqZy3gK39BTiLrEjTamytyNLFeZ7SA4RBACp3Tr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kJ2VUB3Xy3rF3m8d4RuskWWVPZkitVRgBgn2eTwkbSKzsSni8dGpALGukLJRbpFsaUgkDw7uW4pP69hAEvEUDu",
  "key1": "5YyVKt4CBXgiM82ByaJ2vDshvtviZacExAqZedeCoN58xn8C7iiHZL1xpRwraaWo3sKBrRaAz9wUvaEWQr8PvsFZ",
  "key2": "4w5WiQ1eXYJ5YSwkwoPNFiA2ZyPwzJ2paW9nvCkzjR7qGDZ6QYrL6uyHnSkYJtRjRjgokD3ihvYh7ooXJKCAW42Q",
  "key3": "2b1X1YKYWTEL3yZQLgmZ7sJr48eYPuKAdWC3t4zx18waR6YdzLztPyfbk299eAyADbRiAm27jGzYqj8A5LitraX",
  "key4": "u9tNdp8wEjK99UAGUGmuES8JcfQjw3sJXAY8pjENi82NfzhGoQdG7q6B6DYwPifEjRa6FWGteynCRfbFH1GqAsF",
  "key5": "3Poq9DowmBvqkp59afnCinj6qSriBSa8NGdvQQtfJZMsyiWLqJptUijTYVehavYq623UjYt7dfArAr5rATwMJhML",
  "key6": "o4y1nWwsRE7V5VBmUY2Cw28K6MqHzzfAZGr54P8Yof5BAX869jvE1duDrZXLpPxDU7vP2c8KHvPueBYF9WrKYKu",
  "key7": "5siE4QHLfcyupUex42Ya2WxbQTMWG61XC4aSPKd8d7NEDcyxiiQh3grFpynggK3qvU7CtwDuXY7fj9P574g5XBeG",
  "key8": "NNJWzbZ2HmU6WyPZwVVhRAqSZUrboKmRvG3h6QfWhCdR6cedkFJoUAXDKDk3w3yza8ikmMxvPYzB1YviTCeRcqy",
  "key9": "3jAe11c1Doa2uEKL3gi75y3ehGAbfLeujGDt6uHywDBgxpiUpETVC221b9YL8zMDM77SW4yMreCfTdXqdM4cCQjH",
  "key10": "64nHdwJDwtwbrPNRv712gtMGqxYQ5gne3cYYLBE7vnJaCorbDKkvorub67qwQtVZMHgG2WYsQVTn2mbBmeBk2N6x",
  "key11": "K2bx35BnsaMX4XrxP4uTzhWhfPUizCsjEkzvxmXSNFNE3jtkYUo1uFHjdAghj1cFERD5E8JGkWS5RdVVAWgPVZD",
  "key12": "2Pg2EjWu5n1Ut7tHwLDZ8u9PjpDYYHVuACZ1MJvVGFifFNsyX5PKzn8xgB3ah8txmGCb7M1S2x546vCTV3QLa8p",
  "key13": "5sx48h6TkM5b3ias2MvumYQZjYv2U6u8Kax3dW2eHMpBESAMQakXDarF5ut7Z2gwySMNaLVRYwqE81t8mKHwwW5A",
  "key14": "osHzWX338ZExg9P6xoFdy8zgLduWqfsuiQ3E9dBz6cyVrHuB7DqV1wTrQyVzCQvnjzWKYT1vjL85mXyHewTpebF",
  "key15": "3BozxY7FmUfuvVNeYnjj2WDn35QAgme1sK4eLhkFBJ2qNzzrk2j8d12mVGiK3yM6EpcuuWQEjMo7rofMSPaCUMZH",
  "key16": "4GSDijzMjcHyjWwxQRg28k3MiC61AwjKwxGJ2ZeLpy2p8opQHL16kK3ooEVxh9gpLwjBTSWx7YewGpnVNHx5mp6b",
  "key17": "66fwbiCzE36SveyC14ENnaiwkgLEypKkdoKBczGJcywg2J7Ed9VTxiggcsRMxHXuHTUon6r3QApLRzRjdDDzsPvu",
  "key18": "4cS6p3PQL1H6aUmqS6kfUKzuNDc5gwhpBqEKMPC1GT6MXJGGG9GjAdX63gD8C42jcWP3DUQDBg9HWz7wHTMUNgKy",
  "key19": "rwTGwHhw2TdVPhJkgtJMHQgEtquADe4qkpyyGrmEktAmbmpVXw9LsY9h1X5qKQhX8iGzw4mKSWocK4h4doTyMoL",
  "key20": "23hbHfdCAMcobkn6M27ftEfxYBpCBeJqFgzK6eomeJBsmC3QvCUjgc4uD75iVD5GdG5xQpSpLvGrUyNa535ekA3f",
  "key21": "55Vinr2vFBF1e1poYvatqhf4qh98BxLQxWuB5x589Dcp3nJgetMWGKeUQq5NxzCXKLnB1FbacGWiV8hWWXy1e8Uc",
  "key22": "5J7fH5V55wqDcncb7BshyUY34YbgQT3uY7ZJVRcozsPgb4S5QAqLnAL3hXAcf2BVkQFyGjZXUKJsqNGUQp9qKAdp",
  "key23": "4baKwgCyxC6NFx7bzJwNB3EPt7R38Mua3smkffAhj2qhnwnsNXDebNCjiW71Ehp7awx11yhjHcQk6FWNnnFtPZEz",
  "key24": "9vK4S4GtBiXHUTEnLSRnt5yEo5U4DRoNfxQEZHxnvrGUPuLid2XLpqR8DDxoyp4qcMjg8jmwiiu6WLL1KEyuJ8N",
  "key25": "2SoGezCYxUpy7Bfm8gJxT2P7ndVsUJPRzQE5nZgaJweu22aNgtxjGdeX1hREE9dNX32HQuAGtBdmHA1cG1ecnk7n",
  "key26": "2gAuq67g78X5gfWYMquJy6EFLDiM3YhwohTvCV2rz1maSqN658HCi6D7BUqmmnZmVXbSAkg3dgGuuP9MSkG6tsAA",
  "key27": "3G4Zd2oRdXpXkn6QHan4KocdaGeyPZxwd4DLiXrkxBr7TSgG5fiPSyukNTJsfLiJLLrQD3k7dMs9UYid2wXLaz9B",
  "key28": "2LAaWUX1swaJYLd6iseesyRxEgoBZ3EeERfV79n4JaP9AjmP6WYFsZMiJshF2h3C8m2GWio4BD1eyVvgArsQ1d9T",
  "key29": "jwb3GxhEtHoo7uU769GjicoUcT6Mk9P2pFh4gUgnqvfP3dpXSAGCgzq9WTCecpTaZW3JfExAnobL8bZMPGfuwwk",
  "key30": "3iYVPRb414PpycgwDfQvJZP1ajxeF8hUGrRxfXwLoGKco45VX1TSDcXQVq5K1qRztN82zfqzEvjaxXJnX4QjBz3m",
  "key31": "3zC6ADFw7iaSJhT7qcTFoBJqDoYe4SQdhKqYgLreScqCyCaBTTwPDyNUWMeeacpM3Ez4gdBz9f9mQjBaNMcwJYXA",
  "key32": "xJEhHm5PFjQ9bxxyaVW8Cpy7gh1GqeQU98tFRuZXwcux5BWjxQboShW2ySSUrdXFoduzVpJS4iesS9GkQbvAqZv",
  "key33": "2Yep9nmC3FSX7R4rorrmHR5yovXQBbGAynbokveKwd8XGfJgtxcP4wg67Rqv2sHujPFSL8PRCPkkHEQi8zWqNNDH",
  "key34": "32U2RfxqnStRgqmoKVLQrHCp6n6ao5W67fyZGYFBHozEvJGmaJSVdh6dUmBPM2YepFJJcjD3xNtw8HQzVmPuSdaE",
  "key35": "2yH7Wrp2Dk2wXCSCQexrZR7KiPq6Lh22wPqWN5Dck5KdvsJv5q6y6P4Vh5QVhSNPLoCeSV5Z4jz5d6hooWzUoWnu",
  "key36": "2JHN5AY8KssSh5oEpA7tXWnwcyZCXyZyHGzrEWyvBVD4wcZJzXYCyQ4P8fa63y9UsQzLawdDMtoAtF43SZsk53Sm",
  "key37": "22omTDVSNKvzn1rkuumKMNhnGaVmEwEbw3WfHSoXjJUf8wBLzZ2nVWzpohWRhdgL8uyXgAhwwWquLWbEZp7KLcZr",
  "key38": "54hHsPce49ZaXZcM7CkiTvDYrz5DUqivDGFTdxQVDnSVfRt44uMhx8MK2scMz5qCCc4sABSxKC7aS3rShFV1hYGD",
  "key39": "22pJBMtmKejta91RZ4HaUaBMa1JAi344msQhZzadzVsUNZjNyJT183AUhDhYBZwavwopSBmfEWLpxtC4Hk9aXAdC",
  "key40": "4w6sL1YGXqqdrsnHYkoRqt4oLoY3VFbzcAccEmEQTjAczR78YGviuPNrJQSe3oCHTKNZsVqY52bJrxJZnLJ7f4MZ",
  "key41": "4vA5TTXKsqhD6QVPTALd9khQhy7y42Lq1wvTYTbmD2BMypHra3y8vNg8aVh9rawuLXd2zFpE1nMPwU8gatp1JcfG",
  "key42": "5NRjfJwmW5vJcxBvGRJKdPztKk7Kb4YztpUQutvRgjL6rqyodMobTsAuPhVWHcshypCckbt4SXCS8PJGKhY4pSaS",
  "key43": "61LWMNRpP65Axb7PMxjpwaaDaAE2Ku5aLjsvSuRL1SE3mVaPS3jg9ryhJHbkFKJzFSyYQhnqEnkpaU53bk1sfVTY",
  "key44": "2p3ibSfpgemjAkcgjPKiqYu377xkaM6XCWXWfNThhhuPfsNqgGbdabZLL252EEPNFXb6uW8h63SAazYMarE5eiCk",
  "key45": "U8Qoj6CAVJ7ZptPUoZnTerukfi4vHpyvLhLDmLZnAmYuFJ9U2Fnmo3k1YsFAwie2nh8wkVpvxjoAHMojaW58vaY"
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
