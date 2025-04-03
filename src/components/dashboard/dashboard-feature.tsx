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
    "2VVQu7Fv29v1dgF9GM1nk9u5hkHxSjn4HnisUSG5Q7Dquxbybw8ytpTK7VLh647A7tM8R4DNy8UrEUCsPzbh71aq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7HmtXC7RQfcktHSLx122nQoEmCGqfac3o5BBaMJzLjAuF3zYwdLeHUZC4TBAkpu5kmgR7Fsf8duhZddvqhjasT2",
  "key1": "2632bem5VHfPMEJcdbbN8akQ3r9rbFoeYe9mUrV8pyra7BBV9qbRYUhrjdKLSnb2c4t3Zp4gehSHCgcaEqoP7E2E",
  "key2": "3NDf3fJmbnDrnWuXG5vhhRSjS6hn2z7rcijvrgam5tfCGwB81ycKHEZ6gdrY5Hpvq2wsUYAqnpxpFMRWRr5uJgsS",
  "key3": "375JCtwCKuoBVrXsmzdMBk7paqr5dBLTGjGBn5DeWmiBxLpsidbpizopKzWS51MmDLqgRVa9edBShnUEvjBftmNy",
  "key4": "5fUdakBTooimi5CoQCrdMnDU9JiiLoLHqhkDqmUHFcfdmNp1wkGD4xkg3KcEvDRKQcGMJB7PnsHEFd3pJoBUhaZs",
  "key5": "29PjTnA3oFnesFeWnmiUcG6QYzCWUFpxi194z7gGHnttBCpdEVcZdjUWPDxZtZFK3zqmowtUobRzWTHA3J17gn97",
  "key6": "2W16pZYpDrNr93EUZRs5VxdKFKy4jBEU7rQWdEMeFdYc945dNKEs91bK9venANpbtbfGZGiDtYXLKirtUedHBVQf",
  "key7": "28pTaag8a8sJwJ6BtutQCWMYqLwSAe1KHhTS2jNCruYCwuu2LSQ5DyMdjxJFFSZh22fJYbcTQ2Mt2oaZoMh3jko8",
  "key8": "3MKQPD3AvwsivXEnQRGYdHwZPXCvWpR6wgd6cbMLknHWF76hrvHrrewN7c46Pn5oQ9CG9u5CkcEG7UGB87xeB6Tf",
  "key9": "3GKpxo1jeqsAk7b6pkqqKEYCQ7u8XXso6mocCkweQXM3uAM2GdsJWgsLBtrQ66HQUSSbPK69WU7HM7ABYHrsofV",
  "key10": "2JAJQCpgX8ENnVnRx4is11cQ3aDXp2KhFVZ7pXxRUUDkgMhEXAY4yxM9y1ifVXtTvgEL59pJJKUdEFyz7pRtkUB",
  "key11": "564aSR1suoaKJ3eLjsXEULvDtdZdhGnVqqJXpvvbbkeC6BhmQ3b1n2Ei3XZvtf9JPUKT7fafVV9kKZYtGDre1dbS",
  "key12": "7G1m1oCNcP6EHtvqu3h3QYyebFktjpqHJAShnMFskwvLLTQeTLauy6oizAtuUPRVgjdLJuoGCynuUomaHH1WVRk",
  "key13": "4VaHs2ipcizhipaU1jgc5cHmMJ5NPFKBRsjTfgydbNQP2yK2byyUm8gjbJPWX2tSqGxGSQUvF7PuX2TePGJLjZh9",
  "key14": "89jLRAniaUpFeeW1iuqun1r5cmrwSGTEVFFFNfLEgNGu9BBwfakvrGB7snbsEK7T2sMw2CCf1RXVxHhTpw6ubbX",
  "key15": "58JN7XDMcFFentTfNWpHsD7eZ4usasw88DJfMNDcTfSTEEFGbx7sDjP6Xqf6vT2xZqkuTiAxJKdF4se5byQPKQDs",
  "key16": "2xmr7Dx3bnR8Ax1j59f6UitztefahysCYYuAmwm867xmfG5J75XmmyZ93x6eTWjVdj4y3D7aEodb1QeHj19X2QR9",
  "key17": "53bsEWE2K41hZkdza1SPC5C8xzJfRVeXM2BriVLZ6ci7pdLE9z2FdB5TKYqreejWGWwB7HQdR22U5W867LGvYJfe",
  "key18": "33nwut6C71gaL8JKBrTBCykW55iWDp7ZBxKBCNi5y4LBaVxQzFDbRrmyDpfYgyCKbu899c248XSPX1gNX7Eb9ijb",
  "key19": "3ExHhQptNbjYqXBy55oEiHhCN1CuUN9iZji2xF7JvgjzR2tVFzxZufDNKkEBNrmhFduzCU4bRFdsYhZeczQm1wTS",
  "key20": "3daoKpC9kT82Gj4XJTpHbwsoX4at8E72P6prbnWbmeKNwtTEHnm96S8vCdYi2ypHomEXkuCK2C9UFbFMvHXmkVfc",
  "key21": "2v1N6S6pSBM8pBMwmscV7JDbZamJUgp4EABFB4GrCbTkifHm1275j1tJqX1cg1MgovHn3SNPT35wrZp7eCLqAsn2",
  "key22": "3BTgNYNCAt7vmzN5zGSgwcyKu7vjr4Y5FBcdHPRBNgNEq8Zj6We16UmV5T4zNHYA6GMtjMVE7wjAkwoZUYQddpYS",
  "key23": "2y1DRNw5jzpMior82MPteQHEQFceAxrhnShx53Z2RC6zYtdffvVSbBGvTev3oNxtwaqLT1ACs258A3arFb8zQspM",
  "key24": "22T4PyNfw1y9f5gENkovwczwdchX2QS4ofraM1dsFWZNqmC5DjKUV2rateUvTp6LuDE7GnWtFEgAkVFZBxhRKXEB",
  "key25": "3s36MBsbLanST8AfmcwUcJHm9kx1bEu5G7qghZKxPGo8NZBRBqwXFALR9KGLduw7pvcfxMJANiziZG4WxBm8aBve",
  "key26": "268Hw3VNV5SrCMYxexGqRTtc1RohXZAg5wVoVkH3aYEhETHya6JCJ6B6JEhsUa2H6pR1DyWKhAnr552Q1friPMiB",
  "key27": "rwWAdu3QDuRW2uSqcTZUvRneQ15d9voQK8JnWtG8DRcUqX9VB3xyZe8byJFFvLuY3Amkewc1njRYURBKiZiTg5f",
  "key28": "j9wZqqFphbmJq42ZXyR3qcoKRof7hSk2oVhNxQ2gWbgpy8xAMJr1xcWcJwyfKWxUBawFRwaqLcBDaLhhvQKz3wM",
  "key29": "62dmz1kEiwP4oqozfn6XzmxzJXDfJ8J5QZdvnVVixDeHTq1BLG4DxgjrsYn9aJPxouMeH5CL9akQPgHYwfaaEJvU",
  "key30": "5Mn5kD5nZeT6RPGnQFd3K1EjJG8H4REX13hPwr6ew63mkjJsQ79Wywvht9PvgcX6sk1XiXtJcwcVkpbJjwvzs2Qm",
  "key31": "4566e27vPVr1Lqye7qjvt1ej5DfvwGfrwXNHAcw1kv2sage1TaS3Cjzzx7oEtRro7V4yh6dr4Rk2PsZghxidut4v",
  "key32": "WPYFWJqoMrrtMafrJSpFRLTDAn5tdMN3MVtcWAYZrbAtsVuiZJmVECAa2UnUS4P9dNr512DNRrxu79cXVXyF6ZQ",
  "key33": "5bTkmeLmgApMqmtJ6F5PkrDzCU4LPFb93JXsvRcb2Va1E2J94xXnaTMTqsLPStTKtCTnicSKPkXNbuPjTuKjapVn",
  "key34": "GEhwjkHM7uNHpTAeoynNEsJeaK6EspEk1svaueVB5B34vuFFtupmhwHnFJp5p7HoUtK77uFDS9zGMAqVjoLVKxu",
  "key35": "eLcXz6JNM4ocKhfLzsUYwL3AR3Y8KKYYDVHEsJaaST8QKp3zSKMgjq6vJn7f3aXHx88Ws3GkHrr9EhoNNTAFRV8",
  "key36": "3rq82rNgBjEiCXikoLhvofffbg6wgXa5UYijv28ss4Td7a1b935rLNA45GBicwUpuZFcHNj3S65ihxBq7jmawCwa",
  "key37": "4W9Ecg1YshJtz9gUoDwPz2o8xAYpSFj2SxCy4bCex67DN6S2RxMHRT4J8YSQY5RzPRxTWsAZCogrFk6aHX7Z34aY",
  "key38": "5cpt2Q7NagMbMMKCfbtH7wW4xmYKn2yvSJYctosWBGxEGornB3APmYyze51Xh1Ur7GknmtkymeyD5ReHSoxYoQeQ",
  "key39": "JjW7DN9NNTXvuvZi2sqSaAD7j6SvjZTML3GmFnjfMLC37BgYhs3HB9DdQw26bYLJucxb92rnz8JNtEddw891Sox"
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
