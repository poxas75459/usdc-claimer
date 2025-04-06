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
    "5RM6aQvFTScPqyWvwfJquXv5ffwWkuEoynADCJWF1TENsomLV8V9wLgcyMnKMMsxP74hM4QhcpaVkSnsnz1Hfpbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dv39A3q8ubS3RTbRhnjZTpU8WQUbR16SKvnpWQpRDvNHdmegD29e8tF8CM2hpZKjVDZLrQZ9qTN3BmCTmojwdv5",
  "key1": "3zp6Mz2Hrj3bayuWq82TgQbKXK5dzBTP2XroiXakMX5YY4z2CehfwunuCN753KmWmdeVv8PsDiUnjiDk6fzzQc3J",
  "key2": "2N2gsaXKyfaWNxFDVYaq1sQeEEuqDaLtTjgbAkoW3T7sCks7CTEkg8Akrrjbg2BHg52uQeQ3gkwxBFbakP1Euy1v",
  "key3": "3UV5yGrNkKFssk9d1bzDC2dY2xXnUaw98jEZzCd8aqLsC9XCBqo9pYiJzvrzbezD4gDqFTbDZmihNXFtcYdXQKmQ",
  "key4": "5FRVaMvs6ApMn3sXAXo6Zxnjrpp2AxmtTqqoc5hGGerfeLZA1CP1i6AitPRGU5ZwbuNW9uQ77NcczyGLNwRC8cs1",
  "key5": "4TJiXJvotrsjvH9F2s3Y4ZAhUJPqCS7KuPnzY6KLpDotxUE2K5Pc6GD2poRziiCaePzKaYy5EnaCdVaT1oxudSTS",
  "key6": "5MQS1UFqD3fcgZ4jnkyD9gVoiFb4zKtPUDYi9svb7EhVtUxdpnVdene5MYdpqoPFqG58TdiQAZWBxvf5MQE5z43C",
  "key7": "2qwQFKPuPWBcECKbf86bXmNczw41GhdbuAWrpxtJkPjbY7YSzFw87FeNBXsxNf5sWGmYcyaP27Kfh2cCW87G5FYD",
  "key8": "3xqVm2q74Zi2tF9sBPvHCg7PNvm6mE1eAPVXTW8mm1tBJnb6ggKyMQgLhH3AWX8p7mzsYk7NJckxKpjZsfiiogzH",
  "key9": "3Ai3XhXdyfqbAR3eHmmuy4rzQpjq9abNNh1PX7mSmZwZbhaSxUqiUGqt5LigrXSPQv3Srx91fWrKai63YLh8ACDB",
  "key10": "4Z9Tfj7k7uG9aHehs61eVo1f1XciczwS152Zur5raJJojphZxU4nhHZo4nmSUiRyHNmBEuEqoNvAbsSiQJeVE1fL",
  "key11": "3LQut8WNZdwFNt5Ga5frZBscU2gefQMSrPAov7x6AhBUCgCD2ytKQaQm4do5K83zMDht7sozX61vo5YKbBtRFLHQ",
  "key12": "5LHMMWoaVw9SgTiaYou3CFke66ScYeeYYGmpsbgoqch4ztHZjF6p9nk2nxoJvsmawmqKiD9VYQDZY2dGePoesMSm",
  "key13": "2TSHHkwG8PfjYqfKTe24ojhcLPCWJU8kxN2eJXXSpVRvT3pW6xNTBqRh3DebtsMLUtNf7iixVeh5XEV6jt8nagNi",
  "key14": "EQ7aAcLfLPn5qmQXuZmVw43ZT8N55tTAUgmZFhs5tte58bKetPXNXtCeFBEjPnBpQPD73D4HNEkC4zebJXvvasc",
  "key15": "3nkg6e8RNFZ3W8C9Yv5R9mxPHw8474hkuRSiC2kNKJ6mguY6SJPqTFNmZLyk9AsJZZMbdMxJUsbamo8onfALNQFg",
  "key16": "3JpAtAMcVwL9rLmhfoWQ2opS5qnBENQRgN45tgSsA9WD6nMSGJHTRRwJsof8SfNTc5Qs24395VuJQpF2Y8UDwCsZ",
  "key17": "65jZEJPbyW3QY253wy3gn47pQytbC82B38P6roMSt5PM5shoYGoGS6nLP9aGhpR2C3RWHAP2nUxCWRft8TFFXXjc",
  "key18": "43wWphQN6jRxKXZdkgnWrb6WPBcAksWN4NhPBqcpFCN7N2kutZq62R1sW1La3j252rqmDMHQJi42BKqdbzwamPuM",
  "key19": "64JiutgvRRHvypw7dkthxVXodbY7FVFFKCL9xuNYhEMqbSvmsdawwmg96mQmeVEo57f8SUzak7Wvgkk4TFniHhfj",
  "key20": "3J9F3ZWHv8bEFf7PvaAEQ6oZTc4apk14W8rRDHoHRyGbD2BhnxCaNvRaxKXCvBH2rdz6UpKH9D7mzZqzU4T3QqXj",
  "key21": "4B5SDwDBY2rGJK49s8RRLEdujPXKLF7ZXh1ud4ouXqi5o1Y2hLDFUxyhXXseZZDQ2LK1DA7ifhCq55UKyBN6RxE6",
  "key22": "3g8vpxx6w1vzm5jH4urjVCcoKAXVeEJieiz2jXS6NFm7NCuDcEDvMp9pzrmdtuBXc9HEtPUz8uBEssTnKKV9KQ9X",
  "key23": "3KfyEdMHsvbC4ErBqJ7B1yRyDGpg9Qr9u3pQRZwm6JKZAcgcY5nHKG1zNLhNBwqpDuuV85sd8gfPs7347SXHYqdP",
  "key24": "35eW97Kn4ngz3uHbMiu4jG9rKnrdfsbHz2ZeqzyaXSnsHzwM5NrTmKFy3ZycB8AWbRnV6uE6MyTJ5T23x4EuiGyY",
  "key25": "2g5BUDrMZHJoeLRqYQUimGa2kJXyexxH4wNmWdfggx8wckp8FmMbzHB1gcPwbgv9m4NqEfKiAJPjfLweRAoAHjKL",
  "key26": "626GCxtMitqV24u1maKqg1BXw3BaVZnnvwaquiUnsgEJHE16HNCSgtpgdB3HAuvjU47X4Bi146G7BwhUHAdr7UoE",
  "key27": "4riVsmejbKRzATtDLfPX5acjm49TpVajq13vhbpdjS4zL5ByByV8fxev4JfHrusXScs9EzRkgUWVNgstp6GsAeNB",
  "key28": "dJ6Ee9rCXWJRa6DkUCiqihUM4oc4bUtRzqKiJ1VAz6rHf5ibo1GAtSGAPmibvytscAXPJrbGf9XHBixkjQxZedd",
  "key29": "2n1SVAzYpxhuUeGbt4Q5o8HMYEnH8j2E34fi2tq2UAj7DtjaYp6xzUNTipHe5vUJpmvDip6qnbqp7nHMCcqyzXuW",
  "key30": "58Hr9zparPYRCbxEnAg5qNreatuEoTa2gm5hj3vccH3qTW8wVTQoM658fJ3xfW4ioYwufamRubodWGqR6oH8bELP",
  "key31": "62E71rHhnjzEjLtoQkbCUkfpa3hcpNF34p9xmKT4dwfeNhA7a92bGkYKKpJC7J6qYAvSNhGQzfJaK8WzpSr12BHa",
  "key32": "3s83KamY3fpQNqxTDVTcHJ8sSuWSahFjcH1oVzBWHf5uYZfHpVkYwC7e88r2oDCdpBNMavchSP9n7LxcwdY67oho",
  "key33": "42iL5usztiWPnEp9z7ZpG2Dc4eVBH3rnvoT5QnehHP7p6fSKSaiZZ2hKQBM9Qtc83DfQcSFYTiPfxsXpi5RGZzfe",
  "key34": "5zr4vY4CXvNZnPsteWK2GazSXBNKcAMNZyiKMweRcvLsFBkUPAv1U73cfefzAP4RHKdq5eH2SYCUeKwGHAHGggRX",
  "key35": "zj45wjkotyX1wjxwXg1G4fPdGoBp9VYoiuio4vYFbRW9FcjFd9u2qqvzSNdJmMVh4gkvoSXciR7XcZh7XCyFzkT",
  "key36": "2WcPBUgnCCfminnYdWG4arDD9CUGD6QXf1tqPP8H4priWgJo6m6sTxzEeT5ckEYQHpG1opRVNNVtZNUGwdrWgcJJ"
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
