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
    "drdvqARVHheUq2YMQ78gxnesfVmUqBeMXcteBkJUKFbTs8QMQEY51Rb1CxE9LrvBot1UgmcQKiWpu2r4GB7dHDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dog2AKUrvdVTiu1AemBcGGiJCg5eU9jUersFFder4n4xCAgeULgeM27pBhYfQzTRcVtoqHShVLVBgmcpXKUbUmw",
  "key1": "2CbkFPXPJ2eyLLEuZU61dK4caUG5sTzorYmFwrQeqcRixgAfySxBWRnYgd9DSw2pgXDQz7mAQU6LQTDyNaD1KcqU",
  "key2": "2iGMZEvPrE1nK91nnCmrcz6aYACztnJVUPJCdvBYqB2PCkouK3vk86uWQ4mfVrfQvUefexNPmjhJpoiUpewMzHqt",
  "key3": "4amjh8oVHRDfU7u8jEHkaVn8ZWu95qQz1kC5TYAk6X4v6QFpZ4ic3NSFSo7QNMkETJ7A9LciN3yWYjokdXzdWGjH",
  "key4": "2zy8seutU2Yrv64ga7HxEv3DkVJXSrB23pn6p7ehjLUsFaoP9dWQQGqG7piDfb8rqXiEMx73pU127meuAb7Rs433",
  "key5": "3zHdLSaoUW7pfD6mGDPTQf31qMtpWtMAWdRodVSttN2GVmXNNW3uTtFkutQkYQkN1qmNy7sCQLqSyV8sfAqwPbCR",
  "key6": "63BUQMW719o38ei5WUsr4ksGhmYWMw3ydTiTMr9jjGwmvUDXr579hvurzNUEyo6AtXub2LL2X6uL3MdjWLEoGd4d",
  "key7": "5LnYE1imj4nYKW1PJCU3w2i2UEfXHsnktD83jfKzqFPoUP7R7cnjrJKtG369M5Rpe7Csz3dzEhwDL53KQLyWdDd6",
  "key8": "2qAa3BPWhqwXU1A2HmpvZfDoUfesEp9gs5npoW4oEcTFqy2tf3xCDpyyDXt4dk89jMKQhDo5AJEqaU5ELhqZ8RBG",
  "key9": "vyMh86Xkh16ykot8oeSXEzsQBmX2huybkKBX3kc5pjUafBLDvavPXXgVwHiA4A3oV4XypkF9sbWFFrji4WuWka6",
  "key10": "T8DZUFqU5g1Mib8MCWC39FAGV266iM9myX4c9pn3v4ANq45WVzAe6cC49VaCuHoRqhR9uycBgZKxvSK8fKV7wif",
  "key11": "31b4Dbkozeg72kwTAvHPvzQ8FYRM726xVGKppjM7SBpfe5YUQf95EizHRA8aSMNovA1Q4sBzd694qCWDt2ybK4hR",
  "key12": "5yKoHTd3mEVnJdir5u8hw4F3CBU9YEbp7n3Dom4ZjqsPNLhM2vb8DcAKFemWT747C96Jd5grvCq1x8dwpQToXCPU",
  "key13": "2XBBUi4WGbnCzTLLW2y2wiy2G5BLCaHrZT6EZTRYNziUdwwPrjPoB1PM7MCWzGMrCmjytQN9ezQpELfhEP1oRpNz",
  "key14": "3FsJyCAYxYaGadx7hyLz8ghz8k2JWDpP3cVrfqACkbcQKRBa1YhoQGQYGPFtHtMas7av3wY8FKoi6yRhUhSV51c7",
  "key15": "kR9Gymbe5YwDSSe5fYhso2fFXtyPgpEJaSka7R93DTvf6Xczm9jt9AdckBmWDPJHs6n6DW56EB818NLUzDANtLx",
  "key16": "5N9dZQfsMvtF5NJBLkA9ssURaog63BxQq3aGPSkbEiCdKaPdvUAYsYrwP1TvgYpwRyCNSXLRTnVsun1d2dD4CccU",
  "key17": "4Hp8CGPYZ68Vd1r5na46nEWij2LwSMqu2GXbXJQqyLniViWgnHk8WffTowdwZXJQfukZLD6mrCdLWoCLwDAYtCQH",
  "key18": "2jGbsx3AaLN1Ft1p38LtacqrUG5ktWSxsBpaqurQ37PCZWQRMuzJh53TZf8ZhpbRyec3vs75Ks6U9DQ9Uzv9qz6s",
  "key19": "FKZbfMySgjP9CKPuBeSP9FmELGsUeDbZ2zrV7xYgYYK2it6XdTpznWDZfkzqEK3noGQVGXstvpoZiS6buuCLvF4",
  "key20": "4Q3L1YTiMHeEkRfHmkUziMHRQ9zkSQSrkA3vobRh3xSKJSt5UraZ4GrpqSNSBvWqPV7Qsms7rs85zUDPKF5sYo2B",
  "key21": "AUizrtN4Gj5tABtxuXEbLWPKkGDpNF73Kc4EwCLLmYqMGDjnG7fScT7GUNLMyH2yGWVgFtabNUCbWN9JCYiWEYZ",
  "key22": "4iammTczmxWNrYS3KZWtBxALPuksMW6MZnWJzy626nwQL98zXg9JdDV5JukCSdCmjDdpYgbZDgZfANYYzcXkNwfs",
  "key23": "4zgxBBM1urfRLgiHJcfZBhpHiMHhBHicN9SuA4cXUJnuN3iMRYJ5n9ubjXGyLigULZBaZaYFTpFHhyp25nQiVHDn",
  "key24": "PEGTD9QVd179UyihfjJ9iqYAGN1PzgYmsaPvUKMACrDsFerwXfPnokUh8k1ACGq6gkUdBa4wjnyoz6kEHS2mbNR",
  "key25": "5wJsmd6WUdt3BEnFuB2zkA1rfKPtnenzejwXJZjU3LVkeKQT571vC5ddtPzQeuU8hvqKpzDZrqKQeLjM51XjDSfK",
  "key26": "bDL1i2Tnu2H4KsNjfwzrQxBPv3FQdMwY8DMoxpuYmrrkXjrf2RzJXz9qpcZt2748bu9R9KBvAjkqB7BuJt2pA93",
  "key27": "5kGRrSKDbSmh2q7jPveKtsjcovMBwLVKXerQsq4fUPwi9hWMckXAh9Cruu3W4m4iv13iPZju6qDba2AQLBBCJoUC",
  "key28": "sHXvWENUpVoYQ1NDwLVYckMnaSEL23UnRJCtgVzcQ6b76fffmpSLbmKhUNECgZ5fAfzvMdXqtcCJrYh52nyJSR4",
  "key29": "3b35bkvgCVj6hzf1eivpDaPLTqmD92SBtVXz5KSci8APB8gnx6B9PwRHWPgwYoh9d3gB6pBcvMTW2Y8LPRb3zjjA",
  "key30": "5S1QDzyQv5cjQuLQPNs7HgvjZDCY5Ei8maTsXm9U8YTiw6v2V51nkirbw1MqC5yG1H4RF6oxW34nfcvM7aBnwSmG",
  "key31": "SAbpBEE4yYeoEYBvHMHR64DFHA6M6fRhbNCvDuLJSXLQcQ39AyNc4WKgUeZeSpRA2UqkNaZtuPzzZg6E5gPiJu9",
  "key32": "2ZgkqL5nnmcAJgzHJyeUf411yc1NBE7iz8T1mH295kzyrmcmQa85f8Q6DF4JtrFFy55RZfGHJ52VbYGEL8bzi5DC",
  "key33": "2q69XNBWZejRs6u7pSKACfpXd33hTX8ouVXwFqrSVfNsnLRNvhjmHcpd8VFbuPZRFCthqAfp5VtcL3wwENZprYJR",
  "key34": "4TZjuhVs7VYKvYxxVRssuJE7Pn6rbfMo697CGT86hSXs9bW2rYHPJZhd5uiLdW7ym2EFscpqxw8eHSaxhSEKmiCk",
  "key35": "3vCFn14q5aKJR9J1fTa81xnXu77wcL2yaJsitpTDgoVPyQoXYMTnsAnFQLmG9GTiw4Car71BGtQAFSmth4iQhJx9",
  "key36": "2m7mPpQWJbGYjyUHvCgHS8tURMFA1Kdct6eUhMLZyT19Mfv9gW6VnW5YszYU4ttru1eCQCiWzkR2tnbKuFbubAxu",
  "key37": "4yzkQ2w4w6wjhfmhZ9W2AGqMaZHVet2P5ERKkABnikvwgBgTxP7aAKHAPUQUaytH3Tc2B3f2Urks7Z6mRdimeTXh",
  "key38": "5GkEo7widUbhJuEj4jS3NXYJ268RZ6YihYs2PxMsqFKkQhB1k3FTsn4jNPMbTC3nXJq6UvQt7P7X2388LGTNmoSr",
  "key39": "32Ew7hDc5jzjbt679mSf3oixZZcZKpDovK6XLbmWssc4rven6q6n4iHK7QCUrNFLwSComDyZkapxVzWFjTCLkrLd",
  "key40": "2oYkeXN7vLYfhxeqhosLy8dzRE6HyPokF4AKxpRB5BW2iXN2rsCtiddZbWaWRyozxBmRe9pYiMnaNJ7mtF5LCgwd",
  "key41": "29EzkoGBL3fxAF1WM7tEvv1Ti4DBNEoACsEdD2w9UNF65w6ea9u5BZ5iF5DoK53wMw9Q9YYAyfznyqfyHy7eNFT9",
  "key42": "2jcbiMRbPg9MobrxRUX6ZQuQDRHsa4YPzPQLFKGreRi3Svm6JcxMcBbFHnXUZqLkJqChSTBLLsN9x42ntGL789FK"
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
